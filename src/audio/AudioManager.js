var Device = require('../core/Device'),
    AudioLine = require('./AudioLine'),
    Audio = require('./Audio'),
    utils = require('../core/utils');

function AudioManager(game){
    this._init(game);
}

AudioManager.prototype.constructor = AudioManager;

AudioManager.prototype._init = function(game){
    this.game = game;
    this.soundMaxLines = 10;
    this.musicMaxLines = 2;

    if(this.game.isWebAudio){
        this.context = new Device.webAudioContext();
        this.gainNode = this.context.createGain ? this.context.createGain() : this.context.createGainNode();
        this.gainNode.connect(this.context.destination);
    }

    var i;

    this.soundLines = [];
    for(i = 0; i < this.soundMaxLines; i++){
        this.soundLines.push(new AudioLine(this));
    }

    this.musicLines = [];
    for(i = 0; i < this.musicMaxLines; i++){
        this.musicLines.push(new AudioLine(this));
    }

    this._tempLines = [];

};

AudioManager.prototype._getAvailableLineFrom = function(lines){
    var len = lines.length,
        r = null;

    for(var i = 0; i < len; i++){
        if(lines[i].available){
            r = lines[i];
            break;
        }
    }

    return r;
};

AudioManager.prototype.add = function(audio){
    this.audios.push(audio);
    return this;
};

AudioManager.prototype._decodeAudio = function(name, url, data){
    name = name || url;
    utils.assetCache.addAudio(name, url, new Audio(this, data, name));
    return this;
};

AudioManager.prototype.playMusic = function(id, loop, callback){
    return this._play(id, this.musicLines, loop, callback);
};

AudioManager.prototype.playSound = function(id, loop, callback){
    return this._play(id, this.soundLines, loop, callback);
};

AudioManager.prototype._play = function(id, lines, loop, callback){
    var line = this._getAvailableLineFrom(lines);
    if(!line){
        console.error('AudioManager: All lines are busy');
        return this;
    }

    var audio = utils.assetCache.getAudio(id);
    line.setAudio(audio, loop, callback)
        .play();
    return this;
};

AudioManager.prototype._stop = function(id, lines){
    var audioLines = this._getLinesById(id, lines);
    if(audioLines.length > 0){
        //TODO: Stop audios
    }
    return this;
};

AudioManager.prototype._getLinesById = function(id, lines){
    lines = lines || this.soundLines;
    this._tempLines.length = 0;

    for(var i = 0; i < lines.length; i++){
        if(!lines[i].available){
            if(lines[i].audio.id === id){
                this._tempLines.push(lines[i]);
            }
        }
    }

    return this._tempLines;

};

module.exports = AudioManager;