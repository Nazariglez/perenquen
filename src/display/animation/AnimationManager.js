var Animation = require('./Animation');

function AnimationManager(sprite){
    this._init(sprite);
}

Object.prototype.constructor = AnimationManager;

AnimationManager.prototype._init = function(sprite){
    this.sprite = sprite;
    this.anims = [];
    this.currentAnimIndex = -1;
    this.isPlaying = false;
};

AnimationManager.prototype.animate = function(gameTime, delta){

    return this;
};

/**
 * Create a new Animation from a texture grid
 * @param id
 * @param data
 * @param data.rows {number}
 * @param data.cols {number}
 * @param data.order {boolean}
 * @param data.texture {PQ.Texture}
 * @param data.time {number}
 * @param data.loop {boolean}
 * @returns {Animation}
 */
AnimationManager.prototype.createFromGrid = function(id, data){
    var anim = new Animation(id, data, true);
    this.add(anim);
    return anim;
};

/**
 * Create a new Animation from an array of textures
 * @param id
 * @param data
 * @param data.texture {array}
 * @param data.time {number}
 * @param data.loop {boolean}
 * @returns {Animation}
 */
AnimationManager.prototype.createFromFrames = function(id, data){
    var anim = new Animation(id, data);
    this.add(anim);
    return anim;
};

AnimationManager.prototype.add = function(animation){
    this.anims.push(animation);
    return this;
};

module.exports = AnimationManager;