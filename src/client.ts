import { Client as BaseClient, ClientOptions as BaseClientOptions } from "discord.js"
import { getCommands } from "./commands"
import { Bind } from "./decorators"

export interface ClientOptions extends BaseClientOptions {
    prefix?: string
    cleanupAfter?: number | boolean
}

@Bind
export default class Client extends BaseClient {
    public readonly commands = getCommands()
    public readonly prefix: string
    private cleanupAfter: number

    constructor(options: ClientOptions) {
        super(options)
        const { prefix = "!", cleanupAfter = 5000 } = options
        this.prefix = prefix
        this.cleanupAfter = (typeof(cleanupAfter) === "number" ? (cleanupAfter) : (cleanupAfter ? 5000 : -1))

        this.on("ready", this.ready)
    }

    ready() {

    }
}