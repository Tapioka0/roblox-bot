const {prefix} = require("../config.json")
const Discord = require("discord.js")
///
//ejecutamos el evento
module.exports = async(client, message) => {

if(!message.content.startsWith(prefix)) return //si el mensaje no inicia con el prefix

let msgArray = message.content.split(" "); ///lo descomponemos el mensaje

let cmd = msgArray[0]; //toma el primer argumento
  

let args = msgArray.slice(1); //eso es el args
  


let command = client.commands.get(cmd.slice(prefix.length))  //guardamos el comando


if(command) command.run(client, message, args) //si hay lo ejecuta


  
}