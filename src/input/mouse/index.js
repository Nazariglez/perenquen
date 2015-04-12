var interaction = require('../../../lib/pixi/src/interaction'),
    math = require('../../../lib/pixi/src/core/math'),
    InteractionManager = interaction.InteractionManager,
    InteractionData = interaction.InteractionData;


/*var mouseDown = InteractionManager.prototype.onMouseDown,
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
var tempPoint = new math.Point();

InteractionManager.prototype.dispatchEvent = function ( displayObject, eventString, eventData ) {
    if(!eventData.stopped){
        eventData.target = displayObject;
        eventData.type = eventString;

        if(eventData.target){
            eventData.data.getLocalPosition(eventData.target, tempPoint, eventData.global);
        }

        displayObject.emit( eventString, tempPoint.x, tempPoint.y, eventData );

        if( displayObject[eventString] ){
            displayObject[eventString]( tempPoint.x, tempPoint.y, eventData );
        }
    }
};*/
