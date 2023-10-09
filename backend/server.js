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
const userrouter = require('./routers/user');
const auth = require('./middleware/auth');
const errorhandler = require('./middleware/error-handler');


///middleware to parse body
app.use(express.json());
app.use(morgan('tiny'))
app.use(auth())
app.use(errorhandler)

app.use(`${API_URL}category`,categoryrouter)
app.use(`${API_URL}product`,productrouter)
app.use(`${API_URL}user`,userrouter)




const server = app.listen(process.env.PORT,()=>{
    console.log(`server is started running at ${PORT}`)
})


