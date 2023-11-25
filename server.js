const express = require('express');
const app = express();
const mongoose =require("mongoose")

mongoose.set('useCreateIndex', true); //for warning 
main().catch((err)=>console.log(err));
    
const PORT = process.env.PORT || 8083;
// const Router = express.Router()
const bodyParser = require("body-parser");
 const cors = require('cors')

app.use(cors({
    origin: ["http://localhost:3000","*"], // <-- location of the react app were connecting to
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
  app.use(bodyParser.urlencoded({ extended: true,limit: '10mb' }));
app.use(bodyParser.json({limit: '10mb'}));

// ------- Test API----------------

app.get("/",(req,res)=>{
    console.log('brouser opened')
    res.status(200).send('Hello To License Maneger System, one of osbash.com products')
})
// ----------------------------------
 const Routes = require('./Routes.js');
 app.use('/',Routes)
// --------------


app.listen(PORT,()=>{
    console.log('server runing on port',PORT)
})  

async function main() {
    await mongoose.connect(process.env.MONGO,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("MongoDB-connected");
      }
    );
  }