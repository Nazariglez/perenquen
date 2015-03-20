var Loader = require('../../lib/pixi/src/loaders/loader');

function AssetLoader(){
    Loader.call(this);
}

AssetLoader.prototype = Object.create(Loader.prototype);
AssetLoader.prototype.constructor = AssetLoader;

module.exports = AssetLoader;

