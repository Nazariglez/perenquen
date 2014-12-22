(function(){
    PQ.TimerManager = PQ.Class.extend({
        _init: function(){
            this._timers = [];
            this._removeTimers = [];
            return this;
        },

        createTimer: function(time){
            return new PQ.Timer(time, this);
        },

        addTimer: function(timer){
            this._timers.push(timer);
            return this;
        },

        removeTimer: function(timer){
            this._removeTimers.push(timer);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            var len = this._timers.length;
            if(len > 0){
                for(var i = 0; i < len; i++){
                    this._timers[i]._update(gameTime, frameElapsedTime);
                    if(this._timers[i]._ended){
                        this.removeTimer(this._timers[i]);
                    }
                }
            }

            var removeLen = this._removeTimers.length;
            if(removeLen > 0){
                for(var n = 0; n < len; n++){
                    this._remove((this._removeTimers[n]));
                }
            }
        },

        _remove: function(timer){
            var len = this._timers.length;
            for(var i = 0; i < len; i++){
                if(this._timers[i] === timer){
                    //this._timers[i] = null;
                    this._timers.splice(i, 1);
                    break;
                }
            }

            this._removeTimers = [];
        }
    });
})();
