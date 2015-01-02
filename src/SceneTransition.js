(function(){

    PQ.SceneTransition = PQ.Class.extend({
        _tweenIn: null,
        _tweenOut: null,

        _onStartCallback: null,
        _onEndCallback: null,

        transitionTimer: null,

        _init: function(game, sceneIn, sceneOut, effect, delay, time, easing){
            var scope = this;
            this.game = game;
            this.time = time || 1000;
            this.delay = delay || 0;
            this.easing = easing || PQ.Easing.linear();
            this.effect = effect || PQ.Transition.pushFromLeft();

            this.transitionTimer = new PQ.Timer(this.time, game.timerManager);

            var inTexture, outTexture;

            //TODO: Ejecutar esto un frame despues, me permitiria separar la carga de crear la textuas si el usuario usa delay
            this.transitionTimer.onStart(function(){
                sceneIn.setPause().setClip();
                inTexture = scope._takeSnapShot(sceneIn);
                sceneIn.setPause(false).setClip(false);
                sceneOut.setPause().setClip();
                outTexture = scope._takeSnapShot(sceneOut);
                sceneOut.setPause(false).setClip(false);

                var tweens = scope.effect(scope.game.sceneManager, inTexture, outTexture, scope.time, scope.easing);
                scope._tweenIn = tweens.tweenIn;
                scope._tweenOut = tweens.tweenOut;

                if(scope._tweenIn){
                    scope._tweenIn.setManager(scope.game.tweenManager);
                }

                if(scope._tweenOut){
                    scope._tweenOut.setManager(scope.game.tweenManager);
                }

                if(scope._onStartCallback && typeof scope._onStartCallback === "function"){
                    scope._onStartCallback(sceneIn, sceneOut);
                }

            }).onEnd(function(){
                scope.game.sceneManager.renderScene(sceneIn);

                if(scope._onEndCallback && typeof scope._onEndCallback === "function"){
                    scope._onEndCallback(sceneIn, sceneOut);
                }

                inTexture.texture.destroy();
                outTexture.texture.destroy();
            });

            return this;
        },

        _takeSnapShot: function(scene){
            var texture = scene.generateTexture();
            var sprite = new PQ.Sprite(texture)
                .setAnchor(0,0);

            sprite.scale.set(PQ.Config.resolution, PQ.Config.resolution);
            return sprite;
        },

        onEnd: function(callback){
            this._onEndCallback = callback;
            return this;
        },

        onStart: function(callback){
            this._onStartCallback = callback;
            return this;
        },

        setEasing: function(easing){
            easing = easing || PQ.Easing.Linear;
            this.easing = easing;
            return this;
        },

        setTime: function(time){
            time = time || 1000;
            this.time = time;
            this.transitionTimer.setTime(time);
            return this;
        },

        setDelay: function(delay){
            delay = delay || 0;
            this.delay = delay;
            this.transitionTimer.setDelay(delay);
            return this;
        }

    });

    PQ.Transition = {

        //Empujar parejo
        pushFromTop: function() {
            return function (sceneManager, sceneIn, sceneOut, time, easing) {
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x: 0,
                        y: -sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x: 0,
                        y: 0
                    }).to({
                        x: 0,
                        y: sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn: tweenIn,
                    tweenOut: tweenOut
                };
            };
        },

        pushFromBottom: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing) {
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x: 0,
                        y: sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x: 0,
                        y: 0
                    }).to({
                        x: 0,
                        y: -sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn: tweenIn,
                    tweenOut: tweenOut
                };
            };
        },

        pushFromLeft: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : -sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x : 0,
                        y : 0
                    }).to({
                        x: sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        pushFromRight: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .from({
                        x : 0,
                        y : 0
                    }).to({
                        x: -sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        //Situar encima sin mover la anterior
        overlapFromTop: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : 0,
                        y : -sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        overlapFromBottom: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : 0,
                        y : sceneIn.height*PQ.Config.resolution
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        overlapFromLeft: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : -sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        overlapFromRight: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        x : sceneIn.width*PQ.Config.resolution,
                        y : 0
                    }).to({
                        x: 0,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        //La que está sale dejando ver a la nueva debajo ya situada
        exitFromTop: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: 0,
                        y: -sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        exitFromBottom: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: 0,
                        y: sceneOut.height*PQ.Config.resolution
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        exitFromLeft: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: -sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        exitFromRight: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        x: sceneOut.width*PQ.Config.resolution,
                        y: 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },

        //Fundido a un color, y vuelta
        fadeToColor: function(color){
            color = color || 0x000001;

            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var colorGraph = new PQ.Graphics()
                    .beginFill(color)
                    .drawRect(0, 0, sceneIn.width*PQ.Config.resolution, sceneIn.height*PQ.Config.resolution)
                    .endFill();

                colorGraph.setAlpha(0);

                sceneManager.addChild(colorGraph)
                    .setPosition(0,0);

                time = time/2;

                var tween = new PQ.Tween(colorGraph)
                    .to({
                        alpha : 1
                    }).setPingPong()
                    .onPingPong(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tween
                };
            };
        },

        fadeIn: function(){ //La nueva aparece encima de la vieja
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneOut, sceneIn);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        alpha : 0
                    }).to({
                        alpha : 1
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : null
                };
            };
        },

        fadeOut: function(){ //La vieja desaparece dejando ver la nueva debajo
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        alpha : 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : null,
                    tweenOut : tweenOut
                };
            };
        },
        crossFade: function(){ //Desapafece una y aparece la otra
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        alpha : 0
                    })
                    .to({
                        alpha : 1
                    })
                    .setTime(time)
                    .setEasing(easing);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        alpha : 0
                    })
                    .setTime(time)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        flipX: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);
                sceneIn.setPosition(sceneIn.width*PQ.Config.resolution/2, 0).setAnchor(0.5, 0);
                sceneOut.setPosition(sceneOut.width*PQ.Config.resolution/2, 0).setAnchor(0.5, 0);
                var ww = sceneIn.width*PQ.Config.resolution;
                sceneIn.width = 0;

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        width: 0
                    }).onEnd(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time/2)
                    .setEasing(easing);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        width: 0
                    })
                    .to({
                        width: ww
                    })
                    .setDelay(time/2)
                    .setTime(time/2)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        flipY: function(){
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);
                sceneIn.setPosition(0, sceneIn.height*PQ.Config.resolution/2).setAnchor(0, 0.5);
                sceneOut.setPosition(0, sceneOut.height*PQ.Config.resolution/2).setAnchor(0, 0.5);
                var hh = sceneIn.height*PQ.Config.resolution;
                sceneIn.height = 0;

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        height: 0
                    }).onEnd(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time/2)
                    .setEasing(easing);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        height: 0
                    })
                    .to({
                        height: hh
                    })
                    .setDelay(time/2)
                    .setTime(time/2)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };
            };
        },

        zoom: function(value){
            value = (typeof value !== "number") ? 0.5 : value;
            return function(sceneManager, sceneIn, sceneOut, time, easing){
                sceneManager.addTransitionSprites(sceneIn, sceneOut);
                sceneIn.setPosition(sceneIn.width*PQ.Config.resolution/2, sceneIn.height*PQ.Config.resolution/2).setAnchor(0.5, 0.5);
                sceneOut.setPosition(sceneOut.width*PQ.Config.resolution/2, sceneOut.height*PQ.Config.resolution/2).setAnchor(0.5, 0.5);
                var ww = sceneIn.width*PQ.Config.resolution;
                var hh = sceneIn.height*PQ.Config.resolution;

                var scale = sceneIn.scaleX * value;
                var _scale = sceneIn.scaleX;

                sceneIn.setScale(scale,scale);

                var tweenOut = new PQ.Tween(sceneOut)
                    .to({
                        scaleX: scale,
                        scaleY: scale
                    }).onEnd(function(){
                        sceneOut.visible = false;
                    })
                    .setTime(time/2)
                    .setEasing(easing);

                var tweenIn = new PQ.Tween(sceneIn)
                    .from({
                        scaleX: scale,
                        scaleY: scale
                    })
                    .to({
                        scaleX: _scale,
                        scaleY: _scale
                    })
                    .setDelay(time/2)
                    .setTime(time/2)
                    .setEasing(easing);

                return {
                    tweenIn : tweenIn,
                    tweenOut : tweenOut
                };

            };
        },

    };

})();