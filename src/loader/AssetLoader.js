var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser'),
    spritesheetParser = require('./spritesheetParser'),
    particleParser = require('./particleParser'),
    bitmapFontXMLParser = require('./bitmapFontXMLParser'),
    audioParser = require('./audioParser'),
    bitmapFontTXTParser = require('./bitmapFontTXTParser');

function AssetLoader(game, baseUrl, concurrency){
    this._init(game, baseUrl, concurrency);
}

AssetLoader.prototype = Object.create(ResourceLoader.prototype);
AssetLoader.prototype.constructor = AssetLoader;

AssetLoader.prototype._init = function(game, baseUrl, concurrency){
    ResourceLoader.call(this, baseUrl, concurrency);
    this.game = game;

    this.use(ResourceLoader.middleware.parsing.blob())
        .use(spritesheetParser())
        .use(textureParser())
        .use(bitmapFontXMLParser())
        .use(particleParser())
        .use(bitmapFontTXTParser())
        .use(audioParser(this));
};

module.exports = AssetLoader;

// Add custom extentions
var Resource = ResourceLoader.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);