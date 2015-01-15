(function(){

    var particlePool = new PQ.Pool(PQ.Particle, [], 200);

    var defaultConfig = {
        sprite: null,
        size: {
            min: 7,
            max: 7,
            increase: -0,
            shake: 0
        },
        scale: {
            x : 6,
            y : 0.5
        },
        color: [
            0xff0000, 0xffff00, 0x00ff00, 0xc0c0c0, 0x0000ff
        ],
        alpha: [
            0.5, 1, 0.1, 1, 0.2
        ],
        speed: {
            min:5,
            max: 10,
            increase: -0.1,
            shake: 0
        },
        wind: {
            amount: 9,
            angle: -90
        },
        rotation: {
            min: 0,
            max: 359,
            increase: 5,
            shake: 0
        },
        direction: {
            min: 0,
            max: 359,
            increase: -20,
            shake: 0
        },
        life: {
            min: 1000,
            max: 1500
        },
        blend: PQ.blendModes.NORMAL,
        particles: 1
    };

    //TODO: Usar algo similar al dirty, no hay porque calcular en las particulas a cada fps todos los valores si se hace el calculo en el emitter y se le pasan mientras no cambien
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

            //TODO: Revisar blendModes
            this.blendMode = this.config.blend;
            this.easing = PQ.Easing.outSine();
        },

        setEasing: function(easing){
            this.easing = easing || PQ.Easing.linear();
            return this;
        },

        //TODO: Separar el punto y dimension del emitter del actor, para evitar el movimiento de particulas bajo la matrix del parent
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

        start: function(burst){
            if(typeof burst !== "number" || burst === 0){
                this._stream = true;
            }else{
                this._burst = burst;
            }

            return this;
        },

        stop: function(){
            this._stream = 0;
            this._burst = 0;
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