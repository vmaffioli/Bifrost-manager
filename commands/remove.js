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

      console.log(qtd + " " + nome);
      
      database.ref(`Storage/${nome}`)
      .once('value').then(async function(snap){
        if (snap.val() == null) {
          database.ref(`Storage/${nome}`)
          .set({
            quantidade: 0
          })

        } else {
          database.ref(`Storage/${nome}/quantidade`)
            .once('value').then(async function(snap){
              let parsed_snap = parseInt(snap.val());
              qtd = parseInt(qtd);

              if (qtd > parsed_snap) {
                  message.author.send("Quantidade de " + nome + " insuficiente para retirada, reenvie o comando para tentar novamente.")

              } else {
                qtd = parsed_snap - qtd;
                database.ref(`Storage/${nome}`)
                .update({
                  quantidade: `${qtd}`
                })
              }
          })
        }
      })


    });


  }).catch(() => {
    //message.author.send("You took too long!")

    console.log("fim da conversa")
  });

};



