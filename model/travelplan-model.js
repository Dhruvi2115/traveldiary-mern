const mongoose = require("mongoose")


const travelplanSchema = new mongoose.Schema({
    
        StartDate:{
            
            type:String,
            required:true
        },
        EndDate:{
            type:String
        },
        City:{
            type:String
        },
        Days:{
            type:String
        },
        Places:{
               type:mongoose.Schema.Types.String,
                
        }
})


const travelplanModel = mongoose.model("travelplan",travelplanSchema)
module.exports = travelplanModel