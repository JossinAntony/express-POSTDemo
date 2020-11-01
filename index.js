const express = require('express');
const bodyparser = require('body-parser');
const myops = require('./operations');


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.get('/', (req, res)=>{
    res.send('Welcome..');
});

app.post('/smallestLargest',(req, res)=>{
    var getnum1 = parseInt(req.body.num1);
    var getnum2 = parseInt(req.body.num2);
    var getnum3 = parseInt(req.body.num3);

    res.status(200).json({'result':myops.findSmallestAndLargest(getnum1, getnum2, getnum3)});
});


app.post('/evenOrOdd', (req, res)=>{
    var getnum = parseInt(req.body.num);
    
    res.status(200).json({'result': myops.evenOrOdd(getnum)});
});

app.post('/divisibleBy8', (req, res)=>{
    var getnum = parseInt(req.body.num);

    res.status(200).json({result: myops.divisibilityby8(getnum)});
});

app.listen(3000, (e)=>{
    if(e){
        console.log('error..')
    }else{
        console.log('Server running at http://localhost:3000');
    }
})

