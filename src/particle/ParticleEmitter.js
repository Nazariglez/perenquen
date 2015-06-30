var Container = require('../display/Container'),
    Particle = require('./Particle'),
    utils = require('../core/utils'),
    config = require('../core/config'),
    Pool = require('../extra/Pool');

function ParticleEmitter(config){
    this._init(config);
}

ParticleEmitter.prototype = Object.create(Container.prototype);
ParticleEmitter.prototype.constructor = ParticleEmitter;

ParticleEmitter.prototype._init = function(config){
    Container.prototype._init.call(this);
    this.config = parseConfig(config);

    var max = (this.config.life.max/this.config.emissionTime) * this.config.particlesPerEmission;
    this.pool = new Pool(Particle, [], max);

    this.isStarted = false;
    this.emissionTime = 0;
    this.burst = 0;
    this.tempParticles = [];
    this.particles = 0;
    this.nonInteractiveChildren = true;
    this.depth = this.config.depth;
};

ParticleEmitter.prototype.start = function(burst){
    this.isStarted = true;
    this.burst = burst;
    return this;
};

ParticleEmitter.prototype.stop = function(){
    this.isStarted = false;
    return this;
};

ParticleEmitter.prototype.animate = function(gameTime){
    if(this.update(gameTime) !== false){

        if(this.isStarted) {
            this.emissionTime += gameTime.delta*1000;
            if (this.emissionTime >= this.config.emissionTime) {

                if(this.burst){
                    this.burst--;
                    if(this.burst === 0){
                        this.stop();
                    }
                }

                this.emissionTime = 0;
                this.emit();
            }
        }

        for(var i = 0; i < this.tempParticles.length; i++){
            this.tempParticles[i].returnToPool();
            this.tempParticles[i].remove();
            this.particles--;
        }
        this.tempParticles.length = 0;

        if(this.speed && (this.speed.x !== 0 || this.speed.y !== 0)){
            this.position.x += this.speed.x * gameTime.delta;
            this.position.y += this.speed.y * gameTime.delta;
        }

        if(this.rotationSpeed && this.rotationSpeed !== 0){
            this.rotation += this.rotationSpeed * gameTime.delta;
        }

        var len = this.children.length;
        for(var n = 0; n < len; n++){
            this.children[n].animate(gameTime);
        }
    }

    return this;
};

ParticleEmitter.prototype.emit = function(){
    for(var i = 0; i < this.config.particlesPerEmission; i++){
        var xx = utils.randomRange(this.config.x, this.config.x + this.config.width),
            yy = utils.randomRange(this.config.y, this.config.y + this.config.height);

        xx += this.parent.width/2;
        yy += this.parent.height/2;

        this.pool.getObject()
            .setTexture(this.getRandomTexture())
            .setEmitter(this)
            .setPosition(xx,yy)
            .addTo(this);

        this.particles++;
    }

    return this;
};

ParticleEmitter.prototype.getRandomTexture = function(){
    return this.config.texture[Math.floor(Math.random() * this.config.texture.length)];
};

module.exports = ParticleEmitter;

var defaultConfig = {
    id: "default",
    texture: [],
    x: 0,
    y: 0,
    width: 2,
    height: 2,
    depth: 0,
    blend: null,

    particlesPerEmission: 1,
    emissionTime: 30,

    scale: {
        x:1,
        y:1
    },

    size: {
        min: 0,
        max: 0,
        increase: 0,
        easing: null
    },

    alpha: {
        start: 1,
        end: 1,
        easing: null
    },

    color: {
        start: 0xffffff,
        end: 0xffffff,
        easing: null
    },

    speed: {
        min: 100,
        max: 109,
        increase: 0,
        easing: null
    },

    gravity: {
        amount: 0,
        angle: 0
    },

    rotation: {
        min: 0,
        max: 359,
        increase: 0,
        easing: null
    },

    direction: {
        min: 0,
        max: 359,
        increase: 0,
        easing: null
    },

    life: {
        min: 1000,
        max: 2000
    }
};

function parseConfig(config){
    return utils.defaultObject(defaultConfig, config);
}

