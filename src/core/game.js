var Game = module.exports = function Game(width, height, canvas){
    this.raf = null;
    this.width = width || 800;
    this.height = height || 600;
    this.renderer = getRenderer(this.width, this.height, canvas);
};

Game.prototype.constructor = Game;

Game.prototype.start = function(){

};

Game.prototype.stop = function(){

};

Game.prototype.animate = function(){
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
};

Game.prototype.resize = function(width, height){

};

function getRenderer(width, height, canvas){
    var args = {
        view : canvas || null
    };
}