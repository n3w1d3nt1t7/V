const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'oath',
        description: 'Displays the oath of the USAF',
        usage: `!oath`,
    },
    async run (bot,message,args) {
        const oathEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Oath')
            .setDescription('“I [name], Do solemnly swear (or affirm) that I will support and defend the United States against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same; and that I will obey the orders of the General of the Unite”')

        message.channel.send( {embeds: [oathEmbed]} );
}
