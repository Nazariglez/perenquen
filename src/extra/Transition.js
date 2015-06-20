var Tween = require('../tween/Tween'),
    Graphics = require('../display/Graphics');

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
    },


    exitToTop: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

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
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenOut.start();

        };
    },


    exitToBottom: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

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
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenOut.start();

        };
    },


    exitToRight: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

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
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenOut.start();

        };
    },


    exitToLeft: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

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
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenOut.start();

        };
    },


    fadeToColor: function(color){
        color = color || 0x000001;

        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

            var graph = new Graphics()
                .beginFill(color)
                .drawRect(0,0,sceneIn.width,sceneIn.height)
                .endFill()
                .setAlpha(0)
                .addTo(transition.manager);

            var tween = new Tween(graph, transition.tweenManager)
                .from({
                    alpha: 0
                }).to({
                    alpha: 1
                }).setPingPong()
                .setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onPingPong(function(){
                    sceneOut.visible = false;
                })

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tween.start();

        };
    },


    fadeIn: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneOut, sceneIn);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    alpha: 0
                }).to({
                    alpha: 1
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

        };
    },


    fadeOut: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

            var tweenOut = new Tween(sceneOut, transition.tweenManager)
                .from({
                    alpha: 1
                }).to({
                    alpha: 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenOut.start();

        };
    },


    crossFade: function(){
        return function(transition, sceneOut, sceneIn){
            transition.sortScenes(sceneIn, sceneOut);

            var tweenIn = new Tween(sceneIn, transition.tweenManager)
                .from({
                    alpha: 0
                }).to({
                    alpha: 1
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire()

                .onStart(transition._onTransitionStart.bind(transition))
                .onEnd(transition._onTransitionEnd.bind(transition));

            tweenIn.start();

            var tweenOut = new Tween(sceneOut, transition.tweenManager)
                .from({
                    alpha: 1
                }).to({
                    alpha: 0
                }).setTime(transition.time)
                .setDelay(transition.delay)
                .setEasing(transition.easing)
                .setExpire();

            tweenOut.start();

        };
    }

};