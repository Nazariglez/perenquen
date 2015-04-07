var Graphics = require('../display/Graphics'),
    Pool = require('../extra/Pool'),
    math = require('../../lib/pixi/src/core/math/index');

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

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param cpX2 {number} Second Control point x
 * @param cpY2 {number} Second Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Path}
 */
Path.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY) {
    if(this.polygon.points.length === 0){
        this.moveTo(0,0);
    }

    var n = this.curveAccuracy,
        dt,
        dt2,
        dt3,
        t2,
        t3,
        points = this.polygon.points;

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;

    for (var i = 1; i <= n; ++i)
    {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        points.push( dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
            dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }

    return this;
};

/**
 * Calculate the points for a quadratic bezier curve and then draws it.
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Path}
 */
Path.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY) {
    if(this.polygon.points.length === 0){
        this.moveTo(0,0);
    }

    var xa,
        ya,
        n = this.curveAccuracy,
        points = this.polygon.points;

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;
    for (var i = 1; i <= n; ++i)
    {
        j = i / n;

        xa = fromX + ( (cpX - fromX) * j );
        ya = fromY + ( (cpY - fromY) * j );

        points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
            ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
    }

    return this;
};

/**
 * The arcTo() method creates an arc/curve between two tangents on the canvas.
 *
 * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
 *
 * @param x1 {number} The x-coordinate of the beginning of the arc
 * @param y1 {number} The y-coordinate of the beginning of the arc
 * @param x2 {number} The x-coordinate of the end of the arc
 * @param y2 {number} The y-coordinate of the end of the arc
 * @param radius {number} The radius of the arc
 * @return {Path}
 */
Path.prototype.arcTo = function (x1, y1, x2, y2, radius) {
    if(this.polygon.points.length === 0){
        this.moveTo(x1,y1);
    }

    var points = this.polygon.points,
        fromX = points[points.length-2],
        fromY = points[points.length-1],
        a1 = fromY - y1,
        b1 = fromX - x1,
        a2 = y2   - y1,
        b2 = x2   - x1,
        mm = Math.abs(a1 * b2 - b1 * a2);

    if (mm < 1.0e-8 || radius === 0)
    {
        if (points[points.length-2] !== x1 || points[points.length-1] !== y1)
        {
            points.push(x1, y1);
        }
    }
    else
    {
        var dd = a1 * a1 + b1 * b1,
            cc = a2 * a2 + b2 * b2,
            tt = a1 * a2 + b1 * b2,
            k1 = radius * Math.sqrt(dd) / mm,
            k2 = radius * Math.sqrt(cc) / mm,
            j1 = k1 * tt / dd,
            j2 = k2 * tt / cc,
            cx = k1 * b2 + k2 * b1,
            cy = k1 * a2 + k2 * a1,
            px = b1 * (k2 + j1),
            py = a1 * (k2 + j1),
            qx = b2 * (k1 + j2),
            qy = a2 * (k1 + j2),
            startAngle = Math.atan2(py - cy, px - cx),
            endAngle   = Math.atan2(qy - cy, qx - cx);

        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
    }

    return this;
};

/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @param cx {number} The x-coordinate of the center of the circle
 * @param cy {number} The y-coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @param startAngle {number} The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param endAngle {number} The ending angle, in radians
 * @param anticlockwise {boolean} Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @return {Path}
 */
Path.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise) {
    var startX = cx + Math.cos(startAngle) * radius;
    var startY = cy + Math.sin(startAngle) * radius;

    var points = this.polygon.points;

    if(points.length === 0)
    {
        this.moveTo(startX, startY);
        points = this.polygon.points;
    }
    else if( points[points.length-2] !== startX || points[points.length-1] !== startY)
    {
        points.push(startX, startY);
    }

    if (startAngle === endAngle)return this;

    if( !anticlockwise && endAngle <= startAngle )
    {
        endAngle += Math.PI * 2;
    }
    else if( anticlockwise && startAngle <= endAngle )
    {
        startAngle += Math.PI * 2;
    }

    var sweep = anticlockwise ? (startAngle - endAngle) *-1 : (endAngle - startAngle);
    var segs =  ( Math.abs(sweep)/ (Math.PI * 2) ) * 40;

    if( sweep === 0 ) return this;

    var theta = sweep/(segs*2);
    var theta2 = theta*2;

    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);

    var segMinus = segs - 1;

    var remainder = ( segMinus % 1 ) / segMinus;

    for(var i=0; i<=segMinus; i++)
    {
        var real =  i + remainder * i;


        var angle = ((theta) + startAngle + (theta2 * real));

        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
            ( (cTheta * -s) + (sTheta * c) ) * radius + cy);
    }
    return this;
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