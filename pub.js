const mqtt = require('mqtt')
let client = mqtt.connect('mqtt://broker.hivemq.com')

client.on("connect", () => {
    setInterval(() => {
        let random = Math.round(Math.random()*25)
        console.log('El número generado es:', random);
        if (random >= 20) {
            const fecha = new Date (Date.now()).toLocaleString()
            const obj = {
                numero: random,
                date: fecha.slice(0, 9),
                hour: fecha.slice(10 , fecha.length)
            }
            client.publish('Numerospana', JSON.stringify(obj))
            console.log('Número publicado:', JSON.stringify(obj));
        }   
    }, 3000)
})