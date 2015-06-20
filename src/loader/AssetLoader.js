var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser'),
    spritesheetParser = require('./spritesheetParser'),
    particleParser = require('./particleParser'),
    bitmapFontXMLParser = require('./bitmapFontXMLParser'),
    audioParser = require('./audioParser'),
    audioSupportCheck = require('./audioSupportCheck'),
    bitmapFontTXTParser = require('./bitmapFontTXTParser'),
    Device = require('../core/Device');

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
    var allowed = this.game.config.audio.allowedExtensions;
    var canPlay = [];
    for (var i = 0; i < allowed.length; i++) {
        var can = false;
        switch (allowed[i]) {
            case "m4a":
                can = Device.hasM4a;
                break;
            case "mp3":
                can = Device.hasMp3;
                break;
            case "ogg":
                can = Device.hasOgg;
                break;
            case "wav":
                can = Device.hasWav;
                break;
        }

        if (can) {
            canPlay.push(allowed[i]);
        }
    }

    for(var n = 0; n < canPlay.length; n++){
        if(this.game.isWebAudio){
            Resource.setExtensionXhrType(canPlay[n], Resource.XHR_RESPONSE_TYPE.BUFFER);
        }else{
            Resource.setExtensionLoadType(canPlay[n], Resource.LOAD_TYPE.AUDIO);
        }
    }

    return this;
};

// Add custom extentions
var Resource = ResourceLoader.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);