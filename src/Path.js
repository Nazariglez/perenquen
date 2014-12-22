(function(){

    PQ.Path = PQ.Class.extend({
        _init: function(){
            this.lineWidth = 1;
            this.lineColor = 0xff0000;
            this.lineAlpha = 1;
            this.pointCurves = 30;

            this.polygon = new PQ.Polygon();
            this._distance = null;

            this.graphic = null;

            this.dummyPoint = new PQ.Point(0,0);
            this.dummyPoint2 = new PQ.Point(0,0);
            return this;
        },

        setPointCurves: function(value){
            this.pointCurves = value || 30;
            return this;
        },

        moveTo: function(x, y){
            this.reset();
            this.polygon.points.push(x,y);
            return this;
        },

        getPoint: function(len){
            len = len*2;
            this.dummyPoint2.set(this.polygon.points[len],this.polygon.points[len + 1]);
            return this.dummyPoint2;
        },

        getStartPoint: function(){
            return this.getPoint(0);
        },

        _distanceBetween: function(len1, len2){
            var p1 = this.getPoint(len1);
            var p2 = this.getPoint(len2);

            var dx = p2.x-p1.x;
            var dy = p2.y-p1.y;

            return Math.sqrt(dx*dx+dy*dy);
        },

        drawStyle: function(lineWidth, color, alpha){
            this.lineWidth = lineWidth || 1;
            this.lineColor = color || 0xff0000;
            this.lineAlpha = (typeof alpha === "number") ? alpha : 1;
            return this;
        },

        lineTo: function(x, y){
            if(this.polygon.points.length === 0){
                this.moveTo(0,0);
            }

            this.polygon.points.push(x,y);
            return this;
        },

        getDistance: function(){
            this._distance = [0];
            var len = this.getLength();
            var distance = 0;
            for(var i = 0; i < len-1; i++){
                distance += this._distanceBetween(i, i + 1);
                this._distance.push(distance);
            }

            return distance;
        },

        getPointAtDistance: function(distance){
            if(!this._distance)this.getDistance();
            var len = this._distance.length;
            var n = 0;

            for(var i = 0; i < len; i++){
                if(distance >= this._distance[i]){
                    n = i;
                }

                if(distance < this._distance[i]){
                    break;
                }
            }

            if(n === this.getLength()-1){
                return this.getPointAtLength(n);
            }

            var diff1 = distance-this._distance[n];
            var diff2 = this._distance[n+1] - this._distance[n];

            return this.getPointAtLength(n+diff1/diff2);

        },

        reset: function(){
            this.polygon.points = [];
            return this;
        },


        bezierCurveTo: function(cpX, cpY, cpX2, cpY2, toX, toY){
            if(this.polygon.points.length === 0){
                this.moveTo(0,0);
            }

            var n = this.pointCurves,
                dt,
                dt2,
                dt3,
                t2,
                t3,
                points = this.polygon.points;

            var fromX = points[points.length-2];
            var fromY = points[points.length-1];

            var j = 0;

            for (var i=1; i<=n; i++)
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
        },

        arc: function(cx, cy, radius, startAngle, endAngle, anticlockwise){
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
        },

        arcTo: function(x1, y1, x2, y2, radius){
            if(this.polygon.points.length === 0){
                this.moveTo(0, 0);
            }

            var points = this.polygon.points;
            var fromX = points[points.length-2];
            var fromY = points[points.length-1];
            var a1 = fromY - y1;
            var b1 = fromX - x1;
            var a2 = y2   - y1;
            var b2 = x2   - x1;
            var mm = Math.abs(a1 * b2 - b1 * a2);

            if (mm < 1.0e-8 || radius === 0){
                if( points[points.length-2] !== x1 || points[points.length-1] !== y1)
                {
                    points.push(x1, y1);
                }
            }else{
                var dd = a1 * a1 + b1 * b1;
                var cc = a2 * a2 + b2 * b2;
                var tt = a1 * a2 + b1 * b2;
                var k1 = radius * Math.sqrt(dd) / mm;
                var k2 = radius * Math.sqrt(cc) / mm;
                var j1 = k1 * tt / dd;
                var j2 = k2 * tt / cc;
                var cx = k1 * b2 + k2 * b1;
                var cy = k1 * a2 + k2 * a1;
                var px = b1 * (k2 + j1);
                var py = a1 * (k2 + j1);
                var qx = b2 * (k1 + j2);
                var qy = a2 * (k1 + j2);
                var startAngle = Math.atan2(py - cy, px - cx);
                var endAngle   = Math.atan2(qy - cy, qx - cx);

                this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
            }

            return this;
        },

        quadraticCurveTo: function(cpX, cpY, toX, toY){
            if(this.polygon.points.length === 0){
                this.moveTo(0,0);
            }

            var xa,
                ya,
                n = this.pointCurves,
                points = this.polygon.points;
            if(points.length === 0)this.moveTo(0, 0);


            var fromX = points[points.length-2];
            var fromY = points[points.length-1];

            var j = 0;
            for (var i = 1; i <= n; i++ )
            {
                j = i / n;

                xa = fromX + ( (cpX - fromX) * j );
                ya = fromY + ( (cpY - fromY) * j );

                points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
                    ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
            }

            return this;

        },

        close: function(){
            var start = this.getStartPoint();
            this.lineTo(start.x, start.y);
            return this;
        },

        getLength: function(){
            return (this.polygon.points.length === 0) ? 0 : this.polygon.points.length/2;
        },

        getPointAtLength: function(len){
            if(len > this.getLength()){
                return this.getPoint(this.getLength()-1);
            }

            if(len%1 === 0){
                return this.getPoint(len);
            }else{
                this.dummyPoint.set(0,0);

                var diff = len%1;

                var ceil = this.getPoint(Math.ceil(len));
                var floor = this.getPoint(Math.floor(len));

                var xx = -((floor.x - ceil.x)*diff);
                var yy = -((floor.y - ceil.y)*diff);
                this.dummyPoint.set(floor.x + xx, floor.y + yy);

                return this.dummyPoint;
            }
        },

        generateGraphic: function(){
            if(!this.graphic){
                this.graphic = new PQ.Graphics();
            }
            this.graphic.clear();

            this.graphic.lineStyle(this.lineWidth, this.lineColor, this.lineAlpha)
                .drawShape(this.polygon);

            return this.graphic;
        },

        isClosed: function(){
            var start = this.getPoint(0);
            var close = this.getPoint(this.getLength()-1);
            return (close.x === start.x && close.y === start.y);
        }
    });

})();