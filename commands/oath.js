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
            .setDescription('“I [name], Do solemnly swear (or affirm) that I will support and defend the United States against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same; and that I will obey the orders of the General of the United States Air Force and the orders of the officers appointed over me, according to regulations and the Uniform Code of Military Justice. So help me God.”')

        message.channel.send( {embeds: [oathEmbed]} );
        
        //message.channel.send("**Rules**\n> 1. No NSFW.\n> 2. Be mindful of what channel you are talking in. Respect chat perms and purposes.\n> 3. No spam.\n> 4. Respect your superiors. Address them properly.\n> 5. Do not complain about rank or placement.\n> 6. Maintain decent activity.\n> 7. Represent this force with maturity and professionalism.\n> 8. No insubordination.\n> 9. No leaking.\n> 10. Zero tolerance of discrimination or racism.");
    }
}
