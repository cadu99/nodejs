import http from 'node:http'


const server = http.createServer((req, res) => {
    return res.end('hello wold313')
})


server.listen(3333)
