import http from 'node:http'


const server = http.createServer((req, res) => {
    return res.end('hello wold')
})


server.listen(3333)
