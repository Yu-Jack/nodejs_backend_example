var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// 系統變數
require('./systemconfig');

//  test => database name
// connect localhost:27017 db test
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongodb open");
});
// apple => collection name ( table name )
// mongoose add s end of collection
// apple => apples ( lowcase )


// 幫你整理到 req.body 裡面
// middleware => 中介
// client => server ( parse client data to json format )
app.use(bodyParser.json());

// next 交給下一個去處理 reqest
app.use(function (req, res, next) {
    console.log('this is first middleware');
    next(new Error('too fat'));
});

// Error handle
app.use(function (err, req, res, next) {
    err.status = 500;
    next();
});

var BuyCtrl = require('./Controller/BuyCtrl');
app.post('/buysomething', BuyCtrl.buySomthing);

app.listen(8080, function () {
    console.log('server start');
});
