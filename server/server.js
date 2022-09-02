const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient=require('mongodb').MongoClient
app.use(cors());
app.use(express.json());



