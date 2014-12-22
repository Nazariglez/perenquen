(function(){

    PQ.BitmapFontLoader = PIXI.BitmapFontLoader.extend({
        _init: function(url, crossorigin){
            this.type = url.split('?').shift().split('.').pop().toLowerCase();
            return PQ.BitmapFontLoader._super._init.call(this, url, crossorigin);
        },

        load: function(){
            this.ajaxRequest = new PIXI.AjaxRequest();
            this.ajaxRequest.onreadystatechange = this.onFontLoaded.bind(this);

            this.ajaxRequest.open('GET', this.url, true);
            if (this.ajaxRequest.overrideMimeType) this.ajaxRequest.overrideMimeType('application/xml');
            this.ajaxRequest.send(null);
        },

        onFontLoaded: function(){
            if(this.type === "xml"){
                this.onXMLLoaded();
                return;
            }

            if (this.ajaxRequest.readyState === 4) {
                if (this.ajaxRequest.status === 200 || window.location.protocol.indexOf('http') === -1) {
                    if(this.ajaxRequest.responseXML) {
                        this.onXMLLoaded();
                    }else if(navigator.isCocoonJS && this.ajaxRequest.responseText.indexOf('<') === 0){
                        //if is fnt file but xml format
                        this.onXMLLoaded();
                    }else{
                        this.onFNTLoaded();
                    }
                }
            }
        },

        onFNTLoaded: function(){
            if(!this.ajaxRequest.responseText){
                this.onError();
                return;
            }

            var text = this.ajaxRequest.responseText;
            var lines = text.split('\n');
            var image, currentLine, attr, data = {};

            data.chars = {};

            for(var i = 0; i < lines.length; i++){
                if(lines[i].indexOf("info ") === 0){
                    currentLine = lines[i].substring(5);
                    attr = this.getAttr(currentLine);

                    data.font = attr.face;
                    data.size = parseInt(attr.size, 10);
                }

                if(lines[i].indexOf("common ") === 0){
                    currentLine = lines[i].substring(7);
                    attr = this.getAttr(currentLine);
                    data.lineHeight = parseInt(attr.lineHeight,10);
                }

                if(lines[i].indexOf("page ") === 0){
                    currentLine = lines[i].substring(5);
                    var file = (currentLine.substring(currentLine.indexOf('file='))).split('=')[1];
                    var textureUrl = this.baseUrl + file.substr(1,file.length-2);
                    image = new PQ.ImageLoader(textureUrl, this.crossOrigin);
                    this.texture = image.texture.baseTexture;
                }

                if(lines[i].indexOf("char ") === 0){
                    currentLine = lines[i].substring(5);
                    attr = this.getAttr(currentLine);
                    var charCode = parseInt(attr.id,10);

                    var textureRect = new PQ.Rectangle(
                        parseInt(attr.x, 10),
                        parseInt(attr.y, 10),
                        parseInt(attr.width, 10),
                        parseInt(attr.height, 10)
                    );

                    data.chars[charCode] = {
                        xOffset: parseInt(attr.xoffset, 10),
                        yOffset: parseInt(attr.yoffset, 10),
                        xAdvance: parseInt(attr.xadvance, 10),
                        kerning: {},
                        texture: PIXI.TextureCache[charCode] = new PQ.Texture(this.texture, textureRect)
                    };
                }

                if(lines[i].indexOf('kerning ') === 0){
                    currentLine = lines[i].substring(8);
                    attr = this.getAttr(currentLine);

                    var first = parseInt(attr.first, 10);
                    var second = parseInt(attr.second, 10);

                    data.chars[second].kerning[first] = parseInt(attr.amount, 10);
                }
            }

            PIXI.BitmapText.fonts[data.font] = data;
            image.addEventListener('loaded', this.onLoaded.bind(this));
            image.load();

        },

        getAttr: function(line){
            var attr, i, n, data = {};

            /*
                Separo los strings con espacios para que queden excluidos en el split, y luego
                resituarlos en sus lugares
             */
            //TODO: Seguro que hay una forma mejor de hacer un match excluyendo resultados que esta mierda de bucles
            var regex = /"(\w*\d*\s*(-|_)*)*"/g;
            var matchs = line.match(regex);
            if(matchs && matchs.length >= 1){
                for(i = 0; i < matchs.length; i++){
                    line = line.replace(matchs[i], '{{' + i + '}}');
                }
                attr = line.split(/\s+/g);
                for(i = 0; i < matchs.length; i++) {
                    matchs[i] = matchs[i].substr(1, matchs[i].length-2);
                    for (n = 0; n < attr.length; n++) {
                        attr[n] = attr[n].replace('{{' + i + '}}', matchs[i]);
                    }
                }
            }else{
                attr = line.split(/\s+/g);
            }

            //Parece que los textObject de pixi no soportan igualmente nombres con espacio


            for(i = 0; i < attr.length; i++){
                var d = attr[i].split('=');
                data[d[0]] = d[1];
            }

            return data;
        }
    });

})();