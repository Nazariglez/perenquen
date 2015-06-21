var program = require('commander'),
    fs = require('fs'),
    utils = require('../utils'),
    path = require('path'),
    templates = require('../list/templates.json');

program.command('list <type>')
    .description('list templates, plugins, etc...')

    .action(function(type) {
        if(Object.keys(templates).length === 0){
            utils.updateList(function(){
                delete require.cache[require.resolve('../list/templates.json')];
                //delete require.cache[require.resolve('../list/plugins.json')];
                templates = require('../list/templates.json');

                checkType(type);
            });
        }else{
            checkType(type);
        }
    });

function checkType(type){
    var list;
    switch(type){
        case "templates":
        case "template":
            list = Object.keys(templates);
            console.log('Templates: ('.yellow + list.length + ')'.yellow);

            list.forEach(function(name){
                console.log('- ' + name.cyan + ': ' + templates[name].description);
            });
            break;
        case "plugins":
        case "plugin":

            break;
        case "update":
            utils.updateList(function(err){
                console.log('Updated Successfully'.green);
            });
            break;
        default:
            console.log('Unknow type'.red);
            break;
    }
}


module.exports = require('../fn.js')('list');