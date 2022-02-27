// const bcrypt = require("bcrypt")
const travelModel = require("../model/travel-modell")


//add [ POST ]
module.exports.addtravel = function (req, res) {

    let LocalTravel = req.body.LocalTravel
    let National = req.body.National
    let Interenational = req.body.Interenational
    
    //encrypt 

    // let encPassword = bcrypt.hashSync(password,10)
    
    // let role = req.body.role


    let travel = new travelModel({
        LocalTravel: LocalTravel,
        National: National,
        Interenational: Interenational,
        
    })



    travel.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAlltravel = function (req, res) {

    travelModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deletetravel = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    travelModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}


//update 
module.exports.updatetravel = function(req,res){

    let LocalTravel = req.body.LocalTravel
    let National = req.body.National
    let Interenational =  req.body.Interenational
    
    

    travelModel.updateOne({_LocalTravel:LocalTravel},{National:National},{Interenational:Interenational},function(err,data) {
        if (err) {
            res.json({ msg: "SMW", data:err, status: -1 })
        } else {
            res.json({ msg: "updated...", data:data, status: 200 }) 
        }
    })
}


//login
// module.exports.login = function(req,res){

//     let param_email = req.body.email
//     let param_password  = req.body.password 

//     let isCorrect = false; 

//     travelplanModel.findOne({email:param_email},function(err,data){
//         if(data){
//             let ans =  bcrypt.compareSync(param_password,data.password)
//             if(ans == true){
//                     isCorrect = true
//             }
//         }
    
//         if (isCorrect == false) {
//             res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
//         } else {
//             res.json({ msg: "Login....", data: data, status: 200 })//http status code 
//         }
//     })

// }