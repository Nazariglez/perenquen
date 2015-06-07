var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils'),
    Pool = require('./../../extra/Pool'),
    Class = require('../Class');

utils._saidHello = true; //Disable default sayHello

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

/**
 * Convert degrees to radians
 * @param value
 * @returns {number}
 */
utils.degToRad = function(value){
    return value * CONST.DEG_TO_RAD;
};

/**
 * Convert radians to degrees
 * @param value
 * @returns {number}
 */
utils.radToDeg = function(value){
    return value * CONT.RAD_TO_DEG;
};

utils.randomRange = function(min, max){
    return (min + Math.random() * (max-min));
};

utils.iRandomRange = function(min, max){
    return Math.floor(utils.randomRange(min, max+1));
};

module.exports = utils;