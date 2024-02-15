const mongoose=require('mongoose')
const connectionString=process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb atlas connected");
}).catch((reason)=>{
    console.log(reason);
    console.log("Mongodb connection failed");
})