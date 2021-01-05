//importamos las librerias

const Discord = require('discord.js')
const client = new Discord.Client();
const { prefix, token } = require("./config.json")
const fs = require('fs');
//comandos 
client.commands = new Discord.Collection();
///
//preparamos los archivos
async function comandos (Files) {
    for (const file of fs.readdirSync(Files, { withFileTypes: true })) {
      if (file.name.endsWith(".js")) {
        const comandos = require(`${Files}/${file.name}`);
        client.commands.set(comandos.help.name, comandos);
        console.log(comandos.help.name+" Listo")
      } else if (file.isDirectory()) {
        comandos(`${Files}/${file.name}`);
      }
    }
  }

async function eventos(filess){
    fs.readdir(filess, (err, files) => {
files.forEach(file => {
    const evento = require(`./${filess}/${file}`);
    let eventoName = file.split(".")[0];
    return client.on(eventoName, evento.bind(null, client));
}
)
})
}

//Activamos las funciones
comandos("./comandos") //debes poner tu ruta done estara la carpeta  de comandos
eventos("./eventos") //debes poner tu ruta donde estara la carpeta de eventos




client.login(token)