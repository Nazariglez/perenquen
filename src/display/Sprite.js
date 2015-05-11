var SpriteRenderer = require('./SpriteRenderer'),
    PixiSprite = require('../../lib/pixi/src/core/sprites/Sprite'),
    Container = require('./Container'),
    utils = require('../core/utils'),
    config = require('../core/config'),
    CanvasTinter = require('../../lib/pixi/src/core/renderers/canvas/utils/CanvasTinter'),
    math = require('../../lib/pixi/src/core/math'),
    CONST = require('../core/const'),
    AnimationManager = require('./animation/AnimationManager'),
    Texture = require('../../lib/pixi/src/core/textures/Texture'),
    tempPoint = new math.Point();

function Sprite(texture){
    this._init(texture);
}

Sprite.prototype = Object.create(PixiSprite.prototype);
Sprite.prototype.constructor = Sprite;

Sprite.prototype._init = function(texture){
    PixiSprite.call(this, texture);
    this.setAnchor(0.5,0.5);
    this.speed = new math.Point(0,0);
    this.rotationSpeed = 0;
    this.animationManager = new AnimationManager(this);
    this.isCropped = false;
    this._unCroppedTexture = null;
};

Sprite.prototype.animate = function(gameTime, delta){
    if(this.update(gameTime, delta) === false)return this;

    this.animationManager.animate(gameTime, delta);

    var tick = (config.useDeltaAnimation) ? delta : 1;

    if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
        this.position.x += this.speed.x * tick;
        this.position.y += this.speed.y * tick;
    }

    if(this.rotationSpeed && this.rotationSpeed !== 0){
        this.rotation += this.rotationSpeed * tick;
    }

    var len = this.children.length;
    for(var i = 0; i < len; i++){
        this.children[i].animate(gameTime, delta);
    }

    return this;
};

Sprite.prototype.setCrop = function(x,y,width,height){
    if(x === false){
        if(this.isCropped) {
            //this.texture.destroy(); //TODO: Maybe destroy the texture cropped?
            this.texture = this._unCroppedTexture;
            this.isCropped = false;
        }
        return this;
    }

    if(!this.isCropped){
        this._unCroppedTexture = this.texture;
        this.texture = new Texture(this.texture, this.texture.frame.clone(), this.texture.crop.clone());
        this.isCropped = true;
    }

    var frameX = this._unCroppedTexture.frame.x,
        frameY = this._unCroppedTexture.frame.y;

    //TODO: No permitir que pasen medidas anteriores al frame, ni mayores, para evitar mostrar otras cosas en los sheets

    this.texture.crop.x = frameX + x;
    this.texture.crop.y = frameY + y;
    this.texture.crop.width = width;
    this.texture.crop.height = height;

    this.texture.frame.width = this.texture.crop.width;
    this.texture.frame.height = this.texture.crop.height;

    this.texture.width = this.texture.frame.width;
    this.texture.height = this.texture.frame.height;

    this.texture._updateUvs();

    return this;
};

Sprite.prototype.displayObjectUpdateTransform = function(){
    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    //anchor, pivot, and flip variables
    var sx = (this.flipX) ? -this.scale.x : this.scale.x,
        sy = (this.flipY) ? -this.scale.y : this.scale.y,
        ax = (this.flipX) ? 1-this.anchor.x : this.anchor.x,
        ay = (this.flipY) ? 1-this.anchor.y : this.anchor.y,
        px = (this.flipX) ? 1-this.pivot.x : this.pivot.x,
        py = (this.flipY) ? 1-this.pivot.y : this.pivot.y;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    var anchorWidth = ax * this.texture.width * sx,
        anchorHeight = ay * this.texture.height * sy,
        pivotWidth = px * this.texture.width * sx,
        pivotHeight = py * this.texture.height * sy;

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
        a  =  this._cr * sx;
        b  =  this._sr * sx;
        c  = -this._sr * sy;
        d  =  this._cr * sy;
        tx =  this.position.x + pivotWidth - anchorWidth;
        ty =  this.position.y + pivotHeight - anchorHeight;

        if (pivotWidth || pivotHeight)
        {
            tx -= pivotWidth * this._cr + pivotHeight * -this._sr;
            ty -= pivotWidth * this._sr + pivotHeight * this._cr;
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
        a  = sx;
        d  = sy;

        tx = this.position.x - anchorWidth;
        ty = this.position.y - anchorHeight;

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

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 * @private
 */
Sprite.prototype._renderCanvas = function (renderer) {
    if (this.texture.crop.width <= 0 || this.texture.crop.height <= 0)
    {
        return;
    }

    if (this.blendMode !== renderer.currentBlendMode)
    {
        renderer.currentBlendMode = this.blendMode;
        renderer.context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    //  Ignore null sources
    if (this.texture.valid)
    {
        var texture = this._texture,
            wt = this.worldTransform,
            dx,
            dy,
            width,
            height;

        var resolution = texture.baseTexture.resolution / renderer.resolution;

        renderer.context.globalAlpha = this.worldAlpha;

        // If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderer.smoothProperty && renderer.currentScaleMode !== texture.baseTexture.scaleMode)
        {
            renderer.currentScaleMode = texture.baseTexture.scaleMode;
            renderer.context[renderer.smoothProperty] = (renderer.currentScaleMode === CONST.SCALE_MODES.LINEAR);
        }

        // If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions

        if(texture.rotate)
        {

            // cheeky rotation!
            var a = wt.a;
            var b = wt.b;

            wt.a  = -wt.c;
            wt.b  = -wt.d;
            wt.c  =  a;
            wt.d  =  b;

            width = texture.crop.height; //TODO: Width assigned to height???
            height = texture.crop.width;

            dx = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
            dy = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
        }
        else
        {
            width = texture.crop.width;
            height = texture.crop.height;

            dx = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
            dy = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
        }



        // Allow for pixel rounding
        if (renderer.roundPixels)
        {
            renderer.context.setTransform(
                wt.a,
                wt.b,
                wt.c,
                wt.d,
                (wt.tx * renderer.resolution) | 0,
                (wt.ty * renderer.resolution) | 0
            );

            dx = dx | 0;
            dy = dy | 0;
        }
        else
        {

            renderer.context.setTransform(
                wt.a,
                wt.b,
                wt.c,
                wt.d,
                wt.tx * renderer.resolution,
                wt.ty * renderer.resolution
            );


        }

        var anchorWidth = this.anchor.x * this.texture.width/resolution,
            anchorHeight = this.anchor.y * this.texture.height/resolution;

        if (this.tint !== 0xFFFFFF)
        {
            if (this.cachedTint !== this.tint)
            {
                this.cachedTint = this.tint;

                // TODO clean up caching - how to clean up the caches?
                // TODO: dont works with spritesheets
                this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
            }

            renderer.context.drawImage(
                this.tintedTexture,
                0,
                0,
                width * resolution * renderer.resolution,
                height * resolution * renderer.resolution,
                dx / resolution,
                dy / resolution,
                width * renderer.resolution,
                height * renderer.resolution
            );
        }
        else
        {
            //TODO: cuando la resolución del renderer es mayor a 1 los sprites se muestran mal
            renderer.context.drawImage(
                texture.baseTexture.source,
                texture.crop.x * resolution,
                texture.crop.y * resolution,
                width * resolution * renderer.resolution,
                height * resolution * renderer.resolution,
                dx / resolution + anchorWidth,
                dy / resolution + anchorHeight,
                width * renderer.resolution,
                height * renderer.resolution
            );
        }
    }
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

            this.isCropped = false;

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
                if(config.useSortChildrenByDepth)this.parent.sortChildrenByDepth();
            }
        }
    }
});



module.exports = Sprite;