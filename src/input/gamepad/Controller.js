var HotKey = require('./HotKey');

function Controller(id, gamepadManager){
    this._init(id, gamepadManager);
}

Controller.prototype.constructor = Controller;

Controller.prototype._init = function(id, gamepadManager){
    this.id = id;
    this.manager = gamepadManager;
    this.axeDeadZone = this.manager.axeDeadZone;

    this.pressedButtons = [];
    this.releasedButtons = [];
    this.downButtons = [];
    this.buttonValues = [];

    this.hotKeys = {};

    this.isConnected = false;
    this.axes = [];
    this.type = "";
    this.lastTime = 0;
    this.mapping = "";

    this.callbacks = {
        down : [],
        pressed : [],
        released : []
    };
};

Controller.prototype.connect = function(data){
    this.isConnected = true;
    this._reset();

    this.mapping = data.mapping;
    this.type = data.id;

    this.updateData(data);
    return this;
};

Controller.prototype.disconnect = function(){
    this.isConnected = false;
    return this;
};

Controller.prototype.updateData = function(data){
    var i;
    for(i = 0; i < data.axes.length; i++){
        if( (data.axes[i] < 0 && data.axes[i] < -this.axeDeadZone) || (data.axes[i] > 0 && data.axes[i] > this.axeDeadZone)){
            this.axes[i] = data.axes[i];
        }else{
            this.axes[i] = 0;
        }
    }

    for(i = 0; i < data.buttons.length; i++){
        var button = data.buttons[i];
        this.pressedButtons[i] = false;
        this.releasedButtons[i] = false;

        this.buttonValues[i] = button.value;

        if(button.pressed){

            if(!this.downButtons[i]){
                this.pressedButtons[i] = true;
                this.downButtons[i] = true;
                this._callback(this.callbacks.pressed, i);
            }

            this._callback(this.callbacks.down, i);
        }

        if(!button.pressed && this.downButtons[i]){
            this.releasedButtons[i] = true;
            this.downButtons[i] = false;
            this.pressedButtons[i] = false;
            this._callback(this.callbacks.released, i);
        }

    }

    this.lastTime = data.timestamp;

    for(var key in this.hotKeys){
        this.hotKeys[key].update();
    }

};

Controller.prototype._reset = function(){
    this.axes = [];
    this.type = "";
    this.lastTime = 0;
    this.mapping = "";
};

Controller.prototype.getHotKey = function(key){
    var hotKey;
    if(this.hotKeys[key]){
        hotKey = this.hotKeys[key];
    }else{
        hotKey = new HotKey(key, this);
    }

    this.hotKeys[key] = hotKey;

    return hotKey;
};

Controller.prototype.removeHotKey = function(key){
    if(this.hotKeys[key]){
        delete this.hotKeys[key];
    }

    return this;
};

Controller.prototype.isPressed = function(key){
    return !!this.pressedButtons[key];
};

Controller.prototype.isReleased = function(key){
    return !!this.releasedButtons[key];
};

Controller.prototype.isDown = function(key){
    return !!this.downButtons[key];
};

Controller.prototype.addCallback = function(state, cb){
    if(state !== "down" && state !== "pressed" && state !== "released"){
        throw new Error('Wrong keyboard state name');
    }

    var index = this.callbacks[state].indexOf(cb);
    if(index === -1){
        this.callbacks[state].push(cb);
    }

    return this;
};

Controller.prototype.removeCallback = function(state, cb){
    if(state !== "down" && state !== "pressed" && state !== "released"){
        throw new Error('Wrong keyboard state name');
    }

    var index = this.callbacks[state].indexOf(cb);
    if(index >= 0){
        this.callbacks[state].splice(index, 1);
    }

    return this;
};

Controller.prototype._callback = function(callbacks, key){
    var len = callbacks.length;
    for(var i = 0; i < len; i++){
        callbacks[i](key);
    }
};

Controller.prototype.getValue = function(key){
    return this.isDown(key) ? this.buttonValues[key] : 0;
};

Controller.prototype.getAxeValue = function(id){
    return this.axes[id];
};

module.exports = Controller;