var ParticleContainer = require('../../lib/pixi/src/core/particles/ParticleContainer'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    CONST = require('../core/const'),
    mixin = require('./mixin');

utils.mixin(ParticleContainer, mixin);

module.exports = ParticleContainer;