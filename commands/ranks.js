const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'ranks',
        description: 'Displays the ranks of the server',
        usage: `!ranks`,
    },
    
    async run (bot,message,args) {
        const ranksEmbed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Ranks')
            .addFields(
                { name: 'Officers', value: '@O-11 General of the Air Force:O10Gen:\n@O-10 General :O10Gen:\n@O-9 Lieutenant General :O9LtGen:\n@O-8 Major General :O8MajGen:\n@O-7 Brigadier General :O7BrigGen:\n@O-6 Colonel :O6Col:\n@O-5 Lieutenant Colonel :O5LtCol:\n@O-4 Major :O4Maj:\n@O-3 Captain :O3Capt:\n@O-2 First Lieutenant :O21stLt:\n@O-1 Second Lieutenant :O12dLt:' },
                { name: 'Enlisted', value: '@E-9 Chief Master Sergeant :E9CMSgt:\n@E-8 Senior Master Sergeant :E8SMSgt:\n@E-7 Master Sergeant :E7MSgt:\n@E-6 Technical Sergeant :E6TSgt:\n@E-5 Staff Sergeant :E5SSgt:\n@E-4 Senior Airman :E4SAmn:\n@E-3 Airman First Class :E3A1C:\n@E-2 Airman :E2Amn:\n@E-1 Airman Basic' },
            )

        message.channel.send( {embeds: [ranksEmbed]} );
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
