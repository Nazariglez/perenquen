var program = require('commander');

program.command('compile')
    .description('compile bundle')
    .action(function(){
        console.log('compile');
    });


module.exports = require('../fn.js')('compile');
