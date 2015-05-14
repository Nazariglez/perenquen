var Container = require('./Container'),
    CONST = require('../core/const'),
    config = require('../core/config'),
    math = require('../../lib/pixi/src/core/math'),
    tempPoint = new math.Point(),
    minPoint = new math.Point(),
    maxPoint = new math.Point();

//TODO: Separar camara de escena dejando que se implemente en cualquier container
function Camera(scene){
    this._init(scene);
}

Camera.prototype = Object.create(Container.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype._init = function(scene){
    Container.prototype._init.call(this);
    this.scene = scene;

    this._zoom = 1;
    this._target = null;
    this.targetOffset = new math.Point();

    this._minX = false;
    this._maxX = false;
    this._minY = false;
    this._maxY = false;

    this.minXBound = false;
    this.maxXBound = false;
    this.minYBound = false;
    this.maxYBound = false;

    this.zoomMin = 0.2;
    this.zoomMax = 3;

    this.blockX = false;
    this.blockY = false;

    this.marginTop = false;
    this.marginBottom = false;
    this.marginLeft = false;
    this.marginRight = false;

    this.culling = false; //TODO: Implementar culling

    this.setSize(scene.width, scene.height)
        .setPosition(scene.width/2, scene.height/2);
};

Camera.prototype.setCulling = function(value){
    this.culling = (value !== false);
    return this;
};

Camera.prototype.setZoomLimits = function(min, max){
    this.zoomMin = min || 0.2;
    this.zoomMax = max || 3;
    return this;
};

Camera.prototype.setMargin = function(top, bottom, left, right){
    this.marginBottom = bottom;
    this.marginTop = top;
    this.marginLeft = left;
    this.marginRight = right;
    return this;
};

Camera.prototype.checkLimits = function(){
     if(this.target){

        var parentMatrix = this.target.parent.worldTransform,
            minX = (this.minX !== false),
            minY = (this.minY !== false),
            maxX = (this.maxX !== false),
            maxY = (this.maxY !== false);

        if(minX || minY){
            minPoint.x = (minX) ? this.minX : 0;
            minPoint.y = (minY) ? this.minY : 0;

            this.worldTransform.applyInverse(parentMatrix.apply(minPoint, minPoint));

            if(minX)this.minXBound = -minPoint.x + this.x;
            if(minY)this.minYBound = -minPoint.y + this.y;
        }

        if(maxX || maxY){
            maxPoint.x = (maxX) ? this.maxX : 0;
            maxPoint.y = (maxY) ? this.maxY : 0;

            this.worldTransform.applyInverse(parentMatrix.apply(maxPoint, maxPoint));

            if(maxX)this.maxXBound = -maxPoint.x + this.x + this.width;
            if(maxY)this.maxYBound = -maxPoint.y + this.y + this.height;
        }

    }

    return this;
};

Camera.prototype.setTargetOffset = function(x,y){
    this.targetOffset.set(x,y);
    return this;
};

Camera.prototype.setTarget = function(target){
    this.target = target;
    return this;
};

/**
 * View Bounds (don't use if you want use rotation camera)
 * @param minX
 * @param minY
 * @param maxX
 * @param maxY
 * @returns {Camera}
 */
Camera.prototype.setLimits = function(minX, minY, maxX, maxY){
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
    return this;
};

Camera.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta) !== false){

        var tick = (config.useDeltaAnimation) ? delta : 1;

        var len = this.children.length;
        for(var i = 0; i < len; i++){
            this.children[i].animate(gameTime, delta);
        }

        this.applyFollowTarget();

        if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
            this.position.x += this.speed.x * tick;
            this.position.y += this.speed.y * tick;
        }

        if(this.rotationSpeed && this.rotationSpeed !== 0){
            this.rotation += this.rotationSpeed * tick;
        }
    }
};

Camera.prototype.applyFollowTarget = function(){
    if(this.target){
        this.checkLimits();
        this.goToTarget(this.target);
    }
};

Camera.prototype.setZoom = function(value){
    this.zoom = value;
    return this;
};

Camera.prototype.zoomIn = function(value){
    this.zoom += value;
    return this;
};

Camera.prototype.zoomOut = function(value){
    this.zoom -= value;
    return this;
};

Camera.prototype.goToPosition = function(x,y){
    this.position.set(x,y);
    return this;
};

Camera.prototype.goToTarget = function(target){
    var x, y,
        parentMatrix = target.parent.worldTransform;

    tempPoint.copy(target.position);
    tempPoint.x += this.targetOffset.x;
    tempPoint.y += this.targetOffset.y;

    this.worldTransform.applyInverse(parentMatrix.apply(tempPoint, tempPoint));
    if(!this.blockX){
        var existsMarginX = (typeof this.marginLeft === "number" || typeof this.marginRight === "number");
        x = this.x;

        if(existsMarginX){
            if(typeof this.marginLeft === "number" && tempPoint.x < this.marginLeft) {
                x = (x - tempPoint.x) + this.marginLeft;
            }else if(typeof this.marginRight === "number" && tempPoint.x > this.width-this.marginRight) {
                x = (x - tempPoint.x) + (this.width-this.marginRight);
            }
        }else{
            x = (x - tempPoint.x) + this.width/2;
        }

        if(this.minX !== false && x > this.minXBound){
            x = this.minXBound;
        }else if(this.maxX !== false && x < this.maxXBound){
            x = this.maxXBound;
        }

        this.x = x;
    }

    if(!this.blockY){
        var existsMarginY = (typeof this.marginTop === "number" || typeof this.marginBottom === "number");
        y = this.y;

        if(existsMarginY){
            if(typeof this.marginTop === "number" && tempPoint.y < this.marginTop) {
                y = (y - tempPoint.y) + this.marginTop;
            }else if(typeof this.marginBottom === "number" && tempPoint.y > this.height-this.marginBottom) {
                y = (y - tempPoint.y) + (this.height-this.marginBottom);
            }
        }else{
            y = (y - tempPoint.y) + this.height/2;
        }


        if(this.minY !== false && y > this.minYBound){
            y = this.minYBound;
        }else if(this.maxY !== false && y < this.maxYBound){
            y = this.maxYBound;
        }

        this.y = y;
    }

    return this;
};

Camera.prototype.setBlockX = function(value){
    this.blockX = (value !== false);
    return this;
};

Camera.prototype.setBlockY = function(value){
    this.blockY = (value !== false);
    return this;
};

Object.defineProperties(Camera.prototype, {
    zoom: {
        get: function(){
            return this._zoom;
        },
        set: function(value){
            if(value > this.zoomMax || value < this.zoomMin)return;

            this._zoom = value;
            this.scale.set(value);
        }
    },

    target: {
        get: function(){
            return this._target;
        },

        set: function(value){
            if(!value){
                this._target = null;
                this.targetOffset.set(0,0);
            }else{
                this._target = value;
            }

        }
    },

    minX : {
        get: function(){
            return this._minX;
        },
        set: function(value){
            if(typeof value !== "number")value = false;

            this._minX = value;
        }
    },

    maxX : {
        get: function(){
            return this._maxX;
        },
        set: function(value){
            if(typeof value !== "number")value = false;

            this._maxX = value;
        }
    },

    minY : {
        get: function(){
            return this._minY;
        },
        set: function(value){
            if(typeof value !== "number")value = false;

            this._minY = value;
        }
    },

    maxY : {
        get: function(){
            return this._maxY;
        },
        set: function(value){
            if(typeof value !== "number")value = false;

            this._maxY = value;
        }
    }
});

module.exports = Camera;

//TODO: No permitir hacer zoomOut si se pasa de los bounds establecidos
//TODO: Movimiento mediante aceleración (speed) además del tipo fixed?