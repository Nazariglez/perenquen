var program = require('commander'),
    templates = require('../config/templates.json');

program.command('list <type>')
    .description('list templates, plugins, etc...')

    .action(function(type) {
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
            case "plugin":

                break;
            default:
                console.log('Unknow type'.red);
                break;
        }
    });
