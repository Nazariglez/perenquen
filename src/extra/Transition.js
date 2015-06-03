var Tween = require('../tween/Tween');

module.exports = {

    pushFromTop: function(){
        return function(transition){
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

            var tweenOut = new Tween(transition.sceneOut, transition.manager.tweenManager)
                .from({
                    x : 0,
                    y : 0
                }).to({
                    x : 0,
                    y : transition.sceneOut.height
                }).setTime(4000)
                .setExpire();

            tweenOut.start();
        }
    }

};