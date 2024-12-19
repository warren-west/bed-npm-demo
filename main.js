const http = require('http')

http.createServer((req, res) => {
    res.statusCode = 201
    res.write("Server has been pinged!")
    res.end()
}).listen(8083)