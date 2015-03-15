var TilingSprite = require('../../lib/pixi/src/extras/TilingSprite'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

utils.mixin(TilingSprite, mixin);

//TODO: Funciona fatal, recortado la textura, situandola mal, no respetando la escala, quizás sea cosa de la v3 de pixi?

module.exports = TilingSprite;