//app.mjs
//we are in ES6, use this. 
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';  // For async file reading

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const myVar = 'injected from server'; // Declare your variable


app.use(express.static(join(__dirname, 'public')));
app.use(express.json()); 



// middlewares aka endpoints aka 'get to slash' {http verb} to slash {you name ur endpoint}
app.get('/', (req, res) => {
  // res.send('Hello Express'); //string response
  // res.sendFile('index.html'); // <- this don't work w/o imports, assign, and arguements
  res.sendFile(join(__dirname, 'public', 'index.html')) ;

})

app.get('/inject', (req, res) => {
  // Inject a server variable into barry.html: templating view like ejs or pug
  readFile(join(__dirname, 'public', 'index.html'), 'utf8')
    .then(html => {
      // Replace a placeholder in the HTML (e.g., {{myVar}})
      const injectedHtml = html.replace('{{myVar}}', myVar);
      res.send(injectedHtml);
    })
    .catch(err => {
      res.status(500).send('Error loading page');
    });
})

app.get('/api/json', (req, res) =>{
  const myVar = 'Hello from server!';
  res.json({ myVar });
})

app.get('/api/query', (req, res) => {
  console.log("client request with query param:", req.query.name); 
  res.json({"message": req.query.name});
});

app.get('/api/url/:iaddasfsd', (req, res) => {

  console.log("client request with URL param:", req.params.iaddasfsd); 
  res.json({"message": `Hi, ${req.params.iaddasfsd}. How are you?`});
});


app.post('/api/body', (req, res) => {
  // console.log("the body:", req.body); 
  console.log("client request with body:", req.body.name); 
  res.json({"message": req.body.name});
});



//start the server. 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
