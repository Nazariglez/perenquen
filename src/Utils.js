(function(){

    PQ.Utils = {

        //TODO: Mejor que esto sería un sprite que se dibujara asi directamente, mejor rendimiento, flexibilidad, etc...
        ninePatchTexture : function(texture, width, height, name){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }

            var ww = texture.width,
                hh = texture.height,
                xx = texture.frame.x,
                yy = texture.frame.y;

            var left = ww / 3,
                right = ww / 3,
                top = hh / 3,
                bottom = hh / 3;

            var container = new PQ.DisplayObjectContainer();

            for(var i = 0; i < 9; i++){
                var sprite, x, y, w, h;
                switch(i){
                    case 0:
                        x = xx;
                        y = yy;
                        w = left;
                        h = top;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(0,0)
                            .setSize(left, top);
                        break;
                    case 1:
                        x = xx+left;
                        y = yy;
                        w = Math.floor(ww-left-right);
                        h = top;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(left,0)
                            .setSize(width-right-left,top);
                        break;
                    case 2:
                        x = xx+Math.floor(ww-right);
                        y = yy;
                        w = right;
                        h = top;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(width-right,0)
                            .setSize(right,top);
                        break;
                    case 3:
                        x = xx;
                        y = yy+top;
                        w = left;
                        h = Math.floor(hh-top-bottom);
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(0,top)
                            .setSize(left,height-top-bottom);
                        break;
                    case 4:
                        x = xx+left;
                        y = yy+top;
                        w = Math.floor(ww-left-right);
                        h = Math.floor(hh-top-bottom);
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(left,top)
                            .setSize(width-left-right,height-top-bottom);
                        break;
                    case 5:
                        x = xx+Math.floor(ww-right);
                        y = yy+top;
                        w = Math.floor(ww-left-right);
                        h = Math.floor(hh-top-bottom);
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(width-right,top)
                            .setSize(right,height-top-bottom);
                        break;
                    case 6:
                        x = xx;
                        y = yy+Math.floor(hh-bottom);
                        w = left;
                        h = bottom;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(0,height-bottom)
                            .setSize(left,bottom);
                        break;
                    case 7:
                        x = xx+left;
                        y = yy+Math.floor(hh-bottom);
                        w = Math.floor(ww-left-right);
                        h = bottom;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(left,height-bottom)
                            .setSize(width-left-right,bottom);
                        break;
                    case 8:
                        x = xx+Math.floor(ww-right);
                        y = yy+Math.floor(hh-bottom);
                        w = right;
                        h = bottom;
                        sprite = new PQ.Sprite(new PQ.Texture(texture, new PQ.Rectangle(x,y,w,h)))
                            .setAnchor(0,0)
                            .setPosition(width-right,height-bottom)
                            .setSize(right,bottom);
                        break;
                }

                container.addChild(sprite);
            }

            var ninePatch = container.generateTexture();

            if(name && PQ.AssetCache){
                var asset = {
                    type : 'texture',
                    asset: ninePatch
                };

                PQ.AssetCache.addAsset(name, asset);
            }

            return ninePatch;

        },

        findSceneParent: function(actor) {
            if (actor instanceof PQ.Scene) {
                return actor;
            } else if (actor.parent) {
                return PQ.Utils.findSceneParent(actor.parent);
            }

            return false;
        },

        parseText: function(text, args){
            for(var key in args){
                var regExp = new RegExp('{{'+key+'}}','g');
                text = text.replace(regExp, args[key]);
            }
            return text;
        }

        //TODO: Añadir un convertidos de hex color string to hex y hex to string

    };

})();