require('dd-trace').init({
    service: 'my-javascript-app',
    // To guarantee test span delivery
    flushInterval: 300000
  })

  const tracer = require('dd-trace').init()
  const span = tracer.startSpan('web.request')
  
  span.setTag('my_tag', 'my_value')
  span.finish()
  
  // jest-environment-jsdom is an option too
  module.exports = require('jest-environment-node')
  module.exports = {
    testRunner: 'jest-circus/runner',
    testEnvironment: './functions.js',
};