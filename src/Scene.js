(function(){

    PQ.Scene = PQ.Container.extend({
        id: null,
        _init: function(game, color){
            PQ.Scene._super._init.call(this);
            this._initiated = false;
            this._mask = null;
            this.paused = false;
            this.game = game;
            var size = game.getSize();

            this.anchor = new PQ.Point(0,0);
            color = color || 0x000001;
            this.setSize(size.width, size.height)
                .setBackgroundColor(color);

            this.camera = new PQ.Camera(this)
                .setSize(size.width, size.height)
                .setPosition(size.width/2, size.height/2);

            this._addChild(this.camera);

            this.gui = new PQ.Container()
                .setSize(size.width, size.height)
                .setPosition(size.width/2, size.height/2);

            this._addChild(this.gui);

            this.scale.set(PQ.Config.resolution, PQ.Config.resolution);

            this.timerManager = new PQ.TimerManager();
            this.tweenManager = new PQ.TweenManager();
            return this;
        },

        createTimer: function(time){
            return this.timerManager.createTimer(time);
        },

        createTween: function(target){
            return this.tweenManager.createTween(target);
        },

        setPause: function(value){
            this.paused = (value !== false);
            return this;
        },

        togglePause: function(){
            this.paused = !this.paused;
            return this;
        },

        addChild: function(child){
            this.camera.addChild(child);
            return this;
        },

        _addChild: function(child){
            PIXI.DisplayObjectContainer.prototype.addChild.call(this, child);
            this._sortChildrenByDepth();

            return this;
        },

        setID: function(id){
            this.id = id;
            return this;
        },

        getID: function(){
            return this.id;
        },

        addTween: function(tween){
            this._tweenManager.addTween(tween);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(this.paused || this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this.timerManager._update) {
                this.timerManager._update(gameTime, frameElapsedTime);
            }

            if(this.tweenManager._update) {
                this.tweenManager._update(gameTime, frameElapsedTime);
            }

            if(this.camera._update) {
                this.camera._update(gameTime, frameElapsedTime);
            }

            if(this.gui._update) {
                this.gui._update(gameTime, frameElapsedTime);
            }
        },

        setClip: function(value){
            if(value === false){
                if(this._mask){
                    this.removeChild(this._mask);
                    this._mask = null;
                    this.mask = null;
                }
            }else if(!this._mask) {
                this._mask = new PQ.Graphics()
                    .beginFill()
                    .drawRect(0, 0, this.game.getSize().width, this.game.getSize().height)
                    .endFill()
                    .addTo(this);

                this.mask = this._mask;
            }

            return this;
        },

        transitionTo: function(scene, effect){
            return this.game.sceneManager.createTransitionTo(scene, effect);
        },

        update: function(gameTime, frameElapsedTime){ return this; },

        onActive: function(){ return this; }

    });

})();