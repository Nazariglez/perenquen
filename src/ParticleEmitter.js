(function(){

    /*
     * Inspired in GameMaker Particle System by https://www.yoyogames.com/
     */
    var particlePool = new PQ.Pool(PQ.Particle, [], 200);

    var defaultConfig = {
        sprite: null, //TODO: Random sprite
        size: {
            min: 10,
            max: 25,
            increase: 0,
            shake: 1
        },
        scale: {
            x : 1.5,
            y : 1.5
        },
        color: [
            0xff0000, 0xffff00, 0x00ff00, 0x0000ff, 0xc0c0c0
        ],
        alpha: [
           1, 0.8, 0.1
        ],
        speed: {
            min:1,
            max: 3,
            increase: -0.009,
            shake: 0
        },
        wind: {
            amount: 2,
            angle: -90
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
            increase: 3.5,
            shake: 0
        },
        life: {
            min: 3000,
            max: 3500
        },
        blend: PQ.blendModes.NORMAL,
        particles: 8
    };

    //TODO: Usar algo similar al dirty, no hay porque calcular en las particulas a cada fps todos los valores si se hace el calculo en el emitter y se le pasan mientras no cambien
    PQ.ParticleEmitter = PIXI.DisplayObjectContainer.extend(PQ.DisplayMixin, {
        _init: function(config){
            PQ.ParticleEmitter._super._init.call(this);
            //TODO: cargar particulas mediante json externo
            this.particleConfig = config || defaultConfig;
            this.vel = new PQ.Point(0,0);
            this.size = new PQ.Point(1,1);

            this.tmpPool = [];
            this._burst = 0;
            this._stream = false;

            //TODO: Revisar blendModes
            this.easing = PQ.Easing.linear();

            this.config = {};
            this.initConfig();
        },

        initConfig: function(){
            for(var key in this.particleConfig){
                this.config[key] = this.particleConfig[key];
            }
            if(!this.config.tmpColor){
                this.config.tmpColor = [];
            }

            this.particleColor();
            this.particleWind();
            this.particleAlpha();
            this.particleDirection(this.config.direction.min, this.config.direction.max, this.config.direction.increase, this.config.direction.shake);
            this.particleRotation(this.config.rotation.min, this.config.rotation.max, this.config.rotation.increase, this.config.rotation.shake);
        },

        particleSprite: function(sprites){
            return this;
        },

        particleSize: function(min, max, increase, shake){
            this.config.size.min = min;
            this.config.size.max = max;
            this.config.size.increase = increase || 0;
            this.config.size.shake = shake || 0;
            return this;
        },

        particleScale: function(x, y){
            this.config.scale.x = x || 1;
            this.config.scale.y = y || 1;
            return this;
        },

        particleColor: function(colors){
            this.config.color = colors || this.config.color;
            this.config.tmpColor.length = 0;

            for(var i = 0; i < this.config.color.length; i++){
                this.config.tmpColor.push(PIXI.hex2rgb(this.config.color[i]));
            }
            this.config.timeColor = this.config.life.max / this.config.color.length;
            return this;
        },

        particleAlpha: function(alphas){
            this.config.alpha = alphas || this.config.alpha;
            this.config.timeAlpha = this.config.life.max / this.config.alpha.length;
            return this;
        },

        particleSpeed: function(min, max, increase, shake){
            this.config.speed.min = min;
            this.config.speed.max = max;
            this.config.speed.increase = increase || 0;
            this.config.speed.shake = shake || 0;
            return this;
        },

        particleWind: function(amount, angleInDegree){
            amount = amount || this.config.wind.amount;
            angleInDegree = angleInDegree || this.config.wind.angle;
            this.config.windX = amount * Math.cos(angleInDegree*PQ.DEG_TO_RAD);
            this.config.windY = amount * Math.sin(angleInDegree*PQ.DEG_TO_RAD);
            return this;
        },

        particleRotation: function(min, max, increase, shake){
            this.config.rotation.min = min;
            this.config.rotation.max = max;
            this.config.rotation.increase = increase || 0;
            this.config.rotation.shake = shake || 0;

            this.config.vRotationIncrease = this.config.rotation.increase*PQ.DEG_TO_RAD;
            return this;
        },

        particleDirection: function(min, max, increase, shake){
            this.config.direction.min = min;
            this.config.direction.max = max;
            this.config.direction.increase = increase || 0;
            this.config.direction.shake = shake || 0;

            this.config.vDirectionIncrease = this.config.direction.increase*PQ.DEG_TO_RAD;
            return this;
        },

        particleLife: function(min, max){
            this.config.life.min = min;
            this.config.life.max = max;
            this.config.timeColor = this.config.life.max / this.config.color.length;
            this.config.timeAlpha = this.config.life.max / this.config.alpha.length;
            return this;
        },

        particleNum: function(num){
            this.config.particles = num || 1;
            return this;
        },

        setEasing: function(easing){
            this.easing = easing || PQ.Easing.linear();
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