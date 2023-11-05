const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const PORT = process.env.PORT || 3001
const API_URL = process.env.API_URL;
const morgan = require('morgan');



app.use(cors({
    origin:'*'
}))
const connectdatabase = require('./connect/connectdb');
connectdatabase();


const categoryrouter = require('./routers/category');
const productrouter = require('./routers/product');
const userrouter = require('./routers/user');
const auth = require('./middleware/auth');
const errorhandler = require('./middleware/error-handler');
const OrderRouter = require('./routers/order');


///middleware to parse body
app.use(express.json());
app.use(morgan('tiny'))
app.use(auth())
app.use(errorhandler)
app.use('/public/uploads',express.static(__dirname+ '/public/uploads' ))

app.use(`${API_URL}category`,categoryrouter)
app.use(`${API_URL}product`,productrouter)
app.use(`${API_URL}user`,userrouter)
app.use(`${API_URL}Order`,OrderRouter)


app.get('/',(req,res) => {
    res.send({msg:"Helo how are you"})
})


const server = app.listen(process.env.PORT,()=>{
    console.log(`server is started running at ${PORT}`)
})


