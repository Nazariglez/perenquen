var fn = module.exports = function(){
    console.log('update');
};

var program = require('commander');

program.command('update')
    .description('update the lib')
    .action(fn);
