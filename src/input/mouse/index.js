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
    this.dirty = false;

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
            this.states.push([]);
        }
    }else{
        evt = new EventData(this);
        this.event.push(evt);
        this.states.push([]);
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

            this._addMouseData(object);

            for (var n = 0; n < this.event.length; n++) {
                if(!this.event[n].isTouch){
                    this.event[n].delta = this.delta;
                }else if(this.event[n].isTouch && !this.event[n].active){
                    continue;
                }

                this.getLocalPosition(object, this.tempPoint, this.event[n].globalPosition);
                this.event[n].x = this.tempPoint.x;
                this.event[n].y = this.tempPoint.y;
                this.event[n].target = object;

                var hit = this.hit(object, this.event[n].globalPosition);

                if (hit) {

                    if (object.interactive) {
                        if (!object._mouseData.mouseOver) {
                            object._mouseData.mouseOver = true;
                            this.fireState(object, Mouse.States.mouseOver);
                        }

                        if (this.states[n][Mouse.States.mouseDown]) {
                            object._mouseData.mouseDown[n] = true;
                            this.fireState(object, Mouse.States.mouseDown, n);
                        }

                        if (this.states[n][Mouse.States.mouseUp]) {
                            object._mouseData.mouseDown[n] = false;
                            this.fireState(object, Mouse.States.mouseUp, n);
                        }

                        if (this.states[n][Mouse.States.rightDown]) {
                            object._mouseData.rightDown = true;
                            this.fireState(object, Mouse.States.rightDown);
                        }

                        if (this.states[n][Mouse.States.rightUp]) {
                            object._mouseData.rightDown = false;
                            this.fireState(object, Mouse.States.rightUp);
                        }

                        if (this.states[n][Mouse.States.middleDown]) {
                            object._mouseData.middleDown = true;
                            this.fireState(object, Mouse.States.middleDown);
                        }

                        if (this.states[n][Mouse.States.middleUp]) {
                            object._mouseData.middleDown = false;
                            this.fireState(object, Mouse.States.middleUp);
                        }

                        if (this.states[n][Mouse.States.mouseMove]) {
                            this.fireState(object, Mouse.States.mouseMove);
                            if (object._mouseData.mouseDown[n]) {
                                this.fireState(object, Mouse.States.mouseDrag, n);
                            }
                            if (object._mouseData.rightDown) {
                                this.fireState(object, Mouse.States.rightDrag);
                            }
                            if (object._mouseData.middleDown) {
                                this.fireState(object, Mouse.States.middleDrag);
                            }
                        }

                        if (this.states[n][Mouse.States.mouseWheel]) {
                            this.fireState(object, Mouse.States.mouseWheel);
                        }
                    }
                } else {
                    if (object.interactive) {
                        if (object._mouseData.mouseOver) {
                            object._mouseData.mouseOver = false;
                            this.fireState(object, Mouse.States.mouseOut);
                        }

                        if (this.states[n][Mouse.States.mouseUp]) {
                            if (object._mouseData.mouseDown[n]) {
                                object._mouseData.mouseDown[n] = false;
                                this.fireState(object, Mouse.States.mouseUp, n);
                            }
                        }

                        if (this.states[n][Mouse.States.rightUp]) {
                            if (object._mouseData.rightDown) {
                                object._mouseData.rightDown = false;
                                this.fireState(object, Mouse.States.rightUp);
                            }
                        }

                        if (this.states[n][Mouse.States.middleUp]) {
                            if (object._mouseData.middleDown) {
                                object._mouseData.middleDown = false;
                                this.fireState(object, Mouse.States.middleUp);
                            }
                        }

                        if (this.states[n][Mouse.States.mouseMove]) {
                            if (object._mouseData.mouseDown[n]) {
                                this.fireState(object, Mouse.States.mouseDrag, n);
                            }

                            if (object._mouseData.rightDown) {
                                this.fireState(object, Mouse.States.rightDrag);
                            }

                            if (object._mouseData.middleDown) {
                                this.fireState(object, Mouse.States.middleDrag);
                            }
                        }
                    }
                }
            }
        }
    }
};

Mouse.prototype._addMouseData = function(object){
    if(object.interactive && !object._mouseData){
        object._mouseData = {
            mouseDown: [],
            mouseOver: false,
            rightDown: false,
            middleDown: false
        };
    }

    return this;
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

    if(!this.dirty){
        return;
    }

    this.processEvent(this.game.sceneManager);
    for(var i = 0; i < this.states.length; i++){
        for(var n = 0; n < this.states[i].length; n++) {
            this.states[i][n] = false;
        }
    }

    for(i = 0; i < this.event.length; i++){
        this.event[i].active = false;
    }

    this.dirty = false;
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

        this.states[0][state] = true;
    }else{
        for(var i = 0; i < e.targetTouches.length; i++){
            var evt = this.getEventFromId(e.targetTouches[i].identifier);
            if(evt){
                continue;
            }

            evt = this.getEventFromId(-1);

            evt._identifier = e.targetTouches[i].identifier;
            evt.isTouch = true;
            evt.originalEvent = e.targetTouches[i];
            evt.isDown = true;
            evt.touches = this.event;
            evt.active = true;
            evt.globalPosition.copy(this.getGlobalCoords(e.targetTouches[i]));

            this.states[evt.id][state] = true;
        }

    }

    this.dirty = true;
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

        this.states[0][state] = true;
    }else{

        for(var i = 0; i < e.changedTouches.length; i++){
            var evt = this.getEventFromId(e.changedTouches[i].identifier);

            evt._identifier = -1;
            evt.isTouch = true;
            evt.originalEvent = e.changedTouches[i];
            evt.isDown = false;
            evt.touches = this.event;
            evt.active = true;
            evt.globalPosition.copy(this.getGlobalCoords(e.changedTouches[i]));

            this.states[evt.id][state] = true;
        }

    }

    this.dirty = true;

};

Mouse.prototype._onMouseMove = function(e){
    if(this.preventDefault){
        e.preventDefault();
    }

    if(e.targetTouches){
        for(var i = 0; i < e.targetTouches.length; i++){
            var evt = this.getEventFromId(e.targetTouches[i].identifier);

            //this.event[id]._identifier = e.targetTouches[i].identifier;
            evt.isTouch = true;
            evt.originalEvent = e.targetTouches[i];
            evt.touches = this.event;
            evt.active = true;
            evt.globalPosition.copy(this.getGlobalCoords(e.targetTouches[i]));

            this.states[evt.id][Mouse.States.mouseMove] = true;
        }
    }else{
        this.event[0].originalEvent = e;
        this.event[0].isTouch = false;
        this.event[0].globalPosition.copy(this.getGlobalCoords(e));

        this.states[0][Mouse.States.mouseMove] = true;
    }

    this.dirty = true;
};

Mouse.prototype.getEventFromId = function(id){
    var evt = null;
    for(var n = 0; n < this.event.length; n++){
        if(this.event[n]._identifier === id){
            evt = this.event[n];
            break;
        }
    }

    return evt;
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
    this.states[0][Mouse.States.mouseWheel] = true;
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