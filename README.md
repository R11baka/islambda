## islambda

islambda helps you to detect is your code runs on AWS Lambda/Azure Cloud functions/Google Cloud functions

## Installation

```sh
npm install is-lambda-env
```

## Usage

```js
const isLambda = require('is-lambda-env');

if (isLambda()) {
    console.log("I am on lambda");
}
```