var Key = require('./../Key');

function MouseHotKey(key, manager){
    this._init(key, manager);
}

MouseHotKey.prototype.constructor = MouseHotKey;

MouseHotKey.prototype._init = function(key, manager){
    this.key = key;
    this.manager = manager;
    this.isPressed = false;
    this.isDown = false;
    this.isReleased = false;
};

MouseHotKey.prototype.update = function(gameTime, delta){
    this.isDown = this.manager.isDown(this.key);
    this.isPressed = this.manager.isPressed(this.key);
    this.isReleased = this.manager.isReleased(this.key);
};

MouseHotKey.prototype.remove = function(){
    this.manager.removeHotKey(this.key);
};

MouseHotKey.prototype.hit = function(object){
    return this.manager.hit(object);
};

module.exports = MouseHotKey;