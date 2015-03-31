var PixiTilingSprite = require('../../lib/pixi/src/extras/TilingSprite'),
    utils = require('../core/utils'),
    mixin = require('./mixin'),
    math = require('../../lib/pixi/src/core/math'),
    config = require('../core/config'),
    Sprite = require('./Sprite');

function TilingSprite(texture, width, height){
    if(typeof texture === "string"){
        texture = utils.assetCache.getTexture(texture);
    }
    PixiTilingSprite.call(this, texture, width, height);
    this.setAnchor(0.5,0.5);
    this.speed = new math.Point(0,0);
    this.rotationSpeed = 0;
    this.tileSpeed = new math.Point(0,0);
}

TilingSprite.prototype = Object.create(PixiTilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;
utils.mixin(TilingSprite, mixin);

TilingSprite.prototype.setTileScale = function(x,y){
    this.tileScale.set(x,y);
    return this;
};

TilingSprite.prototype.setTilePosition = function(x,y){
    this.tilePosition.set(x,y);
    return this;
};

TilingSprite.prototype.displayObjectUpdateTransform = Sprite.prototype.displayObjectUpdateTransform;

TilingSprite.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta) === false)return this;

    var tick = (config.useDeltaAnimation) ? delta : 1;

    if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
        this.position.x += this.speed.x * tick;
        this.position.y += this.speed.y * tick;
    }

    if(this.rotationSpeed && this.rotationSpeed !== 0){
        this.rotation += this.rotationSpeed * tick;
    }

    if(this.tileSpeed && (this.tileSpeed.x !== 0 || this.tileSpeed.y !== 0)){
        this.tilePosition.x += this.tileSpeed.x * tick;
        this.tilePosition.y += this.tileSpeed.y * tick;
    }

    var len = this.children.length;
    for(var i = 0; i < len; i++) {
        this.children[i].animate(gameTime, delta);
    }

    return this;
};

TilingSprite.prototype.setTileSpeed = function(x,y){
    this.tileSpeed.set(x,y);
    return this;
};

Object.defineProperties(TilingSprite.prototype, {
    depth : {
        get: function(){
            return this._depth || 0;
        },
        set: function(depth){
            if(this._depth === depth)return;

            this._depth = depth;
            if(this.parent){
                this.parent.sortChildrenByDepth();
            }
        }
    }
});

module.exports = TilingSprite;