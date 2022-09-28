module.exports = {
    config: {
        name: 'rules',
        description: 'Displays the rules of the server',
        usage: `!rules`,
    },
    async run (bot,message,args) {
        message.channel.send("**Rules**\n>1. No NSFW.\n2. Be mindful of what channel you are talking in. Respect chat perms and purposes.\n3. No spam.\n4. Respect your superiors. Address them properly.\n5. Do not complain about rank or placement.\n6. Maintain decent activity.\n7. Represent this force with maturity and professionalism.\n8. No insubordination.\n9. No leaking.\n10. Zero tolerance of discrimination or racism.");
    }
}
