const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'aircraft-names',
        description: 'Displays the aircraft names the USAF uses for each wing.',
        usage: `!aircraft-names`,
    },
    
    async run (bot,message,args) {
        const aircraftEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Aircraft Used')
            .addFields(
                { name: 'null', value: 'null' },
            )

        message.channel.send( {embeds: [aircraftEmbed]} );
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
