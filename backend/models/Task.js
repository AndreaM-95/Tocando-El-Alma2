const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Permite crear el esquema en mongo

let taskSchema = new Schema(
    {
        fecha:{
            type: String,
        },
        actividad:{
            type: String,
        },
        observacion:{
            type: String,
        },
        evidencia:{
            type: String,
        },
    },

    {
        collection:'tasks',
    }
);

module.exports= mongoose.model("Task",taskSchema);