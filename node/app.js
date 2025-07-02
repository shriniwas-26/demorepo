const http = require('http');


function sayHello(str) {
  console.log("Hello" + str);
}
sayHello("Docker")

const server = http.createServer((req, res) => {
  res.end('Hello Docker');
});

server.listen(8000, () => {
  console.log('Server running on port 8000');
});
