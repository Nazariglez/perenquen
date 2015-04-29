var Container = require('./Container');

function Camera(scene){
    this._init(scene);
}

Camera.prototype = Object.create(Container.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype._init = function(scene){
    Container.prototype._init.call(this);
    this.scene = scene;

    this._zoom = 1;

    this.blockX = false;
    this.blockY = false;

    this.setSize(scene.width, scene.height)
        .setPosition(scene.width/2, scene.height/2);
};

Camera.prototype.setFollow = function(target){

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