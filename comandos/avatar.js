const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis, OwnerID}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "avatar", 
    descripcion: "avatar",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
      
        
         if(!args[0]) return message.channel.send("Enter the group id") //si no puso id
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("an error occurred: (cookies)" +error) //error
        }
try {
   
    let ids = await roblox.getIdFromUsername(args[0])
let thumbnails = await roblox.getPlayerThumbnail({userIds: [ids], size: 100, format: "jpeg",  isCircular: true})
       
        //mensaje bo0nito
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`Avatar`, ids.ProfileUserName)
        .setColor("BLACK")
        .setTimestamp()
       .setThumbnail(thumbnails[0].imageUrl)
        .setFooter(`Person in charge: ${message.author.username}`)
        //
        message.channel.send(embed) //lo enviamos
        
} catch (err) {
    message.channel.send("An error occurred (slight)" + "\n error: \n"+err) //error
}

 


    }