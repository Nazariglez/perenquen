var bin = global.perenquenBin,
    program = require('commander');

if(bin) {
    module.exports = function fn(name) {
        return function () {
            var args = Array.prototype.slice.call(arguments, 0),
                len = args.length;


            //TODO: io.js support
            var argv = ['node', bin, name];
            for (var i = 0; i < len; i++) {
                argv = argv.concat(args[i].split(" "));
            }
            program.parse.call(program, argv);
        }
    };
}