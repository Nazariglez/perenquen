module.exports = {
    addTo: function(parent){
        if(parent)parent.addChild(this);
        return this;
    },

    update: function(gameTime, delta){
        return true;
    },

    animate: function(gameTime, delta){
        if(this.update(gameTime, delta)){
            //TODO: Animate

            var len = this.children.length;
            for(var i = 0; i < len; i++){
                this.children[i].animate(gameTime, delta);
            }
        }

        return this;
    },

    setSize: function(width, height){
        this.width = width;
        this.height = height;
        return this;
    },

    setAnchor: function(x,y,pivot){
        pivot = (pivot !== false);
        if(this.anchor)this.anchor.set(x,y);
        if(pivot)this.setPivot(x,y);
        return this;
    },

    setPivot: function(x,y){
        if(this.pivot)this.pivot.set(x,y);
        return this;
    }
};
