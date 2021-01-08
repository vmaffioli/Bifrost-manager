
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('profile_data.json')
const db = low(adapter)


exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  const guildName = "BifrostGuardians";
  const playerName = user.username;
  const characterInfos = {
    name: "Nome do Personagem",
    job: "Profissão do Personagem",
    description: "Descrição do Personagem",
    lore: "História do Personagem",
    photo: "Imagem do Personagem"

  };



  //create
  db.set(guildName, []).write();

  //post
  db.get(guildName).push({
    player_name: playerName,
    character_name: characterInfos["name"],
    character_job: characterInfos["job"],
    character_description: characterInfos["description"],
    character_lore: characterInfos["lore"],
    character_photo: characterInfos["photo"]
  }).write();

};
