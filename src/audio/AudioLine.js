function AudioLine(manager){
    this._init(manager);
}

AudioLine.prototype.constructor = AudioLine;

AudioLine.prototype._init = function(manager){
    this.manager = manager;
    this.available = true;
    this.audio = null;
    this.htmlAudio = null;
    this.webAudio = null;
    this.loop = false;
    this.paused = false;
    this.callback = null;
    this.muted = false;

    this.startTime = 0;
    this.lastPauseTime = 0;
    this.offsetTime = 0;

    if(!this.manager.context){
        this.htmlAudio = new Audio();
        this.htmlAudio.addEventListener('ended', this._onEnd.bind(this));
    }
};

AudioLine.prototype.reset = function(){
    this.available = true;
    this.audio = null;
    this.loop = false;
    this.callback = null;
    this.paused = false;
    this.muted = false;
    this.webAudio = null;

    this.startTime = 0;
    this.lastPauseTime = 0;
    this.offsetTime = 0;
    return this;
};

AudioLine.prototype.setAudio = function(audio, loop, callback){
    if(typeof loop === "function"){
        callback = loop;
        loop = false;
    }

    this.audio = audio;
    this.available = false;
    this.loop = loop;
    this.callback = callback;

    return this;
};

AudioLine.prototype.play = function(pause){
    if(!pause && this.isPaused)return this;

    if(this.manager.context){
        this.webAudio = this.manager.context.createBufferSource();
        this.webAudio.start = this.webAudio.start || this.webAudio.noteOn;
        this.webAudio.stop = this.webAudio.stop || this.webAudio.noteOff;

        this.webAudio.buffer = this.audio.source;

        this.webAudio.loop = this.loop || this.audio.loop;
        this.startTime = this.manager.context.currentTime;

        this.webAudio.onended = this._onEnd.bind(this);

        this.webAudio.gainNode = this.manager.createGainNode();
        this.webAudio.gainNode.value = (this.audio.muted || this.muted) ? 0 : this.audio.volume;
        this.webAudio.gainNode.connect(this.manager.gainNode);

        this.webAudio.connect(this.webAudio.gainNode);

        this.webAudio.start(0, (pause) ? this.lastPauseTime : null);
    }else{
        var audio = this.htmlAudio;
        audio.src = (this.audio.source.src !== "") ? this.audio.source.src : this.audio.source.children[0].src;
        audio.preload = "auto";
        audio.volume = (this.audio.muted || this.muted) ? 0 : this.audio.volume;
        audio.load();
        audio.play();
    }
    return this;
};

AudioLine.prototype.mute = function(){
    this.muted = true;
    if(this.manager.context){
        this.webAudio.gainNode.gain.value = 0;
    }else{
        if(this.htmlAudio){
            this.htmlAudio.volume = 0;
        }
    }
    return this;
};

AudioLine.prototype.unmute = function(){
    this.muted = false;
    if(this.manager.context){
        this.webAudio.gainNode.gain.value = this.audio.volume;
    }else{
        if(this.htmlAudio){
            this.htmlAudio.volume = this.audio.volume;
        }
    }
    return this;
};

AudioLine.prototype.stop = function(){
    if(this.manager.context){
        this.webAudio.stop(0);
    }else{
        this.htmlAudio.pause();
        this.htmlAudio.currentTime = 0;
    }

    this.reset();
    return this;
};

AudioLine.prototype.pause = function(){
    if(this.manager.context){
        this.offsetTime += this.manager.context.currentTime - this.startTime;
        this.lastPauseTime = this.offsetTime%this.webAudio.buffer.duration;
        this.webAudio.stop(0);
    }else{
        this.htmlAudio.pause();
    }
    this.paused = true;
    return this;
};

AudioLine.prototype.resume = function(){
    if(this.paused){
        if(this.manager.context){
            this.play(true);
        }else{
            this.htmlAudio.play();
        }

        this.paused = false;
    }
    return this;
};

AudioLine.prototype._onEnd = function(){
    if(this.callback){
        this.callback(this.manager, this.audio);
    }

    if(!this.manager.context){
        if(this.loop || this.audio.loop){
            this.htmlAudio.currentTime = 0;
            this.htmlAudio.play();
        }else{
            this.reset();
        }
    }else if(this.manager.context && !this.paused){
        this.reset();
    }

};

module.exports = AudioLine;