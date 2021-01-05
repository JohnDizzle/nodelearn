const express = require('express'); 
const path = require('path');
const members = require('./members');
const moment = require('moment');
const app = express(); 
const logger = (req, res, next ) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next(); 
};

const PORT = process.env.PORT || 5000; 

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`); 
});

// middleware for logging all req and res.  log actioins
app.use(logger);

// middleware and a static folder for server 
// all files are static "with .html extensions"
// no routes used just static files 
app.use(express.static(path.join(__dirname, '../public')));

// using routes


app.get ('/api/members', (req, res)=>{
    res.json(members); 
    // res.sendFile(path.join(__dirname, '../public' , 'index.html',));
    // res.send("<h1>Welecome to Express</h1>");   

});