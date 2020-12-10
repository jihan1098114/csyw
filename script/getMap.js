#!/usr/bin/env node

const axios = require('axios').default;
const url = 'http://api.map.baidu.com/geocoding/v3/?output=json&ak=NHRlaoOqbiG0LQnknheU6wxhVeCCZcO3&address=';

axios.get(
  url + encodeURIComponent('平乐园地铁口C出口向东300米'),
  { 'headers': { 'Referer': '47.104.174.36' } }
).then((response) => {
  console.log(response.data.result.location);
}).catch((error) => {
  console.log(error);
});
