var Transition = require('./Transition');

function SceneTransition(sceneOut, sceneIn, effect, manager){
    this._init(sceneOut, sceneIn, effect, manager);
}

SceneTransition.prototype.constructor = SceneTransition;

SceneTransition.prototype._init = function(sceneOut, sceneIn, effect, manager){
    this.manager = manager;
    this.sceneOut = sceneOut;
    this.sceneIn = sceneIn;

    this.manager.currentScene = null;
    this.manager.children.length = 0;

    Transition.pushFromTop()(this);
};

SceneTransition.prototype.sortScenes = function(first, second){
    this.sceneIn.visible = false;

    this.manager.addChild(first);
    this.manager.addChild(second);
};

module.exports = SceneTransition;

var transitionEffect = function(transition){
    transition.sortScenes(transition.sceneOut, transition.sceneIn);

    var tweenIn = new Tween(transition.sceneIn, transition.manager.tweenManager)
        .from({
            x : 0,
            y : -transition.sceneIn.height
        }).to({
            x : 0,
            y : 0
        }).setTime(4000)
        .setExpire()

        .onStart(function(){
            this.target.visible = true;
        })

        .onEnd(function(){
            transition.manager.setCurrentScene(transition.sceneIn);
        });

        tweenIn.start();
};