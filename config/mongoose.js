const mongoose = require('mongoose');

const mongoConnect=mongoose.connect('mongodb://127.0.0.1/pollingApi').then(()=>{
    console.log("Connected to Database")
});

module.exports=mongoConnect;