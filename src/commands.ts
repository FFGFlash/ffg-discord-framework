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

export type CommandConstructor = { new(): ICommand }

export interface ICommandStore {
    commands: CommandStore
}

/**
 * Used to store a list of commands for the client to evaluate
 */
export class CommandStore extends Array<ICommand> {
    /**
     * Checks if the command store has a certain command by the given name, alias, command instance or class
     * @param nameOrAliasOrCommandOrCommandConstructor - Either a string, command instance or class
     * @returns Whether or not the command is inside the command store
     */
    public has(nameOrAliasOrCommandOrCommandConstructor: string | ICommand | CommandConstructor) {
        return this.get(nameOrAliasOrCommandOrCommandConstructor) && true || false
    }

    /**
     * Removes a command from the command store by the given name, alias, command instance or class
     * @param nameOrAliasOrCommandOrCommandClass - Either a string, command instance or class
     * @returns Either null or the command removed from the command store
     */
    public remove(nameOrAliasOrCommandOrCommandClass: string | ICommand | CommandConstructor) {
        const command = this.get(nameOrAliasOrCommandOrCommandClass)
        if (!command) return null
        return this.splice(this.indexOf(command), 1).shift()!
    }

    /**
     * Get a command by name, alias, command instance or class from the command store
     * @param nameOrAliasOrCommandOrCommandClass - Either a string, command instance or class
     * @returns Either null or the command instance inside the command store
     */
    public get(nameOrAliasOrCommandOrCommandClass: string | ICommand | CommandConstructor) {
        if (typeof nameOrAliasOrCommandOrCommandClass === 'string') {
            return this.find(c => (
                c.name === nameOrAliasOrCommandOrCommandClass ||
                c.aliases?.indexOf(nameOrAliasOrCommandOrCommandClass) !== -1
            )) || null
        }

        let command: ICommand
        if (type(nameOrAliasOrCommandOrCommandClass) === "class") command = new (nameOrAliasOrCommandOrCommandClass as CommandConstructor)()
        else command = nameOrAliasOrCommandOrCommandClass as ICommand

        return this.find(c => (
            c === command
        )) || null
    }

    /**
     * Used to add commands to the command store
     * @param commandOrCommandClass - Either a command instance or class
     * @returns The newly added command
     */
    public add(commandOrCommandClass: ICommand | CommandConstructor) {
        let command: ICommand
        if (type(commandOrCommandClass) === "class") command = new (commandOrCommandClass as CommandConstructor)()
        else command = commandOrCommandClass as ICommand
        
        if (this.has(command)) throw new Error(`Command ${command.name} already exists`)
        this.push(command)
        return command
    }

    /**
     * Used to get a list of commands of a specified size and location
     * @param page - The page number to return
     * @param count - The number of commands to return per page
     * @returns List of commands
     */
    public page(page: number, count: number) {
        let start = page * count
        return this.slice(start, start + count)
    }
}

/**
 * Function used to get the global command store
 * @returns The global command store
 */
export function getCommands() {
    const store = (global as never) as ICommandStore
    if (!store.commands) store.commands = new CommandStore()
    return store.commands
}