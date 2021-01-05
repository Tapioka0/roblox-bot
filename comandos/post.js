const Discord = require("discord.js")
const roblox = require("noblox.js")

const {grupoID, kukis, OwnerID}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "post", 
    descripcion: "poesta en el grupo de discord...",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
       // if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permiso para ejecutar este comando") //si no tiene permiso
        if(message.author.id != OwnerID) return message.channel.send("solo el owner puede usar esto!")
        
         if(!args[0]) return message.channel.send("Ingrese el mensaje a postear") //si no puso id
  
        try {
await roblox.setCookie(kukis) //conectamos a roblox
        } catch (error) {
            message.channel.send("ocurrio un error:" +error) //error
        }
try {
    let texto = args.slice(0).join(" ")
        let posto = await roblox.shout(grupoID,texto ) //poestamos
 
       
        //mensaje bo0nito
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`El mensaje fue posteado:`, `mensaje: \`${posto.body}\`\n Usuario post: \`${posto.poster.username}\` \n Creado en: \`${posto.created} \` \n Actualizado:  \`${posto.updated}\``)
        .setColor("BLACK")
        .setTimestamp()
        .setFooter(`Persona responsable: ${message.author.username}`)
        //
        message.channel.send(embed) //lo enviamos
        
        
} catch (err) {
    message.channel.send("Ocurrio un error verifique la ID o si hay fondo disponible" + "\n error: \n"+err) //error
}

 


    }


