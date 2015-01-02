(function(){
    var audioPool = null;

    var loopFix = function(e){
        this.currentTime = 0;
        this.play();
    };

    PQ.HTMLAudio = PQ.Class.extend({
        volume: 1,
        _volume: 1,
        paused: false,
        _paused: false,
        _muted: false,

        fading: false,

        _init: function(audio){
            this.audio = audio;
            this._instances = [];
            if(!audioPool){
                audioPool =  new PQ.Pool(Audio, [], 10);
            }

            this.manager = null;
        },

        setManager: function(manager){
            this.manager = manager;
            return this;
        },

        play: function(loop){
            var audio = audioPool.getObject();
            audio.src = this.audio.src;
            audio.preload = "auto";
            audio.volume = (this._muted) ? 0 : this._volume;
            audio.load();
            audio.play();
            this._instances.push(audio);

            var scope = this;
            var cb = function(e){
                scope._removeInstance(this);
                this.returnToPool();
            };

            if(typeof audio.cb === "function"){
                audio.removeEventListener('ended', audio.cb);
            }

            audio.cb = cb;
            if(loop){
                audio.addEventListener('ended', loopFix, false);
            }else{
                audio.removeEventListener('ended', loopFix);
                audio.addEventListener('ended', cb, false);
            }
            return this;
        },

        stop: function(){
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                var audio = this._instances[i];
                audio.pause();
                audio.currentTime = 0;
                audio.returnToPool();

                if(this.manager){
                    this.manager._endAudio(audio);
                }
            }

            this._instances = [];
            return this;
        },

        setMute: function(value){
            value = (value !== false);
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value){
                    this._instances[i].volume = 0;
                }else{
                    this._instances[i].volume = this.volume;
                }
            }

            this._muted = value;

            return this;
        },

        isMuted: function(){
            return this._muted;
        },

        setVolume: function(value){
            if(value > 0 && this._muted){
                this._muted = false;
            }
            this.volume = value;
            return this;
        },

        setPause: function(value){
            value = (value !== false);
            if(value === this.paused)return this;
            this.paused = value;
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

    Object.defineProperty(PQ.HTMLAudio.prototype, 'volume', {
        set: function(value){
            this._volume = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].volume = this._volume;
            }
        },

        get: function(){
            return this._volume;
        }
    });

    Object.defineProperty(PQ.HTMLAudio.prototype, 'paused', {
        set: function(value){
            value = (value !== false);
            this._paused = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                if(value) {
                    this._instances[i].pause();
                }else{
                    this._instances[i].play();
                }
            }
        },

        get: function(){
            return this._paused;
        }
    });
})();