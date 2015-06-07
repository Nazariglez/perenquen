var Sprite = require('../display/Sprite'),
    Easing = require('../tween/Easing'),
    CONST = require('../core/const'),
    utils = require('../core/utils');

function Particle(){
    this._init();
}

Particle.prototype = Object.create(Sprite.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype._init = function(){
    Sprite.prototype._init.call(this);
    this.emitter = null;
    this.life = 0;
};

Particle.prototype.setEmitter = function(emitter){
    this.emitter = emitter;

    var config = emitter.config;
    this.texture = config.texture;
    this.life = utils.randomRange(config.life.min, config.life.max);
    this.lifeElapsed = 0;
    this.velocity = utils.randomRange(config.speed.min, config.speed.max);
    this.direction = utils.degToRad(utils.randomRange(config.direction.min, config.direction.max));
    this.rotation = utils.degToRad(utils.randomRange(config.rotation.min, config.rotation.max));

    this.blendMode = config.blend || CONST.BLEND_MODES.NORMAL;

    var size = utils.randomRange(config.size.min, config.size.max);
    this.setSize(size, size);

    this.minWidth = this.width;
    this.minHeight = this.height;
    this.maxWidth = this.minWidth + config.size.increase;
    this.maxHeight = this.minHeight + config.size.increase;

    this.minVelocity = this.velocity;
    this.maxVelocity = this.minVelocity + config.speed.increase;

    this.minRotation = this.rotation;
    this.maxRotation = this.minRotation + utils.degToRad(config.rotation.increase);

    this.minDirection = this.direction;
    this.maxDirection = this.minDirection + utils.degToRad(config.direction.increase);

    this.currentTint = utils.hex2rgb(config.color.min);

    var maxTint = utils.hex2rgb(config.color.max);

    this.minTintR = this.currentTint[0];
    this.maxTintR = maxTint[0];

    this.minTintG = this.currentTint[1];
    this.maxTintG = maxTint[1];

    this.minTintB = this.currentTint[2];
    this.maxTintB = maxTint[2];

    return this;
};

Particle.prototype.animate = function(gameTime, delta){
    var t = delta*1000;
    this.life -= t;
    this.lifeElapsed += t;
    if(this.life <= 0){
        this.kill();
        return this;
    }

    this.updateConfig();

    return Sprite.prototype.animate.call(this, gameTime, delta);
};

Particle.prototype.updateConfig = function(){
    if(this.emitter.config.size.increase){
        this.width = this.applyEasing(this.minWidth, this.maxWidth, this.emitter.config.size.easing);
        this.height = this.applyEasing(this.minWidth, this.maxWidth, this.emitter.config.size.easing);
    }

    if(this.emitter.config.speed.increase){
        this.velocity = this.applyEasing(this.minVelocity, this.maxVelocity, this.emitter.config.speed.easing);
    }

    if(this.emitter.config.rotation.increase){
        this.rotation = this.applyEasing(this.minRotation, this.maxRotation, this.emitter.config.rotation.easing);
    }

    if(this.emitter.config.direction.increase){
        this.direction = this.applyEasing(this.minDirection, this.maxDirection, this.emitter.config.direction.easing);
    }

    if(this.minTintR !== this.maxTintR){
        this.currentTint[0] = this.applyEasing(this.minTintR, this.maxTintR, this.emitter.config.color.easing);

    }

    if(this.minTintG !== this.maxTintG){
        this.currentTint[1] = this.applyEasing(this.minTintG, this.maxTintG, this.emitter.config.color.easing);
    }

    if(this.minTintB !== this.maxTintB){
        this.currentTint[2] = this.applyEasing(this.minTintB, this.maxTintB, this.emitter.config.color.easing);
    }

    this.tint = utils.rgb2hex(this.currentTint);

    return this;
};

Particle.prototype.kill = function(){
    this.emitter.tempParticles.push(this);
    return this;
};

Particle.prototype.applyEasing = function(from, to, easing){
    easing = easing || Easing.linear();

    var b = from,
        c = to - from,
        d = this.emitter.config.life.max,
        t = this.lifeElapsed/d;

    return b + (c*easing(t));
};

module.exports = Particle;

//http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function rgb2decimal(rgb){
    return ~~rgb[0] + 256*~~rgb[1] + 65536*~~rgb[2];
}