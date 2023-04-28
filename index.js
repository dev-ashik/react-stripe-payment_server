
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



// middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// to read json 
app.use(express.json());



// rest api
app.get('/', (req, res) => {
  res.send('Server is runing..')
})

app.post('/payment', async (req, res) => {
    let status, error;
    
    const {token, amount } = req.body;
    console.log(token)

    try {
        await stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd'
        });

        status = "success"
    } catch(error) {
         console.log(error)
         status = "fail"
    }

    res.json({error, status})
})





const port = process.env.PORT || 8000
app.listen( port, () => {
  console.log(`server running on ${process.env.MODE} mode on port ${port}`)
})
