const mongoose = require("mongoose")


//schema
let UsertaskSchema = new mongoose.Schema({
    usertaskName:{
        type:String
    }
})

//model
let UsertaskModel = mongoose.model("usertask",UsertaskSchema) //roles

module.exports = UsertaskModel