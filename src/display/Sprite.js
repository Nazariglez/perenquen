var SpriteRenderer = require('./SpriteRenderer'),
    PixiSprite = require('../../lib/pixi/src/core/sprites/Sprite'),
    Container = require('./Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    CONST = require('../core/const'),
    tempPoint = new math.Point(),
    mixin = require('./mixin');

function Sprite(texture){
    PixiSprite.call(this, texture);
    this.setAnchor(0.5,0.5);
    this.speed = new math.Point(0,0);
    this.rotationSpeed = 0;
}

Sprite.prototype = Object.create(PixiSprite.prototype);
Sprite.prototype.constructor = Sprite;
utils.mixin(Sprite, mixin);

Sprite.prototype.displayObjectUpdateTransform = function(){
    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    var anchorWidth = this.anchor.x * this.width,
        anchorHeight = this.anchor.y * this.height,
        pivotWidth = this.pivot.x * this.width,
        pivotHeight = this.pivot.y * this.height;

    // so if rotation is between 0 then we can simplify the multiplication process...
    if (this.rotation % CONST.PI_2)
    {
        // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
        if (this.rotation !== this.rotationCache)
        {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
        }

        // get the matrix values of the displayobject based on its transform properties..
        a  =  this._cr * this.scale.x;
        b  =  this._sr * this.scale.x;
        c  = -this._sr * this.scale.y;
        d  =  this._cr * this.scale.y;
        tx =  this.position.x - anchorWidth*this.scale.x + pivotWidth*this.scale.x;
        ty =  this.position.y - anchorHeight*this.scale.y + pivotHeight*this.scale.y;

        if (pivotWidth || pivotHeight)
        {
            tx -= pivotWidth * a + pivotHeight * c;
            ty -= pivotWidth * b + pivotHeight * d;
        }

        // concat the parent matrix with the objects transform.
        wt.a  = a  * pt.a + b  * pt.c;
        wt.b  = a  * pt.b + b  * pt.d;
        wt.c  = c  * pt.a + d  * pt.c;
        wt.d  = c  * pt.b + d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }
    else
    {
        // lets do the fast version as we know there is no rotation..
        a  = this.scale.x;
        d  = this.scale.y;

        tx = this.position.x - anchorWidth * a;
        ty = this.position.y - anchorHeight * a;

        wt.a  = a  * pt.a;
        wt.b  = a  * pt.b;
        wt.c  = d  * pt.c;
        wt.d  = d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }

    // multiply the alphas..
    this.worldAlpha = this.alpha * this.parent.worldAlpha;

    // reset the bounds each time this is called!
    this._currentBounds = null;
};

Sprite.prototype.setTexture = function(texture){
    this.texture = texture;
    return this;
};

Sprite.prototype.getLocalBounds = function () {
    this._bounds.x = 0;//-this._texture._frame.width * this.anchor.x;
    this._bounds.y = 0;//-this._texture._frame.height * this.anchor.y;
    this._bounds.width = this._texture._frame.width;
    this._bounds.height = this._texture._frame.height;
    return this._bounds;
};

Sprite.prototype.containsPoint = function( point ) {
    this.worldTransform.applyInverse(point,  tempPoint);

    var width = this._texture._frame.width;
    var height = this._texture._frame.height;
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

Object.defineProperties(Sprite.prototype, {
    texture : {
        get : function(){
            return this._texture;
        },
        set : function(value){
            if(typeof value === "string"){
                value = utils.assetCache.getTexture(value);
            }

            if (this._texture === value)
            {
                return;
            }

            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            if (value)
            {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded)
                {
                    this._onTextureUpdate();
                }
                else
                {
                    value.once('update', this._onTextureUpdate, this);
                }
            }
        }
    },

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



module.exports = Sprite;