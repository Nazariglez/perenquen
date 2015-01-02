(function(){

    var mimeTypes = {
        'ogg': 'audio/ogg',
        'mp3': 'audio/mpeg',
        'wav': 'audio/wav'
    };

    var audioTypes = ['ogg','wav','mp3','audio'];
    var canPlayAudio = null;

    PQ.AssetLoader = PQ.Class.extend({
        loadCount: null,
        _onEndCallback: null,
        _onProgressCallback: null,
        startDate: null,
        totalAssets: 0,

        _init: function(){
            this._assets = [];

            this.loadersByType = {
                'jpg':  PQ.ImageLoader,
                'jpeg': PQ.ImageLoader,
                'png':  PQ.ImageLoader,
                'gif':  PQ.ImageLoader,
                'json': PQ.JsonLoader,
                'atlas': PQ.AtlasLoader,
                'anim': PQ.SpineLoader,
                'xml':  PQ.BitmapFontLoader,
                'fnt':  PQ.BitmapFontLoader,
                'ogg': PQ.AudioLoader,
                'wav': PQ.AudioLoader,
                'mp3': PQ.AudioLoader

                //TODO: Meter un loader de shaders, para crear efectos
                //TODO: Meter un loader para json de particulas
            };

            canPlayAudio = (PQ.getAudioType() !== PQ.NONE_AUDIO);

            if(canPlayAudio){
                var audio = new Audio();

                for(var i = 0; i < PQ.Config.audioExts.length; i++){
                    var ext = PQ.Config.audioExts[i];
                    var r = audio.canPlayType(mimeTypes[ext]);
                    if(r !== ""){
                        PQ.currentAudioExt = ext;
                        break;
                    }
                }

                PQ.log('Audio ext: ' + PQ.currentAudioExt);
            }

            return this;
        },

        addAssets : function(assetsArray){
            var len = assetsArray.length;
            for(var i = 0; i < len; i++){
                if(typeof assetsArray[i] === "string"){
                    this._assets.push({
                        id: assetsArray[i],
                        url: assetsArray[i],
                        type: this._getType(assetsArray[i])
                    });
                }else{
                    this._assets.push({
                        id: assetsArray[i].id,
                        url: assetsArray[i].url,
                        type: this._getType(assetsArray[i].url)
                    });
                }
            }

            return this;
        },

        load: function(callback){
            this.startDate = Date.now();
            if(callback && typeof callback === "function"){
                this._onEndCallback = callback;
            }

            this.totalAssets = this.loadCount = this._assets.length;

            var scope = this;
            var onLoad = function(e){
                scope._assetLoaded(e.content.content);
            };

            for(var i = 0; i < this._assets.length; i++){

                if(audioTypes.indexOf(this._assets[i].type) !== -1 && !canPlayAudio){
                    this.loadCount--;
                    this._checkEnd();
                    continue;
                }

                if(this._assets[i].type === "audio") {
                    this._assets[i].url = this._assets[i].url.substr(0, this._assets[i].url.length - 5) + PQ.currentAudioExt;
                    this._assets[i].type = PQ.currentAudioExt;
                }

                var Constructor = this.loadersByType[this._assets[i].type];
                if(!Constructor){
                    throw new Error(this._assets[i].url + ' is an unsupported file type');
                }

                var loader = new Constructor(this._assets[i].url);
                loader._assetId = this._assets[i].id;
                loader._assetType = this._assets[i].type;
                loader.url = this._assets[i].url;
                loader.addEventListener('loaded', onLoad);
                loader.load();

            }

            return this;
        },

        _getType: function(str){
            return str.split('?').shift().split('.').pop().toLowerCase();
        },

        _assetLoaded: function(e){
            PQ.log('Asset Loaded: ' + e._assetId + ' - ' + e.url);
            this.loadCount--;
            var asset = PQ.AssetCache.addAsset(e._assetId, e);

            if(this._onProgressCallback){
                this._onProgressCallback(asset.id || e._assetId, asset, this.loadCount);

                if(this.loadCount === 0){
                    this._onProgressCallback = null;
                }
            }

            this._checkEnd();

            return this;
        },

        _checkEnd: function(){
            if(this.loadCount === 0){
                PQ.log('All assets has been loaded in ' + (Date.now()-this.startDate) + ' ms.');
                this._assets = [];
                if(this._onEndCallback){
                    var cb = this._onEndCallback;
                    this._onEndCallback = null;

                    cb(PQ.AssetCache);
                }
            }
        },

        onEnd: function(callback){
            if(callback && typeof callback === "function"){
                this._onEndCallback = callback;
            }
            return this;
        },

        onProgress: function(callback){
            if(callback && typeof callback === "function"){
                this._onProgressCallback = callback;
            }
            return this;
        }
    });

})();