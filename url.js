const url = require('url'); 

const myUrl = new URL('https://google.com'); 

console.log(myUrl.href); 
console.log(myUrl.pathname);
console.log(myUrl.search);

