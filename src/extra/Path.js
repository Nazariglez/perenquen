var Graphics = require('../display/Graphics'),
    math = require('../../lib/pixi/src/core/math');

function Path(){
    this.curveAccuracy = 30;
    this.polygon = new math.Polygon();
}

Path.prototype.constructor = Path;

Path.prototype.setCurveAccuracy = function(value){
    this.curveAccuracy = value || 30;
    return this;
};

Path.prototype.clear = function(){
    this.polygon.points.length = 0;
    return this;
};

Path.prototype.moveTo = function(x,y){
    this.clear();
    this.polygon.points.push(x,y);
    return this;
};

module.exports = Path;