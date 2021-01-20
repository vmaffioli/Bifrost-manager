const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
let player_name = user.username;

let random = Math.floor(Math.random() * 100);
if (random == 0){
  random = 100
}

message.channel.send(player_name + " D100 Roll: [ " + random + " ]");


 
};