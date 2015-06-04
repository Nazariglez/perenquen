var Transition = require('./Transition'),
    Easing = require('../tween/Easing');

function SceneTransition(sceneOut, sceneIn, effect, manager){
    this._init(sceneOut, sceneIn, effect, manager);
}

SceneTransition.prototype.constructor = SceneTransition;

SceneTransition.prototype._init = function(sceneOut, sceneIn, effect, manager){
    this.manager = manager;
    this.isWebGL = manager.game.isWebGL;
    this.tweenManager = manager.tweenManager;

    this.sceneIn = sceneIn;
    this.sceneOut = sceneOut;

    this.effect = effect || Transition.pushFromTop();
    this.sceneIn.visible = false;

    this.time = 3000;
    this.easing = Easing.linear();
    this.delay = 0;

    this.isStarted = false;

    this._onStartCallback = function(){};
    this._onEndCallback = function(){};
};

SceneTransition.prototype.start = function(){
    if(this.isStarted)return this;
    this.isStarted = true;

    this.effect(this, this.sceneOut, this.sceneIn);
    return this;
};

SceneTransition.prototype.sortScenes = function(first, second){
    this.manager.children.length = 0;

    this.manager.addChild(first);
    this.manager.addChild(second);

    return this;
};

SceneTransition.prototype._onTransitionStart = function(){
    this.sceneIn.visible = true;
    this.manager.currentScene = null;
    this._onStartCallback();
};

SceneTransition.prototype._onTransitionEnd = function(){
    this.manager.setCurrentScene(this.sceneIn);
    this._onEndCallback();
};

SceneTransition.prototype.onStart = function(callback){
    this._onStartCallback = callback;
    return this;
};

SceneTransition.prototype.onEnd = function(callback){
    this._onEndCallback = callback;
    this.isStarted = false;
    return this;
};

SceneTransition.prototype.setTime = function(time){
    this.time = time;
    return this;
};

SceneTransition.prototype.setDelay = function(delay){
    this.delay = delay;
    return this;
};

SceneTransition.prototype.setEasing = function(easing){
    this.easing = easing;
    return this;
};

SceneTransition.prototype.setEffect = function(effect){
    this.effect = effect || Transition.pushFromTop();
    return this;
};

module.exports = SceneTransition;
