
const express = require('express');
require('dotenv').config();
var cors = require('cors')


// middlewares
const app = express();
app.use(cors());


// to read json 
app.use(express.json());



// rest api
app.get('/', (req, res) => {
  res.send('Server is runing..')
})




const port = process.env.PORT || 8000
app.listen( port, () => {
  console.log(`server running on ${process.env.MODE} mode on port ${port}`)
})
