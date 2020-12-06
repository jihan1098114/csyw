#!/usr/bin/env node

const glob = require("glob");
const path = require('path');
const fs = require('fs');
const { resolve } = require("path");

(async () => {
  const dir = process.cwd() + '/images/mendian';
  const files = await fs.promises.readdir(dir);
  for await (const [index, file] of files.entries()) {
    await new Promise(resolve => setTimeout(resolve, 100));
    let ext = file.split('.').pop();
    console.log(file, '---', dir + '/' + (index + 1) + '.' + ext);
    await fs.promises.rename(dir + '/' + file, dir + '/' + (index + 1) + '.' + ext);
  }
})();