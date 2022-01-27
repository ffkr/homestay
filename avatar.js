 if(command === "avatar") {
  
 let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
       let avatar = member.displayAvatarURL({ size: 1024, dynamic: true });

       const embed = new Discord.MessageEmbed()
        .setAuthor(avatar, message.username)
        .setTitle(`Avatar`)
        .setImage(avatar)
        .setColor("BLACK")
        .setAuthor(member.username, avatar, avatar);
        message.channel.send(embed);
    
}


// asli

const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'avatar',
    aliases: ['av'],
    cooldown: 5,
    async execute(message, args) {
       let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
       let avatar = member.displayAvatarURL({ size: 1024, dynamic: true });

       const embed = new Discord.MessageEmbed()
        .setAuthor(avatar, message.username)
        .setTitle(`Avatar`)
        .setImage(avatar)
        .setColor("BLACK")
        .setAuthor(member.username, avatar, avatar);
        message.channel.send(embed);
    },
};
