var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils'),
    Pool = require('./Pool'),
    Class = require('../Class');

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

/**
 * Provide the ability to inherits easily
 * @param obj
 */
utils.addInherits = function(obj){
    obj.extend = Class.extend;
};

/**
 * Watch when the browser lost the focus and notify the game object
 * @param game {Game}
 */
utils.watchVisibilityChanges = require('./visibilityChange');

utils.Pool = Pool;

module.exports = utils;