var http = require('http');
var fs = require('fs');
//Port
//Routes

http.createServer(function(req, res) {
    if(req.url== '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        }); 
        var html = fs.readFileSync('./index.html', {
            encoding: 'utf-8'
        });
        res.end(html);
    }
    else if(req.url == '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        }); 
        var html = fs.readFileSync('./contact.html', {
            encoding: 'utf-8'
        });
        res.end(html);
    }
    else{
        res.writeHead(404, {
            'Content-Type':'text/html'
        });
    }
    
}).listen(3000, '127.0.0.1');
