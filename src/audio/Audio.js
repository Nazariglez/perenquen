var AudioLine = require('./AudioLine');

function Audio(manager, data, id){
    this._init(manager, data, id);
}

Audio.prototype.constructor = Audio;

Audio.prototype._init = function(manager, data, id){
    this.manager = manager;
    this.id = id;
    this.context = this.manager.context;
    this.source = null;

    this.loop = false;
    this.volume = 1;
    this.mute = false;

    if(this.context){
        this.context.decodeAudioData(data, this._decoded.bind(this));
    }else{
        this.source = data;
    }
};

Audio.prototype._decoded = function(buffer){
    this.source = this.context.createBufferSource();
    if (!this.source.start)this.source.start = this.source.noteOn;
    if (!this.source.stop)this.source.stop = this.source.noteOff;

    this.source.buffer = buffer;
    this.source.loop = false;

    this.source.onended = this._onEnd.bind(this);
};

Audio.prototype.playOnMusic = function(loop, callback){
    this.manager.playMusic(this.id, loop, callback);
    return this;
};

Audio.prototype.playOnSound = function(loop, callback){
    return this.play(loop, callback);
};

Audio.prototype.play = function(loop, callback){
    this.manager.playSound(this.id, loop, callback);
    /*if(this.context) {
        this.gainNode.gain.value = 1;
        this.gainNode.connect(this.manager.gainNode);
        this.source.connect(this.gainNode);

        this.source.start(0, 0);
    }else{
        this.source.play();
    }*/

    return this;
};

Audio.prototype.stopOnMusic = function(){
    this.manager.stopMusic(this.id);
    return this;
};

Audio.prototype.stopOnSound = function(){
    return this.stop();
};

Audio.prototype.stop = function(){
    this.manager.stopSound(this.id);
    return this;
};

Audio.prototype._onEnd = function(){
    console.log(this.id, 'end');
};

module.exports = Audio;

