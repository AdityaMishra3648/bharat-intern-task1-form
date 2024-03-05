const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const hbs = require("hbs");
const Register = require("./models/registers");
const { error } = require("console");
const { register } = require("module");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
app.set("views",template_path);
app.set("view engine","hbs");
hbs.registerPartials(partial_path)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register", async (req,res)=>{
    try{
       const new_form =  new Register({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       })
       await new_form.save();
    res.redirect("/register");
    }catch{
        res.status(400).send(error);
    }
})
app.listen(port, ()=>{
    console.log(port);
})
