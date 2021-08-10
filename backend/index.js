import app from "server.js"
import mongodb, { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const MonogoClent = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.Vehicle_db,{
        poolSize: 50,
        wtimeout: 2500,
        useNewURLParser: true
    }
).catch(err => {
    console.log(err.stack)
    process.exit(1)
}).then(async client=>{
    app.listn(port, ()=>{
        console.log(`hosting on port ${port}`)
    })
})