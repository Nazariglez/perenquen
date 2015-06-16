var Mouse = require('./mouse'),
    Keyboard = require('./keyboard'),
    Accelerometer = require('./Accelerometer'),
    Gamepad = require('./Gamepad');

function InputManager(game){
    this._init(game);
}

InputManager.prototype.constructor = InputManager;

InputManager.prototype._init = function(game){
    this.game = game;
    this.config = this.game.config.input;

    this.mouse = null;
    this.keyboard = null;
    this.accel = null;
    this.gamepad = [];

    if(this.config.disableContextMenu){
        //Disable context menu
        this.game.canvas.addEventListener('contextmenu', function(e){
            e.preventDefault();
        });
    }

    if(this.config.enableMouse){
        this.enableMouse();
    }
};

InputManager.prototype.enableMouse = function(value){
    value = (value !== false);
    if(value){
        if(!this.mouse){
            this.mouse = new Mouse(this.game, this.config.mousePreventDefault, this.config.enableMouseInteractivity, this.config.checkInteractivityFrecuency);
        }

        this.mouse.enable();
    }else{
        this.mouse.disable();
    }

    return this;
};

InputManager.prototype.disableMouse = function(){
    return this.enableMouse(false);
};

InputManager.prototype.enableKeyboard = function(value){
    value = (value !== false);
    if(value){
        if(!this.keyboard){
            this.keyboard = new Keyboard(this.game);
        }

        this.keyboard.enable();
    }else{
        this.keyboard.disable();
    }

    return this;
};

InputManager.prototype.disableKeyboard = function(){
    return this.enableKeyboard(false);
};

InputManager.prototype.enableAccelerometer = function(value){
    value = (value !== false);
    if(value){
        if(!this.accel){
            this.accel = new Accelerometer();
        }

        this.accel.enable();
    }else{
        this.accel.disable();
    }

    return this;
};

InputManager.prototype.disableAccelerometer = function(){
    return this.enableAccelerometer(false);
};

InputManager.prototype.update = function(gameTime, delta){
    if(this.mouse && this.mouse.isEnabled){
        this.mouse.update(gameTime, delta);
    }

    if(this.keyboard && this.keyboard.isEnabled){
        this.keyboard.update(gameTime, delta);
    }
};

module.exports = InputManager;