const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

 //send initial messages
  message.author.send("```Utilize este comando para consultar os depósitos ou retiradas do armazém usando o protocolo gerado no preenchimento da ficha na hora do registro de transação.```");
  await new Promise(r => setTimeout(r, 500));
  message.author.send(":pencil: :pencil: :pencil:  \n\n\n:woman_technologist:   **Por favor, me envie o protocolo:**\n")

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

    let protocol = collected.first().content;

    let nome, data, itens, tipo;

    


    message.author.send(`:woman_technologist:  Prontinho!\n\nProtocolo: ${protocol}\nAutor: ${nome}\nData: ${data}\nItens: ${itens}\nTipo: ${tipo}\n\nAté mais! `);



  }).catch(() => {
    message.author.send(":eyes: EITA\n\n Eu não entendi ..\n\nSerá que você preencheu a ficha certo ?? Tenta de novo por favorr, prometo que vou entender <3");
  });



};

 
