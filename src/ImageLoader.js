(function(){

    PQ.ImageLoader = PIXI.ImageLoader.extend({
        _init: function(url, crossorigin){
            PQ.ImageLoader._super._init.call(this, url, crossorigin);
            var match = url.match(/@\dx\./g);
            if(match){
                this.texture.baseTexture.resolution = parseInt(match[0].match(/\d/g)[0]);
            }
        }
    });

})();