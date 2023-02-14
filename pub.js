const mqtt = require('mqtt')
let client = mqtt.connect('mqtt://broker.hivemq.com')

client.on("connect", () => {
    setInterval(() => {
        let random = Math.random()*25
        console.log('El número generado es:', random);
        if (random >= 20) {
            client.publish('Numerospana', 'Numero publicado: ' + random)
            console.log('Número publicado:', random.toString());
        }   
    }, 3000)
})