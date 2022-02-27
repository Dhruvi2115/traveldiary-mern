const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const travelplanController = require("./controller/travelplan-controller")
const usertaskController = require("./controller/usertask-controller")
const travelController = require("./controller/travel-controller")

const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database
mongoose.connect('mongodb://localhost:27017/traveldiary',function(err) {
  if(err){
    console.log("db connection fai .. .. .");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

  
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)



//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)

app.post("/login",userController.login)


//travelplan
app.post("/travelplan",travelplanController.addtravelplan)
app.get("/travelplan",travelplanController.getAlltravelplan)
app.delete("/travelplan",travelplanController.deletetravelplan)

//travel
app.post("/travel",travelController.addtravel)
app.get("/travel",travelController.getAlltravel)
app.delete("/travel",travelController.deletetravel)

//usertask
app.post("/usertask",usertaskController.addusertask)
app.get("/usertask",usertaskController.getAllusertask)
app.delete("/usertask",usertaskController.deleteusertask)


//server
app.listen(3000,function(){
  console.log("server started on 3000");  
})