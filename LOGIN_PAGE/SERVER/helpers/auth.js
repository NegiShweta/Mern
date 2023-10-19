const mongoose =  require('mongoose')

const{schema }= mongoose
const userSchema = new Schema({
    name: String,
    email:{
        type:String,
        unique: true
    }, password :String,

})

const Usermodel = mongoose.model('User', userSchema)
module.exports = Usermodel
























/** const bcrypt = require('bcrypt')

const hashPassword =(password)=>{
    return new Promise((resolve, reject) =>{
        bcrypt.genSalt(12, (err, salt) =>{
            if(err){
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })

}

const comparePassword = (password, hashed) =>{
    return bcrypt.compare(password,hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}**/