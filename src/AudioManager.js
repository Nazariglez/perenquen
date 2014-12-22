(function(){

    //TODO: 3d emitters y track list
    PQ.AudioManager = PQ.Class.extend({
        _muted: false,
        _paused: false,

        _init: function(game, limit){
            this.game = game;
            this.limit = limit || 10;
            this._instances = [];
            this.type = PQ.getAudioType();
            this.noneAudio = this.type === PQ.NONE_AUDIO;
        },

        setLimit: function(num){
            this.limit = num;
            return this;
        },

        setVolume: function(id,value){
            if(this.noneAudio)return this;

            var audio = this.getAudio(id);
            if(audio){
                audio.setVolume(value);
            }

            return this;
        },

        pauseAll: function(value){
            if(this.noneAudio)return this;
            value = (value !== false);
            this._paused = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                var audio = this._instances[i];
                if(audio.fading){
                    var tweens = this.game.tweenManager.getTweensForActor(audio);
                    for(var n = 0; n < tweens.length; n++){
                        tweens[n].setPause(value);
                    }
                }

                audio.setPause(value);
            }
        },

        resumeAll: function(){
            return this.pauseAll(false);
        },

        muteAll: function(value){
            if(this.noneAudio)return this;
            value = (value !== false);
            this._muted = value;
            var len = this._instances.length;
            for(var i = 0; i < len; i++){
                this._instances[i].setMute(value);
            }

            return this;
        },

        unmuteAll: function(){
            return this.muteAll(false);
        },

        isPlaying: function(id){
            var audio = this.getAudio(id);
            if(audio){
                return audio.isPlaying();
            }

            return false;
        },

        isPaused: function(id){
            if(this.noneAudio)return null;

            var audio = this.getAudio(id);
            if(audio){
                return audio.paused;
            }

            return null;
        },

        play: function(id, loop){
            if(this.noneAudio)return this;

            if(this._instances.length >= this.limit){
                PQ.log('AudioManager limit');
                return this;
            }

            var audio = this.getAudio(id);
            if(audio){
                audio.setManager(this)
                    .setMute(this._muted)
                    .setPause(this._paused)
                    .play(loop);

                this._instances.push(audio);
            }

            return this;
        },

        _endAudio: function(audio){
            var len = this._instances.length;
            var index = null;
            for(var i = 0; i < len; i++){
                if(this._instances[i] === audio){
                    index = i;
                    break;
                }
            }

            this._instances.splice(index, 1);
        },

        getAudio: function(audio){
            return PQ.AssetCache.getAudio(audio);
        },

        mute: function(id, value){
            if(this.noneAudio)return this;
            value = (value !== false);
            var audio = this.getAudio(id);
            if(audio){
                audio.setMute(value);
            }

            return this;
        },

        unmute: function(id){
            return this.mute(id, false);
        },

        isMuted: function(id){
            var audio = this.getAudio(id);
            if(audio){
                return audio.isMuted();
            }

            return null;
        },

        setFade: function(id, to, time){
            if(this.noneAudio)return this;
            var audio = this.getAudio(id);
            if(audio && !audio.fading && audio.isPlaying()){

                audio.fading = true;

                var audioTween = new PQ.Tween()
                    .setTarget(audio)
                    .setManager(this.game)
                    .to({
                        volume : to
                    }).setTime(time)
                    .onEnd(function(){
                        audio.fading = false;
                    });
            }

            return this;
        },

        getVolume: function(id){
            if(this.noneAudio)return null;
            var audio = this.getAudio(id);
            if(audio){
                return audio.volume;
            }

            return null;
        },

        stop: function(id){
            if(this.noneAudio)return null;
            var audio = this.getAudio(id);
            if(audio){

                audio.stop();

            }

            return this;
        },

        pause: function(id, value){
            if(this.noneAudio)return this;
            var audio = this.getAudio(id);

            value = (value !== false);

            if(audio){
                if(audio.fading){
                    var tweens = this.game.tweenManager.getTweensForActor(audio);
                    for(var i = 0; i < tweens.length; i++){
                        tweens[i].setPause(value);
                    }
                }

                audio.setPause(value);
            }

            return this;

        },

        resume: function(id){
            return this.pause(id, false);
        }
    });

})();