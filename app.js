const env = require("./env/environment")
const fastify = require('fastify')({ logger: env.logger })
const path = require('path')

// Declare a CORS
fastify.use((req, res, next) => {
    res.setHeader("Created-By", "Qhoirul Anwar - qhoir.anwar@gmail.com")
    next();
})

fastify.register(require('fastify-cors'), {
    origin: true,
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
})

// Handle public folder
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    // prefix: '/public/', // optional: default '/'
})

// Routes to 'src/api'
fastify.register(require('./src/routes/api'), { prefix: '/api' })
// fastify.register(require('./src/api/api'), { prefix: '/v1' })

// handle index route first
fastify.get('/', (request, reply) => {
    reply
        .header('Content-Type', 'text/html; charset=utf-8')
        .send('<title>Hello World</title>')
})

module.exports = fastify