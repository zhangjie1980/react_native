let http = require('http');
let url = require('url');
let util = require('util');
let queryString = require('querystring');

http.createServer(function (req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    
    if (req.method.toUpperCase() == 'GET') {
        resp.end(util.inspect(url.parse(req.url, true)));
    } else {
        var post = '';
        req.on('data', function(chunk) {
            post += chunk;
        });
        req.on('end', function() {
            post = queryString.parse(post);
            resp.end(util.inspect(post));
        });
    }
    
}).listen(3000);

