const express = require("express")
const bodyParser = require("body-parser")
const mongoose  = require("mongoose")

const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine","ejs")

mongoose.connect("mongodb://localhost:27017/chatUP",{useNewUrlParser:true,useUnifiedTopology: true})

const convSchema = mongoose.Schema({
    name : String,
    username : String,
    requests : Array,
    messages : [
        {
            To : String,
            message : String,
            Time : String,
            status : Boolean
        }
    ]
})

const userSchema = mongoose.Schema({
    name : String,
    phno : String,
    username : String,
    password : String
})

const concol = mongoose.model("conversation", convSchema)
const usercol = mongoose.model("user" , userSchema)

app.get("/",function(req,res){
    res.render("index",{type:"none"})
})

var user = {}

app.get("/:type",function(req,res){
    if(req.params.type == "newchat")
    res.render("index",{type:"search",user : user})
    else{
    const uname = req.params.type
    usercol.findOne({username : uname},function(err,result){
        user = result
        res.redirect("/newchat")
    })
  }
})

let port = process.env.PORT || 4000;

app.listen(port,function(){
    console.log("listening at port 4000!")
})