//app.js
//es5 syntax => import express from 'express'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express')
})

//start the server. 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
