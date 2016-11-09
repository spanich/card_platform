var express = require('express'),
    app = express();
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    cardsController = require('./server/controllers/cards-controller');

mongoose.connect('mongodb://sonya:sonya@ds147267.mlab.com:47267/card');

// mongoose.connect('mongodb://localhost:27017/card');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/views/index.html');
});
app.get('/styles.css', function(req, res){
    res.sendFile(__dirname + '/client/views/styles.css');
})
// Any file requested fromm js will be returned statically
app.use('/js', express.static(__dirname + '/client/js'));

// REST API
app.get('/api/cards', cardsController.list);
app.post('/api/cards', cardsController.create);

app.listen(3000, function(){
    console.log('Listening...');
})
