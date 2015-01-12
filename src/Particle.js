(function(){

    var defaultParticle = new PQ.Graphics()
        .beginFill(0xffffff)
        .drawRect(0, 0, 5, 5)
        .endFill()
        .generateTexture();


    PQ.Particle = PQ.Sprite.extend({
        _init: function(){
            PQ.Particle._super._init.call(this, PQ.AssetCache.getTexture("_PQDefaultTexture"));
            //this.anchor.set(0.5, 0.5);
            console.log('Particle');
        },

        kill: function(){
            if(this.parent)this.parent.tmpPool.push(this);
            return this;
        },

        reset: function(){
            this.setPosition(0,0);
            this.alpha = 1;
            this.setScale(0,0);
        },

        initialize: function(config, gameTime, emitter){
            this.reset();
            this.config = config;
            this.lifeTime = gameTime + Math.randomRange(this.config.life.min, this.config.life.max);
            this.size = Math.randomRange(this.config.size.min, this.config.size.max);
            this.speed = Math.randomRange(this.config.speed.min, this.config.speed.max);
            this.rotation = Math.randomRange(this.config.rotation.min, this.config.rotation.max) * PQ.DEG_TO_RAD;
            this.rotationIncrease = this.config.rotation.increase*PQ.DEG_TO_RAD;
            this.direction = Math.randomRange(this.config.direction.min, this.config.direction.max) * PQ.DEG_TO_RAD;
            this.directionIncrease = this.config.direction.increase*PQ.DEG_TO_RAD;
            this.emitter = emitter;

            this.windX = this.config.wind.amount * Math.cos(this.config.wind.angle*PQ.DEG_TO_RAD);
            this.windY = this.config.wind.amount * Math.sin(this.config.wind.angle*PQ.DEG_TO_RAD);

            this.setSize(this.size, this.size);
            this.setScale(this.config.scale.x, this.config.scale.y);

            this.setTexture(defaultParticle);

            if(this.emitter.size.x > 1){
                //TODO: Cambiar x e y entre todo el bounding del emitter
            }
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.particles++;
            if(gameTime >= this.lifeTime){
                this.kill();
                return;
            }

            this.size += this.config.size.increase;
            this.speed += this.config.speed.increase;
            this.rotation += this.rotationIncrease;
            this.direction += this.directionIncrease;


            this.setSize(this.size, this.size);
            this.x += this.speed*Math.cos(this.direction) + this.windX;
            this.y += this.speed*Math.sin(this.direction) + this.windY;
        }
    });
})();