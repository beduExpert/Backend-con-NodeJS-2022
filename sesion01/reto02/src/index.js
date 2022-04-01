const http = require('http')

const hostname = '127.0.0.1'
const port = 3000
const launchDate = new Date().toISOString()

const server = http.createServer((req, res) => {
  if (req.url === '/ping' && req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
      body: 'pong'
    }))
  } else if (req.url === '/health' && req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
      body: { version: '1.0.0', launchDate }
    }))
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
      body: 'API Bedu V1'
    }))
  }
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})