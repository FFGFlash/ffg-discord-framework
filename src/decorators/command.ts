import { ICommandConstructor, getCommands } from "../commands";

export default function Command(commandConstructor: ICommandConstructor) {
    getCommands().add(new commandConstructor())
}