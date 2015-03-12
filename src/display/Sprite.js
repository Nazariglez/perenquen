var Sprite = require('../../lib/pixi/src/core/sprites/Sprite'),
    Container = require('./Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    mixin = require('./mixin');

utils.mixin(Sprite, mixin);

//Sprite.prototype.displayObjectUpdateTransform = Container.prototype.displayObjectUpdateTransform;

module.exports = Sprite;