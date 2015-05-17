function AudioManager(game){
    this._init(game);
}

AudioManager.prototype.constructor = AudioManager;

AudioManager.prototype._init = function(game){
    this.game = game;
    this.audios = [];

    this.autoLoadOrder = ['m4a','ogg','mp3','wav'];
};

AudioManager.prototype.add = function(audio){
    this.audios.push(audio);
    return this;
};

module.exports = AudioManager;