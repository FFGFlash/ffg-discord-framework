const { getPrototypeOf, defineProperty, getOwnPropertySymbols, getOwnPropertyNames, getOwnPropertyDescriptors } = Object

let mapStore: WeakMap<Object, WeakMap<Function, any>>

const getOwnKeys = getOwnPropertySymbols ? (
    (object: any) => getOwnPropertyNames(object).concat((getOwnPropertySymbols(object) as unknown) as string[])
) : getOwnPropertyNames

function bind(fn: Function, context: any) {
    if (fn.bind) return fn.bind(context)
    return (...args: Array<any>) => fn.apply(context, args)
}

function getBoundSuper(obj: Object, fn: Function) {
    if (typeof WeakMap === 'undefined') throw new Error(`Using @bind on ${fn.name}() requires WeakMap support due to its use of super.${fn.name}()`)
    if (!mapStore) mapStore = new WeakMap()
    if (!mapStore.has(obj)) mapStore.set(obj, new WeakMap())
    const superStore = mapStore.get(obj)!
    if (!superStore.has(fn)) superStore.set(fn, bind(fn, obj))
    return superStore.get(fn)!
}

function bindClass(_class: any) {
    const descriptors = getOwnPropertyDescriptors(_class.prototype)
    const keys = getOwnKeys(descriptors)
    for (const key of keys) {
        const descriptor = descriptors[key]
        if (typeof descriptor.value !== 'function' || key === 'constructor') continue
        defineProperty(_class.prototype, key, bindMethod(_class.prototype, key, descriptor))
    }
}

function bindMethod(target: any, key: string, { value: fn, configurable, enumerable }: PropertyDescriptor): PropertyDescriptor {
    if (typeof fn !== 'function') throw new SyntaxError(`@bind can only be used on functions, not: ${fn}`)
    const { constructor } = target
    
    return {
        configurable,
        enumerable,
        get() {
            if (
                this === target ||
                this.constructor !== constructor && getPrototypeOf(this).constructor === constructor
            ) return fn as Function

            if (
                this.constructor !== constructor && key in this.constructor.prototype
            ) return getBoundSuper(this, fn)

            const boundFn = bind(fn, this) as Function

            defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: false,
                value: boundFn
            })

            return boundFn
        }
    }
}

export default function handler(...args: [any?, string?, PropertyDescriptor?]): void | any {
    if (args.length === 0) return handler
    if (args.length === 1) return bindClass(...(args as [any]))
    return bindMethod(...(args as [any, string, PropertyDescriptor]))
}