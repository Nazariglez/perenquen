var HotKey = require('./HotKey');

function Keyboard(game){
    this._init(game);
}

Keyboard.prototype.constructor = Keyboard;

Keyboard.prototype._init = function(game){
    this.game = game;
    this.isEnabled = false;

    this.pressedKeys = [];
    this.releasedKeys = [];
    this.downKeys = [];

    this.hotKeys = {};
    this.preventDefaultKeys = [];

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);

    this.callbacks = {
        down : [],
        pressed : [],
        released : []
    };
};

Keyboard.prototype.enable = function(value){
    value = (value !== false);

    if(value&&!this.isEnabled) {
        this.isEnabled = true;
        this._enableEvents();
    }else if(!value&&this.isEnabled){
        this.isEnabled = false;
        this._disableEvents();
    }

    return this;
};

Keyboard.prototype.disable = function(){
    return this.enable(false);
};

Keyboard.prototype._enableEvents = function(){
    window.addEventListener('keydown', this._onKeyDown, true);
    window.addEventListener('keyup', this._onKeyUp, true);
};

Keyboard.prototype._disableEvents = function(){
    window.removeEventListener('keydown', this._onKeyDown, true);
    window.removeEventListener('keyup', this._onKeyUp, true);
};

Keyboard.prototype.setPreventDefault = function(key, value){
    value = (value !== false);
    if(Object.prototype.toString.call(key) === "[object Array]"){
        for(var i = 0; i < key.length; i++){
            this.preventDefaultKeys[key[i]] = value;
        }
    }else {
        this.preventDefaultKeys[key] = value;
    }
    return this;
};

Keyboard.prototype.getHotKey = function(key){
    var hotKey;
    if(this.hotKeys[key]){
        hotKey = this.hotKeys[key];
    }else{
        hotKey = new HotKey(key, this);
    }

    this.hotKeys[key] = hotKey;

    return hotKey;
};

Keyboard.prototype.removeHotKey = function(key){
    if(this.hotKeys[key]){
        delete this.hotKeys[key];
    }

    return this;
};

Keyboard.prototype._onKeyDown = function(e){
    var key = e.which || e.keyCode;

    if(this.preventDefaultKeys[key]){
        e.preventDefault();
    }

    if(!this.isDown(key)){
        this.downKeys.push(key);
        this.pressedKeys[key] = true;

        var len = this.callbacks.pressed.length;
        for(var i = 0; i < len; i++){
            this.callbacks.pressed[i](key);
        }
    }
};

Keyboard.prototype._onKeyUp = function(e){
    var key = e.which || e.keyCode;

    if(this.preventDefaultKeys[key]){
        e.preventDefault();
    }

    if(this.isDown(key)){
        this.pressedKeys[key] = false;
        this.releasedKeys[key] = true;

        var downIndex = this.downKeys.indexOf(key);
        if(downIndex >= 0){
            this.downKeys.splice(downIndex, 1);
        }

        var len = this.callbacks.released.length;
        for(var i = 0; i < len; i++){
            this.callbacks.released[i](key);
        }
    }
};

Keyboard.prototype.isDown = function(key){
    return (this.downKeys.indexOf(key) >= 0);
};

Keyboard.prototype.isPressed = function(key){
    return !!this.pressedKeys[key];
};

Keyboard.prototype.isReleased = function(key){
    return !!this.releasedKeys[key];
};

Keyboard.prototype.update = function(gameTime){
    for(var key in this.hotKeys){
        this.hotKeys[key].update(gameTime);
    }

    var len = this.callbacks.down.length;
    for(var i = 0; i < len; i++){
        for(var n = 0; n < this.downKeys.length; n++) {
            this.callbacks.down[i](this.downKeys[n]);
        }
    }

    this.pressedKeys.length = 0;
    this.releasedKeys.length = 0;
};

Keyboard.prototype.addCallback = function(state, cb){
    if(state !== "down" && state !== "pressed" && state !== "released"){
        throw new Error('Wrong keyboard state name');
    }

    var index = this.callbacks[state].indexOf(cb);
    if(index === -1){
        this.callbacks[state].push(cb);
    }

    return this;
};

Keyboard.prototype.removeCallback = function(state, cb){
    if(state !== "down" && state !== "pressed" && state !== "released"){
        throw new Error('Wrong keyboard state name');
    }

    var index = this.callbacks[state].indexOf(cb);
    if(index >= 0){
        this.callbacks[state].splice(index, 1);
    }

    return this;
};

//TODO: Maybe something like mousetrap.js? it's cool
module.exports = Keyboard;
