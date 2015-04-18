var Key = require('./Key');

function Keyboard(game){
    this.game = game;
    this.isEnabled = false;
}

Keyboard.prototype.constructor = Keyboard;

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

};

Keyboard.prototype._disableEvents = function(){

};

module.exports = Keyboard;
