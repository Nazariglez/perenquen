var Key = require('./Key');

function HotKey(key, manager){
    this.key = key;
    this.manager = manager;
    this.isPressed = false;
    this.isDown = false;
    this.isReleased = false;

    this.crtl = false;
    this.shift = false;
    this.alt = false;
}

HotKey.prototype.constructor = HotKey;

HotKey.prototype.update = function(gameTime, delta){
    this.isDown = this.manager.isDown(this.key);
    this.isPressed = this.manager.isPressed(this.key);
    this.isReleased = this.manager.isReleased(this.key);
    this.crtl = this.manager.isDown(Key.CTRL);
    this.shift = this.manager.isDown(Key.SHIFT);
    this.alt = this.manager.isDown(Key.ALT);
};

HotKey.prototype.remove = function(){
    this.manager.removeHotKey(this.key);
};

module.exports = HotKey;