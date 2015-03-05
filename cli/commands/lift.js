var fn = module.exports = function(){
    console.log('lift');
};

var program = require('commander');

program.command('lift')
    .description('serve the game')
    .action(fn);
