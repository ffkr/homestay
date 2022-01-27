
require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)


const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");
const config = require("./config.json");

client.on("ready", () => {
  console.log(`bot siap digunakan`);
});

client.on("ready", async => {
console.log(client.user.username, `Ready`)
  let statuss = [`Hi guys!`, `&play`, `Annyeong`, `Voice yuk...!`]

  setInterval(function() {
    let status = statuss[Math.floor(Math.random() * statuss.length)]; 
    client.user.setActivity(status, {
      type: "STREAMING",
      url: "https://www.twitch.tv/unknown"
})
   }, 3000)
}); 

client.on('message', message => {

  if (message.content === 'wlc') {

    message.channel.send(`**Halo, selamat datang dan terima kasih.
jangan sungkan untuk nimbrung di Voice Channel dan <#915059498991902776>
Semoga harimu baik!** <a:3073gawrgurafingerguns:924206337594892358>`);
     message.delete()
  }

  if (message.content === 'welcome') {

    message.channel.send(`<a:pinkwelcome1:936239443269013604><a:pinkwelcome2:936239450281902121>`);
     message.delete()
  }

});

client.on("guildMemberAdd",(member) => {
const message = `Welcome ${member.user}`;
const channel = member.guild.channels.cache.get('915059498991902776')
channel.send(message);
});

client.on('guildMemberAdd', async member =>{
  let channel = client.channels.cache.get("915059498991902776")
  if (!channel) return;

  let embed = new Discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL())
  .setDescription(`**Heyoo! ${member.user.username} <a:3793gawrgurabooanimated:924206272612556850>
▬▬▬▬▬▬▬▬▬▬▬▬
WELCOME TO HOMESTAY

We've been waiting for you our Guest!

> - Check this channel first <#915059498991902773> 
> - Introduce ur self here <#915059498991902774>
> - Join our conversation <#915059498991902776>
> - don't be shy, it's not your first time right? 

_enjoy your stay, btw_ <:761954:935507090645078016>**`)
  .setThumbnail(member.user.displayAvatarURL())
  .setImage('https://cdn.discordapp.com/attachments/915237583439675463/936230284070903848/20220127_185714_0000.png')
  .setFooter(member.guild.name, member.guild.iconURL())
  .setColor('#0b0b0b')
  .setTimestamp()
  channel.send(embed)
});

client.login('OTI5ODMyODUwNzg4ODcyMTky.YdtEUw.pXc0T7_ITYDIIwFGr8e4HMHJO-Q');

client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)

});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "say") {

   if (message.author.id !== "781654965893988383") return message.channel.send(`Tidak punya akses`)

  const sayMessage = args.join(" ");
  message.delete().catch(O_o => { });
  message.channel.send(sayMessage);

  }

  if(command === "ping"){
  
     const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#303136')
	.setTitle('<a:1231233212:916748921391431760> Response speed is `' + `${Date.now() - message.createdTimestamp}` + ' ms`')
     
      message.channel.send(exampleEmbed);
  
      
}
       if(command === "saye"){
    
 if (message.author.id !== "781654965893988383") return message.channel.send(`Tidak punya akses`)

   const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0b0b0b')
  .setDescription(args.join(' '))
  
message.channel.send(exampleEmbed);
message.delete().catch(O_o=>{}); 
    
  }

  });
111
