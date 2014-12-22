(function(){
    PQ.WebAudioSource = PQ.Class.extend({
        _init: function(ctx){
            PIXI.EventTarget.call(this);
            this.context = ctx;
            this.gainNode = this.context.createGain();
            this.refreshSource();

            this.loop = this.source.loop;
            this.buffer = null;

            this.lastPauseTime = 0;
            this.startTime = 0;
            this.offsetTime = 0;
        },

        refreshSource: function(){
            this.source = this.context.createBufferSource();

            if (!this.source.start) {
                this.source.start = this.source.noteOn;
            }

            if (!this.source.stop) {
                this.source.stop = this.source.noteOff;
            }

            var scope = this;
            this.source.onended = function(){
                scope.onEnd();
            };
        },

        onEnd: function(){
            this.stop();
            this.dispatchEvent({
                type: 'ended',
                content: this
            });
            return this;
        },

        setBuffer: function(buffer){
            this.source.buffer = buffer;
            this.buffer = buffer;
            return this;
        },

        setLoop: function(value){
            value = (value !== false);
            this.source.loop = value;
            this.loop = value;
            return this;
        },

        setVolume: function(value){
            this.gainNode.gain.value = value;
            return this;
        },

        pause: function(){
            this.offsetTime += this.context.currentTime - this.startTime;
            this.lastPauseTime = this.offsetTime%this.source.buffer.duration;
            this.stop();
            return this;
        },

        play: function(pause, loop){
            var pauseTime = pause ? this.lastPauseTime : 0;
            if(!this.source.buffer){
                this.setBuffer(this.buffer)
                    .setLoop(this.loop);
            }

            this.startTime = this.context.currentTime;
            this.source.connect(this.gainNode);
            this.gainNode.connect(this.context.destination);
            this.source.start(0, pauseTime);
            if(loop)this.source.loop = true;
            return this;
        },

        stop: function(){
            this.source.stop(0);
            this.source.disconnect();
            this.refreshSource();
        }
    });
})();