const mqtt = require('mqtt')
let client = mqtt.connect('mqtt://broker.hivemq.com')

client.on("connect", () => {
    setInterval(() => {
        let random = Math.random()*25
        console.log('El número generado es:', random);
        if (random >= 20) {
            const obj = {
                numero: random,
                date: new Date (Date.now()).toLocaleDateString()
            }
            client.publish('Numerospana', JSON.stringify(obj))
            console.log('Número publicado:', JSON.stringify(obj));
        }   
    }, 3000)
})