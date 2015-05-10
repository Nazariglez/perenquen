var utils = require('../../core/utils'),
    math = require('../../../lib/pixi/src/core/math'),
    Texture = require('../../../lib/pixi/src/core/textures/Texture');

function Animation(id, data, manager){
    this._init(id, data, manager);
}

Animation.prototype.constructor = Animation;

Animation.prototype._init = function(id, data, manager){
    this.id = id;
    this.data = data;
    this.isGrid = !!data.grid;
    this.time = data.time;
    this.loop = !!data.loop;
    this.index = 0;
    this.manager = manager;
    this.sprite = (manager&&manager.sprite) ? manager.sprite : null;

    this.isPlaying = false;
    this.isStarted = false;

    this.frames = (this.isGrid) ? this._parseGrid() : this._parseFrames();

    this._time = 0;
    this._repeat = 0;

    this.onAnimStart = function(){};
    this.onAnimEnd = function(){};
    this.onAnimRepeat = function(){};
    this.onAnimFrame = function(){};
};

Animation.prototype.setTime = function(time){
    this.time = time;
    return this;
};

Animation.prototype.setLoop = function(value){
    value = (value !== false);
    this.loop = value;
    return this;
};

Animation.prototype.addTo = function(sprite){
    sprite.animationManager.add(this);
    this.sprite = sprite;
    return this;
};

Animation.prototype._parseFrames = function(){
    var textures = this.data.textures;
    for(var i = 0; i < textures.length; i++){
        if(typeof textures[i] === "string"){
            textures[i] = utils.assetCache.getTexture(textures[i]);
        }
    }

    return textures;
};

Animation.prototype._parseGrid = function(){
    //TODO: add support to offset distances between cols and rows
    var rows = this.data.rows,
        cols = this.data.cols,
        texture = (typeof this.data.textures === "string") ? utils.assetCache.getTexture(this.data.textures) : this.data.textures,
        frameOrder = this.data.order;

    var ww = texture.width/cols,
        hh = texture.height/rows,
        xx = texture.frame.x,
        yy = texture.frame.y;

    var frames = [];
    for(var y = 0; y < rows; y++){
        for(var x = 0; x < cols; x++){
            var textureSize = new math.Rectangle(xx + x*ww, yy + y*hh, ww,hh),
                crop = textureSize.clone();
            frames.push(new Texture(texture, textureSize, crop));
        }
    }

    var textures;
    if(frameOrder&&frameOrder.length > 0){
        textures = [];
        for(var i = 0; i < frameOrder.length; i++){
            textures.push(frames[frameOrder[i]]);
        }
    }else{
        textures = frames;
    }

    return textures;
};

Animation.prototype.onStart = function(callback){
    this.onAnimStart = callback;
    return this;
};

Animation.prototype.onRepeat = function(callback){
    this.onAnimRepeat = callback;
    return this;
};

Animation.prototype.onEnd = function(callback){
    this.onAnimEnd = callback;
    return this;
};

Animation.prototype.onFrame = function(callback){
    this.onAnimFrame = callback;
    return this;
};

Animation.prototype.play = function(){
    this.isPlaying = true;

    return this;
};

Animation.prototype.stop = function(){
    this.isPlaying = false;

    return this;
};

//TODO: Reverse mode?

Animation.prototype.animate = function(gameTime, delta){
    var len = this.frames.length;
    if(len === 0 || !this.sprite)return this;

    if(!this.isStarted){
        this.isStarted = true;
        this.onAnimStart(this.sprite);
    }

    this.sprite.setTexture(this.frames[this.index]);

    //TODO: usar tick para eliminar el delta animation dependiendo del config?
    this._time += delta*1000;
    if(this._time >= this.time){
        this._time = 0;
        if(!this.loop){
            this.index = 0;
            this.stop();
            this.onAnimEnd(this.sprite);
            return this;
        }else{
            this._repeat++;
            this.onAnimRepeat(this.sprite, this._repeat);
        }
    }

    var index = Math.floor((this._time * len) / this.time);
    if(this.index !== index){
        this.index = index;
        this.onAnimFrame(this.sprite, this.index);
    }

    return this;
};

Animation.prototype.reset = function(){
    this._time = 0;
    this.index = 0;
    this.isStarted = false;
    this._repeat = 0;
    return this;
};


module.exports = Animation;