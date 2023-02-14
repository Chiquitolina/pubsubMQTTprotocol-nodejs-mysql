const mqtt = require('mqtt')
const conexionaDB = require('./database')
let client = mqtt.connect('mqtt://broker.hivemq.com')
let topic = "Numerospana"
let last

client.on('connect', () => {
    client.subscribe(topic)
    console.log('Subscripto satisfactoriamente al topic: ' + topic);
})

client.on('message', (topic, message) => {
    last = JSON.parse(message)
    console.log('Esuchando el ' + last.numero + ', publicado el ' + last.date + ' a las' + last.hour)
})

setInterval(() => {
conexionaDB().query('INSERT INTO tabla (numero, fecha, hora) VALUES (?, ?, ?)', [last.numero, last.date, last.hour], (error, results, fields) => {
    if (error) throw error;
    console.log('Datos insertados correctamente.');
  })
}, 200000)

