# ffg-discord-framework

## Table of contents

### References

- [default](../wiki/Exports#default)

### Classes

- [Client](../wiki/Client)
- [CommandStore](../wiki/CommandStore)

### Interfaces

- [IArgument](../wiki/IArgument)
- [IClientOptions](../wiki/IClientOptions)
- [ICommand](../wiki/ICommand)
- [ICommandStore](../wiki/ICommandStore)

### Type Aliases

- [CommandConstructor](../wiki/Exports#commandconstructor)

### Functions

- [Command](../wiki/Exports#command)
- [getCommands](../wiki/Exports#getcommands)

## References

### default

Renames and re-exports [Client](../wiki/Client)

## Type Aliases

### CommandConstructor

Ƭ **CommandConstructor**: () => [`ICommand`](../wiki/ICommand)

#### Type declaration

• **new CommandConstructor**(): [`ICommand`](../wiki/ICommand)

##### Returns

[`ICommand`](../wiki/ICommand)

#### Defined in

[src/commands.ts:34](https://github.com/FFGFlash/ffg-discord-framework/blob/fb86e02/src/commands.ts#L34)

## Functions

### Command

▸ **Command**(`commandConstructor`): `void`

Command Decorator Function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandConstructor` | [`CommandConstructor`](../wiki/Exports#commandconstructor) | The class to decorate |

#### Returns

`void`

#### Defined in

[src/decorators/command.ts:7](https://github.com/FFGFlash/ffg-discord-framework/blob/fb86e02/src/decorators/command.ts#L7)

___

### getCommands

▸ **getCommands**(): [`CommandStore`](../wiki/CommandStore)

Function used to get the global command store

#### Returns

[`CommandStore`](../wiki/CommandStore)

The global command store

#### Defined in

[src/commands.ts:117](https://github.com/FFGFlash/ffg-discord-framework/blob/fb86e02/src/commands.ts#L117)
