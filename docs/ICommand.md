# Interface: ICommand

## Table of contents

### Properties

- [aliases](../wiki/ICommand#aliases)
- [arguments](../wiki/ICommand#arguments)
- [description](../wiki/ICommand#description)
- [guildOnly](../wiki/ICommand#guildonly)
- [name](../wiki/ICommand#name)
- [permissions](../wiki/ICommand#permissions)

### Methods

- [execute](../wiki/ICommand#execute)
- [initialize](../wiki/ICommand#initialize)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

#### Defined in

[src/commands.ts:25](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L25)

___

### arguments

• `Optional` **arguments**: [`IArgument`](../wiki/IArgument)[]

#### Defined in

[src/commands.ts:27](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L27)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/commands.ts:26](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L26)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

#### Defined in

[src/commands.ts:29](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L29)

___

### name

• **name**: `string`

#### Defined in

[src/commands.ts:24](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L24)

___

### permissions

• `Optional` **permissions**: `PermissionResolvable`

#### Defined in

[src/commands.ts:28](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L28)

## Methods

### execute

▸ **execute**(`message`, `...args`): `void` \| `Message`<`boolean`\> \| `Promise`<`void` \| `Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`boolean`\> |
| `...args` | `any`[] |

#### Returns

`void` \| `Message`<`boolean`\> \| `Promise`<`void` \| `Message`<`boolean`\>\>

#### Defined in

[src/commands.ts:31](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L31)

___

### initialize

▸ `Optional` **initialize**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](../wiki/Client) |

#### Returns

`void`

#### Defined in

[src/commands.ts:30](https://github.com/FFGFlash/ffg-discord-framework/blob/6bcfb53/src/commands.ts#L30)
