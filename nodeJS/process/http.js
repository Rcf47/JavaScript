const http = require('http')

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end('<h1>Hello<h1>')
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
  console.log(`Server is running good job: http://${HOST}:${PORT}`)
})
