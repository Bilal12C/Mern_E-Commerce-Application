const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
app.use(cors())
app.options("*",cors())
const PORT = process.env.PORT || 3001
const API_URL = process.env.API_URL;
const morgan = require('morgan');

const connectdatabase = require('./connect/connectdb');
connectdatabase();


const categoryrouter = require('./routers/category');
const productrouter = require('./routers/product');


///middleware to parse body
app.use(express.json());
app.use(morgan('tiny'))

console.log(API_URL)
app.use(`${API_URL}category`,categoryrouter)
app.use(`${API_URL}product`,productrouter)




const server = app.listen(process.env.PORT,()=>{
    console.log(`server is started running at ${PORT}`)
})


