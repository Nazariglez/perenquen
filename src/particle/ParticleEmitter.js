var Container = require('../display/Container'),
    Particle = require('./Particle'),
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
    }
    this.tempParticles.length = 0;

    return Container.prototype.animate.call(this, gameTime, delta);
};

ParticleEmitter.prototype.emit = function(){
    for(var i = 0; i < this.config.particlesPerEmission; i++){
        var xx = Math.random()*this.config.width,
            yy = Math.random()*this.config.height;

        this.pool.getObject()
            .setEmitter(this)
            .setPosition(xx-this.config.width/2,yy-this.config.height/2)
            .addTo(this);
    }

    return this;
};

module.exports = ParticleEmitter;


var defaultConfig = {
    particlePQ: true,
    emitter: [
        {
            id: "default",
            texture: "player.png",
            x: 0,
            y: 0,
            width: 10,
            height: 10,
            depth: 0,
            blend: null,

            particlesPerEmission: 1,
            emissionTime: 30,

            scale: {
                x:1,
                y:1
            },

            size: {
                min: 10,
                max: 40,
                increase: 20,
                shake: 0,
                easing: null
            },

            alpha: [ //TODO: alpha easing?
                1
            ],

            color: {
                min: 0xffffff,
                max: 0xff00ff,
                easing: null
            },

            speed: {
                min: 60,
                max: 120,
                increase: 50,
                shake: 0,
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
                shake: 0,
                easing: null
            },

            direction: {
                min: 0,
                max: 359,
                increase: 200,
                shake: 0,
                easing: null
            },

            life: {
                min: 1000,
                max: 2000
            }
        }
    ]
};

module.exports.default = defaultConfig.emitter[0];

function cloneConfig(config){
    return JSON.parse(JSON.stringify(config));
}