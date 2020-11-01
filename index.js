const express = require('express');
const bodyparser = require('body-parser');
const myops = require('./operations');


const app = express();
app.use(bodyparser.json());
app.use


app.get('/', (req, res)=>{
    res.send('Hi');
});


app.listen(3000, (e)=>{
    if(e){
        console.log('error..')
    }else{
        console.log('Server running at http://localhost:3000');
    }
})

