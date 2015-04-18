var math = require('../../../lib/pixi/src/core/math'),
    EventData = require('./EventData');

function Mouse(game, preventDefault, checkFrecuency){
    this.game = game;
    this.global = new math.Point();
    this.canvas = this.game.canvas;
    this.resolution = this.game.renderer.resolution || 1;
    this.delta = 0;

    this.tempPoint = new math.Point();
    this.isEnabled = false;
    this.preventDefault = preventDefault;

    this.lastTime = 0;
    this.originalEvent = null;
    this.states = [];

    this.checkFrecuency = checkFrecuency || 30;

    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseWheel = this._onMouseWheel.bind(this);

    this.stopPropagation = false;

    var evt = null;
    this.event = [];
    if('ontouchstart' in window){
        for(var i = 0; i < 10; i++){
            evt = new EventData(this, i);
            this.event.push(evt);
        }
    }else{
        evt = new EventData(this);
        this.event.push(evt);
    }

    //TODO: pixelperfect?, click, dblclick, touches, tap, doubletap
    //TODO: touch y multitouch http://www.html5rocks.com/es/mobile/touch/
}

Mouse.prototype.constructor = Mouse;

Mouse.prototype.enable = function(value){
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

Mouse.prototype.disable = function(){
    return this.enable(false);
};

Mouse.prototype._enableEvents = function(){
    //Mouse events
    this.canvas.addEventListener('mousedown', this._onMouseDown, true);
    this.canvas.addEventListener('mousemove', this._onMouseMove, true);
    //this.canvas.addEventListener('mouseout', this._onMouseOut, true);
    //this.canvas.addEventListener('mouseover', this._onMouseOver, true);
    window.addEventListener('mouseup', this._onMouseUp, true);

    if('onwheel' in window){
        this.canvas.addEventListener('wheel', this._onMouseWheel, true);
    }else if('onmousewheel' in window){
        this.canvas.addEventListener('mousewheel', this._onMouseWheel, true);
    }else if('MouseScrollEvent' in window){
        this.canvas.addEventListener('DOMMouseScroll', this._onMouseWheel, true);
    }

    //Touch events
    this.canvas.addEventListener('touchstart', this._onMouseDown, true);
    this.canvas.addEventListener('touchend', this._onMouseUp, true);
    this.canvas.addEventListener('touchmove', this._onMouseMove, true);
};

Mouse.prototype._disableEvents = function(){
    //Mouse events
    this.canvas.removeEventListener('mousedown', this._onMouseDown, true);
    this.canvas.removeEventListener('mousemove', this._onMouseMove, true);
    //this.canvas.removeEventListener('mouseout', this._onMouseOut, true);
    //this.canvas.removeEventListener('mouseover', this._onMouseOver, true);
    window.removeEventListener('mouseup', this._onMouseUp, true);

    if('onwheel' in window){
        this.canvas.removeEventListener('wheel', this._onMouseWheel, true);
    }else if('onmousewheel' in window){
        this.canvas.removeEventListener('mousewheel', this._onMouseWheel, true);
    }else if('MouseScrollEvent' in window){
        this.canvas.removeEventListener('DOMMouseScroll', this._onMouseWheel, true);
    }

    //Touch events
    this.canvas.removeEventListener('touchstart', this._onMouseDown, true);
    this.canvas.removeEventListener('touchend', this._onMouseUp, true);
    this.canvas.removeEventListener('touchmove', this._onMouseMove, true);
};

Mouse.prototype.getGlobalCoords = function(e){
    var rect = this.canvas.getBoundingClientRect(),
        x = e.clientX,
        y = e.clientY;

    this.global.x = ( ( x - rect.left ) * (this.canvas.width  / rect.width  ) ) / this.resolution;
    this.global.y = ( ( y - rect.top  ) * (this.canvas.height / rect.height ) ) / this.resolution;

    return this.global;
};

Mouse.prototype.processEvent = function(parent){
    var len = parent.children.length;

    for(var i = len-1; i >= 0; i--){
        var object = parent.children[i];

        if(object) {
            if (object.paused || !object.visible || this.stopPropagation) {
                return;
            }

            if (object.children.length > 0) {
                this.processEvent(object);
                this.stopPropagation = false;
            }

            for (var n = 0; n < this.event.length; n++) {
                if(this.event[n].isTouch && !this.event[n].isDown){
                    //if is touch event and is not down continue the loop
                    continue;
                }else{
                    this.event[n].delta = this.delta;
                }

                this.getLocalPosition(object, this.tempPoint, this.event[n].globalPosition);
                this.event[n].x = this.tempPoint.x;
                this.event[n].y = this.tempPoint.y;
                this.event[n].target = object;

                var hit = this.hit(object, this.event[n].globalPosition);

                if (hit) {

                    if (object.interactive) {
                        if (!object._mouseOver) {
                            object._mouseOver = true;
                            this.fireState(object, Mouse.States.mouseOver);
                        }

                        if (this.states[Mouse.States.mouseDown]) {
                            object._mouseDown = true;
                            this.fireState(object, Mouse.States.mouseDown, n);
                        }

                        if (this.states[Mouse.States.mouseUp]) {
                            object._mouseDown = false;
                            this.fireState(object, Mouse.States.mouseUp, n);
                        }

                        if (this.states[Mouse.States.rightDown]) {
                            object._rightDown = true;
                            this.fireState(object, Mouse.States.rightDown);
                        }

                        if (this.states[Mouse.States.rightUp]) {
                            object._rightDown = false;
                            this.fireState(object, Mouse.States.rightUp);
                        }

                        if (this.states[Mouse.States.middleDown]) {
                            object._middleDown = true;
                            this.fireState(object, Mouse.States.middleDown);
                        }

                        if (this.states[Mouse.States.middleUp]) {
                            object._middleDown = false;
                            this.fireState(object, Mouse.States.middleUp);
                        }

                        if (this.states[Mouse.States.mouseMove]) {
                            this.fireState(object, Mouse.States.mouseMove);
                            if (object._mouseDown) {
                                this.fireState(object, Mouse.States.mouseDrag, n);
                            }
                            if (object._rightDown) {
                                this.fireState(object, Mouse.States.rightDrag);
                            }
                            if (object._middleDown) {
                                this.fireState(object, Mouse.States.middleDrag);
                            }
                        }

                        if (this.states[Mouse.States.mouseWheel]) {
                            this.fireState(object, Mouse.States.mouseWheel);
                        }
                    }
                } else {
                    if (object.interactive) {
                        if (object._mouseOver) {
                            object._mouseOver = false;
                            this.fireState(object, Mouse.States.mouseOut);
                        }

                        if (this.states[Mouse.States.mouseUp]) {
                            if (object._mouseDown) {
                                object._mouseDown = false;
                                this.fireState(object, Mouse.States.mouseUp, n);
                            }
                        }

                        if (this.states[Mouse.States.rightUp]) {
                            if (object._rightDown) {
                                object._rightDown = false;
                                this.fireState(object, Mouse.States.rightUp);
                            }
                        }

                        if (this.states[Mouse.States.middleUp]) {
                            if (object._middleDown) {
                                object._middleDown = false;
                                this.fireState(object, Mouse.States.middleUp);
                            }
                        }

                        if (this.states[Mouse.States.mouseMove]) {
                            if (object._mouseDown) {
                                this.fireState(object, Mouse.States.mouseDrag, n);
                            }

                            if (object._rightDown) {
                                this.fireState(object, Mouse.States.rightDrag);
                            }

                            if (object._middleDown) {
                                this.fireState(object, Mouse.States.middleDrag);
                            }
                        }
                    }
                }
            }
        }
    }
};

Mouse.prototype.hit = function(object, position){
    var hit = false;

    if(object.hitArea){
        object.worldTransform.applyInverse(position,  this.tempPoint);
        hit = displayObject.hitArea.contains(this.tempPoint.x, this.tempPoint.y);
    }else if(object.containsPoint){
        hit = object.containsPoint(position);
    }

    return hit;
};

Mouse.prototype.fireState = function(object, state, id){
    id = id || 0;
    var evt = "";
    switch(state){
        case Mouse.States.mouseDown:
            evt = "onMouseDown";
            break;
        case Mouse.States.mouseUp:
            evt = "onMouseUp";
            break;
        case Mouse.States.mouseMove:
            evt = "onMouseMove";
            break;
        case Mouse.States.mouseDrag:
            evt = "onMouseDrag";
            break;
        case Mouse.States.mouseOver:
            evt = "onMouseOver";
            break;
        case Mouse.States.mouseOut:
            evt = "onMouseOut";
            break;
        case Mouse.States.rightDown:
            evt = "onRightDown";
            break;
        case Mouse.States.rightUp:
            evt = "onRightUp";
            break;
        case Mouse.States.rightDrag:
            evt = "onRightDrag";
            break;
        case Mouse.States.middleDown:
            evt = "onMiddleDown";
            break;
        case Mouse.States.middleUp:
            evt = "onMiddleUp";
            break;
        case Mouse.States.middleDrag:
            evt = "onMiddleDrag";
            break;
        case Mouse.States.mouseWheel:
            evt = "onMouseWheel";
            break;
    }

    if(object[evt]){
        object[evt](this.event[id]);
    }
};

Mouse.prototype.update = function(gameTime, delta){
    var t = gameTime - this.lastTime;
    var diff = (t*this.checkFrecuency);

    if(diff < 1){
        return;
    }

    this.lastTime = gameTime;

    if(this.states.indexOf(true) >= 0){
        //this.getGlobalCoords(this.originalEvent);
        this.processEvent(this.game.sceneManager);
    }

    for(var i = 0; i < this.states.length; i++){
        this.states[i] = false;
    }
};

Mouse.prototype._onMouseDown = function(e){
    if(this.preventDefault){
        e.preventDefault();
    }

    var state = Mouse.States.mouseDown;
    if(!e.targetTouches) {
        var isRightButton = e.button === 2 || e.which === 3;
        var isMiddleButton = e.button === 1 || e.which === 2;

        if (isRightButton) {
            state = Mouse.States.rightDown;
        } else if (isMiddleButton) {
            state = Mouse.States.middleDown;
        }

        this.event[0].isTouch = false;
        this.event[0].originalEvent = e;
        this.event[0].isDown = true;
        this.event[0].globalPosition.copy(this.getGlobalCoords(e));
    }else{

        for(var i = 0; i < e.targetTouches.length; i++){
            this.event[i].isTouch = true;
            this.event[i].originalEvent = e.targetTouches[i];
            this.event[i].isDown = true;
            this.event[i].touches = this.event;
            this.event[i].globalPosition.copy(this.getGlobalCoords(e.targetTouches[i]));
        }

    }

    this.states[state] = true;
};

Mouse.prototype._onMouseUp = function(e){
    if(this.preventDefault){
        e.preventDefault();
    }

    var state = Mouse.States.mouseUp;
    if(!e.changedTouches) {
        var isRightButton = e.button === 2 || e.which === 3;
        var isMiddleButton = e.button === 1 || e.which === 2;

        if (isRightButton) {
            state = Mouse.States.rightUp;
        } else if (isMiddleButton) {
            state = Mouse.States.middleUp;
        }

        this.event[0].originalEvent = e;
        this.event[0].isDown = false;
        this.event[0].isTouch = false;
        this.event[0].globalPosition.copy(this.getGlobalCoords(e));
    }else{

        for(var i = 0; i < e.changedTouches.length; i++){
            this.event[i].isTouch = true;
            this.event[i].originalEvent = e.changedTouches[i];
            this.event[i].isDown = true;
            this.event[i].touches = this.event;
            this.event[i].globalPosition.copy(this.getGlobalCoords(e.changedTouches[i]));
        }

    }

    this.states[state] = true;
};

Mouse.prototype._onMouseMove = function(e){
    if(this.preventDefault){
        e.preventDefault();
    }

    if(e.targetTouches){
        for(var i = 0; i < e.targetTouches.length; i++){
            this.event[i].isTouch = true;
            this.event[i].originalEvent = e.targetTouches[i];
            this.event[i].touches = this.event;
            this.event[i].globalPosition.copy(this.getGlobalCoords(e.targetTouches[i]));
        }
    }else{
        this.event[0].originalEvent = e;
        this.event[0].isTouch = false;
        this.event[0].globalPosition.copy(this.getGlobalCoords(e));
    }

    this.states[Mouse.States.mouseMove] = true;
};

Mouse.prototype._onMouseOut = function(e){
    this.originalEvent = e;
    if(this.preventDefault){
        e.preventDefault();
    }

};

Mouse.prototype._onMouseOver = function(e){
    this.originalEvent = e;
    if(this.preventDefault){
        e.preventDefault();
    }

};

Mouse.prototype._onMouseWheel = function(e){
    this.originalEvent = e;
    if(this.preventDefault){
        e.preventDefault();
    }

    //TODO: Firefox check...
    this.delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    this.states[Mouse.States.mouseWheel] = true;
};

Mouse.prototype.getLocalPosition = function (displayObject, point, globalPos) {
    var worldTransform = displayObject.worldTransform;
    var global = globalPos ? globalPos : this.global;

    // do a cheeky transform to get the mouse coords;
    var a00 = worldTransform.a, a01 = worldTransform.c, a02 = worldTransform.tx,
        a10 = worldTransform.b, a11 = worldTransform.d, a12 = worldTransform.ty,
        id = 1 / (a00 * a11 + a01 * -a10);

    point = point || new math.Point();

    point.x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id;
    point.y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

    // set the mouse coords...
    return point;
};

Mouse.States = {
    mouseDown: 0,
    mouseUp: 1,
    mouseMove: 2,
    mouseDrag: 3,
    rightDown: 4,
    rightUp: 5,
    rightDrag: 6,
    middleDown: 7,
    middleUp: 8,
    middleDrag: 9,
    mouseOver: 10,
    mouseOut: 11,
    mouseWheel: 12,
    touchDown: 13,
    touchUp: 14,
    touchMove: 15
};


module.exports = Mouse;