(function(){
    //TODO: Añadir un notExpire para reaprovechar la instancia
    PQ.Timer = PQ.Class.extend({
        _loop: false,
        _repeat: false,
        _leftRepeat: false,
        manager: null,
        _paused: false,
        _time: null,
        _leftTime: null,
        _started: false,
        _ended: false,
        _loopCount: null,
        _delay: null,
        _delayLeft: null,

        _onEndCallback: null,
        _onTickCallback: null,
        _onStartCallback: null,
        _onRepeatCallback: null,
        _onCancelCallback: null,

        _init: function(time, manager){
            this.setTime(time);
            this.setManager(manager);
            return this;
        },

        setDelay: function(value){
            this._delay = value;
            this._delayLeft = value;
            return this;
        },

        togglePause: function(){
            this._paused = !this._paused;
            return this;
        },

        reset: function(){
            this.setTime(this._time);
            this._started = false;
            this._ended = false;
            this._loopCount = 0;

            if(this._repeat) this.setRepeat(this._repeat);
            return this;
        },

        setTime: function(time){
            this._time = time;
            this._leftTime = time;
            return this;
        },

        setPause: function(value){
            this._paused = (value !== false);
            return this;
        },

        resume: function(){
            return this.setPause(false);
        },

        setManager: function(manager){
            if(manager instanceof PQ.TimerManager){
                this.manager = manager;
                this.manager.addTimer(this);
            }else if(manager instanceof PQ.Scene || manager instanceof PQ.Game){
                this.manager = manager.timeManager;
                this.manager.addTimer(this);
            }

            return this;
        },

        setRepeat: function(value){
            this.setLoop(false);
            this._repeat = value || 2;
            this._leftRepeat = this._repeat;
            return this;
        },

        setLoop: function(value){
            if(typeof value === "number" && value !== 0){
                this._loop = false;
                this.setRepeat(value);
            }else if(value !== false){
                this._loop = true;
                this._loopCount = 0;
            }else{
                this._loop = false;
                this._loopCount = 0;
            }

            return this;
        },

        getElapsedTime: function(){
            return this._time - this._leftTime;
        },

        onEnd: function(callback){
            this._onEndCallback = callback;
            return this;
        },

        onTick: function(callback){
            this._onTickCallback = callback;
            return this;
        },

        onStart: function(callback){
            this._onStartCallback = callback;
            return this;
        },

        onRepeat: function(callback){
            this._onRepeatCallback = callback;
            return this;
        },

        onCancel: function(callback){
            this._onCancelCallback = callback;
            return this;
        },

        cancel: function(){
            this._ended = true;

            if(typeof this._onCancelCallback === "function"){
                this._onCancelCallback(this._time - this._leftTime);
            }
            return this;
        },

        _update: function(lastTime, frameElapsedTime){
            if(!this.manager || this._paused || !this._time){
                return;
            }

            if(this._delay && this._delayLeft > 0){
                this._delayLeft -= frameElapsedTime;
                return;
            }

            if(!this._started){
                this._started = true;

                if(typeof this._onStartCallback === "function"){
                    this._onStartCallback(this._time - this._leftTime);
                }
            }

            if(this._leftTime > 0){
                this._leftTime -= frameElapsedTime;
                if(this._leftTime < 0) this._leftTime = 0;

                if(typeof this._onTickCallback === "function"){
                    var loop = null;
                    if(this._loop){
                        loop = this._loopCount;
                    }else if(this._repeat){
                        loop = this._repeat-this._leftRepeat;
                    }
                    this._onTickCallback(this._time - this._leftTime, loop);
                }
            }else if(this._loop) {

                this.setTime(this._time);

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this._time - this._leftTime, this._loopCount);
                }

                this._loopCount++;

            }else if(this._leftRepeat && this._leftRepeat > 1) {

                this.setTime(this._time);
                this._leftRepeat--;

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this._time - this._leftTime, this._repeat-this._leftRepeat);
                }

            }else if(!this._ended){

                this._ended = true;
                if(typeof this._onEndCallback === "function"){
                    this._onEndCallback(this._time - this._leftTime);
                }

            }

        }
    });
})();