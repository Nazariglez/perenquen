(function(){

    var particlePool = new PQ.Pool(PQ.Particle, [], 200);

    var defaultConfig = {
        sprite: null,
        size: {
            min: 5,
            max: 5,
            increase: 0,
            shake: 0
        },
        scale: {
            x : 1,
            y : 1
        },
        color: [
            0x00ff00
        ],
        alpha: [
            1
        ],
        speed: {
            min: 1,
            max: 2,
            increase: 0,
            shake: 0
        },
        gravity: {
            amount: 0,
            angle: 180
        },
        rotation: {
            min: 0,
            max: 359,
            increase: 0,
            shake: 0
        },
        direction: {
            min: 0,
            max: 359,
            increase: 0,
            shake: 0
        },
        life: {
            min: 1000,
            max: 1500
        },
        particles: 1
    };

    PQ.ParticleEmitter = PIXI.DisplayObjectContainer.extend(PQ.DisplayMixin, {
        _init: function(config){
            PQ.ParticleEmitter._super._init.call(this);
            //TODO: cargar particulas mediante json externo
            this.config = config || defaultConfig;
            this.vel = new PQ.Point(0,0);
            this.size = new PQ.Point(1,1);

            this.tmpPool = [];
            this._burst = 0;
            this._stream = false;
        },

        setSize: function(width, height){
            this.size.set(width || this.size.x, height || this.size.y);
            return this;
        },

        addParticle: function(particle){
            return this.addChild(particle);
        },

        addChild: function(child){
            if(!child instanceof PQ.Particle){
                return this;
            }

            PQ.ParticleEmitter._super.addChild.call(this, child);
            return this;
        },

        stream: function(value){
            value = (value !== false);
            this._stream = value;
            return this;
        },

        stop: function(){
            this._stream = 0;
            this._burst = 0;
            return this;
        },

        burst: function(num){
            this._burst = (typeof num !== "number") ? 1 : num;
            return this;
        },

        checkTmpPool: function(){
            if(this.tmpPool.length >= 1){
                var len = this.tmpPool.length;
                for(var i = 0; i < len; i++){
                    this.tmpPool[i].returnToPool();
                    this.removeChild(this.tmpPool[i]);
                    //console.log('pool',particlePool.getLength());
                }

                this.tmpPool.length = 0;
            }

            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.sceneActors++;
            if(this._clickData){
                if(Date.now() - this._clickData.date >= PQ.Config.mouseDoubleClickWait){
                    this._onMouseClickCallback(this._clickData.mouseData);
                    delete this._clickData;
                }
            }

            if(this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this.vel.x !== 0 || this.vel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.x += this.vel.x*PQ.delta;
                    this.y += this.vel.y*PQ.delta;
                }else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                }
            }

            if(this._burst > 0){
                this._burst--;
                this.createParticles(gameTime);
            }else if(this._stream){
                this.createParticles(gameTime);
            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
            this.checkTmpPool();

            return this;
        },

        createParticles: function(gameTime){
            for(var i = 0; i < this.config.particles; i++){
                var particle = particlePool.getObject();
                particle.initialize(this.config, gameTime, this);
                this.addChild(particle);
            }

            return this;
        }
    });

})();