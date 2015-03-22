var Resource = require('resource-loader').Resource,
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    path = require('path'),
    Texture = require('../../lib/pixi/src/core/textures/Texture');

module.exports = function() {
    return function (resource, next){
        // skip if no data
        if (!resource.data || !resource.data.frames)
        {
            return next();
        }

        var loadOptions = {
            crossOrigin: resource.crossOrigin,
            loadType: Resource.LOAD_TYPE.IMAGE
        };

        var route = path.dirname(resource.url.replace(this.baseUrl, ''));

        var resolution = utils.getResolutionOfUrl( resource.url );

        // load the image for this sheet
        this.add(resource.name + '_image', route + '/' + resource.data.meta.image, loadOptions, function (res)
        {
            resource.textures = {};

            var frames = resource.data.frames;

            for (var i in frames)
            {
                var rect = frames[i].frame;

                if (rect)
                {
                    var size = null;
                    var trim = null;

                    if (frames[i].rotated) {
                        size = new math.Rectangle(rect.x, rect.y, rect.h, rect.w);
                    }
                    else {
                        size = new math.Rectangle(rect.x, rect.y, rect.w, rect.h);
                    }

                    //  Check to see if the sprite is trimmed
                    if (frames[i].trimmed)
                    {
                        trim = new math.Rectangle(
                            frames[i].spriteSourceSize.x / resolution,
                            frames[i].spriteSourceSize.y / resolution,
                            frames[i].sourceSize.w / resolution,
                            frames[i].sourceSize.h / resolution
                        );
                    }

                    // flip the width and height!
                    if (frames[i].rotated)
                    {
                        var temp = size.width;
                        size.width = size.height;
                        size.height = temp;
                    }

                    size.x /= resolution;
                    size.y /= resolution;
                    size.width /= resolution;
                    size.height /= resolution;

                    resource.textures[i] = new Texture(res.texture.baseTexture, size, size.clone(), trim, frames[i].rotated);
                    utils.assetCache.addTexture(i, resource.url, resource.textures[i]);
                }
            }

            next();
        });
    };
};