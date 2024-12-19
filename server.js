const http = require('http')

http.createServer((req, res) => {
    res.statusCode = 500
    res.write("You're reached the " + req.url + " URL")
    res.end()
}).listen(8083)