const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'speech',
        description: 'Displays the speech customs of the server',
        usage: `!speech`,
    },
    
    async run (bot,message,args) {
        const speechEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Speech')
            .addFields(
                { name: 'Overview', value: 'In channels that require the maintenance of professionalism, the following is required:\n- Proficiency in English.\n- Proper grammar and spelling.\n- Usage of proper speech customs.\nViolation of these can result in warnings and demotions.' },
                { name: 'Speech Customs', value: '- Address lower ranked members by their rank.\n- Address superiors with “Sir” or “Ma’am”.\n- When asked about your well-being, you will always reply with “Outstanding”, despite your current situation.\n- We go by Eastern Time. Morning: 0000-1159, Afternoon: 1200-1959, Night: 2000-2359.' },
            )

        message.channel.send( {embeds: [speechEmbed]} );
    }
}

/*
        const speechEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Speech')
            .setDescription('Some description here')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            */
