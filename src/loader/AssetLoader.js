var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser');

function AssetLoader(){
    ResourceLoader.call(this);

    this.use(ResourceLoader.middleware.parsing.json())
        .use(ResourceLoader.middleware.parsing.blob())
        .use(textureParser());
}

AssetLoader.prototype = Object.create(ResourceLoader.prototype);
AssetLoader.prototype.constructor = AssetLoader;

module.exports = AssetLoader;

