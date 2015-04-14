var DisplayObject = require('../../lib/pixi/src/core/display/DisplayObject'),
    config = require('../core/config'),
    math = require('../../lib/pixi/src/core/math'),
    Tween = require('../tween/Tween');

DisplayObject.prototype.addTo = function(parent){
    if(parent)parent.addChild(this);
    return this;
};

DisplayObject.prototype.remove = function(){
    if(this.parent)this.parent.removeChild(this);
    return this;
};

DisplayObject.prototype.update = function(gameTime, delta){
    return true;
};

DisplayObject.prototype.setTint = function(value){
    this.tint = value;
    return this;
};

DisplayObject.prototype.setInteractive = function(value){
    this.interactive = (value !== false);
    return this;
};

DisplayObject.prototype.setAlpha = function(value){
    this.alpha = value;
    return this;
};

DisplayObject.prototype.setRotation = function(angle){
    this.rotation = angle;
    return this;
};

DisplayObject.prototype.setPosition = function(x,y){
    this.position.set(x,y);
    return this;
};

DisplayObject.prototype.setSpeed = function(x,y){
    this.speed.set(x,y);
    return this;
};

DisplayObject.prototype.setRotationSpeed = function(value){
    this.rotationSpeed = value;
    return this;
};

DisplayObject.prototype.setAngleSpeed = function(){
    //todo
    return this;
};

DisplayObject.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta) !== false){

        var tick = (config.useDeltaAnimation) ? delta : 1;

        if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
            this.position.x += this.speed.x * tick;
            this.position.y += this.speed.y * tick;
        }

        if(this.rotationSpeed && this.rotationSpeed !== 0){
            this.rotation += this.rotationSpeed * tick;
        }

        var len = this.children.length;
        for(var i = 0; i < len; i++){
            this.children[i].animate(gameTime, delta);
        }
    }

    return this;
};

DisplayObject.prototype.setSize = function(width, height){
    this.width = width;
    this.height = height;
    return this;
};

DisplayObject.prototype.setAnchor = function(x,y,pivot){
    pivot = (pivot !== false);
    if(this.anchor)this.anchor.set(x,y);
    if(pivot)this.setPivot(x,y);
    return this;
};

DisplayObject.prototype.setPivot = function(x,y){
    if(this.pivot)this.pivot.set(x,y);
    return this;
};

DisplayObject.prototype.setScale = function(x,y){
    this.scale.set(x,y);
    return this;
};

DisplayObject.prototype.setDepth = function(depth){
    this.depth = depth;
    return this;
};

DisplayObject.prototype.sortChildrenByDepth = function(){
    this.children.sort(function(a, b){
        var aZ = a.depth,
            bZ = b.depth;

        return bZ - aZ;
    });

    return this;
};

DisplayObject.prototype.tween = function(manager){
    var tween = new Tween(this);
    if(manager){
        tween.addTo(manager);
    }

    return tween;
};

module.exports = DisplayObject;
