const autocannon = require('autocannon');

const startBench = (port) => {
  const instance = autocannon({
    url: 'http://localhost:' + port
  })

  autocannon.track(instance)

  // this is used to kill the instance on CTRL-C
  process.once('SIGINT', () => {
    instance.stop()
  })
}

module.exports = {
  startBench
}
