var Tween = require('./Tween');
console.log(Tween);
function TweenManager(){
    this._init();
}

TweenManager.prototype.constructor = TweenManager;

TweenManager.prototype._init = function(){
    this.tweens = [];
    this._toDelete = [];

    this.isTweenManager = true;
};

TweenManager.prototype.tick = function(delta){
    var len = this.tweens.length;
    for(var i = 0; i < len; i++){
        if(this.tweens[i].active){
            this.tweens[i].tick(delta);
            if(this.tweens[i].isEnded && this.tweens[i].expire){
                this.tweens[i].remove();
            }
        }
    }

    var rLen = this._toDelete.length;
    if(rLen >= 1) {
        for (i = 0; i < rLen; i++) {
            this._remove(this._toDelete[i]);
        }

        this._toDelete.length = 0;
    }

    return this;
};

TweenManager.prototype.getTweensForTarget = function(target){
    var len = this.tweens.length;
    var tweens = [];
    for(var i = 0; i < len; i++){
        if(this.tweens[i].target === target){
            tweens.push(this.tweens[i]);
        }
    }

    return tweens;
};

TweenManager.prototype.createTween = function(target){
    console.log('ok', Tween);

    return new Tween(target, this);
};

TweenManager.prototype.addTween = function(tween){
    this.tweens.push(tween);
    return this;
};

TweenManager.prototype.removeTween = function(tween){
    this._toDelete.push(tween);
    return this;
};

TweenManager.prototype._remove = function(tween){
    var index = this.tweens.indexOf(tween);
    if(index >= 0){
        this.tweens.splice(index, 1);
    }
};

module.exports = TweenManager;