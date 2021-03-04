const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis, OwnerID}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "exile", 
    descripcion: "Exile a user from a group.",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
        if(message.author.id != OwnerID) return message.channel.send("solo el owner puede usar esto!")
        
         if(!args[0]) return message.channel.send("Ingrese el nombre del usuario") //si no puso id
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:" +error) //error
        }
try {
    let ids = await roblox.getIdFromUsername(args[0])
       
        //let avatar = await roblox.getPlayerInfo({userId: ids})
        //let thumbnails = await roblox.getPlayerThumbnail({userIds: [ids], size: 100, format: "jpeg",  isCircular: true})
       
        //mensaje bo0nito
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`Exile 😈`, `El usuario  fue Exilidado`)
        .setColor("BLACK")
        .setTimestamp()
       // .setThumbnail(thumbnails[0].imageUrl)
        .setFooter(`Persona responsable: ${message.author.username}`)
        //
        message.channel.send(embed) //lo enviamos
        
} catch (err) {
    message.channel.send("Ocurrio un error (leve)" + "\n error: \n"+err) //error
}

 


    }


