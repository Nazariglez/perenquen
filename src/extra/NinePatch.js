var Sprite = require('../display/Sprite'),
    Texture = require('../../lib/pixi/src/core/textures/Texture'),
    math = require('../../lib/pixi/src/core/math'),
    Container = require('../display/Container'),
    RenderTexture = require('../../lib/pixi/src/core/textures/RenderTexture'),
    utils = require('../core/utils'),
    CONST = require('../core/const');

var tmpContainer = new Container();
var tmpSprites = [];
for(var i = 0; i < 9; i++){
    var s = new Sprite()
        .addTo(tmpContainer);

    tmpSprites.push(s);
}

//TODO: Posibles residuos en la renderTexture al crear varios botones?

function NinePatch(texture, width, height){
    this._init(texture, width, height);
}

NinePatch.prototype = Object.create(Sprite.prototype);
NinePatch.prototype.constructor = NinePatch;

NinePatch.prototype._init = function(texture, width, height){
    this._nineTexture = null;
    this._refreshNine = false;

    this._nWidth = width || 100;
    this._nHeight = height || 100;

    this._nRenderTexture = null;

    Sprite.prototype._init.call(this, texture);
};

NinePatch.prototype._generateNineTexture = function(renderer){
    if(!this._nineTexture||!this._refreshNine)return;
    var texture = this._nineTexture;

    var width = this._nWidth,
        height = this._nHeight;

    //TODO: Allow create ninePatch lower than the baseTexture
    var ww = texture.width,
        hh = texture.height,
        xx = texture.frame.x,
        yy = texture.frame.y;

    //var scale = 1;
    //if(width < ww || height < hh){
    //    scale = Math.min(width/ww, height/hh);
    //}

    var left = ww / 3,
        right = ww / 3,
        top = hh / 3,
        bottom = hh / 3;

    tmpContainer.setSize(width, height);

    for(var i = 0; i < 9; i++){
        var x, y, w, h;
        switch(i){
            case 0:
                x = xx;
                y = yy;
                w = left;
                h = top;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(0,0)
                    .setSize(left, top);
                break;
            case 1:
                x = xx+left;
                y = yy;
                w = ww-left-right;
                h = top;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(left,0)
                    .setSize(width-right-left,top);
                break;
            case 2:
                x = xx+ww-right;
                y = yy;
                w = right;
                h = top;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(width-right,0)
                    .setSize(right,top);
                break;
            case 3:
                x = xx;
                y = yy+top;
                w = left;
                h = hh-top-bottom;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(0,top)
                    .setSize(left,height-top-bottom);
                break;
            case 4:
                x = xx+left;
                y = yy+top;
                w = ww-left-right;
                h = hh-top-bottom;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(left,top)
                    .setSize(width-left-right,height-top-bottom);
                break;
            case 5:
                x = xx+ww-right;
                y = yy+top;
                w = ww-left-right;
                h = hh-top-bottom;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(width-right,top)
                    .setSize(right,height-top-bottom);
                break;
            case 6:
                x = xx;
                y = yy+hh-bottom;
                w = left;
                h = bottom;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(0,height-bottom)
                    .setSize(left,bottom);
                break;
            case 7:
                x = xx+left;
                y = yy+hh-bottom;
                w = ww-left-right;
                h = bottom;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(left,height-bottom)
                    .setSize(width-left-right,bottom);
                break;
            case 8:
                x = xx+ww-right;
                y = yy+hh-bottom;
                w = right;
                h = bottom;
                tmpSprites[i].setTexture(new Texture(texture, new math.Rectangle(x,y,w,h)))
                    .setAnchor(0,0)
                    .setPosition(width-right,height-bottom)
                    .setSize(right,bottom);
                break;
        }
    }

    this._refreshNine = false;

    if(!this._nRenderTexture){
        this._nRenderTexture = new RenderTexture(renderer, width, height);
    }else{
        this._nRenderTexture.clear();
        this._nRenderTexture.resize(width, height);
    }

    if(renderer.type === CONST.RENDERER_TYPE.WEBGL){
        var cachedRenderTarget = renderer.currentRenderTarget;
        this._nRenderTexture.render(tmpContainer);
        renderer.setRenderTarget(cachedRenderTarget);
    }else{
        this._nRenderTexture.render(tmpContainer);
    }

    this._texture = this._nRenderTexture;
};

NinePatch.prototype.resize = function(width, height){
    if(this._nWidth!==width || this._nHeight !== height){
        this._nWidth = width;
        this._nHeight = height;
        this._refreshNine = true;
    }

    return this;
};

NinePatch.prototype._renderWebGL = function(renderer){
    if(this._refreshNine){
        this._generateNineTexture(renderer);
    }

    Sprite.prototype._renderWebGL.call(this, renderer);
};

NinePatch.prototype._renderCanvas = function(renderer){
    if(this._refreshNine){
        this._generateNineTexture(renderer);
    }

    Sprite.prototype._renderCanvas.call(this, renderer);
};

module.exports = NinePatch;

Object.defineProperties(NinePatch.prototype, {
    texture: {
        get: function () {
            return this._texture;
        },
        set: function (value) {
            if (typeof value === "string") {
                value = utils.assetCache.getTexture(value);
            }

            if (this._texture === value) {
                return;
            }

            this._nineTexture = value;
            this._refreshNine = true;
            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            if (value) {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded) {
                    this._onTextureUpdate();
                }
                else {
                    value.once('update', this._onTextureUpdate, this);
                }
            }
        }
    }
});