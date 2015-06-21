var fs = require('fs'),
    dir = __dirname + '/list';

fs.chmodSync(dir, '0775');

var files = fs.readdirSync(dir);

for(var i = 0; i < files.length; i++){
    var f = dir + '/' + files[i];
    fs.chmodSync(f, '0775');
}