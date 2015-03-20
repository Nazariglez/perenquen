function AssetCache(){
    this.textures = {};
    this.audios = {};
    this.particles = {};
    this.json = {};
}

AssetCache.prototype.constructor = AssetCache;

AssetCache.prototype.addTexture = function(name, url, texture){
    name = name || url;
    this.textures[name] = {
        url : url,
        asset : texture
    };
    return this;
};

AssetCache.prototype.getTexture = function(name){
    return this.textures[name];
};

module.exports = new AssetCache();