
const http = require('http'); 

http.createServer((req, res) => {

    res.write("Good morning John"); 
    res.end();
    
}).listen(5000, () => console.log('Server running....'));
