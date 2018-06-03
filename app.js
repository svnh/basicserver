var express = require('express')
var app = express()
var storage = {}

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/set', function (req, res) {
  var key = Object.keys(req.query)[0]
  storage[key] = req.query[key]
  res.send('key set')
})

app.get('/get', function (req, res) {
  var key = req.query.key
    var value = storage[key]
  res.send(value)
})

app.listen(4000)
