var CONST = require('./core/const');

var core = {
    Class : require('./core/Class'),

    utils : require('./core/utils'),

    Game : require('./core/Game'),
    SceneManager : require('./core/SceneManager'),
    Scene : require('./display/Scene'),
    Graphics : require('./display/Graphics')
};

//Add Constants to the main object
for(var key in CONST) {
    core[key] = CONST[key];
}

//TODO: Add class system
core = require('./core/inherits')(core);

module.exports = core;