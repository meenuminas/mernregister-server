require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
const rfServer=express()
require('./DB/connect')
rfServer.use(cors())
//parse
rfServer.use(express.json())
//router
rfServer.use(router)

const PORT=3000 || process.env.PORT
rfServer.listen(PORT,()=>{
    console.log(`Registeration Form server is started  at port:${PORT} `);
})
rfServer.get('/',(req,res)=>{
res.send("<h1>Registeration Form server started </h1>")
})