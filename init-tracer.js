require('dd-trace').init({
    // Only activates test instrumentation on CI
    enabled: process.env.DD_ENV === 'ci',
  
    // Name of the service or library under test
    service: 'my-ui-app'
  })