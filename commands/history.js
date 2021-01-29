const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {

    let print_list = "";
    let authorList = [];

    const filter = m => m.author.id === message.author.id;

    message.author.send("Você gostaria de consultar o histórico de depósitos ou retiradas do inventário?")
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 100000,
        errors: ['time']
    }).then(async (collected) => {
        let checkType = collected.first().content.toLowerCase();

        if ((checkType === 'depositos') || (checkType === 'depósitos') || (checkType === 'deposit') ||
            (checkType === 'deposits') ||
            (checkType === 'deposito') ||
            (checkType === 'depósito')) {

            message.author.send("```Instruções para consultar o registro de depósitos no inventário:\n\n\nDigite a data inicial no formato XX/XX/XXXX\n\n   ou\n\nDigite total para retornar tudo.```\n\n\n:woman_technologist:**A partir de que data voce gostaria de consultar as retiradas do inventário?**");



            message.channel.awaitMessages(filter, {
                max: 1,
                time: 100000,
                errors: ['time']
            }).then(async (collected) => {
                try {
                    var strData = collected.first().content;
                    var partesData = strData.split("/");
                    var inputDate = new Date(partesData[2], partesData[1] - 1, partesData[0]);

                } catch (err) {
                    var inputDate = "";
                }


                if (collected.first().content.toLowerCase() == 'total') {
                    database.ref(`In`).once('value', function(snapshot) {
                        snapshot.forEach(
                            function(ChildSnapshot) {
                                let protocol = ChildSnapshot.val().protocol
                                let author = ChildSnapshot.val().author
                                let itens = ChildSnapshot.val().itens
                                let date = ChildSnapshot.val().date

                                print_list = print_list + "\n" + "```\n" + "ID: " + protocol + "\n" + "DATA: " + date + "\n" + "AUTOR: " + author + "\n" + "ITENS: " + itens + "```";

                            }
                        )

                        
                        message.author.send(":woman_technologist: Prontinho! Aqui estão os dados solicitados.\n\n" + print_list + "\n```Resumo de participantes:\n\n" + authorList + "```");    }
                    )
                } else if (inputDate instanceof Date && !isNaN(inputDate.valueOf())) {
                    let authorList = [];
                    database.ref(`In`).once('value', function(snapshot) {
                        snapshot.forEach(
                            function(ChildSnapshot) {
                                let protocol = ChildSnapshot.val().protocol
                                let author = ChildSnapshot.val().author
                                let itens = ChildSnapshot.val().itens
                                let date = ChildSnapshot.val().date

                                strData = date;
                                partesData = strData.split("/");
                                var dbDate = new Date(partesData[2], partesData[1] - 1, partesData[0]);
                                if (dbDate >= inputDate) {
                                    print_list = print_list + "\n" + "```\n" + "ID: " + protocol + "\n" + "DATA: " + date + "\n" + "AUTOR: " + author + "\n" + "ITENS: " + itens + "```";

                                    authorList.push(author)

                                }

                            }
                        )
                        if (print_list === "") {
                            print_list = "Parece que você não inseriu uma data válida (no caso: passado ou presente), tente novamente acionando o comando storage@history."
                        }

                        authorList = authorList.filter(function(elem, index, self) {
                            return index === self.indexOf(elem);
                        });
                        
                        message.author.send(":woman_technologist: Prontinho! Aqui estão os dados solicitados.\n\n" + print_list + "\n```Resumo de participantes:\n\n" + authorList + "```");
                    })

                } else {
                    message.author.send("Parece que você não inseriu uma data válida, tente novamente acionando o comando storage@history.");


                }


            })


        } else if ((checkType === 'retiradas') || (checkType === 'retirada') || (checkType === 'saque') ||            (checkType === 'saques')) { 

          message.channel.awaitMessages(filter, {
                max: 1,
                time: 100000,
                errors: ['time']
            }).then(async (collected) => {
                try {
                    var strData = collected.first().content;
                    var partesData = strData.split("/");
                    var inputDate = new Date(partesData[2], partesData[1] - 1, partesData[0]);

                } catch (err) {
                    var inputDate = "";
                }


                if (collected.first().content.toLowerCase() == 'total') {
                    database.ref(`Out`).once('value', function(snapshot) {
                        snapshot.forEach(
                            function(ChildSnapshot) {
                                let protocol = ChildSnapshot.val().protocol
                                let author = ChildSnapshot.val().author
                                let itens = ChildSnapshot.val().itens
                                let date = ChildSnapshot.val().date

                                print_list = print_list + "\n" + "```\n" + "ID: " + protocol + "\n" + "DATA: " + date + "\n" + "AUTOR: " + author + "\n" + "ITENS: " + itens + "```";

                            }
                        )

                        
                        message.author.send(":woman_technologist: Prontinho! Aqui estão os dados solicitados.\n\n" + print_list + "\n```Resumo de participantes:\n\n" + authorList + "```");    }
                    )
                } else if (inputDate instanceof Date && !isNaN(inputDate.valueOf())) {
                    database.ref(`Out`).once('value', function(snapshot) {
                        snapshot.forEach(
                            function(ChildSnapshot) {
                                let protocol = ChildSnapshot.val().protocol
                                let author = ChildSnapshot.val().author
                                let itens = ChildSnapshot.val().itens
                                let date = ChildSnapshot.val().date

                                strData = date;
                                partesData = strData.split("/");
                                var dbDate = new Date(partesData[2], partesData[1] - 1, partesData[0]);
                                if (dbDate >= inputDate) {
                                    print_list = print_list + "\n" + "```\n" + "ID: " + protocol + "\n" + "DATA: " + date + "\n" + "AUTOR: " + author + "\n" + "ITENS: " + itens + "```";

                                    authorList.push(author)

                                }

                            }
                        )
                        if (print_list === "") {
                            print_list = "Parece que você não inseriu uma data válida (no caso: passado ou presente), tente novamente acionando o comando storage@history."
                        }

                        authorList = authorList.filter(function(elem, index, self) {
                            return index === self.indexOf(elem);
                        });
                        
                        message.author.send(":woman_technologist: Prontinho! Aqui estão os dados solicitados.\n\n" + print_list + "\n```Resumo de participantes:\n\n" + authorList + "```");
                    })

                } else {
                    message.author.send("Parece que você não inseriu uma data válida, tente novamente acionando o comando storage@history.");


                }

            })
    }

    })
}