const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
const createRouter=require("./helpers/createRouter")

app.use(cors());
app.use(express.json());



MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('dinoProject');
        const dinosCollection = db.collection('dinos');
        const dinosRouter = createRouter(dinosCollection);
        app.use("/api/dinos", dinosRouter)


    }).catch((error) => console.log(error))


app.listen(9000, function () { console.log(`!!!!!listening on port ${this.address().port}`) })