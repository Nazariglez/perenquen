var Container = require('./Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    Graphics = require('./Graphics');

function Scene(game){
    Graphics.call(this);

    this.game = game;
    this.anchor = new math.Point();
    this.pivot = new math.Point();
    this.size = new math.Point(game.width,game.height);

    //TODO: Camera&HUD
    //TODO: Coger solos los metodos que necesito de Graphics para eliminar carga en el objeto? de esta forma se puede heredar de Container para el calculo de bounds

    this._backgroundColor = null;
    this._backgroundColorDirty = false;

    this.manager = null;
}

Scene.prototype = Object.create(Graphics.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.displayObjectUpdateTransform = function(){
    Container.prototype.displayObjectUpdateTransform.call(this);
};

Scene.prototype.setBackgroundColor = function(color){
    this.backgroundColor = color;
    return this;
};

Scene.prototype.setManager = function(manager){
    this.manager = manager;
    return this;
};

Scene.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta) !== false){
        if(this._backgroundColorDirty){
            this.clear();
            if(typeof this.backgroundColor === "number"){
                this.beginFill(this.backgroundColor)
                    .drawRect(0,0,this.manager.game.width,this.manager.game.height)
                    .endFill();
            }
            this._backgroundColorDirty = false;
        }

        var len = this.children.length;
        for(var i = 0; i < len; i++){
            this.children[i].animate(gameTime, delta);
        }
    }

    return this;
};

Object.defineProperties(Scene.prototype, {
    backgroundColor : {
        get: function(){
            return this._backgroundColor;
        },
        set: function(color){
            this._backgroundColorDirty = true;
            this._backgroundColor = color;
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
