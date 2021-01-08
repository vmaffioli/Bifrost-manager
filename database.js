const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./profile_data.json')
const db = low(adapter)

const guildName = 'BifrostGuardians'


module.exports.func = function createProfile(){

}

