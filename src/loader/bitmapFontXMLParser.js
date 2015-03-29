var Resource = require('resource-loader').Resource,
    Texture = require('../../lib/pixi/src/core/textures/Texture'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    BitmapText = require('../display/BitmapText'),
    path = require('path');

module.exports = function(){
    return function(resource, next){
        // skip if no data
        if (!resource.data)
        {
            return next();
        }

        var name = resource.data.nodeName && resource.data.nodeName.toLowerCase();

        // skip if not xml data
        if (!name || (name !== '#document' && name !== 'div'))
        {
            return next();
        }

        // skip if not bitmap font data, using some silly duck-typing
        if (
            resource.data.getElementsByTagName('page').length === 0 ||
            resource.data.getElementsByTagName('info').length === 0 ||
            resource.data.getElementsByTagName('info')[0].getAttribute('face') === null
        )
        {
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

        var textureUrl = xmlUrl + resource.data.getElementsByTagName('page')[0].getAttribute('file');
        var loadOptions = {
            crossOrigin: resource.crossOrigin,
            loadType: Resource.LOAD_TYPE.IMAGE
        };

        // load the texture for the font
        this.add(resource.name + '_image', textureUrl, loadOptions, function (res)
        {
            var data = {};
            var info = resource.data.getElementsByTagName('info')[0];
            var common = resource.data.getElementsByTagName('common')[0];

            data.font = info.getAttribute('face');
            data.size = parseInt(info.getAttribute('size'), 10);
            data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
            data.chars = {};

            //parse letters
            var letters = resource.data.getElementsByTagName('char');

            for (var i = 0; i < letters.length; i++)
            {
                var charCode = parseInt(letters[i].getAttribute('id'), 10);

                var textureRect = new math.Rectangle(
                    parseInt(letters[i].getAttribute('x'), 10),
                    parseInt(letters[i].getAttribute('y'), 10),
                    parseInt(letters[i].getAttribute('width'), 10),
                    parseInt(letters[i].getAttribute('height'), 10)
                );

                data.chars[charCode] = {
                    xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
                    yOffset: parseInt(letters[i].getAttribute('yoffset'), 10),
                    xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10),
                    kerning: {},
                    texture: utils.TextureCache[charCode] = new Texture(res.texture.baseTexture, textureRect)

                };
            }

            //parse kernings
            var kernings = resource.data.getElementsByTagName('kerning');
            for (i = 0; i < kernings.length; i++)
            {
                var first = parseInt(kernings[i].getAttribute('first'), 10);
                var second = parseInt(kernings[i].getAttribute('second'), 10);
                var amount = parseInt(kernings[i].getAttribute('amount'), 10);

                data.chars[second].kerning[first] = amount;

            }

            resource.bitmapFont = data;

            // I'm leaving this as a temporary fix so we can test the bitmap fonts in v3
            // but it's very likely to change
            BitmapText.fonts[data.font] = data;

            next();
        });
    };
};