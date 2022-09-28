module.exports = {
    config: {
        name: 'speech',
        description: 'Displays the rules of the server',
        usage: `!speech`,
    },
    async run (bot,message,args) {
        message.channel.send("**Speech**\n> *Overview*\n> In channels that require the maintenance of professionalism, the following is required:\n> - Proficiency in English.\n> - Proper grammar and spelling.\n> - Usage of proper speech customs.\n> Violation of these can result in warnings and demotions.\n\n> *Speech Customs*\n> - Address lower ranked members by their rank.\n> - Address superiors with “Sir” or “Ma’am”.\n> - When asked about your well-being, you will always reply with “Outstanding”, despite your current situation.\n> - We go by Eastern Time. Morning: 0000-1159, Afternoon: 1200-1959, Night: 2000-2359.");
    }
}
