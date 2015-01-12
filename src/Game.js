(function(){

    var resizeListener = null;

    PQ.Game = PQ.Class.extend({
        _id : 0,
        renderer: null,
        _game: null,
        _size : null,
        _raf: null,
        _lastTime: 0,
        _frameElapsedTime: null,
        _onStart: null,
        time: 0,
        paused: false,

        currentScene: null,

        _init: function(width, height, canvas){
            this._createRenderer(width, height, canvas);
            this.sceneManager = new PQ.SceneManager(this);
            this.assetLoader = new PQ.AssetLoader(this);
            this.audioManager = new PQ.AudioManager(this, PQ.Config.audioAtSameTime);
            this.timerManager = new PQ.TimerManager();
            this.tweenManager = new PQ.TweenManager();
            this.dataManager = new PQ.DataManager(PQ.Config.gameId);

            if(this.sceneManager.getTotal() === 0){
                this.sceneManager.createScene('initial', 0x000001);
            }

            if(PQ.Config.screenScale !== PQ.screenScale.NONE){
                this.enableAutoResize(true);
            }

            if(PQ.Config.captureKeyboard){
                PQ.Input.Keyboard.enable();
            }

            //TODO: Bloquear este evento con cocoon? o pasarle otro tipo de evento para cuando la app pasa a 2 plano?
            PQ.visibilityChange(this);
            this._sayHello();

            if(PQ.Config.debug){
                PQ.Debug.enable();
            }

            PQ.log('Game Resolution: ' + PQ.Config.resolution);
            return this;
        },

        createScene: function(id, color){
            return this.sceneManager.createScene(id, color);
        },

        addScene: function(scene, id){
            this.sceneManager.addScene(scene, id);
            return this;
        },

        getJson: function(id){
            return PQ.AssetCache.getJson(id);
        },

        getAudio: function(id){
            return PQ.AssetCache.getAudio(id);
        },

        getTexture: function(id){
            return PQ.AssetCache.getTexture(id);
        },

        visibilityChange: function(hidden){
            if(PQ.Config.pauseOnVisibilityChange){
                if(hidden){
                    this.stop();
                }else{
                    this.start();
                }
            }
            return this;
        },

        _sayHello: function(){
            if(PQ.Config.sayHello){
                var renderType = (this.renderer instanceof PIXI.WebGLRenderer) ? 'WebGL' : 'Canvas';
                var audioType;
                if(this.audioManager.type === PQ.HTML_AUDIO){
                    audioType = 'HTMLAudio';
                }else if(this.audioManager.type === PQ.WEB_AUDIO){
                    audioType = 'WebAudio';
                }else{
                    audioType = 'None';
                }
                PQ.sayHello(renderType,audioType);
            }
        },

        _createRenderer : function(width, height, canvas){
            this._size = {
                width: width,
                height: height
            };

            if(navigator.isCocoonJS && !canvas){
                canvas = window.document.createElement('screencanvas');
            }
            this.renderer = PQ.getRenderer(width, height, canvas);
            this.resize(this._size.width, this._size.height);
            document.body.appendChild(this.renderer.view);

            return this;
        },

        _updateTime: function(){
            var now = Date.now();
            this._frameElapsedTime = now - this._lastTime;
            this._lastTime = now;
            PQ.delta = this._frameElapsedTime/1000;
        },

        start: function(){
            this._updateTime();
            this._animate();
            this.audioManager.pauseAll(false);
            return this;
        },

        _update: function(){
            this._raf = window.requestAnimationFrame(this._animate.bind(this));
            this._updateTime();
            this.renderer.render(this.sceneManager);

            if(!this.paused && this.update(this.time, this._frameElapsedTime) !== false){
                this.time += this._frameElapsedTime;

                this.timerManager._update(this.time, this._frameElapsedTime);
                this.tweenManager._update(this.time, this._frameElapsedTime);
                this.sceneManager._update(this.time, this._frameElapsedTime);
            }

            if(PQ.Config.captureKeyboard && PQ.Input.Keyboard.enabled){
                PQ.Input.Keyboard._update();
            }

            PQ.Debug.update();

        },

        _animate: function(){
            this._update();
        },

        setPause: function(value){
            this.paused = (value !== false);
            this.audioManager.pauseAll(this.paused);
            return this;
        },

        pause: function(){
            return this.setPause(true);
        },

        resume: function(){
            return this.setPause(false);
        },

        createTimer: function(time){
            return this.timerManager.createTimer(time);
        },

        stop: function(){
            window.cancelAnimationFrame(this._raf);
            this.audioManager.pauseAll(true);
            return this;
        },

        getSize: function(){
            return this._size;
        },

        enableAutoResize: function(value, mode){

            function removeListener(){
                if(resizeListener){
                    window.removeEventListener('resize', resizeListener);
                    resizeListener = null;
                }
            }

            mode = mode || PQ.Config.screenScale;
            value = (value !== false);
            var scope = this;
            var canvas = this.renderer.view;
            var size = this.getSize();

            if(navigator.isCocoonJS){
                //console.log('cocoonjs');
                //this.renderer.resize(window.innerWidth, window.innerHeight);
                //canvas.style.cssText = 'idtkscale:ScaleToFill;';
                return this;
            }

            if(mode !== PQ.screenScale.NONE) {
                if (value) {
                    removeListener();

                    if(PQ.Config.screenScale === PQ.screenScale.ASPECT_FIT) {

                        resizeListener = function (e) {
                            var ww = parseInt(canvas.style.width) || canvas.width;
                            var hh = parseInt(canvas.style.height) || canvas.height;

                            if (window.innerWidth < ww || window.innerHeight < hh || window.innerWidth > ww || window.innerHeight > hh) {
                                var scale = Math.min(window.innerWidth/size.width, window.innerHeight/size.height);
                                scope.resize(size.width*scale, size.height*scale);
                            }
                        };

                    }else if(PQ.Config.screenScale === PQ.screenScale.FILL){

                        resizeListener = function (e) {
                            var ww = parseInt(canvas.style.width) || canvas.width;
                            var hh = parseInt(canvas.style.height) || canvas.height;

                            if (window.innerWidth !== ww || window.innerHeight !== hh) {
                                scope.resize(window.innerWidth, window.innerHeight);
                            }
                        };

                    }else if(PQ.Config.screenScale === PQ.screenScale.ASPECT_FILL){

                        resizeListener = function (e) {
                            //TODO: Revisar en moviles
                            var ww = parseInt(canvas.style.width) || canvas.width;
                            var hh = parseInt(canvas.style.height) || canvas.height;

                            if (window.innerWidth < ww || window.innerHeight < hh || window.innerWidth > ww || window.innerHeight > hh) {
                                var scale = Math.max(window.innerWidth/size.width, window.innerHeight/size.height);
                                var width = size.width*scale,
                                    height = size.height*scale;
                                scope.resize(width, height);

                                var topMargin = (window.innerHeight-height)/2;
                                var leftMargin = (window.innerWidth-width)/2;

                                canvas.style['margin-top'] = topMargin + 'px';
                                canvas.style['margin-left'] = leftMargin + 'px';
                            }
                        };
                    }

                    window.addEventListener('resize', resizeListener);
                    resizeListener();
                } else {
                    removeListener();
                }
            }

            return this;
        },

        resize: function(width, height){
            var canvas = this.renderer.view;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            return this;
        },

        preUpdate: function(gameTime, frameElapsedTime){return this;},
        postUpdate: function(gameTime, frameElapsedTime){return this;},
        update: function(gameTime, frameElapsedTime){return this;}
    });

    Object.defineProperty(PQ.Game.prototype, 'currentScene', {
        get : function(){
            return this.sceneManager.currentScene;
        }
    });

    Object.defineProperty(PQ.Game.prototype, 'width', {
        get : function(){
            return this._size.width;
        }
    });

    Object.defineProperty(PQ.Game.prototype, 'height', {
        get : function(){
            return this._size.height;
        }
    });

})();