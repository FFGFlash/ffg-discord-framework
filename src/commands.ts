import type { Message, PermissionResolvable } from "discord.js"
import type Client from "./client"

function type(value: any) {
    if (typeof value === "function") {
        if (value.prototype) {
            if (Object.getOwnPropertyDescriptor(value, "prototype")?.writable) return "function"
            return "class"
        } else if (value.constructor.name === "AsyncFunction") return "asyncFunction"
        return "arrowFunction"
    }
    return typeof value
} 

export interface IArgument {
    name: string
    description?: string
    required?: boolean
    type?: string
    options?: Array<string>
}

export interface ICommand {
    name: string
    aliases?: Array<string>
    description?: string
    arguments?: Array<IArgument>
    permissions?: PermissionResolvable
    guildOnly?: boolean
    initialize?(client: Client): void
    execute(message: Message, ...args: Array<any>): Message | void | Promise<Message | void>
}

export type ICommandConstructor = { new(): ICommand }

export interface ICommandStore {
    commands: CommandStore
}

export class CommandStore extends Array<ICommand> {
    public has(nameOrAliasOrCommandOrCommandConstructor: string | ICommand | ICommandConstructor) {
        return this.get(nameOrAliasOrCommandOrCommandConstructor) && true || false
    }

    public remove(nameOrAliasOrCommandOrCommandClass: string | ICommand | ICommandConstructor) {
        const command = this.get(nameOrAliasOrCommandOrCommandClass)
        if (!command) return null
        return this.splice(this.indexOf(command), 1).shift()!
    }

    public get(nameOrAliasOrCommandOrCommandClass: string | ICommand | ICommandConstructor) {
        if (typeof nameOrAliasOrCommandOrCommandClass === 'string') {
            return this.find(c => (
                c.name === nameOrAliasOrCommandOrCommandClass ||
                c.aliases?.indexOf(nameOrAliasOrCommandOrCommandClass) !== -1
            )) || null
        }

        let command: ICommand
        if (type(nameOrAliasOrCommandOrCommandClass) === "class") command = new (nameOrAliasOrCommandOrCommandClass as ICommandConstructor)()
        else command = nameOrAliasOrCommandOrCommandClass as ICommand

        return this.find(c => (
            c === command
        )) || null
    }

    public add(commandOrCommandClass: ICommand | ICommandConstructor) {
        let command: ICommand
        if (type(commandOrCommandClass) === "class") command = new (commandOrCommandClass as ICommandConstructor)()
        else command = commandOrCommandClass as ICommand
        
        if (this.has(command)) throw new Error(`Command ${command.name} already exists`)
        this.push(command)
        return command
    }

    public page(page: number, count: number) {
        let start = page * count
        return this.slice(start, start + count)
    }
}

export function getCommands() {
    const store = (global as never) as ICommandStore
    if (!store.commands) store.commands = new CommandStore()
    return store.commands
}