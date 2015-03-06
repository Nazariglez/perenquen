var program = require('commander');

program.command('new <project>')
    .description('create new project')
    .action(function(project){
        console.log('new project', project);
    });


module.exports = require('../fn.js')('new');
