(function(){
    PQ.Graphics = PIXI.Graphics.extend(PQ.DisplayMixin, {
        _init: function(){
            PQ.Graphics._super._init.call(this);
            this.vel = new PQ.Point(0,0);
            return this;
        },

        beginFill: function(color){
            color = color || 0x000001;
            return PQ.Graphics._super.beginFill.call(this, color);
        },

        drawPath: function(path){
            if(!this.filling && !this.lineColor && !this.lineWidth){
                this.lineStyle(path.lineWidth, path.lineColor, path.lineAlpha);
            }

            this.drawShape(path.polygon);
            return this;
        }
    });
})();