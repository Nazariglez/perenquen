var path = require('path'),
    download = require('download'),
    fs = require('fs');

var configFile = "perenquen.json";

var utils = module.exports = {
    configFile: configFile,

    isPerenquenProject : function(directory){
        if(!directory)directory = "./";
        var file = path.normalize(directory + configFile);
        return fs.existsSync(file);
    },

    downloadRepository: function(repository, branch, destiny, callback){
        branch = branch || "master";
        var url = repository + "/archive/" + branch + ".zip";
        var down = new download({mode: '0755', extract: true, strip: 1})
            .get(url)
            .dest(destiny)
            .run(function(err, files){
                callback(err);
            });
    },

    updateList: function(callback){
        console.log('Updating list...'.yellow);
        var dir = path.normalize(__dirname + "/list");
        this.downloadRepository(
            "https://github.com/TarentolaDigital/perenquen-list",
            "master",
            dir,
            function(err){
                if(err){
                    console.log("Error: ".red + err.code);
                    if(err.code === "EACCES"){
                        console.log('Please try with "sudo" to update the list.');
                    }
                    return;
                }

                if(callback)callback(err);
            }
        );
    }
};
