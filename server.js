const express = require ('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://kenkomu:Kikis_216@cluster0.z2j67ql.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString)
.then(client =>{
    console.log('Connected to database')
    const db = client.db('sample_supplies')
    const taskCollection = db.collection('sales')

    //CRUD request
})
.catch(error => console.error(error))