(function(){

    PQ.SceneManager = PIXI.Stage.extend({
        _initiated: true,

        _init: function(game, color){
            this.currentScene = null;

            color = color || 0x000001;
            this.game = game;
            this._scenes = [];

            PQ.SceneManager._super._init.call(this,color);

            return this;
        },

        removeScene: function(scene){
            var i;
            if(typeof scene === "string") {
                for (i = 0; i < this._scenes.length; i++) {
                    if (scene === this._scenes[i].getID()) {
                        this._scenes.splice(i, 1);
                    }
                }
            }else if(scene instanceof PQ.Scene){
                for (i = 0; i < this._scenes.length; i++) {
                    if (scene === this._scenes[i]) {
                        this._scenes.splice(i, 1);
                    }
                }
            }

            return this;
        },

        removeAll: function(){
            for(var i = this.children.length-1; i >= 0; i--){
                this.removeChild(this.children[i]);
            }

            return this;
        },

        setScene: function(scene){
            if(typeof scene === "string"){
                scene = this.getScene(scene);
            }
            this.removeAll();
            this.addChild(scene);
            return this;
        },

        getTotal: function(){
            return this._scenes.length;
        },

        addScene: function(scene, id){
            if(id){
                scene.setID(id);
            }

            this._scenes.push(scene);
            this._initiated = false;
            return this;
        },

        createScene: function(id, color){
            color = (typeof color !== "number") ? 0x000001 : color;

            var scene = new PQ.Scene(this.game, color);

            this.addScene(scene, id);

            if(!this.game.currentScene){
                this.renderScene(scene);
            }

            return scene;
        },

        _update: function(lastTime, frameElapsedTime){
            this.currentScene._update(lastTime, frameElapsedTime);
        },

        createTransitionTo: function(scene, effect){
            if(typeof scene === "string") scene = this.getScene(scene);
            return new PQ.SceneTransition(this.game, scene, this.currentScene, effect);
        },

        getScene: function(id){
            var scene = null;
            for(var i = 0; i < this._scenes.length; i++){
                if(id === this._scenes[i].getID()){
                    scene = this._scenes[i];
                }
            }
            return scene;
        },

        addTransitionSprites: function(one, two){
            this.removeAll();
            this.addChild(one);
            this.addChild(two);

            return this;
        },

        renderScene: function(scene){
            if(typeof scene === "string"){
                var id = scene;
                scene = this.getScene(scene);
            }

            if(scene){
                this.currentScene = scene;
                this.setScene(scene);
                if(typeof scene.onActive === "function"){
                    scene.onActive();
                }
            }

            return this;
        },

        _renderWebGL: function(rendererSession){
            if(!this._initiated) {
                //Initialize new scenes
                var i, init = [];
                for (i = 0; i < this._scenes.length; i++) {
                    if (!this._scenes[i]._initiated) {
                        init.push(this._scenes[i]);
                        this.addChildAt(this._scenes[i], 0);
                        this._scenes[i]._initiated = true;
                    }
                }
                PQ.SceneManager._super._renderWebGL.call(this, rendererSession);
                if (init.length >= 1) {
                    for (i = 0; i < init.length; i++) {
                        if (init[i] !== this.currentScene) {
                            this.removeChild(init[i]);
                        }
                    }
                }
                this._initiated = true;
                return;
            }

            PQ.SceneManager._super._renderWebGL.call(this, rendererSession);

            //TODO: RenderCanvas???

        }

    });

})();