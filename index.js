const express=require('express');
const db=require('./config/mongoose');
const app = express();
const port=8000;

app.use('/',require('./routes'));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})