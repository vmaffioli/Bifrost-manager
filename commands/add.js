const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  const playerName = user.username;


  //send initial messages
   message.author.send("Insira a lista:");
   await new Promise(r => setTimeout(r, 1000));


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

    let contentParse= collected.first().content.toLowerCase()

    let itens = contentParse.split(",");

    itens.forEach(function(item) {
      let qtd = "";
      let nome = "";


      
      for (let i=0; i<item.length; i++) {
        let a = item.charAt(i);

        if(isNaN(a)){
          nome = nome + a;
        } else {
          qtd = qtd + a;
        }        

      }
      nome = nome.trim();

      database.ref(`Storage/${nome}`)
      .once('value').then(async function(snap){
        if (snap.val() == null) {
          qtd = parseInt(qtd)
          database.ref(`Storage/${nome}`)
          .set({
            quantidade: `${qtd}`,
            nome: `${nome}`
          })

        } else {
            database.ref(`Storage/${nome}/quantidade`)
            .once('value').then(async function(snap){
              qtd = parseInt(qtd) + parseInt(snap.val());
              database.ref(`Storage/${nome}`)
                .update({
                  quantidade: `${qtd}`,
                  nome: `${nome}`
                })
          })
        }
      })


    });


  }).catch(() => {
    //message.author.send("You took too long!")

    console.log("fim da conversa")
  });

};



