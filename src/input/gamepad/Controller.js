var GamepadButton = require('./GamepadButton');

function Controller(id, gamepadManager){
    this._init(id, gamepadManager);
}

Controller.prototype.constructor = Controller;

Controller.prototype._init = function(id, gamepadManager){
    this.id = id;
    this.manager = gamepadManager;
    this.axeSensibility = this.manager.axeSensibility;

    this.pressedButtons = [];
    this.releasedButtons = [];
    this.downButtons = [];

    this.isConnected = false;
    this.axes = [];
    this.buttons = [];
    this.type = "";
    this.lastTime = 0;

    this.callbacks = {
        down : [],
        pressed : [],
        released : []
    };
};

Controller.prototype.connect = function(data){
    this.isConnected = true;
    this._reset();

    console.log(data);
    this.type = data.id;

    this.updateData(data);
    return this;
};

Controller.prototype.disconnect = function(){
    this.isConnected = false;
    return this;
};

Controller.prototype.updateData = function(data){
    this.lastTime = data.timestamp;

    var i;
    for(i = 0; i < data.axes.length; i++){
        if( (data.axes[i] < 0 && data.axes[i] < -this.axeSensibility) || (data.axes[i] > 0 && data.axes[i] > this.axeSensibility)){
            this.axes[i] = data.axes[i];
        }else{
            this.axes[i] = 0;
        }
    }

    for(i = 0; i < data.buttons.length; i++){
        var button = data.buttons[i];
        this.pressedButtons[i] = false;
        this.releasedButtons[i] = false;


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
    this.buttons = data.buttons;

};

Controller.prototype._reset = function(){
    this.axes = [];
    this.buttons = [];
    this.type = "";
    this.lastTime = 0;
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

module.exports = Controller;