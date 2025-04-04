const express = require('express');
const app = express();
const port = 4000;

// User-defined middleware to allow only "Aditya"
const adi = (req, res, next) => {
    const  {name}  = req.query;

    if (!name) {
        return res.send("Please enter your name");
    }

    if (name !== "Aditya") {
        return res.send("Access denied! Only Aditya can visit this page.");
    }

    next(); 
};


app.use(adi)//app middleware

app.get('/', (req, res) => {
    res.send('This is my home page');
});

app.get('/about', adi, (req, res) => {
    res.send(`Welcome Aditya, this is my about page`);
});

app.listen(port, () => {
    console.log(`App is running at: ${port}`);
});
