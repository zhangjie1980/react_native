/**
 * Created by zhangjie on 16/9/22.
 */


var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
// http.createServer(function (req, resp) {
//
//     console.log(req.headers);
//     console.log(req.method);
//     console.log(req.url);
//
//     // var app = express();
//     //
//     // // create application/json parser
//     // var jsonParser = bodyParser.json();
//     //
//     // // create application/x-www-form-urlencoded parser
//     // var urlencodedParser = bodyParser.urlencoded({extended: false});
//     //
//     // app.post('/login', urlencodedParser, function (req, res) {
//     //     if (!req.body)
//     //         return res.sendStatus(400);
//     //     res.send('welcome, ' + req.body.username);
//     //     console.log(req.body.username);
//     // });
//
//
//
//     // var array = [];
//     // for (var i = 0; i < 20; ++i) {
//     //     array.push("row " + i);
//     // }
//     // var result = {
//     //     "result": array,
//     // };
//     // resp.end(JSON.stringify(result));
// }).listen(8888);
/**
 * Created by linyufeng on 2016/8/22.
 */

var express = require('express');
//Post方式请求参数放在请求体里面，需引用body-parser解析body
var bodyParser = require("body-parser");
var app = express();

// 引用
app.use(bodyParser.urlencoded({extended: false}));

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//json数据
var data = {"name": "Test", "age": "19"};

app.get('/', function (req, res) {
    console.log('get..........');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.query);
    var array = [];
    for (var i = 0; i < 20; ++i) {
        array.push("row " + i);
    }
    var result = {
        "result": array,
    };
    res.end(JSON.stringify(result));
});

app.post('/', function (req, res) {
    console.log('post............');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    var array = [];
    for (var i = 0; i < 20; ++i) {
        array.push("row " + i);
    }
    var result = {
        "result": array,
    };
    res.end(JSON.stringify(result));
});

app.listen(8888, function () {
    console.log('Listening on port 8888...');
});
