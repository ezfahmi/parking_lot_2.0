const http        = require('http')
const parking_lot = require('./src')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 20;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Server is running...')
})

// Running the server on localhost:3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
  parking_lot()
})
