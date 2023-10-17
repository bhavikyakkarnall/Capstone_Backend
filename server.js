require("dotenv").config();
const express = require("express");
let dbConnect = require("./dbConnect");
let userRoute = require('./routes/userRoute');
let itemRoute = require('./routes/itemRoute');
let orderRoute = require('./routes/orderRoute')
const cors = require("cors");
const verifyToken = require('./middlewares/verifyTokenMiddleware');
const app = express();

import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swaggerGameStore.json' assert {type: 'json'};


app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


// app.use('/api', verifyToken, itemRoute)
// app.use('/api', verifyToken, orderRoute)
// app.use('/api', verifyToken, userRoute)

app.use('/api', itemRoute)
app.use('/api', orderRoute)
app.use('/api', userRoute)




app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});