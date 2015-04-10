var interaction = require('../../../lib/pixi/src/interaction'),
    InteractionManager = interaction.InteractionManager;

var mouseDown = InteractionManager.prototype.onMouseDown,
    processDown = InteractionManager.prototype.processMouseDown,
    processInteractive = InteractionManager.prototype.processInteractive;

InteractionManager.prototype.onMouseDown = function(e){
    console.log('down');
    mouseDown.call(this, e);
};

InteractionManager.prototype.processMouseDown = function(displayObject, hit){
    if(hit){
        console.log('hit',displayObject);
    }
    processDown.call(this, displayObject, hit);
};

InteractionManager.prototype.processInteractive = function(point, displayObject, func, hitTest, interactive){
    //console.log('');
    processInteractive.call(this, point, displayObject, func, hitTest, interactive);
};
