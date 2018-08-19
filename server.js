// var array = ['test'];

// array.push('data');
// array.unshift('lorem');

// console.log(array);

// var jsonData = [];
// var dataFromMysql = ['ana', 'anu', 'ane'];

// dataFromMysql.map((data, i) => {
//   // console.log(data);
//   return jsonData.push({
//     name: data,
//     index: i
//   });
// });

// console.log(jsonData);


// // ============================

// var parseStringToInteger = '1';
// var resultParsing = parseInt(parseStringToInteger);
// console.log(resultParsing);
// console.log(typeof(resultParsing));

// var parseToString = 2;
// var resultParsingString = String(parseToString);
// console.log(resultParsingString);
// console.log(typeof(resultParsingString));

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const db = require('./connection/index');

// parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse app/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // let query
  // let query = `select * from users`
  res.send('Hello world');
});

app.post('/post', (req, res) => {
  console.log('req', req.body);
  let username = req.body.username;
  let password = req.body.password;
  res.send({
    username: username,
    password: password,
    status: 200,
    error: null
  });
});

app.listen(3000, () => {
  console.log('this server run on Port 3000...');
});
