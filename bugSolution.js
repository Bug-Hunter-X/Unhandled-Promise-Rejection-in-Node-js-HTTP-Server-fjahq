const http = require('http');

const requestListener = async (request, response) => {
  try {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    // Simulate an asynchronous operation that might fail
    const data = await someAsyncOperation();
    response.end(JSON.stringify({ message: 'Hello from Node.js!', data }));
  } catch (error) {
    console.error('Error during request handling:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Simulated asynchronous operation failed'));
    } else {
      resolve({ success: true });
    }
  });
}

const server = http.createServer(requestListener);

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});