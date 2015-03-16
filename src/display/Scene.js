var Container = require('./Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    Graphics = require('./Graphics');

function Scene(game){
    Container.call(this);

    this.game = game;
    this.size.set(game.width,game.height);
    this.setAnchor(0,0);

    //TODO: Camera&HUD

    this._backgroundColor = null;
    this._backgroundColorDirty = false;

    this.bgGraphic = new PQ.Graphics()
        .setAnchor(0,0)
        .addTo(this);

    this.manager = null;

    this.paused = false;
}

Scene.prototype = Object.create(Container.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.displayObjectUpdateTransform = function(){
    Container.prototype.displayObjectUpdateTransform.call(this);
};

Scene.prototype.setBackgroundColor = function(color){
    this.backgroundColor = color;
    //this.bgGraphic.cacheAsBitmap = true;
    return this;
};

Scene.prototype.setManager = function(manager){
    this.manager = manager;
    return this;
};

Scene.prototype.animate = function(gameTime, delta){
    if(this.paused || this.update(gameTime, delta) === false){
        return this;
    }

    if(this._backgroundColorDirty){
        this.bgGraphic.clear();
        if(typeof this.backgroundColor === "number"){
            this.bgGraphic.beginFill(this.backgroundColor)
                .drawRect(0,0,this.width,this.height)
                .endFill();
        }
        this._backgroundColorDirty = false;
    }

    var len = this.children.length;
    for(var i = 0; i < len; i++){
        this.children[i].animate(gameTime, delta);
    }

    return this;
};

Scene.prototype.setPause = function(value){
    value = (value !== false);
    this.paused = value;
    return this;
};

Object.defineProperties(Scene.prototype, {
    backgroundColor : {
        get: function(){
            return this._backgroundColor;
        },
        set: function(color){
            if(color !== this._backgroundColor) {
                //if (this.bgGraphic.cacheAsBitmap)this.bgGraphic.cacheAsBitmap = false;
                this._backgroundColorDirty = true;
                this._backgroundColor = color;
            }
        }
    },

    width : {
        get: function(){
            return this.size.x;
        }
    },
    height: {
        get: function(){
            return this.size.y;
        }
    }
});

module.exports = Scene;
