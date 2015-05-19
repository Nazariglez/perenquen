var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser'),
    spritesheetParser = require('./spritesheetParser'),
    particleParser = require('./particleParser'),
    bitmapFontXMLParser = require('./bitmapFontXMLParser'),
    audioParser = require('./audioParser'),
    audioSupportCheck = require('./audioSupportCheck'),
    bitmapFontTXTParser = require('./bitmapFontTXTParser');

function AssetLoader(game, baseUrl, concurrency){
    this._init(game, baseUrl, concurrency);
}

AssetLoader.prototype = Object.create(ResourceLoader.prototype);
AssetLoader.prototype.constructor = AssetLoader;

AssetLoader.prototype._init = function(game, baseUrl, concurrency){
    ResourceLoader.call(this, baseUrl, concurrency);
    this.game = game;

    this.setAudioType();

    this.before(audioSupportCheck())
        .use(ResourceLoader.middleware.parsing.blob())
        .use(spritesheetParser())
        .use(textureParser())
        .use(bitmapFontXMLParser())
        .use(particleParser())
        .use(bitmapFontTXTParser())
        .use(audioParser());
};

module.exports = AssetLoader;

AssetLoader.prototype.setAudioType = function(){
    if(this.game.isWebAudio){
        Resource.setExtensionXhrType('m4a', Resource.XHR_RESPONSE_TYPE.BUFFER);
        Resource.setExtensionXhrType('mp3', Resource.XHR_RESPONSE_TYPE.BUFFER);
        Resource.setExtensionXhrType('wav', Resource.XHR_RESPONSE_TYPE.BUFFER);
        Resource.setExtensionXhrType('ogg', Resource.XHR_RESPONSE_TYPE.BUFFER);
        Resource.setExtensionXhrType('audio', Resource.XHR_RESPONSE_TYPE.BUFFER);
    }else{
        Resource.setExtensionLoadType('m4a', Resource.LOAD_TYPE.AUDIO);
        Resource.setExtensionLoadType('mp3', Resource.LOAD_TYPE.AUDIO);
        Resource.setExtensionLoadType('wav', Resource.LOAD_TYPE.AUDIO);
        Resource.setExtensionLoadType('ogg', Resource.LOAD_TYPE.AUDIO);
        Resource.setExtensionLoadType('audio', Resource.LOAD_TYPE.AUDIO);
    }

    return this;
};

// Add custom extentions
var Resource = ResourceLoader.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);