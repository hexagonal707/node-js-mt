const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const productRouter = require('./router/productRouter');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connected.");

});


app.use("/api/items", productRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {

    console.log(`Server running on port: ${port}.`)
});