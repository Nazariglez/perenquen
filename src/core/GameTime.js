function GameTime(game){
    this._init(game);
}

GameTime.prototype.constructor = GameTime;

GameTime.prototype._init = function(game){
    this.game = game;

    this.raf = -1;

    this.minFrameLimit = 1000/this.game.config.game.minFrameLimit;

    this.frameLastTime = 0;

    this.speed = 1;
    this.total = 0;
    this.delta = 0;
    this.msDelta = 0;
};

GameTime.prototype.start = function(){
    this.update();
    return this;
};

GameTime.prototype.stop = function(){
    window.cancelAnimationFrame(this.raf);
    return this;
};

GameTime.prototype.update = function(){
    this.raf = window.requestAnimationFrame(this.update.bind(this));

    var now = Date.now();
    var time = now - this.frameLastTime;

    this.msDelta = (time <= this.minFrameLimit) ? time : this.minFrameLimit;
    this.msDelta /= this.speed;

    this.frameLastTime = now;

    this.delta = this.msDelta/1000;
    this.total += this.delta;

    this.game.animate();

    return this;
};

module.exports = GameTime;