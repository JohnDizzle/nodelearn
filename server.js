const express = require('express'); 
const path = require('path');
const exphbs =  require('express-handlebars'); 
const logger = require('./middleware/logger');
const members = require('./members');

const PORT = process.env.PORT || 5000; 
const app = express(); 
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`); 
});

// add the bootsrap css and js file; along with jquery 
// from the node_modoules files 
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.engine("handlebars", exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// middleware for logging all req and res.  log actioins
app.use(logger);


// middleware and a static folder for server 
// all files are static "with .html extensions"
// no routes used just static files 
app.use(express.static(path.join(__dirname, '../public')));

// homepage route using bars. 
app.get("/", (req, res) =>
    res.render('index', { title: "Member App", members }));

//body parser 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
// using routes
// this is for the routing.  first arg is global href route than is 
// linked to /routes/api/  router 
app.use('/api/members', require('./routes/api/members')); 


