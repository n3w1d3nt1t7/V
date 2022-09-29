const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'written-test',
        description: 'Displays the written test of the server',
        usage: `!written-test`,
    },
    async run (bot,message,args) {
        const wtestEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Written Test')
            .setDescription("There is a written test available to be taken. This test covers most of everything you'd ever need to know about being in the USAF. Most of this comes from the UN's MRP rules and things you would learn under out training program here.\n\nAdditionally, your score will only be used if you have the @Test Pending  role. IF you take this test without the role, it won't count and may delay when you actually get role.\n\nIf you have the role, you can take it now, or wait to be trained more. Once you take it, you won't have the role for a while. If you DON'T have the role and you want it so you can take it, ask me for it in my office or from another HC.\n\nPlease do not cheat as it will only set you up for failure (if you are not a new member, you can opt to skip the background info section at the beginning of the exam). The link is in the title of this text box.")
            .setURL("https://forms.gle/tLHV5hQ6nb3mAZTk7")

        message.channel.send( {embeds: [wtestEmbed]} );
        
        //message.channel.send("**Rules**\n> 1. No NSFW.\n> 2. Be mindful of what channel you are talking in. Respect chat perms and purposes.\n> 3. No spam.\n> 4. Respect your superiors. Address them properly.\n> 5. Do not complain about rank or placement.\n> 6. Maintain decent activity.\n> 7. Represent this force with maturity and professionalism.\n> 8. No insubordination.\n> 9. No leaking.\n> 10. Zero tolerance of discrimination or racism.");
    }
}
