var Graphics = require('../display/Graphics'),
    Pool = require('../extra/Pool'),
    math = require('../../lib/pixi/src/core/math');

var tmp = new Pool(math.Point, [], 20);

function Path(){
    this.curveAccuracy = 30;
    this.polygon = new math.Polygon();
    this.polygon.closed = false;

    this.tmpPoint = new math.Point();
    this.tmpPoint2 = new math.Point();
    this.tmpDistance = [];
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

Path.prototype.distanceBetween = function(num1, num2){
    var p1 = this.getPoint(num1),
        p1X = p1.x,
        p1Y = p1.y;

    var p2 = this.getPoint(num2),
        p2X = p2.x,
        p2Y = p2.y;

    var dx = p2X-p1X;
    var dy = p2Y-p1Y;

    return Math.sqrt(dx*dx+dy*dy);
};

Path.prototype.totalDistance = function() {
    this.tmpDistance.length = 0;
    this.tmpDistance.push(0);

    var len = this.length;
    var distance = 0;
    for (var i = 0; i < len - 1; i++) {
        distance += this.distanceBetween(i, i + 1);
        this.tmpDistance.push(distance);
    }

    return distance;
};

Path.prototype.getPointAt = function(num){
    if(num > this.length){
        return this.getPoint(this.length-1);
    }

    if(num%1 === 0){
        return this.getPoint(num);
    }else{
        this.tmpPoint2.set(0,0);

        var diff = num%1;

        var ceil = this.getPoint(Math.ceil(num)),
            ceilX = ceil.x,
            ceilY = ceil.y;

        var floor = this.getPoint(Math.floor(num)),
            floorX = floor.x,
            floorY = floor.y;

        var xx = -((floorX - ceilX)*diff);
        var yy = -((floorY - ceilY)*diff);
        this.tmpPoint2.set(floorX + xx, floorY + yy);

        return this.tmpPoint2;
    }
};

Path.prototype.getPointAtDistance = function(distance){
    if(!this.tmpDistance)this.totalDistance();
    var len = this.tmpDistance.length;
    var n = 0;

    var totalDistance = this.tmpDistance[this.tmpDistance.length-1];
    if(distance < 0){
        distance = totalDistance+distance;
    }else if(distance > totalDistance){
        distance = distance-totalDistance;
    }

    for(var i = 0; i < len; i++){
        if(distance >= this.tmpDistance[i]){
            n = i;
        }

        if(distance < this.tmpDistance[i]){
            break;
        }
    }

    if(n === this.length-1){
        return this.getPointAt(n);
    }

    var diff1 = distance-this.tmpDistance[n];
    var diff2 = this.tmpDistance[n+1] - this.tmpDistance[n];

    return this.getPointAt(n+diff1/diff2);
};

module.exports = Path;

Object.defineProperties(Path.prototype, {
    length : {
        get : function(){
            return (this.polygon.points.length === 0) ? 0 : this.polygon.points.length/2;
        }
    },

    isClosed : {
        get : function(){
            var p1 = this.getPoint(0),
                p1X = p1.x,
                p1Y = p1.y;

            var p2 = this.getPoint(this.length-1),
                p2X = p2.x,
                p2Y = p2.y;

            return (p1X === p2X && p1Y === p2Y);
        }
    }
});