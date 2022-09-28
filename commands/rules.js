module.exports = {
    config: {
        name: 'rules',
        description: 'Displays the rules of the server',
        usage: `!rules`,
    },
    async run (bot,message,args) {
        message.channel.send("**Rules**\n> 1. No NSFW.\n> 2. Be mindful of what channel you are talking in. Respect chat perms and purposes.\n> 3. No spam.\n> 4. Respect your superiors. Address them properly.\n> 5. Do not complain about rank or placement.\n> 6. Maintain decent activity.\n> 7. Represent this force with maturity and professionalism.\n> 8. No insubordination.\n> 9. No leaking.\n> 10. Zero tolerance of discrimination or racism.");
    }
}
