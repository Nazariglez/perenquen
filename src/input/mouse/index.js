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

InteractionData.prototype.getLocalPosition = function (displayObject, point, globalPos)
{
    var worldTransform = displayObject.worldTransform;
    var global = globalPos ? globalPos : this.global;

    // do a cheeky transform to get the mouse coords;
    var a00 = worldTransform.a, a01 = worldTransform.c, a02 = worldTransform.tx,
        a10 = worldTransform.b, a11 = worldTransform.d, a12 = worldTransform.ty,
        id = 1 / (a00 * a11 + a01 * -a10);

    point = point || new core.math.Point();

    point.x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id;
    point.y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

    if(displayObject.anchor) {
        //point.x += (displayObject.anchor.x) * displayObject.width;
        //point.y += (displayObject.anchor.y) * displayObject.height;
    }

    // set the mouse coords...
    return point;
};
