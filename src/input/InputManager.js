var Mouse = require('./mouse');

function InputManager(game){
    this.game = game;
    this.config = this.game.config.input;

    this.mouse = new Mouse(this.game, this.config.preventDefault, this.config.mouseCheckFrecuency);

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
        this.mouse.enable();
    }else{
        this.mouse.disable();
    }

    return this;
};

InputManager.prototype.disableMouse = function(){
    return this.enableMouse(false);
};

InputManager.prototype.update = function(gameTime, delta){
    if(this.mouse.isEnabled){
        this.mouse.update(gameTime, delta);
    }
};

module.exports = InputManager;