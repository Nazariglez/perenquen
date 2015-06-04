var Container = require('./Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    Graphics = require('./Graphics'),
    TimerManager = require('../timer/TimerManager'),
    TweenManager = require('../tween/TweenManager'),
    Camera = require('./Camera');

function Scene(game){
    this._init(game);
}

Scene.prototype = Object.create(Container.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.displayObjectUpdateTransform = function(){
    Container.prototype.displayObjectUpdateTransform.call(this);
};

Scene.prototype._init = function(game){
    Container.prototype._init.call(this);

    this.game = game;
    this.size.set(game.width,game.height);
    this.setAnchor(0,0);

    this._backgroundColor = null;
    this._backgroundColorDirty = false;

    //bg
    this.bgGraphic = new Graphics();
    addChild(this, this.bgGraphic);

    //Camera
    this.camera = new Camera(this);
    addChild(this, this.camera);

    //HUD
    this.hud = new Container()
        .setSize(this.width, this.height)
        .setPosition(this.width/2, this.height/2);

    addChild(this, this.hud);

    this.manager = null;
    this.timerManager = new TimerManager();
    this.tweenManager = new TweenManager();

    this.paused = false;
};

Scene.prototype.setBackgroundColor = function(color){
    this.backgroundColor = color;
    //this.bgGraphic.cacheAsBitmap = true;
    return this;
};

Scene.prototype.setID = function(id){
    this.id = id;
    return this;
};

Scene.prototype.setManager = function(manager){
    this.manager = manager;
    return this;
};

Scene.prototype.animate = function(gameTime, delta){
    if(this.paused || this.update(gameTime, delta) === false){
        return this;
    }

    this.timerManager.tick(delta);
    this.tweenManager.tick(delta);

    var len = this.children.length;
    for(var i = 0; i < len; i++){
        this.children[i].animate(gameTime, delta);
    }

    return this;
};

Scene.prototype.renderWebGL = function(renderer){
    if(this._backgroundColorDirty){
        this.bgGraphic.clear();
        if(typeof this.backgroundColor === "number"){
            this.bgGraphic.beginFill(this.backgroundColor)
                .drawRect(0,0,this.width,this.height)
                .endFill();
        }
        this._backgroundColorDirty = false;
    }
    Container.prototype.renderWebGL.call(this, renderer);
    return this;
};

Scene.prototype.renderCanvas = function(renderer){
    if(this._backgroundColorDirty){
        this.bgGraphic.clear();
        if(typeof this.backgroundColor === "number"){
            this.bgGraphic.beginFill(this.backgroundColor)
                .drawRect(0,0,this.width,this.height)
                .endFill();
        }
        this._backgroundColorDirty = false;
    }
    Container.prototype.renderCanvas.call(this, renderer);
    return this;
};

Scene.prototype.setPause = function(value){
    value = (value !== false);
    this.paused = value;
    return this;
};

Scene.prototype.togglePause = function(){
    this.paused = !this.paused;
    return this;
};

Scene.prototype.createTimer = function(time){
    return this.timerManager.createTimer(time);
};

Scene.prototype.createTimeline = function(){
    return this.timerManager.createTimeline();
};

Scene.prototype.createTween = function(target){
    return this.tweenManager.createTween(target);
};

Scene.prototype.transitionTo = function(scene, effect){
    return this.game.sceneManager.createTransition(this, scene, effect);
};

Scene.prototype.addChild = function(child){
    this.camera.addChild(child);
    return this;
};

Scene.prototype.sortChildrenByDepth = function(){
    this.camera.sortChildrenByDepth();
    return this;
};

Object.defineProperties(Scene.prototype, {
    backgroundColor : {
        get: function(){
            return this._backgroundColor;
        },
        set: function(color){
            if(color !== this._backgroundColor) {
                //if (this.bgGraphic.cacheAsBitmap)this.bgGraphic.cacheAsBitmap = false;
                this._backgroundColorDirty = true;
                this._backgroundColor = color;
            }
        }
    },

    width : {
        get: function(){
            return this.size.x;
        }
    },
    height: {
        get: function(){
            return this.size.y;
        }
    }
});

module.exports = Scene;

function addChild(scene, child){
    return Container.prototype.addChild.call(scene, child);
}
