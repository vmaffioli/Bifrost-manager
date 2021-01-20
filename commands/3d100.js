const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {


let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
let player_name = user.username;

let random1 = Math.floor(Math.random() * 100);
let random2 = Math.floor(Math.random() * 100);
let random3 = Math.floor(Math.random() * 100);

if (random1 == 0){
  random1 = 100
}

if (random2 == 0){
  random2 = 100
}

if (random3 == 0){
  random3 = 100
}

message.channel.send(player_name + " 3D100 Roll: [ " + random1 + " ]  [ " + random2 + " ]  [ " + random3 + " ]");


 
};