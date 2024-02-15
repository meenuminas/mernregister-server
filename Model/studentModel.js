const mongoose=require('mongoose')
const studentSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
   
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true
    },
    mobile: {
        type: String,
        required: true
      },
    password: {
      type: String,
      required: true
    },
    dob: {
        type: Date,
        required: true
      },
    course: {
      type: String,
      enum: ['Biology', 'Computer Science', 'Commerce','Humanities'],
      required: true
    }
  })
 const students=mongoose.model("students",studentSchema) 
 module.exports=students