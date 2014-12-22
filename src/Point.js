(function(){
    PQ.Point = PIXI.Point.extend({
        distance: function(x, y){
            var dx = x-this.x;
            var dy = y-this.y;
            return Math.sqrt(dx*dx+dy*dy);
        },

        copy: function(point){
            this.set(point.x, point.y);
            return this;
        },

        angle: function(x,y){
            return Math.atan2(y - this.y, x - this.x);
        }
    });
})();