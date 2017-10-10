var express = require('express'),
  app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());
var temp = require('./products');
var data = temp.products;

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
//cheking coonection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to database!');
});
//creating a schema
var Schema = mongoose.Schema;
//creating blue print
var blogSchema = new Schema({
  productId: Number,
  productName: String,
  productCode: String,
  releaseDate: String,
  description: String,
  price: Number,
  starRating: Number,
  imageUrl: String
});

var Blog7 = mongoose.model('Blog7', blogSchema);

  Blog7.find(function (err, doc) {
    if( err ) {
      console.log(err);
    }
    if( ! doc ) {

      for( var i = 0 ; i < data.length; i++) {
        var data1 = new Blog7(data[i]);
        data1.save();
      }
    }
       //console.log(doc);
     //Blog7.remove({ _id: '597641cad216672c782cf3a6'}, function(err){});
  });


  // var data1 = new Blog5(data[i]);
  // data1.save();


app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/dist/index.html');
});

app.post('/addProduct',function(req,res){
  var item = {
    productId: req.body.productId,
    productName: req.body.productName,
    productCode: req.body.productCode,
    releaseDate: req.body.releaseDate,
    description: req.body.description,
    price: req.body.price,
    starRating: req.body.starRating,
    imageUrl: req.body.imageUrl
  };
  var data1 = new Blog7(item);
  data1.save();
  console.log(req.body.productName);
});

app.get('/getProducts', function (req, res) {
  Blog7.find(function (err, doc) {
    if(err)
      console.log(err);
    //res.json({usertype: doc.usertype, username: req.session.user});
    // console.log(doc);
    res.json(doc);
  });
  console.log('this is a test call');
});



app.listen(8081, function () {
  console.log('server running @localhost:8081');
});
