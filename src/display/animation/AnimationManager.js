var Animation = require('./Animation');

function AnimationManager(sprite){
    this._init(sprite);
}

Object.prototype.constructor = AnimationManager;

AnimationManager.prototype._init = function(sprite){
    this.sprite = sprite;
    this.anims = [];
    this.currentAnimIndex = 0;
};

AnimationManager.prototype.animate = function(gameTime, delta){
    if(this.isPlaying){
        this.anims[this.currentAnimIndex].animate(gameTime, delta);
    }
    return this;
};

AnimationManager.prototype.play = function(id){
    if(this.anims.length === 0)return this;
    var anim;
    if(id){
        anim = this.getAnimById(id);
    }else{
        anim = this.anims[this.currentAnimIndex];
    }

    if(anim){
        anim.play();
        this.currentAnimIndex = this.anims.indexOf(anim);
    }

    return this;
};

AnimationManager.prototype.stop = function(id){
    if(this.anims.length === 0)return this;
    var anim;
    if(id){
        anim = this.getAnimById(id);
    }else{
        anim = this.anims[this.currentAnimIndex];
    }

    if(anim){
        anim.stop();
    }

    return this;
};

AnimationManager.prototype.getAnimById = function(id){
    var index = -1;
    for(var i = 0; i < this.anims.length; i++){
        if(id === this.anims[i].id){
            index = i;
        }
    }

    return (index >= 0) ? this.anims[index] : null;
};

/**
 * Create a new Animation from a texture grid
 * @param id
 * @param data
 * @param data.rows {number}
 * @param data.cols {number}
 * @param data.order {array}
 * @param data.textures {PQ.Texture}
 * @param data.time {number}
 * @param data.loop {boolean}
 * @returns {Animation}
 */
AnimationManager.prototype.createFromGrid = function(id, data){
    data.grid = true;
    return new Animation(id, data)
        .addTo(this.sprite);
};

/**
 * Create a new Animation from an array of textures
 * @param id
 * @param data
 * @param data.textures {array}
 * @param data.time {number}
 * @param data.loop {boolean}
 * @returns {Animation}
 */
AnimationManager.prototype.createFromFrames = function(id, data){
    return new Animation(id, data)
        .addTo(this.sprite);
};

AnimationManager.prototype.add = function(animation){
    animation.manager = this;
    this.anims.push(animation);
    return this;
};

Object.defineProperties(AnimationManager.prototype, {
    isPlaying : {
        get : function(){
            var anim = this.anims[this.currentAnimIndex];
            if(anim){
                return anim.isPlaying;
            }

            return false;
        }
    }
});

module.exports = AnimationManager;