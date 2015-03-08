var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils');

//utils._saidHello = true;

utils.sayHello = function(){
    //TODO: RendererType, AudioType, Pixi credits
    if(!this._saidHello)console.log('Perenquen.js v'+CONST.VERSION + ' [http://perequenjs.com]');
};

utils.extendNewObject = function(parent, child){
    parent = parent || {};
    child = child || {};
    for(var key in parent){
        child[key] = (child[key] !== undefined && child[key] !== null) ? child[key] : parent[key];
    }

    return child;
};

module.exports = utils;