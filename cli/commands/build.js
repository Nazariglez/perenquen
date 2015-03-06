var program = require('commander');

program.command('build')
    .description('build the game')
    .action(function(){
        console.log('build');
    });


module.exports = require('../fn.js')('build');
