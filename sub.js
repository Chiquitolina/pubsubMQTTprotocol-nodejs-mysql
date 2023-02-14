const mqtt = require('mqtt')
let client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
    client.subscribe("Numerospana")
    console.log('Conectado satisfactoriamente');
})

client.on('message', (topic, message) => {
    console.log('Esuchando el ' + message.toString().toLowerCase())
})
