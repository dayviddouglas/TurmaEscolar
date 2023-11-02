// Config 
const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const cors = require('cors');

const app = express();


const corsOptions = {
    origin: 'http://localhost:5173',
  };


  app.use(cors(corsOptions));

// read JSON/ middlewares
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())

//endpoint
app.get('/', (req, res)=>{
    res.json({msg: 'Hello!'})
})

// routes Api
const turmaRoutes = require('./routes/turmaRoutes')
app.use('/turma', turmaRoutes)







// port
const dbUser = process.env.DB_USER 

const dbPassword = process.env.DB_PASSWORD

;
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@apiclster.wyusev1.mongodb.net/turmaEscola?retryWrites=true&w=majority`).then(() =>{
    console.log('The connection is working!')
    app.listen(3000)
}).catch((err)=>{
   console.log(err);
})

