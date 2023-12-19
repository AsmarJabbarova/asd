const mongoose = require('mongoose');
require("dotenv").config()


const dbConnect =async()=>{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected mongoDb");
}
module.exports= dbConnect
//  mongoose.connect('mongodb://127.0.0.1:27017/test');
//  mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("connected mongoDB");
//   })
//   .catch((err) => {s
//     console.log("failed" + err);
//   });