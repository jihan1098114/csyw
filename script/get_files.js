#!/usr/bin/env node

const glob = require("glob");
const path = require('path');
const fs = require('fs');

(async () => {
  const dir = process.cwd() + '/images/mendian';
  const files = await fs.promises.readdir(dir);
  var json = [];
  for await (const [index, file] of files.entries()) {
    json.push(
      { 
        href: 'images/mendian/' + file,
        title: '',
        desc: ''
       }
    );
  }
  console.log(json);
})();