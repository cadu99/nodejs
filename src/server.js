import http from 'node:http'


const server = http.createServer((req, res) => {
    const { method , url } = req

    if (method === 'GET' && url === '/users'){
        return res.end('show users')
    }

    
    if (method === 'POST' && url === '/users'){
        return res.end('register users')
    }

    

    return res.end('hello wold313')
})


server.listen(3333)
