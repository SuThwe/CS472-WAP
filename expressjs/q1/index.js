const express = require('express');
const app = express();
app.get('/', (req, res) => {

 let name = req.query.name;
 let age = req.query.age;

 if (!name) {
 name = "Clo";
 }

if(!age) {
    age=25;
}

 res.send(`Welcome ${name}, you are ${age}`);
});
app.listen(3000);