# state-city-brazil ![version](https://img.shields.io/npm/v/state-city-brazil) ![bundle](https://img.shields.io/bundlephobia/min/state-city-brazil) ![license](https://img.shields.io/npm/l/state-city-brazil)

Get the information of the states and cities of Brazil.

## How to install

### Yarn

```bash
yarn add state-city-brazil
```

### NPM

```bash
npm install --save state-city-brazil
```

# Available methods

| Method           | Params |           Description           |
| ---------------- | ------ | :-----------------------------: |
| getStates        | -      |  returns all states of brazil   |
| getStatesByCity  | string | returns all states by city name |
| getCitiesByState | string |  returns all cities in a state  |

# How to use

### ES5

```js
var state_city_brazil = require('state_city_brazil');

console.log(state_city_brazil.getStates());
```

### ES6

```js
import {
  getCitiesByState,
  getStates,
  getStatesByCity,
} from 'state_city_brazil';

console.log(getStates());
```

# Contributing

Feel free to contribute to this project. Just open a Pull Request.
