var express=require('express');
var exphbs=require('express-handlebars');
var routes=require('./routes/route.js');

var app=express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.get('/',routes.home);
app.get('/:hotel',routes.hotel);

var port = process.env.PORT || 3011;

var server=app.listen(port,function(req,res){
    console.log('Catch the action at http://localhost:'+port);
});
module.exports = app;
