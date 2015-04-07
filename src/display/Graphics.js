var Graphics = require('../../lib/pixi/src/core/graphics/Graphics'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

utils.mixin(Graphics, mixin);

Graphics.prototype.drawPath = function(path){
    this.drawShape(path.polygon);
    return this;
};

module.exports = Graphics;