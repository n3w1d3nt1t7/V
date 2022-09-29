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
                { name: '@131st Fighter Wing', value: 'A10, F14, F15, F16' },
                { name: '@80th Special Operations Wing', value: 'SR-71, B-2, A-400, MD-11, P-8, MG9B' },
                { name: '@24th SAR Wing', value: 'UH-1, E-2, A-400' },
                { name: '@525th Multi Wing', value: 'A-10, F-14, F-15, F-16, SR-71, B-2, A-400, \nMD-11, P-8, MG9B, UH-1, E-2' },
                { name: '@177th UAV Surveillance Wing', value: 'MQ9B, SR-71' },
                { name: '@10th Command Wing', value: 'Any Aircraft Above, F22' },
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
