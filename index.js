// index.js
const express = require('express');
const MongoClient    = require('mongodb').MongoClient;
const app = express();
// parse application/json
app.use(require('body-parser').json());
var db;
MongoClient.connect('mongodb://localhost:27017/test', function (err, database) {
if (err) {
return console.log(err);
}
db = database;
require('./api/index')(app, database);
app.listen(3333,function () {
console.log('server started!');
});
})