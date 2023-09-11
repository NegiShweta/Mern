const { Router } = require("express");
const { getToDo } = require("../controllor/ToDoController"); // Corrected path to controller
//const { model } = require("mongoose")
const router = Router();


//router.get('/',(getToDo))
//router.get('/',(req,res)=> {
//    res.json({message:"Hi there"})
//})
router.get('/', getToDo);


module.exports = router;