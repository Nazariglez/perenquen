var fn = module.exports = function(type){
    console.log('generate', type);
};

var program = require('commander');

program.command('generate <type>')
    .description('generate config type')
    .action(fn);
