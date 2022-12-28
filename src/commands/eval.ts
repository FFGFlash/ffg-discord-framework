import { Message } from "discord.js";
import { getCommands } from "../commands";
import { Command } from "../decorators";

@Command
export class Eval {
    name = "eval"

    execute(message: Message) {

    }
}

export default getCommands().get(Eval)