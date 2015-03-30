var Resource = require('resource-loader').Resource,
    Texture = require('../../lib/pixi/src/core/textures/Texture'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    BitmapText = require('../display/BitmapText'),
    path = require('path');

module.exports = function(){
    return function(resource, next){
        if(!resource.data || resource.xhrType !== "text"){
            return next();
        }

        var text = resource.data;

        if( text.indexOf("page") === -1 ||
            text.indexOf("face") === -1 ||
            text.indexOf("info") === -1 ||
            text.indexOf("char") === -1 ){

            return next();
        }

        var xmlUrl = path.dirname(resource.url);

        if (xmlUrl === '.') {
            xmlUrl = '';
        }

        if (this.baseUrl && xmlUrl) {
            // if baseurl has a trailing slash then add one to xmlUrl so the replace works below
            if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/') {
                xmlUrl += '/';
            }

            // remove baseUrl from xmlUrl
            xmlUrl = xmlUrl.replace(this.baseUrl, '');
        }

        // if there is an xmlUrl now, it needs a trailing slash. Ensure that it does if the string isn't empty.
        if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== '/') {
            xmlUrl += '/';
        }

        var lines = text.split('\n');
        var image, currentLine, attr, data = {};

        data.chars = {};

        var textureUrl = false;

        for(var j = 0; j < lines.length; j++){
            if(lines[j].indexOf("page ") === 0){
                currentLine = lines[j].substring(5);
                var file = (currentLine.substring(currentLine.indexOf('file='))).split('=')[1];

                textureUrl = xmlUrl + file.substr(1,file.length-2);
                break;
            }
        }

        if(textureUrl){
            var loadOptions = {
                crossOrigin: resource.crossOrigin,
                loadType: Resource.LOAD_TYPE.IMAGE
            };
            this.add(resource.name + '_image', textureUrl, loadOptions, function (res){

                for(var i = 0; i < lines.length; i++){
                    if(lines[i].indexOf("info ") === 0){
                        currentLine = lines[i].substring(5);
                        attr = getAttr(currentLine);

                        data.font = attr.face;
                        data.size = parseInt(attr.size, 10);
                    }

                    if(lines[i].indexOf("common ") === 0){
                        currentLine = lines[i].substring(7);
                        attr = getAttr(currentLine);
                        data.lineHeight = parseInt(attr.lineHeight,10);
                    }

                    if(lines[i].indexOf("char ") === 0){
                        currentLine = lines[i].substring(5);
                        attr = getAttr(currentLine);
                        var charCode = parseInt(attr.id,10);

                        var textureRect = new math.Rectangle(
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
                             texture: utils.TextureCache[charCode] = new Texture(res.texture.baseTexture, textureRect)
                         };
                    }

                    if(lines[i].indexOf('kerning ') === 0){
                         currentLine = lines[i].substring(8);
                         attr = getAttr(currentLine);

                         var first = parseInt(attr.first, 10);
                         var second = parseInt(attr.second, 10);

                         data.chars[second].kerning[first] = parseInt(attr.amount, 10);
                    }
                }

                resource.bitmapFont = data;
                // I'm leaving this as a temporary fix so we can test the bitmap fonts in v3
                // but it's very likely to change
                BitmapText.fonts[data.font] = data;
                next();

            });
        }
    };
};
function getAttr(line){
    var regex = /"(\w*\d*\s*(-|_)*)*"/g,
        attr = line.split(/\s+/g),
        data = {};

    for(var i = 0; i < attr.length; i++){
        var d = attr[i].split('=');
        var m = d[1].match(regex);
        if(m&& m.length>=1){
            d[1] = d[1].substr(1, d[1].length-2);
        }
        data[d[0]] = d[1];
    }

    return data;
}