(function(){

    var defaultParticle = new PQ.Graphics()
        .beginFill(0xffffff)
        .drawRect(0, 0, 5, 5)
        .endFill()
        .generateTexture();

    var getHex = function(r,g,b){
        return ((r*255 << 16) + (g*255 << 8) + b*255);
    };

    PQ.Particle = PQ.Sprite.extend({
        _init: function(){
            PQ.Particle._super._init.call(this, PQ.AssetCache.getTexture("_PQDefaultTexture"));
            //this.anchor.set(0.5, 0.5);
            console.log('Particle');
            this.tmpColor = [];
        },

        kill: function(){
            if(this.parent)this.parent.tmpPool.push(this);
            return this;
        },

        reset: function(){
            this.tmpColor.length = 0;
            this.setPosition(0,0);
            this.alpha = 1;
            this.setScale(0,0);
        },

        initialize: function(config, gameTime, emitter){
            this.reset();
            this.config = config;
            this.initTime = gameTime;
            this.lifeTime = gameTime + Math.randomRange(this.config.life.min, this.config.life.max);
            this.size = Math.randomRange(this.config.size.min, this.config.size.max);
            this.speed = Math.randomRange(this.config.speed.min, this.config.speed.max);
            this.rotation = Math.randomRange(this.config.rotation.min, this.config.rotation.max) * PQ.DEG_TO_RAD;
            this.rotationIncrease = this.config.rotation.increase*PQ.DEG_TO_RAD;
            this.direction = Math.randomRange(this.config.direction.min, this.config.direction.max) * PQ.DEG_TO_RAD;
            this.directionIncrease = this.config.direction.increase*PQ.DEG_TO_RAD;
            this.timeColor = this.config.life.max / this.config.color.length;
            this.timeAlpha = this.config.life.max / this.config.alpha.length;
            this.emitter = emitter;
            this.easing = emitter.easing;

            this.windX = this.config.wind.amount * Math.cos(this.config.wind.angle*PQ.DEG_TO_RAD);
            this.windY = this.config.wind.amount * Math.sin(this.config.wind.angle*PQ.DEG_TO_RAD);

            this.setSize(this.size, this.size);
            this.setScale(this.config.scale.x, this.config.scale.y);

            for(var i = 0; i < this.config.color.length; i++){
                this.tmpColor.push(PIXI.hex2rgb(this.config.color[i]));
            }

            this.tint = 0xffffff;
            this.blendMode = PQ.blendModes.NORMAL;

            this.setTexture(defaultParticle);

            if(this.emitter.size.x > 1){
                //TODO: Cambiar x e y entre todo el bounding del emitter
            }
        },

        setCurrentColor: function(gameTime){
            var r, g, b;
            if(this.config.color.length > 1){
                var len = this.config.color.length;
                var index = Math.floor((gameTime - this.initTime)/this.timeColor);
                if(index > len-1)index=len-1;
                r = this.tmpColor[index][0];
                g = this.tmpColor[index][1];
                b = this.tmpColor[index][2];

                if(index < len-1){
                    var t = this.timeColor*(index+1);
                    t = this.timeColor - (t - (gameTime - this.initTime));
                    var leftTime = this.timeColor-t;
                    r += (this.tmpColor[index+1][0] - this.tmpColor[index][0])*this.easing((this.timeColor-leftTime)/this.timeColor);
                    g += (this.tmpColor[index+1][1] - this.tmpColor[index][1])*this.easing((this.timeColor-leftTime)/this.timeColor);
                    b += (this.tmpColor[index+1][2] - this.tmpColor[index][2])*this.easing((this.timeColor-leftTime)/this.timeColor);
                    //console.log('???', index, t1);
                }
            }else{
                r = this.tmpColor[0][0];
                g = this.tmpColor[0][1];
                b = this.tmpColor[0][2];
            }

            this.tint = getHex(r,g,b);
            //console.log(this.tint, r,g,b, index, gameTime);
            return this;
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

            //TODO: CocoonJS Canvas+ peta al usar el setTint, investigar con logcat, problemas de memoria?
            if(!PQ.Device.isCocoonJS)this.setCurrentColor(gameTime);
        }
    });
})();