var SpriteRenderer = require('./SpriteRenderer'),
    PixiSprite = require('../../lib/pixi/src/core/sprites/Sprite'),
    Container = require('./Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    mixin = require('./mixin');

function Sprite(texture){
    PixiSprite.call(this, texture);
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
    if (this.rotation % math.PI_2)
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
        tx =  this.position.x;// - pivotWidth * this.scale.x + anchorWidth*this.scale.x;
        ty =  this.position.y;// - pivotHeight * this.scale.y + anchorHeight*this.scale.y;

        var apx = -anchorWidth + pivotWidth;
        var apy = -anchorHeight + pivotHeight;
        var pax = -pivotWidth + anchorWidth;
        var pay = -pivotHeight + anchorHeight;
        //TODO: EL Pivot no se comporta como debe, REVISAR
        // check for pivot.. not often used so geared towards that fact!
        if (pivotWidth !== anchorWidth) {
            tx += apx;
            //tx += pivotWidth;
            //tx += pivotWidth * this.scale.x;
            tx -= pax * a + pay * c;
            //tx -= apx * a + apy * c;

            //tx += -pivotWidth + anchorWidth;
        }

        if (pivotHeight !== anchorHeight) {
            ty += apy;
            //ty += pivotHeight;
            //ty -= pivotHeight * this.scale.y;
            ty -= pax * b + pay * d;
            //ty -= apx * b + apy * d;

            //ty += -pivotHeight + anchorHeight;
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

        tx = this.position.x;// + anchorWidth * a;
        ty = this.position.y;// + anchorHeight * a;

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
    }
});



module.exports = Sprite;