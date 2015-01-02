(function(){

    var audioPool = null;

    PQ.WebAudio = PQ.Class.extend({
        paused: false,
        _paused: false,
        _loop: false,
        volume: 1,
        _volume: 1,
        _muted: false,

        fading: false,

        _init: function(buffer, ctx){
            this.buffer = buffer;
            this._instances = [];
            if(!audioPool){
                audioPool = new PQ.Pool(PQ.WebAudioSource, [ctx], 10);
            }

            this.manager = null;
            return this;
        },

        setManager: function(manager){
            this.manager = manager;
            return this;
        },

        play: function(loop) {

            var audio = audioPool.getObject();
            audio.setBuffer(this.buffer)
                .setLoop(this._loop)
                .setVolume((this._muted) ? 0 : this._volume)
                .play(false, loop);

            this._instances.push(audio);

            var scope = this;
            var cb = function(e){
                scope._removeInstance(audio);
                audio.returnToPool();
            };

            if(typeof audio.cb === "function"){
                audio.removeEventListener('ended', audio.cb);
            }

            audio.cb = cb;
            audio.addEventListener('ended', cb, false);
            return this;
        },

        setLoop: function (value) {
            value = (value !== false);
            if (this.isPlaying()) {
                this.source.loop = value;
            }
            this._loop = value;
            return this;
        },

        setMute: function(value){
            value = (value !== false);
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value){
                    this._instances[i].gainNode.gain.value = 0;
                }else{
                    this._instances[i].gainNode.gain.value = this.volume;
                }
            }

            this._muted = value;

            return this;
        },

        isMuted: function(){
            return this._muted;
        },

        stop: function () {
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].stop();
                this._instances[i].returnToPool();
                if(this.manager){
                    this.manager._endAudio(this._instances[i]);
                }
            }

            this._instances = [];
            return this;
        },

        setPause: function(value){
            value = (value !== false);
            if(value === this.paused)return this;

            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value) {
                    this._instances[i].pause();
                }else{
                    this._instances[i].play(true);
                }
            }
            this._paused = value;

            return this;
        },

        setVolume: function (value) {
            if(value > 0 && this._muted){
                this._muted = false;
            }
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].setVolume(value);
            }
            this._volume = value;
            return this;
        },

        isPlaying: function () {
            return !!(this._instances.length);
        },

        _removeInstance: function(instance){
            var len = this._instances.length;
            var index = null;
            for(var i = 0; i < len; i++){
                if(this._instances[i] === instance){
                    index = i;
                    break;
                }
            }

            this._instances.splice(index,1);
            if(this.manager){
                this.manager._endAudio(this);
            }
        }
    });

    Object.defineProperty(PQ.WebAudio.prototype, 'volume', {
        set: function(value){
            this.setVolume(value);
        },

        get: function(){
            return this._volume;
        }
    });

    Object.defineProperty(PQ.WebAudio.prototype, 'paused', {
        set: function(value){
            this.setPause(value);
        },

        get: function(){
            return this._paused;
        }
    });

})();