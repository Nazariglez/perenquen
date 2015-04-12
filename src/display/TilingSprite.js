var PixiTilingSprite = require('../../lib/pixi/src/extras/TilingSprite'),
    utils = require('../core/utils'),
    mixin = require('./mixin'),
    math = require('../../lib/pixi/src/core/math'),
    config = require('../core/config'),
    tempPoint = new math.Point(),
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

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} a reference to the canvas renderer
 * @private
 */
TilingSprite.prototype._renderCanvas = function (renderer) {
    var context = renderer.context;

    context.globalAlpha = this.worldAlpha;

    var transform = this.worldTransform;

    var resolution = renderer.resolution;

    context.setTransform(transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution);

    if (!this.__tilePattern ||  this._refreshTexture)
    {
        this.generateTilingTexture(false);

        if (this._tilingTexture)
        {
            this.__tilePattern = context.createPattern(this._tilingTexture.baseTexture.source, 'repeat');
        }
        else
        {
            return;
        }
    }

    // check blend mode
    if (this.blendMode !== renderer.currentBlendMode)
    {
        renderer.currentBlendMode = this.blendMode;
        context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    var tilePosition = this.tilePosition;
    var tileScale = this.tileScale;

    tilePosition.x %= this._tilingTexture.baseTexture.width;
    tilePosition.y %= this._tilingTexture.baseTexture.height;

    context.scale(tileScale.x,tileScale.y);
    context.translate(tilePosition.x, tilePosition.y);

    context.fillStyle = this.__tilePattern;

    context.fillRect(-tilePosition.x,
        -tilePosition.y,
        this._width / tileScale.x,
        this._height / tileScale.y);

    context.translate(-tilePosition.x + (this.anchor.x * this._width), -tilePosition.y + (this.anchor.y * this._height));
    context.scale(1 / tileScale.x, 1 / tileScale.y);
};

TilingSprite.prototype.getLocalBounds = function () {
    this._bounds.x = 0;//-this._texture._frame.width * this.anchor.x;
    this._bounds.y = 0;//-this._texture._frame.height * this.anchor.y;
    this._bounds.width = this._width;
    this._bounds.height = this._height;
    return this._bounds;
};

TilingSprite.prototype.containsPoint = function( point ) {
    this.worldTransform.applyInverse(point,  tempPoint);

    var width = this._width;
    var height = this._height;
    var x1 = 0;//-width * this.anchor.x;
    var y1;

    if ( tempPoint.x > x1 && tempPoint.x < x1 + width )
    {
        y1 = 0;// -height * this.anchor.y;

        if ( tempPoint.y > y1 && tempPoint.y < y1 + height )
        {
            return true;
        }
    }

    return false;
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer}
 * @private
 */
TilingSprite.prototype._renderWebGL = function (renderer)
{
    if (!this._tilingTexture || this._refreshTexture)
    {
        this.generateTilingTexture(renderer, this.texture, true);
    }

    // tweak our texture temporarily..
    var texture = this._tilingTexture;

    if(!texture)
    {
        return;
    }


    var uvs = this._uvs;

    this.tilePosition.x %= texture.baseTexture.width / this._tileScaleOffset.x;
    this.tilePosition.y %= texture.baseTexture.height / this._tileScaleOffset.y;

    var offsetX =  this.tilePosition.x/(texture.baseTexture.width / this._tileScaleOffset.x);
    var offsetY =  this.tilePosition.y/(texture.baseTexture.height / this._tileScaleOffset.y);

    var scaleX =  (this._width / texture.baseTexture.width) * this._tileScaleOffset.x;
    var scaleY =  (this._height / texture.baseTexture.height) * this._tileScaleOffset.y;

    scaleX /= this.tileScale.x;
    scaleY /= this.tileScale.y;

    uvs.x0 = 0 - offsetX;
    uvs.y0 = 0 - offsetY;

    uvs.x1 = (1 * scaleX) - offsetX;
    uvs.y1 = 0 - offsetY;

    uvs.x2 = (1 * scaleX) - offsetX;
    uvs.y2 = (1 * scaleY) - offsetY;

    uvs.x3 = 0 - offsetX;
    uvs.y3 = (1 * scaleY) - offsetY;

    var tempUvs = texture._uvs;
    var tempWidth = texture._frame.width;
    var tempHeight = texture._frame.height;

    texture._uvs = uvs;
    texture._frame.width = this._width;
    texture._frame.height = this._height;

    renderer.setObjectRenderer(renderer.plugins.sprite);
    renderer.plugins.sprite.render(this);

    texture._uvs = tempUvs;
    texture._frame.width = tempWidth;
    texture._frame.height = tempHeight;

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
    },

    width: {
        get: function ()
        {
            return this._width*this.scale.x;
        },
        set: function (value)
        {
            this._width = value/this.scale.x;
        }
    },

    /**
     * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof TilingSprite#
     */
    height: {
        get: function ()
        {
            return this._height*this.scale.y;
        },
        set: function (value)
        {
            this._height = value/this.scale.y;
        }
    }
});

module.exports = TilingSprite;