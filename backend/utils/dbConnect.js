const mongoose = require("mongoose");

let isConnected = false;

const dbConnect = async () =>{
if(isConnected){
console.log("using existing mongoDB connection");
return;
}
try {
await mongoose.connect(process.env.MONGODB_URI,{
useNewUrlParser: true,
useUnifiedTopology: true,
})};
isConnected = true;
console.log("MongoDB connected");
}catch (error){
console.error("MongoDB connection error:", error);
throw new Error("MongoDB Connection failed");
}
};

module.exports = dbConnect;