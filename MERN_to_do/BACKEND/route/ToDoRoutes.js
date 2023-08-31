const{Router}= require("express")
const { model } = require("mongoose")
const router= Router()
//router.get(',',(getToDo))
router.get(',',(req,res)=> {
    res.json({Message:"Hi there"})
})

module.exports = router;