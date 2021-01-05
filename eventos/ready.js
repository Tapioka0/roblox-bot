const Discord = require("discord.js")
const roblox = require("noblox.js")
const {grupoID, kukis, logschannelID}= require("../config.json")
module.exports = async (client) => {
  //modifica lo que gustes
let ala = await client.channels.fetch(logschannelID)
await roblox.setCookie(kukis)
  roblox.onAuditLog(grupoID).on("data", function(data) {
    if(data.actionType == "Change Rank") {
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.actionType}`)
      .addField("Datos responsable:",`**User**:${data.actor.user.username}, \n **ID**: \`${data.actor.user.userId},\n **Rol**: ${data.actor.role.name},\n **Creado**: ${data.created}`)
      .setTimestamp()
      .setColor("BLUE")
      .setDescription(`**Accion**: ${data.actionType}, \n **TargetId**:${data.description.TargetId}, \n**TargetName**:${data.description.TargetName},\n **Rol viejo**: ${data.description.OldRoleSetName},\n **Rol nuevo**: ${data.description.NewRoleSetName}`)
      ala.send(embed)
    } else if(data.actionType == "Update Roleset Data") {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${data.actionType}`)
    .setColor("BLUE")
    .addField("Datos responsable:",`**User**:${data.actor.user.username}, \n **ID**: \`${data.actor.user.userId},\n **Rol**: ${data.actor.role.name},\n **Creado**: ${data.created}`)
    .setTimestamp()
    .setDescription(`**Accion**: ${data.actionType},\n  **OldDescription**:${data.description.OldDescription}, \n **NewDescription**:${data.description.NewDescription},\n  **OldName**: ${data.description.OldName},\n  **NewName**: ${data.description.NewName}, \n **RoleID**: ${data.description.RoleSetId}`)
ala.send(embed)

    } else if(data.actionType == "Accept Ally Request"){
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.actionType}`)
      .setColor("GREEN")
      .addField("Datos responsable:",`**User**:${data.actor.user.username}, \n **ID**: \`${data.actor.user.userId},\n **Rol**: ${data.actor.role.name},\n **Creado**: ${data.created}`)
      .setTimestamp()
      .setDescription(`**Accion**: ${data.actionType},\n  **TargetGroupId**:${data.description.TargetGroupId},\n **TargetGroupName**:${data.description.TargetGroupName}`)
  ala.send(embed)
    } else if(data.actionType == "Change Description"){
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.actionType}`)
      .addField("Datos responsable:",`**User**:${data.actor.user.username}, \n **ID**: \`${data.actor.user.userId},\n **Rol**: ${data.actor.role.name},\n **Creado**: ${data.created}`)
      .setTimestamp()
      .setColor("GOLD")
      .setDescription(`**Accion**: ${data.actionType},\n  **NewDescription**: ${data.description.NewDescription}`)
  ala.send(embed)
    } else if(data.actionType == "Remove Member"){
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.actionType}`)
      .addField("Datos responsable:",`**User**:${data.actor.user.username}, \n **ID**: \`${data.actor.user.userId},\n **Rol**: ${data.actor.role.name},\n **Creado**: ${data.created}`)
      .setTimestamp()
      .setColor("RED")
      .setDescription(`**Accion**: ${data.actionType},\n  **TargetId**: ${data.description.TargetId},\n  **TargetName**: ${data.description.TargetName}`)
  ala.send(embed)

    } else if(data.actionType == "Spend Group Funds"){
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.actionType}`)
      .addField("Datos responsable:",`**User**:${data.actor.user.username}, \n **ID**: \`${data.actor.user.userId},\n **Rol**: ${data.actor.role.name},\n **Creado**: ${data.created}`)
      .setTimestamp()
      .setColor("ORANGE")
      .setDescription(`**Accion**: ${data.actionType},\n   **Amount**:${data.description.Amount},\n  **CurrencyTypeId**: ${data.description.CurrencyTypeId},\n  **ItemDescription**: ${data.description.ItemDescription}`)
  ala.send(embed)

    }

    console.log(data)
   })

    await console.log(`
    ____________________\n
    Client: ${client.user.tag}\n
    Client ID: ${client.user.id}\n
    Guild Count: ${client.guilds.cache.size}\n
    User Count: ${client.users.cache.size}\n
    ____________________`)
    
    client.user.setActivity(``, { type: 'WATCHING' });
    
  }