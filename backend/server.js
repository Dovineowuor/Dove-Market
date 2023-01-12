const express = require ('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = `mongodb+srv://kenkomu:Kikis216@cluster1.e1w6k7i.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(connectionString)
.then(client =>{
    console.log('Connected to database')
    const db = client.db('dove-Market')
    const taskCollection = db.collection('dove-market')

    //CRUD request
})
.catch(error => console.error(error))