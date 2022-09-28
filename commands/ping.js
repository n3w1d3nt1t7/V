module.exports = {
    config: {
        name: 'ping',
        description: 'Get ping of the bot',
        usage: `!ping`,
    },
    async run (bot,message,args) {
        message.channel.send("Pong! \`" + bot.ws.ping + " ms\`");
    }
}
