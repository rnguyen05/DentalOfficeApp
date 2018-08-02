const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchems = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true , alias: 'id'},
    title: {type: String, required: false},
    category: {type: String,default: 'time'},
    dueDateClass: {type: String,default: ''},
    start:{type: Date, default: Date.now},
    end:{type: Date, default: Date.now},
    calendar:{
        type: Schema.Types.ObjectId, 
        ref: "Calendar"  
    }
    

}, );

const Schedule = mongoose.model("Schedule", scheduleSchems);

module.exports = Schedule;
