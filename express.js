const express = require('express')
const compression = require(`compression`);
const bodyParser = require(`body-parser`);
const appExpress = express()

const expressJsServerPort = 3001
const { startBench } = require('./autocannon.js')

appExpress.use(bodyParser.json({ limit: `2mb` }));
appExpress.use(bodyParser.urlencoded({ extended: true }));
appExpress.use(compression());

appExpress.get('/', (req,res) => {
  res.send({msg: 'Hello'})
})

appExpress.listen(expressJsServerPort, () => {
  startBench(expressJsServerPort)
  console.log('Expressjs server running')
})
