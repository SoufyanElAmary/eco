const mongoose = require('mongoose');
const connectDatabase = ()=>{
	mongoose.Promise = global.Promise; 
    mongoose.connect("mongodb://siifou:siifou@cluster0-shard-00-00.jyuzb.mongodb.net:27017,cluster0-shard-00-01.jyuzb.mongodb.net:27017,cluster0-shard-00-02.jyuzb.mongodb.net:27017/ecommerceDb?ssl=true&replicaSet=atlas-of7mdv-shard-0&authSource=admin&retryWrites=true&w=majority", {

    }).then(con =>{
        console.log('succes connexion'+' '+con.connection.host)
    }); 
}
module.exports = connectDatabase;