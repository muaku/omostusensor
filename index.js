const mraa = require('mraa')
var CronJob = require('cron').CronJob;
var analogPin0 = new mraa.Aio(0);   //setup access analog input Analog pin #0 (A0)
// var analogPin1 = new mraa.Aio(1);
require("./db/mongoose")
const ondoSensor = require("./db/models").ondoSensor

const vcc = 4.5;    // input volt
const r1 = 10.0;    // [Kohm]
const ondoOffSet = 60;

// Run every second
new CronJob('* * * * * *', function() {
    readOndo()
}).start()

var readOndo = function() {
    var a0 = analogPin0.read();     //read the value of the analog pin0
    var v0 = (a0 * vcc) / 1024        // analog pin0 voltage
    var ondo = (v0 * 100 - ondoOffSet).toFixed(2);
    var data = {
        ondo: ondo,
        created_at: Date.now()
    }
    console.log("温度: ", ondo)
    ondoSensor.save(data, (err) => {
        console.log(err)
    })
}




