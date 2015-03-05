var fn = module.exports = function(platform){
    console.log('compile', platform);
};

var program = require('commander');

program.command('compile <platform>')
    .description('compile the game')
    .action(fn);
