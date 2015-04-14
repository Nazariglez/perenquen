var InteractionManager = require('../../../lib/pixi/src/interaction/InteractionManager'),
    math = require('../../../lib/pixi/src/core/math'),
    tempPoint = new math.Point();

function getPosition(){
    return this.data.getLocalPosition(this.target, tempPoint, this.data.global);
}

InteractionManager.prototype.dispatchEvent = function ( displayObject, eventString, eventData )
{
    if(!eventData.getPosition){
        eventData.getPosition = getPosition;
    }

    if(!eventData.stopped)
    {
        eventData.target = displayObject;
        eventData.type = eventString;

        displayObject.emit( eventString, eventData );

        if( displayObject[eventString] )
        {
            displayObject[eventString]( eventData );
        }
    }
};

module.exports = InteractionManager;

