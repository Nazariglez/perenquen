var Easing = require('./Easing');

function Tween(target, manager){
    this._init(target, manager);
}

Tween.prototype.constructor = Tween;

Tween.prototype._init = function(target, manager){
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
    this._pingPong = false;

    this.path = null;
    this.pathReverse = false;
    this.pathFrom = 0;
    this.pathTo = 0;

    //TODO: Maybe this callbacks could put in the prototype instead the object?
    this.onTweenStart = function(){};
    this.onTweenStop = function(){};
    this.onTweenRepeat = function(){};
    this.onTweenUpdate = function(){};
    this.onTweenEnd = function(){};
    this.onTweenPingPong = function(){};

    this._chainTween = null;
};

Tween.prototype.chain = function(tween){
    this._chainTween = tween || new Tween(this.target);
    return this._chainTween;
};

Tween.prototype.start = function(){
    this.active = true;
    if(!this.manager){
        if(this.target && this.target.parent){
            var manager = findManager(this.target);
            if(manager){
                this.addTo(manager);
            }
        }
    }
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

    if(this.path){
        var distance = this.path.totalDistance();
        if(this.pathReverse){
            this.pathFrom = distance;
            this.pathTo = 0;
        }else{
            this.pathFrom = 0;
            this.pathTo = distance;
        }
    }
};

Tween.prototype.tick = function(gameTime){
    if(!(this._canUpdate()&&(this._to||this.path))){
        return this;
    }
    var _to, _from;
    var tick = gameTime.msDelta;

    if(this.delay > this._delayTime){
        this._delayTime += tick;
        return this;
    }

    if(!this.isStarted) {
        this._parseData();
        this.isStarted = true;
        this.onTweenStart(this._elapsedTime, gameTime.delta);
    }

    var time = (this.pingPong) ? this.time/2 : this.time;

    if(time > this._elapsedTime){
        var t = this._elapsedTime+tick,
            ended = (t>=time);

        this._elapsedTime = (ended) ? time : t;

        this._apply(time);

        var realElapsed = (this._pingPong) ? time+this._elapsedTime : this._elapsedTime;
        this.onTweenUpdate(realElapsed, gameTime.delta);

        if(ended){
            if(this.pingPong && !this._pingPong){
                this._pingPong = true;
                _to = this._to;
                _from = this._from;

                this._from = _to;
                this._to = _from;

                if(this.path){
                    _to = this.pathTo;
                    _from = this.pathFrom;

                    this.pathTo = _from;
                    this.pathFrom = _to;
                }

                //this._parseData();
                this.onTweenPingPong(realElapsed, gameTime.delta);

                this._elapsedTime = 0;
                return this;
            }

            if(this.loop || this.repeat > this._repeat){
                this._repeat++;
                this.onTweenRepeat(realElapsed, gameTime.delta, this._repeat);
                this._elapsedTime = 0;

                if(this.pingPong&&this._pingPong){
                    _to = this._to;
                    _from = this._from;

                    this._to = _from;
                    this._from = _to;

                    if(this.path){
                        _to = this.pathTo;
                        _from = this.pathFrom;

                        this.pathTo = _from;
                        this.pathFrom = _to;
                    }

                    this._pingPong = false;
                }
                return this;
            }

            this.isEnded = true;
            this.active = false;
            this.onTweenEnd(realElapsed, gameTime.delta);

            if(this._chainTween){
                this._chainTween.addTo(this.manager)
                    .start();
            }
        }

        return this;
    }

};

Tween.prototype._apply = function(time){
    recursiveApply(this._to, this._from, this.target, time, this._elapsedTime, this.easing);

    if(this.path){
        var b = this.pathFrom,
            c = this.pathTo - this.pathFrom,
            d = this.time,
            t = this._elapsedTime/d;

        var distance = b + (c*this.easing(t));
        var pos = this.path.getPointAtDistance(distance);
        this.target.x = pos.x;
        this.target.y = pos.y;
    }

};

Tween.prototype._canUpdate = function(){
    return (this.time && this.active && this.target);
};

Tween.prototype.setPath = function(path, reverse){
    this.path = path;
    this.pathReverse = !!reverse;
    return this;
};

Tween.prototype.addTo = function(manager){
    if(!manager.isTweenManager) {
        manager = findManager(manager);
    }

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
    this._elapsedTime = 0;
    this._repeat = 0;
    this._delayTime = 0;
    this.isStarted = false;
    this.isEnded = false;

    if(this.pingPong&&this._pingPong){
        var _to = this._to,
            _from = this._from;

        this._to = _from;
        this._from = _to;

        this._pingPong = false;
    }

    return this;
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

function recursiveApply(to, from, target, time, elapsed, easing){
    for(var k in to){
        if(!isObject(to[k])) {
            var b = from[k],
                c = to[k] - from[k],
                d = time,
                t = elapsed/d;
            target[k] = b + (c*easing(t));
        }else{
            recursiveApply(to[k], from[k], target[k], time);
        }
    }
}

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

function findManager(parent){
    if(parent.tweenManager){
        return parent.tweenManager;
    }else if(parent.parent){
        return findManager(parent.parent);
    }else{
        return null;
    }
}