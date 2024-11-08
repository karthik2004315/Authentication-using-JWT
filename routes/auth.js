const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {registerValidation, loginValidation} = require('../validation')


router.post('/register', async (req, res) => {

    // Validating user before registering
    registerValidation(req.body)
    
    // Checking if the user is already in the database
    const emailExists = await User.findOne({email: req.body.email})
    if(emailExists) return res.status(400).send('Email already exists')
        
    // Hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    
    // Creating a new user with the validated data
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save(); 
        res.send(savedUser)
    }
    catch(err){
        res.status(400).json({msg: err.message})
    }
})

router.post('/login', async (req, res) => {
    // Validating user before logging in
    loginValidation(req.body)
    
    // Checking if the email exists
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email is not found')

    // Checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid password')

    // create and assign a token

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token) 
    
})
module.exports = router