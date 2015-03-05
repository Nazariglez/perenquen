var fn = module.exports = function(){
    console.log('build');
};

var program = require('commander');

program.command('build')
    .description('build the game')
    .action(fn);
