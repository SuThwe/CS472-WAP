const express = require("express");
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'css')));


const date = new Date();
const hr = date.getHours();
const cssF = hr > 18 && hr < 6 ? "css/day.css": "css/night.css";

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href=${cssF} />
            </head>
            <body>
                <form method="POST" action="/result">
                   <label>Name</label>
                   <input type="text" name="name" />
                   <label>Age</label>
                   <input type="number" name="age" />
                   <input type="submit" id="submit" value="Submit Query">
                </form>
            </body>
        </html>
    `);
});

app.post("/result", (req, res) => {
  const { name, age } = req.body;
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.get("/output", (req, res) => {
    const { name, age } = req.query;
    res.status(200).send(`Welcome ${name}, you are ${age}`);
  });
  

app.listen(3000);