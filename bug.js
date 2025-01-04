const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon bug:  Unhandled promise rejection
//The bug occurs when the server encounters an error during request handling but the error isn't handled properly.
//Example: An asynchronous operation within the requestListener throws an error. 
//This is easily missed if you rely solely on console.error. 