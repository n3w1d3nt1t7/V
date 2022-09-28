module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        //Log the newly joined member to console
        console.log('User ' + member.user.tag + ' has joined the server!');

        //Find a channel named welcome and send a Welcome message
        member.guild.channels.cache.find(c => c.name === "a-arrivals").send('Welcome '+ member.user.username + '. Head to #public to chat with anyone in the server. If you have any questions, ping Command.');
    }
}