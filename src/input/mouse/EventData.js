var math = require('../../../lib/pixi/src/core/math'),
    tempPoint = new math.Point();

function EventData(manager, id){
    this.manager = manager;
    this.id = id || 0;
    this.x = -1;
    this.y = -1;
    this.globalPosition = new math.Point();
    this.target = null;
    this.delta = 0;
    this.originalEvent = null;
    this.touches = null;
    this.isTouch = true;
    this.isDown = false;
    this.active = false;
    this._identifier = -1;
}

EventData.prototype.constructor = EventData;

EventData.prototype.getPosition = function(target){
    return this.manager.getLocalPosition(target || this.target, tempPoint, this.globalPosition);
};

EventData.prototype.stopPropagation = function() {
    this.manager.stopPropagation = true;
};

EventData.prototype.hit = function(target, position){
    return this.manager.hit(target, position || this.globalPosition);
};

module.exports = EventData;