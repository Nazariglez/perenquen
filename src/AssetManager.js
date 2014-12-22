(function(){

    PQ.AssetManager = PQ.Class.extend({
        _textures: [],
        _json: [],
        _audios: [],

        _init: function(){
            var _default = new PQ.Graphics()
                .beginFill(0x000000)
                .drawRect(0,0,0,0)
                .endFill();

            this.addAsset('_PQDefaultTexture', {
                type: 'texture',
                asset:_default.generateTexture()
            });

            return this;
        },

        getTexture: function(id){
            return this._getAsset(id, this._textures);
        },

        getJson: function(id){
            return this._getAsset(id, this._json);
        },

        getAudio: function(id){
            return this._getAsset(id, this._audios);
        },

        _getAsset: function(id, group){
            var r = null;
            for(var i = 0; i < group.length; i++){
                if(group[i].id === id){
                    r = group[i].asset;
                    break;
                }
            }

            return r;
        },

        /**
         * Destroy the texture from de memory on webgl
         * @param id
         */
        destroyTexture: function(id){
            this.getTexture(id).destroy(true);
            return this;
        },

        addAsset: function(id, asset){
            //this._assets.push(asset);
            asset = this._checkAssetsFromLoader(asset);

            switch(asset.type){
                case 'texture':
                    asset.id = id;
                    this._textures.push(asset);
                    break;
                case 'json':
                    asset.id = id;
                    this._json.push(asset);
                    break;
                case 'audio':
                    asset.id = id;
                    this._audios.push(asset);
                    break;
            }

            return asset;

        },

        _checkAssetsFromLoader: function(asset){
            //TODO: Probar con atlas, spine;
            switch(asset.constructor){
                case PQ.ImageLoader:
                    asset = {
                        type : 'texture',
                        asset: asset.texture
                    };
                    break;
                case PQ.JsonLoader:
                    asset = {
                        type : 'json',
                        asset: asset.json
                    };
                    break;
                case PQ.AtlasLoader:
                    console.log('Atlas');
                    asset = {
                        type : 'atlas',
                        asset: asset
                    };
                    break;
                case PQ.SpineLoader:
                    console.log('Spine');
                    asset = {
                        type : 'spine',
                        asset: asset
                    };
                    break;
                case PQ.BitmapFontLoader:
                    //No es necesario almacenarlo
                    asset = {
                        type : 'bitmapfont',
                        asset: asset
                    };
                    break;
                case PQ.AudioLoader:
                    asset = {
                        type: 'audio',
                        asset: asset.audio
                    };
                    break;
            }

            return asset;
        }
    });

    //Namespace for cache
    PQ.AssetCache = new PQ.AssetManager();

})();