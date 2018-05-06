const mongoose = require("mongoose")
const Schema = mongoose.Schema

/* Apartment Schema */
const ondoSensor = new Schema({
    ondo:Number,
    created_at: String
})

const ondoSensor = mongoose.model("ondoSensor", ondoSensor, "ondoSensor")

/* Export Models */
module.exports = {
    ondoSensor: ondoSensor
}
