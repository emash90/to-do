const express = require ('express')  //require express to use in our express app
const app = express()  //initializing the express app
const mongoose = require('mongoose') //use mongoose to connect to our db
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()  // to be able to use variables stored in dotenv file
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))




//defining out listening port
const port = process.env.PORT || 5500

//connecting to our mongo db

mongoose.connect(process.env.MONGO_URI, {

})
.then((result) => {
    console.log('connected to the db');
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    })
})
.catch((error) => {
    console.log(error);
})


//defining routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/task', require('./routes/taskRoutes'))