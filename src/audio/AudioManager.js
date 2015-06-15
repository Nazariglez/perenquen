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
    this.musicMaxLines = 1;

    this.musicMuted = false;
    this.soundMuted = false;

    if(this.game.isWebAudio){
        this.context = new Device.webAudioContext();
        this.gainNode = this.createGainNode();
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

AudioManager.prototype.createGainNode = function(){
    return  this.context.createGain ? this.context.createGain() : this.context.createGainNode();
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

AudioManager.prototype._decodeAudio = function(name, url, data, next){
    name = name || url;
    if(this.context){
        this.context.decodeAudioData(data, function(buffer){
            utils.assetCache.addAudio(name, url, new Audio(this, buffer, name));
            next();
        });
    }else{
        utils.assetCache.addAudio(name, url, new Audio(this, data, name));
        next();
    }
    return this;
};

AudioManager.prototype.playMusic = function(id, loop, callback){
    return this._play(id, this.musicLines, loop, callback);
};

AudioManager.prototype.playSound = function(id, loop, callback){
    return this._play(id, this.soundLines, loop, callback);
};

AudioManager.prototype.stopMusic = function(id){
    return this._stop(id, this.musicLines);
};

AudioManager.prototype.stopSound = function(id){
    return this._stop(id, this.soundLines);
};

AudioManager.prototype.pauseMusic = function(id){
    return this._pause(id, this.musicLines);
};

AudioManager.prototype.pauseSound = function(id){
    return this._pause(id, this.soundLines);
};

AudioManager.prototype.resumeMusic = function(id){
    return this._resume(id, this.musicLines);
};

AudioManager.prototype.resumeSound = function(id){
    return this._resume(id, this.soundLines);
};

AudioManager.prototype.muteMusic = function(id){
    return this._mute(id, this.musicLines);
};

AudioManager.prototype.muteSound = function(id){
    return this._mute(id, this.soundLines);
};

AudioManager.prototype.unmuteMusic = function(id){
    return this._unmute(id, this.musicLines);
};

AudioManager.prototype.unmuteSound = function(id){
    return this._unmute(id, this.soundLines);
};

AudioManager.prototype._play = function(id, lines, loop, callback){
    var line = this._getAvailableLineFrom(lines);
    if(!line){
        console.error('AudioManager: All lines are busy');
        return this;
    }

    var audio = utils.assetCache.getAudio(id);
    if(!audio){
        console.error('Not found audio "' + id + '"');
        return this;
    }
    console.log(audio.source);
    line.setAudio(audio, loop, callback)
        .play();
    return this;
};

AudioManager.prototype._stop = function(id, lines){
    if(!id){
        for(var n = 0; n < lines.length; n++){
            if(!lines[n].available){
                lines[n].stop();
            }
        }
        return this;
    }

    var audioLines = this._getLinesById(id, lines);
    if(audioLines.length > 0){
        for(var i = 0; i < audioLines.length; i++){
            audioLines[i].stop();
        }
    }
    return this;
};

AudioManager.prototype._mute = function(id, lines){
    if(!id){
        for(var n = 0; n < lines.length; n++){
            lines[n].mute();
        }
        return this;
    }

    var audioLines = this._getLinesById(id, lines);
    if(audioLines.length > 0){
        for(var i = 0; i < audioLines.length; i++){
            audioLines[i].mute();
        }
    }
    return this;
};

AudioManager.prototype._unmute = function(id, lines){
    if(!id){
        for(var n = 0; n < lines.length; n++){
            lines[n].unmute();
        }
        return this;
    }

    var audioLines = this._getLinesById(id, lines);
    if(audioLines.length > 0){
        for(var i = 0; i < audioLines.length; i++){
            audioLines[i].unmute();
        }
    }
    return this;
};

AudioManager.prototype._pause = function(id, lines){
    if(!id){
        for(var n = 0; n < lines.length; n++){
            if(!lines[n].available){
                lines[n].pause();
            }
        }
        return this;
    }

    var audioLines = this._getLinesById(id, lines);
    if(audioLines.length > 0){
        for(var i = 0; i < audioLines.length; i++){
            audioLines[i].pause();
        }
    }
    return this;
};

AudioManager.prototype._resume = function(id, lines){
    if(!id){
        for(var n = 0; n < lines.length; n++){
            if(!lines[n].available){
                lines[n].resume();
            }
        }
        return this;
    }

    var audioLines = this._getLinesById(id, lines);
    if(audioLines.length > 0){
        for(var i = 0; i < audioLines.length; i++){
            audioLines[i].resume();
        }
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

AudioManager.prototype.pauseAllLines = function(){
    this.pauseMusic();
    this.pauseSound();

    return this;
};

AudioManager.prototype.resumeAllLines = function(){
    this.resumeMusic();
    this.resumeSound();
    return this;
};

module.exports = AudioManager;