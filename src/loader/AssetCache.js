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
    name = name || url;
    this.textures[name] = {
        url : url,
        asset : texture
    };
    return this;
};

AssetCache.prototype.getTexture = function(name){
    var texture = this.textures[name];

    if(!texture){
        for(var key in this.textures){
            if(this.textures[key].url === name){
                texture = this.textures[key];
                break;
            }
        }
    }

    return (texture) ? texture.asset : null;
};

module.exports = AssetCache;