var DisplayObject = require('../../lib/pixi/src/core/display/DisplayObject'),
    config = require('../core/config'),
    math = require('../../lib/pixi/src/core/math'),
    InputManager = require('../input/InputManager'),
    Tween = require('../tween/Tween');

DisplayObject.prototype.addTo = function(parent){
    if(parent)parent.addChild(this);
    return this;
};

DisplayObject.prototype.remove = function(){
    if(this.parent)this.parent.removeChild(this);
    return this;
};

DisplayObject.prototype.update = function(gameTime){
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
    if(typeof y !== "number")y = x;
    this.speedX = x;
    this.speedY = y;
    return this;
};

DisplayObject.prototype.setRotationSpeed = function(value){
    this.rotationSpeed = value;
    return this;
};

DisplayObject.prototype.setAngularSpeed = function(vel){
    this.angularSpeed = vel;
    return this;
};

DisplayObject.prototype.setDirection = function(vel){
    this.direction = vel;
    return this;
};

DisplayObject.prototype.animate = function(gameTime){
    if(this.update(gameTime) !== false){

        if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
            this.position.x += this.speed.x * gameTime.delta;
            this.position.y += this.speed.y * gameTime.delta;
        }

        if(this.rotationSpeed && this.rotationSpeed !== 0){
            this.rotation += this.rotationSpeed * gameTime.delta;
        }

        var len = this.children.length;
        for(var i = 0; i < len; i++){
            this.children[i].animate(gameTime);
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
    if(typeof y !== "number")y = x;
    this.scaleX = x;
    this.scaleY = y;
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

DisplayObject.prototype.setVisible = function(value){
    this.visible = (value !== false);
    return this;
};

DisplayObject.prototype.setFlipX = function(value){
    this.flipX = value;
    return this;
};

DisplayObject.prototype.setFlipY = function(value){
    this.flipY = value;
    return this;
};

module.exports = DisplayObject;

Object.defineProperties(DisplayObject.prototype, {
    speedX: {
        get: function(){
            return this.speed.x;
        },

        set: function(value) {
            if (value === this.speed.x)return;
            this.speed.x = value;

            this._direction = Math.atan(this.speed.y / this.speed.x);

            var velX = Math.cos(this.direction) * this.speed.x,
                velY = Math.sin(this.direction) * this.speed.y;

            this._angularSpeed = velX + velY;
        }

    },

    speedY: {
        get: function(){
            return this.speed.y;
        },

        set: function(value) {
            if (value === this.speed.y)return;
            this.speed.y = value;

            this._direction = Math.atan(this.speed.y / this.speed.x);

            var velX = Math.cos(this.direction) * this.speed.x,
                velY = Math.sin(this.direction) * this.speed.y;

            this._angularSpeed = velX + velY;
        }

    },

    angularSpeed : {
        get: function(){
            if(this._angularSpeed === undefined){
                var velX = Math.cos(this.direction) * this.speed.x,
                    velY = Math.sin(this.direction) * this.speed.y;

                this._angularSpeed = velX + velY;
            }
            return this._angularSpeed;
        },

        set: function(value){
            if(value === this._angularSpeed)return;
            this._angularSpeed = value;

            this.speed.x = this._angularSpeed * Math.cos(this.direction);
            this.speed.y = this._angularSpeed * Math.sin(this.direction);
        }
    },

    direction : {
        get: function(){
            if(this._direction === undefined){
                this._direction = 0;
            }

            return this._direction;
        },

        set: function(value){
            if(value === this._direction)return;
            this._direction = value;

            this.speed.x = this.angularSpeed * Math.cos(this._direction);
            this.speed.y = this.angularSpeed * Math.sin(this._direction);

        }
    },

    flipX : {
        get: function(){
            if(!this._flipX)this._flipX = false;
            return this._flipX;
        },

        set: function(value){
            value = (value !== false);
            if(!this._flipX)this._flipX = false;

            if(value === this._flipX)return;
            this._flipX = value;

            //this.scale.x = -this.scale.x;

        }
    },

    flipY : {
        get: function(){
            if(!this._flipY)this._flipY = false;
            return this._flipY;
        },

        set: function(value){
            value = (value !== false);
            if(!this._flipY)this._flipY = false;

            if(value === this._flipY)return;
            this._flipY = value;

            //this.scale.y = -this.scale.y;
        }
    },

    scaleX: {
        get: function(){
            return this.scale.x;
        },

        set: function(value){
            this.scale.x = value; //(this.flipX) ? -value : value;
        }
    },

    scaleY: {
        get: function(){
            return this.scale.y;
        },

        set: function(value){
            this.scale.y = value; //(this.flipY) ? -value : value;
        }
    }
});

//TODO: next position x+speedX*delta; (para calcular bounding en los updates)
