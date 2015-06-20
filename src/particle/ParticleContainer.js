var Container = require('../display/Container'),
    ParticleEmitter = require('./ParticleEmitter'),
    utils = require('../core/utils');

function ParticleContainer(config){
    this._init(config);
}

ParticleContainer.prototype = Object.create(Container.prototype);
ParticleContainer.prototype.constructor = ParticleContainer;

ParticleContainer.prototype._init = function(config){
    Container.prototype._init.call(this);
    config = (typeof config === "string") ? utils.assetCache.getParticle(config) : config;

    this.emitters = [];

    var len = config.emitters.length;
    for(var i = 0; i < len; i++){
        this.addEmitter(new ParticleEmitter(config.emitters[i]));
    }
};

ParticleContainer.prototype.getEmitter = function(id){
    var emitter = null;

    if(typeof id === "number"){

        emitter = this.emitters[id];

    }else if(typeof id === "string") {

        var len = this.emitters.length;

        for (var i = 0; i < len; i++) {
            if (this.emitters[i].config.id === id) {
                emitter = this.emitters[i];
                break;
            }
        }

    }

    return emitter;
};

ParticleContainer.prototype.start = function(burst){
    var len = this.emitters.length;
    for(var i = 0; i < len; i++){
        this.emitters[i].start(burst);
    }

    return this;
};

ParticleContainer.prototype.stop = function(stop){
    var len = this.emitters.length;
    for(var i = 0; i < len; i++){
        this.emitters[i].stop();
    }

    return this;
};

ParticleContainer.prototype.addEmitter = function(emitter){
    emitter.container = this;
    this.emitters.push(emitter);
    this.addChild(emitter);
    this.sortChildrenByDepth();
    return this;
};

module.exports = ParticleContainer;

Object.defineProperties(ParticleContainer.prototype, {
    particles : {
        get: function(){
            var particles = 0;
            var len = this.emitters.length;
            for(var i = 0; i < len; i++){
                particles += this.emitters[i].particles;
            }

            return particles;
        }
    }
});
