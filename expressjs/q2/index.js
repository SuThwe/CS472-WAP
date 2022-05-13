const { urlencoded } = require('express');
const express = require('express');
const app= express();


app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{

    res.send(`<form method="POST" action="/result">
    <label>Name</label>
    <input type="text" name="name" />
    <label>Age</label>
    <input type="number" name="age" />
    <input type="submit" id="submit" value="Submit Query">
</form>`);
});

app.post('/result', (req,res)=> {
    
    const{name, age}= req.body;
    res.status(200).send(`Welcome ${name}, you are ${age}`);
})

app.listen(3000);