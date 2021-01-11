const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  message.author.send(
    " \n\n\n\n**COMANDOS BIFROST GUARDIANS**\n" + "*Comandos utilizaveis dentro do servidor da Bifrost Gurdians no Discord*\n\n" +
    "**       bifrost@storage**\n" +
    "Abre a conversa privada com a Funcionária Bifrost para informar depositos ou retiradas de itens do armazém do clã.\n\n" +
    "**       storage@check**\n" +
    "Exibe o inventário do armazém no canal do servidor Bifrost.\n\n\n" +
    "**COMANDOS FUNCIONARIA BIFROST**\n"+ "*Comandos utilizaveis dentro de conversas privadas com a Funcionária Bifrost*\n\n" +
    "**       storage@help**\n" +
    "Exibe informações sobre a Assistente de armazém Bifrost.\n\n" +
    "**       storage@add**\n" +
    "Registra depósito de itens no armazém\n\n" +
    "**       storage@remove**\n" +
    "Registra retirada de itens do armazém\n\n" +
    "**       storage@check**\n" +
    "Exibe o inventário do armazém\n\n\n" +
    "*Novos comandos em breve.*"

  )
 
};