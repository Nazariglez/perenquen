var Container = require('./Container'),
    config = require('../core/config'),
    math = require('../../lib/pixi/src/core/math'),
    tempPoint = new math.Point();

var Types = {
    fixed : 0,
    follow: 1
};

function Camera(scene){
    this._init(scene);
}

Camera.prototype = Object.create(Container.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype._init = function(scene){
    Container.prototype._init.call(this);
    this.scene = scene;

    this._zoom = 1;
    this.target = null;
    this.followType = Types.fixed;
    this.followVelocity = 0;

    this.blockX = false;
    this.blockY = false;

    this.setSize(scene.width, scene.height)
        .setPosition(scene.width/2, scene.height/2);
};

Camera.prototype.setFixedTarget = function(target){
    if(target === false){
        this.target = null;
        return this;
    }

    this.target = target;
    this.followType = Types.fixed;
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

        this.applyFollowTarget();
    }
};

Camera.prototype.applyFollowTarget = function(){
    if(this.target){
        this.goToTarget(this.target);
    }
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
    this.position.set(x,y);
    return this;
};

Camera.prototype.goToTarget = function(target){
    var parentMatrix = target.parent.worldTransform;
    parentMatrix.apply(target.position, tempPoint);

    var x = -tempPoint.x + this.x + this.width/ 2,
        y = -tempPoint.y + this.y + this.height/2;

    this.position.set(x,y);
    return this;
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