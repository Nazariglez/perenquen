var Device = require('../core/Device'),
    Audio = require('./Audio'),
    utils = require('../core/utils');

function AudioManager(game){
    this._init(game);
}

AudioManager.prototype.constructor = AudioManager;

AudioManager.prototype._init = function(game){
    this.game = game;
    this.audios = [];
    this.context = null;

    if(this.game.isWebAudio){
        this.context = new Device.webAudioContext();
        this.gainNode = this.context.createGain ? this.context.createGain() : this.context.createGainNode();
        this.gainNode.connect(this.context.destination);
    }
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

module.exports = AudioManager;