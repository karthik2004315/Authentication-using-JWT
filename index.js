const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();

// importing from routes folder
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


// middleware
app.use(express.json())

// connecting to MongoDB
async function connectionEstablishment(){
    try{
        await mongoose.connect(process.env.MONGO_URI) 
        console.log('Connected to MongoDB')
    }catch(err){
        console.log('Failed to connect to MongoDB', err)
    }
}
connectionEstablishment();


// routes middleware
app.use('/api/users', authRoute);
app.use('/api/posts', postRoute);

app.listen(8900, () => {
    console.log('Server is running on port 8900')
})