var Graphics = require('../display/Graphics'),
    math = require('../../lib/pixi/src/core/math');

function Path(){
    this.curveAccuracy = 30;
    this.polygon = new math.Polygon();

    this.tmpPoint = new math.Point();
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

Path.prototype.lineTo = function(x,y){
    if(this.polygon.points.length === 0){
        this.moveTo(0,0);
    }

    this.polygon.points.push(x,y);
    return this;
};

Path.prototype.getPoint = function(num){
    var len = num*2;
    this.tmpPoint.set(this.polygon.points[len],this.polygon.points[len + 1]);
    return this.tmpPoint;
};

Path.prototype.close = function(){
    var start = this.getPoint(0);
    this.lineTo(start.x, start.y);
    return this;
};

Path.prototype.generateGraphics = function(){
    //TODO: generateGraphics
};

module.exports = Path;

Object.defineProperties(Path.prototype, {
    length : {
        get : function(){
            return (this.polygon.points.length === 0) ? 0 : this.polygon.points.length/2;
        }
    }
});