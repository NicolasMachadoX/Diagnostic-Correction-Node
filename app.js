const dotenv = require('dotenv').config()

const Server = require('./models/server.js');

const server = new Server();

const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_URI;

MongoClient.connect(uri)

.then(client=>{
    console.log("Connected to mongoDB");

    const db = client.db('medicamentos')

    const medicamentos = db.collection('medicamentos')
})


server.listen();