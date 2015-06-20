function Timer(time, manager){
    this._init(time, manager);
}

Timer.prototype.constructor = Timer;

Timer.prototype._init = function(time, manager){
    this.time = time || 0;
    if(manager){
        this.manager = manager;
        this.addTo(manager);
    }

    this.active = false;
    this.expire = false;
    this.delay = 0;
    this.repeat = 0;
    this.loop = false;
    this.isEnded = false;
    this.isStarted = false;

    this._delayTime = 0;
    this._elapsedTime = 0;
    this._repeat = 0;

    this.onTimerStart = function(){};
    this.onTimerStop = function(){};
    this.onTimerRepeat = function(){};
    this.onTimerUpdate = function(){};
    this.onTimerEnd = function(){};
};

Timer.prototype.setTime = function(time){
    this.time = time;
    return this;
};

Timer.prototype.setDelay = function(delay){
    this.delay = delay;
    return this;
};

Timer.prototype.start = function(){
    this.active = true;
    return this;
};

Timer.prototype.stop = function(){
    this.active = false;
    this.onTimerStop(this._elapsedTime);
    return this;
};

Timer.prototype.addTo = function(manager){
    //TODO: allow add to scene too
    this.manager = manager;
    this.manager.addTimer(this);
    return this;
};

Timer.prototype.setExpire = function(value){
    value = (value !== false);
    this.expire = value;
    return this;
};

Timer.prototype.setRepeat = function(repeat){
    this.repeat = repeat;
    return this;
};

Timer.prototype.setLoop = function(value){
    this.loop = (value !== false);
    return this;
};

Timer.prototype.remove = function(){
    if(!this.manager){
        throw new Error("Timer without manager.");
    }

    this.manager.removeTimer(this);
    return this;
};

Timer.prototype.tick = function(gameTime){
    if(!this.active)return this;
    var tick = gameTime.msDelta;

    if(this.delay > this._delayTime){
        this._delayTime += tick;
        return this;
    }

    if(!this.isStarted) {
        this.isStarted = true;
        this.onTimerStart(this._elapsedTime, gameTime.delta);
    }

    if(this.time > this._elapsedTime){
        var t = this._elapsedTime+tick,
            ended = (t>=this.time);

        this._elapsedTime = (ended) ? this.time : t;
        this.onTimerUpdate(this._elapsedTime, gameTime.delta);

        if(ended){
            if(this.loop || this.repeat > this._repeat){
                this._repeat++;
                this.onTimerRepeat(this._elapsedTime, gameTime.delta, this._repeat);
                this._elapsedTime = 0;
                return this;
            }

            this.isEnded = true;
            this.active = false;
            this.onTimerEnd(this._elapsedTime, gameTime.delta);
        }

        return this;
    }

};

Timer.prototype.reset = function(){
    this._elapsedTime = 0;
    this._repeat = 0;
    this._delayTime = 0;
    this.isStarted = false;
    this.isEnded = false;
    return this;
};

Timer.prototype.onStart = function(callback){
    this.onTimerStart = callback;
    return this;
};

Timer.prototype.onEnd = function(callback){
    this.onTimerEnd = callback;
    return this;
};

Timer.prototype.onUpdate = function(callback){
    this.onTimerUpdate = callback;
    return this;
};

Timer.prototype.onStop = function(callback){
    this.onTimerStop = callback;
    return this;
};

Timer.prototype.onRepeat = function(callback){
    this.onTimerRepeat = callback;
    return this;
};

module.exports = Timer;