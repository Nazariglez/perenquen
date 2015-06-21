var path = require('path'),
    download = require('download'),
    fs = require('fs');

var configFile = "perenquen.json";

module.exports = {
    configFile: configFile,

    isPerenquenProject : function(directory){
        if(!directory)directory = "./";
        var file = path.normalize(directory + configFile);
        return fs.existsSync(file);
    },

    downloadRepository: function(repository, branch, destiny, callback){
        branch = branch || "master";
        var url = repository + "/archive/" + branch + ".zip";
        var d = new download({mode: 775, extract: true, strip: 1})
            .get(url)
            .dest(destiny)
            .run(function(err, files){
                callback(err);
            });
    }
};
