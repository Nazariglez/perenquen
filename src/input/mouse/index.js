var math = require('../../../lib/pixi/src/core/math');

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

    var scope = this;
    this.event = {
        x: -1,
        y: -1,
        globalPosition: this.global,
        target: null,
        delta: this.delta,
        getPosition: function(target){
            return scope.getLocalPosition(target || this.target, scope.tempPoint, this.globalPosition);
        },
        stopPropagation: function(){
            scope.stopPropagation = true;
        },
        hit: function(object, position){
            return scope.hit(object, position || this.globalPosition);
        }
    };

    //TODO: pixelperfect?, click, dblclick, touches, tap, doubletap
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
};

Mouse.prototype._disableEvents = function(){
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
};

Mouse.prototype.getGlobalCoords = function(e){
    var rect = this.canvas.getBoundingClientRect(),
        x = e.clientX,
        y = e.clientY;

    this.global.x = ( ( x - rect.left ) * (this.canvas.width  / rect.width  ) ) / this.resolution;
    this.global.y = ( ( y - rect.top  ) * (this.canvas.height / rect.height ) ) / this.resolution;
};

Mouse.prototype.processEvent = function(parent){
    var len = parent.children.length;

    for(var i = len-1; i >= 0; i--){
        var object = parent.children[i];

        if(object){
            if(object.paused||!object.visible||this.stopPropagation){
                return;
            }

            if(object.children.length>0){
                this.processEvent(object);
                this.stopPropagation = false;
            }

            this.getLocalPosition(object, this.tempPoint, this.global);
            this.event.x = this.tempPoint.x;
            this.event.y = this.tempPoint.y;
            this.event.globalPosition = this.global;
            this.event.target = object;
            this.event.delta = this.delta;

            var hit = this.hit(object, this.global);

            if(hit){

                if(object.interactive){
                    if(!object._mouseOver){
                        object._mouseOver = true;
                        this.fireState(object, Mouse.States.mouseOver);
                    }

                    if(this.states[Mouse.States.mouseDown]){
                        object._mouseDown = true;
                        this.fireState(object, Mouse.States.mouseDown);
                    }

                    if(this.states[Mouse.States.mouseUp]){
                        object._mouseDown = false;
                        this.fireState(object, Mouse.States.mouseUp);
                    }

                    if(this.states[Mouse.States.rightDown]){
                        object._rightDown = true;
                        this.fireState(object, Mouse.States.rightDown);
                    }

                    if(this.states[Mouse.States.rightUp]){
                        object._rightDown = false;
                        this.fireState(object, Mouse.States.rightUp);
                    }

                    if(this.states[Mouse.States.middleDown]){
                        object._middleDown = true;
                        this.fireState(object, Mouse.States.middleDown);
                    }

                    if(this.states[Mouse.States.middleUp]){
                        object._middleDown = false;
                        this.fireState(object, Mouse.States.middleUp);
                    }

                    if(this.states[Mouse.States.mouseMove]){
                        this.fireState(object, Mouse.States.mouseMove);
                        if(object._mouseDown){
                            this.fireState(object, Mouse.States.mouseDrag);
                        }
                        if(object._rightDown){
                            this.fireState(object, Mouse.States.rightDrag);
                        }
                        if(object._middleDown){
                            this.fireState(object, Mouse.States.middleDrag);
                        }
                    }

                    if(this.states[Mouse.States.mouseWheel]){
                        this.fireState(object, Mouse.States.mouseWheel);
                    }
                }
            }else{
                if(object.interactive){
                    if(object._mouseOver){
                        object._mouseOver = false;
                        this.fireState(object, Mouse.States.mouseOut);
                    }

                    if(this.states[Mouse.States.mouseUp]){
                        if(object._mouseDown) {
                            object._mouseDown = false;
                            this.fireState(object, Mouse.States.mouseUp);
                        }
                    }

                    if(this.states[Mouse.States.rightUp]){
                        if(object._rightDown) {
                            object._rightDown = false;
                            this.fireState(object, Mouse.States.rightUp);
                        }
                    }

                    if(this.states[Mouse.States.middleUp]){
                        if(object._middleDown) {
                            object._middleDown = false;
                            this.fireState(object, Mouse.States.middleUp);
                        }
                    }

                    if(this.states[Mouse.States.mouseMove]){
                        if(object._mouseDown) {
                            this.fireState(object, Mouse.States.mouseDrag);
                        }

                        if(object._rightDown){
                            this.fireState(object, Mouse.States.rightDrag);
                        }

                        if(object._middleDown){
                            this.fireState(object, Mouse.States.middleDrag);
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

Mouse.prototype.fireState = function(object, state){
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
        object[evt](this.event);
    }
};

Mouse.prototype.update = function(gameTime, delta){
    var t = gameTime - this.lastTime;
    var diff = (t*this.checkFrecuency);

    if(diff < 1){
        return;
    }

    this.lastTime = gameTime;

    if(this.originalEvent && this.states.indexOf(true) >= 0){
        this.getGlobalCoords(this.originalEvent);
        this.processEvent(this.game.sceneManager);
    }

    for(var i = 0; i < this.states.length; i++){
        this.states[i] = false;
    }
};

Mouse.prototype._onMouseDown = function(e){
    this.originalEvent = e;
    if(this.preventDefault){
        e.preventDefault();
    }

    var state = Mouse.States.mouseDown;
    var isRightButton = e.button === 2 || e.which === 3;
    var isMiddleButton = e.button === 1 || e.which === 2;

    if(isRightButton){
        state = Mouse.States.rightDown;
    }else if(isMiddleButton){
        state = Mouse.States.middleDown;
    }

    this.states[state] = true;
};

Mouse.prototype._onMouseUp = function(e){
    this.originalEvent = e;
    if(this.preventDefault){
        e.preventDefault();
    }

    var state = Mouse.States.mouseUp;
    var isRightButton = e.button === 2 || e.which === 3;
    var isMiddleButton = e.button === 1 || e.which === 2;

    if(isRightButton){
        state = Mouse.States.rightUp;
    }else if(isMiddleButton){
        state = Mouse.States.middleUp;
    }

    this.states[state] = true;
};

Mouse.prototype._onMouseMove = function(e){
    this.originalEvent = e;
    if(this.preventDefault){
        e.preventDefault();
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
    mouseWheel: 12
};


module.exports = Mouse;