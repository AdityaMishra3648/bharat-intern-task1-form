const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/t").then(()=>{
    console.log("connected succesfull");
}).catch((e)=>{
    console.log("new error occured"+e);
})

// export default conn