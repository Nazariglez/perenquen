var core = require('./core'),
    CONST = require('./core/const');

//TODO: Add here addons
core.Scene = require('./display/Scene');

//Add Constants to the main object
for(var key in CONST){
    core[key] = CONST[key];
}

//TODO: Add class system

module.exports = core;