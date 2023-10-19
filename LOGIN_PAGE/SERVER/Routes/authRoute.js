const express = require('express'); //import of express
const router = express.Router();
const cors = require('cors');
const {test} = require('../Controllors/authController.js')

//router.post('/register',registerUser)
//middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
)

router.get('/', test)


module.exports = router











