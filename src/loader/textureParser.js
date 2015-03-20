var utils = require('../core/utils'),
    BaseTexture = require('../../lib/pixi/src/core/textures/BaseTexture'),
    Texture = require('../../lib/pixi/src/core/textures/Texture');

module.exports = function () {
    return function (resource, next)
    {
        // create a new texture if the data is an Image object
        if (resource.data && resource.data.nodeName && resource.data.nodeName.toLowerCase() === 'img') {
            resource.texture = new Texture(new BaseTexture(resource.data, null, utils.getResolutionOfUrl(resource.url)));

            utils.assetCache.addTexture(resource.name, resource.url,resource.texture);
        }

        next();
    };
};