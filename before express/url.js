const url = require('url');

const address = 'http://localhost:8080/shop/products?year=2017&month=jan`'

const parsedUrl = url.parse(address, true)

console.log(parsedUrl.host)

console.log(parsedUrl.hostname)

console.log(parsedUrl.pathname)

console.log(parsedUrl.query)
