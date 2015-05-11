var Container = require('./Container'),
    config = require('../core/config'),
    math = require('../../lib/pixi/src/core/math'),
    tempPoint = new math.Point();

function Camera(scene){
    this._init(scene);
}

Camera.prototype = Object.create(Container.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype._init = function(scene){
    Container.prototype._init.call(this);
    this.scene = scene;

    this._zoom = 1;
    this.follow = null;
    this.followPos = new math.Point();

    this.blockX = false;
    this.blockY = false;

    this.setSize(scene.width, scene.height)
        .setPosition(scene.width/2, scene.height/2);
};

Camera.prototype.setFollow = function(target){
    if(target === false){
        this.follow = null;
        return this;
    }

    this.follow = target;
    this.follow.parent.worldTransform.apply(this.follow.position, tempPoint);
    this.followPos.x = tempPoint.x;
    this.followPos.y = tempPoint.y;
    this.x = -this.followPos.x;
    this.y = -this.followPos.y;
    return this;
};

Camera.prototype.animate = function(gameTime, delta){
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

        if(this.follow){
            this._followTarget();
        }
    }
};

Camera.prototype._followTarget = function(){
    this.follow.parent.worldTransform.apply(this.follow.position, tempPoint);
    this.x -= tempPoint.x - this.followPos.x;
    this.y -= tempPoint.y - this.followPos.y;
};

Camera.prototype.unFollow = function(){
    return this.setFollow(false);
};

Camera.prototype.setZoom = function(value){

};

Camera.prototype.zoomIn = function(value){

};

Camera.prototype.zoomOut = function(value){

};

Camera.prototype.goToPosition = function(x,y){

};

Camera.prototype.goToTarget = function(target){

};

Camera.prototype.setBlock = function(x,y){
    this.blockX = !!x;
    this.blockY = !!y;
    return this;
};

Object.defineProperties(Camera.prototype, {
    zoom: {
        get: function(){
            return this._zoom;
        },
        set: function(value){
            //todo:
            this._zoom = value;
        }
    }
});

module.exports = Camera;