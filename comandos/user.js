const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "user", 
    descripcion: "userinfo",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
        
         if(!args[0]) return message.channel.send("Ingrese el nombre de usuario") //si no puso un nombre
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:" +error) //si da error
        }
try {
    let ids = await roblox.getIdFromUsername(args[0])
        let avatar = await roblox.getPlayerInfo(args[0])
        let thumbnails = await roblox.getPlayerThumbnail({userIds: [ids], size: 100, format: "jpeg",  isCircular: true})
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


