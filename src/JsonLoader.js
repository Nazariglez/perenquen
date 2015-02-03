(function(){
    PQ.JsonLoader = PIXI.JsonLoader.extend({
        _init: function(url, crossorigin){
            return PQ.JsonLoader._super._init.call(this, url, crossorigin);
        },

        onJSONLoaded: function(){

            if(!this.ajaxRequest.responseText )
            {
                this.onError();
                return;
            }

            this.json = JSON.parse(this.ajaxRequest.responseText);

            if(this.json.frames)
            {
                // sprite sheet
                var textureUrl = this.baseUrl + this.json.meta.image;
                var image = new PQ.ImageLoader(textureUrl, this.crossorigin);
                var frameData = this.json.frames;

                this.texture = image.texture.baseTexture;
                image.addEventListener('loaded', this.onLoaded.bind(this));

                for (var i in frameData)
                {
                    var rect = frameData[i].frame;

                    if (rect)
                    {
                        var textureSize = new PQ.Rectangle(rect.x, rect.y, rect.w, rect.h);
                        var crop = textureSize.clone();
                        var trim = null;

                        //  Check to see if the sprite is trimmed
                        if (frameData[i].trimmed)
                        {
                            var actualSize = frameData[i].sourceSize;
                            var realSize = frameData[i].spriteSourceSize;
                            trim = new PIXI.Rectangle(realSize.x, realSize.y, actualSize.w, actualSize.h);
                        }

                        var asset = {
                            type: 'texture',
                            asset: new PQ.Texture(this.texture, textureSize, crop, trim)
                        };
                        PQ.AssetCache.addAsset(i, asset);
                    }
                }

                image.load();

            }
            else if(this.json.bones)
            {
                //TODO: Revisar el Spine y los atlas a ver si funcionan correctamente.
                // spine animation
                var spineJsonParser = new spine.SkeletonJson();
                PIXI.AnimCache[this.url] = spineJsonParser.readSkeletonData(this.json);
                this.onLoaded();
            }else if(this.json.particleconf){
                if(this.json.particleconf.color){
                    for(var n = 0; n < this.json.particleconf.color.length; n++)this.json.particleconf.color[n] = parseInt(this.json.particleconf.color[n]);
                }
                this.onLoaded();
            }
            else
            {
                this.onLoaded();
            }
        }
    });
})();