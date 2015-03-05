var fn = module.exports = function(project){
    console.log('new',project);
};

var program = require('commander');

program.command('new <project>')
    .description('create new project')
    .action(fn);
