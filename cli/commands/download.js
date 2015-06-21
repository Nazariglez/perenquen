var program = require('commander'),
    http = require('https'),
    fs = require('extfs'),
    path = require('path'),
    utils = require('../utils'),
    templates = require('../list/templates.json');


program.command('download <type> <name>')
    .description('download templates, plugins, etc...')

    .action(function(type, name) {
        if(Object.keys(templates).length === 0){
            utils.updateList(function(){
                delete require.cache[require.resolve('../list/templates.json')];
                //delete require.cache[require.resolve('../list/plugins.json')];
                templates = require('../list/templates.json');

                checkType(type, name);
            });
        }else{
            checkType(type, name);
        }
    });

function checkType(type, name){
    switch(type){
        case "template":
            downloadTemplate(name);
            break;
        case "plugin":
            downloadPlugin(name);
            break;
        default:
            console.log('Unknow type'.red);
            break;
    }
}

function downloadTemplate(name){
    if(!templates[name]){
        console.log('Unknow template name'.red);
        return;
    }

    var dir = process.cwd();

    if(!fs.isEmptySync(dir)){
        console.log('This is not an empty directory!'.red);
        return;
    }

    console.log('Template Information:'.yellow);
    console.log('Name: '.cyan + name);
    console.log('Author: '.cyan + templates[name].author);
    console.log('Description: '.cyan + templates[name].description);
    console.log("\nDownloading: ".blue, templates[name].github);

    utils.downloadRepository(
        templates[name].github,
        templates[name].branch,
        process.cwd(),
        function(err){
            if(err){
                console.log("Error: ".red + err.code);
                return;
            }

            console.log('Downloaded Successfully'.green);
            console.log('Please read the instructions for this template in the readme.md'.yellow);
        }
    );

}

function downloadPlugin(name){

}


module.exports = require('../fn.js')('install');