const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
let player_name = user.username;

let random = Math.floor(Math.random() * 20);
if (random == 0){
  random = 20
}

message.channel.send(player_name + " D20 Roll: [ " + random + " ]");


 
};