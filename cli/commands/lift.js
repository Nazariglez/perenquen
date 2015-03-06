var program = require('commander');

program.command('lift <loquesea>')
    .description('serve the game')
    .option('-w, --watch [mode]', 'watch changes')
    .action(function(loquesea, env){
        var watch = !!env.watch || false;
        console.log('lift', loquesea, watch);
    });


module.exports = require('../fn.js')('lift');
