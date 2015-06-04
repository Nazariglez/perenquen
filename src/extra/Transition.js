var Tween = require('../tween/Tween');

module.exports = {

    pushFromTop: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : 0,
                    y : -sceneIn.height
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

            var tweenOut = new Tween(sceneOut, transition.tweenManager)
                .from({
                    x : 0,
                    y : 0
                }).to({
                    x : 0,
                    y : sceneOut.height
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire();

            tweenOut.start();
        };
    },

    pushFromBottom: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : 0,
                    y : sceneIn.height
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

            var tweenOut = new Tween(sceneOut, transition.tweenManager)
                .from({
                    x : 0,
                    y : 0
                }).to({
                    x : 0,
                    y : -sceneOut.height
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire();

            tweenOut.start();
        };
    },


    pushFromLeft: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : -sceneIn.width,
                    y : 0
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

            var tweenOut = new Tween(sceneOut, transition.tweenManager)
                .from({
                    x : 0,
                    y : 0
                }).to({
                    x : sceneOut.width,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire();

            tweenOut.start();
        };
    },


    pushFromRight: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : sceneIn.width,
                    y : 0
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

            var tweenOut = new Tween(sceneOut, transition.tweenManager)
                .from({
                    x : 0,
                    y : 0
                }).to({
                    x : -sceneOut.width,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire();

            tweenOut.start();
        };
    },


    overlapFromTop: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : 0,
                    y : -sceneIn.height
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

        };
    },


    overlapFromBottom: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : 0,
                    y : sceneIn.height
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

        };
    },


    overlapFromRight: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : -sceneIn.width,
                    y : 0
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

        };
    },


    overlapFromLeft: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    x : sceneIn.width,
                    y : 0
                }).to({
                    x : 0,
                    y : 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

        };
    }



};