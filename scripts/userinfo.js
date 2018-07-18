const Discord = require('discord.js');
const client = new Discord.Client();
const yt = require('ytdl-core');
const randomcolor = require('randomcolor');
const ytdlcore = require('ytdl-core');
const config = require("./config.json")
const moment = require('moment');


client.on('ready', () => {
    console.log('Userinfo is ready!');
})

client.on("message", (message, msg) => {

    var messageText = message.content.toUpperCase(); 


    if (messageText == "+USERINFO") {
   const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
  if (!member) return msg.reply("Please provide a vaild Mention or USER ID");
        var embed = new Discord.RichEmbed();
        if (!user) {
          embed.addField("Username", `${message.author.username}#${message.author.discriminator}`, true)
              .addField("ID", `${message.author.id}`, true)
              .setColor(randomcolor())
              .setFooter(' ', ' ')
              .setThumbnail(`${message.author.avatarURL}`)
              .setTimestamp()
              .setURL(`${message.author.avatarURL}`)
              .addField('Currently', `${message.author.presence.status}`, true)
              .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
              .addField('Joined Discord', `${moment(message.author.createdAt).format('MM.DD.YY')}`, true)
              .addField('Joined Server', `${moment(message.member.joinedAt).format('MM.DD.YY')}`, true)
              .addField('Roles', `\`${message.member.roles.filter(r => r.name).size}\``, true)
              .addField('Is Bot', `${message.author.bot}`, true)
              message.channel.sendEmbed(
                  embed, {
                      disableEveryone: true
                  })
    }  
}
})






client.login(config.token);