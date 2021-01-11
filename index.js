const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client

const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

const firebase = require('firebase');

var firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
  

client.on('message', message => {
    


     if (message.author.bot) return;

     if(((message.channel.type != "dm") && (message.content.toLowerCase() === config.storage.toLowerCase()))
     ||
     ((message.channel.type != "dm") && (message.content.toLowerCase() === config.storage.toLowerCase() + "check_global")))
     return;

     if(((message.channel.type != "dm") && (message.content.toLowerCase() === config.prefix.toLowerCase() + "add"))
     ||
     ((message.channel.type != "dm") && (message.content.toLowerCase() === config.prefix.toLowerCase() + "check"))
     ||
     ((message.channel.type != "dm") && (message.content.toLowerCase() === config.prefix.toLowerCase() + "remove"))
     ||
     ((message.channel.type != "dm") && (message.content.toLowerCase() === config.prefix.toLowerCase() + "check_global"))) 
     return;

    if ((message.channel.type === "dm") && 
    (message.content.toLowerCase() === config.storage.toLowerCase() + "check_global"))
     return;


    if((message.channel.type === "dm") && (message.content.toLowerCase().startsWith(config.storage.toLowerCase())))
    {
      const args = message.content
        .trim().slice(config.storage.length)
        .split(/ +/g);
      const command = args.shift().toLowerCase();

      try {
          const commandFile = require(`./commands/${command}.js`)
          commandFile.run(client, message, args, database);
      } catch (err) {
      console.error('Erro:' + err);
      }
    }

    if ((message.channel.type != "dm") && 
    (message.content.toLowerCase().startsWith(config.storage.toLowerCase() + "check"))) 
    {

      try {
          const commandFile = require(`./commands/check_global.js`)
          commandFile.run(client, message, database);
      } catch (err) {
      console.error('Erro:' + err);
      }
      
    }

    
    if((message.channel.type === "dm") && (message.content.toLowerCase().startsWith(config.storage.toLowerCase() + "help")))
    {
      const args = message.content
        .trim().slice(config.storage.length)
        .split(/ +/g);
      const command = args.shift().toLowerCase();

      try {
          const commandFile = require(`./commands/storage.js`)
          commandFile.run(client, message, args, database);
      } catch (err) {
      console.error('Erro:' + err);
      }
    }

    if((message.channel.type === "dm") && (message.content.toLowerCase().startsWith(config.prefix.toLowerCase() + "help")))
    {

      try {
          const commandFile = require(`./commands/help.js`)
          commandFile.run(client, message, args, database);
      } catch (err) {
      console.error('Erro:' + err);
      }
    }

     
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token