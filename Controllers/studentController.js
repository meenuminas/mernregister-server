const students=require('../Model/studentModel')
//request for register
exports.register=async(req,res)=>{
    console.log("inside register api");
    const{firstname,lastname,address,email,gender,mobile,password,dob,course}=req.body
    console.log(firstname,lastname,address,email,gender,mobile,password,dob,course);
    try{
   const existingStudent=await students.findOne({email})
   console.log(existingStudent)
   if(existingStudent){
    res.status(406).json("Account Already exist")
   }else{
    const newStudent=new students({
        firstname,lastname,address,email,gender,mobile,password,dob,course
    })
    await newStudent.save()
    res.status(200).json(newStudent)
   }
    }catch(err){
        res.status(401).json(err)
    }
   
}

//get all details
exports.getallDetails=async(req,res)=>{
    try{
        const alldetails=await students.find()
        res.status(200).json(alldetails)
    }catch(err){
        res.status(401).json(err)
    }
}