const req = event => require(`../events/${event}`)
require('events').EventEmitter.defaultMaxListeners = 15;//Erasty

module.exports = client => {
    client.on('ready',() => req('ready')(client))//Erasty
    client.on('message',req('message'))
//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty
//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty
//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty
//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty
//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty//Erasty  
}