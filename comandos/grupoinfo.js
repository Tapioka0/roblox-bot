const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis, OwnerID}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "grupoinfo", 
    descripcion: "Exile a user from a group.",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
      
        
         if(!args[0]) return message.channel.send("Ingrese la id del grupo") //si no puso id
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:(cookies)" +error) //error
        }
try {
   
    let grupo = await roblox.getGroup(args[0])
       
        //mensaje bo0nito
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`Informacion del Grupo(normal)`, `Id:**${grupo.id}**\n Name:**${grupo.name}**  \n Miembros:${grupo.memberCount}`)
        .setDescription(`**${grupo.description}**`)
        .addField(`Informacion (avanzada)`, `isBuildersClubOnly:**${grupo.isBuildersClubOnly}** \npublicEntryAllowed:**${grupo.publicEntryAllowed}**\nisLocked:${grupo.isLocked}**`)
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


