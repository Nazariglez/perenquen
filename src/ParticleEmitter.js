(function(){

    /*
     * Inspired in GameMaker Particle System by https://www.yoyogames.com/
     */
    var particlePool = new PQ.Pool(PQ.Particle, [], 200);

    var defaultConfig = {
        sprite: [],
        size: {
            min: 15,
            max: 35,
            increase: -0.1,
            shake: 1
        },
        scale: {
            x : 1,
            y : 1
        },
        color: [
            0xffffff //change this can affect the performance
        ],
        alpha: [
            0.1,0.5, 0.1
        ],
        speed: {
            min:0,
            max: 1,
            increase: -0.01,
            shake: 5
        },
        wind: {
            amount: 2,
            angle: -60
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
            min: 5200,
            max: 8200
        },
        blend: PQ.blendModes.NORMAL, //change this can affect the performance
        particles: 1
    };

    //TODO: 60/sec minimo puede ser demasiado, cambiar el sistema de fps por uno que use el delta

    //TODO: Magnets, batchContainer
    PQ.ParticleEmitter = PQ.Container.extend({
        _init: function(config){
            PQ.ParticleEmitter._super._init.call(this);
            //TODO: cargar particulas mediante json externo
            this.particleConfig = config || defaultConfig;
            this.vel = new PQ.Point(0,0);
            this.size = new PQ.Point(1,1);
            this.anchor = new PQ.Point(0,0);

            this.tmpPool = [];
            this._burst = 0;
            this._stream = false;

            this.easing = PQ.Easing.linear();

            this.config = {};
            this.shape = new PQ.Rectangle(0,0,1,1);
            this.initConfig();
        },

        initConfig: function(){
            for(var key in this.particleConfig){
                this.config[key] = this.particleConfig[key];
            }

            this.particleSprite();
            this.particleColor();
            this.particleWind();
            this.particleAlpha();
            this.particleDirection(this.config.direction.min, this.config.direction.max, this.config.direction.increase, this.config.direction.shake);
            this.particleRotation(this.config.rotation.min, this.config.rotation.max, this.config.rotation.increase, this.config.rotation.shake);
        },

        particleBlend: function(mode){
            this.config.blend = mode || PQ.blendModes.NORMAl;
            return this;
        },

        setBounds: function(x,y,width, height){
            this.shape.x = x;
            this.shape.y = y;
            this.shape.width = width || this.shape.width;
            this.shape.height = height || this.shape.height;
            return this;
        },

        particleSprite: function(sprites){
            this.config.sprite = sprites || this.config.sprite;

            if(this.config.tmpSprite){
                this.config.tmpSprite.length = 0;
            }else{
                this.config.tmpSprite = [];
            }

            if(this.config.sprite){
                var len = this.config.sprite.length;
                for(var i = 0; i < len; i++){
                    var sp = null;
                    if(typeof this.config.sprite[i] === "string"){
                        sp = PQ.AssetCache.getTexture(this.config.sprite[i]);
                    }else{
                        sp = this.config.sprite[i];
                    }

                    this.config.tmpSprite.push(sp);
                }
            }

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

            if(!this.config.tmpColor){
                this.config.tmpColor = [];
            }else {
                this.config.tmpColor.length = 0;
            }

            var len = this.config.color.length;
            if(len >= 1) {

                for (var i = 0; i < this.config.color.length; i++) {
                    this.config.tmpColor.push(PIXI.hex2rgb(this.config.color[i]));
                }
            }else{
                this.config.tmpColor.push(PIXI.hex2rgb(0xffffff));
            }
            this.config.timeColor = this.config.life.max / this.config.color.length;
            return this;
        },

        particleAlpha: function(alphas){
            this.config.alpha = alphas || this.config.alpha;
            var len = this.config.alpha.length;
            if(len === 0){
                this.config.alpha.push(1);
            }
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