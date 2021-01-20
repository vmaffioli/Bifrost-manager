const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  message.author.send("```\n**Bem vindo(a) ao Assistente de armazém da Bifrost Guardians!**\n\n\nPara informações gerais sobre o armazém:\n      storage@help\n\nPara guardar itens:\n      storage@add\n\nPara retirar itens:\n      storage@remove\n\n ```");








};



