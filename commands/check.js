const Discord = require("discord.js"); 

exports.run = async (client, message, args, database) => {

  let print_list = "";

  database.ref(`Storage`).once('value',function(snapshot){
    snapshot.forEach(
      function(ChildSnapshot){
        let nome = ChildSnapshot.val().nome
        let qtd = ChildSnapshot.val().quantidade
        
        if (qtd > 0) {
          print_list = print_list + "\n" + qtd + " " + nome;
        }
      }
    )
    message.author.send(print_list);
  })


};