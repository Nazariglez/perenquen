/*var interaction = {
        InteractionData: require('../../../lib/pixi/src/interaction/InteractionData'),
        InteractionManager: require('./InteractionManager'),
        interactiveTarget: require('../../../lib/pixi/src/interaction/interactiveTarget')
    };

//TODO: Reescribir el sistema de interactividad, añadiendo eventos como drag y doble click, gestion de rueda de ratón, nuevo eventdata, multitouch, pixelperfect, keyhandler con combinación de teclas, etc...

module.exports = interaction;*/

var math = require('../../../lib/pixi/src/core/math');

function Mouse(game){
    this.game = game;
    this.point = new math.Point();

    this.isEnabled = false;
}

Mouse.prototype.constructor = Mouse;

Mouse.prototype.enable = function(value){
    this.isEnabled = (value !== false);
    console.log('Mouse', this.isEnabled);
    return this;
};

Mouse.prototype.disable = function(){
    return this.enable(false);
};


module.exports = Mouse;