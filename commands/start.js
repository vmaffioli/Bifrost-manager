const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('profile_data.json')
const db = low(adapter)

const guildName = 'Nome da guilda'
const playerName = 'Nome do Jogador'
const characterInfos = {
  name: "Nome do Personagem",
  job: "Profissão do Personagem",
  description: "Descrição do Personagem",
  lore: "História do Personagem",
  photo: "Imagem do Personagem"

}
const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {



  //create
db.set(guildName, []).write()

//post
db.get(guildName).push({
    player_name: playerName,
    character_name: characterInfos["name"],
    character_job: characterInfos["job"],
    character_description: characterInfos["description"],
    character_lore: characterInfos["lore"],
    character_photo: characterInfos["photo"]
  }).write()

}
