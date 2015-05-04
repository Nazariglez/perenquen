var PixiTilingSprite = require('../../lib/pixi/src/extras/TilingSprite'),
    utils = require('../core/utils'),
    CONST = require('../core/const'),
    math = require('../../lib/pixi/src/core/math'),
    CanvasBuffer = require('../../lib/pixi/src/core/renderers/canvas/utils/CanvasBuffer'),
    config = require('../core/config'),
    tempPoint = new math.Point(),
    Sprite = require('./Sprite');

function TilingSprite(texture, width, height){
    this._init(texture, width, height);
}

TilingSprite.prototype = Object.create(PixiTilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;

TilingSprite.prototype._init = function(texture, width, height){
    if(typeof texture === "string"){
        texture = utils.assetCache.getTexture(texture);
    }
    PixiTilingSprite.call(this, texture, width, height);
    this.setAnchor(0.5,0.5);
    this.speed = new math.Point(0,0);
    this.rotationSpeed = 0;
    this.tileSpeed = new math.Point(0,0);
};

TilingSprite.prototype.setTileScale = function(x,y){
    this.tileScale.set(x,y);
    return this;
};

TilingSprite.prototype.setTilePosition = function(x,y){
    this.tilePosition.set(x,y);
    return this;
};

TilingSprite.prototype.displayObjectUpdateTransform = function(){
    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    var anchorWidth = this.anchor.x * this._width * this.scale.x,
        anchorHeight = this.anchor.y * this._height * this.scale.y,
        pivotWidth = this.pivot.x * this._width * this.scale.x,
        pivotHeight = this.pivot.y * this._height * this.scale.y;

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
        a  = this.scale.x;
        d  = this.scale.y;

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

    var texture = this._texture;

    if (!texture.baseTexture.hasLoaded)
    {
        return;
    }

    var context = renderer.context,
        transform = this.worldTransform,
        resolution = renderer.resolution,
        baseTexture = texture.baseTexture,
        modX = this.tilePosition.x % baseTexture.width,
        modY = this.tilePosition.y % baseTexture.height;

    var textureRes = baseTexture.resolution;

    // create a nice shiny pattern!
    // TODO this needs to be refreshed if texture changes..
    if(!this._canvasPattern)
    {
        // cut an object from a spritesheet..
        var tempCanvas = new CanvasBuffer(texture._frame.width*textureRes, texture._frame.height*textureRes);
        tempCanvas.context.drawImage(baseTexture.source, -texture._frame.x*textureRes,-texture._frame.y*textureRes);
        this._canvasPattern = tempCanvas.context.createPattern( tempCanvas.canvas, 'repeat' );
    }

    // set context state..
    context.globalAlpha = this.worldAlpha;
    context.setTransform(transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution);

    // TODO - this should be rolled into the setTransform above..
    context.scale(this.tileScale.x/textureRes,this.tileScale.y/textureRes);


    //context.translate(modX + (this.anchor.x * -this._width ),
    //    modY + (this.anchor.y * -this._height));
    context.translate(modX, modY);

    // check blend mode
    if (this.blendMode !== renderer.currentBlendMode)
    {
        renderer.currentBlendMode = this.blendMode;
        context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    // fill the pattern!
    context.fillStyle = this._canvasPattern;
    context.fillRect(-modX,
        -modY,
        this._width / this.tileScale.x*textureRes,
        this._height / this.tileScale.y*textureRes);

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

// tweak our texture temporarily..
    var texture = this._texture;

    if(!texture || !texture._uvs)
    {
        return;
    }

    var tempUvs = texture._uvs,
        tempWidth = texture._frame.width,
        tempHeight = texture._frame.height,
        tw = texture.baseTexture.width,
        th = texture.baseTexture.height;

    texture._uvs = this._uvs;
    texture._frame.width = this._width;
    texture._frame.height = this._height;

    //PADDING

    // apply padding to stop gaps in the tile when numbers are not rounded
    this.shader.uniforms.uFrame.value[0] = tempUvs.x0 + (0.5 / tw); // the 0.5 is padding
    this.shader.uniforms.uFrame.value[1] = tempUvs.y0 + (0.5 / th); // the 0.5 is padding
    this.shader.uniforms.uFrame.value[2] = tempUvs.x1 - tempUvs.x0 + (-1 / tw); // the -1 is padding offset
    this.shader.uniforms.uFrame.value[3] = tempUvs.y2 - tempUvs.y0 + (-1 / th); // the -1 is padding offset

    this.shader.uniforms.uTransform.value[0] = (this.tilePosition.x % tw) / this._width;
    this.shader.uniforms.uTransform.value[1] = (this.tilePosition.y % th) / this._height;
    this.shader.uniforms.uTransform.value[2] = ( tw / this._width ) * this.tileScale.x;
    this.shader.uniforms.uTransform.value[3] = ( th / this._height ) * this.tileScale.y;

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
                if(config.useSortChildrenByDepth)this.parent.sortChildrenByDepth();
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

//TODO: En ocasiones se produce un salto extraño en los tiles con speedTile (canvas&&webgl)

module.exports = TilingSprite;