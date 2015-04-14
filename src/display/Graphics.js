var Graphics = require('../../lib/pixi/src/core/graphics/Graphics');

Graphics.prototype.drawPath = function(path){
    this.drawShape(path.polygon);
    return this;
};

module.exports = Graphics;