var program = require('commander'),
    utils = require('../utils'),
    path = require('path'),
    fs = require('fs');

program.command('new <project>')
    .description('create new project')
    .action(function(project){
        var file = path.normalize("./" + utils.configFile);
        var content = {
            name : project
        };

        if(!utils.isPerenquenProject()) {
            fs.writeFile(file, JSON.stringify(content, null, 4), function (err) {
                if (!err) {
                    console.log('The project ' + project + ' was created!');
                } else {
                    return console.log(err);
                }
            });
        }else{
            console.log('This directory already have a perenquen\'s project!');
        }
    });


module.exports = require('../fn.js')('new');
