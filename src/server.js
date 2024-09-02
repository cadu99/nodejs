import http from 'node:http'

const users = []


const server = http.createServer((req, res) => {
    const { method , url } = req

    if (method === 'GET' && url === '/users'){
        return res.end(JSON.stringify(users))
    }

    
    if (method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'carlos',
            email: 'arroba@gmail.com',
        })
        return res.end('register user')
    }

    

    return res.end('hello wold313')
})


server.listen(3333)
