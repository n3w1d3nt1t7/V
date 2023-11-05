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
