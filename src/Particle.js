(function(){

    var defaultParticle = new PQ.Graphics()
        .beginFill(0xffffff)
        .drawCircle(0,0,10)
        //.drawRect(0,0,10,10)
        .endFill()
        .generateTexture();

    var getHex = function(r,g,b){
        return ((r*255 << 16) + (g*255 << 8) + b*255);
    };

    PQ.Particle = PQ.Sprite.extend({
        _init: function(){
            PQ.Particle._super._init.call(this, defaultParticle);
            this.tmpColor = [];
        },

        kill: function(){
            if(this.parent)this.parent.tmpPool.push(this);
            return this;
        },

        reset: function(){
            this.setPosition(0,0);
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
            this.vRotationIncrease = this.config.vRotationIncrease;
            this.direction = this.baseDirection;
            this.directionIncrease = 0;
            this.vDirectionIncrease = this.config.vDirectionIncrease;
            this.timeColor = this.config.timeColor;
            this.timeAlpha = this.config.timeAlpha;
            this.tmpColor = this.config.tmpColor;
            this.windX = this.config.windX;
            this.windY = this.config.windY;
            this.emitter = emitter;
            this.easing = emitter.easing;

            this.checkSprite();

            this.setSize(this.size, this.size);
            this.setScale(this.config.scale.x, this.config.scale.y);

            //this.tint = this.config.color[0];
            this.alpha = this.config.alpha[0];
            this.blendMode = this.config.blend;

            if(this.emitter.shape.width > 1 || this.emitter.shape.height > 1){
                var xx = this.emitter.shape.width - this.emitter.shape.x;
                var yy = this.emitter.shape.height - this.emitter.shape.y;
                this.position.set(
                    Math.randomRange(this.emitter.shape.x, this.emitter.shape.x+this.emitter.shape.width),
                    Math.randomRange(this.emitter.shape.y, this.emitter.shape.y+this.emitter.shape.height)
                );
            }else{
                this.position.set(this.emitter.shape.x,this.emitter.shape.y);
            }
        },

        checkSprite: function(){
            var len = this.config.tmpSprite.length;
            if(len === 1){
                this.texture = this.config.tmpSprite[0];
            }else if(len > 0){
                var index = Math.floor(Math.random() * len);
                this.texture = this.config.tmpSprite[index];
            }
            return this;
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

            //TODO: CocoonJS Canvas+ peta al usar el setTint a cada frame, investigar con logcat, problemas de memoria?
            if(!PQ.Device.isCocoonJS)this.setCurrentColor(gameTime);
            this.setCurrentAlpha(gameTime);
        }
    });
})();