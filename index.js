const express = require('express');
const session = require('express-session');
const bpdyParser = require('body-parser')

const port = 30000
var path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(session({secret:'ksjdhsalagd213'}));

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/',(req,res)=>{
    console.log(req.body.login)
    res.render('index');
    })

app.get('/',(req,res)=>{
res.render('index');
})


app.listen(port,()=>{
    console.log('servidor Rodando')
})