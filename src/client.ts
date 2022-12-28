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
        this.on("message", this.message)
    }

    private ready() {
        console.log(`Logged in as ${this.user?.tag}`)
    }

    private message(message: Message) {
        // TODO: Handle Command
    }
}

export default Client