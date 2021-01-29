const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let player_name = user.username;
  let itens_list = [];
  let date = new Date;
  let [month, day, year] = new Date().toLocaleDateString("en-US").split("/")
  let fdate = day + "/" + month + "/" + year;
  let random = Math.floor(Math.random() * 1000)
  let protocol = date.getMilliseconds() + "0" + date.getFullYear() + Math.floor(1000 + Math.random() * 9000);




  //send initial messages
  message.author.send("```Regrinhas para preencher a ficha do armazém:\n\n- Não faz diferença se for maiúsculo ou minúsculo\n- Inserir a quantidade mesmo se for o único item\n- Utilizar o mesmo nome do item que está no Ragnacorp, inclusive sem o plural no caso de multiplos itens\n- Sempre separar os itens por vírgula no caso de listas\n-  Substituir '[]' por '()' - Temporário\n\nExemplo de ficha:\n\n05 apple,\n10 banana,\n1 shield[1]\n90 garlet,\n30 blue herb,\n1 carrot```");
  await new Promise(r => setTimeout(r, 500));
  message.author.send(":pencil: :pencil: :pencil:  \n\n\n:woman_technologist:   **Por favor, me envie a ficha do armazém com a quantidade e nome dos itens respeitando as regras acima:**\n")

  //wait for messages
  const filter = m => m.author.id === message.author.id;


  message.channel.awaitMessages(filter, {
    max: 1,
    time: 100000,
    errors: ['time']
  }).then(async (collected) => {

    if (collected.first().content.toLowerCase() == 'cancel') {
      message.author.send(":sob: The command has been cancelled.")
    }


    let contentParse = collected.first().content.toLowerCase();
    let itens = contentParse.split(",");


    itens.forEach(function(item) {
      let qtd = "";
      let nome = "";


      itens_list.push(item);

      for (let i = 0; i < item.length; i++) {
        let a = item.charAt(i);

        if ((isNaN(a)) || (i > 5) || (a == " ")) {
          nome = nome + a;
        } else {
          qtd = qtd + a;
        }

      }
      nome.trim();
      database.ref(`Storage/${nome}`)
        .once('value').then(async function(snap) {
           database.ref(`In/${protocol}`)
            .set({
              itens: `${itens_list}`,
              author: `${player_name}`,
              date: `${fdate}`,
              protocol: `${protocol}`
            })
      })

    })




    message.author.send(":woman_technologist:   Prontinho!\nSua ficha foi enviada com sucesso e o inventário já foi atualizado!\n\nO protocolo do seu depósito é :\n" + protocol);




  }).catch(() => {
    message.author.send(":eyes: EITA\n\n Eu não entendi ..\n\nSerá que você preencheu a ficha certo ?? Tenta de novo por favorr, prometo que vou entender <3");
  });



};



