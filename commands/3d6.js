const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {


let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
let player_name = user.username;

let random1 = Math.floor(Math.random() * 6);
let random2 = Math.floor(Math.random() * 6);
let random3 = Math.floor(Math.random() * 6);

if (random1 == 0){
  random1 = 6
}

if (random2 == 0){
  random2 = 6
}

if (random3 == 0){
  random3 = 6
}

message.channel.send(player_name + " 3D6 Roll: [ " + random1 + " ]  [ " + random2 + " ]  [ " + random3 + " ]");


 
};