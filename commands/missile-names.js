const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'missile-names',
        description: 'Displays the missile-names the USAF uses.',
        usage: `!missile-names`,
    },
    
    async run (bot,message,args) {
        const missilesEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Missile Names')
            .addFields(
                { name: 'FOX 1 - *Semi-Active Radar Guided Missile*', value: 'AIM-7 Sparrow\nAIM-9C Sidewinder' },
                { name: 'FOX 2 - *Infrared Guided Missile*', value: 'AIM-9 Sidewinder\nAIM-92 Stinger\nAIM-132 ASRAAM' },
                { name: 'FOX 3 - *Active Radar Guided Missile*', value: 'AIM-120 AMRAAM' },
            )

        message.channel.send( {embeds: [missilesEmbed]} );
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
