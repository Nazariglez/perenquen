var path = require('path'),
    fs = require('fs');

var configFile = "perenquen.json";

module.exports = {
    configFile: configFile,

    isPerenquenProject : function(directory){
        if(!directory)directory = "./";
        var file = path.normalize(directory + configFile);
        return fs.existsSync(file);
    }
};
