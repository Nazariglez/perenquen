function AssetCache(){
    this._init();
}

AssetCache.prototype.constructor = AssetCache;

AssetCache.prototype._init = function(){
    this.textures = {};
    this.audios = {};
    this.particles = {};
    this.json = {};
};

AssetCache.prototype.addTexture = function(name, url, texture){
    return this._addAssetIn(this.textures, name, url, texture);
};

AssetCache.prototype.getTexture = function(name){
    return this._getAssetFrom(this.textures, name);
};

AssetCache.prototype.addAudio = function(name, url, audio){
    return this._addAssetIn(this.audios, name, url, audio);
};

AssetCache.prototype.getAudio = function(name){
    return this._getAssetFrom(this.audios, name);
};

AssetCache.prototype._addAssetIn = function(list, name, url, asset){
    name = name || url;
    list[name] = {
        url: url,
        asset: asset
    };

    return this;
};

AssetCache.prototype._getAssetFrom = function(list, name){
    var asset = list[name];

    if(!asset){
        for(var key in list){
            if(list[key].url === name){
                asset = list[key];
                break;
            }
        }
    }

    return (asset) ? asset.asset : null;
};



module.exports = AssetCache;