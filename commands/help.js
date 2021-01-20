const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  message.author.send(
    " \n\n\n\n**COMANDOS BIFROST GUARDIANS**\n" + "*Comandos utilizaveis dentro do servidor da Bifrost Gurdians no Discord*\n\n" +
    "**       bifrost@storage**\n" +
    "Abre a conversa privada com a Funcionária Bifrost para informar depositos ou retiradas de itens do armazém do clã.\n\n" + "**       bifrost@d6 / bifrost@3d6**\nRola um/três dado(s) D6\n\n**       bifrost@d20 / bifrost@3d20**\nRola um/três dado(s) D20\n\n" + "**       bifrost@d100 / bifrost@3d100**\nRola um/três dado(s) D100\n\n" +
    "**       storage@check**\n" +
    "Exibe o inventário do armazém no canal do servidor Bifrost.\n\n\n**COMANDOS FUNCIONARIA BIFROST**\n"+ "*Comandos utilizaveis dentro de conversas privadas com a Funcionária Bifrost*\n\n**       storage@help**\nExibe informações sobre a Assistente de armazém Bifrost.\n\n**       storage@add**\nRegistra depósito de itens no armazém\n\n**       storage@remove**\nRegistra retirada de itens do armazém\n\n**       storage@check**\nExibe o inventário do armazém\n\n\nA lista de itens a serem adicionados ou removidos precisa seguir o seguinte padrão:\n\n            *20 Red Potions, 30 Empty Bottle, 1 Shield [2]*\n\n            ou\n\n            *20 Red Potions*,\n            *30 Empty Bottle*,\n            *1 Shield [2]*\n\n\n- Não faz diferença se for maiúsculo ou minúsculo\n- Inserir a quantidade mesmo se for o único item\n- Utilizar o mesmo nome do item que está no Ragnacorp, inclusive sem o plural no caso de multiplos itens\n- Sempre separar os itens por vírgula no caso de listas\n- Substituir '[]' por '()' - Temporário\n\n**Exemplo de uso**\n\nNo chat do clã no canal do bot digite bifrost@storage,voce recebera uma mensagem privada da assistente, no privado envie o comando storage@add ou storage@remove e confirme, ela irá pedir a lista de itens,envie a mensagem seguindo o padrão e está feito.\n\n" +
    "*Novos comandos em breve.*\n\n"

  )
 
};