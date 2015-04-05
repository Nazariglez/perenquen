var Easing = require('./Easing');

function Tween(target, manager){
    this.target = target;
    if(manager){
        this.manager = manager;
        this.addTo(manager);
    }

    this.time = 0;
    this.active = false;
    this.easing = Easing.linear();
    this.expire = false;
    this.repeat = 0;
    this.loop = false;
    this.delay = 0;
    this.pingPong = false;
    this.isStarted = false;
    this.isEnded = false;

    this._to = null;
    this._from = null;
    this._delayTime = 0;
    this._elapsedTime = 0;
    this._repeat = 0;

    this.onTweenStart = function(){};
    this.onTweenStop = function(){};
    this.onTweenRepeat = function(){};
    this.onTweenUpdate = function(){};
    this.onTweenEnd = function(){};
    this.onTweenPingPong = function(){};
}

Tween.prototype.constructor = Tween;

Tween.prototype.start = function(){
    this.active = true;
    return this;
};

Tween.prototype.stop = function(){
    this.active = false;
    this.onTweenStop(this._elapsedTime);
    return this;
};

Tween.prototype.to = function(data){
    this._to = data;
    return this;
};

Tween.prototype.from = function(data){
    this._from = data;
    return this;
};

Tween.prototype._parseData = function(){
    if(this.isStarted)return;

    if(!this._from)this._from = {};

    parseRecursiveData(this._to, this._from, this.target);
};

Tween.prototype.tick = function(delta){
    if(!this._canUpdate())return this;
    var tick = delta*1000;

    if(this.delay > this._delayTime){
        this._delayTime += tick;
        return this;
    }

    if(!this.isStarted) {
        this._parseData();
        this.isStarted = true;
        this.onTimerStart(this._elapsedTime, delta);
    }

    if(this.time > this._elapsedTime){
        var t = this._elapsedTime+tick,
            ended = (t>=this.time);

        this._elapsedTime = (ended) ? this.time : t;
        this.onTimerUpdate(this._elapsedTime, delta);

        //TODO: Apply easing

        if(ended){
            //TODO: Check pingPong
            if(this.loop || this.repeat > this._repeat){
                this._repeat++;
                this.onTimerRepeat(this._elapsedTime, delta, this._repeat);
                this._elapsedTime = 0;
                return this;
            }

            this.isEnded = true;
            this.active = false;
            this.onTimerEnd(this._elapsedTime, delta);
        }

        return this;
    }

};

Tween.prototype._canUpdate = function(){
    return (
        this.time
        ||this.active
        ||this.target
        ||this._to
    );
};

Tween.prototype.path = function(path, reverse){
    //TODO: tween path...
    return this;
};

Tween.prototype.addTo = function(manager){
    //TODO: allow add to scene too
    this.manager = manager;
    this.manager.addTween(this);
    return this;
};

Tween.prototype.setPingPong = function(value){
    this.pingPong = (value !== false);
    return this;
};

Tween.prototype.setTarget = function(target){
    this.target = target;
    return this;
};

Tween.prototype.setDelay = function(delay){
    this.delay = delay;
    return this;
};

Tween.prototype.setTime = function(time){
    this.time = time;
    return this;
};

Tween.prototype.setExpire = function(value){
    value = (value !== false);
    this.expire = value;
    return this;
};

Tween.prototype.setEasing = function(easing){
    this.easing = easing || Easing.linear();
    return this;
};

Tween.prototype.remove = function(){
    if(!this.manager){
        throw new Error("Tween without manager.");
    }

    this.manager.removeTween(this);
    return this;
};

Tween.prototype.reset = function(){
    //TODO: reset...
};

Tween.prototype.setRepeat = function(repeat){
    this.repeat = repeat;
    return this;
};

Tween.prototype.setLoop = function(value){
    this.loop = (value !== false);
    return this;
};

Tween.prototype.onStart = function(callback){
    this.onTweenStart = callback;
    return this;
};

Tween.prototype.onEnd = function(callback){
    this.onTweenEnd = callback;
    return this;
};

Tween.prototype.onUpdate = function(callback){
    this.onTweenUpdate = callback;
    return this;
};

Tween.prototype.onStop = function(callback){
    this.onTweenStop = callback;
    return this;
};

Tween.prototype.onRepeat = function(callback){
    this.onTweenRepeat = callback;
    return this;
};

Tween.prototype.onPingPong = function(callback){
    this.onTweenPingPong = callback;
    return this;
};

module.exports = Tween;

function parseRecursiveData(to, from, target){
    for(var k in to){
        if(from[k] !== 0 && !from[k]){
            if(isObject(target[k])){
                from[k] = JSON.parse(JSON.stringify(target[k]));
                parseRecursiveData(to[k], from[k], target[k]);
            }else{
                from[k] = target[k];
            }
        }
    }
}

function isObject(obj){
    return Object.prototype.toString.call(obj) === "[object Object]";
}