# Class: Client

## Hierarchy

- `Client`

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](../wiki/Client#constructor)

### Properties

- [application](../wiki/Client#application)
- [channels](../wiki/Client#channels)
- [cleanupAfter](../wiki/Client#cleanupafter)
- [commands](../wiki/Client#commands)
- [guilds](../wiki/Client#guilds)
- [options](../wiki/Client#options)
- [prefix](../wiki/Client#prefix)
- [readyTimestamp](../wiki/Client#readytimestamp)
- [rest](../wiki/Client#rest)
- [shard](../wiki/Client#shard)
- [sweepers](../wiki/Client#sweepers)
- [token](../wiki/Client#token)
- [user](../wiki/Client#user)
- [users](../wiki/Client#users)
- [voice](../wiki/Client#voice)
- [ws](../wiki/Client#ws)
- [captureRejectionSymbol](../wiki/Client#capturerejectionsymbol)
- [captureRejections](../wiki/Client#capturerejections)
- [defaultMaxListeners](../wiki/Client#defaultmaxlisteners)
- [errorMonitor](../wiki/Client#errormonitor)

### Accessors

- [\_censoredToken](../wiki/Client#_censoredtoken)
- [emojis](../wiki/Client#emojis)
- [readyAt](../wiki/Client#readyat)
- [uptime](../wiki/Client#uptime)

### Methods

- [addListener](../wiki/Client#addlistener)
- [destroy](../wiki/Client#destroy)
- [emit](../wiki/Client#emit)
- [eventNames](../wiki/Client#eventnames)
- [fetchGuildPreview](../wiki/Client#fetchguildpreview)
- [fetchGuildTemplate](../wiki/Client#fetchguildtemplate)
- [fetchGuildWidget](../wiki/Client#fetchguildwidget)
- [fetchInvite](../wiki/Client#fetchinvite)
- [fetchPremiumStickerPacks](../wiki/Client#fetchpremiumstickerpacks)
- [fetchSticker](../wiki/Client#fetchsticker)
- [fetchVoiceRegions](../wiki/Client#fetchvoiceregions)
- [fetchWebhook](../wiki/Client#fetchwebhook)
- [generateInvite](../wiki/Client#generateinvite)
- [getMaxListeners](../wiki/Client#getmaxlisteners)
- [isReady](../wiki/Client#isready)
- [listenerCount](../wiki/Client#listenercount)
- [listeners](../wiki/Client#listeners)
- [login](../wiki/Client#login)
- [message](../wiki/Client#message)
- [off](../wiki/Client#off)
- [on](../wiki/Client#on)
- [once](../wiki/Client#once)
- [prependListener](../wiki/Client#prependlistener)
- [prependOnceListener](../wiki/Client#prependoncelistener)
- [rawListeners](../wiki/Client#rawlisteners)
- [ready](../wiki/Client#ready)
- [removeAllListeners](../wiki/Client#removealllisteners)
- [removeListener](../wiki/Client#removelistener)
- [setMaxListeners](../wiki/Client#setmaxlisteners)
- [toJSON](../wiki/Client#tojson)
- [getEventListeners](../wiki/Client#geteventlisteners)
- [listenerCount](../wiki/Client#listenercount-1)
- [on](../wiki/Client#on-1)
- [once](../wiki/Client#once-1)
- [setMaxListeners](../wiki/Client#setmaxlisteners-1)

## Constructors

### constructor

• **new Client**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IClientOptions`](../wiki/IClientOptions) |

#### Overrides

BaseClient.constructor

#### Defined in

[src/client.ts:16](https://github.com/FFGFlash/ffg-discord-framework/blob/825e255/src/client.ts#L16)

## Properties

### application

• **application**: ``null`` \| `ClientApplication`

#### Inherited from

BaseClient.application

#### Defined in

node_modules/discord.js/typings/index.d.ts:899

___

### channels

• **channels**: `ChannelManager`

#### Inherited from

BaseClient.channels

#### Defined in

node_modules/discord.js/typings/index.d.ts:900

___

### cleanupAfter

• `Private` **cleanupAfter**: `number`

#### Defined in

[src/client.ts:14](https://github.com/FFGFlash/ffg-discord-framework/blob/825e255/src/client.ts#L14)

___

### commands

• `Readonly` **commands**: [`CommandStore`](../wiki/CommandStore)

#### Defined in

[src/client.ts:12](https://github.com/FFGFlash/ffg-discord-framework/blob/825e255/src/client.ts#L12)

___

### guilds

• **guilds**: `GuildManager`

#### Inherited from

BaseClient.guilds

#### Defined in

node_modules/discord.js/typings/index.d.ts:902

___

### options

• **options**: `Omit`<`ClientOptions`, ``"intents"``\> & { `intents`: `IntentsBitField`  }

#### Inherited from

BaseClient.options

#### Defined in

node_modules/discord.js/typings/index.d.ts:903

___

### prefix

• `Readonly` **prefix**: `string`

#### Defined in

[src/client.ts:13](https://github.com/FFGFlash/ffg-discord-framework/blob/825e255/src/client.ts#L13)

___

### readyTimestamp

• **readyTimestamp**: ``null`` \| `number`

#### Inherited from

BaseClient.readyTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:905

___

### rest

• **rest**: `REST`

#### Inherited from

BaseClient.rest

#### Defined in

node_modules/discord.js/typings/index.d.ts:476

___

### shard

• **shard**: ``null`` \| `ShardClientUtil`

#### Inherited from

BaseClient.shard

#### Defined in

node_modules/discord.js/typings/index.d.ts:907

___

### sweepers

• **sweepers**: `Sweepers`

#### Inherited from

BaseClient.sweepers

#### Defined in

node_modules/discord.js/typings/index.d.ts:906

___

### token

• **token**: ``null`` \| `string`

#### Inherited from

BaseClient.token

#### Defined in

node_modules/discord.js/typings/index.d.ts:908

___

### user

• **user**: ``null`` \| `ClientUser`

#### Inherited from

BaseClient.user

#### Defined in

node_modules/discord.js/typings/index.d.ts:910

___

### users

• **users**: `UserManager`

#### Inherited from

BaseClient.users

#### Defined in

node_modules/discord.js/typings/index.d.ts:911

___

### voice

• **voice**: `ClientVoiceManager`

#### Inherited from

BaseClient.voice

#### Defined in

node_modules/discord.js/typings/index.d.ts:912

___

### ws

• **ws**: `WebSocketManager`

#### Inherited from

BaseClient.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:913

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](../wiki/Client#capturerejectionsymbol)

#### Inherited from

BaseClient.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:328

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

BaseClient.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

BaseClient.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:334

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](../wiki/Client#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

BaseClient.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:327

## Accessors

### \_censoredToken

• `Private` `get` **_censoredToken**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

BaseClient.\_censoredToken

#### Defined in

node_modules/discord.js/typings/index.d.ts:897

___

### emojis

• `get` **emojis**(): `BaseGuildEmojiManager`

#### Returns

`BaseGuildEmojiManager`

#### Inherited from

BaseClient.emojis

#### Defined in

node_modules/discord.js/typings/index.d.ts:901

___

### readyAt

• `get` **readyAt**(): `If`<`Ready`, `Date`, ``null``\>

#### Returns

`If`<`Ready`, `Date`, ``null``\>

#### Inherited from

BaseClient.readyAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:904

___

### uptime

• `get` **uptime**(): `If`<`Ready`, `number`, ``null``\>

#### Returns

`If`<`Ready`, `number`, ``null``\>

#### Inherited from

BaseClient.uptime

#### Defined in

node_modules/discord.js/typings/index.d.ts:909

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Client`](../wiki/Client)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.addListener

#### Defined in

node_modules/@types/node/events.d.ts:354

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

BaseClient.destroy

#### Defined in

node_modules/discord.js/typings/index.d.ts:914

___

### emit

▸ **emit**<`K`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `ClientEvents`[`K`] |

#### Returns

`boolean`

#### Inherited from

BaseClient.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:940

▸ **emit**<`S`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `...args` | `unknown`[] |

#### Returns

`boolean`

#### Inherited from

BaseClient.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:941

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

BaseClient.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:669

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`): `Promise`<`GuildPreview`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`GuildPreview`\>

#### Inherited from

BaseClient.fetchGuildPreview

#### Defined in

node_modules/discord.js/typings/index.d.ts:915

___

### fetchGuildTemplate

▸ **fetchGuildTemplate**(`template`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

BaseClient.fetchGuildTemplate

#### Defined in

node_modules/discord.js/typings/index.d.ts:917

___

### fetchGuildWidget

▸ **fetchGuildWidget**(`guild`): `Promise`<`Widget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

BaseClient.fetchGuildWidget

#### Defined in

node_modules/discord.js/typings/index.d.ts:922

___

### fetchInvite

▸ **fetchInvite**(`invite`, `options?`): `Promise`<`Invite`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invite` | `string` |
| `options?` | `ClientFetchInviteOptions` |

#### Returns

`Promise`<`Invite`\>

#### Inherited from

BaseClient.fetchInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:916

___

### fetchPremiumStickerPacks

▸ **fetchPremiumStickerPacks**(): `Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Returns

`Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Inherited from

BaseClient.fetchPremiumStickerPacks

#### Defined in

node_modules/discord.js/typings/index.d.ts:920

___

### fetchSticker

▸ **fetchSticker**(`id`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

BaseClient.fetchSticker

#### Defined in

node_modules/discord.js/typings/index.d.ts:919

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): `Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Returns

`Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Inherited from

BaseClient.fetchVoiceRegions

#### Defined in

node_modules/discord.js/typings/index.d.ts:918

___

### fetchWebhook

▸ **fetchWebhook**(`id`, `token?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `token?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

BaseClient.fetchWebhook

#### Defined in

node_modules/discord.js/typings/index.d.ts:921

___

### generateInvite

▸ **generateInvite**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InviteGenerationOptions` |

#### Returns

`string`

#### Inherited from

BaseClient.generateInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:923

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../wiki/Client#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

BaseClient.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:526

___

### isReady

▸ **isReady**(): this is Client<true\>

#### Returns

this is Client<true\>

#### Inherited from

BaseClient.isReady

#### Defined in

node_modules/discord.js/typings/index.d.ts:925

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

BaseClient.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:616

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

BaseClient.listeners

#### Defined in

node_modules/@types/node/events.d.ts:539

___

### login

▸ **login**(`token?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

BaseClient.login

#### Defined in

node_modules/discord.js/typings/index.d.ts:924

___

### message

▸ `Private` **message**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`boolean`\> |

#### Returns

`void`

#### Defined in

[src/client.ts:30](https://github.com/FFGFlash/ffg-discord-framework/blob/825e255/src/client.ts#L30)

___

### off

▸ **off**<`K`\>(`event`, `listener`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:943

▸ **off**<`S`\>(`event`, `listener`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:944

___

### on

▸ **on**<`K`\>(`event`, `listener`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:928

▸ **on**<`S`\>(`event`, `listener`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:929

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:934

▸ **once**<`S`\>(`event`, `listener`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:935

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Client`](../wiki/Client)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:634

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Client`](../wiki/Client)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:650

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

BaseClient.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### ready

▸ `Private` **ready**(): `void`

#### Returns

`void`

#### Defined in

[src/client.ts:26](https://github.com/FFGFlash/ffg-discord-framework/blob/825e255/src/client.ts#L26)

___

### removeAllListeners

▸ **removeAllListeners**<`K`\>(`event?`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `K` |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:949

▸ **removeAllListeners**<`S`\>(`event?`): [`Client`](../wiki/Client)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Exclude`<`S`, keyof `ClientEvents`\> |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:950

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Client`](../wiki/Client)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:494

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Client`](../wiki/Client)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Client`](../wiki/Client)

#### Inherited from

BaseClient.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:520

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

BaseClient.toJSON

#### Defined in

node_modules/discord.js/typings/index.d.ts:926

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

BaseClient.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

BaseClient.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

BaseClient.on

#### Defined in

node_modules/@types/node/events.d.ts:254

▸ `Static` **on**<`E`, `K`\>(`eventEmitter`, `eventName`): `AsyncIterableIterator`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `__module` |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventEmitter` | `E` |
| `eventName` | `E` extends `Client`<`boolean`\> ? `K` : `string` |

#### Returns

`AsyncIterableIterator`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`\>

#### Inherited from

BaseClient.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:222

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

BaseClient.once

#### Defined in

node_modules/@types/node/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

BaseClient.once

#### Defined in

node_modules/@types/node/events.d.ts:195

▸ `Static` **once**<`E`, `K`\>(`eventEmitter`, `eventName`): `Promise`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `__module` |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventEmitter` | `E` |
| `eventName` | `E` extends `Client`<`boolean`\> ? `K` : `string` |

#### Returns

`Promise`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`[]\>

#### Inherited from

BaseClient.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:218

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

BaseClient.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:317
