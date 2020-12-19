#!/usr/bin/env node

const axios = require('axios').default;
const locations = require('./localtion.json');
const fs = require('fs');
const url = 'http://api.map.baidu.com/geocoding/v3/?output=json&ak=NHRlaoOqbiG0LQnknheU6wxhVeCCZcO3&address=';

async function getLocaltion(address) {
  var response = await axios.get(
    url + encodeURIComponent(address),
    { 'headers': { 'Referer': '47.104.174.36' } }
  );
  return response.data.result.location;
}

(async () => {
  const res = [];
  for await (const location of locations) {
    var { lng, lat } = await getLocaltion(location.name);
    res.push({
      name: location.name,
      address: location.address,
      tel: location.tel,
      lng,
      lat,
    });
    console.log(lng, lat);
  }
  fs.writeFileSync('new_locations.json', JSON.stringify(res));
})();