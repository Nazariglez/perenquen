var PixiContainer = require('../../lib/pixi/src/core/display/Container');

var mixin = module.exports = {
    addTo: function(parent){
        if(parent)parent.addChild(this);
        return this;
    },

    remove: function(){
        if(this.parent)this.parent.removeChild(this);
        return this;
    },

    update: function(gameTime, delta){
        return true;
    },

    setTint: function(value){
        this.tint = value;
        return this;
    },

    setRotation: function(angle){
        this.rotation = angle;
        return this;
    },

    setPosition: function(x,y){
        this.position.set(x,y);
        return this;
    },

    setSpeed: function(x,y){
        this.speed.set(x,y);
        return this;
    },

    setRotationSpeed: function(value){
        this.rotationSpeed = value;
        return this;
    },

    setAngleSpeed: function(){
        //todo
        return this;
    },

    animate: function(gameTime, delta){
        if(this.update(gameTime, delta) !== false){
            //TODO: desactivar delta?
            if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
                this.position.x += this.speed.x * delta;
                this.position.y += this.speed.y * delta;
            }

            if(this.rotationSpeed && this.rotationSpeed !== 0){
                this.rotation += this.rotationSpeed * delta;
            }

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
    },

    setScale: function(x,y){
        this.scale.set(x,y);
        return this;
    },

    setDepth: function(depth){
        this.depth = depth;
        return this;
    },

    sortChildrenByDepth: function(){
        this.children.sort(function(a, b){
            var aZ = a.depth,
                bZ = b.depth;

            return bZ - aZ;
        });

        return this;
    },

    addChild: function(child){
        PixiContainer.prototype.addChild.call(this, child);
        this.sortChildrenByDepth();
        return this;
    }
};