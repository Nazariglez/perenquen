var Mouse = require('./mouse'),
    Keyboard = require('./keyboard');

function InputManager(game){
    this.game = game;
    this.config = this.game.config.input;

    this.mouse = null;
    this.keyboard = null;

    if(this.config.disableContextMenu){
        //Disable context menu
        this.game.canvas.addEventListener('contextmenu', function(e){
            e.preventDefault();
        });
    }

    if(this.config.enableMouse){
        this.enableMouse();
    }
}

InputManager.prototype.constructor = InputManager;

InputManager.prototype.enableMouse = function(value){
    value = (value !== false);
    if(value){
        if(!this.mouse){
            this.mouse = new Mouse(this.game, this.config.preventDefault, this.config.mouseCheckFrecuency);
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

InputManager.prototype.update = function(gameTime, delta){
    if(this.mouse && this.mouse.isEnabled){
        this.mouse.update(gameTime, delta);
    }

    if(this.keyboard && this.keyboard.isEnabled){
        this.keyboard.update(gameTime, delta);
    }
};

module.exports = InputManager;