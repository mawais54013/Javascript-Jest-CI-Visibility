# Ci-Visibility For Javascript-Mocha
 
## Compatibility 
Cucumber-js >= 7.0.0

## Prerequisites
 [Install the Datadog Agent to collect tests data](https://docs.datadoghq.com/continuous_integration/setup_tests/agent/?tab=azurepipelines)

 <br/>

[Install the Javascript tracer](https://github.com/DataDog/dd-trace-js) 

Command:
```
yarn add --dev dd-trace
```
## How to Use:
Run NPM Install command
```
npm install 
```
Run npm test command below
```
DD_ENV=ci npm test  
```

## Results:
Should be shown in datadog ci after a couple of minutes:
https://app.datadoghq.com/ci/test-runs?index=citest&start=1632627253983&end=1632630853983&paused=false

Working example output:
![image](/test.png)

## Test location:
```
test.js
```

## Documentation
https://docs.datadoghq.com/continuous_integration/setup_tests/javascript/?tab=cucumber