const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  const playerName = user.username;


  message.author.send("**\nBem vindo(a) ao Assistente de armazém da Bifrost Guardians!**\n\n\nPara guardar itens, digite aqui no chat:\n      *storage@add*\n\nCaso você queira retirar itens, então digite:\n      *storage@remove* \n\nDepois confirme e me envie a sua lista de itens no seguinte formato:\n\n            *20 Red Potions, 30 Empty Bottle, 1 Shield [2]*\n\n            ou\n\n            *20 Red Potions*,\n            *30 Empty Bottle*,\n            *1 Shield [2]*\n\n\n- Certifique-se de separar os itens por vírgula, não importa se estão na mesma linha ou não\n- Comece pela quantidade e use somente números (inclusive se for somente um item)\n- Não faz diferença se as letras forem maiusculas ou minusculas, escreva certo e mantenha o nome do item igual ao apresentado no Ragnacorp\n- Para equipamentos com slot insira somente o nome do item sem o slot. (Por enquanto!)");
  await new Promise(r => setTimeout(r, 5000));








};



