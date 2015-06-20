var Controller = require('./Controller'),
    Device = require('../../core/Device'),
    tempArray = [];

function Gamepad(game){
    this._init(game);
}

Gamepad.prototype.constructor = Gamepad;

Gamepad.prototype._init = function(game){
    this.game = game;
    this.isEnabled = false;

    this.axeDeadZone = 0.2;

    this.controllers = [
        new Controller(0, this),
        new Controller(1, this),
        new Controller(2, this),
        new Controller(3, this)
    ];

    this._connectedGamepads = [false, false, false, false];

    this._onGamepadConnectedCallback = function(){};
    this._onGamepadDisconnectedCallback = function(){};
};

Gamepad.prototype.enable = function(value){
    if(!Device.hasGamepad)return this;

    value = (value !== false);

    if(value&&!this.isEnabled) {
        this.isEnabled = true;
    }else if(!value&&this.isEnabled){
        this.isEnabled = false;
    }

    return this;
};

Gamepad.prototype.disable = function(){
    return this.enable(false);
};

Gamepad.prototype._onGamepadConnected = function(e){
    this._onGamepadConnectedCallback(e);
};

Gamepad.prototype._onGamepadDisconnected = function(e){
    this._onGamepadDisconnectedCallback(e);
};

Gamepad.prototype.update = function(gameTime){
    if(!this.isEnabled)return;

    var i, gamepads = this._getGamepads();

    for(i = 0; i < gamepads.length; i++){
        if(gamepads[i]){
            this._connectedGamepads[gamepads[i].index] = true;

            if(!this.getController(gamepads[i].index).isConnected){
                this._connect(gamepads[i]);
            }

            this.getController(gamepads[i].index).updateData(gamepads[i]);

        }
    }

    for(i = 0; i < this._connectedGamepads.length; i++){
        if(!this._connectedGamepads[i] && this.controllers[i].isConnected){
            this._disconnect(i);
        }

        this._connectedGamepads[i] = false;
    }

};

Gamepad.prototype._connect = function(gamepad){
    this.getController(gamepad.index).connect(gamepad);
    this._onGamepadConnected(this.getController(gamepad.index));
};

Gamepad.prototype._disconnect = function(index){
    this._onGamepadDisconnected(this.getController(index));
    this.getController(index).disconnect();
};

Gamepad.prototype._getGamepads = function(){
    var gamepads;
    if(navigator.getGamepads){
        gamepads = navigator.getGamepads();
    }else if(navigator.webkitGetGamepads){
        gamepads = navigator.webkitGetGamepads();
    }

    return gamepads || tempArray;
};

Gamepad.prototype.onConnect = function(callback){
    this._onGamepadConnectedCallback = callback;
    return this;
};

Gamepad.prototype.onDisconnect = function(callback){
    this._onGamepadDisconnectedCallback = callback;
    return this;
};

Gamepad.prototype.getController = function(index){
    return this.controllers[index];
};

module.exports = Gamepad;