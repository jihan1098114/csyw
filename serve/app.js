const koa = require('koa');
const serve = require('koa-static');
// const proxy = require('koa-proxy');

const app = new koa();
// app.use(proxy({
//   host: 'http://alicdn.com'
// }));
// app.listen(3000);

// // $ GET /package.json
// app.use(serve('.'));

// // $ GET /hello.txt
// app.use(serve('test/fixtures'));

// or use absolute paths
console.log(__dirname + '/../');
app.use(serve(__dirname + '/../'));

app.listen(3000);

console.log('listening on port 3000');