var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils'),
    Pool = require('./Pool');

//utils._saidHello = true;

/**
 * logs out renderer type, audio type, and version
 */
utils.sayHello = function(){
    //TODO: RendererType, AudioType, Pixi credits
    if(!this._saidHello)console.log('Perenquen.js v'+CONST.VERSION + ' [http://perequenjs.com]');
};

/**
 * Set default parameters in child object with the parent values
 *
 * @param parent {object}
 * @param child {object}
 * @returns {object}
 */
utils.defaultObject = function(parent, child){
    parent = parent || {};
    child = child || {};
    for(var key in parent){
        child[key] = (child[key] !== undefined && child[key] !== null) ? child[key] : parent[key];
    }

    return child;
};

/**
 * Extend an object with the properties from other object
 * @param obj {object}
 * @param mixin {object}
 */
utils.mixin = function(obj, mixin){
    for(var key in mixin){
        obj.prototype[key] = mixin[key];
    }
};

utils.Pool = Pool;

module.exports = utils;