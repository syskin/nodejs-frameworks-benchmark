const fastify = require('fastify')
const appFastify = fastify()
const { startBench } = require('./autocannon.js')
const fastifyServerPort = 3002

appFastify.get('/', (req,res) => {
  res.send({msg: 'Hello'})
})

appFastify.listen(fastifyServerPort, () => {
  startBench(fastifyServerPort)
  console.log('Fastify server running')
})
