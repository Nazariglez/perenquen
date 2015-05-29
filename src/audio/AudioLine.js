function AudioLine(manager){
    this._init(manager);
}

AudioLine.prototype.constructor = AudioLine;

AudioLine.prototype._init = function(manager){
    this.manager = manager;
    this.available = true;
    this.audio = null;
    this.htmlAudio = null;
    this.loop = false;
    this.paused = false;
    this.callback = null;
    this.muted = false;

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
    return this;
};

AudioLine.prototype.setAudio = function(audio, loop, callback){
    if(typeof loop === "function"){
        loop = false;
        callback = loop;
    }

    this.audio = audio;
    this.available = false;
    this.loop = loop;
    this.callback = callback;
    return this;
};

AudioLine.prototype.play = function(){
    if(this.paused)return this;

    if(this.manager.context){

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

    }else{
        if(this.htmlAudio){
            this.htmlAudio.volume = this.audio.volume;
        }
    }
    return this;
};

AudioLine.prototype.stop = function(){
    if(this.manager.context){

    }else{
        this.htmlAudio.pause();
        this.htmlAudio.currentTime = 0;
        this.reset();
    }
    return this;
};

AudioLine.prototype.pause = function(){
    if(this.manager.context){

    }else{
        this.htmlAudio.pause();
    }
    this.paused = true;
    return this;
};

AudioLine.prototype.resume = function(){
    if(this.paused){

        if(this.manager.context){

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
    }
};

module.exports = AudioLine;