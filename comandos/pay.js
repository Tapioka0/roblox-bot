const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis, OwnerID}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "pay", 
    descripcion: "paga a los usuarios...",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permiso para ejecutar este comando") //si no tiene permiso
        if(message.author.id != OwnerID) return message.channel.send("solo el owner puede usar esto!")
        
         if(!args[0]) return message.channel.send("Ingrese la id del usuario") //si no puso id
         if(!args[1]) return message.channel.send("Ingrese el monto a pagar") 
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:" +error) //error
        }
try {
        let paymen = await roblox.groupPayout(grupoID,args[0], args[1] ) //le pagamos
        let avatar = await roblox.getPlayerInfo(args[0])
        let thumbnails = await roblox.getPlayerThumbnail({userIds: [args[0]], size: 100, format: "jpeg",  isCircular: true})
       
        //mensaje bo0nito
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`El usuario: ${avatar.username} fue pagado`, `Monto pagado: \`${args[1]}\` Robux`)
        .setColor("BLACK")
        .setTimestamp()
        .setThumbnail(thumbnails[0].imageUrl)
        .setFooter(`Persona responsable: ${message.author.username}`)
        //
        message.channel.send(embed) //lo enviamos
        
} catch (err) {
    message.channel.send("Ocurrio un error verifique la ID o si hay fondo disponible" + "\n error: \n"+err) //error
}

 


    }


