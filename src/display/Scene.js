var Graphics = require('../../lib/pixi/src/core/graphics/Graphics');

function Scene(){
    Graphics.call(this);
    this._backgroundColor = null;
    this._backgroundColorDirty = false;

    this.manager = null;
}

Scene.prototype = Object.create(Graphics.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.setBackgroundColor = function(color){
    this.backgroundColor = color;
    return this;
};

Scene.prototype.setManager = function(manager){
    this.manager = manager;
    return this;
};

Scene.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta)){
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

Scene.prototype.update = function(gameTime, delta){
    return true;
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
    }
});

module.exports = Scene;
