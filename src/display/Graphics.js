var Graphics = require('../../lib/pixi/src/core/graphics/Graphics'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

utils.mixin(Graphics, mixin);




module.exports = Graphics;