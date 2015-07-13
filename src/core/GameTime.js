var last = 0;

function GameTime(game){
    this._init(game);
}

GameTime.prototype.constructor = GameTime;

GameTime.prototype._init = function(game){
    this.game = game;

    this.raf = -1;

    this.minFrameLimit = 1/this.game.config.game.minFrameLimit;

    this.speed = 1;
    this.time = 0;
    this.lastTime = 0;
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

    this.time += Math.min((now - last)/1000, this.minFrameLimit);
    this.delta = this.time - this.lastTime;
    this.lastTime = this.time;

    this.msDelta = this.delta*1000;

    last = now;

    this.game.animate();

    return this;
};

module.exports = GameTime;