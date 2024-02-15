const express=require('express')
const router=new express.Router
//
const studentController=require('../Controllers/studentController')
//register api
router.post('/regi',studentController.register)
//get full details
router.get('/stddetail',studentController.getallDetails)
module.exports=router