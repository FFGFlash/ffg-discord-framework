import { EmbedBuilder } from "@discordjs/builders"
import type { Message } from "discord.js"
import Client from "../client"
import { getCommands, ICommand } from "../commands"
import { Command } from "../decorators"

@Command
export class Help {
    name = "help"
    aliases = [ "h", "commands", "c", "?" ]
    description = "Displays all available commands"
    arguments = [
        { name: "command", type: "string", description: "Command or alias to get help for", required: false },
    ]

    private commandsPerPage: number = 25
    private client!: Client
    private color: [number, number, number] = [255, 255, 255]

    initialize(client: Client) {
        this.client = client
    }

    parseArgs(command: ICommand) {
        return command.arguments?.map(arg => arg.required ? (`<${arg.type?.charAt(0) || "a"}:${arg.name}>`) : (`[${arg.type?.charAt(0) || "a"}:${arg.name}]`)).join(" ") || ""
    }

    list(message: Message, page: number = 0) {
        const { author } = message
        const commands = getCommands()
        const pages = Math.ceil(commands.length / this.commandsPerPage)

        const embed = new EmbedBuilder({
            title: "Commands",
            description: `Page [${page + 1} / ${pages}]`
        }).setColor(this.color)

        const updateMessage = (message: Message) => {
            embed.setDescription(`Page [${page + 1} / ${pages}]`).setFields()
            commands.page(page, this.commandsPerPage).forEach(command => (
                embed.addFields({
                    name: `${this.client.prefix}${command.name} ${this.parseArgs(command)}`,
                    value: command.description || "No Description Available",
                    inline: true
                })
            ))
            message.edit({
                embeds: [ embed ]
            }).then(_ => (
                page > 0 ? message.react('⬅️') : message.reactions.cache.get('⬅️')?.remove()
            )).then(_ => (
                page < pages - 1 ? message.react('➡️') : message.reactions.cache.get('➡️')?.remove()
            )).then(_ => (
                listenMessage(message)
            ))
        }

        const listenMessage = (message: Message) => {
            let timeout = true
            let collector = message.createReactionCollector({
                filter: (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name as string) && user.id === author.id,
                time: 15000
            })

            collector.on('collect', reaction => {
                timeout = false
                page = (reaction.emoji.name === '⬅️' ? (page - 1 + pages) : (page + 1)) % pages
                updateMessage(message)
                collector.stop()
            })

            collector.on('end', () => (
                timeout && message.reactions.removeAll()
            ))
        }

        message.channel.send({ embeds: [ embed ] }).then(updateMessage)
    }

    command(message: Message, command: ICommand) {
        let embed = new EmbedBuilder({
            title: `${this.client.prefix}${command.name} ${this.parseArgs(command)}`,
            description: command.description || "No Description Available"
        }).setColor(this.color).addFields(
            { name: "Aliases", value: command.aliases ? (
                command.aliases.map(alias => `${this.client.prefix}${alias}`).join(", ")
            ) : "No Aliases Available" },
            { name: "Arguments", value: command.arguments ? (
                command.arguments.map(arg => `**${arg.required ? `<${arg.type?.charAt(0) || "a"}:${arg.name}>` : `[${arg.type?.charAt(0) || "a"}:${arg.name}]`}** - ${arg.description || "No Description Available"}`).join("\n")
            ) : "No Arguments Available" }
        )
        message.channel.send({ embeds: [ embed ] })
    }

    execute(message: Message, nameOrAliasOrPage?: string | number) {
        if (typeof nameOrAliasOrPage === "string") {
            return getCommands().has(nameOrAliasOrPage) ? this.command(message, getCommands().get(nameOrAliasOrPage)!) : this.list(message)
        }
        return this.list(message, nameOrAliasOrPage)
    }

    setColor(red: number, green: number, blue: number) {
        this.color = [red, green, blue]
        return this
    }
}

export default getCommands().get(Help)