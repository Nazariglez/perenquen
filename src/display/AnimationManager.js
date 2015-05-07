function AnimationManager(sprite){
    this._init(sprite);
}

Object.prototype.constructor = Animations;

Animations.prototype._init = function(sprite){
    this.sprite = sprite;
};

module.exports = AnimationManager;