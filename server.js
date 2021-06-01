const express = require('express') ;
const app = express();
const port = 8080 || process.env.PORT  ;
const ejs = require('ejs') ;

app.set('view engine' , 'ejs')
app.use('/',express.static('public'))

app.get('/' , (req,res)=>{
    res.render('Home')
})

app.listen(port)