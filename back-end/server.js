const express = require('express')
const mongoose = require('mongoose')


const app = express()
const bodyParser = require('body-parser')


const db = require('./config/keys').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => console.log("Mongodb connected"))
        .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})