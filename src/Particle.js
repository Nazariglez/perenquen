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
            PQ.Particle._super._init.call(this, defaultParticle);
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
            this.shakeCount = 0;
        },

        initialize: function(config, gameTime, emitter){
            this.reset();
            this.config = config;
            this.initTime = gameTime;
            this.lifeTime = gameTime + Math.randomRange(this.config.life.min, this.config.life.max);

            this.baseSize = Math.randomRange(this.config.size.min, this.config.size.max);
            this.baseSpeed = Math.randomRange(this.config.speed.min, this.config.speed.max);
            this.baseRotation = Math.randomRange(this.config.rotation.min, this.config.rotation.max) * PQ.DEG_TO_RAD;
            this.baseDirection = Math.randomRange(this.config.direction.min, this.config.direction.max) * PQ.DEG_TO_RAD;

            this.size = this.baseSize;
            this.sizeIncrease = 0;
            this.speed = this.baseSpeed;
            this.speedIncrease = 0;
            this.rotation = this.baseRotation;
            this.rotationIncrease = 0;
            this.vRotationIncrease = this.config.rotation.increase*PQ.DEG_TO_RAD;
            this.direction = this.baseDirection;
            this.directionIncrease = 0;
            this.vDirectionIncrease = this.config.direction.increase*PQ.DEG_TO_RAD;
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
            this.alpha = 1;
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
                }
            }else{
                r = this.tmpColor[0][0];
                g = this.tmpColor[0][1];
                b = this.tmpColor[0][2];
            }

            var hex = getHex(r,g,b);
            if(this.tint!==hex)this.tint = hex;
            return this;
        },

        setCurrentAlpha: function(gameTime){
            var a;
            if(this.config.alpha.length > 1){
                var len = this.config.alpha.length;
                var index = Math.floor((gameTime - this.initTime)/this.timeAlpha);
                if(index > len-1)index=len-1;
                a = this.config.alpha[index];

                if(index < len-1){
                    var t = this.timeAlpha*(index+1);
                    t = this.timeAlpha - (t - (gameTime - this.initTime));
                    var leftTime = this.timeAlpha-t;
                    a += (this.config.alpha[index+1] - this.config.alpha[index])*this.easing((this.timeAlpha-leftTime)/this.timeAlpha);
                }
            }else{
                a = this.config.alpha[0];
            }

            this.alpha = a;
            return this;
        },

        setCurrentShake: function(){
            this.shakeCount++;
            //TODO: Volver a calcular los parametros base entre los minimos y maximos.
            if(this.config.size.shake && this.config.size.shake%this.shakeCount === 0)this.baseSize = Math.randomRange(this.config.size.min, this.config.size.max);
            if(this.config.speed.shake && this.config.speed.shake%this.shakeCount === 0)this.baseSpeed = Math.randomRange(this.config.speed.min, this.config.speed.max);
            if(this.config.rotation.shake && this.config.rotation.shake%this.shakeCount === 0)this.baseRotation = Math.randomRange(this.config.rotation.min, this.config.rotation.max) * PQ.DEG_TO_RAD;
            if(this.config.direction.shake && this.config.direction.shake%this.shakeCount === 0)this.baseDirection = Math.randomRange(this.config.direction.min, this.config.direction.max) * PQ.DEG_TO_RAD;

            if(this.shakeCount >= 20)this.shakeCount = 0;
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.particles++;
            if(gameTime >= this.lifeTime){
                this.kill();
                return;
            }

            this.setCurrentShake();

            this.sizeIncrease += this.config.size.increase;
            this.speedIncrease += this.config.speed.increase;
            this.rotationIncrease += this.vRotationIncrease;
            this.directionIncrease += this.vDirectionIncrease;

            this.size = this.baseSize + this.sizeIncrease;
            this.speed = this.baseSpeed + this.speedIncrease;
            this.rotation = this.baseRotation + this.rotationIncrease;
            this.direction = this.baseDirection + this.directionIncrease;

            this.setSize(this.size, this.size);
            this.x += this.speed*Math.cos(this.direction) + this.windX;
            this.y += this.speed*Math.sin(this.direction) + this.windY;

            //TODO: CocoonJS Canvas+ peta al usar el setTint, investigar con logcat, problemas de memoria?
            if(!PQ.Device.isCocoonJS)this.setCurrentColor(gameTime);
            this.setCurrentAlpha(gameTime);
        }
    });
})();