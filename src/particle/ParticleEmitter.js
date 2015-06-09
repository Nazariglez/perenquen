var Container = require('../display/Container'),
    Particle = require('./Particle'),
    utils = require('../core/utils'),
    Pool = require('../extra/Pool');

function ParticleEmitter(config){
    this._init(config);
}

ParticleEmitter.prototype = Object.create(Container.prototype);
ParticleEmitter.prototype.constructor = ParticleEmitter;

ParticleEmitter.prototype._init = function(config){
    Container.prototype._init.call(this);
    this.config = cloneConfig(config);

    var max = (this.config.life.max/this.config.emissionTime) * this.config.particlesPerEmission;
    this.pool = new Pool(Particle, [], max);

    this.isStarted = false;

    this.emissionTime = 0;
    this.burst = 0;

    this.tempParticles = [];

    this.particles = 0;

    this.nonInteractiveChildren = true;
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

ParticleEmitter.prototype.animate = function(gameTime, delta){
    if(this.isStarted) {
        this.emissionTime += delta*1000;
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

    return Container.prototype.animate.call(this, gameTime, delta);
};

ParticleEmitter.prototype.emit = function(){
    for(var i = 0; i < this.config.particlesPerEmission; i++){
        var xx = utils.randomRange(this.config.x, this.config.x + this.config.width),
            yy = utils.randomRange(this.config.y, this.config.y + this.config.height);

        //TODO: mover el emitter sin mover particulas
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
    particlePQ: true,
    emitter: [
        {
            id: "default",
            texture: ["player.png"],
            x: 0,
            y: 0,
            width: 2,
            height: 2,
            depth: 0,
            blend: null,

            particlesPerEmission: 10,
            emissionTime: 20,

            scale: {
                x:1,
                y:1
            },

            size: {
                min: 1,
                max: 1,
                increase: 0,
                easing: null
            },

            alpha: {
                start: 0.6,
                end: 1,
                easing: null
            },

            color: {
                start: 0x00ffff,
                end: 0x00ff00,
                easing: null
            },

            speed: {
                min: 400,
                max: 520,
                increase: 800,
                easing: null
            },

            gravity: {
                amount: 0,
                angle: 0
            },

            rotation: {
                min: 0,
                max: 359,
                increase: 360,
                easing: null
            },

            direction: {
                min: 0,
                max: 359,
                increase: -700,
                easing: null
            },

            life: {
                min: 3000,
                max: 5000
            }
        }
    ]
};

module.exports.default = defaultConfig.emitter[0];

function cloneConfig(config){
    return JSON.parse(JSON.stringify(config));
}