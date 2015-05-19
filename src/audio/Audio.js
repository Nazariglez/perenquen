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

    if(this.context){
        this.gainNode = this.context.createGain ? this.context.createGain() : this.context.createGainNode();
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

Audio.prototype.play = function(){
    if(this.context) {
        this.gainNode.gain.value = 1;
        this.gainNode.connect(this.manager.gainNode);
        this.source.connect(this.gainNode);

        this.source.start(0, 0);
    }

};

Audio.prototype._onEnd = function(){
    console.log(this.id, 'end');
};

module.exports = Audio;

