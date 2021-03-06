// const bcrypt = require("bcrypt")
const travelplanModel = require("../model/usertask-model")


//add [ POST ]
module.exports.addusertask = function (req, res) {

    let traveltype= req.body.traveltype
    let feedback = req.body.feedback
    let makediary= req.body.makediary
    let addtravelplan = req.body.addtravelplan
    
    //encrypt 

    // let encPassword = bcrypt.hashSync(password,10)
    
    // let role = req.body.role


    let usertask = new usertaskModel({
        traveltype: traveltype,
        feedback: feedback,
        makediary: makediary,
        addtravelplan: addtravelplan
        
    })



    usertask.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllusertask = function (req, res) {

    usertaskModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteusertask = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    usertaskModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}


//update 
module.exports.updateusertask = function(req,res){

    let traveltype = req.body.traveltype
    let feedback = req.body.feedback
    let makediary =  req.body.makediary
    let addtravelplan = req.body.addtravelplan
    

    usertaskModel.updateOne({_traveltype:traveltype},{feedback:feedback},{makediary:makediary},{addtravelplan:addtravelplan},function(err,data) {
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
