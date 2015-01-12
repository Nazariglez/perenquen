(function(){

    var texture = new PQ.Graphics()
        .beginFill(0xffffff)
        .drawRect(0, 0, 20, 20)
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
            this.position.set(0,0);
            this.alpha = 1;
            this.scale.set(1,1);
        },

        initialize: function(config, gameTime, emitter){
            this.reset();
            this.config = config;
            this.lifeTime = gameTime + Math.randomRange(this.config.life.min, this.config.life.max);
            this.size = Math.randomRange(this.config.size.min, this.config.size.max);
            this.speed = Math.randomRange(this.config.speed.min, this.config.speed.max);
            this.rotation = Math.randomRange(this.config.rotation.min, this.config.rotation.max) * PQ.DEG_TO_RAD;
            this.direction = Math.randomRange(this.config.direction.min, this.config.direction.max) * PQ.DEG_TO_RAD;
            this.emitter = emitter;

            this.setTexture(texture);

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

            this.x += this.speed*Math.cos(this.direction);
            this.y += this.speed*Math.sin(this.direction);
        }
    });
})();