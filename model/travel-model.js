const mongoose = require("mongoose")


const travelSchema = new mongoose.Schema({
    
        LocalTravel:{
            
            type:String,
            required:true
        },
        National:{
            type:String
        },
        Interenational:{
               type:mongoose.Schema.Types.String,
                
        }
})


const travelModel = mongoose.model("travel",travelSchema)
module.exports = travelModel