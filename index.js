const { log } = require('console');
const express = require('express');
const path = require('path');

const port = 8300;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))

const checkpost = (req, res, next) => {
    if (req.query.age >= 18) {
        return next();
    }
    return res.render('index');
}

app.get('/', (req, res) => { 
    return res.render('index');
})

app.get('/table', checkpost,(req, res) => {
    return res.render('table');
})

app.get('/form', checkpost,(req, res) => {
    return res.render('form');
})
app.get('/chart', checkpost,(req, res) => {
    return res.render('chart');
})
app.get('/icon', checkpost,(req, res) => {
    return res.render('icon');
})
app.use(checkpost);

app.listen(port, (err) => {
    if (err) {
        console.log("server is not start");
        return false;
    }
    console.log("server is start : " + port);
})