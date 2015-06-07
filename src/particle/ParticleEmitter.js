var Container = require('../display/Container'),
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
    this.pool = new Pool(PQ.Sprite, ["player.png"], max);
};

ParticleEmitter.prototype.start = function(burst){
    
};

ParticleEmitter.prototype.stop = function(){

};

module.exports = ParticleEmitter;


var defaultConfig = {
    particlePQ: true,
    emitter: [
        {
            id: "default",
            texture: null,
            x: 0,
            y: 0,
            width: 2,
            height: 2,
            depth: 0,
            blend: null,

            particlesPerEmission: 1,
            emissionTime: 20,

            scale: {
                x:1,
                y:1
            },

            size: {
                min: 10,
                max: 20,
                increase: 0,
                shake: 0,
                easing: null
            },

            alpha: [ //TODO: alpha easing?
                1
            ],

            color: [ //TODO: Color easing?
                0xffffff
            ],

            speed: {
                min: 10,
                max: 10,
                increase: 0,
                shake: 0,
                easing: null
            },

            gravity: {
                amount: 0,
                angle: 0
            },

            rotation: {
                min: 0,
                max: 0,
                increase: 0,
                shake: 0,
                easing: null
            },

            direction: {
                min: 0,
                max: 0,
                increase: 0,
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