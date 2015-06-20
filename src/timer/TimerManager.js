var Timer = require('./Timer'),
    Timeline = require('../extra/Timeline');

function TimerManager(){
    this._init();
}

TimerManager.prototype.constructor = TimerManager;

TimerManager.prototype._init = function(){
    this.timers = [];
    this._toDelete = [];
};

TimerManager.prototype.tick = function(gameTime){
    var len = this.timers.length;
    for(var i = 0; i < len; i++){
        if(this.timers[i].active){
            this.timers[i].tick(gameTime);
            if(this.timers[i].isEnded && this.timers[i].expire){
                this.timers[i].remove();
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

TimerManager.prototype.createTimeline = function(){
    return new Timeline(this);
};

TimerManager.prototype.createTimer = function(time){
    return new Timer(time || 1, this);
};

TimerManager.prototype.addTimer = function(timer){
    this.timers.push(timer);
    return this;
};

TimerManager.prototype.removeTimer = function(timer){
     this._toDelete.push(timer);
    return this;
};

TimerManager.prototype._remove = function(timer){
    var index = this.timers.indexOf(timer);
    if(index >= 0){
        this.timers.splice(index, 1);
    }
};

module.exports = TimerManager;