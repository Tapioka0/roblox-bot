const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "user", 
    descripcion: "sube de rol a un usuario",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
        
         if(!args[0]) return message.channel.send("Ingrese la id del usuario") //si no puso una ID
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:" +error) //si da error
        }
try {
        let avatar = await roblox.getPlayerInfo(args[0])
        let thumbnails = await roblox.getPlayerThumbnail({userIds: [args[0]], size: 100, format: "jpeg",  isCircular: true})
        //mensaje bmnito
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`Informacion del usuario: ${avatar.username}`, `username: \`${avatar.username}\`,\n status: \`${avatar.status}\`, \n Cuenta creada hace: \`${avatar.age}\` dias`)
        .setColor("BLACK")
        .setTimestamp()
        .setThumbnail(thumbnails[0].imageUrl)
        ///
        message.channel.send(embed) //lo enviamos
} catch (err) {
    message.channel.send("Ocurrio un error verifique la ID" + "\n error: \n"+err) //...otro error
}

 


    }


