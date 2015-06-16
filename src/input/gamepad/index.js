function Gamepad(game){
    this._init(game);
}

Gamepad.prototype.constructor = Gamepad;

Gamepad.prototype._init = function(game){
    this.game = game;
};

module.exports = Gamepad;