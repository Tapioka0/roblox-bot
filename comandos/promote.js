const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "promote", 
    descripcion: "sube de rol a un usuario",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permiso para ejecutar este comando") //si no tiene permiso
        
         if(!args[0]) return message.channel.send("Ingrese la id del usuario") //si no puso una ID
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:" +error) //si da error
        }
try {
        let promo = await roblox.promote(grupoID,args[0] ) //lo promovemos
        let avatar = await roblox.getPlayerInfo(args[0])
        let thumbnails = await roblox.getPlayerThumbnail({userIds: [args[0]], size: 100, format: "jpeg",  isCircular: true})
        //mensaje bmnito
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`El usuario: ${avatar.username}fue promovid@ `, `Rango anterior: \`${promo.oldRole.name}\`,\n rank: \`${promo.oldRole.rank}\`, \n **Ahora** \n Nuevo Rango: \`${promo.newRole.name}\`, \n rank:\`${promo.newRole.rank}\``)
        .setColor("BLACK")
        .setTimestamp()
        .setThumbnail(thumbnails[0].imageUrl)
        .setFooter(`Miembros en total (Nuevo rango): ${promo.newRole.memberCount}`)
        ///
        message.channel.send(embed) //lo enviamos
} catch (err) {
    message.channel.send("Ocurrio un error verifique la ID" + "\n error: \n"+err) //...otro error
}

 


    }


