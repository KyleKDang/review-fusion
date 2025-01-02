import http from 'http'
import getMovies from './movies.js'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()


const server = http.createServer(async (req, res) => {
    try {
        const movies = await getMovies()

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(movies))

    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Failed to fetch movies' }))
    }
})

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`server is up and listning on port ${port}`)
})

