var PixiText = require('../../lib/pixi/src/core/text/Text'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    Sprite = require('../display/Sprite'),
    CONST = require('../core/const');

function Text(text, style, resolution){
    this._init(text, style, resolution);
}

Text.prototype = Object.create(PixiText.prototype);
Text.prototype.constructor = Text;

Text.fontPropertiesCache = {};
Text.fontPropertiesCanvas = document.createElement('canvas');
Text.fontPropertiesContext = Text.fontPropertiesCanvas.getContext('2d');

Text.prototype._init = function(text, style, resolution){
    text = text || ' ';
    PixiText.call(this, text, style, resolution);

    this.speed = new math.Point();
    this.anchor = new math.Point(0.5, 0.5);
    this.pivot = new math.Point(0.5, 0.5);
};

Text.prototype.displayObjectUpdateTransform = function(){
    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    //Avoid use _width or _height when are 0
    if(!this._width||!this._height){
        this._width = this.width/this.scale.x;
        this._height = this.height/this.scale.y;
    }

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

Text.prototype._renderCanvas = function (renderer)
{
    if (this.dirty)
    {
        //   this.resolution = 1//renderer.resolution;

        this.updateText();
    }

    //Sprite.prototype._renderCanvas.call(this, renderer);
    this._customRenderCanvas(renderer);
};

Text.prototype._customRenderCanvas = function(renderer){
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

        var anchorWidth = this.anchor.x * this._width/resolution,
            anchorHeight = this.anchor.y * this._height/resolution;

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

Text.prototype.renderWebGL = function (renderer)
{
    if (this.dirty)
    {
        //this.resolution = 1//renderer.resolution;

        this.updateText();
    }

    Sprite.prototype.renderWebGL.call(this, renderer);
};


Text.prototype.updateText = function (){
    var style = this._style;
    this.context.font = style.font;

    // word wrap
    // preserve original text
    var outputText = style.wordWrap ? this.wordWrap(this._text) : this._text;

    // split text into lines
    var lines = outputText.split(/(?:\r\n|\r|\n)/);

    // calculate text width
    var lineWidths = new Array(lines.length);
    var maxLineWidth = 0;
    var fontProperties = this.determineFontProperties(style.font);
    for (var i = 0; i < lines.length; i++)
    {
        var lineWidth = this.context.measureText(lines[i]).width;
        lineWidths[i] = lineWidth;
        maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }

    var width = maxLineWidth + style.strokeThickness;
    if (style.dropShadow)
    {
        width += style.dropShadowDistance;
    }

    this.canvas.width = ( width + this.context.lineWidth ) * this.resolution;

    // calculate text height
    var lineHeight = this.style.lineHeight || fontProperties.fontSize + style.strokeThickness;

    var height = lineHeight * lines.length;
    if (style.dropShadow)
    {
        height += style.dropShadowDistance;
    }

    this.canvas.height = ( height + this._style.padding * 2 ) * this.resolution;

    this.context.scale( this.resolution, this.resolution);

    if (navigator.isCocoonJS)
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

    //this.context.fillStyle="#FF0000";
    //this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.font = style.font;
    this.context.strokeStyle = (typeof style.stroke === "number") ? utils.hex2string(style.stroke) : style.stroke;
    this.context.lineWidth = style.strokeThickness;
    this.context.textBaseline = style.textBaseline;
    this.context.lineJoin = style.lineJoin;
    this.context.miterLimit = style.miterLimit;

    var linePositionX;
    var linePositionY;

    if (style.dropShadow)
    {
        this.context.fillStyle = style.dropShadowColor;

        var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
        var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;

        for (i = 0; i < lines.length; i++)
        {
            linePositionX = style.strokeThickness / 2;
            linePositionY = (style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;

            if (style.align === 'right')
            {
                linePositionX += maxLineWidth - lineWidths[i];
            }
            else if (style.align === 'center')
            {
                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }

            if (style.fill)
            {
                this.context.fillText(lines[i], linePositionX + xShadowOffset, linePositionY + yShadowOffset + this._style.padding);
            }
        }
    }

    //set canvas text styles
    this.context.fillStyle = (typeof style.fill === "number") ? utils.hex2string(style.fill) : style.fill;

    //draw lines line by line
    for (i = 0; i < lines.length; i++)
    {
        linePositionX = style.strokeThickness / 2;
        linePositionY = (style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;

        if (style.align === 'right')
        {
            linePositionX += maxLineWidth - lineWidths[i];
        }
        else if (style.align === 'center')
        {
            linePositionX += (maxLineWidth - lineWidths[i]) / 2;
        }

        if (style.stroke && style.strokeThickness)
        {
            this.context.strokeText(lines[i], linePositionX, linePositionY + this._style.padding);
        }

        if (style.fill)
        {
            this.context.fillText(lines[i], linePositionX, linePositionY + this._style.padding);
        }
    }

    this.updateTexture();
};

Text.prototype.setStyle = function(style){
    this.style = style;
    return this;
};

Text.prototype.setText = function(text, keys){
    if(keys)text = utils.parseTextKeys(text, keys);
    this.text = text;
    return this;
};

Text.prototype.setWordWrap = function(value){
    if(value === false){
        this.style.wordWrap = value;
    }else{
        this.style.wordWrap = true;
        this.style.wordWrapWidth = value;
    }

    this.dirty = true;
    return this;
};

Text.prototype.containsPoint = Sprite.prototype.containsPoint;
Text.prototype.getLocalBounds = Sprite.prototype.getLocalBounds;

module.exports = Text;


