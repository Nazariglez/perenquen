var Graphics = require('../../lib/pixi/src/core/graphics/Graphics');

Graphics.prototype.drawPath = function(path){
    this.drawShape(path.polygon);
    return this;
};

//TODO: anchors? pivot? flip?

module.exports = Graphics;