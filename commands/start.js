
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('profile_data.json')
const db = low(adapter)


exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  const guildName = "BifrostGuardians";
  const playerName = user.username;


  //send initial messages
   message.author.send("Bem vindo ao Assistente de criação para fichas de Personagens!");
   await new Promise(r => setTimeout(r, 1000));


  //wait for messages
  const filter = m => m.author.id === message.author.id;
  const msg_content = [
    "Vamos começar?\nPor favor, me informe o nome do personagem:",
    "Deixe-me ver... Qual é/será sua profissão?",
    "Muito bem!\nAgora preciso saber um pouco sobre seu/sua personagem..\nMe conte um pouco sobre a personalidade, sonhos e comportamento dele(a):"
  ];

  var charInfo = [];
  

  function getInput(msg) {
      message.author.send(msg)
      .then(msg => msg.delete(10000))
        .catch(err => {}) 
    message.author.dmChannel.awaitMessages(filter, {
      max: 1, 
      time: 10000, 
      errors: ['time']
    }).then(async(collected) => { 
      if (collected.first().content.toLowerCase() == 'cancel') { // 
        message.author.send(":sob: The command has been cancelled.") 
      } 
      let captured_content = collected.first().content;
      console.log(captured_content);
      return captured_content

    }).catch(() => {
      message.author.send("You took too long!")
    });

  };


  let charName = getInput(msg_content[0]); 





};
