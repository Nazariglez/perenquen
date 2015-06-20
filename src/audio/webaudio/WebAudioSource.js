var EventEmitter = require('eventemitter3');

function WebAudioSource(context){
    this._init(context);
}

WebAudioSource.prototype = Object.create(EventEmitter.prototype);
WebAudioSource.prototype.constructor = WebAudioSource;

WebAudioSource.prototype._init = function(context){
    EventEmitter.call(this);
    this.context = context;
    this.source = null;
    this.gainNode = (this.context.createGain) ? this.context.createGain() : this.context.createGainNode();

    this.refreshSource();

    this.lastPauseTime = 0;
    this.startTime = 0;
    this.offsetTime = 0;
};

WebAudioSource.prototype.refreshSource = function(){
   this.source = this.context.createBufferSource();

    if (!this.source.start) {
        this.source.start = this.source.noteOn;
    }

    if (!this.source.stop) {
        this.source.stop = this.source.noteOff;
    }

    this.source.onended = this.onEnd.bind(this);
};

WebAudioSource.prototype.onEnd = function(){
    this.stop();
    this.emit('ended');
    return this;
};

WebAudioSource.prototype.pause = function(){
    this.offsetTime += this.context.currentTime - this.startTime;
    this.lastPauseTime = this.offsetTime%this.source.buffer.duration;
    this.stop();
    return this;
};

WebAudioSource.prototype.stop = function(){
    this.source.stop(0);
    this.source.disconnect();
    this.refreshSource();
};

WebAudioSource.prototype.play = function(pause, loop){
    var pauseTime = pause ? this.lastPauseTime : 0;
    /*if(!this.source.buffer){
        this.setBuffer(this.buffer)
            .setLoop(this.loop);
    }*/

    this.startTime = this.context.currentTime;
    this.source.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.source.start(0, pauseTime);
    if(loop)this.loop = true;
    return this;
};

WebAudioSource.prototype.setVolume = function(volume){
    this.volume = volume;
    return this;
};

WebAudioSource.prototype.setLoop = function(value){
    this.loop = value;
    return this;
};

WebAudioSource.prototype.setBuffer = function(buffer){
    this.buffer = buffer;
    return this;
};

Object.defineProperties(WebAudioSource.prototype, {
    buffer : {
        get: function(){
            return this.source.buffer;
        },

        set: function(value){
            this.source.buffer = value;
        }
    },

    loop : {
        get: function(){
            return this.source.loop;
        },

        set: function(value){
            value = value !== false;
            this.source.loop = value;
        }
    },

    volume : {
        get: function(){
            return this.gainNode.gain.value;
        },

        set: function(value){
            this.gainNode.gain.value = value;
        }
    }
});

module.exports = WebAudioSource;
