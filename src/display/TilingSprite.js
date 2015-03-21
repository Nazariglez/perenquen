var PixiTilingSprite = require('../../lib/pixi/src/extras/TilingSprite'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

function TilingSprite(texture, width, height){
    if(typeof texture === "string"){
        texture = utils.assetCache.getTexture(texture);
    }
    PixiTilingSprite.call(this, texture, width, height);
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

module.exports = TilingSprite;