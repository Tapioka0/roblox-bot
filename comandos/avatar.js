const Discord = require("discord.js");
const roblox = require("noblox.js");

const {grupoID, kukis, OwnerID}= require("../config.json")
//la exportacion

module.exports.help = {
  name: "avatar",
};
//cuando se ejecuta pasa esto..
module.exports.run = async (client, message, args) => {
  console.log("si");

  if (!args[0]) return message.channel.send("Enter the user id"); //si no puso id

  try {
    await roblox.setCookie(kukis); //conectamos a roblox
  } catch (error) {
    message.channel.send("an error occurred: (cookies)" + error); //error
  }
  try {
    let ids = await roblox.getIdFromUsername(args[0]);
    let thumbnails = await roblox.getPlayerThumbnail({
      userIds: [ids],
      size: 720,
      format: "jpeg",
      isCircular: true
    });
    let information = await roblox.getPlayerInfo({ userId: ids });
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .addField(`Avatar`, information.username)
      .setColor("BLACK")
      .setTimestamp()
      .setThumbnail(thumbnails[0].imageUrl)
      .setFooter(`Person in charge: ${message.author.username}`);
    //
    message.channel.send(embed); //lo enviamos

    message.channel.send(thumbnails[0].imageUrl); //lo enviamos
  } catch (err) {
    message.channel.send("An error occurred (slight)" + "\n error: \n" + err); //error
  }
};
