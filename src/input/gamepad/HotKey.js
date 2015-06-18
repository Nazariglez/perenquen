function HotKey(key, controller){
    this._init(key, controller);
}

HotKey.prototype.constructor = HotKey;

HotKey.prototype._init = function(key, controller){
    this.key = key;
    this.controller = controller;
    this.isPressed = false;
    this.isDown = false;
    this.isReleased = false;
    this.value = 0;
};

HotKey.prototype.update = function(gameTime, delta){
    this.isDown = this.controller.isDown(this.key);
    this.isPressed = this.controller.isPressed(this.key);
    this.isReleased = this.controller.isReleased(this.key);
    this.value = this.controller.getValue(this.key);
};

HotKey.prototype.remove = function(){
    this.controller.removeHotKey(this.key);
};

module.exports = HotKey;