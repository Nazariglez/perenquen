if(typeof window !== "undefined") {
    module.exports = require('./src/index.js');
}else{
    module.exports = require('./cli/perenquen');
}