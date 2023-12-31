const User =  require('../models/user')

const test = (reg,res) =>{
    res.json('test is working')
}

module.exports={test}


const registerUser = async(req, res) => {
    try{
        const {name, email, password} = req.body
        if (!name) {
            return res.json({
                error: 'name is required'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and it must me atleast six Character'
            })
        }
        const exist = await user.findOne({email})
        if (exist) {
            return res.json({
                error: 'Email isalready taken'
            })
        }


    }catch (error){
        console.log(error);

    }

}



























/**const User =  require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json('test is working')
}

//registerUser Register EndPoint
const registerUser = async(req, res) => {
    try{
        const {name, email, password} = req.body
        //check if name is entered 
        if (!name) {
            return res.json({
                error: 'name is required'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and it must me atleast six Character'
            })
        }
        const exist = await User.findOne({email})
        if (exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }
        const hashedPassword = await hashPassword(password)
        // Create User database
        const user = await User.create ({
            name,email,password: hashedPassword,

        })
        return res.json(user)

    }catch (error){
        console.log(error);

    }

}

//loginUser Login Endpoint
const loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body

        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            return res.json({
                error: 'No user Found'
            })
        }

        // check if password match
        const match = await comparePassword(password, user.password)
        if (match) {
            //res.json('password match')
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err,token) =>{
                if(err)throw err
                res.cookie('token', token).json(user)
            })
            
        }
        if (!match) {
            res.json({
                error: 'password did not match'
            })
        }

    } catch (error) {
        console.log(error);
    }

}

//getProfile
const getProfile=async(req,res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) =>{
            if(err) throw err
            res.send(user)
        })
    }else{
        res.json(null)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}**/