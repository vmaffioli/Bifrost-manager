const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data.json')
const db = low(adapter)

const dbName = 'bifrost-guardians';

//create
db.set(dbName, []).write()

//post
db.get(dbName).push({
  id: "teste",
  nick: "teste1"
}).write()
