# Interface: IClientOptions

## Hierarchy

- `ClientOptions`

  ↳ **`IClientOptions`**

## Table of contents

### Properties

- [allowedMentions](../wiki/IClientOptions#allowedmentions)
- [cleanupAfter](../wiki/IClientOptions#cleanupafter)
- [closeTimeout](../wiki/IClientOptions#closetimeout)
- [failIfNotExists](../wiki/IClientOptions#failifnotexists)
- [intents](../wiki/IClientOptions#intents)
- [jsonTransformer](../wiki/IClientOptions#jsontransformer)
- [makeCache](../wiki/IClientOptions#makecache)
- [partials](../wiki/IClientOptions#partials)
- [prefix](../wiki/IClientOptions#prefix)
- [presence](../wiki/IClientOptions#presence)
- [rest](../wiki/IClientOptions#rest)
- [shardCount](../wiki/IClientOptions#shardcount)
- [shards](../wiki/IClientOptions#shards)
- [sweepers](../wiki/IClientOptions#sweepers)
- [waitGuildTimeout](../wiki/IClientOptions#waitguildtimeout)
- [ws](../wiki/IClientOptions#ws)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: `MessageMentionOptions`

#### Inherited from

BaseClientOptions.allowedMentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:4716

___

### cleanupAfter

• `Optional` **cleanupAfter**: `number` \| `boolean`

#### Defined in

[src/client.ts:7](https://github.com/FFGFlash/ffg-discord-framework/blob/fb86e02/src/client.ts#L7)

___

### closeTimeout

• `Optional` **closeTimeout**: `number`

#### Inherited from

BaseClientOptions.closeTimeout

#### Defined in

node_modules/discord.js/typings/index.d.ts:4714

___

### failIfNotExists

• `Optional` **failIfNotExists**: `boolean`

#### Inherited from

BaseClientOptions.failIfNotExists

#### Defined in

node_modules/discord.js/typings/index.d.ts:4718

___

### intents

• **intents**: `BitFieldResolvable`<``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojisAndStickers"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"`` \| ``"MessageContent"`` \| ``"GuildScheduledEvents"`` \| ``"AutoModerationConfiguration"`` \| ``"AutoModerationExecution"``, `number`\>

#### Inherited from

BaseClientOptions.intents

#### Defined in

node_modules/discord.js/typings/index.d.ts:4720

___

### jsonTransformer

• `Optional` **jsonTransformer**: (`obj`: `unknown`) => `unknown`

#### Type declaration

▸ (`obj`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

##### Returns

`unknown`

#### Inherited from

BaseClientOptions.jsonTransformer

#### Defined in

node_modules/discord.js/typings/index.d.ts:4725

___

### makeCache

• `Optional` **makeCache**: `CacheFactory`

#### Inherited from

BaseClientOptions.makeCache

#### Defined in

node_modules/discord.js/typings/index.d.ts:4715

___

### partials

• `Optional` **partials**: `Partials`[]

#### Inherited from

BaseClientOptions.partials

#### Defined in

node_modules/discord.js/typings/index.d.ts:4717

___

### prefix

• `Optional` **prefix**: `string`

#### Defined in

[src/client.ts:6](https://github.com/FFGFlash/ffg-discord-framework/blob/fb86e02/src/client.ts#L6)

___

### presence

• `Optional` **presence**: `PresenceData`

#### Inherited from

BaseClientOptions.presence

#### Defined in

node_modules/discord.js/typings/index.d.ts:4719

___

### rest

• `Optional` **rest**: `Partial`<`RESTOptions`\>

#### Inherited from

BaseClientOptions.rest

#### Defined in

node_modules/discord.js/typings/index.d.ts:4724

___

### shardCount

• `Optional` **shardCount**: `number`

#### Inherited from

BaseClientOptions.shardCount

#### Defined in

node_modules/discord.js/typings/index.d.ts:4713

___

### shards

• `Optional` **shards**: `number` \| `number`[] \| ``"auto"``

#### Inherited from

BaseClientOptions.shards

#### Defined in

node_modules/discord.js/typings/index.d.ts:4712

___

### sweepers

• `Optional` **sweepers**: `SweeperOptions`

#### Inherited from

BaseClientOptions.sweepers

#### Defined in

node_modules/discord.js/typings/index.d.ts:4722

___

### waitGuildTimeout

• `Optional` **waitGuildTimeout**: `number`

#### Inherited from

BaseClientOptions.waitGuildTimeout

#### Defined in

node_modules/discord.js/typings/index.d.ts:4721

___

### ws

• `Optional` **ws**: `WebSocketOptions`

#### Inherited from

BaseClientOptions.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:4723
