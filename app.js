//const logger = require ('./logger');

//logger.log('Hello and how is your day');

const os = require('os'); 
var totalMenory = os.totalmem(); 
var freeMemory = os.freemem(); 

console.log (`Total Memory: ${totalMenory}`);
console.log (`Free Memory: ${freeMemory}`);

const fs = require('fs'); 
const open = require('open'); 

fs.readdir('../../Downloads', function(err, files){

    if(err) console.log("Error: ", err); 
    else console.log("Result", files); 
    fs.writeFile('./files.js', JSON.stringify(files), (err)=>{
        if (err) throw err; 
        console.log("files in directory..");
    });

    (async ()=>{

        var prom = new Promise((s,e)=>{

            setTimeout(async()=>{
            
                await open('https://msn.com', {app: ['google-chrome', '--new-window']});
                await open ('https:/portal.azure.com', {app: ['google-chrome', '--new-tab']});
        
            }, 2000); 

        }); 

        return prom; 

    })(); 

});


