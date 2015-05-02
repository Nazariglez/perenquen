var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils'),
    Pool = require('./../../extra/Pool'),
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
    var parentCopy = JSON.parse(JSON.stringify(parent));
    for(var key in child){
        if(Object.prototype.toString.call(child[key]) === "[object Object]"){
            parentCopy[key] = utils.defaultObject(parentCopy[key], child[key]);
        }else{
            parentCopy[key] = child[key];
        }
    }

    return parentCopy;
};

/**
 * Watch when the browser lost the focus and notify the game object
 * @param game {Game}
 */
utils.watchVisibilityChanges = require('./visibilityChange');

/**
 * Store all assets loaded
 */
utils.assetCache = new (require('../../loader/AssetCache'))();

/**
 * Replace keys in the text
 * @type {function(): text|exports}
 */
utils.parseTextKeys = require('./parseTextKeys');

module.exports = utils;