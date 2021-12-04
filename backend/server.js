const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase =require('./config/database');
dotenv.config({ path: "backend/config/config.env" });    
app.get('/',(req,res)=>{
    
    res.send("hello");
    res.end();
})
connectDatabase();
app.listen(8081,()=>{console.log('access to port')});
    // "start": "node backend/server.js",
    // "dev": "SET NODE_ENV=DEVELOPMENT& nodemon backend/server",
    // "prod": "SET NODE_ENV=PRODUCTION& nodemon backend/server"