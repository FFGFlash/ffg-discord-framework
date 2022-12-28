import { Client as BaseClient, ClientOptions as BaseClientOptions, Message } from "discord.js"
import { getCommands } from "./commands"
import { Bind } from "./decorators"

export interface IClientOptions extends BaseClientOptions {
    prefix?: string
    cleanupAfter?: number | boolean
}

@Bind
export class Client extends BaseClient {
    public readonly commands = getCommands()
    public readonly prefix: string
    private cleanupAfter: number

    constructor(options: IClientOptions) {
        super(options)
        const { prefix = "!", cleanupAfter = 5000 } = options
        this.prefix = prefix
        this.cleanupAfter = (typeof(cleanupAfter) === "number" ? (cleanupAfter) : (cleanupAfter ? 5000 : -1))

        this.on("ready", this.ready)
        this.on("messageCreate", this.message)
    }

    private ready() {
        console.log(`Logged in as ${this.user?.tag}`)
    }

    private async message(message: Message) {
        if (
            message.author.bot ||
            !message.content.startsWith(this.prefix)
        ) return
        const args = message.content.slice(this.prefix.length).trim().split(' ')
        const nameOrAlias = args.shift()!.toLowerCase()
        if (!nameOrAlias || !this.commands.has(nameOrAlias)) return
        const command = this.commands.get(nameOrAlias)!
        if (
            command.guildOnly && !message.guild ||
            command.permissions && message.member && !message.member.permissions.has(command.permissions)
        ) return
        const response = await command.execute(message, ...args)
        if (!response || this.cleanupAfter < 0) return
        setTimeout(() => response.delete(), this.cleanupAfter)
    }
}

export default Client