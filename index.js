const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//const adi = [{name:"Aditya"},{ name:"Deepak"}, {name:"Rahul"}];
//const adi = require('./data');  // accessing the data.js file data
const abesStudent = require('./aditya');

app.get('/', (req,res)=> {
    res.send("This is the home the page");
})


// app.get("/home", (req,res) => {
//     //res.send("This is the about page");
//     //res.json(abesStudent);
//     res.sendFile(path.join(__dirname, "home.html"));
// })


// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname, "about.html"));
// });

// app.get('/contact', (req,res) => {
//     res.sendFile(path.join(__dirname, "contact.html"));
// });


// app.get('/data', (req,res) => {
//     res.sendFile(path.join(__dirname, "data.json"));

// });

//postman work from here
app.use(express.json())

app.post('/api/abes', (req,res) => {
    console.log("body", req.body);
    res.json({})
});

// poatman work end
app.listen(port, () => {
    console.log(`app is runnign is at ${port}`);
});