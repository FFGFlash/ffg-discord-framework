import { CommandConstructor, getCommands } from "../commands";

/**
 * Command Decorator Function
 * @param commandConstructor - The class to decorate
 */
export default function Command(commandConstructor: CommandConstructor) {
    getCommands().add(new commandConstructor())
}