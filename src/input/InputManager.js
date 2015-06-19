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
    this.gamepad = null;

    if(this.config.disableContextMenu){
        //Disable context menu
        this.game.canvas.addEventListener('contextmenu', function(e){
            e.preventDefault();
        });
    }

    if(this.config.enableMouse){
        this.enableMouse();
    }

    if(this.config.enableKeyboard){
        this.enableKeyboard();
    }

    if(this.config.enableAccelerometer){
        this.enableAccelerometer();
    }

    if(this.config.enableGamepad){
        this.enableGamepad();
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

InputManager.prototype.enableGamepad = function(value){
    value = (value !== false);
    if(value){
        if(!this.gamepad){
            this.gamepad = new Gamepad();
        }

        this.gamepad.enable();
    }else{
        this.gamepad.disable();
    }

    return this;
};

InputManager.prototype.disableGamepad = function(){
    return this.enableGamepad(false);
};

InputManager.prototype.update = function(gameTime, delta){
    if(this.mouse && this.mouse.isEnabled){
        this.mouse.update(gameTime, delta);
    }

    if(this.keyboard && this.keyboard.isEnabled){
        this.keyboard.update(gameTime, delta);
    }

    if(this.gamepad && this.gamepad.isEnabled){
        this.gamepad.update(gameTime, delta);
    }
};

module.exports = InputManager;