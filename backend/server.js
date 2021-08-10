
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json()) 

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewURLParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Database Connected Sucessfully")
})


const vehicleRoute = require("./routes/vehicle")



app.use('/vehicle',vehicleRoute)



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})