const mqtt = require('mqtt')
const conexionaDB = require('./database')
let client = mqtt.connect('mqtt://broker.hivemq.com')
let topic = "Numerospana"

conexionaDB()

client.on('connect', () => {
    client.subscribe(topic)
    console.log('Subscripto satisfactoriamente al topic: ' + topic);
})

client.on('message', (topic, message) => {
    console.log('Esuchando el ' + message)
})
