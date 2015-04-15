var math = require('../../../lib/pixi/src/core/math');

function Mouse(game, preventDefault){
    this.game = game;
    this.global = new math.Point();
    this.canvas = this.game.canvas;
    this.resolution = this.game.renderer.resolution || 1;

    this.tempPoint = new math.Point();
    this.isEnabled = false;
    this.preventDefault = preventDefault;

    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);

    this.isDown = false;
    this.isDragging = false;

    this.stopPropagation = false;

    //TODO: Wheel!!!
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

    console.log('Mouse', this.isEnabled);

    return this;
};

Mouse.prototype.disable = function(){
    return this.enable(false);
};

Mouse.prototype._enableEvents = function(){
    this.canvas.addEventListener('mousedown', this._onMouseDown, true);
    this.canvas.addEventListener('mousemove', this._onMouseMove, true);
    this.canvas.addEventListener('mouseout', this._onMouseOut, true);
    this.canvas.addEventListener('mouseover', this._onMouseOver, true);
    window.addEventListener('mouseup', this._onMouseUp, true);
};

Mouse.prototype._disableEvents = function(){
    this.canvas.removeEventListener('mousedown', this._onMouseDown, true);
    this.canvas.removeEventListener('mousemove', this._onMouseMove, true);
    this.canvas.removeEventListener('mouseout', this._onMouseOut, true);
    this.canvas.removeEventListener('mouseover', this._onMouseOver, true);
    window.removeEventListener('mouseup', this._onMouseUp, true);
};

Mouse.prototype.getGlobalCoords = function(e){
    var rect = this.canvas.getBoundingClientRect(),
        x = e.clientX,
        y = e.clientY;

    this.global.x = ( ( x - rect.left ) * (this.canvas.width  / rect.width  ) ) / this.resolution;
    this.global.y = ( ( y - rect.top  ) * (this.canvas.height / rect.height ) ) / this.resolution;
};

Mouse.prototype.processEvent = function(parent, type){
    var len = parent.children.length;

    for(var i = len-1; i >= 0; i--){
        var object = parent.children[i];
        //console.log(object, this.stopPropagation)

        if(object){

            if(!object.visible||this.stopPropagation){
                return;
            }

            var hit = false;

            if(object.hitArea){
                // lets use the hit object first!
                object.worldTransform.applyInverse(this.global,  this.tempPoint);
                hit = displayObject.hitArea.contains(this.tempPoint.x, this.tempPoint.y);
            }else if(object.containsPoint){
                hit = object.containsPoint(this.global);
            }

            if(hit){
                if(object.children.length>0){
                    this.processEvent(object,type);
                    this.stopPropagation = false;
                }

                if(object.interactive){
                    if(object[type]){
                        object[type](this);
                    }
                }
            }

        }
    }
};

Mouse.prototype._onMouseDown = function(e){
    this.getGlobalCoords(e);
    if(this.preventDefault){
        e.preventDefault();
    }

    this.isDown = true;
    this.processEvent(this.game.sceneManager, "onMouseDown");
};

Mouse.prototype._onMouseUp = function(e){
    this.getGlobalCoords(e);
    if(this.preventDefault){
        e.preventDefault();
    }

    this.isDown = false;
    this.isDragging = false;
};

Mouse.prototype._onMouseMove = function(e){
    this.getGlobalCoords(e);
    if(this.preventDefault){
        e.preventDefault();
    }

    if(this.isDown){
        this.isDragging = true;
    }

    //console.log(this.global.x, this.global.y, this.isDragging);
};

Mouse.prototype._onMouseOut = function(e){
    this.getGlobalCoords(e);
    if(this.preventDefault){
        e.preventDefault();
    }
};

Mouse.prototype._onMouseOver = function(e){
    this.getGlobalCoords(e);
    if(this.preventDefault){
        e.preventDefault();
    }
};


module.exports = Mouse;