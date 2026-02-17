//app.mjs
//we are in ES6, use this. 
import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';  // For async file reading
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

// const { MongoClient, ServerApiVersion } = require('mongodb');
//const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uri = process.env.MONGO_URI;
const myVar = 'injected from server'; // Declare your variable


app.use(express.static(join(__dirname, 'public')));
app.use(express.json());




// middlewares aka endpoints aka 'get to slash' {http verb} to slash {you name ur endpoint}
app.get('/', (req, res) => {
  res.send('Hello Express from local dev'); //string response
  // res.sendFile('index.html'); // <- this don't work w/o imports, assign, and arguements
  // res.sendFile(join(__dirname, 'public', 'attend.html'));

})


//start the server. 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
