/*global console */
var core = require('./core'),
    mesh = require('./mesh'),
    extras = require('./extras'),
    utils = require('./core/utils');

/**
 * @class
 * @name PIXI.SpriteBatch
 * @see {@link PIXI.ParticleContainer}
 * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
 */
core.SpriteBatch = function() {
    throw new ReferenceError('SpriteBatch does not exist any more, please use the new ParticleContainer instead.');
};

/**
 * @class
 * @name PIXI.AssetLoader
 * @see {@link PIXI.loaders.Loader}
 * @throws {ReferenceError} The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.
 */
core.AssetLoader = function() {
    throw new ReferenceError('The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.');
};

Object.defineProperties(core, {

    /**
     * @class
     * @name PIXI.Stage
     * @see {@link PIXI.Container}
     * @deprecated since version 3.0
     */
    Stage: {
        get: function() {
            console.warn('You do not need to use a PIXI Stage any more, you can simply render any container.');
            return core.Container;
        }
    },

    /**
     * @class
     * @name PIXI.DisplayObjectContainer
     * @see {@link PIXI.Container}
     * @deprecated since version 3.0
     */
    DisplayObjectContainer: {
        get: function() {
            console.warn('DisplayObjectContainer has been shortened to Container, please use Container from now on.');
            return core.Container;
        }
    },

    /**
     * @class
     * @name PIXI.Strip
     * @see {@link PIXI.mesh.Mesh}
     * @deprecated since version 3.0
     */
    Strip: {
        get: function() {
            console.warn('The Strip class has been renamed to Mesh, please use Mesh from now on.');
            return mesh.Mesh;
        }
    },

    /**
     * @class
     * @name PIXI.MovieClip
     * @see {@link PIXI.MovieClip}
     * @deprecated since version 3.0
     */
    MovieClip: {
        get: function() {
            console.warn('The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.');
            return extras.MovieClip;
        }
    },
    /**
     * @class
     * @name PIXI.TilingSprite
     * @see {@link PIXI.TilingSprite}
     * @deprecated since version 3.0
     */
    TilingSprite: {
        get: function() {
            console.warn('The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.');
            return extras.TilingSprite;
        }
    },
    /**
     * @class
     * @name PIXI.TextureCache
     * @see {@link PIXI.utils.TextureCache}
     * @deprecated since version 3.0
     */
    TextureCache: {
        get: function() {
            console.warn('The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.');
            return utils.TextureCache;
        }
    },
    /**
     * @class
     * @name PIXI.BitmapText
     * @see {@link PIXI.extras.BitmapText}
     * @deprecated since version 3.0
     */
    BitmapText: {
        get: function() {
            console.warn('The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.');
            return extras.BitmapText;
        }
    }

});

/**
 * @method
 * @name PIXI.Sprite#setTexture
 * @see {@link PIXI.Sprite#texture}
 * @deprecated since version 3.0
 */
core.Sprite.prototype.setTexture = function(texture) {
    this.texture = texture;
    console.warn('setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;');
};

/**
 * @method
 * @name PIXI.extras.BitmapText#setText
 * @see {@link PIXI.BitmapText#text}
 * @deprecated since version 3.0
 */
extras.BitmapText.prototype.setText = function(text) {
    this.text = text;
    console.warn('setText is now deprecated, please use the text property, e.g : myBitmapText.text = \'my text\';');
};

/**
 * @method
 * @name PIXI.Text#setText
 * @see {@link PIXI.Text#text}
 * @deprecated since version 3.0
 */
core.Text.prototype.setText = function(text) {
    this.text = text;
    console.warn('setText is now deprecated, please use the text property, e.g : myText.text = \'my text\';');
};

/**
 * @method
 * @name PIXI.Texture#setFrame
 * @see {@link PIXI.Texture#setFrame}
 * @deprecated since version 3.0
 */
core.Texture.prototype.setFrame = function(frame) {
    this.frame = frame;
    console.warn('setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;');
};
