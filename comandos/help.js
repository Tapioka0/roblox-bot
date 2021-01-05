const Discord = require("discord.js")
const {prefix}= require("../config.json")
//la exportacion

module.exports.help = {
    name: "help", 
    descripcion: "paga a los usuarios...",
    }
//cuando se ejecuta pasa esto..
    module.exports.run = async(client, message, args) => {
      
        //mensaje bonito
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField(`Esta es mi lista de comandos`, `\`\`\`promote    demote  post  pay\`\`\``)
        .setColor("BLACK")
        .setTimestamp()
        .setFooter(`mi prefix es: ${prefix}`)
        //
        message.channel.send(embed) //lo enviamos
        



    }


