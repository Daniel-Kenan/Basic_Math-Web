const express = require('express') ;
const app = express();
const port = 8080 || process.env.PORT  ;
const ejs = require('ejs') ;

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");

app.set('view engine' , 'ejs')
app.use('/',express.static('public'))

app.get('/' , (req,res)=>{
    res.render('Home')
})

app.listen(port)