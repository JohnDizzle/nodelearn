const express = require('express'); 
const router = express.Router(); 
const members = require('../../members');
const uuid = require('uuid'); 
// this is a routed file that is going to handle the members 
// api calls..you need to import expresss, and the Router object. 

router.get ('/', (req, res)=>{
    res.json(members); 
    // res.sendFile(path.join(__dirname, '../public' , 'index.html',));
    // res.send("<h1>Welecome to Express</h1>");   

});
// muse a parmater from the url 
// use postman and send paramater, however the params 
// are in only STRING Fromat , must convert to int or whatever 
router.get('/:id', (req, res)=>{
    const found = members.some(m=> m.id === parseInt(req.params.id));
    if (found){
        res.json(members.filter(m=> m.id === parseInt(req.params.id))) ;
    }else{
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
    
});
// create a member on the /api/member route
router.post('/', (req, res)=>{
    
    const newMember = {
        id: uuid.v4(), 
        name: req.body.name, 
        email: req.body.email
    }
    // if body has neither a name or email 
    if(!newMember.name || !newMember.email){
        return res.status(400).json({ msg: "Please include a name and email"});
    }

    members.push(newMember); 
    //res.json(members); 
    res.redirect('/');


});

// update a member 
router.put('/:id', (req, res)=>{
    const found = members.some(m=> m.id === parseInt(req.params.id));
    if (found){
        const updMember = req.body; 
        members.forEach(m=> {
            if (m.id === parseInt(req.params.id)){
               m.name = updMember.name ? updMember.name : m.name; 
               m.email = updMember.email ? updMember.email : m.email;      
               res.json({ msg: 'Member updated' , member: m }); 
            }
        }); 
    }else{
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
    
});

router.delete('/:id', (req, res)=>{
    const found = members.some(m=> m.id === parseInt(req.params.id));
    if (found){
        res.json({ msg: "Member deleted", members: members.filter(m=> m.id !== parseInt(req.params.id)) } ) ;
    }else{
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
    
});


module.exports = router; 