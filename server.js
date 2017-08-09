var express = require('express')
var app = express()

app.use(express.static('./public'))

// Boston
app.get('/', function(req, res){
    res.sendFile('./html/index.html', {root:'./public'})
})

// NYC
app.get('/nyc', function(req, res){
    res.sendFile('./html/nyc.html', {root:'./public'})
})

// chicago
app.get('/chicago', function(req, res){
    res.sendFile('./html/chicago.html', {root:'./public'})
})

// boulder
app.get('/boulder', function(req, res){
    res.sendFile('./html/boulder.html', {root:'./public'})
})

// boulder
app.get('/sanfrancisco', function(req, res){
    res.sendFile('./html/sanfrancisco.html', {root:'./public'})
})
app.listen(8000)