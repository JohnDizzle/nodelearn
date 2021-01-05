const http = require('http');
const path = require('path');
const fs = require('fs');

// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) =>{
//             if(err) throw err; 
//             res.writeHead(200, { 'Content-Type': 'text/html'})
//             res.end(content); 
//         })
//     }
//     if (req.url === '/api/users'){
//         const users = [
//             { name: "Bob Smith", age: 40 },
//             { name: "Jane Doe", age: 34 }

//         ];
//         res.writeHead(200, { 'Content-Type': "application/json"});
//         res.end(JSON.stringify(users));
//     }

//     console.log(req.url);
// });

const server = http.createServer((req, res)=>{
    
    let filePath = path.join(__dirname  , "public", req.url === '/' ? 'index.html' : req.url );
    let extName = path.extname(filePath); 
    let contentType = 'text/html'; 

    switch (extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;

    }

    fs.readFile(filePath, (err, content)=>{
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found 
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(300, { 'Content-Type': 'text/html' })
                    res.end(content, 'utf8');
                });
            } else {
                //some server error 
                res.writeHead(500);
                res.end("Server Error: " + err.code)
            }

        } else {
            //success 
            res.writeHead(300, { 'Content-Type': contentType })
            res.end(content, 'utf8');
        }
    });

    console.log(filePath); 


})

const PORT = process.env.PORT || 5000; 

server.listen(PORT, ()=>{
    console.log('Server is listening on port ' + PORT);
});
