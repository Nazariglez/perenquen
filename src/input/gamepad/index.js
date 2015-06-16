var ControllerData = require('./ControllerData'),
    tempArray = [];

function Gamepad(game){
    this._init(game);
}

Gamepad.prototype.constructor = Gamepad;

Gamepad.prototype._init = function(game){
    this.game = game;
    this.isEnabled = false;

    this.controllers = [
        new ControllerData(0),
        new ControllerData(1),
        new ControllerData(2),
        new ControllerData(3)
    ];

    this._connectedGamepads = [false, false, false, false];

    this._onGamepadConnectedCallback = function(){};
    this._onGamepadDisconnectedCallback = function(){};
};

Gamepad.prototype.enable = function(value){
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

Gamepad.prototype.update = function(gameTime, delta){
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