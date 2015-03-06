var program = require('commander');

program.command('generate <type>')
    .description('generate new structure')
    .action(function(type){
        console.log('generate');
    });


module.exports = require('../fn.js')('generate');
