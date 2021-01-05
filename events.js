const Logger = require('./eventlog'); 
const logger = new Logger(); 


// import  logger from eventlog, and then call an event
// first create eventListerner 

logger.on('message', (data)=> console.log("log:", data)); 

logger.log("Hello World"); 
logger.log('How is your day going today ?'); 
logger.log("This is the END'"); 

