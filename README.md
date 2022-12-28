# ffg-discord-framework
### Powered by [Discord.JS](https://discord.js.org)
#### Authors
- FFGFlash

## Table of Contents
- [Installing](#-installing)
- [Examples](#-examples)
    - [Client](#-client)
    - [Command](#-command)

## <small>[<](#table-of-contents)</small> Installing
```bat
> npm install --save ffg-discord-framework
```

## <small>[<](#table-of-contents)</small> Examples
#### <small>[<](#table-of-contents)</small> Client
```js
const Client = require('ffg-discord-framework')

const client = new Client({ 
    intents: [ 'MessageContent', 'GuildMessages', 'DirectMessages' ],
    prefix: '!', // The prefix used to identify commands
    cleanupAfter: 5000 // How long to wait before deleting message responses
})

client.login('bot-token')
```

#### <small>[<](#table-of-contents)</small> Command
```js
const { Command } = require('ffg-discord-framework')

@Command
class Ping {
    constructor() {
        this.name = 'ping' // all lowercase name of the command
        this.description = 'A simple test command' // description of the command
        this.arguments = [] // argument list
        this.aliases = [ 'p' ] // alternative names for identifying the command
        this.permissions = 'Administrator' // permissions required to execute the command
        this.guildOnly = false // whether this command can only be used inside of a guild
    }

    /**
     * Function used to pass the client to the command
     * 
     * @param {Client} client - The bot client
     */
    initialize(client) {
        this.client = client
    }

    /**
     * Execute function which can either return undefined, message or a Promise,
     * if returned with a message or a Promise that resolves to a message
     * it'll cleanup the message after a specified amount of time
     * 
     * @param {Message} message - Discord Message Object
     * @param {...} args - List of arguments
     * @returns {undefined | Message | Promise<undefined | Message>} The response made by the command to cleanup after the specified amount of time
     */
    execute(message, ...args) {
        console.log('Client:', this.client)
        console.log('Arguments:', args.join(' '))
        return message.reply('Pong!')
    }
}
```