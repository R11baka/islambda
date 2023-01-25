## islambda

islambda helps you to detect is your code runs on AWS Lambda/Azure Cloud functions/Google Cloud functions

## Installation

```sh
npm install islambda
```

## Usage

```js
const isLambda = require('islambda');

if (isLambda()) {
    console.log("I am on lambda");
}
```