(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PQ = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var core = require('./core'),
    CONST = require('./core/const');

//TODO: Add here addons
core.Scene = require('./display/Scene');
core.Graphics = require('./display/Graphics');

//Add Constants to the main object
for(var key in CONST){
    core[key] = CONST[key];
}

//TODO: Add class system

module.exports = core;
},{"./core":66,"./core/const":65,"./display/Graphics":68,"./display/Scene":69}],2:[function(require,module,exports){
module.exports={
  "name": "pixi.js",
  "version": "3.0.0-rc1",
  "description": "Pixi.js is a fast lightweight 2D library that works across all devices.",
  "author": "Mat Groves",
  "contributors": [
    "Chad Engler <chad@pantherdev.com>",
    "Richard Davey <rdavey@gmail.com>"
  ],
  "main": "./src/index.js",
  "homepage": "http://goodboydigital.com/",
  "bugs": "https://github.com/GoodBoyDigital/pixi.js/issues",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/GoodBoyDigital/pixi.js.git"
  },
  "scripts": {
    "test": "gulp test",
    "docs": "./node_modules/.bin/jsdoc -c ./gulp/util/jsdoc.conf.json"
  },
  "devDependencies": {
    "brfs": "^1.2.0",
    "browserify": "^8.0.2",
    "chai": "^1.10.0",
    "del": "^1.1.0",
    "exorcist": "^0.1.6",
    "gulp": "^3.8.10",
    "gulp-cached": "^1.0.1",
    "gulp-concat": "^2.5.2",
    "gulp-debug": "^2.0.0",
    "gulp-jsdoc": "^0.1.4",
    "gulp-jshint": "^1.9.0",
    "gulp-plumber": "^0.6.6",
    "gulp-rename": "^1.2.0",
    "gulp-uglify": "^1.0.2",
    "gulp-util": "^3.0.1",
    "ink-docstrap": "^0.5.2",
    "jsdoc": "^3.3.0-alpha13",
    "jshint-summary": "^0.4.0",
    "karma": "^0.12.28",
    "karma-firefox-launcher": "^0.1.0",
    "karma-mocha": "^0.1.10",
    "karma-spec-reporter": "^0.0.16",
    "minimist": "^1.1.0",
    "mocha": "^2.1.0",
    "require-dir": "^0.1.0",
    "run-sequence": "^1.0.2",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.0.0",
    "watchify": "^2.2.1"
  },
  "dependencies": {
    "async": "^0.9.0",
    "resource-loader": "^1.2.0"
  },
  "browserify": {
    "transform": [
      "brfs"
    ]
  }
}

},{}],3:[function(require,module,exports){
/**
 * Constant values used in pixi
 *
 * @memberof PIXI
 */
module.exports = {
    /**
     * String of the current PIXI version
     *
     * @static
     * @constant
     * @property {string} VERSION
     */
    VERSION: require('../../package.json').version,

    /**
     * Constant to identify the Renderer Type.
     *
     * @static
     * @constant
     * @property {object} RENDERER_TYPE
     * @property {number} RENDERER_TYPE.UNKNOWN
     * @property {number} RENDERER_TYPE.WEBGL
     * @property {number} RENDERER_TYPE.CANVAS
     */
    RENDERER_TYPE: {
        UNKNOWN:    0,
        WEBGL:      1,
        CANVAS:     2
    },

    /**
     * Various blend modes supported by PIXI. IMPORTANT - The WebGL renderer only supports
     * the NORMAL, ADD, MULTIPLY and SCREEN blend modes. Anything else will silently act like
     * NORMAL.
     *
     * @static
     * @constant
     * @property {object} BLEND_MODES
     * @property {number} BLEND_MODES.NORMAL
     * @property {number} BLEND_MODES.ADD
     * @property {number} BLEND_MODES.MULTIPLY
     * @property {number} BLEND_MODES.SCREEN
     * @property {number} BLEND_MODES.OVERLAY
     * @property {number} BLEND_MODES.DARKEN
     * @property {number} BLEND_MODES.LIGHTEN
     * @property {number} BLEND_MODES.COLOR_DODGE
     * @property {number} BLEND_MODES.COLOR_BURN
     * @property {number} BLEND_MODES.HARD_LIGHT
     * @property {number} BLEND_MODES.SOFT_LIGHT
     * @property {number} BLEND_MODES.DIFFERENCE
     * @property {number} BLEND_MODES.EXCLUSION
     * @property {number} BLEND_MODES.HUE
     * @property {number} BLEND_MODES.SATURATION
     * @property {number} BLEND_MODES.COLOR
     * @property {number} BLEND_MODES.LUMINOSITY
     */
    BLEND_MODES: {
        NORMAL:         0,
        ADD:            1,
        MULTIPLY:       2,
        SCREEN:         3,
        OVERLAY:        4,
        DARKEN:         5,
        LIGHTEN:        6,
        COLOR_DODGE:    7,
        COLOR_BURN:     8,
        HARD_LIGHT:     9,
        SOFT_LIGHT:     10,
        DIFFERENCE:     11,
        EXCLUSION:      12,
        HUE:            13,
        SATURATION:     14,
        COLOR:          15,
        LUMINOSITY:     16
    },

    /**
     * The scale modes that are supported by pixi.
     *
     * The DEFAULT scale mode affects the default scaling mode of future operations.
     * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
     *
     * @static
     * @constant
     * @property {object} SCALE_MODES
     * @property {number} SCALE_MODES.DEFAULT=LINEAR
     * @property {number} SCALE_MODES.LINEAR Smooth scaling
     * @property {number} SCALE_MODES.NEAREST Pixelating scaling
     */
    SCALE_MODES: {
        DEFAULT:    0,
        LINEAR:     0,
        NEAREST:    1
    },

    /**
     * The prefix that denotes a URL is for a retina asset
     *
     * @static
     * @constant
     * @property {string} RETINA_PREFIX
     */
    //example: '@2x',
    RETINA_PREFIX: /@(.+)x/,

    RESOLUTION:1,

    FILTER_RESOLUTION:1,

    /**
     * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
     * or {@link PIXI.CanvasRenderer}.
     *
     * @static
     * @constant
     * @property {object} DEFAULT_RENDER_OPTIONS
     * @property {HTMLCanvasElement} DEFAULT_RENDER_OPTIONS.view=null
     * @property {boolean} DEFAULT_RENDER_OPTIONS.transparent=false
     * @property {boolean} DEFAULT_RENDER_OPTIONS.antialias=false
     * @property {boolean} DEFAULT_RENDER_OPTIONS.forceFXAA=false
     * @property {boolean} DEFAULT_RENDER_OPTIONS.preserveDrawingBuffer=false
     * @property {number} DEFAULT_RENDER_OPTIONS.resolution=1
     * @property {number} DEFAULT_RENDER_OPTIONS.backgroundColor=0x000000
     * @property {boolean} DEFAULT_RENDER_OPTIONS.clearBeforeRender=true
     * @property {boolean} DEFAULT_RENDER_OPTIONS.autoResize=false
     */
    DEFAULT_RENDER_OPTIONS: {
        view: null,
        resolution: 1,
        antialias: false,
        forceFXAA: false,
        autoResize: false,
        transparent: false,
        backgroundColor: 0x000000,
        clearBeforeRender: true,
        preserveDrawingBuffer: false
    },

    /**
     * Constants that identify shapes, mainly to prevent `instanceof` calls.
     *
     * @static
     * @constant
     * @property {object} SHAPES
     * @property {object} SHAPES.POLY=0
     * @property {object} SHAPES.RECT=1
     * @property {object} SHAPES.CIRC=2
     * @property {object} SHAPES.ELIP=3
     * @property {object} SHAPES.RREC=4
     */
    SHAPES: {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4
    },

    SPRITE_BATCH_SIZE: 2000 //nice balance between mobile and desktop machines
};

},{"../../package.json":2}],4:[function(require,module,exports){
var math = require('../math'),
    DisplayObject = require('./DisplayObject'),
    RenderTexture = require('../textures/RenderTexture'),
    _tempMatrix = new math.Matrix();

/**
 * A Container represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 *```js
 * var container = new PIXI.Container();
 * container.addChild(sprite);
 * ```
 * @class
 * @extends DisplayObject
 * @memberof PIXI
 */
function Container()
{
    DisplayObject.call(this);

    /**
     * The array of children of this container.
     *
     * @member {DisplayObject[]}
     * @readonly
     */
    this.children = [];
}

// constructor
Container.prototype = Object.create(DisplayObject.prototype);
Container.prototype.constructor = Container;
module.exports = Container;

Object.defineProperties(Container.prototype, {
    /**
     * The width of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof Container#
     */
    width: {
        get: function ()
        {
            return this.scale.x * this.getLocalBounds().width;
        },
        set: function (value)
        {

            var width = this.getLocalBounds().width;

            if (width !== 0)
            {
                this.scale.x = value / width;
            }
            else
            {
                this.scale.x = 1;
            }


            this._width = value;
        }
    },

    /**
     * The height of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof Container#
     */
    height: {
        get: function ()
        {
            return  this.scale.y * this.getLocalBounds().height;
        },
        set: function (value)
        {

            var height = this.getLocalBounds().height;

            if (height !== 0)
            {
                this.scale.y = value / height ;
            }
            else
            {
                this.scale.y = 1;
            }

            this._height = value;
        }
    }
});

/**
 * Adds a child to the container.
 *
 * @param child {DisplayObject} The DisplayObject to add to the container
 * @return {DisplayObject} The child that was added.
 */
Container.prototype.addChild = function (child)
{
    return this.addChildAt(child, this.children.length);
};

/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 * @return {DisplayObject} The child that was added.
 */
Container.prototype.addChildAt = function (child, index)
{
    // prevent adding self as child
    if (child === this)
    {
        return child;
    }

    if (index >= 0 && index <= this.children.length)
    {
        if (child.parent)
        {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);
        return child;
    }
    else
    {
        throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
    }
};

/**
 * Swaps the position of 2 Display Objects within this container.
 *
 * @param child {DisplayObject}
 * @param child2 {DisplayObject}
 */
Container.prototype.swapChildren = function (child, child2)
{
    if (child === child2)
    {
        return;
    }

    var index1 = this.getChildIndex(child);
    var index2 = this.getChildIndex(child2);

    if (index1 < 0 || index2 < 0)
    {
        throw new Error('swapChildren: Both the supplied DisplayObjects must be children of the caller.');
    }

    this.children[index1] = child2;
    this.children[index2] = child;
};

/**
 * Returns the index position of a child DisplayObject instance
 *
 * @param child {DisplayObject} The DisplayObject instance to identify
 * @return {Number} The index position of the child display object to identify
 */
Container.prototype.getChildIndex = function (child)
{
    var index = this.children.indexOf(child);

    if (index === -1)
    {
        throw new Error('The supplied DisplayObject must be a child of the caller');
    }

    return index;
};

/**
 * Changes the position of an existing child in the display object container
 *
 * @param child {DisplayObject} The child DisplayObject instance for which you want to change the index number
 * @param index {Number} The resulting index number for the child display object
 */
Container.prototype.setChildIndex = function (child, index)
{
    if (index < 0 || index >= this.children.length)
    {
        throw new Error('The supplied index is out of bounds');
    }

    var currentIndex = this.getChildIndex(child);

    this.children.splice(currentIndex, 1); //remove from old position
    this.children.splice(index, 0, child); //add at new position
};

/**
 * Returns the child at the specified index
 *
 * @param index {Number} The index to get the child at
 * @return {DisplayObject} The child at the given index, if any.
 */
Container.prototype.getChildAt = function (index)
{
    if (index < 0 || index >= this.children.length)
    {
        throw new Error('getChildAt: Supplied index ' + index + ' does not exist in the child list, or the supplied DisplayObject is not a child of the caller');
    }

    return this.children[index];
};

/**
 * Removes a child from the container.
 *
 * @param child {DisplayObject} The DisplayObject to remove
 * @return {DisplayObject} The child that was removed.
 */
Container.prototype.removeChild = function (child)
{
    var index = this.children.indexOf(child);

    if (index === -1)
    {
        return;
    }

    return this.removeChildAt(index);
};

/**
 * Removes a child from the specified index position.
 *
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child that was removed.
 */
Container.prototype.removeChildAt = function (index)
{
    var child = this.getChildAt(index);

    child.parent = null;
    this.children.splice(index, 1);

    return child;
};

/**
 * Removes all children from this container that are within the begin and end indexes.
 *
 * @param beginIndex {Number} The beginning position. Default value is 0.
 * @param endIndex {Number} The ending position. Default value is size of the container.
 */
Container.prototype.removeChildren = function (beginIndex, endIndex)
{
    var begin = beginIndex || 0;
    var end = typeof endIndex === 'number' ? endIndex : this.children.length;
    var range = end - begin;

    if (range > 0 && range <= end)
    {
        var removed = this.children.splice(begin, range);

        for (var i = 0; i < removed.length; ++i)
        {
            removed[i].parent = null;
        }

        return removed;
    }
    else if (range === 0 && this.children.length === 0)
    {
        return [];
    }
    else
    {
        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    }
};

/**
 * Useful function that returns a texture of the display object that can then be used to create sprites
 * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 *
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} See {@link SCALE_MODES} for possible values
 * @return {Texture} a texture of the display object
 */
Container.prototype.generateTexture = function (renderer, resolution, scaleMode)
{
    var bounds = this.getLocalBounds();

    var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, renderer, scaleMode, resolution);

    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;

    renderTexture.render(this, _tempMatrix);

    return renderTexture;
};

/*
 * Updates the transform on all children of this container for rendering
 *
 * @private
 */
Container.prototype.updateTransform = function ()
{
    if (!this.visible)
    {
        return;
    }

    this.displayObjectUpdateTransform();

    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].updateTransform();
    }
};

// performance increase to avoid using call.. (10x faster)
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

/**
 * Retrieves the bounds of the Container as a rectangle. The bounds calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getBounds = function ()
{
    if(!this._currentBounds)
    {

        if (this.children.length === 0)
        {
            return math.Rectangle.EMPTY;
        }

        // TODO the bounds have already been calculated this render session so return what we have

        var minX = Infinity;
        var minY = Infinity;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var childBounds;
        var childMaxX;
        var childMaxY;

        var childVisible = false;

        for (var i = 0, j = this.children.length; i < j; ++i)
        {
            var child = this.children[i];

            if (!child.visible)
            {
                continue;
            }

            childVisible = true;

            childBounds = this.children[i].getBounds();

            minX = minX < childBounds.x ? minX : childBounds.x;
            minY = minY < childBounds.y ? minY : childBounds.y;

            childMaxX = childBounds.width + childBounds.x;
            childMaxY = childBounds.height + childBounds.y;

            maxX = maxX > childMaxX ? maxX : childMaxX;
            maxY = maxY > childMaxY ? maxY : childMaxY;
        }

        if (!childVisible)
        {
            return math.Rectangle.EMPTY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.y = minY;
        bounds.width = maxX - minX;
        bounds.height = maxY - minY;

        this._currentBounds = bounds;
    }

    return this._currentBounds;
};

/**
 * Retrieves the non-global local bounds of the Container as a rectangle.
 * The calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getLocalBounds = function ()
{
    var matrixCache = this.worldTransform;

    this.worldTransform = math.Matrix.IDENTITY;

    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].updateTransform();
    }

    this.worldTransform = matrixCache;

    this._currentBounds = null;

    return this.getBounds();
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The renderer
 */
Container.prototype.renderWebGL = function (renderer)
{

    // if the object is not visible or the alpha is 0 then no need to render this element
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable)
    {
        return;
    }

    var i, j;

    // do a quick check to see if this element has a mask or a filter.
    if (this._mask || this._filters)
    {
        renderer.currentRenderer.flush();

        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if (this._filters)
        {
            renderer.filterManager.pushFilter(this, this._filters);
        }

        if (this._mask)
        {
            renderer.maskManager.pushMask(this, this._mask);
        }

        renderer.currentRenderer.start();

        // add this object to the batch, only rendered if it has a texture.
        this._renderWebGL(renderer);

        // now loop through the children and make sure they get rendered
        for (i = 0, j = this.children.length; i < j; i++)
        {
            this.children[i].renderWebGL(renderer);
        }

        renderer.currentRenderer.flush();

        if (this._mask)
        {
            renderer.maskManager.popMask(this, this._mask);
        }

        if (this._filters)
        {
            renderer.filterManager.popFilter();

        }
        renderer.currentRenderer.start();
    }
    else
    {
        this._renderWebGL(renderer);

        // simple render children!
        for (i = 0, j = this.children.length; i < j; ++i)
        {
            this.children[i].renderWebGL(renderer);
        }
    }
};

/**
 * To be overridden by the subclass
 *
 * @param renderer {WebGLRenderer} The renderer
 * @private
 */
Container.prototype._renderWebGL = function (renderer)
{
    // this is where content itself gets rendered...
};

/**
 * To be overridden by the subclass
 *
 * @param renderer {CanvasRenderer} The renderer
 * @private
 */
Container.prototype._renderCanvas = function (renderer)
{
    // this is where content itself gets rendered...
};


/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 */
Container.prototype.renderCanvas = function (renderer)
{
    // if not visible or the alpha is 0 then no need to render this
    if (!this.visible || this.alpha <= 0 || !this.renderable)
    {
        return;
    }

    if (this._mask)
    {
        renderer.maskManager.pushMask(this._mask, renderer);
    }

    this._renderCanvas(renderer);
    for (var i = 0, j = this.children.length; i < j; ++i)
    {
        this.children[i].renderCanvas(renderer);
    }

    if (this._mask)
    {
        renderer.maskManager.popMask(renderer);
    }
};

},{"../math":13,"../textures/RenderTexture":50,"./DisplayObject":5}],5:[function(require,module,exports){
var math = require('../math'),
    utils = require('../utils'),
    RenderTexture = require('../textures/RenderTexture'),
    _tempMatrix = new math.Matrix();

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class
 * @memberof PIXI
 */
function DisplayObject()
{
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @member {Point}
     */
    this.position = new math.Point();

    /**
     * The scale factor of the object.
     *
     * @member {Point}
     */
    this.scale = new math.Point(1, 1);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {Point}
     */
    this.pivot = new math.Point(0, 0);

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */
    this.rotation = 0;

    /**
     * The opacity of the object.
     *
     * @member {number}
     */
    this.alpha = 1;

    /**
     * The visibility of the object. If false the object will not be drawn, and
     * the updateTransform function will not be called.
     *
     * @member {boolean}
     */
    this.visible = true;

    /**
     * Can this object be rendered, if false the object will not be drawn but the updateTransform
     * methods will still be called.
     *
     * @member {boolean}
     */
    this.renderable = true;

    /**
     * The display object container that contains this display object.
     *
     * @member {Container}
     * @readOnly
     */
    this.parent = null;

    /**
     * The multiplied alpha of the displayObject
     *
     * @member {number}
     * @readOnly
     */
    this.worldAlpha = 1;

    /**
     * Current transform of the object based on world (parent) factors
     *
     * @member {Matrix}
     * @readOnly
     */
    this.worldTransform = new math.Matrix();

    /**
     * The area the filter is applied to. This is used as more of an optimisation
     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
     *
     * @member {Rectangle}
     */
    this.filterArea = null;

    /**
     * cached sin rotation
     *
     * @member {number}
     * @private
     */
    this._sr = 0;

    /**
     * cached cos rotation
     *
     * @member {number}
     * @private
     */
    this._cr = 1;

    /**
     * The original, cached bounds of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._bounds = new math.Rectangle(0, 0, 1, 1);

    /**
     * The most up-to-date bounds of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._currentBounds = null;

    /**
     * The original, cached mask of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._mask = null;

    //TODO rename to _isMask
   // this.isMask = false;

    /**
     * Cached internal flag.
     *
     * @member {boolean}
     * @private
     */
    this._cacheAsBitmap = false;
    this._cachedObject = null;
}

// constructor
DisplayObject.prototype.constructor = DisplayObject;
utils.eventTarget.mixin(DisplayObject.prototype);
module.exports = DisplayObject;

Object.defineProperties(DisplayObject.prototype, {
    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     *
     * @member {number}
     * @memberof DisplayObject#
     */
    x: {
        get: function ()
        {
            return this.position.x;
        },
        set: function (value)
        {
            this.position.x = value;
        }
    },

    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     *
     * @member {number}
     * @memberof DisplayObject#
     */
    y: {
        get: function ()
        {
            return this.position.y;
        },
        set: function (value)
        {
            this.position.y = value;
        }
    },

    /**
     * Indicates if the sprite is globally visible.
     *
     * @member {boolean}
     * @memberof DisplayObject#
     * @readonly
     */
    worldVisible: {
        get: function ()
        {
            var item = this;

            do {
                if (!item.visible)
                {
                    return false;
                }

                item = item.parent;
            } while (item);

            return true;
        }
    },

    /**
     * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
     * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
     * To remove a mask, set this property to null.
     *
     * @member {Graphics}
     * @memberof DisplayObject#
     */
    mask: {
        get: function ()
        {
            return this._mask;
        },
        set: function (value)
        {
            if (this._mask)
            {
                this._mask.renderable = true;
            }

            this._mask = value;

            if (this._mask)
            {
                this._mask.renderable = false;
            }
        }
    },

    /**
     * Sets the filters for the displayObject.
     * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
     * To remove filters simply set this property to 'null'
     *
     * @member {Filter[]}
     * @memberof DisplayObject#
     */
    filters: {
        get: function ()
        {
            return this._filters && this._filters.slice();
        },
        set: function (value)
        {
            this._filters = value && value.slice();
        }
    }

});

/*
 * Updates the object transform for rendering
 *
 * TODO - Optimization pass!
 *
 * @private
 */
DisplayObject.prototype.updateTransform = function ()
{

    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    // so if rotation is between 0 then we can simplify the multiplication process...
    if (this.rotation % math.PI_2)
    {
        // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
        if (this.rotation !== this.rotationCache)
        {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
        }

        // get the matrix values of the displayobject based on its transform properties..
        a  =  this._cr * this.scale.x;
        b  =  this._sr * this.scale.x;
        c  = -this._sr * this.scale.y;
        d  =  this._cr * this.scale.y;
        tx =  this.position.x;
        ty =  this.position.y;

        // check for pivot.. not often used so geared towards that fact!
        if (this.pivot.x || this.pivot.y)
        {
            tx -= this.pivot.x * a + this.pivot.y * c;
            ty -= this.pivot.x * b + this.pivot.y * d;
        }

        // concat the parent matrix with the objects transform.
        wt.a  = a  * pt.a + b  * pt.c;
        wt.b  = a  * pt.b + b  * pt.d;
        wt.c  = c  * pt.a + d  * pt.c;
        wt.d  = c  * pt.b + d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }
    else
    {
        // lets do the fast version as we know there is no rotation..
        a  = this.scale.x;
        d  = this.scale.y;

        tx = this.position.x - this.pivot.x * a;
        ty = this.position.y - this.pivot.y * d;

        wt.a  = a  * pt.a;
        wt.b  = a  * pt.b;
        wt.c  = d  * pt.c;
        wt.d  = d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }

    // multiply the alphas..
    this.worldAlpha = this.alpha * this.parent.worldAlpha;

    // reset the bounds each time this is called!
    this._currentBounds = null;
};

// performance increase to avoid using call.. (10x faster)
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

/**
 *
 *
 * Retrieves the bounds of the displayObject as a rectangle object
 *
 * @param matrix {Matrix}
 * @return {Rectangle} the rectangular bounding area
 */
DisplayObject.prototype.getBounds = function (matrix)
{
    return math.Rectangle.EMPTY;
};

/**
 * Retrieves the local bounds of the displayObject as a rectangle object
 *
 * @return {Rectangle} the rectangular bounding area
 */
DisplayObject.prototype.getLocalBounds = function ()
{
    return this.getBounds(math.Matrix.IDENTITY);
};

/**
 * Calculates the global position of the display object
 *
 * @param position {Point} The world origin to calculate from
 * @return {Point} A point object representing the position of this object
 */
DisplayObject.prototype.toGlobal = function (position)
{
    // don't need to update the lot
    this.displayObjectUpdateTransform();
    return this.worldTransform.apply(position);
};

/**
 * Calculates the local position of the display object relative to another point
 *
 * @param position {Point} The world origin to calculate from
 * @param [from] {DisplayObject} The DisplayObject to calculate the global position from
 * @return {Point} A point object representing the position of this object
 */
DisplayObject.prototype.toLocal = function (position, from)
{
    if (from)
    {
        position = from.toGlobal(position);
    }

    // don't need to update the lot
    this.displayObjectUpdateTransform();
    return this.worldTransform.applyInverse(position);
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The renderer
 * @private
 */
DisplayObject.prototype.renderWebGL = function (renderer)
{
    // OVERWRITE;
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 * @private
 */
DisplayObject.prototype.renderCanvas = function (renderer)
{
    // OVERWRITE;
};
/**
 * Useful function that returns a texture of the display object that can then be used to create sprites
 * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 *
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} See {@link SCALE_MODES} for possible values
 * @return {Texture} a texture of the display object
 */
DisplayObject.prototype.generateTexture = function (renderer, resolution, scaleMode)
{
    var bounds = this.getLocalBounds();

    var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, renderer, scaleMode, resolution);

    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;

    renderTexture.render(this, _tempMatrix);

    return renderTexture;
};

},{"../math":13,"../textures/RenderTexture":50,"../utils":58}],6:[function(require,module,exports){
var Container = require('../display/Container'),
    Sprite = require('../sprites/Sprite'),
    Texture = require('../textures/Texture'),
    CanvasBuffer = require('../renderers/canvas/utils/CanvasBuffer'),
    CanvasGraphics = require('../renderers/canvas/utils/CanvasGraphics'),
    GraphicsData = require('./GraphicsData'),
    math = require('../math'),
    CONST = require('../const'),
    tempPoint = new math.Point();

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * @class
 * @extends Container
 * @memberof PIXI
 */
function Graphics()
{
    Container.call(this);

    /**
     * The alpha value used when filling the Graphics object.
     *
     * @member {number}
     * @default 1
     */
    this.fillAlpha = 1;

    /**
     * The width (thickness) of any lines drawn.
     *
     * @member {number}
     * @default 0
     */
    this.lineWidth = 0;

    /**
     * The color of any lines drawn.
     *
     * @member {string}
     * @default 0
     */
    this.lineColor = 0;

    /**
     * Graphics data
     *
     * @member {GraphicsData[]}
     * @private
     */
    this.graphicsData = [];

    /**
     * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to reset the tint.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;

    /**
     * The previous tint applied to the graphic shape. Used to compare to the current tint and check if theres change.
     *
     * @member {number}
     * @private
     * @default 0xFFFFFF
     */
    this._prevTint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the graphic shape. Apply a value of blendModes.NORMAL to reset the blend mode.
     *
     * @member {number}
     * @default CONST.BLEND_MODES.NORMAL;
     */
    this.blendMode = CONST.BLEND_MODES.NORMAL;

    /**
     * Current path
     *
     * @member {GraphicsData}
     * @private
     */
    this.currentPath = null;

    /**
     * Array containing some WebGL-related properties used by the WebGL renderer.
     *
     * @member {object<number, object>}
     * @private
     */
    // TODO - _webgl should use a prototype object, not a random undocumented object...
    this._webGL = {};

    /**
     * Whether this shape is being used as a mask.
     *
     * @member {boolean}
     */
    this.isMask = false;

    /**
     * The bounds' padding used for bounds calculation.
     *
     * @member {number}
     */
    this.boundsPadding = 0;

    /**
     * A cache of the local bounds to prevent recalculation.
     *
     * @member {Rectangle}
     * @private
     */
    this._localBounds = new math.Rectangle(0,0,1,1);

    /**
     * Used to detect if the graphics object has changed. If this is set to true then the graphics
     * object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    this.dirty = true;

    /**
     * Used to detect if the WebGL graphics object has changed. If this is set to true then the
     * graphics object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    this.glDirty = false;

    /**
     * Used to detect if the cached sprite object needs to be updated.
     *
     * @member {boolean}
     * @private
     */
    this.cachedSpriteDirty = false;
}

// constructor
Graphics.prototype = Object.create(Container.prototype);
Graphics.prototype.constructor = Graphics;
module.exports = Graphics;

Object.defineProperties(Graphics.prototype, {
    /**
     * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
     * This is useful if your graphics element does not change often, as it will speed up the rendering
     * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
     * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
     * you are constantly redrawing the graphics element.
     *
     * @member {boolean}
     * @memberof Graphics#
     * @default false
     * @private
     */

});

/**
 * Creates a new Graphics object with the same values as this one.
 *
 * @return {Graphics}
 */
Graphics.prototype.clone = function ()
{
    var clone = new Graphics();

    clone.renderable    = this.renderable;
    clone.fillAlpha     = this.fillAlpha;
    clone.lineWidth     = this.lineWidth;
    clone.lineColor     = this.lineColor;
    clone.tint          = this.tint;
    clone.blendMode     = this.blendMode;
    clone.isMask        = this.isMask;
    clone.boundsPadding = this.boundsPadding;
    clone.dirty         = this.dirty;
    clone.glDirty       = this.glDirty;
    clone.cachedSpriteDirty = this.cachedSpriteDirty;

    // copy graphics data
    for (var i = 0; i < this.graphicsData.length; ++i)
    {
        clone.graphicsData.push(this.graphicsData.clone());
    }

    clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

    clone.updateLocalBounds();

    return clone;
};

/**
 * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
 *
 * @param lineWidth {number} width of the line to draw, will update the objects stored style
 * @param color {number} color of the line to draw, will update the objects stored style
 * @param alpha {number} alpha of the line to draw, will update the objects stored style
 * @return {Graphics}
 */
Graphics.prototype.lineStyle = function (lineWidth, color, alpha)
{
    this.lineWidth = lineWidth || 0;
    this.lineColor = color || 0;
    this.lineAlpha = (arguments.length < 3) ? 1 : alpha;

    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length)
        {
            // halfway through a line? start a new one!
            this.drawShape( new math.Polygon( this.currentPath.shape.points.slice(-2) ));
        }
        else
        {
            // otherwise its empty so lets just set the line properties
            this.currentPath.lineWidth = this.lineWidth;
            this.currentPath.lineColor = this.lineColor;
            this.currentPath.lineAlpha = this.lineAlpha;
        }
    }

    return this;
};

/**
 * Moves the current drawing position to x, y.
 *
 * @param x {number} the X coordinate to move to
 * @param y {number} the Y coordinate to move to
 * @return {Graphics}
  */
Graphics.prototype.moveTo = function (x, y)
{
    this.drawShape(new math.Polygon([x,y]));

    return this;
};

/**
 * Draws a line using the current line style from the current drawing position to (x, y);
 * The current drawing position is then set to (x, y).
 *
 * @param x {number} the X coordinate to draw to
 * @param y {number} the Y coordinate to draw to
 * @return {Graphics}
 */
Graphics.prototype.lineTo = function (x, y)
{
    this.currentPath.shape.points.push(x, y);
    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a quadratic bezier curve and then draws it.
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Graphics}
 */
Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY)
{
    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length === 0)
        {
            this.currentPath.shape.points = [0, 0];
        }
    }
    else
    {
        this.moveTo(0,0);
    }

    var xa,
        ya,
        n = 20,
        points = this.currentPath.shape.points;

    if (points.length === 0)
    {
        this.moveTo(0, 0);
    }

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;
    for (var i = 1; i <= n; ++i)
    {
        j = i / n;

        xa = fromX + ( (cpX - fromX) * j );
        ya = fromY + ( (cpY - fromY) * j );

        points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
                     ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
    }

    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param cpX2 {number} Second Control point x
 * @param cpY2 {number} Second Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Graphics}
 */
Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY)
{
    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length === 0)
        {
            this.currentPath.shape.points = [0, 0];
        }
    }
    else
    {
        this.moveTo(0,0);
    }

    var n = 20,
        dt,
        dt2,
        dt3,
        t2,
        t3,
        points = this.currentPath.shape.points;

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;

    for (var i = 1; i <= n; ++i)
    {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        points.push( dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
                     dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }

    this.dirty = true;

    return this;
};

/**
 * The arcTo() method creates an arc/curve between two tangents on the canvas.
 *
 * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
 *
 * @param x1 {number} The x-coordinate of the beginning of the arc
 * @param y1 {number} The y-coordinate of the beginning of the arc
 * @param x2 {number} The x-coordinate of the end of the arc
 * @param y2 {number} The y-coordinate of the end of the arc
 * @param radius {number} The radius of the arc
 * @return {Graphics}
 */
Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius)
{
    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length === 0)
        {
            this.currentPath.shape.points.push(x1, y1);
        }
    }
    else
    {
        this.moveTo(x1, y1);
    }

    var points = this.currentPath.shape.points,
        fromX = points[points.length-2],
        fromY = points[points.length-1],
        a1 = fromY - y1,
        b1 = fromX - x1,
        a2 = y2   - y1,
        b2 = x2   - x1,
        mm = Math.abs(a1 * b2 - b1 * a2);

    if (mm < 1.0e-8 || radius === 0)
    {
        if (points[points.length-2] !== x1 || points[points.length-1] !== y1)
        {
            points.push(x1, y1);
        }
    }
    else
    {
        var dd = a1 * a1 + b1 * b1,
            cc = a2 * a2 + b2 * b2,
            tt = a1 * a2 + b1 * b2,
            k1 = radius * Math.sqrt(dd) / mm,
            k2 = radius * Math.sqrt(cc) / mm,
            j1 = k1 * tt / dd,
            j2 = k2 * tt / cc,
            cx = k1 * b2 + k2 * b1,
            cy = k1 * a2 + k2 * a1,
            px = b1 * (k2 + j1),
            py = a1 * (k2 + j1),
            qx = b2 * (k1 + j2),
            qy = a2 * (k1 + j2),
            startAngle = Math.atan2(py - cy, px - cx),
            endAngle   = Math.atan2(qy - cy, qx - cx);

        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
    }

    this.dirty = true;

    return this;
};

/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @param cx {number} The x-coordinate of the center of the circle
 * @param cy {number} The y-coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @param startAngle {number} The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param endAngle {number} The ending angle, in radians
 * @param anticlockwise {boolean} Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @return {Graphics}
 */
Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise)
{
    var startX = cx + Math.cos(startAngle) * radius;
    var startY = cy + Math.sin(startAngle) * radius;
    var points;

    if( this.currentPath )
    {
        points = this.currentPath.shape.points;

        if(points.length === 0)
        {
            points.push(startX, startY);
        }
        else if( points[points.length-2] !== startX || points[points.length-1] !== startY)
        {
            points.push(startX, startY);
        }
    }
    else
    {
        this.moveTo(startX, startY);
        points = this.currentPath.shape.points;
    }

    if (startAngle === endAngle)
    {
        return this;
    }

    if( !anticlockwise && endAngle <= startAngle )
    {
        endAngle += Math.PI * 2;
    }
    else if( anticlockwise && startAngle <= endAngle )
    {
        startAngle += Math.PI * 2;
    }

    var sweep = anticlockwise ? (startAngle - endAngle) *-1 : (endAngle - startAngle);
    var segs =  Math.ceil( Math.abs(sweep)/ (Math.PI * 2) ) * 40;

    if( sweep === 0 )
    {
        return this;
    }

    var theta = sweep/(segs*2);
    var theta2 = theta*2;

    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);

    var segMinus = segs - 1;

    var remainder = ( segMinus % 1 ) / segMinus;

    for(var i=0; i<=segMinus; i++)
    {
        var real =  i + remainder * i;


        var angle = ((theta) + startAngle + (theta2 * real));

        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
                    ( (cTheta * -s) + (sTheta * c) ) * radius + cy);
    }

    this.dirty = true;

    return this;
};

/**
 * Specifies a simple one-color fill that subsequent calls to other Graphics methods
 * (such as lineTo() or drawCircle()) use when drawing.
 *
 * @param color {number} the color of the fill
 * @param alpha {number} the alpha of the fill
 * @return {Graphics}
 */
Graphics.prototype.beginFill = function (color, alpha)
{
    this.filling = true;
    this.fillColor = color || 0;
    this.fillAlpha = (alpha === undefined) ? 1 : alpha;

    if (this.currentPath)
    {
        if (this.currentPath.shape.points.length <= 2)
        {
            this.currentPath.fill = this.filling;
            this.currentPath.fillColor = this.fillColor;
            this.currentPath.fillAlpha = this.fillAlpha;
        }
    }
    return this;
};

/**
 * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
 *
 * @return {Graphics}
 */
Graphics.prototype.endFill = function ()
{
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;

    return this;
};

/**
 *
 * @param x {number} The X coord of the top-left of the rectangle
 * @param y {number} The Y coord of the top-left of the rectangle
 * @param width {number} The width of the rectangle
 * @param height {number} The height of the rectangle
 * @return {Graphics}
 */
Graphics.prototype.drawRect = function ( x, y, width, height )
{
    this.drawShape(new math.Rectangle(x,y, width, height));

    return this;
};

/**
 *
 * @param x {number} The X coord of the top-left of the rectangle
 * @param y {number} The Y coord of the top-left of the rectangle
 * @param width {number} The width of the rectangle
 * @param height {number} The height of the rectangle
 * @param radius {number} Radius of the rectangle corners
 */
Graphics.prototype.drawRoundedRect = function ( x, y, width, height, radius )
{
    this.drawShape(new math.RoundedRectangle(x, y, width, height, radius));

    return this;
};

/**
 * Draws a circle.
 *
 * @param x {number} The X coordinate of the center of the circle
 * @param y {number} The Y coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @return {Graphics}
 */
Graphics.prototype.drawCircle = function (x, y, radius)
{
    this.drawShape(new math.Circle(x,y, radius));

    return this;
};

/**
 * Draws an ellipse.
 *
 * @param x {number} The X coordinate of the center of the ellipse
 * @param y {number} The Y coordinate of the center of the ellipse
 * @param width {number} The half width of the ellipse
 * @param height {number} The half height of the ellipse
 * @return {Graphics}
 */
Graphics.prototype.drawEllipse = function (x, y, width, height)
{
    this.drawShape(new math.Ellipse(x, y, width, height));

    return this;
};

/**
 * Draws a polygon using the given path.
 *
 * @param path {Array} The path data used to construct the polygon.
 * @return {Graphics}
 */
Graphics.prototype.drawPolygon = function (path)
{
    if (!(path instanceof Array))
    {
        path = Array.prototype.slice.call(arguments);
    }

    this.drawShape(new math.Polygon(path));

    return this;
};

/**
 * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
 *
 * @return {Graphics}
 */
Graphics.prototype.clear = function ()
{
    this.lineWidth = 0;
    this.filling = false;

    this.dirty = true;
    this.clearDirty = true;
    this.graphicsData = [];

    return this;
};

/**
 * Useful function that returns a texture of the graphics object that can then be used to create sprites
 * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
 *
 * @param resolution {number} The resolution of the texture being generated
 * @param scaleMode {number} Should be one of the scaleMode consts
 * @return {Texture} a texture of the graphics object
 */
Graphics.prototype.generateTexture = function (resolution, scaleMode)
{
    resolution = resolution || 1;

    var bounds = this.getBounds();

    var canvasBuffer = new CanvasBuffer(bounds.width * resolution, bounds.height * resolution);

    var texture = Texture.fromCanvas(canvasBuffer.canvas, scaleMode);
    texture.baseTexture.resolution = resolution;

    canvasBuffer.context.scale(resolution, resolution);

    canvasBuffer.context.translate(-bounds.x,-bounds.y);

    CanvasGraphics.renderGraphics(this, canvasBuffer.context);

    return texture;
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer}
 */
Graphics.prototype._renderWebGL = function (renderer)
{
    // if the sprite is not visible or the alpha is 0 then no need to render this element

    // this code may still be needed so leaving for now..
    //
    /*
    if (this._cacheAsBitmap)
    {
        if (this.dirty || this.cachedSpriteDirty)
        {
            this._generateCachedSprite();

            // we will also need to update the texture on the gpu too!
            this.updateCachedSpriteTexture();

            this.cachedSpriteDirty = false;
            this.dirty = false;
        }

        this._cachedSprite.worldAlpha = this.worldAlpha;

        Sprite.prototype.renderWebGL.call(this._cachedSprite, renderer);

        return;
    }

    */

    if (this.glDirty)
    {
        this.dirty = true;
        this.glDirty = false;
    }

    renderer.setObjectRenderer(renderer.plugins.graphics);
    renderer.plugins.graphics.render(this);

};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer}
 * @private
 */
Graphics.prototype._renderCanvas = function (renderer)
{
    if (this.isMask === true)
    {
        return;
    }

    // if the tint has changed, set the graphics object to dirty.
    if (this._prevTint !== this.tint) {
        this.dirty = true;
        this._prevTint = this.tint;
    }

    if (this._cacheAsBitmap)
    {
        if (this.dirty || this.cachedSpriteDirty)
        {
            this._generateCachedSprite();

            // we will also need to update the texture
            this.updateCachedSpriteTexture();

            this.cachedSpriteDirty = false;
            this.dirty = false;
        }

        this._cachedSprite.alpha = this.alpha;

        Sprite.prototype._renderCanvas.call(this._cachedSprite, renderer);

        return;
    }
    else
    {
        var context = renderer.context;
        var transform = this.worldTransform;

        if (this.blendMode !== renderer.currentBlendMode)
        {
            renderer.currentBlendMode = this.blendMode;
            context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
        }

        var resolution = renderer.resolution;
        context.setTransform(
            transform.a * resolution,
            transform.b * resolution,
            transform.c * resolution,
            transform.d * resolution,
            transform.tx * resolution,
            transform.ty * resolution
        );

        CanvasGraphics.renderGraphics(this, context);
    }
};

/**
 * Retrieves the bounds of the graphic shape as a rectangle object
 *
 * @return {Rectangle} the rectangular bounding area
 */
Graphics.prototype.getBounds = function (matrix)
{
    if(!this._currentBounds)
    {

        // return an empty object if the item is a mask!
        if (!this.renderable)
        {
            return math.Rectangle.EMPTY;
        }

        if (this.dirty)
        {
            this.updateLocalBounds();

            this.glDirty = true;
            this.cachedSpriteDirty = true;
            this.dirty = false;
        }

        var bounds = this._localBounds;

        var w0 = bounds.x;
        var w1 = bounds.width + bounds.x;

        var h0 = bounds.y;
        var h1 = bounds.height + bounds.y;

        var worldTransform = matrix || this.worldTransform;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 =  a * w1 + c * h0 + tx;
        var y4 =  d * h0 + b * w1 + ty;

        var maxX = x1;
        var maxY = y1;

        var minX = x1;
        var minY = y1;

        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;

        this._bounds.x = minX;
        this._bounds.width = maxX - minX;

        this._bounds.y = minY;
        this._bounds.height = maxY - minY;

        this._currentBounds = this._bounds;
    }

    return this._currentBounds;
};

/**
* Tests if a point is inside this graphics object
*
* @param point {Point} the point to test
* @return {boolean} the result of the test
*/
Graphics.prototype.containsPoint = function( point )
{
    this.worldTransform.applyInverse(point,  tempPoint);

    var graphicsData = this.graphicsData;

    for (var i = 0; i < graphicsData.length; i++)
    {
        var data = graphicsData[i];

        if (!data.fill)
        {
            continue;
        }

        // only deal with fills..
        if (data.shape)
        {
            if ( data.shape.contains( tempPoint.x, tempPoint.y ) )
            {
                return true;
            }
        }
    }

    return false;
};

/**
 * Update the bounds of the object
 *
 */
Graphics.prototype.updateLocalBounds = function ()
{
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    if (this.graphicsData.length)
    {
        var shape, points, x, y, w, h;

        for (var i = 0; i < this.graphicsData.length; i++)
        {
            var data = this.graphicsData[i];
            var type = data.type;
            var lineWidth = data.lineWidth;
            shape = data.shape;

            if (type === CONST.SHAPES.RECT || type === CONST.SHAPES.RREC)
            {
                x = shape.x - lineWidth/2;
                y = shape.y - lineWidth/2;
                w = shape.width + lineWidth;
                h = shape.height + lineWidth;

                minX = x < minX ? x : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y < minY ? y : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else if (type === CONST.SHAPES.CIRC)
            {
                x = shape.x;
                y = shape.y;
                w = shape.radius + lineWidth/2;
                h = shape.radius + lineWidth/2;

                minX = x - w < minX ? x - w : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y - h < minY ? y - h : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else if (type === CONST.SHAPES.ELIP)
            {
                x = shape.x;
                y = shape.y;
                w = shape.width + lineWidth/2;
                h = shape.height + lineWidth/2;

                minX = x - w < minX ? x - w : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y - h < minY ? y - h : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else
            {
                // POLY
                points = shape.points;

                for (var j = 0; j < points.length; j += 2)
                {
                    x = points[j];
                    y = points[j+1];

                    minX = x-lineWidth < minX ? x-lineWidth : minX;
                    maxX = x+lineWidth > maxX ? x+lineWidth : maxX;

                    minY = y-lineWidth < minY ? y-lineWidth : minY;
                    maxY = y+lineWidth > maxY ? y+lineWidth : maxY;
                }
            }
        }
    }
    else
    {
        minX = 0;
        maxX = 0;
        minY = 0;
        maxY = 0;
    }

    var padding = this.boundsPadding;

    this._localBounds.x = minX - padding;
    this._localBounds.width = (maxX - minX) + padding * 2;

    this._localBounds.y = minY - padding;
    this._localBounds.height = (maxY - minY) + padding * 2;
};

/**
 * Generates the cached sprite when the sprite has cacheAsBitmap = true
 *
 * @private
 */
/*
Graphics.prototype._generateCachedSprite = function ()
{
    var bounds = this.getLocalBounds();

    if (!this._cachedSprite)
    {
        var canvasBuffer = new CanvasBuffer(bounds.width, bounds.height);
        var texture = Texture.fromCanvas(canvasBuffer.canvas);

        this._cachedSprite = new Sprite(texture);
        this._cachedSprite.buffer = canvasBuffer;

        this._cachedSprite.worldTransform = this.worldTransform;
    }
    else
    {
        this._cachedSprite.buffer.resize(bounds.width, bounds.height);
    }

    // leverage the anchor to account for the offset of the element
    this._cachedSprite.anchor.x = -( bounds.x / bounds.width );
    this._cachedSprite.anchor.y = -( bounds.y / bounds.height );

    // this._cachedSprite.buffer.context.save();
    this._cachedSprite.buffer.context.translate(-bounds.x,-bounds.y);

    // make sure we set the alpha of the graphics to 1 for the render..
    this.worldAlpha = 1;

    // now render the graphic..
    CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);

    this._cachedSprite.alpha = this.alpha;
};
*/
/**
 * Updates texture size based on canvas size
 *
 * @private
 */
/*
Graphics.prototype.updateCachedSpriteTexture = function ()
{
    var cachedSprite = this._cachedSprite;
    var texture = cachedSprite.texture;
    var canvas = cachedSprite.buffer.canvas;

    texture.baseTexture.width = canvas.width;
    texture.baseTexture.height = canvas.height;
    texture.crop.width = texture.frame.width = canvas.width;
    texture.crop.height = texture.frame.height = canvas.height;

    cachedSprite._width = canvas.width;
    cachedSprite._height = canvas.height;

    // update the dirty base textures
    texture.baseTexture.dirty();
};*/

/**
 * Destroys a previous cached sprite.
 *
 */
/*
Graphics.prototype.destroyCachedSprite = function ()
{
    this._cachedSprite.texture.destroy(true);

    // let the gc collect the unused sprite
    // TODO could be object pooled!
    this._cachedSprite = null;
};*/

/**
 * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
 *
 * @param shape {Circle|Rectangle|Ellipse|Line|Polygon} The shape object to draw.
 * @return {GraphicsData} The generated GraphicsData object.
 */
Graphics.prototype.drawShape = function (shape)
{
    if (this.currentPath)
    {
        // check current path!
        if (this.currentPath.shape.points.length <= 2)
        {
            this.graphicsData.pop();
        }
    }

    this.currentPath = null;

    var data = new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, shape);

    this.graphicsData.push(data);

    if (data.type === CONST.SHAPES.POLY)
    {
        data.shape.closed = this.filling;
        this.currentPath = data;
    }

    this.dirty = true;

    return data;
};

},{"../const":3,"../display/Container":4,"../math":13,"../renderers/canvas/utils/CanvasBuffer":25,"../renderers/canvas/utils/CanvasGraphics":26,"../sprites/Sprite":47,"../textures/Texture":51,"./GraphicsData":7}],7:[function(require,module,exports){
/**
 * A GraphicsData object.
 *
 * @class
 * @memberof PIXI
 * @param lineWidth {number} the width of the line to draw
 * @param lineColor {number} the color of the line to draw
 * @param lineAlpha {number} the alpha of the line to draw
 * @param fillColor {number} the color of the fill
 * @param fillAlpha {number} the alpha of the fill
 * @param fill      {boolean} whether or not the shape is filled with a colour
 * @param shape     {Circle|Rectangle|Ellipse|Line|Polygon} The shape object to draw.
 */
function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape)
{
    /* 
     * @member {number} the width of the line to draw
     */
    this.lineWidth = lineWidth;

    /* 
     * @member {number} the color of the line to draw
     */
    this.lineColor = lineColor;
    /* 
     * @member {number} the alpha of the line to draw
     */
    this.lineAlpha = lineAlpha;
    /* 
     * @member {number} cached tint of the line to draw
     */
    this._lineTint = lineColor;

    /* 
     * @member {number} the color of the fill
     */
    this.fillColor = fillColor;

    /* 
     * @member {number} the alpha of the fill
     */
    this.fillAlpha = fillAlpha;

    /* 
     * @member {number} cached tint of the fill
     */
    this._fillTint = fillColor;

    /* 
     * @member {boolean} whether or not the shape is filled with a colour
     */
    this.fill = fill;

    /* 
     * @member {Circle|Rectangle|Ellipse|Line|Polygon} The shape object to draw.
     */
    this.shape = shape;

    /* 
     * @member {number} The type of the shape, see the Const.Shapes file for all the existing types, 
     */
    this.type = shape.type;
}

GraphicsData.prototype.constructor = GraphicsData;
module.exports = GraphicsData;

/**
 * Creates a new GraphicsData object with the same values as this one.
 *
 * @return {GraphicsData}
 */
GraphicsData.prototype.clone = function ()
{
    return new GraphicsData(
        this.lineWidth,
        this.lineColor,
        this.lineAlpha,
        this.fillColor,
        this.fillAlpha,
        this.fill,
        this.shape
    );
};

},{}],8:[function(require,module,exports){
var utils = require('../../utils'),
    math = require('../../math'),
    CONST = require('../../const'),
    ObjectRenderer = require('../../renderers/webgl/utils/ObjectRenderer'),
    WebGLRenderer = require('../../renderers/webgl/WebGLRenderer'),
    WebGLGraphicsData = require('./WebGLGraphicsData');

/**
 * Renders the graphics object.
 *
 * @class
 * @private
 * @memberof PIXI
 * @extends ObjectRenderer
 * @param renderer {WebGLRenderer} The renderer this object renderer works for.
 */
function GraphicsRenderer(renderer)
{
    ObjectRenderer.call(this, renderer);

    this.graphicsDataPool = [];

    this.primitiveShader = null;
    this.complexPrimitiveShader = null;
}

GraphicsRenderer.prototype = Object.create(ObjectRenderer.prototype);
GraphicsRenderer.prototype.constructor = GraphicsRenderer;
module.exports = GraphicsRenderer;

WebGLRenderer.registerPlugin('graphics', GraphicsRenderer);

/**
 * Called when there is a WebGL context change
 *
 * @private
 *
 */
GraphicsRenderer.prototype.onContextChange = function()
{

};

/**
 * Destroys this renderer.
 *
 */
GraphicsRenderer.prototype.destroy = function () {
    ObjectRenderer.prototype.destroy.call(this);

    this.graphicsDataPool = null;
};

/**
 * Renders a graphics object.
 *
 * @param graphics {Graphics} The graphics object to render.
 */
GraphicsRenderer.prototype.render = function(graphics)
{
    var renderer = this.renderer;
    var gl = renderer.gl;

    var shader = renderer.shaderManager.plugins.primitiveShader,
        webGLData;

    if (graphics.dirty)
    {
        this.updateGraphics(graphics, gl);
    }

    var webGL = graphics._webGL[gl.id];

    // This  could be speeded up for sure!

    renderer.blendModeManager.setBlendMode( graphics.blendMode );

//    var matrix =  graphics.worldTransform.clone();
//    var matrix =  renderer.currentRenderTarget.projectionMatrix.clone();
//    matrix.append(graphics.worldTransform);

    for (var i = 0; i < webGL.data.length; i++)
    {
        if (webGL.data[i].mode === 1)
        {
            webGLData = webGL.data[i];

            renderer.stencilManager.pushStencil(graphics, webGLData, renderer);

            // render quad..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

            renderer.stencilManager.popStencil(graphics, webGLData, renderer);
        }
        else
        {
            webGLData = webGL.data[i];


            shader = renderer.shaderManager.primitiveShader;

            renderer.shaderManager.setShader( shader );//activatePrimitiveShader();

            gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));

            gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, renderer.currentRenderTarget.projectionMatrix.toArray(true));

            gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));

            gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);


            gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

            gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
            gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false,4 * 6, 2 * 4);

            // set the index buffer!
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );
        }
    }
};

/**
 * Updates the graphics object
 *
 * @private
 * @param graphicsData {Graphics} The graphics object to update
 */
GraphicsRenderer.prototype.updateGraphics = function(graphics)
{
    var gl = this.renderer.gl;

     // get the contexts graphics object
    var webGL = graphics._webGL[gl.id];

    // if the graphics object does not exist in the webGL context time to create it!
    if (!webGL)
    {
        webGL = graphics._webGL[gl.id] = {lastIndex:0, data:[], gl:gl};
    }

    // flag the graphics as not dirty as we are about to update it...
    graphics.dirty = false;

    var i;

    // if the user cleared the graphics object we will need to clear every object
    if (graphics.clearDirty)
    {
        graphics.clearDirty = false;

        // lop through and return all the webGLDatas to the object pool so than can be reused later on
        for (i = 0; i < webGL.data.length; i++)
        {
            var graphicsData = webGL.data[i];
            graphicsData.reset();
            this.graphicsDataPool.push( graphicsData );
        }

        // clear the array and reset the index..
        webGL.data = [];
        webGL.lastIndex = 0;
    }

    var webGLData;

    // loop through the graphics datas and construct each one..
    // if the object is a complex fill then the new stencil buffer technique will be used
    // other wise graphics objects will be pushed into a batch..
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];

        if (data.type === CONST.SHAPES.POLY)
        {
            // need to add the points the the graphics object..
            data.points = data.shape.points.slice();
            if (data.shape.closed)
            {
                // close the poly if the value is true!
                if (data.points[0] !== data.points[data.points.length-2] || data.points[1] !== data.points[data.points.length-1])
                {
                    data.points.push(data.points[0], data.points[1]);
                }
            }

            // MAKE SURE WE HAVE THE CORRECT TYPE..
            if (data.fill)
            {
                if (data.points.length >= 6)
                {
                    if (data.points.length < 6 * 2)
                    {
                        webGLData = this.switchMode(webGL, 0);

                        var canDrawUsingSimple = this.buildPoly(data, webGLData);
                   //     console.log(canDrawUsingSimple);

                        if (!canDrawUsingSimple)
                        {
                        //    console.log("<>>>")
                            webGLData = this.switchMode(webGL, 1);
                            this.buildComplexPoly(data, webGLData);
                        }

                    }
                    else
                    {
                        webGLData = this.switchMode(webGL, 1);
                        this.buildComplexPoly(data, webGLData);
                    }
                }
            }

            if (data.lineWidth > 0)
            {
                webGLData = this.switchMode(webGL, 0);
                this.buildLine(data, webGLData);
            }
        }
        else
        {
            webGLData = this.switchMode(webGL, 0);

            if (data.type === CONST.SHAPES.RECT)
            {
                this.buildRectangle(data, webGLData);
            }
            else if (data.type === CONST.SHAPES.CIRC || data.type === CONST.SHAPES.ELIP)
            {
                this.buildCircle(data, webGLData);
            }
            else if (data.type === CONST.SHAPES.RREC)
            {
                this.buildRoundedRectangle(data, webGLData);
            }
        }

        webGL.lastIndex++;
    }

    // upload all the dirty data...
    for (i = 0; i < webGL.data.length; i++)
    {
        webGLData = webGL.data[i];

        if (webGLData.dirty)
        {
            webGLData.upload();
        }
    }
};

/**
 *
 *
 * @private
 * @param webGL {WebGLRenderingContext} the current WebGL drawing context
 * @param type {number} TODO @Alvin
 */
GraphicsRenderer.prototype.switchMode = function (webGL, type)
{
    var webGLData;

    if (!webGL.data.length)
    {
        webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
        webGLData.mode = type;
        webGL.data.push(webGLData);
    }
    else
    {
        webGLData = webGL.data[webGL.data.length-1];

        if ((webGLData.points.length > 320000) || webGLData.mode !== type || type === 1)
        {
            webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
            webGLData.mode = type;
            webGL.data.push(webGLData);
        }
    }

    webGLData.dirty = true;

    return webGLData;
};

/**
 * Builds a rectangle to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildRectangle = function (graphicsData, webGLData)
{
    // --- //
    // need to convert points to a nice regular data
    //
    var rectData = graphicsData.shape;
    var x = rectData.x;
    var y = rectData.y;
    var width = rectData.width;
    var height = rectData.height;

    if (graphicsData.fill)
    {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vertPos = verts.length/6;

        // start
        verts.push(x, y);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y);
        verts.push(r, g, b, alpha);

        verts.push(x , y + height);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y + height);
        verts.push(r, g, b, alpha);

        // insert 2 dead triangles..
        indices.push(vertPos, vertPos, vertPos+1, vertPos+2, vertPos+3, vertPos+3);
    }

    if (graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = [x, y,
                  x + width, y,
                  x + width, y + height,
                  x, y + height,
                  x, y];


        this.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a rounded rectangle to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildRoundedRectangle = function (graphicsData, webGLData)
{
    var rrectData = graphicsData.shape;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;

    var radius = rrectData.radius;

    var recPoints = [];
    recPoints.push(x, y + radius);
    recPoints = recPoints.concat(this.quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height));
    recPoints = recPoints.concat(this.quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
    recPoints = recPoints.concat(this.quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y));
    recPoints = recPoints.concat(this.quadraticBezierCurve(x + radius, y, x, y, x, y + radius));

    if (graphicsData.fill)
    {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        //TODO use this https://github.com/mapbox/earcut
        var triangles = utils.PolyK.Triangulate(recPoints);

        //

        var i = 0;
        for (i = 0; i < triangles.length; i+=3)
        {
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i+1] + vecPos);
            indices.push(triangles[i+2] + vecPos);
            indices.push(triangles[i+2] + vecPos);
        }

        for (i = 0; i < recPoints.length; i++)
        {
            verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = recPoints;

        this.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @private
 * @param fromX {number} Origin point x
 * @param fromY {number} Origin point x
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {number[]} an array of points
 */
GraphicsRenderer.prototype.quadraticBezierCurve = function (fromX, fromY, cpX, cpY, toX, toY)
{

    var xa,
        ya,
        xb,
        yb,
        x,
        y,
        n = 20,
        points = [];

    function getPt(n1 , n2, perc) {
        var diff = n2 - n1;

        return n1 + ( diff * perc );
    }

    var j = 0;
    for (var i = 0; i <= n; i++ ) {
        j = i / n;

        // The Green Line
        xa = getPt( fromX , cpX , j );
        ya = getPt( fromY , cpY , j );
        xb = getPt( cpX , toX , j );
        yb = getPt( cpY , toY , j );

        // The Black Dot
        x = getPt( xa , xb , j );
        y = getPt( ya , yb , j );

        points.push(x, y);
    }
    return points;
};

/**
 * Builds a circle to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object to draw
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildCircle = function (graphicsData, webGLData)
{
    // need to convert points to a nice regular data
    var circleData = graphicsData.shape;
    var x = circleData.x;
    var y = circleData.y;
    var width;
    var height;

    // TODO - bit hacky??
    if (graphicsData.type === CONST.SHAPES.CIRC)
    {
        width = circleData.radius;
        height = circleData.radius;
    }
    else
    {
        width = circleData.width;
        height = circleData.height;
    }

    var totalSegs = 40;
    var seg = (Math.PI * 2) / totalSegs ;

    var i = 0;

    if (graphicsData.fill)
    {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        indices.push(vecPos);

        for (i = 0; i < totalSegs + 1 ; i++)
        {
            verts.push(x,y, r, g, b, alpha);

            verts.push(x + Math.sin(seg * i) * width,
                       y + Math.cos(seg * i) * height,
                       r, g, b, alpha);

            indices.push(vecPos++, vecPos++);
        }

        indices.push(vecPos-1);
    }

    if (graphicsData.lineWidth)
    {
        var tempPoints = graphicsData.points;

        graphicsData.points = [];

        for (i = 0; i < totalSegs + 1; i++)
        {
            graphicsData.points.push(x + Math.sin(seg * i) * width,
                                     y + Math.cos(seg * i) * height);
        }

        this.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a line to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildLine = function (graphicsData, webGLData)
{
    // TODO OPTIMISE!
    var i = 0;
    var points = graphicsData.points;

    if (points.length === 0)
    {
        return;
    }

    // if the line width is an odd number add 0.5 to align to a whole pixel
    if (graphicsData.lineWidth%2)
    {
        for (i = 0; i < points.length; i++)
        {
            points[i] += 0.5;
        }
    }

    // get first and last point.. figure out the middle!
    var firstPoint = new math.Point(points[0], points[1]);
    var lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

    // if the first point is the last point - gonna have issues :)
    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y)
    {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();

        points.pop();
        points.pop();

        lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) *0.5;
        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) *0.5;

        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }

    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length/6;

    // DRAW the Line
    var width = graphicsData.lineWidth / 2;

    // sort color
    var color = utils.hex2rgb(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var px, py, p1x, p1y, p2x, p2y, p3x, p3y;
    var perpx, perpy, perp2x, perp2y, perp3x, perp3y;
    var a1, b1, c1, a2, b2, c2;
    var denom, pdist, dist;

    p1x = points[0];
    p1y = points[1];

    p2x = points[2];
    p2y = points[3];

    perpx = -(p1y - p2y);
    perpy =  p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);

    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    // start
    verts.push(p1x - perpx , p1y - perpy,
                r, g, b, alpha);

    verts.push(p1x + perpx , p1y + perpy,
                r, g, b, alpha);

    for (i = 1; i < length-1; i++)
    {
        p1x = points[(i-1)*2];
        p1y = points[(i-1)*2 + 1];

        p2x = points[(i)*2];
        p2y = points[(i)*2 + 1];

        p3x = points[(i+1)*2];
        p3y = points[(i+1)*2 + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx*perpx + perpy*perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;

        dist = Math.sqrt(perp2x*perp2x + perp2y*perp2y);
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;

        a1 = (-perpy + p1y) - (-perpy + p2y);
        b1 = (-perpx + p2x) - (-perpx + p1x);
        c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
        a2 = (-perp2y + p3y) - (-perp2y + p2y);
        b2 = (-perp2x + p2x) - (-perp2x + p3x);
        c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

        denom = a1*b2 - a2*b1;

        if (Math.abs(denom) < 0.1 )
        {

            denom+=10.1;
            verts.push(p2x - perpx , p2y - perpy,
                r, g, b, alpha);

            verts.push(p2x + perpx , p2y + perpy,
                r, g, b, alpha);

            continue;
        }

        px = (b1*c2 - b2*c1)/denom;
        py = (a2*c1 - a1*c2)/denom;


        pdist = (px -p2x) * (px -p2x) + (py -p2y) + (py -p2y);


        if (pdist > 140 * 140)
        {
            perp3x = perpx - perp2x;
            perp3y = perpy - perp2y;

            dist = Math.sqrt(perp3x*perp3x + perp3y*perp3y);
            perp3x /= dist;
            perp3y /= dist;
            perp3x *= width;
            perp3y *= width;

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x + perp3x, p2y +perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            indexCount++;
        }
        else
        {

            verts.push(px , py);
            verts.push(r, g, b, alpha);

            verts.push(p2x - (px-p2x), p2y - (py - p2y));
            verts.push(r, g, b, alpha);
        }
    }

    p1x = points[(length-2)*2];
    p1y = points[(length-2)*2 + 1];

    p2x = points[(length-1)*2];
    p2y = points[(length-1)*2 + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    verts.push(p2x - perpx , p2y - perpy);
    verts.push(r, g, b, alpha);

    verts.push(p2x + perpx , p2y + perpy);
    verts.push(r, g, b, alpha);

    indices.push(indexStart);

    for (i = 0; i < indexCount; i++)
    {
        indices.push(indexStart++);
    }

    indices.push(indexStart-1);
};

/**
 * Builds a complex polygon to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildComplexPoly = function (graphicsData, webGLData)
{
    //TODO - no need to copy this as it gets turned into a FLoat32Array anyways..
    var points = graphicsData.points.slice();

    if (points.length < 6)
    {
        return;
    }

    // get first and last point.. figure out the middle!
    var indices = webGLData.indices;
    webGLData.points = points;
    webGLData.alpha = graphicsData.fillAlpha;
    webGLData.color = utils.hex2rgb(graphicsData.fillColor);

    // calclate the bounds..
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    var x,y;

    // get size..
    for (var i = 0; i < points.length; i+=2)
    {
        x = points[i];
        y = points[i+1];

        minX = x < minX ? x : minX;
        maxX = x > maxX ? x : maxX;

        minY = y < minY ? y : minY;
        maxY = y > maxY ? y : maxY;
    }

    // add a quad to the end cos there is no point making another buffer!
    points.push(minX, minY,
                maxX, minY,
                maxX, maxY,
                minX, maxY);

    // push a quad onto the end..

    //TODO - this aint needed!
    var length = points.length / 2;
    for (i = 0; i < length; i++)
    {
        indices.push( i );
    }

};

/**
 * Builds a polygon to draw
 *
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
GraphicsRenderer.prototype.buildPoly = function (graphicsData, webGLData)
{
    var points = graphicsData.points;

    if (points.length < 6)
    {
        return;
    }

    // get first and last point.. figure out the middle!
    var verts = webGLData.points;
    var indices = webGLData.indices;

    var length = points.length / 2;

    // sort color
    var color = utils.hex2rgb(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var triangles = utils.PolyK.Triangulate(points);

    if (!triangles) {
        return false;
    }

    var vertPos = verts.length / 6;

    var i = 0;

    for (i = 0; i < triangles.length; i+=3)
    {
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i+1] + vertPos);
        indices.push(triangles[i+2] +vertPos);
        indices.push(triangles[i+2] + vertPos);
    }

    for (i = 0; i < length; i++)
    {
        verts.push(points[i * 2], points[i * 2 + 1],
                   r, g, b, alpha);
    }

    return true;
};

},{"../../const":3,"../../math":13,"../../renderers/webgl/WebGLRenderer":29,"../../renderers/webgl/utils/ObjectRenderer":43,"../../utils":58,"./WebGLGraphicsData":9}],9:[function(require,module,exports){
/**
 * An object containing WebGL specific properties to be used by the WebGL renderer
 *
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 * @private
 */
function WebGLGraphicsData(gl) {

    /**
     * The current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    //TODO does this need to be split before uploding??
    /**
     * An array of color components (r,g,b)
     * @member {Array}
     */
    this.color = [0,0,0]; // color split!

    /**
     * An array of points to draw
     * @member {Array}
     */
    this.points = [];

    /**
     * The indices of the vertices
     * @member {Array}
     */
    this.indices = [];
    /**
     * The main buffer
     * @member {WebGLBuffer}
     */
    this.buffer = gl.createBuffer();

    /**
     * The index buffer
     * @member {WebGLBuffer}
     */
    this.indexBuffer = gl.createBuffer();

    /**
     * todo @alvin
     * @member {number}
     */
    this.mode = 1;

    /**
     * The alpha of the graphics
     * @member {number}
     */
    this.alpha = 1;

    /**
     * Whether this graphics is dirty or not
     * @member {boolean}
     */
    this.dirty = true;
}

WebGLGraphicsData.prototype.constructor = WebGLGraphicsData;
module.exports = WebGLGraphicsData;

/**
 * Resets the vertices and the indices
 */
WebGLGraphicsData.prototype.reset = function () {
    this.points = [];
    this.indices = [];
};

/**
 * Binds the buffers and uploads the data
 */
WebGLGraphicsData.prototype.upload = function () {
    var gl = this.gl;

//    this.lastIndex = graphics.graphicsData.length;
    this.glPoints = new Float32Array(this.points);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.glPoints, gl.STATIC_DRAW);

    this.glIndices = new Uint16Array(this.indices);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.glIndices, gl.STATIC_DRAW);

    this.dirty = false;
};

},{}],10:[function(require,module,exports){
/**
 * @file        Main export of the PIXI core library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
var core = module.exports = {
    // utils
    utils: require('./utils'),
    math: require('./math'),
    CONST: require('./const'),

    // display
    DisplayObject:          require('./display/DisplayObject'),
    Container:              require('./display/Container'),

    // legacy..
    Stage:                  require('./display/Container'),
    DisplayObjectContainer: require('./display/Container'),

    Sprite:                 require('./sprites/Sprite'),
    ParticleContainer:      require('./particles/ParticleContainer'),
    SpriteRenderer:         require('./sprites/webgl/SpriteRenderer'),
    ParticleRenderer:       require('./particles/webgl/ParticleRenderer'),

    // primitives
    Graphics:               require('./graphics/Graphics'),
    GraphicsData:           require('./graphics/GraphicsData'),
    GraphicsRenderer:       require('./graphics/webgl/GraphicsRenderer'),

    // textures
    Texture:                require('./textures/Texture'),
    BaseTexture:            require('./textures/BaseTexture'),
    RenderTexture:          require('./textures/RenderTexture'),
    VideoBaseTexture:       require('./textures/VideoBaseTexture'),

    // renderers - canvas
    CanvasRenderer:         require('./renderers/canvas/CanvasRenderer'),
    CanvasGraphics:         require('./renderers/canvas/utils/CanvasGraphics'),
    CanvasBuffer:           require('./renderers/canvas/utils/CanvasBuffer'),

    // renderers - webgl
    WebGLRenderer:          require('./renderers/webgl/WebGLRenderer'),
    ShaderManager:          require('./renderers/webgl/managers/ShaderManager'),
    Shader:                 require('./renderers/webgl/shaders/Shader'),

    // filters - webgl
    AbstractFilter:         require('./renderers/webgl/filters/AbstractFilter'),

    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
     * the browser then this function will return a canvas renderer
     *
     * @param width=800 {number} the width of the renderers view
     * @param height=600 {number} the height of the renderers view
     * @param [options] {object} The optional renderer parameters
     * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
     * @param [options.transparent=false] {boolean} If the render view is transparent, default false
     * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
     * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
     *      need to call toDataUrl on the webgl context
     * @param [options.resolution=1] {number} the resolution of the renderer, retina would be 2
     * @param [noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
     *
     * @return {WebGLRenderer|CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    autoDetectRenderer: function (width, height, options, noWebGL)
    {
        width = width || 800;
        height = height || 600;

        if (!noWebGL && checkWebGL())
        {
            return new core.WebGLRenderer(width, height, options);
        }

        return new core.CanvasRenderer(width, height, options);
    }
};

// add constants to export
var CONST = require('./const');

for (var c in CONST) {
    core[c] = CONST[c];
}


var contextOptions = { stencil: true };

function checkWebGL()
{
    try
    {
        if (!window.WebGLRenderingContext)
        {
            return false;
        }

        var canvas = document.createElement('canvas'),
            gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

        return !!(gl && gl.getContextAttributes().stencil);
    }
    catch (e)
    {
        return false;
    }
}

},{"./const":3,"./display/Container":4,"./display/DisplayObject":5,"./graphics/Graphics":6,"./graphics/GraphicsData":7,"./graphics/webgl/GraphicsRenderer":8,"./math":13,"./particles/ParticleContainer":19,"./particles/webgl/ParticleRenderer":21,"./renderers/canvas/CanvasRenderer":24,"./renderers/canvas/utils/CanvasBuffer":25,"./renderers/canvas/utils/CanvasGraphics":26,"./renderers/webgl/WebGLRenderer":29,"./renderers/webgl/filters/AbstractFilter":30,"./renderers/webgl/managers/ShaderManager":36,"./renderers/webgl/shaders/Shader":41,"./sprites/Sprite":47,"./sprites/webgl/SpriteRenderer":48,"./textures/BaseTexture":49,"./textures/RenderTexture":50,"./textures/Texture":51,"./textures/VideoBaseTexture":53,"./utils":58}],11:[function(require,module,exports){
var Point = require('./Point');

/**
 * The pixi Matrix class as an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @memberof PIXI.math
 */
function Matrix()
{
    /**
     * @member {number}
     * @default 1
     */
    this.a = 1;

    /**
     * @member {number}
     * @default 0
     */
    this.b = 0;

    /**
     * @member {number}
     * @default 0
     */
    this.c = 0;

    /**
     * @member {number}
     * @default 1
     */
    this.d = 1;

    /**
     * @member {number}
     * @default 0
     */
    this.tx = 0;

    /**
     * @member {number}
     * @default 0
     */
    this.ty = 0;
}

Matrix.prototype.constructor = Matrix;
module.exports = Matrix;

/**
 * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
 *
 * a = array[0]
 * b = array[1]
 * c = array[3]
 * d = array[4]
 * tx = array[2]
 * ty = array[5]
 *
 * @param array {number[]} The array that the matrix will be populated from.
 */
Matrix.prototype.fromArray = function (array)
{
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
};

/**
 * Creates an array from the current Matrix object.
 *
 * @param transpose {boolean} Whether we need to transpose the matrix or not
 * @return {number[]} the newly created array which contains the matrix
 */
Matrix.prototype.toArray = function (transpose)
{
    if (!this.array)
    {
        this.array = new Float32Array(9);
    }

    var array = this.array;

    if (transpose)
    {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = 0;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
    }
    else
    {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = this.tx;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
    }

    return array;
};

/**
 * Get a new position with the current transformation applied.
 * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
 *
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, transformed through this matrix
 */
Matrix.prototype.apply = function (pos, newPos)
{
    newPos = newPos || new Point();

    var x = pos.x;
    var y = pos.y;

    newPos.x = this.a * x + this.c * y + this.tx;
    newPos.y = this.b * x + this.d * y + this.ty;

    return newPos;
};

/**
 * Get a new position with the inverse of the current transformation applied.
 * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
 *
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, inverse-transformed through this matrix
 */
Matrix.prototype.applyInverse = function (pos, newPos)
{
    newPos = newPos || new Point();

    var id = 1 / (this.a * this.d + this.c * -this.b);

    var x = pos.x;
    var y = pos.y;

    newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
    newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;

    return newPos;
};

/**
 * Translates the matrix on the x and y.
 *
 * @param {number} x
 * @param {number} y
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.translate = function (x, y)
{
    this.tx += x;
    this.ty += y;

    return this;
};

/**
 * Applies a scale transformation to the matrix.
 *
 * @param {number} x The amount to scale horizontally
 * @param {number} y The amount to scale vertically
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.scale = function (x, y)
{
    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.tx *= x;
    this.ty *= y;

    return this;
};


/**
 * Applies a rotation transformation to the matrix.
 *
 * @param {number} angle - The angle in radians.
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.rotate = function (angle)
{
    var cos = Math.cos( angle );
    var sin = Math.sin( angle );

    var a1 = this.a;
    var c1 = this.c;
    var tx1 = this.tx;

    this.a = a1 * cos-this.b * sin;
    this.b = a1 * sin+this.b * cos;
    this.c = c1 * cos-this.d * sin;
    this.d = c1 * sin+this.d * cos;
    this.tx = tx1 * cos - this.ty * sin;
    this.ty = tx1 * sin + this.ty * cos;

    return this;
};

/**
 * Appends the given Matrix to this Matrix.
 *
 * @param {Matrix} matrix
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.append = function (matrix)
{
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;

    this.a  = matrix.a * a1 + matrix.b * c1;
    this.b  = matrix.a * b1 + matrix.b * d1;
    this.c  = matrix.c * a1 + matrix.d * c1;
    this.d  = matrix.c * b1 + matrix.d * d1;

    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

    return this;
};

/**
 * Prepends the given Matrix to this Matrix.
 *
 * @param {Matrix} matrix
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.prepend = function(matrix)
{
    var tx1 = this.tx;

    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1)
    {
        var a1 = this.a;
        var c1 = this.c;
        this.a  = a1*matrix.a+this.b*matrix.c;
        this.b  = a1*matrix.b+this.b*matrix.d;
        this.c  = c1*matrix.a+this.d*matrix.c;
        this.d  = c1*matrix.b+this.d*matrix.d;
    }

    this.tx = tx1*matrix.a+this.ty*matrix.c+matrix.tx;
    this.ty = tx1*matrix.b+this.ty*matrix.d+matrix.ty;

    return this;
};

/**
 * Inverts this matrix
 *
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.invert = function()
{
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    var tx1 = this.tx;
    var n = a1*d1-b1*c1;

    this.a = d1/n;
    this.b = -b1/n;
    this.c = -c1/n;
    this.d = a1/n;
    this.tx = (c1*this.ty-d1*tx1)/n;
    this.ty = -(a1*this.ty-b1*tx1)/n;

    return this;
};


/**
 * Resets this Matix to an identity (default) matrix.
 *
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.identity = function ()
{
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;

    return this;
};

/**
 * Creates a new Matrix object with the same values as this one.
 *
 * @return {Matrix} A copy of this matrix. Good for chaining method calls.
 */
Matrix.prototype.clone = function ()
{
    var matrix = new Matrix();
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;

    return matrix;
};

/**
 * Changes the values of the given matrix to be the same as the ones in this matrix
 *
 * @return {Matrix} The matrix given in parameter with its values updated.
 */
Matrix.prototype.copy = function (matrix)
{
    matrix.a = this.a;
    matrix.b = this.b;
    matrix.c = this.c;
    matrix.d = this.d;
    matrix.tx = this.tx;
    matrix.ty = this.ty;

    return matrix;
};

/**
 * A default (identity) matrix
 */
Matrix.IDENTITY = new Matrix();
/**
 * A temp matrix
 */
Matrix.TEMP_MATRIX = new Matrix();

},{"./Point":12}],12:[function(require,module,exports){
/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof PIXI.math
 * @param [x=0] {number} position of the point on the x axis
 * @param [y=0] {number} position of the point on the y axis
 */
function Point(x, y)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;
}

Point.prototype.constructor = Point;
module.exports = Point;

/**
 * Creates a clone of this point
 *
 * @return {Point} a copy of the point
 */
Point.prototype.clone = function ()
{
    return new Point(this.x, this.y);
};

/**
 * Sets the point to a new x and y position.
 * If y is omitted, both x and y will be set to x.
 *
 * @param [x=0] {number} position of the point on the x axis
 * @param [y=0] {number} position of the point on the y axis
 */
Point.prototype.set = function (x, y)
{
    this.x = x || 0;
    this.y = y || ( (y !== 0) ? this.x : 0 ) ;
};

},{}],13:[function(require,module,exports){
/**
 * @namespace PIXI.math
 */
module.exports = {
    /**
     * @property {number} PI_2 - Two Pi
     * @constant
     * @static
     */
    PI_2: Math.PI * 2,

    /**
     * @property {number} RAD_TO_DEG - Constant conversion factor for converting radians to degrees
     * @constant
     * @static
     */
    RAD_TO_DEG: 180 / Math.PI,

    /**
     * @property {Number} DEG_TO_RAD - Constant conversion factor for converting degrees to radians
     * @constant
     * @static
     */
    DEG_TO_RAD: Math.PI / 180,

    Point:      require('./Point'),
    Matrix:     require('./Matrix'),

    Circle:     require('./shapes/Circle'),
    Ellipse:    require('./shapes/Ellipse'),
    Polygon:    require('./shapes/Polygon'),
    Rectangle:  require('./shapes/Rectangle'),
    RoundedRectangle: require('./shapes/RoundedRectangle')
};

},{"./Matrix":11,"./Point":12,"./shapes/Circle":14,"./shapes/Ellipse":15,"./shapes/Polygon":16,"./shapes/Rectangle":17,"./shapes/RoundedRectangle":18}],14:[function(require,module,exports){
var Rectangle = require('./Rectangle'),
    CONST = require('../../const');

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the center of this circle
 * @param y {number} The Y coordinate of the center of this circle
 * @param radius {number} The radius of the circle
 */
function Circle(x, y, radius)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.radius = radius || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.CIRC;
}

Circle.prototype.constructor = Circle;
module.exports = Circle;

/**
 * Creates a clone of this Circle instance
 *
 * @return {Circle} a copy of the Circle
 */
Circle.prototype.clone = function ()
{
    return new Circle(this.x, this.y, this.radius);
};

/**
 * Checks whether the x and y coordinates given are contained within this circle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Circle
 */
Circle.prototype.contains = function (x, y)
{
    if (this.radius <= 0)
    {
        return false;
    }

    var dx = (this.x - x),
        dy = (this.y - y),
        r2 = this.radius * this.radius;

    dx *= dx;
    dy *= dy;

    return (dx + dy <= r2);
};

/**
* Returns the framing rectangle of the circle as a Rectangle object
*
* @return {Rectangle} the framing rectangle
*/
Circle.prototype.getBounds = function ()
{
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
};

},{"../../const":3,"./Rectangle":17}],15:[function(require,module,exports){
var Rectangle = require('./Rectangle'),
    CONST = require('../../const');

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the center of the ellipse
 * @param y {number} The Y coordinate of the center of the ellipse
 * @param width {number} The half width of this ellipse
 * @param height {number} The half height of this ellipse
 */
function Ellipse(x, y, width, height)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.ELIP;
}

Ellipse.prototype.constructor = Ellipse;
module.exports = Ellipse;

/**
 * Creates a clone of this Ellipse instance
 *
 * @return {Ellipse} a copy of the ellipse
 */
Ellipse.prototype.clone = function ()
{
    return new Ellipse(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates given are contained within this ellipse
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coords are within this ellipse
 */
Ellipse.prototype.contains = function (x, y)
{
    if (this.width <= 0 || this.height <= 0)
    {
        return false;
    }

    //normalize the coords to an ellipse with center 0,0
    var normx = ((x - this.x) / this.width),
        normy = ((y - this.y) / this.height);

    normx *= normx;
    normy *= normy;

    return (normx + normy <= 1);
};

/**
 * Returns the framing rectangle of the ellipse as a Rectangle object
 *
 * @return {Rectangle} the framing rectangle
 */
Ellipse.prototype.getBounds = function ()
{
    return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
};

},{"../../const":3,"./Rectangle":17}],16:[function(require,module,exports){
var Point = require('../Point'),
    CONST = require('../../const');

/**
 * @class
 * @memberof PIXI
 * @param points* {Point[]|number[]|...Point|...number} This can be an array of Points that form the polygon,
 *      a flat array of numbers that will be interpreted as [x,y, x,y, ...], or the arguments passed can be
 *      all the points of the polygon e.g. `new Polygon(new Point(), new Point(), ...)`, or the
 *      arguments passed can be flat x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are
 *      Numbers.
 */
function Polygon(points)
{
    //if points isn't an array, use arguments as the array
    if (!(points instanceof Array))
    {
        points = Array.prototype.slice.call(arguments);
    }

    //if this is a flat array of numbers, convert it to points
    if (points[0] instanceof Point)
    {
        var p = [];
        for (var i = 0, il = points.length; i < il; i++)
        {
            p.push(points[i].x, points[i].y);
        }

        points = p;
    }

    this.closed = true;

    /**
     * An array of the points of this polygon
     *
     * @member {Point[]}
     */
    this.points = points;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.POLY;
}

Polygon.prototype.constructor = Polygon;
module.exports = Polygon;

/**
 * Creates a clone of this polygon
 *
 * @return {Polygon} a copy of the polygon
 */
Polygon.prototype.clone = function ()
{
    return new Polygon(this.points.slice());
};

/**
 * Checks whether the x and y coordinates passed to this function are contained within this polygon
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this polygon
 */
Polygon.prototype.contains = function (x, y)
{
    var inside = false;

    // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    var length = this.points.length / 2;

    for (var i = 0, j = length - 1; i < length; j = i++)
    {
        var xi = this.points[i * 2], yi = this.points[i * 2 + 1],
            xj = this.points[j * 2], yj = this.points[j * 2 + 1],
            intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

        if (intersect)
        {
            inside = !inside;
        }
    }

    return inside;
};

},{"../../const":3,"../Point":12}],17:[function(require,module,exports){
var CONST = require('../../const');

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the upper-left corner of the rectangle
 * @param y {number} The Y coordinate of the upper-left corner of the rectangle
 * @param width {number} The overall width of this rectangle
 * @param height {number} The overall height of this rectangle
 */
function Rectangle(x, y, width, height)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.RECT;
}

Rectangle.prototype.constructor = Rectangle;
module.exports = Rectangle;

/**
 * A constant empty rectangle.
 *
 * @static
 * @constant
 */
Rectangle.EMPTY = new Rectangle(0, 0, 0, 0);


/**
 * Creates a clone of this Rectangle
 *
 * @return {Rectangle} a copy of the rectangle
 */
Rectangle.prototype.clone = function ()
{
    return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates given are contained within this Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rectangle
 */
Rectangle.prototype.contains = function (x, y)
{
    if (this.width <= 0 || this.height <= 0)
    {
        return false;
    }

    if (x >= this.x && x < this.x + this.width)
    {
        if (y >= this.y && y < this.y + this.height)
        {
            return true;
        }
    }

    return false;
};

},{"../../const":3}],18:[function(require,module,exports){
var CONST = require('../../const');

/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 * @param x {number} The X coordinate of the upper-left corner of the rounded rectangle
 * @param y {number} The Y coordinate of the upper-left corner of the rounded rectangle
 * @param width {number} The overall width of this rounded rectangle
 * @param height {number} The overall height of this rounded rectangle
 * @param radius {number} Controls the radius of the rounded corners
 */
function RoundedRectangle(x, y, width, height, radius)
{
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * @member {number}
     * @default 20
     */
    this.radius = radius || 20;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.RREC;
}

RoundedRectangle.prototype.constructor = RoundedRectangle;
module.exports = RoundedRectangle;

/**
 * Creates a clone of this Rounded Rectangle
 *
 * @return {RoundedRectangle} a copy of the rounded rectangle
 */
RoundedRectangle.prototype.clone = function ()
{
    return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
};

/**
 * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
 */
RoundedRectangle.prototype.contains = function (x, y)
{
    if (this.width <= 0 || this.height <= 0)
    {
        return false;
    }

    if (x >= this.x && x <= this.x + this.width)
    {
        if (y >= this.y && y <= this.y + this.height)
        {
            return true;
        }
    }

    return false;
};

},{"../../const":3}],19:[function(require,module,exports){
var Container = require('../display/Container');

/**
 * The ParticleContainer class is a really fast version of the Container built solely for speed,
 * so use when you need a lot of sprites or particles. The tradeoff of the ParticleContainer is that advanced
 * functionality will not work. ParticleContainer implements only the basic object transform (position, scale, rotation).
 * Any other functionality like tinting, masking, etc will not work on sprites in this batch.
 *
 * It's extremely easy to use :
 *
 * ```js
 * var container = new ParticleContainer();
 *
 * for (var i = 0; i < 100; ++i)
 * {
 *     var sprite = new PIXI.Sprite.fromImage("myImage.png");
 *     container.addChild(sprite);
 * }
 * ```
 *
 * And here you have a hundred sprites that will be renderer at the speed of light.
 *
 * @class
 * @extends Container
 * @memberof PIXI
 *
 * @param size {number} The number of images in the SpriteBatch before it flushes.
 * @param properties {object} The properties to be uploaded
 */
function ParticleContainer(size, properties)
{
    Container.call(this);

    // set properties to be dynamic (true) / static (false)
    // TODO this could be easier to understand!
    /* this._properties = {
        scale : false,
        position : true,
        rotation : false,
        uvs : false,
        alpha : false
     * }
     */
    /**
     * @member {object}
     * @private
     */
    this._properties = properties || [false, true, false, false, false];
    /**
     * @member {number}
     * @private
     */
    this._size = size || 15000;

    /**
     * @member {WebGLBuffer}
     * @private
     */
    this._buffers = null;

    /**
     * @member {boolean}
     * @private
     */
    this._updateStatic = false;

    /**
     * @member {boolean}
     *
     */
    this.interactiveChildren = false;

}

ParticleContainer.prototype = Object.create(Container.prototype);
ParticleContainer.prototype.constructor = ParticleContainer;
module.exports = ParticleContainer;

/**
 * Updates the object transform for rendering
 *
 * @private
 */
ParticleContainer.prototype.updateTransform = function ()
{
    // TODO don't need to!
    this.displayObjectUpdateTransform();
    //  PIXI.Container.prototype.updateTransform.call( this );
};

/**
 * Renders the container using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The webgl renderer
 * @private
 */
ParticleContainer.prototype.renderWebGL = function (renderer)
{
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
    {
        return;
    }

    renderer.setObjectRenderer( renderer.plugins.particle );
    renderer.plugins.particle.render( this );
};

/**
 * Adds a child to this particle container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 * @return {DisplayObject} The child that was added.
 */
ParticleContainer.prototype.addChildAt = function (child, index)
{
    // prevent adding self as child
    if (child === this)
    {
        return child;
    }

    if (index >= 0 && index <= this.children.length)
    {
        if (child.parent)
        {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        this._updateStatic = true;

        return child;
    }
    else
    {
        throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
    }
};

/**
 * Removes a child from the specified index position.
 *
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child that was removed.
 */
ParticleContainer.prototype.removeChildAt = function (index)
{
    var child = this.getChildAt(index);

    child.parent = null;
    this.children.splice(index, 1);
    this._updateStatic = true;

    return child;
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The canvas renderer
 * @private
 */
ParticleContainer.prototype.renderCanvas = function (renderer)
{
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
    {
        return;
    }

    var context = renderer.context;
    var transform = this.worldTransform;
    var isRotated = true;

    context.globalAlpha = this.worldAlpha;

    this.displayObjectUpdateTransform();

    for (var i = 0; i < this.children.length; ++i)
    {
        var child = this.children[i];

        if (!child.visible)
        {
            continue;
        }

        var frame = child.texture.frame;

        context.globalAlpha = this.worldAlpha * child.alpha;

        if (child.rotation % (Math.PI * 2) === 0)
        {
            // this is the fastest  way to optimise! - if rotation is 0 then we can avoid any kind of setTransform call
            if (isRotated)
            {
                context.setTransform(
                    transform.a,
                    transform.b,
                    transform.c,
                    transform.d,
                    transform.tx,
                    transform.ty
                );

                isRotated = false;
            }

            context.drawImage(
                child.texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                ((child.anchor.x) * (-frame.width * child.scale.x) + child.position.x  + 0.5) | 0,
                ((child.anchor.y) * (-frame.height * child.scale.y) + child.position.y  + 0.5) | 0,
                frame.width * child.scale.x,
                frame.height * child.scale.y
            );
        }
        else
        {
            if (!isRotated)
            {
                isRotated = true;
            }

            child.displayObjectUpdateTransform();

            var childTransform = child.worldTransform;

            if (renderer.roundPixels)
            {
                context.setTransform(
                    childTransform.a,
                    childTransform.b,
                    childTransform.c,
                    childTransform.d,
                    childTransform.tx | 0,
                    childTransform.ty | 0
                );
            }
            else
            {
                context.setTransform(
                    childTransform.a,
                    childTransform.b,
                    childTransform.c,
                    childTransform.d,
                    childTransform.tx,
                    childTransform.ty
                );
            }

            context.drawImage(
                child.texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                ((child.anchor.x) * (-frame.width) + 0.5) | 0,
                ((child.anchor.y) * (-frame.height) + 0.5) | 0,
                frame.width,
                frame.height
            );
        }
    }
};

},{"../display/Container":4}],20:[function(require,module,exports){

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's ParticleBuffer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleBuffer.java
 */

/**
 *
 * @class
 * @private
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function ParticleBuffer(gl, properties, size)
{
    /**
     * the current WebGL drawing context
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     *
     *
     * @member {number}
     */
    this.vertSize = 2;

    /**
     *
     *
     * @member {number}
     */
    this.vertByteSize = this.vertSize * 4;

    /**
     * The number of images in the SpriteBatch before it flushes.
     *
     * @member {number}
     */
    this.size = size;

    /**
     * 
     *
     * @member {Array}
     */
    this.dynamicProperties = [];

    /**
     * 
     *
     * @member {Array}
     */
    this.staticProperties = [];

    for (var i = 0; i < properties.length; i++)
    {
        var property = properties[i];

        if(property.dynamic)
        {
            this.dynamicProperties.push(property);
        }
        else
        {
            this.staticProperties.push(property);
        }
    }

    this.staticStride = 0;
    this.staticBuffer = null;
    this.staticData = null;

    this.dynamicStride = 0;
    this.dynamicBuffer = null;
    this.dynamicData = null;

    this.initBuffers();

}

ParticleBuffer.prototype.constructor = ParticleBuffer;
module.exports = ParticleBuffer;

/**
 * Sets up the renderer context and necessary buffers.
 *
 * @private
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 */
ParticleBuffer.prototype.initBuffers = function ()
{
    var gl = this.gl;
    var i;
    var property;

    var dynamicOffset = 0;
    this.dynamicStride = 0;

    for (i = 0; i < this.dynamicProperties.length; i++)
    {
        property = this.dynamicProperties[i];

        property.offset = dynamicOffset;
        dynamicOffset += property.size;
        this.dynamicStride += property.size;
    }

    this.dynamicData = new Float32Array( this.size * this.dynamicStride * 4);
    this.dynamicBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.dynamicData, gl.DYNAMIC_DRAW);


    // static //
    var staticOffset = 0;
    this.staticStride = 0;

    for (i = 0; i < this.staticProperties.length; i++)
    {
        property = this.staticProperties[i];

        property.offset = staticOffset;
        staticOffset += property.size;
        this.staticStride += property.size;
    }

    this.staticData = new Float32Array( this.size * this.staticStride * 4);
    this.staticBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.staticData, gl.DYNAMIC_DRAW);

};

ParticleBuffer.prototype.uploadDynamic = function(children, startIndex, amount)
{
    var gl = this.gl;

    for (var i = 0; i < this.dynamicProperties.length; i++)
    {
        var property = this.dynamicProperties[i];
        property.uploadFunction(children, startIndex, amount, this.dynamicData, this.dynamicStride, property.offset);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.dynamicData);
};

ParticleBuffer.prototype.uploadStatic = function(children, startIndex, amount)
{
    var gl = this.gl;

    for (var i = 0; i < this.staticProperties.length; i++)
    {
        var property = this.staticProperties[i];
        property.uploadFunction(children, startIndex, amount, this.staticData, this.staticStride, property.offset);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.staticData);
};

/**
 * Starts a new sprite batch.
 *
 */
ParticleBuffer.prototype.bind = function ()
{
    var gl = this.gl;
    var i, property;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.dynamicBuffer);

    for (i = 0; i < this.dynamicProperties.length; i++)
    {
        property = this.dynamicProperties[i];
        gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.dynamicStride * 4, property.offset * 4);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.staticBuffer);

    for (i = 0; i < this.staticProperties.length; i++)
    {
        property = this.staticProperties[i];
        gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.staticStride * 4, property.offset * 4);
    }
};

/**
 * Destroys the SpriteBatch.
 *
 */
ParticleBuffer.prototype.destroy = function ()
{
    //TODO implement this :) to busy making the fun bits..
};

},{}],21:[function(require,module,exports){
var ObjectRenderer = require('../../renderers/webgl/utils/ObjectRenderer'),
    WebGLRenderer = require('../../renderers/webgl/WebGLRenderer'),
    ParticleShader = require('./ParticleShader'),
    ParticleBuffer = require('./ParticleBuffer'),
    math            = require('../../math');

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's ParticleRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleRenderer.java
 */

/**
 *
 * @class
 * @private
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function ParticleRenderer(renderer)
{
    ObjectRenderer.call(this, renderer);


    /**
     * The number of images in the Particle before it flushes.
     *
     * @member {number}
     */
    this.size = 15000;//CONST.SPRITE_BATCH_SIZE; // 2000 is a nice balance between mobile / desktop

    var numIndices = this.size * 6;


    /**
     * Holds the indices
     *
     * @member {Uint16Array}
     */
    this.indices = new Uint16Array(numIndices);

    for (var i=0, j=0; i < numIndices; i += 6, j += 4)
    {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    /**
     * The default shader that is used if a sprite doesn't have a more specific one.
     *
     * @member {Shader}
     */
    this.shader = null;

    this.tempMatrix = new math.Matrix();




}

ParticleRenderer.prototype = Object.create(ObjectRenderer.prototype);
ParticleRenderer.prototype.constructor = ParticleRenderer;
module.exports = ParticleRenderer;

WebGLRenderer.registerPlugin('particle', ParticleRenderer);

/**
 * When there is a WebGL context change
 *
 * @private
 *
 */
ParticleRenderer.prototype.onContextChange = function ()
{
    var gl = this.renderer.gl;

    // setup default shader
    this.shader = new ParticleShader(this.renderer.shaderManager);

    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.

    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);


    this.properties = [
    //verticesData
    {
        attribute:this.shader.attributes.aVertexPosition,
        dynamic:false,
        size:2,
        uploadFunction:this.uploadVertices,
        offset:0
    },
    // positionData
    {
        attribute:this.shader.attributes.aPositionCoord,
        dynamic:true,
        size:2,
        uploadFunction:this.uploadPosition,
        offset:0
    },
    // rotationData
    {
        attribute:this.shader.attributes.aRotation,
        dynamic:false,
        size:1,
        uploadFunction:this.uploadRotation,
        offset:0
    },
    //u vsData
    {
        attribute:this.shader.attributes.aTextureCoord,
        dynamic:false,
        size:2,
        uploadFunction:this.uploadUvs,
        offset:0
    },
    // alphaData
    {
        attribute:this.shader.attributes.aColor,
        dynamic:false,
        size:1,
        uploadFunction:this.uploadAlpha,
        offset:0
    }];

};

/**
 * Starts a new sprite batch.
 *
 */
ParticleRenderer.prototype.start = function ()
{
    var gl = this.renderer.gl;

    // bind the main texture
    gl.activeTexture(gl.TEXTURE0);

    // bind the buffers

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    var shader = this.shader;

    this.renderer.shaderManager.setShader(shader);
};


/**
 * Renders the sprite object.
 *
 * @param container {Container|Sprite} the sprite to render using this ParticleRenderer
 */
ParticleRenderer.prototype.render = function ( container )
{
    var children = container.children,
        totalChildren = children.length,
        maxSize = container._size;

    if(totalChildren === 0)
    {
        return;
    }
    else if(totalChildren > maxSize)
    {
        totalChildren = maxSize;
    }

    if(!container._buffers)
    {
        container._buffers = this.generateBuffers( container );
    }



    // if the uvs have not updated then no point rendering just yet!
    //this.renderer.blendModeManager.setBlendMode(sprite.blendMode);
    var gl = this.renderer.gl;

    var m =  container.worldTransform.copy( this.tempMatrix );
    m.prepend( this.renderer.currentRenderTarget.projectionMatrix );
    gl.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, false, m.toArray(true));

    // if this variable is true then we will upload the static contents as well as the dynamic contens
    var uploadStatic = container._updateStatic;

    // make sure the texture is bound..
    var baseTexture = children[0]._texture.baseTexture;

    if (!baseTexture._glTextures[gl.id])
    {
        this.renderer.updateTexture(baseTexture);
        if(!this.properties[0].dynamic || !this.properties[3].dynamic)
        {
            uploadStatic = true;
        }
    }
    else
    {
        gl.bindTexture(gl.TEXTURE_2D, baseTexture._glTextures[gl.id]);
    }

    // now lets upload and render the buffers..
    var j = 0;
    for (var i = 0; i < totalChildren; i+=this.size)
    {
         var amount = ( totalChildren - i);
        if(amount > this.size)
        {
            amount = this.size;
        }

        var buffer = container._buffers[j++];

        // we always upload the dynamic
        buffer.uploadDynamic(children, i, amount);

        // we only upload the static content when we have to!
        if(uploadStatic)
        {
            buffer.uploadStatic(children, i, amount);
        }

        // bind the buffer
        buffer.bind( this.shader );

         // now draw those suckas!
        gl.drawElements(gl.TRIANGLES, amount * 6, gl.UNSIGNED_SHORT, 0);
        this.renderer.drawCount++;
    }

    container._updateStatic = false;
};

/**
 * Creates one particle buffer for each child in the container we want to render and updates internal properties
 *
 * @param container {Container|Sprite} the sprite to render using this ParticleRenderer
 */
ParticleRenderer.prototype.generateBuffers = function ( container )
{
    var gl = this.renderer.gl,
        buffers = [],
        size = container._size,
        i;

    // update the properties to match the state of the container..
    for (i = 0; i < container._properties.length; i++)
    {
        this.properties[i].dynamic = container._properties[i];
    }

    for (i = 0; i < size; i += this.size)
    {
        buffers.push( new ParticleBuffer(gl,  this.properties, this.size, this.shader) );
    }

    return buffers;
};


/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their vertices uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadVertices = function (children, startIndex, amount, array, stride, offset)
{
    var sprite,
        texture,
        trim,
        sx,
        sy,
        w0, w1, h0, h1;

    for (var i = 0; i < amount; i++) {

        sprite = children[startIndex + i];
        texture = sprite._texture;
        sx = sprite.scale.x;
        sy = sprite.scale.y;

        if (texture.trim)
        {
            // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
            trim = texture.trim;

            w1 = trim.x - sprite.anchor.x * trim.width;
            w0 = w1 + texture.crop.width;

            h1 = trim.y - sprite.anchor.y * trim.height;
            h0 = h1 + texture.crop.height;
        }
        else
        {
            w0 = (texture._frame.width ) * (1-sprite.anchor.x);
            w1 = (texture._frame.width ) * -sprite.anchor.x;

            h0 = texture._frame.height * (1-sprite.anchor.y);
            h1 = texture._frame.height * -sprite.anchor.y;
        }

        array[offset] = w1 * sx;
        array[offset + 1] = h1 * sy;

        array[offset + stride] = w0 * sx;
        array[offset + stride + 1] = h1 * sy;

        array[offset + stride * 2] = w0 * sx;
        array[offset + stride * 2 + 1] = h0 * sy;

        array[offset + stride * 3] = w1 * sx;
        array[offset + stride * 3 + 1] = h0 * sy;

        offset += stride * 4;
    }

};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their positions uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadPosition = function (children,startIndex, amount, array, stride, offset)
{
    for (var i = 0; i < amount; i++)
    {
        var spritePosition = children[startIndex + i].position;

        array[offset] = spritePosition.x;
        array[offset + 1] = spritePosition.y;

        array[offset + stride] = spritePosition.x;
        array[offset + stride + 1] = spritePosition.y;

        array[offset + stride * 2] = spritePosition.x;
        array[offset + stride * 2 + 1] = spritePosition.y;

        array[offset + stride * 3] = spritePosition.x;
        array[offset + stride * 3 + 1] = spritePosition.y;

        offset += stride * 4;
    }

};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their rotation uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadRotation = function (children,startIndex, amount, array, stride, offset)
{
    for (var i = 0; i < amount; i++)
    {
        var spriteRotation = children[startIndex + i].rotation;


        array[offset] = spriteRotation;
        array[offset + stride] = spriteRotation;
        array[offset + stride * 2] = spriteRotation;
        array[offset + stride * 3] = spriteRotation;

        offset += stride * 4;
    }
};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their Uvs uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadUvs = function (children,startIndex, amount, array, stride, offset)
{
    for (var i = 0; i < amount; i++)
    {
        var textureUvs = children[startIndex + i]._texture._uvs;

        if (textureUvs)
        {
            array[offset] = textureUvs.x0;
            array[offset + 1] = textureUvs.y0;

            array[offset + stride] = textureUvs.x1;
            array[offset + stride + 1] = textureUvs.y1;

            array[offset + stride * 2] = textureUvs.x2;
            array[offset + stride * 2 + 1] = textureUvs.y2;

            array[offset + stride * 3] = textureUvs.x3;
            array[offset + stride * 3 + 1] = textureUvs.y3;

            offset += stride * 4;
        }
        else
        {
            //TODO you know this can be easier!
            array[offset] = 0;
            array[offset + 1] = 0;

            array[offset + stride] = 0;
            array[offset + stride + 1] = 0;

            array[offset + stride * 2] = 0;
            array[offset + stride * 2 + 1] = 0;

            array[offset + stride * 3] = 0;
            array[offset + stride * 3 + 1] = 0;

            offset += stride * 4;
        }
    }
};

/**
 *
 * @param children {Array} the array of display objects to render
 * @param startIndex {number} the index to start from in the children array
 * @param amount {number} the amount of children that will have their alpha uploaded
 * @param array {Array}
 * @param stride {number}
 * @param offset {number}
 */
ParticleRenderer.prototype.uploadAlpha = function (children,startIndex, amount, array, stride, offset)
{
     for (var i = 0; i < amount; i++)
     {
        var spriteAlpha = children[startIndex + i].alpha;

        array[offset] = spriteAlpha;
        array[offset + stride] = spriteAlpha;
        array[offset + stride * 2] = spriteAlpha;
        array[offset + stride * 3] = spriteAlpha;

        offset += stride * 4;
    }
};


/**
 * Destroys the Particle.
 *
 */
ParticleRenderer.prototype.destroy = function ()
{

    this.shader.destroy();

    //TODO implement this!
};

},{"../../math":13,"../../renderers/webgl/WebGLRenderer":29,"../../renderers/webgl/utils/ObjectRenderer":43,"./ParticleBuffer":20,"./ParticleShader":22}],22:[function(require,module,exports){
var TextureShader = require('../../renderers/webgl/shaders/TextureShader');

/**
 * @class
 * @extends TextureShader
 * @memberof PIXI
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 */
function ParticleShader(shaderManager)
{
    TextureShader.call(this,
        shaderManager,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec2 aTextureCoord;',
            'attribute float aColor;',

            'attribute vec2 aPositionCoord;',
            'attribute vec2 aScale;',
            'attribute float aRotation;',

            'uniform mat3 projectionMatrix;',

            'varying vec2 vTextureCoord;',
            'varying float vColor;',

            'void main(void){',
            '   vec2 v = aVertexPosition;',

            '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);',
            '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);',
            '   v = v + aPositionCoord;',

            '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);',

            '   vTextureCoord = aTextureCoord;',
            '   vColor = aColor;',
            '}'
        ].join('\n'),
        // hello
         [
            'precision lowp float;',

            'varying vec2 vTextureCoord;',
            'varying float vColor;',

            'uniform sampler2D uSampler;',

            'void main(void){',
            '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
            '}'
        ].join('\n'),
        // custom uniforms
        null,
        // custom attributes
        {
            aPositionCoord: 0,
           // aScale:         0,
            aRotation:      0
        }
    );

    // TEMP HACK

}

ParticleShader.prototype = Object.create(TextureShader.prototype);
ParticleShader.prototype.constructor = ParticleShader;

module.exports = ParticleShader;

},{"../../renderers/webgl/shaders/TextureShader":42}],23:[function(require,module,exports){
var utils = require('../utils'),
    math = require('../math'),
    CONST = require('../const');

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @param system {string} The name of the system this renderer is for.
 * @param [width=800] {number} the width of the canvas view
 * @param [height=600] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or
 *      not before the new render pass.
 */
function SystemRenderer(system, width, height, options)
{
    utils.sayHello(system);

    // prepare options
    if (options)
    {
        for (var i in CONST.DEFAULT_RENDER_OPTIONS)
        {
            if (typeof options[i] === 'undefined')
            {
                options[i] = CONST.DEFAULT_RENDER_OPTIONS[i];
            }
        }
    }
    else
    {
        options = CONST.DEFAULT_RENDER_OPTIONS;
    }

    /**
     * The type of the renderer.
     *
     * @member {RENDERER_TYPE}
     * @default CONT.RENDERER_TYPE.UNKNOWN
     */
    this.type = CONST.RENDERER_TYPE.UNKNOWN;

    /**
     * The width of the canvas view
     *
     * @member {number}
     * @default 800
     */
    this.width = width || 800;

    /**
     * The height of the canvas view
     *
     * @member {number}
     * @default 600
     */
    this.height = height || 600;

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    this.view = options.view || document.createElement('canvas');

    /**
     * The resolution of the renderer
     *
     * @member {number}
     * @default 1
     */
    this.resolution = options.resolution;

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    this.transparent = options.transparent;

    /**
     * Whether the render view should be resized automatically
     *
     * @member {boolean}
     */
    this.autoResize = options.autoResize || false;

    /**
     * Tracks the blend modes useful for this renderer.
     *
     * @member {object<string, mixed>}
     */
    this.blendModes = null;


    ///////////////////////////
    // TODO: Combine these!

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
     *
     * @member {boolean}
     */
    this.preserveDrawingBuffer = options.preserveDrawingBuffer;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the scene is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.
     * If the scene is transparent Pixi will use clearRect to clear the canvas every frame.
     * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    this.clearBeforeRender = options.clearBeforeRender;


    ////////////////////////

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    this._backgroundColor = 0xFFFFFF;

    /**
     * The background color as an [R, G, B] array.
     *
     * @member {number[]}
     * @private
     */
    this._backgroundColorRgb = [1, 1, 1];

    /**
     * The background color as a string.
     *
     * @member {string}
     * @private
     */
    this._backgroundColorString = '#000000';

    this.backgroundColor = options.backgroundColor || this._backgroundColor; // run bg color setter

    /**
     * This temporary display object used as the parent of the currently being rendered item
     * @member {DisplayObject}
     * @private
     */
    this._tempDisplayObjectParent = {worldTransform:new math.Matrix(), worldAlpha:1, children:[]};

    //
    this._lastObjectRendered = this._tempDisplayObjectParent;
}

// constructor
SystemRenderer.prototype.constructor = SystemRenderer;
module.exports = SystemRenderer;

utils.eventTarget.mixin(SystemRenderer.prototype);

Object.defineProperties(SystemRenderer.prototype, {
    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     * @memberof SystemRenderer#
     */
    backgroundColor:
    {
        get: function ()
        {
            return this._backgroundColor;
        },
        set: function (val)
        {
            this._backgroundColor = val;
            this._backgroundColorString = utils.hex2string(val);
            utils.hex2rgb(val, this._backgroundColorRgb);
        }
    }
});

/**
 * Resizes the canvas view to the specified width and height
 *
 * @param width {number} the new width of the canvas view
 * @param height {number} the new height of the canvas view
 */
SystemRenderer.prototype.resize = function (width, height) {
    this.width = width * this.resolution;
    this.height = height * this.resolution;

    this.view.width = this.width;
    this.view.height = this.height;

    if (this.autoResize)
    {
        this.view.style.width = this.width / this.resolution + 'px';
        this.view.style.height = this.height / this.resolution + 'px';
    }
};

/**
 * Removes everything from the renderer and optionally removes the Canvas DOM element.
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
SystemRenderer.prototype.destroy = function (removeView) {
    if (removeView && this.view.parent)
    {
        this.view.parent.removeChild(this.view);
    }

    this.type = CONST.RENDERER_TYPE.UNKNOWN;

    this.width = 0;
    this.height = 0;

    this.view = null;

    this.resolution = 0;

    this.transparent = false;

    this.autoResize = false;

    this.blendModes = null;

    this.preserveDrawingBuffer = false;
    this.clearBeforeRender = false;

    this._backgroundColor = 0;
    this._backgroundColorRgb = null;
    this._backgroundColorString = null;
};

},{"../const":3,"../math":13,"../utils":58}],24:[function(require,module,exports){
var SystemRenderer = require('../SystemRenderer'),
    CanvasMaskManager = require('./utils/CanvasMaskManager'),
    utils = require('../../utils'),
    math = require('../../math'),
    CONST = require('../../const');

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends SystemRenderer
 * @param [width=800] {number} the width of the canvas view
 * @param [height=600] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or
 *      not before the new render pass.
 */
function CanvasRenderer(width, height, options)
{
    SystemRenderer.call(this, 'Canvas', width, height, options);

    this.type = CONST.RENDERER_TYPE.CANVAS;

    /**
     * The canvas 2d context that everything is drawn with.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.view.getContext('2d', { alpha: this.transparent });

    /**
     * Boolean flag controlling canvas refresh.
     *
     * @member {boolean}
     */
    this.refresh = true;

    /**
     * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
     *
     * @member {CanvasMaskManager}
     */
    this.maskManager = new CanvasMaskManager();

    /**
     * If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     * @member {boolean}
     */
    this.roundPixels = false;

    /**
     * Tracks the active scale mode for this renderer.
     *
     * @member {SCALE_MODE}
     */
    this.currentScaleMode = CONST.SCALE_MODES.DEFAULT;

    /**
     * Tracks the active blend mode for this renderer.
     *
     * @member {SCALE_MODE}
     */
    this.currentBlendMode = CONST.BLEND_MODES.NORMAL;

    /**
     * The canvas property used to set the canvas smoothing property.
     *
     * @member {string}
     */
    this.smoothProperty = 'imageSmoothingEnabled';

    if (!this.context.imageSmoothingEnabled)
    {
        if (this.context.webkitImageSmoothingEnabled)
        {
            this.smoothProperty = 'webkitImageSmoothingEnabled';
        }
        else if (this.context.mozImageSmoothingEnabled)
        {
            this.smoothProperty = 'mozImageSmoothingEnabled';
        }
        else if (this.context.oImageSmoothingEnabled)
        {
            this.smoothProperty = 'oImageSmoothingEnabled';
        }
        else if (this.context.msImageSmoothingEnabled)
        {
            this.smoothProperty = 'msImageSmoothingEnabled';
        }
    }

    this.initPlugins();

    this._mapBlendModes();

    /**
     * This temporary display object used as the parent of the currently being rendered item
     *
     * @member {DisplayObject}
     * @private
     */
    this._tempDisplayObjectParent = {
        worldTransform: new math.Matrix(),
        worldAlpha: 1
    };


    this.resize(width, height);
}

// constructor
CanvasRenderer.prototype = Object.create(SystemRenderer.prototype);
CanvasRenderer.prototype.constructor = CanvasRenderer;
module.exports = CanvasRenderer;
utils.pluginTarget.mixin(CanvasRenderer);

/**
 * Renders the object to this canvas view
 *
 * @param object {DisplayObject} the object to be rendered
 */
CanvasRenderer.prototype.render = function (object)
{
    var cacheParent = object.parent;

    this._lastObjectRendered = object;

    object.parent = this._tempDisplayObjectParent;

    // update the scene graph
    object.updateTransform();

    object.parent = cacheParent;

    this.context.setTransform(1, 0, 0, 1, 0, 0);

    this.context.globalAlpha = 1;

    this.currentBlendMode = CONST.BLEND_MODES.NORMAL;
    this.context.globalCompositeOperation = this.blendModes[CONST.BLEND_MODES.NORMAL];

    if (navigator.isCocoonJS && this.view.screencanvas)
    {
        this.context.fillStyle = 'black';
        this.context.clear();
    }

    if (this.clearBeforeRender)
    {
        if (this.transparent)
        {
            this.context.clearRect(0, 0, this.width, this.height);
        }
        else
        {
            this.context.fillStyle = this._backgroundColorString;
            this.context.fillRect(0, 0, this.width , this.height);
        }
    }

    this.renderDisplayObject(object, this.context);
};

/**
 * Removes everything from the renderer and optionally removes the Canvas DOM element.
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
CanvasRenderer.prototype.destroy = function (removeView)
{
    this.destroyPlugins();

    // call the base destroy
    SystemRenderer.prototype.destroy.call(this, removeView);

    this.context = null;

    this.refresh = true;

    this.maskManager.destroy();
    this.maskManager = null;

    this.roundPixels = false;

    this.currentScaleMode = 0;
    this.currentBlendMode = 0;

    this.smoothProperty = null;
};

/**
 * Renders a display object
 *
 * @param displayObject {DisplayObject} The displayObject to render
 * @private
 */
CanvasRenderer.prototype.renderDisplayObject = function (displayObject, context)
{
    var tempContext = this.context;

    this.context = context;
    displayObject.renderCanvas(this);
    this.context = tempContext;
};

/**
 * Maps Pixi blend modes to canvas blend modes.
 *
 * @private
 */
CanvasRenderer.prototype._mapBlendModes = function ()
{
    if (!this.blendModes)
    {
        this.blendModes = {};

        if (utils.canUseNewCanvasBlendModes())
        {
            this.blendModes[CONST.BLEND_MODES.NORMAL]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.ADD]           = 'lighter'; //IS THIS OK???
            this.blendModes[CONST.BLEND_MODES.MULTIPLY]      = 'multiply';
            this.blendModes[CONST.BLEND_MODES.SCREEN]        = 'screen';
            this.blendModes[CONST.BLEND_MODES.OVERLAY]       = 'overlay';
            this.blendModes[CONST.BLEND_MODES.DARKEN]        = 'darken';
            this.blendModes[CONST.BLEND_MODES.LIGHTEN]       = 'lighten';
            this.blendModes[CONST.BLEND_MODES.COLOR_DODGE]   = 'color-dodge';
            this.blendModes[CONST.BLEND_MODES.COLOR_BURN]    = 'color-burn';
            this.blendModes[CONST.BLEND_MODES.HARD_LIGHT]    = 'hard-light';
            this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT]    = 'soft-light';
            this.blendModes[CONST.BLEND_MODES.DIFFERENCE]    = 'difference';
            this.blendModes[CONST.BLEND_MODES.EXCLUSION]     = 'exclusion';
            this.blendModes[CONST.BLEND_MODES.HUE]           = 'hue';
            this.blendModes[CONST.BLEND_MODES.SATURATION]    = 'saturation';
            this.blendModes[CONST.BLEND_MODES.COLOR]         = 'color';
            this.blendModes[CONST.BLEND_MODES.LUMINOSITY]    = 'luminosity';
        }
        else
        {
            // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
            this.blendModes[CONST.BLEND_MODES.NORMAL]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.ADD]           = 'lighter'; //IS THIS OK???
            this.blendModes[CONST.BLEND_MODES.MULTIPLY]      = 'source-over';
            this.blendModes[CONST.BLEND_MODES.SCREEN]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.OVERLAY]       = 'source-over';
            this.blendModes[CONST.BLEND_MODES.DARKEN]        = 'source-over';
            this.blendModes[CONST.BLEND_MODES.LIGHTEN]       = 'source-over';
            this.blendModes[CONST.BLEND_MODES.COLOR_DODGE]   = 'source-over';
            this.blendModes[CONST.BLEND_MODES.COLOR_BURN]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.HARD_LIGHT]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.DIFFERENCE]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.EXCLUSION]     = 'source-over';
            this.blendModes[CONST.BLEND_MODES.HUE]           = 'source-over';
            this.blendModes[CONST.BLEND_MODES.SATURATION]    = 'source-over';
            this.blendModes[CONST.BLEND_MODES.COLOR]         = 'source-over';
            this.blendModes[CONST.BLEND_MODES.LUMINOSITY]    = 'source-over';
        }
    }
};

},{"../../const":3,"../../math":13,"../../utils":58,"../SystemRenderer":23,"./utils/CanvasMaskManager":27}],25:[function(require,module,exports){
/**
 * Creates a Canvas element of the given size.
 *
 * @class
 * @memberof PIXI
 * @param width {number} the width for the newly created canvas
 * @param height {number} the height for the newly created canvas
 */
function CanvasBuffer(width, height)
{
    /**
     * The Canvas object that belongs to this CanvasBuffer.
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');

    this.canvas.width = width;
    this.canvas.height = height;
}

CanvasBuffer.prototype.constructor = CanvasBuffer;
module.exports = CanvasBuffer;

Object.defineProperties(CanvasBuffer.prototype, {
    /**
     * The width of the canvas buffer in pixels.
     *
     * @member {number}
     * @memberof CanvasBuffer#
     */
    width: {
        get: function ()
        {
            return this.canvas.width;
        },
        set: function (val)
        {
            this.canvas.width = val;
        }
    },
    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     * @memberof CanvasBuffer#
     */
    height: {
        get: function ()
        {
            return this.canvas.height;
        },
        set: function (val)
        {
            this.canvas.height = val;
        }
    }
});

/**
 * Clears the canvas that was created by the CanvasBuffer class.
 *
 * @private
 */
CanvasBuffer.prototype.clear = function ()
{
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
};

/**
 * Resizes the canvas to the specified width and height.
 *
 * @param width {number} the new width of the canvas
 * @param height {number} the new height of the canvas
 */
CanvasBuffer.prototype.resize = function (width, height)
{
    this.canvas.width = width;
    this.canvas.height = height;
};

/**
 * Destroys this canvas.
 *
 */
CanvasBuffer.prototype.destroy = function ()
{
    this.context = null;
    this.canvas = null;
};

},{}],26:[function(require,module,exports){
var CONST = require('../../../const');

/**
 * A set of functions used by the canvas renderer to draw the primitive graphics data.
 * @static
 * @memberof PIXI
 */
var CanvasGraphics = module.exports = {};

/*
 * Renders a Graphics object to a canvas.
 *
 * @param graphics {Graphics} the actual graphics object to render
 * @param context {CanvasRenderingContext2D} the 2d drawing method of the canvas
 */
CanvasGraphics.renderGraphics = function (graphics, context)
{
    var worldAlpha = graphics.worldAlpha;

    if (graphics.dirty)
    {
        this.updateGraphicsTint(graphics);
        graphics.dirty = false;
    }

    for (var i = 0; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        var fillColor = data._fillTint;
        var lineColor = data._lineTint;

        context.lineWidth = data.lineWidth;

        if (data.type === CONST.SHAPES.POLY)
        {
            context.beginPath();

            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++)
            {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            if (shape.closed)
            {
                context.lineTo(points[0], points[1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length-2] && points[1] === points[points.length-1])
            {
                context.closePath();
            }

            if (data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.RECT)
        {

            if (data.fillColor || data.fillColor === 0)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fillRect(shape.x, shape.y, shape.width, shape.height);

            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.strokeRect(shape.x, shape.y, shape.width, shape.height);
            }
        }
        else if (data.type === CONST.SHAPES.CIRC)
        {
            // TODO - need to be Undefined!
            context.beginPath();
            context.arc(shape.x, shape.y, shape.radius,0,2*Math.PI);
            context.closePath();

            if (data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.ELIP)
        {
            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - w/2;
            var y = shape.y - h/2;

            context.beginPath();

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

            context.closePath();

            if (data.fill)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.RREC)
        {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();

            if (data.fillColor || data.fillColor === 0)
            {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();

            }
            if (data.lineWidth)
            {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
    }
};

/*
 * Renders a graphics mask
 *
 * @private
 * @param graphics {Graphics} the graphics which will be used as a mask
 * @param context {CanvasRenderingContext2D} the context 2d method of the canvas
 */
CanvasGraphics.renderGraphicsMask = function (graphics, context)
{
    var len = graphics.graphicsData.length;

    if (len === 0)
    {
        return;
    }

    context.beginPath();

    for (var i = 0; i < len; i++)
    {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        if (data.type === CONST.SHAPES.POLY)
        {

            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++)
            {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length-2] && points[1] === points[points.length-1])
            {
                context.closePath();
            }

        }
        else if (data.type === CONST.SHAPES.RECT)
        {
            context.rect(shape.x, shape.y, shape.width, shape.height);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.CIRC)
        {
            // TODO - need to be Undefined!
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.ELIP)
        {

            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - w/2;
            var y = shape.y - h/2;

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.RREC)
        {

            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
        }
    }
};

/*
 * Updates the tint of a graphics object
 *
 * @private
 * @param graphics {Graphics} the graphics that will have its tint updated
 * 
 */
CanvasGraphics.updateGraphicsTint = function (graphics)
{
    if (graphics.tint === 0xFFFFFF)
    {
        return;
    }

    var tintR = (graphics.tint >> 16 & 0xFF) / 255;
    var tintG = (graphics.tint >> 8 & 0xFF) / 255;
    var tintB = (graphics.tint & 0xFF)/ 255;

    for (var i = 0; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];

        var fillColor = data.fillColor | 0;
        var lineColor = data.lineColor | 0;

        /*
        var colorR = (fillColor >> 16 & 0xFF) / 255;
        var colorG = (fillColor >> 8 & 0xFF) / 255;
        var colorB = (fillColor & 0xFF) / 255;

        colorR *= tintR;
        colorG *= tintG;
        colorB *= tintB;

        fillColor = ((colorR*255 << 16) + (colorG*255 << 8) + colorB*255);

        colorR = (lineColor >> 16 & 0xFF) / 255;
        colorG = (lineColor >> 8 & 0xFF) / 255;
        colorB = (lineColor & 0xFF) / 255;

        colorR *= tintR;
        colorG *= tintG;
        colorB *= tintB;

        lineColor = ((colorR*255 << 16) + (colorG*255 << 8) + colorB*255);
        */

        // super inline cos im an optimization NAZI :)
        data._fillTint = (((fillColor >> 16 & 0xFF) / 255 * tintR*255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG*255 << 8) +  (fillColor & 0xFF) / 255 * tintB*255);
        data._lineTint = (((lineColor >> 16 & 0xFF) / 255 * tintR*255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG*255 << 8) +  (lineColor & 0xFF) / 255 * tintB*255);

    }
};


},{"../../../const":3}],27:[function(require,module,exports){
var CanvasGraphics = require('./CanvasGraphics');

/**
 * A set of functions used to handle masking.
 *
 * @class
 * @memberof PIXI
 */
function CanvasMaskManager()
{}

CanvasMaskManager.prototype.constructor = CanvasMaskManager;
module.exports = CanvasMaskManager;

/**
 * This method adds it to the current stack of masks.
 *
 * @param maskData {object} the maskData that will be pushed
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer context to use.
 */
CanvasMaskManager.prototype.pushMask = function (maskData, renderer)
{

    renderer.context.save();

    var cacheAlpha = maskData.alpha;
    var transform = maskData.worldTransform;
    var resolution = renderer.resolution;

    renderer.context.setTransform(
        transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution
    );

    //TODO suport sprite alpha masks??
    //lots of effort required. If demand is great enough..
    if(!maskData.texture)
    {
        CanvasGraphics.renderGraphicsMask(maskData, renderer.context);
        renderer.context.clip();
    }

    maskData.worldAlpha = cacheAlpha;
};

/**
 * Restores the current drawing context to the state it was before the mask was applied.
 *
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer context to use.
 */
CanvasMaskManager.prototype.popMask = function (renderer)
{
    renderer.context.restore();
};

},{"./CanvasGraphics":26}],28:[function(require,module,exports){
var utils = require('../../../utils');

/**
 * Utility methods for Sprite/Texture tinting.
 * @static
 * @memberof PIXI
 */
var CanvasTinter = module.exports = {};

/**
 * Basically this method just needs a sprite and a color and tints the sprite with the given color.
 *
 * @param sprite {Sprite} the sprite to tint
 * @param color {number} the color to use to tint the sprite with
 * @return {HTMLCanvasElement} The tinted canvas
 */
CanvasTinter.getTintedTexture = function (sprite, color)
{
    var texture = sprite.texture;

    color = CanvasTinter.roundColor(color);

    var stringColor = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);

    texture.tintCache = texture.tintCache || {};

    if (texture.tintCache[stringColor])
    {
        return texture.tintCache[stringColor];
    }

     // clone texture..
    var canvas = CanvasTinter.canvas || document.createElement('canvas');

    //CanvasTinter.tintWithPerPixel(texture, stringColor, canvas);
    CanvasTinter.tintMethod(texture, color, canvas);

    if (CanvasTinter.convertTintToImage)
    {
        // is this better?
        var tintImage = new Image();
        tintImage.src = canvas.toDataURL();

        texture.tintCache[stringColor] = tintImage;
    }
    else
    {
        texture.tintCache[stringColor] = canvas;
        // if we are not converting the texture to an image then we need to lose the reference to the canvas
        CanvasTinter.canvas = null;
    }

    return canvas;
};

/**
 * Tint a texture using the 'multiply' operation.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithMultiply = function (texture, color, canvas)
{
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.fillStyle = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);

    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'multiply';

    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    context.globalCompositeOperation = 'destination-atop';

    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );
};

/**
 * Tint a texture using the 'overlay' operation.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithOverlay = function (texture, color, canvas)
{
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.globalCompositeOperation = 'copy';
    context.fillStyle = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'destination-atop';
    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    // context.globalCompositeOperation = 'copy';
};

/**
 * Tint a texture pixel per pixel.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithPerPixel = function (texture, color, canvas)
{
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    var rgbValues = utils.hex2rgb(color);
    var r = rgbValues[0], g = rgbValues[1], b = rgbValues[2];

    var pixelData = context.getImageData(0, 0, crop.width, crop.height);

    var pixels = pixelData.data;

    for (var i = 0; i < pixels.length; i += 4)
    {
        pixels[i+0] *= r;
        pixels[i+1] *= g;
        pixels[i+2] *= b;
    }

    context.putImageData(pixelData, 0, 0);
};

/**
 * Rounds the specified color according to the CanvasTinter.cacheStepsPerColorChannel.
 *
 * @param color {number} the color to round, should be a hex color
 */
CanvasTinter.roundColor = function (color)
{
    var step = CanvasTinter.cacheStepsPerColorChannel;

    var rgbValues = utils.hex2rgb(color);

    rgbValues[0] = Math.min(255, (rgbValues[0] / step) * step);
    rgbValues[1] = Math.min(255, (rgbValues[1] / step) * step);
    rgbValues[2] = Math.min(255, (rgbValues[2] / step) * step);

    return utils.rgb2hex(rgbValues);
};

/**
 * Number of steps which will be used as a cap when rounding colors.
 *
 * @member
 */
CanvasTinter.cacheStepsPerColorChannel = 8;

/**
 * Tint cache boolean flag.
 *
 * @member
 */
CanvasTinter.convertTintToImage = false;

/**
 * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
 *
 * @member
 */
CanvasTinter.canUseMultiply = utils.canUseNewCanvasBlendModes();

/**
 * The tinting method that will be used.
 *
 */
CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply :  CanvasTinter.tintWithPerPixel;

},{"../../../utils":58}],29:[function(require,module,exports){
var SystemRenderer = require('../SystemRenderer'),
    ShaderManager = require('./managers/ShaderManager'),
    MaskManager = require('./managers/MaskManager'),
    StencilManager = require('./managers/StencilManager'),
    FilterManager = require('./managers/FilterManager'),
    BlendModeManager = require('./managers/BlendModeManager'),
    RenderTarget = require('./utils/RenderTarget'),
    ObjectRenderer = require('./utils/ObjectRenderer'),
    FXAAFilter = require('./filters/FXAAFilter'),
    utils = require('../../utils'),
    CONST = require('../../const');

/**
 * The WebGLRenderer draws the scene and all its content onto a webGL enabled canvas. This renderer
 * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
 * So no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends SystemRenderer
 * @param [width=0] {number} the width of the canvas view
 * @param [height=0] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias. If not available natively then FXAA antialiasing is used
 * @param [options.forceFXAA=false] {boolean} forces FXAA antialiasing to be used over native. FXAA is faster, but may not always lok as great
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or
 *      not before the new render pass.
 * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if
 *      you need to call toDataUrl on the webgl context.
 */
function WebGLRenderer(width, height, options)
{
    options = options || {};

    SystemRenderer.call(this, 'WebGL', width, height, options);

    /**
     * The type of this renderer as a standardised const
     *
     * @member {number}
     *
     */
    this.type = CONST.RENDERER_TYPE.WEBGL;

    this.handleContextLost = this.handleContextLost.bind(this);
    this.handleContextRestored = this.handleContextRestored.bind(this);

    this._updateTextureBound = function(e){
        this.updateTexture(e.target);
    }.bind(this);

    this._destroyTextureBound = function(e){
        this.destroyTexture(e.target);
    }.bind(this);

    this.view.addEventListener('webglcontextlost', this.handleContextLost, false);
    this.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);

    //TODO possibility to force FXAA as it may offer better performance?
    /**
     * Does it use FXAA ?
     *
     * @member {boolean}
     * @private
     */
    this._useFXAA = !!options.forceFXAA && options.antialias;

    /**
     * The fxaa filter
     *
     * @member {FXAAFilter}
     * @private
     */
    this._FXAAFilter = null;

    /**
     * The options passed in to create a new webgl context.
     *
     * @member {object}
     * @private
     */
    this._contextOptions = {
        alpha: this.transparent,
        antialias: options.antialias,
        premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',
        stencil: true,
        preserveDrawingBuffer: options.preserveDrawingBuffer
    };

    /**
     * Counter for the number of draws made each frame
     *
     * @member {number}
     */
    this.drawCount = 0;

    /**
     * Deals with managing the shader programs and their attribs.
     *
     * @member {ShaderManager}
     */
    this.shaderManager = new ShaderManager(this);

    /**
     * Manages the masks using the stencil buffer.
     *
     * @member {MaskManager}
     */
    this.maskManager = new MaskManager(this);

    /**
     * Manages the stencil buffer.
     *
     * @member {StencilManager}
     */
    this.stencilManager = new StencilManager(this);

    /**
     * Manages the filters.
     *
     * @member {FilterManager}
     */
    this.filterManager = new FilterManager(this);


    /**
     * Manages the blendModes
     * @member {BlendModeManager}
     */
    this.blendModeManager = new BlendModeManager(this);

    /**
     * Holds the current render target
     * @member {Object}
     */
    this.currentRenderTarget = this.renderTarget;

    /**
     * object renderer @alvin
     * @member {ObjectRenderer}
     */
    this.currentRenderer = new ObjectRenderer(this);

    this.initPlugins();

     // initialize the context so it is ready for the managers.
    this._initContext();

    // map some webGL blend modes..
    this._mapBlendModes();

    /**
     * An array of render targets
     * @member {Array}
     * @private
     */
    this._renderTargetStack = [];
}

// constructor
WebGLRenderer.prototype = Object.create(SystemRenderer.prototype);
WebGLRenderer.prototype.constructor = WebGLRenderer;
module.exports = WebGLRenderer;
utils.pluginTarget.mixin(WebGLRenderer);

WebGLRenderer.glContextId = 0;

/**
 * Creates the WebGL context
 * @private
 */
WebGLRenderer.prototype._initContext = function ()
{
    var gl = this.view.getContext('webgl', this._contextOptions) || this.view.getContext('experimental-webgl', this._contextOptions);
    this.gl = gl;

    if (!gl)
    {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    this.glContextId = WebGLRenderer.glContextId++;
    gl.id = this.glContextId;
    gl.renderer = this;

    // set up the default pixi settings..
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);

    this.renderTarget = new RenderTarget(this.gl, this.width, this.height, null, this.resolution, true);

    this.emit('context', gl);

    // setup the width/height properties and gl viewport
    this.resize(this.width, this.height);

    if(!this._useFXAA)
    {
        this._useFXAA = ( this._contextOptions.antialias && ! gl.getContextAttributes().antialias );
    }


    if(this._useFXAA)
    {
        window.console.warn('FXAA antialiasing being used instead of native antialiasing');
        this._FXAAFilter = [new FXAAFilter()];
    }
};

/**
 * Renders the object to its webGL view
 *
 * @param object {DisplayObject} the object to be rendered
 */
WebGLRenderer.prototype.render = function (object)
{
    // no point rendering if our context has been blown up!
    if (this.gl.isContextLost())
    {
        return;
    }

    this._lastObjectRendered = object;

    if(this._useFXAA)
    {
        this._FXAAFilter[0].uniforms.resolution.value.x = this.width;
        this._FXAAFilter[0].uniforms.resolution.value.y = this.height;
        object.filterArea = this.renderTarget.size;
        object.filters = this._FXAAFilter;
    }

    var cacheParent = object.parent;
    object.parent = this._tempDisplayObjectParent;

    // update the scene graph
    object.updateTransform();

    object.parent = cacheParent;

    var gl = this.gl;

    // make sure we are bound to the main frame buffer
    this.setRenderTarget(this.renderTarget);

    if (this.clearBeforeRender)
    {
        if (this.transparent)
        {
            gl.clearColor(0, 0, 0, 0);
        }
        else
        {
            gl.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1);
        }

        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    this.renderDisplayObject(object, this.renderTarget);//this.projection);
};

/**
 * Renders a Display Object.
 *
 * @param displayObject {DisplayObject} The DisplayObject to render
 * @param renderTarget {RenderTarget} The render target to use to render this display object
 *
 */
WebGLRenderer.prototype.renderDisplayObject = function (displayObject, renderTarget)//projection, buffer)
{
    // TODO is this needed...
    //this.blendModeManager.setBlendMode(CONST.BLEND_MODES.NORMAL);
    this.setRenderTarget(renderTarget);

    // start the filter manager
    this.filterManager.setFilterStack( renderTarget.filterStack );

    // render the scene!
    displayObject.renderWebGL(this);

    // finish the current renderer..
    this.currentRenderer.flush();
};

/**
 * Changes the current renderer to the one given in parameter
 *
 * @param objectRenderer {Object} TODO @alvin
 *
 */
WebGLRenderer.prototype.setObjectRenderer = function (objectRenderer)
{
    if (this.currentRenderer === objectRenderer)
    {
        return;
    }

    this.currentRenderer.stop();
    this.currentRenderer = objectRenderer;
    this.currentRenderer.start();
};

/**
 * Changes the current render target to the one given in parameter
 *
 * @param renderTarget {RenderTarget} the new render target
 *
 */
WebGLRenderer.prototype.setRenderTarget = function (renderTarget)
{
    if( this.currentRenderTarget === renderTarget)
    {
        return;
    }
    // TODO - maybe down the line this should be a push pos thing? Leaving for now though.
    this.currentRenderTarget = renderTarget;
    this.currentRenderTarget.activate();
    this.stencilManager.setMaskStack( renderTarget.stencilMaskStack );
};


/**
 * Resizes the webGL view to the specified width and height.
 *
 * @param width {number} the new width of the webGL view
 * @param height {number} the new height of the webGL view
 */
WebGLRenderer.prototype.resize = function (width, height)
{
    SystemRenderer.prototype.resize.call(this, width, height);

   // console.log(width)
    this.filterManager.resize(width, height);
    this.renderTarget.resize(width, height);
    if(this.currentRenderTarget === this.renderTarget)
    {
        this.renderTarget.activate();
    }
};

/**
 * Updates and/or Creates a WebGL texture for the renderer's context.
 *
 * @param texture {BaseTexture|Texture} the texture to update
 */
WebGLRenderer.prototype.updateTexture = function (texture)
{
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded)
    {
        return;
    }

    var gl = this.gl;

    if (!texture._glTextures[gl.id])
    {
        texture._glTextures[gl.id] = gl.createTexture();
        texture.on('update', this._updateTextureBound);
        texture.on('dispose', this._destroyTextureBound);
    }


    gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);


    if (texture.mipmap && texture.isPowerOfTwo)
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
    }
    else
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    }

    if (!texture.isPowerOfTwo)
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    else
    {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }

    return  texture._glTextures[gl.id];
};

/**
 * Deletes the texture from WebGL
 *
 * @param texture {BaseTexture|Texture} the texture to destroy
 */
WebGLRenderer.prototype.destroyTexture = function (texture)
{
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded)
    {
        return;
    }

    if (texture._glTextures[this.gl.id])
    {
        this.gl.deleteTexture(texture._glTextures[this.gl.id]);
    }
};

/**
 * Handles a lost webgl context
 *
 * @param event {Event}
 * @private
 */
WebGLRenderer.prototype.handleContextLost = function (event)
{
    event.preventDefault();
};

/**
 * Handles a restored webgl context
 *
 * @param event {Event}
 * @private
 */
WebGLRenderer.prototype.handleContextRestored = function ()
{
    this._initContext();

    // empty all the old gl textures as they are useless now
    for (var key in utils.BaseTextureCache)
    {
        utils.BaseTextureCache[key]._glTextures.length = 0;
    }
};

/**
 * Removes everything from the renderer (event listeners, spritebatch, etc...)
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
WebGLRenderer.prototype.destroy = function (removeView)
{
    this.destroyPlugins();

    // remove listeners
    this.view.removeEventListener('webglcontextlost', this.handleContextLost);
    this.view.removeEventListener('webglcontextrestored', this.handleContextRestored);

    // call base destroy
    SystemRenderer.prototype.destroy.call(this, removeView);

    this.uuid = 0;

    // destroy the managers
    this.shaderManager.destroy();
    this.maskManager.destroy();
    this.stencilManager.destroy();
    this.filterManager.destroy();

    this.shaderManager = null;
    this.maskManager = null;
    this.filterManager = null;
    this.blendModeManager = null;

    this.handleContextLost = null;
    this.handleContextRestored = null;

    this._contextOptions = null;

    this.drawCount = 0;

    this.gl = null;
};

/**
 * Maps Pixi blend modes to WebGL blend modes.
 *
 * @private
 */
WebGLRenderer.prototype._mapBlendModes = function ()
{
    var gl = this.gl;

    if (!this.blendModes)
    {
        this.blendModes = {};

        this.blendModes[CONST.BLEND_MODES.NORMAL]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.ADD]           = [gl.SRC_ALPHA, gl.DST_ALPHA];
        this.blendModes[CONST.BLEND_MODES.MULTIPLY]      = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.SCREEN]        = [gl.SRC_ALPHA, gl.ONE];
        this.blendModes[CONST.BLEND_MODES.OVERLAY]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.DARKEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.LIGHTEN]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.COLOR_DODGE]   = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.COLOR_BURN]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.HARD_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.SOFT_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.DIFFERENCE]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.EXCLUSION]     = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.HUE]           = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.SATURATION]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.COLOR]         = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.BLEND_MODES.LUMINOSITY]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    }
};

},{"../../const":3,"../../utils":58,"../SystemRenderer":23,"./filters/FXAAFilter":31,"./managers/BlendModeManager":33,"./managers/FilterManager":34,"./managers/MaskManager":35,"./managers/ShaderManager":36,"./managers/StencilManager":37,"./utils/ObjectRenderer":43,"./utils/RenderTarget":45}],30:[function(require,module,exports){
var DefaultShader = require('../shaders/TextureShader');

/**
 * This is the base class for creating a PIXI filter. Currently only WebGL supports filters.
 * If you want to make a custom filter this should be your base class.
 *
 * @class
 * @memberof PIXI
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param uniforms {object} An object containing the uniforms for this filter.
 */
function AbstractFilter(vertexSrc, fragmentSrc, uniforms)
{

    /**
     * An array of shaders
     * @member {Shader[]}
     * @private
     */
    this.shaders = [];

    /**
     * The extra padding that the filter might need
     * @member {number}
     */
    this.padding = 0;

    /**
     * The uniforms as an object
     * @member {object}
     * @private
     */
    this.uniforms = uniforms || {};


    /**
     * The code of the vertex shader
     * @member {string[]}
     * @private
     */
    this.vertexSrc = vertexSrc || DefaultShader.defaultVertexSrc;

    /**
     * The code of the frament shader
     * @member {string[]}
     * @private
     */
    this.fragmentSrc = fragmentSrc || DefaultShader.defaultFragmentSrc;

    //TODO a reminder - would be cool to have lower res filters as this would give better performance.

    //typeof fragmentSrc === 'string' ? fragmentSrc.split('') : (fragmentSrc || []);

}

AbstractFilter.prototype.constructor = AbstractFilter;
module.exports = AbstractFilter;

/*
 * Grabs a shader from the current renderer
 * @param renderer {WebGLRenderer} The renderer to retrieve the shader from
 *
 */
AbstractFilter.prototype.getShader = function (renderer)
{
    var gl = renderer.gl;

    var shader = this.shaders[gl.id];

    if (!shader)
    {
        shader = new DefaultShader(renderer.shaderManager,
            this.vertexSrc,
            this.fragmentSrc,
            this.uniforms,
            this.attributes
        );

        this.shaders[gl.id] = shader;
    }

    return shader;
};

/*
 * Applies the filter
 * @param renderer {WebGLRenderer} The renderer to retrieve the filter from
 * @param input {RenderTarget}
 * @param output {RenderTarget}
 * @param clear {boolean} Whether or not we want to clear the outputTarget
 */
AbstractFilter.prototype.applyFilter = function (renderer, input, output, clear)
{
    var shader = this.getShader(renderer);

    renderer.filterManager.applyFilter(shader, input, output, clear);
};

/**
 * Syncs a uniform between the class object and the shaders.
 *
 */
AbstractFilter.prototype.syncUniform = function (uniform)
{
    for (var i = 0, j = this.shaders.length; i < j; ++i)
    {
        this.shaders[i].syncUniform(uniform);
    }
};

/*
AbstractFilter.prototype.apply = function (frameBuffer)
{
    // TODO :)
};
*/

},{"../shaders/TextureShader":42}],31:[function(require,module,exports){
(function (__dirname){
var AbstractFilter = require('./AbstractFilter');

var fs = require('fs');

/**
 *
 * Basic FXAA implementation based on the code on geeks3d.com with the
 * modification that the texture2DLod stuff was removed since it's
 * unsupported by WebGL.
 *
 * --
 * From:
 * https://github.com/mitsuhiko/webgl-meincraft
 *
 * @class
 * @extends AbstractFilter
 * @memberof PIXI
 *
 */
function FXAAFilter()
{
    AbstractFilter.call(this,
        // vertex shader
        fs.readFileSync(__dirname + '/FXAA.vert', 'utf8'),
        // fragment shader
        fs.readFileSync(__dirname + '/FXAA.frag', 'utf8'),
        // uniforms
        {
            resolution: { type: 'v2', value: { x: 1, y: 1 } }
        }
    );

}

FXAAFilter.prototype = Object.create(AbstractFilter.prototype);
FXAAFilter.prototype.constructor = FXAAFilter;
module.exports = FXAAFilter;

FXAAFilter.prototype.applyFilter = function (renderer, input, output)
{
    var filterManager = renderer.filterManager;

    var shader = this.getShader( renderer );
     // draw the filter...
    filterManager.applyFilter(shader, input, output);
};

}).call(this,"/lib/pixi/src/core/renderers/webgl/filters")

},{"./AbstractFilter":30,"fs":61}],32:[function(require,module,exports){
(function (__dirname){
var AbstractFilter = require('./AbstractFilter'),
    math =  require('../../../math');

// fs needs to be decalred alone for brfs to pick it up properly.
var fs = require('fs');

/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends AbstractFilter
 * @memberof PIXI
 * @param sprite {Sprite} the target sprite
 */
function SpriteMaskFilter(sprite)
{
    var maskMatrix = new math.Matrix();

    AbstractFilter.call(this,
        fs.readFileSync(__dirname + '/spriteMaskFilter.vert', 'utf8'),
        fs.readFileSync(__dirname + '/spriteMaskFilter.frag', 'utf8'),
        {
            mask:           { type: 'sampler2D', value: sprite._texture },
            otherMatrix:    { type: 'mat3', value: maskMatrix.toArray(true) }
        }
    );

    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
}

SpriteMaskFilter.prototype = Object.create(AbstractFilter.prototype);
SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;
module.exports = SpriteMaskFilter;

/**
 * Applies the filter ? @alvin
 *
 * @param renderer {WebGLRenderer} A reference to the WebGL renderer
 * @param input {RenderTarget}
 * @param output {RenderTarget}
 */
SpriteMaskFilter.prototype.applyFilter = function (renderer, input, output)
{
    var filterManager = renderer.filterManager;

    this.uniforms.mask.value = this.maskSprite._texture;

    filterManager.calculateMappedMatrix(input.frame, this.maskSprite, this.maskMatrix);

    this.uniforms.otherMatrix.value = this.maskMatrix.toArray(true);

    var shader = this.getShader(renderer);
     // draw the filter...
    filterManager.applyFilter(shader, input, output);
};


Object.defineProperties(SpriteMaskFilter.prototype, {
    /**
     * The texture used for the displacement map. Must be power of 2 sized texture.
     *
     * @member {Texture}
     * @memberof SpriteMaskFilter#
     */
    map: {
        get: function ()
        {
            return this.uniforms.mask.value;
        },
        set: function (value)
        {
            this.uniforms.mask.value = value;
        }
    },

    /**
     * The offset used to move the displacement map.
     *
     * @member {Point}
     * @memberof SpriteMaskFilter#
     */
    offset: {
        get: function()
        {
            return this.uniforms.offset.value;
        },
        set: function(value)
        {
            this.uniforms.offset.value = value;
        }
    }
});

}).call(this,"/lib/pixi/src/core/renderers/webgl/filters")

},{"../../../math":13,"./AbstractFilter":30,"fs":61}],33:[function(require,module,exports){
var WebGLManager = require('./WebGLManager');

/**
 * @class
 * @memberof PIXI
 * @extends WebGlManager
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function BlendModeManager(renderer)
{
    WebGLManager.call(this, renderer);

    /**
     * @member {number}
     */
    this.currentBlendMode = 99999;
}

BlendModeManager.prototype = Object.create(WebGLManager.prototype);
BlendModeManager.prototype.constructor = BlendModeManager;
module.exports = BlendModeManager;

/**
 * Sets-up the given blendMode from WebGL's point of view.
 *
 * @param blendMode {number} the blendMode, should be a Pixi const, such as BlendModes.ADD
 */
BlendModeManager.prototype.setBlendMode = function (blendMode)
{
    if (this.currentBlendMode === blendMode)
    {
        return false;
    }

    this.currentBlendMode = blendMode;

    var mode = this.renderer.blendModes[this.currentBlendMode];
    this.renderer.gl.blendFunc(mode[0], mode[1]);

    return true;
};

},{"./WebGLManager":38}],34:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    RenderTarget = require('../utils/RenderTarget'),
    CONST = require('../../../const'),
    Quad = require('../utils/Quad'),
    math =  require('../../../math');

/**
 * @class
 * @memberof PIXI
 * @extends WebGLManager
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function FilterManager(renderer)
{
    WebGLManager.call(this, renderer);

    /**
     * @member {any[]}
     */
    this.filterStack = [];

    this.filterStack.push({
        renderTarget:renderer.currentRenderTarget,
        filter:[],
        bounds:null
    });

    /**
     * @member {any[]}
     */
    this.texturePool = [];

    // listen for context and update necessary buffers
    //TODO make this dynamic!
    //TODO test this out by forces power of two?
    this.textureSize = new math.Rectangle( 0, 0, renderer.width, renderer.height );

    this.currentFrame = null;
}

FilterManager.prototype = Object.create(WebGLManager.prototype);
FilterManager.prototype.constructor = FilterManager;
module.exports = FilterManager;


/**
 * Called when there is a WebGL context change.
 *
 */
FilterManager.prototype.onContextChange = function ()
{
    this.texturePool.length = 0;

    var gl = this.renderer.gl;
    this.quad = new Quad(gl);
};

/**
 * @param renderer {WebGLRenderer}
 * @param buffer {ArrayBuffer}
 */
FilterManager.prototype.setFilterStack = function ( filterStack )
{
    this.filterStack = filterStack;
};

/**
 * Applies the filter and adds it to the current filter stack.
 *
 * @param filterBlock {object} the filter that will be pushed to the current filter stack
 */
FilterManager.prototype.pushFilter = function (target, filters)
{
    // get the bounds of the object..
    var bounds = target.filterArea || target.getBounds();

    // round off the rectangle to get a nice smoooooooth filter :)
    bounds.x = bounds.x | 0;
    bounds.y = bounds.y | 0;
    bounds.width = bounds.width | 0;
    bounds.height = bounds.height | 0;


    // padding!
    var padding = filters[0].padding;
    bounds.x -= padding;
    bounds.y -= padding;
    bounds.width += padding * 2;
    bounds.height += padding * 2;


    if(this.renderer.currentRenderTarget.transform)
    {
        //TODO this will break if the renderTexture transform is anything other than a translation.
        //Will need to take the full matrix transform into acount..
        var transform = this.renderer.currentRenderTarget.transform;

        bounds.x += transform.tx;
        bounds.y += transform.ty;

        this.capFilterArea( bounds );

        bounds.x -= transform.tx;
        bounds.y -= transform.ty;
    }
    else
    {
         this.capFilterArea( bounds );
    }


    this.currentFrame = bounds;

    var texture = this.getRenderTarget();

    this.renderer.setRenderTarget(texture);

    // clear the texture..
    texture.clear();

    // TODO get rid of object creation!
    this.filterStack.push({
        renderTarget: texture,
        filter: filters
    });

};


/**
 * Removes the last filter from the filter stack and returns it.
 *
 */
FilterManager.prototype.popFilter = function ()
{
    var filterData = this.filterStack.pop();
    var previousFilterData = this.filterStack[this.filterStack.length-1];

    var input = filterData.renderTarget;

    var output = previousFilterData.renderTarget;

    // use program
    var gl = this.renderer.gl;


    this.currentFrame = input.frame;

    this.quad.map(this.textureSize, input.frame);

    // TODO.. this probably only needs to be done once!
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);

    var filters = filterData.filter;

    if (filters.length === 1)
    {
        // TODO (cengler) - There has to be a better way then setting this each time?
        if (filters[0].uniforms.dimensions)
        {
            filters[0].uniforms.dimensions.value[0] = this.renderer.width;
            filters[0].uniforms.dimensions.value[1] = this.renderer.height;
            filters[0].uniforms.dimensions.value[2] = this.quad.vertices[0];
            filters[0].uniforms.dimensions.value[3] = this.quad.vertices[5];
        }

        filters[0].applyFilter( this.renderer, input, output );
        this.returnRenderTarget( input );

    }
    else
    {
        var flipTexture = input;
        var flopTexture = this.getRenderTarget(true);

        for (var i = 0; i < filters.length-1; i++)
        {
            var filter = filters[i];

            // TODO (cengler) - There has to be a better way then setting this each time?
            if (filter.uniforms.dimensions)
            {
                filter.uniforms.dimensions.value[0] = this.renderer.width;
                filter.uniforms.dimensions.value[1] = this.renderer.height;
                filter.uniforms.dimensions.value[2] = this.quad.vertices[0];
                filter.uniforms.dimensions.value[3] = this.quad.vertices[5];
            }

            filter.applyFilter( this.renderer, flipTexture, flopTexture );

            var temp = flipTexture;
            flipTexture = flopTexture;
            flopTexture = temp;
        }

        filters[filters.length-1].applyFilter( this.renderer, flipTexture, output );

        this.returnRenderTarget( flipTexture );
        this.returnRenderTarget( flopTexture );
    }

    return filterData.filter;
};

/**
 * Grabs an render target from the internal pool
 *
 * @param clear {boolean} Whether or not we need to clear the RenderTarget
 * @return {RenderTarget}
 */
FilterManager.prototype.getRenderTarget = function ( clear )
{
    var renderTarget = this.texturePool.pop() || new RenderTarget(this.renderer.gl, this.textureSize.width, this.textureSize.height, CONST.SCALE_MODES.LINEAR, this.renderer.resolution * CONST.FILTER_RESOLUTION);
    renderTarget.frame = this.currentFrame;

    if (clear)
    {
        renderTarget.clear(true);
    }

    return renderTarget;
};

/*
 * Returns a RenderTarget to the internal pool
 * @param renderTarget {RenderTarget} The RenderTarget we want to return to the pool
 */
FilterManager.prototype.returnRenderTarget = function (renderTarget)
{
    this.texturePool.push( renderTarget );
};

/*
 * Applies the filter
 * @param shader {Shader} The shader to upload
 * @param inputTarget {RenderTarget}
 * @param outputTarget {RenderTarget}
 * @param clear {boolean} Whether or not we want to clear the outputTarget
 */
FilterManager.prototype.applyFilter = function (shader, inputTarget, outputTarget, clear)
{
    var gl = this.renderer.gl;

    this.renderer.setRenderTarget(outputTarget);

    if (clear)
    {
        outputTarget.clear();
    }

    // set the shader
    this.renderer.shaderManager.setShader(shader);

    // TODO (cengler) - Can this be cached and not `toArray`ed each frame?
    shader.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(true);

    //TODO can this be optimised?
    shader.syncUniforms();

    gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(shader.attributes.aTextureCoord, 2, gl.FLOAT, false, 0, 2 * 4 * 4);
    gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false, 0, 4 * 4 * 4);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, inputTarget.texture);

    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );
};

/*
 * Calculates the mapped matrix
 * @param filterArea {Rectangle} The filter area
 * @param sprite {Sprite} the target sprite
 * @param outputMatrix {Matrix} @alvin
 */
// TODO playing around here.. this is temporary - (will end up in the shader)
FilterManager.prototype.calculateMappedMatrix = function (filterArea, sprite, outputMatrix)
{
    var worldTransform = sprite.worldTransform.copy(math.Matrix.TEMP_MATRIX),
    texture = sprite._texture.baseTexture;

    var mappedMatrix = outputMatrix.identity();

    // scale..
    var ratio = this.textureSize.height / this.textureSize.width;

    mappedMatrix.translate(filterArea.x / this.textureSize.width, filterArea.y / this.textureSize.height );

    mappedMatrix.scale(1 , ratio);

    var translateScaleX = (this.textureSize.width / texture.width);
    var translateScaleY = (this.textureSize.height / texture.height);

    worldTransform.tx /= texture.width * translateScaleX;
    worldTransform.ty /= texture.width * translateScaleX;

    worldTransform.invert();

    mappedMatrix.prepend(worldTransform);

    // apply inverse scale..
    mappedMatrix.scale(1 , 1/ratio);

    mappedMatrix.scale( translateScaleX , translateScaleY );

    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);

    return mappedMatrix;

    // Keeping the orginal as a reminder to me on how this works!
    //
    // var m = new math.Matrix();

    // // scale..
    // var ratio = this.textureSize.height / this.textureSize.width;

    // m.translate(filterArea.x / this.textureSize.width, filterArea.y / this.textureSize.height);


    // m.scale(1 , ratio);


    // var transform = wt.clone();

    // var translateScaleX = (this.textureSize.width / 620);
    // var translateScaleY = (this.textureSize.height / 380);

    // transform.tx /= 620 * translateScaleX;
    // transform.ty /= 620 * translateScaleX;

    // transform.invert();

    // transform.append(m);

    // // apply inverse scale..
    // transform.scale(1 , 1/ratio);

    // transform.scale( translateScaleX , translateScaleY );

    // return transform;
};

/*
 * Constrains the filter area to the texture size
 * @param filterArea {Rectangle} The filter area we want to cap
 */
FilterManager.prototype.capFilterArea = function (filterArea)
{
    if (filterArea.x < 0)
    {
        filterArea.width += filterArea.x;
        filterArea.x = 0;
    }

    if (filterArea.y < 0)
    {
        filterArea.height += filterArea.y;
        filterArea.y = 0;
    }

    if ( filterArea.x + filterArea.width > this.textureSize.width )
    {
        filterArea.width = this.textureSize.width - filterArea.x;
    }

    if ( filterArea.y + filterArea.height > this.textureSize.height )
    {
        filterArea.height = this.textureSize.height - filterArea.y;
    }
};

/*
 * Resizes all the render targets in the pool
 * @param width {number} the new width
 * @param height {number} the new height
 */
FilterManager.prototype.resize = function ( width, height )
{
    this.textureSize.width = width;
    this.textureSize.height = height;

    for (var i = 0; i < this.texturePool.length; i++)
    {
        this.texturePool[i].resize( width, height );
    }
};

/**
 * Destroys the filter and removes it from the filter stack.
 *
 */
FilterManager.prototype.destroy = function ()
{
    this.filterStack = null;
    this.offsetY = 0;

    // destroy textures
    for (var i = 0; i < this.texturePool.length; i++)
    {
        this.texturePool[i].destroy();
    }

    this.texturePool = null;
};

},{"../../../const":3,"../../../math":13,"../utils/Quad":44,"../utils/RenderTarget":45,"./WebGLManager":38}],35:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    AlphaMaskFilter = require('../filters/SpriteMaskFilter');

/**
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function MaskManager(renderer)
{
    WebGLManager.call(this, renderer);

    this.stencilStack = [];
    this.reverse = true;
    this.count = 0;

    this.alphaMaskPool = [];
}

MaskManager.prototype = Object.create(WebGLManager.prototype);
MaskManager.prototype.constructor = MaskManager;
module.exports = MaskManager;

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param graphics {Graphics}
 * @param webGLData {any[]}
 */
MaskManager.prototype.pushMask = function (target, maskData)
{
    if (maskData.texture)
    {
        this.pushSpriteMask(target, maskData);
    }
    else
    {
        this.pushStencilMask(target, maskData);
    }

};

/**
 * Removes the last mask from the mask stack and doesn't return it.
 * 
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.popMask = function (target, maskData)
{
    if (maskData.texture)
    {
        this.popSpriteMask(target, maskData);
    }
    else
    {
        this.popStencilMask(target, maskData);
    }
};

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.pushSpriteMask = function (target, maskData)
{
    var alphaMaskFilter = this.alphaMaskPool.pop();

    if (!alphaMaskFilter)
    {
        alphaMaskFilter = [new AlphaMaskFilter(maskData)];
    }

    this.renderer.filterManager.pushFilter(target, alphaMaskFilter);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 *
 */
MaskManager.prototype.popSpriteMask = function ()
{
    var filters = this.renderer.filterManager.popFilter();

    this.alphaMaskPool.push(filters);
};


/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.pushStencilMask = function (target, maskData)
{
    this.renderer.stencilManager.pushMask(maskData);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 * @param target {RenderTarget}
 * @param maskData {any[]}
 */
MaskManager.prototype.popStencilMask = function (target, maskData)
{
    this.renderer.stencilManager.popMask(maskData);
};


},{"../filters/SpriteMaskFilter":32,"./WebGLManager":38}],36:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    TextureShader = require('../shaders/TextureShader'),
    ComplexPrimitiveShader = require('../shaders/ComplexPrimitiveShader'),
    PrimitiveShader = require('../shaders/PrimitiveShader'),
    utils = require('../../../utils');

/**
 * @class
 * @memberof PIXI
 * @extends WebGLManager
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function ShaderManager(renderer)
{
    WebGLManager.call(this, renderer);

    /**
     * @member {number}
     */
    this.maxAttibs = 10;

    /**
     * @member {any[]}
     */
    this.attribState = [];

    /**
     * @member {any[]}
     */
    this.tempAttribState = [];

    for (var i = 0; i < this.maxAttibs; i++)
    {
        this.attribState[i] = false;
    }

    /**
     * @member {any[]}
     */
    this.stack = [];

    /**
     * @member {number}
     * @private
     */
    this._currentId = -1;

    /**
     * @member {Shader}
     * @private
     */
    this.currentShader = null;

//    this.initPlugins();
}

ShaderManager.prototype = Object.create(WebGLManager.prototype);
ShaderManager.prototype.constructor = ShaderManager;
utils.pluginTarget.mixin(ShaderManager);

module.exports = ShaderManager;

/**
 * Called when there is a WebGL context change.
 *
 */
ShaderManager.prototype.onContextChange = function ()
{
    this.initPlugins();

    // TODO - Why are these not plugins? We can't decouple primitives unless they are....
    this.defaultShader = new TextureShader(this);
    this.primitiveShader = new PrimitiveShader(this);
    this.complexPrimitiveShader = new ComplexPrimitiveShader(this);
};

/**
 * Takes the attributes given in parameters and uploads them.
 *
 * @param attribs {Array} attribs
 */
ShaderManager.prototype.setAttribs = function (attribs)
{
    // reset temp state
    var i;

    for (i = 0; i < this.tempAttribState.length; i++)
    {
        this.tempAttribState[i] = false;
    }

    // set the new attribs
    for (var a in attribs)
    {
        this.tempAttribState[attribs[a]] = true;
    }

    var gl = this.renderer.gl;

    for (i = 0; i < this.attribState.length; i++)
    {
        if (this.attribState[i] !== this.tempAttribState[i])
        {
            this.attribState[i] = this.tempAttribState[i];

            if (this.attribState[i])
            {
                gl.enableVertexAttribArray(i);
            }
            else
            {
                gl.disableVertexAttribArray(i);
            }
        }
    }
};

/**
 * Sets the current shader.
 *
 * @param shader {Shader} the shader to upload
 */
ShaderManager.prototype.setShader = function (shader)
{
    if (this._currentId === shader.uuid)
    {
        return false;
    }

    this._currentId = shader.uuid;

    this.currentShader = shader;

    this.renderer.gl.useProgram(shader.program);
    this.setAttribs(shader.attributes);

    return true;
};

/**
 * Destroys this object.
 *
 */
ShaderManager.prototype.destroy = function ()
{
    WebGLManager.prototype.destroy.call(this);

    this.destroyPlugins();

    this.attribState = null;

    this.tempAttribState = null;
};

},{"../../../utils":58,"../shaders/ComplexPrimitiveShader":39,"../shaders/PrimitiveShader":40,"../shaders/TextureShader":42,"./WebGLManager":38}],37:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    utils = require('../../../utils');

/**
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLMaskManager(renderer)
{
    WebGLManager.call(this, renderer);
    this.stencilMaskStack = null;
}

WebGLMaskManager.prototype = Object.create(WebGLManager.prototype);
WebGLMaskManager.prototype.constructor = WebGLMaskManager;
module.exports = WebGLMaskManager;

/**
 * Changes the mask stack that is used by this manager
 * @param stencilMaskStack {StencilMaskStack} The mask stack 
 *
 */
WebGLMaskManager.prototype.setMaskStack = function ( stencilMaskStack )
{
    this.stencilMaskStack = stencilMaskStack;

    var gl = this.renderer.gl;

    if (stencilMaskStack.stencilStack.length === 0)
    {
        gl.disable(gl.STENCIL_TEST);
    }
    else
    {
        gl.enable(gl.STENCIL_TEST);
    }
};

/**
 * Applies the Mask and adds it to the current filter stack. @alvin
 * 
 * @param graphics {Graphics}
 * @param webGLData {any[]}
 */
WebGLMaskManager.prototype.pushStencil = function (graphics, webGLData)
{
    this.renderer.currentRenderTarget.attachStencilBuffer();

    var gl = this.renderer.gl,
        sms = this.stencilMaskStack;

    this.bindGraphics(graphics, webGLData, this.renderer);

    if (sms.stencilStack.length === 0)
    {
        gl.enable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        sms.reverse = true;
        sms.count = 0;
    }

    sms.stencilStack.push(webGLData);

    var level = sms.count;

    gl.colorMask(false, false, false, false);

    gl.stencilFunc(gl.ALWAYS,0,0xFF);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

    // draw the triangle strip!

    if (webGLData.mode === 1)
    {
        gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );

        if (sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        // draw a quad to increment..
        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

        if (sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }

        sms.reverse = !sms.reverse;
    }
    else
    {
        if (!sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

        if (!sms.reverse)
        {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else
        {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }
    }

    gl.colorMask(true, true, true, true);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);

    sms.count++;
};

/**
 * TODO this does not belong here!
 *
 * @param graphics {Graphics}
 * @param webGLData {Array}
 */
WebGLMaskManager.prototype.bindGraphics = function (graphics, webGLData)
{
    //if (this._currentGraphics === graphics)return;
    this._currentGraphics = graphics;

    var gl = this.renderer.gl;

     // bind the graphics object..
    var shader;// = this.renderer.shaderManager.plugins.primitiveShader;

    if (webGLData.mode === 1)
    {
        shader = this.renderer.shaderManager.complexPrimitiveShader;

        this.renderer.shaderManager.setShader(shader);

        gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));

        gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));

        gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));

        gl.uniform3fv(shader.uniforms.color._location, webGLData.color);

        gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);


        // now do the rest..
        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
    else
    {
        //this.renderer.shaderManager.activatePrimitiveShader();
        shader = this.renderer.shaderManager.primitiveShader;

        this.renderer.shaderManager.setShader( shader );

        gl.uniformMatrix3fv(shader.uniforms.translationMatrix._location, false, graphics.worldTransform.toArray(true));

        gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));

        gl.uniform3fv(shader.uniforms.tint._location, utils.hex2rgb(graphics.tint));

        gl.uniform1f(shader.uniforms.alpha._location, graphics.worldAlpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
        gl.vertexAttribPointer(shader.attributes.aColor, 4, gl.FLOAT, false,4 * 6, 2 * 4);

        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
};

/**
 * TODO @alvin
 * @param graphics {Graphics}
 * @param webGLData {Array}
 */
WebGLMaskManager.prototype.popStencil = function (graphics, webGLData)
{
    var gl = this.renderer.gl,
        sms = this.stencilMaskStack;

    sms.stencilStack.pop();

    sms.count--;

    if (sms.stencilStack.length === 0)
    {
        // the stack is empty!
        gl.disable(gl.STENCIL_TEST);

    }
    else
    {

        var level = sms.count;

        this.bindGraphics(graphics, webGLData, this.renderer);

        gl.colorMask(false, false, false, false);

        if (webGLData.mode === 1)
        {
            sms.reverse = !sms.reverse;

            if (sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            // draw a quad to increment..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

            gl.stencilFunc(gl.ALWAYS,0,0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

            // draw the triangle strip!
            gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );

            if (!sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }

        }
        else
        {
          //  console.log("<<>>")
            if (!sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

            if (!sms.reverse)
            {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else
            {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }
        }

        gl.colorMask(true, true, true, true);
        gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);


    }
};

/**
 * Destroys the mask stack.
 *
 */
WebGLMaskManager.prototype.destroy = function ()
{
    WebGLManager.prototype.destroy.call(this);

    this.stencilMaskStack.stencilStack = null;
};

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param maskData {any[]} The mask data structure to use
 */
WebGLMaskManager.prototype.pushMask = function (maskData)
{


    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

    if (maskData.dirty)
    {
        this.renderer.plugins.graphics.updateGraphics(maskData, this.renderer.gl);
    }

    if (!maskData._webGL[this.renderer.gl.id].data.length)
    {
        return;
    }

    this.pushStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0], this.renderer);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 *
 * @param maskData {any[]}
 */
WebGLMaskManager.prototype.popMask = function (maskData)
{
    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

    this.popStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0], this.renderer);
};


},{"../../../utils":58,"./WebGLManager":38}],38:[function(require,module,exports){
/**
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLManager(renderer)
{
    /**
     * The renderer this manager works for.
     *
     * @member {WebGLRenderer}
     */
    this.renderer = renderer;

    var self = this;
    this.renderer.on('context', this._onContextChangeFn = function(){

    	self.onContextChange();

    });
}

WebGLManager.prototype.constructor = WebGLManager;
module.exports = WebGLManager;

/**
 * Generic method called when there is a WebGL context change.
 *
 */
WebGLManager.prototype.onContextChange = function ()
{
	// do some codes init!
};

/**
 * Generic destroy methods to be overridden by the subclass
 *
 */
WebGLManager.prototype.destroy = function ()
{
    this.renderer.off('context', this._onContextChangeFn);

    this.renderer = null;
};

},{}],39:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @memberof PIXI
 * @extends Shader
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 */
function ComplexPrimitiveShader(shaderManager)
{
    Shader.call(this,
        shaderManager,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',

            'uniform mat3 translationMatrix;',
            'uniform mat3 projectionMatrix;',

            'uniform vec3 tint;',
            'uniform float alpha;',
            'uniform vec3 color;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
            '   vColor = vec4(color * alpha * tint, alpha);',//" * vec4(tint * alpha, alpha);',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_FragColor = vColor;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            tint:   { type: '3f', value: [0, 0, 0] },
            alpha:  { type: '1f', value: 0 },
            color:  { type: '3f', value: [0,0,0] },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) },
            projectionMatrix: { type: 'mat3', value: new Float32Array(9) }
        },
        // attributes
        {
            aVertexPosition:0
        }
    );
}

ComplexPrimitiveShader.prototype = Object.create(Shader.prototype);
ComplexPrimitiveShader.prototype.constructor = ComplexPrimitiveShader;
module.exports = ComplexPrimitiveShader;

},{"./Shader":41}],40:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @memberof PIXI
 * @extends Shader
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 */
function PrimitiveShader(shaderManager)
{
    Shader.call(this,
        shaderManager,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec4 aColor;',

            'uniform mat3 translationMatrix;',
            'uniform mat3 projectionMatrix;',

            'uniform float alpha;',
            'uniform float flipY;',
            'uniform vec3 tint;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
            '   vColor = aColor * vec4(tint * alpha, alpha);',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'varying vec4 vColor;',

            'void main(void){',
            '   gl_FragColor = vColor;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            tint:   { type: '3f', value: [0, 0, 0] },
            alpha:  { type: '1f', value: 0 },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) },
            projectionMatrix: { type: 'mat3', value: new Float32Array(9) }
        },
        // custom attributes
        {
            aVertexPosition:0,
            aColor:0
        }
    );
}

PrimitiveShader.prototype = Object.create(Shader.prototype);
PrimitiveShader.prototype.constructor = PrimitiveShader;
module.exports = PrimitiveShader;

},{"./Shader":41}],41:[function(require,module,exports){
var utils = require('../../../utils'),
    CONST = require('../../../const');

/**
 * @class
 * @memberof PIXI
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 * @param [vertexSrc] {string} The source of the vertex shader.
 * @param [fragmentSrc] {string} The source of the fragment shader.
 * @param [uniforms] {object} Uniforms for this shader.
 * @param [attributes] {object} Attributes for this shader.
 */
function Shader(shaderManager, vertexSrc, fragmentSrc, uniforms, attributes)
{
    if (!vertexSrc || !fragmentSrc)
    {
         throw new Error('Pixi.js Error. Shader requires vertexSrc and fragmentSrc');
    }

    /**
     * A unique id
     * @member {number}
     * @readonly
     */
    this.uuid = utils.uuid();

    /**
     * The current WebGL drawing context
     * @member {WebGLRenderingContext}
     * @readonly
     */
    this.gl = shaderManager.renderer.gl;

    //TODO maybe we should pass renderer rather than shader manger?? food for thought..
    this.shaderManager = shaderManager;

    /**
     * The WebGL program.
     *
     * @member {WebGLProgram}
     * @readonly
     */
    this.program = null;

    /**
     * The uniforms as an object
     * @member {object}
     * @private
     */
    this.uniforms = uniforms || {};

    /**
     * The attributes as an object
     * @member {object}
     * @private
     */
    this.attributes = attributes || {};

    /**
     * Internal texture counter
     * @member {number}
     * @private
     */
    this.textureCount = 1;

    /**
     * The vertex shader as an array of strings
     *
     * @member {string}
     */
    this.vertexSrc = vertexSrc;

    /**
     * The fragment shader as an array of strings
     *
     * @member {string}
     */
    this.fragmentSrc = fragmentSrc;

    this.init();
}

Shader.prototype.constructor = Shader;
module.exports = Shader;

/*
 * Creates the shader and uses it
 *
 */
Shader.prototype.init = function ()
{
    this.compile();

    this.gl.useProgram(this.program);

    this.cacheUniformLocations(Object.keys(this.uniforms));
    this.cacheAttributeLocations(Object.keys(this.attributes));
};

/*
 * Caches the locations of the uniform for reuse
 * @param keys {string} the uniforms to cache
 */
Shader.prototype.cacheUniformLocations = function (keys)
{
    for (var i = 0; i < keys.length; ++i)
    {
        this.uniforms[keys[i]]._location = this.gl.getUniformLocation(this.program, keys[i]);
    }
};

/*
 * Caches the locations of the attribute for reuse
 * @param keys {string} the attributes to cache
 */
Shader.prototype.cacheAttributeLocations = function (keys)
{
    for (var i = 0; i < keys.length; ++i)
    {
        this.attributes[keys[i]] = this.gl.getAttribLocation(this.program, keys[i]);
    }

    // TODO: Check if this is needed anymore...

    // Begin worst hack eva //

    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?
    // maybe its something to do with the current state of the gl context.
    // I'm convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel
    // If theres any webGL people that know why could happen please help :)
    // if (this.attributes.aColor === -1){
    //     this.attributes.aColor = 2;
    // }

    // End worst hack eva //
};

/*
 * Attaches the shaders and creates the program
 * @return {WebGLProgram}
 */
Shader.prototype.compile = function ()
{
    var gl = this.gl;

    var glVertShader = this._glCompile(gl.VERTEX_SHADER, this.vertexSrc);
    var glFragShader = this._glCompile(gl.FRAGMENT_SHADER, this.fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);
    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '')
        {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return (this.program = program);
};

/*
Shader.prototype.buildSync = function ()
{
   // var str = ""

   // str =  "Shader.prototype.syncUniforms = function()";
   // str += "{\n";

    for (var key in this.uniforms)
    {
        var uniform = this.uniforms[key];

        Object.defineProperty(this, key, {

            get: function ()
            {
                return uniform.value
            },
            set: function (value)
            {
                this.setUniform(uniform, value);
            }
        });

        console.log( makePropSetter( key, " bloop", uniform.type )  )
  //      Object.def
        //    location = uniform._location,
          //  value = uniform.value,
            //i, il;

    //    str += "gl.uniform1i(this.uniforms."+ key +"._location, this.uniforms." + key + ".value );\n"

    }

}*/

/**
* Adds a new uniform
*
* @param uniform {Object} the new uniform to attach
*/
Shader.prototype.syncUniform = function (uniform)
{
    var location = uniform._location,
        value = uniform.value,
        gl = this.gl,
        i, il;

    switch (uniform.type)
    {
        // single int value
        case 'i':
        case '1i':
            gl.uniform1i(location, value);
            break;

        // single float value
        case 'f':
        case '1f':
            gl.uniform1f(location, value);
            break;

        // Float32Array(2) or JS Arrray
        case '2f':
            gl.uniform2f(location, value[0], value[1]);
            break;

        // Float32Array(3) or JS Arrray
        case '3f':
            gl.uniform3f(location, value[0], value[1], value[2]);
            break;

        // Float32Array(4) or JS Arrray
        case '4f':
            gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            break;

        // a 2D Point object
        case 'v2':
            gl.uniform2f(location, value.x, value.y);
            break;

        // a 3D Point object
        case 'v3':
            gl.uniform3f(location, value.x, value.y, value.z);
            break;

        // a 4D Point object
        case 'v4':
            gl.uniform4f(location, value.x, value.y, value.z, value.w);
            break;

        // Int32Array or JS Array
        case '1iv':
            gl.uniform1iv(location, value);
            break;

        // Int32Array or JS Array
        case '2iv':
            gl.uniform2iv(location, value);
            break;

        // Int32Array or JS Array
        case '3iv':
            gl.uniform3iv(location, value);
            break;

        // Int32Array or JS Array
        case '4iv':
            gl.uniform4iv(location, value);
            break;

        // Float32Array or JS Array
        case '1fv':
            gl.uniform1fv(location, value);
            break;

        // Float32Array or JS Array
        case '2fv':
            gl.uniform2fv(location, value);
            break;

        // Float32Array or JS Array
        case '3fv':
            gl.uniform3fv(location, value);
            break;

        // Float32Array or JS Array
        case '4fv':
            gl.uniform4fv(location, value);
            break;

        // Float32Array or JS Array
        case 'm2':
        case 'mat2':
        case 'Matrix2fv':
            gl.uniformMatrix2fv(location, uniform.transpose, value);
            break;

        // Float32Array or JS Array
        case 'm3':
        case 'mat3':
        case 'Matrix3fv':

            gl.uniformMatrix3fv(location, uniform.transpose, value);
            break;

        // Float32Array or JS Array
        case 'm4':
        case 'mat4':
        case 'Matrix4fv':
            gl.uniformMatrix4fv(location, uniform.transpose, value);
            break;

        // a Color Value
        case 'c':
            if (typeof value === 'number')
            {
                value = utils.hex2rgb(value);
            }

            gl.uniform3f(location, value[0], value[1], value[2]);
            break;

        // flat array of integers (JS or typed array)
        case 'iv1':
            gl.uniform1iv(location, value);
            break;

        // flat array of integers with 3 x N size (JS or typed array)
        case 'iv':
            gl.uniform3iv(location, value);
            break;

        // flat array of floats (JS or typed array)
        case 'fv1':
            gl.uniform1fv(location, value);
            break;

        // flat array of floats with 3 x N size (JS or typed array)
        case 'fv':
            gl.uniform3fv(location, value);
            break;

        // array of 2D Point objects
        case 'v2v':
            if (!uniform._array)
            {
                uniform._array = new Float32Array(2 * value.length);
            }

            for (i = 0, il = value.length; i < il; ++i)
            {
                uniform._array[i * 2]       = value[i].x;
                uniform._array[i * 2 + 1]   = value[i].y;
            }

            gl.uniform2fv(location, uniform._array);
            break;

        // array of 3D Point objects
        case 'v3v':
            if (!uniform._array)
            {
                uniform._array = new Float32Array(3 * value.length);
            }

            for (i = 0, il = value.length; i < il; ++i)
            {
                uniform._array[i * 3]       = value[i].x;
                uniform._array[i * 3 + 1]   = value[i].y;
                uniform._array[i * 3 + 2]   = value[i].z;

            }

            gl.uniform3fv(location, uniform._array);
            break;

        // array of 4D Point objects
        case 'v4v':
            if (!uniform._array)
            {
                uniform._array = new Float32Array(4 * value.length);
            }

            for (i = 0, il = value.length; i < il; ++i)
            {
                uniform._array[i * 4]       = value[i].x;
                uniform._array[i * 4 + 1]   = value[i].y;
                uniform._array[i * 4 + 2]   = value[i].z;
                uniform._array[i * 4 + 3]   = value[i].w;

            }

            gl.uniform4fv(location, uniform._array);
            break;

        // PIXI.Texture
        case 't':
        case 'sampler2D':

            if (!uniform.value || !uniform.value.baseTexture.hasLoaded)
            {
                break;
            }

            // activate this texture
            gl.activeTexture(gl['TEXTURE' + this.textureCount]);

            var texture = uniform.value.baseTexture._glTextures[gl.id];

            if (!texture)
            {
                this.initSampler2D(uniform);
            }

            // bind the texture
            gl.bindTexture(gl.TEXTURE_2D, texture);

            // set uniform to texture index
            gl.uniform1i(uniform._location, this.textureCount);

            // increment next texture id
            this.textureCount++;

            break;

        default:
            window.console.warn('Pixi.js Shader Warning: Unknown uniform type: ' + uniform.type);
    }
};

/*
 * Updates the shader uniform values.
 */
Shader.prototype.syncUniforms = function ()
{
    this.textureCount = 1;

    for (var key in this.uniforms)
    {
        this.syncUniform(this.uniforms[key]);
    }
};


/**
 * Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)
 *
 */
Shader.prototype.initSampler2D = function (uniform)
{
    var gl = this.gl;

    var texture = uniform.value.baseTexture;

    if(!texture.hasLoaded)
    {
        return;
    }



    if (uniform.textureData)
    {

        //TODO move this...
        var data = uniform.textureData;

        texture._glTextures[gl.id] = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);

        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
        // GLTexture = mag linear, min linear_mipmap_linear, wrap repeat + gl.generateMipmap(gl.TEXTURE_2D);
        // GLTextureLinear = mag/min linear, wrap clamp
        // GLTextureNearestRepeat = mag/min NEAREST, wrap repeat
        // GLTextureNearest = mag/min nearest, wrap clamp
        // AudioTexture = whatever + luminance + width 512, height 2, border 0
        // KeyTexture = whatever + luminance + width 256, height 2, border 0

        //  magFilter can be: gl.LINEAR, gl.LINEAR_MIPMAP_LINEAR or gl.NEAREST
        //  wrapS/T can be: gl.CLAMP_TO_EDGE or gl.REPEAT

        gl.texImage2D(gl.TEXTURE_2D, 0, data.luminance ? gl.LUMINANCE : gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, data.magFilter ? data.magFilter : gl.LINEAR );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, data.wrapS ? data.wrapS : gl.CLAMP_TO_EDGE );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, data.wrapS ? data.wrapS : gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, data.wrapT ? data.wrapT : gl.CLAMP_TO_EDGE);
    }
    else
    {
        this.shaderManager.renderer.updateTexture(texture);
    }
};

/**
 * Destroys the shader.
 *
 */
Shader.prototype.destroy = function ()
{
    this.gl.deleteProgram(this.program);

    this.gl = null;
    this.uniforms = null;
    this.attributes = null;

    this.vertexSrc = null;
    this.fragmentSrc = null;
};

Shader.prototype._glCompile = function (type, src)
{
    var shader = this.gl.createShader(type);

    this.gl.shaderSource(shader, src);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
    {
        window.console.log(this.gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

},{"../../../const":3,"../../../utils":58}],42:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @memberof PIXI
 * @extends Shader
 * @param shaderManager {ShaderManager} The webgl shader manager this shader works for.
 * @param [vertexSrc] {string} The source of the vertex shader.
 * @param [fragmentSrc] {string} The source of the fragment shader.
 * @param [customUniforms] {object} Custom uniforms to use to augment the built-in ones.
 * @param [fragmentSrc] {string} The source of the fragment shader.
 */
function TextureShader(shaderManager, vertexSrc, fragmentSrc, customUniforms, customAttributes)
{
    var uniforms = {

        uSampler:           { type: 'sampler2D', value: 0 },
        projectionMatrix:   { type: 'mat3', value: new Float32Array(1, 0, 0,
                                                                    0, 1, 0,
                                                                    0, 0, 1) }
    };

    if (customUniforms)
    {
        for (var u in customUniforms)
        {
            uniforms[u] = customUniforms[u];
        }
    }


    var attributes = {
        aVertexPosition:    0,
        aTextureCoord:      0,
        aColor:             0
    };

    if (customAttributes)
    {
        for (var a in customAttributes)
        {
            attributes[a] = customAttributes[a];
        }
    }

    /**
     * The vertex shader.
     * @member {Array}
     */
    vertexSrc = vertexSrc || TextureShader.defaultVertexSrc;

    /**
     * The fragment shader.
     * @member {Array}
     */
    fragmentSrc = fragmentSrc || TextureShader.defaultFragmentSrc;

    Shader.call(this, shaderManager, vertexSrc, fragmentSrc, uniforms, attributes);
}

// constructor
TextureShader.prototype = Object.create(Shader.prototype);
TextureShader.prototype.constructor = TextureShader;
module.exports = TextureShader;

TextureShader.defaultVertexSrc = [
    'precision lowp float;',
    'attribute vec2 aVertexPosition;',
    'attribute vec2 aTextureCoord;',
    'attribute vec4 aColor;',

    'uniform mat3 projectionMatrix;',

    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',

    'void main(void){',
    '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
    '   vTextureCoord = aTextureCoord;',
    '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',
    '}'
].join('\n');

TextureShader.defaultFragmentSrc = [
    'precision lowp float;',

    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',

    'uniform sampler2D uSampler;',

    'void main(void){',
    '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
    '}'
].join('\n');

},{"./Shader":41}],43:[function(require,module,exports){
var WebGLManager = require('../managers/WebGLManager');

/**
 * Base for a common object renderer that can be used as a system renderer plugin.
 *
 * @class
 * @extends WebGLManager
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this object renderer works for.
 */
function ObjectRenderer(renderer)
{
    WebGLManager.call(this, renderer);
}


ObjectRenderer.prototype = Object.create(WebGLManager.prototype);
ObjectRenderer.prototype.constructor = ObjectRenderer;
module.exports = ObjectRenderer;

/**
 * Starts the renderer and sets the shader
 *
 */
ObjectRenderer.prototype.start = function ()
{
    // set the shader..
};

/**
 * Stops the renderer
 *
 */
ObjectRenderer.prototype.stop = function ()
{
    this.flush();
};

/**
 * flushes
 *
 */
ObjectRenderer.prototype.flush = function ()
{
    // flush!
};

/**
 * Renders an object
 *
 */
ObjectRenderer.prototype.render = function (object)
{
    // render the object
};

},{"../managers/WebGLManager":38}],44:[function(require,module,exports){
/**
 * Helper class to create a quad
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The gl context for this quad to use.
 */
function Quad(gl)
{
    /*
     * the current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

//    this.textures = new TextureUvs();

    /**
     * An array of vertices
     *
     * @member {Float32Array}
     */
    this.vertices = new Float32Array([
        0,0,
        200,0,
        200,200,
        0,200
    ]);

    /**
     * The Uvs of the quad
     *
     * @member {Float32Array}
     */
    this.uvs = new Float32Array([
        0,0,
        1,0,
        1,1,
        0,1
    ]);

//    var white = (0xFFFFFF >> 16) + (0xFFFFFF & 0xff00) + ((0xFFFFFF & 0xff) << 16) + (1 * 255 << 24);
    //TODO convert this to a 32 unsigned int array
    /**
     * The color components of the triangles
     *
     * @member {Float32Array}
     */
    this.colors = new Float32Array([
        1,1,1,1,
        1,1,1,1,
        1,1,1,1,
        1,1,1,1
    ]);

    /*
     * @member {Uint16Array} An array containing the indices of the vertices
     */
    this.indices = new Uint16Array([
        0, 1, 2, 0, 3, 2
    ]);

    /*
     * @member {WebGLBuffer} The vertex buffer
     */
    this.vertexBuffer = gl.createBuffer();

    /*
     * @member {WebGLBuffer} The index buffer
     */
    this.indexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, (8 + 8 + 16) * 4, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    this.upload();
}

Quad.prototype.constructor = Quad;

/**
 * Maps two Rectangle to the quad
 * @param rect {Rectangle} the first rectangle
 * @param rect2 {Rectangle} the second rectangle
 */
Quad.prototype.map = function(rect, rect2)
{
    var x = 0; //rect2.x / rect.width;
    var y = 0; //rect2.y / rect.height;

    this.uvs[0] = x;
    this.uvs[1] = y;

    this.uvs[2] = x + rect2.width / rect.width;
    this.uvs[3] = y;

    this.uvs[4] = x + rect2.width / rect.width;
    this.uvs[5] = y + rect2.height / rect.height;

    this.uvs[6] = x;
    this.uvs[7] = y + rect2.height / rect.height;

    /// -----
    x = rect2.x;
    y = rect2.y;

    this.vertices[0] = x;
    this.vertices[1] = y;

    this.vertices[2] = x + rect2.width;
    this.vertices[3] = y;

    this.vertices[4] = x + rect2.width;
    this.vertices[5] = y + rect2.height;

    this.vertices[6] = x;
    this.vertices[7] = y + rect2.height;

    this.upload();
};

/**
 * Binds the buffer and uploads the data
 */
Quad.prototype.upload = function()
{
    var gl = this.gl;

    // TODO could probably be pushed into one upload!
    gl.bindBuffer( gl.ARRAY_BUFFER, this.vertexBuffer );

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);

    gl.bufferSubData(gl.ARRAY_BUFFER, 8 * 4, this.uvs);

    gl.bufferSubData(gl.ARRAY_BUFFER, (8 + 8) * 4, this.colors);
};

module.exports = Quad;



},{}],45:[function(require,module,exports){
var math = require('../../../math'),
    utils = require('../../../utils'),
    CONST = require('../../../const'),
    //StencilManager = require('../managers/StencilManager'),
    StencilMaskStack = require('./StencilMaskStack');

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 * @param width {number} the horizontal range of the filter
 * @param height {number} the vertical range of the filter
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @param resolution {number} the current resolution
 * @param root {boolean} Whether this object is the root element or not
 */
var RenderTarget = function(gl, width, height, scaleMode, resolution, root)
{
    //TODO Resolution could go here ( eg low res blurs )

    /**
     * The current WebGL drawing context
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    // next time to create a frame buffer and texture

    /**
     * A frame buffer
     * @member {WebGLFrameBuffer}
     */
    this.frameBuffer = null;

    /**
     * @member {Texture}
     */
    this.texture = null;

    /**
     * The size of the object as a rectangle
     * @member {Rectangle}
     */
    this.size = new math.Rectangle(0, 0, 1, 1);

    /**
     * The current resolution
     * @member {number}
     */
    this.resolution = resolution || CONST.RESOLUTION;

    /**
     * The projection matrix
     * @member {Matrix}
     */
    this.projectionMatrix = new math.Matrix();

    /**
     * The object's transform
     * @member {Matrix}
     */
    this.transform = null;

    /**
     *
     * @member {Rectangle}
     */
    this.frame = null;

    /**
     * The stencil buffer stores masking data for the render target
     * @member {WebGLRenderBuffer}
     */
    this.stencilBuffer = null;

    /**
     * The data structure for the stencil masks
     * @member {StencilMaskStack}
     */
    this.stencilMaskStack = new StencilMaskStack();

    /**
     * Stores filter data for the render target
     * @member {Array}
     */
    this.filterStack = [
        {
            renderTarget:this,
            filter:[],
            bounds:this.size
        }
    ];


    /**
     * The scale mode
     * @member {number}
     * @default CONST.SCALE_MODES.DEFAULT
     */
    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;

    /**
     * Whether this object is the root element or not
     * @member {boolean}
     */
    this.root = root;

    if (!this.root)
    {
       // this.flipY = true;
        this.frameBuffer = gl.createFramebuffer();

        /*
            A frame buffer needs a target to render to..
            create a texture and bind it attach it to the framebuffer..
         */

        this.texture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D,  this.texture);

        // set the scale properties of the texture..
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === CONST.SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);

        // check to see if the texture is a power of two!
        var isPowerOfTwo = utils.isPowerOfTwo(width, height);

        //TODO for 99% of use cases if a texture is power of two we should tile the texture...
         if (!isPowerOfTwo)
        {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        else
        {

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
    }


    this.resize(width, height);
};

RenderTarget.prototype.constructor = RenderTarget;
module.exports = RenderTarget;

/**
* Clears the filter texture.
*
*/
RenderTarget.prototype.clear = function(bind)
{
    var gl = this.gl;
    if(bind)
    {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    }

    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};

/**
* Binds the stencil buffer.
*
*/
RenderTarget.prototype.attachStencilBuffer = function()
{

    if ( this.stencilBuffer )
    {
        return;
    }

    /*
        The stencil buffer is used for masking in pixi
        lets create one and then add attach it to the framebuffer..
     */
    if (!this.root)
    {
        var gl = this.gl;

        this.stencilBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL,  this.size.width * this.resolution  , this.size.height * this.resolution );
    }
};

/**
* Binds the buffers and initialises the viewport.
*
*/
RenderTarget.prototype.activate = function()
{
    //TOOD refactor usage of frame..
    var gl = this.gl;

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);

    var projectionFrame = this.frame || this.size;

    // TODO add a dirty flag to this of a setter for the frame?
    this.calculateProjection( projectionFrame );

    if(this.transform)
    {
        this.projectionMatrix.append(this.transform);
    }

    gl.viewport(0,0, projectionFrame.width * this.resolution, projectionFrame.height * this.resolution);
};

/**
* Updates the projection matrix based on a projection frame (which is a rectangle)
*
*/
RenderTarget.prototype.calculateProjection = function( projectionFrame )
{
    var pm = this.projectionMatrix;

    pm.identity();

    if (!this.root)
    {
        pm.a = 1 / projectionFrame.width*2;
        pm.d = 1 / projectionFrame.height*2;

        pm.tx = -1 - projectionFrame.x * pm.a;
        pm.ty = -1 - projectionFrame.y * pm.d;
    }
    else
    {
        pm.a = 1 / projectionFrame.width*2;
        pm.d = -1 / projectionFrame.height*2;

        pm.tx = -1 - projectionFrame.x * pm.a;
        pm.ty = 1 - projectionFrame.y * pm.d;
    }
};


/**
 * Resizes the texture to the specified width and height
 *
 * @param width {Number} the new width of the texture
 * @param height {Number} the new height of the texture
 */
RenderTarget.prototype.resize = function(width, height)
{
    width = width | 0;
    height = height | 0;

    if (this.size.width === width && this.size.height === height) {
        return;
    }

    this.size.width = width;
    this.size.height = height;

    if (!this.root)
    {
        var gl = this.gl;

        gl.bindTexture(gl.TEXTURE_2D,  this.texture);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  width * this.resolution, height * this.resolution , 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

        if (this.stencilBuffer )
        {
            // update the stencil buffer width and height
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL,  width * this.resolution, height * this.resolution );
        }
    }

    var projectionFrame = this.frame || this.size;

    this.calculateProjection( projectionFrame );
};

/**
 * Destroys the render target.
 *
 */
RenderTarget.prototype.destroy = function()
{
    var gl = this.gl;
    gl.deleteFramebuffer( this.frameBuffer );
    gl.deleteTexture( this.texture );

    this.frameBuffer = null;
    this.texture = null;
};

},{"../../../const":3,"../../../math":13,"../../../utils":58,"./StencilMaskStack":46}],46:[function(require,module,exports){
/**
 * Generic Mask Stack data structure
 * @class
 * @memberof PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function StencilMaskStack()
{
	/**
     * The actual stack
     *
     * @member {Array}
     */
    this.stencilStack = [];

    /**
     * TODO @alvin
     *
     * @member {boolean}
     */
    this.reverse = true;

    /**
     * Internal count
     *
     * @member {number}
     */
    this.count = 0;
}

StencilMaskStack.prototype.constructor = StencilMaskStack;
module.exports = StencilMaskStack;

},{}],47:[function(require,module,exports){
var math = require('../math'),
    Texture = require('../textures/Texture'),
    Container = require('../display/Container'),
    CanvasTinter = require('../renderers/canvas/utils/CanvasTinter'),
    utils = require('../utils'),
    CONST = require('../const'),
    tempPoint = new math.Point();

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * var sprite = new PIXI.Sprite.fromImage('assets/image.png');
 * ```
 *
 * @class
 * @extends Container
 * @memberof PIXI
 * @param texture {Texture} The texture for this sprite
 */
function Sprite(texture)
{
    Container.call(this);

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting the anchor to 0.5,0.5 means the texture's origin is centered
     * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
     *
     * @member {Point}
     */
    this.anchor = new math.Point();

    /**
     * The texture that the sprite is using
     *
     * @member {Texture}
     * @private
     */
    this._texture = null;

    /**
     * The width of the sprite (this is initially set by the texture)
     *
     * @member {number}
     * @private
     */
    this._width = 0;

    /**
     * The height of the sprite (this is initially set by the texture)
     *
     * @member {number}
     * @private
     */
    this._height = 0;

    /**
     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
     *
     * @member {number}
     * @default [0xFFFFFF]
     */
    this.tint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the sprite. Apply a value of blendModes.NORMAL to reset the blend mode.
     *
     * @member {number}
     * @default CONST.BLEND_MODES.NORMAL;
     */
    this.blendMode = CONST.BLEND_MODES.NORMAL;

    /**
     * The shader that will be used to render the sprite. Set to null to remove a current shader.
     *
     * @member {AbstractFilter}
     */
    this.shader = null;

    /**
     * An internal cached value of the tint.
     *
     * @member {number}
     * @default [0xFFFFFF]
     */
    this.cachedTint = 0xFFFFFF;

    // call texture setter
    this.texture = texture || Texture.EMPTY;
}

/**
 * Destroys this sprite and optionally its texture
 *
 * @param destroyTexture {boolean} Should it destroy the current texture of the sprite as well
 * @param destroyBaseTexture {boolean} Should it destroy the base texture of the sprite as well
 */
Sprite.prototype.destroy = function (destroyTexture, destroyBaseTexture)
{
    Container.prototype.destroy.call(this);

    this.anchor = null;

    if (destroyTexture)
    {
        this._texture.destroy(destroyBaseTexture);
    }

    this._texture = null;
    this.shader = null;
};

// constructor
Sprite.prototype = Object.create(Container.prototype);
Sprite.prototype.constructor = Sprite;
module.exports = Sprite;

Object.defineProperties(Sprite.prototype, {
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    width: {
        get: function ()
        {
            return this.scale.x * this.texture._frame.width;
        },
        set: function (value)
        {
            this.scale.x = value / this.texture._frame.width;
            this._width = value;
        }
    },

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    height: {
        get: function ()
        {
            return  this.scale.y * this.texture._frame.height;
        },
        set: function (value)
        {
            this.scale.y = value / this.texture._frame.height;
            this._height = value;
        }
    },

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    texture: {
        get: function ()
        {
            return  this._texture;
        },
        set: function (value)
        {
            if (this._texture === value)
            {
                return;
            }

            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            if (value)
            {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded)
                {
                    this._onTextureUpdate();
                }
                else
                {
                    value.once('update', this._onTextureUpdate.bind(this));
                }
            }
        }
    }
});

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @private
 */
Sprite.prototype._onTextureUpdate = function ()
{
    // so if _width is 0 then width was not set..
    if (this._width)
    {
        this.scale.x = this._width / this.texture.frame.width;
    }

    if (this._height)
    {
        this.scale.y = this._height / this.texture.frame.height;
    }
};

/**
*
* Renders the object using the WebGL renderer
*
* @param renderer {WebGLRenderer}
*/
Sprite.prototype._renderWebGL = function (renderer)
{
    renderer.setObjectRenderer(renderer.plugins.sprite);
    renderer.plugins.sprite.render(this);
};

/**
 * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @param matrix {Matrix} the transformation matrix of the sprite
 * @return {Rectangle} the framing rectangle
 */
Sprite.prototype.getBounds = function (matrix)
{
    if(!this._currentBounds)
    {

        var width = this._texture._frame.width;
        var height = this._texture._frame.height;

        var w0 = width * (1-this.anchor.x);
        var w1 = width * -this.anchor.x;

        var h0 = height * (1-this.anchor.y);
        var h1 = height * -this.anchor.y;

        var worldTransform = matrix || this.worldTransform ;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var minX,
            maxX,
            minY,
            maxY;

        if (b === 0 && c === 0)
        {
            // scale may be negative!
            if (a < 0)
            {
                a *= -1;
            }

            if (d < 0)
            {
                d *= -1;
            }

            // this means there is no rotation going on right? RIGHT?
            // if thats the case then we can avoid checking the bound values! yay
            minX = a * w1 + tx;
            maxX = a * w0 + tx;
            minY = d * h1 + ty;
            maxY = d * h0 + ty;
        }
        else
        {
            var x1 = a * w1 + c * h1 + tx;
            var y1 = d * h1 + b * w1 + ty;

            var x2 = a * w0 + c * h1 + tx;
            var y2 = d * h1 + b * w0 + ty;

            var x3 = a * w0 + c * h0 + tx;
            var y3 = d * h0 + b * w0 + ty;

            var x4 =  a * w1 + c * h0 + tx;
            var y4 =  d * h0 + b * w1 + ty;

            minX = x1;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;

        // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
        this._currentBounds = bounds;
    }

    return this._currentBounds;
};

Sprite.prototype.getLocalBounds = function ()
{
    this._bounds.x = -this._texture._frame.width * this.anchor.x;
    this._bounds.y = -this._texture._frame.height * this.anchor.y;
    this._bounds.width = this._texture._frame.width;
    this._bounds.height = this._texture._frame.height;
    return this._bounds;
};

/**
* Tests if a point is inside this sprite
*
* @param point {Point} the point to test
* @return {boolean} the result of the test
*/
Sprite.prototype.containsPoint = function( point )
{
    this.worldTransform.applyInverse(point,  tempPoint);

    var width = this._texture._frame.width;
    var height = this._texture._frame.height;
    var x1 = -width * this.anchor.x;
    var y1;

    if ( tempPoint.x > x1 && tempPoint.x < x1 + width )
    {
        y1 = -height * this.anchor.y;

        if ( tempPoint.y > y1 && tempPoint.y < y1 + height )
        {
            return true;
        }
    }

    return false;
};

/**
* Renders the object using the Canvas renderer
*
* @param renderer {CanvasRenderer} The renderer
*/
Sprite.prototype._renderCanvas = function (renderer)
{
    if (this.texture.crop.width <= 0 || this.texture.crop.height <= 0)
    {
        return;
    }

    if (this.blendMode !== renderer.currentBlendMode)
    {
        renderer.currentBlendMode = this.blendMode;
        renderer.context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    //  Ignore null sources
    if (this.texture.valid)
    {
        var texture = this._texture,
            wt = this.worldTransform,
            dx,
            dy,
            width,
            height;

        var resolution = texture.baseTexture.resolution / renderer.resolution;

        renderer.context.globalAlpha = this.worldAlpha;

        // If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderer.smoothProperty && renderer.currentScaleMode !== texture.baseTexture.scaleMode)
        {
            renderer.currentScaleMode = texture.baseTexture.scaleMode;
            renderer.context[renderer.smoothProperty] = (renderer.currentScaleMode === CONST.SCALE_MODES.LINEAR);
        }

        // If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions

        if(texture.rotate)
        {

            // cheeky rotation!
            var a = wt.a;
            var b = wt.b;

            wt.a  = -wt.c;
            wt.b  = -wt.d;
            wt.c  =  a;
            wt.d  =  b;

            width = texture.crop.height;
            height = texture.crop.width;

            dx = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
            dy = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
        }
        else
        {
            width = texture.crop.width;
            height = texture.crop.height;

            dx = (texture.trim) ? texture.trim.x - this.anchor.x * texture.trim.width : this.anchor.x * -texture._frame.width;
            dy = (texture.trim) ? texture.trim.y - this.anchor.y * texture.trim.height : this.anchor.y * -texture._frame.height;
        }



        // Allow for pixel rounding
        if (renderer.roundPixels)
        {
            renderer.context.setTransform(
                wt.a,
                wt.b,
                wt.c,
                wt.d,
                (wt.tx * renderer.resolution) | 0,
                (wt.ty * renderer.resolution) | 0
            );

            dx = dx | 0;
            dy = dy | 0;
        }
        else
        {

            renderer.context.setTransform(
                wt.a,
                wt.b,
                wt.c,
                wt.d,
                wt.tx * renderer.resolution,
                wt.ty * renderer.resolution
            );


        }

        if (this.tint !== 0xFFFFFF)
        {
            if (this.cachedTint !== this.tint)
            {
                this.cachedTint = this.tint;

                // TODO clean up caching - how to clean up the caches?
                this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
            }

            renderer.context.drawImage(
                this.tintedTexture,
                0,
                0,
                width,
                height,
                dx / resolution,
                dy / resolution,
                width / resolution,
                width / resolution
            );
        }
        else
        {
            renderer.context.drawImage(
                texture.baseTexture.source,
                texture.crop.x,
                texture.crop.y,
                width,
                height,
                dx / resolution,
                dy / resolution,
                width / resolution,
                height / resolution
            );
        }
    }
};

// some helper functions..

/**
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId
 * @param [crossorigin=(auto)] {boolean} if you want to specify the cross-origin parameter
 * @param [scaleMode=scaleModes.DEFAULT] {number} if you want to specify the scale mode, see {@link SCALE_MODES} for possible values
 */
Sprite.fromFrame = function (frameId)
{
    var texture = utils.TextureCache[frameId];

    if (!texture)
    {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
    }

    return new Sprite(texture);
};

/**
 * Helper function that creates a sprite that will contain a texture based on an image url
 * If the image is not in the texture cache it will be loaded
 *
 * @static
 * @param imageId {String} The image url of the texture
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the image id
 */
Sprite.fromImage = function (imageId, crossorigin, scaleMode)
{
    return new Sprite(Texture.fromImage(imageId, crossorigin, scaleMode));
};

},{"../const":3,"../display/Container":4,"../math":13,"../renderers/canvas/utils/CanvasTinter":28,"../textures/Texture":51,"../utils":58}],48:[function(require,module,exports){
var ObjectRenderer = require('../../renderers/webgl/utils/ObjectRenderer'),
    Shader = require('../../renderers/webgl/shaders/Shader'),
    WebGLRenderer = require('../../renderers/webgl/WebGLRenderer'),
    CONST = require('../../const');

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's SpriteRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/SpriteRenderer.java
 */

/**
 *
 * @class
 * @private
 * @memberof PIXI
 * @extends ObjectRenderer
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function SpriteRenderer(renderer)
{
    ObjectRenderer.call(this, renderer);

    /**
     *
     *
     * @member {number}
     */
    this.vertSize = 5;

    /**
     *
     *
     * @member {number}
     */
    this.vertByteSize = this.vertSize * 4;

    /**
     * The number of images in the SpriteBatch before it flushes.
     *
     * @member {number}
     */
    this.size = CONST.SPRITE_BATCH_SIZE; // 2000 is a nice balance between mobile / desktop

    // the total number of bytes in our batch
    var numVerts = this.size * 4 * this.vertByteSize;
    // the total number of indices in our batch
    var numIndices = this.size * 6;

    /**
     * Holds the vertices
     *
     * @member {ArrayBuffer}
     */
    this.vertices = new ArrayBuffer(numVerts);

    /**
     * View on the vertices as a Float32Array
     *
     * @member {Float32Array}
     */
    this.positions = new Float32Array(this.vertices);

    /**
     * Holds the color components
     *
     * @member {Uint32Array}
     */
    this.colors = new Uint32Array(this.vertices);

    /**
     * Holds the indices
     *
     * @member {Uint16Array}
     */
    this.indices = new Uint16Array(numIndices);

    /**
     *
     *
     * @member {number}
     */
    this.lastIndexCount = 0;

    for (var i=0, j=0; i < numIndices; i += 6, j += 4)
    {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    /**
     *
     *
     * @member {boolean}
     */
    this.drawing = false;

    /**
     *
     *
     * @member {number}
     */
    this.currentBatchSize = 0;

    /**
     *
     *
     * @member {BaseTexture}
     */
    this.currentBaseTexture = null;

    /**
     *
     *
     * @member {Array}
     */
    this.textures = [];

    /**
     *
     *
     * @member {Array}
     */
    this.blendModes = [];

    /**
     *
     *
     * @member {Array}
     */
    this.shaders = [];

    /**
     *
     *
     * @member {Array}
     */
    this.sprites = [];

    /**
     * The default shader that is used if a sprite doesn't have a more specific one.
     *
     * @member {Shader}
     */
    this.shader = null;

}

SpriteRenderer.prototype = Object.create(ObjectRenderer.prototype);
SpriteRenderer.prototype.constructor = SpriteRenderer;
module.exports = SpriteRenderer;

WebGLRenderer.registerPlugin('sprite', SpriteRenderer);

/**
 * Sets up the renderer context and necessary buffers.
 *
 * @private
 * @param gl {WebGLRenderingContext} the current WebGL drawing context
 */
SpriteRenderer.prototype.onContextChange = function ()
{
    var gl = this.renderer.gl;

    // setup default shader
    this.shader = this.renderer.shaderManager.defaultShader;

    // create a couple of buffers
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.

    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

    this.currentBlendMode = 99999;
};

/**
 * Renders the sprite object.
 *
 * @param sprite {Sprite} the sprite to render when using this spritebatch
 */
SpriteRenderer.prototype.render = function (sprite)
{
    var texture = sprite._texture;

    //TODO set blend modes..
    // check texture..
    if (this.currentBatchSize >= this.size)
    {
        this.flush();
        this.currentBaseTexture = texture.baseTexture;
    }

    // get the uvs for the texture
    var uvs = texture._uvs;

    // if the uvs have not updated then no point rendering just yet!
    if (!uvs)
    {
        return;
    }

    // TODO trim??
    var aX = sprite.anchor.x;
    var aY = sprite.anchor.y;

    var w0, w1, h0, h1;

    if (texture.trim)
    {
        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
        var trim = texture.trim;

        w1 = trim.x - aX * trim.width;
        w0 = w1 + texture.crop.width;

        h1 = trim.y - aY * trim.height;
        h0 = h1 + texture.crop.height;

    }
    else
    {
        w0 = (texture._frame.width ) * (1-aX);
        w1 = (texture._frame.width ) * -aX;

        h0 = texture._frame.height * (1-aY);
        h1 = texture._frame.height * -aY;
    }

    var index = this.currentBatchSize * this.vertByteSize;

    var worldTransform = sprite.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var colors = this.colors;
    var positions = this.positions;

    if (this.renderer.roundPixels)
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx | 0;
        positions[index+1] = d * h1 + b * w1 + ty | 0;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx | 0;
        positions[index+6] = d * h1 + b * w0 + ty | 0;

         // xy
        positions[index+10] = a * w0 + c * h0 + tx | 0;
        positions[index+11] = d * h0 + b * w0 + ty | 0;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx | 0;
        positions[index+16] = d * h0 + b * w1 + ty | 0;
    }
    else
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx;
        positions[index+1] = d * h1 + b * w1 + ty;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx;
        positions[index+6] = d * h1 + b * w0 + ty;

         // xy
        positions[index+10] = a * w0 + c * h0 + tx;
        positions[index+11] = d * h0 + b * w0 + ty;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx;
        positions[index+16] = d * h0 + b * w1 + ty;
    }

    // uv
    positions[index+2] = uvs.x0;
    positions[index+3] = uvs.y0;

    // uv
    positions[index+7] = uvs.x1;
    positions[index+8] = uvs.y1;

     // uv
    positions[index+12] = uvs.x2;
    positions[index+13] = uvs.y2;

    // uv
    positions[index+17] = uvs.x3;
    positions[index+18] = uvs.y3;

    // color and alpha
    var tint = sprite.tint;
    colors[index+4] = colors[index+9] = colors[index+14] = colors[index+19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);

    // increment the batchsize
    this.sprites[this.currentBatchSize++] = sprite;
};

/**
 * Renders the content and empties the current batch.
 *
 */
SpriteRenderer.prototype.flush = function ()
{
    // If the batch is length 0 then return as there is nothing to draw
    if (this.currentBatchSize === 0)
    {
        return;
    }

    var gl = this.renderer.gl;
    var shader;

    // upload the verts to the buffer
    if (this.currentBatchSize > ( this.size * 0.5 ) )
    {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    }
    else
    {
        var view = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }

    var nextTexture, nextBlendMode, nextShader;
    var batchSize = 0;
    var start = 0;

    var currentBaseTexture = null;
    var currentBlendMode = this.renderer.blendModeManager.currentBlendMode;
    var currentShader = null;

    var blendSwap = false;
    var shaderSwap = false;
    var sprite;

    for (var i = 0, j = this.currentBatchSize; i < j; i++)
    {

        sprite = this.sprites[i];

        nextTexture = sprite._texture.baseTexture;
        nextBlendMode = sprite.blendMode;
        nextShader = sprite.shader || this.shader;

        blendSwap = currentBlendMode !== nextBlendMode;
        shaderSwap = currentShader !== nextShader; // should I use uuidS???

        if (currentBaseTexture !== nextTexture || blendSwap || shaderSwap)
        {
            this.renderBatch(currentBaseTexture, batchSize, start);

            start = i;
            batchSize = 0;
            currentBaseTexture = nextTexture;

            if (blendSwap)
            {
                currentBlendMode = nextBlendMode;
                this.renderer.blendModeManager.setBlendMode( currentBlendMode );
            }

            if (shaderSwap)
            {
                currentShader = nextShader;



                shader = currentShader.shaders ? currentShader.shaders[gl.id] : currentShader;

                if (!shader)
                {
                    shader = currentShader.getShader(this.renderer);

                }

                // set shader function???
                this.renderer.shaderManager.setShader(shader);

                //TODO - i KNOW this can be optimised! Once v3 is stable il look at this next...
                shader.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(true);
                //Make this a little more dynamic / intelligent!
                shader.syncUniforms();

                //TODO investigate some kind of texture state managment??
                // need to make sure this texture is the active one for all the batch swaps..
                gl.activeTexture(gl.TEXTURE0);

                // both thease only need to be set if they are changing..
                // set the projection
                //gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, this.renderer.currentRenderTarget.projectionMatrix.toArray(true));


            }
        }

        batchSize++;
    }

    this.renderBatch(currentBaseTexture, batchSize, start);

    // then reset the batch!
    this.currentBatchSize = 0;
};

/**
 * Draws the currently batches sprites.
 *
 * @private
 * @param texture {Texture}
 * @param size {number}
 * @param startIndex {number}
 */
SpriteRenderer.prototype.renderBatch = function (texture, size, startIndex)
{
    if (size === 0)
    {
        return;
    }

    var gl = this.renderer.gl;

    if (!texture._glTextures[gl.id])
    {
        this.renderer.updateTexture(texture);
    }
    else
    {
        // bind the current texture
        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
    }

    // now draw those suckas!
    gl.drawElements(gl.TRIANGLES, size * 6, gl.UNSIGNED_SHORT, startIndex * 6 * 2);

    // increment the draw count
    this.renderer.drawCount++;
};

/**
 * Starts a new sprite batch.
 *
 */
SpriteRenderer.prototype.start = function ()
{
    var gl = this.renderer.gl;

    // bind the main texture


    // bind the buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // this is the same for each shader?
    var stride =  this.vertByteSize;
    gl.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
    gl.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);

    // color attributes will be interpreted as unsigned bytes and normalized
    gl.vertexAttribPointer(this.shader.attributes.aColor, 4, gl.UNSIGNED_BYTE, true, stride, 4 * 4);
};

/**
 * Destroys the SpriteBatch.
 *
 */
SpriteRenderer.prototype.destroy = function ()
{
    this.renderer.gl.deleteBuffer(this.vertexBuffer);
    this.renderer.gl.deleteBuffer(this.indexBuffer);

    this.shader.destroy();

    this.renderer = null;

    this.vertices = null;
    this.positions = null;
    this.colors = null;
    this.indices = null;

    this.vertexBuffer = null;
    this.indexBuffer = null;

    this.currentBaseTexture = null;

    this.drawing = false;

    this.textures = null;
    this.blendModes = null;
    this.shaders = null;
    this.sprites = null;
    this.shader = null;
};

},{"../../const":3,"../../renderers/webgl/WebGLRenderer":29,"../../renderers/webgl/shaders/Shader":41,"../../renderers/webgl/utils/ObjectRenderer":43}],49:[function(require,module,exports){
var utils = require('../utils'),
    CONST = require('../const');

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class
 * @mixes eventTarget
 * @memberof PIXI
 * @param source {Image|Canvas} the source object of the texture.
 * @param [scaleMode=scaleModes.DEFAULT] {number} See {@link SCALE_MODES} for possible values
 * @param resolution {number} the resolution of the texture for devices with different pixel ratios
 */
function BaseTexture(source, scaleMode, resolution)
{
    this.uuid = utils.uuid();

    /**
     * The Resolution of the texture.
     *
     * @member {number}
     */
    this.resolution = resolution || 1;

    /**
     * The width of the base texture set when the image has loaded
     *
     * @member {number}
     * @readOnly
     */
    this.width = 100;

    /**
     * The height of the base texture set when the image has loaded
     *
     * @member {number}
     * @readOnly
     */
    this.height = 100;

    // TODO docs
    // used to store the actual dimensions of the source
    /**
     * Used to store the actual width of the source of this texture
     *
     * @member {number}
     * @readOnly
     */
    this.realWidth = 100;
    /**
     * Used to store the actual height of the source of this texture
     *
     * @member {number}
     * @readOnly
     */
    this.realHeight = 100;

    /**
     * The scale mode to apply when scaling this texture
     *
     * @member {{number}}
     * @default scaleModes.LINEAR
     */
    this.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;

    /**
     * Set to true once the base texture has successfully loaded.
     *
     * This is never true if the underlying source fails to load or has no texture data.
     *
     * @member {boolean}
     * @readOnly
     */
    this.hasLoaded = false;

    /**
     * Set to true if the source is currently loading.
     *
     * If an Image source is loading the 'loaded' or 'error' event will be
     * dispatched when the operation ends. An underyling source that is
     * immediately-available bypasses loading entirely.
     *
     * @member {boolean}
     * @readonly
     */
    this.isLoading = false;

    /**
     * The image source that is used to create the texture.
     *
     * TODO: Make this a setter that calls loadSource();
     *
     * @member {Image|Canvas}
     * @readonly
     */
    this.source = null; // set in loadSource, if at all

    /**
     * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
     *
     * @member {boolean}
     * @default true
     */
    this.premultipliedAlpha = true;

    /**
     * @member {string}
     */
    this.imageUrl = null;

    /**
     * Wether or not the texture is a power of two, try to use power of two textures as much as you can
     * @member {boolean}
     * @private
     */
    this.isPowerOfTwo = false;

    // used for webGL

    /**
     *
     * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used
     * Also the texture must be a power of two size to work
     *
     * @member {boolean}
     */
    this.mipmap = false;

    /**
     * A map of renderer IDs to webgl textures
     *
     * @member {object<number, WebGLTexture>}
     * @private
     */
    this._glTextures = [];

    // if no source passed don't try to load
    if (source)
    {
        this.loadSource(source);
    }

    /**
     * Fired when a not-immediately-available source finishes loading.
     *
     * @event loaded
     * @protected
     */

    /**
     * Fired when a not-immediately-available source fails to load.
     *
     * @event error
     * @protected
     */
}

BaseTexture.prototype.constructor = BaseTexture;
module.exports = BaseTexture;

utils.eventTarget.mixin(BaseTexture.prototype);

/**
 * Updates the texture on all the webgl renderers.
 *
 * @fires update
 */
BaseTexture.prototype.update = function () {
    this.emit('update', this);
};

/**
 * Load a source.
 *
 * If the source is not-immediately-available, such as an image that needs to be
 * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
 * and `hasLoaded` will remain false after this call.
 *
 * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
 *
 *     if (texture.hasLoaded)
 {
 *        // texture ready for use
 *     } else if (texture.isLoading)
 {
 *        // listen to 'loaded' and/or 'error' events on texture
 *     } else {
 *        // not loading, not going to load UNLESS the source is reloaded
 *        // (it may still make sense to listen to the events)
 *     }
 *
 * @protected
 * @param source {Image|Canvas} the source object of the texture.
 */
BaseTexture.prototype.loadSource = function (source)
{
    var wasLoading = this.isLoading;
    this.hasLoaded = false;
    this.isLoading = false;

    if (wasLoading && this.source)
    {
        this.source.onload = null;
        this.source.onerror = null;
    }

    this.source = source;

    // Apply source if loaded. Otherwise setup appropriate loading monitors.
    if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height)
    {
        this._sourceLoaded();
    }
    else if (!source.getContext)
    {

        // Image fail / not ready
        this.isLoading = true;

        var scope = this;

        source.onload = function ()
        {
            source.onload = null;
            source.onerror = null;

            if (!scope.isLoading)
            {
                return;
            }

            scope.isLoading = false;
            scope._sourceLoaded();

            scope.emit('loaded', scope);
        };

        source.onerror = function ()
        {
            source.onload = null;
            source.onerror = null;

            if (!scope.isLoading)
            {
                return;
            }

            scope.isLoading = false;
            scope.emit('error', scope);
        };

        // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
        //   "The value of `complete` can thus change while a script is executing."
        // So complete needs to be re-checked after the callbacks have been added..
        // NOTE: complete will be true if the image has no src so best to check if the src is set.
        if (source.complete && source.src)
        {
            this.isLoading = false;

            // ..and if we're complete now, no need for callbacks
            source.onload = null;
            source.onerror = null;

            if (source.width && source.height)
            {
                this._sourceLoaded();

                // If any previous subscribers possible
                if (wasLoading)
                {
                    this.emit('loaded', this);
                }
            }
            else
            {
                // If any previous subscribers possible
                if (wasLoading)
                {
                    this.emit('error', this);
                }
            }
        }
    }
};

/**
 * Used internally to update the width, height, and some other tracking vars once
 * a source has successfully loaded.
 *
 * @private
 */
BaseTexture.prototype._sourceLoaded = function ()
{
    this.hasLoaded = true;

    this.realWidth = this.source.naturalWidth || this.source.width;
    this.realHeight = this.source.naturalHeight || this.source.height;

    this.width = this.realWidth / this.resolution;
    this.height = this.realHeight / this.resolution;


    this.isPowerOfTwo = utils.isPowerOfTwo(this.width, this.height);

    this.update();
};

/**
 * Destroys this base texture
 *
 */
BaseTexture.prototype.destroy = function ()
{
    if (this.imageUrl)
    {
        delete utils.BaseTextureCache[this.imageUrl];
        delete utils.TextureCache[this.imageUrl];

        this.imageUrl = null;

        if (!navigator.isCocoonJS)
        {
            this.source.src = '';
        }
    }
    else if (this.source && this.source._pixiId)
    {
        delete utils.BaseTextureCache[this.source._pixiId];
    }

    this.source = null;

    this.dispose();
};

/**
 * Frees the texture from WebGL memory without destroying this texture object.
 * This means you can still use the texture later which will upload it to GPU
 * memory again.
 *
 */
BaseTexture.prototype.dispose = function ()
{
    this.emit('dispose', this);
};

/**
 * Changes the source image of the texture.
 * The original source must be an Image element.
 *
 * @param newSrc {string} the path of the image
 */
BaseTexture.prototype.updateSourceImage = function (newSrc)
{
    this.source.src = newSrc;

    this.loadSource(this.source);
};

/**
 * Helper function that creates a base texture from the given image url.
 * If the image is not in the base texture cache it will be created and loaded.
 *
 * @static
 * @param imageUrl {string} The image url of the texture
 * @param [crossorigin=(auto)] {boolean} Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
 * @param [scaleMode=scaleModes.DEFAULT] {number} See {@link SCALE_MODES} for possible values
 * @return BaseTexture
 */
BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode)
{
    var baseTexture = utils.BaseTextureCache[imageUrl];

    if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0)
    {
        crossorigin = true;
    }

    if (!baseTexture)
    {
        // new Image() breaks tex loading in some versions of Chrome.
        // See https://code.google.com/p/chromium/issues/detail?id=238071
        var image = new Image();//document.createElement('img');
        if (crossorigin)
        {
            image.crossOrigin = '';
        }

        baseTexture = new BaseTexture(image, scaleMode);
        baseTexture.imageUrl = imageUrl;

        image.src = imageUrl;

        utils.BaseTextureCache[imageUrl] = baseTexture;

        // if there is an @2x at the end of the url we are going to assume its a highres image
        baseTexture.resolution = utils.getResolutionOfUrl(imageUrl);
    }

    return baseTexture;
};

/**
 * Helper function that creates a base texture from the given canvas element.
 *
 * @static
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return BaseTexture
 */
BaseTexture.fromCanvas = function (canvas, scaleMode)
{
    if (!canvas._pixiId)
    {
        canvas._pixiId = 'canvas_' + utils.uuid();
    }

    var baseTexture = utils.BaseTextureCache[canvas._pixiId];

    if (!baseTexture)
    {
        baseTexture = new BaseTexture(canvas, scaleMode);
        utils.BaseTextureCache[canvas._pixiId] = baseTexture;
    }

    return baseTexture;
};

},{"../const":3,"../utils":58}],50:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    Texture = require('./Texture'),
    RenderTarget = require('../renderers/webgl/utils/RenderTarget'),
    FilterManager = require('../renderers/webgl/managers/FilterManager'),
    CanvasBuffer = require('../renderers/canvas/utils/CanvasBuffer'),
    math = require('../math'),
    CONST = require('../const'),
    tempMatrix = new math.Matrix();

/**
 * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * var renderTexture = new PIXI.RenderTexture(800, 600);
 * var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderTexture.render(sprite);
 * ```
 *
 * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual
 * position a Container should be used:
 *
 * ```js
 * var doc = new Container();
 *
 * doc.addChild(sprite);
 *
 * renderTexture.render(doc);  // Renders to center of renderTexture
 * ```
 *
 * @class
 * @extends Texture
 * @memberof PIXI
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used for this RenderTexture
 * @param [width=100] {number} The width of the render texture
 * @param [height=100] {number} The height of the render texture
 * @param [scaleMode] {number} See {@link SCALE_MODES} for possible values
 * @param [resolution=1] {number} The resolution of the texture being generated
 */
function RenderTexture(renderer, width, height, scaleMode, resolution)
{
    if (!renderer)
    {
        throw new Error('Unable to create RenderTexture, you must pass a renderer into the constructor.');
    }

    width = width || 100;
    height = height || 100;
    resolution = resolution || CONST.RESOLUTION;

    /**
     * The base texture object that this texture uses
     *
     * @member {BaseTexture}
     */
    var baseTexture = new BaseTexture();
    baseTexture.width = width;
    baseTexture.height = height;
    baseTexture.resolution = resolution;
    baseTexture.scaleMode = scaleMode || CONST.SCALE_MODES.DEFAULT;
    baseTexture.hasLoaded = true;


    Texture.call(this,
        baseTexture,
        new math.Rectangle(0, 0, width, height)
    );


    /**
     * The with of the render texture
     *
     * @member {number}
     */
    this.width = width;

    /**
     * The height of the render texture
     *
     * @member {number}
     */
    this.height = height;

    /**
     * The Resolution of the texture.
     *
     * @member {number}
     */
    this.resolution = resolution;

    /**
     * The framing rectangle of the render texture
     *
     * @member {Rectangle}
     */
    //this._frame = new math.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Rectangle}
     */
    //this.crop = new math.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);

    /**
     * Draw/render the given DisplayObject onto the texture.
     *
     * The displayObject and descendents are transformed during this operation.
     * If `updateTransform` is true then the transformations will be restored before the
     * method returns. Otherwise it is up to the calling code to correctly use or reset
     * the transformed display objects.
     *
     * The display object is always rendered with a worldAlpha value of 1.
     *
     * @method
     * @param displayObject {DisplayObject} The display object to render this texture on
     * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
     * @param [clear=false] {boolean} If true the texture will be cleared before the displayObject is drawn
     * @param [updateTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
     *  transformations will be restored. Not restoring this information will be a little faster.
     */
    this.render = null;

    /**
     * The renderer this RenderTexture uses. A RenderTexture can only belong to one renderer at the moment if its webGL.
     *
     * @member {CanvasRenderer|WebGLRenderer}
     */
    this.renderer = renderer;

    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        var gl = this.renderer.gl;

        this.textureBuffer = new RenderTarget(gl, this.width, this.height, null, this.resolution);//, this.baseTexture.scaleMode);
        this.baseTexture._glTextures[gl.id] =  this.textureBuffer.texture;

        //TODO refactor filter manager.. as really its no longer a manager if we use it here..
        this.filterManager = new FilterManager(this.renderer);
        this.filterManager.onContextChange();
        this.filterManager.resize(width, height);
        this.render = this.renderWebGL;

        // the creation of a filter manager unbinds the buffers..
        this.renderer.currentRenderer.start();
    }
    else
    {

        this.render = this.renderCanvas;
        this.textureBuffer = new CanvasBuffer(this.width* this.resolution, this.height* this.resolution);
        this.baseTexture.source = this.textureBuffer.canvas;
    }

    /**
     * @member {boolean}
     */
    this.valid = true;

    this._updateUvs();
}

RenderTexture.prototype = Object.create(Texture.prototype);
RenderTexture.prototype.constructor = RenderTexture;
module.exports = RenderTexture;

/**
 * Resizes the RenderTexture.
 *
 * @param width {number} The width to resize to.
 * @param height {number} The height to resize to.
 * @param updateBase {boolean} Should the baseTexture.width and height values be resized as well?
 */
RenderTexture.prototype.resize = function (width, height, updateBase)
{
    if (width === this.width && height === this.height)
    {
        return;
    }

    this.valid = (width > 0 && height > 0);

    this.width = this._frame.width = this.crop.width = width;
    this.height =  this._frame.height = this.crop.height = height;

    if (updateBase)
    {
        this.baseTexture.width = this.width;
        this.baseTexture.height = this.height;
    }

    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
    }

    if (!this.valid)
    {
        return;
    }

    this.textureBuffer.resize(this.width * this.resolution, this.height * this.resolution);

    if(this.filterManager)
    {
        this.filterManager.resize(this.width, this.height);
    }
};

/**
 * Clears the RenderTexture.
 *
 */
RenderTexture.prototype.clear = function ()
{
    if (!this.valid)
    {
        return;
    }

    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
    }

    this.textureBuffer.clear();
};

/**
 * Internal method assigned to the `render` property if using a CanvasRenderer.
 *
 * @private
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear=false] {boolean} If true the texture will be cleared before the displayObject is drawn
 * @param [updateTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
 *  transformations will be restored. Not restoring this information will be a little faster.
 */
RenderTexture.prototype.renderWebGL = function (displayObject, matrix, clear, updateTransform)
{
    if (!this.valid)
    {
        return;
    }

    //TODO this should be true by default
    updateTransform = !!updateTransform;

    this.textureBuffer.transform = matrix;


    // setWorld Alpha to ensure that the object is renderer at full opacity
    displayObject.worldAlpha = displayObject.alpha;

    if (updateTransform)
    {

        // reset the matrix of the displatyObject..
        displayObject.worldTransform.identity();

        displayObject.currentBounds = null;

        // Time to update all the children of the displayObject with the new matrix..
        var children = displayObject.children;
        var i, j;

        for (i = 0, j = children.length; i < j; ++i)
        {
            children[i].updateTransform();
        }
    }


   if (clear)
    {
        this.textureBuffer.clear();
    }

    //TODO rename textureBuffer to renderTarget..
    var temp =  this.renderer.filterManager;

    this.renderer.filterManager = this.filterManager;
    this.renderer.renderDisplayObject(displayObject, this.textureBuffer);

    this.renderer.filterManager = temp;


};


/**
 * Internal method assigned to the `render` property if using a CanvasRenderer.
 *
 * @private
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear] {boolean} If true the texture will be cleared before the displayObject is drawn
 */
RenderTexture.prototype.renderCanvas = function (displayObject, matrix, clear, updateTransform)
{
    if (!this.valid)
    {
        return;
    }

    updateTransform = !!updateTransform;
    var cachedWt = displayObject.worldTransform;

    var wt = tempMatrix;

    wt.identity();

    if (matrix)
    {
        wt.append(matrix);
    }

    displayObject.worldTransform = wt;

    // setWorld Alpha to ensure that the object is renderer at full opacity
    displayObject.worldAlpha = 1;

    // Time to update all the children of the displayObject with the new matrix..
    var children = displayObject.children;
    var i, j;

    for (i = 0, j = children.length; i < j; ++i)
    {
        children[i].updateTransform();
    }

    if (clear)
    {
        this.textureBuffer.clear();
    }

    displayObject.worldTransform = cachedWt;

//    this.textureBuffer.
    var context = this.textureBuffer.context;

    var realResolution = this.renderer.resolution;

    this.renderer.resolution = this.resolution;

    this.renderer.renderDisplayObject(displayObject, context);

    this.renderer.resolution = realResolution;
 //   context.setTransform(1, 0, 0, 1, 0, 0);
   // context.fillStyle ="#FF0000"
//    context.fillRect(0, 0, 800, 600);

};

/**
 * Destroys this texture
 *
 * @param destroyBase {boolean} Whether to destroy the base texture as well
 */
RenderTexture.prototype.destroy = function ()
{
    Texture.prototype.destroy.call(this, true);

    this.textureBuffer.destroy();

    // destroy the filtermanager..
    if(this.filterManager)
    {
        this.filterManager.destroy();
    }

    this.renderer = null;
};

/**
 * Will return a HTML Image of the texture
 *
 * @return {Image}
 */
RenderTexture.prototype.getImage = function ()
{
    var image = new Image();
    image.src = this.getBase64();
    return image;
};

/**
 * Will return a a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that.
 *
 * @return {string} A base64 encoded string of the texture.
 */
RenderTexture.prototype.getBase64 = function ()
{
    return this.getCanvas().toDataURL();
};

/**
 * Creates a Canvas element, renders this RenderTexture to it and then returns it.
 *
 * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
 */
RenderTexture.prototype.getCanvas = function ()
{
    if (this.renderer.type === CONST.RENDERER_TYPE.WEBGL)
    {
        var gl =  this.renderer.gl;
        var width = this.textureBuffer.width;
        var height = this.textureBuffer.height;

        var webGLPixels = new Uint8Array(4 * width * height);

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        var tempCanvas = new CanvasBuffer(width, height);
        var canvasData = tempCanvas.context.getImageData(0, 0, width, height);
        canvasData.data.set(webGLPixels);

        tempCanvas.context.putImageData(canvasData, 0, 0);

        return tempCanvas.canvas;
    }
    else
    {
        return this.textureBuffer.canvas;
    }
};

},{"../const":3,"../math":13,"../renderers/canvas/utils/CanvasBuffer":25,"../renderers/webgl/managers/FilterManager":34,"../renderers/webgl/utils/RenderTarget":45,"./BaseTexture":49,"./Texture":51}],51:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    VideoBaseTexture = require('./VideoBaseTexture'),
    TextureUvs = require('./TextureUvs'),
    eventTarget = require('../utils/eventTarget'),
    math = require('../math'),
    utils = require('../utils');

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * var texture = PIXI.Texture.fromImage('assets/image.png');
 * var sprite1 = new PIXI.Sprite(texture);
 * var sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * @class
 * @mixes eventTarget
 * @memberof PIXI
 * @param baseTexture {BaseTexture} The base texture source to create the texture from
 * @param [frame] {Rectangle} The rectangle frame of the texture to show
 * @param [crop] {Rectangle} The area of original texture
 * @param [trim] {Rectangle} Trimmed texture rectangle
 * @param [rotate] {boolean} indicates whether the texture should be rotated by 90 degrees ( used by texture packer )
 */
function Texture(baseTexture, frame, crop, trim, rotate)
{
    /**
     * Does this Texture have any frame data assigned to it?
     *
     * @member {boolean}
     */
    this.noFrame = false;

    if (!frame)
    {
        this.noFrame = true;
        frame = new math.Rectangle(0, 0, 1, 1);
    }

    if (baseTexture instanceof Texture)
    {
        baseTexture = baseTexture.baseTexture;
    }

  //  console.log(frame);

    /**
     * The base texture that this texture uses.
     *
     * @member {BaseTexture}
     */
    this.baseTexture = baseTexture;

    /**
     * The frame specifies the region of the base texture that this texture uses
     *
     * @member {Rectangle}
     * @private
     */
    this._frame = frame;

    /**
     * The texture trim data.
     *
     * @member {Rectangle}
     */
    this.trim = trim;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    this.valid = false;

    /**
     * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
     *
     * @member {boolean}
     */
    this.requiresUpdate = false;

    /**
     * The WebGL UV data cache.
     *
     * @member {TextureUvs}
     * @private
     */
    this._uvs = null;

    /**
     * The width of the Texture in pixels.
     *
     * @member {number}
     */
    this.width = 0;

    /**
     * The height of the Texture in pixels.
     *
     * @member {number}
     */
    this.height = 0;

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Rectangle}
     */
    this.crop = crop || frame;//new math.Rectangle(0, 0, 1, 1);

    /**
     * Indicates whether the texture should be rotated by 90 degrees
     *
     * @private
     * @member {boolean}
     */
    this.rotate = !!rotate;

    if (baseTexture.hasLoaded)
    {
        if (this.noFrame)
        {
            frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        }
        this.frame = frame;
    }
    else
    {
        baseTexture.addEventListener('loaded', this.onBaseTextureLoaded.bind(this));
    }
}

Texture.prototype.constructor = Texture;
module.exports = Texture;

eventTarget.mixin(Texture.prototype);

Object.defineProperties(Texture.prototype, {
    frame: {
        get: function ()
        {
            return this._frame;
        },
        set: function (frame)
        {
            this._frame = frame;

            this.noFrame = false;

            this.width = frame.width;
            this.height = frame.height;



            if (!this.trim && !this.rotate && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height))
            {
                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
            }

            //this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;
            this.valid = frame && frame.width && frame.height && this.baseTexture.hasLoaded;

            if (this.trim)
            {

                this.width = this.trim.width;
                this.height = this.trim.height;
                this._frame.width = this.trim.width;
                this._frame.height = this.trim.height;
            }
            else
            {
                this.crop = frame;
            }

             if (this.valid)
            {
                this._updateUvs();
            }
        }
    }
});

/**
 * Updates this texture on the gpu.
 *
 */
Texture.prototype.update = function ()
{
    this.baseTexture.update();
};

/**
 * Called when the base texture is loaded
 *
 * @private
 */
Texture.prototype.onBaseTextureLoaded = function ()
{
    var baseTexture = this.baseTexture;
    baseTexture.removeEventListener('loaded', this.onLoaded);

    // TODO this code looks confusing.. boo to abusing getters and setterss!
    if (this.noFrame)
    {
        this.frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
    }
    else
    {
        this.frame = this._frame;
    }

    this.emit( 'update', this );
};

/**
 * Destroys this texture
 *
 * @param destroyBase {boolean} Whether to destroy the base texture as well
 */
Texture.prototype.destroy = function (destroyBase)
{
    if (destroyBase)
    {
        this.baseTexture.destroy();
    }

    this.valid = false;
};

Texture.prototype.clone = function ()
{
    return new Texture(this.baseTexture, this.frame, this.crop, this.trim, this.rotate);
};

/**
 * Updates the internal WebGL UV cache.
 *
 * @private
 */
Texture.prototype._updateUvs = function ()
{
    if (!this._uvs)
    {
        this._uvs = new TextureUvs();
    }

    this._uvs.set(this.crop, this.baseTexture, this.rotate);
};

/**
 * Helper function that creates a Texture object from the given image url.
 * If the image is not in the texture cache it will be  created and loaded.
 *
 * @static
 * @param imageUrl {string} The image url of the texture
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture} The newly created texture
 */
Texture.fromImage = function (imageUrl, crossorigin, scaleMode)
{
    var texture = utils.TextureCache[imageUrl];

    if (!texture)
    {
        texture = new Texture(BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
        utils.TextureCache[imageUrl] = texture;
    }

    return texture;
};

/**
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Texture} The newly created texture
 */
Texture.fromFrame = function (frameId)
{
    var texture = utils.TextureCache[frameId];

    if (!texture)
    {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
    }

    return texture;
};

/**
 * Helper function that creates a new Texture based on the given canvas element.
 *
 * @static
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture}
 */
Texture.fromCanvas = function (canvas, scaleMode)
{
    return new Texture(BaseTexture.fromCanvas(canvas, scaleMode));
};

/**
 * Helper function that creates a new Texture based on the given video element.
 *
 * @static
 * @param video {HTMLVideoElement}
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture} A Texture
 */
Texture.fromVideo = function (video, scaleMode)
{
    return new Texture(VideoBaseTexture.baseTextureFromVideo(video, scaleMode));
};

Texture.fromVideoUrl = function (videoUrl, scaleMode)
{
    return new Texture(VideoBaseTexture.fromUrl(videoUrl, scaleMode));
};

/**
 * Adds a texture to the global utils.TextureCache. This cache is shared across the whole PIXI object.
 *
 * @static
 * @param texture {Texture} The Texture to add to the cache.
 * @param id {string} The id that the texture will be stored against.
 */
Texture.addTextureToCache = function (texture, id)
{
    utils.TextureCache[id] = texture;
};

/**
 * Remove a texture from the global utils.TextureCache.
 *
 * @static
 * @param id {string} The id of the texture to be removed
 * @return {Texture} The texture that was removed
 */
Texture.removeTextureFromCache = function (id)
{
    var texture = utils.TextureCache[id];

    delete utils.TextureCache[id];
    delete utils.BaseTextureCache[id];

    return texture;
};

Texture.emptyTexture = new Texture(new BaseTexture());

},{"../math":13,"../utils":58,"../utils/eventTarget":57,"./BaseTexture":49,"./TextureUvs":52,"./VideoBaseTexture":53}],52:[function(require,module,exports){

/**
 * A standard object to store the Uvs of a texture
 *
 * @class
 * @private
 */
function TextureUvs()
{
    this.x0 = 0;
    this.y0 = 0;

    this.x1 = 0;
    this.y1 = 0;

    this.x2 = 0;
    this.y2 = 0;

    this.x3 = 0;
    this.y3 = 0;
}

module.exports = TextureUvs;

/**
 * Sets the texture Uvs based on the given frame information
 * @param frame {Rectangle}
 * @param baseFrame {Rectangle}
 * @param rotate {boolean} Whether or not the frame is rotated
 * @private
 */
TextureUvs.prototype.set = function (frame, baseFrame, rotate)
{
    var tw = baseFrame.width;
    var th = baseFrame.height;

    if(rotate)
    {
        this.x0 = (frame.x + frame.height) / tw;
        this.y0 = frame.y / th;

        this.x1 = (frame.x + frame.height) / tw;
        this.y1 = (frame.y + frame.width) / th;

        this.x2 = frame.x / tw;
        this.y2 = (frame.y + frame.width) / th;

        this.x3 = frame.x / tw;
        this.y3 = frame.y / th;
    }
    else
    {

        this.x0 = frame.x / tw;
        this.y0 = frame.y / th;

        this.x1 = (frame.x + frame.width) / tw;
        this.y1 = frame.y / th;

        this.x2 = (frame.x + frame.width) / tw;
        this.y2 = (frame.y + frame.height) / th;

        this.x3 = frame.x / tw;
        this.y3 = (frame.y + frame.height) / th;
    }
};

},{}],53:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    utils = require('../utils');

/**
 * A texture of a [playing] Video.
 *
 * Video base textures mimic Pixi BaseTexture.from.... method in their creation process.
 *
 * This can be used in several ways, such as:
 *
 * ```js
 * var texture = PIXI.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
 *
 * var texture = PIXI.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
 *
 * var texture = PIXI.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
 *
 * var texture = PIXI.VideoBaseTexture.fromUrls([
 *     { src: '/video.webm', mime: 'video/webm' },
 *     { src: '/video.mp4', mime: 'video/mp4' }
 * ]);
 * ```
 *
 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
 *
 * @class
 * @extends BaseTexture
 * @memberof PIXI
 * @param source {HTMLVideoElement}
 * @param [scaleMode] {number} See {@link SCALE_MODES} for possible values
 */
function VideoBaseTexture(source, scaleMode)
{
    if (!source)
    {
        throw new Error('No video source element specified.');
    }

    // hook in here to check if video is already available.
    // BaseTexture looks for a source.complete boolean, plus width & height.

    if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height)
    {
        source.complete = true;
    }

    BaseTexture.call(this, source, scaleMode);

    /**
     * Should the base texture automatically update itself, set to true by default
     *
     * @member {boolean}
     * @default true
     */
    this.autoUpdate = false;

    this._onUpdate = this._onUpdate.bind(this);
    this._onCanPlay = this._onCanPlay.bind(this);

    if (!source.complete)
    {
        source.addEventListener('canplay', this._onCanPlay);
        source.addEventListener('canplaythrough', this._onCanPlay);

        // started playing..
        source.addEventListener('play', this._onPlayStart.bind(this));
        source.addEventListener('pause', this._onPlayStop.bind(this));
    }

    this.__loaded = false;
}

VideoBaseTexture.prototype = Object.create(BaseTexture.prototype);
VideoBaseTexture.prototype.constructor = VideoBaseTexture;
module.exports = VideoBaseTexture;

/**
 * The internal update loop of the video base texture, only runs when autoUpdate is set to true
 * @private
 */
VideoBaseTexture.prototype._onUpdate = function ()
{
    if (this.autoUpdate)
    {
        window.requestAnimationFrame(this._onUpdate);
        this.update();
    }
};

/**
 * Runs the update loop when the video is ready to play
 * @private
 */
VideoBaseTexture.prototype._onPlayStart = function ()
{
    if (!this.autoUpdate)
    {
        window.requestAnimationFrame(this._onUpdate);
        this.autoUpdate = true;
    }
};

/**
 * Fired when a pause event is triggered, stops the update loop
 * @private
 */
VideoBaseTexture.prototype._onPlayStop = function ()
{
    this.autoUpdate = false;
};

/**
 * Fired when the video is loaded and ready to play
 * @private
 */
VideoBaseTexture.prototype._onCanPlay = function ()
{
    this.hasLoaded = true;

    if (this.source)
    {
        this.source.removeEventListener('canplay', this._onCanPlay);
        this.source.removeEventListener('canplaythrough', this._onCanPlay);

        this.width = this.source.videoWidth;
        this.height = this.source.videoHeight;

        this.source.play();

        // prevent multiple loaded dispatches..
        if (!this.__loaded)
        {
            this.__loaded = true;
            this.emit('loaded', this);
        }
    }
};

/**
 * Destroys this texture
 *
 */
VideoBaseTexture.prototype.destroy = function ()
{
    if (this.source && this.source._pixiId)
    {
        utils.BaseTextureCache[ this.source._pixiId ] = null;
        delete utils.BaseTextureCache[ this.source._pixiId ];

        this.source._pixiId = null;
        delete this.source._pixiId;
    }

    BaseTexture.prototype.destroy.call(this);
};

/**
 * Mimic Pixi BaseTexture.from.... method.
 *
 * @static
 * @param video {HTMLVideoElement}
 * @param scaleMode {number} See {@link SCALE_MODES} for possible values
 * @return {VideoBaseTexture}
 */
VideoBaseTexture.fromVideo = function (video, scaleMode)
{
    if (!video._pixiId)
    {
        video._pixiId = 'video_' + utils.uuid();
    }

    var baseTexture = utils.BaseTextureCache[video._pixiId];

    if (!baseTexture)
    {
        baseTexture = new VideoBaseTexture(video, scaleMode);
        utils.BaseTextureCache[ video._pixiId ] = baseTexture;
    }

    return baseTexture;
};

/**
 * Helper function that creates a new BaseTexture based on the given video element.
 * This BaseTexture can then be used to create a texture
 *
 * @static
 * @param videoSrc {string|object|string[]|object[]} The URL(s) for the video.
 * @param [videoSrc.src] {string} One of the source urls for the video
 * @param [videoSrc.mime] {string} The mimetype of the video (e.g. 'video/mp4'). If not specified
 *  the url's extension will be used as the second part of the mime type.
 * @param scaleMode {number} See {@link SCALE_MODES} for possible values
 * @return {VideoBaseTexture}
 */
VideoBaseTexture.fromUrl = function (videoSrc, scaleMode)
{
    var video = document.createElement('video');

    // array of objects or strings
    if (Array.isArray(videoSrc))
    {
        for (var i = 0; i < videoSrc.length; ++i)
        {
            video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
        }
    }
    // single object or string
    else
    {
        video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
    }

    video.load();
    video.play();

    return VideoBaseTexture.fromVideo(video, scaleMode);
};

VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

function createSource(path, type)
{
    if (!type)
    {
        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
    }

    var source = document.createElement('source');

    source.src = path;
    source.type = type;

    return source;
}

},{"../utils":58,"./BaseTexture":49}],54:[function(require,module,exports){
/**
 * Creates an homogenous object for tracking events so users can know what to expect.
 *
 * @class
 * @memberof PIXI.utils
 * @param target {object} The target object that the event is called on
 * @param name {string} The string name of the event that was triggered
 * @param data {object} Arbitrary event data to pass along
 */
function EventData(target, name, data)
{
    // for duck typing in the ".on()" function
    this.__isEventObject = true;

    /**
     * Tracks the state of bubbling propagation. Do not
     * set this directly, instead use `event.stopPropagation()`
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    this.stopped = false;

    /**
     * Tracks the state of sibling listener propagation. Do not
     * set this directly, instead use `event.stopImmediatePropagation()`
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    this.stoppedImmediate = false;

    /**
     * The original target the event triggered on.
     *
     * @member {object}
     * @readonly
     */
    this.target = target;

    /**
     * The string name of the event that this represents.
     *
     * @member {string}
     * @readonly
     */
    this.type = name;

    /**
     * The data that was passed in with this event.
     *
     * @member {object}
     * @readonly
     */
    this.data = data;

    /**
     * The timestamp when the event occurred.
     *
     * @member {number}
     * @readonly
     */
    this.timeStamp = Date.now();
}

EventData.prototype.constructor = EventData;
module.exports = EventData;

/**
 * Stops the propagation of events up the scene graph (prevents bubbling).
 *
 */
EventData.prototype.stopPropagation = function stopPropagation()
{
    this.stopped = true;
};

/**
 * Stops the propagation of events to sibling listeners (no longer calls any listeners).
 *
 */
EventData.prototype.stopImmediatePropagation = function stopImmediatePropagation()
{
    this.stoppedImmediate = true;
};

},{}],55:[function(require,module,exports){
//TODO: Have Graphics use https://github.com/mattdesl/shape2d
// and https://github.com/mattdesl/shape2d-triangulate instead of custom code.

/*
    PolyK library
    url: http://polyk.ivank.net
    Released under MIT licence.

    Copyright (c) 2012 Ivan Kuckir

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    This is an amazing lib!

    Slightly modified by Mat Groves (matgroves.com);
*/

/**
 * Based on the Polyk library http://polyk.ivank.net released under MIT licence.
 * This is an amazing lib!
 * Slightly modified by Mat Groves (matgroves.com);
 *
 * @memberof PIXI.utils
 */
var PolyK = module.exports = {};

/**
 * Triangulates shapes for webGL graphic fills.
 *
 */
PolyK.Triangulate = function (p)
{
    var sign = true;

    var n = p.length >> 1;
    if (n < 3) return [];

    var tgs = [];
    var avl = [];
    for (var i = 0; i < n; i++) avl.push(i);

    i = 0;
    var al = n;
    while (al > 3)
    {
        var i0 = avl[(i+0)%al];
        var i1 = avl[(i+1)%al];
        var i2 = avl[(i+2)%al];

        var ax = p[2*i0],  ay = p[2*i0+1];
        var bx = p[2*i1],  by = p[2*i1+1];
        var cx = p[2*i2],  cy = p[2*i2+1];

        var earFound = false;
        if (PolyK._convex(ax, ay, bx, by, cx, cy, sign))
        {
            earFound = true;
            for (var j = 0; j < al; j++)
            {
                var vi = avl[j];
                if (vi === i0 || vi === i1 || vi === i2) continue;

                if (PolyK._PointInTriangle(p[2*vi], p[2*vi+1], ax, ay, bx, by, cx, cy))
                {
                    earFound = false;
                    break;
                }
            }
        }

        if (earFound)
        {
            tgs.push(i0, i1, i2);
            avl.splice((i+1)%al, 1);
            al--;
            i = 0;
        }
        else if (i++ > 3*al)
        {
            // need to flip flip reverse it!
            // reset!
            if (sign)
            {
                tgs = [];
                avl = [];
                for (i = 0; i < n; i++) avl.push(i);

                i = 0;
                al = n;

                sign = false;
            }
            else
            {
             //   window.console.log("PIXI Warning: shape too complex to fill");
                return null;
            }
        }
    }

    tgs.push(avl[0], avl[1], avl[2]);
    return tgs;
};

/**
 * Checks whether a point is within a triangle
 *
 * @param px {number} x coordinate of the point to test
 * @param py {number} y coordinate of the point to test
 * @param ax {number} x coordinate of the a point of the triangle
 * @param ay {number} y coordinate of the a point of the triangle
 * @param bx {number} x coordinate of the b point of the triangle
 * @param by {number} y coordinate of the b point of the triangle
 * @param cx {number} x coordinate of the c point of the triangle
 * @param cy {number} y coordinate of the c point of the triangle
 * @private
 * @return {boolean}
 */
PolyK._PointInTriangle = function (px, py, ax, ay, bx, by, cx, cy)
{
    var v0x = cx-ax;
    var v0y = cy-ay;
    var v1x = bx-ax;
    var v1y = by-ay;
    var v2x = px-ax;
    var v2y = py-ay;

    var dot00 = v0x*v0x+v0y*v0y;
    var dot01 = v0x*v1x+v0y*v1y;
    var dot02 = v0x*v2x+v0y*v2y;
    var dot11 = v1x*v1x+v1y*v1y;
    var dot12 = v1x*v2x+v1y*v2y;

    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    // Check if point is in triangle
    return (u >= 0) && (v >= 0) && (u + v < 1);
};

/**
 * Checks whether a shape is convex
 *
 * @private
 * @return {boolean}
 */
PolyK._convex = function (ax, ay, bx, by, cx, cy, sign)
{
    return ((ay-by)*(cx-bx) + (bx-ax)*(cy-by) >= 0) === sign;
};

},{}],56:[function(require,module,exports){
var eventTarget = require('./eventTarget'),
    EventData   = require('./EventData');

/**
 * A Ticker class that runs the main update loop that other objects listen to
 *
 * @class
 * @memberof PIXI.utils
 */
var Ticker = function()
{
    this.updateBind = this.update.bind(this);

    /**
     * Whether or not this ticker runs
     *
     * @member {boolean}
     */
    this.active = false;
    this.eventData = new EventData( this, 'tick', { deltaTime:1 } );

    /**
     * The deltaTime
     *
     * @member {number}
     */
    this.deltaTime = 1;

    /**
     * The time between two frames
     *
     * @member {number}
     */
    this.timeElapsed = 0;
    this.lastTime = 0;

    this.speed = 1;

    // auto start ticking!
    this.start();
};

eventTarget.mixin(Ticker.prototype);


Ticker.prototype.start = function()
{
    if(this.active)
    {
        return;
    }

    this.active = true;
    requestAnimationFrame(this.updateBind);
};


Ticker.prototype.stop = function()
{
    if(!this.active)
    {
        return;
    }

    this.active = false;
};

Ticker.prototype.update = function()
{
    if(this.active)
    {
        requestAnimationFrame(this.updateBind);

        var currentTime =  new Date().getTime();
        var timeElapsed = currentTime - this.lastTime;

        // cap the time!
        if(timeElapsed > 100)
        {
            timeElapsed = 100;
        }

        this.deltaTime = (timeElapsed * 0.06);

        this.deltaTime *= this.speed;

        // 60 ---> 1
        // 30 ---> 2

        this.eventData.data.deltaTime = this.deltaTime;

        this.emit( 'tick', this.eventData );

        this.lastTime = currentTime;
    }

};

module.exports = new Ticker();

},{"./EventData":54,"./eventTarget":57}],57:[function(require,module,exports){
var EventData = require('./EventData');

var tempEventObject = new EventData(null, null, {});

/**
 * Mixins event emitter functionality to an object.
 *
 * @mixin
 * @memberof PIXI.utils
 * @example
 *      function MyEmitter() {}
 *
 *      eventTarget.mixin(MyEmitter.prototype);
 *
 *      var em = new MyEmitter();
 *      em.emit('eventName', 'some data', 'some more data', {}, null, ...);
 */
function eventTarget(obj)
{
    /**
     * Return a list of assigned event listeners.
     *
     * @memberof eventTarget
     * @param eventName {string} The events that should be listed.
     * @return {Array} An array of listener functions
     */
    obj.listeners = function listeners(eventName)
    {
        this._listeners = this._listeners || {};

        return this._listeners[eventName] ? this._listeners[eventName].slice() : [];
    };

    /**
     * Emit an event to all registered event listeners.
     *
     * @memberof eventTarget
     * @alias dispatchEvent
     * @param eventName {string} The name of the event.
     * @return {boolean} Indication if we've emitted an event.
     */
    obj.emit = obj.dispatchEvent = function emit(eventName, data)
    {
        this._listeners = this._listeners || {};

        // fast return when there are no listeners
        if (!this._listeners[eventName])
        {
            return;
        }

        //backwards compat with old method ".emit({ type: 'something' })"
        //lets not worry about old ways of using stuff for v3
        /*
        if (typeof eventName === 'object')
        {
            data = eventName;
            eventName = eventName.type;
        }
        */

        //ensure we are using a real pixi event
        //instead of creating a new object lets use an the temp one ( save new creation for each event )
        if ( !data || !data.__isEventObject )
        {
            tempEventObject.target=  this;
            tempEventObject.type = eventName;
            tempEventObject.data = data;

            data = tempEventObject;
        }

        //iterate the listeners
        var listeners = this._listeners[eventName].slice(0),
            length = listeners.length,
            fn = listeners[0],
            i;

        for (i = 0; i < length; fn = listeners[++i])
        {
            //call the event listener scope is currently determined by binding the listener
            //way faster than 'call'
            fn(data);

            //if "stopImmediatePropagation" is called, stop calling sibling events
            if (data.stoppedImmediate)
            {
                return this;
            }
        }

        //if "stopPropagation" is called then don't bubble the event
        if (data.stopped)
        {
            return this;
        }

        return this;
    };

    /**
     * Register a new EventListener for the given event.
     *
     * @memberof eventTarget
     * @alias addEventListener
     * @param eventName {string} Name of the event.
     * @param callback {Functon} fn Callback function.
     */
    obj.on = obj.addEventListener = function on(eventName, fn)
    {
        this._listeners = this._listeners || {};

        (this._listeners[eventName] = this._listeners[eventName] || [])
            .push(fn);

        return this;
    };

    /**
     * Add an EventListener that's only called once.
     *
     * @memberof eventTarget
     * @param eventName {string} Name of the event.
     * @param callback {Function} Callback function.
     */
    obj.once = function once(eventName, fn)
    {
        this._listeners = this._listeners || {};

        var self = this;
        function onceHandlerWrapper()
        {
            fn.apply(self.off(eventName, onceHandlerWrapper), arguments);
        }
        onceHandlerWrapper._originalHandler = fn;

        return this.on(eventName, onceHandlerWrapper);
    };

    /**
     * Remove event listeners.
     *
     * @memberof eventTarget
     * @alias removeEventListener
     * @param eventName {string} The event we want to remove.
     * @param callback {Function} The listener that we need to find.
     */
    obj.off = obj.removeEventListener = function off(eventName, fn)
    {
        this._listeners = this._listeners || {};

        if (!this._listeners[eventName])
        {
            return this;
        }

        var list = this._listeners[eventName],
            i = fn ? list.length : 0;

        while (i-- > 0)
        {
            if (list[i] === fn || list[i]._originalHandler === fn)
            {
                list.splice(i, 1);
            }
        }

        if (list.length === 0)
        {
            // delete causes deoptimization
            // lets set it to null
            this._listeners[eventName] = null;
        }

        return this;
    };

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @memberof eventTarget
     * @param eventName {string} The event you want to remove all listeners for.
     */
    obj.removeAllListeners = function removeAllListeners(eventName)
    {
        this._listeners = this._listeners || {};

        if (!this._listeners[eventName])
        {
            return this;
        }

        // delete causes deoptimization
        // lets set it to null
        this._listeners[eventName] = null;

        return this;
    };
}

module.exports = {
    /**
     * Mixes in the properties of the eventTarget into another object
     *
     * @param object {object} The obj to mix into
     */
    mixin: function mixin(obj)
    {
        eventTarget(obj);
    }
};

},{"./EventData":54}],58:[function(require,module,exports){
var CONST = require('../const');

/**
 * @namespace PIXI.utils
 */
var utils = module.exports = {
    _uid: 0,
    _saidHello: false,

    RAFramePolyfill:require('./requestAnimationFramePolyfill'),
    Ticker:         require('./Ticker'),
    EventData:      require('./EventData'),
    eventTarget:    require('./eventTarget'),
    pluginTarget:   require('./pluginTarget'),
    PolyK:          require('./PolyK'),


    /**
     * Gets the next uuid
     *
     * @return {number} The next uuid to use.
     */
    uuid: function ()
    {
        return ++utils._uid;
    },

    /**
     * Converts a hex color number to an [R, G, B] array
     *
     * @param hex {number}
     * @return {number[]} An array representing the [R, G, B] of the color.
     */
    hex2rgb: function (hex, out)
    {
        out = out || [];

        out[0] = (hex >> 16 & 0xFF) / 255;
        out[1] = (hex >> 8 & 0xFF) / 255;
        out[2] = (hex & 0xFF) / 255;

        return out;
    },

    /**
     * Converts a hex color number to a string.
     *
     * @param hex {number}
     * @return {string} The string color.
     */
    hex2string: function (hex)
    {
        hex = hex.toString(16);
        hex = '000000'.substr(0, 6 - hex.length) + hex;

        return '#' + hex;
    },

    /**
     * Converts a color as an [R, G, B] array to a hex number
     *
     * @param rgb {number[]}
     * @return {number} The color number
     */
    rgb2hex: function (rgb)
    {
        return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);
    },

    /**
     * Checks whether the Canvas BlendModes are supported by the current browser
     *
     * @return {boolean} whether they are supported
     */
    canUseNewCanvasBlendModes: function ()
    {
        if (typeof document === 'undefined')
        {
            return false;
        }

        var pngHead = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/';
        var pngEnd = 'AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';

        var magenta = new Image();
        magenta.src = pngHead + 'AP804Oa6' + pngEnd;

        var yellow = new Image();
        yellow.src = pngHead + '/wCKxvRF' + pngEnd;

        var canvas = document.createElement('canvas');
        canvas.width = 6;
        canvas.height = 1;

        var context = canvas.getContext('2d');
        context.globalCompositeOperation = 'multiply';
        context.drawImage(magenta, 0, 0);
        context.drawImage(yellow, 2, 0);

        var data = context.getImageData(2,0,1,1).data;

        return (data[0] === 255 && data[1] === 0 && data[2] === 0);
    },

    /**
     * Given a number, this function returns the closest number that is a power of two
     * this function is taken from Starling Framework as its pretty neat ;)
     *
     * @param number {number}
     * @return {number} the closest number that is a power of two
     */
    getNextPowerOfTwo: function (number)
    {
        // see: http://en.wikipedia.org/wiki/Power_of_two#Fast_algorithm_to_check_if_a_positive_number_is_a_power_of_two
        if (number > 0 && (number & (number - 1)) === 0)
        {
            return number;
        }
        else
        {
            var result = 1;

            while (result < number)
            {
                result <<= 1;
            }

            return result;
        }
    },

    /**
     * checks if the given width and height make a power of two rectangle
     *
     * @param width {number}
     * @param height {number}
     * @return {boolean}
     */
    isPowerOfTwo: function (width, height)
    {
        return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
    },

    /**
     * get the resolution of an asset by looking for the prefix
     * used by spritesheets and image urls
     *
     * @param url {string} the image path
     * @return {boolean}
     */
    getResolutionOfUrl: function (url)
    {
        var resolution = CONST.RETINA_PREFIX.exec(url);

        if (resolution)
        {
           return parseFloat(resolution[1]);
        }

        return 1;
    },

    /**
     * Logs out the version and renderer information for this running instance of PIXI.
     * If you don't want to see this message you can set `PIXI.utils._saidHello = true;`
     * so the library thinks it already said it. Keep in mind that doing that will forever
     * makes you a jerk face.
     *
     * @param {string} type - The string renderer type to log.
     * @constant
     * @static
     */
    sayHello: function (type)
    {
        if (utils._saidHello)
        {
            return;
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
        {
            var args = [
                '%c %c %c Pixi.js ' + CONST.VERSION + ' - ' + type + '  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ ',
                'background: #ff66a5',
                'background: #ff66a5',
                'color: #ff66a5; background: #030307;',
                'background: #ff66a5',
                'background: #ffc3dc',
                'background: #ff66a5',
                'color: #ff2424; background: #fff',
                'color: #ff2424; background: #fff',
                'color: #ff2424; background: #fff'
            ];

            window.console.log.apply(console, args); //jshint ignore:line
        }
        else if (window.console)
        {
            window.console.log('Pixi.js ' + CONST.VERSION + ' - ' + type + ' - http://www.pixijs.com/'); //jshint ignore:line
        }

        utils._saidHello = true;
    },

    TextureCache: {},
    BaseTextureCache: {}
};

},{"../const":3,"./EventData":54,"./PolyK":55,"./Ticker":56,"./eventTarget":57,"./pluginTarget":59,"./requestAnimationFramePolyfill":60}],59:[function(require,module,exports){
/**
 * Mixins functionality to make an object have "plugins".
 *
 * @mixin
 * @memberof PIXI.utils
 * @param obj {object} The object to mix into.
 * @example
 *      function MyObject() {}
 *
 *      pluginTarget.mixin(MyObject);
 */
function pluginTarget(obj)
{
    obj.__plugins = {};

    /**
     * Adds a plugin to an object
     *
     * @param pluginName {string} The events that should be listed.
     * @param ctor {Object} ?? @alvin
     */
    obj.registerPlugin = function (pluginName, ctor)
    {
        obj.__plugins[pluginName] = ctor;
    };

    /**
     * Instantiates all the plugins of this object
     *
     */
    obj.prototype.initPlugins = function ()
    {
        this.plugins = this.plugins || {};

        for (var o in obj.__plugins)
        {
            this.plugins[o] = new (obj.__plugins[o])(this);
        }
    };

    /**
     * Removes all the plugins of this object
     *
     */
    obj.prototype.destroyPlugins = function ()
    {
        for (var o in this.plugins)
        {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        this.plugins = null;
    };
}


module.exports = {
    /**
     * Mixes in the properties of the pluginTarget into another object
     *
     * @param object {object} The obj to mix into
     */
    mixin: function mixin(obj)
    {
        pluginTarget(obj);
    }
};

},{}],60:[function(require,module,exports){
(function(window) {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    })(window);

},{}],61:[function(require,module,exports){

},{}],62:[function(require,module,exports){
module.exports={
  "name": "perenquenjs",
  "version": "1.0.0",
  "homepage": "http://perenquenjs.com",
  "description": "HTML5 Game Framework for mobile, web and desktop development.",
  "author": "Nazari Gonzalez <nazari.nz@gmail.com> (http://www.nazariglez.com)",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/Nazariglez/perenquenjs"
  },
  "bin": {
    "perenquen": "./cli/perenquen"
  },
  "private": true,
  "dependencies": {
    "browserify": "^9.0.3",
    "colors": "^1.0.3",
    "commander": "^2.6.0",
    "gulp": "^3.8.11",
    "gulp-cached": "^1.0.2",
    "gulp-jshint": "^1.9.2",
    "gulp-rename": "^1.2.0",
    "gulp-uglify": "^1.1.0",
    "require-dir": "^0.1.0",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^2.4.0"
  },
  "main": "./cli/perenquen",
  "browser": "./build/perenquen.js"
}

},{}],63:[function(require,module,exports){
var CONST = require('./const'),
    utils = require('./utils'),
    autoDetectRenderer = require('../../lib/pixi/src/core').autoDetectRenderer,
    WebGLRenderer = require('../../lib/pixi/src/core/renderers/webgl/WebGLRenderer'),
    SceneManager = require('./SceneManager');

var graphics = new (require('../../lib/pixi/src/core/graphics/Graphics'))();

graphics.beginFill(0x000000);
graphics.drawCircle(0,0,100);
graphics.endFill();

/**
 * The main object of your game.
 * @class
 * @memberof PQ
 * @param width=800
 * @param height=600
 * @param [gameOptions] {object} Optional game parameters
 * @param [gameOptions.debug=false] {boolean} Show development info, default false
 * @param [gameOptions.frameLimit] {number} limit the elapsed time
 * @param [gameOptions.sayHello=true] {boolean} logs out the version, renderer, and audio type
 * @param [gameOptions.noWebAudio=false] {boolean} prevents selection of WebAudio type
 * @param [gameOptions.persistantData=true] {boolean} Use localStorage to save all you need
 * @param [gameOptions.audioExts] {array} Force load audio files in this order
 * @param [gameOptions.noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
 * @param [rendererOptions] {object} Optional game parameters
 * @param [rendererOptions.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [rendererOptions.transparent=false] {boolean} If the render view is transparent, default false
 * @param [rendererOptions.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [rendererOptions.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
 *      need to call toDataUrl on the webgl context
 * @param [rendererOptions.resolution=1] {number} the resolution of the renderer
 */
function Game(width, height, gameOptions, rendererOptions){
    /**
     * The config of the game
     *
     * @member {object}
     * @default CONST.DEFAULT_GAME_OPTIONS
     */
    this.config = utils.defaultObject(CONST.DEFAULT_GAME_OPTIONS, gameOptions);
    utils._saidHello = !this.config.sayHello;
    rendererOptions = utils.defaultObject(CONST.DEFAULT_RENDER_OPTIONS, rendererOptions);

    /**
     * The id of requestAnimationFrame
     *
     * @member {number}
     */
    this.raf = -1;

    /**
     * The renderer width
     * @member {number}
     */
    this.width = width || 800;

    /**
     * The renderer height
     * @member {number}
     */
    this.height = height || 600;

    /**
     * Renderer in use
     * @member {WebGLRenderer|CanvasRenderer}
     */
    this.renderer = getRenderer(this.width, this.height, rendererOptions, this.config.noWebGL);
    this.resize(this.width, this.height);

    /**
     * The time between frames
     * @member {number}
     */
    this.frameElapsedTime = 0;

    /**
     * Last frame time
     * @member {number}
     */
    this.frameLastTime = 0;

    /**
     * The total game time
     * @member {number}
     */
    this.time = 0;

    /**
     * The delta time
     * @member {number}
     */
    this.delta = 0;

    /**
     * Whether the renderer is a webgl
     * @member {boolean}
     */
    this.isWebGL = (this.renderer instanceof WebGLRenderer);

    /**
     * The scene manager for this game
     * @member {SceneManager}
     */
    this.sceneManager = new SceneManager(this);
}

Game.prototype.constructor = Game;

/**
 * Start the request animation frame
 * @returns {Game}
 */
Game.prototype.start = function(){
    this.updateTime();
    this.animate();
    //TODO: Unpause audio manager;
    return this;
};

/**
 * Stop the request animation frame
 * @returns {Game}
 */
Game.prototype.stop = function(){
    window.cancelAnimationFrame(this.raf);
    //TODO: pause audioManager
    return this;
};

/**
 * Draw and animate all the actors in the scene
 * @returns {Game}
 */
Game.prototype.animate = function(){
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
    this.updateTime();
    this.renderer.render(this.sceneManager);

    this.sceneManager.animate(this.time, this.delta);

    return this;
};

/**
 * Calculate all game times
 * @returns {Game}
 */
Game.prototype.updateTime = function(){
    var now = Date.now();
    var time = now - this.frameLastTime;
    this.frameElapsedTime = (time <= this.config.frameLimit) ? time : this.config.frameLimit;
    this.frameLastTime = now;
    this.delta = this.frameElapsedTime/1000;
    this.time += this.delta;

    return this;
};

/**
 * Resize the view using DOM Style
 * @param width {number}
 * @param height {number}
 * @returns {Game}
 */
Game.prototype.resize = function(width, height){
    var canvas = this.renderer.view;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    //TODO: Update a game.widht and game.height?
    return this;
};

module.exports = Game;

function getRenderer(width, height, options, noWebGL){
    if(navigator.isCocoonJS&&!options.view)options.view = window.document.createElement("screencanvas");

    var renderer = new autoDetectRenderer(width, height, options, noWebGL);
    window.document.body.appendChild(renderer.view);

    return renderer;
}
},{"../../lib/pixi/src/core":10,"../../lib/pixi/src/core/graphics/Graphics":6,"../../lib/pixi/src/core/renderers/webgl/WebGLRenderer":29,"./SceneManager":64,"./const":65,"./utils":67}],64:[function(require,module,exports){
var Container = require('../../lib/pixi/src/core/display/Container'),
    Scene = require('../display/Scene');

/**
 * Manage and store all the scenes in the game
 *
 * @class
 * @memberof PQ
 * @param game {Game}
 */
function SceneManager(game){
    Container.call(this);

    /**
     *
     * @member {Game}
     */
    this.game = game;

    /**
     *
     * @member {array}
     */
    this.scenes = [];

    /**
     *
     * @member {Scene}
     */
    this.currentScene = null;
}

SceneManager.prototype = Object.create(Container.prototype);
SceneManager.prototype.constructor = SceneManager;

/**
 * Store a new scene
 *
 * @param scene {Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.addScene = function(scene){
    this.scenes.push(scene);
    return this;
};

/**
 * Animate the currentScene
 * @param gameTime {number}
 * @param delta {number}
 * @returns {SceneManager}
 */
SceneManager.prototype.animate = function(gameTime, delta){
    if(this.currentScene&&this.currentScene.animate){
        this.currentScene.animate(gameTime, delta);
    }

    return this;
};

/**
 * Set a scene to render and animate
 * @param scene {Scene}
 * @returns {SceneManager}
 */
SceneManager.prototype.setCurrentScene = function(scene){
    scene.setManager(this);
    this.currentScene = scene;
    this.children.length = 0;
    this.addChild(scene);
    return this;
};


module.exports = SceneManager;
},{"../../lib/pixi/src/core/display/Container":4,"../display/Scene":69}],65:[function(require,module,exports){
var constants = require('../../lib/pixi/src/core/const');

/**
 * String of the current PQ version
 *
 * @static
 * @constant
 * @property {string} VERSION
 */
constants.VERSION = require('../../package.json').version;

/**
 * String of the current PIXI version
 * @constant
 * @property {string} PIXI_VERSION
 */
constants.PIXI_VERSION = require('../../lib/pixi/package.json').version;

/**
 * Constant to identify the Audio Type.
 *
 * @static
 * @constant
 * @property {object} AUDIO_TYPE
 * @property {number} AUDIO_TYPE.UNKNOWN
 * @property {number} AUDIO_TYPE.WEBAUDIO
 * @property {number} AUDIO_TYPE.HTMLAUDIO
 */
constants.AUDIO_TYPE = {
    UNKNOWN : 0,
    WEBAUDIO : 1,
    HTMLADUDIO : 2
};

/**
 * The default game options if none are supplied to {@link PQ.Game}
 *
 * @static
 * @constant
 * @property {object} DEFAULT_GAME_OPTIONS
 * @property {boolean} DEFAULT_RENDER_OPTIONS.debug=false
 * @property {boolean} DEFAULT_RENDER_OPTIONS.sayHello=true
 * @property {boolean} DEFAULT_RENDER_OPTIONS.noWebAudio=false
 * @property {boolean} DEFAULT_RENDER_OPTIONS.noWebGL=false
 * @property {number} DEFAULT_RENDER_OPTIONS.frameLimit=35
 * @property {boolean} DEFAULT_RENDER_OPTIONS.ersistantData=true
 * @property {array} DEFAULT_RENDER_OPTIONS.audioExts
 * @property {boolean} DEFAULT_RENDER_OPTIONS.pauseOnVisibilityChange=true
 */
constants.DEFAULT_GAME_OPTIONS = {
    debug: false,
    sayHello: true,
    noWebAudio: false,
    noWebGL: false,
    frameLimit: 35,
    persistantData: true,
    audioExts: ['ogg', 'mp3', 'wav'],
    pauseOnVisibilityChange: true
};

module.exports = constants;

},{"../../lib/pixi/package.json":2,"../../lib/pixi/src/core/const":3,"../../package.json":62}],66:[function(require,module,exports){
module.exports = {
    Game : require('./Game'),
    SceneManager : require('./SceneManager')
};
},{"./Game":63,"./SceneManager":64}],67:[function(require,module,exports){
var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils');

//utils._saidHello = true;

/**
 * logs out renderer type, audio type, and version
 */
utils.sayHello = function(){
    //TODO: RendererType, AudioType, Pixi credits
    if(!this._saidHello)console.log('Perenquen.js v'+CONST.VERSION + ' [http://perequenjs.com]');
};

/**
 * Set default parameters in child object with the parent values
 *
 * @param parent {object}
 * @param child {object}
 * @returns {object}
 */
utils.defaultObject = function(parent, child){
    parent = parent || {};
    child = child || {};
    for(var key in parent){
        child[key] = (child[key] !== undefined && child[key] !== null) ? child[key] : parent[key];
    }

    return child;
};

/**
 * Extend an object with the properties from other object
 * @param obj {object}
 * @param mixin {object}
 */
utils.mixin = function(obj, mixin){
    for(var key in mixin){
        obj.prototype[key] = mixin[key];
    }
};

module.exports = utils;
},{"../../../lib/pixi/src/core/utils":58,"../const":65}],68:[function(require,module,exports){
var Graphics = require('../../lib/pixi/src/core/graphics/Graphics'),
    utils = require('../core/utils'),
    mixin = require('./mixin');

utils.mixin(Graphics, mixin);




module.exports = Graphics;
},{"../../lib/pixi/src/core/graphics/Graphics":6,"../core/utils":67,"./mixin":70}],69:[function(require,module,exports){
var Graphics = require('../../lib/pixi/src/core/graphics/Graphics');

function Scene(){
    Graphics.call(this);
    this._backgroundColor = null;
    this._backgroundColorDirty = false;

    this.manager = null;
}

Scene.prototype = Object.create(Graphics.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.setBackgroundColor = function(color){
    this.backgroundColor = color;
    return this;
};

Scene.prototype.setManager = function(manager){
    this.manager = manager;
    return this;
};

Scene.prototype.animate = function(gameTime, delta){
    if(this._backgroundColorDirty){
        this.clear();
        if(typeof this.backgroundColor === "number"){
            this.beginFill(this.backgroundColor)
                .drawRect(0,0,this.manager.game.width,this.manager.game.height)
                .endFill();
        }
        this._backgroundColorDirty = false;
    }

    return this;
};

Object.defineProperties(Scene.prototype, {
    backgroundColor : {
        get: function(){
            return this._backgroundColor;
        },
        set: function(color){
            this._backgroundColorDirty = true;
            this._backgroundColor = color;
        }
    }
});

module.exports = Scene;

},{"../../lib/pixi/src/core/graphics/Graphics":6}],70:[function(require,module,exports){
module.exports = {
    addTo: function(parent){
        if(parent)parent.addChild(this);
        return this;
    }
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJsaWIvcGl4aS9wYWNrYWdlLmpzb24iLCJsaWIvcGl4aS9zcmMvY29yZS9jb25zdC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL2Rpc3BsYXkvQ29udGFpbmVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZGlzcGxheS9EaXNwbGF5T2JqZWN0LmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3MvR3JhcGhpY3MuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy9HcmFwaGljc0RhdGEuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy93ZWJnbC9HcmFwaGljc1JlbmRlcmVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3Mvd2ViZ2wvV2ViR0xHcmFwaGljc0RhdGEuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9pbmRleC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvTWF0cml4LmpzIiwibGliL3BpeGkvc3JjL2NvcmUvbWF0aC9Qb2ludC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvaW5kZXguanMiLCJsaWIvcGl4aS9zcmMvY29yZS9tYXRoL3NoYXBlcy9DaXJjbGUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9tYXRoL3NoYXBlcy9FbGxpcHNlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvbWF0aC9zaGFwZXMvUG9seWdvbi5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvc2hhcGVzL1JlY3RhbmdsZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvc2hhcGVzL1JvdW5kZWRSZWN0YW5nbGUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvUGFydGljbGVDb250YWluZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVCdWZmZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3BhcnRpY2xlcy93ZWJnbC9QYXJ0aWNsZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9TeXN0ZW1SZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9jYW52YXMvQ2FudmFzUmVuZGVyZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzR3JhcGhpY3MuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc01hc2tNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNUaW50ZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL0Fic3RyYWN0RmlsdGVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL2ZpbHRlcnMvRlhBQUZpbHRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL1Nwcml0ZU1hc2tGaWx0ZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvQmxlbmRNb2RlTWFuYWdlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9tYW5hZ2Vycy9GaWx0ZXJNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL01hc2tNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL1NoYWRlck1hbmFnZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvU3RlbmNpbE1hbmFnZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvV2ViR0xNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL3NoYWRlcnMvQ29tcGxleFByaW1pdGl2ZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1ByaW1pdGl2ZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1NoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1RleHR1cmVTaGFkZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvUXVhZC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC91dGlscy9SZW5kZXJUYXJnZXQuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvU3RlbmNpbE1hc2tTdGFjay5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3Nwcml0ZXMvU3ByaXRlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvc3ByaXRlcy93ZWJnbC9TcHJpdGVSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3RleHR1cmVzL0Jhc2VUZXh0dXJlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdGV4dHVyZXMvUmVuZGVyVGV4dHVyZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3RleHR1cmVzL1RleHR1cmUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS90ZXh0dXJlcy9UZXh0dXJlVXZzLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdGV4dHVyZXMvVmlkZW9CYXNlVGV4dHVyZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL0V2ZW50RGF0YS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL1BvbHlLLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdXRpbHMvVGlja2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdXRpbHMvZXZlbnRUYXJnZXQuanMiLCJsaWIvcGl4aS9zcmMvY29yZS91dGlscy9pbmRleC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL3BsdWdpblRhcmdldC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL3JlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsInBhY2thZ2UuanNvbiIsInNyYy9jb3JlL0dhbWUuanMiLCJzcmMvY29yZS9TY2VuZU1hbmFnZXIuanMiLCJzcmMvY29yZS9jb25zdC5qcyIsInNyYy9jb3JlL2luZGV4LmpzIiwic3JjL2NvcmUvdXRpbHMvaW5kZXguanMiLCJzcmMvZGlzcGxheS9HcmFwaGljcy5qcyIsInNyYy9kaXNwbGF5L1NjZW5lLmpzIiwic3JjL2Rpc3BsYXkvbWl4aW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzltQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM2dCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25pQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM2FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuL2NvcmUvY29uc3QnKTtcblxuLy9UT0RPOiBBZGQgaGVyZSBhZGRvbnNcbmNvcmUuU2NlbmUgPSByZXF1aXJlKCcuL2Rpc3BsYXkvU2NlbmUnKTtcbmNvcmUuR3JhcGhpY3MgPSByZXF1aXJlKCcuL2Rpc3BsYXkvR3JhcGhpY3MnKTtcblxuLy9BZGQgQ29uc3RhbnRzIHRvIHRoZSBtYWluIG9iamVjdFxuZm9yKHZhciBrZXkgaW4gQ09OU1Qpe1xuICAgIGNvcmVba2V5XSA9IENPTlNUW2tleV07XG59XG5cbi8vVE9ETzogQWRkIGNsYXNzIHN5c3RlbVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmU7IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJwaXhpLmpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjMuMC4wLXJjMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGl4aS5qcyBpcyBhIGZhc3QgbGlnaHR3ZWlnaHQgMkQgbGlicmFyeSB0aGF0IHdvcmtzIGFjcm9zcyBhbGwgZGV2aWNlcy5cIixcbiAgXCJhdXRob3JcIjogXCJNYXQgR3JvdmVzXCIsXG4gIFwiY29udHJpYnV0b3JzXCI6IFtcbiAgICBcIkNoYWQgRW5nbGVyIDxjaGFkQHBhbnRoZXJkZXYuY29tPlwiLFxuICAgIFwiUmljaGFyZCBEYXZleSA8cmRhdmV5QGdtYWlsLmNvbT5cIlxuICBdLFxuICBcIm1haW5cIjogXCIuL3NyYy9pbmRleC5qc1wiLFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cDovL2dvb2Rib3lkaWdpdGFsLmNvbS9cIixcbiAgXCJidWdzXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0dvb2RCb3lEaWdpdGFsL3BpeGkuanMvaXNzdWVzXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0dvb2RCb3lEaWdpdGFsL3BpeGkuanMuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRlc3RcIjogXCJndWxwIHRlc3RcIixcbiAgICBcImRvY3NcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL2pzZG9jIC1jIC4vZ3VscC91dGlsL2pzZG9jLmNvbmYuanNvblwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyZnNcIjogXCJeMS4yLjBcIixcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeOC4wLjJcIixcbiAgICBcImNoYWlcIjogXCJeMS4xMC4wXCIsXG4gICAgXCJkZWxcIjogXCJeMS4xLjBcIixcbiAgICBcImV4b3JjaXN0XCI6IFwiXjAuMS42XCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOC4xMFwiLFxuICAgIFwiZ3VscC1jYWNoZWRcIjogXCJeMS4wLjFcIixcbiAgICBcImd1bHAtY29uY2F0XCI6IFwiXjIuNS4yXCIsXG4gICAgXCJndWxwLWRlYnVnXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJndWxwLWpzZG9jXCI6IFwiXjAuMS40XCIsXG4gICAgXCJndWxwLWpzaGludFwiOiBcIl4xLjkuMFwiLFxuICAgIFwiZ3VscC1wbHVtYmVyXCI6IFwiXjAuNi42XCIsXG4gICAgXCJndWxwLXJlbmFtZVwiOiBcIl4xLjIuMFwiLFxuICAgIFwiZ3VscC11Z2xpZnlcIjogXCJeMS4wLjJcIixcbiAgICBcImd1bHAtdXRpbFwiOiBcIl4zLjAuMVwiLFxuICAgIFwiaW5rLWRvY3N0cmFwXCI6IFwiXjAuNS4yXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjMuMC1hbHBoYTEzXCIsXG4gICAgXCJqc2hpbnQtc3VtbWFyeVwiOiBcIl4wLjQuMFwiLFxuICAgIFwia2FybWFcIjogXCJeMC4xMi4yOFwiLFxuICAgIFwia2FybWEtZmlyZWZveC1sYXVuY2hlclwiOiBcIl4wLjEuMFwiLFxuICAgIFwia2FybWEtbW9jaGFcIjogXCJeMC4xLjEwXCIsXG4gICAgXCJrYXJtYS1zcGVjLXJlcG9ydGVyXCI6IFwiXjAuMC4xNlwiLFxuICAgIFwibWluaW1pc3RcIjogXCJeMS4xLjBcIixcbiAgICBcIm1vY2hhXCI6IFwiXjIuMS4wXCIsXG4gICAgXCJyZXF1aXJlLWRpclwiOiBcIl4wLjEuMFwiLFxuICAgIFwicnVuLXNlcXVlbmNlXCI6IFwiXjEuMC4yXCIsXG4gICAgXCJ2aW55bC1idWZmZXJcIjogXCJeMS4wLjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4wLjBcIixcbiAgICBcIndhdGNoaWZ5XCI6IFwiXjIuMi4xXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYXN5bmNcIjogXCJeMC45LjBcIixcbiAgICBcInJlc291cmNlLWxvYWRlclwiOiBcIl4xLjIuMFwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJicmZzXCJcbiAgICBdXG4gIH1cbn1cbiIsIi8qKlxuICogQ29uc3RhbnQgdmFsdWVzIHVzZWQgaW4gcGl4aVxuICpcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIFN0cmluZyBvZiB0aGUgY3VycmVudCBQSVhJIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gVkVSU0lPTlxuICAgICAqL1xuICAgIFZFUlNJT046IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG5cbiAgICAvKipcbiAgICAgKiBDb25zdGFudCB0byBpZGVudGlmeSB0aGUgUmVuZGVyZXIgVHlwZS5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gUkVOREVSRVJfVFlQRVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBSRU5ERVJFUl9UWVBFLlVOS05PV05cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gUkVOREVSRVJfVFlQRS5XRUJHTFxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBSRU5ERVJFUl9UWVBFLkNBTlZBU1xuICAgICAqL1xuICAgIFJFTkRFUkVSX1RZUEU6IHtcbiAgICAgICAgVU5LTk9XTjogICAgMCxcbiAgICAgICAgV0VCR0w6ICAgICAgMSxcbiAgICAgICAgQ0FOVkFTOiAgICAgMlxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYXJpb3VzIGJsZW5kIG1vZGVzIHN1cHBvcnRlZCBieSBQSVhJLiBJTVBPUlRBTlQgLSBUaGUgV2ViR0wgcmVuZGVyZXIgb25seSBzdXBwb3J0c1xuICAgICAqIHRoZSBOT1JNQUwsIEFERCwgTVVMVElQTFkgYW5kIFNDUkVFTiBibGVuZCBtb2Rlcy4gQW55dGhpbmcgZWxzZSB3aWxsIHNpbGVudGx5IGFjdCBsaWtlXG4gICAgICogTk9STUFMLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBCTEVORF9NT0RFU1xuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5OT1JNQUxcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQUREXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLk1VTFRJUExZXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLlNDUkVFTlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5PVkVSTEFZXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkRBUktFTlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5MSUdIVEVOXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkNPTE9SX0RPREdFXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkNPTE9SX0JVUk5cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuSEFSRF9MSUdIVFxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5TT0ZUX0xJR0hUXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkRJRkZFUkVOQ0VcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuRVhDTFVTSU9OXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkhVRVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5TQVRVUkFUSU9OXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkNPTE9SXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkxVTUlOT1NJVFlcbiAgICAgKi9cbiAgICBCTEVORF9NT0RFUzoge1xuICAgICAgICBOT1JNQUw6ICAgICAgICAgMCxcbiAgICAgICAgQUREOiAgICAgICAgICAgIDEsXG4gICAgICAgIE1VTFRJUExZOiAgICAgICAyLFxuICAgICAgICBTQ1JFRU46ICAgICAgICAgMyxcbiAgICAgICAgT1ZFUkxBWTogICAgICAgIDQsXG4gICAgICAgIERBUktFTjogICAgICAgICA1LFxuICAgICAgICBMSUdIVEVOOiAgICAgICAgNixcbiAgICAgICAgQ09MT1JfRE9ER0U6ICAgIDcsXG4gICAgICAgIENPTE9SX0JVUk46ICAgICA4LFxuICAgICAgICBIQVJEX0xJR0hUOiAgICAgOSxcbiAgICAgICAgU09GVF9MSUdIVDogICAgIDEwLFxuICAgICAgICBESUZGRVJFTkNFOiAgICAgMTEsXG4gICAgICAgIEVYQ0xVU0lPTjogICAgICAxMixcbiAgICAgICAgSFVFOiAgICAgICAgICAgIDEzLFxuICAgICAgICBTQVRVUkFUSU9OOiAgICAgMTQsXG4gICAgICAgIENPTE9SOiAgICAgICAgICAxNSxcbiAgICAgICAgTFVNSU5PU0lUWTogICAgIDE2XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2FsZSBtb2RlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgYnkgcGl4aS5cbiAgICAgKlxuICAgICAqIFRoZSBERUZBVUxUIHNjYWxlIG1vZGUgYWZmZWN0cyB0aGUgZGVmYXVsdCBzY2FsaW5nIG1vZGUgb2YgZnV0dXJlIG9wZXJhdGlvbnMuXG4gICAgICogSXQgY2FuIGJlIHJlLWFzc2lnbmVkIHRvIGVpdGhlciBMSU5FQVIgb3IgTkVBUkVTVCwgZGVwZW5kaW5nIHVwb24gc3VpdGFiaWxpdHkuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNDQUxFX01PREVTXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFNDQUxFX01PREVTLkRFRkFVTFQ9TElORUFSXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFNDQUxFX01PREVTLkxJTkVBUiBTbW9vdGggc2NhbGluZ1xuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTQ0FMRV9NT0RFUy5ORUFSRVNUIFBpeGVsYXRpbmcgc2NhbGluZ1xuICAgICAqL1xuICAgIFNDQUxFX01PREVTOiB7XG4gICAgICAgIERFRkFVTFQ6ICAgIDAsXG4gICAgICAgIExJTkVBUjogICAgIDAsXG4gICAgICAgIE5FQVJFU1Q6ICAgIDFcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHByZWZpeCB0aGF0IGRlbm90ZXMgYSBVUkwgaXMgZm9yIGEgcmV0aW5hIGFzc2V0XG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IFJFVElOQV9QUkVGSVhcbiAgICAgKi9cbiAgICAvL2V4YW1wbGU6ICdAMngnLFxuICAgIFJFVElOQV9QUkVGSVg6IC9AKC4rKXgvLFxuXG4gICAgUkVTT0xVVElPTjoxLFxuXG4gICAgRklMVEVSX1JFU09MVVRJT046MSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHJlbmRlciBvcHRpb25zIGlmIG5vbmUgYXJlIHN1cHBsaWVkIHRvIHtAbGluayBQSVhJLldlYkdMUmVuZGVyZXJ9XG4gICAgICogb3Ige0BsaW5rIFBJWEkuQ2FudmFzUmVuZGVyZXJ9LlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBERUZBVUxUX1JFTkRFUl9PUFRJT05TXG4gICAgICogQHByb3BlcnR5IHtIVE1MQ2FudmFzRWxlbWVudH0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy52aWV3PW51bGxcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMudHJhbnNwYXJlbnQ9ZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMuYW50aWFsaWFzPWZhbHNlXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmZvcmNlRlhBQT1mYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXI9ZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5yZXNvbHV0aW9uPTFcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5iYWNrZ3JvdW5kQ29sb3I9MHgwMDAwMDBcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMuY2xlYXJCZWZvcmVSZW5kZXI9dHJ1ZVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5hdXRvUmVzaXplPWZhbHNlXG4gICAgICovXG4gICAgREVGQVVMVF9SRU5ERVJfT1BUSU9OUzoge1xuICAgICAgICB2aWV3OiBudWxsLFxuICAgICAgICByZXNvbHV0aW9uOiAxLFxuICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgICBmb3JjZUZYQUE6IGZhbHNlLFxuICAgICAgICBhdXRvUmVzaXplOiBmYWxzZSxcbiAgICAgICAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MDAwMDAwLFxuICAgICAgICBjbGVhckJlZm9yZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb25zdGFudHMgdGhhdCBpZGVudGlmeSBzaGFwZXMsIG1haW5seSB0byBwcmV2ZW50IGBpbnN0YW5jZW9mYCBjYWxscy5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0hBUEVTXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNIQVBFUy5QT0xZPTBcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0hBUEVTLlJFQ1Q9MVxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBTSEFQRVMuQ0lSQz0yXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNIQVBFUy5FTElQPTNcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0hBUEVTLlJSRUM9NFxuICAgICAqL1xuICAgIFNIQVBFUzoge1xuICAgICAgICBQT0xZOiAwLFxuICAgICAgICBSRUNUOiAxLFxuICAgICAgICBDSVJDOiAyLFxuICAgICAgICBFTElQOiAzLFxuICAgICAgICBSUkVDOiA0XG4gICAgfSxcblxuICAgIFNQUklURV9CQVRDSF9TSVpFOiAyMDAwIC8vbmljZSBiYWxhbmNlIGJldHdlZW4gbW9iaWxlIGFuZCBkZXNrdG9wIG1hY2hpbmVzXG59O1xuIiwidmFyIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgRGlzcGxheU9iamVjdCA9IHJlcXVpcmUoJy4vRGlzcGxheU9iamVjdCcpLFxuICAgIFJlbmRlclRleHR1cmUgPSByZXF1aXJlKCcuLi90ZXh0dXJlcy9SZW5kZXJUZXh0dXJlJyksXG4gICAgX3RlbXBNYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuLyoqXG4gKiBBIENvbnRhaW5lciByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiBkaXNwbGF5IG9iamVjdHMuXG4gKiBJdCBpcyB0aGUgYmFzZSBjbGFzcyBvZiBhbGwgZGlzcGxheSBvYmplY3RzIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGZvciBvdGhlciBvYmplY3RzLlxuICpcbiAqYGBganNcbiAqIHZhciBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAqIGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpO1xuICogYGBgXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIERpc3BsYXlPYmplY3RcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbmZ1bmN0aW9uIENvbnRhaW5lcigpXG57XG4gICAgRGlzcGxheU9iamVjdC5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFycmF5IG9mIGNoaWxkcmVuIG9mIHRoaXMgY29udGFpbmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7RGlzcGxheU9iamVjdFtdfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbn1cblxuLy8gY29uc3RydWN0b3JcbkNvbnRhaW5lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERpc3BsYXlPYmplY3QucHJvdG90eXBlKTtcbkNvbnRhaW5lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb250YWluZXI7XG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhaW5lcjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29udGFpbmVyLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgQ29udGFpbmVyLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDb250YWluZXIjXG4gICAgICovXG4gICAgd2lkdGg6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS54ICogdGhpcy5nZXRMb2NhbEJvdW5kcygpLndpZHRoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldExvY2FsQm91bmRzKCkud2lkdGg7XG5cbiAgICAgICAgICAgIGlmICh3aWR0aCAhPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlLnggPSB2YWx1ZSAvIHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IDE7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBDb250YWluZXIsIHNldHRpbmcgdGhpcyB3aWxsIGFjdHVhbGx5IG1vZGlmeSB0aGUgc2NhbGUgdG8gYWNoaWV2ZSB0aGUgdmFsdWUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENvbnRhaW5lciNcbiAgICAgKi9cbiAgICBoZWlnaHQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gIHRoaXMuc2NhbGUueSAqIHRoaXMuZ2V0TG9jYWxCb3VuZHMoKS5oZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldExvY2FsQm91bmRzKCkuaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ICE9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHZhbHVlIC8gaGVpZ2h0IDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIEFkZHMgYSBjaGlsZCB0byB0aGUgY29udGFpbmVyLlxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgdG8gYWRkIHRvIHRoZSBjb250YWluZXJcbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0aGF0IHdhcyBhZGRlZC5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZClcbntcbiAgICByZXR1cm4gdGhpcy5hZGRDaGlsZEF0KGNoaWxkLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjaGlsZCB0byB0aGUgY29udGFpbmVyIGF0IGEgc3BlY2lmaWVkIGluZGV4LiBJZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRvIGFkZFxuICogQHBhcmFtIGluZGV4IHtOdW1iZXJ9IFRoZSBpbmRleCB0byBwbGFjZSB0aGUgY2hpbGQgaW5cbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0aGF0IHdhcyBhZGRlZC5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5hZGRDaGlsZEF0ID0gZnVuY3Rpb24gKGNoaWxkLCBpbmRleClcbntcbiAgICAvLyBwcmV2ZW50IGFkZGluZyBzZWxmIGFzIGNoaWxkXG4gICAgaWYgKGNoaWxkID09PSB0aGlzKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2hpbGQgKyAnYWRkQ2hpbGRBdDogVGhlIGluZGV4ICcrIGluZGV4ICsnIHN1cHBsaWVkIGlzIG91dCBvZiBib3VuZHMgJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFN3YXBzIHRoZSBwb3NpdGlvbiBvZiAyIERpc3BsYXkgT2JqZWN0cyB3aXRoaW4gdGhpcyBjb250YWluZXIuXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fVxuICogQHBhcmFtIGNoaWxkMiB7RGlzcGxheU9iamVjdH1cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5zd2FwQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGQsIGNoaWxkMilcbntcbiAgICBpZiAoY2hpbGQgPT09IGNoaWxkMilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXgxID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkKTtcbiAgICB2YXIgaW5kZXgyID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkMik7XG5cbiAgICBpZiAoaW5kZXgxIDwgMCB8fCBpbmRleDIgPCAwKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzd2FwQ2hpbGRyZW46IEJvdGggdGhlIHN1cHBsaWVkIERpc3BsYXlPYmplY3RzIG11c3QgYmUgY2hpbGRyZW4gb2YgdGhlIGNhbGxlci4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkcmVuW2luZGV4MV0gPSBjaGlsZDI7XG4gICAgdGhpcy5jaGlsZHJlbltpbmRleDJdID0gY2hpbGQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IHBvc2l0aW9uIG9mIGEgY2hpbGQgRGlzcGxheU9iamVjdCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgaW5zdGFuY2UgdG8gaWRlbnRpZnlcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIGluZGV4IHBvc2l0aW9uIG9mIHRoZSBjaGlsZCBkaXNwbGF5IG9iamVjdCB0byBpZGVudGlmeVxuICovXG5Db250YWluZXIucHJvdG90eXBlLmdldENoaWxkSW5kZXggPSBmdW5jdGlvbiAoY2hpbGQpXG57XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdXBwbGllZCBEaXNwbGF5T2JqZWN0IG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgY2FsbGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBwb3NpdGlvbiBvZiBhbiBleGlzdGluZyBjaGlsZCBpbiB0aGUgZGlzcGxheSBvYmplY3QgY29udGFpbmVyXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgRGlzcGxheU9iamVjdCBpbnN0YW5jZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gY2hhbmdlIHRoZSBpbmRleCBudW1iZXJcbiAqIEBwYXJhbSBpbmRleCB7TnVtYmVyfSBUaGUgcmVzdWx0aW5nIGluZGV4IG51bWJlciBmb3IgdGhlIGNoaWxkIGRpc3BsYXkgb2JqZWN0XG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuc2V0Q2hpbGRJbmRleCA9IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpXG57XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmNoaWxkcmVuLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHN1cHBsaWVkIGluZGV4IGlzIG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7IC8vcmVtb3ZlIGZyb20gb2xkIHBvc2l0aW9uXG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTsgLy9hZGQgYXQgbmV3IHBvc2l0aW9uXG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoaWxkIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqXG4gKiBAcGFyYW0gaW5kZXgge051bWJlcn0gVGhlIGluZGV4IHRvIGdldCB0aGUgY2hpbGQgYXRcbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCBhdCB0aGUgZ2l2ZW4gaW5kZXgsIGlmIGFueS5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5nZXRDaGlsZEF0ID0gZnVuY3Rpb24gKGluZGV4KVxue1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldENoaWxkQXQ6IFN1cHBsaWVkIGluZGV4ICcgKyBpbmRleCArICcgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGNoaWxkIGxpc3QsIG9yIHRoZSBzdXBwbGllZCBEaXNwbGF5T2JqZWN0IGlzIG5vdCBhIGNoaWxkIG9mIHRoZSBjYWxsZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltpbmRleF07XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBjaGlsZCBmcm9tIHRoZSBjb250YWluZXIuXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCB0byByZW1vdmVcbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0aGF0IHdhcyByZW1vdmVkLlxuICovXG5Db250YWluZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKGNoaWxkKVxue1xuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbW92ZUNoaWxkQXQoaW5kZXgpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgY2hpbGQgZnJvbSB0aGUgc3BlY2lmaWVkIGluZGV4IHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSBpbmRleCB7TnVtYmVyfSBUaGUgaW5kZXggdG8gZ2V0IHRoZSBjaGlsZCBmcm9tXG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdGhhdCB3YXMgcmVtb3ZlZC5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZEF0ID0gZnVuY3Rpb24gKGluZGV4KVxue1xuICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGRBdChpbmRleCk7XG5cbiAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHJldHVybiBjaGlsZDtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSB0aGlzIGNvbnRhaW5lciB0aGF0IGFyZSB3aXRoaW4gdGhlIGJlZ2luIGFuZCBlbmQgaW5kZXhlcy5cbiAqXG4gKiBAcGFyYW0gYmVnaW5JbmRleCB7TnVtYmVyfSBUaGUgYmVnaW5uaW5nIHBvc2l0aW9uLiBEZWZhdWx0IHZhbHVlIGlzIDAuXG4gKiBAcGFyYW0gZW5kSW5kZXgge051bWJlcn0gVGhlIGVuZGluZyBwb3NpdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyBzaXplIG9mIHRoZSBjb250YWluZXIuXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoYmVnaW5JbmRleCwgZW5kSW5kZXgpXG57XG4gICAgdmFyIGJlZ2luID0gYmVnaW5JbmRleCB8fCAwO1xuICAgIHZhciBlbmQgPSB0eXBlb2YgZW5kSW5kZXggPT09ICdudW1iZXInID8gZW5kSW5kZXggOiB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgcmFuZ2UgPSBlbmQgLSBiZWdpbjtcblxuICAgIGlmIChyYW5nZSA+IDAgJiYgcmFuZ2UgPD0gZW5kKVxuICAgIHtcbiAgICAgICAgdmFyIHJlbW92ZWQgPSB0aGlzLmNoaWxkcmVuLnNwbGljZShiZWdpbiwgcmFuZ2UpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlZC5sZW5ndGg7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlZFtpXS5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbW92ZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJhbmdlID09PSAwICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigncmVtb3ZlQ2hpbGRyZW46IG51bWVyaWMgdmFsdWVzIGFyZSBvdXRzaWRlIHRoZSBhY2NlcHRhYmxlIHJhbmdlLicpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVXNlZnVsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHRleHR1cmUgb2YgdGhlIGRpc3BsYXkgb2JqZWN0IHRoYXQgY2FuIHRoZW4gYmUgdXNlZCB0byBjcmVhdGUgc3ByaXRlc1xuICogVGhpcyBjYW4gYmUgcXVpdGUgdXNlZnVsIGlmIHlvdXIgZGlzcGxheU9iamVjdCBpcyBzdGF0aWMgLyBjb21wbGljYXRlZCBhbmQgbmVlZHMgdG8gYmUgcmV1c2VkIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ8V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0gcmVzb2x1dGlvbiB7TnVtYmVyfSBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgdGV4dHVyZSBiZWluZyBnZW5lcmF0ZWRcbiAqIEBwYXJhbSBzY2FsZU1vZGUge051bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VGV4dHVyZX0gYSB0ZXh0dXJlIG9mIHRoZSBkaXNwbGF5IG9iamVjdFxuICovXG5Db250YWluZXIucHJvdG90eXBlLmdlbmVyYXRlVGV4dHVyZSA9IGZ1bmN0aW9uIChyZW5kZXJlciwgcmVzb2x1dGlvbiwgc2NhbGVNb2RlKVxue1xuICAgIHZhciBib3VuZHMgPSB0aGlzLmdldExvY2FsQm91bmRzKCk7XG5cbiAgICB2YXIgcmVuZGVyVGV4dHVyZSA9IG5ldyBSZW5kZXJUZXh0dXJlKHJlbmRlcmVyLCBib3VuZHMud2lkdGggfCAwLCBib3VuZHMuaGVpZ2h0IHwgMCwgcmVuZGVyZXIsIHNjYWxlTW9kZSwgcmVzb2x1dGlvbik7XG5cbiAgICBfdGVtcE1hdHJpeC50eCA9IC1ib3VuZHMueDtcbiAgICBfdGVtcE1hdHJpeC50eSA9IC1ib3VuZHMueTtcblxuICAgIHJlbmRlclRleHR1cmUucmVuZGVyKHRoaXMsIF90ZW1wTWF0cml4KTtcblxuICAgIHJldHVybiByZW5kZXJUZXh0dXJlO1xufTtcblxuLypcbiAqIFVwZGF0ZXMgdGhlIHRyYW5zZm9ybSBvbiBhbGwgY2hpbGRyZW4gb2YgdGhpcyBjb250YWluZXIgZm9yIHJlbmRlcmluZ1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUudXBkYXRlVHJhbnNmb3JtID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAoIXRoaXMudmlzaWJsZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0oKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAge1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIH1cbn07XG5cbi8vIHBlcmZvcm1hbmNlIGluY3JlYXNlIHRvIGF2b2lkIHVzaW5nIGNhbGwuLiAoMTB4IGZhc3RlcilcbkNvbnRhaW5lci5wcm90b3R5cGUuY29udGFpbmVyVXBkYXRlVHJhbnNmb3JtID0gQ29udGFpbmVyLnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm07XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBib3VuZHMgb2YgdGhlIENvbnRhaW5lciBhcyBhIHJlY3RhbmdsZS4gVGhlIGJvdW5kcyBjYWxjdWxhdGlvbiB0YWtlcyBhbGwgdmlzaWJsZSBjaGlsZHJlbiBpbnRvIGNvbnNpZGVyYXRpb24uXG4gKlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSBUaGUgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYXJlYVxuICovXG5Db250YWluZXIucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYoIXRoaXMuX2N1cnJlbnRCb3VuZHMpXG4gICAge1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGguUmVjdGFuZ2xlLkVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyB0aGUgYm91bmRzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGN1bGF0ZWQgdGhpcyByZW5kZXIgc2Vzc2lvbiBzbyByZXR1cm4gd2hhdCB3ZSBoYXZlXG5cbiAgICAgICAgdmFyIG1pblggPSBJbmZpbml0eTtcbiAgICAgICAgdmFyIG1pblkgPSBJbmZpbml0eTtcblxuICAgICAgICB2YXIgbWF4WCA9IC1JbmZpbml0eTtcbiAgICAgICAgdmFyIG1heFkgPSAtSW5maW5pdHk7XG5cbiAgICAgICAgdmFyIGNoaWxkQm91bmRzO1xuICAgICAgICB2YXIgY2hpbGRNYXhYO1xuICAgICAgICB2YXIgY2hpbGRNYXhZO1xuXG4gICAgICAgIHZhciBjaGlsZFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWNoaWxkLnZpc2libGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGNoaWxkQm91bmRzID0gdGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZHMoKTtcblxuICAgICAgICAgICAgbWluWCA9IG1pblggPCBjaGlsZEJvdW5kcy54ID8gbWluWCA6IGNoaWxkQm91bmRzLng7XG4gICAgICAgICAgICBtaW5ZID0gbWluWSA8IGNoaWxkQm91bmRzLnkgPyBtaW5ZIDogY2hpbGRCb3VuZHMueTtcblxuICAgICAgICAgICAgY2hpbGRNYXhYID0gY2hpbGRCb3VuZHMud2lkdGggKyBjaGlsZEJvdW5kcy54O1xuICAgICAgICAgICAgY2hpbGRNYXhZID0gY2hpbGRCb3VuZHMuaGVpZ2h0ICsgY2hpbGRCb3VuZHMueTtcblxuICAgICAgICAgICAgbWF4WCA9IG1heFggPiBjaGlsZE1heFggPyBtYXhYIDogY2hpbGRNYXhYO1xuICAgICAgICAgICAgbWF4WSA9IG1heFkgPiBjaGlsZE1heFkgPyBtYXhZIDogY2hpbGRNYXhZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGlsZFZpc2libGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRoLlJlY3RhbmdsZS5FTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3VuZHMgPSB0aGlzLl9ib3VuZHM7XG5cbiAgICAgICAgYm91bmRzLnggPSBtaW5YO1xuICAgICAgICBib3VuZHMueSA9IG1pblk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IGJvdW5kcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcztcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBub24tZ2xvYmFsIGxvY2FsIGJvdW5kcyBvZiB0aGUgQ29udGFpbmVyIGFzIGEgcmVjdGFuZ2xlLlxuICogVGhlIGNhbGN1bGF0aW9uIHRha2VzIGFsbCB2aXNpYmxlIGNoaWxkcmVuIGludG8gY29uc2lkZXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IFRoZSByZWN0YW5ndWxhciBib3VuZGluZyBhcmVhXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuZ2V0TG9jYWxCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBtYXRyaXhDYWNoZSA9IHRoaXMud29ybGRUcmFuc2Zvcm07XG5cbiAgICB0aGlzLndvcmxkVHJhbnNmb3JtID0gbWF0aC5NYXRyaXguSURFTlRJVFk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS51cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICB9XG5cbiAgICB0aGlzLndvcmxkVHJhbnNmb3JtID0gbWF0cml4Q2FjaGU7XG5cbiAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIFdlYkdMIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcblxuICAgIC8vIGlmIHRoZSBvYmplY3QgaXMgbm90IHZpc2libGUgb3IgdGhlIGFscGhhIGlzIDAgdGhlbiBubyBuZWVkIHRvIHJlbmRlciB0aGlzIGVsZW1lbnRcbiAgICBpZiAoIXRoaXMudmlzaWJsZSB8fCB0aGlzLndvcmxkQWxwaGEgPD0gMCB8fCAhdGhpcy5yZW5kZXJhYmxlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpLCBqO1xuXG4gICAgLy8gZG8gYSBxdWljayBjaGVjayB0byBzZWUgaWYgdGhpcyBlbGVtZW50IGhhcyBhIG1hc2sgb3IgYSBmaWx0ZXIuXG4gICAgaWYgKHRoaXMuX21hc2sgfHwgdGhpcy5fZmlsdGVycylcbiAgICB7XG4gICAgICAgIHJlbmRlcmVyLmN1cnJlbnRSZW5kZXJlci5mbHVzaCgpO1xuXG4gICAgICAgIC8vIHB1c2ggZmlsdGVyIGZpcnN0IGFzIHdlIG5lZWQgdG8gZW5zdXJlIHRoZSBzdGVuY2lsIGJ1ZmZlciBpcyBjb3JyZWN0IGZvciBhbnkgbWFza2luZ1xuICAgICAgICBpZiAodGhpcy5fZmlsdGVycylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIuZmlsdGVyTWFuYWdlci5wdXNoRmlsdGVyKHRoaXMsIHRoaXMuX2ZpbHRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX21hc2spXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLm1hc2tNYW5hZ2VyLnB1c2hNYXNrKHRoaXMsIHRoaXMuX21hc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyZXIuY3VycmVudFJlbmRlcmVyLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gYWRkIHRoaXMgb2JqZWN0IHRvIHRoZSBiYXRjaCwgb25seSByZW5kZXJlZCBpZiBpdCBoYXMgYSB0ZXh0dXJlLlxuICAgICAgICB0aGlzLl9yZW5kZXJXZWJHTChyZW5kZXJlcik7XG5cbiAgICAgICAgLy8gbm93IGxvb3AgdGhyb3VnaCB0aGUgY2hpbGRyZW4gYW5kIG1ha2Ugc3VyZSB0aGV5IGdldCByZW5kZXJlZFxuICAgICAgICBmb3IgKGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0ucmVuZGVyV2ViR0wocmVuZGVyZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyZXIuY3VycmVudFJlbmRlcmVyLmZsdXNoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX21hc2spXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLm1hc2tNYW5hZ2VyLnBvcE1hc2sodGhpcywgdGhpcy5fbWFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZmlsdGVycylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIuZmlsdGVyTWFuYWdlci5wb3BGaWx0ZXIoKTtcblxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcmVyLmN1cnJlbnRSZW5kZXJlci5zdGFydCgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLl9yZW5kZXJXZWJHTChyZW5kZXJlcik7XG5cbiAgICAgICAgLy8gc2ltcGxlIHJlbmRlciBjaGlsZHJlbiFcbiAgICAgICAgZm9yIChpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlbmRlcldlYkdMKHJlbmRlcmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogVG8gYmUgb3ZlcnJpZGRlbiBieSB0aGUgc3ViY2xhc3NcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuICogQHByaXZhdGVcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5fcmVuZGVyV2ViR0wgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgLy8gdGhpcyBpcyB3aGVyZSBjb250ZW50IGl0c2VsZiBnZXRzIHJlbmRlcmVkLi4uXG59O1xuXG4vKipcbiAqIFRvIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHN1YmNsYXNzXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcn0gVGhlIHJlbmRlcmVyXG4gKiBAcHJpdmF0ZVxuICovXG5Db250YWluZXIucHJvdG90eXBlLl9yZW5kZXJDYW52YXMgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgLy8gdGhpcyBpcyB3aGVyZSBjb250ZW50IGl0c2VsZiBnZXRzIHJlbmRlcmVkLi4uXG59O1xuXG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBDYW52YXMgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXJDYW52YXMgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgLy8gaWYgbm90IHZpc2libGUgb3IgdGhlIGFscGhhIGlzIDAgdGhlbiBubyBuZWVkIHRvIHJlbmRlciB0aGlzXG4gICAgaWYgKCF0aGlzLnZpc2libGUgfHwgdGhpcy5hbHBoYSA8PSAwIHx8ICF0aGlzLnJlbmRlcmFibGUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21hc2spXG4gICAge1xuICAgICAgICByZW5kZXJlci5tYXNrTWFuYWdlci5wdXNoTWFzayh0aGlzLl9tYXNrLCByZW5kZXJlcik7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyQ2FudmFzKHJlbmRlcmVyKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZW5kZXJDYW52YXMocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tYXNrKVxuICAgIHtcbiAgICAgICAgcmVuZGVyZXIubWFza01hbmFnZXIucG9wTWFzayhyZW5kZXJlcik7XG4gICAgfVxufTtcbiIsInZhciBtYXRoID0gcmVxdWlyZSgnLi4vbWF0aCcpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKSxcbiAgICBSZW5kZXJUZXh0dXJlID0gcmVxdWlyZSgnLi4vdGV4dHVyZXMvUmVuZGVyVGV4dHVyZScpLFxuICAgIF90ZW1wTWF0cml4ID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBvYmplY3RzIHRoYXQgYXJlIHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gKiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzIGFuZCBzaG91bGQgbm90IGJlIHVzZWQgb24gaXRzIG93biByYXRoZXIgaXQgc2hvdWxkIGJlIGV4dGVuZGVkLlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqL1xuZnVuY3Rpb24gRGlzcGxheU9iamVjdCgpXG57XG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGUgb2YgdGhlIG9iamVjdCByZWxhdGl2ZSB0byB0aGUgbG9jYWwgY29vcmRpbmF0ZXMgb2YgdGhlIHBhcmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgbWF0aC5Qb2ludCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlIGZhY3RvciBvZiB0aGUgb2JqZWN0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7UG9pbnR9XG4gICAgICovXG4gICAgdGhpcy5zY2FsZSA9IG5ldyBtYXRoLlBvaW50KDEsIDEpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBpdm90IHBvaW50IG9mIHRoZSBkaXNwbGF5T2JqZWN0IHRoYXQgaXQgcm90YXRlcyBhcm91bmRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqL1xuICAgIHRoaXMucGl2b3QgPSBuZXcgbWF0aC5Qb2ludCgwLCAwKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSByb3RhdGlvbiBvZiB0aGUgb2JqZWN0IGluIHJhZGlhbnMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3BhY2l0eSBvZiB0aGUgb2JqZWN0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuYWxwaGEgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZpc2liaWxpdHkgb2YgdGhlIG9iamVjdC4gSWYgZmFsc2UgdGhlIG9iamVjdCB3aWxsIG5vdCBiZSBkcmF3biwgYW5kXG4gICAgICogdGhlIHVwZGF0ZVRyYW5zZm9ybSBmdW5jdGlvbiB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBDYW4gdGhpcyBvYmplY3QgYmUgcmVuZGVyZWQsIGlmIGZhbHNlIHRoZSBvYmplY3Qgd2lsbCBub3QgYmUgZHJhd24gYnV0IHRoZSB1cGRhdGVUcmFuc2Zvcm1cbiAgICAgKiBtZXRob2RzIHdpbGwgc3RpbGwgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmFibGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3BsYXkgb2JqZWN0IGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoaXMgZGlzcGxheSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtDb250YWluZXJ9XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG11bHRpcGxpZWQgYWxwaGEgb2YgdGhlIGRpc3BsYXlPYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLndvcmxkQWxwaGEgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCB0cmFuc2Zvcm0gb2YgdGhlIG9iamVjdCBiYXNlZCBvbiB3b3JsZCAocGFyZW50KSBmYWN0b3JzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtNYXRyaXh9XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy53b3JsZFRyYW5zZm9ybSA9IG5ldyBtYXRoLk1hdHJpeCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFyZWEgdGhlIGZpbHRlciBpcyBhcHBsaWVkIHRvLiBUaGlzIGlzIHVzZWQgYXMgbW9yZSBvZiBhbiBvcHRpbWlzYXRpb25cbiAgICAgKiByYXRoZXIgdGhhbiBmaWd1cmluZyBvdXQgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRpc3BsYXlPYmplY3QgZWFjaCBmcmFtZSB5b3UgY2FuIHNldCB0aGlzIHJlY3RhbmdsZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyQXJlYSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBjYWNoZWQgc2luIHJvdGF0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBjYWNoZWQgY29zIHJvdGF0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jciA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwsIGNhY2hlZCBib3VuZHMgb2YgdGhlIG9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYm91bmRzID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIDEsIDEpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1vc3QgdXAtdG8tZGF0ZSBib3VuZHMgb2YgdGhlIG9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwsIGNhY2hlZCBtYXNrIG9mIHRoZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21hc2sgPSBudWxsO1xuXG4gICAgLy9UT0RPIHJlbmFtZSB0byBfaXNNYXNrXG4gICAvLyB0aGlzLmlzTWFzayA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGVkIGludGVybmFsIGZsYWcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY2FjaGVBc0JpdG1hcCA9IGZhbHNlO1xuICAgIHRoaXMuX2NhY2hlZE9iamVjdCA9IG51bGw7XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERpc3BsYXlPYmplY3Q7XG51dGlscy5ldmVudFRhcmdldC5taXhpbihEaXNwbGF5T2JqZWN0LnByb3RvdHlwZSk7XG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlPYmplY3Q7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKERpc3BsYXlPYmplY3QucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBkaXNwbGF5T2JqZWN0IG9uIHRoZSB4IGF4aXMgcmVsYXRpdmUgdG8gdGhlIGxvY2FsIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXJlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERpc3BsYXlPYmplY3QjXG4gICAgICovXG4gICAgeDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGRpc3BsYXlPYmplY3Qgb24gdGhlIHkgYXhpcyByZWxhdGl2ZSB0byB0aGUgbG9jYWwgY29vcmRpbmF0ZXMgb2YgdGhlIHBhcmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGlzcGxheU9iamVjdCNcbiAgICAgKi9cbiAgICB5OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGUgc3ByaXRlIGlzIGdsb2JhbGx5IHZpc2libGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBEaXNwbGF5T2JqZWN0I1xuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHdvcmxkVmlzaWJsZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcztcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS52aXNpYmxlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudDtcbiAgICAgICAgICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbWFzayBmb3IgdGhlIGRpc3BsYXlPYmplY3QuIEEgbWFzayBpcyBhbiBvYmplY3QgdGhhdCBsaW1pdHMgdGhlIHZpc2liaWxpdHkgb2YgYW4gb2JqZWN0IHRvIHRoZSBzaGFwZSBvZiB0aGUgbWFzayBhcHBsaWVkIHRvIGl0LlxuICAgICAqIEluIFBJWEkgYSByZWd1bGFyIG1hc2sgbXVzdCBiZSBhIFBJWEkuR3JhcGhpY3Mgb2JqZWN0LiBUaGlzIGFsbG93cyBmb3IgbXVjaCBmYXN0ZXIgbWFza2luZyBpbiBjYW52YXMgYXMgaXQgdXRpbGlzZXMgc2hhcGUgY2xpcHBpbmcuXG4gICAgICogVG8gcmVtb3ZlIGEgbWFzaywgc2V0IHRoaXMgcHJvcGVydHkgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0dyYXBoaWNzfVxuICAgICAqIEBtZW1iZXJvZiBEaXNwbGF5T2JqZWN0I1xuICAgICAqL1xuICAgIG1hc2s6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFzaztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXNrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hc2sucmVuZGVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21hc2sgPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX21hc2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFzay5yZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZmlsdGVycyBmb3IgdGhlIGRpc3BsYXlPYmplY3QuXG4gICAgICogKiBJTVBPUlRBTlQ6IFRoaXMgaXMgYSB3ZWJHTCBvbmx5IGZlYXR1cmUgYW5kIHdpbGwgYmUgaWdub3JlZCBieSB0aGUgY2FudmFzIHJlbmRlcmVyLlxuICAgICAqIFRvIHJlbW92ZSBmaWx0ZXJzIHNpbXBseSBzZXQgdGhpcyBwcm9wZXJ0eSB0byAnbnVsbCdcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0ZpbHRlcltdfVxuICAgICAqIEBtZW1iZXJvZiBEaXNwbGF5T2JqZWN0I1xuICAgICAqL1xuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVycyAmJiB0aGlzLl9maWx0ZXJzLnNsaWNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJzID0gdmFsdWUgJiYgdmFsdWUuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbi8qXG4gKiBVcGRhdGVzIHRoZSBvYmplY3QgdHJhbnNmb3JtIGZvciByZW5kZXJpbmdcbiAqXG4gKiBUT0RPIC0gT3B0aW1pemF0aW9uIHBhc3MhXG4gKlxuICogQHByaXZhdGVcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUudXBkYXRlVHJhbnNmb3JtID0gZnVuY3Rpb24gKClcbntcblxuICAgIC8vIGNyZWF0ZSBzb21lIG1hdHJpeCByZWZzIGZvciBlYXN5IGFjY2Vzc1xuICAgIHZhciBwdCA9IHRoaXMucGFyZW50LndvcmxkVHJhbnNmb3JtO1xuICAgIHZhciB3dCA9IHRoaXMud29ybGRUcmFuc2Zvcm07XG5cbiAgICAvLyB0ZW1wb3JhcnkgbWF0cml4IHZhcmlhYmxlc1xuICAgIHZhciBhLCBiLCBjLCBkLCB0eCwgdHk7XG5cbiAgICAvLyBzbyBpZiByb3RhdGlvbiBpcyBiZXR3ZWVuIDAgdGhlbiB3ZSBjYW4gc2ltcGxpZnkgdGhlIG11bHRpcGxpY2F0aW9uIHByb2Nlc3MuLi5cbiAgICBpZiAodGhpcy5yb3RhdGlvbiAlIG1hdGguUElfMilcbiAgICB7XG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgcm90YXRpb24gaXMgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHJlbmRlci4gVGhpcyBtZWFucyB3ZSBvbmx5IG5lZWQgdG8gdXNlIHNpbiBhbmQgY29zIHdoZW4gcm90YXRpb24gYWN0dWFsbHkgY2hhbmdlc1xuICAgICAgICBpZiAodGhpcy5yb3RhdGlvbiAhPT0gdGhpcy5yb3RhdGlvbkNhY2hlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uQ2FjaGUgPSB0aGlzLnJvdGF0aW9uO1xuICAgICAgICAgICAgdGhpcy5fc3IgPSBNYXRoLnNpbih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX2NyID0gTWF0aC5jb3ModGhpcy5yb3RhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIG1hdHJpeCB2YWx1ZXMgb2YgdGhlIGRpc3BsYXlvYmplY3QgYmFzZWQgb24gaXRzIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLi5cbiAgICAgICAgYSAgPSAgdGhpcy5fY3IgKiB0aGlzLnNjYWxlLng7XG4gICAgICAgIGIgID0gIHRoaXMuX3NyICogdGhpcy5zY2FsZS54O1xuICAgICAgICBjICA9IC10aGlzLl9zciAqIHRoaXMuc2NhbGUueTtcbiAgICAgICAgZCAgPSAgdGhpcy5fY3IgKiB0aGlzLnNjYWxlLnk7XG4gICAgICAgIHR4ID0gIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgdHkgPSAgdGhpcy5wb3NpdGlvbi55O1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBwaXZvdC4uIG5vdCBvZnRlbiB1c2VkIHNvIGdlYXJlZCB0b3dhcmRzIHRoYXQgZmFjdCFcbiAgICAgICAgaWYgKHRoaXMucGl2b3QueCB8fCB0aGlzLnBpdm90LnkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR4IC09IHRoaXMucGl2b3QueCAqIGEgKyB0aGlzLnBpdm90LnkgKiBjO1xuICAgICAgICAgICAgdHkgLT0gdGhpcy5waXZvdC54ICogYiArIHRoaXMucGl2b3QueSAqIGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25jYXQgdGhlIHBhcmVudCBtYXRyaXggd2l0aCB0aGUgb2JqZWN0cyB0cmFuc2Zvcm0uXG4gICAgICAgIHd0LmEgID0gYSAgKiBwdC5hICsgYiAgKiBwdC5jO1xuICAgICAgICB3dC5iICA9IGEgICogcHQuYiArIGIgICogcHQuZDtcbiAgICAgICAgd3QuYyAgPSBjICAqIHB0LmEgKyBkICAqIHB0LmM7XG4gICAgICAgIHd0LmQgID0gYyAgKiBwdC5iICsgZCAgKiBwdC5kO1xuICAgICAgICB3dC50eCA9IHR4ICogcHQuYSArIHR5ICogcHQuYyArIHB0LnR4O1xuICAgICAgICB3dC50eSA9IHR4ICogcHQuYiArIHR5ICogcHQuZCArIHB0LnR5O1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyBsZXRzIGRvIHRoZSBmYXN0IHZlcnNpb24gYXMgd2Uga25vdyB0aGVyZSBpcyBubyByb3RhdGlvbi4uXG4gICAgICAgIGEgID0gdGhpcy5zY2FsZS54O1xuICAgICAgICBkICA9IHRoaXMuc2NhbGUueTtcblxuICAgICAgICB0eCA9IHRoaXMucG9zaXRpb24ueCAtIHRoaXMucGl2b3QueCAqIGE7XG4gICAgICAgIHR5ID0gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5waXZvdC55ICogZDtcblxuICAgICAgICB3dC5hICA9IGEgICogcHQuYTtcbiAgICAgICAgd3QuYiAgPSBhICAqIHB0LmI7XG4gICAgICAgIHd0LmMgID0gZCAgKiBwdC5jO1xuICAgICAgICB3dC5kICA9IGQgICogcHQuZDtcbiAgICAgICAgd3QudHggPSB0eCAqIHB0LmEgKyB0eSAqIHB0LmMgKyBwdC50eDtcbiAgICAgICAgd3QudHkgPSB0eCAqIHB0LmIgKyB0eSAqIHB0LmQgKyBwdC50eTtcbiAgICB9XG5cbiAgICAvLyBtdWx0aXBseSB0aGUgYWxwaGFzLi5cbiAgICB0aGlzLndvcmxkQWxwaGEgPSB0aGlzLmFscGhhICogdGhpcy5wYXJlbnQud29ybGRBbHBoYTtcblxuICAgIC8vIHJlc2V0IHRoZSBib3VuZHMgZWFjaCB0aW1lIHRoaXMgaXMgY2FsbGVkIVxuICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xufTtcblxuLy8gcGVyZm9ybWFuY2UgaW5jcmVhc2UgdG8gYXZvaWQgdXNpbmcgY2FsbC4uICgxMHggZmFzdGVyKVxuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSA9IERpc3BsYXlPYmplY3QucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybTtcblxuLyoqXG4gKlxuICpcbiAqIFJldHJpZXZlcyB0aGUgYm91bmRzIG9mIHRoZSBkaXNwbGF5T2JqZWN0IGFzIGEgcmVjdGFuZ2xlIG9iamVjdFxuICpcbiAqIEBwYXJhbSBtYXRyaXgge01hdHJpeH1cbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGFyZWFcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKG1hdHJpeClcbntcbiAgICByZXR1cm4gbWF0aC5SZWN0YW5nbGUuRU1QVFk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgbG9jYWwgYm91bmRzIG9mIHRoZSBkaXNwbGF5T2JqZWN0IGFzIGEgcmVjdGFuZ2xlIG9iamVjdFxuICpcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGFyZWFcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuZ2V0TG9jYWxCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiB0aGlzLmdldEJvdW5kcyhtYXRoLk1hdHJpeC5JREVOVElUWSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGdsb2JhbCBwb3NpdGlvbiBvZiB0aGUgZGlzcGxheSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gcG9zaXRpb24ge1BvaW50fSBUaGUgd29ybGQgb3JpZ2luIHRvIGNhbGN1bGF0ZSBmcm9tXG4gKiBAcmV0dXJuIHtQb2ludH0gQSBwb2ludCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGlzIG9iamVjdFxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS50b0dsb2JhbCA9IGZ1bmN0aW9uIChwb3NpdGlvbilcbntcbiAgICAvLyBkb24ndCBuZWVkIHRvIHVwZGF0ZSB0aGUgbG90XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgcmV0dXJuIHRoaXMud29ybGRUcmFuc2Zvcm0uYXBwbHkocG9zaXRpb24pO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsb2NhbCBwb3NpdGlvbiBvZiB0aGUgZGlzcGxheSBvYmplY3QgcmVsYXRpdmUgdG8gYW5vdGhlciBwb2ludFxuICpcbiAqIEBwYXJhbSBwb3NpdGlvbiB7UG9pbnR9IFRoZSB3b3JsZCBvcmlnaW4gdG8gY2FsY3VsYXRlIGZyb21cbiAqIEBwYXJhbSBbZnJvbV0ge0Rpc3BsYXlPYmplY3R9IFRoZSBEaXNwbGF5T2JqZWN0IHRvIGNhbGN1bGF0ZSB0aGUgZ2xvYmFsIHBvc2l0aW9uIGZyb21cbiAqIEByZXR1cm4ge1BvaW50fSBBIHBvaW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uIG9mIHRoaXMgb2JqZWN0XG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLnRvTG9jYWwgPSBmdW5jdGlvbiAocG9zaXRpb24sIGZyb20pXG57XG4gICAgaWYgKGZyb20pXG4gICAge1xuICAgICAgICBwb3NpdGlvbiA9IGZyb20udG9HbG9iYWwocG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGRvbid0IG5lZWQgdG8gdXBkYXRlIHRoZSBsb3RcbiAgICB0aGlzLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0oKTtcbiAgICByZXR1cm4gdGhpcy53b3JsZFRyYW5zZm9ybS5hcHBseUludmVyc2UocG9zaXRpb24pO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIFdlYkdMIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiAqIEBwcml2YXRlXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLnJlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIC8vIE9WRVJXUklURTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBDYW52YXMgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiAqIEBwcml2YXRlXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLnJlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICAvLyBPVkVSV1JJVEU7XG59O1xuLyoqXG4gKiBVc2VmdWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdGV4dHVyZSBvZiB0aGUgZGlzcGxheSBvYmplY3QgdGhhdCBjYW4gdGhlbiBiZSB1c2VkIHRvIGNyZWF0ZSBzcHJpdGVzXG4gKiBUaGlzIGNhbiBiZSBxdWl0ZSB1c2VmdWwgaWYgeW91ciBkaXNwbGF5T2JqZWN0IGlzIHN0YXRpYyAvIGNvbXBsaWNhdGVkIGFuZCBuZWVkcyB0byBiZSByZXVzZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcnxXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdXNlZCB0byBnZW5lcmF0ZSB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSByZXNvbHV0aW9uIHtOdW1iZXJ9IFRoZSByZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlIGJlaW5nIGdlbmVyYXRlZFxuICogQHBhcmFtIHNjYWxlTW9kZSB7TnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBhIHRleHR1cmUgb2YgdGhlIGRpc3BsYXkgb2JqZWN0XG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmdlbmVyYXRlVGV4dHVyZSA9IGZ1bmN0aW9uIChyZW5kZXJlciwgcmVzb2x1dGlvbiwgc2NhbGVNb2RlKVxue1xuICAgIHZhciBib3VuZHMgPSB0aGlzLmdldExvY2FsQm91bmRzKCk7XG5cbiAgICB2YXIgcmVuZGVyVGV4dHVyZSA9IG5ldyBSZW5kZXJUZXh0dXJlKHJlbmRlcmVyLCBib3VuZHMud2lkdGggfCAwLCBib3VuZHMuaGVpZ2h0IHwgMCwgcmVuZGVyZXIsIHNjYWxlTW9kZSwgcmVzb2x1dGlvbik7XG5cbiAgICBfdGVtcE1hdHJpeC50eCA9IC1ib3VuZHMueDtcbiAgICBfdGVtcE1hdHJpeC50eSA9IC1ib3VuZHMueTtcblxuICAgIHJlbmRlclRleHR1cmUucmVuZGVyKHRoaXMsIF90ZW1wTWF0cml4KTtcblxuICAgIHJldHVybiByZW5kZXJUZXh0dXJlO1xufTtcbiIsInZhciBDb250YWluZXIgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0NvbnRhaW5lcicpLFxuICAgIFNwcml0ZSA9IHJlcXVpcmUoJy4uL3Nwcml0ZXMvU3ByaXRlJyksXG4gICAgVGV4dHVyZSA9IHJlcXVpcmUoJy4uL3RleHR1cmVzL1RleHR1cmUnKSxcbiAgICBDYW52YXNCdWZmZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlcicpLFxuICAgIENhbnZhc0dyYXBoaWNzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNHcmFwaGljcycpLFxuICAgIEdyYXBoaWNzRGF0YSA9IHJlcXVpcmUoJy4vR3JhcGhpY3NEYXRhJyksXG4gICAgbWF0aCA9IHJlcXVpcmUoJy4uL21hdGgnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0JyksXG4gICAgdGVtcFBvaW50ID0gbmV3IG1hdGguUG9pbnQoKTtcblxuLyoqXG4gKiBUaGUgR3JhcGhpY3MgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB1c2VkIHRvIGRyYXcgcHJpbWl0aXZlIHNoYXBlcyBzdWNoIGFzIGxpbmVzLCBjaXJjbGVzIGFuZFxuICogcmVjdGFuZ2xlcyB0byB0aGUgZGlzcGxheSwgYW5kIHRvIGNvbG9yIGFuZCBmaWxsIHRoZW0uXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBDb250YWluZXJcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbmZ1bmN0aW9uIEdyYXBoaWNzKClcbntcbiAgICBDb250YWluZXIuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbHBoYSB2YWx1ZSB1c2VkIHdoZW4gZmlsbGluZyB0aGUgR3JhcGhpY3Mgb2JqZWN0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICB0aGlzLmZpbGxBbHBoYSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggKHRoaWNrbmVzcykgb2YgYW55IGxpbmVzIGRyYXduLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmxpbmVXaWR0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igb2YgYW55IGxpbmVzIGRyYXduLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmxpbmVDb2xvciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBHcmFwaGljcyBkYXRhXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtHcmFwaGljc0RhdGFbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZ3JhcGhpY3NEYXRhID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGludCBhcHBsaWVkIHRvIHRoZSBncmFwaGljIHNoYXBlLiBUaGlzIGlzIGEgaGV4IHZhbHVlLiBBcHBseSBhIHZhbHVlIG9mIDB4RkZGRkZGIHRvIHJlc2V0IHRoZSB0aW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDB4RkZGRkZGXG4gICAgICovXG4gICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJldmlvdXMgdGludCBhcHBsaWVkIHRvIHRoZSBncmFwaGljIHNoYXBlLiBVc2VkIHRvIGNvbXBhcmUgdG8gdGhlIGN1cnJlbnQgdGludCBhbmQgY2hlY2sgaWYgdGhlcmVzIGNoYW5nZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBkZWZhdWx0IDB4RkZGRkZGXG4gICAgICovXG4gICAgdGhpcy5fcHJldlRpbnQgPSAweEZGRkZGRjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBibGVuZCBtb2RlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGdyYXBoaWMgc2hhcGUuIEFwcGx5IGEgdmFsdWUgb2YgYmxlbmRNb2Rlcy5OT1JNQUwgdG8gcmVzZXQgdGhlIGJsZW5kIG1vZGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMO1xuICAgICAqL1xuICAgIHRoaXMuYmxlbmRNb2RlID0gQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBwYXRoXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtHcmFwaGljc0RhdGF9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFycmF5IGNvbnRhaW5pbmcgc29tZSBXZWJHTC1yZWxhdGVkIHByb3BlcnRpZXMgdXNlZCBieSB0aGUgV2ViR0wgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtvYmplY3Q8bnVtYmVyLCBvYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgLy8gVE9ETyAtIF93ZWJnbCBzaG91bGQgdXNlIGEgcHJvdG90eXBlIG9iamVjdCwgbm90IGEgcmFuZG9tIHVuZG9jdW1lbnRlZCBvYmplY3QuLi5cbiAgICB0aGlzLl93ZWJHTCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIHNoYXBlIGlzIGJlaW5nIHVzZWQgYXMgYSBtYXNrLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzTWFzayA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvdW5kcycgcGFkZGluZyB1c2VkIGZvciBib3VuZHMgY2FsY3VsYXRpb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5ib3VuZHNQYWRkaW5nID0gMDtcblxuICAgIC8qKlxuICAgICAqIEEgY2FjaGUgb2YgdGhlIGxvY2FsIGJvdW5kcyB0byBwcmV2ZW50IHJlY2FsY3VsYXRpb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbEJvdW5kcyA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLDAsMSwxKTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGV0ZWN0IGlmIHRoZSBncmFwaGljcyBvYmplY3QgaGFzIGNoYW5nZWQuIElmIHRoaXMgaXMgc2V0IHRvIHRydWUgdGhlbiB0aGUgZ3JhcGhpY3NcbiAgICAgKiBvYmplY3Qgd2lsbCBiZSByZWNhbGN1bGF0ZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGRldGVjdCBpZiB0aGUgV2ViR0wgZ3JhcGhpY3Mgb2JqZWN0IGhhcyBjaGFuZ2VkLiBJZiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZW4gdGhlXG4gICAgICogZ3JhcGhpY3Mgb2JqZWN0IHdpbGwgYmUgcmVjYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZ2xEaXJ0eSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBkZXRlY3QgaWYgdGhlIGNhY2hlZCBzcHJpdGUgb2JqZWN0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eSA9IGZhbHNlO1xufVxuXG4vLyBjb25zdHJ1Y3RvclxuR3JhcGhpY3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb250YWluZXIucHJvdG90eXBlKTtcbkdyYXBoaWNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdyYXBoaWNzO1xubW9kdWxlLmV4cG9ydHMgPSBHcmFwaGljcztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoR3JhcGhpY3MucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogV2hlbiBjYWNoZUFzQml0bWFwIGlzIHNldCB0byB0cnVlIHRoZSBncmFwaGljcyBvYmplY3Qgd2lsbCBiZSByZW5kZXJlZCBhcyBpZiBpdCB3YXMgYSBzcHJpdGUuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91ciBncmFwaGljcyBlbGVtZW50IGRvZXMgbm90IGNoYW5nZSBvZnRlbiwgYXMgaXQgd2lsbCBzcGVlZCB1cCB0aGUgcmVuZGVyaW5nXG4gICAgICogb2YgdGhlIG9iamVjdCBpbiBleGNoYW5nZSBmb3IgdGFraW5nIHVwIHRleHR1cmUgbWVtb3J5LiBJdCBpcyBhbHNvIHVzZWZ1bCBpZiB5b3UgbmVlZCB0aGUgZ3JhcGhpY3NcbiAgICAgKiBvYmplY3QgdG8gYmUgYW50aS1hbGlhc2VkLCBiZWNhdXNlIGl0IHdpbGwgYmUgcmVuZGVyZWQgdXNpbmcgY2FudmFzLiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZCBpZlxuICAgICAqIHlvdSBhcmUgY29uc3RhbnRseSByZWRyYXdpbmcgdGhlIGdyYXBoaWNzIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBHcmFwaGljcyNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgR3JhcGhpY3Mgb2JqZWN0IHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIHRoaXMgb25lLlxuICpcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBjbG9uZSA9IG5ldyBHcmFwaGljcygpO1xuXG4gICAgY2xvbmUucmVuZGVyYWJsZSAgICA9IHRoaXMucmVuZGVyYWJsZTtcbiAgICBjbG9uZS5maWxsQWxwaGEgICAgID0gdGhpcy5maWxsQWxwaGE7XG4gICAgY2xvbmUubGluZVdpZHRoICAgICA9IHRoaXMubGluZVdpZHRoO1xuICAgIGNsb25lLmxpbmVDb2xvciAgICAgPSB0aGlzLmxpbmVDb2xvcjtcbiAgICBjbG9uZS50aW50ICAgICAgICAgID0gdGhpcy50aW50O1xuICAgIGNsb25lLmJsZW5kTW9kZSAgICAgPSB0aGlzLmJsZW5kTW9kZTtcbiAgICBjbG9uZS5pc01hc2sgICAgICAgID0gdGhpcy5pc01hc2s7XG4gICAgY2xvbmUuYm91bmRzUGFkZGluZyA9IHRoaXMuYm91bmRzUGFkZGluZztcbiAgICBjbG9uZS5kaXJ0eSAgICAgICAgID0gdGhpcy5kaXJ0eTtcbiAgICBjbG9uZS5nbERpcnR5ICAgICAgID0gdGhpcy5nbERpcnR5O1xuICAgIGNsb25lLmNhY2hlZFNwcml0ZURpcnR5ID0gdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eTtcblxuICAgIC8vIGNvcHkgZ3JhcGhpY3MgZGF0YVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ncmFwaGljc0RhdGEubGVuZ3RoOyArK2kpXG4gICAge1xuICAgICAgICBjbG9uZS5ncmFwaGljc0RhdGEucHVzaCh0aGlzLmdyYXBoaWNzRGF0YS5jbG9uZSgpKTtcbiAgICB9XG5cbiAgICBjbG9uZS5jdXJyZW50UGF0aCA9IGNsb25lLmdyYXBoaWNzRGF0YVtjbG9uZS5ncmFwaGljc0RhdGEubGVuZ3RoIC0gMV07XG5cbiAgICBjbG9uZS51cGRhdGVMb2NhbEJvdW5kcygpO1xuXG4gICAgcmV0dXJuIGNsb25lO1xufTtcblxuLyoqXG4gKiBTcGVjaWZpZXMgdGhlIGxpbmUgc3R5bGUgdXNlZCBmb3Igc3Vic2VxdWVudCBjYWxscyB0byBHcmFwaGljcyBtZXRob2RzIHN1Y2ggYXMgdGhlIGxpbmVUbygpIG1ldGhvZCBvciB0aGUgZHJhd0NpcmNsZSgpIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gbGluZVdpZHRoIHtudW1iZXJ9IHdpZHRoIG9mIHRoZSBsaW5lIHRvIGRyYXcsIHdpbGwgdXBkYXRlIHRoZSBvYmplY3RzIHN0b3JlZCBzdHlsZVxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IGNvbG9yIG9mIHRoZSBsaW5lIHRvIGRyYXcsIHdpbGwgdXBkYXRlIHRoZSBvYmplY3RzIHN0b3JlZCBzdHlsZVxuICogQHBhcmFtIGFscGhhIHtudW1iZXJ9IGFscGhhIG9mIHRoZSBsaW5lIHRvIGRyYXcsIHdpbGwgdXBkYXRlIHRoZSBvYmplY3RzIHN0b3JlZCBzdHlsZVxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5saW5lU3R5bGUgPSBmdW5jdGlvbiAobGluZVdpZHRoLCBjb2xvciwgYWxwaGEpXG57XG4gICAgdGhpcy5saW5lV2lkdGggPSBsaW5lV2lkdGggfHwgMDtcbiAgICB0aGlzLmxpbmVDb2xvciA9IGNvbG9yIHx8IDA7XG4gICAgdGhpcy5saW5lQWxwaGEgPSAoYXJndW1lbnRzLmxlbmd0aCA8IDMpID8gMSA6IGFscGhhO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMubGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBoYWxmd2F5IHRocm91Z2ggYSBsaW5lPyBzdGFydCBhIG5ldyBvbmUhXG4gICAgICAgICAgICB0aGlzLmRyYXdTaGFwZSggbmV3IG1hdGguUG9seWdvbiggdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMuc2xpY2UoLTIpICkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGl0cyBlbXB0eSBzbyBsZXRzIGp1c3Qgc2V0IHRoZSBsaW5lIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmxpbmVDb2xvciA9IHRoaXMubGluZUNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5saW5lQWxwaGEgPSB0aGlzLmxpbmVBbHBoYTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBNb3ZlcyB0aGUgY3VycmVudCBkcmF3aW5nIHBvc2l0aW9uIHRvIHgsIHkuXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gdGhlIFggY29vcmRpbmF0ZSB0byBtb3ZlIHRvXG4gKiBAcGFyYW0geSB7bnVtYmVyfSB0aGUgWSBjb29yZGluYXRlIHRvIG1vdmUgdG9cbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICAqL1xuR3JhcGhpY3MucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIHRoaXMuZHJhd1NoYXBlKG5ldyBtYXRoLlBvbHlnb24oW3gseV0pKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEcmF3cyBhIGxpbmUgdXNpbmcgdGhlIGN1cnJlbnQgbGluZSBzdHlsZSBmcm9tIHRoZSBjdXJyZW50IGRyYXdpbmcgcG9zaXRpb24gdG8gKHgsIHkpO1xuICogVGhlIGN1cnJlbnQgZHJhd2luZyBwb3NpdGlvbiBpcyB0aGVuIHNldCB0byAoeCwgeSkuXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gdGhlIFggY29vcmRpbmF0ZSB0byBkcmF3IHRvXG4gKiBAcGFyYW0geSB7bnVtYmVyfSB0aGUgWSBjb29yZGluYXRlIHRvIGRyYXcgdG9cbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUubGluZVRvID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMucHVzaCh4LCB5KTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHBvaW50cyBmb3IgYSBxdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGFuZCB0aGVuIGRyYXdzIGl0LlxuICogQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc4NTA5Ny9ob3ctZG8taS1pbXBsZW1lbnQtYS1iZXppZXItY3VydmUtaW4tY1xuICpcbiAqIEBwYXJhbSBjcFgge251bWJlcn0gQ29udHJvbCBwb2ludCB4XG4gKiBAcGFyYW0gY3BZIHtudW1iZXJ9IENvbnRyb2wgcG9pbnQgeVxuICogQHBhcmFtIHRvWCB7bnVtYmVyfSBEZXN0aW5hdGlvbiBwb2ludCB4XG4gKiBAcGFyYW0gdG9ZIHtudW1iZXJ9IERlc3RpbmF0aW9uIHBvaW50IHlcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUucXVhZHJhdGljQ3VydmVUbyA9IGZ1bmN0aW9uIChjcFgsIGNwWSwgdG9YLCB0b1kpXG57XG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cyA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVUbygwLDApO1xuICAgIH1cblxuICAgIHZhciB4YSxcbiAgICAgICAgeWEsXG4gICAgICAgIG4gPSAyMCxcbiAgICAgICAgcG9pbnRzID0gdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHM7XG5cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZVRvKDAsIDApO1xuICAgIH1cblxuICAgIHZhciBmcm9tWCA9IHBvaW50c1twb2ludHMubGVuZ3RoLTJdO1xuICAgIHZhciBmcm9tWSA9IHBvaW50c1twb2ludHMubGVuZ3RoLTFdO1xuXG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IG47ICsraSlcbiAgICB7XG4gICAgICAgIGogPSBpIC8gbjtcblxuICAgICAgICB4YSA9IGZyb21YICsgKCAoY3BYIC0gZnJvbVgpICogaiApO1xuICAgICAgICB5YSA9IGZyb21ZICsgKCAoY3BZIC0gZnJvbVkpICogaiApO1xuXG4gICAgICAgIHBvaW50cy5wdXNoKCB4YSArICggKChjcFggKyAoICh0b1ggLSBjcFgpICogaiApKSAtIHhhKSAqIGogKSxcbiAgICAgICAgICAgICAgICAgICAgIHlhICsgKCAoKGNwWSArICggKHRvWSAtIGNwWSkgKiBqICkpIC0geWEpICogaiApICk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBwb2ludHMgZm9yIGEgYmV6aWVyIGN1cnZlIGFuZCB0aGVuIGRyYXdzIGl0LlxuICpcbiAqIEBwYXJhbSBjcFgge251bWJlcn0gQ29udHJvbCBwb2ludCB4XG4gKiBAcGFyYW0gY3BZIHtudW1iZXJ9IENvbnRyb2wgcG9pbnQgeVxuICogQHBhcmFtIGNwWDIge251bWJlcn0gU2Vjb25kIENvbnRyb2wgcG9pbnQgeFxuICogQHBhcmFtIGNwWTIge251bWJlcn0gU2Vjb25kIENvbnRyb2wgcG9pbnQgeVxuICogQHBhcmFtIHRvWCB7bnVtYmVyfSBEZXN0aW5hdGlvbiBwb2ludCB4XG4gKiBAcGFyYW0gdG9ZIHtudW1iZXJ9IERlc3RpbmF0aW9uIHBvaW50IHlcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuYmV6aWVyQ3VydmVUbyA9IGZ1bmN0aW9uIChjcFgsIGNwWSwgY3BYMiwgY3BZMiwgdG9YLCB0b1kpXG57XG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cyA9IFswLCAwXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVUbygwLDApO1xuICAgIH1cblxuICAgIHZhciBuID0gMjAsXG4gICAgICAgIGR0LFxuICAgICAgICBkdDIsXG4gICAgICAgIGR0MyxcbiAgICAgICAgdDIsXG4gICAgICAgIHQzLFxuICAgICAgICBwb2ludHMgPSB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cztcblxuICAgIHZhciBmcm9tWCA9IHBvaW50c1twb2ludHMubGVuZ3RoLTJdO1xuICAgIHZhciBmcm9tWSA9IHBvaW50c1twb2ludHMubGVuZ3RoLTFdO1xuXG4gICAgdmFyIGogPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbjsgKytpKVxuICAgIHtcbiAgICAgICAgaiA9IGkgLyBuO1xuXG4gICAgICAgIGR0ID0gKDEgLSBqKTtcbiAgICAgICAgZHQyID0gZHQgKiBkdDtcbiAgICAgICAgZHQzID0gZHQyICogZHQ7XG5cbiAgICAgICAgdDIgPSBqICogajtcbiAgICAgICAgdDMgPSB0MiAqIGo7XG5cbiAgICAgICAgcG9pbnRzLnB1c2goIGR0MyAqIGZyb21YICsgMyAqIGR0MiAqIGogKiBjcFggKyAzICogZHQgKiB0MiAqIGNwWDIgKyB0MyAqIHRvWCxcbiAgICAgICAgICAgICAgICAgICAgIGR0MyAqIGZyb21ZICsgMyAqIGR0MiAqIGogKiBjcFkgKyAzICogZHQgKiB0MiAqIGNwWTIgKyB0MyAqIHRvWSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVGhlIGFyY1RvKCkgbWV0aG9kIGNyZWF0ZXMgYW4gYXJjL2N1cnZlIGJldHdlZW4gdHdvIHRhbmdlbnRzIG9uIHRoZSBjYW52YXMuXG4gKlxuICogXCJib3Jyb3dlZFwiIGZyb20gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9meGNhbnZhcy8gLSB0aGFua3MgZ29vZ2xlIVxuICpcbiAqIEBwYXJhbSB4MSB7bnVtYmVyfSBUaGUgeC1jb29yZGluYXRlIG9mIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFyY1xuICogQHBhcmFtIHkxIHtudW1iZXJ9IFRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJjXG4gKiBAcGFyYW0geDIge251bWJlcn0gVGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgZW5kIG9mIHRoZSBhcmNcbiAqIEBwYXJhbSB5MiB7bnVtYmVyfSBUaGUgeS1jb29yZGluYXRlIG9mIHRoZSBlbmQgb2YgdGhlIGFyY1xuICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBhcmNcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuYXJjVG8gPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHJhZGl1cylcbntcbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLnB1c2goeDEsIHkxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVUbyh4MSwgeTEpO1xuICAgIH1cblxuICAgIHZhciBwb2ludHMgPSB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cyxcbiAgICAgICAgZnJvbVggPSBwb2ludHNbcG9pbnRzLmxlbmd0aC0yXSxcbiAgICAgICAgZnJvbVkgPSBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgYTEgPSBmcm9tWSAtIHkxLFxuICAgICAgICBiMSA9IGZyb21YIC0geDEsXG4gICAgICAgIGEyID0geTIgICAtIHkxLFxuICAgICAgICBiMiA9IHgyICAgLSB4MSxcbiAgICAgICAgbW0gPSBNYXRoLmFicyhhMSAqIGIyIC0gYjEgKiBhMik7XG5cbiAgICBpZiAobW0gPCAxLjBlLTggfHwgcmFkaXVzID09PSAwKVxuICAgIHtcbiAgICAgICAgaWYgKHBvaW50c1twb2ludHMubGVuZ3RoLTJdICE9PSB4MSB8fCBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXSAhPT0geTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHgxLCB5MSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmFyIGRkID0gYTEgKiBhMSArIGIxICogYjEsXG4gICAgICAgICAgICBjYyA9IGEyICogYTIgKyBiMiAqIGIyLFxuICAgICAgICAgICAgdHQgPSBhMSAqIGEyICsgYjEgKiBiMixcbiAgICAgICAgICAgIGsxID0gcmFkaXVzICogTWF0aC5zcXJ0KGRkKSAvIG1tLFxuICAgICAgICAgICAgazIgPSByYWRpdXMgKiBNYXRoLnNxcnQoY2MpIC8gbW0sXG4gICAgICAgICAgICBqMSA9IGsxICogdHQgLyBkZCxcbiAgICAgICAgICAgIGoyID0gazIgKiB0dCAvIGNjLFxuICAgICAgICAgICAgY3ggPSBrMSAqIGIyICsgazIgKiBiMSxcbiAgICAgICAgICAgIGN5ID0gazEgKiBhMiArIGsyICogYTEsXG4gICAgICAgICAgICBweCA9IGIxICogKGsyICsgajEpLFxuICAgICAgICAgICAgcHkgPSBhMSAqIChrMiArIGoxKSxcbiAgICAgICAgICAgIHF4ID0gYjIgKiAoazEgKyBqMiksXG4gICAgICAgICAgICBxeSA9IGEyICogKGsxICsgajIpLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSA9IE1hdGguYXRhbjIocHkgLSBjeSwgcHggLSBjeCksXG4gICAgICAgICAgICBlbmRBbmdsZSAgID0gTWF0aC5hdGFuMihxeSAtIGN5LCBxeCAtIGN4KTtcblxuICAgICAgICB0aGlzLmFyYyhjeCArIHgxLCBjeSArIHkxLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBiMSAqIGEyID4gYjIgKiBhMSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVGhlIGFyYyBtZXRob2QgY3JlYXRlcyBhbiBhcmMvY3VydmUgKHVzZWQgdG8gY3JlYXRlIGNpcmNsZXMsIG9yIHBhcnRzIG9mIGNpcmNsZXMpLlxuICpcbiAqIEBwYXJhbSBjeCB7bnVtYmVyfSBUaGUgeC1jb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGNpcmNsZVxuICogQHBhcmFtIGN5IHtudW1iZXJ9IFRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgY2lyY2xlXG4gKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICogQHBhcmFtIHN0YXJ0QW5nbGUge251bWJlcn0gVGhlIHN0YXJ0aW5nIGFuZ2xlLCBpbiByYWRpYW5zICgwIGlzIGF0IHRoZSAzIG8nY2xvY2sgcG9zaXRpb24gb2YgdGhlIGFyYydzIGNpcmNsZSlcbiAqIEBwYXJhbSBlbmRBbmdsZSB7bnVtYmVyfSBUaGUgZW5kaW5nIGFuZ2xlLCBpbiByYWRpYW5zXG4gKiBAcGFyYW0gYW50aWNsb2Nrd2lzZSB7Ym9vbGVhbn0gT3B0aW9uYWwuIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkcmF3aW5nIHNob3VsZCBiZSBjb3VudGVyY2xvY2t3aXNlIG9yIGNsb2Nrd2lzZS4gRmFsc2UgaXMgZGVmYXVsdCwgYW5kIGluZGljYXRlcyBjbG9ja3dpc2UsIHdoaWxlIHRydWUgaW5kaWNhdGVzIGNvdW50ZXItY2xvY2t3aXNlLlxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5hcmMgPSBmdW5jdGlvbihjeCwgY3ksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpXG57XG4gICAgdmFyIHN0YXJ0WCA9IGN4ICsgTWF0aC5jb3Moc3RhcnRBbmdsZSkgKiByYWRpdXM7XG4gICAgdmFyIHN0YXJ0WSA9IGN5ICsgTWF0aC5zaW4oc3RhcnRBbmdsZSkgKiByYWRpdXM7XG4gICAgdmFyIHBvaW50cztcblxuICAgIGlmKCB0aGlzLmN1cnJlbnRQYXRoIClcbiAgICB7XG4gICAgICAgIHBvaW50cyA9IHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzO1xuXG4gICAgICAgIGlmKHBvaW50cy5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBwb2ludHNbcG9pbnRzLmxlbmd0aC0yXSAhPT0gc3RhcnRYIHx8IHBvaW50c1twb2ludHMubGVuZ3RoLTFdICE9PSBzdGFydFkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgIHBvaW50cyA9IHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzO1xuICAgIH1cblxuICAgIGlmIChzdGFydEFuZ2xlID09PSBlbmRBbmdsZSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmKCAhYW50aWNsb2Nrd2lzZSAmJiBlbmRBbmdsZSA8PSBzdGFydEFuZ2xlIClcbiAgICB7XG4gICAgICAgIGVuZEFuZ2xlICs9IE1hdGguUEkgKiAyO1xuICAgIH1cbiAgICBlbHNlIGlmKCBhbnRpY2xvY2t3aXNlICYmIHN0YXJ0QW5nbGUgPD0gZW5kQW5nbGUgKVxuICAgIHtcbiAgICAgICAgc3RhcnRBbmdsZSArPSBNYXRoLlBJICogMjtcbiAgICB9XG5cbiAgICB2YXIgc3dlZXAgPSBhbnRpY2xvY2t3aXNlID8gKHN0YXJ0QW5nbGUgLSBlbmRBbmdsZSkgKi0xIDogKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSk7XG4gICAgdmFyIHNlZ3MgPSAgTWF0aC5jZWlsKCBNYXRoLmFicyhzd2VlcCkvIChNYXRoLlBJICogMikgKSAqIDQwO1xuXG4gICAgaWYoIHN3ZWVwID09PSAwIClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciB0aGV0YSA9IHN3ZWVwLyhzZWdzKjIpO1xuICAgIHZhciB0aGV0YTIgPSB0aGV0YSoyO1xuXG4gICAgdmFyIGNUaGV0YSA9IE1hdGguY29zKHRoZXRhKTtcbiAgICB2YXIgc1RoZXRhID0gTWF0aC5zaW4odGhldGEpO1xuXG4gICAgdmFyIHNlZ01pbnVzID0gc2VncyAtIDE7XG5cbiAgICB2YXIgcmVtYWluZGVyID0gKCBzZWdNaW51cyAlIDEgKSAvIHNlZ01pbnVzO1xuXG4gICAgZm9yKHZhciBpPTA7IGk8PXNlZ01pbnVzOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgcmVhbCA9ICBpICsgcmVtYWluZGVyICogaTtcblxuXG4gICAgICAgIHZhciBhbmdsZSA9ICgodGhldGEpICsgc3RhcnRBbmdsZSArICh0aGV0YTIgKiByZWFsKSk7XG5cbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHZhciBzID0gLU1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICBwb2ludHMucHVzaCgoIChjVGhldGEgKiAgYykgKyAoc1RoZXRhICogcykgKSAqIHJhZGl1cyArIGN4LFxuICAgICAgICAgICAgICAgICAgICAoIChjVGhldGEgKiAtcykgKyAoc1RoZXRhICogYykgKSAqIHJhZGl1cyArIGN5KTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTcGVjaWZpZXMgYSBzaW1wbGUgb25lLWNvbG9yIGZpbGwgdGhhdCBzdWJzZXF1ZW50IGNhbGxzIHRvIG90aGVyIEdyYXBoaWNzIG1ldGhvZHNcbiAqIChzdWNoIGFzIGxpbmVUbygpIG9yIGRyYXdDaXJjbGUoKSkgdXNlIHdoZW4gZHJhd2luZy5cbiAqXG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gdGhlIGNvbG9yIG9mIHRoZSBmaWxsXG4gKiBAcGFyYW0gYWxwaGEge251bWJlcn0gdGhlIGFscGhhIG9mIHRoZSBmaWxsXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmJlZ2luRmlsbCA9IGZ1bmN0aW9uIChjb2xvciwgYWxwaGEpXG57XG4gICAgdGhpcy5maWxsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yIHx8IDA7XG4gICAgdGhpcy5maWxsQWxwaGEgPSAoYWxwaGEgPT09IHVuZGVmaW5lZCkgPyAxIDogYWxwaGE7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5sZW5ndGggPD0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5maWxsID0gdGhpcy5maWxsaW5nO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5maWxsQ29sb3IgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguZmlsbEFscGhhID0gdGhpcy5maWxsQWxwaGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgYSBmaWxsIHRvIHRoZSBsaW5lcyBhbmQgc2hhcGVzIHRoYXQgd2VyZSBhZGRlZCBzaW5jZSB0aGUgbGFzdCBjYWxsIHRvIHRoZSBiZWdpbkZpbGwoKSBtZXRob2QuXG4gKlxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5lbmRGaWxsID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmZpbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpbGxDb2xvciA9IG51bGw7XG4gICAgdGhpcy5maWxsQWxwaGEgPSAxO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZCBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmQgb2YgdGhlIHRvcC1sZWZ0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZHJhd1JlY3QgPSBmdW5jdGlvbiAoIHgsIHksIHdpZHRoLCBoZWlnaHQgKVxue1xuICAgIHRoaXMuZHJhd1NoYXBlKG5ldyBtYXRoLlJlY3RhbmdsZSh4LHksIHdpZHRoLCBoZWlnaHQpKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmQgb2YgdGhlIHRvcC1sZWZ0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIHdpZHRoIG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIGhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9IFJhZGl1cyBvZiB0aGUgcmVjdGFuZ2xlIGNvcm5lcnNcbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmRyYXdSb3VuZGVkUmVjdCA9IGZ1bmN0aW9uICggeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzIClcbntcbiAgICB0aGlzLmRyYXdTaGFwZShuZXcgbWF0aC5Sb3VuZGVkUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERyYXdzIGEgY2lyY2xlLlxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgY2lyY2xlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGNpcmNsZVxuICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBjaXJjbGVcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByYWRpdXMpXG57XG4gICAgdGhpcy5kcmF3U2hhcGUobmV3IG1hdGguQ2lyY2xlKHgseSwgcmFkaXVzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRHJhd3MgYW4gZWxsaXBzZS5cbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgZWxsaXBzZVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFRoZSBoYWxmIHdpZHRoIG9mIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IFRoZSBoYWxmIGhlaWdodCBvZiB0aGUgZWxsaXBzZVxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5kcmF3RWxsaXBzZSA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIHRoaXMuZHJhd1NoYXBlKG5ldyBtYXRoLkVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERyYXdzIGEgcG9seWdvbiB1c2luZyB0aGUgZ2l2ZW4gcGF0aC5cbiAqXG4gKiBAcGFyYW0gcGF0aCB7QXJyYXl9IFRoZSBwYXRoIGRhdGEgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIHBvbHlnb24uXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmRyYXdQb2x5Z29uID0gZnVuY3Rpb24gKHBhdGgpXG57XG4gICAgaWYgKCEocGF0aCBpbnN0YW5jZW9mIEFycmF5KSlcbiAgICB7XG4gICAgICAgIHBhdGggPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd1NoYXBlKG5ldyBtYXRoLlBvbHlnb24ocGF0aCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFycyB0aGUgZ3JhcGhpY3MgdGhhdCB3ZXJlIGRyYXduIHRvIHRoaXMgR3JhcGhpY3Mgb2JqZWN0LCBhbmQgcmVzZXRzIGZpbGwgYW5kIGxpbmUgc3R5bGUgc2V0dGluZ3MuXG4gKlxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5saW5lV2lkdGggPSAwO1xuICAgIHRoaXMuZmlsbGluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5jbGVhckRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmdyYXBoaWNzRGF0YSA9IFtdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFVzZWZ1bCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB0ZXh0dXJlIG9mIHRoZSBncmFwaGljcyBvYmplY3QgdGhhdCBjYW4gdGhlbiBiZSB1c2VkIHRvIGNyZWF0ZSBzcHJpdGVzXG4gKiBUaGlzIGNhbiBiZSBxdWl0ZSB1c2VmdWwgaWYgeW91ciBnZW9tZXRyeSBpcyBjb21wbGljYXRlZCBhbmQgbmVlZHMgdG8gYmUgcmV1c2VkIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBwYXJhbSByZXNvbHV0aW9uIHtudW1iZXJ9IFRoZSByZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlIGJlaW5nIGdlbmVyYXRlZFxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTaG91bGQgYmUgb25lIG9mIHRoZSBzY2FsZU1vZGUgY29uc3RzXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBhIHRleHR1cmUgb2YgdGhlIGdyYXBoaWNzIG9iamVjdFxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZ2VuZXJhdGVUZXh0dXJlID0gZnVuY3Rpb24gKHJlc29sdXRpb24sIHNjYWxlTW9kZSlcbntcbiAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbiB8fCAxO1xuXG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cbiAgICB2YXIgY2FudmFzQnVmZmVyID0gbmV3IENhbnZhc0J1ZmZlcihib3VuZHMud2lkdGggKiByZXNvbHV0aW9uLCBib3VuZHMuaGVpZ2h0ICogcmVzb2x1dGlvbik7XG5cbiAgICB2YXIgdGV4dHVyZSA9IFRleHR1cmUuZnJvbUNhbnZhcyhjYW52YXNCdWZmZXIuY2FudmFzLCBzY2FsZU1vZGUpO1xuICAgIHRleHR1cmUuYmFzZVRleHR1cmUucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG5cbiAgICBjYW52YXNCdWZmZXIuY29udGV4dC5zY2FsZShyZXNvbHV0aW9uLCByZXNvbHV0aW9uKTtcblxuICAgIGNhbnZhc0J1ZmZlci5jb250ZXh0LnRyYW5zbGF0ZSgtYm91bmRzLngsLWJvdW5kcy55KTtcblxuICAgIENhbnZhc0dyYXBoaWNzLnJlbmRlckdyYXBoaWNzKHRoaXMsIGNhbnZhc0J1ZmZlci5jb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIFdlYkdMIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuX3JlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIC8vIGlmIHRoZSBzcHJpdGUgaXMgbm90IHZpc2libGUgb3IgdGhlIGFscGhhIGlzIDAgdGhlbiBubyBuZWVkIHRvIHJlbmRlciB0aGlzIGVsZW1lbnRcblxuICAgIC8vIHRoaXMgY29kZSBtYXkgc3RpbGwgYmUgbmVlZGVkIHNvIGxlYXZpbmcgZm9yIG5vdy4uXG4gICAgLy9cbiAgICAvKlxuICAgIGlmICh0aGlzLl9jYWNoZUFzQml0bWFwKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkgfHwgdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVDYWNoZWRTcHJpdGUoKTtcblxuICAgICAgICAgICAgLy8gd2Ugd2lsbCBhbHNvIG5lZWQgdG8gdXBkYXRlIHRoZSB0ZXh0dXJlIG9uIHRoZSBncHUgdG9vIVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZWRTcHJpdGVUZXh0dXJlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVkU3ByaXRlRGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS53b3JsZEFscGhhID0gdGhpcy53b3JsZEFscGhhO1xuXG4gICAgICAgIFNwcml0ZS5wcm90b3R5cGUucmVuZGVyV2ViR0wuY2FsbCh0aGlzLl9jYWNoZWRTcHJpdGUsIHJlbmRlcmVyKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKi9cblxuICAgIGlmICh0aGlzLmdsRGlydHkpXG4gICAge1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbERpcnR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyZXIuc2V0T2JqZWN0UmVuZGVyZXIocmVuZGVyZXIucGx1Z2lucy5ncmFwaGljcyk7XG4gICAgcmVuZGVyZXIucGx1Z2lucy5ncmFwaGljcy5yZW5kZXIodGhpcyk7XG5cbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBDYW52YXMgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfVxuICogQHByaXZhdGVcbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLl9yZW5kZXJDYW52YXMgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgaWYgKHRoaXMuaXNNYXNrID09PSB0cnVlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSB0aW50IGhhcyBjaGFuZ2VkLCBzZXQgdGhlIGdyYXBoaWNzIG9iamVjdCB0byBkaXJ0eS5cbiAgICBpZiAodGhpcy5fcHJldlRpbnQgIT09IHRoaXMudGludCkge1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcHJldlRpbnQgPSB0aGlzLnRpbnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhY2hlQXNCaXRtYXApXG4gICAge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSB8fCB0aGlzLmNhY2hlZFNwcml0ZURpcnR5KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUNhY2hlZFNwcml0ZSgpO1xuXG4gICAgICAgICAgICAvLyB3ZSB3aWxsIGFsc28gbmVlZCB0byB1cGRhdGUgdGhlIHRleHR1cmVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FjaGVkU3ByaXRlVGV4dHVyZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlZFNwcml0ZURpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYWxwaGEgPSB0aGlzLmFscGhhO1xuXG4gICAgICAgIFNwcml0ZS5wcm90b3R5cGUuX3JlbmRlckNhbnZhcy5jYWxsKHRoaXMuX2NhY2hlZFNwcml0ZSwgcmVuZGVyZXIpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy53b3JsZFRyYW5zZm9ybTtcblxuICAgICAgICBpZiAodGhpcy5ibGVuZE1vZGUgIT09IHJlbmRlcmVyLmN1cnJlbnRCbGVuZE1vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmN1cnJlbnRCbGVuZE1vZGUgPSB0aGlzLmJsZW5kTW9kZTtcbiAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gcmVuZGVyZXIuYmxlbmRNb2Rlc1tyZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXNvbHV0aW9uID0gcmVuZGVyZXIucmVzb2x1dGlvbjtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICB0cmFuc2Zvcm0uYSAqIHJlc29sdXRpb24sXG4gICAgICAgICAgICB0cmFuc2Zvcm0uYiAqIHJlc29sdXRpb24sXG4gICAgICAgICAgICB0cmFuc2Zvcm0uYyAqIHJlc29sdXRpb24sXG4gICAgICAgICAgICB0cmFuc2Zvcm0uZCAqIHJlc29sdXRpb24sXG4gICAgICAgICAgICB0cmFuc2Zvcm0udHggKiByZXNvbHV0aW9uLFxuICAgICAgICAgICAgdHJhbnNmb3JtLnR5ICogcmVzb2x1dGlvblxuICAgICAgICApO1xuXG4gICAgICAgIENhbnZhc0dyYXBoaWNzLnJlbmRlckdyYXBoaWNzKHRoaXMsIGNvbnRleHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBib3VuZHMgb2YgdGhlIGdyYXBoaWMgc2hhcGUgYXMgYSByZWN0YW5nbGUgb2JqZWN0XG4gKlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSB0aGUgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYXJlYVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKG1hdHJpeClcbntcbiAgICBpZighdGhpcy5fY3VycmVudEJvdW5kcylcbiAgICB7XG5cbiAgICAgICAgLy8gcmV0dXJuIGFuIGVtcHR5IG9iamVjdCBpZiB0aGUgaXRlbSBpcyBhIG1hc2shXG4gICAgICAgIGlmICghdGhpcy5yZW5kZXJhYmxlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbWF0aC5SZWN0YW5nbGUuRU1QVFk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXJ0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbEJvdW5kcygpO1xuXG4gICAgICAgICAgICB0aGlzLmdsRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm91bmRzID0gdGhpcy5fbG9jYWxCb3VuZHM7XG5cbiAgICAgICAgdmFyIHcwID0gYm91bmRzLng7XG4gICAgICAgIHZhciB3MSA9IGJvdW5kcy53aWR0aCArIGJvdW5kcy54O1xuXG4gICAgICAgIHZhciBoMCA9IGJvdW5kcy55O1xuICAgICAgICB2YXIgaDEgPSBib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnk7XG5cbiAgICAgICAgdmFyIHdvcmxkVHJhbnNmb3JtID0gbWF0cml4IHx8IHRoaXMud29ybGRUcmFuc2Zvcm07XG5cbiAgICAgICAgdmFyIGEgPSB3b3JsZFRyYW5zZm9ybS5hO1xuICAgICAgICB2YXIgYiA9IHdvcmxkVHJhbnNmb3JtLmI7XG4gICAgICAgIHZhciBjID0gd29ybGRUcmFuc2Zvcm0uYztcbiAgICAgICAgdmFyIGQgPSB3b3JsZFRyYW5zZm9ybS5kO1xuICAgICAgICB2YXIgdHggPSB3b3JsZFRyYW5zZm9ybS50eDtcbiAgICAgICAgdmFyIHR5ID0gd29ybGRUcmFuc2Zvcm0udHk7XG5cbiAgICAgICAgdmFyIHgxID0gYSAqIHcxICsgYyAqIGgxICsgdHg7XG4gICAgICAgIHZhciB5MSA9IGQgKiBoMSArIGIgKiB3MSArIHR5O1xuXG4gICAgICAgIHZhciB4MiA9IGEgKiB3MCArIGMgKiBoMSArIHR4O1xuICAgICAgICB2YXIgeTIgPSBkICogaDEgKyBiICogdzAgKyB0eTtcblxuICAgICAgICB2YXIgeDMgPSBhICogdzAgKyBjICogaDAgKyB0eDtcbiAgICAgICAgdmFyIHkzID0gZCAqIGgwICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgdmFyIHg0ID0gIGEgKiB3MSArIGMgKiBoMCArIHR4O1xuICAgICAgICB2YXIgeTQgPSAgZCAqIGgwICsgYiAqIHcxICsgdHk7XG5cbiAgICAgICAgdmFyIG1heFggPSB4MTtcbiAgICAgICAgdmFyIG1heFkgPSB5MTtcblxuICAgICAgICB2YXIgbWluWCA9IHgxO1xuICAgICAgICB2YXIgbWluWSA9IHkxO1xuXG4gICAgICAgIG1pblggPSB4MiA8IG1pblggPyB4MiA6IG1pblg7XG4gICAgICAgIG1pblggPSB4MyA8IG1pblggPyB4MyA6IG1pblg7XG4gICAgICAgIG1pblggPSB4NCA8IG1pblggPyB4NCA6IG1pblg7XG5cbiAgICAgICAgbWluWSA9IHkyIDwgbWluWSA/IHkyIDogbWluWTtcbiAgICAgICAgbWluWSA9IHkzIDwgbWluWSA/IHkzIDogbWluWTtcbiAgICAgICAgbWluWSA9IHk0IDwgbWluWSA/IHk0IDogbWluWTtcblxuICAgICAgICBtYXhYID0geDIgPiBtYXhYID8geDIgOiBtYXhYO1xuICAgICAgICBtYXhYID0geDMgPiBtYXhYID8geDMgOiBtYXhYO1xuICAgICAgICBtYXhYID0geDQgPiBtYXhYID8geDQgOiBtYXhYO1xuXG4gICAgICAgIG1heFkgPSB5MiA+IG1heFkgPyB5MiA6IG1heFk7XG4gICAgICAgIG1heFkgPSB5MyA+IG1heFkgPyB5MyA6IG1heFk7XG4gICAgICAgIG1heFkgPSB5NCA+IG1heFkgPyB5NCA6IG1heFk7XG5cbiAgICAgICAgdGhpcy5fYm91bmRzLnggPSBtaW5YO1xuICAgICAgICB0aGlzLl9ib3VuZHMud2lkdGggPSBtYXhYIC0gbWluWDtcblxuICAgICAgICB0aGlzLl9ib3VuZHMueSA9IG1pblk7XG4gICAgICAgIHRoaXMuX2JvdW5kcy5oZWlnaHQgPSBtYXhZIC0gbWluWTtcblxuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gdGhpcy5fYm91bmRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xufTtcblxuLyoqXG4qIFRlc3RzIGlmIGEgcG9pbnQgaXMgaW5zaWRlIHRoaXMgZ3JhcGhpY3Mgb2JqZWN0XG4qXG4qIEBwYXJhbSBwb2ludCB7UG9pbnR9IHRoZSBwb2ludCB0byB0ZXN0XG4qIEByZXR1cm4ge2Jvb2xlYW59IHRoZSByZXN1bHQgb2YgdGhlIHRlc3RcbiovXG5HcmFwaGljcy5wcm90b3R5cGUuY29udGFpbnNQb2ludCA9IGZ1bmN0aW9uKCBwb2ludCApXG57XG4gICAgdGhpcy53b3JsZFRyYW5zZm9ybS5hcHBseUludmVyc2UocG9pbnQsICB0ZW1wUG9pbnQpO1xuXG4gICAgdmFyIGdyYXBoaWNzRGF0YSA9IHRoaXMuZ3JhcGhpY3NEYXRhO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncmFwaGljc0RhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgZGF0YSA9IGdyYXBoaWNzRGF0YVtpXTtcblxuICAgICAgICBpZiAoIWRhdGEuZmlsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IGRlYWwgd2l0aCBmaWxscy4uXG4gICAgICAgIGlmIChkYXRhLnNoYXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIGRhdGEuc2hhcGUuY29udGFpbnMoIHRlbXBQb2ludC54LCB0ZW1wUG9pbnQueSApIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBib3VuZHMgb2YgdGhlIG9iamVjdFxuICpcbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLnVwZGF0ZUxvY2FsQm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgbWluWCA9IEluZmluaXR5O1xuICAgIHZhciBtYXhYID0gLUluZmluaXR5O1xuXG4gICAgdmFyIG1pblkgPSBJbmZpbml0eTtcbiAgICB2YXIgbWF4WSA9IC1JbmZpbml0eTtcblxuICAgIGlmICh0aGlzLmdyYXBoaWNzRGF0YS5sZW5ndGgpXG4gICAge1xuICAgICAgICB2YXIgc2hhcGUsIHBvaW50cywgeCwgeSwgdywgaDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JhcGhpY3NEYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ3JhcGhpY3NEYXRhW2ldO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gICAgICAgICAgICB2YXIgbGluZVdpZHRoID0gZGF0YS5saW5lV2lkdGg7XG4gICAgICAgICAgICBzaGFwZSA9IGRhdGEuc2hhcGU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBDT05TVC5TSEFQRVMuUkVDVCB8fCB0eXBlID09PSBDT05TVC5TSEFQRVMuUlJFQylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4ID0gc2hhcGUueCAtIGxpbmVXaWR0aC8yO1xuICAgICAgICAgICAgICAgIHkgPSBzaGFwZS55IC0gbGluZVdpZHRoLzI7XG4gICAgICAgICAgICAgICAgdyA9IHNoYXBlLndpZHRoICsgbGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIGggPSBzaGFwZS5oZWlnaHQgKyBsaW5lV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBtaW5YID0geCA8IG1pblggPyB4IDogbWluWDtcbiAgICAgICAgICAgICAgICBtYXhYID0geCArIHcgPiBtYXhYID8geCArIHcgOiBtYXhYO1xuXG4gICAgICAgICAgICAgICAgbWluWSA9IHkgPCBtaW5ZID8geSA6IG1pblk7XG4gICAgICAgICAgICAgICAgbWF4WSA9IHkgKyBoID4gbWF4WSA/IHkgKyBoIDogbWF4WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IENPTlNULlNIQVBFUy5DSVJDKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHggPSBzaGFwZS54O1xuICAgICAgICAgICAgICAgIHkgPSBzaGFwZS55O1xuICAgICAgICAgICAgICAgIHcgPSBzaGFwZS5yYWRpdXMgKyBsaW5lV2lkdGgvMjtcbiAgICAgICAgICAgICAgICBoID0gc2hhcGUucmFkaXVzICsgbGluZVdpZHRoLzI7XG5cbiAgICAgICAgICAgICAgICBtaW5YID0geCAtIHcgPCBtaW5YID8geCAtIHcgOiBtaW5YO1xuICAgICAgICAgICAgICAgIG1heFggPSB4ICsgdyA+IG1heFggPyB4ICsgdyA6IG1heFg7XG5cbiAgICAgICAgICAgICAgICBtaW5ZID0geSAtIGggPCBtaW5ZID8geSAtIGggOiBtaW5ZO1xuICAgICAgICAgICAgICAgIG1heFkgPSB5ICsgaCA+IG1heFkgPyB5ICsgaCA6IG1heFk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBDT05TVC5TSEFQRVMuRUxJUClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4ID0gc2hhcGUueDtcbiAgICAgICAgICAgICAgICB5ID0gc2hhcGUueTtcbiAgICAgICAgICAgICAgICB3ID0gc2hhcGUud2lkdGggKyBsaW5lV2lkdGgvMjtcbiAgICAgICAgICAgICAgICBoID0gc2hhcGUuaGVpZ2h0ICsgbGluZVdpZHRoLzI7XG5cbiAgICAgICAgICAgICAgICBtaW5YID0geCAtIHcgPCBtaW5YID8geCAtIHcgOiBtaW5YO1xuICAgICAgICAgICAgICAgIG1heFggPSB4ICsgdyA+IG1heFggPyB4ICsgdyA6IG1heFg7XG5cbiAgICAgICAgICAgICAgICBtaW5ZID0geSAtIGggPCBtaW5ZID8geSAtIGggOiBtaW5ZO1xuICAgICAgICAgICAgICAgIG1heFkgPSB5ICsgaCA+IG1heFkgPyB5ICsgaCA6IG1heFk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gUE9MWVxuICAgICAgICAgICAgICAgIHBvaW50cyA9IHNoYXBlLnBvaW50cztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaiArPSAyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IHBvaW50c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBvaW50c1tqKzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG1pblggPSB4LWxpbmVXaWR0aCA8IG1pblggPyB4LWxpbmVXaWR0aCA6IG1pblg7XG4gICAgICAgICAgICAgICAgICAgIG1heFggPSB4K2xpbmVXaWR0aCA+IG1heFggPyB4K2xpbmVXaWR0aCA6IG1heFg7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluWSA9IHktbGluZVdpZHRoIDwgbWluWSA/IHktbGluZVdpZHRoIDogbWluWTtcbiAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHkrbGluZVdpZHRoID4gbWF4WSA/IHkrbGluZVdpZHRoIDogbWF4WTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbWluWCA9IDA7XG4gICAgICAgIG1heFggPSAwO1xuICAgICAgICBtaW5ZID0gMDtcbiAgICAgICAgbWF4WSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHBhZGRpbmcgPSB0aGlzLmJvdW5kc1BhZGRpbmc7XG5cbiAgICB0aGlzLl9sb2NhbEJvdW5kcy54ID0gbWluWCAtIHBhZGRpbmc7XG4gICAgdGhpcy5fbG9jYWxCb3VuZHMud2lkdGggPSAobWF4WCAtIG1pblgpICsgcGFkZGluZyAqIDI7XG5cbiAgICB0aGlzLl9sb2NhbEJvdW5kcy55ID0gbWluWSAtIHBhZGRpbmc7XG4gICAgdGhpcy5fbG9jYWxCb3VuZHMuaGVpZ2h0ID0gKG1heFkgLSBtaW5ZKSArIHBhZGRpbmcgKiAyO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIGNhY2hlZCBzcHJpdGUgd2hlbiB0aGUgc3ByaXRlIGhhcyBjYWNoZUFzQml0bWFwID0gdHJ1ZVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbi8qXG5HcmFwaGljcy5wcm90b3R5cGUuX2dlbmVyYXRlQ2FjaGVkU3ByaXRlID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRMb2NhbEJvdW5kcygpO1xuXG4gICAgaWYgKCF0aGlzLl9jYWNoZWRTcHJpdGUpXG4gICAge1xuICAgICAgICB2YXIgY2FudmFzQnVmZmVyID0gbmV3IENhbnZhc0J1ZmZlcihib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICB2YXIgdGV4dHVyZSA9IFRleHR1cmUuZnJvbUNhbnZhcyhjYW52YXNCdWZmZXIuY2FudmFzKTtcblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYnVmZmVyID0gY2FudmFzQnVmZmVyO1xuXG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS53b3JsZFRyYW5zZm9ybSA9IHRoaXMud29ybGRUcmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5idWZmZXIucmVzaXplKGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgLy8gbGV2ZXJhZ2UgdGhlIGFuY2hvciB0byBhY2NvdW50IGZvciB0aGUgb2Zmc2V0IG9mIHRoZSBlbGVtZW50XG4gICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFuY2hvci54ID0gLSggYm91bmRzLnggLyBib3VuZHMud2lkdGggKTtcbiAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYW5jaG9yLnkgPSAtKCBib3VuZHMueSAvIGJvdW5kcy5oZWlnaHQgKTtcblxuICAgIC8vIHRoaXMuX2NhY2hlZFNwcml0ZS5idWZmZXIuY29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5fY2FjaGVkU3ByaXRlLmJ1ZmZlci5jb250ZXh0LnRyYW5zbGF0ZSgtYm91bmRzLngsLWJvdW5kcy55KTtcblxuICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGFscGhhIG9mIHRoZSBncmFwaGljcyB0byAxIGZvciB0aGUgcmVuZGVyLi5cbiAgICB0aGlzLndvcmxkQWxwaGEgPSAxO1xuXG4gICAgLy8gbm93IHJlbmRlciB0aGUgZ3JhcGhpYy4uXG4gICAgQ2FudmFzR3JhcGhpY3MucmVuZGVyR3JhcGhpY3ModGhpcywgdGhpcy5fY2FjaGVkU3ByaXRlLmJ1ZmZlci5jb250ZXh0KTtcblxuICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5hbHBoYSA9IHRoaXMuYWxwaGE7XG59O1xuKi9cbi8qKlxuICogVXBkYXRlcyB0ZXh0dXJlIHNpemUgYmFzZWQgb24gY2FudmFzIHNpemVcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG4vKlxuR3JhcGhpY3MucHJvdG90eXBlLnVwZGF0ZUNhY2hlZFNwcml0ZVRleHR1cmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBjYWNoZWRTcHJpdGUgPSB0aGlzLl9jYWNoZWRTcHJpdGU7XG4gICAgdmFyIHRleHR1cmUgPSBjYWNoZWRTcHJpdGUudGV4dHVyZTtcbiAgICB2YXIgY2FudmFzID0gY2FjaGVkU3ByaXRlLmJ1ZmZlci5jYW52YXM7XG5cbiAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIHRleHR1cmUuYmFzZVRleHR1cmUuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICB0ZXh0dXJlLmNyb3Aud2lkdGggPSB0ZXh0dXJlLmZyYW1lLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIHRleHR1cmUuY3JvcC5oZWlnaHQgPSB0ZXh0dXJlLmZyYW1lLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICBjYWNoZWRTcHJpdGUuX3dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIGNhY2hlZFNwcml0ZS5faGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgIC8vIHVwZGF0ZSB0aGUgZGlydHkgYmFzZSB0ZXh0dXJlc1xuICAgIHRleHR1cmUuYmFzZVRleHR1cmUuZGlydHkoKTtcbn07Ki9cblxuLyoqXG4gKiBEZXN0cm95cyBhIHByZXZpb3VzIGNhY2hlZCBzcHJpdGUuXG4gKlxuICovXG4vKlxuR3JhcGhpY3MucHJvdG90eXBlLmRlc3Ryb3lDYWNoZWRTcHJpdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuX2NhY2hlZFNwcml0ZS50ZXh0dXJlLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAvLyBsZXQgdGhlIGdjIGNvbGxlY3QgdGhlIHVudXNlZCBzcHJpdGVcbiAgICAvLyBUT0RPIGNvdWxkIGJlIG9iamVjdCBwb29sZWQhXG4gICAgdGhpcy5fY2FjaGVkU3ByaXRlID0gbnVsbDtcbn07Ki9cblxuLyoqXG4gKiBEcmF3cyB0aGUgZ2l2ZW4gc2hhcGUgdG8gdGhpcyBHcmFwaGljcyBvYmplY3QuIENhbiBiZSBhbnkgb2YgQ2lyY2xlLCBSZWN0YW5nbGUsIEVsbGlwc2UsIExpbmUgb3IgUG9seWdvbi5cbiAqXG4gKiBAcGFyYW0gc2hhcGUge0NpcmNsZXxSZWN0YW5nbGV8RWxsaXBzZXxMaW5lfFBvbHlnb259IFRoZSBzaGFwZSBvYmplY3QgdG8gZHJhdy5cbiAqIEByZXR1cm4ge0dyYXBoaWNzRGF0YX0gVGhlIGdlbmVyYXRlZCBHcmFwaGljc0RhdGEgb2JqZWN0LlxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZHJhd1NoYXBlID0gZnVuY3Rpb24gKHNoYXBlKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoKVxuICAgIHtcbiAgICAgICAgLy8gY2hlY2sgY3VycmVudCBwYXRoIVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMubGVuZ3RoIDw9IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NEYXRhLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGF0aCA9IG51bGw7XG5cbiAgICB2YXIgZGF0YSA9IG5ldyBHcmFwaGljc0RhdGEodGhpcy5saW5lV2lkdGgsIHRoaXMubGluZUNvbG9yLCB0aGlzLmxpbmVBbHBoYSwgdGhpcy5maWxsQ29sb3IsIHRoaXMuZmlsbEFscGhhLCB0aGlzLmZpbGxpbmcsIHNoYXBlKTtcblxuICAgIHRoaXMuZ3JhcGhpY3NEYXRhLnB1c2goZGF0YSk7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUE9MWSlcbiAgICB7XG4gICAgICAgIGRhdGEuc2hhcGUuY2xvc2VkID0gdGhpcy5maWxsaW5nO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYXRoID0gZGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiBkYXRhO1xufTtcbiIsIi8qKlxuICogQSBHcmFwaGljc0RhdGEgb2JqZWN0LlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBsaW5lV2lkdGgge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAqIEBwYXJhbSBsaW5lQ29sb3Ige251bWJlcn0gdGhlIGNvbG9yIG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAqIEBwYXJhbSBsaW5lQWxwaGEge251bWJlcn0gdGhlIGFscGhhIG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAqIEBwYXJhbSBmaWxsQ29sb3Ige251bWJlcn0gdGhlIGNvbG9yIG9mIHRoZSBmaWxsXG4gKiBAcGFyYW0gZmlsbEFscGhhIHtudW1iZXJ9IHRoZSBhbHBoYSBvZiB0aGUgZmlsbFxuICogQHBhcmFtIGZpbGwgICAgICB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgdGhlIHNoYXBlIGlzIGZpbGxlZCB3aXRoIGEgY29sb3VyXG4gKiBAcGFyYW0gc2hhcGUgICAgIHtDaXJjbGV8UmVjdGFuZ2xlfEVsbGlwc2V8TGluZXxQb2x5Z29ufSBUaGUgc2hhcGUgb2JqZWN0IHRvIGRyYXcuXG4gKi9cbmZ1bmN0aW9uIEdyYXBoaWNzRGF0YShsaW5lV2lkdGgsIGxpbmVDb2xvciwgbGluZUFscGhhLCBmaWxsQ29sb3IsIGZpbGxBbHBoYSwgZmlsbCwgc2hhcGUpXG57XG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIGxpbmUgdG8gZHJhd1xuICAgICAqL1xuICAgIHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSB0aGUgY29sb3Igb2YgdGhlIGxpbmUgdG8gZHJhd1xuICAgICAqL1xuICAgIHRoaXMubGluZUNvbG9yID0gbGluZUNvbG9yO1xuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gdGhlIGFscGhhIG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAgICAgKi9cbiAgICB0aGlzLmxpbmVBbHBoYSA9IGxpbmVBbHBoYTtcbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IGNhY2hlZCB0aW50IG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAgICAgKi9cbiAgICB0aGlzLl9saW5lVGludCA9IGxpbmVDb2xvcjtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gdGhlIGNvbG9yIG9mIHRoZSBmaWxsXG4gICAgICovXG4gICAgdGhpcy5maWxsQ29sb3IgPSBmaWxsQ29sb3I7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHRoZSBhbHBoYSBvZiB0aGUgZmlsbFxuICAgICAqL1xuICAgIHRoaXMuZmlsbEFscGhhID0gZmlsbEFscGhhO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBjYWNoZWQgdGludCBvZiB0aGUgZmlsbFxuICAgICAqL1xuICAgIHRoaXMuX2ZpbGxUaW50ID0gZmlsbENvbG9yO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgdGhlIHNoYXBlIGlzIGZpbGxlZCB3aXRoIGEgY29sb3VyXG4gICAgICovXG4gICAgdGhpcy5maWxsID0gZmlsbDtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge0NpcmNsZXxSZWN0YW5nbGV8RWxsaXBzZXxMaW5lfFBvbHlnb259IFRoZSBzaGFwZSBvYmplY3QgdG8gZHJhdy5cbiAgICAgKi9cbiAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFRoZSB0eXBlIG9mIHRoZSBzaGFwZSwgc2VlIHRoZSBDb25zdC5TaGFwZXMgZmlsZSBmb3IgYWxsIHRoZSBleGlzdGluZyB0eXBlcywgXG4gICAgICovXG4gICAgdGhpcy50eXBlID0gc2hhcGUudHlwZTtcbn1cblxuR3JhcGhpY3NEYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdyYXBoaWNzRGF0YTtcbm1vZHVsZS5leHBvcnRzID0gR3JhcGhpY3NEYXRhO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgR3JhcGhpY3NEYXRhIG9iamVjdCB3aXRoIHRoZSBzYW1lIHZhbHVlcyBhcyB0aGlzIG9uZS5cbiAqXG4gKiBAcmV0dXJuIHtHcmFwaGljc0RhdGF9XG4gKi9cbkdyYXBoaWNzRGF0YS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgR3JhcGhpY3NEYXRhKFxuICAgICAgICB0aGlzLmxpbmVXaWR0aCxcbiAgICAgICAgdGhpcy5saW5lQ29sb3IsXG4gICAgICAgIHRoaXMubGluZUFscGhhLFxuICAgICAgICB0aGlzLmZpbGxDb2xvcixcbiAgICAgICAgdGhpcy5maWxsQWxwaGEsXG4gICAgICAgIHRoaXMuZmlsbCxcbiAgICAgICAgdGhpcy5zaGFwZVxuICAgICk7XG59O1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKSxcbiAgICBtYXRoID0gcmVxdWlyZSgnLi4vLi4vbWF0aCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKSxcbiAgICBPYmplY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVycy93ZWJnbC91dGlscy9PYmplY3RSZW5kZXJlcicpLFxuICAgIFdlYkdMUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlcicpLFxuICAgIFdlYkdMR3JhcGhpY3NEYXRhID0gcmVxdWlyZSgnLi9XZWJHTEdyYXBoaWNzRGF0YScpO1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGdyYXBoaWNzIG9iamVjdC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgT2JqZWN0UmVuZGVyZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgb2JqZWN0IHJlbmRlcmVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gR3JhcGhpY3NSZW5kZXJlcihyZW5kZXJlcilcbntcbiAgICBPYmplY3RSZW5kZXJlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcblxuICAgIHRoaXMuZ3JhcGhpY3NEYXRhUG9vbCA9IFtdO1xuXG4gICAgdGhpcy5wcmltaXRpdmVTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuY29tcGxleFByaW1pdGl2ZVNoYWRlciA9IG51bGw7XG59XG5cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RSZW5kZXJlci5wcm90b3R5cGUpO1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHcmFwaGljc1JlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBHcmFwaGljc1JlbmRlcmVyO1xuXG5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdncmFwaGljcycsIEdyYXBoaWNzUmVuZGVyZXIpO1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgV2ViR0wgY29udGV4dCBjaGFuZ2VcbiAqXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUub25Db250ZXh0Q2hhbmdlID0gZnVuY3Rpb24oKVxue1xuXG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoaXMgcmVuZGVyZXIuXG4gKlxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdFJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmdyYXBoaWNzRGF0YVBvb2wgPSBudWxsO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgZ3JhcGhpY3Mgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgdG8gcmVuZGVyLlxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihncmFwaGljcylcbntcbiAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuICAgIHZhciBnbCA9IHJlbmRlcmVyLmdsO1xuXG4gICAgdmFyIHNoYWRlciA9IHJlbmRlcmVyLnNoYWRlck1hbmFnZXIucGx1Z2lucy5wcmltaXRpdmVTaGFkZXIsXG4gICAgICAgIHdlYkdMRGF0YTtcblxuICAgIGlmIChncmFwaGljcy5kaXJ0eSlcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlR3JhcGhpY3MoZ3JhcGhpY3MsIGdsKTtcbiAgICB9XG5cbiAgICB2YXIgd2ViR0wgPSBncmFwaGljcy5fd2ViR0xbZ2wuaWRdO1xuXG4gICAgLy8gVGhpcyAgY291bGQgYmUgc3BlZWRlZCB1cCBmb3Igc3VyZSFcblxuICAgIHJlbmRlcmVyLmJsZW5kTW9kZU1hbmFnZXIuc2V0QmxlbmRNb2RlKCBncmFwaGljcy5ibGVuZE1vZGUgKTtcblxuLy8gICAgdmFyIG1hdHJpeCA9ICBncmFwaGljcy53b3JsZFRyYW5zZm9ybS5jbG9uZSgpO1xuLy8gICAgdmFyIG1hdHJpeCA9ICByZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXguY2xvbmUoKTtcbi8vICAgIG1hdHJpeC5hcHBlbmQoZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3ZWJHTC5kYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaWYgKHdlYkdMLmRhdGFbaV0ubW9kZSA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2ViR0xEYXRhID0gd2ViR0wuZGF0YVtpXTtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc3RlbmNpbE1hbmFnZXIucHVzaFN0ZW5jaWwoZ3JhcGhpY3MsIHdlYkdMRGF0YSwgcmVuZGVyZXIpO1xuXG4gICAgICAgICAgICAvLyByZW5kZXIgcXVhZC4uXG4gICAgICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVfRkFOLCA0LCBnbC5VTlNJR05FRF9TSE9SVCwgKCB3ZWJHTERhdGEuaW5kaWNlcy5sZW5ndGggLSA0ICkgKiAyICk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnN0ZW5jaWxNYW5hZ2VyLnBvcFN0ZW5jaWwoZ3JhcGhpY3MsIHdlYkdMRGF0YSwgcmVuZGVyZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgd2ViR0xEYXRhID0gd2ViR0wuZGF0YVtpXTtcblxuXG4gICAgICAgICAgICBzaGFkZXIgPSByZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnByaW1pdGl2ZVNoYWRlcjtcblxuICAgICAgICAgICAgcmVuZGVyZXIuc2hhZGVyTWFuYWdlci5zZXRTaGFkZXIoIHNoYWRlciApOy8vYWN0aXZhdGVQcmltaXRpdmVTaGFkZXIoKTtcblxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgcmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldC5wcm9qZWN0aW9uTWF0cml4LnRvQXJyYXkodHJ1ZSkpO1xuXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KHNoYWRlci51bmlmb3Jtcy50aW50Ll9sb2NhdGlvbiwgdXRpbHMuaGV4MnJnYihncmFwaGljcy50aW50KSk7XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihzaGFkZXIudW5pZm9ybXMuYWxwaGEuX2xvY2F0aW9uLCBncmFwaGljcy53b3JsZEFscGhhKTtcblxuXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmJ1ZmZlcik7XG5cbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDQgKiA2LCAwKTtcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYUNvbG9yLCA0LCBnbC5GTE9BVCwgZmFsc2UsNCAqIDYsIDIgKiA0KTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBpbmRleCBidWZmZXIhXG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB3ZWJHTERhdGEuaW5kZXhCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX1NUUklQLCAgd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoLCBnbC5VTlNJR05FRF9TSE9SVCwgMCApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBncmFwaGljcyBvYmplY3RcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgdG8gdXBkYXRlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLnVwZGF0ZUdyYXBoaWNzID0gZnVuY3Rpb24oZ3JhcGhpY3MpXG57XG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgICAvLyBnZXQgdGhlIGNvbnRleHRzIGdyYXBoaWNzIG9iamVjdFxuICAgIHZhciB3ZWJHTCA9IGdyYXBoaWNzLl93ZWJHTFtnbC5pZF07XG5cbiAgICAvLyBpZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB3ZWJHTCBjb250ZXh0IHRpbWUgdG8gY3JlYXRlIGl0IVxuICAgIGlmICghd2ViR0wpXG4gICAge1xuICAgICAgICB3ZWJHTCA9IGdyYXBoaWNzLl93ZWJHTFtnbC5pZF0gPSB7bGFzdEluZGV4OjAsIGRhdGE6W10sIGdsOmdsfTtcbiAgICB9XG5cbiAgICAvLyBmbGFnIHRoZSBncmFwaGljcyBhcyBub3QgZGlydHkgYXMgd2UgYXJlIGFib3V0IHRvIHVwZGF0ZSBpdC4uLlxuICAgIGdyYXBoaWNzLmRpcnR5ID0gZmFsc2U7XG5cbiAgICB2YXIgaTtcblxuICAgIC8vIGlmIHRoZSB1c2VyIGNsZWFyZWQgdGhlIGdyYXBoaWNzIG9iamVjdCB3ZSB3aWxsIG5lZWQgdG8gY2xlYXIgZXZlcnkgb2JqZWN0XG4gICAgaWYgKGdyYXBoaWNzLmNsZWFyRGlydHkpXG4gICAge1xuICAgICAgICBncmFwaGljcy5jbGVhckRpcnR5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gbG9wIHRocm91Z2ggYW5kIHJldHVybiBhbGwgdGhlIHdlYkdMRGF0YXMgdG8gdGhlIG9iamVjdCBwb29sIHNvIHRoYW4gY2FuIGJlIHJldXNlZCBsYXRlciBvblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgd2ViR0wuZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGdyYXBoaWNzRGF0YSA9IHdlYkdMLmRhdGFbaV07XG4gICAgICAgICAgICBncmFwaGljc0RhdGEucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NEYXRhUG9vbC5wdXNoKCBncmFwaGljc0RhdGEgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBhcnJheSBhbmQgcmVzZXQgdGhlIGluZGV4Li5cbiAgICAgICAgd2ViR0wuZGF0YSA9IFtdO1xuICAgICAgICB3ZWJHTC5sYXN0SW5kZXggPSAwO1xuICAgIH1cblxuICAgIHZhciB3ZWJHTERhdGE7XG5cbiAgICAvLyBsb29wIHRocm91Z2ggdGhlIGdyYXBoaWNzIGRhdGFzIGFuZCBjb25zdHJ1Y3QgZWFjaCBvbmUuLlxuICAgIC8vIGlmIHRoZSBvYmplY3QgaXMgYSBjb21wbGV4IGZpbGwgdGhlbiB0aGUgbmV3IHN0ZW5jaWwgYnVmZmVyIHRlY2huaXF1ZSB3aWxsIGJlIHVzZWRcbiAgICAvLyBvdGhlciB3aXNlIGdyYXBoaWNzIG9iamVjdHMgd2lsbCBiZSBwdXNoZWQgaW50byBhIGJhdGNoLi5cbiAgICBmb3IgKGkgPSB3ZWJHTC5sYXN0SW5kZXg7IGkgPCBncmFwaGljcy5ncmFwaGljc0RhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgZGF0YSA9IGdyYXBoaWNzLmdyYXBoaWNzRGF0YVtpXTtcblxuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUE9MWSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBhZGQgdGhlIHBvaW50cyB0aGUgdGhlIGdyYXBoaWNzIG9iamVjdC4uXG4gICAgICAgICAgICBkYXRhLnBvaW50cyA9IGRhdGEuc2hhcGUucG9pbnRzLnNsaWNlKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zaGFwZS5jbG9zZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY2xvc2UgdGhlIHBvbHkgaWYgdGhlIHZhbHVlIGlzIHRydWUhXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucG9pbnRzWzBdICE9PSBkYXRhLnBvaW50c1tkYXRhLnBvaW50cy5sZW5ndGgtMl0gfHwgZGF0YS5wb2ludHNbMV0gIT09IGRhdGEucG9pbnRzW2RhdGEucG9pbnRzLmxlbmd0aC0xXSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucG9pbnRzLnB1c2goZGF0YS5wb2ludHNbMF0sIGRhdGEucG9pbnRzWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1BS0UgU1VSRSBXRSBIQVZFIFRIRSBDT1JSRUNUIFRZUEUuLlxuICAgICAgICAgICAgaWYgKGRhdGEuZmlsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wb2ludHMubGVuZ3RoID49IDYpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wb2ludHMubGVuZ3RoIDwgNiAqIDIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuc3dpdGNoTW9kZSh3ZWJHTCwgMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYW5EcmF3VXNpbmdTaW1wbGUgPSB0aGlzLmJ1aWxkUG9seShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjYW5EcmF3VXNpbmdTaW1wbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbkRyYXdVc2luZ1NpbXBsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiPD4+PlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuc3dpdGNoTW9kZSh3ZWJHTCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZENvbXBsZXhQb2x5KGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYkdMRGF0YSA9IHRoaXMuc3dpdGNoTW9kZSh3ZWJHTCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQ29tcGxleFBvbHkoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEubGluZVdpZHRoID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLnN3aXRjaE1vZGUod2ViR0wsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRMaW5lKGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLnN3aXRjaE1vZGUod2ViR0wsIDApO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUkVDVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUmVjdGFuZ2xlKGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5DSVJDIHx8IGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkVMSVApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZENpcmNsZShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUlJFQylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUm91bmRlZFJlY3RhbmdsZShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2ViR0wubGFzdEluZGV4Kys7XG4gICAgfVxuXG4gICAgLy8gdXBsb2FkIGFsbCB0aGUgZGlydHkgZGF0YS4uLlxuICAgIGZvciAoaSA9IDA7IGkgPCB3ZWJHTC5kYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgd2ViR0xEYXRhID0gd2ViR0wuZGF0YVtpXTtcblxuICAgICAgICBpZiAod2ViR0xEYXRhLmRpcnR5KVxuICAgICAgICB7XG4gICAgICAgICAgICB3ZWJHTERhdGEudXBsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB3ZWJHTCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSB0aGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAqIEBwYXJhbSB0eXBlIHtudW1iZXJ9IFRPRE8gQEFsdmluXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLnN3aXRjaE1vZGUgPSBmdW5jdGlvbiAod2ViR0wsIHR5cGUpXG57XG4gICAgdmFyIHdlYkdMRGF0YTtcblxuICAgIGlmICghd2ViR0wuZGF0YS5sZW5ndGgpXG4gICAge1xuICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLmdyYXBoaWNzRGF0YVBvb2wucG9wKCkgfHwgbmV3IFdlYkdMR3JhcGhpY3NEYXRhKHdlYkdMLmdsKTtcbiAgICAgICAgd2ViR0xEYXRhLm1vZGUgPSB0eXBlO1xuICAgICAgICB3ZWJHTC5kYXRhLnB1c2god2ViR0xEYXRhKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgd2ViR0xEYXRhID0gd2ViR0wuZGF0YVt3ZWJHTC5kYXRhLmxlbmd0aC0xXTtcblxuICAgICAgICBpZiAoKHdlYkdMRGF0YS5wb2ludHMubGVuZ3RoID4gMzIwMDAwKSB8fCB3ZWJHTERhdGEubW9kZSAhPT0gdHlwZSB8fCB0eXBlID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLmdyYXBoaWNzRGF0YVBvb2wucG9wKCkgfHwgbmV3IFdlYkdMR3JhcGhpY3NEYXRhKHdlYkdMLmdsKTtcbiAgICAgICAgICAgIHdlYkdMRGF0YS5tb2RlID0gdHlwZTtcbiAgICAgICAgICAgIHdlYkdMLmRhdGEucHVzaCh3ZWJHTERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2ViR0xEYXRhLmRpcnR5ID0gdHJ1ZTtcblxuICAgIHJldHVybiB3ZWJHTERhdGE7XG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIHJlY3RhbmdsZSB0byBkcmF3XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllc1xuICogQHBhcmFtIHdlYkdMRGF0YSB7b2JqZWN0fSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHdlYkdMLXNwZWNpZmljIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSB0aGlzIHNoYXBlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmJ1aWxkUmVjdGFuZ2xlID0gZnVuY3Rpb24gKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKVxue1xuICAgIC8vIC0tLSAvL1xuICAgIC8vIG5lZWQgdG8gY29udmVydCBwb2ludHMgdG8gYSBuaWNlIHJlZ3VsYXIgZGF0YVxuICAgIC8vXG4gICAgdmFyIHJlY3REYXRhID0gZ3JhcGhpY3NEYXRhLnNoYXBlO1xuICAgIHZhciB4ID0gcmVjdERhdGEueDtcbiAgICB2YXIgeSA9IHJlY3REYXRhLnk7XG4gICAgdmFyIHdpZHRoID0gcmVjdERhdGEud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHJlY3REYXRhLmhlaWdodDtcblxuICAgIGlmIChncmFwaGljc0RhdGEuZmlsbClcbiAgICB7XG4gICAgICAgIHZhciBjb2xvciA9IHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3NEYXRhLmZpbGxDb2xvcik7XG4gICAgICAgIHZhciBhbHBoYSA9IGdyYXBoaWNzRGF0YS5maWxsQWxwaGE7XG5cbiAgICAgICAgdmFyIHIgPSBjb2xvclswXSAqIGFscGhhO1xuICAgICAgICB2YXIgZyA9IGNvbG9yWzFdICogYWxwaGE7XG4gICAgICAgIHZhciBiID0gY29sb3JbMl0gKiBhbHBoYTtcblxuICAgICAgICB2YXIgdmVydHMgPSB3ZWJHTERhdGEucG9pbnRzO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IHdlYkdMRGF0YS5pbmRpY2VzO1xuXG4gICAgICAgIHZhciB2ZXJ0UG9zID0gdmVydHMubGVuZ3RoLzY7XG5cbiAgICAgICAgLy8gc3RhcnRcbiAgICAgICAgdmVydHMucHVzaCh4LCB5KTtcbiAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgdmVydHMucHVzaCh4ICsgd2lkdGgsIHkpO1xuICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICB2ZXJ0cy5wdXNoKHggLCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgdmVydHMucHVzaCh4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAvLyBpbnNlcnQgMiBkZWFkIHRyaWFuZ2xlcy4uXG4gICAgICAgIGluZGljZXMucHVzaCh2ZXJ0UG9zLCB2ZXJ0UG9zLCB2ZXJ0UG9zKzEsIHZlcnRQb3MrMiwgdmVydFBvcyszLCB2ZXJ0UG9zKzMpO1xuICAgIH1cblxuICAgIGlmIChncmFwaGljc0RhdGEubGluZVdpZHRoKVxuICAgIHtcbiAgICAgICAgdmFyIHRlbXBQb2ludHMgPSBncmFwaGljc0RhdGEucG9pbnRzO1xuXG4gICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMgPSBbeCwgeSxcbiAgICAgICAgICAgICAgICAgIHggKyB3aWR0aCwgeSxcbiAgICAgICAgICAgICAgICAgIHggKyB3aWR0aCwgeSArIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgIHgsIHkgKyBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICB4LCB5XTtcblxuXG4gICAgICAgIHRoaXMuYnVpbGRMaW5lKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKTtcblxuICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzID0gdGVtcFBvaW50cztcbiAgICB9XG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIHJvdW5kZWQgcmVjdGFuZ2xlIHRvIGRyYXdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gd2ViR0xEYXRhIHtvYmplY3R9IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgd2ViR0wtc3BlY2lmaWMgaW5mb3JtYXRpb24gdG8gY3JlYXRlIHRoaXMgc2hhcGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuYnVpbGRSb3VuZGVkUmVjdGFuZ2xlID0gZnVuY3Rpb24gKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKVxue1xuICAgIHZhciBycmVjdERhdGEgPSBncmFwaGljc0RhdGEuc2hhcGU7XG4gICAgdmFyIHggPSBycmVjdERhdGEueDtcbiAgICB2YXIgeSA9IHJyZWN0RGF0YS55O1xuICAgIHZhciB3aWR0aCA9IHJyZWN0RGF0YS53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gcnJlY3REYXRhLmhlaWdodDtcblxuICAgIHZhciByYWRpdXMgPSBycmVjdERhdGEucmFkaXVzO1xuXG4gICAgdmFyIHJlY1BvaW50cyA9IFtdO1xuICAgIHJlY1BvaW50cy5wdXNoKHgsIHkgKyByYWRpdXMpO1xuICAgIHJlY1BvaW50cyA9IHJlY1BvaW50cy5jb25jYXQodGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZSh4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzLCB4LCB5ICsgaGVpZ2h0LCB4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KSk7XG4gICAgcmVjUG9pbnRzID0gcmVjUG9pbnRzLmNvbmNhdCh0aGlzLnF1YWRyYXRpY0JlemllckN1cnZlKHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpKTtcbiAgICByZWNQb2ludHMgPSByZWNQb2ludHMuY29uY2F0KHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmUoeCArIHdpZHRoLCB5ICsgcmFkaXVzLCB4ICsgd2lkdGgsIHksIHggKyB3aWR0aCAtIHJhZGl1cywgeSkpO1xuICAgIHJlY1BvaW50cyA9IHJlY1BvaW50cy5jb25jYXQodGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZSh4ICsgcmFkaXVzLCB5LCB4LCB5LCB4LCB5ICsgcmFkaXVzKSk7XG5cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmZpbGwpXG4gICAge1xuICAgICAgICB2YXIgY29sb3IgPSB1dGlscy5oZXgycmdiKGdyYXBoaWNzRGF0YS5maWxsQ29sb3IpO1xuICAgICAgICB2YXIgYWxwaGEgPSBncmFwaGljc0RhdGEuZmlsbEFscGhhO1xuXG4gICAgICAgIHZhciByID0gY29sb3JbMF0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGcgPSBjb2xvclsxXSAqIGFscGhhO1xuICAgICAgICB2YXIgYiA9IGNvbG9yWzJdICogYWxwaGE7XG5cbiAgICAgICAgdmFyIHZlcnRzID0gd2ViR0xEYXRhLnBvaW50cztcbiAgICAgICAgdmFyIGluZGljZXMgPSB3ZWJHTERhdGEuaW5kaWNlcztcblxuICAgICAgICB2YXIgdmVjUG9zID0gdmVydHMubGVuZ3RoLzY7XG5cbiAgICAgICAgLy9UT0RPIHVzZSB0aGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBib3gvZWFyY3V0XG4gICAgICAgIHZhciB0cmlhbmdsZXMgPSB1dGlscy5Qb2x5Sy5Ucmlhbmd1bGF0ZShyZWNQb2ludHMpO1xuXG4gICAgICAgIC8vXG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdHJpYW5nbGVzLmxlbmd0aDsgaSs9MylcbiAgICAgICAge1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpXSArIHZlY1Bvcyk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2ldICsgdmVjUG9zKTtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaSsxXSArIHZlY1Bvcyk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2krMl0gKyB2ZWNQb3MpO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpKzJdICsgdmVjUG9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZWNQb2ludHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gocmVjUG9pbnRzW2ldLCByZWNQb2ludHNbKytpXSwgciwgZywgYiwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5saW5lV2lkdGgpXG4gICAge1xuICAgICAgICB2YXIgdGVtcFBvaW50cyA9IGdyYXBoaWNzRGF0YS5wb2ludHM7XG5cbiAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cyA9IHJlY1BvaW50cztcblxuICAgICAgICB0aGlzLmJ1aWxkTGluZShncmFwaGljc0RhdGEsIHdlYkdMRGF0YSk7XG5cbiAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cyA9IHRlbXBQb2ludHM7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHBvaW50cyBmb3IgYSBxdWFkcmF0aWMgYmV6aWVyIGN1cnZlLiAoaGVscGVyIGZ1bmN0aW9uLi4pXG4gKiBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg1MDk3L2hvdy1kby1pLWltcGxlbWVudC1hLWJlemllci1jdXJ2ZS1pbi1jXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBmcm9tWCB7bnVtYmVyfSBPcmlnaW4gcG9pbnQgeFxuICogQHBhcmFtIGZyb21ZIHtudW1iZXJ9IE9yaWdpbiBwb2ludCB4XG4gKiBAcGFyYW0gY3BYIHtudW1iZXJ9IENvbnRyb2wgcG9pbnQgeFxuICogQHBhcmFtIGNwWSB7bnVtYmVyfSBDb250cm9sIHBvaW50IHlcbiAqIEBwYXJhbSB0b1gge251bWJlcn0gRGVzdGluYXRpb24gcG9pbnQgeFxuICogQHBhcmFtIHRvWSB7bnVtYmVyfSBEZXN0aW5hdGlvbiBwb2ludCB5XG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gYW4gYXJyYXkgb2YgcG9pbnRzXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLnF1YWRyYXRpY0JlemllckN1cnZlID0gZnVuY3Rpb24gKGZyb21YLCBmcm9tWSwgY3BYLCBjcFksIHRvWCwgdG9ZKVxue1xuXG4gICAgdmFyIHhhLFxuICAgICAgICB5YSxcbiAgICAgICAgeGIsXG4gICAgICAgIHliLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBuID0gMjAsXG4gICAgICAgIHBvaW50cyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0UHQobjEgLCBuMiwgcGVyYykge1xuICAgICAgICB2YXIgZGlmZiA9IG4yIC0gbjE7XG5cbiAgICAgICAgcmV0dXJuIG4xICsgKCBkaWZmICogcGVyYyApO1xuICAgIH1cblxuICAgIHZhciBqID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBuOyBpKysgKSB7XG4gICAgICAgIGogPSBpIC8gbjtcblxuICAgICAgICAvLyBUaGUgR3JlZW4gTGluZVxuICAgICAgICB4YSA9IGdldFB0KCBmcm9tWCAsIGNwWCAsIGogKTtcbiAgICAgICAgeWEgPSBnZXRQdCggZnJvbVkgLCBjcFkgLCBqICk7XG4gICAgICAgIHhiID0gZ2V0UHQoIGNwWCAsIHRvWCAsIGogKTtcbiAgICAgICAgeWIgPSBnZXRQdCggY3BZICwgdG9ZICwgaiApO1xuXG4gICAgICAgIC8vIFRoZSBCbGFjayBEb3RcbiAgICAgICAgeCA9IGdldFB0KCB4YSAsIHhiICwgaiApO1xuICAgICAgICB5ID0gZ2V0UHQoIHlhICwgeWIgLCBqICk7XG5cbiAgICAgICAgcG9pbnRzLnB1c2goeCwgeSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIGNpcmNsZSB0byBkcmF3XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IHRvIGRyYXdcbiAqIEBwYXJhbSB3ZWJHTERhdGEge29iamVjdH0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSB3ZWJHTC1zcGVjaWZpYyBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhpcyBzaGFwZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5idWlsZENpcmNsZSA9IGZ1bmN0aW9uIChncmFwaGljc0RhdGEsIHdlYkdMRGF0YSlcbntcbiAgICAvLyBuZWVkIHRvIGNvbnZlcnQgcG9pbnRzIHRvIGEgbmljZSByZWd1bGFyIGRhdGFcbiAgICB2YXIgY2lyY2xlRGF0YSA9IGdyYXBoaWNzRGF0YS5zaGFwZTtcbiAgICB2YXIgeCA9IGNpcmNsZURhdGEueDtcbiAgICB2YXIgeSA9IGNpcmNsZURhdGEueTtcbiAgICB2YXIgd2lkdGg7XG4gICAgdmFyIGhlaWdodDtcblxuICAgIC8vIFRPRE8gLSBiaXQgaGFja3k/P1xuICAgIGlmIChncmFwaGljc0RhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkNJUkMpXG4gICAge1xuICAgICAgICB3aWR0aCA9IGNpcmNsZURhdGEucmFkaXVzO1xuICAgICAgICBoZWlnaHQgPSBjaXJjbGVEYXRhLnJhZGl1cztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgd2lkdGggPSBjaXJjbGVEYXRhLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBjaXJjbGVEYXRhLmhlaWdodDtcbiAgICB9XG5cbiAgICB2YXIgdG90YWxTZWdzID0gNDA7XG4gICAgdmFyIHNlZyA9IChNYXRoLlBJICogMikgLyB0b3RhbFNlZ3MgO1xuXG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5maWxsKVxuICAgIHtcbiAgICAgICAgdmFyIGNvbG9yID0gdXRpbHMuaGV4MnJnYihncmFwaGljc0RhdGEuZmlsbENvbG9yKTtcbiAgICAgICAgdmFyIGFscGhhID0gZ3JhcGhpY3NEYXRhLmZpbGxBbHBoYTtcblxuICAgICAgICB2YXIgciA9IGNvbG9yWzBdICogYWxwaGE7XG4gICAgICAgIHZhciBnID0gY29sb3JbMV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGIgPSBjb2xvclsyXSAqIGFscGhhO1xuXG4gICAgICAgIHZhciB2ZXJ0cyA9IHdlYkdMRGF0YS5wb2ludHM7XG4gICAgICAgIHZhciBpbmRpY2VzID0gd2ViR0xEYXRhLmluZGljZXM7XG5cbiAgICAgICAgdmFyIHZlY1BvcyA9IHZlcnRzLmxlbmd0aC82O1xuXG4gICAgICAgIGluZGljZXMucHVzaCh2ZWNQb3MpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b3RhbFNlZ3MgKyAxIDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHgseSwgciwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHggKyBNYXRoLnNpbihzZWcgKiBpKSAqIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICB5ICsgTWF0aC5jb3Moc2VnICogaSkgKiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgIHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHZlY1BvcysrLCB2ZWNQb3MrKyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRpY2VzLnB1c2godmVjUG9zLTEpO1xuICAgIH1cblxuICAgIGlmIChncmFwaGljc0RhdGEubGluZVdpZHRoKVxuICAgIHtcbiAgICAgICAgdmFyIHRlbXBQb2ludHMgPSBncmFwaGljc0RhdGEucG9pbnRzO1xuXG4gICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG90YWxTZWdzICsgMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzLnB1c2goeCArIE1hdGguc2luKHNlZyAqIGkpICogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSArIE1hdGguY29zKHNlZyAqIGkpICogaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRMaW5lKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKTtcblxuICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzID0gdGVtcFBvaW50cztcbiAgICB9XG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIGxpbmUgdG8gZHJhd1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB3ZWJHTERhdGEge29iamVjdH0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSB3ZWJHTC1zcGVjaWZpYyBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhpcyBzaGFwZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5idWlsZExpbmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpXG57XG4gICAgLy8gVE9ETyBPUFRJTUlTRSFcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBvaW50cyA9IGdyYXBoaWNzRGF0YS5wb2ludHM7XG5cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgbGluZSB3aWR0aCBpcyBhbiBvZGQgbnVtYmVyIGFkZCAwLjUgdG8gYWxpZ24gdG8gYSB3aG9sZSBwaXhlbFxuICAgIGlmIChncmFwaGljc0RhdGEubGluZVdpZHRoJTIpXG4gICAge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwb2ludHNbaV0gKz0gMC41O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZpcnN0IGFuZCBsYXN0IHBvaW50Li4gZmlndXJlIG91dCB0aGUgbWlkZGxlIVxuICAgIHZhciBmaXJzdFBvaW50ID0gbmV3IG1hdGguUG9pbnQocG9pbnRzWzBdLCBwb2ludHNbMV0pO1xuICAgIHZhciBsYXN0UG9pbnQgPSBuZXcgbWF0aC5Qb2ludChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdLCBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblxuICAgIC8vIGlmIHRoZSBmaXJzdCBwb2ludCBpcyB0aGUgbGFzdCBwb2ludCAtIGdvbm5hIGhhdmUgaXNzdWVzIDopXG4gICAgaWYgKGZpcnN0UG9pbnQueCA9PT0gbGFzdFBvaW50LnggJiYgZmlyc3RQb2ludC55ID09PSBsYXN0UG9pbnQueSlcbiAgICB7XG4gICAgICAgIC8vIG5lZWQgdG8gY2xvbmUgYXMgd2UgYXJlIGdvaW5nIHRvIHNsaWdodGx5IG1vZGlmeSB0aGUgc2hhcGUuLlxuICAgICAgICBwb2ludHMgPSBwb2ludHMuc2xpY2UoKTtcblxuICAgICAgICBwb2ludHMucG9wKCk7XG4gICAgICAgIHBvaW50cy5wb3AoKTtcblxuICAgICAgICBsYXN0UG9pbnQgPSBuZXcgbWF0aC5Qb2ludChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdLCBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgICB2YXIgbWlkUG9pbnRYID0gbGFzdFBvaW50LnggKyAoZmlyc3RQb2ludC54IC0gbGFzdFBvaW50LngpICowLjU7XG4gICAgICAgIHZhciBtaWRQb2ludFkgPSBsYXN0UG9pbnQueSArIChmaXJzdFBvaW50LnkgLSBsYXN0UG9pbnQueSkgKjAuNTtcblxuICAgICAgICBwb2ludHMudW5zaGlmdChtaWRQb2ludFgsIG1pZFBvaW50WSk7XG4gICAgICAgIHBvaW50cy5wdXNoKG1pZFBvaW50WCwgbWlkUG9pbnRZKTtcbiAgICB9XG5cbiAgICB2YXIgdmVydHMgPSB3ZWJHTERhdGEucG9pbnRzO1xuICAgIHZhciBpbmRpY2VzID0gd2ViR0xEYXRhLmluZGljZXM7XG4gICAgdmFyIGxlbmd0aCA9IHBvaW50cy5sZW5ndGggLyAyO1xuICAgIHZhciBpbmRleENvdW50ID0gcG9pbnRzLmxlbmd0aDtcbiAgICB2YXIgaW5kZXhTdGFydCA9IHZlcnRzLmxlbmd0aC82O1xuXG4gICAgLy8gRFJBVyB0aGUgTGluZVxuICAgIHZhciB3aWR0aCA9IGdyYXBoaWNzRGF0YS5saW5lV2lkdGggLyAyO1xuXG4gICAgLy8gc29ydCBjb2xvclxuICAgIHZhciBjb2xvciA9IHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3NEYXRhLmxpbmVDb2xvcik7XG4gICAgdmFyIGFscGhhID0gZ3JhcGhpY3NEYXRhLmxpbmVBbHBoYTtcbiAgICB2YXIgciA9IGNvbG9yWzBdICogYWxwaGE7XG4gICAgdmFyIGcgPSBjb2xvclsxXSAqIGFscGhhO1xuICAgIHZhciBiID0gY29sb3JbMl0gKiBhbHBoYTtcblxuICAgIHZhciBweCwgcHksIHAxeCwgcDF5LCBwMngsIHAyeSwgcDN4LCBwM3k7XG4gICAgdmFyIHBlcnB4LCBwZXJweSwgcGVycDJ4LCBwZXJwMnksIHBlcnAzeCwgcGVycDN5O1xuICAgIHZhciBhMSwgYjEsIGMxLCBhMiwgYjIsIGMyO1xuICAgIHZhciBkZW5vbSwgcGRpc3QsIGRpc3Q7XG5cbiAgICBwMXggPSBwb2ludHNbMF07XG4gICAgcDF5ID0gcG9pbnRzWzFdO1xuXG4gICAgcDJ4ID0gcG9pbnRzWzJdO1xuICAgIHAyeSA9IHBvaW50c1szXTtcblxuICAgIHBlcnB4ID0gLShwMXkgLSBwMnkpO1xuICAgIHBlcnB5ID0gIHAxeCAtIHAyeDtcblxuICAgIGRpc3QgPSBNYXRoLnNxcnQocGVycHgqcGVycHggKyBwZXJweSpwZXJweSk7XG5cbiAgICBwZXJweCAvPSBkaXN0O1xuICAgIHBlcnB5IC89IGRpc3Q7XG4gICAgcGVycHggKj0gd2lkdGg7XG4gICAgcGVycHkgKj0gd2lkdGg7XG5cbiAgICAvLyBzdGFydFxuICAgIHZlcnRzLnB1c2gocDF4IC0gcGVycHggLCBwMXkgLSBwZXJweSxcbiAgICAgICAgICAgICAgICByLCBnLCBiLCBhbHBoYSk7XG5cbiAgICB2ZXJ0cy5wdXNoKHAxeCArIHBlcnB4ICwgcDF5ICsgcGVycHksXG4gICAgICAgICAgICAgICAgciwgZywgYiwgYWxwaGEpO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGxlbmd0aC0xOyBpKyspXG4gICAge1xuICAgICAgICBwMXggPSBwb2ludHNbKGktMSkqMl07XG4gICAgICAgIHAxeSA9IHBvaW50c1soaS0xKSoyICsgMV07XG5cbiAgICAgICAgcDJ4ID0gcG9pbnRzWyhpKSoyXTtcbiAgICAgICAgcDJ5ID0gcG9pbnRzWyhpKSoyICsgMV07XG5cbiAgICAgICAgcDN4ID0gcG9pbnRzWyhpKzEpKjJdO1xuICAgICAgICBwM3kgPSBwb2ludHNbKGkrMSkqMiArIDFdO1xuXG4gICAgICAgIHBlcnB4ID0gLShwMXkgLSBwMnkpO1xuICAgICAgICBwZXJweSA9IHAxeCAtIHAyeDtcblxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KHBlcnB4KnBlcnB4ICsgcGVycHkqcGVycHkpO1xuICAgICAgICBwZXJweCAvPSBkaXN0O1xuICAgICAgICBwZXJweSAvPSBkaXN0O1xuICAgICAgICBwZXJweCAqPSB3aWR0aDtcbiAgICAgICAgcGVycHkgKj0gd2lkdGg7XG5cbiAgICAgICAgcGVycDJ4ID0gLShwMnkgLSBwM3kpO1xuICAgICAgICBwZXJwMnkgPSBwMnggLSBwM3g7XG5cbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChwZXJwMngqcGVycDJ4ICsgcGVycDJ5KnBlcnAyeSk7XG4gICAgICAgIHBlcnAyeCAvPSBkaXN0O1xuICAgICAgICBwZXJwMnkgLz0gZGlzdDtcbiAgICAgICAgcGVycDJ4ICo9IHdpZHRoO1xuICAgICAgICBwZXJwMnkgKj0gd2lkdGg7XG5cbiAgICAgICAgYTEgPSAoLXBlcnB5ICsgcDF5KSAtICgtcGVycHkgKyBwMnkpO1xuICAgICAgICBiMSA9ICgtcGVycHggKyBwMngpIC0gKC1wZXJweCArIHAxeCk7XG4gICAgICAgIGMxID0gKC1wZXJweCArIHAxeCkgKiAoLXBlcnB5ICsgcDJ5KSAtICgtcGVycHggKyBwMngpICogKC1wZXJweSArIHAxeSk7XG4gICAgICAgIGEyID0gKC1wZXJwMnkgKyBwM3kpIC0gKC1wZXJwMnkgKyBwMnkpO1xuICAgICAgICBiMiA9ICgtcGVycDJ4ICsgcDJ4KSAtICgtcGVycDJ4ICsgcDN4KTtcbiAgICAgICAgYzIgPSAoLXBlcnAyeCArIHAzeCkgKiAoLXBlcnAyeSArIHAyeSkgLSAoLXBlcnAyeCArIHAyeCkgKiAoLXBlcnAyeSArIHAzeSk7XG5cbiAgICAgICAgZGVub20gPSBhMSpiMiAtIGEyKmIxO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkZW5vbSkgPCAwLjEgKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGRlbm9tKz0xMC4xO1xuICAgICAgICAgICAgdmVydHMucHVzaChwMnggLSBwZXJweCAsIHAyeSAtIHBlcnB5LFxuICAgICAgICAgICAgICAgIHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgdmVydHMucHVzaChwMnggKyBwZXJweCAsIHAyeSArIHBlcnB5LFxuICAgICAgICAgICAgICAgIHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBweCA9IChiMSpjMiAtIGIyKmMxKS9kZW5vbTtcbiAgICAgICAgcHkgPSAoYTIqYzEgLSBhMSpjMikvZGVub207XG5cblxuICAgICAgICBwZGlzdCA9IChweCAtcDJ4KSAqIChweCAtcDJ4KSArIChweSAtcDJ5KSArIChweSAtcDJ5KTtcblxuXG4gICAgICAgIGlmIChwZGlzdCA+IDE0MCAqIDE0MClcbiAgICAgICAge1xuICAgICAgICAgICAgcGVycDN4ID0gcGVycHggLSBwZXJwMng7XG4gICAgICAgICAgICBwZXJwM3kgPSBwZXJweSAtIHBlcnAyeTtcblxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChwZXJwM3gqcGVycDN4ICsgcGVycDN5KnBlcnAzeSk7XG4gICAgICAgICAgICBwZXJwM3ggLz0gZGlzdDtcbiAgICAgICAgICAgIHBlcnAzeSAvPSBkaXN0O1xuICAgICAgICAgICAgcGVycDN4ICo9IHdpZHRoO1xuICAgICAgICAgICAgcGVycDN5ICo9IHdpZHRoO1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHAyeCAtIHBlcnAzeCwgcDJ5IC1wZXJwM3kpO1xuICAgICAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2gocDJ4ICsgcGVycDN4LCBwMnkgK3BlcnAzeSk7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgdmVydHMucHVzaChwMnggLSBwZXJwM3gsIHAyeSAtcGVycDN5KTtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICBpbmRleENvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2gocHggLCBweSk7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgdmVydHMucHVzaChwMnggLSAocHgtcDJ4KSwgcDJ5IC0gKHB5IC0gcDJ5KSk7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAxeCA9IHBvaW50c1sobGVuZ3RoLTIpKjJdO1xuICAgIHAxeSA9IHBvaW50c1sobGVuZ3RoLTIpKjIgKyAxXTtcblxuICAgIHAyeCA9IHBvaW50c1sobGVuZ3RoLTEpKjJdO1xuICAgIHAyeSA9IHBvaW50c1sobGVuZ3RoLTEpKjIgKyAxXTtcblxuICAgIHBlcnB4ID0gLShwMXkgLSBwMnkpO1xuICAgIHBlcnB5ID0gcDF4IC0gcDJ4O1xuXG4gICAgZGlzdCA9IE1hdGguc3FydChwZXJweCpwZXJweCArIHBlcnB5KnBlcnB5KTtcbiAgICBwZXJweCAvPSBkaXN0O1xuICAgIHBlcnB5IC89IGRpc3Q7XG4gICAgcGVycHggKj0gd2lkdGg7XG4gICAgcGVycHkgKj0gd2lkdGg7XG5cbiAgICB2ZXJ0cy5wdXNoKHAyeCAtIHBlcnB4ICwgcDJ5IC0gcGVycHkpO1xuICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgdmVydHMucHVzaChwMnggKyBwZXJweCAsIHAyeSArIHBlcnB5KTtcbiAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgIGluZGljZXMucHVzaChpbmRleFN0YXJ0KTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBpbmRleENvdW50OyBpKyspXG4gICAge1xuICAgICAgICBpbmRpY2VzLnB1c2goaW5kZXhTdGFydCsrKTtcbiAgICB9XG5cbiAgICBpbmRpY2VzLnB1c2goaW5kZXhTdGFydC0xKTtcbn07XG5cbi8qKlxuICogQnVpbGRzIGEgY29tcGxleCBwb2x5Z29uIHRvIGRyYXdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gd2ViR0xEYXRhIHtvYmplY3R9IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgd2ViR0wtc3BlY2lmaWMgaW5mb3JtYXRpb24gdG8gY3JlYXRlIHRoaXMgc2hhcGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuYnVpbGRDb21wbGV4UG9seSA9IGZ1bmN0aW9uIChncmFwaGljc0RhdGEsIHdlYkdMRGF0YSlcbntcbiAgICAvL1RPRE8gLSBubyBuZWVkIHRvIGNvcHkgdGhpcyBhcyBpdCBnZXRzIHR1cm5lZCBpbnRvIGEgRkxvYXQzMkFycmF5IGFueXdheXMuLlxuICAgIHZhciBwb2ludHMgPSBncmFwaGljc0RhdGEucG9pbnRzLnNsaWNlKCk7XG5cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDYpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZpcnN0IGFuZCBsYXN0IHBvaW50Li4gZmlndXJlIG91dCB0aGUgbWlkZGxlIVxuICAgIHZhciBpbmRpY2VzID0gd2ViR0xEYXRhLmluZGljZXM7XG4gICAgd2ViR0xEYXRhLnBvaW50cyA9IHBvaW50cztcbiAgICB3ZWJHTERhdGEuYWxwaGEgPSBncmFwaGljc0RhdGEuZmlsbEFscGhhO1xuICAgIHdlYkdMRGF0YS5jb2xvciA9IHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3NEYXRhLmZpbGxDb2xvcik7XG5cbiAgICAvLyBjYWxjbGF0ZSB0aGUgYm91bmRzLi5cbiAgICB2YXIgbWluWCA9IEluZmluaXR5O1xuICAgIHZhciBtYXhYID0gLUluZmluaXR5O1xuXG4gICAgdmFyIG1pblkgPSBJbmZpbml0eTtcbiAgICB2YXIgbWF4WSA9IC1JbmZpbml0eTtcblxuICAgIHZhciB4LHk7XG5cbiAgICAvLyBnZXQgc2l6ZS4uXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKz0yKVxuICAgIHtcbiAgICAgICAgeCA9IHBvaW50c1tpXTtcbiAgICAgICAgeSA9IHBvaW50c1tpKzFdO1xuXG4gICAgICAgIG1pblggPSB4IDwgbWluWCA/IHggOiBtaW5YO1xuICAgICAgICBtYXhYID0geCA+IG1heFggPyB4IDogbWF4WDtcblxuICAgICAgICBtaW5ZID0geSA8IG1pblkgPyB5IDogbWluWTtcbiAgICAgICAgbWF4WSA9IHkgPiBtYXhZID8geSA6IG1heFk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGEgcXVhZCB0byB0aGUgZW5kIGNvcyB0aGVyZSBpcyBubyBwb2ludCBtYWtpbmcgYW5vdGhlciBidWZmZXIhXG4gICAgcG9pbnRzLnB1c2gobWluWCwgbWluWSxcbiAgICAgICAgICAgICAgICBtYXhYLCBtaW5ZLFxuICAgICAgICAgICAgICAgIG1heFgsIG1heFksXG4gICAgICAgICAgICAgICAgbWluWCwgbWF4WSk7XG5cbiAgICAvLyBwdXNoIGEgcXVhZCBvbnRvIHRoZSBlbmQuLlxuXG4gICAgLy9UT0RPIC0gdGhpcyBhaW50IG5lZWRlZCFcbiAgICB2YXIgbGVuZ3RoID0gcG9pbnRzLmxlbmd0aCAvIDI7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKCBpICk7XG4gICAgfVxuXG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIHBvbHlnb24gdG8gZHJhd1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB3ZWJHTERhdGEge29iamVjdH0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSB3ZWJHTC1zcGVjaWZpYyBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhpcyBzaGFwZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5idWlsZFBvbHkgPSBmdW5jdGlvbiAoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpXG57XG4gICAgdmFyIHBvaW50cyA9IGdyYXBoaWNzRGF0YS5wb2ludHM7XG5cbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8IDYpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2V0IGZpcnN0IGFuZCBsYXN0IHBvaW50Li4gZmlndXJlIG91dCB0aGUgbWlkZGxlIVxuICAgIHZhciB2ZXJ0cyA9IHdlYkdMRGF0YS5wb2ludHM7XG4gICAgdmFyIGluZGljZXMgPSB3ZWJHTERhdGEuaW5kaWNlcztcblxuICAgIHZhciBsZW5ndGggPSBwb2ludHMubGVuZ3RoIC8gMjtcblxuICAgIC8vIHNvcnQgY29sb3JcbiAgICB2YXIgY29sb3IgPSB1dGlscy5oZXgycmdiKGdyYXBoaWNzRGF0YS5maWxsQ29sb3IpO1xuICAgIHZhciBhbHBoYSA9IGdyYXBoaWNzRGF0YS5maWxsQWxwaGE7XG4gICAgdmFyIHIgPSBjb2xvclswXSAqIGFscGhhO1xuICAgIHZhciBnID0gY29sb3JbMV0gKiBhbHBoYTtcbiAgICB2YXIgYiA9IGNvbG9yWzJdICogYWxwaGE7XG5cbiAgICB2YXIgdHJpYW5nbGVzID0gdXRpbHMuUG9seUsuVHJpYW5ndWxhdGUocG9pbnRzKTtcblxuICAgIGlmICghdHJpYW5nbGVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmVydFBvcyA9IHZlcnRzLmxlbmd0aCAvIDY7XG5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdHJpYW5nbGVzLmxlbmd0aDsgaSs9MylcbiAgICB7XG4gICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaV0gKyB2ZXJ0UG9zKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpXSArIHZlcnRQb3MpO1xuICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2krMV0gKyB2ZXJ0UG9zKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpKzJdICt2ZXJ0UG9zKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpKzJdICsgdmVydFBvcyk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmVydHMucHVzaChwb2ludHNbaSAqIDJdLCBwb2ludHNbaSAqIDIgKyAxXSxcbiAgICAgICAgICAgICAgICAgICByLCBnLCBiLCBhbHBoYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuIiwiLyoqXG4gKiBBbiBvYmplY3QgY29udGFpbmluZyBXZWJHTCBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGJlIHVzZWQgYnkgdGhlIFdlYkdMIHJlbmRlcmVyXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIGdsIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IHRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gV2ViR0xHcmFwaGljc0RhdGEoZ2wpIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQG1lbWJlciB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fVxuICAgICAqL1xuICAgIHRoaXMuZ2wgPSBnbDtcblxuICAgIC8vVE9ETyBkb2VzIHRoaXMgbmVlZCB0byBiZSBzcGxpdCBiZWZvcmUgdXBsb2Rpbmc/P1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGNvbG9yIGNvbXBvbmVudHMgKHIsZyxiKVxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY29sb3IgPSBbMCwwLDBdOyAvLyBjb2xvciBzcGxpdCFcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHBvaW50cyB0byBkcmF3XG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5wb2ludHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRpY2VzIG9mIHRoZSB2ZXJ0aWNlc1xuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIGJ1ZmZlclxuICAgICAqIEBtZW1iZXIge1dlYkdMQnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggYnVmZmVyXG4gICAgICogQG1lbWJlciB7V2ViR0xCdWZmZXJ9XG4gICAgICovXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLyoqXG4gICAgICogdG9kbyBAYWx2aW5cbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5tb2RlID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbHBoYSBvZiB0aGUgZ3JhcGhpY3NcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbHBoYSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgZ3JhcGhpY3MgaXMgZGlydHkgb3Igbm90XG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbn1cblxuV2ViR0xHcmFwaGljc0RhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV2ViR0xHcmFwaGljc0RhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYkdMR3JhcGhpY3NEYXRhO1xuXG4vKipcbiAqIFJlc2V0cyB0aGUgdmVydGljZXMgYW5kIHRoZSBpbmRpY2VzXG4gKi9cbldlYkdMR3JhcGhpY3NEYXRhLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xufTtcblxuLyoqXG4gKiBCaW5kcyB0aGUgYnVmZmVycyBhbmQgdXBsb2FkcyB0aGUgZGF0YVxuICovXG5XZWJHTEdyYXBoaWNzRGF0YS5wcm90b3R5cGUudXBsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbi8vICAgIHRoaXMubGFzdEluZGV4ID0gZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhLmxlbmd0aDtcbiAgICB0aGlzLmdsUG9pbnRzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBvaW50cyk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmdsUG9pbnRzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB0aGlzLmdsSW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheSh0aGlzLmluZGljZXMpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5nbEluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG4iLCIvKipcbiAqIEBmaWxlICAgICAgICBNYWluIGV4cG9ydCBvZiB0aGUgUElYSSBjb3JlIGxpYnJhcnlcbiAqIEBhdXRob3IgICAgICBNYXQgR3JvdmVzIDxtYXRAZ29vZGJveWRpZ2l0YWwuY29tPlxuICogQGNvcHlyaWdodCAgIDIwMTMtMjAxNSBHb29kQm95RGlnaXRhbFxuICogQGxpY2Vuc2UgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vR29vZEJveURpZ2l0YWwvcGl4aS5qcy9ibG9iL21hc3Rlci9MSUNFTlNFfE1JVCBMaWNlbnNlfVxuICovXG5cbi8qKlxuICogQG5hbWVzcGFjZSBQSVhJXG4gKi9cbnZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gdXRpbHNcbiAgICB1dGlsczogcmVxdWlyZSgnLi91dGlscycpLFxuICAgIG1hdGg6IHJlcXVpcmUoJy4vbWF0aCcpLFxuICAgIENPTlNUOiByZXF1aXJlKCcuL2NvbnN0JyksXG5cbiAgICAvLyBkaXNwbGF5XG4gICAgRGlzcGxheU9iamVjdDogICAgICAgICAgcmVxdWlyZSgnLi9kaXNwbGF5L0Rpc3BsYXlPYmplY3QnKSxcbiAgICBDb250YWluZXI6ICAgICAgICAgICAgICByZXF1aXJlKCcuL2Rpc3BsYXkvQ29udGFpbmVyJyksXG5cbiAgICAvLyBsZWdhY3kuLlxuICAgIFN0YWdlOiAgICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vZGlzcGxheS9Db250YWluZXInKSxcbiAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyOiByZXF1aXJlKCcuL2Rpc3BsYXkvQ29udGFpbmVyJyksXG5cbiAgICBTcHJpdGU6ICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL3Nwcml0ZXMvU3ByaXRlJyksXG4gICAgUGFydGljbGVDb250YWluZXI6ICAgICAgcmVxdWlyZSgnLi9wYXJ0aWNsZXMvUGFydGljbGVDb250YWluZXInKSxcbiAgICBTcHJpdGVSZW5kZXJlcjogICAgICAgICByZXF1aXJlKCcuL3Nwcml0ZXMvd2ViZ2wvU3ByaXRlUmVuZGVyZXInKSxcbiAgICBQYXJ0aWNsZVJlbmRlcmVyOiAgICAgICByZXF1aXJlKCcuL3BhcnRpY2xlcy93ZWJnbC9QYXJ0aWNsZVJlbmRlcmVyJyksXG5cbiAgICAvLyBwcmltaXRpdmVzXG4gICAgR3JhcGhpY3M6ICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9ncmFwaGljcy9HcmFwaGljcycpLFxuICAgIEdyYXBoaWNzRGF0YTogICAgICAgICAgIHJlcXVpcmUoJy4vZ3JhcGhpY3MvR3JhcGhpY3NEYXRhJyksXG4gICAgR3JhcGhpY3NSZW5kZXJlcjogICAgICAgcmVxdWlyZSgnLi9ncmFwaGljcy93ZWJnbC9HcmFwaGljc1JlbmRlcmVyJyksXG5cbiAgICAvLyB0ZXh0dXJlc1xuICAgIFRleHR1cmU6ICAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vdGV4dHVyZXMvVGV4dHVyZScpLFxuICAgIEJhc2VUZXh0dXJlOiAgICAgICAgICAgIHJlcXVpcmUoJy4vdGV4dHVyZXMvQmFzZVRleHR1cmUnKSxcbiAgICBSZW5kZXJUZXh0dXJlOiAgICAgICAgICByZXF1aXJlKCcuL3RleHR1cmVzL1JlbmRlclRleHR1cmUnKSxcbiAgICBWaWRlb0Jhc2VUZXh0dXJlOiAgICAgICByZXF1aXJlKCcuL3RleHR1cmVzL1ZpZGVvQmFzZVRleHR1cmUnKSxcblxuICAgIC8vIHJlbmRlcmVycyAtIGNhbnZhc1xuICAgIENhbnZhc1JlbmRlcmVyOiAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NhbnZhcy9DYW52YXNSZW5kZXJlcicpLFxuICAgIENhbnZhc0dyYXBoaWNzOiAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNHcmFwaGljcycpLFxuICAgIENhbnZhc0J1ZmZlcjogICAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNCdWZmZXInKSxcblxuICAgIC8vIHJlbmRlcmVycyAtIHdlYmdsXG4gICAgV2ViR0xSZW5kZXJlcjogICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlcicpLFxuICAgIFNoYWRlck1hbmFnZXI6ICAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL1NoYWRlck1hbmFnZXInKSxcbiAgICBTaGFkZXI6ICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1NoYWRlcicpLFxuXG4gICAgLy8gZmlsdGVycyAtIHdlYmdsXG4gICAgQWJzdHJhY3RGaWx0ZXI6ICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvd2ViZ2wvZmlsdGVycy9BYnN0cmFjdEZpbHRlcicpLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGRldGVjdCB3aGljaCByZW5kZXJlciB5b3Ugc2hvdWxkIGJlIHVzaW5nLlxuICAgICAqIFdlYkdMIGlzIHRoZSBwcmVmZXJyZWQgcmVuZGVyZXIgYXMgaXQgaXMgYSBsb3QgZmFzdGVyLiBJZiB3ZWJHTCBpcyBub3Qgc3VwcG9ydGVkIGJ5XG4gICAgICogdGhlIGJyb3dzZXIgdGhlbiB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgY2FudmFzIHJlbmRlcmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2lkdGg9ODAwIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgcmVuZGVyZXJzIHZpZXdcbiAgICAgKiBAcGFyYW0gaGVpZ2h0PTYwMCB7bnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoZSByZW5kZXJlcnMgdmlld1xuICAgICAqIEBwYXJhbSBbb3B0aW9uc10ge29iamVjdH0gVGhlIG9wdGlvbmFsIHJlbmRlcmVyIHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gW29wdGlvbnMudmlld10ge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY2FudmFzIHRvIHVzZSBhcyBhIHZpZXcsIG9wdGlvbmFsXG4gICAgICogQHBhcmFtIFtvcHRpb25zLnRyYW5zcGFyZW50PWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIHRyYW5zcGFyZW50LCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHBhcmFtIFtvcHRpb25zLmFudGlhbGlhcz1mYWxzZV0ge2Jvb2xlYW59IHNldHMgYW50aWFsaWFzIChvbmx5IGFwcGxpY2FibGUgaW4gY2hyb21lIGF0IHRoZSBtb21lbnQpXG4gICAgICogQHBhcmFtIFtvcHRpb25zLnByZXNlcnZlRHJhd2luZ0J1ZmZlcj1mYWxzZV0ge2Jvb2xlYW59IGVuYWJsZXMgZHJhd2luZyBidWZmZXIgcHJlc2VydmF0aW9uLCBlbmFibGUgdGhpcyBpZiB5b3VcbiAgICAgKiAgICAgIG5lZWQgdG8gY2FsbCB0b0RhdGFVcmwgb24gdGhlIHdlYmdsIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gW29wdGlvbnMucmVzb2x1dGlvbj0xXSB7bnVtYmVyfSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyZXIsIHJldGluYSB3b3VsZCBiZSAyXG4gICAgICogQHBhcmFtIFtub1dlYkdMPWZhbHNlXSB7Ym9vbGVhbn0gcHJldmVudHMgc2VsZWN0aW9uIG9mIFdlYkdMIHJlbmRlcmVyLCBldmVuIGlmIHN1Y2ggaXMgcHJlc2VudFxuICAgICAqXG4gICAgICogQHJldHVybiB7V2ViR0xSZW5kZXJlcnxDYW52YXNSZW5kZXJlcn0gUmV0dXJucyBXZWJHTCByZW5kZXJlciBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBDYW52YXNSZW5kZXJlclxuICAgICAqL1xuICAgIGF1dG9EZXRlY3RSZW5kZXJlcjogZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMsIG5vV2ViR0wpXG4gICAge1xuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDgwMDtcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDYwMDtcblxuICAgICAgICBpZiAoIW5vV2ViR0wgJiYgY2hlY2tXZWJHTCgpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGNvcmUuV2ViR0xSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgY29yZS5DYW52YXNSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcbiAgICB9XG59O1xuXG4vLyBhZGQgY29uc3RhbnRzIHRvIGV4cG9ydFxudmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpO1xuXG5mb3IgKHZhciBjIGluIENPTlNUKSB7XG4gICAgY29yZVtjXSA9IENPTlNUW2NdO1xufVxuXG5cbnZhciBjb250ZXh0T3B0aW9ucyA9IHsgc3RlbmNpbDogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBjaGVja1dlYkdMKClcbntcbiAgICB0cnlcbiAgICB7XG4gICAgICAgIGlmICghd2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCBjb250ZXh0T3B0aW9ucykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIGNvbnRleHRPcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gISEoZ2wgJiYgZ2wuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKS5zdGVuY2lsKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwidmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xuXG4vKipcbiAqIFRoZSBwaXhpIE1hdHJpeCBjbGFzcyBhcyBhbiBvYmplY3QsIHdoaWNoIG1ha2VzIGl0IGEgbG90IGZhc3RlcixcbiAqIGhlcmUgaXMgYSByZXByZXNlbnRhdGlvbiBvZiBpdCA6XG4gKiB8IGEgfCBiIHwgdHh8XG4gKiB8IGMgfCBkIHwgdHl8XG4gKiB8IDAgfCAwIHwgMSB8XG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSS5tYXRoXG4gKi9cbmZ1bmN0aW9uIE1hdHJpeCgpXG57XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICB0aGlzLmEgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmMgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICB0aGlzLmQgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnR4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy50eSA9IDA7XG59XG5cbk1hdHJpeC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNYXRyaXg7XG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBiYXNlZCBvbiB0aGUgZ2l2ZW4gYXJyYXkuIFRoZSBFbGVtZW50IHRvIE1hdHJpeCBtYXBwaW5nIG9yZGVyIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogYSA9IGFycmF5WzBdXG4gKiBiID0gYXJyYXlbMV1cbiAqIGMgPSBhcnJheVszXVxuICogZCA9IGFycmF5WzRdXG4gKiB0eCA9IGFycmF5WzJdXG4gKiB0eSA9IGFycmF5WzVdXG4gKlxuICogQHBhcmFtIGFycmF5IHtudW1iZXJbXX0gVGhlIGFycmF5IHRoYXQgdGhlIG1hdHJpeCB3aWxsIGJlIHBvcHVsYXRlZCBmcm9tLlxuICovXG5NYXRyaXgucHJvdG90eXBlLmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnJheSlcbntcbiAgICB0aGlzLmEgPSBhcnJheVswXTtcbiAgICB0aGlzLmIgPSBhcnJheVsxXTtcbiAgICB0aGlzLmMgPSBhcnJheVszXTtcbiAgICB0aGlzLmQgPSBhcnJheVs0XTtcbiAgICB0aGlzLnR4ID0gYXJyYXlbMl07XG4gICAgdGhpcy50eSA9IGFycmF5WzVdO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGZyb20gdGhlIGN1cnJlbnQgTWF0cml4IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gdHJhbnNwb3NlIHtib29sZWFufSBXaGV0aGVyIHdlIG5lZWQgdG8gdHJhbnNwb3NlIHRoZSBtYXRyaXggb3Igbm90XG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXkgd2hpY2ggY29udGFpbnMgdGhlIG1hdHJpeFxuICovXG5NYXRyaXgucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAodHJhbnNwb3NlKVxue1xuICAgIGlmICghdGhpcy5hcnJheSlcbiAgICB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDkpO1xuICAgIH1cblxuICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG5cbiAgICBpZiAodHJhbnNwb3NlKVxuICAgIHtcbiAgICAgICAgYXJyYXlbMF0gPSB0aGlzLmE7XG4gICAgICAgIGFycmF5WzFdID0gdGhpcy5iO1xuICAgICAgICBhcnJheVsyXSA9IDA7XG4gICAgICAgIGFycmF5WzNdID0gdGhpcy5jO1xuICAgICAgICBhcnJheVs0XSA9IHRoaXMuZDtcbiAgICAgICAgYXJyYXlbNV0gPSAwO1xuICAgICAgICBhcnJheVs2XSA9IHRoaXMudHg7XG4gICAgICAgIGFycmF5WzddID0gdGhpcy50eTtcbiAgICAgICAgYXJyYXlbOF0gPSAxO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBhcnJheVswXSA9IHRoaXMuYTtcbiAgICAgICAgYXJyYXlbMV0gPSB0aGlzLmM7XG4gICAgICAgIGFycmF5WzJdID0gdGhpcy50eDtcbiAgICAgICAgYXJyYXlbM10gPSB0aGlzLmI7XG4gICAgICAgIGFycmF5WzRdID0gdGhpcy5kO1xuICAgICAgICBhcnJheVs1XSA9IHRoaXMudHk7XG4gICAgICAgIGFycmF5WzZdID0gMDtcbiAgICAgICAgYXJyYXlbN10gPSAwO1xuICAgICAgICBhcnJheVs4XSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufTtcblxuLyoqXG4gKiBHZXQgYSBuZXcgcG9zaXRpb24gd2l0aCB0aGUgY3VycmVudCB0cmFuc2Zvcm1hdGlvbiBhcHBsaWVkLlxuICogQ2FuIGJlIHVzZWQgdG8gZ28gZnJvbSBhIGNoaWxkJ3MgY29vcmRpbmF0ZSBzcGFjZSB0byB0aGUgd29ybGQgY29vcmRpbmF0ZSBzcGFjZS4gKGUuZy4gcmVuZGVyaW5nKVxuICpcbiAqIEBwYXJhbSBwb3Mge1BvaW50fSBUaGUgb3JpZ2luXG4gKiBAcGFyYW0gW25ld1Bvc10ge1BvaW50fSBUaGUgcG9pbnQgdGhhdCB0aGUgbmV3IHBvc2l0aW9uIGlzIGFzc2lnbmVkIHRvIChhbGxvd2VkIHRvIGJlIHNhbWUgYXMgaW5wdXQpXG4gKiBAcmV0dXJuIHtQb2ludH0gVGhlIG5ldyBwb2ludCwgdHJhbnNmb3JtZWQgdGhyb3VnaCB0aGlzIG1hdHJpeFxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKHBvcywgbmV3UG9zKVxue1xuICAgIG5ld1BvcyA9IG5ld1BvcyB8fCBuZXcgUG9pbnQoKTtcblxuICAgIHZhciB4ID0gcG9zLng7XG4gICAgdmFyIHkgPSBwb3MueTtcblxuICAgIG5ld1Bvcy54ID0gdGhpcy5hICogeCArIHRoaXMuYyAqIHkgKyB0aGlzLnR4O1xuICAgIG5ld1Bvcy55ID0gdGhpcy5iICogeCArIHRoaXMuZCAqIHkgKyB0aGlzLnR5O1xuXG4gICAgcmV0dXJuIG5ld1Bvcztcbn07XG5cbi8qKlxuICogR2V0IGEgbmV3IHBvc2l0aW9uIHdpdGggdGhlIGludmVyc2Ugb2YgdGhlIGN1cnJlbnQgdHJhbnNmb3JtYXRpb24gYXBwbGllZC5cbiAqIENhbiBiZSB1c2VkIHRvIGdvIGZyb20gdGhlIHdvcmxkIGNvb3JkaW5hdGUgc3BhY2UgdG8gYSBjaGlsZCdzIGNvb3JkaW5hdGUgc3BhY2UuIChlLmcuIGlucHV0KVxuICpcbiAqIEBwYXJhbSBwb3Mge1BvaW50fSBUaGUgb3JpZ2luXG4gKiBAcGFyYW0gW25ld1Bvc10ge1BvaW50fSBUaGUgcG9pbnQgdGhhdCB0aGUgbmV3IHBvc2l0aW9uIGlzIGFzc2lnbmVkIHRvIChhbGxvd2VkIHRvIGJlIHNhbWUgYXMgaW5wdXQpXG4gKiBAcmV0dXJuIHtQb2ludH0gVGhlIG5ldyBwb2ludCwgaW52ZXJzZS10cmFuc2Zvcm1lZCB0aHJvdWdoIHRoaXMgbWF0cml4XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYXBwbHlJbnZlcnNlID0gZnVuY3Rpb24gKHBvcywgbmV3UG9zKVxue1xuICAgIG5ld1BvcyA9IG5ld1BvcyB8fCBuZXcgUG9pbnQoKTtcblxuICAgIHZhciBpZCA9IDEgLyAodGhpcy5hICogdGhpcy5kICsgdGhpcy5jICogLXRoaXMuYik7XG5cbiAgICB2YXIgeCA9IHBvcy54O1xuICAgIHZhciB5ID0gcG9zLnk7XG5cbiAgICBuZXdQb3MueCA9IHRoaXMuZCAqIGlkICogeCArIC10aGlzLmMgKiBpZCAqIHkgKyAodGhpcy50eSAqIHRoaXMuYyAtIHRoaXMudHggKiB0aGlzLmQpICogaWQ7XG4gICAgbmV3UG9zLnkgPSB0aGlzLmEgKiBpZCAqIHkgKyAtdGhpcy5iICogaWQgKiB4ICsgKC10aGlzLnR5ICogdGhpcy5hICsgdGhpcy50eCAqIHRoaXMuYikgKiBpZDtcblxuICAgIHJldHVybiBuZXdQb3M7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIG1hdHJpeCBvbiB0aGUgeCBhbmQgeS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICB0aGlzLnR4ICs9IHg7XG4gICAgdGhpcy50eSArPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgYSBzY2FsZSB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgbWF0cml4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSBhbW91bnQgdG8gc2NhbGUgaG9yaXpvbnRhbGx5XG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgYW1vdW50IHRvIHNjYWxlIHZlcnRpY2FsbHlcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIHRoaXMuYSAqPSB4O1xuICAgIHRoaXMuZCAqPSB5O1xuICAgIHRoaXMuYyAqPSB4O1xuICAgIHRoaXMuYiAqPSB5O1xuICAgIHRoaXMudHggKj0geDtcbiAgICB0aGlzLnR5ICo9IHk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqXG4gKiBBcHBsaWVzIGEgcm90YXRpb24gdHJhbnNmb3JtYXRpb24gdG8gdGhlIG1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgLSBUaGUgYW5nbGUgaW4gcmFkaWFucy5cbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAoYW5nbGUpXG57XG4gICAgdmFyIGNvcyA9IE1hdGguY29zKCBhbmdsZSApO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbiggYW5nbGUgKTtcblxuICAgIHZhciBhMSA9IHRoaXMuYTtcbiAgICB2YXIgYzEgPSB0aGlzLmM7XG4gICAgdmFyIHR4MSA9IHRoaXMudHg7XG5cbiAgICB0aGlzLmEgPSBhMSAqIGNvcy10aGlzLmIgKiBzaW47XG4gICAgdGhpcy5iID0gYTEgKiBzaW4rdGhpcy5iICogY29zO1xuICAgIHRoaXMuYyA9IGMxICogY29zLXRoaXMuZCAqIHNpbjtcbiAgICB0aGlzLmQgPSBjMSAqIHNpbit0aGlzLmQgKiBjb3M7XG4gICAgdGhpcy50eCA9IHR4MSAqIGNvcyAtIHRoaXMudHkgKiBzaW47XG4gICAgdGhpcy50eSA9IHR4MSAqIHNpbiArIHRoaXMudHkgKiBjb3M7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZ2l2ZW4gTWF0cml4IHRvIHRoaXMgTWF0cml4LlxuICpcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAobWF0cml4KVxue1xuICAgIHZhciBhMSA9IHRoaXMuYTtcbiAgICB2YXIgYjEgPSB0aGlzLmI7XG4gICAgdmFyIGMxID0gdGhpcy5jO1xuICAgIHZhciBkMSA9IHRoaXMuZDtcblxuICAgIHRoaXMuYSAgPSBtYXRyaXguYSAqIGExICsgbWF0cml4LmIgKiBjMTtcbiAgICB0aGlzLmIgID0gbWF0cml4LmEgKiBiMSArIG1hdHJpeC5iICogZDE7XG4gICAgdGhpcy5jICA9IG1hdHJpeC5jICogYTEgKyBtYXRyaXguZCAqIGMxO1xuICAgIHRoaXMuZCAgPSBtYXRyaXguYyAqIGIxICsgbWF0cml4LmQgKiBkMTtcblxuICAgIHRoaXMudHggPSBtYXRyaXgudHggKiBhMSArIG1hdHJpeC50eSAqIGMxICsgdGhpcy50eDtcbiAgICB0aGlzLnR5ID0gbWF0cml4LnR4ICogYjEgKyBtYXRyaXgudHkgKiBkMSArIHRoaXMudHk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUHJlcGVuZHMgdGhlIGdpdmVuIE1hdHJpeCB0byB0aGlzIE1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKG1hdHJpeClcbntcbiAgICB2YXIgdHgxID0gdGhpcy50eDtcblxuICAgIGlmIChtYXRyaXguYSAhPT0gMSB8fCBtYXRyaXguYiAhPT0gMCB8fCBtYXRyaXguYyAhPT0gMCB8fCBtYXRyaXguZCAhPT0gMSlcbiAgICB7XG4gICAgICAgIHZhciBhMSA9IHRoaXMuYTtcbiAgICAgICAgdmFyIGMxID0gdGhpcy5jO1xuICAgICAgICB0aGlzLmEgID0gYTEqbWF0cml4LmErdGhpcy5iKm1hdHJpeC5jO1xuICAgICAgICB0aGlzLmIgID0gYTEqbWF0cml4LmIrdGhpcy5iKm1hdHJpeC5kO1xuICAgICAgICB0aGlzLmMgID0gYzEqbWF0cml4LmErdGhpcy5kKm1hdHJpeC5jO1xuICAgICAgICB0aGlzLmQgID0gYzEqbWF0cml4LmIrdGhpcy5kKm1hdHJpeC5kO1xuICAgIH1cblxuICAgIHRoaXMudHggPSB0eDEqbWF0cml4LmErdGhpcy50eSptYXRyaXguYyttYXRyaXgudHg7XG4gICAgdGhpcy50eSA9IHR4MSptYXRyaXguYit0aGlzLnR5Km1hdHJpeC5kK21hdHJpeC50eTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZlcnRzIHRoaXMgbWF0cml4XG4gKlxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLmludmVydCA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgYTEgPSB0aGlzLmE7XG4gICAgdmFyIGIxID0gdGhpcy5iO1xuICAgIHZhciBjMSA9IHRoaXMuYztcbiAgICB2YXIgZDEgPSB0aGlzLmQ7XG4gICAgdmFyIHR4MSA9IHRoaXMudHg7XG4gICAgdmFyIG4gPSBhMSpkMS1iMSpjMTtcblxuICAgIHRoaXMuYSA9IGQxL247XG4gICAgdGhpcy5iID0gLWIxL247XG4gICAgdGhpcy5jID0gLWMxL247XG4gICAgdGhpcy5kID0gYTEvbjtcbiAgICB0aGlzLnR4ID0gKGMxKnRoaXMudHktZDEqdHgxKS9uO1xuICAgIHRoaXMudHkgPSAtKGExKnRoaXMudHktYjEqdHgxKS9uO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICogUmVzZXRzIHRoaXMgTWF0aXggdG8gYW4gaWRlbnRpdHkgKGRlZmF1bHQpIG1hdHJpeC5cbiAqXG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuYSA9IDE7XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLmMgPSAwO1xuICAgIHRoaXMuZCA9IDE7XG4gICAgdGhpcy50eCA9IDA7XG4gICAgdGhpcy50eSA9IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBNYXRyaXggb2JqZWN0IHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIHRoaXMgb25lLlxuICpcbiAqIEByZXR1cm4ge01hdHJpeH0gQSBjb3B5IG9mIHRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBtYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgbWF0cml4LmEgPSB0aGlzLmE7XG4gICAgbWF0cml4LmIgPSB0aGlzLmI7XG4gICAgbWF0cml4LmMgPSB0aGlzLmM7XG4gICAgbWF0cml4LmQgPSB0aGlzLmQ7XG4gICAgbWF0cml4LnR4ID0gdGhpcy50eDtcbiAgICBtYXRyaXgudHkgPSB0aGlzLnR5O1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbn07XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgdmFsdWVzIG9mIHRoZSBnaXZlbiBtYXRyaXggdG8gYmUgdGhlIHNhbWUgYXMgdGhlIG9uZXMgaW4gdGhpcyBtYXRyaXhcbiAqXG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoZSBtYXRyaXggZ2l2ZW4gaW4gcGFyYW1ldGVyIHdpdGggaXRzIHZhbHVlcyB1cGRhdGVkLlxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAobWF0cml4KVxue1xuICAgIG1hdHJpeC5hID0gdGhpcy5hO1xuICAgIG1hdHJpeC5iID0gdGhpcy5iO1xuICAgIG1hdHJpeC5jID0gdGhpcy5jO1xuICAgIG1hdHJpeC5kID0gdGhpcy5kO1xuICAgIG1hdHJpeC50eCA9IHRoaXMudHg7XG4gICAgbWF0cml4LnR5ID0gdGhpcy50eTtcblxuICAgIHJldHVybiBtYXRyaXg7XG59O1xuXG4vKipcbiAqIEEgZGVmYXVsdCAoaWRlbnRpdHkpIG1hdHJpeFxuICovXG5NYXRyaXguSURFTlRJVFkgPSBuZXcgTWF0cml4KCk7XG4vKipcbiAqIEEgdGVtcCBtYXRyaXhcbiAqL1xuTWF0cml4LlRFTVBfTUFUUklYID0gbmV3IE1hdHJpeCgpO1xuIiwiLyoqXG4gKiBUaGUgUG9pbnQgb2JqZWN0IHJlcHJlc2VudHMgYSBsb2NhdGlvbiBpbiBhIHR3by1kaW1lbnNpb25hbCBjb29yZGluYXRlIHN5c3RlbSwgd2hlcmUgeCByZXByZXNlbnRzXG4gKiB0aGUgaG9yaXpvbnRhbCBheGlzIGFuZCB5IHJlcHJlc2VudHMgdGhlIHZlcnRpY2FsIGF4aXMuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSS5tYXRoXG4gKiBAcGFyYW0gW3g9MF0ge251bWJlcn0gcG9zaXRpb24gb2YgdGhlIHBvaW50IG9uIHRoZSB4IGF4aXNcbiAqIEBwYXJhbSBbeT0wXSB7bnVtYmVyfSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgb24gdGhlIHkgYXhpc1xuICovXG5mdW5jdGlvbiBQb2ludCh4LCB5KVxue1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy54ID0geCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnkgPSB5IHx8IDA7XG59XG5cblBvaW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBvaW50O1xubW9kdWxlLmV4cG9ydHMgPSBQb2ludDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyBwb2ludFxuICpcbiAqIEByZXR1cm4ge1BvaW50fSBhIGNvcHkgb2YgdGhlIHBvaW50XG4gKi9cblBvaW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIHBvaW50IHRvIGEgbmV3IHggYW5kIHkgcG9zaXRpb24uXG4gKiBJZiB5IGlzIG9taXR0ZWQsIGJvdGggeCBhbmQgeSB3aWxsIGJlIHNldCB0byB4LlxuICpcbiAqIEBwYXJhbSBbeD0wXSB7bnVtYmVyfSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgb24gdGhlIHggYXhpc1xuICogQHBhcmFtIFt5PTBdIHtudW1iZXJ9IHBvc2l0aW9uIG9mIHRoZSBwb2ludCBvbiB0aGUgeSBheGlzXG4gKi9cblBvaW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgdGhpcy55ID0geSB8fCAoICh5ICE9PSAwKSA/IHRoaXMueCA6IDAgKSA7XG59O1xuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIFBJWEkubWF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gUElfMiAtIFR3byBQaVxuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBQSV8yOiBNYXRoLlBJICogMixcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBSQURfVE9fREVHIC0gQ29uc3RhbnQgY29udmVyc2lvbiBmYWN0b3IgZm9yIGNvbnZlcnRpbmcgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIFJBRF9UT19ERUc6IDE4MCAvIE1hdGguUEksXG5cbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gREVHX1RPX1JBRCAtIENvbnN0YW50IGNvbnZlcnNpb24gZmFjdG9yIGZvciBjb252ZXJ0aW5nIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBERUdfVE9fUkFEOiBNYXRoLlBJIC8gMTgwLFxuXG4gICAgUG9pbnQ6ICAgICAgcmVxdWlyZSgnLi9Qb2ludCcpLFxuICAgIE1hdHJpeDogICAgIHJlcXVpcmUoJy4vTWF0cml4JyksXG5cbiAgICBDaXJjbGU6ICAgICByZXF1aXJlKCcuL3NoYXBlcy9DaXJjbGUnKSxcbiAgICBFbGxpcHNlOiAgICByZXF1aXJlKCcuL3NoYXBlcy9FbGxpcHNlJyksXG4gICAgUG9seWdvbjogICAgcmVxdWlyZSgnLi9zaGFwZXMvUG9seWdvbicpLFxuICAgIFJlY3RhbmdsZTogIHJlcXVpcmUoJy4vc2hhcGVzL1JlY3RhbmdsZScpLFxuICAgIFJvdW5kZWRSZWN0YW5nbGU6IHJlcXVpcmUoJy4vc2hhcGVzL1JvdW5kZWRSZWN0YW5nbGUnKVxufTtcbiIsInZhciBSZWN0YW5nbGUgPSByZXF1aXJlKCcuL1JlY3RhbmdsZScpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBUaGUgQ2lyY2xlIG9iamVjdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgaGl0IGFyZWEgZm9yIGRpc3BsYXlPYmplY3RzXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoaXMgY2lyY2xlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhpcyBjaXJjbGVcbiAqIEBwYXJhbSByYWRpdXMge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gKi9cbmZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMpXG57XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnggPSB4IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueSA9IHkgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QsIG1haW5seSB1c2VkIHRvIGF2b2lkIGBpbnN0YW5jZW9mYCBjaGVja3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5TSEFQRVMuQ0lSQztcbn1cblxuQ2lyY2xlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENpcmNsZTtcbm1vZHVsZS5leHBvcnRzID0gQ2lyY2xlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIENpcmNsZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0NpcmNsZX0gYSBjb3B5IG9mIHRoZSBDaXJjbGVcbiAqL1xuQ2lyY2xlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBDaXJjbGUodGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgZ2l2ZW4gYXJlIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBjaXJjbGVcbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSB4L3kgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiB0aGlzIENpcmNsZVxuICovXG5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgaWYgKHRoaXMucmFkaXVzIDw9IDApXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGR4ID0gKHRoaXMueCAtIHgpLFxuICAgICAgICBkeSA9ICh0aGlzLnkgLSB5KSxcbiAgICAgICAgcjIgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzO1xuXG4gICAgZHggKj0gZHg7XG4gICAgZHkgKj0gZHk7XG5cbiAgICByZXR1cm4gKGR4ICsgZHkgPD0gcjIpO1xufTtcblxuLyoqXG4qIFJldHVybnMgdGhlIGZyYW1pbmcgcmVjdGFuZ2xlIG9mIHRoZSBjaXJjbGUgYXMgYSBSZWN0YW5nbGUgb2JqZWN0XG4qXG4qIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIGZyYW1pbmcgcmVjdGFuZ2xlXG4qL1xuQ2lyY2xlLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCAtIHRoaXMucmFkaXVzLCB0aGlzLnkgLSB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMgKiAyLCB0aGlzLnJhZGl1cyAqIDIpO1xufTtcbiIsInZhciBSZWN0YW5nbGUgPSByZXF1aXJlKCcuL1JlY3RhbmdsZScpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBUaGUgRWxsaXBzZSBvYmplY3QgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIGhpdCBhcmVhIGZvciBkaXNwbGF5T2JqZWN0c1xuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgZWxsaXBzZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIGhhbGYgd2lkdGggb2YgdGhpcyBlbGxpcHNlXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IFRoZSBoYWxmIGhlaWdodCBvZiB0aGlzIGVsbGlwc2VcbiAqL1xuZnVuY3Rpb24gRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy54ID0geCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnkgPSB5IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIG9iamVjdCwgbWFpbmx5IHVzZWQgdG8gYXZvaWQgYGluc3RhbmNlb2ZgIGNoZWNrc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlNIQVBFUy5FTElQO1xufVxuXG5FbGxpcHNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVsbGlwc2U7XG5tb2R1bGUuZXhwb3J0cyA9IEVsbGlwc2U7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgRWxsaXBzZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0VsbGlwc2V9IGEgY29weSBvZiB0aGUgZWxsaXBzZVxuICovXG5FbGxpcHNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBFbGxpcHNlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGdpdmVuIGFyZSBjb250YWluZWQgd2l0aGluIHRoaXMgZWxsaXBzZVxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHgveSBjb29yZHMgYXJlIHdpdGhpbiB0aGlzIGVsbGlwc2VcbiAqL1xuRWxsaXBzZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICBpZiAodGhpcy53aWR0aCA8PSAwIHx8IHRoaXMuaGVpZ2h0IDw9IDApXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9ub3JtYWxpemUgdGhlIGNvb3JkcyB0byBhbiBlbGxpcHNlIHdpdGggY2VudGVyIDAsMFxuICAgIHZhciBub3JteCA9ICgoeCAtIHRoaXMueCkgLyB0aGlzLndpZHRoKSxcbiAgICAgICAgbm9ybXkgPSAoKHkgLSB0aGlzLnkpIC8gdGhpcy5oZWlnaHQpO1xuXG4gICAgbm9ybXggKj0gbm9ybXg7XG4gICAgbm9ybXkgKj0gbm9ybXk7XG5cbiAgICByZXR1cm4gKG5vcm14ICsgbm9ybXkgPD0gMSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZyYW1pbmcgcmVjdGFuZ2xlIG9mIHRoZSBlbGxpcHNlIGFzIGEgUmVjdGFuZ2xlIG9iamVjdFxuICpcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIGZyYW1pbmcgcmVjdGFuZ2xlXG4gKi9cbkVsbGlwc2UucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54IC0gdGhpcy53aWR0aCwgdGhpcy55IC0gdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbn07XG4iLCJ2YXIgUG9pbnQgPSByZXF1aXJlKCcuLi9Qb2ludCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcG9pbnRzKiB7UG9pbnRbXXxudW1iZXJbXXwuLi5Qb2ludHwuLi5udW1iZXJ9IFRoaXMgY2FuIGJlIGFuIGFycmF5IG9mIFBvaW50cyB0aGF0IGZvcm0gdGhlIHBvbHlnb24sXG4gKiAgICAgIGEgZmxhdCBhcnJheSBvZiBudW1iZXJzIHRoYXQgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBbeCx5LCB4LHksIC4uLl0sIG9yIHRoZSBhcmd1bWVudHMgcGFzc2VkIGNhbiBiZVxuICogICAgICBhbGwgdGhlIHBvaW50cyBvZiB0aGUgcG9seWdvbiBlLmcuIGBuZXcgUG9seWdvbihuZXcgUG9pbnQoKSwgbmV3IFBvaW50KCksIC4uLilgLCBvciB0aGVcbiAqICAgICAgYXJndW1lbnRzIHBhc3NlZCBjYW4gYmUgZmxhdCB4LHkgdmFsdWVzIGUuZy4gYG5ldyBQb2x5Z29uKHgseSwgeCx5LCB4LHksIC4uLilgIHdoZXJlIGB4YCBhbmQgYHlgIGFyZVxuICogICAgICBOdW1iZXJzLlxuICovXG5mdW5jdGlvbiBQb2x5Z29uKHBvaW50cylcbntcbiAgICAvL2lmIHBvaW50cyBpc24ndCBhbiBhcnJheSwgdXNlIGFyZ3VtZW50cyBhcyB0aGUgYXJyYXlcbiAgICBpZiAoIShwb2ludHMgaW5zdGFuY2VvZiBBcnJheSkpXG4gICAge1xuICAgICAgICBwb2ludHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vaWYgdGhpcyBpcyBhIGZsYXQgYXJyYXkgb2YgbnVtYmVycywgY29udmVydCBpdCB0byBwb2ludHNcbiAgICBpZiAocG9pbnRzWzBdIGluc3RhbmNlb2YgUG9pbnQpXG4gICAge1xuICAgICAgICB2YXIgcCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBwb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcC5wdXNoKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludHMgPSBwO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHRoZSBwb2ludHMgb2YgdGhpcyBwb2x5Z29uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtQb2ludFtdfVxuICAgICAqL1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIG9iamVjdCwgbWFpbmx5IHVzZWQgdG8gYXZvaWQgYGluc3RhbmNlb2ZgIGNoZWNrc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IENPTlNULlNIQVBFUy5QT0xZO1xufVxuXG5Qb2x5Z29uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBvbHlnb247XG5tb2R1bGUuZXhwb3J0cyA9IFBvbHlnb247XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgcG9seWdvblxuICpcbiAqIEByZXR1cm4ge1BvbHlnb259IGEgY29weSBvZiB0aGUgcG9seWdvblxuICovXG5Qb2x5Z29uLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBQb2x5Z29uKHRoaXMucG9pbnRzLnNsaWNlKCkpO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBhcmUgY29udGFpbmVkIHdpdGhpbiB0aGlzIHBvbHlnb25cbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSB4L3kgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiB0aGlzIHBvbHlnb25cbiAqL1xuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG5cbiAgICAvLyB1c2Ugc29tZSByYXljYXN0aW5nIHRvIHRlc3QgaGl0c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9wb2ludC1pbi1wb2x5Z29uL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gICAgdmFyIGxlbmd0aCA9IHRoaXMucG9pbnRzLmxlbmd0aCAvIDI7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGxlbmd0aCAtIDE7IGkgPCBsZW5ndGg7IGogPSBpKyspXG4gICAge1xuICAgICAgICB2YXIgeGkgPSB0aGlzLnBvaW50c1tpICogMl0sIHlpID0gdGhpcy5wb2ludHNbaSAqIDIgKyAxXSxcbiAgICAgICAgICAgIHhqID0gdGhpcy5wb2ludHNbaiAqIDJdLCB5aiA9IHRoaXMucG9pbnRzW2ogKiAyICsgMV0sXG4gICAgICAgICAgICBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT09ICh5aiA+IHkpKSAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuXG4gICAgICAgIGlmIChpbnRlcnNlY3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogdGhlIFJlY3RhbmdsZSBvYmplY3QgaXMgYW4gYXJlYSBkZWZpbmVkIGJ5IGl0cyBwb3NpdGlvbiwgYXMgaW5kaWNhdGVkIGJ5IGl0cyB0b3AtbGVmdCBjb3JuZXIgcG9pbnQgKHgsIHkpIGFuZCBieSBpdHMgd2lkdGggYW5kIGl0cyBoZWlnaHQuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgdXBwZXItbGVmdCBjb3JuZXIgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdXBwZXItbGVmdCBjb3JuZXIgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFRoZSBvdmVyYWxsIHdpZHRoIG9mIHRoaXMgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IFRoZSBvdmVyYWxsIGhlaWdodCBvZiB0aGlzIHJlY3RhbmdsZVxuICovXG5mdW5jdGlvbiBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueCA9IHggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy55ID0geSB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QsIG1haW5seSB1c2VkIHRvIGF2b2lkIGBpbnN0YW5jZW9mYCBjaGVja3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5TSEFQRVMuUkVDVDtcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlY3RhbmdsZTtcbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgZW1wdHkgcmVjdGFuZ2xlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdGFudFxuICovXG5SZWN0YW5nbGUuRU1QVFkgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIDAsIDApO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgUmVjdGFuZ2xlXG4gKlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSBhIGNvcHkgb2YgdGhlIHJlY3RhbmdsZVxuICovXG5SZWN0YW5nbGUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBnaXZlbiBhcmUgY29udGFpbmVkIHdpdGhpbiB0aGlzIFJlY3RhbmdsZVxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHgveSBjb29yZGluYXRlcyBhcmUgd2l0aGluIHRoaXMgUmVjdGFuZ2xlXG4gKi9cblJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICBpZiAodGhpcy53aWR0aCA8PSAwIHx8IHRoaXMuaGVpZ2h0IDw9IDApXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHggPj0gdGhpcy54ICYmIHggPCB0aGlzLnggKyB0aGlzLndpZHRoKVxuICAgIHtcbiAgICAgICAgaWYgKHkgPj0gdGhpcy55ICYmIHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBUaGUgUm91bmRlZCBSZWN0YW5nbGUgb2JqZWN0IGlzIGFuIGFyZWEgdGhhdCBoYXMgbmljZSByb3VuZGVkIGNvcm5lcnMsIGFzIGluZGljYXRlZCBieSBpdHMgdG9wLWxlZnQgY29ybmVyIHBvaW50ICh4LCB5KSBhbmQgYnkgaXRzIHdpZHRoIGFuZCBpdHMgaGVpZ2h0IGFuZCBpdHMgcmFkaXVzLlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHVwcGVyLWxlZnQgY29ybmVyIG9mIHRoZSByb3VuZGVkIHJlY3RhbmdsZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdXBwZXItbGVmdCBjb3JuZXIgb2YgdGhlIHJvdW5kZWQgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIG92ZXJhbGwgd2lkdGggb2YgdGhpcyByb3VuZGVkIHJlY3RhbmdsZVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgb3ZlcmFsbCBoZWlnaHQgb2YgdGhpcyByb3VuZGVkIHJlY3RhbmdsZVxuICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfSBDb250cm9scyB0aGUgcmFkaXVzIG9mIHRoZSByb3VuZGVkIGNvcm5lcnNcbiAqL1xuZnVuY3Rpb24gUm91bmRlZFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnggPSB4IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueSA9IHkgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjBcbiAgICAgKi9cbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAyMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QsIG1haW5seSB1c2VkIHRvIGF2b2lkIGBpbnN0YW5jZW9mYCBjaGVja3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5TSEFQRVMuUlJFQztcbn1cblxuUm91bmRlZFJlY3RhbmdsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSb3VuZGVkUmVjdGFuZ2xlO1xubW9kdWxlLmV4cG9ydHMgPSBSb3VuZGVkUmVjdGFuZ2xlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIFJvdW5kZWQgUmVjdGFuZ2xlXG4gKlxuICogQHJldHVybiB7Um91bmRlZFJlY3RhbmdsZX0gYSBjb3B5IG9mIHRoZSByb3VuZGVkIHJlY3RhbmdsZVxuICovXG5Sb3VuZGVkUmVjdGFuZ2xlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBSb3VuZGVkUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5yYWRpdXMpO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBnaXZlbiBhcmUgY29udGFpbmVkIHdpdGhpbiB0aGlzIFJvdW5kZWQgUmVjdGFuZ2xlXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgeC95IGNvb3JkaW5hdGVzIGFyZSB3aXRoaW4gdGhpcyBSb3VuZGVkIFJlY3RhbmdsZVxuICovXG5Sb3VuZGVkUmVjdGFuZ2xlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIGlmICh0aGlzLndpZHRoIDw9IDAgfHwgdGhpcy5oZWlnaHQgPD0gMClcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSB0aGlzLnggKyB0aGlzLndpZHRoKVxuICAgIHtcbiAgICAgICAgaWYgKHkgPj0gdGhpcy55ICYmIHkgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBDb250YWluZXIgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0NvbnRhaW5lcicpO1xuXG4vKipcbiAqIFRoZSBQYXJ0aWNsZUNvbnRhaW5lciBjbGFzcyBpcyBhIHJlYWxseSBmYXN0IHZlcnNpb24gb2YgdGhlIENvbnRhaW5lciBidWlsdCBzb2xlbHkgZm9yIHNwZWVkLFxuICogc28gdXNlIHdoZW4geW91IG5lZWQgYSBsb3Qgb2Ygc3ByaXRlcyBvciBwYXJ0aWNsZXMuIFRoZSB0cmFkZW9mZiBvZiB0aGUgUGFydGljbGVDb250YWluZXIgaXMgdGhhdCBhZHZhbmNlZFxuICogZnVuY3Rpb25hbGl0eSB3aWxsIG5vdCB3b3JrLiBQYXJ0aWNsZUNvbnRhaW5lciBpbXBsZW1lbnRzIG9ubHkgdGhlIGJhc2ljIG9iamVjdCB0cmFuc2Zvcm0gKHBvc2l0aW9uLCBzY2FsZSwgcm90YXRpb24pLlxuICogQW55IG90aGVyIGZ1bmN0aW9uYWxpdHkgbGlrZSB0aW50aW5nLCBtYXNraW5nLCBldGMgd2lsbCBub3Qgd29yayBvbiBzcHJpdGVzIGluIHRoaXMgYmF0Y2guXG4gKlxuICogSXQncyBleHRyZW1lbHkgZWFzeSB0byB1c2UgOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgY29udGFpbmVyID0gbmV3IFBhcnRpY2xlQ29udGFpbmVyKCk7XG4gKlxuICogZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7ICsraSlcbiAqIHtcbiAqICAgICB2YXIgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlLmZyb21JbWFnZShcIm15SW1hZ2UucG5nXCIpO1xuICogICAgIGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpO1xuICogfVxuICogYGBgXG4gKlxuICogQW5kIGhlcmUgeW91IGhhdmUgYSBodW5kcmVkIHNwcml0ZXMgdGhhdCB3aWxsIGJlIHJlbmRlcmVyIGF0IHRoZSBzcGVlZCBvZiBsaWdodC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICogQG1lbWJlcm9mIFBJWElcbiAqXG4gKiBAcGFyYW0gc2l6ZSB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGltYWdlcyBpbiB0aGUgU3ByaXRlQmF0Y2ggYmVmb3JlIGl0IGZsdXNoZXMuXG4gKiBAcGFyYW0gcHJvcGVydGllcyB7b2JqZWN0fSBUaGUgcHJvcGVydGllcyB0byBiZSB1cGxvYWRlZFxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZUNvbnRhaW5lcihzaXplLCBwcm9wZXJ0aWVzKVxue1xuICAgIENvbnRhaW5lci5jYWxsKHRoaXMpO1xuXG4gICAgLy8gc2V0IHByb3BlcnRpZXMgdG8gYmUgZHluYW1pYyAodHJ1ZSkgLyBzdGF0aWMgKGZhbHNlKVxuICAgIC8vIFRPRE8gdGhpcyBjb3VsZCBiZSBlYXNpZXIgdG8gdW5kZXJzdGFuZCFcbiAgICAvKiB0aGlzLl9wcm9wZXJ0aWVzID0ge1xuICAgICAgICBzY2FsZSA6IGZhbHNlLFxuICAgICAgICBwb3NpdGlvbiA6IHRydWUsXG4gICAgICAgIHJvdGF0aW9uIDogZmFsc2UsXG4gICAgICAgIHV2cyA6IGZhbHNlLFxuICAgICAgICBhbHBoYSA6IGZhbHNlXG4gICAgICogfVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2l6ZSA9IHNpemUgfHwgMTUwMDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2J1ZmZlcnMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRpYyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIHRoaXMuaW50ZXJhY3RpdmVDaGlsZHJlbiA9IGZhbHNlO1xuXG59XG5cblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29udGFpbmVyLnByb3RvdHlwZSk7XG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJ0aWNsZUNvbnRhaW5lcjtcbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVDb250YWluZXI7XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgb2JqZWN0IHRyYW5zZm9ybSBmb3IgcmVuZGVyaW5nXG4gKlxuICogQHByaXZhdGVcbiAqL1xuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gVE9ETyBkb24ndCBuZWVkIHRvIVxuICAgIHRoaXMuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIC8vICBQSVhJLkNvbnRhaW5lci5wcm90b3R5cGUudXBkYXRlVHJhbnNmb3JtLmNhbGwoIHRoaXMgKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGFpbmVyIHVzaW5nIHRoZSBXZWJHTCByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHdlYmdsIHJlbmRlcmVyXG4gKiBAcHJpdmF0ZVxuICovXG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyV2ViR0wgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgaWYgKCF0aGlzLnZpc2libGUgfHwgdGhpcy53b3JsZEFscGhhIDw9IDAgfHwgIXRoaXMuY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLnJlbmRlcmFibGUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVuZGVyZXIuc2V0T2JqZWN0UmVuZGVyZXIoIHJlbmRlcmVyLnBsdWdpbnMucGFydGljbGUgKTtcbiAgICByZW5kZXJlci5wbHVnaW5zLnBhcnRpY2xlLnJlbmRlciggdGhpcyApO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY2hpbGQgdG8gdGhpcyBwYXJ0aWNsZSBjb250YWluZXIgYXQgYSBzcGVjaWZpZWQgaW5kZXguIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gKlxuICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdG8gYWRkXG4gKiBAcGFyYW0gaW5kZXgge051bWJlcn0gVGhlIGluZGV4IHRvIHBsYWNlIHRoZSBjaGlsZCBpblxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRoYXQgd2FzIGFkZGVkLlxuICovXG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUuYWRkQ2hpbGRBdCA9IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpXG57XG4gICAgLy8gcHJldmVudCBhZGRpbmcgc2VsZiBhcyBjaGlsZFxuICAgIGlmIChjaGlsZCA9PT0gdGhpcylcbiAgICB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0aGlzLmNoaWxkcmVuLmxlbmd0aClcbiAgICB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGljID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjaGlsZCArICdhZGRDaGlsZEF0OiBUaGUgaW5kZXggJysgaW5kZXggKycgc3VwcGxpZWQgaXMgb3V0IG9mIGJvdW5kcyAnICsgdGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIGNoaWxkIGZyb20gdGhlIHNwZWNpZmllZCBpbmRleCBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0gaW5kZXgge051bWJlcn0gVGhlIGluZGV4IHRvIGdldCB0aGUgY2hpbGQgZnJvbVxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRoYXQgd2FzIHJlbW92ZWQuXG4gKi9cblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZEF0ID0gZnVuY3Rpb24gKGluZGV4KVxue1xuICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGRBdChpbmRleCk7XG5cbiAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0aWMgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIENhbnZhcyByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9IFRoZSBjYW52YXMgcmVuZGVyZXJcbiAqIEBwcml2YXRlXG4gKi9cblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXJDYW52YXMgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgaWYgKCF0aGlzLnZpc2libGUgfHwgdGhpcy53b3JsZEFscGhhIDw9IDAgfHwgIXRoaXMuY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLnJlbmRlcmFibGUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xuICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuICAgIHZhciBpc1JvdGF0ZWQgPSB0cnVlO1xuXG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMud29ybGRBbHBoYTtcblxuICAgIHRoaXMuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgKytpKVxuICAgIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLnZpc2libGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZyYW1lID0gY2hpbGQudGV4dHVyZS5mcmFtZTtcblxuICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gdGhpcy53b3JsZEFscGhhICogY2hpbGQuYWxwaGE7XG5cbiAgICAgICAgaWYgKGNoaWxkLnJvdGF0aW9uICUgKE1hdGguUEkgKiAyKSA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZmFzdGVzdCAgd2F5IHRvIG9wdGltaXNlISAtIGlmIHJvdGF0aW9uIGlzIDAgdGhlbiB3ZSBjYW4gYXZvaWQgYW55IGtpbmQgb2Ygc2V0VHJhbnNmb3JtIGNhbGxcbiAgICAgICAgICAgIGlmIChpc1JvdGF0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5hLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uYixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLmMsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5kLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0udHgsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS50eVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpc1JvdGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY2hpbGQudGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgZnJhbWUueCxcbiAgICAgICAgICAgICAgICBmcmFtZS55LFxuICAgICAgICAgICAgICAgIGZyYW1lLndpZHRoLFxuICAgICAgICAgICAgICAgIGZyYW1lLmhlaWdodCxcbiAgICAgICAgICAgICAgICAoKGNoaWxkLmFuY2hvci54KSAqICgtZnJhbWUud2lkdGggKiBjaGlsZC5zY2FsZS54KSArIGNoaWxkLnBvc2l0aW9uLnggICsgMC41KSB8IDAsXG4gICAgICAgICAgICAgICAgKChjaGlsZC5hbmNob3IueSkgKiAoLWZyYW1lLmhlaWdodCAqIGNoaWxkLnNjYWxlLnkpICsgY2hpbGQucG9zaXRpb24ueSAgKyAwLjUpIHwgMCxcbiAgICAgICAgICAgICAgICBmcmFtZS53aWR0aCAqIGNoaWxkLnNjYWxlLngsXG4gICAgICAgICAgICAgICAgZnJhbWUuaGVpZ2h0ICogY2hpbGQuc2NhbGUueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghaXNSb3RhdGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzUm90YXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0oKTtcblxuICAgICAgICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtID0gY2hpbGQud29ybGRUcmFuc2Zvcm07XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXJlci5yb3VuZFBpeGVscylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uYSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uYixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uYyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uZCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0udHggfCAwLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS50eSB8IDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5hLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5iLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5jLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS5kLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFRyYW5zZm9ybS50eCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0udHlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjaGlsZC50ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgICAgICAgICBmcmFtZS54LFxuICAgICAgICAgICAgICAgIGZyYW1lLnksXG4gICAgICAgICAgICAgICAgZnJhbWUud2lkdGgsXG4gICAgICAgICAgICAgICAgZnJhbWUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICgoY2hpbGQuYW5jaG9yLngpICogKC1mcmFtZS53aWR0aCkgKyAwLjUpIHwgMCxcbiAgICAgICAgICAgICAgICAoKGNoaWxkLmFuY2hvci55KSAqICgtZnJhbWUuaGVpZ2h0KSArIDAuNSkgfCAwLFxuICAgICAgICAgICAgICAgIGZyYW1lLndpZHRoLFxuICAgICAgICAgICAgICAgIGZyYW1lLmhlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJcbi8qKlxuICogQGF1dGhvciBNYXQgR3JvdmVzXG4gKlxuICogQmlnIHRoYW5rcyB0byB0aGUgdmVyeSBjbGV2ZXIgTWF0dCBEZXNMYXVyaWVycyA8bWF0dGRlc2w+IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9cbiAqIGZvciBjcmVhdGluZyB0aGUgb3JpZ2luYWwgcGl4aSB2ZXJzaW9uIVxuICogQWxzbyBhIHRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vYmNoZXZhbGllciBmb3IgdHdlYWtpbmcgdGhlIHRpbnQgYW5kIGFscGhhIHNvIHRoYXQgdGhleSBub3cgc2hhcmUgNCBieXRlcyBvbiB0aGUgdmVydGV4IGJ1ZmZlclxuICpcbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnkgTGliR0RYJ3MgUGFydGljbGVCdWZmZXI6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGliZ2R4L2xpYmdkeC9ibG9iL21hc3Rlci9nZHgvc3JjL2NvbS9iYWRsb2dpYy9nZHgvZ3JhcGhpY3MvZzJkL1BhcnRpY2xlQnVmZmVyLmphdmFcbiAqL1xuXG4vKipcbiAqXG4gKiBAY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBzcHJpdGUgYmF0Y2ggd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZUJ1ZmZlcihnbCwgcHJvcGVydGllcywgc2l6ZSlcbntcbiAgICAvKipcbiAgICAgKiB0aGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9XG4gICAgICovXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRTaXplID0gMjtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0Qnl0ZVNpemUgPSB0aGlzLnZlcnRTaXplICogNDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaW1hZ2VzIGluIHRoZSBTcHJpdGVCYXRjaCBiZWZvcmUgaXQgZmx1c2hlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljUHJvcGVydGllcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcblxuICAgICAgICBpZihwcm9wZXJ0eS5keW5hbWljKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0aWNQcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0aWNTdHJpZGUgPSAwO1xuICAgIHRoaXMuc3RhdGljQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLnN0YXRpY0RhdGEgPSBudWxsO1xuXG4gICAgdGhpcy5keW5hbWljU3RyaWRlID0gMDtcbiAgICB0aGlzLmR5bmFtaWNCdWZmZXIgPSBudWxsO1xuICAgIHRoaXMuZHluYW1pY0RhdGEgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0QnVmZmVycygpO1xuXG59XG5cblBhcnRpY2xlQnVmZmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcnRpY2xlQnVmZmVyO1xubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZUJ1ZmZlcjtcblxuLyoqXG4gKiBTZXRzIHVwIHRoZSByZW5kZXJlciBjb250ZXh0IGFuZCBuZWNlc3NhcnkgYnVmZmVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdsIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IHRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICovXG5QYXJ0aWNsZUJ1ZmZlci5wcm90b3R5cGUuaW5pdEJ1ZmZlcnMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgdmFyIGk7XG4gICAgdmFyIHByb3BlcnR5O1xuXG4gICAgdmFyIGR5bmFtaWNPZmZzZXQgPSAwO1xuICAgIHRoaXMuZHluYW1pY1N0cmlkZSA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5keW5hbWljUHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHByb3BlcnR5ID0gdGhpcy5keW5hbWljUHJvcGVydGllc1tpXTtcblxuICAgICAgICBwcm9wZXJ0eS5vZmZzZXQgPSBkeW5hbWljT2Zmc2V0O1xuICAgICAgICBkeW5hbWljT2Zmc2V0ICs9IHByb3BlcnR5LnNpemU7XG4gICAgICAgIHRoaXMuZHluYW1pY1N0cmlkZSArPSBwcm9wZXJ0eS5zaXplO1xuICAgIH1cblxuICAgIHRoaXMuZHluYW1pY0RhdGEgPSBuZXcgRmxvYXQzMkFycmF5KCB0aGlzLnNpemUgKiB0aGlzLmR5bmFtaWNTdHJpZGUgKiA0KTtcbiAgICB0aGlzLmR5bmFtaWNCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmR5bmFtaWNCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmR5bmFtaWNEYXRhLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG5cbiAgICAvLyBzdGF0aWMgLy9cbiAgICB2YXIgc3RhdGljT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnN0YXRpY1N0cmlkZSA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcHJvcGVydHkgPSB0aGlzLnN0YXRpY1Byb3BlcnRpZXNbaV07XG5cbiAgICAgICAgcHJvcGVydHkub2Zmc2V0ID0gc3RhdGljT2Zmc2V0O1xuICAgICAgICBzdGF0aWNPZmZzZXQgKz0gcHJvcGVydHkuc2l6ZTtcbiAgICAgICAgdGhpcy5zdGF0aWNTdHJpZGUgKz0gcHJvcGVydHkuc2l6ZTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRpY0RhdGEgPSBuZXcgRmxvYXQzMkFycmF5KCB0aGlzLnNpemUgKiB0aGlzLnN0YXRpY1N0cmlkZSAqIDQpO1xuICAgIHRoaXMuc3RhdGljQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5zdGF0aWNCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnN0YXRpY0RhdGEsIGdsLkRZTkFNSUNfRFJBVyk7XG5cbn07XG5cblBhcnRpY2xlQnVmZmVyLnByb3RvdHlwZS51cGxvYWREeW5hbWljID0gZnVuY3Rpb24oY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGFtb3VudClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmR5bmFtaWNQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5keW5hbWljUHJvcGVydGllc1tpXTtcbiAgICAgICAgcHJvcGVydHkudXBsb2FkRnVuY3Rpb24oY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGFtb3VudCwgdGhpcy5keW5hbWljRGF0YSwgdGhpcy5keW5hbWljU3RyaWRlLCBwcm9wZXJ0eS5vZmZzZXQpO1xuICAgIH1cblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmR5bmFtaWNCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLmR5bmFtaWNEYXRhKTtcbn07XG5cblBhcnRpY2xlQnVmZmVyLnByb3RvdHlwZS51cGxvYWRTdGF0aWMgPSBmdW5jdGlvbihjaGlsZHJlbiwgc3RhcnRJbmRleCwgYW1vdW50KVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGljUHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHRoaXMuc3RhdGljUHJvcGVydGllc1tpXTtcbiAgICAgICAgcHJvcGVydHkudXBsb2FkRnVuY3Rpb24oY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGFtb3VudCwgdGhpcy5zdGF0aWNEYXRhLCB0aGlzLnN0YXRpY1N0cmlkZSwgcHJvcGVydHkub2Zmc2V0KTtcbiAgICB9XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5zdGF0aWNCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnN0YXRpY0RhdGEpO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBuZXcgc3ByaXRlIGJhdGNoLlxuICpcbiAqL1xuUGFydGljbGVCdWZmZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgdmFyIGksIHByb3BlcnR5O1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuZHluYW1pY0J1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5keW5hbWljUHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHByb3BlcnR5ID0gdGhpcy5keW5hbWljUHJvcGVydGllc1tpXTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwcm9wZXJ0eS5hdHRyaWJ1dGUsIHByb3BlcnR5LnNpemUsIGdsLkZMT0FULCBmYWxzZSwgdGhpcy5keW5hbWljU3RyaWRlICogNCwgcHJvcGVydHkub2Zmc2V0ICogNCk7XG4gICAgfVxuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuc3RhdGljQnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBwcm9wZXJ0eSA9IHRoaXMuc3RhdGljUHJvcGVydGllc1tpXTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwcm9wZXJ0eS5hdHRyaWJ1dGUsIHByb3BlcnR5LnNpemUsIGdsLkZMT0FULCBmYWxzZSwgdGhpcy5zdGF0aWNTdHJpZGUgKiA0LCBwcm9wZXJ0eS5vZmZzZXQgKiA0KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBTcHJpdGVCYXRjaC5cbiAqXG4gKi9cblBhcnRpY2xlQnVmZmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICAvL1RPRE8gaW1wbGVtZW50IHRoaXMgOikgdG8gYnVzeSBtYWtpbmcgdGhlIGZ1biBiaXRzLi5cbn07XG4iLCJ2YXIgT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXInKSxcbiAgICBXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKSxcbiAgICBQYXJ0aWNsZVNoYWRlciA9IHJlcXVpcmUoJy4vUGFydGljbGVTaGFkZXInKSxcbiAgICBQYXJ0aWNsZUJ1ZmZlciA9IHJlcXVpcmUoJy4vUGFydGljbGVCdWZmZXInKSxcbiAgICBtYXRoICAgICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9tYXRoJyk7XG5cbi8qKlxuICogQGF1dGhvciBNYXQgR3JvdmVzXG4gKlxuICogQmlnIHRoYW5rcyB0byB0aGUgdmVyeSBjbGV2ZXIgTWF0dCBEZXNMYXVyaWVycyA8bWF0dGRlc2w+IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9cbiAqIGZvciBjcmVhdGluZyB0aGUgb3JpZ2luYWwgcGl4aSB2ZXJzaW9uIVxuICogQWxzbyBhIHRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vYmNoZXZhbGllciBmb3IgdHdlYWtpbmcgdGhlIHRpbnQgYW5kIGFscGhhIHNvIHRoYXQgdGhleSBub3cgc2hhcmUgNCBieXRlcyBvbiB0aGUgdmVydGV4IGJ1ZmZlclxuICpcbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnkgTGliR0RYJ3MgUGFydGljbGVSZW5kZXJlcjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9saWJnZHgvbGliZ2R4L2Jsb2IvbWFzdGVyL2dkeC9zcmMvY29tL2JhZGxvZ2ljL2dkeC9ncmFwaGljcy9nMmQvUGFydGljbGVSZW5kZXJlci5qYXZhXG4gKi9cblxuLyoqXG4gKlxuICogQGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgc3ByaXRlIGJhdGNoIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gUGFydGljbGVSZW5kZXJlcihyZW5kZXJlcilcbntcbiAgICBPYmplY3RSZW5kZXJlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpbWFnZXMgaW4gdGhlIFBhcnRpY2xlIGJlZm9yZSBpdCBmbHVzaGVzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9IDE1MDAwOy8vQ09OU1QuU1BSSVRFX0JBVENIX1NJWkU7IC8vIDIwMDAgaXMgYSBuaWNlIGJhbGFuY2UgYmV0d2VlbiBtb2JpbGUgLyBkZXNrdG9wXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IHRoaXMuc2l6ZSAqIDY7XG5cblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBpbmRpY2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtVaW50MTZBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmluZGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtSW5kaWNlcyk7XG5cbiAgICBmb3IgKHZhciBpPTAsIGo9MDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KVxuICAgIHtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAwXSA9IGogKyAwO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDFdID0gaiArIDE7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMl0gPSBqICsgMjtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAzXSA9IGogKyAwO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDRdID0gaiArIDI7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgNV0gPSBqICsgMztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzaGFkZXIgdGhhdCBpcyB1c2VkIGlmIGEgc3ByaXRlIGRvZXNuJ3QgaGF2ZSBhIG1vcmUgc3BlY2lmaWMgb25lLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U2hhZGVyfVxuICAgICAqL1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcblxuICAgIHRoaXMudGVtcE1hdHJpeCA9IG5ldyBtYXRoLk1hdHJpeCgpO1xuXG5cblxuXG59XG5cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RSZW5kZXJlci5wcm90b3R5cGUpO1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJ0aWNsZVJlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZVJlbmRlcmVyO1xuXG5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdwYXJ0aWNsZScsIFBhcnRpY2xlUmVuZGVyZXIpO1xuXG4vKipcbiAqIFdoZW4gdGhlcmUgaXMgYSBXZWJHTCBjb250ZXh0IGNoYW5nZVxuICpcbiAqIEBwcml2YXRlXG4gKlxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAvLyBzZXR1cCBkZWZhdWx0IHNoYWRlclxuICAgIHRoaXMuc2hhZGVyID0gbmV3IFBhcnRpY2xlU2hhZGVyKHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlcik7XG5cbiAgICB0aGlzLmluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICAvLyA2NTUzNSBpcyBtYXggaW5kZXgsIHNvIDY1NTM1IC8gNiA9IDEwOTIyLlxuXG4gICAgLy91cGxvYWQgdGhlIGluZGV4IGRhdGFcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcblxuXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW1xuICAgIC8vdmVydGljZXNEYXRhXG4gICAge1xuICAgICAgICBhdHRyaWJ1dGU6dGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sXG4gICAgICAgIGR5bmFtaWM6ZmFsc2UsXG4gICAgICAgIHNpemU6MixcbiAgICAgICAgdXBsb2FkRnVuY3Rpb246dGhpcy51cGxvYWRWZXJ0aWNlcyxcbiAgICAgICAgb2Zmc2V0OjBcbiAgICB9LFxuICAgIC8vIHBvc2l0aW9uRGF0YVxuICAgIHtcbiAgICAgICAgYXR0cmlidXRlOnRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVBvc2l0aW9uQ29vcmQsXG4gICAgICAgIGR5bmFtaWM6dHJ1ZSxcbiAgICAgICAgc2l6ZToyLFxuICAgICAgICB1cGxvYWRGdW5jdGlvbjp0aGlzLnVwbG9hZFBvc2l0aW9uLFxuICAgICAgICBvZmZzZXQ6MFxuICAgIH0sXG4gICAgLy8gcm90YXRpb25EYXRhXG4gICAge1xuICAgICAgICBhdHRyaWJ1dGU6dGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hUm90YXRpb24sXG4gICAgICAgIGR5bmFtaWM6ZmFsc2UsXG4gICAgICAgIHNpemU6MSxcbiAgICAgICAgdXBsb2FkRnVuY3Rpb246dGhpcy51cGxvYWRSb3RhdGlvbixcbiAgICAgICAgb2Zmc2V0OjBcbiAgICB9LFxuICAgIC8vdSB2c0RhdGFcbiAgICB7XG4gICAgICAgIGF0dHJpYnV0ZTp0aGlzLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsXG4gICAgICAgIGR5bmFtaWM6ZmFsc2UsXG4gICAgICAgIHNpemU6MixcbiAgICAgICAgdXBsb2FkRnVuY3Rpb246dGhpcy51cGxvYWRVdnMsXG4gICAgICAgIG9mZnNldDowXG4gICAgfSxcbiAgICAvLyBhbHBoYURhdGFcbiAgICB7XG4gICAgICAgIGF0dHJpYnV0ZTp0aGlzLnNoYWRlci5hdHRyaWJ1dGVzLmFDb2xvcixcbiAgICAgICAgZHluYW1pYzpmYWxzZSxcbiAgICAgICAgc2l6ZToxLFxuICAgICAgICB1cGxvYWRGdW5jdGlvbjp0aGlzLnVwbG9hZEFscGhhLFxuICAgICAgICBvZmZzZXQ6MFxuICAgIH1dO1xuXG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIG5ldyBzcHJpdGUgYmF0Y2guXG4gKlxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIC8vIGJpbmQgdGhlIG1haW4gdGV4dHVyZVxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuXG4gICAgLy8gYmluZCB0aGUgYnVmZmVyc1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG5cbiAgICB2YXIgc2hhZGVyID0gdGhpcy5zaGFkZXI7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKHNoYWRlcik7XG59O1xuXG5cbi8qKlxuICogUmVuZGVycyB0aGUgc3ByaXRlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gY29udGFpbmVyIHtDb250YWluZXJ8U3ByaXRlfSB0aGUgc3ByaXRlIHRvIHJlbmRlciB1c2luZyB0aGlzIFBhcnRpY2xlUmVuZGVyZXJcbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCBjb250YWluZXIgKVxue1xuICAgIHZhciBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlbixcbiAgICAgICAgdG90YWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgbWF4U2l6ZSA9IGNvbnRhaW5lci5fc2l6ZTtcblxuICAgIGlmKHRvdGFsQ2hpbGRyZW4gPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYodG90YWxDaGlsZHJlbiA+IG1heFNpemUpXG4gICAge1xuICAgICAgICB0b3RhbENoaWxkcmVuID0gbWF4U2l6ZTtcbiAgICB9XG5cbiAgICBpZighY29udGFpbmVyLl9idWZmZXJzKVxuICAgIHtcbiAgICAgICAgY29udGFpbmVyLl9idWZmZXJzID0gdGhpcy5nZW5lcmF0ZUJ1ZmZlcnMoIGNvbnRhaW5lciApO1xuICAgIH1cblxuXG5cbiAgICAvLyBpZiB0aGUgdXZzIGhhdmUgbm90IHVwZGF0ZWQgdGhlbiBubyBwb2ludCByZW5kZXJpbmcganVzdCB5ZXQhXG4gICAgLy90aGlzLnJlbmRlcmVyLmJsZW5kTW9kZU1hbmFnZXIuc2V0QmxlbmRNb2RlKHNwcml0ZS5ibGVuZE1vZGUpO1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICB2YXIgbSA9ICBjb250YWluZXIud29ybGRUcmFuc2Zvcm0uY29weSggdGhpcy50ZW1wTWF0cml4ICk7XG4gICAgbS5wcmVwZW5kKCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeCApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYodGhpcy5zaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCBtLnRvQXJyYXkodHJ1ZSkpO1xuXG4gICAgLy8gaWYgdGhpcyB2YXJpYWJsZSBpcyB0cnVlIHRoZW4gd2Ugd2lsbCB1cGxvYWQgdGhlIHN0YXRpYyBjb250ZW50cyBhcyB3ZWxsIGFzIHRoZSBkeW5hbWljIGNvbnRlbnNcbiAgICB2YXIgdXBsb2FkU3RhdGljID0gY29udGFpbmVyLl91cGRhdGVTdGF0aWM7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHRleHR1cmUgaXMgYm91bmQuLlxuICAgIHZhciBiYXNlVGV4dHVyZSA9IGNoaWxkcmVuWzBdLl90ZXh0dXJlLmJhc2VUZXh0dXJlO1xuXG4gICAgaWYgKCFiYXNlVGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pXG4gICAge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnVwZGF0ZVRleHR1cmUoYmFzZVRleHR1cmUpO1xuICAgICAgICBpZighdGhpcy5wcm9wZXJ0aWVzWzBdLmR5bmFtaWMgfHwgIXRoaXMucHJvcGVydGllc1szXS5keW5hbWljKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cGxvYWRTdGF0aWMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGJhc2VUZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSk7XG4gICAgfVxuXG4gICAgLy8gbm93IGxldHMgdXBsb2FkIGFuZCByZW5kZXIgdGhlIGJ1ZmZlcnMuLlxuICAgIHZhciBqID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsQ2hpbGRyZW47IGkrPXRoaXMuc2l6ZSlcbiAgICB7XG4gICAgICAgICB2YXIgYW1vdW50ID0gKCB0b3RhbENoaWxkcmVuIC0gaSk7XG4gICAgICAgIGlmKGFtb3VudCA+IHRoaXMuc2l6ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgYW1vdW50ID0gdGhpcy5zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJ1ZmZlciA9IGNvbnRhaW5lci5fYnVmZmVyc1tqKytdO1xuXG4gICAgICAgIC8vIHdlIGFsd2F5cyB1cGxvYWQgdGhlIGR5bmFtaWNcbiAgICAgICAgYnVmZmVyLnVwbG9hZER5bmFtaWMoY2hpbGRyZW4sIGksIGFtb3VudCk7XG5cbiAgICAgICAgLy8gd2Ugb25seSB1cGxvYWQgdGhlIHN0YXRpYyBjb250ZW50IHdoZW4gd2UgaGF2ZSB0byFcbiAgICAgICAgaWYodXBsb2FkU3RhdGljKVxuICAgICAgICB7XG4gICAgICAgICAgICBidWZmZXIudXBsb2FkU3RhdGljKGNoaWxkcmVuLCBpLCBhbW91bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmluZCB0aGUgYnVmZmVyXG4gICAgICAgIGJ1ZmZlci5iaW5kKCB0aGlzLnNoYWRlciApO1xuXG4gICAgICAgICAvLyBub3cgZHJhdyB0aG9zZSBzdWNrYXMhXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIGFtb3VudCAqIDYsIGdsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5kcmF3Q291bnQrKztcbiAgICB9XG5cbiAgICBjb250YWluZXIuX3VwZGF0ZVN0YXRpYyA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIG9uZSBwYXJ0aWNsZSBidWZmZXIgZm9yIGVhY2ggY2hpbGQgaW4gdGhlIGNvbnRhaW5lciB3ZSB3YW50IHRvIHJlbmRlciBhbmQgdXBkYXRlcyBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lciB7Q29udGFpbmVyfFNwcml0ZX0gdGhlIHNwcml0ZSB0byByZW5kZXIgdXNpbmcgdGhpcyBQYXJ0aWNsZVJlbmRlcmVyXG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLmdlbmVyYXRlQnVmZmVycyA9IGZ1bmN0aW9uICggY29udGFpbmVyIClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsLFxuICAgICAgICBidWZmZXJzID0gW10sXG4gICAgICAgIHNpemUgPSBjb250YWluZXIuX3NpemUsXG4gICAgICAgIGk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIHByb3BlcnRpZXMgdG8gbWF0Y2ggdGhlIHN0YXRlIG9mIHRoZSBjb250YWluZXIuLlxuICAgIGZvciAoaSA9IDA7IGkgPCBjb250YWluZXIuX3Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbaV0uZHluYW1pYyA9IGNvbnRhaW5lci5fcHJvcGVydGllc1tpXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSArPSB0aGlzLnNpemUpXG4gICAge1xuICAgICAgICBidWZmZXJzLnB1c2goIG5ldyBQYXJ0aWNsZUJ1ZmZlcihnbCwgIHRoaXMucHJvcGVydGllcywgdGhpcy5zaXplLCB0aGlzLnNoYWRlcikgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVycztcbn07XG5cblxuLyoqXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIHtBcnJheX0gdGhlIGFycmF5IG9mIGRpc3BsYXkgb2JqZWN0cyB0byByZW5kZXJcbiAqIEBwYXJhbSBzdGFydEluZGV4IHtudW1iZXJ9IHRoZSBpbmRleCB0byBzdGFydCBmcm9tIGluIHRoZSBjaGlsZHJlbiBhcnJheVxuICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGNoaWxkcmVuIHRoYXQgd2lsbCBoYXZlIHRoZWlyIHZlcnRpY2VzIHVwbG9hZGVkXG4gKiBAcGFyYW0gYXJyYXkge0FycmF5fVxuICogQHBhcmFtIHN0cmlkZSB7bnVtYmVyfVxuICogQHBhcmFtIG9mZnNldCB7bnVtYmVyfVxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS51cGxvYWRWZXJ0aWNlcyA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgc3RhcnRJbmRleCwgYW1vdW50LCBhcnJheSwgc3RyaWRlLCBvZmZzZXQpXG57XG4gICAgdmFyIHNwcml0ZSxcbiAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgdHJpbSxcbiAgICAgICAgc3gsXG4gICAgICAgIHN5LFxuICAgICAgICB3MCwgdzEsIGgwLCBoMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcblxuICAgICAgICBzcHJpdGUgPSBjaGlsZHJlbltzdGFydEluZGV4ICsgaV07XG4gICAgICAgIHRleHR1cmUgPSBzcHJpdGUuX3RleHR1cmU7XG4gICAgICAgIHN4ID0gc3ByaXRlLnNjYWxlLng7XG4gICAgICAgIHN5ID0gc3ByaXRlLnNjYWxlLnk7XG5cbiAgICAgICAgaWYgKHRleHR1cmUudHJpbSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHNwcml0ZSBpcyB0cmltbWVkIHRoZW4gd2UgbmVlZCB0byBhZGQgdGhlIGV4dHJhIHNwYWNlIGJlZm9yZSB0cmFuc2Zvcm1pbmcgdGhlIHNwcml0ZSBjb29yZHMuLlxuICAgICAgICAgICAgdHJpbSA9IHRleHR1cmUudHJpbTtcblxuICAgICAgICAgICAgdzEgPSB0cmltLnggLSBzcHJpdGUuYW5jaG9yLnggKiB0cmltLndpZHRoO1xuICAgICAgICAgICAgdzAgPSB3MSArIHRleHR1cmUuY3JvcC53aWR0aDtcblxuICAgICAgICAgICAgaDEgPSB0cmltLnkgLSBzcHJpdGUuYW5jaG9yLnkgKiB0cmltLmhlaWdodDtcbiAgICAgICAgICAgIGgwID0gaDEgKyB0ZXh0dXJlLmNyb3AuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdzAgPSAodGV4dHVyZS5fZnJhbWUud2lkdGggKSAqICgxLXNwcml0ZS5hbmNob3IueCk7XG4gICAgICAgICAgICB3MSA9ICh0ZXh0dXJlLl9mcmFtZS53aWR0aCApICogLXNwcml0ZS5hbmNob3IueDtcblxuICAgICAgICAgICAgaDAgPSB0ZXh0dXJlLl9mcmFtZS5oZWlnaHQgKiAoMS1zcHJpdGUuYW5jaG9yLnkpO1xuICAgICAgICAgICAgaDEgPSB0ZXh0dXJlLl9mcmFtZS5oZWlnaHQgKiAtc3ByaXRlLmFuY2hvci55O1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IHcxICogc3g7XG4gICAgICAgIGFycmF5W29mZnNldCArIDFdID0gaDEgKiBzeTtcblxuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGVdID0gdzAgKiBzeDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICsgMV0gPSBoMSAqIHN5O1xuXG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDJdID0gdzAgKiBzeDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMiArIDFdID0gaDAgKiBzeTtcblxuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzXSA9IHcxICogc3g7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDMgKyAxXSA9IGgwICogc3k7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHN0cmlkZSAqIDQ7XG4gICAgfVxuXG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4ge0FycmF5fSB0aGUgYXJyYXkgb2YgZGlzcGxheSBvYmplY3RzIHRvIHJlbmRlclxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn0gdGhlIGluZGV4IHRvIHN0YXJ0IGZyb20gaW4gdGhlIGNoaWxkcmVuIGFycmF5XG4gKiBAcGFyYW0gYW1vdW50IHtudW1iZXJ9IHRoZSBhbW91bnQgb2YgY2hpbGRyZW4gdGhhdCB3aWxsIGhhdmUgdGhlaXIgcG9zaXRpb25zIHVwbG9hZGVkXG4gKiBAcGFyYW0gYXJyYXkge0FycmF5fVxuICogQHBhcmFtIHN0cmlkZSB7bnVtYmVyfVxuICogQHBhcmFtIG9mZnNldCB7bnVtYmVyfVxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS51cGxvYWRQb3NpdGlvbiA9IGZ1bmN0aW9uIChjaGlsZHJlbixzdGFydEluZGV4LCBhbW91bnQsIGFycmF5LCBzdHJpZGUsIG9mZnNldClcbntcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHNwcml0ZVBvc2l0aW9uID0gY2hpbGRyZW5bc3RhcnRJbmRleCArIGldLnBvc2l0aW9uO1xuXG4gICAgICAgIGFycmF5W29mZnNldF0gPSBzcHJpdGVQb3NpdGlvbi54O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyAxXSA9IHNwcml0ZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlXSA9IHNwcml0ZVBvc2l0aW9uLng7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSArIDFdID0gc3ByaXRlUG9zaXRpb24ueTtcblxuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyXSA9IHNwcml0ZVBvc2l0aW9uLng7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDIgKyAxXSA9IHNwcml0ZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogM10gPSBzcHJpdGVQb3NpdGlvbi54O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzICsgMV0gPSBzcHJpdGVQb3NpdGlvbi55O1xuXG4gICAgICAgIG9mZnNldCArPSBzdHJpZGUgKiA0O1xuICAgIH1cblxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIHtBcnJheX0gdGhlIGFycmF5IG9mIGRpc3BsYXkgb2JqZWN0cyB0byByZW5kZXJcbiAqIEBwYXJhbSBzdGFydEluZGV4IHtudW1iZXJ9IHRoZSBpbmRleCB0byBzdGFydCBmcm9tIGluIHRoZSBjaGlsZHJlbiBhcnJheVxuICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGNoaWxkcmVuIHRoYXQgd2lsbCBoYXZlIHRoZWlyIHJvdGF0aW9uIHVwbG9hZGVkXG4gKiBAcGFyYW0gYXJyYXkge0FycmF5fVxuICogQHBhcmFtIHN0cmlkZSB7bnVtYmVyfVxuICogQHBhcmFtIG9mZnNldCB7bnVtYmVyfVxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS51cGxvYWRSb3RhdGlvbiA9IGZ1bmN0aW9uIChjaGlsZHJlbixzdGFydEluZGV4LCBhbW91bnQsIGFycmF5LCBzdHJpZGUsIG9mZnNldClcbntcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHNwcml0ZVJvdGF0aW9uID0gY2hpbGRyZW5bc3RhcnRJbmRleCArIGldLnJvdGF0aW9uO1xuXG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IHNwcml0ZVJvdGF0aW9uO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGVdID0gc3ByaXRlUm90YXRpb247XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDJdID0gc3ByaXRlUm90YXRpb247XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDNdID0gc3ByaXRlUm90YXRpb247XG5cbiAgICAgICAgb2Zmc2V0ICs9IHN0cmlkZSAqIDQ7XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIHtBcnJheX0gdGhlIGFycmF5IG9mIGRpc3BsYXkgb2JqZWN0cyB0byByZW5kZXJcbiAqIEBwYXJhbSBzdGFydEluZGV4IHtudW1iZXJ9IHRoZSBpbmRleCB0byBzdGFydCBmcm9tIGluIHRoZSBjaGlsZHJlbiBhcnJheVxuICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGNoaWxkcmVuIHRoYXQgd2lsbCBoYXZlIHRoZWlyIFV2cyB1cGxvYWRlZFxuICogQHBhcmFtIGFycmF5IHtBcnJheX1cbiAqIEBwYXJhbSBzdHJpZGUge251bWJlcn1cbiAqIEBwYXJhbSBvZmZzZXQge251bWJlcn1cbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUudXBsb2FkVXZzID0gZnVuY3Rpb24gKGNoaWxkcmVuLHN0YXJ0SW5kZXgsIGFtb3VudCwgYXJyYXksIHN0cmlkZSwgb2Zmc2V0KVxue1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW1vdW50OyBpKyspXG4gICAge1xuICAgICAgICB2YXIgdGV4dHVyZVV2cyA9IGNoaWxkcmVuW3N0YXJ0SW5kZXggKyBpXS5fdGV4dHVyZS5fdXZzO1xuXG4gICAgICAgIGlmICh0ZXh0dXJlVXZzKVxuICAgICAgICB7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXRdID0gdGV4dHVyZVV2cy54MDtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIDFdID0gdGV4dHVyZVV2cy55MDtcblxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlXSA9IHRleHR1cmVVdnMueDE7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKyAxXSA9IHRleHR1cmVVdnMueTE7XG5cbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDJdID0gdGV4dHVyZVV2cy54MjtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDIgKyAxXSA9IHRleHR1cmVVdnMueTI7XG5cbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDNdID0gdGV4dHVyZVV2cy54MztcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDMgKyAxXSA9IHRleHR1cmVVdnMueTM7XG5cbiAgICAgICAgICAgIG9mZnNldCArPSBzdHJpZGUgKiA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy9UT0RPIHlvdSBrbm93IHRoaXMgY2FuIGJlIGVhc2llciFcbiAgICAgICAgICAgIGFycmF5W29mZnNldF0gPSAwO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSAwO1xuXG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGVdID0gMDtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSArIDFdID0gMDtcblxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMl0gPSAwO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMiArIDFdID0gMDtcblxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogM10gPSAwO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMyArIDFdID0gMDtcblxuICAgICAgICAgICAgb2Zmc2V0ICs9IHN0cmlkZSAqIDQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4ge0FycmF5fSB0aGUgYXJyYXkgb2YgZGlzcGxheSBvYmplY3RzIHRvIHJlbmRlclxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn0gdGhlIGluZGV4IHRvIHN0YXJ0IGZyb20gaW4gdGhlIGNoaWxkcmVuIGFycmF5XG4gKiBAcGFyYW0gYW1vdW50IHtudW1iZXJ9IHRoZSBhbW91bnQgb2YgY2hpbGRyZW4gdGhhdCB3aWxsIGhhdmUgdGhlaXIgYWxwaGEgdXBsb2FkZWRcbiAqIEBwYXJhbSBhcnJheSB7QXJyYXl9XG4gKiBAcGFyYW0gc3RyaWRlIHtudW1iZXJ9XG4gKiBAcGFyYW0gb2Zmc2V0IHtudW1iZXJ9XG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnVwbG9hZEFscGhhID0gZnVuY3Rpb24gKGNoaWxkcmVuLHN0YXJ0SW5kZXgsIGFtb3VudCwgYXJyYXksIHN0cmlkZSwgb2Zmc2V0KVxue1xuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKVxuICAgICB7XG4gICAgICAgIHZhciBzcHJpdGVBbHBoYSA9IGNoaWxkcmVuW3N0YXJ0SW5kZXggKyBpXS5hbHBoYTtcblxuICAgICAgICBhcnJheVtvZmZzZXRdID0gc3ByaXRlQWxwaGE7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZV0gPSBzcHJpdGVBbHBoYTtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMl0gPSBzcHJpdGVBbHBoYTtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogM10gPSBzcHJpdGVBbHBoYTtcblxuICAgICAgICBvZmZzZXQgKz0gc3RyaWRlICogNDtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogRGVzdHJveXMgdGhlIFBhcnRpY2xlLlxuICpcbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG5cbiAgICB0aGlzLnNoYWRlci5kZXN0cm95KCk7XG5cbiAgICAvL1RPRE8gaW1wbGVtZW50IHRoaXMhXG59O1xuIiwidmFyIFRleHR1cmVTaGFkZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvc2hhZGVycy9UZXh0dXJlU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBUZXh0dXJlU2hhZGVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHNoYWRlck1hbmFnZXIge1NoYWRlck1hbmFnZXJ9IFRoZSB3ZWJnbCBzaGFkZXIgbWFuYWdlciB0aGlzIHNoYWRlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIFBhcnRpY2xlU2hhZGVyKHNoYWRlck1hbmFnZXIpXG57XG4gICAgVGV4dHVyZVNoYWRlci5jYWxsKHRoaXMsXG4gICAgICAgIHNoYWRlck1hbmFnZXIsXG4gICAgICAgIC8vIHZlcnRleCBzaGFkZXJcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgZmxvYXQgYUNvbG9yOycsXG5cbiAgICAgICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhUG9zaXRpb25Db29yZDsnLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFTY2FsZTsnLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSBmbG9hdCBhUm90YXRpb247JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4OycsXG5cbiAgICAgICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuICAgICAgICAgICAgJ3ZhcnlpbmcgZmxvYXQgdkNvbG9yOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCl7JyxcbiAgICAgICAgICAgICcgICB2ZWMyIHYgPSBhVmVydGV4UG9zaXRpb247JyxcblxuICAgICAgICAgICAgJyAgIHYueCA9IChhVmVydGV4UG9zaXRpb24ueCkgKiBjb3MoYVJvdGF0aW9uKSAtIChhVmVydGV4UG9zaXRpb24ueSkgKiBzaW4oYVJvdGF0aW9uKTsnLFxuICAgICAgICAgICAgJyAgIHYueSA9IChhVmVydGV4UG9zaXRpb24ueCkgKiBzaW4oYVJvdGF0aW9uKSArIChhVmVydGV4UG9zaXRpb24ueSkgKiBjb3MoYVJvdGF0aW9uKTsnLFxuICAgICAgICAgICAgJyAgIHYgPSB2ICsgYVBvc2l0aW9uQ29vcmQ7JyxcblxuICAgICAgICAgICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHZlYzModiwgMS4wKSkueHksIDAuMCwgMS4wKTsnLFxuXG4gICAgICAgICAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICcgICB2Q29sb3IgPSBhQ29sb3I7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgICAvLyBoZWxsb1xuICAgICAgICAgW1xuICAgICAgICAgICAgJ3ByZWNpc2lvbiBsb3dwIGZsb2F0OycsXG5cbiAgICAgICAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuICAgICAgICAgICAgJ3ZhcnlpbmcgZmxvYXQgdkNvbG9yOycsXG5cbiAgICAgICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkKSAqIHZDb2xvciA7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgICAvLyBjdXN0b20gdW5pZm9ybXNcbiAgICAgICAgbnVsbCxcbiAgICAgICAgLy8gY3VzdG9tIGF0dHJpYnV0ZXNcbiAgICAgICAge1xuICAgICAgICAgICAgYVBvc2l0aW9uQ29vcmQ6IDAsXG4gICAgICAgICAgIC8vIGFTY2FsZTogICAgICAgICAwLFxuICAgICAgICAgICAgYVJvdGF0aW9uOiAgICAgIDBcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBURU1QIEhBQ0tcblxufVxuXG5QYXJ0aWNsZVNoYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRleHR1cmVTaGFkZXIucHJvdG90eXBlKTtcblBhcnRpY2xlU2hhZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcnRpY2xlU2hhZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlU2hhZGVyO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKSxcbiAgICBtYXRoID0gcmVxdWlyZSgnLi4vbWF0aCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcblxuLyoqXG4gKiBUaGUgQ2FudmFzUmVuZGVyZXIgZHJhd3MgdGhlIHNjZW5lIGFuZCBhbGwgaXRzIGNvbnRlbnQgb250byBhIDJkIGNhbnZhcy4gVGhpcyByZW5kZXJlciBzaG91bGQgYmUgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB3ZWJHTC5cbiAqIERvbid0IGZvcmdldCB0byBhZGQgdGhlIENhbnZhc1JlbmRlcmVyLnZpZXcgdG8geW91ciBET00gb3IgeW91IHdpbGwgbm90IHNlZSBhbnl0aGluZyA6KVxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBzeXN0ZW0ge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHN5c3RlbSB0aGlzIHJlbmRlcmVyIGlzIGZvci5cbiAqIEBwYXJhbSBbd2lkdGg9ODAwXSB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gW2hlaWdodD02MDBdIHtudW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gW29wdGlvbnNdIHtvYmplY3R9IFRoZSBvcHRpb25hbCByZW5kZXJlciBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gW29wdGlvbnMudmlld10ge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY2FudmFzIHRvIHVzZSBhcyBhIHZpZXcsIG9wdGlvbmFsXG4gKiBAcGFyYW0gW29wdGlvbnMudHJhbnNwYXJlbnQ9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbb3B0aW9ucy5hdXRvUmVzaXplPWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIGF1dG9tYXRpY2FsbHkgcmVzaXplZCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtvcHRpb25zLmFudGlhbGlhcz1mYWxzZV0ge2Jvb2xlYW59IHNldHMgYW50aWFsaWFzIChvbmx5IGFwcGxpY2FibGUgaW4gY2hyb21lIGF0IHRoZSBtb21lbnQpXG4gKiBAcGFyYW0gW29wdGlvbnMucmVzb2x1dGlvbj0xXSB7bnVtYmVyfSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyZXIgcmV0aW5hIHdvdWxkIGJlIDJcbiAqIEBwYXJhbSBbb3B0aW9ucy5jbGVhckJlZm9yZVJlbmRlcj10cnVlXSB7Ym9vbGVhbn0gVGhpcyBzZXRzIGlmIHRoZSBDYW52YXNSZW5kZXJlciB3aWxsIGNsZWFyIHRoZSBjYW52YXMgb3JcbiAqICAgICAgbm90IGJlZm9yZSB0aGUgbmV3IHJlbmRlciBwYXNzLlxuICovXG5mdW5jdGlvbiBTeXN0ZW1SZW5kZXJlcihzeXN0ZW0sIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpXG57XG4gICAgdXRpbHMuc2F5SGVsbG8oc3lzdGVtKTtcblxuICAgIC8vIHByZXBhcmUgb3B0aW9uc1xuICAgIGlmIChvcHRpb25zKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBDT05TVC5ERUZBVUxUX1JFTkRFUl9PUFRJT05TKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNbaV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbaV0gPSBDT05TVC5ERUZBVUxUX1JFTkRFUl9PUFRJT05TW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG9wdGlvbnMgPSBDT05TVC5ERUZBVUxUX1JFTkRFUl9PUFRJT05TO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JFTkRFUkVSX1RZUEV9XG4gICAgICogQGRlZmF1bHQgQ09OVC5SRU5ERVJFUl9UWVBFLlVOS05PV05cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5SRU5ERVJFUl9UWVBFLlVOS05PV047XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGNhbnZhcyB2aWV3XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgODAwXG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IDgwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyB2aWV3XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgNjAwXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbnZhcyBlbGVtZW50IHRoYXQgZXZlcnl0aGluZyBpcyBkcmF3biB0b1xuICAgICAqXG4gICAgICogQG1lbWJlciB7SFRNTENhbnZhc0VsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy52aWV3ID0gb3B0aW9ucy52aWV3IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IG9wdGlvbnMucmVzb2x1dGlvbjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJlbmRlciB2aWV3IGlzIHRyYW5zcGFyZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNwYXJlbnQgPSBvcHRpb25zLnRyYW5zcGFyZW50O1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcmVuZGVyIHZpZXcgc2hvdWxkIGJlIHJlc2l6ZWQgYXV0b21hdGljYWxseVxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9SZXNpemUgPSBvcHRpb25zLmF1dG9SZXNpemUgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGJsZW5kIG1vZGVzIHVzZWZ1bCBmb3IgdGhpcyByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdDxzdHJpbmcsIG1peGVkPn1cbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBudWxsO1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBUT0RPOiBDb21iaW5lIHRoZXNlIVxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBwcmVzZXJ2ZURyYXdpbmdCdWZmZXIgZmxhZyBhZmZlY3RzIHdoZXRoZXIgb3Igbm90IHRoZSBjb250ZW50cyBvZiB0aGUgc3RlbmNpbCBidWZmZXIgaXMgcmV0YWluZWQgYWZ0ZXIgcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnByZXNlcnZlRHJhd2luZ0J1ZmZlciA9IG9wdGlvbnMucHJlc2VydmVEcmF3aW5nQnVmZmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBzZXRzIGlmIHRoZSBDYW52YXNSZW5kZXJlciB3aWxsIGNsZWFyIHRoZSBjYW52YXMgb3Igbm90IGJlZm9yZSB0aGUgbmV3IHJlbmRlciBwYXNzLlxuICAgICAqIElmIHRoZSBzY2VuZSBpcyBOT1QgdHJhbnNwYXJlbnQgUGl4aSB3aWxsIHVzZSBhIGNhbnZhcyBzaXplZCBmaWxsUmVjdCBvcGVyYXRpb24gZXZlcnkgZnJhbWUgdG8gc2V0IHRoZSBjYW52YXMgYmFja2dyb3VuZCBjb2xvci5cbiAgICAgKiBJZiB0aGUgc2NlbmUgaXMgdHJhbnNwYXJlbnQgUGl4aSB3aWxsIHVzZSBjbGVhclJlY3QgdG8gY2xlYXIgdGhlIGNhbnZhcyBldmVyeSBmcmFtZS5cbiAgICAgKiBEaXNhYmxlIHRoaXMgYnkgc2V0dGluZyB0aGlzIHRvIGZhbHNlLiBGb3IgZXhhbXBsZSBpZiB5b3VyIGdhbWUgaGFzIGEgY2FudmFzIGZpbGxpbmcgYmFja2dyb3VuZCBpbWFnZSB5b3Ugb2Z0ZW4gZG9uJ3QgbmVlZCB0aGlzIHNldC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHRcbiAgICAgKi9cbiAgICB0aGlzLmNsZWFyQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5jbGVhckJlZm9yZVJlbmRlcjtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciBhcyBhIG51bWJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IDB4RkZGRkZGO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhY2tncm91bmQgY29sb3IgYXMgYW4gW1IsIEcsIEJdIGFycmF5LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JSZ2IgPSBbMSwgMSwgMV07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciBhcyBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvclN0cmluZyA9ICcjMDAwMDAwJztcblxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5fYmFja2dyb3VuZENvbG9yOyAvLyBydW4gYmcgY29sb3Igc2V0dGVyXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHRlbXBvcmFyeSBkaXNwbGF5IG9iamVjdCB1c2VkIGFzIHRoZSBwYXJlbnQgb2YgdGhlIGN1cnJlbnRseSBiZWluZyByZW5kZXJlZCBpdGVtXG4gICAgICogQG1lbWJlciB7RGlzcGxheU9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBEaXNwbGF5T2JqZWN0UGFyZW50ID0ge3dvcmxkVHJhbnNmb3JtOm5ldyBtYXRoLk1hdHJpeCgpLCB3b3JsZEFscGhhOjEsIGNoaWxkcmVuOltdfTtcblxuICAgIC8vXG4gICAgdGhpcy5fbGFzdE9iamVjdFJlbmRlcmVkID0gdGhpcy5fdGVtcERpc3BsYXlPYmplY3RQYXJlbnQ7XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5TeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeXN0ZW1SZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gU3lzdGVtUmVuZGVyZXI7XG5cbnV0aWxzLmV2ZW50VGFyZ2V0Lm1peGluKFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGZpbGwgaWYgbm90IHRyYW5zcGFyZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN5c3RlbVJlbmRlcmVyI1xuICAgICAqL1xuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWw7XG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JTdHJpbmcgPSB1dGlscy5oZXgyc3RyaW5nKHZhbCk7XG4gICAgICAgICAgICB1dGlscy5oZXgycmdiKHZhbCwgdGhpcy5fYmFja2dyb3VuZENvbG9yUmdiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIFJlc2l6ZXMgdGhlIGNhbnZhcyB2aWV3IHRvIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodFxuICpcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSB0aGUgbmV3IHdpZHRoIG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgbmV3IGhlaWdodCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqL1xuU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoICogdGhpcy5yZXNvbHV0aW9uO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uO1xuXG4gICAgdGhpcy52aWV3LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLnZpZXcuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5hdXRvUmVzaXplKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCAvIHRoaXMucmVzb2x1dGlvbiArICdweCc7XG4gICAgICAgIHRoaXMudmlldy5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCAvIHRoaXMucmVzb2x1dGlvbiArICdweCc7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgcmVuZGVyZXIgYW5kIG9wdGlvbmFsbHkgcmVtb3ZlcyB0aGUgQ2FudmFzIERPTSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBbcmVtb3ZlVmlldz1mYWxzZV0ge2Jvb2xlYW59IFJlbW92ZXMgdGhlIENhbnZhcyBlbGVtZW50IGZyb20gdGhlIERPTS5cbiAqL1xuU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlVmlldykge1xuICAgIGlmIChyZW1vdmVWaWV3ICYmIHRoaXMudmlldy5wYXJlbnQpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMudmlldyk7XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gQ09OU1QuUkVOREVSRVJfVFlQRS5VTktOT1dOO1xuXG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gICAgdGhpcy52aWV3ID0gbnVsbDtcblxuICAgIHRoaXMucmVzb2x1dGlvbiA9IDA7XG5cbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gZmFsc2U7XG5cbiAgICB0aGlzLmF1dG9SZXNpemUgPSBmYWxzZTtcblxuICAgIHRoaXMuYmxlbmRNb2RlcyA9IG51bGw7XG5cbiAgICB0aGlzLnByZXNlcnZlRHJhd2luZ0J1ZmZlciA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJCZWZvcmVSZW5kZXIgPSBmYWxzZTtcblxuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IDA7XG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yUmdiID0gbnVsbDtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JTdHJpbmcgPSBudWxsO1xufTtcbiIsInZhciBTeXN0ZW1SZW5kZXJlciA9IHJlcXVpcmUoJy4uL1N5c3RlbVJlbmRlcmVyJyksXG4gICAgQ2FudmFzTWFza01hbmFnZXIgPSByZXF1aXJlKCcuL3V0aWxzL0NhbnZhc01hc2tNYW5hZ2VyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscycpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi8uLi9tYXRoJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBDYW52YXNSZW5kZXJlciBkcmF3cyB0aGUgc2NlbmUgYW5kIGFsbCBpdHMgY29udGVudCBvbnRvIGEgMmQgY2FudmFzLiBUaGlzIHJlbmRlcmVyIHNob3VsZCBiZSB1c2VkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHdlYkdMLlxuICogRG9uJ3QgZm9yZ2V0IHRvIGFkZCB0aGUgQ2FudmFzUmVuZGVyZXIudmlldyB0byB5b3VyIERPTSBvciB5b3Ugd2lsbCBub3Qgc2VlIGFueXRoaW5nIDopXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU3lzdGVtUmVuZGVyZXJcbiAqIEBwYXJhbSBbd2lkdGg9ODAwXSB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gW2hlaWdodD02MDBdIHtudW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gW29wdGlvbnNdIHtvYmplY3R9IFRoZSBvcHRpb25hbCByZW5kZXJlciBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gW29wdGlvbnMudmlld10ge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY2FudmFzIHRvIHVzZSBhcyBhIHZpZXcsIG9wdGlvbmFsXG4gKiBAcGFyYW0gW29wdGlvbnMudHJhbnNwYXJlbnQ9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbb3B0aW9ucy5hdXRvUmVzaXplPWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIGF1dG9tYXRpY2FsbHkgcmVzaXplZCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtvcHRpb25zLmFudGlhbGlhcz1mYWxzZV0ge2Jvb2xlYW59IHNldHMgYW50aWFsaWFzIChvbmx5IGFwcGxpY2FibGUgaW4gY2hyb21lIGF0IHRoZSBtb21lbnQpXG4gKiBAcGFyYW0gW29wdGlvbnMucmVzb2x1dGlvbj0xXSB7bnVtYmVyfSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyZXIgcmV0aW5hIHdvdWxkIGJlIDJcbiAqIEBwYXJhbSBbb3B0aW9ucy5jbGVhckJlZm9yZVJlbmRlcj10cnVlXSB7Ym9vbGVhbn0gVGhpcyBzZXRzIGlmIHRoZSBDYW52YXNSZW5kZXJlciB3aWxsIGNsZWFyIHRoZSBjYW52YXMgb3JcbiAqICAgICAgbm90IGJlZm9yZSB0aGUgbmV3IHJlbmRlciBwYXNzLlxuICovXG5mdW5jdGlvbiBDYW52YXNSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKVxue1xuICAgIFN5c3RlbVJlbmRlcmVyLmNhbGwodGhpcywgJ0NhbnZhcycsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy50eXBlID0gQ09OU1QuUkVOREVSRVJfVFlQRS5DQU5WQVM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIDJkIGNvbnRleHQgdGhhdCBldmVyeXRoaW5nIGlzIGRyYXduIHdpdGguXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XG4gICAgICovXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy52aWV3LmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdGhpcy50cmFuc3BhcmVudCB9KTtcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gZmxhZyBjb250cm9sbGluZyBjYW52YXMgcmVmcmVzaC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWZyZXNoID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbmNlIG9mIGEgQ2FudmFzTWFza01hbmFnZXIsIGhhbmRsZXMgbWFza2luZyB3aGVuIHVzaW5nIHRoZSBjYW52YXMgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtDYW52YXNNYXNrTWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLm1hc2tNYW5hZ2VyID0gbmV3IENhbnZhc01hc2tNYW5hZ2VyKCk7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlIFBpeGkgd2lsbCBNYXRoLmZsb29yKCkgeC95IHZhbHVlcyB3aGVuIHJlbmRlcmluZywgc3RvcHBpbmcgcGl4ZWwgaW50ZXJwb2xhdGlvbi5cbiAgICAgKiBIYW5keSBmb3IgY3Jpc3AgcGl4ZWwgYXJ0IGFuZCBzcGVlZCBvbiBsZWdhY3kgZGV2aWNlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yb3VuZFBpeGVscyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBhY3RpdmUgc2NhbGUgbW9kZSBmb3IgdGhpcyByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1NDQUxFX01PREV9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlID0gQ09OU1QuU0NBTEVfTU9ERVMuREVGQVVMVDtcblxuICAgIC8qKlxuICAgICAqIFRyYWNrcyB0aGUgYWN0aXZlIGJsZW5kIG1vZGUgZm9yIHRoaXMgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTQ0FMRV9NT0RFfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYW52YXMgcHJvcGVydHkgdXNlZCB0byBzZXQgdGhlIGNhbnZhcyBzbW9vdGhpbmcgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zbW9vdGhQcm9wZXJ0eSA9ICdpbWFnZVNtb290aGluZ0VuYWJsZWQnO1xuXG4gICAgaWYgKCF0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoUHJvcGVydHkgPSAnd2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNtb290aFByb3BlcnR5ID0gJ21vekltYWdlU21vb3RoaW5nRW5hYmxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250ZXh0Lm9JbWFnZVNtb290aGluZ0VuYWJsZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoUHJvcGVydHkgPSAnb0ltYWdlU21vb3RoaW5nRW5hYmxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250ZXh0Lm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNtb290aFByb3BlcnR5ID0gJ21zSW1hZ2VTbW9vdGhpbmdFbmFibGVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5pdFBsdWdpbnMoKTtcblxuICAgIHRoaXMuX21hcEJsZW5kTW9kZXMoKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgdGVtcG9yYXJ5IGRpc3BsYXkgb2JqZWN0IHVzZWQgYXMgdGhlIHBhcmVudCBvZiB0aGUgY3VycmVudGx5IGJlaW5nIHJlbmRlcmVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Rpc3BsYXlPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wRGlzcGxheU9iamVjdFBhcmVudCA9IHtcbiAgICAgICAgd29ybGRUcmFuc2Zvcm06IG5ldyBtYXRoLk1hdHJpeCgpLFxuICAgICAgICB3b3JsZEFscGhhOiAxXG4gICAgfTtcblxuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5DYW52YXNSZW5kZXJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZSk7XG5DYW52YXNSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDYW52YXNSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzUmVuZGVyZXI7XG51dGlscy5wbHVnaW5UYXJnZXQubWl4aW4oQ2FudmFzUmVuZGVyZXIpO1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB0byB0aGlzIGNhbnZhcyB2aWV3XG4gKlxuICogQHBhcmFtIG9iamVjdCB7RGlzcGxheU9iamVjdH0gdGhlIG9iamVjdCB0byBiZSByZW5kZXJlZFxuICovXG5DYW52YXNSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKG9iamVjdClcbntcbiAgICB2YXIgY2FjaGVQYXJlbnQgPSBvYmplY3QucGFyZW50O1xuXG4gICAgdGhpcy5fbGFzdE9iamVjdFJlbmRlcmVkID0gb2JqZWN0O1xuXG4gICAgb2JqZWN0LnBhcmVudCA9IHRoaXMuX3RlbXBEaXNwbGF5T2JqZWN0UGFyZW50O1xuXG4gICAgLy8gdXBkYXRlIHRoZSBzY2VuZSBncmFwaFxuICAgIG9iamVjdC51cGRhdGVUcmFuc2Zvcm0oKTtcblxuICAgIG9iamVjdC5wYXJlbnQgPSBjYWNoZVBhcmVudDtcblxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuXG4gICAgdGhpcy5jdXJyZW50QmxlbmRNb2RlID0gQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMO1xuICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMXTtcblxuICAgIGlmIChuYXZpZ2F0b3IuaXNDb2Nvb25KUyAmJiB0aGlzLnZpZXcuc2NyZWVuY2FudmFzKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsZWFyQmVmb3JlUmVuZGVyKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuX2JhY2tncm91bmRDb2xvclN0cmluZztcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoICwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJEaXNwbGF5T2JqZWN0KG9iamVjdCwgdGhpcy5jb250ZXh0KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBldmVyeXRoaW5nIGZyb20gdGhlIHJlbmRlcmVyIGFuZCBvcHRpb25hbGx5IHJlbW92ZXMgdGhlIENhbnZhcyBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gW3JlbW92ZVZpZXc9ZmFsc2VdIHtib29sZWFufSBSZW1vdmVzIHRoZSBDYW52YXMgZWxlbWVudCBmcm9tIHRoZSBET00uXG4gKi9cbkNhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHJlbW92ZVZpZXcpXG57XG4gICAgdGhpcy5kZXN0cm95UGx1Z2lucygpO1xuXG4gICAgLy8gY2FsbCB0aGUgYmFzZSBkZXN0cm95XG4gICAgU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzLCByZW1vdmVWaWV3KTtcblxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG5cbiAgICB0aGlzLnJlZnJlc2ggPSB0cnVlO1xuXG4gICAgdGhpcy5tYXNrTWFuYWdlci5kZXN0cm95KCk7XG4gICAgdGhpcy5tYXNrTWFuYWdlciA9IG51bGw7XG5cbiAgICB0aGlzLnJvdW5kUGl4ZWxzID0gZmFsc2U7XG5cbiAgICB0aGlzLmN1cnJlbnRTY2FsZU1vZGUgPSAwO1xuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IDA7XG5cbiAgICB0aGlzLnNtb290aFByb3BlcnR5ID0gbnVsbDtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGRpc3BsYXkgb2JqZWN0XG4gKlxuICogQHBhcmFtIGRpc3BsYXlPYmplY3Qge0Rpc3BsYXlPYmplY3R9IFRoZSBkaXNwbGF5T2JqZWN0IHRvIHJlbmRlclxuICogQHByaXZhdGVcbiAqL1xuQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckRpc3BsYXlPYmplY3QgPSBmdW5jdGlvbiAoZGlzcGxheU9iamVjdCwgY29udGV4dClcbntcbiAgICB2YXIgdGVtcENvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGRpc3BsYXlPYmplY3QucmVuZGVyQ2FudmFzKHRoaXMpO1xuICAgIHRoaXMuY29udGV4dCA9IHRlbXBDb250ZXh0O1xufTtcblxuLyoqXG4gKiBNYXBzIFBpeGkgYmxlbmQgbW9kZXMgdG8gY2FudmFzIGJsZW5kIG1vZGVzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkNhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5fbWFwQmxlbmRNb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKCF0aGlzLmJsZW5kTW9kZXMpXG4gICAge1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXMgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuY2FuVXNlTmV3Q2FudmFzQmxlbmRNb2RlcygpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMXSAgICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkFERF0gICAgICAgICAgID0gJ2xpZ2h0ZXInOyAvL0lTIFRISVMgT0s/Pz9cbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5NVUxUSVBMWV0gICAgICA9ICdtdWx0aXBseSc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU0NSRUVOXSAgICAgICAgPSAnc2NyZWVuJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5PVkVSTEFZXSAgICAgICA9ICdvdmVybGF5JztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5EQVJLRU5dICAgICAgICA9ICdkYXJrZW4nO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkxJR0hURU5dICAgICAgID0gJ2xpZ2h0ZW4nO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SX0RPREdFXSAgID0gJ2NvbG9yLWRvZGdlJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl9CVVJOXSAgICA9ICdjb2xvci1idXJuJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5IQVJEX0xJR0hUXSAgICA9ICdoYXJkLWxpZ2h0JztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TT0ZUX0xJR0hUXSAgICA9ICdzb2Z0LWxpZ2h0JztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5ESUZGRVJFTkNFXSAgICA9ICdkaWZmZXJlbmNlJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5FWENMVVNJT05dICAgICA9ICdleGNsdXNpb24nO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkhVRV0gICAgICAgICAgID0gJ2h1ZSc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU0FUVVJBVElPTl0gICAgPSAnc2F0dXJhdGlvbic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JdICAgICAgICAgPSAnY29sb3InO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkxVTUlOT1NJVFldICAgID0gJ2x1bWlub3NpdHknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcyBtZWFucyB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGNvb2wgbmV3IGJsZW5kIG1vZGVzIGluIGNhbnZhcyAnY291Z2gnIGllICdjb3VnaCdcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5OT1JNQUxdICAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQUREXSAgICAgICAgICAgPSAnbGlnaHRlcic7IC8vSVMgVEhJUyBPSz8/P1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk1VTFRJUExZXSAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TQ1JFRU5dICAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuT1ZFUkxBWV0gICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkRBUktFTl0gICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5MSUdIVEVOXSAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JfRE9ER0VdICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SX0JVUk5dICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5IQVJEX0xJR0hUXSAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU09GVF9MSUdIVF0gICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkRJRkZFUkVOQ0VdICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5FWENMVVNJT05dICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuSFVFXSAgICAgICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNBVFVSQVRJT05dICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl0gICAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTFVNSU5PU0lUWV0gICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIENhbnZhcyBlbGVtZW50IG9mIHRoZSBnaXZlbiBzaXplLlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSB0aGUgd2lkdGggZm9yIHRoZSBuZXdseSBjcmVhdGVkIGNhbnZhc1xuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgaGVpZ2h0IGZvciB0aGUgbmV3bHkgY3JlYXRlZCBjYW52YXNcbiAqL1xuZnVuY3Rpb24gQ2FudmFzQnVmZmVyKHdpZHRoLCBoZWlnaHQpXG57XG4gICAgLyoqXG4gICAgICogVGhlIENhbnZhcyBvYmplY3QgdGhhdCBiZWxvbmdzIHRvIHRoaXMgQ2FudmFzQnVmZmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7SFRNTENhbnZhc0VsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICAgIC8qKlxuICAgICAqIEEgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIG9iamVjdCByZXByZXNlbnRpbmcgYSB0d28tZGltZW5zaW9uYWwgcmVuZGVyaW5nIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XG4gICAgICovXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xufVxuXG5DYW52YXNCdWZmZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2FudmFzQnVmZmVyO1xubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNCdWZmZXI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENhbnZhc0J1ZmZlci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGNhbnZhcyBidWZmZXIgaW4gcGl4ZWxzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNCdWZmZXIjXG4gICAgICovXG4gICAgd2lkdGg6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2YWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBidWZmZXIgaW4gcGl4ZWxzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNCdWZmZXIjXG4gICAgICovXG4gICAgaGVpZ2h0OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIGNhbnZhcyB0aGF0IHdhcyBjcmVhdGVkIGJ5IHRoZSBDYW52YXNCdWZmZXIgY2xhc3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQ2FudmFzQnVmZmVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG59O1xuXG4vKipcbiAqIFJlc2l6ZXMgdGhlIGNhbnZhcyB0byB0aGUgc3BlY2lmaWVkIHdpZHRoIGFuZCBoZWlnaHQuXG4gKlxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IHRoZSBuZXcgd2lkdGggb2YgdGhlIGNhbnZhc1xuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgbmV3IGhlaWdodCBvZiB0aGUgY2FudmFzXG4gKi9cbkNhbnZhc0J1ZmZlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpXG57XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoaXMgY2FudmFzLlxuICpcbiAqL1xuQ2FudmFzQnVmZmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbn07XG4iLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyB1c2VkIGJ5IHRoZSBjYW52YXMgcmVuZGVyZXIgdG8gZHJhdyB0aGUgcHJpbWl0aXZlIGdyYXBoaWNzIGRhdGEuXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG52YXIgQ2FudmFzR3JhcGhpY3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKlxuICogUmVuZGVycyBhIEdyYXBoaWNzIG9iamVjdCB0byBhIGNhbnZhcy5cbiAqXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfSB0aGUgYWN0dWFsIGdyYXBoaWNzIG9iamVjdCB0byByZW5kZXJcbiAqIEBwYXJhbSBjb250ZXh0IHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IHRoZSAyZCBkcmF3aW5nIG1ldGhvZCBvZiB0aGUgY2FudmFzXG4gKi9cbkNhbnZhc0dyYXBoaWNzLnJlbmRlckdyYXBoaWNzID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBjb250ZXh0KVxue1xuICAgIHZhciB3b3JsZEFscGhhID0gZ3JhcGhpY3Mud29ybGRBbHBoYTtcblxuICAgIGlmIChncmFwaGljcy5kaXJ0eSlcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlR3JhcGhpY3NUaW50KGdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MuZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBoaWNzLmdyYXBoaWNzRGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBkYXRhID0gZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhW2ldO1xuICAgICAgICB2YXIgc2hhcGUgPSBkYXRhLnNoYXBlO1xuXG4gICAgICAgIHZhciBmaWxsQ29sb3IgPSBkYXRhLl9maWxsVGludDtcbiAgICAgICAgdmFyIGxpbmVDb2xvciA9IGRhdGEuX2xpbmVUaW50O1xuXG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gZGF0YS5saW5lV2lkdGg7XG5cbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlBPTFkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgICAgIHZhciBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHBvaW50c1swXSwgcG9pbnRzWzFdKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaj0xOyBqIDwgcG9pbnRzLmxlbmd0aC8yOyBqKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocG9pbnRzW2ogKiAyXSwgcG9pbnRzW2ogKiAyICsgMV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hhcGUuY2xvc2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHBvaW50c1swXSwgcG9pbnRzWzFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGFuZCBsYXN0IHBvaW50IGFyZSB0aGUgc2FtZSBjbG9zZSB0aGUgcGF0aCAtIG11Y2ggbmVhdGVyIDopXG4gICAgICAgICAgICBpZiAocG9pbnRzWzBdID09PSBwb2ludHNbcG9pbnRzLmxlbmd0aC0yXSAmJiBwb2ludHNbMV0gPT09IHBvaW50c1twb2ludHMubGVuZ3RoLTFdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEuZmlsbEFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBmaWxsQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lV2lkdGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEubGluZUFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGxpbmVDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJFQ1QpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZmlsbENvbG9yIHx8IGRhdGEuZmlsbENvbG9yID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmZpbGxBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggZmlsbENvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3Qoc2hhcGUueCwgc2hhcGUueSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxpbmVXaWR0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5saW5lQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggbGluZUNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdChzaGFwZS54LCBzaGFwZS55LCBzaGFwZS53aWR0aCwgc2hhcGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5DSVJDKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUT0RPIC0gbmVlZCB0byBiZSBVbmRlZmluZWQhXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5hcmMoc2hhcGUueCwgc2hhcGUueSwgc2hhcGUucmFkaXVzLDAsMipNYXRoLlBJKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEuZmlsbEFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBmaWxsQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lV2lkdGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEubGluZUFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGxpbmVDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkVMSVApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGVsbGlwc2UgY29kZSB0YWtlbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxNzI3OTgvaG93LXRvLWRyYXctYW4tb3ZhbC1pbi1odG1sNS1jYW52YXNcblxuICAgICAgICAgICAgdmFyIHcgPSBzaGFwZS53aWR0aCAqIDI7XG4gICAgICAgICAgICB2YXIgaCA9IHNoYXBlLmhlaWdodCAqIDI7XG5cbiAgICAgICAgICAgIHZhciB4ID0gc2hhcGUueCAtIHcvMjtcbiAgICAgICAgICAgIHZhciB5ID0gc2hhcGUueSAtIGgvMjtcblxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcblxuICAgICAgICAgICAgdmFyIGthcHBhID0gMC41NTIyODQ4LFxuICAgICAgICAgICAgICAgIG94ID0gKHcgLyAyKSAqIGthcHBhLCAvLyBjb250cm9sIHBvaW50IG9mZnNldCBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgb3kgPSAoaCAvIDIpICoga2FwcGEsIC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgeGUgPSB4ICsgdywgICAgICAgICAgIC8vIHgtZW5kXG4gICAgICAgICAgICAgICAgeWUgPSB5ICsgaCwgICAgICAgICAgIC8vIHktZW5kXG4gICAgICAgICAgICAgICAgeG0gPSB4ICsgdyAvIDIsICAgICAgIC8vIHgtbWlkZGxlXG4gICAgICAgICAgICAgICAgeW0gPSB5ICsgaCAvIDI7ICAgICAgIC8vIHktbWlkZGxlXG5cbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHgsIHltKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4LCB5bSAtIG95LCB4bSAtIG94LCB5LCB4bSwgeSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeG0gKyBveCwgeSwgeGUsIHltIC0gb3ksIHhlLCB5bSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeGUsIHltICsgb3ksIHhtICsgb3gsIHllLCB4bSwgeWUpO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHhtIC0gb3gsIHllLCB4LCB5bSArIG95LCB4LCB5bSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEuZmlsbEFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBmaWxsQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lV2lkdGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEubGluZUFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGxpbmVDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJSRUMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciByeCA9IHNoYXBlLng7XG4gICAgICAgICAgICB2YXIgcnkgPSBzaGFwZS55O1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHNoYXBlLnJhZGl1cztcblxuICAgICAgICAgICAgdmFyIG1heFJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiB8IDA7XG4gICAgICAgICAgICByYWRpdXMgPSByYWRpdXMgPiBtYXhSYWRpdXMgPyBtYXhSYWRpdXMgOiByYWRpdXM7XG5cbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhyeCwgcnkgKyByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocngsIHJ5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCwgcnkgKyBoZWlnaHQsIHJ4ICsgcmFkaXVzLCByeSArIGhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCArIHdpZHRoIC0gcmFkaXVzLCByeSArIGhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocnggKyB3aWR0aCwgcnkgKyBoZWlnaHQsIHJ4ICsgd2lkdGgsIHJ5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4ICsgd2lkdGgsIHJ5ICsgcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCArIHdpZHRoLCByeSwgcnggKyB3aWR0aCAtIHJhZGl1cywgcnkpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocnggKyByYWRpdXMsIHJ5KTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCwgcnksIHJ4LCByeSArIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWxsQ29sb3IgfHwgZGF0YS5maWxsQ29sb3IgPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEuZmlsbEFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBmaWxsQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxpbmVXaWR0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5saW5lQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggbGluZUNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKlxuICogUmVuZGVycyBhIGdyYXBoaWNzIG1hc2tcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc30gdGhlIGdyYXBoaWNzIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBhIG1hc2tcbiAqIEBwYXJhbSBjb250ZXh0IHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IHRoZSBjb250ZXh0IDJkIG1ldGhvZCBvZiB0aGUgY2FudmFzXG4gKi9cbkNhbnZhc0dyYXBoaWNzLnJlbmRlckdyYXBoaWNzTWFzayA9IGZ1bmN0aW9uIChncmFwaGljcywgY29udGV4dClcbntcbiAgICB2YXIgbGVuID0gZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhLmxlbmd0aDtcblxuICAgIGlmIChsZW4gPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgZGF0YSA9IGdyYXBoaWNzLmdyYXBoaWNzRGF0YVtpXTtcbiAgICAgICAgdmFyIHNoYXBlID0gZGF0YS5zaGFwZTtcblxuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUE9MWSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICB2YXIgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb2ludHNbMF0sIHBvaW50c1sxXSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGo9MTsgaiA8IHBvaW50cy5sZW5ndGgvMjsgaisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHBvaW50c1tqICogMl0sIHBvaW50c1tqICogMiArIDFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IGFuZCBsYXN0IHBvaW50IGFyZSB0aGUgc2FtZSBjbG9zZSB0aGUgcGF0aCAtIG11Y2ggbmVhdGVyIDopXG4gICAgICAgICAgICBpZiAocG9pbnRzWzBdID09PSBwb2ludHNbcG9pbnRzLmxlbmd0aC0yXSAmJiBwb2ludHNbMV0gPT09IHBvaW50c1twb2ludHMubGVuZ3RoLTFdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5SRUNUKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3Qoc2hhcGUueCwgc2hhcGUueSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLkNJUkMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFRPRE8gLSBuZWVkIHRvIGJlIFVuZGVmaW5lZCFcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKHNoYXBlLngsIHNoYXBlLnksIHNoYXBlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5FTElQKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIC8vIGVsbGlwc2UgY29kZSB0YWtlbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxNzI3OTgvaG93LXRvLWRyYXctYW4tb3ZhbC1pbi1odG1sNS1jYW52YXNcblxuICAgICAgICAgICAgdmFyIHcgPSBzaGFwZS53aWR0aCAqIDI7XG4gICAgICAgICAgICB2YXIgaCA9IHNoYXBlLmhlaWdodCAqIDI7XG5cbiAgICAgICAgICAgIHZhciB4ID0gc2hhcGUueCAtIHcvMjtcbiAgICAgICAgICAgIHZhciB5ID0gc2hhcGUueSAtIGgvMjtcblxuICAgICAgICAgICAgdmFyIGthcHBhID0gMC41NTIyODQ4LFxuICAgICAgICAgICAgICAgIG94ID0gKHcgLyAyKSAqIGthcHBhLCAvLyBjb250cm9sIHBvaW50IG9mZnNldCBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgb3kgPSAoaCAvIDIpICoga2FwcGEsIC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgeGUgPSB4ICsgdywgICAgICAgICAgIC8vIHgtZW5kXG4gICAgICAgICAgICAgICAgeWUgPSB5ICsgaCwgICAgICAgICAgIC8vIHktZW5kXG4gICAgICAgICAgICAgICAgeG0gPSB4ICsgdyAvIDIsICAgICAgIC8vIHgtbWlkZGxlXG4gICAgICAgICAgICAgICAgeW0gPSB5ICsgaCAvIDI7ICAgICAgIC8vIHktbWlkZGxlXG5cbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHgsIHltKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4LCB5bSAtIG95LCB4bSAtIG94LCB5LCB4bSwgeSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeG0gKyBveCwgeSwgeGUsIHltIC0gb3ksIHhlLCB5bSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeGUsIHltICsgb3ksIHhtICsgb3gsIHllLCB4bSwgeWUpO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHhtIC0gb3gsIHllLCB4LCB5bSArIG95LCB4LCB5bSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJSRUMpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgdmFyIHJ4ID0gc2hhcGUueDtcbiAgICAgICAgICAgIHZhciByeSA9IHNoYXBlLnk7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gc2hhcGUucmFkaXVzO1xuXG4gICAgICAgICAgICB2YXIgbWF4UmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIHwgMDtcbiAgICAgICAgICAgIHJhZGl1cyA9IHJhZGl1cyA+IG1heFJhZGl1cyA/IG1heFJhZGl1cyA6IHJhZGl1cztcblxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocngsIHJ5ICsgcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4LCByeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocngsIHJ5ICsgaGVpZ2h0LCByeCArIHJhZGl1cywgcnkgKyBoZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocnggKyB3aWR0aCAtIHJhZGl1cywgcnkgKyBoZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4ICsgd2lkdGgsIHJ5ICsgaGVpZ2h0LCByeCArIHdpZHRoLCByeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCArIHdpZHRoLCByeSArIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocnggKyB3aWR0aCwgcnksIHJ4ICsgd2lkdGggLSByYWRpdXMsIHJ5KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4ICsgcmFkaXVzLCByeSk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocngsIHJ5LCByeCwgcnkgKyByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qXG4gKiBVcGRhdGVzIHRoZSB0aW50IG9mIGEgZ3JhcGhpY3Mgb2JqZWN0XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9IHRoZSBncmFwaGljcyB0aGF0IHdpbGwgaGF2ZSBpdHMgdGludCB1cGRhdGVkXG4gKiBcbiAqL1xuQ2FudmFzR3JhcGhpY3MudXBkYXRlR3JhcGhpY3NUaW50ID0gZnVuY3Rpb24gKGdyYXBoaWNzKVxue1xuICAgIGlmIChncmFwaGljcy50aW50ID09PSAweEZGRkZGRilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGludFIgPSAoZ3JhcGhpY3MudGludCA+PiAxNiAmIDB4RkYpIC8gMjU1O1xuICAgIHZhciB0aW50RyA9IChncmFwaGljcy50aW50ID4+IDggJiAweEZGKSAvIDI1NTtcbiAgICB2YXIgdGludEIgPSAoZ3JhcGhpY3MudGludCAmIDB4RkYpLyAyNTU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBoaWNzLmdyYXBoaWNzRGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBkYXRhID0gZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhW2ldO1xuXG4gICAgICAgIHZhciBmaWxsQ29sb3IgPSBkYXRhLmZpbGxDb2xvciB8IDA7XG4gICAgICAgIHZhciBsaW5lQ29sb3IgPSBkYXRhLmxpbmVDb2xvciB8IDA7XG5cbiAgICAgICAgLypcbiAgICAgICAgdmFyIGNvbG9yUiA9IChmaWxsQ29sb3IgPj4gMTYgJiAweEZGKSAvIDI1NTtcbiAgICAgICAgdmFyIGNvbG9yRyA9IChmaWxsQ29sb3IgPj4gOCAmIDB4RkYpIC8gMjU1O1xuICAgICAgICB2YXIgY29sb3JCID0gKGZpbGxDb2xvciAmIDB4RkYpIC8gMjU1O1xuXG4gICAgICAgIGNvbG9yUiAqPSB0aW50UjtcbiAgICAgICAgY29sb3JHICo9IHRpbnRHO1xuICAgICAgICBjb2xvckIgKj0gdGludEI7XG5cbiAgICAgICAgZmlsbENvbG9yID0gKChjb2xvclIqMjU1IDw8IDE2KSArIChjb2xvckcqMjU1IDw8IDgpICsgY29sb3JCKjI1NSk7XG5cbiAgICAgICAgY29sb3JSID0gKGxpbmVDb2xvciA+PiAxNiAmIDB4RkYpIC8gMjU1O1xuICAgICAgICBjb2xvckcgPSAobGluZUNvbG9yID4+IDggJiAweEZGKSAvIDI1NTtcbiAgICAgICAgY29sb3JCID0gKGxpbmVDb2xvciAmIDB4RkYpIC8gMjU1O1xuXG4gICAgICAgIGNvbG9yUiAqPSB0aW50UjtcbiAgICAgICAgY29sb3JHICo9IHRpbnRHO1xuICAgICAgICBjb2xvckIgKj0gdGludEI7XG5cbiAgICAgICAgbGluZUNvbG9yID0gKChjb2xvclIqMjU1IDw8IDE2KSArIChjb2xvckcqMjU1IDw8IDgpICsgY29sb3JCKjI1NSk7XG4gICAgICAgICovXG5cbiAgICAgICAgLy8gc3VwZXIgaW5saW5lIGNvcyBpbSBhbiBvcHRpbWl6YXRpb24gTkFaSSA6KVxuICAgICAgICBkYXRhLl9maWxsVGludCA9ICgoKGZpbGxDb2xvciA+PiAxNiAmIDB4RkYpIC8gMjU1ICogdGludFIqMjU1IDw8IDE2KSArICgoZmlsbENvbG9yID4+IDggJiAweEZGKSAvIDI1NSAqIHRpbnRHKjI1NSA8PCA4KSArICAoZmlsbENvbG9yICYgMHhGRikgLyAyNTUgKiB0aW50QioyNTUpO1xuICAgICAgICBkYXRhLl9saW5lVGludCA9ICgoKGxpbmVDb2xvciA+PiAxNiAmIDB4RkYpIC8gMjU1ICogdGludFIqMjU1IDw8IDE2KSArICgobGluZUNvbG9yID4+IDggJiAweEZGKSAvIDI1NSAqIHRpbnRHKjI1NSA8PCA4KSArICAobGluZUNvbG9yICYgMHhGRikgLyAyNTUgKiB0aW50QioyNTUpO1xuXG4gICAgfVxufTtcblxuIiwidmFyIENhbnZhc0dyYXBoaWNzID0gcmVxdWlyZSgnLi9DYW52YXNHcmFwaGljcycpO1xuXG4vKipcbiAqIEEgc2V0IG9mIGZ1bmN0aW9ucyB1c2VkIHRvIGhhbmRsZSBtYXNraW5nLlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqL1xuZnVuY3Rpb24gQ2FudmFzTWFza01hbmFnZXIoKVxue31cblxuQ2FudmFzTWFza01hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2FudmFzTWFza01hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc01hc2tNYW5hZ2VyO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgc3RhY2sgb2YgbWFza3MuXG4gKlxuICogQHBhcmFtIG1hc2tEYXRhIHtvYmplY3R9IHRoZSBtYXNrRGF0YSB0aGF0IHdpbGwgYmUgcHVzaGVkXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ8Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlciBjb250ZXh0IHRvIHVzZS5cbiAqL1xuQ2FudmFzTWFza01hbmFnZXIucHJvdG90eXBlLnB1c2hNYXNrID0gZnVuY3Rpb24gKG1hc2tEYXRhLCByZW5kZXJlcilcbntcblxuICAgIHJlbmRlcmVyLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgdmFyIGNhY2hlQWxwaGEgPSBtYXNrRGF0YS5hbHBoYTtcbiAgICB2YXIgdHJhbnNmb3JtID0gbWFza0RhdGEud29ybGRUcmFuc2Zvcm07XG4gICAgdmFyIHJlc29sdXRpb24gPSByZW5kZXJlci5yZXNvbHV0aW9uO1xuXG4gICAgcmVuZGVyZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgIHRyYW5zZm9ybS5hICogcmVzb2x1dGlvbixcbiAgICAgICAgdHJhbnNmb3JtLmIgKiByZXNvbHV0aW9uLFxuICAgICAgICB0cmFuc2Zvcm0uYyAqIHJlc29sdXRpb24sXG4gICAgICAgIHRyYW5zZm9ybS5kICogcmVzb2x1dGlvbixcbiAgICAgICAgdHJhbnNmb3JtLnR4ICogcmVzb2x1dGlvbixcbiAgICAgICAgdHJhbnNmb3JtLnR5ICogcmVzb2x1dGlvblxuICAgICk7XG5cbiAgICAvL1RPRE8gc3Vwb3J0IHNwcml0ZSBhbHBoYSBtYXNrcz8/XG4gICAgLy9sb3RzIG9mIGVmZm9ydCByZXF1aXJlZC4gSWYgZGVtYW5kIGlzIGdyZWF0IGVub3VnaC4uXG4gICAgaWYoIW1hc2tEYXRhLnRleHR1cmUpXG4gICAge1xuICAgICAgICBDYW52YXNHcmFwaGljcy5yZW5kZXJHcmFwaGljc01hc2sobWFza0RhdGEsIHJlbmRlcmVyLmNvbnRleHQpO1xuICAgICAgICByZW5kZXJlci5jb250ZXh0LmNsaXAoKTtcbiAgICB9XG5cbiAgICBtYXNrRGF0YS53b3JsZEFscGhhID0gY2FjaGVBbHBoYTtcbn07XG5cbi8qKlxuICogUmVzdG9yZXMgdGhlIGN1cnJlbnQgZHJhd2luZyBjb250ZXh0IHRvIHRoZSBzdGF0ZSBpdCB3YXMgYmVmb3JlIHRoZSBtYXNrIHdhcyBhcHBsaWVkLlxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcnxDYW52YXNSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIGNvbnRleHQgdG8gdXNlLlxuICovXG5DYW52YXNNYXNrTWFuYWdlci5wcm90b3R5cGUucG9wTWFzayA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICByZW5kZXJlci5jb250ZXh0LnJlc3RvcmUoKTtcbn07XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFV0aWxpdHkgbWV0aG9kcyBmb3IgU3ByaXRlL1RleHR1cmUgdGludGluZy5cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbnZhciBDYW52YXNUaW50ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKipcbiAqIEJhc2ljYWxseSB0aGlzIG1ldGhvZCBqdXN0IG5lZWRzIGEgc3ByaXRlIGFuZCBhIGNvbG9yIGFuZCB0aW50cyB0aGUgc3ByaXRlIHdpdGggdGhlIGdpdmVuIGNvbG9yLlxuICpcbiAqIEBwYXJhbSBzcHJpdGUge1Nwcml0ZX0gdGhlIHNwcml0ZSB0byB0aW50XG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gdGhlIGNvbG9yIHRvIHVzZSB0byB0aW50IHRoZSBzcHJpdGUgd2l0aFxuICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IFRoZSB0aW50ZWQgY2FudmFzXG4gKi9cbkNhbnZhc1RpbnRlci5nZXRUaW50ZWRUZXh0dXJlID0gZnVuY3Rpb24gKHNwcml0ZSwgY29sb3IpXG57XG4gICAgdmFyIHRleHR1cmUgPSBzcHJpdGUudGV4dHVyZTtcblxuICAgIGNvbG9yID0gQ2FudmFzVGludGVyLnJvdW5kQ29sb3IoY29sb3IpO1xuXG4gICAgdmFyIHN0cmluZ0NvbG9yID0gJyMnICsgKCcwMDAwMCcgKyAoIGNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuXG4gICAgdGV4dHVyZS50aW50Q2FjaGUgPSB0ZXh0dXJlLnRpbnRDYWNoZSB8fCB7fTtcblxuICAgIGlmICh0ZXh0dXJlLnRpbnRDYWNoZVtzdHJpbmdDb2xvcl0pXG4gICAge1xuICAgICAgICByZXR1cm4gdGV4dHVyZS50aW50Q2FjaGVbc3RyaW5nQ29sb3JdO1xuICAgIH1cblxuICAgICAvLyBjbG9uZSB0ZXh0dXJlLi5cbiAgICB2YXIgY2FudmFzID0gQ2FudmFzVGludGVyLmNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICAgIC8vQ2FudmFzVGludGVyLnRpbnRXaXRoUGVyUGl4ZWwodGV4dHVyZSwgc3RyaW5nQ29sb3IsIGNhbnZhcyk7XG4gICAgQ2FudmFzVGludGVyLnRpbnRNZXRob2QodGV4dHVyZSwgY29sb3IsIGNhbnZhcyk7XG5cbiAgICBpZiAoQ2FudmFzVGludGVyLmNvbnZlcnRUaW50VG9JbWFnZSlcbiAgICB7XG4gICAgICAgIC8vIGlzIHRoaXMgYmV0dGVyP1xuICAgICAgICB2YXIgdGludEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRpbnRJbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG5cbiAgICAgICAgdGV4dHVyZS50aW50Q2FjaGVbc3RyaW5nQ29sb3JdID0gdGludEltYWdlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0ZXh0dXJlLnRpbnRDYWNoZVtzdHJpbmdDb2xvcl0gPSBjYW52YXM7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3QgY29udmVydGluZyB0aGUgdGV4dHVyZSB0byBhbiBpbWFnZSB0aGVuIHdlIG5lZWQgdG8gbG9zZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBjYW52YXNcbiAgICAgICAgQ2FudmFzVGludGVyLmNhbnZhcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbnZhcztcbn07XG5cbi8qKlxuICogVGludCBhIHRleHR1cmUgdXNpbmcgdGhlICdtdWx0aXBseScgb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB0ZXh0dXJlIHtUZXh0dXJlfSB0aGUgdGV4dHVyZSB0byB0aW50XG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gdGhlIGNvbG9yIHRvIHVzZSB0byB0aW50IHRoZSBzcHJpdGUgd2l0aFxuICogQHBhcmFtIGNhbnZhcyB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjdXJyZW50IGNhbnZhc1xuICovXG5DYW52YXNUaW50ZXIudGludFdpdGhNdWx0aXBseSA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBjb2xvciwgY2FudmFzKVxue1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblxuICAgIHZhciBjcm9wID0gdGV4dHVyZS5jcm9wO1xuXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBjb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcblxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY3JvcC53aWR0aCwgY3JvcC5oZWlnaHQpO1xuXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLFxuICAgICAgICBjcm9wLngsXG4gICAgICAgIGNyb3AueSxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLFxuICAgICAgICBjcm9wLngsXG4gICAgICAgIGNyb3AueSxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0XG4gICAgKTtcbn07XG5cbi8qKlxuICogVGludCBhIHRleHR1cmUgdXNpbmcgdGhlICdvdmVybGF5JyBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9IHRoZSB0ZXh0dXJlIHRvIHRpbnRcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSB0aGUgY29sb3IgdG8gdXNlIHRvIHRpbnQgdGhlIHNwcml0ZSB3aXRoXG4gKiBAcGFyYW0gY2FudmFzIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGN1cnJlbnQgY2FudmFzXG4gKi9cbkNhbnZhc1RpbnRlci50aW50V2l0aE92ZXJsYXkgPSBmdW5jdGlvbiAodGV4dHVyZSwgY29sb3IsIGNhbnZhcylcbntcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cbiAgICB2YXIgY3JvcCA9IHRleHR1cmUuY3JvcDtcblxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xuXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggY29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjcm9wLndpZHRoLCBjcm9wLmhlaWdodCk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1hdG9wJztcbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgIGNyb3AueCxcbiAgICAgICAgY3JvcC55LFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHRcbiAgICApO1xuXG4gICAgLy8gY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG59O1xuXG4vKipcbiAqIFRpbnQgYSB0ZXh0dXJlIHBpeGVsIHBlciBwaXhlbC5cbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSB7VGV4dHVyZX0gdGhlIHRleHR1cmUgdG8gdGludFxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciB0byB1c2UgdG8gdGludCB0aGUgc3ByaXRlIHdpdGhcbiAqIEBwYXJhbSBjYW52YXMge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY3VycmVudCBjYW52YXNcbiAqL1xuQ2FudmFzVGludGVyLnRpbnRXaXRoUGVyUGl4ZWwgPSBmdW5jdGlvbiAodGV4dHVyZSwgY29sb3IsIGNhbnZhcylcbntcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cbiAgICB2YXIgY3JvcCA9IHRleHR1cmUuY3JvcDtcblxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xuXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLFxuICAgICAgICBjcm9wLngsXG4gICAgICAgIGNyb3AueSxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0XG4gICAgKTtcblxuICAgIHZhciByZ2JWYWx1ZXMgPSB1dGlscy5oZXgycmdiKGNvbG9yKTtcbiAgICB2YXIgciA9IHJnYlZhbHVlc1swXSwgZyA9IHJnYlZhbHVlc1sxXSwgYiA9IHJnYlZhbHVlc1syXTtcblxuICAgIHZhciBwaXhlbERhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjcm9wLndpZHRoLCBjcm9wLmhlaWdodCk7XG5cbiAgICB2YXIgcGl4ZWxzID0gcGl4ZWxEYXRhLmRhdGE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBpeGVscy5sZW5ndGg7IGkgKz0gNClcbiAgICB7XG4gICAgICAgIHBpeGVsc1tpKzBdICo9IHI7XG4gICAgICAgIHBpeGVsc1tpKzFdICo9IGc7XG4gICAgICAgIHBpeGVsc1tpKzJdICo9IGI7XG4gICAgfVxuXG4gICAgY29udGV4dC5wdXRJbWFnZURhdGEocGl4ZWxEYXRhLCAwLCAwKTtcbn07XG5cbi8qKlxuICogUm91bmRzIHRoZSBzcGVjaWZpZWQgY29sb3IgYWNjb3JkaW5nIHRvIHRoZSBDYW52YXNUaW50ZXIuY2FjaGVTdGVwc1BlckNvbG9yQ2hhbm5lbC5cbiAqXG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gdGhlIGNvbG9yIHRvIHJvdW5kLCBzaG91bGQgYmUgYSBoZXggY29sb3JcbiAqL1xuQ2FudmFzVGludGVyLnJvdW5kQ29sb3IgPSBmdW5jdGlvbiAoY29sb3IpXG57XG4gICAgdmFyIHN0ZXAgPSBDYW52YXNUaW50ZXIuY2FjaGVTdGVwc1BlckNvbG9yQ2hhbm5lbDtcblxuICAgIHZhciByZ2JWYWx1ZXMgPSB1dGlscy5oZXgycmdiKGNvbG9yKTtcblxuICAgIHJnYlZhbHVlc1swXSA9IE1hdGgubWluKDI1NSwgKHJnYlZhbHVlc1swXSAvIHN0ZXApICogc3RlcCk7XG4gICAgcmdiVmFsdWVzWzFdID0gTWF0aC5taW4oMjU1LCAocmdiVmFsdWVzWzFdIC8gc3RlcCkgKiBzdGVwKTtcbiAgICByZ2JWYWx1ZXNbMl0gPSBNYXRoLm1pbigyNTUsIChyZ2JWYWx1ZXNbMl0gLyBzdGVwKSAqIHN0ZXApO1xuXG4gICAgcmV0dXJuIHV0aWxzLnJnYjJoZXgocmdiVmFsdWVzKTtcbn07XG5cbi8qKlxuICogTnVtYmVyIG9mIHN0ZXBzIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBhIGNhcCB3aGVuIHJvdW5kaW5nIGNvbG9ycy5cbiAqXG4gKiBAbWVtYmVyXG4gKi9cbkNhbnZhc1RpbnRlci5jYWNoZVN0ZXBzUGVyQ29sb3JDaGFubmVsID0gODtcblxuLyoqXG4gKiBUaW50IGNhY2hlIGJvb2xlYW4gZmxhZy5cbiAqXG4gKiBAbWVtYmVyXG4gKi9cbkNhbnZhc1RpbnRlci5jb252ZXJ0VGludFRvSW1hZ2UgPSBmYWxzZTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgQ2FudmFzIEJsZW5kTW9kZXMgYXJlIHN1cHBvcnRlZCwgY29uc2VxdWVudGx5IHRoZSBhYmlsaXR5IHRvIHRpbnQgdXNpbmcgdGhlIG11bHRpcGx5IG1ldGhvZC5cbiAqXG4gKiBAbWVtYmVyXG4gKi9cbkNhbnZhc1RpbnRlci5jYW5Vc2VNdWx0aXBseSA9IHV0aWxzLmNhblVzZU5ld0NhbnZhc0JsZW5kTW9kZXMoKTtcblxuLyoqXG4gKiBUaGUgdGludGluZyBtZXRob2QgdGhhdCB3aWxsIGJlIHVzZWQuXG4gKlxuICovXG5DYW52YXNUaW50ZXIudGludE1ldGhvZCA9IENhbnZhc1RpbnRlci5jYW5Vc2VNdWx0aXBseSA/IENhbnZhc1RpbnRlci50aW50V2l0aE11bHRpcGx5IDogIENhbnZhc1RpbnRlci50aW50V2l0aFBlclBpeGVsO1xuIiwidmFyIFN5c3RlbVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vU3lzdGVtUmVuZGVyZXInKSxcbiAgICBTaGFkZXJNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2Vycy9TaGFkZXJNYW5hZ2VyJyksXG4gICAgTWFza01hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXJzL01hc2tNYW5hZ2VyJyksXG4gICAgU3RlbmNpbE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXJzL1N0ZW5jaWxNYW5hZ2VyJyksXG4gICAgRmlsdGVyTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcnMvRmlsdGVyTWFuYWdlcicpLFxuICAgIEJsZW5kTW9kZU1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXJzL0JsZW5kTW9kZU1hbmFnZXInKSxcbiAgICBSZW5kZXJUYXJnZXQgPSByZXF1aXJlKCcuL3V0aWxzL1JlbmRlclRhcmdldCcpLFxuICAgIE9iamVjdFJlbmRlcmVyID0gcmVxdWlyZSgnLi91dGlscy9PYmplY3RSZW5kZXJlcicpLFxuICAgIEZYQUFGaWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvRlhBQUZpbHRlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIFdlYkdMUmVuZGVyZXIgZHJhd3MgdGhlIHNjZW5lIGFuZCBhbGwgaXRzIGNvbnRlbnQgb250byBhIHdlYkdMIGVuYWJsZWQgY2FudmFzLiBUaGlzIHJlbmRlcmVyXG4gKiBzaG91bGQgYmUgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IHdlYkdMLiBUaGlzIFJlbmRlciB3b3JrcyBieSBhdXRvbWF0aWNhbGx5IG1hbmFnaW5nIHdlYkdMQmF0Y2hzLlxuICogU28gbm8gbmVlZCBmb3IgU3ByaXRlIEJhdGNoZXMgb3IgU3ByaXRlIENsb3Vkcy5cbiAqIERvbid0IGZvcmdldCB0byBhZGQgdGhlIHZpZXcgdG8geW91ciBET00gb3IgeW91IHdpbGwgbm90IHNlZSBhbnl0aGluZyA6KVxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFN5c3RlbVJlbmRlcmVyXG4gKiBAcGFyYW0gW3dpZHRoPTBdIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBbaGVpZ2h0PTBdIHtudW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gW29wdGlvbnNdIHtvYmplY3R9IFRoZSBvcHRpb25hbCByZW5kZXJlciBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gW29wdGlvbnMudmlld10ge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY2FudmFzIHRvIHVzZSBhcyBhIHZpZXcsIG9wdGlvbmFsXG4gKiBAcGFyYW0gW29wdGlvbnMudHJhbnNwYXJlbnQ9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbb3B0aW9ucy5hdXRvUmVzaXplPWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIGF1dG9tYXRpY2FsbHkgcmVzaXplZCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtvcHRpb25zLmFudGlhbGlhcz1mYWxzZV0ge2Jvb2xlYW59IHNldHMgYW50aWFsaWFzLiBJZiBub3QgYXZhaWxhYmxlIG5hdGl2ZWx5IHRoZW4gRlhBQSBhbnRpYWxpYXNpbmcgaXMgdXNlZFxuICogQHBhcmFtIFtvcHRpb25zLmZvcmNlRlhBQT1mYWxzZV0ge2Jvb2xlYW59IGZvcmNlcyBGWEFBIGFudGlhbGlhc2luZyB0byBiZSB1c2VkIG92ZXIgbmF0aXZlLiBGWEFBIGlzIGZhc3RlciwgYnV0IG1heSBub3QgYWx3YXlzIGxvayBhcyBncmVhdFxuICogQHBhcmFtIFtvcHRpb25zLnJlc29sdXRpb249MV0ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyIHJldGluYSB3b3VsZCBiZSAyXG4gKiBAcGFyYW0gW29wdGlvbnMuY2xlYXJCZWZvcmVSZW5kZXI9dHJ1ZV0ge2Jvb2xlYW59IFRoaXMgc2V0cyBpZiB0aGUgQ2FudmFzUmVuZGVyZXIgd2lsbCBjbGVhciB0aGUgY2FudmFzIG9yXG4gKiAgICAgIG5vdCBiZWZvcmUgdGhlIG5ldyByZW5kZXIgcGFzcy5cbiAqIEBwYXJhbSBbb3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXI9ZmFsc2VdIHtib29sZWFufSBlbmFibGVzIGRyYXdpbmcgYnVmZmVyIHByZXNlcnZhdGlvbiwgZW5hYmxlIHRoaXMgaWZcbiAqICAgICAgeW91IG5lZWQgdG8gY2FsbCB0b0RhdGFVcmwgb24gdGhlIHdlYmdsIGNvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIFdlYkdMUmVuZGVyZXIod2lkdGgsIGhlaWdodCwgb3B0aW9ucylcbntcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIFN5c3RlbVJlbmRlcmVyLmNhbGwodGhpcywgJ1dlYkdMJywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGlzIHJlbmRlcmVyIGFzIGEgc3RhbmRhcmRpc2VkIGNvbnN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICpcbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5SRU5ERVJFUl9UWVBFLldFQkdMO1xuXG4gICAgdGhpcy5oYW5kbGVDb250ZXh0TG9zdCA9IHRoaXMuaGFuZGxlQ29udGV4dExvc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZCA9IHRoaXMuaGFuZGxlQ29udGV4dFJlc3RvcmVkLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl91cGRhdGVUZXh0dXJlQm91bmQgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKGUudGFyZ2V0KTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9kZXN0cm95VGV4dHVyZUJvdW5kID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHRoaXMuZGVzdHJveVRleHR1cmUoZS50YXJnZXQpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRsb3N0JywgdGhpcy5oYW5kbGVDb250ZXh0TG9zdCwgZmFsc2UpO1xuICAgIHRoaXMudmlldy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsIHRoaXMuaGFuZGxlQ29udGV4dFJlc3RvcmVkLCBmYWxzZSk7XG5cbiAgICAvL1RPRE8gcG9zc2liaWxpdHkgdG8gZm9yY2UgRlhBQSBhcyBpdCBtYXkgb2ZmZXIgYmV0dGVyIHBlcmZvcm1hbmNlP1xuICAgIC8qKlxuICAgICAqIERvZXMgaXQgdXNlIEZYQUEgP1xuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3VzZUZYQUEgPSAhIW9wdGlvbnMuZm9yY2VGWEFBICYmIG9wdGlvbnMuYW50aWFsaWFzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZ4YWEgZmlsdGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtGWEFBRmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fRlhBQUZpbHRlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXNzZWQgaW4gdG8gY3JlYXRlIGEgbmV3IHdlYmdsIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250ZXh0T3B0aW9ucyA9IHtcbiAgICAgICAgYWxwaGE6IHRoaXMudHJhbnNwYXJlbnQsXG4gICAgICAgIGFudGlhbGlhczogb3B0aW9ucy5hbnRpYWxpYXMsXG4gICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogdGhpcy50cmFuc3BhcmVudCAmJiB0aGlzLnRyYW5zcGFyZW50ICE9PSAnbm90TXVsdGlwbGllZCcsXG4gICAgICAgIHN0ZW5jaWw6IHRydWUsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogb3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXJcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ291bnRlciBmb3IgdGhlIG51bWJlciBvZiBkcmF3cyBtYWRlIGVhY2ggZnJhbWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmRyYXdDb3VudCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBEZWFscyB3aXRoIG1hbmFnaW5nIHRoZSBzaGFkZXIgcHJvZ3JhbXMgYW5kIHRoZWlyIGF0dHJpYnMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuc2hhZGVyTWFuYWdlciA9IG5ldyBTaGFkZXJNYW5hZ2VyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogTWFuYWdlcyB0aGUgbWFza3MgdXNpbmcgdGhlIHN0ZW5jaWwgYnVmZmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7TWFza01hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5tYXNrTWFuYWdlciA9IG5ldyBNYXNrTWFuYWdlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE1hbmFnZXMgdGhlIHN0ZW5jaWwgYnVmZmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U3RlbmNpbE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5zdGVuY2lsTWFuYWdlciA9IG5ldyBTdGVuY2lsTWFuYWdlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE1hbmFnZXMgdGhlIGZpbHRlcnMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtGaWx0ZXJNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyTWFuYWdlciA9IG5ldyBGaWx0ZXJNYW5hZ2VyKHRoaXMpO1xuXG5cbiAgICAvKipcbiAgICAgKiBNYW5hZ2VzIHRoZSBibGVuZE1vZGVzXG4gICAgICogQG1lbWJlciB7QmxlbmRNb2RlTWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZU1hbmFnZXIgPSBuZXcgQmxlbmRNb2RlTWFuYWdlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjdXJyZW50IHJlbmRlciB0YXJnZXRcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50UmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQ7XG5cbiAgICAvKipcbiAgICAgKiBvYmplY3QgcmVuZGVyZXIgQGFsdmluXG4gICAgICogQG1lbWJlciB7T2JqZWN0UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50UmVuZGVyZXIgPSBuZXcgT2JqZWN0UmVuZGVyZXIodGhpcyk7XG5cbiAgICB0aGlzLmluaXRQbHVnaW5zKCk7XG5cbiAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY29udGV4dCBzbyBpdCBpcyByZWFkeSBmb3IgdGhlIG1hbmFnZXJzLlxuICAgIHRoaXMuX2luaXRDb250ZXh0KCk7XG5cbiAgICAvLyBtYXAgc29tZSB3ZWJHTCBibGVuZCBtb2Rlcy4uXG4gICAgdGhpcy5fbWFwQmxlbmRNb2RlcygpO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgcmVuZGVyIHRhcmdldHNcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlclRhcmdldFN0YWNrID0gW107XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlKTtcbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV2ViR0xSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gV2ViR0xSZW5kZXJlcjtcbnV0aWxzLnBsdWdpblRhcmdldC5taXhpbihXZWJHTFJlbmRlcmVyKTtcblxuV2ViR0xSZW5kZXJlci5nbENvbnRleHRJZCA9IDA7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgV2ViR0wgY29udGV4dFxuICogQHByaXZhdGVcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuX2luaXRDb250ZXh0ID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnZpZXcuZ2V0Q29udGV4dCgnd2ViZ2wnLCB0aGlzLl9jb250ZXh0T3B0aW9ucykgfHwgdGhpcy52aWV3LmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIHRoaXMuX2NvbnRleHRPcHRpb25zKTtcbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICBpZiAoIWdsKVxuICAgIHtcbiAgICAgICAgLy8gZmFpbCwgbm90IGFibGUgdG8gZ2V0IGEgY29udGV4dFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHdlYkdMLiBUcnkgdXNpbmcgdGhlIGNhbnZhcyByZW5kZXJlcicpO1xuICAgIH1cblxuICAgIHRoaXMuZ2xDb250ZXh0SWQgPSBXZWJHTFJlbmRlcmVyLmdsQ29udGV4dElkKys7XG4gICAgZ2wuaWQgPSB0aGlzLmdsQ29udGV4dElkO1xuICAgIGdsLnJlbmRlcmVyID0gdGhpcztcblxuICAgIC8vIHNldCB1cCB0aGUgZGVmYXVsdCBwaXhpIHNldHRpbmdzLi5cbiAgICBnbC5kaXNhYmxlKGdsLkRFUFRIX1RFU1QpO1xuICAgIGdsLmRpc2FibGUoZ2wuQ1VMTF9GQUNFKTtcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuXG4gICAgdGhpcy5yZW5kZXJUYXJnZXQgPSBuZXcgUmVuZGVyVGFyZ2V0KHRoaXMuZ2wsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBudWxsLCB0aGlzLnJlc29sdXRpb24sIHRydWUpO1xuXG4gICAgdGhpcy5lbWl0KCdjb250ZXh0JywgZ2wpO1xuXG4gICAgLy8gc2V0dXAgdGhlIHdpZHRoL2hlaWdodCBwcm9wZXJ0aWVzIGFuZCBnbCB2aWV3cG9ydFxuICAgIHRoaXMucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGlmKCF0aGlzLl91c2VGWEFBKVxuICAgIHtcbiAgICAgICAgdGhpcy5fdXNlRlhBQSA9ICggdGhpcy5fY29udGV4dE9wdGlvbnMuYW50aWFsaWFzICYmICEgZ2wuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKS5hbnRpYWxpYXMgKTtcbiAgICB9XG5cblxuICAgIGlmKHRoaXMuX3VzZUZYQUEpXG4gICAge1xuICAgICAgICB3aW5kb3cuY29uc29sZS53YXJuKCdGWEFBIGFudGlhbGlhc2luZyBiZWluZyB1c2VkIGluc3RlYWQgb2YgbmF0aXZlIGFudGlhbGlhc2luZycpO1xuICAgICAgICB0aGlzLl9GWEFBRmlsdGVyID0gW25ldyBGWEFBRmlsdGVyKCldO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHRvIGl0cyB3ZWJHTCB2aWV3XG4gKlxuICogQHBhcmFtIG9iamVjdCB7RGlzcGxheU9iamVjdH0gdGhlIG9iamVjdCB0byBiZSByZW5kZXJlZFxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAob2JqZWN0KVxue1xuICAgIC8vIG5vIHBvaW50IHJlbmRlcmluZyBpZiBvdXIgY29udGV4dCBoYXMgYmVlbiBibG93biB1cCFcbiAgICBpZiAodGhpcy5nbC5pc0NvbnRleHRMb3N0KCkpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdE9iamVjdFJlbmRlcmVkID0gb2JqZWN0O1xuXG4gICAgaWYodGhpcy5fdXNlRlhBQSlcbiAgICB7XG4gICAgICAgIHRoaXMuX0ZYQUFGaWx0ZXJbMF0udW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS54ID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5fRlhBQUZpbHRlclswXS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnkgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgb2JqZWN0LmZpbHRlckFyZWEgPSB0aGlzLnJlbmRlclRhcmdldC5zaXplO1xuICAgICAgICBvYmplY3QuZmlsdGVycyA9IHRoaXMuX0ZYQUFGaWx0ZXI7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlUGFyZW50ID0gb2JqZWN0LnBhcmVudDtcbiAgICBvYmplY3QucGFyZW50ID0gdGhpcy5fdGVtcERpc3BsYXlPYmplY3RQYXJlbnQ7XG5cbiAgICAvLyB1cGRhdGUgdGhlIHNjZW5lIGdyYXBoXG4gICAgb2JqZWN0LnVwZGF0ZVRyYW5zZm9ybSgpO1xuXG4gICAgb2JqZWN0LnBhcmVudCA9IGNhY2hlUGFyZW50O1xuXG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIC8vIG1ha2Ugc3VyZSB3ZSBhcmUgYm91bmQgdG8gdGhlIG1haW4gZnJhbWUgYnVmZmVyXG4gICAgdGhpcy5zZXRSZW5kZXJUYXJnZXQodGhpcy5yZW5kZXJUYXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuY2xlYXJCZWZvcmVSZW5kZXIpXG4gICAge1xuICAgICAgICBpZiAodGhpcy50cmFuc3BhcmVudClcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLmNsZWFyQ29sb3IodGhpcy5fYmFja2dyb3VuZENvbG9yUmdiWzBdLCB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JSZ2JbMV0sIHRoaXMuX2JhY2tncm91bmRDb2xvclJnYlsyXSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckRpc3BsYXlPYmplY3Qob2JqZWN0LCB0aGlzLnJlbmRlclRhcmdldCk7Ly90aGlzLnByb2plY3Rpb24pO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgRGlzcGxheSBPYmplY3QuXG4gKlxuICogQHBhcmFtIGRpc3BsYXlPYmplY3Qge0Rpc3BsYXlPYmplY3R9IFRoZSBEaXNwbGF5T2JqZWN0IHRvIHJlbmRlclxuICogQHBhcmFtIHJlbmRlclRhcmdldCB7UmVuZGVyVGFyZ2V0fSBUaGUgcmVuZGVyIHRhcmdldCB0byB1c2UgdG8gcmVuZGVyIHRoaXMgZGlzcGxheSBvYmplY3RcbiAqXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckRpc3BsYXlPYmplY3QgPSBmdW5jdGlvbiAoZGlzcGxheU9iamVjdCwgcmVuZGVyVGFyZ2V0KS8vcHJvamVjdGlvbiwgYnVmZmVyKVxue1xuICAgIC8vIFRPRE8gaXMgdGhpcyBuZWVkZWQuLi5cbiAgICAvL3RoaXMuYmxlbmRNb2RlTWFuYWdlci5zZXRCbGVuZE1vZGUoQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMKTtcbiAgICB0aGlzLnNldFJlbmRlclRhcmdldChyZW5kZXJUYXJnZXQpO1xuXG4gICAgLy8gc3RhcnQgdGhlIGZpbHRlciBtYW5hZ2VyXG4gICAgdGhpcy5maWx0ZXJNYW5hZ2VyLnNldEZpbHRlclN0YWNrKCByZW5kZXJUYXJnZXQuZmlsdGVyU3RhY2sgKTtcblxuICAgIC8vIHJlbmRlciB0aGUgc2NlbmUhXG4gICAgZGlzcGxheU9iamVjdC5yZW5kZXJXZWJHTCh0aGlzKTtcblxuICAgIC8vIGZpbmlzaCB0aGUgY3VycmVudCByZW5kZXJlci4uXG4gICAgdGhpcy5jdXJyZW50UmVuZGVyZXIuZmx1c2goKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCByZW5kZXJlciB0byB0aGUgb25lIGdpdmVuIGluIHBhcmFtZXRlclxuICpcbiAqIEBwYXJhbSBvYmplY3RSZW5kZXJlciB7T2JqZWN0fSBUT0RPIEBhbHZpblxuICpcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuc2V0T2JqZWN0UmVuZGVyZXIgPSBmdW5jdGlvbiAob2JqZWN0UmVuZGVyZXIpXG57XG4gICAgaWYgKHRoaXMuY3VycmVudFJlbmRlcmVyID09PSBvYmplY3RSZW5kZXJlcilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJlci5zdG9wKCk7XG4gICAgdGhpcy5jdXJyZW50UmVuZGVyZXIgPSBvYmplY3RSZW5kZXJlcjtcbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJlci5zdGFydCgpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBjdXJyZW50IHJlbmRlciB0YXJnZXQgdG8gdGhlIG9uZSBnaXZlbiBpbiBwYXJhbWV0ZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyVGFyZ2V0IHtSZW5kZXJUYXJnZXR9IHRoZSBuZXcgcmVuZGVyIHRhcmdldFxuICpcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuc2V0UmVuZGVyVGFyZ2V0ID0gZnVuY3Rpb24gKHJlbmRlclRhcmdldClcbntcbiAgICBpZiggdGhpcy5jdXJyZW50UmVuZGVyVGFyZ2V0ID09PSByZW5kZXJUYXJnZXQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRPRE8gLSBtYXliZSBkb3duIHRoZSBsaW5lIHRoaXMgc2hvdWxkIGJlIGEgcHVzaCBwb3MgdGhpbmc/IExlYXZpbmcgZm9yIG5vdyB0aG91Z2guXG4gICAgdGhpcy5jdXJyZW50UmVuZGVyVGFyZ2V0ID0gcmVuZGVyVGFyZ2V0O1xuICAgIHRoaXMuY3VycmVudFJlbmRlclRhcmdldC5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuc3RlbmNpbE1hbmFnZXIuc2V0TWFza1N0YWNrKCByZW5kZXJUYXJnZXQuc3RlbmNpbE1hc2tTdGFjayApO1xufTtcblxuXG4vKipcbiAqIFJlc2l6ZXMgdGhlIHdlYkdMIHZpZXcgdG8gdGhlIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0LlxuICpcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSB0aGUgbmV3IHdpZHRoIG9mIHRoZSB3ZWJHTCB2aWV3XG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IHRoZSBuZXcgaGVpZ2h0IG9mIHRoZSB3ZWJHTCB2aWV3XG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KVxue1xuICAgIFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZS5yZXNpemUuY2FsbCh0aGlzLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgLy8gY29uc29sZS5sb2cod2lkdGgpXG4gICAgdGhpcy5maWx0ZXJNYW5hZ2VyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnJlbmRlclRhcmdldC5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgaWYodGhpcy5jdXJyZW50UmVuZGVyVGFyZ2V0ID09PSB0aGlzLnJlbmRlclRhcmdldClcbiAgICB7XG4gICAgICAgIHRoaXMucmVuZGVyVGFyZ2V0LmFjdGl2YXRlKCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGVzIGFuZC9vciBDcmVhdGVzIGEgV2ViR0wgdGV4dHVyZSBmb3IgdGhlIHJlbmRlcmVyJ3MgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSB7QmFzZVRleHR1cmV8VGV4dHVyZX0gdGhlIHRleHR1cmUgdG8gdXBkYXRlXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLnVwZGF0ZVRleHR1cmUgPSBmdW5jdGlvbiAodGV4dHVyZSlcbntcbiAgICB0ZXh0dXJlID0gdGV4dHVyZS5iYXNlVGV4dHVyZSB8fCB0ZXh0dXJlO1xuXG4gICAgaWYgKCF0ZXh0dXJlLmhhc0xvYWRlZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgaWYgKCF0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSlcbiAgICB7XG4gICAgICAgIHRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICB0ZXh0dXJlLm9uKCd1cGRhdGUnLCB0aGlzLl91cGRhdGVUZXh0dXJlQm91bmQpO1xuICAgICAgICB0ZXh0dXJlLm9uKCdkaXNwb3NlJywgdGhpcy5fZGVzdHJveVRleHR1cmVCb3VuZCk7XG4gICAgfVxuXG5cbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSk7XG5cbiAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wsIHRleHR1cmUucHJlbXVsdGlwbGllZEFscGhhKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHRleHR1cmUuc291cmNlKTtcblxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB0ZXh0dXJlLnNjYWxlTW9kZSA9PT0gQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XG5cblxuICAgIGlmICh0ZXh0dXJlLm1pcG1hcCAmJiB0ZXh0dXJlLmlzUG93ZXJPZlR3bylcbiAgICB7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0ZXh0dXJlLnNjYWxlTW9kZSA9PT0gQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSID8gZ2wuTElORUFSX01JUE1BUF9MSU5FQVIgOiBnbC5ORUFSRVNUX01JUE1BUF9ORUFSRVNUKTtcbiAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0ZXh0dXJlLnNjYWxlTW9kZSA9PT0gQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XG4gICAgfVxuXG4gICAgaWYgKCF0ZXh0dXJlLmlzUG93ZXJPZlR3bylcbiAgICB7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuUkVQRUFUKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuUkVQRUFUKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIHRoZSB0ZXh0dXJlIGZyb20gV2ViR0xcbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSB7QmFzZVRleHR1cmV8VGV4dHVyZX0gdGhlIHRleHR1cmUgdG8gZGVzdHJveVxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95VGV4dHVyZSA9IGZ1bmN0aW9uICh0ZXh0dXJlKVxue1xuICAgIHRleHR1cmUgPSB0ZXh0dXJlLmJhc2VUZXh0dXJlIHx8IHRleHR1cmU7XG5cbiAgICBpZiAoIXRleHR1cmUuaGFzTG9hZGVkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlLl9nbFRleHR1cmVzW3RoaXMuZ2wuaWRdKVxuICAgIHtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRleHR1cmUuX2dsVGV4dHVyZXNbdGhpcy5nbC5pZF0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogSGFuZGxlcyBhIGxvc3Qgd2ViZ2wgY29udGV4dFxuICpcbiAqIEBwYXJhbSBldmVudCB7RXZlbnR9XG4gKiBAcHJpdmF0ZVxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0TG9zdCA9IGZ1bmN0aW9uIChldmVudClcbntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVzIGEgcmVzdG9yZWQgd2ViZ2wgY29udGV4dFxuICpcbiAqIEBwYXJhbSBldmVudCB7RXZlbnR9XG4gKiBAcHJpdmF0ZVxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5oYW5kbGVDb250ZXh0UmVzdG9yZWQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuX2luaXRDb250ZXh0KCk7XG5cbiAgICAvLyBlbXB0eSBhbGwgdGhlIG9sZCBnbCB0ZXh0dXJlcyBhcyB0aGV5IGFyZSB1c2VsZXNzIG5vd1xuICAgIGZvciAodmFyIGtleSBpbiB1dGlscy5CYXNlVGV4dHVyZUNhY2hlKVxuICAgIHtcbiAgICAgICAgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtrZXldLl9nbFRleHR1cmVzLmxlbmd0aCA9IDA7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgcmVuZGVyZXIgKGV2ZW50IGxpc3RlbmVycywgc3ByaXRlYmF0Y2gsIGV0Yy4uLilcbiAqXG4gKiBAcGFyYW0gW3JlbW92ZVZpZXc9ZmFsc2VdIHtib29sZWFufSBSZW1vdmVzIHRoZSBDYW52YXMgZWxlbWVudCBmcm9tIHRoZSBET00uXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlVmlldylcbntcbiAgICB0aGlzLmRlc3Ryb3lQbHVnaW5zKCk7XG5cbiAgICAvLyByZW1vdmUgbGlzdGVuZXJzXG4gICAgdGhpcy52aWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGxvc3QnLCB0aGlzLmhhbmRsZUNvbnRleHRMb3N0KTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZCk7XG5cbiAgICAvLyBjYWxsIGJhc2UgZGVzdHJveVxuICAgIFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcywgcmVtb3ZlVmlldyk7XG5cbiAgICB0aGlzLnV1aWQgPSAwO1xuXG4gICAgLy8gZGVzdHJveSB0aGUgbWFuYWdlcnNcbiAgICB0aGlzLnNoYWRlck1hbmFnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMubWFza01hbmFnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuc3RlbmNpbE1hbmFnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZmlsdGVyTWFuYWdlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLnNoYWRlck1hbmFnZXIgPSBudWxsO1xuICAgIHRoaXMubWFza01hbmFnZXIgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5ibGVuZE1vZGVNYW5hZ2VyID0gbnVsbDtcblxuICAgIHRoaXMuaGFuZGxlQ29udGV4dExvc3QgPSBudWxsO1xuICAgIHRoaXMuaGFuZGxlQ29udGV4dFJlc3RvcmVkID0gbnVsbDtcblxuICAgIHRoaXMuX2NvbnRleHRPcHRpb25zID0gbnVsbDtcblxuICAgIHRoaXMuZHJhd0NvdW50ID0gMDtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xufTtcblxuLyoqXG4gKiBNYXBzIFBpeGkgYmxlbmQgbW9kZXMgdG8gV2ViR0wgYmxlbmQgbW9kZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuX21hcEJsZW5kTW9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICBpZiAoIXRoaXMuYmxlbmRNb2RlcylcbiAgICB7XG4gICAgICAgIHRoaXMuYmxlbmRNb2RlcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5OT1JNQUxdICAgICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQUREXSAgICAgICAgICAgPSBbZ2wuU1JDX0FMUEhBLCBnbC5EU1RfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTVVMVElQTFldICAgICAgPSBbZ2wuRFNUX0NPTE9SLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNDUkVFTl0gICAgICAgID0gW2dsLlNSQ19BTFBIQSwgZ2wuT05FXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk9WRVJMQVldICAgICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5EQVJLRU5dICAgICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTElHSFRFTl0gICAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SX0RPREdFXSAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl9CVVJOXSAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuSEFSRF9MSUdIVF0gICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNPRlRfTElHSFRdICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5ESUZGRVJFTkNFXSAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuRVhDTFVTSU9OXSAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkhVRV0gICAgICAgICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TQVRVUkFUSU9OXSAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JdICAgICAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkxVTUlOT1NJVFldICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgfVxufTtcbiIsInZhciBEZWZhdWx0U2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVycy9UZXh0dXJlU2hhZGVyJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgY3JlYXRpbmcgYSBQSVhJIGZpbHRlci4gQ3VycmVudGx5IG9ubHkgV2ViR0wgc3VwcG9ydHMgZmlsdGVycy5cbiAqIElmIHlvdSB3YW50IHRvIG1ha2UgYSBjdXN0b20gZmlsdGVyIHRoaXMgc2hvdWxkIGJlIHlvdXIgYmFzZSBjbGFzcy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gdmVydGV4U3JjIHtzdHJpbmd8c3RyaW5nW119IFRoZSB2ZXJ0ZXggc2hhZGVyIHNvdXJjZSBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICogQHBhcmFtIGZyYWdtZW50U3JjIHtzdHJpbmd8c3RyaW5nW119IFRoZSBmcmFnbWVudCBzaGFkZXIgc291cmNlIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKiBAcGFyYW0gdW5pZm9ybXMge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHVuaWZvcm1zIGZvciB0aGlzIGZpbHRlci5cbiAqL1xuZnVuY3Rpb24gQWJzdHJhY3RGaWx0ZXIodmVydGV4U3JjLCBmcmFnbWVudFNyYywgdW5pZm9ybXMpXG57XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBzaGFkZXJzXG4gICAgICogQG1lbWJlciB7U2hhZGVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNoYWRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBleHRyYSBwYWRkaW5nIHRoYXQgdGhlIGZpbHRlciBtaWdodCBuZWVkXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucGFkZGluZyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5pZm9ybXMgYXMgYW4gb2JqZWN0XG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy51bmlmb3JtcyA9IHVuaWZvcm1zIHx8IHt9O1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29kZSBvZiB0aGUgdmVydGV4IHNoYWRlclxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52ZXJ0ZXhTcmMgPSB2ZXJ0ZXhTcmMgfHwgRGVmYXVsdFNoYWRlci5kZWZhdWx0VmVydGV4U3JjO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvZGUgb2YgdGhlIGZyYW1lbnQgc2hhZGVyXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmZyYWdtZW50U3JjID0gZnJhZ21lbnRTcmMgfHwgRGVmYXVsdFNoYWRlci5kZWZhdWx0RnJhZ21lbnRTcmM7XG5cbiAgICAvL1RPRE8gYSByZW1pbmRlciAtIHdvdWxkIGJlIGNvb2wgdG8gaGF2ZSBsb3dlciByZXMgZmlsdGVycyBhcyB0aGlzIHdvdWxkIGdpdmUgYmV0dGVyIHBlcmZvcm1hbmNlLlxuXG4gICAgLy90eXBlb2YgZnJhZ21lbnRTcmMgPT09ICdzdHJpbmcnID8gZnJhZ21lbnRTcmMuc3BsaXQoJycpIDogKGZyYWdtZW50U3JjIHx8IFtdKTtcblxufVxuXG5BYnN0cmFjdEZpbHRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYnN0cmFjdEZpbHRlcjtcbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RGaWx0ZXI7XG5cbi8qXG4gKiBHcmFicyBhIHNoYWRlciBmcm9tIHRoZSBjdXJyZW50IHJlbmRlcmVyXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0byByZXRyaWV2ZSB0aGUgc2hhZGVyIGZyb21cbiAqXG4gKi9cbkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZS5nZXRTaGFkZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgdmFyIGdsID0gcmVuZGVyZXIuZ2w7XG5cbiAgICB2YXIgc2hhZGVyID0gdGhpcy5zaGFkZXJzW2dsLmlkXTtcblxuICAgIGlmICghc2hhZGVyKVxuICAgIHtcbiAgICAgICAgc2hhZGVyID0gbmV3IERlZmF1bHRTaGFkZXIocmVuZGVyZXIuc2hhZGVyTWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMudmVydGV4U3JjLFxuICAgICAgICAgICAgdGhpcy5mcmFnbWVudFNyYyxcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNoYWRlcnNbZ2wuaWRdID0gc2hhZGVyO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG59O1xuXG4vKlxuICogQXBwbGllcyB0aGUgZmlsdGVyXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0byByZXRyaWV2ZSB0aGUgZmlsdGVyIGZyb21cbiAqIEBwYXJhbSBpbnB1dCB7UmVuZGVyVGFyZ2V0fVxuICogQHBhcmFtIG91dHB1dCB7UmVuZGVyVGFyZ2V0fVxuICogQHBhcmFtIGNsZWFyIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB3ZSB3YW50IHRvIGNsZWFyIHRoZSBvdXRwdXRUYXJnZXRcbiAqL1xuQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlLmFwcGx5RmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmVyLCBpbnB1dCwgb3V0cHV0LCBjbGVhcilcbntcbiAgICB2YXIgc2hhZGVyID0gdGhpcy5nZXRTaGFkZXIocmVuZGVyZXIpO1xuXG4gICAgcmVuZGVyZXIuZmlsdGVyTWFuYWdlci5hcHBseUZpbHRlcihzaGFkZXIsIGlucHV0LCBvdXRwdXQsIGNsZWFyKTtcbn07XG5cbi8qKlxuICogU3luY3MgYSB1bmlmb3JtIGJldHdlZW4gdGhlIGNsYXNzIG9iamVjdCBhbmQgdGhlIHNoYWRlcnMuXG4gKlxuICovXG5BYnN0cmFjdEZpbHRlci5wcm90b3R5cGUuc3luY1VuaWZvcm0gPSBmdW5jdGlvbiAodW5pZm9ybSlcbntcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRoaXMuc2hhZGVycy5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAge1xuICAgICAgICB0aGlzLnNoYWRlcnNbaV0uc3luY1VuaWZvcm0odW5pZm9ybSk7XG4gICAgfVxufTtcblxuLypcbkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChmcmFtZUJ1ZmZlcilcbntcbiAgICAvLyBUT0RPIDopXG59O1xuKi9cbiIsInZhciBBYnN0cmFjdEZpbHRlciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RGaWx0ZXInKTtcblxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuLyoqXG4gKlxuICogQmFzaWMgRlhBQSBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiB0aGUgY29kZSBvbiBnZWVrczNkLmNvbSB3aXRoIHRoZVxuICogbW9kaWZpY2F0aW9uIHRoYXQgdGhlIHRleHR1cmUyRExvZCBzdHVmZiB3YXMgcmVtb3ZlZCBzaW5jZSBpdCdzXG4gKiB1bnN1cHBvcnRlZCBieSBXZWJHTC5cbiAqXG4gKiAtLVxuICogRnJvbTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taXRzdWhpa28vd2ViZ2wtbWVpbmNyYWZ0XG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEZpbHRlclxuICogQG1lbWJlcm9mIFBJWElcbiAqXG4gKi9cbmZ1bmN0aW9uIEZYQUFGaWx0ZXIoKVxue1xuICAgIEFic3RyYWN0RmlsdGVyLmNhbGwodGhpcyxcbiAgICAgICAgLy8gdmVydGV4IHNoYWRlclxuICAgICAgICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9GWEFBLnZlcnQnLCAndXRmOCcpLFxuICAgICAgICAvLyBmcmFnbWVudCBzaGFkZXJcbiAgICAgICAgZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvRlhBQS5mcmFnJywgJ3V0ZjgnKSxcbiAgICAgICAgLy8gdW5pZm9ybXNcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzb2x1dGlvbjogeyB0eXBlOiAndjInLCB2YWx1ZTogeyB4OiAxLCB5OiAxIH0gfVxuICAgICAgICB9XG4gICAgKTtcblxufVxuXG5GWEFBRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlKTtcbkZYQUFGaWx0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRlhBQUZpbHRlcjtcbm1vZHVsZS5leHBvcnRzID0gRlhBQUZpbHRlcjtcblxuRlhBQUZpbHRlci5wcm90b3R5cGUuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGlucHV0LCBvdXRwdXQpXG57XG4gICAgdmFyIGZpbHRlck1hbmFnZXIgPSByZW5kZXJlci5maWx0ZXJNYW5hZ2VyO1xuXG4gICAgdmFyIHNoYWRlciA9IHRoaXMuZ2V0U2hhZGVyKCByZW5kZXJlciApO1xuICAgICAvLyBkcmF3IHRoZSBmaWx0ZXIuLi5cbiAgICBmaWx0ZXJNYW5hZ2VyLmFwcGx5RmlsdGVyKHNoYWRlciwgaW5wdXQsIG91dHB1dCk7XG59O1xuIiwidmFyIEFic3RyYWN0RmlsdGVyID0gcmVxdWlyZSgnLi9BYnN0cmFjdEZpbHRlcicpLFxuICAgIG1hdGggPSAgcmVxdWlyZSgnLi4vLi4vLi4vbWF0aCcpO1xuXG4vLyBmcyBuZWVkcyB0byBiZSBkZWNhbHJlZCBhbG9uZSBmb3IgYnJmcyB0byBwaWNrIGl0IHVwIHByb3Blcmx5LlxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuLyoqXG4gKiBUaGUgU3ByaXRlTWFza0ZpbHRlciBjbGFzc1xuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQWJzdHJhY3RGaWx0ZXJcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc3ByaXRlIHtTcHJpdGV9IHRoZSB0YXJnZXQgc3ByaXRlXG4gKi9cbmZ1bmN0aW9uIFNwcml0ZU1hc2tGaWx0ZXIoc3ByaXRlKVxue1xuICAgIHZhciBtYXNrTWF0cml4ID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbiAgICBBYnN0cmFjdEZpbHRlci5jYWxsKHRoaXMsXG4gICAgICAgIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3Nwcml0ZU1hc2tGaWx0ZXIudmVydCcsICd1dGY4JyksXG4gICAgICAgIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3Nwcml0ZU1hc2tGaWx0ZXIuZnJhZycsICd1dGY4JyksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hc2s6ICAgICAgICAgICB7IHR5cGU6ICdzYW1wbGVyMkQnLCB2YWx1ZTogc3ByaXRlLl90ZXh0dXJlIH0sXG4gICAgICAgICAgICBvdGhlck1hdHJpeDogICAgeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBtYXNrTWF0cml4LnRvQXJyYXkodHJ1ZSkgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMubWFza1Nwcml0ZSA9IHNwcml0ZTtcbiAgICB0aGlzLm1hc2tNYXRyaXggPSBtYXNrTWF0cml4O1xufVxuXG5TcHJpdGVNYXNrRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlKTtcblNwcml0ZU1hc2tGaWx0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaXRlTWFza0ZpbHRlcjtcbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlTWFza0ZpbHRlcjtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBmaWx0ZXIgPyBAYWx2aW5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IEEgcmVmZXJlbmNlIHRvIHRoZSBXZWJHTCByZW5kZXJlclxuICogQHBhcmFtIGlucHV0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gb3V0cHV0IHtSZW5kZXJUYXJnZXR9XG4gKi9cblNwcml0ZU1hc2tGaWx0ZXIucHJvdG90eXBlLmFwcGx5RmlsdGVyID0gZnVuY3Rpb24gKHJlbmRlcmVyLCBpbnB1dCwgb3V0cHV0KVxue1xuICAgIHZhciBmaWx0ZXJNYW5hZ2VyID0gcmVuZGVyZXIuZmlsdGVyTWFuYWdlcjtcblxuICAgIHRoaXMudW5pZm9ybXMubWFzay52YWx1ZSA9IHRoaXMubWFza1Nwcml0ZS5fdGV4dHVyZTtcblxuICAgIGZpbHRlck1hbmFnZXIuY2FsY3VsYXRlTWFwcGVkTWF0cml4KGlucHV0LmZyYW1lLCB0aGlzLm1hc2tTcHJpdGUsIHRoaXMubWFza01hdHJpeCk7XG5cbiAgICB0aGlzLnVuaWZvcm1zLm90aGVyTWF0cml4LnZhbHVlID0gdGhpcy5tYXNrTWF0cml4LnRvQXJyYXkodHJ1ZSk7XG5cbiAgICB2YXIgc2hhZGVyID0gdGhpcy5nZXRTaGFkZXIocmVuZGVyZXIpO1xuICAgICAvLyBkcmF3IHRoZSBmaWx0ZXIuLi5cbiAgICBmaWx0ZXJNYW5hZ2VyLmFwcGx5RmlsdGVyKHNoYWRlciwgaW5wdXQsIG91dHB1dCk7XG59O1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNwcml0ZU1hc2tGaWx0ZXIucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHRleHR1cmUgdXNlZCBmb3IgdGhlIGRpc3BsYWNlbWVudCBtYXAuIE11c3QgYmUgcG93ZXIgb2YgMiBzaXplZCB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7VGV4dHVyZX1cbiAgICAgKiBAbWVtYmVyb2YgU3ByaXRlTWFza0ZpbHRlciNcbiAgICAgKi9cbiAgICBtYXA6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmlmb3Jtcy5tYXNrLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtcy5tYXNrLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9mZnNldCB1c2VkIHRvIG1vdmUgdGhlIGRpc3BsYWNlbWVudCBtYXAuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtQb2ludH1cbiAgICAgKiBAbWVtYmVyb2YgU3ByaXRlTWFza0ZpbHRlciNcbiAgICAgKi9cbiAgICBvZmZzZXQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLm9mZnNldC52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51bmlmb3Jtcy5vZmZzZXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4vV2ViR0xNYW5hZ2VyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgV2ViR2xNYW5hZ2VyXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBCbGVuZE1vZGVNYW5hZ2VyKHJlbmRlcmVyKVxue1xuICAgIFdlYkdMTWFuYWdlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSA5OTk5OTtcbn1cblxuQmxlbmRNb2RlTWFuYWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdlYkdMTWFuYWdlci5wcm90b3R5cGUpO1xuQmxlbmRNb2RlTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCbGVuZE1vZGVNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBCbGVuZE1vZGVNYW5hZ2VyO1xuXG4vKipcbiAqIFNldHMtdXAgdGhlIGdpdmVuIGJsZW5kTW9kZSBmcm9tIFdlYkdMJ3MgcG9pbnQgb2Ygdmlldy5cbiAqXG4gKiBAcGFyYW0gYmxlbmRNb2RlIHtudW1iZXJ9IHRoZSBibGVuZE1vZGUsIHNob3VsZCBiZSBhIFBpeGkgY29uc3QsIHN1Y2ggYXMgQmxlbmRNb2Rlcy5BRERcbiAqL1xuQmxlbmRNb2RlTWFuYWdlci5wcm90b3R5cGUuc2V0QmxlbmRNb2RlID0gZnVuY3Rpb24gKGJsZW5kTW9kZSlcbntcbiAgICBpZiAodGhpcy5jdXJyZW50QmxlbmRNb2RlID09PSBibGVuZE1vZGUpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50QmxlbmRNb2RlID0gYmxlbmRNb2RlO1xuXG4gICAgdmFyIG1vZGUgPSB0aGlzLnJlbmRlcmVyLmJsZW5kTW9kZXNbdGhpcy5jdXJyZW50QmxlbmRNb2RlXTtcbiAgICB0aGlzLnJlbmRlcmVyLmdsLmJsZW5kRnVuYyhtb2RlWzBdLCBtb2RlWzFdKTtcblxuICAgIHJldHVybiB0cnVlO1xufTtcbiIsInZhciBXZWJHTE1hbmFnZXIgPSByZXF1aXJlKCcuL1dlYkdMTWFuYWdlcicpLFxuICAgIFJlbmRlclRhcmdldCA9IHJlcXVpcmUoJy4uL3V0aWxzL1JlbmRlclRhcmdldCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKSxcbiAgICBRdWFkID0gcmVxdWlyZSgnLi4vdXRpbHMvUXVhZCcpLFxuICAgIG1hdGggPSAgcmVxdWlyZSgnLi4vLi4vLi4vbWF0aCcpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFdlYkdMTWFuYWdlclxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gRmlsdGVyTWFuYWdlcihyZW5kZXJlcilcbntcbiAgICBXZWJHTE1hbmFnZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlclN0YWNrID0gW107XG5cbiAgICB0aGlzLmZpbHRlclN0YWNrLnB1c2goe1xuICAgICAgICByZW5kZXJUYXJnZXQ6cmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldCxcbiAgICAgICAgZmlsdGVyOltdLFxuICAgICAgICBib3VuZHM6bnVsbFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55W119XG4gICAgICovXG4gICAgdGhpcy50ZXh0dXJlUG9vbCA9IFtdO1xuXG4gICAgLy8gbGlzdGVuIGZvciBjb250ZXh0IGFuZCB1cGRhdGUgbmVjZXNzYXJ5IGJ1ZmZlcnNcbiAgICAvL1RPRE8gbWFrZSB0aGlzIGR5bmFtaWMhXG4gICAgLy9UT0RPIHRlc3QgdGhpcyBvdXQgYnkgZm9yY2VzIHBvd2VyIG9mIHR3bz9cbiAgICB0aGlzLnRleHR1cmVTaXplID0gbmV3IG1hdGguUmVjdGFuZ2xlKCAwLCAwLCByZW5kZXJlci53aWR0aCwgcmVuZGVyZXIuaGVpZ2h0ICk7XG5cbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IG51bGw7XG59XG5cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXZWJHTE1hbmFnZXIucHJvdG90eXBlKTtcbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsdGVyTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTWFuYWdlcjtcblxuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgV2ViR0wgY29udGV4dCBjaGFuZ2UuXG4gKlxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMudGV4dHVyZVBvb2wubGVuZ3RoID0gMDtcblxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgdGhpcy5xdWFkID0gbmV3IFF1YWQoZ2wpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9XG4gKiBAcGFyYW0gYnVmZmVyIHtBcnJheUJ1ZmZlcn1cbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUuc2V0RmlsdGVyU3RhY2sgPSBmdW5jdGlvbiAoIGZpbHRlclN0YWNrIClcbntcbiAgICB0aGlzLmZpbHRlclN0YWNrID0gZmlsdGVyU3RhY2s7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGZpbHRlciBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suXG4gKlxuICogQHBhcmFtIGZpbHRlckJsb2NrIHtvYmplY3R9IHRoZSBmaWx0ZXIgdGhhdCB3aWxsIGJlIHB1c2hlZCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2tcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUucHVzaEZpbHRlciA9IGZ1bmN0aW9uICh0YXJnZXQsIGZpbHRlcnMpXG57XG4gICAgLy8gZ2V0IHRoZSBib3VuZHMgb2YgdGhlIG9iamVjdC4uXG4gICAgdmFyIGJvdW5kcyA9IHRhcmdldC5maWx0ZXJBcmVhIHx8IHRhcmdldC5nZXRCb3VuZHMoKTtcblxuICAgIC8vIHJvdW5kIG9mZiB0aGUgcmVjdGFuZ2xlIHRvIGdldCBhIG5pY2Ugc21vb29vb29vdGggZmlsdGVyIDopXG4gICAgYm91bmRzLnggPSBib3VuZHMueCB8IDA7XG4gICAgYm91bmRzLnkgPSBib3VuZHMueSB8IDA7XG4gICAgYm91bmRzLndpZHRoID0gYm91bmRzLndpZHRoIHwgMDtcbiAgICBib3VuZHMuaGVpZ2h0ID0gYm91bmRzLmhlaWdodCB8IDA7XG5cblxuICAgIC8vIHBhZGRpbmchXG4gICAgdmFyIHBhZGRpbmcgPSBmaWx0ZXJzWzBdLnBhZGRpbmc7XG4gICAgYm91bmRzLnggLT0gcGFkZGluZztcbiAgICBib3VuZHMueSAtPSBwYWRkaW5nO1xuICAgIGJvdW5kcy53aWR0aCArPSBwYWRkaW5nICogMjtcbiAgICBib3VuZHMuaGVpZ2h0ICs9IHBhZGRpbmcgKiAyO1xuXG5cbiAgICBpZih0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQudHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgLy9UT0RPIHRoaXMgd2lsbCBicmVhayBpZiB0aGUgcmVuZGVyVGV4dHVyZSB0cmFuc2Zvcm0gaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBhIHRyYW5zbGF0aW9uLlxuICAgICAgICAvL1dpbGwgbmVlZCB0byB0YWtlIHRoZSBmdWxsIG1hdHJpeCB0cmFuc2Zvcm0gaW50byBhY291bnQuLlxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnRyYW5zZm9ybTtcblxuICAgICAgICBib3VuZHMueCArPSB0cmFuc2Zvcm0udHg7XG4gICAgICAgIGJvdW5kcy55ICs9IHRyYW5zZm9ybS50eTtcblxuICAgICAgICB0aGlzLmNhcEZpbHRlckFyZWEoIGJvdW5kcyApO1xuXG4gICAgICAgIGJvdW5kcy54IC09IHRyYW5zZm9ybS50eDtcbiAgICAgICAgYm91bmRzLnkgLT0gdHJhbnNmb3JtLnR5O1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAgdGhpcy5jYXBGaWx0ZXJBcmVhKCBib3VuZHMgKTtcbiAgICB9XG5cblxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gYm91bmRzO1xuXG4gICAgdmFyIHRleHR1cmUgPSB0aGlzLmdldFJlbmRlclRhcmdldCgpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQodGV4dHVyZSk7XG5cbiAgICAvLyBjbGVhciB0aGUgdGV4dHVyZS4uXG4gICAgdGV4dHVyZS5jbGVhcigpO1xuXG4gICAgLy8gVE9ETyBnZXQgcmlkIG9mIG9iamVjdCBjcmVhdGlvbiFcbiAgICB0aGlzLmZpbHRlclN0YWNrLnB1c2goe1xuICAgICAgICByZW5kZXJUYXJnZXQ6IHRleHR1cmUsXG4gICAgICAgIGZpbHRlcjogZmlsdGVyc1xuICAgIH0pO1xuXG59O1xuXG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUucG9wRmlsdGVyID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyU3RhY2sucG9wKCk7XG4gICAgdmFyIHByZXZpb3VzRmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyU3RhY2tbdGhpcy5maWx0ZXJTdGFjay5sZW5ndGgtMV07XG5cbiAgICB2YXIgaW5wdXQgPSBmaWx0ZXJEYXRhLnJlbmRlclRhcmdldDtcblxuICAgIHZhciBvdXRwdXQgPSBwcmV2aW91c0ZpbHRlckRhdGEucmVuZGVyVGFyZ2V0O1xuXG4gICAgLy8gdXNlIHByb2dyYW1cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG5cbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGlucHV0LmZyYW1lO1xuXG4gICAgdGhpcy5xdWFkLm1hcCh0aGlzLnRleHR1cmVTaXplLCBpbnB1dC5mcmFtZSk7XG5cbiAgICAvLyBUT0RPLi4gdGhpcyBwcm9iYWJseSBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgb25jZSFcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5xdWFkLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5xdWFkLmluZGV4QnVmZmVyKTtcblxuICAgIHZhciBmaWx0ZXJzID0gZmlsdGVyRGF0YS5maWx0ZXI7XG5cbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDEpXG4gICAge1xuICAgICAgICAvLyBUT0RPIChjZW5nbGVyKSAtIFRoZXJlIGhhcyB0byBiZSBhIGJldHRlciB3YXkgdGhlbiBzZXR0aW5nIHRoaXMgZWFjaCB0aW1lP1xuICAgICAgICBpZiAoZmlsdGVyc1swXS51bmlmb3Jtcy5kaW1lbnNpb25zKVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMF0gPSB0aGlzLnJlbmRlcmVyLndpZHRoO1xuICAgICAgICAgICAgZmlsdGVyc1swXS51bmlmb3Jtcy5kaW1lbnNpb25zLnZhbHVlWzFdID0gdGhpcy5yZW5kZXJlci5oZWlnaHQ7XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMl0gPSB0aGlzLnF1YWQudmVydGljZXNbMF07XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbM10gPSB0aGlzLnF1YWQudmVydGljZXNbNV07XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJzWzBdLmFwcGx5RmlsdGVyKCB0aGlzLnJlbmRlcmVyLCBpbnB1dCwgb3V0cHV0ICk7XG4gICAgICAgIHRoaXMucmV0dXJuUmVuZGVyVGFyZ2V0KCBpbnB1dCApO1xuXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHZhciBmbGlwVGV4dHVyZSA9IGlucHV0O1xuICAgICAgICB2YXIgZmxvcFRleHR1cmUgPSB0aGlzLmdldFJlbmRlclRhcmdldCh0cnVlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoLTE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IGZpbHRlcnNbaV07XG5cbiAgICAgICAgICAgIC8vIFRPRE8gKGNlbmdsZXIpIC0gVGhlcmUgaGFzIHRvIGJlIGEgYmV0dGVyIHdheSB0aGVuIHNldHRpbmcgdGhpcyBlYWNoIHRpbWU/XG4gICAgICAgICAgICBpZiAoZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMF0gPSB0aGlzLnJlbmRlcmVyLndpZHRoO1xuICAgICAgICAgICAgICAgIGZpbHRlci51bmlmb3Jtcy5kaW1lbnNpb25zLnZhbHVlWzFdID0gdGhpcy5yZW5kZXJlci5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMl0gPSB0aGlzLnF1YWQudmVydGljZXNbMF07XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbM10gPSB0aGlzLnF1YWQudmVydGljZXNbNV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlci5hcHBseUZpbHRlciggdGhpcy5yZW5kZXJlciwgZmxpcFRleHR1cmUsIGZsb3BUZXh0dXJlICk7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wID0gZmxpcFRleHR1cmU7XG4gICAgICAgICAgICBmbGlwVGV4dHVyZSA9IGZsb3BUZXh0dXJlO1xuICAgICAgICAgICAgZmxvcFRleHR1cmUgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyc1tmaWx0ZXJzLmxlbmd0aC0xXS5hcHBseUZpbHRlciggdGhpcy5yZW5kZXJlciwgZmxpcFRleHR1cmUsIG91dHB1dCApO1xuXG4gICAgICAgIHRoaXMucmV0dXJuUmVuZGVyVGFyZ2V0KCBmbGlwVGV4dHVyZSApO1xuICAgICAgICB0aGlzLnJldHVyblJlbmRlclRhcmdldCggZmxvcFRleHR1cmUgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyRGF0YS5maWx0ZXI7XG59O1xuXG4vKipcbiAqIEdyYWJzIGFuIHJlbmRlciB0YXJnZXQgZnJvbSB0aGUgaW50ZXJuYWwgcG9vbFxuICpcbiAqIEBwYXJhbSBjbGVhciB7Ym9vbGVhbn0gV2hldGhlciBvciBub3Qgd2UgbmVlZCB0byBjbGVhciB0aGUgUmVuZGVyVGFyZ2V0XG4gKiBAcmV0dXJuIHtSZW5kZXJUYXJnZXR9XG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmdldFJlbmRlclRhcmdldCA9IGZ1bmN0aW9uICggY2xlYXIgKVxue1xuICAgIHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnRleHR1cmVQb29sLnBvcCgpIHx8IG5ldyBSZW5kZXJUYXJnZXQodGhpcy5yZW5kZXJlci5nbCwgdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCwgdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQsIENPTlNULlNDQUxFX01PREVTLkxJTkVBUiwgdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uICogQ09OU1QuRklMVEVSX1JFU09MVVRJT04pO1xuICAgIHJlbmRlclRhcmdldC5mcmFtZSA9IHRoaXMuY3VycmVudEZyYW1lO1xuXG4gICAgaWYgKGNsZWFyKVxuICAgIHtcbiAgICAgICAgcmVuZGVyVGFyZ2V0LmNsZWFyKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJUYXJnZXQ7XG59O1xuXG4vKlxuICogUmV0dXJucyBhIFJlbmRlclRhcmdldCB0byB0aGUgaW50ZXJuYWwgcG9vbFxuICogQHBhcmFtIHJlbmRlclRhcmdldCB7UmVuZGVyVGFyZ2V0fSBUaGUgUmVuZGVyVGFyZ2V0IHdlIHdhbnQgdG8gcmV0dXJuIHRvIHRoZSBwb29sXG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLnJldHVyblJlbmRlclRhcmdldCA9IGZ1bmN0aW9uIChyZW5kZXJUYXJnZXQpXG57XG4gICAgdGhpcy50ZXh0dXJlUG9vbC5wdXNoKCByZW5kZXJUYXJnZXQgKTtcbn07XG5cbi8qXG4gKiBBcHBsaWVzIHRoZSBmaWx0ZXJcbiAqIEBwYXJhbSBzaGFkZXIge1NoYWRlcn0gVGhlIHNoYWRlciB0byB1cGxvYWRcbiAqIEBwYXJhbSBpbnB1dFRhcmdldCB7UmVuZGVyVGFyZ2V0fVxuICogQHBhcmFtIG91dHB1dFRhcmdldCB7UmVuZGVyVGFyZ2V0fVxuICogQHBhcmFtIGNsZWFyIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB3ZSB3YW50IHRvIGNsZWFyIHRoZSBvdXRwdXRUYXJnZXRcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbiAoc2hhZGVyLCBpbnB1dFRhcmdldCwgb3V0cHV0VGFyZ2V0LCBjbGVhcilcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQob3V0cHV0VGFyZ2V0KTtcblxuICAgIGlmIChjbGVhcilcbiAgICB7XG4gICAgICAgIG91dHB1dFRhcmdldC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8vIHNldCB0aGUgc2hhZGVyXG4gICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlcihzaGFkZXIpO1xuXG4gICAgLy8gVE9ETyAoY2VuZ2xlcikgLSBDYW4gdGhpcyBiZSBjYWNoZWQgYW5kIG5vdCBgdG9BcnJheWBlZCBlYWNoIGZyYW1lP1xuICAgIHNoYWRlci51bmlmb3Jtcy5wcm9qZWN0aW9uTWF0cml4LnZhbHVlID0gdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXgudG9BcnJheSh0cnVlKTtcblxuICAgIC8vVE9ETyBjYW4gdGhpcyBiZSBvcHRpbWlzZWQ/XG4gICAgc2hhZGVyLnN5bmNVbmlmb3JtcygpO1xuXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDIgKiA0ICogNCk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hQ29sb3IsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgNCAqIDQgKiA0KTtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGlucHV0VGFyZ2V0LnRleHR1cmUpO1xuXG4gICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgNiwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcbn07XG5cbi8qXG4gKiBDYWxjdWxhdGVzIHRoZSBtYXBwZWQgbWF0cml4XG4gKiBAcGFyYW0gZmlsdGVyQXJlYSB7UmVjdGFuZ2xlfSBUaGUgZmlsdGVyIGFyZWFcbiAqIEBwYXJhbSBzcHJpdGUge1Nwcml0ZX0gdGhlIHRhcmdldCBzcHJpdGVcbiAqIEBwYXJhbSBvdXRwdXRNYXRyaXgge01hdHJpeH0gQGFsdmluXG4gKi9cbi8vIFRPRE8gcGxheWluZyBhcm91bmQgaGVyZS4uIHRoaXMgaXMgdGVtcG9yYXJ5IC0gKHdpbGwgZW5kIHVwIGluIHRoZSBzaGFkZXIpXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5jYWxjdWxhdGVNYXBwZWRNYXRyaXggPSBmdW5jdGlvbiAoZmlsdGVyQXJlYSwgc3ByaXRlLCBvdXRwdXRNYXRyaXgpXG57XG4gICAgdmFyIHdvcmxkVHJhbnNmb3JtID0gc3ByaXRlLndvcmxkVHJhbnNmb3JtLmNvcHkobWF0aC5NYXRyaXguVEVNUF9NQVRSSVgpLFxuICAgIHRleHR1cmUgPSBzcHJpdGUuX3RleHR1cmUuYmFzZVRleHR1cmU7XG5cbiAgICB2YXIgbWFwcGVkTWF0cml4ID0gb3V0cHV0TWF0cml4LmlkZW50aXR5KCk7XG5cbiAgICAvLyBzY2FsZS4uXG4gICAgdmFyIHJhdGlvID0gdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLyB0aGlzLnRleHR1cmVTaXplLndpZHRoO1xuXG4gICAgbWFwcGVkTWF0cml4LnRyYW5zbGF0ZShmaWx0ZXJBcmVhLnggLyB0aGlzLnRleHR1cmVTaXplLndpZHRoLCBmaWx0ZXJBcmVhLnkgLyB0aGlzLnRleHR1cmVTaXplLmhlaWdodCApO1xuXG4gICAgbWFwcGVkTWF0cml4LnNjYWxlKDEgLCByYXRpbyk7XG5cbiAgICB2YXIgdHJhbnNsYXRlU2NhbGVYID0gKHRoaXMudGV4dHVyZVNpemUud2lkdGggLyB0ZXh0dXJlLndpZHRoKTtcbiAgICB2YXIgdHJhbnNsYXRlU2NhbGVZID0gKHRoaXMudGV4dHVyZVNpemUuaGVpZ2h0IC8gdGV4dHVyZS5oZWlnaHQpO1xuXG4gICAgd29ybGRUcmFuc2Zvcm0udHggLz0gdGV4dHVyZS53aWR0aCAqIHRyYW5zbGF0ZVNjYWxlWDtcbiAgICB3b3JsZFRyYW5zZm9ybS50eSAvPSB0ZXh0dXJlLndpZHRoICogdHJhbnNsYXRlU2NhbGVYO1xuXG4gICAgd29ybGRUcmFuc2Zvcm0uaW52ZXJ0KCk7XG5cbiAgICBtYXBwZWRNYXRyaXgucHJlcGVuZCh3b3JsZFRyYW5zZm9ybSk7XG5cbiAgICAvLyBhcHBseSBpbnZlcnNlIHNjYWxlLi5cbiAgICBtYXBwZWRNYXRyaXguc2NhbGUoMSAsIDEvcmF0aW8pO1xuXG4gICAgbWFwcGVkTWF0cml4LnNjYWxlKCB0cmFuc2xhdGVTY2FsZVggLCB0cmFuc2xhdGVTY2FsZVkgKTtcblxuICAgIG1hcHBlZE1hdHJpeC50cmFuc2xhdGUoc3ByaXRlLmFuY2hvci54LCBzcHJpdGUuYW5jaG9yLnkpO1xuXG4gICAgcmV0dXJuIG1hcHBlZE1hdHJpeDtcblxuICAgIC8vIEtlZXBpbmcgdGhlIG9yZ2luYWwgYXMgYSByZW1pbmRlciB0byBtZSBvbiBob3cgdGhpcyB3b3JrcyFcbiAgICAvL1xuICAgIC8vIHZhciBtID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbiAgICAvLyAvLyBzY2FsZS4uXG4gICAgLy8gdmFyIHJhdGlvID0gdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLyB0aGlzLnRleHR1cmVTaXplLndpZHRoO1xuXG4gICAgLy8gbS50cmFuc2xhdGUoZmlsdGVyQXJlYS54IC8gdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCwgZmlsdGVyQXJlYS55IC8gdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQpO1xuXG5cbiAgICAvLyBtLnNjYWxlKDEgLCByYXRpbyk7XG5cblxuICAgIC8vIHZhciB0cmFuc2Zvcm0gPSB3dC5jbG9uZSgpO1xuXG4gICAgLy8gdmFyIHRyYW5zbGF0ZVNjYWxlWCA9ICh0aGlzLnRleHR1cmVTaXplLndpZHRoIC8gNjIwKTtcbiAgICAvLyB2YXIgdHJhbnNsYXRlU2NhbGVZID0gKHRoaXMudGV4dHVyZVNpemUuaGVpZ2h0IC8gMzgwKTtcblxuICAgIC8vIHRyYW5zZm9ybS50eCAvPSA2MjAgKiB0cmFuc2xhdGVTY2FsZVg7XG4gICAgLy8gdHJhbnNmb3JtLnR5IC89IDYyMCAqIHRyYW5zbGF0ZVNjYWxlWDtcblxuICAgIC8vIHRyYW5zZm9ybS5pbnZlcnQoKTtcblxuICAgIC8vIHRyYW5zZm9ybS5hcHBlbmQobSk7XG5cbiAgICAvLyAvLyBhcHBseSBpbnZlcnNlIHNjYWxlLi5cbiAgICAvLyB0cmFuc2Zvcm0uc2NhbGUoMSAsIDEvcmF0aW8pO1xuXG4gICAgLy8gdHJhbnNmb3JtLnNjYWxlKCB0cmFuc2xhdGVTY2FsZVggLCB0cmFuc2xhdGVTY2FsZVkgKTtcblxuICAgIC8vIHJldHVybiB0cmFuc2Zvcm07XG59O1xuXG4vKlxuICogQ29uc3RyYWlucyB0aGUgZmlsdGVyIGFyZWEgdG8gdGhlIHRleHR1cmUgc2l6ZVxuICogQHBhcmFtIGZpbHRlckFyZWEge1JlY3RhbmdsZX0gVGhlIGZpbHRlciBhcmVhIHdlIHdhbnQgdG8gY2FwXG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmNhcEZpbHRlckFyZWEgPSBmdW5jdGlvbiAoZmlsdGVyQXJlYSlcbntcbiAgICBpZiAoZmlsdGVyQXJlYS54IDwgMClcbiAgICB7XG4gICAgICAgIGZpbHRlckFyZWEud2lkdGggKz0gZmlsdGVyQXJlYS54O1xuICAgICAgICBmaWx0ZXJBcmVhLnggPSAwO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJBcmVhLnkgPCAwKVxuICAgIHtcbiAgICAgICAgZmlsdGVyQXJlYS5oZWlnaHQgKz0gZmlsdGVyQXJlYS55O1xuICAgICAgICBmaWx0ZXJBcmVhLnkgPSAwO1xuICAgIH1cblxuICAgIGlmICggZmlsdGVyQXJlYS54ICsgZmlsdGVyQXJlYS53aWR0aCA+IHRoaXMudGV4dHVyZVNpemUud2lkdGggKVxuICAgIHtcbiAgICAgICAgZmlsdGVyQXJlYS53aWR0aCA9IHRoaXMudGV4dHVyZVNpemUud2lkdGggLSBmaWx0ZXJBcmVhLng7XG4gICAgfVxuXG4gICAgaWYgKCBmaWx0ZXJBcmVhLnkgKyBmaWx0ZXJBcmVhLmhlaWdodCA+IHRoaXMudGV4dHVyZVNpemUuaGVpZ2h0IClcbiAgICB7XG4gICAgICAgIGZpbHRlckFyZWEuaGVpZ2h0ID0gdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLSBmaWx0ZXJBcmVhLnk7XG4gICAgfVxufTtcblxuLypcbiAqIFJlc2l6ZXMgYWxsIHRoZSByZW5kZXIgdGFyZ2V0cyBpbiB0aGUgcG9vbFxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IHRoZSBuZXcgd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gdGhlIG5ldyBoZWlnaHRcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0IClcbntcbiAgICB0aGlzLnRleHR1cmVTaXplLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dHVyZVBvb2wubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLnRleHR1cmVQb29sW2ldLnJlc2l6ZSggd2lkdGgsIGhlaWdodCApO1xuICAgIH1cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIGZpbHRlciBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSBmaWx0ZXIgc3RhY2suXG4gKlxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmZpbHRlclN0YWNrID0gbnVsbDtcbiAgICB0aGlzLm9mZnNldFkgPSAwO1xuXG4gICAgLy8gZGVzdHJveSB0ZXh0dXJlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlUG9vbC5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMudGV4dHVyZVBvb2xbaV0uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMudGV4dHVyZVBvb2wgPSBudWxsO1xufTtcbiIsInZhciBXZWJHTE1hbmFnZXIgPSByZXF1aXJlKCcuL1dlYkdMTWFuYWdlcicpLFxuICAgIEFscGhhTWFza0ZpbHRlciA9IHJlcXVpcmUoJy4uL2ZpbHRlcnMvU3ByaXRlTWFza0ZpbHRlcicpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIE1hc2tNYW5hZ2VyKHJlbmRlcmVyKVxue1xuICAgIFdlYkdMTWFuYWdlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcblxuICAgIHRoaXMuc3RlbmNpbFN0YWNrID0gW107XG4gICAgdGhpcy5yZXZlcnNlID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ID0gMDtcblxuICAgIHRoaXMuYWxwaGFNYXNrUG9vbCA9IFtdO1xufVxuXG5NYXNrTWFuYWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdlYkdMTWFuYWdlci5wcm90b3R5cGUpO1xuTWFza01hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWFza01hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tNYW5hZ2VyO1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIE1hc2sgYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgZmlsdGVyIHN0YWNrLlxuICpcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9XG4gKiBAcGFyYW0gd2ViR0xEYXRhIHthbnlbXX1cbiAqL1xuTWFza01hbmFnZXIucHJvdG90eXBlLnB1c2hNYXNrID0gZnVuY3Rpb24gKHRhcmdldCwgbWFza0RhdGEpXG57XG4gICAgaWYgKG1hc2tEYXRhLnRleHR1cmUpXG4gICAge1xuICAgICAgICB0aGlzLnB1c2hTcHJpdGVNYXNrKHRhcmdldCwgbWFza0RhdGEpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLnB1c2hTdGVuY2lsTWFzayh0YXJnZXQsIG1hc2tEYXRhKTtcbiAgICB9XG5cbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBtYXNrIGZyb20gdGhlIG1hc2sgc3RhY2sgYW5kIGRvZXNuJ3QgcmV0dXJuIGl0LlxuICogXG4gKiBAcGFyYW0gdGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucG9wTWFzayA9IGZ1bmN0aW9uICh0YXJnZXQsIG1hc2tEYXRhKVxue1xuICAgIGlmIChtYXNrRGF0YS50ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgdGhpcy5wb3BTcHJpdGVNYXNrKHRhcmdldCwgbWFza0RhdGEpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLnBvcFN0ZW5jaWxNYXNrKHRhcmdldCwgbWFza0RhdGEpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgTWFzayBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suXG4gKlxuICogQHBhcmFtIHRhcmdldCB7UmVuZGVyVGFyZ2V0fVxuICogQHBhcmFtIG1hc2tEYXRhIHthbnlbXX1cbiAqL1xuTWFza01hbmFnZXIucHJvdG90eXBlLnB1c2hTcHJpdGVNYXNrID0gZnVuY3Rpb24gKHRhcmdldCwgbWFza0RhdGEpXG57XG4gICAgdmFyIGFscGhhTWFza0ZpbHRlciA9IHRoaXMuYWxwaGFNYXNrUG9vbC5wb3AoKTtcblxuICAgIGlmICghYWxwaGFNYXNrRmlsdGVyKVxuICAgIHtcbiAgICAgICAgYWxwaGFNYXNrRmlsdGVyID0gW25ldyBBbHBoYU1hc2tGaWx0ZXIobWFza0RhdGEpXTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXIucHVzaEZpbHRlcih0YXJnZXQsIGFscGhhTWFza0ZpbHRlcik7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGxhc3QgZmlsdGVyIGZyb20gdGhlIGZpbHRlciBzdGFjayBhbmQgZG9lc24ndCByZXR1cm4gaXQuXG4gKlxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucG9wU3ByaXRlTWFzayA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGZpbHRlcnMgPSB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXIucG9wRmlsdGVyKCk7XG5cbiAgICB0aGlzLmFscGhhTWFza1Bvb2wucHVzaChmaWx0ZXJzKTtcbn07XG5cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBNYXNrIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFjay5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaFN0ZW5jaWxNYXNrID0gZnVuY3Rpb24gKHRhcmdldCwgbWFza0RhdGEpXG57XG4gICAgdGhpcy5yZW5kZXJlci5zdGVuY2lsTWFuYWdlci5wdXNoTWFzayhtYXNrRGF0YSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGxhc3QgZmlsdGVyIGZyb20gdGhlIGZpbHRlciBzdGFjayBhbmQgZG9lc24ndCByZXR1cm4gaXQuXG4gKiBAcGFyYW0gdGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucG9wU3RlbmNpbE1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICB0aGlzLnJlbmRlcmVyLnN0ZW5jaWxNYW5hZ2VyLnBvcE1hc2sobWFza0RhdGEpO1xufTtcblxuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4vV2ViR0xNYW5hZ2VyJyksXG4gICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcnMvVGV4dHVyZVNoYWRlcicpLFxuICAgIENvbXBsZXhQcmltaXRpdmVTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXJzL0NvbXBsZXhQcmltaXRpdmVTaGFkZXInKSxcbiAgICBQcmltaXRpdmVTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXJzL1ByaW1pdGl2ZVNoYWRlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBXZWJHTE1hbmFnZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIFNoYWRlck1hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubWF4QXR0aWJzID0gMTA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX1cbiAgICAgKi9cbiAgICB0aGlzLmF0dHJpYlN0YXRlID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX1cbiAgICAgKi9cbiAgICB0aGlzLnRlbXBBdHRyaWJTdGF0ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heEF0dGliczsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhpcy5hdHRyaWJTdGF0ZVtpXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMuc3RhY2sgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2N1cnJlbnRJZCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2hhZGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50U2hhZGVyID0gbnVsbDtcblxuLy8gICAgdGhpcy5pbml0UGx1Z2lucygpO1xufVxuXG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNoYWRlck1hbmFnZXI7XG51dGlscy5wbHVnaW5UYXJnZXQubWl4aW4oU2hhZGVyTWFuYWdlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyTWFuYWdlcjtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGVyZSBpcyBhIFdlYkdMIGNvbnRleHQgY2hhbmdlLlxuICpcbiAqL1xuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUub25Db250ZXh0Q2hhbmdlID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmluaXRQbHVnaW5zKCk7XG5cbiAgICAvLyBUT0RPIC0gV2h5IGFyZSB0aGVzZSBub3QgcGx1Z2lucz8gV2UgY2FuJ3QgZGVjb3VwbGUgcHJpbWl0aXZlcyB1bmxlc3MgdGhleSBhcmUuLi4uXG4gICAgdGhpcy5kZWZhdWx0U2hhZGVyID0gbmV3IFRleHR1cmVTaGFkZXIodGhpcyk7XG4gICAgdGhpcy5wcmltaXRpdmVTaGFkZXIgPSBuZXcgUHJpbWl0aXZlU2hhZGVyKHRoaXMpO1xuICAgIHRoaXMuY29tcGxleFByaW1pdGl2ZVNoYWRlciA9IG5ldyBDb21wbGV4UHJpbWl0aXZlU2hhZGVyKHRoaXMpO1xufTtcblxuLyoqXG4gKiBUYWtlcyB0aGUgYXR0cmlidXRlcyBnaXZlbiBpbiBwYXJhbWV0ZXJzIGFuZCB1cGxvYWRzIHRoZW0uXG4gKlxuICogQHBhcmFtIGF0dHJpYnMge0FycmF5fSBhdHRyaWJzXG4gKi9cblNoYWRlck1hbmFnZXIucHJvdG90eXBlLnNldEF0dHJpYnMgPSBmdW5jdGlvbiAoYXR0cmlicylcbntcbiAgICAvLyByZXNldCB0ZW1wIHN0YXRlXG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50ZW1wQXR0cmliU3RhdGUubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLnRlbXBBdHRyaWJTdGF0ZVtpXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHNldCB0aGUgbmV3IGF0dHJpYnNcbiAgICBmb3IgKHZhciBhIGluIGF0dHJpYnMpXG4gICAge1xuICAgICAgICB0aGlzLnRlbXBBdHRyaWJTdGF0ZVthdHRyaWJzW2FdXSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmF0dHJpYlN0YXRlLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0cmliU3RhdGVbaV0gIT09IHRoaXMudGVtcEF0dHJpYlN0YXRlW2ldKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYlN0YXRlW2ldID0gdGhpcy50ZW1wQXR0cmliU3RhdGVbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYlN0YXRlW2ldKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY3VycmVudCBzaGFkZXIuXG4gKlxuICogQHBhcmFtIHNoYWRlciB7U2hhZGVyfSB0aGUgc2hhZGVyIHRvIHVwbG9hZFxuICovXG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZS5zZXRTaGFkZXIgPSBmdW5jdGlvbiAoc2hhZGVyKVxue1xuICAgIGlmICh0aGlzLl9jdXJyZW50SWQgPT09IHNoYWRlci51dWlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRJZCA9IHNoYWRlci51dWlkO1xuXG4gICAgdGhpcy5jdXJyZW50U2hhZGVyID0gc2hhZGVyO1xuXG4gICAgdGhpcy5yZW5kZXJlci5nbC51c2VQcm9ncmFtKHNoYWRlci5wcm9ncmFtKTtcbiAgICB0aGlzLnNldEF0dHJpYnMoc2hhZGVyLmF0dHJpYnV0ZXMpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoaXMgb2JqZWN0LlxuICpcbiAqL1xuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgV2ViR0xNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmRlc3Ryb3lQbHVnaW5zKCk7XG5cbiAgICB0aGlzLmF0dHJpYlN0YXRlID0gbnVsbDtcblxuICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlID0gbnVsbDtcbn07XG4iLCJ2YXIgV2ViR0xNYW5hZ2VyID0gcmVxdWlyZSgnLi9XZWJHTE1hbmFnZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gV2ViR0xNYXNrTWFuYWdlcihyZW5kZXJlcilcbntcbiAgICBXZWJHTE1hbmFnZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG4gICAgdGhpcy5zdGVuY2lsTWFza1N0YWNrID0gbnVsbDtcbn1cblxuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdlYkdMTWFuYWdlci5wcm90b3R5cGUpO1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWJHTE1hc2tNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBXZWJHTE1hc2tNYW5hZ2VyO1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIG1hc2sgc3RhY2sgdGhhdCBpcyB1c2VkIGJ5IHRoaXMgbWFuYWdlclxuICogQHBhcmFtIHN0ZW5jaWxNYXNrU3RhY2sge1N0ZW5jaWxNYXNrU3RhY2t9IFRoZSBtYXNrIHN0YWNrIFxuICpcbiAqL1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUuc2V0TWFza1N0YWNrID0gZnVuY3Rpb24gKCBzdGVuY2lsTWFza1N0YWNrIClcbntcbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2sgPSBzdGVuY2lsTWFza1N0YWNrO1xuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIGlmIChzdGVuY2lsTWFza1N0YWNrLnN0ZW5jaWxTdGFjay5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBnbC5kaXNhYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGdsLmVuYWJsZShnbC5TVEVOQ0lMX1RFU1QpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgTWFzayBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suIEBhbHZpblxuICogXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfVxuICogQHBhcmFtIHdlYkdMRGF0YSB7YW55W119XG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLnB1c2hTdGVuY2lsID0gZnVuY3Rpb24gKGdyYXBoaWNzLCB3ZWJHTERhdGEpXG57XG4gICAgdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LmF0dGFjaFN0ZW5jaWxCdWZmZXIoKTtcblxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2wsXG4gICAgICAgIHNtcyA9IHRoaXMuc3RlbmNpbE1hc2tTdGFjaztcblxuICAgIHRoaXMuYmluZEdyYXBoaWNzKGdyYXBoaWNzLCB3ZWJHTERhdGEsIHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKHNtcy5zdGVuY2lsU3RhY2subGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgICAgIGdsLmNsZWFyKGdsLlNURU5DSUxfQlVGRkVSX0JJVCk7XG4gICAgICAgIHNtcy5yZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgc21zLmNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBzbXMuc3RlbmNpbFN0YWNrLnB1c2god2ViR0xEYXRhKTtcblxuICAgIHZhciBsZXZlbCA9IHNtcy5jb3VudDtcblxuICAgIGdsLmNvbG9yTWFzayhmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICBnbC5zdGVuY2lsRnVuYyhnbC5BTFdBWVMsMCwweEZGKTtcbiAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLklOVkVSVCk7XG5cbiAgICAvLyBkcmF3IHRoZSB0cmlhbmdsZSBzdHJpcCFcblxuICAgIGlmICh3ZWJHTERhdGEubW9kZSA9PT0gMSlcbiAgICB7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9GQU4sICB3ZWJHTERhdGEuaW5kaWNlcy5sZW5ndGggLSA0LCBnbC5VTlNJR05FRF9TSE9SVCwgMCApO1xuXG4gICAgICAgIGlmIChzbXMucmV2ZXJzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsIDB4RkYgLSBsZXZlbCwgMHhGRik7XG4gICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLkRFQ1IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwsIDB4RkYpO1xuICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5JTkNSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRyYXcgYSBxdWFkIHRvIGluY3JlbWVudC4uXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9GQU4sIDQsIGdsLlVOU0lHTkVEX1NIT1JULCAoIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCAtIDQgKSAqIDIgKTtcblxuICAgICAgICBpZiAoc21zLnJldmVyc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLDB4RkYtKGxldmVsKzEpLCAweEZGKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLGxldmVsKzEsIDB4RkYpO1xuICAgICAgICB9XG5cbiAgICAgICAgc21zLnJldmVyc2UgPSAhc21zLnJldmVyc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGlmICghc21zLnJldmVyc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLCAweEZGIC0gbGV2ZWwsIDB4RkYpO1xuICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5ERUNSKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLGxldmVsLCAweEZGKTtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5DUik7XG4gICAgICAgIH1cblxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVfU1RSSVAsICB3ZWJHTERhdGEuaW5kaWNlcy5sZW5ndGgsIGdsLlVOU0lHTkVEX1NIT1JULCAwICk7XG5cbiAgICAgICAgaWYgKCFzbXMucmV2ZXJzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsMHhGRi0obGV2ZWwrMSksIDB4RkYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwrMSwgMHhGRik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnbC5jb2xvck1hc2sodHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5LRUVQKTtcblxuICAgIHNtcy5jb3VudCsrO1xufTtcblxuLyoqXG4gKiBUT0RPIHRoaXMgZG9lcyBub3QgYmVsb25nIGhlcmUhXG4gKlxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc31cbiAqIEBwYXJhbSB3ZWJHTERhdGEge0FycmF5fVxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5iaW5kR3JhcGhpY3MgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHdlYkdMRGF0YSlcbntcbiAgICAvL2lmICh0aGlzLl9jdXJyZW50R3JhcGhpY3MgPT09IGdyYXBoaWNzKXJldHVybjtcbiAgICB0aGlzLl9jdXJyZW50R3JhcGhpY3MgPSBncmFwaGljcztcblxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAgLy8gYmluZCB0aGUgZ3JhcGhpY3Mgb2JqZWN0Li5cbiAgICB2YXIgc2hhZGVyOy8vID0gdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnBsdWdpbnMucHJpbWl0aXZlU2hhZGVyO1xuXG4gICAgaWYgKHdlYkdMRGF0YS5tb2RlID09PSAxKVxuICAgIHtcbiAgICAgICAgc2hhZGVyID0gdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLmNvbXBsZXhQcmltaXRpdmVTaGFkZXI7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlcihzaGFkZXIpO1xuXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4Ll9sb2NhdGlvbiwgZmFsc2UsIGdyYXBoaWNzLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSkpO1xuXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXgudG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybTNmdihzaGFkZXIudW5pZm9ybXMudGludC5fbG9jYXRpb24sIHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3MudGludCkpO1xuXG4gICAgICAgIGdsLnVuaWZvcm0zZnYoc2hhZGVyLnVuaWZvcm1zLmNvbG9yLl9sb2NhdGlvbiwgd2ViR0xEYXRhLmNvbG9yKTtcblxuICAgICAgICBnbC51bmlmb3JtMWYoc2hhZGVyLnVuaWZvcm1zLmFscGhhLl9sb2NhdGlvbiwgZ3JhcGhpY3Mud29ybGRBbHBoYSk7XG5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHdlYkdMRGF0YS5idWZmZXIpO1xuXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDQgKiAyLCAwKTtcblxuXG4gICAgICAgIC8vIG5vdyBkbyB0aGUgcmVzdC4uXG4gICAgICAgIC8vIHNldCB0aGUgaW5kZXggYnVmZmVyIVxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB3ZWJHTERhdGEuaW5kZXhCdWZmZXIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvL3RoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5hY3RpdmF0ZVByaW1pdGl2ZVNoYWRlcigpO1xuICAgICAgICBzaGFkZXIgPSB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIucHJpbWl0aXZlU2hhZGVyO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5zZXRTaGFkZXIoIHNoYWRlciApO1xuXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4Ll9sb2NhdGlvbiwgZmFsc2UsIGdyYXBoaWNzLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSkpO1xuXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXgudG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybTNmdihzaGFkZXIudW5pZm9ybXMudGludC5fbG9jYXRpb24sIHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3MudGludCkpO1xuXG4gICAgICAgIGdsLnVuaWZvcm0xZihzaGFkZXIudW5pZm9ybXMuYWxwaGEuX2xvY2F0aW9uLCBncmFwaGljcy53b3JsZEFscGhhKTtcblxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmJ1ZmZlcik7XG5cbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDYsIDApO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFDb2xvciwgNCwgZ2wuRkxPQVQsIGZhbHNlLDQgKiA2LCAyICogNCk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBpbmRleCBidWZmZXIhXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHdlYkdMRGF0YS5pbmRleEJ1ZmZlcik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUT0RPIEBhbHZpblxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc31cbiAqIEBwYXJhbSB3ZWJHTERhdGEge0FycmF5fVxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BTdGVuY2lsID0gZnVuY3Rpb24gKGdyYXBoaWNzLCB3ZWJHTERhdGEpXG57XG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbCxcbiAgICAgICAgc21zID0gdGhpcy5zdGVuY2lsTWFza1N0YWNrO1xuXG4gICAgc21zLnN0ZW5jaWxTdGFjay5wb3AoKTtcblxuICAgIHNtcy5jb3VudC0tO1xuXG4gICAgaWYgKHNtcy5zdGVuY2lsU3RhY2subGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgLy8gdGhlIHN0YWNrIGlzIGVtcHR5IVxuICAgICAgICBnbC5kaXNhYmxlKGdsLlNURU5DSUxfVEVTVCk7XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcblxuICAgICAgICB2YXIgbGV2ZWwgPSBzbXMuY291bnQ7XG5cbiAgICAgICAgdGhpcy5iaW5kR3JhcGhpY3MoZ3JhcGhpY3MsIHdlYkdMRGF0YSwgdGhpcy5yZW5kZXJlcik7XG5cbiAgICAgICAgZ2wuY29sb3JNYXNrKGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICBpZiAod2ViR0xEYXRhLm1vZGUgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNtcy5yZXZlcnNlID0gIXNtcy5yZXZlcnNlO1xuXG4gICAgICAgICAgICBpZiAoc21zLnJldmVyc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsIDB4RkYgLSAobGV2ZWwrMSksIDB4RkYpO1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5DUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwrMSwgMHhGRik7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5ERUNSKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHJhdyBhIHF1YWQgdG8gaW5jcmVtZW50Li5cbiAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9GQU4sIDQsIGdsLlVOU0lHTkVEX1NIT1JULCAoIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCAtIDQgKSAqIDIgKTtcblxuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuQUxXQVlTLDAsMHhGRik7XG4gICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLklOVkVSVCk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHRyaWFuZ2xlIHN0cmlwIVxuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCAtIDQsIGdsLlVOU0lHTkVEX1NIT1JULCAwICk7XG5cbiAgICAgICAgICAgIGlmICghc21zLnJldmVyc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsMHhGRi0obGV2ZWwpLCAweEZGKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCwgMHhGRik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCI8PD4+XCIpXG4gICAgICAgICAgICBpZiAoIXNtcy5yZXZlcnNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLCAweEZGIC0gKGxldmVsKzEpLCAweEZGKTtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLklOQ1IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLGxldmVsKzEsIDB4RkYpO1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuREVDUik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9TVFJJUCwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcblxuICAgICAgICAgICAgaWYgKCFzbXMucmV2ZXJzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwweEZGLShsZXZlbCksIDB4RkYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLGxldmVsLCAweEZGKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5LRUVQKTtcblxuXG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgbWFzayBzdGFjay5cbiAqXG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIFdlYkdMTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5zdGVuY2lsTWFza1N0YWNrLnN0ZW5jaWxTdGFjayA9IG51bGw7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIE1hc2sgYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgZmlsdGVyIHN0YWNrLlxuICpcbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119IFRoZSBtYXNrIGRhdGEgc3RydWN0dXJlIHRvIHVzZVxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wdXNoTWFzayA9IGZ1bmN0aW9uIChtYXNrRGF0YSlcbntcblxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRPYmplY3RSZW5kZXJlcih0aGlzLnJlbmRlcmVyLnBsdWdpbnMuZ3JhcGhpY3MpO1xuXG4gICAgaWYgKG1hc2tEYXRhLmRpcnR5KVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5wbHVnaW5zLmdyYXBoaWNzLnVwZGF0ZUdyYXBoaWNzKG1hc2tEYXRhLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hc2tEYXRhLl93ZWJHTFt0aGlzLnJlbmRlcmVyLmdsLmlkXS5kYXRhLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnB1c2hTdGVuY2lsKG1hc2tEYXRhLCBtYXNrRGF0YS5fd2ViR0xbdGhpcy5yZW5kZXJlci5nbC5pZF0uZGF0YVswXSwgdGhpcy5yZW5kZXJlcik7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGxhc3QgZmlsdGVyIGZyb20gdGhlIGZpbHRlciBzdGFjayBhbmQgZG9lc24ndCByZXR1cm4gaXQuXG4gKlxuICogQHBhcmFtIG1hc2tEYXRhIHthbnlbXX1cbiAqL1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUucG9wTWFzayA9IGZ1bmN0aW9uIChtYXNrRGF0YSlcbntcbiAgICB0aGlzLnJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKHRoaXMucmVuZGVyZXIucGx1Z2lucy5ncmFwaGljcyk7XG5cbiAgICB0aGlzLnBvcFN0ZW5jaWwobWFza0RhdGEsIG1hc2tEYXRhLl93ZWJHTFt0aGlzLnJlbmRlcmVyLmdsLmlkXS5kYXRhWzBdLCB0aGlzLnJlbmRlcmVyKTtcbn07XG5cbiIsIi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gV2ViR0xNYW5hZ2VyKHJlbmRlcmVyKVxue1xuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7V2ViR0xSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5yZW5kZXJlci5vbignY29udGV4dCcsIHRoaXMuX29uQ29udGV4dENoYW5nZUZuID0gZnVuY3Rpb24oKXtcblxuICAgIFx0c2VsZi5vbkNvbnRleHRDaGFuZ2UoKTtcblxuICAgIH0pO1xufVxuXG5XZWJHTE1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV2ViR0xNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBXZWJHTE1hbmFnZXI7XG5cbi8qKlxuICogR2VuZXJpYyBtZXRob2QgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBXZWJHTCBjb250ZXh0IGNoYW5nZS5cbiAqXG4gKi9cbldlYkdMTWFuYWdlci5wcm90b3R5cGUub25Db250ZXh0Q2hhbmdlID0gZnVuY3Rpb24gKClcbntcblx0Ly8gZG8gc29tZSBjb2RlcyBpbml0IVxufTtcblxuLyoqXG4gKiBHZW5lcmljIGRlc3Ryb3kgbWV0aG9kcyB0byBiZSBvdmVycmlkZGVuIGJ5IHRoZSBzdWJjbGFzc1xuICpcbiAqL1xuV2ViR0xNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLnJlbmRlcmVyLm9mZignY29udGV4dCcsIHRoaXMuX29uQ29udGV4dENoYW5nZUZuKTtcblxuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xufTtcbiIsInZhciBTaGFkZXIgPSByZXF1aXJlKCcuL1NoYWRlcicpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFNoYWRlclxuICogQHBhcmFtIHNoYWRlck1hbmFnZXIge1NoYWRlck1hbmFnZXJ9IFRoZSB3ZWJnbCBzaGFkZXIgbWFuYWdlciB0aGlzIHNoYWRlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIENvbXBsZXhQcmltaXRpdmVTaGFkZXIoc2hhZGVyTWFuYWdlcilcbntcbiAgICBTaGFkZXIuY2FsbCh0aGlzLFxuICAgICAgICBzaGFkZXJNYW5hZ2VyLFxuICAgICAgICAvLyB2ZXJ0ZXggc2hhZGVyXG4gICAgICAgIFtcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4OycsXG5cbiAgICAgICAgICAgICd1bmlmb3JtIHZlYzMgdGludDsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gZmxvYXQgYWxwaGE7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIHZlYzMgY29sb3I7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2Q29sb3I7JyxcblxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKXsnLFxuICAgICAgICAgICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24sIDEuMCkpLnh5LCAwLjAsIDEuMCk7JyxcbiAgICAgICAgICAgICcgICB2Q29sb3IgPSB2ZWM0KGNvbG9yICogYWxwaGEgKiB0aW50LCBhbHBoYSk7JywvL1wiICogdmVjNCh0aW50ICogYWxwaGEsIGFscGhhKTsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgIC8vIGZyYWdtZW50IHNoYWRlclxuICAgICAgICBbXG4gICAgICAgICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2Q29sb3I7JyxcblxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKXsnLFxuICAgICAgICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHZDb2xvcjsnLFxuICAgICAgICAgICAgJ30nXG4gICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgIC8vIGN1c3RvbSB1bmlmb3Jtc1xuICAgICAgICB7XG4gICAgICAgICAgICB0aW50OiAgIHsgdHlwZTogJzNmJywgdmFsdWU6IFswLCAwLCAwXSB9LFxuICAgICAgICAgICAgYWxwaGE6ICB7IHR5cGU6ICcxZicsIHZhbHVlOiAwIH0sXG4gICAgICAgICAgICBjb2xvcjogIHsgdHlwZTogJzNmJywgdmFsdWU6IFswLDAsMF0gfSxcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uTWF0cml4OiB7IHR5cGU6ICdtYXQzJywgdmFsdWU6IG5ldyBGbG9hdDMyQXJyYXkoOSkgfSxcbiAgICAgICAgICAgIHByb2plY3Rpb25NYXRyaXg6IHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSg5KSB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAge1xuICAgICAgICAgICAgYVZlcnRleFBvc2l0aW9uOjBcbiAgICAgICAgfVxuICAgICk7XG59XG5cbkNvbXBsZXhQcmltaXRpdmVTaGFkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaGFkZXIucHJvdG90eXBlKTtcbkNvbXBsZXhQcmltaXRpdmVTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29tcGxleFByaW1pdGl2ZVNoYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gQ29tcGxleFByaW1pdGl2ZVNoYWRlcjtcbiIsInZhciBTaGFkZXIgPSByZXF1aXJlKCcuL1NoYWRlcicpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFNoYWRlclxuICogQHBhcmFtIHNoYWRlck1hbmFnZXIge1NoYWRlck1hbmFnZXJ9IFRoZSB3ZWJnbCBzaGFkZXIgbWFuYWdlciB0aGlzIHNoYWRlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIFByaW1pdGl2ZVNoYWRlcihzaGFkZXJNYW5hZ2VyKVxue1xuICAgIFNoYWRlci5jYWxsKHRoaXMsXG4gICAgICAgIHNoYWRlck1hbmFnZXIsXG4gICAgICAgIC8vIHZlcnRleCBzaGFkZXJcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IGFDb2xvcjsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4OycsXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gZmxvYXQgYWxwaGE7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIGZsb2F0IGZsaXBZOycsXG4gICAgICAgICAgICAndW5pZm9ybSB2ZWMzIHRpbnQ7JyxcblxuICAgICAgICAgICAgJ3ZhcnlpbmcgdmVjNCB2Q29sb3I7JyxcblxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKXsnLFxuICAgICAgICAgICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24sIDEuMCkpLnh5LCAwLjAsIDEuMCk7JyxcbiAgICAgICAgICAgICcgICB2Q29sb3IgPSBhQ29sb3IgKiB2ZWM0KHRpbnQgKiBhbHBoYSwgYWxwaGEpOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gZnJhZ21lbnQgc2hhZGVyXG4gICAgICAgIFtcbiAgICAgICAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdkNvbG9yOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gY3VzdG9tIHVuaWZvcm1zXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpbnQ6ICAgeyB0eXBlOiAnM2YnLCB2YWx1ZTogWzAsIDAsIDBdIH0sXG4gICAgICAgICAgICBhbHBoYTogIHsgdHlwZTogJzFmJywgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uTWF0cml4OiB7IHR5cGU6ICdtYXQzJywgdmFsdWU6IG5ldyBGbG9hdDMyQXJyYXkoOSkgfSxcbiAgICAgICAgICAgIHByb2plY3Rpb25NYXRyaXg6IHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSg5KSB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGN1c3RvbSBhdHRyaWJ1dGVzXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFWZXJ0ZXhQb3NpdGlvbjowLFxuICAgICAgICAgICAgYUNvbG9yOjBcbiAgICAgICAgfVxuICAgICk7XG59XG5cblByaW1pdGl2ZVNoYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNoYWRlci5wcm90b3R5cGUpO1xuUHJpbWl0aXZlU2hhZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFByaW1pdGl2ZVNoYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gUHJpbWl0aXZlU2hhZGVyO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHNoYWRlck1hbmFnZXIge1NoYWRlck1hbmFnZXJ9IFRoZSB3ZWJnbCBzaGFkZXIgbWFuYWdlciB0aGlzIHNoYWRlciB3b3JrcyBmb3IuXG4gKiBAcGFyYW0gW3ZlcnRleFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgdmVydGV4IHNoYWRlci5cbiAqIEBwYXJhbSBbZnJhZ21lbnRTcmNdIHtzdHJpbmd9IFRoZSBzb3VyY2Ugb2YgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSBbdW5pZm9ybXNdIHtvYmplY3R9IFVuaWZvcm1zIGZvciB0aGlzIHNoYWRlci5cbiAqIEBwYXJhbSBbYXR0cmlidXRlc10ge29iamVjdH0gQXR0cmlidXRlcyBmb3IgdGhpcyBzaGFkZXIuXG4gKi9cbmZ1bmN0aW9uIFNoYWRlcihzaGFkZXJNYW5hZ2VyLCB2ZXJ0ZXhTcmMsIGZyYWdtZW50U3JjLCB1bmlmb3JtcywgYXR0cmlidXRlcylcbntcbiAgICBpZiAoIXZlcnRleFNyYyB8fCAhZnJhZ21lbnRTcmMpXG4gICAge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQaXhpLmpzIEVycm9yLiBTaGFkZXIgcmVxdWlyZXMgdmVydGV4U3JjIGFuZCBmcmFnbWVudFNyYycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdW5pcXVlIGlkXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMudXVpZCA9IHV0aWxzLnV1aWQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmdsID0gc2hhZGVyTWFuYWdlci5yZW5kZXJlci5nbDtcblxuICAgIC8vVE9ETyBtYXliZSB3ZSBzaG91bGQgcGFzcyByZW5kZXJlciByYXRoZXIgdGhhbiBzaGFkZXIgbWFuZ2VyPz8gZm9vZCBmb3IgdGhvdWdodC4uXG4gICAgdGhpcy5zaGFkZXJNYW5hZ2VyID0gc2hhZGVyTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBXZWJHTCBwcm9ncmFtLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7V2ViR0xQcm9ncmFtfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5pZm9ybXMgYXMgYW4gb2JqZWN0XG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy51bmlmb3JtcyA9IHVuaWZvcm1zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGF0dHJpYnV0ZXMgYXMgYW4gb2JqZWN0XG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIHRleHR1cmUgY291bnRlclxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGV4dHVyZUNvdW50ID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0ZXggc2hhZGVyIGFzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRleFNyYyA9IHZlcnRleFNyYztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFnbWVudCBzaGFkZXIgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBmcmFnbWVudFNyYztcblxuICAgIHRoaXMuaW5pdCgpO1xufVxuXG5TaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2hhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbi8qXG4gKiBDcmVhdGVzIHRoZSBzaGFkZXIgYW5kIHVzZXMgaXRcbiAqXG4gKi9cblNoYWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5jb21waWxlKCk7XG5cbiAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcblxuICAgIHRoaXMuY2FjaGVVbmlmb3JtTG9jYXRpb25zKE9iamVjdC5rZXlzKHRoaXMudW5pZm9ybXMpKTtcbiAgICB0aGlzLmNhY2hlQXR0cmlidXRlTG9jYXRpb25zKE9iamVjdC5rZXlzKHRoaXMuYXR0cmlidXRlcykpO1xufTtcblxuLypcbiAqIENhY2hlcyB0aGUgbG9jYXRpb25zIG9mIHRoZSB1bmlmb3JtIGZvciByZXVzZVxuICogQHBhcmFtIGtleXMge3N0cmluZ30gdGhlIHVuaWZvcm1zIHRvIGNhY2hlXG4gKi9cblNoYWRlci5wcm90b3R5cGUuY2FjaGVVbmlmb3JtTG9jYXRpb25zID0gZnVuY3Rpb24gKGtleXMpXG57XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxuICAgIHtcbiAgICAgICAgdGhpcy51bmlmb3Jtc1trZXlzW2ldXS5fbG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIGtleXNbaV0pO1xuICAgIH1cbn07XG5cbi8qXG4gKiBDYWNoZXMgdGhlIGxvY2F0aW9ucyBvZiB0aGUgYXR0cmlidXRlIGZvciByZXVzZVxuICogQHBhcmFtIGtleXMge3N0cmluZ30gdGhlIGF0dHJpYnV0ZXMgdG8gY2FjaGVcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5jYWNoZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IGZ1bmN0aW9uIChrZXlzKVxue1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSlcbiAgICB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1trZXlzW2ldXSA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCBrZXlzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBDaGVjayBpZiB0aGlzIGlzIG5lZWRlZCBhbnltb3JlLi4uXG5cbiAgICAvLyBCZWdpbiB3b3JzdCBoYWNrIGV2YSAvL1xuXG4gICAgLy8gV0hZPz8/IE9OTFkgb24gbXkgY2hyb21lIHBpeGVsIHRoZSBsaW5lIGFib3ZlIHJldHVybnMgLTEgd2hlbiB1c2luZyBmaWx0ZXJzP1xuICAgIC8vIG1heWJlIGl0cyBzb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2wgY29udGV4dC5cbiAgICAvLyBJJ20gY29udmluY2VkIHRoaXMgaXMgYSBidWcgaW4gdGhlIGNocm9tZSBicm93c2VyIGFzIHRoZXJlIGlzIE5PIHJlYXNvbiB3aHkgdGhpcyBzaG91bGQgYmUgcmV0dXJuaW5nIC0xIGVzcGVjaWFsbHkgYXMgaXQgb25seSBtYW5pZmVzdHMgb24gbXkgY2hyb21lIHBpeGVsXG4gICAgLy8gSWYgdGhlcmVzIGFueSB3ZWJHTCBwZW9wbGUgdGhhdCBrbm93IHdoeSBjb3VsZCBoYXBwZW4gcGxlYXNlIGhlbHAgOilcbiAgICAvLyBpZiAodGhpcy5hdHRyaWJ1dGVzLmFDb2xvciA9PT0gLTEpe1xuICAgIC8vICAgICB0aGlzLmF0dHJpYnV0ZXMuYUNvbG9yID0gMjtcbiAgICAvLyB9XG5cbiAgICAvLyBFbmQgd29yc3QgaGFjayBldmEgLy9cbn07XG5cbi8qXG4gKiBBdHRhY2hlcyB0aGUgc2hhZGVycyBhbmQgY3JlYXRlcyB0aGUgcHJvZ3JhbVxuICogQHJldHVybiB7V2ViR0xQcm9ncmFtfVxuICovXG5TaGFkZXIucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICB2YXIgZ2xWZXJ0U2hhZGVyID0gdGhpcy5fZ2xDb21waWxlKGdsLlZFUlRFWF9TSEFERVIsIHRoaXMudmVydGV4U3JjKTtcbiAgICB2YXIgZ2xGcmFnU2hhZGVyID0gdGhpcy5fZ2xDb21waWxlKGdsLkZSQUdNRU5UX1NIQURFUiwgdGhpcy5mcmFnbWVudFNyYyk7XG5cbiAgICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcblxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBnbFZlcnRTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBnbEZyYWdTaGFkZXIpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgLy8gaWYgbGlua2luZyBmYWlscywgdGhlbiBsb2cgYW5kIGNsZWFudXBcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUGl4aS5qcyBFcnJvcjogQ291bGQgbm90IGluaXRpYWxpemUgc2hhZGVyLicpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdnbC5WQUxJREFURV9TVEFUVVMnLCBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLlZBTElEQVRFX1NUQVRVUykpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdnbC5nZXRFcnJvcigpJywgZ2wuZ2V0RXJyb3IoKSk7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBwcm9ncmFtIGluZm8gbG9nLCBsb2cgaXRcbiAgICAgICAgaWYgKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pICE9PSAnJylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdQaXhpLmpzIFdhcm5pbmc6IGdsLmdldFByb2dyYW1JbmZvTG9nKCknLCBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICBwcm9ncmFtID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBjbGVhbiB1cCBzb21lIHNoYWRlcnNcbiAgICBnbC5kZWxldGVTaGFkZXIoZ2xWZXJ0U2hhZGVyKTtcbiAgICBnbC5kZWxldGVTaGFkZXIoZ2xGcmFnU2hhZGVyKTtcblxuICAgIHJldHVybiAodGhpcy5wcm9ncmFtID0gcHJvZ3JhbSk7XG59O1xuXG4vKlxuU2hhZGVyLnByb3RvdHlwZS5idWlsZFN5bmMgPSBmdW5jdGlvbiAoKVxue1xuICAgLy8gdmFyIHN0ciA9IFwiXCJcblxuICAgLy8gc3RyID0gIFwiU2hhZGVyLnByb3RvdHlwZS5zeW5jVW5pZm9ybXMgPSBmdW5jdGlvbigpXCI7XG4gICAvLyBzdHIgKz0gXCJ7XFxuXCI7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy51bmlmb3JtcylcbiAgICB7XG4gICAgICAgIHZhciB1bmlmb3JtID0gdGhpcy51bmlmb3Jtc1trZXldO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcblxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmlmb3JtLnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3JtKHVuaWZvcm0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coIG1ha2VQcm9wU2V0dGVyKCBrZXksIFwiIGJsb29wXCIsIHVuaWZvcm0udHlwZSApICApXG4gIC8vICAgICAgT2JqZWN0LmRlZlxuICAgICAgICAvLyAgICBsb2NhdGlvbiA9IHVuaWZvcm0uX2xvY2F0aW9uLFxuICAgICAgICAgIC8vICB2YWx1ZSA9IHVuaWZvcm0udmFsdWUsXG4gICAgICAgICAgICAvL2ksIGlsO1xuXG4gICAgLy8gICAgc3RyICs9IFwiZ2wudW5pZm9ybTFpKHRoaXMudW5pZm9ybXMuXCIrIGtleSArXCIuX2xvY2F0aW9uLCB0aGlzLnVuaWZvcm1zLlwiICsga2V5ICsgXCIudmFsdWUgKTtcXG5cIlxuXG4gICAgfVxuXG59Ki9cblxuLyoqXG4qIEFkZHMgYSBuZXcgdW5pZm9ybVxuKlxuKiBAcGFyYW0gdW5pZm9ybSB7T2JqZWN0fSB0aGUgbmV3IHVuaWZvcm0gdG8gYXR0YWNoXG4qL1xuU2hhZGVyLnByb3RvdHlwZS5zeW5jVW5pZm9ybSA9IGZ1bmN0aW9uICh1bmlmb3JtKVxue1xuICAgIHZhciBsb2NhdGlvbiA9IHVuaWZvcm0uX2xvY2F0aW9uLFxuICAgICAgICB2YWx1ZSA9IHVuaWZvcm0udmFsdWUsXG4gICAgICAgIGdsID0gdGhpcy5nbCxcbiAgICAgICAgaSwgaWw7XG5cbiAgICBzd2l0Y2ggKHVuaWZvcm0udHlwZSlcbiAgICB7XG4gICAgICAgIC8vIHNpbmdsZSBpbnQgdmFsdWVcbiAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgIGNhc2UgJzFpJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gc2luZ2xlIGZsb2F0IHZhbHVlXG4gICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBjYXNlICcxZic6XG4gICAgICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSgyKSBvciBKUyBBcnJyYXlcbiAgICAgICAgY2FzZSAnMmYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTJmKGxvY2F0aW9uLCB2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5KDMpIG9yIEpTIEFycnJheVxuICAgICAgICBjYXNlICczZic6XG4gICAgICAgICAgICBnbC51bmlmb3JtM2YobG9jYXRpb24sIHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5KDQpIG9yIEpTIEFycnJheVxuICAgICAgICBjYXNlICc0Zic6XG4gICAgICAgICAgICBnbC51bmlmb3JtNGYobG9jYXRpb24sIHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGEgMkQgUG9pbnQgb2JqZWN0XG4gICAgICAgIGNhc2UgJ3YyJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0yZihsb2NhdGlvbiwgdmFsdWUueCwgdmFsdWUueSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhIDNEIFBvaW50IG9iamVjdFxuICAgICAgICBjYXNlICd2Myc6XG4gICAgICAgICAgICBnbC51bmlmb3JtM2YobG9jYXRpb24sIHZhbHVlLngsIHZhbHVlLnksIHZhbHVlLnopO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gYSA0RCBQb2ludCBvYmplY3RcbiAgICAgICAgY2FzZSAndjQnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTRmKGxvY2F0aW9uLCB2YWx1ZS54LCB2YWx1ZS55LCB2YWx1ZS56LCB2YWx1ZS53KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEludDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnMWl2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEludDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnMml2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEludDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnM2l2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEludDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnNGl2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICcxZnYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJzJmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnM2Z2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICc0ZnYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJ20yJzpcbiAgICAgICAgY2FzZSAnbWF0Mic6XG4gICAgICAgIGNhc2UgJ01hdHJpeDJmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCB1bmlmb3JtLnRyYW5zcG9zZSwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJ20zJzpcbiAgICAgICAgY2FzZSAnbWF0Myc6XG4gICAgICAgIGNhc2UgJ01hdHJpeDNmdic6XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIHVuaWZvcm0udHJhbnNwb3NlLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnbTQnOlxuICAgICAgICBjYXNlICdtYXQ0JzpcbiAgICAgICAgY2FzZSAnTWF0cml4NGZ2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIHVuaWZvcm0udHJhbnNwb3NlLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhIENvbG9yIFZhbHVlXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB1dGlscy5oZXgycmdiKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmKGxvY2F0aW9uLCB2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGZsYXQgYXJyYXkgb2YgaW50ZWdlcnMgKEpTIG9yIHR5cGVkIGFycmF5KVxuICAgICAgICBjYXNlICdpdjEnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gZmxhdCBhcnJheSBvZiBpbnRlZ2VycyB3aXRoIDMgeCBOIHNpemUgKEpTIG9yIHR5cGVkIGFycmF5KVxuICAgICAgICBjYXNlICdpdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBmbGF0IGFycmF5IG9mIGZsb2F0cyAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2Z2MSc6XG4gICAgICAgICAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBmbGF0IGFycmF5IG9mIGZsb2F0cyB3aXRoIDMgeCBOIHNpemUgKEpTIG9yIHR5cGVkIGFycmF5KVxuICAgICAgICBjYXNlICdmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhcnJheSBvZiAyRCBQb2ludCBvYmplY3RzXG4gICAgICAgIGNhc2UgJ3Yydic6XG4gICAgICAgICAgICBpZiAoIXVuaWZvcm0uX2FycmF5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5ID0gbmV3IEZsb2F0MzJBcnJheSgyICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMCwgaWwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiAyXSAgICAgICA9IHZhbHVlW2ldLng7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDIgKyAxXSAgID0gdmFsdWVbaV0ueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdW5pZm9ybS5fYXJyYXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gYXJyYXkgb2YgM0QgUG9pbnQgb2JqZWN0c1xuICAgICAgICBjYXNlICd2M3YnOlxuICAgICAgICAgICAgaWYgKCF1bmlmb3JtLl9hcnJheSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoMyAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGlsID0gdmFsdWUubGVuZ3RoOyBpIDwgaWw7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogM10gICAgICAgPSB2YWx1ZVtpXS54O1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiAzICsgMV0gICA9IHZhbHVlW2ldLnk7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDMgKyAyXSAgID0gdmFsdWVbaV0uejtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB1bmlmb3JtLl9hcnJheSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhcnJheSBvZiA0RCBQb2ludCBvYmplY3RzXG4gICAgICAgIGNhc2UgJ3Y0dic6XG4gICAgICAgICAgICBpZiAoIXVuaWZvcm0uX2FycmF5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5ID0gbmV3IEZsb2F0MzJBcnJheSg0ICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMCwgaWwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiA0XSAgICAgICA9IHZhbHVlW2ldLng7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDQgKyAxXSAgID0gdmFsdWVbaV0ueTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogNCArIDJdICAgPSB2YWx1ZVtpXS56O1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiA0ICsgM10gICA9IHZhbHVlW2ldLnc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdW5pZm9ybS5fYXJyYXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gUElYSS5UZXh0dXJlXG4gICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICBjYXNlICdzYW1wbGVyMkQnOlxuXG4gICAgICAgICAgICBpZiAoIXVuaWZvcm0udmFsdWUgfHwgIXVuaWZvcm0udmFsdWUuYmFzZVRleHR1cmUuaGFzTG9hZGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhY3RpdmF0ZSB0aGlzIHRleHR1cmVcbiAgICAgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2xbJ1RFWFRVUkUnICsgdGhpcy50ZXh0dXJlQ291bnRdKTtcblxuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB1bmlmb3JtLnZhbHVlLmJhc2VUZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXTtcblxuICAgICAgICAgICAgaWYgKCF0ZXh0dXJlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNhbXBsZXIyRCh1bmlmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYmluZCB0aGUgdGV4dHVyZVxuICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgICAgICAgICAgIC8vIHNldCB1bmlmb3JtIHRvIHRleHR1cmUgaW5kZXhcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaSh1bmlmb3JtLl9sb2NhdGlvbiwgdGhpcy50ZXh0dXJlQ291bnQpO1xuXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgbmV4dCB0ZXh0dXJlIGlkXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVDb3VudCsrO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUud2FybignUGl4aS5qcyBTaGFkZXIgV2FybmluZzogVW5rbm93biB1bmlmb3JtIHR5cGU6ICcgKyB1bmlmb3JtLnR5cGUpO1xuICAgIH1cbn07XG5cbi8qXG4gKiBVcGRhdGVzIHRoZSBzaGFkZXIgdW5pZm9ybSB2YWx1ZXMuXG4gKi9cblNoYWRlci5wcm90b3R5cGUuc3luY1VuaWZvcm1zID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLnRleHR1cmVDb3VudCA9IDE7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy51bmlmb3JtcylcbiAgICB7XG4gICAgICAgIHRoaXMuc3luY1VuaWZvcm0odGhpcy51bmlmb3Jtc1trZXldKTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogSW5pdGlhbGlzZXMgYSBTYW1wbGVyMkQgdW5pZm9ybSAod2hpY2ggbWF5IG9ubHkgYmUgYXZhaWxhYmxlIGxhdGVyIG9uIGFmdGVyIGluaXRVbmlmb3JtcyBvbmNlIHRoZSB0ZXh0dXJlIGhhcyBsb2FkZWQpXG4gKlxuICovXG5TaGFkZXIucHJvdG90eXBlLmluaXRTYW1wbGVyMkQgPSBmdW5jdGlvbiAodW5pZm9ybSlcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgdmFyIHRleHR1cmUgPSB1bmlmb3JtLnZhbHVlLmJhc2VUZXh0dXJlO1xuXG4gICAgaWYoIXRleHR1cmUuaGFzTG9hZGVkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG5cbiAgICBpZiAodW5pZm9ybS50ZXh0dXJlRGF0YSlcbiAgICB7XG5cbiAgICAgICAgLy9UT0RPIG1vdmUgdGhpcy4uLlxuICAgICAgICB2YXIgZGF0YSA9IHVuaWZvcm0udGV4dHVyZURhdGE7XG5cbiAgICAgICAgdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0gPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pO1xuXG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgdGV4dHVyZS5wcmVtdWx0aXBsaWVkQWxwaGEpO1xuICAgICAgICAvLyBHTFRleHR1cmUgPSBtYWcgbGluZWFyLCBtaW4gbGluZWFyX21pcG1hcF9saW5lYXIsIHdyYXAgcmVwZWF0ICsgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgICAgIC8vIEdMVGV4dHVyZUxpbmVhciA9IG1hZy9taW4gbGluZWFyLCB3cmFwIGNsYW1wXG4gICAgICAgIC8vIEdMVGV4dHVyZU5lYXJlc3RSZXBlYXQgPSBtYWcvbWluIE5FQVJFU1QsIHdyYXAgcmVwZWF0XG4gICAgICAgIC8vIEdMVGV4dHVyZU5lYXJlc3QgPSBtYWcvbWluIG5lYXJlc3QsIHdyYXAgY2xhbXBcbiAgICAgICAgLy8gQXVkaW9UZXh0dXJlID0gd2hhdGV2ZXIgKyBsdW1pbmFuY2UgKyB3aWR0aCA1MTIsIGhlaWdodCAyLCBib3JkZXIgMFxuICAgICAgICAvLyBLZXlUZXh0dXJlID0gd2hhdGV2ZXIgKyBsdW1pbmFuY2UgKyB3aWR0aCAyNTYsIGhlaWdodCAyLCBib3JkZXIgMFxuXG4gICAgICAgIC8vICBtYWdGaWx0ZXIgY2FuIGJlOiBnbC5MSU5FQVIsIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSIG9yIGdsLk5FQVJFU1RcbiAgICAgICAgLy8gIHdyYXBTL1QgY2FuIGJlOiBnbC5DTEFNUF9UT19FREdFIG9yIGdsLlJFUEVBVFxuXG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZGF0YS5sdW1pbmFuY2UgPyBnbC5MVU1JTkFOQ0UgOiBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCB0ZXh0dXJlLnNvdXJjZSk7XG5cbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGRhdGEubWFnRmlsdGVyID8gZGF0YS5tYWdGaWx0ZXIgOiBnbC5MSU5FQVIgKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGRhdGEud3JhcFMgPyBkYXRhLndyYXBTIDogZ2wuQ0xBTVBfVE9fRURHRSApO1xuXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGRhdGEud3JhcFMgPyBkYXRhLndyYXBTIDogZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGRhdGEud3JhcFQgPyBkYXRhLndyYXBUIDogZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMuc2hhZGVyTWFuYWdlci5yZW5kZXJlci51cGRhdGVUZXh0dXJlKHRleHR1cmUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHNoYWRlci5cbiAqXG4gKi9cblNoYWRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB0aGlzLnVuaWZvcm1zID0gbnVsbDtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBudWxsO1xuXG4gICAgdGhpcy52ZXJ0ZXhTcmMgPSBudWxsO1xuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBudWxsO1xufTtcblxuU2hhZGVyLnByb3RvdHlwZS5fZ2xDb21waWxlID0gZnVuY3Rpb24gKHR5cGUsIHNyYylcbntcbiAgICB2YXIgc2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgICB0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNyYyk7XG4gICAgdGhpcy5nbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBpZiAoIXRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpXG4gICAge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5sb2codGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xufTtcbiIsInZhciBTaGFkZXIgPSByZXF1aXJlKCcuL1NoYWRlcicpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFNoYWRlclxuICogQHBhcmFtIHNoYWRlck1hbmFnZXIge1NoYWRlck1hbmFnZXJ9IFRoZSB3ZWJnbCBzaGFkZXIgbWFuYWdlciB0aGlzIHNoYWRlciB3b3JrcyBmb3IuXG4gKiBAcGFyYW0gW3ZlcnRleFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgdmVydGV4IHNoYWRlci5cbiAqIEBwYXJhbSBbZnJhZ21lbnRTcmNdIHtzdHJpbmd9IFRoZSBzb3VyY2Ugb2YgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSBbY3VzdG9tVW5pZm9ybXNdIHtvYmplY3R9IEN1c3RvbSB1bmlmb3JtcyB0byB1c2UgdG8gYXVnbWVudCB0aGUgYnVpbHQtaW4gb25lcy5cbiAqIEBwYXJhbSBbZnJhZ21lbnRTcmNdIHtzdHJpbmd9IFRoZSBzb3VyY2Ugb2YgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqL1xuZnVuY3Rpb24gVGV4dHVyZVNoYWRlcihzaGFkZXJNYW5hZ2VyLCB2ZXJ0ZXhTcmMsIGZyYWdtZW50U3JjLCBjdXN0b21Vbmlmb3JtcywgY3VzdG9tQXR0cmlidXRlcylcbntcbiAgICB2YXIgdW5pZm9ybXMgPSB7XG5cbiAgICAgICAgdVNhbXBsZXI6ICAgICAgICAgICB7IHR5cGU6ICdzYW1wbGVyMkQnLCB2YWx1ZTogMCB9LFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4OiAgIHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSgxLCAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAxKSB9XG4gICAgfTtcblxuICAgIGlmIChjdXN0b21Vbmlmb3JtcylcbiAgICB7XG4gICAgICAgIGZvciAodmFyIHUgaW4gY3VzdG9tVW5pZm9ybXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVuaWZvcm1zW3VdID0gY3VzdG9tVW5pZm9ybXNbdV07XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICAgICBhVmVydGV4UG9zaXRpb246ICAgIDAsXG4gICAgICAgIGFUZXh0dXJlQ29vcmQ6ICAgICAgMCxcbiAgICAgICAgYUNvbG9yOiAgICAgICAgICAgICAwXG4gICAgfTtcblxuICAgIGlmIChjdXN0b21BdHRyaWJ1dGVzKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgYSBpbiBjdXN0b21BdHRyaWJ1dGVzKVxuICAgICAgICB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2FdID0gY3VzdG9tQXR0cmlidXRlc1thXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0ZXggc2hhZGVyLlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHZlcnRleFNyYyA9IHZlcnRleFNyYyB8fCBUZXh0dXJlU2hhZGVyLmRlZmF1bHRWZXJ0ZXhTcmM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZnJhZ21lbnQgc2hhZGVyLlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIGZyYWdtZW50U3JjID0gZnJhZ21lbnRTcmMgfHwgVGV4dHVyZVNoYWRlci5kZWZhdWx0RnJhZ21lbnRTcmM7XG5cbiAgICBTaGFkZXIuY2FsbCh0aGlzLCBzaGFkZXJNYW5hZ2VyLCB2ZXJ0ZXhTcmMsIGZyYWdtZW50U3JjLCB1bmlmb3JtcywgYXR0cmlidXRlcyk7XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5UZXh0dXJlU2hhZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2hhZGVyLnByb3RvdHlwZSk7XG5UZXh0dXJlU2hhZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRleHR1cmVTaGFkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVTaGFkZXI7XG5cblRleHR1cmVTaGFkZXIuZGVmYXVsdFZlcnRleFNyYyA9IFtcbiAgICAncHJlY2lzaW9uIGxvd3AgZmxvYXQ7JyxcbiAgICAnYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uOycsXG4gICAgJ2F0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7JyxcbiAgICAnYXR0cmlidXRlIHZlYzQgYUNvbG9yOycsXG5cbiAgICAndW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7JyxcblxuICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuICAgICd2YXJ5aW5nIHZlYzQgdkNvbG9yOycsXG5cbiAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uLCAxLjApKS54eSwgMC4wLCAxLjApOycsXG4gICAgJyAgIHZUZXh0dXJlQ29vcmQgPSBhVGV4dHVyZUNvb3JkOycsXG4gICAgJyAgIHZDb2xvciA9IHZlYzQoYUNvbG9yLnJnYiAqIGFDb2xvci5hLCBhQ29sb3IuYSk7JyxcbiAgICAnfSdcbl0uam9pbignXFxuJyk7XG5cblRleHR1cmVTaGFkZXIuZGVmYXVsdEZyYWdtZW50U3JjID0gW1xuICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxuXG4gICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgJ3ZhcnlpbmcgdmVjNCB2Q29sb3I7JyxcblxuICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxuXG4gICAgJ3ZvaWQgbWFpbih2b2lkKXsnLFxuICAgICcgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpICogdkNvbG9yIDsnLFxuICAgICd9J1xuXS5qb2luKCdcXG4nKTtcbiIsInZhciBXZWJHTE1hbmFnZXIgPSByZXF1aXJlKCcuLi9tYW5hZ2Vycy9XZWJHTE1hbmFnZXInKTtcblxuLyoqXG4gKiBCYXNlIGZvciBhIGNvbW1vbiBvYmplY3QgcmVuZGVyZXIgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIHN5c3RlbSByZW5kZXJlciBwbHVnaW4uXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBXZWJHTE1hbmFnZXJcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG9iamVjdCByZW5kZXJlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIE9iamVjdFJlbmRlcmVyKHJlbmRlcmVyKVxue1xuICAgIFdlYkdMTWFuYWdlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcbn1cblxuXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdlYkdMTWFuYWdlci5wcm90b3R5cGUpO1xuT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT2JqZWN0UmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdFJlbmRlcmVyO1xuXG4vKipcbiAqIFN0YXJ0cyB0aGUgcmVuZGVyZXIgYW5kIHNldHMgdGhlIHNoYWRlclxuICpcbiAqL1xuT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKClcbntcbiAgICAvLyBzZXQgdGhlIHNoYWRlci4uXG59O1xuXG4vKipcbiAqIFN0b3BzIHRoZSByZW5kZXJlclxuICpcbiAqL1xuT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuZmx1c2goKTtcbn07XG5cbi8qKlxuICogZmx1c2hlc1xuICpcbiAqL1xuT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKClcbntcbiAgICAvLyBmbHVzaCFcbn07XG5cbi8qKlxuICogUmVuZGVycyBhbiBvYmplY3RcbiAqXG4gKi9cbk9iamVjdFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAob2JqZWN0KVxue1xuICAgIC8vIHJlbmRlciB0aGUgb2JqZWN0XG59O1xuIiwiLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gY3JlYXRlIGEgcXVhZFxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIGdsIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IFRoZSBnbCBjb250ZXh0IGZvciB0aGlzIHF1YWQgdG8gdXNlLlxuICovXG5mdW5jdGlvbiBRdWFkKGdsKVxue1xuICAgIC8qXG4gICAgICogdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9XG4gICAgICovXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4vLyAgICB0aGlzLnRleHR1cmVzID0gbmV3IFRleHR1cmVVdnMoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHZlcnRpY2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtGbG9hdDMyQXJyYXl9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAwLDAsXG4gICAgICAgIDIwMCwwLFxuICAgICAgICAyMDAsMjAwLFxuICAgICAgICAwLDIwMFxuICAgIF0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFV2cyBvZiB0aGUgcXVhZFxuICAgICAqXG4gICAgICogQG1lbWJlciB7RmxvYXQzMkFycmF5fVxuICAgICAqL1xuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDAsMCxcbiAgICAgICAgMSwwLFxuICAgICAgICAxLDEsXG4gICAgICAgIDAsMVxuICAgIF0pO1xuXG4vLyAgICB2YXIgd2hpdGUgPSAoMHhGRkZGRkYgPj4gMTYpICsgKDB4RkZGRkZGICYgMHhmZjAwKSArICgoMHhGRkZGRkYgJiAweGZmKSA8PCAxNikgKyAoMSAqIDI1NSA8PCAyNCk7XG4gICAgLy9UT0RPIGNvbnZlcnQgdGhpcyB0byBhIDMyIHVuc2lnbmVkIGludCBhcnJheVxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBjb21wb25lbnRzIG9mIHRoZSB0cmlhbmdsZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Zsb2F0MzJBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAxLDEsMSwxLFxuICAgICAgICAxLDEsMSwxLFxuICAgICAgICAxLDEsMSwxLFxuICAgICAgICAxLDEsMSwxXG4gICAgXSk7XG5cbiAgICAvKlxuICAgICAqIEBtZW1iZXIge1VpbnQxNkFycmF5fSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBpbmRpY2VzIG9mIHRoZSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIHRoaXMuaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDMsIDJcbiAgICBdKTtcblxuICAgIC8qXG4gICAgICogQG1lbWJlciB7V2ViR0xCdWZmZXJ9IFRoZSB2ZXJ0ZXggYnVmZmVyXG4gICAgICovXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8qXG4gICAgICogQG1lbWJlciB7V2ViR0xCdWZmZXJ9IFRoZSBpbmRleCBidWZmZXJcbiAgICAgKi9cbiAgICB0aGlzLmluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAoOCArIDggKyAxNikgKiA0LCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB0aGlzLnVwbG9hZCgpO1xufVxuXG5RdWFkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFF1YWQ7XG5cbi8qKlxuICogTWFwcyB0d28gUmVjdGFuZ2xlIHRvIHRoZSBxdWFkXG4gKiBAcGFyYW0gcmVjdCB7UmVjdGFuZ2xlfSB0aGUgZmlyc3QgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gcmVjdDIge1JlY3RhbmdsZX0gdGhlIHNlY29uZCByZWN0YW5nbGVcbiAqL1xuUXVhZC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24ocmVjdCwgcmVjdDIpXG57XG4gICAgdmFyIHggPSAwOyAvL3JlY3QyLnggLyByZWN0LndpZHRoO1xuICAgIHZhciB5ID0gMDsgLy9yZWN0Mi55IC8gcmVjdC5oZWlnaHQ7XG5cbiAgICB0aGlzLnV2c1swXSA9IHg7XG4gICAgdGhpcy51dnNbMV0gPSB5O1xuXG4gICAgdGhpcy51dnNbMl0gPSB4ICsgcmVjdDIud2lkdGggLyByZWN0LndpZHRoO1xuICAgIHRoaXMudXZzWzNdID0geTtcblxuICAgIHRoaXMudXZzWzRdID0geCArIHJlY3QyLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICB0aGlzLnV2c1s1XSA9IHkgKyByZWN0Mi5oZWlnaHQgLyByZWN0LmhlaWdodDtcblxuICAgIHRoaXMudXZzWzZdID0geDtcbiAgICB0aGlzLnV2c1s3XSA9IHkgKyByZWN0Mi5oZWlnaHQgLyByZWN0LmhlaWdodDtcblxuICAgIC8vLyAtLS0tLVxuICAgIHggPSByZWN0Mi54O1xuICAgIHkgPSByZWN0Mi55O1xuXG4gICAgdGhpcy52ZXJ0aWNlc1swXSA9IHg7XG4gICAgdGhpcy52ZXJ0aWNlc1sxXSA9IHk7XG5cbiAgICB0aGlzLnZlcnRpY2VzWzJdID0geCArIHJlY3QyLndpZHRoO1xuICAgIHRoaXMudmVydGljZXNbM10gPSB5O1xuXG4gICAgdGhpcy52ZXJ0aWNlc1s0XSA9IHggKyByZWN0Mi53aWR0aDtcbiAgICB0aGlzLnZlcnRpY2VzWzVdID0geSArIHJlY3QyLmhlaWdodDtcblxuICAgIHRoaXMudmVydGljZXNbNl0gPSB4O1xuICAgIHRoaXMudmVydGljZXNbN10gPSB5ICsgcmVjdDIuaGVpZ2h0O1xuXG4gICAgdGhpcy51cGxvYWQoKTtcbn07XG5cbi8qKlxuICogQmluZHMgdGhlIGJ1ZmZlciBhbmQgdXBsb2FkcyB0aGUgZGF0YVxuICovXG5RdWFkLnByb3RvdHlwZS51cGxvYWQgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIC8vIFRPRE8gY291bGQgcHJvYmFibHkgYmUgcHVzaGVkIGludG8gb25lIHVwbG9hZCFcbiAgICBnbC5iaW5kQnVmZmVyKCBnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyICk7XG5cbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgdGhpcy52ZXJ0aWNlcyk7XG5cbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgOCAqIDQsIHRoaXMudXZzKTtcblxuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAoOCArIDgpICogNCwgdGhpcy5jb2xvcnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWFkO1xuXG5cbiIsInZhciBtYXRoID0gcmVxdWlyZSgnLi4vLi4vLi4vbWF0aCcpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0JyksXG4gICAgLy9TdGVuY2lsTWFuYWdlciA9IHJlcXVpcmUoJy4uL21hbmFnZXJzL1N0ZW5jaWxNYW5hZ2VyJyksXG4gICAgU3RlbmNpbE1hc2tTdGFjayA9IHJlcXVpcmUoJy4vU3RlbmNpbE1hc2tTdGFjaycpO1xuXG4vKipcbiAqIEBhdXRob3IgTWF0IEdyb3ZlcyBodHRwOi8vbWF0Z3JvdmVzLmNvbS8gQERvb3JtYXQyM1xuICovXG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIGdsIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IHRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IHRoZSBob3Jpem9udGFsIHJhbmdlIG9mIHRoZSBmaWx0ZXJcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gdGhlIHZlcnRpY2FsIHJhbmdlIG9mIHRoZSBmaWx0ZXJcbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2VlIHt7I2Nyb3NzTGluayBcIlBJWEkvc2NhbGVNb2Rlczpwcm9wZXJ0eVwifX1QSVhJLnNjYWxlTW9kZXN7ey9jcm9zc0xpbmt9fSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcGFyYW0gcmVzb2x1dGlvbiB7bnVtYmVyfSB0aGUgY3VycmVudCByZXNvbHV0aW9uXG4gKiBAcGFyYW0gcm9vdCB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyB0aGUgcm9vdCBlbGVtZW50IG9yIG5vdFxuICovXG52YXIgUmVuZGVyVGFyZ2V0ID0gZnVuY3Rpb24oZ2wsIHdpZHRoLCBoZWlnaHQsIHNjYWxlTW9kZSwgcmVzb2x1dGlvbiwgcm9vdClcbntcbiAgICAvL1RPRE8gUmVzb2x1dGlvbiBjb3VsZCBnbyBoZXJlICggZWcgbG93IHJlcyBibHVycyApXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9XG4gICAgICovXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgLy8gbmV4dCB0aW1lIHRvIGNyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBhbmQgdGV4dHVyZVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFtZSBidWZmZXJcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEZyYW1lQnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGV4dHVyZX1cbiAgICAgKi9cbiAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIG9iamVjdCBhcyBhIHJlY3RhbmdsZVxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICB0aGlzLnNpemUgPSBuZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgMSwgMSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCByZXNvbHV0aW9uXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb24gfHwgQ09OU1QuUkVTT0xVVElPTjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcm9qZWN0aW9uIG1hdHJpeFxuICAgICAqIEBtZW1iZXIge01hdHJpeH1cbiAgICAgKi9cbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvYmplY3QncyB0cmFuc2Zvcm1cbiAgICAgKiBAbWVtYmVyIHtNYXRyaXh9XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgdGhpcy5mcmFtZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RlbmNpbCBidWZmZXIgc3RvcmVzIG1hc2tpbmcgZGF0YSBmb3IgdGhlIHJlbmRlciB0YXJnZXRcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlckJ1ZmZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0ZW5jaWxCdWZmZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgc3RydWN0dXJlIGZvciB0aGUgc3RlbmNpbCBtYXNrc1xuICAgICAqIEBtZW1iZXIge1N0ZW5jaWxNYXNrU3RhY2t9XG4gICAgICovXG4gICAgdGhpcy5zdGVuY2lsTWFza1N0YWNrID0gbmV3IFN0ZW5jaWxNYXNrU3RhY2soKTtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBmaWx0ZXIgZGF0YSBmb3IgdGhlIHJlbmRlciB0YXJnZXRcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlclN0YWNrID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJUYXJnZXQ6dGhpcyxcbiAgICAgICAgICAgIGZpbHRlcjpbXSxcbiAgICAgICAgICAgIGJvdW5kczp0aGlzLnNpemVcbiAgICAgICAgfVxuICAgIF07XG5cblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2FsZSBtb2RlXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFRcbiAgICAgKi9cbiAgICB0aGlzLnNjYWxlTW9kZSA9IHNjYWxlTW9kZSB8fCBDT05TVC5TQ0FMRV9NT0RFUy5ERUZBVUxUO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIG9iamVjdCBpcyB0aGUgcm9vdCBlbGVtZW50IG9yIG5vdFxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yb290ID0gcm9vdDtcblxuICAgIGlmICghdGhpcy5yb290KVxuICAgIHtcbiAgICAgICAvLyB0aGlzLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEEgZnJhbWUgYnVmZmVyIG5lZWRzIGEgdGFyZ2V0IHRvIHJlbmRlciB0by4uXG4gICAgICAgICAgICBjcmVhdGUgYSB0ZXh0dXJlIGFuZCBiaW5kIGl0IGF0dGFjaCBpdCB0byB0aGUgZnJhbWVidWZmZXIuLlxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBzY2FsZSBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0dXJlLi5cbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIHNjYWxlTW9kZSA9PT0gQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBzY2FsZU1vZGUgPT09IENPTlNULlNDQUxFX01PREVTLkxJTkVBUiA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1QpO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGV4dHVyZSBpcyBhIHBvd2VyIG9mIHR3byFcbiAgICAgICAgdmFyIGlzUG93ZXJPZlR3byA9IHV0aWxzLmlzUG93ZXJPZlR3byh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvL1RPRE8gZm9yIDk5JSBvZiB1c2UgY2FzZXMgaWYgYSB0ZXh0dXJlIGlzIHBvd2VyIG9mIHR3byB3ZSBzaG91bGQgdGlsZSB0aGUgdGV4dHVyZS4uLlxuICAgICAgICAgaWYgKCFpc1Bvd2VyT2ZUd28pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLlJFUEVBVCk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyICk7XG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlLCAwKTtcbiAgICB9XG5cblxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xufTtcblxuUmVuZGVyVGFyZ2V0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlbmRlclRhcmdldDtcbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyVGFyZ2V0O1xuXG4vKipcbiogQ2xlYXJzIHRoZSBmaWx0ZXIgdGV4dHVyZS5cbipcbiovXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oYmluZClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIGlmKGJpbmQpXG4gICAge1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xuICAgIH1cblxuICAgIGdsLmNsZWFyQ29sb3IoMCwwLDAsMCk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG59O1xuXG4vKipcbiogQmluZHMgdGhlIHN0ZW5jaWwgYnVmZmVyLlxuKlxuKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuYXR0YWNoU3RlbmNpbEJ1ZmZlciA9IGZ1bmN0aW9uKClcbntcblxuICAgIGlmICggdGhpcy5zdGVuY2lsQnVmZmVyIClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBUaGUgc3RlbmNpbCBidWZmZXIgaXMgdXNlZCBmb3IgbWFza2luZyBpbiBwaXhpXG4gICAgICAgIGxldHMgY3JlYXRlIG9uZSBhbmQgdGhlbiBhZGQgYXR0YWNoIGl0IHRvIHRoZSBmcmFtZWJ1ZmZlci4uXG4gICAgICovXG4gICAgaWYgKCF0aGlzLnJvb3QpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIHRoaXMuc3RlbmNpbEJ1ZmZlciA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5zdGVuY2lsQnVmZmVyKTtcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGdsLkRFUFRIX1NURU5DSUxfQVRUQUNITUVOVCwgZ2wuUkVOREVSQlVGRkVSLCB0aGlzLnN0ZW5jaWxCdWZmZXIpO1xuICAgICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEhfU1RFTkNJTCwgIHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMucmVzb2x1dGlvbiAgLCB0aGlzLnNpemUuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uICk7XG4gICAgfVxufTtcblxuLyoqXG4qIEJpbmRzIHRoZSBidWZmZXJzIGFuZCBpbml0aWFsaXNlcyB0aGUgdmlld3BvcnQuXG4qXG4qL1xuUmVuZGVyVGFyZ2V0LnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKClcbntcbiAgICAvL1RPT0QgcmVmYWN0b3IgdXNhZ2Ugb2YgZnJhbWUuLlxuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xuXG4gICAgdmFyIHByb2plY3Rpb25GcmFtZSA9IHRoaXMuZnJhbWUgfHwgdGhpcy5zaXplO1xuXG4gICAgLy8gVE9ETyBhZGQgYSBkaXJ0eSBmbGFnIHRvIHRoaXMgb2YgYSBzZXR0ZXIgZm9yIHRoZSBmcmFtZT9cbiAgICB0aGlzLmNhbGN1bGF0ZVByb2plY3Rpb24oIHByb2plY3Rpb25GcmFtZSApO1xuXG4gICAgaWYodGhpcy50cmFuc2Zvcm0pXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXguYXBwZW5kKHRoaXMudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBnbC52aWV3cG9ydCgwLDAsIHByb2plY3Rpb25GcmFtZS53aWR0aCAqIHRoaXMucmVzb2x1dGlvbiwgcHJvamVjdGlvbkZyYW1lLmhlaWdodCAqIHRoaXMucmVzb2x1dGlvbik7XG59O1xuXG4vKipcbiogVXBkYXRlcyB0aGUgcHJvamVjdGlvbiBtYXRyaXggYmFzZWQgb24gYSBwcm9qZWN0aW9uIGZyYW1lICh3aGljaCBpcyBhIHJlY3RhbmdsZSlcbipcbiovXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmNhbGN1bGF0ZVByb2plY3Rpb24gPSBmdW5jdGlvbiggcHJvamVjdGlvbkZyYW1lIClcbntcbiAgICB2YXIgcG0gPSB0aGlzLnByb2plY3Rpb25NYXRyaXg7XG5cbiAgICBwbS5pZGVudGl0eSgpO1xuXG4gICAgaWYgKCF0aGlzLnJvb3QpXG4gICAge1xuICAgICAgICBwbS5hID0gMSAvIHByb2plY3Rpb25GcmFtZS53aWR0aCoyO1xuICAgICAgICBwbS5kID0gMSAvIHByb2plY3Rpb25GcmFtZS5oZWlnaHQqMjtcblxuICAgICAgICBwbS50eCA9IC0xIC0gcHJvamVjdGlvbkZyYW1lLnggKiBwbS5hO1xuICAgICAgICBwbS50eSA9IC0xIC0gcHJvamVjdGlvbkZyYW1lLnkgKiBwbS5kO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBwbS5hID0gMSAvIHByb2plY3Rpb25GcmFtZS53aWR0aCoyO1xuICAgICAgICBwbS5kID0gLTEgLyBwcm9qZWN0aW9uRnJhbWUuaGVpZ2h0KjI7XG5cbiAgICAgICAgcG0udHggPSAtMSAtIHByb2plY3Rpb25GcmFtZS54ICogcG0uYTtcbiAgICAgICAgcG0udHkgPSAxIC0gcHJvamVjdGlvbkZyYW1lLnkgKiBwbS5kO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBSZXNpemVzIHRoZSB0ZXh0dXJlIHRvIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodFxuICpcbiAqIEBwYXJhbSB3aWR0aCB7TnVtYmVyfSB0aGUgbmV3IHdpZHRoIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcGFyYW0gaGVpZ2h0IHtOdW1iZXJ9IHRoZSBuZXcgaGVpZ2h0IG9mIHRoZSB0ZXh0dXJlXG4gKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodClcbntcbiAgICB3aWR0aCA9IHdpZHRoIHwgMDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgfCAwO1xuXG4gICAgaWYgKHRoaXMuc2l6ZS53aWR0aCA9PT0gd2lkdGggJiYgdGhpcy5zaXplLmhlaWdodCA9PT0gaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNpemUud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnNpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLnJvb3QpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsICB0aGlzLnRleHR1cmUpO1xuXG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgIHdpZHRoICogdGhpcy5yZXNvbHV0aW9uLCBoZWlnaHQgKiB0aGlzLnJlc29sdXRpb24gLCAwLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGVuY2lsQnVmZmVyIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGVuY2lsIGJ1ZmZlciB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgdGhpcy5zdGVuY2lsQnVmZmVyKTtcbiAgICAgICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9TVEVOQ0lMLCAgd2lkdGggKiB0aGlzLnJlc29sdXRpb24sIGhlaWdodCAqIHRoaXMucmVzb2x1dGlvbiApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2plY3Rpb25GcmFtZSA9IHRoaXMuZnJhbWUgfHwgdGhpcy5zaXplO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVQcm9qZWN0aW9uKCBwcm9qZWN0aW9uRnJhbWUgKTtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHJlbmRlciB0YXJnZXQuXG4gKlxuICovXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlciggdGhpcy5mcmFtZUJ1ZmZlciApO1xuICAgIGdsLmRlbGV0ZVRleHR1cmUoIHRoaXMudGV4dHVyZSApO1xuXG4gICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy50ZXh0dXJlID0gbnVsbDtcbn07XG4iLCIvKipcbiAqIEdlbmVyaWMgTWFzayBTdGFjayBkYXRhIHN0cnVjdHVyZVxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gU3RlbmNpbE1hc2tTdGFjaygpXG57XG5cdC8qKlxuICAgICAqIFRoZSBhY3R1YWwgc3RhY2tcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuc3RlbmNpbFN0YWNrID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUT0RPIEBhbHZpblxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgY291bnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvdW50ID0gMDtcbn1cblxuU3RlbmNpbE1hc2tTdGFjay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdGVuY2lsTWFza1N0YWNrO1xubW9kdWxlLmV4cG9ydHMgPSBTdGVuY2lsTWFza1N0YWNrO1xuIiwidmFyIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgVGV4dHVyZSA9IHJlcXVpcmUoJy4uL3RleHR1cmVzL1RleHR1cmUnKSxcbiAgICBDb250YWluZXIgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0NvbnRhaW5lcicpLFxuICAgIENhbnZhc1RpbnRlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzVGludGVyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKSxcbiAgICB0ZW1wUG9pbnQgPSBuZXcgbWF0aC5Qb2ludCgpO1xuXG4vKipcbiAqIFRoZSBTcHJpdGUgb2JqZWN0IGlzIHRoZSBiYXNlIGZvciBhbGwgdGV4dHVyZWQgb2JqZWN0cyB0aGF0IGFyZSByZW5kZXJlZCB0byB0aGUgc2NyZWVuXG4gKlxuICogQSBzcHJpdGUgY2FuIGJlIGNyZWF0ZWQgZGlyZWN0bHkgZnJvbSBhbiBpbWFnZSBsaWtlIHRoaXM6XG4gKlxuICogYGBganNcbiAqIHZhciBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUuZnJvbUltYWdlKCdhc3NldHMvaW1hZ2UucG5nJyk7XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIENvbnRhaW5lclxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB0ZXh0dXJlIHtUZXh0dXJlfSBUaGUgdGV4dHVyZSBmb3IgdGhpcyBzcHJpdGVcbiAqL1xuZnVuY3Rpb24gU3ByaXRlKHRleHR1cmUpXG57XG4gICAgQ29udGFpbmVyLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5jaG9yIHNldHMgdGhlIG9yaWdpbiBwb2ludCBvZiB0aGUgdGV4dHVyZS5cbiAgICAgKiBUaGUgZGVmYXVsdCBpcyAwLDAgdGhpcyBtZWFucyB0aGUgdGV4dHVyZSdzIG9yaWdpbiBpcyB0aGUgdG9wIGxlZnRcbiAgICAgKiBTZXR0aW5nIHRoZSBhbmNob3IgdG8gMC41LDAuNSBtZWFucyB0aGUgdGV4dHVyZSdzIG9yaWdpbiBpcyBjZW50ZXJlZFxuICAgICAqIFNldHRpbmcgdGhlIGFuY2hvciB0byAxLDEgd291bGQgbWVhbiB0aGUgdGV4dHVyZSdzIG9yaWdpbiBwb2ludCB3aWxsIGJlIHRoZSBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtQb2ludH1cbiAgICAgKi9cbiAgICB0aGlzLmFuY2hvciA9IG5ldyBtYXRoLlBvaW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dHVyZSB0aGF0IHRoZSBzcHJpdGUgaXMgdXNpbmdcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1RleHR1cmV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZXh0dXJlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgc3ByaXRlICh0aGlzIGlzIGluaXRpYWxseSBzZXQgYnkgdGhlIHRleHR1cmUpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBzcHJpdGUgKHRoaXMgaXMgaW5pdGlhbGx5IHNldCBieSB0aGUgdGV4dHVyZSlcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hlaWdodCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGludCBhcHBsaWVkIHRvIHRoZSBzcHJpdGUuIFRoaXMgaXMgYSBoZXggdmFsdWUuIEEgdmFsdWUgb2YgMHhGRkZGRkYgd2lsbCByZW1vdmUgYW55IHRpbnQgZWZmZWN0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IFsweEZGRkZGRl1cbiAgICAgKi9cbiAgICB0aGlzLnRpbnQgPSAweEZGRkZGRjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBibGVuZCBtb2RlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHNwcml0ZS4gQXBwbHkgYSB2YWx1ZSBvZiBibGVuZE1vZGVzLk5PUk1BTCB0byByZXNldCB0aGUgYmxlbmQgbW9kZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCBDT05TVC5CTEVORF9NT0RFUy5OT1JNQUw7XG4gICAgICovXG4gICAgdGhpcy5ibGVuZE1vZGUgPSBDT05TVC5CTEVORF9NT0RFUy5OT1JNQUw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2hhZGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB0aGUgc3ByaXRlLiBTZXQgdG8gbnVsbCB0byByZW1vdmUgYSBjdXJyZW50IHNoYWRlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Fic3RyYWN0RmlsdGVyfVxuICAgICAqL1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIGNhY2hlZCB2YWx1ZSBvZiB0aGUgdGludC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCBbMHhGRkZGRkZdXG4gICAgICovXG4gICAgdGhpcy5jYWNoZWRUaW50ID0gMHhGRkZGRkY7XG5cbiAgICAvLyBjYWxsIHRleHR1cmUgc2V0dGVyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZSB8fCBUZXh0dXJlLkVNUFRZO1xufVxuXG4vKipcbiAqIERlc3Ryb3lzIHRoaXMgc3ByaXRlIGFuZCBvcHRpb25hbGx5IGl0cyB0ZXh0dXJlXG4gKlxuICogQHBhcmFtIGRlc3Ryb3lUZXh0dXJlIHtib29sZWFufSBTaG91bGQgaXQgZGVzdHJveSB0aGUgY3VycmVudCB0ZXh0dXJlIG9mIHRoZSBzcHJpdGUgYXMgd2VsbFxuICogQHBhcmFtIGRlc3Ryb3lCYXNlVGV4dHVyZSB7Ym9vbGVhbn0gU2hvdWxkIGl0IGRlc3Ryb3kgdGhlIGJhc2UgdGV4dHVyZSBvZiB0aGUgc3ByaXRlIGFzIHdlbGxcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKGRlc3Ryb3lUZXh0dXJlLCBkZXN0cm95QmFzZVRleHR1cmUpXG57XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmFuY2hvciA9IG51bGw7XG5cbiAgICBpZiAoZGVzdHJveVRleHR1cmUpXG4gICAge1xuICAgICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koZGVzdHJveUJhc2VUZXh0dXJlKTtcbiAgICB9XG5cbiAgICB0aGlzLl90ZXh0dXJlID0gbnVsbDtcbiAgICB0aGlzLnNoYWRlciA9IG51bGw7XG59O1xuXG4vLyBjb25zdHJ1Y3RvclxuU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29udGFpbmVyLnByb3RvdHlwZSk7XG5TcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaXRlO1xubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGU7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNwcml0ZS5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIHNwcml0ZSwgc2V0dGluZyB0aGlzIHdpbGwgYWN0dWFsbHkgbW9kaWZ5IHRoZSBzY2FsZSB0byBhY2hpZXZlIHRoZSB2YWx1ZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJcbiAgICAgKiBAbWVtYmVyb2YgU3ByaXRlI1xuICAgICAqL1xuICAgIHdpZHRoOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueCAqIHRoaXMudGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSB2YWx1ZSAvIHRoaXMudGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHNwcml0ZSwgc2V0dGluZyB0aGlzIHdpbGwgYWN0dWFsbHkgbW9kaWZ5IHRoZSBzY2FsZSB0byBhY2hpZXZlIHRoZSB2YWx1ZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJcbiAgICAgKiBAbWVtYmVyb2YgU3ByaXRlI1xuICAgICAqL1xuICAgIGhlaWdodDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAgdGhpcy5zY2FsZS55ICogdGhpcy50ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSB2YWx1ZSAvIHRoaXMudGV4dHVyZS5fZnJhbWUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgc3ByaXRlLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlclxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGUjXG4gICAgICovXG4gICAgdGV4dHVyZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAgdGhpcy5fdGV4dHVyZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0dXJlID09PSB2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkVGludCA9IDB4RkZGRkZGO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgdGhlIHRleHR1cmUgdG8gbG9hZFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5iYXNlVGV4dHVyZS5oYXNMb2FkZWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblRleHR1cmVVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUub25jZSgndXBkYXRlJywgdGhpcy5fb25UZXh0dXJlVXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIFdoZW4gdGhlIHRleHR1cmUgaXMgdXBkYXRlZCwgdGhpcyBldmVudCB3aWxsIGZpcmUgdG8gdXBkYXRlIHRoZSBzY2FsZSBhbmQgZnJhbWVcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5TcHJpdGUucHJvdG90eXBlLl9vblRleHR1cmVVcGRhdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIHNvIGlmIF93aWR0aCBpcyAwIHRoZW4gd2lkdGggd2FzIG5vdCBzZXQuLlxuICAgIGlmICh0aGlzLl93aWR0aClcbiAgICB7XG4gICAgICAgIHRoaXMuc2NhbGUueCA9IHRoaXMuX3dpZHRoIC8gdGhpcy50ZXh0dXJlLmZyYW1lLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oZWlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLnNjYWxlLnkgPSB0aGlzLl9oZWlnaHQgLyB0aGlzLnRleHR1cmUuZnJhbWUuaGVpZ2h0O1xuICAgIH1cbn07XG5cbi8qKlxuKlxuKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIFdlYkdMIHJlbmRlcmVyXG4qXG4qIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn1cbiovXG5TcHJpdGUucHJvdG90eXBlLl9yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICByZW5kZXJlci5zZXRPYmplY3RSZW5kZXJlcihyZW5kZXJlci5wbHVnaW5zLnNwcml0ZSk7XG4gICAgcmVuZGVyZXIucGx1Z2lucy5zcHJpdGUucmVuZGVyKHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib3VuZHMgb2YgdGhlIFNwcml0ZSBhcyBhIHJlY3RhbmdsZS4gVGhlIGJvdW5kcyBjYWxjdWxhdGlvbiB0YWtlcyB0aGUgd29ybGRUcmFuc2Zvcm0gaW50byBhY2NvdW50LlxuICpcbiAqIEBwYXJhbSBtYXRyaXgge01hdHJpeH0gdGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBvZiB0aGUgc3ByaXRlXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IHRoZSBmcmFtaW5nIHJlY3RhbmdsZVxuICovXG5TcHJpdGUucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIChtYXRyaXgpXG57XG4gICAgaWYoIXRoaXMuX2N1cnJlbnRCb3VuZHMpXG4gICAge1xuXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX3RleHR1cmUuX2ZyYW1lLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUuaGVpZ2h0O1xuXG4gICAgICAgIHZhciB3MCA9IHdpZHRoICogKDEtdGhpcy5hbmNob3IueCk7XG4gICAgICAgIHZhciB3MSA9IHdpZHRoICogLXRoaXMuYW5jaG9yLng7XG5cbiAgICAgICAgdmFyIGgwID0gaGVpZ2h0ICogKDEtdGhpcy5hbmNob3IueSk7XG4gICAgICAgIHZhciBoMSA9IGhlaWdodCAqIC10aGlzLmFuY2hvci55O1xuXG4gICAgICAgIHZhciB3b3JsZFRyYW5zZm9ybSA9IG1hdHJpeCB8fCB0aGlzLndvcmxkVHJhbnNmb3JtIDtcblxuICAgICAgICB2YXIgYSA9IHdvcmxkVHJhbnNmb3JtLmE7XG4gICAgICAgIHZhciBiID0gd29ybGRUcmFuc2Zvcm0uYjtcbiAgICAgICAgdmFyIGMgPSB3b3JsZFRyYW5zZm9ybS5jO1xuICAgICAgICB2YXIgZCA9IHdvcmxkVHJhbnNmb3JtLmQ7XG4gICAgICAgIHZhciB0eCA9IHdvcmxkVHJhbnNmb3JtLnR4O1xuICAgICAgICB2YXIgdHkgPSB3b3JsZFRyYW5zZm9ybS50eTtcblxuICAgICAgICB2YXIgbWluWCxcbiAgICAgICAgICAgIG1heFgsXG4gICAgICAgICAgICBtaW5ZLFxuICAgICAgICAgICAgbWF4WTtcblxuICAgICAgICBpZiAoYiA9PT0gMCAmJiBjID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBzY2FsZSBtYXkgYmUgbmVnYXRpdmUhXG4gICAgICAgICAgICBpZiAoYSA8IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYSAqPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGQgPCAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGQgKj0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlcmUgaXMgbm8gcm90YXRpb24gZ29pbmcgb24gcmlnaHQ/IFJJR0hUP1xuICAgICAgICAgICAgLy8gaWYgdGhhdHMgdGhlIGNhc2UgdGhlbiB3ZSBjYW4gYXZvaWQgY2hlY2tpbmcgdGhlIGJvdW5kIHZhbHVlcyEgeWF5XG4gICAgICAgICAgICBtaW5YID0gYSAqIHcxICsgdHg7XG4gICAgICAgICAgICBtYXhYID0gYSAqIHcwICsgdHg7XG4gICAgICAgICAgICBtaW5ZID0gZCAqIGgxICsgdHk7XG4gICAgICAgICAgICBtYXhZID0gZCAqIGgwICsgdHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgeDEgPSBhICogdzEgKyBjICogaDEgKyB0eDtcbiAgICAgICAgICAgIHZhciB5MSA9IGQgKiBoMSArIGIgKiB3MSArIHR5O1xuXG4gICAgICAgICAgICB2YXIgeDIgPSBhICogdzAgKyBjICogaDEgKyB0eDtcbiAgICAgICAgICAgIHZhciB5MiA9IGQgKiBoMSArIGIgKiB3MCArIHR5O1xuXG4gICAgICAgICAgICB2YXIgeDMgPSBhICogdzAgKyBjICogaDAgKyB0eDtcbiAgICAgICAgICAgIHZhciB5MyA9IGQgKiBoMCArIGIgKiB3MCArIHR5O1xuXG4gICAgICAgICAgICB2YXIgeDQgPSAgYSAqIHcxICsgYyAqIGgwICsgdHg7XG4gICAgICAgICAgICB2YXIgeTQgPSAgZCAqIGgwICsgYiAqIHcxICsgdHk7XG5cbiAgICAgICAgICAgIG1pblggPSB4MTtcbiAgICAgICAgICAgIG1pblggPSB4MiA8IG1pblggPyB4MiA6IG1pblg7XG4gICAgICAgICAgICBtaW5YID0geDMgPCBtaW5YID8geDMgOiBtaW5YO1xuICAgICAgICAgICAgbWluWCA9IHg0IDwgbWluWCA/IHg0IDogbWluWDtcblxuICAgICAgICAgICAgbWluWSA9IHkxO1xuICAgICAgICAgICAgbWluWSA9IHkyIDwgbWluWSA/IHkyIDogbWluWTtcbiAgICAgICAgICAgIG1pblkgPSB5MyA8IG1pblkgPyB5MyA6IG1pblk7XG4gICAgICAgICAgICBtaW5ZID0geTQgPCBtaW5ZID8geTQgOiBtaW5ZO1xuXG4gICAgICAgICAgICBtYXhYID0geDE7XG4gICAgICAgICAgICBtYXhYID0geDIgPiBtYXhYID8geDIgOiBtYXhYO1xuICAgICAgICAgICAgbWF4WCA9IHgzID4gbWF4WCA/IHgzIDogbWF4WDtcbiAgICAgICAgICAgIG1heFggPSB4NCA+IG1heFggPyB4NCA6IG1heFg7XG5cbiAgICAgICAgICAgIG1heFkgPSB5MTtcbiAgICAgICAgICAgIG1heFkgPSB5MiA+IG1heFkgPyB5MiA6IG1heFk7XG4gICAgICAgICAgICBtYXhZID0geTMgPiBtYXhZID8geTMgOiBtYXhZO1xuICAgICAgICAgICAgbWF4WSA9IHk0ID4gbWF4WSA/IHk0IDogbWF4WTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3VuZHMgPSB0aGlzLl9ib3VuZHM7XG5cbiAgICAgICAgYm91bmRzLnggPSBtaW5YO1xuICAgICAgICBib3VuZHMud2lkdGggPSBtYXhYIC0gbWluWDtcblxuICAgICAgICBib3VuZHMueSA9IG1pblk7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBtYXhZIC0gbWluWTtcblxuICAgICAgICAvLyBzdG9yZSBhIHJlZmVyZW5jZSBzbyB0aGF0IGlmIHRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYWdhaW4gaW4gdGhlIHJlbmRlciBjeWNsZSB3ZSBkbyBub3QgaGF2ZSB0byByZWNhbGN1bGF0ZVxuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gYm91bmRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5nZXRMb2NhbEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5fYm91bmRzLnggPSAtdGhpcy5fdGV4dHVyZS5fZnJhbWUud2lkdGggKiB0aGlzLmFuY2hvci54O1xuICAgIHRoaXMuX2JvdW5kcy55ID0gLXRoaXMuX3RleHR1cmUuX2ZyYW1lLmhlaWdodCAqIHRoaXMuYW5jaG9yLnk7XG4gICAgdGhpcy5fYm91bmRzLndpZHRoID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgdGhpcy5fYm91bmRzLmhlaWdodCA9IHRoaXMuX3RleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICByZXR1cm4gdGhpcy5fYm91bmRzO1xufTtcblxuLyoqXG4qIFRlc3RzIGlmIGEgcG9pbnQgaXMgaW5zaWRlIHRoaXMgc3ByaXRlXG4qXG4qIEBwYXJhbSBwb2ludCB7UG9pbnR9IHRoZSBwb2ludCB0byB0ZXN0XG4qIEByZXR1cm4ge2Jvb2xlYW59IHRoZSByZXN1bHQgb2YgdGhlIHRlc3RcbiovXG5TcHJpdGUucHJvdG90eXBlLmNvbnRhaW5zUG9pbnQgPSBmdW5jdGlvbiggcG9pbnQgKVxue1xuICAgIHRoaXMud29ybGRUcmFuc2Zvcm0uYXBwbHlJbnZlcnNlKHBvaW50LCAgdGVtcFBvaW50KTtcblxuICAgIHZhciB3aWR0aCA9IHRoaXMuX3RleHR1cmUuX2ZyYW1lLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLl90ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgdmFyIHgxID0gLXdpZHRoICogdGhpcy5hbmNob3IueDtcbiAgICB2YXIgeTE7XG5cbiAgICBpZiAoIHRlbXBQb2ludC54ID4geDEgJiYgdGVtcFBvaW50LnggPCB4MSArIHdpZHRoIClcbiAgICB7XG4gICAgICAgIHkxID0gLWhlaWdodCAqIHRoaXMuYW5jaG9yLnk7XG5cbiAgICAgICAgaWYgKCB0ZW1wUG9pbnQueSA+IHkxICYmIHRlbXBQb2ludC55IDwgeTEgKyBoZWlnaHQgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuKiBSZW5kZXJzIHRoZSBvYmplY3QgdXNpbmcgdGhlIENhbnZhcyByZW5kZXJlclxuKlxuKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiovXG5TcHJpdGUucHJvdG90eXBlLl9yZW5kZXJDYW52YXMgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgaWYgKHRoaXMudGV4dHVyZS5jcm9wLndpZHRoIDw9IDAgfHwgdGhpcy50ZXh0dXJlLmNyb3AuaGVpZ2h0IDw9IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmxlbmRNb2RlICE9PSByZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlKVxuICAgIHtcbiAgICAgICAgcmVuZGVyZXIuY3VycmVudEJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlO1xuICAgICAgICByZW5kZXJlci5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHJlbmRlcmVyLmJsZW5kTW9kZXNbcmVuZGVyZXIuY3VycmVudEJsZW5kTW9kZV07XG4gICAgfVxuXG4gICAgLy8gIElnbm9yZSBudWxsIHNvdXJjZXNcbiAgICBpZiAodGhpcy50ZXh0dXJlLnZhbGlkKVxuICAgIHtcbiAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLl90ZXh0dXJlLFxuICAgICAgICAgICAgd3QgPSB0aGlzLndvcmxkVHJhbnNmb3JtLFxuICAgICAgICAgICAgZHgsXG4gICAgICAgICAgICBkeSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0O1xuXG4gICAgICAgIHZhciByZXNvbHV0aW9uID0gdGV4dHVyZS5iYXNlVGV4dHVyZS5yZXNvbHV0aW9uIC8gcmVuZGVyZXIucmVzb2x1dGlvbjtcblxuICAgICAgICByZW5kZXJlci5jb250ZXh0Lmdsb2JhbEFscGhhID0gdGhpcy53b3JsZEFscGhhO1xuXG4gICAgICAgIC8vIElmIHNtb290aGluZ0VuYWJsZWQgaXMgc3VwcG9ydGVkIGFuZCB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgc21vb3RoaW5nIHByb3BlcnR5IGZvciB0aGlzIHRleHR1cmVcbiAgICAgICAgaWYgKHJlbmRlcmVyLnNtb290aFByb3BlcnR5ICYmIHJlbmRlcmVyLmN1cnJlbnRTY2FsZU1vZGUgIT09IHRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5jdXJyZW50U2NhbGVNb2RlID0gdGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGU7XG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0W3JlbmRlcmVyLnNtb290aFByb3BlcnR5XSA9IChyZW5kZXJlci5jdXJyZW50U2NhbGVNb2RlID09PSBDT05TVC5TQ0FMRV9NT0RFUy5MSU5FQVIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRleHR1cmUgaXMgdHJpbW1lZCB3ZSBvZmZzZXQgYnkgdGhlIHRyaW0geC95LCBvdGhlcndpc2Ugd2UgdXNlIHRoZSBmcmFtZSBkaW1lbnNpb25zXG5cbiAgICAgICAgaWYodGV4dHVyZS5yb3RhdGUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgLy8gY2hlZWt5IHJvdGF0aW9uIVxuICAgICAgICAgICAgdmFyIGEgPSB3dC5hO1xuICAgICAgICAgICAgdmFyIGIgPSB3dC5iO1xuXG4gICAgICAgICAgICB3dC5hICA9IC13dC5jO1xuICAgICAgICAgICAgd3QuYiAgPSAtd3QuZDtcbiAgICAgICAgICAgIHd0LmMgID0gIGE7XG4gICAgICAgICAgICB3dC5kICA9ICBiO1xuXG4gICAgICAgICAgICB3aWR0aCA9IHRleHR1cmUuY3JvcC5oZWlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQgPSB0ZXh0dXJlLmNyb3Aud2lkdGg7XG5cbiAgICAgICAgICAgIGR4ID0gKHRleHR1cmUudHJpbSkgPyB0ZXh0dXJlLnRyaW0ueSAtIHRoaXMuYW5jaG9yLnkgKiB0ZXh0dXJlLnRyaW0uaGVpZ2h0IDogdGhpcy5hbmNob3IueSAqIC10ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgICAgICAgICBkeSA9ICh0ZXh0dXJlLnRyaW0pID8gdGV4dHVyZS50cmltLnggLSB0aGlzLmFuY2hvci54ICogdGV4dHVyZS50cmltLndpZHRoIDogdGhpcy5hbmNob3IueCAqIC10ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoID0gdGV4dHVyZS5jcm9wLndpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gdGV4dHVyZS5jcm9wLmhlaWdodDtcblxuICAgICAgICAgICAgZHggPSAodGV4dHVyZS50cmltKSA/IHRleHR1cmUudHJpbS54IC0gdGhpcy5hbmNob3IueCAqIHRleHR1cmUudHJpbS53aWR0aCA6IHRoaXMuYW5jaG9yLnggKiAtdGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgICAgICAgICBkeSA9ICh0ZXh0dXJlLnRyaW0pID8gdGV4dHVyZS50cmltLnkgLSB0aGlzLmFuY2hvci55ICogdGV4dHVyZS50cmltLmhlaWdodCA6IHRoaXMuYW5jaG9yLnkgKiAtdGV4dHVyZS5fZnJhbWUuaGVpZ2h0O1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIEFsbG93IGZvciBwaXhlbCByb3VuZGluZ1xuICAgICAgICBpZiAocmVuZGVyZXIucm91bmRQaXhlbHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgICAgIHd0LmEsXG4gICAgICAgICAgICAgICAgd3QuYixcbiAgICAgICAgICAgICAgICB3dC5jLFxuICAgICAgICAgICAgICAgIHd0LmQsXG4gICAgICAgICAgICAgICAgKHd0LnR4ICogcmVuZGVyZXIucmVzb2x1dGlvbikgfCAwLFxuICAgICAgICAgICAgICAgICh3dC50eSAqIHJlbmRlcmVyLnJlc29sdXRpb24pIHwgMFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZHggPSBkeCB8IDA7XG4gICAgICAgICAgICBkeSA9IGR5IHwgMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcblxuICAgICAgICAgICAgcmVuZGVyZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgICAgd3QuYSxcbiAgICAgICAgICAgICAgICB3dC5iLFxuICAgICAgICAgICAgICAgIHd0LmMsXG4gICAgICAgICAgICAgICAgd3QuZCxcbiAgICAgICAgICAgICAgICB3dC50eCAqIHJlbmRlcmVyLnJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgd3QudHkgKiByZW5kZXJlci5yZXNvbHV0aW9uXG4gICAgICAgICAgICApO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRpbnQgIT09IDB4RkZGRkZGKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZWRUaW50ICE9PSB0aGlzLnRpbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZWRUaW50ID0gdGhpcy50aW50O1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBjbGVhbiB1cCBjYWNoaW5nIC0gaG93IHRvIGNsZWFuIHVwIHRoZSBjYWNoZXM/XG4gICAgICAgICAgICAgICAgdGhpcy50aW50ZWRUZXh0dXJlID0gQ2FudmFzVGludGVyLmdldFRpbnRlZFRleHR1cmUodGhpcywgdGhpcy50aW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyZXIuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy50aW50ZWRUZXh0dXJlLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgZHggLyByZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIGR5IC8gcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3aWR0aCAvIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgd2lkdGggLyByZXNvbHV0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5jcm9wLngsXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5jcm9wLnksXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGR4IC8gcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICBkeSAvIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgd2lkdGggLyByZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIGhlaWdodCAvIHJlc29sdXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBzb21lIGhlbHBlciBmdW5jdGlvbnMuLlxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBzcHJpdGUgdGhhdCB3aWxsIGNvbnRhaW4gYSB0ZXh0dXJlIGZyb20gdGhlIFRleHR1cmVDYWNoZSBiYXNlZCBvbiB0aGUgZnJhbWVJZFxuICogVGhlIGZyYW1lIGlkcyBhcmUgY3JlYXRlZCB3aGVuIGEgVGV4dHVyZSBwYWNrZXIgZmlsZSBoYXMgYmVlbiBsb2FkZWRcbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gZnJhbWVJZCB7U3RyaW5nfSBUaGUgZnJhbWUgSWQgb2YgdGhlIHRleHR1cmUgaW4gdGhlIGNhY2hlXG4gKiBAcmV0dXJuIHtTcHJpdGV9IEEgbmV3IFNwcml0ZSB1c2luZyBhIHRleHR1cmUgZnJvbSB0aGUgdGV4dHVyZSBjYWNoZSBtYXRjaGluZyB0aGUgZnJhbWVJZFxuICogQHBhcmFtIFtjcm9zc29yaWdpbj0oYXV0byldIHtib29sZWFufSBpZiB5b3Ugd2FudCB0byBzcGVjaWZ5IHRoZSBjcm9zcy1vcmlnaW4gcGFyYW1ldGVyXG4gKiBAcGFyYW0gW3NjYWxlTW9kZT1zY2FsZU1vZGVzLkRFRkFVTFRdIHtudW1iZXJ9IGlmIHlvdSB3YW50IHRvIHNwZWNpZnkgdGhlIHNjYWxlIG1vZGUsIHNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqL1xuU3ByaXRlLmZyb21GcmFtZSA9IGZ1bmN0aW9uIChmcmFtZUlkKVxue1xuICAgIHZhciB0ZXh0dXJlID0gdXRpbHMuVGV4dHVyZUNhY2hlW2ZyYW1lSWRdO1xuXG4gICAgaWYgKCF0ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZnJhbWVJZCBcIicgKyBmcmFtZUlkICsgJ1wiIGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZXh0dXJlIGNhY2hlICcgKyB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHNwcml0ZSB0aGF0IHdpbGwgY29udGFpbiBhIHRleHR1cmUgYmFzZWQgb24gYW4gaW1hZ2UgdXJsXG4gKiBJZiB0aGUgaW1hZ2UgaXMgbm90IGluIHRoZSB0ZXh0dXJlIGNhY2hlIGl0IHdpbGwgYmUgbG9hZGVkXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGltYWdlSWQge1N0cmluZ30gVGhlIGltYWdlIHVybCBvZiB0aGUgdGV4dHVyZVxuICogQHJldHVybiB7U3ByaXRlfSBBIG5ldyBTcHJpdGUgdXNpbmcgYSB0ZXh0dXJlIGZyb20gdGhlIHRleHR1cmUgY2FjaGUgbWF0Y2hpbmcgdGhlIGltYWdlIGlkXG4gKi9cblNwcml0ZS5mcm9tSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VJZCwgY3Jvc3NvcmlnaW4sIHNjYWxlTW9kZSlcbntcbiAgICByZXR1cm4gbmV3IFNwcml0ZShUZXh0dXJlLmZyb21JbWFnZShpbWFnZUlkLCBjcm9zc29yaWdpbiwgc2NhbGVNb2RlKSk7XG59O1xuIiwidmFyIE9iamVjdFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL3V0aWxzL09iamVjdFJlbmRlcmVyJyksXG4gICAgU2hhZGVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL3NoYWRlcnMvU2hhZGVyJyksXG4gICAgV2ViR0xSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVycy93ZWJnbC9XZWJHTFJlbmRlcmVyJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIEBhdXRob3IgTWF0IEdyb3Zlc1xuICpcbiAqIEJpZyB0aGFua3MgdG8gdGhlIHZlcnkgY2xldmVyIE1hdHQgRGVzTGF1cmllcnMgPG1hdHRkZXNsPiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvXG4gKiBmb3IgY3JlYXRpbmcgdGhlIG9yaWdpbmFsIHBpeGkgdmVyc2lvbiFcbiAqIEFsc28gYSB0aGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2JjaGV2YWxpZXIgZm9yIHR3ZWFraW5nIHRoZSB0aW50IGFuZCBhbHBoYSBzbyB0aGF0IHRoZXkgbm93IHNoYXJlIDQgYnl0ZXMgb24gdGhlIHZlcnRleCBidWZmZXJcbiAqXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5IExpYkdEWCdzIFNwcml0ZVJlbmRlcmVyOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpYmdkeC9saWJnZHgvYmxvYi9tYXN0ZXIvZ2R4L3NyYy9jb20vYmFkbG9naWMvZ2R4L2dyYXBoaWNzL2cyZC9TcHJpdGVSZW5kZXJlci5qYXZhXG4gKi9cblxuLyoqXG4gKlxuICogQGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIE9iamVjdFJlbmRlcmVyXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIHNwcml0ZSBiYXRjaCB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIFNwcml0ZVJlbmRlcmVyKHJlbmRlcmVyKVxue1xuICAgIE9iamVjdFJlbmRlcmVyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRTaXplID0gNTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0Qnl0ZVNpemUgPSB0aGlzLnZlcnRTaXplICogNDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaW1hZ2VzIGluIHRoZSBTcHJpdGVCYXRjaCBiZWZvcmUgaXQgZmx1c2hlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNpemUgPSBDT05TVC5TUFJJVEVfQkFUQ0hfU0laRTsgLy8gMjAwMCBpcyBhIG5pY2UgYmFsYW5jZSBiZXR3ZWVuIG1vYmlsZSAvIGRlc2t0b3BcblxuICAgIC8vIHRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgaW4gb3VyIGJhdGNoXG4gICAgdmFyIG51bVZlcnRzID0gdGhpcy5zaXplICogNCAqIHRoaXMudmVydEJ5dGVTaXplO1xuICAgIC8vIHRoZSB0b3RhbCBudW1iZXIgb2YgaW5kaWNlcyBpbiBvdXIgYmF0Y2hcbiAgICB2YXIgbnVtSW5kaWNlcyA9IHRoaXMuc2l6ZSAqIDY7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgdmVydGljZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0FycmF5QnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMudmVydGljZXMgPSBuZXcgQXJyYXlCdWZmZXIobnVtVmVydHMpO1xuXG4gICAgLyoqXG4gICAgICogVmlldyBvbiB0aGUgdmVydGljZXMgYXMgYSBGbG9hdDMyQXJyYXlcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Zsb2F0MzJBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyk7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgY29sb3IgY29tcG9uZW50c1xuICAgICAqXG4gICAgICogQG1lbWJlciB7VWludDMyQXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jb2xvcnMgPSBuZXcgVWludDMyQXJyYXkodGhpcy52ZXJ0aWNlcyk7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgaW5kaWNlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7VWludDE2QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KG51bUluZGljZXMpO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxhc3RJbmRleENvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGk9MCwgaj0wOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpXG4gICAge1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDBdID0gaiArIDA7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMV0gPSBqICsgMTtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAyXSA9IGogKyAyO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDNdID0gaiArIDA7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgNF0gPSBqICsgMjtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA1XSA9IGogKyAzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRCYXRjaFNpemUgPSAwO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Jhc2VUZXh0dXJlfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJhc2VUZXh0dXJlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnRleHR1cmVzID0gW107XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5ibGVuZE1vZGVzID0gW107XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5zcHJpdGVzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzaGFkZXIgdGhhdCBpcyB1c2VkIGlmIGEgc3ByaXRlIGRvZXNuJ3QgaGF2ZSBhIG1vcmUgc3BlY2lmaWMgb25lLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U2hhZGVyfVxuICAgICAqL1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcblxufVxuXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdFJlbmRlcmVyLnByb3RvdHlwZSk7XG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpdGVSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gU3ByaXRlUmVuZGVyZXI7XG5cbldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ3Nwcml0ZScsIFNwcml0ZVJlbmRlcmVyKTtcblxuLyoqXG4gKiBTZXRzIHVwIHRoZSByZW5kZXJlciBjb250ZXh0IGFuZCBuZWNlc3NhcnkgYnVmZmVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdsIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IHRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICovXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUub25Db250ZXh0Q2hhbmdlID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgLy8gc2V0dXAgZGVmYXVsdCBzaGFkZXJcbiAgICB0aGlzLnNoYWRlciA9IHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5kZWZhdWx0U2hhZGVyO1xuXG4gICAgLy8gY3JlYXRlIGEgY291cGxlIG9mIGJ1ZmZlcnNcbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8vIDY1NTM1IGlzIG1heCBpbmRleCwgc28gNjU1MzUgLyA2ID0gMTA5MjIuXG5cbiAgICAvL3VwbG9hZCB0aGUgaW5kZXggZGF0YVxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0aWNlcywgZ2wuRFlOQU1JQ19EUkFXKTtcblxuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IDk5OTk5O1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBzcHJpdGUgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBzcHJpdGUge1Nwcml0ZX0gdGhlIHNwcml0ZSB0byByZW5kZXIgd2hlbiB1c2luZyB0aGlzIHNwcml0ZWJhdGNoXG4gKi9cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoc3ByaXRlKVxue1xuICAgIHZhciB0ZXh0dXJlID0gc3ByaXRlLl90ZXh0dXJlO1xuXG4gICAgLy9UT0RPIHNldCBibGVuZCBtb2Rlcy4uXG4gICAgLy8gY2hlY2sgdGV4dHVyZS4uXG4gICAgaWYgKHRoaXMuY3VycmVudEJhdGNoU2l6ZSA+PSB0aGlzLnNpemUpXG4gICAge1xuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhc2VUZXh0dXJlID0gdGV4dHVyZS5iYXNlVGV4dHVyZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIHV2cyBmb3IgdGhlIHRleHR1cmVcbiAgICB2YXIgdXZzID0gdGV4dHVyZS5fdXZzO1xuXG4gICAgLy8gaWYgdGhlIHV2cyBoYXZlIG5vdCB1cGRhdGVkIHRoZW4gbm8gcG9pbnQgcmVuZGVyaW5nIGp1c3QgeWV0IVxuICAgIGlmICghdXZzKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRPRE8gdHJpbT8/XG4gICAgdmFyIGFYID0gc3ByaXRlLmFuY2hvci54O1xuICAgIHZhciBhWSA9IHNwcml0ZS5hbmNob3IueTtcblxuICAgIHZhciB3MCwgdzEsIGgwLCBoMTtcblxuICAgIGlmICh0ZXh0dXJlLnRyaW0pXG4gICAge1xuICAgICAgICAvLyBpZiB0aGUgc3ByaXRlIGlzIHRyaW1tZWQgdGhlbiB3ZSBuZWVkIHRvIGFkZCB0aGUgZXh0cmEgc3BhY2UgYmVmb3JlIHRyYW5zZm9ybWluZyB0aGUgc3ByaXRlIGNvb3Jkcy4uXG4gICAgICAgIHZhciB0cmltID0gdGV4dHVyZS50cmltO1xuXG4gICAgICAgIHcxID0gdHJpbS54IC0gYVggKiB0cmltLndpZHRoO1xuICAgICAgICB3MCA9IHcxICsgdGV4dHVyZS5jcm9wLndpZHRoO1xuXG4gICAgICAgIGgxID0gdHJpbS55IC0gYVkgKiB0cmltLmhlaWdodDtcbiAgICAgICAgaDAgPSBoMSArIHRleHR1cmUuY3JvcC5oZWlnaHQ7XG5cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdzAgPSAodGV4dHVyZS5fZnJhbWUud2lkdGggKSAqICgxLWFYKTtcbiAgICAgICAgdzEgPSAodGV4dHVyZS5fZnJhbWUud2lkdGggKSAqIC1hWDtcblxuICAgICAgICBoMCA9IHRleHR1cmUuX2ZyYW1lLmhlaWdodCAqICgxLWFZKTtcbiAgICAgICAgaDEgPSB0ZXh0dXJlLl9mcmFtZS5oZWlnaHQgKiAtYVk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5jdXJyZW50QmF0Y2hTaXplICogdGhpcy52ZXJ0Qnl0ZVNpemU7XG5cbiAgICB2YXIgd29ybGRUcmFuc2Zvcm0gPSBzcHJpdGUud29ybGRUcmFuc2Zvcm07XG5cbiAgICB2YXIgYSA9IHdvcmxkVHJhbnNmb3JtLmE7XG4gICAgdmFyIGIgPSB3b3JsZFRyYW5zZm9ybS5iO1xuICAgIHZhciBjID0gd29ybGRUcmFuc2Zvcm0uYztcbiAgICB2YXIgZCA9IHdvcmxkVHJhbnNmb3JtLmQ7XG4gICAgdmFyIHR4ID0gd29ybGRUcmFuc2Zvcm0udHg7XG4gICAgdmFyIHR5ID0gd29ybGRUcmFuc2Zvcm0udHk7XG5cbiAgICB2YXIgY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgdmFyIHBvc2l0aW9ucyA9IHRoaXMucG9zaXRpb25zO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIucm91bmRQaXhlbHMpXG4gICAge1xuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXhdID0gYSAqIHcxICsgYyAqIGgxICsgdHggfCAwO1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMV0gPSBkICogaDEgKyBiICogdzEgKyB0eSB8IDA7XG5cbiAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzVdID0gYSAqIHcwICsgYyAqIGgxICsgdHggfCAwO1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrNl0gPSBkICogaDEgKyBiICogdzAgKyB0eSB8IDA7XG5cbiAgICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxMF0gPSBhICogdzAgKyBjICogaDAgKyB0eCB8IDA7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxMV0gPSBkICogaDAgKyBiICogdzAgKyB0eSB8IDA7XG5cbiAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzE1XSA9IGEgKiB3MSArIGMgKiBoMCArIHR4IHwgMDtcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzE2XSA9IGQgKiBoMCArIGIgKiB3MSArIHR5IHwgMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4XSA9IGEgKiB3MSArIGMgKiBoMSArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMV0gPSBkICogaDEgKyBiICogdzEgKyB0eTtcblxuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrNV0gPSBhICogdzAgKyBjICogaDEgKyB0eDtcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzZdID0gZCAqIGgxICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxMF0gPSBhICogdzAgKyBjICogaDAgKyB0eDtcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzExXSA9IGQgKiBoMCArIGIgKiB3MCArIHR5O1xuXG4gICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxNV0gPSBhICogdzEgKyBjICogaDAgKyB0eDtcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzE2XSA9IGQgKiBoMCArIGIgKiB3MSArIHR5O1xuICAgIH1cblxuICAgIC8vIHV2XG4gICAgcG9zaXRpb25zW2luZGV4KzJdID0gdXZzLngwO1xuICAgIHBvc2l0aW9uc1tpbmRleCszXSA9IHV2cy55MDtcblxuICAgIC8vIHV2XG4gICAgcG9zaXRpb25zW2luZGV4KzddID0gdXZzLngxO1xuICAgIHBvc2l0aW9uc1tpbmRleCs4XSA9IHV2cy55MTtcblxuICAgICAvLyB1dlxuICAgIHBvc2l0aW9uc1tpbmRleCsxMl0gPSB1dnMueDI7XG4gICAgcG9zaXRpb25zW2luZGV4KzEzXSA9IHV2cy55MjtcblxuICAgIC8vIHV2XG4gICAgcG9zaXRpb25zW2luZGV4KzE3XSA9IHV2cy54MztcbiAgICBwb3NpdGlvbnNbaW5kZXgrMThdID0gdXZzLnkzO1xuXG4gICAgLy8gY29sb3IgYW5kIGFscGhhXG4gICAgdmFyIHRpbnQgPSBzcHJpdGUudGludDtcbiAgICBjb2xvcnNbaW5kZXgrNF0gPSBjb2xvcnNbaW5kZXgrOV0gPSBjb2xvcnNbaW5kZXgrMTRdID0gY29sb3JzW2luZGV4KzE5XSA9ICh0aW50ID4+IDE2KSArICh0aW50ICYgMHhmZjAwKSArICgodGludCAmIDB4ZmYpIDw8IDE2KSArIChzcHJpdGUud29ybGRBbHBoYSAqIDI1NSA8PCAyNCk7XG5cbiAgICAvLyBpbmNyZW1lbnQgdGhlIGJhdGNoc2l6ZVxuICAgIHRoaXMuc3ByaXRlc1t0aGlzLmN1cnJlbnRCYXRjaFNpemUrK10gPSBzcHJpdGU7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNvbnRlbnQgYW5kIGVtcHRpZXMgdGhlIGN1cnJlbnQgYmF0Y2guXG4gKlxuICovXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIElmIHRoZSBiYXRjaCBpcyBsZW5ndGggMCB0aGVuIHJldHVybiBhcyB0aGVyZSBpcyBub3RoaW5nIHRvIGRyYXdcbiAgICBpZiAodGhpcy5jdXJyZW50QmF0Y2hTaXplID09PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgdmFyIHNoYWRlcjtcblxuICAgIC8vIHVwbG9hZCB0aGUgdmVydHMgdG8gdGhlIGJ1ZmZlclxuICAgIGlmICh0aGlzLmN1cnJlbnRCYXRjaFNpemUgPiAoIHRoaXMuc2l6ZSAqIDAuNSApIClcbiAgICB7XG4gICAgICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnZlcnRpY2VzKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmFyIHZpZXcgPSB0aGlzLnBvc2l0aW9ucy5zdWJhcnJheSgwLCB0aGlzLmN1cnJlbnRCYXRjaFNpemUgKiB0aGlzLnZlcnRCeXRlU2l6ZSk7XG4gICAgICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB2aWV3KTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dFRleHR1cmUsIG5leHRCbGVuZE1vZGUsIG5leHRTaGFkZXI7XG4gICAgdmFyIGJhdGNoU2l6ZSA9IDA7XG4gICAgdmFyIHN0YXJ0ID0gMDtcblxuICAgIHZhciBjdXJyZW50QmFzZVRleHR1cmUgPSBudWxsO1xuICAgIHZhciBjdXJyZW50QmxlbmRNb2RlID0gdGhpcy5yZW5kZXJlci5ibGVuZE1vZGVNYW5hZ2VyLmN1cnJlbnRCbGVuZE1vZGU7XG4gICAgdmFyIGN1cnJlbnRTaGFkZXIgPSBudWxsO1xuXG4gICAgdmFyIGJsZW5kU3dhcCA9IGZhbHNlO1xuICAgIHZhciBzaGFkZXJTd2FwID0gZmFsc2U7XG4gICAgdmFyIHNwcml0ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jdXJyZW50QmF0Y2hTaXplOyBpIDwgajsgaSsrKVxuICAgIHtcblxuICAgICAgICBzcHJpdGUgPSB0aGlzLnNwcml0ZXNbaV07XG5cbiAgICAgICAgbmV4dFRleHR1cmUgPSBzcHJpdGUuX3RleHR1cmUuYmFzZVRleHR1cmU7XG4gICAgICAgIG5leHRCbGVuZE1vZGUgPSBzcHJpdGUuYmxlbmRNb2RlO1xuICAgICAgICBuZXh0U2hhZGVyID0gc3ByaXRlLnNoYWRlciB8fCB0aGlzLnNoYWRlcjtcblxuICAgICAgICBibGVuZFN3YXAgPSBjdXJyZW50QmxlbmRNb2RlICE9PSBuZXh0QmxlbmRNb2RlO1xuICAgICAgICBzaGFkZXJTd2FwID0gY3VycmVudFNoYWRlciAhPT0gbmV4dFNoYWRlcjsgLy8gc2hvdWxkIEkgdXNlIHV1aWRTPz8/XG5cbiAgICAgICAgaWYgKGN1cnJlbnRCYXNlVGV4dHVyZSAhPT0gbmV4dFRleHR1cmUgfHwgYmxlbmRTd2FwIHx8IHNoYWRlclN3YXApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQmF0Y2goY3VycmVudEJhc2VUZXh0dXJlLCBiYXRjaFNpemUsIHN0YXJ0KTtcblxuICAgICAgICAgICAgc3RhcnQgPSBpO1xuICAgICAgICAgICAgYmF0Y2hTaXplID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRCYXNlVGV4dHVyZSA9IG5leHRUZXh0dXJlO1xuXG4gICAgICAgICAgICBpZiAoYmxlbmRTd2FwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCbGVuZE1vZGUgPSBuZXh0QmxlbmRNb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmxlbmRNb2RlTWFuYWdlci5zZXRCbGVuZE1vZGUoIGN1cnJlbnRCbGVuZE1vZGUgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoYWRlclN3YXApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNoYWRlciA9IG5leHRTaGFkZXI7XG5cblxuXG4gICAgICAgICAgICAgICAgc2hhZGVyID0gY3VycmVudFNoYWRlci5zaGFkZXJzID8gY3VycmVudFNoYWRlci5zaGFkZXJzW2dsLmlkXSA6IGN1cnJlbnRTaGFkZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNoYWRlcilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlciA9IGN1cnJlbnRTaGFkZXIuZ2V0U2hhZGVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHNoYWRlciBmdW5jdGlvbj8/P1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5zZXRTaGFkZXIoc2hhZGVyKTtcblxuICAgICAgICAgICAgICAgIC8vVE9ETyAtIGkgS05PVyB0aGlzIGNhbiBiZSBvcHRpbWlzZWQhIE9uY2UgdjMgaXMgc3RhYmxlIGlsIGxvb2sgYXQgdGhpcyBuZXh0Li4uXG4gICAgICAgICAgICAgICAgc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXgudmFsdWUgPSB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpO1xuICAgICAgICAgICAgICAgIC8vTWFrZSB0aGlzIGEgbGl0dGxlIG1vcmUgZHluYW1pYyAvIGludGVsbGlnZW50IVxuICAgICAgICAgICAgICAgIHNoYWRlci5zeW5jVW5pZm9ybXMoKTtcblxuICAgICAgICAgICAgICAgIC8vVE9ETyBpbnZlc3RpZ2F0ZSBzb21lIGtpbmQgb2YgdGV4dHVyZSBzdGF0ZSBtYW5hZ21lbnQ/P1xuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gbWFrZSBzdXJlIHRoaXMgdGV4dHVyZSBpcyB0aGUgYWN0aXZlIG9uZSBmb3IgYWxsIHRoZSBiYXRjaCBzd2Fwcy4uXG4gICAgICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBib3RoIHRoZWFzZSBvbmx5IG5lZWQgdG8gYmUgc2V0IGlmIHRoZXkgYXJlIGNoYW5naW5nLi5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHByb2plY3Rpb25cbiAgICAgICAgICAgICAgICAvL2dsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXgudG9BcnJheSh0cnVlKSk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmF0Y2hTaXplKys7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJCYXRjaChjdXJyZW50QmFzZVRleHR1cmUsIGJhdGNoU2l6ZSwgc3RhcnQpO1xuXG4gICAgLy8gdGhlbiByZXNldCB0aGUgYmF0Y2ghXG4gICAgdGhpcy5jdXJyZW50QmF0Y2hTaXplID0gMDtcbn07XG5cbi8qKlxuICogRHJhd3MgdGhlIGN1cnJlbnRseSBiYXRjaGVzIHNwcml0ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB0ZXh0dXJlIHtUZXh0dXJlfVxuICogQHBhcmFtIHNpemUge251bWJlcn1cbiAqIEBwYXJhbSBzdGFydEluZGV4IHtudW1iZXJ9XG4gKi9cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJCYXRjaCA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBzaXplLCBzdGFydEluZGV4KVxue1xuICAgIGlmIChzaXplID09PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICBpZiAoIXRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci51cGRhdGVUZXh0dXJlKHRleHR1cmUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyBiaW5kIHRoZSBjdXJyZW50IHRleHR1cmVcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pO1xuICAgIH1cblxuICAgIC8vIG5vdyBkcmF3IHRob3NlIHN1Y2thcyFcbiAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCBzaXplICogNiwgZ2wuVU5TSUdORURfU0hPUlQsIHN0YXJ0SW5kZXggKiA2ICogMik7XG5cbiAgICAvLyBpbmNyZW1lbnQgdGhlIGRyYXcgY291bnRcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdDb3VudCsrO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBuZXcgc3ByaXRlIGJhdGNoLlxuICpcbiAqL1xuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgLy8gYmluZCB0aGUgbWFpbiB0ZXh0dXJlXG5cblxuICAgIC8vIGJpbmQgdGhlIGJ1ZmZlcnNcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBmb3IgZWFjaCBzaGFkZXI/XG4gICAgdmFyIHN0cmlkZSA9ICB0aGlzLnZlcnRCeXRlU2l6ZTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSwgMCk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIDIsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCAyICogNCk7XG5cbiAgICAvLyBjb2xvciBhdHRyaWJ1dGVzIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgdW5zaWduZWQgYnl0ZXMgYW5kIG5vcm1hbGl6ZWRcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYUNvbG9yLCA0LCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCBzdHJpZGUsIDQgKiA0KTtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIFNwcml0ZUJhdGNoLlxuICpcbiAqL1xuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMucmVuZGVyZXIuZ2wuZGVsZXRlQnVmZmVyKHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICB0aGlzLnJlbmRlcmVyLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmluZGV4QnVmZmVyKTtcblxuICAgIHRoaXMuc2hhZGVyLmRlc3Ryb3koKTtcblxuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG51bGw7XG4gICAgdGhpcy5wb3NpdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuY29sb3JzID0gbnVsbDtcbiAgICB0aGlzLmluZGljZXMgPSBudWxsO1xuXG4gICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBudWxsO1xuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5jdXJyZW50QmFzZVRleHR1cmUgPSBudWxsO1xuXG4gICAgdGhpcy5kcmF3aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnRleHR1cmVzID0gbnVsbDtcbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBudWxsO1xuICAgIHRoaXMuc2hhZGVycyA9IG51bGw7XG4gICAgdGhpcy5zcHJpdGVzID0gbnVsbDtcbiAgICB0aGlzLnNoYWRlciA9IG51bGw7XG59O1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQSB0ZXh0dXJlIHN0b3JlcyB0aGUgaW5mb3JtYXRpb24gdGhhdCByZXByZXNlbnRzIGFuIGltYWdlLiBBbGwgdGV4dHVyZXMgaGF2ZSBhIGJhc2UgdGV4dHVyZS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtaXhlcyBldmVudFRhcmdldFxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBzb3VyY2Uge0ltYWdlfENhbnZhc30gdGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0gW3NjYWxlTW9kZT1zY2FsZU1vZGVzLkRFRkFVTFRdIHtudW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEBwYXJhbSByZXNvbHV0aW9uIHtudW1iZXJ9IHRoZSByZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlIGZvciBkZXZpY2VzIHdpdGggZGlmZmVyZW50IHBpeGVsIHJhdGlvc1xuICovXG5mdW5jdGlvbiBCYXNlVGV4dHVyZShzb3VyY2UsIHNjYWxlTW9kZSwgcmVzb2x1dGlvbilcbntcbiAgICB0aGlzLnV1aWQgPSB1dGlscy51dWlkKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgUmVzb2x1dGlvbiBvZiB0aGUgdGV4dHVyZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb24gPSByZXNvbHV0aW9uIHx8IDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGJhc2UgdGV4dHVyZSBzZXQgd2hlbiB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSAxMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBiYXNlIHRleHR1cmUgc2V0IHdoZW4gdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IDEwMDtcblxuICAgIC8vIFRPRE8gZG9jc1xuICAgIC8vIHVzZWQgdG8gc3RvcmUgdGhlIGFjdHVhbCBkaW1lbnNpb25zIG9mIHRoZSBzb3VyY2VcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIHN0b3JlIHRoZSBhY3R1YWwgd2lkdGggb2YgdGhlIHNvdXJjZSBvZiB0aGlzIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnJlYWxXaWR0aCA9IDEwMDtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIHN0b3JlIHRoZSBhY3R1YWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2Ugb2YgdGhpcyB0ZXh0dXJlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy5yZWFsSGVpZ2h0ID0gMTAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlIG1vZGUgdG8gYXBwbHkgd2hlbiBzY2FsaW5nIHRoaXMgdGV4dHVyZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7e251bWJlcn19XG4gICAgICogQGRlZmF1bHQgc2NhbGVNb2Rlcy5MSU5FQVJcbiAgICAgKi9cbiAgICB0aGlzLnNjYWxlTW9kZSA9IHNjYWxlTW9kZSB8fCBDT05TVC5TQ0FMRV9NT0RFUy5ERUZBVUxUO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgb25jZSB0aGUgYmFzZSB0ZXh0dXJlIGhhcyBzdWNjZXNzZnVsbHkgbG9hZGVkLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZXZlciB0cnVlIGlmIHRoZSB1bmRlcmx5aW5nIHNvdXJjZSBmYWlscyB0byBsb2FkIG9yIGhhcyBubyB0ZXh0dXJlIGRhdGEuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMuaGFzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSBpZiB0aGUgc291cmNlIGlzIGN1cnJlbnRseSBsb2FkaW5nLlxuICAgICAqXG4gICAgICogSWYgYW4gSW1hZ2Ugc291cmNlIGlzIGxvYWRpbmcgdGhlICdsb2FkZWQnIG9yICdlcnJvcicgZXZlbnQgd2lsbCBiZVxuICAgICAqIGRpc3BhdGNoZWQgd2hlbiB0aGUgb3BlcmF0aW9uIGVuZHMuIEFuIHVuZGVyeWxpbmcgc291cmNlIHRoYXQgaXNcbiAgICAgKiBpbW1lZGlhdGVseS1hdmFpbGFibGUgYnlwYXNzZXMgbG9hZGluZyBlbnRpcmVseS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbWFnZSBzb3VyY2UgdGhhdCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZS5cbiAgICAgKlxuICAgICAqIFRPRE86IE1ha2UgdGhpcyBhIHNldHRlciB0aGF0IGNhbGxzIGxvYWRTb3VyY2UoKTtcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfENhbnZhc31cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7IC8vIHNldCBpbiBsb2FkU291cmNlLCBpZiBhdCBhbGxcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIGlmIFJHQiBjaGFubmVscyBzaG91bGQgYmUgcHJlLW11bHRpcGxpZWQgYnkgQWxwaGEgIChXZWJHTCBvbmx5KVxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgdGhpcy5wcmVtdWx0aXBsaWVkQWxwaGEgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2VVcmwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogV2V0aGVyIG9yIG5vdCB0aGUgdGV4dHVyZSBpcyBhIHBvd2VyIG9mIHR3bywgdHJ5IHRvIHVzZSBwb3dlciBvZiB0d28gdGV4dHVyZXMgYXMgbXVjaCBhcyB5b3UgY2FuXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNQb3dlck9mVHdvID0gZmFsc2U7XG5cbiAgICAvLyB1c2VkIGZvciB3ZWJHTFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIGEgbWlwbWFwIG9mIHRoaXMgdGV4dHVyZSBuZWVkcyB0byBiZSBnZW5lcmF0ZWQuIFRoaXMgdmFsdWUgbmVlZHMgdG8gYmUgc2V0IGJlZm9yZSB0aGUgdGV4dHVyZSBpcyB1c2VkXG4gICAgICogQWxzbyB0aGUgdGV4dHVyZSBtdXN0IGJlIGEgcG93ZXIgb2YgdHdvIHNpemUgdG8gd29ya1xuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLm1pcG1hcCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBtYXAgb2YgcmVuZGVyZXIgSURzIHRvIHdlYmdsIHRleHR1cmVzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtvYmplY3Q8bnVtYmVyLCBXZWJHTFRleHR1cmU+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xUZXh0dXJlcyA9IFtdO1xuXG4gICAgLy8gaWYgbm8gc291cmNlIHBhc3NlZCBkb24ndCB0cnkgdG8gbG9hZFxuICAgIGlmIChzb3VyY2UpXG4gICAge1xuICAgICAgICB0aGlzLmxvYWRTb3VyY2Uoc291cmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIGEgbm90LWltbWVkaWF0ZWx5LWF2YWlsYWJsZSBzb3VyY2UgZmluaXNoZXMgbG9hZGluZy5cbiAgICAgKlxuICAgICAqIEBldmVudCBsb2FkZWRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIGEgbm90LWltbWVkaWF0ZWx5LWF2YWlsYWJsZSBzb3VyY2UgZmFpbHMgdG8gbG9hZC5cbiAgICAgKlxuICAgICAqIEBldmVudCBlcnJvclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbn1cblxuQmFzZVRleHR1cmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZVRleHR1cmU7XG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VUZXh0dXJlO1xuXG51dGlscy5ldmVudFRhcmdldC5taXhpbihCYXNlVGV4dHVyZS5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHRleHR1cmUgb24gYWxsIHRoZSB3ZWJnbCByZW5kZXJlcnMuXG4gKlxuICogQGZpcmVzIHVwZGF0ZVxuICovXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcyk7XG59O1xuXG4vKipcbiAqIExvYWQgYSBzb3VyY2UuXG4gKlxuICogSWYgdGhlIHNvdXJjZSBpcyBub3QtaW1tZWRpYXRlbHktYXZhaWxhYmxlLCBzdWNoIGFzIGFuIGltYWdlIHRoYXQgbmVlZHMgdG8gYmVcbiAqIGRvd25sb2FkZWQsIHRoZW4gdGhlICdsb2FkZWQnIG9yICdlcnJvcicgZXZlbnQgd2lsbCBiZSBkaXNwYXRjaGVkIGluIHRoZSBmdXR1cmVcbiAqIGFuZCBgaGFzTG9hZGVkYCB3aWxsIHJlbWFpbiBmYWxzZSBhZnRlciB0aGlzIGNhbGwuXG4gKlxuICogVGhlIGxvZ2ljIHN0YXRlIGFmdGVyIGNhbGxpbmcgYGxvYWRTb3VyY2VgIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkgKGVnLiBgZnJvbUltYWdlYCwgYG5ldyBCYXNlVGV4dHVyZWApIGlzOlxuICpcbiAqICAgICBpZiAodGV4dHVyZS5oYXNMb2FkZWQpXG4ge1xuICogICAgICAgIC8vIHRleHR1cmUgcmVhZHkgZm9yIHVzZVxuICogICAgIH0gZWxzZSBpZiAodGV4dHVyZS5pc0xvYWRpbmcpXG4ge1xuICogICAgICAgIC8vIGxpc3RlbiB0byAnbG9hZGVkJyBhbmQvb3IgJ2Vycm9yJyBldmVudHMgb24gdGV4dHVyZVxuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICAgLy8gbm90IGxvYWRpbmcsIG5vdCBnb2luZyB0byBsb2FkIFVOTEVTUyB0aGUgc291cmNlIGlzIHJlbG9hZGVkXG4gKiAgICAgICAgLy8gKGl0IG1heSBzdGlsbCBtYWtlIHNlbnNlIHRvIGxpc3RlbiB0byB0aGUgZXZlbnRzKVxuICogICAgIH1cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0gc291cmNlIHtJbWFnZXxDYW52YXN9IHRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSB0ZXh0dXJlLlxuICovXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUubG9hZFNvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2UpXG57XG4gICAgdmFyIHdhc0xvYWRpbmcgPSB0aGlzLmlzTG9hZGluZztcbiAgICB0aGlzLmhhc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAod2FzTG9hZGluZyAmJiB0aGlzLnNvdXJjZSlcbiAgICB7XG4gICAgICAgIHRoaXMuc291cmNlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc291cmNlLm9uZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuXG4gICAgLy8gQXBwbHkgc291cmNlIGlmIGxvYWRlZC4gT3RoZXJ3aXNlIHNldHVwIGFwcHJvcHJpYXRlIGxvYWRpbmcgbW9uaXRvcnMuXG4gICAgaWYgKCh0aGlzLnNvdXJjZS5jb21wbGV0ZSB8fCB0aGlzLnNvdXJjZS5nZXRDb250ZXh0KSAmJiB0aGlzLnNvdXJjZS53aWR0aCAmJiB0aGlzLnNvdXJjZS5oZWlnaHQpXG4gICAge1xuICAgICAgICB0aGlzLl9zb3VyY2VMb2FkZWQoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIXNvdXJjZS5nZXRDb250ZXh0KVxuICAgIHtcblxuICAgICAgICAvLyBJbWFnZSBmYWlsIC8gbm90IHJlYWR5XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgICAgIHNvdXJjZS5vbmxvYWQgPSBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNvdXJjZS5vbmVycm9yID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFzY29wZS5pc0xvYWRpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlLl9zb3VyY2VMb2FkZWQoKTtcblxuICAgICAgICAgICAgc2NvcGUuZW1pdCgnbG9hZGVkJywgc2NvcGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNvdXJjZS5vbmVycm9yID0gZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICBzb3VyY2Uub25lcnJvciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICghc2NvcGUuaXNMb2FkaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZS5lbWl0KCdlcnJvcicsIHNjb3BlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQZXIgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvZW1iZWRkZWQtY29udGVudC0wLmh0bWwjdGhlLWltZy1lbGVtZW50XG4gICAgICAgIC8vICAgXCJUaGUgdmFsdWUgb2YgYGNvbXBsZXRlYCBjYW4gdGh1cyBjaGFuZ2Ugd2hpbGUgYSBzY3JpcHQgaXMgZXhlY3V0aW5nLlwiXG4gICAgICAgIC8vIFNvIGNvbXBsZXRlIG5lZWRzIHRvIGJlIHJlLWNoZWNrZWQgYWZ0ZXIgdGhlIGNhbGxiYWNrcyBoYXZlIGJlZW4gYWRkZWQuLlxuICAgICAgICAvLyBOT1RFOiBjb21wbGV0ZSB3aWxsIGJlIHRydWUgaWYgdGhlIGltYWdlIGhhcyBubyBzcmMgc28gYmVzdCB0byBjaGVjayBpZiB0aGUgc3JjIGlzIHNldC5cbiAgICAgICAgaWYgKHNvdXJjZS5jb21wbGV0ZSAmJiBzb3VyY2Uuc3JjKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyAuLmFuZCBpZiB3ZSdyZSBjb21wbGV0ZSBub3csIG5vIG5lZWQgZm9yIGNhbGxiYWNrc1xuICAgICAgICAgICAgc291cmNlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICBzb3VyY2Uub25lcnJvciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2Uud2lkdGggJiYgc291cmNlLmhlaWdodClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VyY2VMb2FkZWQoKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBwcmV2aW91cyBzdWJzY3JpYmVycyBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIGlmICh3YXNMb2FkaW5nKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdsb2FkZWQnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IHByZXZpb3VzIHN1YnNjcmliZXJzIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgaWYgKHdhc0xvYWRpbmcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBVc2VkIGludGVybmFsbHkgdG8gdXBkYXRlIHRoZSB3aWR0aCwgaGVpZ2h0LCBhbmQgc29tZSBvdGhlciB0cmFja2luZyB2YXJzIG9uY2VcbiAqIGEgc291cmNlIGhhcyBzdWNjZXNzZnVsbHkgbG9hZGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS5fc291cmNlTG9hZGVkID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmhhc0xvYWRlZCA9IHRydWU7XG5cbiAgICB0aGlzLnJlYWxXaWR0aCA9IHRoaXMuc291cmNlLm5hdHVyYWxXaWR0aCB8fCB0aGlzLnNvdXJjZS53aWR0aDtcbiAgICB0aGlzLnJlYWxIZWlnaHQgPSB0aGlzLnNvdXJjZS5uYXR1cmFsSGVpZ2h0IHx8IHRoaXMuc291cmNlLmhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLnJlYWxXaWR0aCAvIHRoaXMucmVzb2x1dGlvbjtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMucmVhbEhlaWdodCAvIHRoaXMucmVzb2x1dGlvbjtcblxuXG4gICAgdGhpcy5pc1Bvd2VyT2ZUd28gPSB1dGlscy5pc1Bvd2VyT2ZUd28odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyBiYXNlIHRleHR1cmVcbiAqXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAodGhpcy5pbWFnZVVybClcbiAgICB7XG4gICAgICAgIGRlbGV0ZSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW3RoaXMuaW1hZ2VVcmxdO1xuICAgICAgICBkZWxldGUgdXRpbHMuVGV4dHVyZUNhY2hlW3RoaXMuaW1hZ2VVcmxdO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBudWxsO1xuXG4gICAgICAgIGlmICghbmF2aWdhdG9yLmlzQ29jb29uSlMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnNyYyA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLl9waXhpSWQpXG4gICAge1xuICAgICAgICBkZWxldGUgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVt0aGlzLnNvdXJjZS5fcGl4aUlkXTtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG5cbiAgICB0aGlzLmRpc3Bvc2UoKTtcbn07XG5cbi8qKlxuICogRnJlZXMgdGhlIHRleHR1cmUgZnJvbSBXZWJHTCBtZW1vcnkgd2l0aG91dCBkZXN0cm95aW5nIHRoaXMgdGV4dHVyZSBvYmplY3QuXG4gKiBUaGlzIG1lYW5zIHlvdSBjYW4gc3RpbGwgdXNlIHRoZSB0ZXh0dXJlIGxhdGVyIHdoaWNoIHdpbGwgdXBsb2FkIGl0IHRvIEdQVVxuICogbWVtb3J5IGFnYWluLlxuICpcbiAqL1xuQmFzZVRleHR1cmUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuZW1pdCgnZGlzcG9zZScsIHRoaXMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBzb3VyY2UgaW1hZ2Ugb2YgdGhlIHRleHR1cmUuXG4gKiBUaGUgb3JpZ2luYWwgc291cmNlIG11c3QgYmUgYW4gSW1hZ2UgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gbmV3U3JjIHtzdHJpbmd9IHRoZSBwYXRoIG9mIHRoZSBpbWFnZVxuICovXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUudXBkYXRlU291cmNlSW1hZ2UgPSBmdW5jdGlvbiAobmV3U3JjKVxue1xuICAgIHRoaXMuc291cmNlLnNyYyA9IG5ld1NyYztcblxuICAgIHRoaXMubG9hZFNvdXJjZSh0aGlzLnNvdXJjZSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBiYXNlIHRleHR1cmUgZnJvbSB0aGUgZ2l2ZW4gaW1hZ2UgdXJsLlxuICogSWYgdGhlIGltYWdlIGlzIG5vdCBpbiB0aGUgYmFzZSB0ZXh0dXJlIGNhY2hlIGl0IHdpbGwgYmUgY3JlYXRlZCBhbmQgbG9hZGVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBpbWFnZVVybCB7c3RyaW5nfSBUaGUgaW1hZ2UgdXJsIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcGFyYW0gW2Nyb3Nzb3JpZ2luPShhdXRvKV0ge2Jvb2xlYW59IFNob3VsZCB1c2UgYW5vbnltb3VzIENPUlM/IERlZmF1bHRzIHRvIHRydWUgaWYgdGhlIFVSTCBpcyBub3QgYSBkYXRhLVVSSS5cbiAqIEBwYXJhbSBbc2NhbGVNb2RlPXNjYWxlTW9kZXMuREVGQVVMVF0ge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiBCYXNlVGV4dHVyZVxuICovXG5CYXNlVGV4dHVyZS5mcm9tSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VVcmwsIGNyb3Nzb3JpZ2luLCBzY2FsZU1vZGUpXG57XG4gICAgdmFyIGJhc2VUZXh0dXJlID0gdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtpbWFnZVVybF07XG5cbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCAmJiBpbWFnZVVybC5pbmRleE9mKCdkYXRhOicpICE9PSAwKVxuICAgIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYmFzZVRleHR1cmUpXG4gICAge1xuICAgICAgICAvLyBuZXcgSW1hZ2UoKSBicmVha3MgdGV4IGxvYWRpbmcgaW4gc29tZSB2ZXJzaW9ucyBvZiBDaHJvbWUuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjM4MDcxXG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpOy8vZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbilcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGJhc2VUZXh0dXJlID0gbmV3IEJhc2VUZXh0dXJlKGltYWdlLCBzY2FsZU1vZGUpO1xuICAgICAgICBiYXNlVGV4dHVyZS5pbWFnZVVybCA9IGltYWdlVXJsO1xuXG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlVXJsO1xuXG4gICAgICAgIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbaW1hZ2VVcmxdID0gYmFzZVRleHR1cmU7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gQDJ4IGF0IHRoZSBlbmQgb2YgdGhlIHVybCB3ZSBhcmUgZ29pbmcgdG8gYXNzdW1lIGl0cyBhIGhpZ2hyZXMgaW1hZ2VcbiAgICAgICAgYmFzZVRleHR1cmUucmVzb2x1dGlvbiA9IHV0aWxzLmdldFJlc29sdXRpb25PZlVybChpbWFnZVVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VUZXh0dXJlO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgYmFzZSB0ZXh0dXJlIGZyb20gdGhlIGdpdmVuIGNhbnZhcyBlbGVtZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBjYW52YXMge0NhbnZhc30gVGhlIGNhbnZhcyBlbGVtZW50IHNvdXJjZSBvZiB0aGUgdGV4dHVyZVxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fXNjYWxlTW9kZXN7ey9jcm9zc0xpbmt9fSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIEJhc2VUZXh0dXJlXG4gKi9cbkJhc2VUZXh0dXJlLmZyb21DYW52YXMgPSBmdW5jdGlvbiAoY2FudmFzLCBzY2FsZU1vZGUpXG57XG4gICAgaWYgKCFjYW52YXMuX3BpeGlJZClcbiAgICB7XG4gICAgICAgIGNhbnZhcy5fcGl4aUlkID0gJ2NhbnZhc18nICsgdXRpbHMudXVpZCgpO1xuICAgIH1cblxuICAgIHZhciBiYXNlVGV4dHVyZSA9IHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbY2FudmFzLl9waXhpSWRdO1xuXG4gICAgaWYgKCFiYXNlVGV4dHVyZSlcbiAgICB7XG4gICAgICAgIGJhc2VUZXh0dXJlID0gbmV3IEJhc2VUZXh0dXJlKGNhbnZhcywgc2NhbGVNb2RlKTtcbiAgICAgICAgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtjYW52YXMuX3BpeGlJZF0gPSBiYXNlVGV4dHVyZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVRleHR1cmU7XG59O1xuIiwidmFyIEJhc2VUZXh0dXJlID0gcmVxdWlyZSgnLi9CYXNlVGV4dHVyZScpLFxuICAgIFRleHR1cmUgPSByZXF1aXJlKCcuL1RleHR1cmUnKSxcbiAgICBSZW5kZXJUYXJnZXQgPSByZXF1aXJlKCcuLi9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvUmVuZGVyVGFyZ2V0JyksXG4gICAgRmlsdGVyTWFuYWdlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVycy93ZWJnbC9tYW5hZ2Vycy9GaWx0ZXJNYW5hZ2VyJyksXG4gICAgQ2FudmFzQnVmZmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNCdWZmZXInKSxcbiAgICBtYXRoID0gcmVxdWlyZSgnLi4vbWF0aCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKSxcbiAgICB0ZW1wTWF0cml4ID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbi8qKlxuICogQSBSZW5kZXJUZXh0dXJlIGlzIGEgc3BlY2lhbCB0ZXh0dXJlIHRoYXQgYWxsb3dzIGFueSBQaXhpIGRpc3BsYXkgb2JqZWN0IHRvIGJlIHJlbmRlcmVkIHRvIGl0LlxuICpcbiAqIF9fSGludF9fOiBBbGwgRGlzcGxheU9iamVjdHMgKGkuZS4gU3ByaXRlcykgdGhhdCByZW5kZXIgdG8gYSBSZW5kZXJUZXh0dXJlIHNob3VsZCBiZSBwcmVsb2FkZWRcbiAqIG90aGVyd2lzZSBibGFjayByZWN0YW5nbGVzIHdpbGwgYmUgZHJhd24gaW5zdGVhZC5cbiAqXG4gKiBBIFJlbmRlclRleHR1cmUgdGFrZXMgYSBzbmFwc2hvdCBvZiBhbnkgRGlzcGxheSBPYmplY3QgZ2l2ZW4gdG8gaXRzIHJlbmRlciBtZXRob2QuIFRoZSBwb3NpdGlvblxuICogYW5kIHJvdGF0aW9uIG9mIHRoZSBnaXZlbiBEaXNwbGF5IE9iamVjdHMgaXMgaWdub3JlZC4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZW5kZXJUZXh0dXJlID0gbmV3IFBJWEkuUmVuZGVyVGV4dHVyZSg4MDAsIDYwMCk7XG4gKiB2YXIgc3ByaXRlID0gUElYSS5TcHJpdGUuZnJvbUltYWdlKFwic3Bpbk9ial8wMS5wbmdcIik7XG4gKlxuICogc3ByaXRlLnBvc2l0aW9uLnggPSA4MDAvMjtcbiAqIHNwcml0ZS5wb3NpdGlvbi55ID0gNjAwLzI7XG4gKiBzcHJpdGUuYW5jaG9yLnggPSAwLjU7XG4gKiBzcHJpdGUuYW5jaG9yLnkgPSAwLjU7XG4gKlxuICogcmVuZGVyVGV4dHVyZS5yZW5kZXIoc3ByaXRlKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBTcHJpdGUgaW4gdGhpcyBjYXNlIHdpbGwgYmUgcmVuZGVyZWQgdG8gYSBwb3NpdGlvbiBvZiAwLDAuIFRvIHJlbmRlciB0aGlzIHNwcml0ZSBhdCBpdHMgYWN0dWFsXG4gKiBwb3NpdGlvbiBhIENvbnRhaW5lciBzaG91bGQgYmUgdXNlZDpcbiAqXG4gKiBgYGBqc1xuICogdmFyIGRvYyA9IG5ldyBDb250YWluZXIoKTtcbiAqXG4gKiBkb2MuYWRkQ2hpbGQoc3ByaXRlKTtcbiAqXG4gKiByZW5kZXJUZXh0dXJlLnJlbmRlcihkb2MpOyAgLy8gUmVuZGVycyB0byBjZW50ZXIgb2YgcmVuZGVyVGV4dHVyZVxuICogYGBgXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBUZXh0dXJlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcnxXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdXNlZCBmb3IgdGhpcyBSZW5kZXJUZXh0dXJlXG4gKiBAcGFyYW0gW3dpZHRoPTEwMF0ge251bWJlcn0gVGhlIHdpZHRoIG9mIHRoZSByZW5kZXIgdGV4dHVyZVxuICogQHBhcmFtIFtoZWlnaHQ9MTAwXSB7bnVtYmVyfSBUaGUgaGVpZ2h0IG9mIHRoZSByZW5kZXIgdGV4dHVyZVxuICogQHBhcmFtIFtzY2FsZU1vZGVdIHtudW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEBwYXJhbSBbcmVzb2x1dGlvbj0xXSB7bnVtYmVyfSBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgdGV4dHVyZSBiZWluZyBnZW5lcmF0ZWRcbiAqL1xuZnVuY3Rpb24gUmVuZGVyVGV4dHVyZShyZW5kZXJlciwgd2lkdGgsIGhlaWdodCwgc2NhbGVNb2RlLCByZXNvbHV0aW9uKVxue1xuICAgIGlmICghcmVuZGVyZXIpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBjcmVhdGUgUmVuZGVyVGV4dHVyZSwgeW91IG11c3QgcGFzcyBhIHJlbmRlcmVyIGludG8gdGhlIGNvbnN0cnVjdG9yLicpO1xuICAgIH1cblxuICAgIHdpZHRoID0gd2lkdGggfHwgMTAwO1xuICAgIGhlaWdodCA9IGhlaWdodCB8fCAxMDA7XG4gICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24gfHwgQ09OU1QuUkVTT0xVVElPTjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIHRleHR1cmUgb2JqZWN0IHRoYXQgdGhpcyB0ZXh0dXJlIHVzZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Jhc2VUZXh0dXJlfVxuICAgICAqL1xuICAgIHZhciBiYXNlVGV4dHVyZSA9IG5ldyBCYXNlVGV4dHVyZSgpO1xuICAgIGJhc2VUZXh0dXJlLndpZHRoID0gd2lkdGg7XG4gICAgYmFzZVRleHR1cmUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGJhc2VUZXh0dXJlLnJlc29sdXRpb24gPSByZXNvbHV0aW9uO1xuICAgIGJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IHNjYWxlTW9kZSB8fCBDT05TVC5TQ0FMRV9NT0RFUy5ERUZBVUxUO1xuICAgIGJhc2VUZXh0dXJlLmhhc0xvYWRlZCA9IHRydWU7XG5cblxuICAgIFRleHR1cmUuY2FsbCh0aGlzLFxuICAgICAgICBiYXNlVGV4dHVyZSxcbiAgICAgICAgbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgKTtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpdGggb2YgdGhlIHJlbmRlciB0ZXh0dXJlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcmVuZGVyIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBSZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZnJhbWluZyByZWN0YW5nbGUgb2YgdGhlIHJlbmRlciB0ZXh0dXJlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgLy90aGlzLl9mcmFtZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCB0aGlzLndpZHRoICogdGhpcy5yZXNvbHV0aW9uLCB0aGlzLmhlaWdodCAqIHRoaXMucmVzb2x1dGlvbik7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBhcmVhIG9mIHRoZSBCYXNlVGV4dHVyZSBpbWFnZSB0byBhY3R1YWxseSBjb3B5IHRvIHRoZSBDYW52YXMgLyBXZWJHTCB3aGVuIHJlbmRlcmluZyxcbiAgICAgKiBpcnJlc3BlY3RpdmUgb2YgdGhlIGFjdHVhbCBmcmFtZSBzaXplIG9yIHBsYWNlbWVudCAod2hpY2ggY2FuIGJlIGluZmx1ZW5jZWQgYnkgdHJpbW1lZCB0ZXh0dXJlIGF0bGFzZXMpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgLy90aGlzLmNyb3AgPSBuZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMucmVzb2x1dGlvbiwgdGhpcy5oZWlnaHQgKiB0aGlzLnJlc29sdXRpb24pO1xuXG4gICAgLyoqXG4gICAgICogRHJhdy9yZW5kZXIgdGhlIGdpdmVuIERpc3BsYXlPYmplY3Qgb250byB0aGUgdGV4dHVyZS5cbiAgICAgKlxuICAgICAqIFRoZSBkaXNwbGF5T2JqZWN0IGFuZCBkZXNjZW5kZW50cyBhcmUgdHJhbnNmb3JtZWQgZHVyaW5nIHRoaXMgb3BlcmF0aW9uLlxuICAgICAqIElmIGB1cGRhdGVUcmFuc2Zvcm1gIGlzIHRydWUgdGhlbiB0aGUgdHJhbnNmb3JtYXRpb25zIHdpbGwgYmUgcmVzdG9yZWQgYmVmb3JlIHRoZVxuICAgICAqIG1ldGhvZCByZXR1cm5zLiBPdGhlcndpc2UgaXQgaXMgdXAgdG8gdGhlIGNhbGxpbmcgY29kZSB0byBjb3JyZWN0bHkgdXNlIG9yIHJlc2V0XG4gICAgICogdGhlIHRyYW5zZm9ybWVkIGRpc3BsYXkgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIFRoZSBkaXNwbGF5IG9iamVjdCBpcyBhbHdheXMgcmVuZGVyZWQgd2l0aCBhIHdvcmxkQWxwaGEgdmFsdWUgb2YgMS5cbiAgICAgKlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcGFyYW0gZGlzcGxheU9iamVjdCB7RGlzcGxheU9iamVjdH0gVGhlIGRpc3BsYXkgb2JqZWN0IHRvIHJlbmRlciB0aGlzIHRleHR1cmUgb25cbiAgICAgKiBAcGFyYW0gW21hdHJpeF0ge01hdHJpeH0gT3B0aW9uYWwgbWF0cml4IHRvIGFwcGx5IHRvIHRoZSBkaXNwbGF5IG9iamVjdCBiZWZvcmUgcmVuZGVyaW5nLlxuICAgICAqIEBwYXJhbSBbY2xlYXI9ZmFsc2VdIHtib29sZWFufSBJZiB0cnVlIHRoZSB0ZXh0dXJlIHdpbGwgYmUgY2xlYXJlZCBiZWZvcmUgdGhlIGRpc3BsYXlPYmplY3QgaXMgZHJhd25cbiAgICAgKiBAcGFyYW0gW3VwZGF0ZVRyYW5zZm9ybT10cnVlXSB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGUgZGlzcGxheU9iamVjdCdzIHdvcmxkVHJhbnNmb3JtL3dvcmxkQWxwaGEgYW5kIGFsbCBjaGlsZHJlblxuICAgICAqICB0cmFuc2Zvcm1hdGlvbnMgd2lsbCBiZSByZXN0b3JlZC4gTm90IHJlc3RvcmluZyB0aGlzIGluZm9ybWF0aW9uIHdpbGwgYmUgYSBsaXR0bGUgZmFzdGVyLlxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlciB0aGlzIFJlbmRlclRleHR1cmUgdXNlcy4gQSBSZW5kZXJUZXh0dXJlIGNhbiBvbmx5IGJlbG9uZyB0byBvbmUgcmVuZGVyZXIgYXQgdGhlIG1vbWVudCBpZiBpdHMgd2ViR0wuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtDYW52YXNSZW5kZXJlcnxXZWJHTFJlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyLnR5cGUgPT09IENPTlNULlJFTkRFUkVSX1RZUEUuV0VCR0wpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgICAgIHRoaXMudGV4dHVyZUJ1ZmZlciA9IG5ldyBSZW5kZXJUYXJnZXQoZ2wsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBudWxsLCB0aGlzLnJlc29sdXRpb24pOy8vLCB0aGlzLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSk7XG4gICAgICAgIHRoaXMuYmFzZVRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdID0gIHRoaXMudGV4dHVyZUJ1ZmZlci50ZXh0dXJlO1xuXG4gICAgICAgIC8vVE9ETyByZWZhY3RvciBmaWx0ZXIgbWFuYWdlci4uIGFzIHJlYWxseSBpdHMgbm8gbG9uZ2VyIGEgbWFuYWdlciBpZiB3ZSB1c2UgaXQgaGVyZS4uXG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlciA9IG5ldyBGaWx0ZXJNYW5hZ2VyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIub25Db250ZXh0Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXJXZWJHTDtcblxuICAgICAgICAvLyB0aGUgY3JlYXRpb24gb2YgYSBmaWx0ZXIgbWFuYWdlciB1bmJpbmRzIHRoZSBidWZmZXJzLi5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyQ2FudmFzO1xuICAgICAgICB0aGlzLnRleHR1cmVCdWZmZXIgPSBuZXcgQ2FudmFzQnVmZmVyKHRoaXMud2lkdGgqIHRoaXMucmVzb2x1dGlvbiwgdGhpcy5oZWlnaHQqIHRoaXMucmVzb2x1dGlvbik7XG4gICAgICAgIHRoaXMuYmFzZVRleHR1cmUuc291cmNlID0gdGhpcy50ZXh0dXJlQnVmZmVyLmNhbnZhcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMudmFsaWQgPSB0cnVlO1xuXG4gICAgdGhpcy5fdXBkYXRlVXZzKCk7XG59XG5cblJlbmRlclRleHR1cmUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUZXh0dXJlLnByb3RvdHlwZSk7XG5SZW5kZXJUZXh0dXJlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlbmRlclRleHR1cmU7XG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlclRleHR1cmU7XG5cbi8qKlxuICogUmVzaXplcyB0aGUgUmVuZGVyVGV4dHVyZS5cbiAqXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIHdpZHRoIHRvIHJlc2l6ZSB0by5cbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIGhlaWdodCB0byByZXNpemUgdG8uXG4gKiBAcGFyYW0gdXBkYXRlQmFzZSB7Ym9vbGVhbn0gU2hvdWxkIHRoZSBiYXNlVGV4dHVyZS53aWR0aCBhbmQgaGVpZ2h0IHZhbHVlcyBiZSByZXNpemVkIGFzIHdlbGw/XG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB1cGRhdGVCYXNlKVxue1xuICAgIGlmICh3aWR0aCA9PT0gdGhpcy53aWR0aCAmJiBoZWlnaHQgPT09IHRoaXMuaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsaWQgPSAod2lkdGggPiAwICYmIGhlaWdodCA+IDApO1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuX2ZyYW1lLndpZHRoID0gdGhpcy5jcm9wLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSAgdGhpcy5fZnJhbWUuaGVpZ2h0ID0gdGhpcy5jcm9wLmhlaWdodCA9IGhlaWdodDtcblxuICAgIGlmICh1cGRhdGVCYXNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuYmFzZVRleHR1cmUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIudHlwZSA9PT0gQ09OU1QuUkVOREVSRVJfVFlQRS5XRUJHTClcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbi54ID0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbi55ID0gLXRoaXMuaGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudmFsaWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0dXJlQnVmZmVyLnJlc2l6ZSh0aGlzLndpZHRoICogdGhpcy5yZXNvbHV0aW9uLCB0aGlzLmhlaWdodCAqIHRoaXMucmVzb2x1dGlvbik7XG5cbiAgICBpZih0aGlzLmZpbHRlck1hbmFnZXIpXG4gICAge1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENsZWFycyB0aGUgUmVuZGVyVGV4dHVyZS5cbiAqXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAoIXRoaXMudmFsaWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIudHlwZSA9PT0gQ09OU1QuUkVOREVSRVJfVFlQRS5XRUJHTClcbiAgICB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMucmVuZGVyZXIuZ2wuRlJBTUVCVUZGRVIsIHRoaXMudGV4dHVyZUJ1ZmZlci5mcmFtZUJ1ZmZlcik7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0dXJlQnVmZmVyLmNsZWFyKCk7XG59O1xuXG4vKipcbiAqIEludGVybmFsIG1ldGhvZCBhc3NpZ25lZCB0byB0aGUgYHJlbmRlcmAgcHJvcGVydHkgaWYgdXNpbmcgYSBDYW52YXNSZW5kZXJlci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGRpc3BsYXlPYmplY3Qge0Rpc3BsYXlPYmplY3R9IFRoZSBkaXNwbGF5IG9iamVjdCB0byByZW5kZXIgdGhpcyB0ZXh0dXJlIG9uXG4gKiBAcGFyYW0gW21hdHJpeF0ge01hdHJpeH0gT3B0aW9uYWwgbWF0cml4IHRvIGFwcGx5IHRvIHRoZSBkaXNwbGF5IG9iamVjdCBiZWZvcmUgcmVuZGVyaW5nLlxuICogQHBhcmFtIFtjbGVhcj1mYWxzZV0ge2Jvb2xlYW59IElmIHRydWUgdGhlIHRleHR1cmUgd2lsbCBiZSBjbGVhcmVkIGJlZm9yZSB0aGUgZGlzcGxheU9iamVjdCBpcyBkcmF3blxuICogQHBhcmFtIFt1cGRhdGVUcmFuc2Zvcm09dHJ1ZV0ge2Jvb2xlYW59IElmIHRydWUgdGhlIGRpc3BsYXlPYmplY3QncyB3b3JsZFRyYW5zZm9ybS93b3JsZEFscGhhIGFuZCBhbGwgY2hpbGRyZW5cbiAqICB0cmFuc2Zvcm1hdGlvbnMgd2lsbCBiZSByZXN0b3JlZC4gTm90IHJlc3RvcmluZyB0aGlzIGluZm9ybWF0aW9uIHdpbGwgYmUgYSBsaXR0bGUgZmFzdGVyLlxuICovXG5SZW5kZXJUZXh0dXJlLnByb3RvdHlwZS5yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChkaXNwbGF5T2JqZWN0LCBtYXRyaXgsIGNsZWFyLCB1cGRhdGVUcmFuc2Zvcm0pXG57XG4gICAgaWYgKCF0aGlzLnZhbGlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vVE9ETyB0aGlzIHNob3VsZCBiZSB0cnVlIGJ5IGRlZmF1bHRcbiAgICB1cGRhdGVUcmFuc2Zvcm0gPSAhIXVwZGF0ZVRyYW5zZm9ybTtcblxuICAgIHRoaXMudGV4dHVyZUJ1ZmZlci50cmFuc2Zvcm0gPSBtYXRyaXg7XG5cblxuICAgIC8vIHNldFdvcmxkIEFscGhhIHRvIGVuc3VyZSB0aGF0IHRoZSBvYmplY3QgaXMgcmVuZGVyZXIgYXQgZnVsbCBvcGFjaXR5XG4gICAgZGlzcGxheU9iamVjdC53b3JsZEFscGhhID0gZGlzcGxheU9iamVjdC5hbHBoYTtcblxuICAgIGlmICh1cGRhdGVUcmFuc2Zvcm0pXG4gICAge1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBtYXRyaXggb2YgdGhlIGRpc3BsYXR5T2JqZWN0Li5cbiAgICAgICAgZGlzcGxheU9iamVjdC53b3JsZFRyYW5zZm9ybS5pZGVudGl0eSgpO1xuXG4gICAgICAgIGRpc3BsYXlPYmplY3QuY3VycmVudEJvdW5kcyA9IG51bGw7XG5cbiAgICAgICAgLy8gVGltZSB0byB1cGRhdGUgYWxsIHRoZSBjaGlsZHJlbiBvZiB0aGUgZGlzcGxheU9iamVjdCB3aXRoIHRoZSBuZXcgbWF0cml4Li5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gZGlzcGxheU9iamVjdC5jaGlsZHJlbjtcbiAgICAgICAgdmFyIGksIGo7XG5cbiAgICAgICAgZm9yIChpID0gMCwgaiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRyZW5baV0udXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgaWYgKGNsZWFyKVxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlQnVmZmVyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy9UT0RPIHJlbmFtZSB0ZXh0dXJlQnVmZmVyIHRvIHJlbmRlclRhcmdldC4uXG4gICAgdmFyIHRlbXAgPSAgdGhpcy5yZW5kZXJlci5maWx0ZXJNYW5hZ2VyO1xuXG4gICAgdGhpcy5yZW5kZXJlci5maWx0ZXJNYW5hZ2VyID0gdGhpcy5maWx0ZXJNYW5hZ2VyO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRGlzcGxheU9iamVjdChkaXNwbGF5T2JqZWN0LCB0aGlzLnRleHR1cmVCdWZmZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5maWx0ZXJNYW5hZ2VyID0gdGVtcDtcblxuXG59O1xuXG5cbi8qKlxuICogSW50ZXJuYWwgbWV0aG9kIGFzc2lnbmVkIHRvIHRoZSBgcmVuZGVyYCBwcm9wZXJ0eSBpZiB1c2luZyBhIENhbnZhc1JlbmRlcmVyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZGlzcGxheU9iamVjdCB7RGlzcGxheU9iamVjdH0gVGhlIGRpc3BsYXkgb2JqZWN0IHRvIHJlbmRlciB0aGlzIHRleHR1cmUgb25cbiAqIEBwYXJhbSBbbWF0cml4XSB7TWF0cml4fSBPcHRpb25hbCBtYXRyaXggdG8gYXBwbHkgdG8gdGhlIGRpc3BsYXkgb2JqZWN0IGJlZm9yZSByZW5kZXJpbmcuXG4gKiBAcGFyYW0gW2NsZWFyXSB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGUgdGV4dHVyZSB3aWxsIGJlIGNsZWFyZWQgYmVmb3JlIHRoZSBkaXNwbGF5T2JqZWN0IGlzIGRyYXduXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLnJlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChkaXNwbGF5T2JqZWN0LCBtYXRyaXgsIGNsZWFyLCB1cGRhdGVUcmFuc2Zvcm0pXG57XG4gICAgaWYgKCF0aGlzLnZhbGlkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZVRyYW5zZm9ybSA9ICEhdXBkYXRlVHJhbnNmb3JtO1xuICAgIHZhciBjYWNoZWRXdCA9IGRpc3BsYXlPYmplY3Qud29ybGRUcmFuc2Zvcm07XG5cbiAgICB2YXIgd3QgPSB0ZW1wTWF0cml4O1xuXG4gICAgd3QuaWRlbnRpdHkoKTtcblxuICAgIGlmIChtYXRyaXgpXG4gICAge1xuICAgICAgICB3dC5hcHBlbmQobWF0cml4KTtcbiAgICB9XG5cbiAgICBkaXNwbGF5T2JqZWN0LndvcmxkVHJhbnNmb3JtID0gd3Q7XG5cbiAgICAvLyBzZXRXb3JsZCBBbHBoYSB0byBlbnN1cmUgdGhhdCB0aGUgb2JqZWN0IGlzIHJlbmRlcmVyIGF0IGZ1bGwgb3BhY2l0eVxuICAgIGRpc3BsYXlPYmplY3Qud29ybGRBbHBoYSA9IDE7XG5cbiAgICAvLyBUaW1lIHRvIHVwZGF0ZSBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNwbGF5T2JqZWN0IHdpdGggdGhlIG5ldyBtYXRyaXguLlxuICAgIHZhciBjaGlsZHJlbiA9IGRpc3BsYXlPYmplY3QuY2hpbGRyZW47XG4gICAgdmFyIGksIGo7XG5cbiAgICBmb3IgKGkgPSAwLCBqID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgIHtcbiAgICAgICAgY2hpbGRyZW5baV0udXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgfVxuXG4gICAgaWYgKGNsZWFyKVxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlQnVmZmVyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheU9iamVjdC53b3JsZFRyYW5zZm9ybSA9IGNhY2hlZFd0O1xuXG4vLyAgICB0aGlzLnRleHR1cmVCdWZmZXIuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLnRleHR1cmVCdWZmZXIuY29udGV4dDtcblxuICAgIHZhciByZWFsUmVzb2x1dGlvbiA9IHRoaXMucmVuZGVyZXIucmVzb2x1dGlvbjtcblxuICAgIHRoaXMucmVuZGVyZXIucmVzb2x1dGlvbiA9IHRoaXMucmVzb2x1dGlvbjtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRGlzcGxheU9iamVjdChkaXNwbGF5T2JqZWN0LCBjb250ZXh0KTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVzb2x1dGlvbiA9IHJlYWxSZXNvbHV0aW9uO1xuIC8vICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9XCIjRkYwMDAwXCJcbi8vICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgODAwLCA2MDApO1xuXG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoaXMgdGV4dHVyZVxuICpcbiAqIEBwYXJhbSBkZXN0cm95QmFzZSB7Ym9vbGVhbn0gV2hldGhlciB0byBkZXN0cm95IHRoZSBiYXNlIHRleHR1cmUgYXMgd2VsbFxuICovXG5SZW5kZXJUZXh0dXJlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICBUZXh0dXJlLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcywgdHJ1ZSk7XG5cbiAgICB0aGlzLnRleHR1cmVCdWZmZXIuZGVzdHJveSgpO1xuXG4gICAgLy8gZGVzdHJveSB0aGUgZmlsdGVybWFuYWdlci4uXG4gICAgaWYodGhpcy5maWx0ZXJNYW5hZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbn07XG5cbi8qKlxuICogV2lsbCByZXR1cm4gYSBIVE1MIEltYWdlIG9mIHRoZSB0ZXh0dXJlXG4gKlxuICogQHJldHVybiB7SW1hZ2V9XG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSB0aGlzLmdldEJhc2U2NCgpO1xuICAgIHJldHVybiBpbWFnZTtcbn07XG5cbi8qKlxuICogV2lsbCByZXR1cm4gYSBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBvZiB0aGlzIHRleHR1cmUuIEl0IHdvcmtzIGJ5IGNhbGxpbmcgUmVuZGVyVGV4dHVyZS5nZXRDYW52YXMgYW5kIHRoZW4gcnVubmluZyB0b0RhdGFVUkwgb24gdGhhdC5cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9mIHRoZSB0ZXh0dXJlLlxuICovXG5SZW5kZXJUZXh0dXJlLnByb3RvdHlwZS5nZXRCYXNlNjQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiB0aGlzLmdldENhbnZhcygpLnRvRGF0YVVSTCgpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgQ2FudmFzIGVsZW1lbnQsIHJlbmRlcnMgdGhpcyBSZW5kZXJUZXh0dXJlIHRvIGl0IGFuZCB0aGVuIHJldHVybnMgaXQuXG4gKlxuICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IEEgQ2FudmFzIGVsZW1lbnQgd2l0aCB0aGUgdGV4dHVyZSByZW5kZXJlZCBvbi5cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAodGhpcy5yZW5kZXJlci50eXBlID09PSBDT05TVC5SRU5ERVJFUl9UWVBFLldFQkdMKVxuICAgIHtcbiAgICAgICAgdmFyIGdsID0gIHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMudGV4dHVyZUJ1ZmZlci53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMudGV4dHVyZUJ1ZmZlci5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIHdlYkdMUGl4ZWxzID0gbmV3IFVpbnQ4QXJyYXkoNCAqIHdpZHRoICogaGVpZ2h0KTtcblxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMudGV4dHVyZUJ1ZmZlci5mcmFtZUJ1ZmZlcik7XG4gICAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgd2lkdGgsIGhlaWdodCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgd2ViR0xQaXhlbHMpO1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuXG4gICAgICAgIHZhciB0ZW1wQ2FudmFzID0gbmV3IENhbnZhc0J1ZmZlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0ZW1wQ2FudmFzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjYW52YXNEYXRhLmRhdGEuc2V0KHdlYkdMUGl4ZWxzKTtcblxuICAgICAgICB0ZW1wQ2FudmFzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGNhbnZhc0RhdGEsIDAsIDApO1xuXG4gICAgICAgIHJldHVybiB0ZW1wQ2FudmFzLmNhbnZhcztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZUJ1ZmZlci5jYW52YXM7XG4gICAgfVxufTtcbiIsInZhciBCYXNlVGV4dHVyZSA9IHJlcXVpcmUoJy4vQmFzZVRleHR1cmUnKSxcbiAgICBWaWRlb0Jhc2VUZXh0dXJlID0gcmVxdWlyZSgnLi9WaWRlb0Jhc2VUZXh0dXJlJyksXG4gICAgVGV4dHVyZVV2cyA9IHJlcXVpcmUoJy4vVGV4dHVyZVV2cycpLFxuICAgIGV2ZW50VGFyZ2V0ID0gcmVxdWlyZSgnLi4vdXRpbHMvZXZlbnRUYXJnZXQnKSxcbiAgICBtYXRoID0gcmVxdWlyZSgnLi4vbWF0aCcpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBBIHRleHR1cmUgc3RvcmVzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHJlcHJlc2VudHMgYW4gaW1hZ2Ugb3IgcGFydCBvZiBhbiBpbWFnZS4gSXQgY2Fubm90IGJlIGFkZGVkXG4gKiB0byB0aGUgZGlzcGxheSBsaXN0IGRpcmVjdGx5LiBJbnN0ZWFkIHVzZSBpdCBhcyB0aGUgdGV4dHVyZSBmb3IgYSBTcHJpdGUuIElmIG5vIGZyYW1lIGlzIHByb3ZpZGVkIHRoZW4gdGhlIHdob2xlIGltYWdlIGlzIHVzZWQuXG4gKlxuICogWW91IGNhbiBkaXJlY3RseSBjcmVhdGUgYSB0ZXh0dXJlIGZyb20gYW4gaW1hZ2UgYW5kIHRoZW4gcmV1c2UgaXQgbXVsdGlwbGUgdGltZXMgbGlrZSB0aGlzIDpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdhc3NldHMvaW1hZ2UucG5nJyk7XG4gKiB2YXIgc3ByaXRlMSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKTtcbiAqIHZhciBzcHJpdGUyID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpO1xuICogYGBgXG4gKlxuICogQGNsYXNzXG4gKiBAbWl4ZXMgZXZlbnRUYXJnZXRcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gYmFzZVRleHR1cmUge0Jhc2VUZXh0dXJlfSBUaGUgYmFzZSB0ZXh0dXJlIHNvdXJjZSB0byBjcmVhdGUgdGhlIHRleHR1cmUgZnJvbVxuICogQHBhcmFtIFtmcmFtZV0ge1JlY3RhbmdsZX0gVGhlIHJlY3RhbmdsZSBmcmFtZSBvZiB0aGUgdGV4dHVyZSB0byBzaG93XG4gKiBAcGFyYW0gW2Nyb3BdIHtSZWN0YW5nbGV9IFRoZSBhcmVhIG9mIG9yaWdpbmFsIHRleHR1cmVcbiAqIEBwYXJhbSBbdHJpbV0ge1JlY3RhbmdsZX0gVHJpbW1lZCB0ZXh0dXJlIHJlY3RhbmdsZVxuICogQHBhcmFtIFtyb3RhdGVdIHtib29sZWFufSBpbmRpY2F0ZXMgd2hldGhlciB0aGUgdGV4dHVyZSBzaG91bGQgYmUgcm90YXRlZCBieSA5MCBkZWdyZWVzICggdXNlZCBieSB0ZXh0dXJlIHBhY2tlciApXG4gKi9cbmZ1bmN0aW9uIFRleHR1cmUoYmFzZVRleHR1cmUsIGZyYW1lLCBjcm9wLCB0cmltLCByb3RhdGUpXG57XG4gICAgLyoqXG4gICAgICogRG9lcyB0aGlzIFRleHR1cmUgaGF2ZSBhbnkgZnJhbWUgZGF0YSBhc3NpZ25lZCB0byBpdD9cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5ub0ZyYW1lID0gZmFsc2U7XG5cbiAgICBpZiAoIWZyYW1lKVxuICAgIHtcbiAgICAgICAgdGhpcy5ub0ZyYW1lID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUgPSBuZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgMSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKGJhc2VUZXh0dXJlIGluc3RhbmNlb2YgVGV4dHVyZSlcbiAgICB7XG4gICAgICAgIGJhc2VUZXh0dXJlID0gYmFzZVRleHR1cmUuYmFzZVRleHR1cmU7XG4gICAgfVxuXG4gIC8vICBjb25zb2xlLmxvZyhmcmFtZSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZSB0ZXh0dXJlIHRoYXQgdGhpcyB0ZXh0dXJlIHVzZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtCYXNlVGV4dHVyZX1cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VUZXh0dXJlID0gYmFzZVRleHR1cmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZnJhbWUgc3BlY2lmaWVzIHRoZSByZWdpb24gb2YgdGhlIGJhc2UgdGV4dHVyZSB0aGF0IHRoaXMgdGV4dHVyZSB1c2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHR1cmUgdHJpbSBkYXRhLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqL1xuICAgIHRoaXMudHJpbSA9IHRyaW07XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgbGV0IHRoZSByZW5kZXJlciBrbm93IGlmIHRoZSB0ZXh0dXJlIGlzIHZhbGlkLiBJZiBpdCdzIG5vdCB0aGVuIGl0IGNhbm5vdCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy52YWxpZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGxldCBhIHJlbmRlcmVyIGtub3cgdGhhdCBhIHRleHR1cmUgaGFzIGJlZW4gdXBkYXRlZCAodXNlZCBtYWlubHkgZm9yIHdlYkdMIHV2IHVwZGF0ZXMpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVxdWlyZXNVcGRhdGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBXZWJHTCBVViBkYXRhIGNhY2hlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7VGV4dHVyZVV2c31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3V2cyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIFRleHR1cmUgaW4gcGl4ZWxzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgVGV4dHVyZSBpbiBwaXhlbHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgYXJlYSBvZiB0aGUgQmFzZVRleHR1cmUgaW1hZ2UgdG8gYWN0dWFsbHkgY29weSB0byB0aGUgQ2FudmFzIC8gV2ViR0wgd2hlbiByZW5kZXJpbmcsXG4gICAgICogaXJyZXNwZWN0aXZlIG9mIHRoZSBhY3R1YWwgZnJhbWUgc2l6ZSBvciBwbGFjZW1lbnQgKHdoaWNoIGNhbiBiZSBpbmZsdWVuY2VkIGJ5IHRyaW1tZWQgdGV4dHVyZSBhdGxhc2VzKVxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqL1xuICAgIHRoaXMuY3JvcCA9IGNyb3AgfHwgZnJhbWU7Ly9uZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgMSwgMSk7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdGV4dHVyZSBzaG91bGQgYmUgcm90YXRlZCBieSA5MCBkZWdyZWVzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yb3RhdGUgPSAhIXJvdGF0ZTtcblxuICAgIGlmIChiYXNlVGV4dHVyZS5oYXNMb2FkZWQpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5ub0ZyYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBmcmFtZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCBiYXNlVGV4dHVyZS53aWR0aCwgYmFzZVRleHR1cmUuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGJhc2VUZXh0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZCcsIHRoaXMub25CYXNlVGV4dHVyZUxvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cblRleHR1cmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGV4dHVyZTtcbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZTtcblxuZXZlbnRUYXJnZXQubWl4aW4oVGV4dHVyZS5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhUZXh0dXJlLnByb3RvdHlwZSwge1xuICAgIGZyYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZyYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmcmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgICAgICAgICAgdGhpcy5ub0ZyYW1lID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBmcmFtZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gZnJhbWUuaGVpZ2h0O1xuXG5cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaW0gJiYgIXRoaXMucm90YXRlICYmIChmcmFtZS54ICsgZnJhbWUud2lkdGggPiB0aGlzLmJhc2VUZXh0dXJlLndpZHRoIHx8IGZyYW1lLnkgKyBmcmFtZS5oZWlnaHQgPiB0aGlzLmJhc2VUZXh0dXJlLmhlaWdodCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0dXJlIEVycm9yOiBmcmFtZSBkb2VzIG5vdCBmaXQgaW5zaWRlIHRoZSBiYXNlIFRleHR1cmUgZGltZW5zaW9ucyAnICsgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vdGhpcy52YWxpZCA9IGZyYW1lICYmIGZyYW1lLndpZHRoICYmIGZyYW1lLmhlaWdodCAmJiB0aGlzLmJhc2VUZXh0dXJlLnNvdXJjZSAmJiB0aGlzLmJhc2VUZXh0dXJlLmhhc0xvYWRlZDtcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSBmcmFtZSAmJiBmcmFtZS53aWR0aCAmJiBmcmFtZS5oZWlnaHQgJiYgdGhpcy5iYXNlVGV4dHVyZS5oYXNMb2FkZWQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRyaW0pXG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy50cmltLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy50cmltLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS53aWR0aCA9IHRoaXMudHJpbS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS5oZWlnaHQgPSB0aGlzLnRyaW0uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JvcCA9IGZyYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgaWYgKHRoaXMudmFsaWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVXZzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoaXMgdGV4dHVyZSBvbiB0aGUgZ3B1LlxuICpcbiAqL1xuVGV4dHVyZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmJhc2VUZXh0dXJlLnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgYmFzZSB0ZXh0dXJlIGlzIGxvYWRlZFxuICpcbiAqIEBwcml2YXRlXG4gKi9cblRleHR1cmUucHJvdG90eXBlLm9uQmFzZVRleHR1cmVMb2FkZWQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBiYXNlVGV4dHVyZSA9IHRoaXMuYmFzZVRleHR1cmU7XG4gICAgYmFzZVRleHR1cmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZGVkJywgdGhpcy5vbkxvYWRlZCk7XG5cbiAgICAvLyBUT0RPIHRoaXMgY29kZSBsb29rcyBjb25mdXNpbmcuLiBib28gdG8gYWJ1c2luZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzcyFcbiAgICBpZiAodGhpcy5ub0ZyYW1lKVxuICAgIHtcbiAgICAgICAgdGhpcy5mcmFtZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCBiYXNlVGV4dHVyZS53aWR0aCwgYmFzZVRleHR1cmUuaGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuX2ZyYW1lO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCggJ3VwZGF0ZScsIHRoaXMgKTtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyB0ZXh0dXJlXG4gKlxuICogQHBhcmFtIGRlc3Ryb3lCYXNlIHtib29sZWFufSBXaGV0aGVyIHRvIGRlc3Ryb3kgdGhlIGJhc2UgdGV4dHVyZSBhcyB3ZWxsXG4gKi9cblRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZGVzdHJveUJhc2UpXG57XG4gICAgaWYgKGRlc3Ryb3lCYXNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy52YWxpZCA9IGZhbHNlO1xufTtcblxuVGV4dHVyZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgVGV4dHVyZSh0aGlzLmJhc2VUZXh0dXJlLCB0aGlzLmZyYW1lLCB0aGlzLmNyb3AsIHRoaXMudHJpbSwgdGhpcy5yb3RhdGUpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBpbnRlcm5hbCBXZWJHTCBVViBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5UZXh0dXJlLnByb3RvdHlwZS5fdXBkYXRlVXZzID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAoIXRoaXMuX3V2cylcbiAgICB7XG4gICAgICAgIHRoaXMuX3V2cyA9IG5ldyBUZXh0dXJlVXZzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXZzLnNldCh0aGlzLmNyb3AsIHRoaXMuYmFzZVRleHR1cmUsIHRoaXMucm90YXRlKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIFRleHR1cmUgb2JqZWN0IGZyb20gdGhlIGdpdmVuIGltYWdlIHVybC5cbiAqIElmIHRoZSBpbWFnZSBpcyBub3QgaW4gdGhlIHRleHR1cmUgY2FjaGUgaXQgd2lsbCBiZSAgY3JlYXRlZCBhbmQgbG9hZGVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBpbWFnZVVybCB7c3RyaW5nfSBUaGUgaW1hZ2UgdXJsIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcGFyYW0gY3Jvc3NvcmlnaW4ge2Jvb2xlYW59IFdoZXRoZXIgcmVxdWVzdHMgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgY3Jvc3NvcmlnaW5cbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2VlIHt7I2Nyb3NzTGluayBcIlBJWEkvc2NhbGVNb2Rlczpwcm9wZXJ0eVwifX1zY2FsZU1vZGVze3svY3Jvc3NMaW5rfX0gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VGV4dHVyZX0gVGhlIG5ld2x5IGNyZWF0ZWQgdGV4dHVyZVxuICovXG5UZXh0dXJlLmZyb21JbWFnZSA9IGZ1bmN0aW9uIChpbWFnZVVybCwgY3Jvc3NvcmlnaW4sIHNjYWxlTW9kZSlcbntcbiAgICB2YXIgdGV4dHVyZSA9IHV0aWxzLlRleHR1cmVDYWNoZVtpbWFnZVVybF07XG5cbiAgICBpZiAoIXRleHR1cmUpXG4gICAge1xuICAgICAgICB0ZXh0dXJlID0gbmV3IFRleHR1cmUoQmFzZVRleHR1cmUuZnJvbUltYWdlKGltYWdlVXJsLCBjcm9zc29yaWdpbiwgc2NhbGVNb2RlKSk7XG4gICAgICAgIHV0aWxzLlRleHR1cmVDYWNoZVtpbWFnZVVybF0gPSB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgc3ByaXRlIHRoYXQgd2lsbCBjb250YWluIGEgdGV4dHVyZSBmcm9tIHRoZSBUZXh0dXJlQ2FjaGUgYmFzZWQgb24gdGhlIGZyYW1lSWRcbiAqIFRoZSBmcmFtZSBpZHMgYXJlIGNyZWF0ZWQgd2hlbiBhIFRleHR1cmUgcGFja2VyIGZpbGUgaGFzIGJlZW4gbG9hZGVkXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGZyYW1lSWQge1N0cmluZ30gVGhlIGZyYW1lIElkIG9mIHRoZSB0ZXh0dXJlIGluIHRoZSBjYWNoZVxuICogQHJldHVybiB7VGV4dHVyZX0gVGhlIG5ld2x5IGNyZWF0ZWQgdGV4dHVyZVxuICovXG5UZXh0dXJlLmZyb21GcmFtZSA9IGZ1bmN0aW9uIChmcmFtZUlkKVxue1xuICAgIHZhciB0ZXh0dXJlID0gdXRpbHMuVGV4dHVyZUNhY2hlW2ZyYW1lSWRdO1xuXG4gICAgaWYgKCF0ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZnJhbWVJZCBcIicgKyBmcmFtZUlkICsgJ1wiIGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZXh0dXJlIGNhY2hlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgVGV4dHVyZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gY2FudmFzIGVsZW1lbnQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGNhbnZhcyB7Q2FudmFzfSBUaGUgY2FudmFzIGVsZW1lbnQgc291cmNlIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7eyNjcm9zc0xpbmsgXCJQSVhJL3NjYWxlTW9kZXM6cHJvcGVydHlcIn19c2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1RleHR1cmV9XG4gKi9cblRleHR1cmUuZnJvbUNhbnZhcyA9IGZ1bmN0aW9uIChjYW52YXMsIHNjYWxlTW9kZSlcbntcbiAgICByZXR1cm4gbmV3IFRleHR1cmUoQmFzZVRleHR1cmUuZnJvbUNhbnZhcyhjYW52YXMsIHNjYWxlTW9kZSkpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IFRleHR1cmUgYmFzZWQgb24gdGhlIGdpdmVuIHZpZGVvIGVsZW1lbnQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHZpZGVvIHtIVE1MVmlkZW9FbGVtZW50fVxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fXNjYWxlTW9kZXN7ey9jcm9zc0xpbmt9fSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBBIFRleHR1cmVcbiAqL1xuVGV4dHVyZS5mcm9tVmlkZW8gPSBmdW5jdGlvbiAodmlkZW8sIHNjYWxlTW9kZSlcbntcbiAgICByZXR1cm4gbmV3IFRleHR1cmUoVmlkZW9CYXNlVGV4dHVyZS5iYXNlVGV4dHVyZUZyb21WaWRlbyh2aWRlbywgc2NhbGVNb2RlKSk7XG59O1xuXG5UZXh0dXJlLmZyb21WaWRlb1VybCA9IGZ1bmN0aW9uICh2aWRlb1VybCwgc2NhbGVNb2RlKVxue1xuICAgIHJldHVybiBuZXcgVGV4dHVyZShWaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmwodmlkZW9VcmwsIHNjYWxlTW9kZSkpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgdGV4dHVyZSB0byB0aGUgZ2xvYmFsIHV0aWxzLlRleHR1cmVDYWNoZS4gVGhpcyBjYWNoZSBpcyBzaGFyZWQgYWNyb3NzIHRoZSB3aG9sZSBQSVhJIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gdGV4dHVyZSB7VGV4dHVyZX0gVGhlIFRleHR1cmUgdG8gYWRkIHRvIHRoZSBjYWNoZS5cbiAqIEBwYXJhbSBpZCB7c3RyaW5nfSBUaGUgaWQgdGhhdCB0aGUgdGV4dHVyZSB3aWxsIGJlIHN0b3JlZCBhZ2FpbnN0LlxuICovXG5UZXh0dXJlLmFkZFRleHR1cmVUb0NhY2hlID0gZnVuY3Rpb24gKHRleHR1cmUsIGlkKVxue1xuICAgIHV0aWxzLlRleHR1cmVDYWNoZVtpZF0gPSB0ZXh0dXJlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSB0ZXh0dXJlIGZyb20gdGhlIGdsb2JhbCB1dGlscy5UZXh0dXJlQ2FjaGUuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGlkIHtzdHJpbmd9IFRoZSBpZCBvZiB0aGUgdGV4dHVyZSB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJuIHtUZXh0dXJlfSBUaGUgdGV4dHVyZSB0aGF0IHdhcyByZW1vdmVkXG4gKi9cblRleHR1cmUucmVtb3ZlVGV4dHVyZUZyb21DYWNoZSA9IGZ1bmN0aW9uIChpZClcbntcbiAgICB2YXIgdGV4dHVyZSA9IHV0aWxzLlRleHR1cmVDYWNoZVtpZF07XG5cbiAgICBkZWxldGUgdXRpbHMuVGV4dHVyZUNhY2hlW2lkXTtcbiAgICBkZWxldGUgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtpZF07XG5cbiAgICByZXR1cm4gdGV4dHVyZTtcbn07XG5cblRleHR1cmUuZW1wdHlUZXh0dXJlID0gbmV3IFRleHR1cmUobmV3IEJhc2VUZXh0dXJlKCkpO1xuIiwiXG4vKipcbiAqIEEgc3RhbmRhcmQgb2JqZWN0IHRvIHN0b3JlIHRoZSBVdnMgb2YgYSB0ZXh0dXJlXG4gKlxuICogQGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBUZXh0dXJlVXZzKClcbntcbiAgICB0aGlzLngwID0gMDtcbiAgICB0aGlzLnkwID0gMDtcblxuICAgIHRoaXMueDEgPSAwO1xuICAgIHRoaXMueTEgPSAwO1xuXG4gICAgdGhpcy54MiA9IDA7XG4gICAgdGhpcy55MiA9IDA7XG5cbiAgICB0aGlzLngzID0gMDtcbiAgICB0aGlzLnkzID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlVXZzO1xuXG4vKipcbiAqIFNldHMgdGhlIHRleHR1cmUgVXZzIGJhc2VkIG9uIHRoZSBnaXZlbiBmcmFtZSBpbmZvcm1hdGlvblxuICogQHBhcmFtIGZyYW1lIHtSZWN0YW5nbGV9XG4gKiBAcGFyYW0gYmFzZUZyYW1lIHtSZWN0YW5nbGV9XG4gKiBAcGFyYW0gcm90YXRlIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUgZnJhbWUgaXMgcm90YXRlZFxuICogQHByaXZhdGVcbiAqL1xuVGV4dHVyZVV2cy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGZyYW1lLCBiYXNlRnJhbWUsIHJvdGF0ZSlcbntcbiAgICB2YXIgdHcgPSBiYXNlRnJhbWUud2lkdGg7XG4gICAgdmFyIHRoID0gYmFzZUZyYW1lLmhlaWdodDtcblxuICAgIGlmKHJvdGF0ZSlcbiAgICB7XG4gICAgICAgIHRoaXMueDAgPSAoZnJhbWUueCArIGZyYW1lLmhlaWdodCkgLyB0dztcbiAgICAgICAgdGhpcy55MCA9IGZyYW1lLnkgLyB0aDtcblxuICAgICAgICB0aGlzLngxID0gKGZyYW1lLnggKyBmcmFtZS5oZWlnaHQpIC8gdHc7XG4gICAgICAgIHRoaXMueTEgPSAoZnJhbWUueSArIGZyYW1lLndpZHRoKSAvIHRoO1xuXG4gICAgICAgIHRoaXMueDIgPSBmcmFtZS54IC8gdHc7XG4gICAgICAgIHRoaXMueTIgPSAoZnJhbWUueSArIGZyYW1lLndpZHRoKSAvIHRoO1xuXG4gICAgICAgIHRoaXMueDMgPSBmcmFtZS54IC8gdHc7XG4gICAgICAgIHRoaXMueTMgPSBmcmFtZS55IC8gdGg7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG5cbiAgICAgICAgdGhpcy54MCA9IGZyYW1lLnggLyB0dztcbiAgICAgICAgdGhpcy55MCA9IGZyYW1lLnkgLyB0aDtcblxuICAgICAgICB0aGlzLngxID0gKGZyYW1lLnggKyBmcmFtZS53aWR0aCkgLyB0dztcbiAgICAgICAgdGhpcy55MSA9IGZyYW1lLnkgLyB0aDtcblxuICAgICAgICB0aGlzLngyID0gKGZyYW1lLnggKyBmcmFtZS53aWR0aCkgLyB0dztcbiAgICAgICAgdGhpcy55MiA9IChmcmFtZS55ICsgZnJhbWUuaGVpZ2h0KSAvIHRoO1xuXG4gICAgICAgIHRoaXMueDMgPSBmcmFtZS54IC8gdHc7XG4gICAgICAgIHRoaXMueTMgPSAoZnJhbWUueSArIGZyYW1lLmhlaWdodCkgLyB0aDtcbiAgICB9XG59O1xuIiwidmFyIEJhc2VUZXh0dXJlID0gcmVxdWlyZSgnLi9CYXNlVGV4dHVyZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBBIHRleHR1cmUgb2YgYSBbcGxheWluZ10gVmlkZW8uXG4gKlxuICogVmlkZW8gYmFzZSB0ZXh0dXJlcyBtaW1pYyBQaXhpIEJhc2VUZXh0dXJlLmZyb20uLi4uIG1ldGhvZCBpbiB0aGVpciBjcmVhdGlvbiBwcm9jZXNzLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgaW4gc2V2ZXJhbCB3YXlzLCBzdWNoIGFzOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgdGV4dHVyZSA9IFBJWEkuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJsKCdodHRwOi8vbXlkb21haW4uY29tL3ZpZGVvLm1wNCcpO1xuICpcbiAqIHZhciB0ZXh0dXJlID0gUElYSS5WaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmwoeyBzcmM6ICdodHRwOi8vbXlkb21haW4uY29tL3ZpZGVvLm1wNCcsIG1pbWU6ICd2aWRlby9tcDQnIH0pO1xuICpcbiAqIHZhciB0ZXh0dXJlID0gUElYSS5WaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmxzKFsnL3ZpZGVvLndlYm0nLCAnL3ZpZGVvLm1wNCddKTtcbiAqXG4gKiB2YXIgdGV4dHVyZSA9IFBJWEkuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJscyhbXG4gKiAgICAgeyBzcmM6ICcvdmlkZW8ud2VibScsIG1pbWU6ICd2aWRlby93ZWJtJyB9LFxuICogICAgIHsgc3JjOiAnL3ZpZGVvLm1wNCcsIG1pbWU6ICd2aWRlby9tcDQnIH1cbiAqIF0pO1xuICogYGBgXG4gKlxuICogU2VlIHRoZSBbXCJkZXVzXCIgZGVtb10oaHR0cDovL3d3dy5nb29kYm95ZGlnaXRhbC5jb20vcGl4aWpzL2V4YW1wbGVzL2RldXMvKS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIEJhc2VUZXh0dXJlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHNvdXJjZSB7SFRNTFZpZGVvRWxlbWVudH1cbiAqIEBwYXJhbSBbc2NhbGVNb2RlXSB7bnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIFZpZGVvQmFzZVRleHR1cmUoc291cmNlLCBzY2FsZU1vZGUpXG57XG4gICAgaWYgKCFzb3VyY2UpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZpZGVvIHNvdXJjZSBlbGVtZW50IHNwZWNpZmllZC4nKTtcbiAgICB9XG5cbiAgICAvLyBob29rIGluIGhlcmUgdG8gY2hlY2sgaWYgdmlkZW8gaXMgYWxyZWFkeSBhdmFpbGFibGUuXG4gICAgLy8gQmFzZVRleHR1cmUgbG9va3MgZm9yIGEgc291cmNlLmNvbXBsZXRlIGJvb2xlYW4sIHBsdXMgd2lkdGggJiBoZWlnaHQuXG5cbiAgICBpZiAoKHNvdXJjZS5yZWFkeVN0YXRlID09PSBzb3VyY2UuSEFWRV9FTk9VR0hfREFUQSB8fCBzb3VyY2UucmVhZHlTdGF0ZSA9PT0gc291cmNlLkhBVkVfRlVUVVJFX0RBVEEpICYmIHNvdXJjZS53aWR0aCAmJiBzb3VyY2UuaGVpZ2h0KVxuICAgIHtcbiAgICAgICAgc291cmNlLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBCYXNlVGV4dHVyZS5jYWxsKHRoaXMsIHNvdXJjZSwgc2NhbGVNb2RlKTtcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCB0aGUgYmFzZSB0ZXh0dXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlIGl0c2VsZiwgc2V0IHRvIHRydWUgYnkgZGVmYXVsdFxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgdGhpcy5hdXRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9vblVwZGF0ZSA9IHRoaXMuX29uVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DYW5QbGF5ID0gdGhpcy5fb25DYW5QbGF5LmJpbmQodGhpcyk7XG5cbiAgICBpZiAoIXNvdXJjZS5jb21wbGV0ZSlcbiAgICB7XG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgdGhpcy5fb25DYW5QbGF5KTtcbiAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5fb25DYW5QbGF5KTtcblxuICAgICAgICAvLyBzdGFydGVkIHBsYXlpbmcuLlxuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMuX29uUGxheVN0YXJ0LmJpbmQodGhpcykpO1xuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCB0aGlzLl9vblBsYXlTdG9wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX19sb2FkZWQgPSBmYWxzZTtcbn1cblxuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VUZXh0dXJlLnByb3RvdHlwZSk7XG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZpZGVvQmFzZVRleHR1cmU7XG5tb2R1bGUuZXhwb3J0cyA9IFZpZGVvQmFzZVRleHR1cmU7XG5cbi8qKlxuICogVGhlIGludGVybmFsIHVwZGF0ZSBsb29wIG9mIHRoZSB2aWRlbyBiYXNlIHRleHR1cmUsIG9ubHkgcnVucyB3aGVuIGF1dG9VcGRhdGUgaXMgc2V0IHRvIHRydWVcbiAqIEBwcml2YXRlXG4gKi9cblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlLl9vblVwZGF0ZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKHRoaXMuYXV0b1VwZGF0ZSlcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fb25VcGRhdGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUnVucyB0aGUgdXBkYXRlIGxvb3Agd2hlbiB0aGUgdmlkZW8gaXMgcmVhZHkgdG8gcGxheVxuICogQHByaXZhdGVcbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUuX29uUGxheVN0YXJ0ID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAoIXRoaXMuYXV0b1VwZGF0ZSlcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fb25VcGRhdGUpO1xuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSB0cnVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogRmlyZWQgd2hlbiBhIHBhdXNlIGV2ZW50IGlzIHRyaWdnZXJlZCwgc3RvcHMgdGhlIHVwZGF0ZSBsb29wXG4gKiBAcHJpdmF0ZVxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZS5fb25QbGF5U3RvcCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5hdXRvVXBkYXRlID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGxvYWRlZCBhbmQgcmVhZHkgdG8gcGxheVxuICogQHByaXZhdGVcbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUuX29uQ2FuUGxheSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5oYXNMb2FkZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc291cmNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMuX29uQ2FuUGxheSk7XG4gICAgICAgIHRoaXMuc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5fb25DYW5QbGF5KTtcblxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zb3VyY2UudmlkZW9XaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNvdXJjZS52aWRlb0hlaWdodDtcblxuICAgICAgICB0aGlzLnNvdXJjZS5wbGF5KCk7XG5cbiAgICAgICAgLy8gcHJldmVudCBtdWx0aXBsZSBsb2FkZWQgZGlzcGF0Y2hlcy4uXG4gICAgICAgIGlmICghdGhpcy5fX2xvYWRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fX2xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIHRleHR1cmVcbiAqXG4gKi9cblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5fcGl4aUlkKVxuICAgIHtcbiAgICAgICAgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVsgdGhpcy5zb3VyY2UuX3BpeGlJZCBdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbIHRoaXMuc291cmNlLl9waXhpSWQgXTtcblxuICAgICAgICB0aGlzLnNvdXJjZS5fcGl4aUlkID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuc291cmNlLl9waXhpSWQ7XG4gICAgfVxuXG4gICAgQmFzZVRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogTWltaWMgUGl4aSBCYXNlVGV4dHVyZS5mcm9tLi4uLiBtZXRob2QuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHZpZGVvIHtIVE1MVmlkZW9FbGVtZW50fVxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtWaWRlb0Jhc2VUZXh0dXJlfVxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLmZyb21WaWRlbyA9IGZ1bmN0aW9uICh2aWRlbywgc2NhbGVNb2RlKVxue1xuICAgIGlmICghdmlkZW8uX3BpeGlJZClcbiAgICB7XG4gICAgICAgIHZpZGVvLl9waXhpSWQgPSAndmlkZW9fJyArIHV0aWxzLnV1aWQoKTtcbiAgICB9XG5cbiAgICB2YXIgYmFzZVRleHR1cmUgPSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW3ZpZGVvLl9waXhpSWRdO1xuXG4gICAgaWYgKCFiYXNlVGV4dHVyZSlcbiAgICB7XG4gICAgICAgIGJhc2VUZXh0dXJlID0gbmV3IFZpZGVvQmFzZVRleHR1cmUodmlkZW8sIHNjYWxlTW9kZSk7XG4gICAgICAgIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbIHZpZGVvLl9waXhpSWQgXSA9IGJhc2VUZXh0dXJlO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlVGV4dHVyZTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBCYXNlVGV4dHVyZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gdmlkZW8gZWxlbWVudC5cbiAqIFRoaXMgQmFzZVRleHR1cmUgY2FuIHRoZW4gYmUgdXNlZCB0byBjcmVhdGUgYSB0ZXh0dXJlXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHZpZGVvU3JjIHtzdHJpbmd8b2JqZWN0fHN0cmluZ1tdfG9iamVjdFtdfSBUaGUgVVJMKHMpIGZvciB0aGUgdmlkZW8uXG4gKiBAcGFyYW0gW3ZpZGVvU3JjLnNyY10ge3N0cmluZ30gT25lIG9mIHRoZSBzb3VyY2UgdXJscyBmb3IgdGhlIHZpZGVvXG4gKiBAcGFyYW0gW3ZpZGVvU3JjLm1pbWVdIHtzdHJpbmd9IFRoZSBtaW1ldHlwZSBvZiB0aGUgdmlkZW8gKGUuZy4gJ3ZpZGVvL21wNCcpLiBJZiBub3Qgc3BlY2lmaWVkXG4gKiAgdGhlIHVybCdzIGV4dGVuc2lvbiB3aWxsIGJlIHVzZWQgYXMgdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBtaW1lIHR5cGUuXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1ZpZGVvQmFzZVRleHR1cmV9XG4gKi9cblZpZGVvQmFzZVRleHR1cmUuZnJvbVVybCA9IGZ1bmN0aW9uICh2aWRlb1NyYywgc2NhbGVNb2RlKVxue1xuICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbiAgICAvLyBhcnJheSBvZiBvYmplY3RzIG9yIHN0cmluZ3NcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2aWRlb1NyYykpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZGVvU3JjLmxlbmd0aDsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2aWRlby5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2UodmlkZW9TcmMuc3JjIHx8IHZpZGVvU3JjLCB2aWRlb1NyYy5taW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2luZ2xlIG9iamVjdCBvciBzdHJpbmdcbiAgICBlbHNlXG4gICAge1xuICAgICAgICB2aWRlby5hcHBlbmRDaGlsZChjcmVhdGVTb3VyY2UodmlkZW9TcmMuc3JjIHx8IHZpZGVvU3JjLCB2aWRlb1NyYy5taW1lKSk7XG4gICAgfVxuXG4gICAgdmlkZW8ubG9hZCgpO1xuICAgIHZpZGVvLnBsYXkoKTtcblxuICAgIHJldHVybiBWaWRlb0Jhc2VUZXh0dXJlLmZyb21WaWRlbyh2aWRlbywgc2NhbGVNb2RlKTtcbn07XG5cblZpZGVvQmFzZVRleHR1cmUuZnJvbVVybHMgPSBWaWRlb0Jhc2VUZXh0dXJlLmZyb21Vcmw7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZShwYXRoLCB0eXBlKVxue1xuICAgIGlmICghdHlwZSlcbiAgICB7XG4gICAgICAgIHR5cGUgPSAndmlkZW8vJyArIHBhdGguc3Vic3RyKHBhdGgubGFzdEluZGV4T2YoJy4nKSArIDEpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcblxuICAgIHNvdXJjZS5zcmMgPSBwYXRoO1xuICAgIHNvdXJjZS50eXBlID0gdHlwZTtcblxuICAgIHJldHVybiBzb3VyY2U7XG59XG4iLCIvKipcbiAqIENyZWF0ZXMgYW4gaG9tb2dlbm91cyBvYmplY3QgZm9yIHRyYWNraW5nIGV2ZW50cyBzbyB1c2VycyBjYW4ga25vdyB3aGF0IHRvIGV4cGVjdC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJLnV0aWxzXG4gKiBAcGFyYW0gdGFyZ2V0IHtvYmplY3R9IFRoZSB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIGV2ZW50IGlzIGNhbGxlZCBvblxuICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIHN0cmluZyBuYW1lIG9mIHRoZSBldmVudCB0aGF0IHdhcyB0cmlnZ2VyZWRcbiAqIEBwYXJhbSBkYXRhIHtvYmplY3R9IEFyYml0cmFyeSBldmVudCBkYXRhIHRvIHBhc3MgYWxvbmdcbiAqL1xuZnVuY3Rpb24gRXZlbnREYXRhKHRhcmdldCwgbmFtZSwgZGF0YSlcbntcbiAgICAvLyBmb3IgZHVjayB0eXBpbmcgaW4gdGhlIFwiLm9uKClcIiBmdW5jdGlvblxuICAgIHRoaXMuX19pc0V2ZW50T2JqZWN0ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFRyYWNrcyB0aGUgc3RhdGUgb2YgYnViYmxpbmcgcHJvcGFnYXRpb24uIERvIG5vdFxuICAgICAqIHNldCB0aGlzIGRpcmVjdGx5LCBpbnN0ZWFkIHVzZSBgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClgXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIHN0YXRlIG9mIHNpYmxpbmcgbGlzdGVuZXIgcHJvcGFnYXRpb24uIERvIG5vdFxuICAgICAqIHNldCB0aGlzIGRpcmVjdGx5LCBpbnN0ZWFkIHVzZSBgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClgXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwgdGFyZ2V0IHRoZSBldmVudCB0cmlnZ2VyZWQgb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RyaW5nIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgdGhpcyByZXByZXNlbnRzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IG5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSB0aGF0IHdhcyBwYXNzZWQgaW4gd2l0aCB0aGlzIGV2ZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZXN0YW1wIHdoZW4gdGhlIGV2ZW50IG9jY3VycmVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbn1cblxuRXZlbnREYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RGF0YTtcbm1vZHVsZS5leHBvcnRzID0gRXZlbnREYXRhO1xuXG4vKipcbiAqIFN0b3BzIHRoZSBwcm9wYWdhdGlvbiBvZiBldmVudHMgdXAgdGhlIHNjZW5lIGdyYXBoIChwcmV2ZW50cyBidWJibGluZykuXG4gKlxuICovXG5FdmVudERhdGEucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpXG57XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogU3RvcHMgdGhlIHByb3BhZ2F0aW9uIG9mIGV2ZW50cyB0byBzaWJsaW5nIGxpc3RlbmVycyAobm8gbG9uZ2VyIGNhbGxzIGFueSBsaXN0ZW5lcnMpLlxuICpcbiAqL1xuRXZlbnREYXRhLnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxue1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWU7XG59O1xuIiwiLy9UT0RPOiBIYXZlIEdyYXBoaWNzIHVzZSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvc2hhcGUyZFxuLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9zaGFwZTJkLXRyaWFuZ3VsYXRlIGluc3RlYWQgb2YgY3VzdG9tIGNvZGUuXG5cbi8qXG4gICAgUG9seUsgbGlicmFyeVxuICAgIHVybDogaHR0cDovL3BvbHlrLml2YW5rLm5ldFxuICAgIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbmNlLlxuXG4gICAgQ29weXJpZ2h0IChjKSAyMDEyIEl2YW4gS3Vja2lyXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gICAgZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gICAgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gICAgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICAgIGNvbmRpdGlvbnM6XG5cbiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICAgIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAgICBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gICAgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gICAgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICAgIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuICAgIFRoaXMgaXMgYW4gYW1hemluZyBsaWIhXG5cbiAgICBTbGlnaHRseSBtb2RpZmllZCBieSBNYXQgR3JvdmVzIChtYXRncm92ZXMuY29tKTtcbiovXG5cbi8qKlxuICogQmFzZWQgb24gdGhlIFBvbHlrIGxpYnJhcnkgaHR0cDovL3BvbHlrLml2YW5rLm5ldCByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5jZS5cbiAqIFRoaXMgaXMgYW4gYW1hemluZyBsaWIhXG4gKiBTbGlnaHRseSBtb2RpZmllZCBieSBNYXQgR3JvdmVzIChtYXRncm92ZXMuY29tKTtcbiAqXG4gKiBAbWVtYmVyb2YgUElYSS51dGlsc1xuICovXG52YXIgUG9seUsgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKipcbiAqIFRyaWFuZ3VsYXRlcyBzaGFwZXMgZm9yIHdlYkdMIGdyYXBoaWMgZmlsbHMuXG4gKlxuICovXG5Qb2x5Sy5Ucmlhbmd1bGF0ZSA9IGZ1bmN0aW9uIChwKVxue1xuICAgIHZhciBzaWduID0gdHJ1ZTtcblxuICAgIHZhciBuID0gcC5sZW5ndGggPj4gMTtcbiAgICBpZiAobiA8IDMpIHJldHVybiBbXTtcblxuICAgIHZhciB0Z3MgPSBbXTtcbiAgICB2YXIgYXZsID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGF2bC5wdXNoKGkpO1xuXG4gICAgaSA9IDA7XG4gICAgdmFyIGFsID0gbjtcbiAgICB3aGlsZSAoYWwgPiAzKVxuICAgIHtcbiAgICAgICAgdmFyIGkwID0gYXZsWyhpKzApJWFsXTtcbiAgICAgICAgdmFyIGkxID0gYXZsWyhpKzEpJWFsXTtcbiAgICAgICAgdmFyIGkyID0gYXZsWyhpKzIpJWFsXTtcblxuICAgICAgICB2YXIgYXggPSBwWzIqaTBdLCAgYXkgPSBwWzIqaTArMV07XG4gICAgICAgIHZhciBieCA9IHBbMippMV0sICBieSA9IHBbMippMSsxXTtcbiAgICAgICAgdmFyIGN4ID0gcFsyKmkyXSwgIGN5ID0gcFsyKmkyKzFdO1xuXG4gICAgICAgIHZhciBlYXJGb3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAoUG9seUsuX2NvbnZleChheCwgYXksIGJ4LCBieSwgY3gsIGN5LCBzaWduKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZWFyRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhbDsgaisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciB2aSA9IGF2bFtqXTtcbiAgICAgICAgICAgICAgICBpZiAodmkgPT09IGkwIHx8IHZpID09PSBpMSB8fCB2aSA9PT0gaTIpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKFBvbHlLLl9Qb2ludEluVHJpYW5nbGUocFsyKnZpXSwgcFsyKnZpKzFdLCBheCwgYXksIGJ4LCBieSwgY3gsIGN5KSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVhckZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlYXJGb3VuZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGdzLnB1c2goaTAsIGkxLCBpMik7XG4gICAgICAgICAgICBhdmwuc3BsaWNlKChpKzEpJWFsLCAxKTtcbiAgICAgICAgICAgIGFsLS07XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpKysgPiAzKmFsKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGZsaXAgZmxpcCByZXZlcnNlIGl0IVxuICAgICAgICAgICAgLy8gcmVzZXQhXG4gICAgICAgICAgICBpZiAoc2lnbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0Z3MgPSBbXTtcbiAgICAgICAgICAgICAgICBhdmwgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBhdmwucHVzaChpKTtcblxuICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgIGFsID0gbjtcblxuICAgICAgICAgICAgICAgIHNpZ24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAvLyAgIHdpbmRvdy5jb25zb2xlLmxvZyhcIlBJWEkgV2FybmluZzogc2hhcGUgdG9vIGNvbXBsZXggdG8gZmlsbFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRncy5wdXNoKGF2bFswXSwgYXZsWzFdLCBhdmxbMl0pO1xuICAgIHJldHVybiB0Z3M7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgcG9pbnQgaXMgd2l0aGluIGEgdHJpYW5nbGVcbiAqXG4gKiBAcGFyYW0gcHgge251bWJlcn0geCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0gcHkge251bWJlcn0geSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0gYXgge251bWJlcn0geCBjb29yZGluYXRlIG9mIHRoZSBhIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICogQHBhcmFtIGF5IHtudW1iZXJ9IHkgY29vcmRpbmF0ZSBvZiB0aGUgYSBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAqIEBwYXJhbSBieCB7bnVtYmVyfSB4IGNvb3JkaW5hdGUgb2YgdGhlIGIgcG9pbnQgb2YgdGhlIHRyaWFuZ2xlXG4gKiBAcGFyYW0gYnkge251bWJlcn0geSBjb29yZGluYXRlIG9mIHRoZSBiIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICogQHBhcmFtIGN4IHtudW1iZXJ9IHggY29vcmRpbmF0ZSBvZiB0aGUgYyBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAqIEBwYXJhbSBjeSB7bnVtYmVyfSB5IGNvb3JkaW5hdGUgb2YgdGhlIGMgcG9pbnQgb2YgdGhlIHRyaWFuZ2xlXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuUG9seUsuX1BvaW50SW5UcmlhbmdsZSA9IGZ1bmN0aW9uIChweCwgcHksIGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpXG57XG4gICAgdmFyIHYweCA9IGN4LWF4O1xuICAgIHZhciB2MHkgPSBjeS1heTtcbiAgICB2YXIgdjF4ID0gYngtYXg7XG4gICAgdmFyIHYxeSA9IGJ5LWF5O1xuICAgIHZhciB2MnggPSBweC1heDtcbiAgICB2YXIgdjJ5ID0gcHktYXk7XG5cbiAgICB2YXIgZG90MDAgPSB2MHgqdjB4K3YweSp2MHk7XG4gICAgdmFyIGRvdDAxID0gdjB4KnYxeCt2MHkqdjF5O1xuICAgIHZhciBkb3QwMiA9IHYweCp2MngrdjB5KnYyeTtcbiAgICB2YXIgZG90MTEgPSB2MXgqdjF4K3YxeSp2MXk7XG4gICAgdmFyIGRvdDEyID0gdjF4KnYyeCt2MXkqdjJ5O1xuXG4gICAgdmFyIGludkRlbm9tID0gMSAvIChkb3QwMCAqIGRvdDExIC0gZG90MDEgKiBkb3QwMSk7XG4gICAgdmFyIHUgPSAoZG90MTEgKiBkb3QwMiAtIGRvdDAxICogZG90MTIpICogaW52RGVub207XG4gICAgdmFyIHYgPSAoZG90MDAgKiBkb3QxMiAtIGRvdDAxICogZG90MDIpICogaW52RGVub207XG5cbiAgICAvLyBDaGVjayBpZiBwb2ludCBpcyBpbiB0cmlhbmdsZVxuICAgIHJldHVybiAodSA+PSAwKSAmJiAodiA+PSAwKSAmJiAodSArIHYgPCAxKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBzaGFwZSBpcyBjb252ZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuUG9seUsuX2NvbnZleCA9IGZ1bmN0aW9uIChheCwgYXksIGJ4LCBieSwgY3gsIGN5LCBzaWduKVxue1xuICAgIHJldHVybiAoKGF5LWJ5KSooY3gtYngpICsgKGJ4LWF4KSooY3ktYnkpID49IDApID09PSBzaWduO1xufTtcbiIsInZhciBldmVudFRhcmdldCA9IHJlcXVpcmUoJy4vZXZlbnRUYXJnZXQnKSxcbiAgICBFdmVudERhdGEgICA9IHJlcXVpcmUoJy4vRXZlbnREYXRhJyk7XG5cbi8qKlxuICogQSBUaWNrZXIgY2xhc3MgdGhhdCBydW5zIHRoZSBtYWluIHVwZGF0ZSBsb29wIHRoYXQgb3RoZXIgb2JqZWN0cyBsaXN0ZW4gdG9cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJLnV0aWxzXG4gKi9cbnZhciBUaWNrZXIgPSBmdW5jdGlvbigpXG57XG4gICAgdGhpcy51cGRhdGVCaW5kID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgdGlja2VyIHJ1bnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmV2ZW50RGF0YSA9IG5ldyBFdmVudERhdGEoIHRoaXMsICd0aWNrJywgeyBkZWx0YVRpbWU6MSB9ICk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVsdGFUaW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5kZWx0YVRpbWUgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgYmV0d2VlbiB0d28gZnJhbWVzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50aW1lRWxhcHNlZCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG5cbiAgICB0aGlzLnNwZWVkID0gMTtcblxuICAgIC8vIGF1dG8gc3RhcnQgdGlja2luZyFcbiAgICB0aGlzLnN0YXJ0KCk7XG59O1xuXG5ldmVudFRhcmdldC5taXhpbihUaWNrZXIucHJvdG90eXBlKTtcblxuXG5UaWNrZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKHRoaXMuYWN0aXZlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVCaW5kKTtcbn07XG5cblxuVGlja2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKCF0aGlzLmFjdGl2ZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xufTtcblxuVGlja2VyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpXG57XG4gICAgaWYodGhpcy5hY3RpdmUpXG4gICAge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVCaW5kKTtcblxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZTtcblxuICAgICAgICAvLyBjYXAgdGhlIHRpbWUhXG4gICAgICAgIGlmKHRpbWVFbGFwc2VkID4gMTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aW1lRWxhcHNlZCA9IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsdGFUaW1lID0gKHRpbWVFbGFwc2VkICogMC4wNik7XG5cbiAgICAgICAgdGhpcy5kZWx0YVRpbWUgKj0gdGhpcy5zcGVlZDtcblxuICAgICAgICAvLyA2MCAtLS0+IDFcbiAgICAgICAgLy8gMzAgLS0tPiAyXG5cbiAgICAgICAgdGhpcy5ldmVudERhdGEuZGF0YS5kZWx0YVRpbWUgPSB0aGlzLmRlbHRhVGltZTtcblxuICAgICAgICB0aGlzLmVtaXQoICd0aWNrJywgdGhpcy5ldmVudERhdGEgKTtcblxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUaWNrZXIoKTtcbiIsInZhciBFdmVudERhdGEgPSByZXF1aXJlKCcuL0V2ZW50RGF0YScpO1xuXG52YXIgdGVtcEV2ZW50T2JqZWN0ID0gbmV3IEV2ZW50RGF0YShudWxsLCBudWxsLCB7fSk7XG5cbi8qKlxuICogTWl4aW5zIGV2ZW50IGVtaXR0ZXIgZnVuY3Rpb25hbGl0eSB0byBhbiBvYmplY3QuXG4gKlxuICogQG1peGluXG4gKiBAbWVtYmVyb2YgUElYSS51dGlsc1xuICogQGV4YW1wbGVcbiAqICAgICAgZnVuY3Rpb24gTXlFbWl0dGVyKCkge31cbiAqXG4gKiAgICAgIGV2ZW50VGFyZ2V0Lm1peGluKE15RW1pdHRlci5wcm90b3R5cGUpO1xuICpcbiAqICAgICAgdmFyIGVtID0gbmV3IE15RW1pdHRlcigpO1xuICogICAgICBlbS5lbWl0KCdldmVudE5hbWUnLCAnc29tZSBkYXRhJywgJ3NvbWUgbW9yZSBkYXRhJywge30sIG51bGwsIC4uLik7XG4gKi9cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0KG9iailcbntcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBsaXN0IG9mIGFzc2lnbmVkIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBldmVudFRhcmdldFxuICAgICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gVGhlIGV2ZW50cyB0aGF0IHNob3VsZCBiZSBsaXN0ZWQuXG4gICAgICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIGxpc3RlbmVyIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIG9iai5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnROYW1lKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSA/IHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdLnNsaWNlKCkgOiBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW1pdCBhbiBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZXZlbnRUYXJnZXRcbiAgICAgKiBAYWxpYXMgZGlzcGF0Y2hFdmVudFxuICAgICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IEluZGljYXRpb24gaWYgd2UndmUgZW1pdHRlZCBhbiBldmVudC5cbiAgICAgKi9cbiAgICBvYmouZW1pdCA9IG9iai5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpXG4gICAge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgLy8gZmFzdCByZXR1cm4gd2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzXG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vYmFja3dhcmRzIGNvbXBhdCB3aXRoIG9sZCBtZXRob2QgXCIuZW1pdCh7IHR5cGU6ICdzb21ldGhpbmcnIH0pXCJcbiAgICAgICAgLy9sZXRzIG5vdCB3b3JyeSBhYm91dCBvbGQgd2F5cyBvZiB1c2luZyBzdHVmZiBmb3IgdjNcbiAgICAgICAgLypcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgPT09ICdvYmplY3QnKVxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICAvL2Vuc3VyZSB3ZSBhcmUgdXNpbmcgYSByZWFsIHBpeGkgZXZlbnRcbiAgICAgICAgLy9pbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdCBsZXRzIHVzZSBhbiB0aGUgdGVtcCBvbmUgKCBzYXZlIG5ldyBjcmVhdGlvbiBmb3IgZWFjaCBldmVudCApXG4gICAgICAgIGlmICggIWRhdGEgfHwgIWRhdGEuX19pc0V2ZW50T2JqZWN0IClcbiAgICAgICAge1xuICAgICAgICAgICAgdGVtcEV2ZW50T2JqZWN0LnRhcmdldD0gIHRoaXM7XG4gICAgICAgICAgICB0ZW1wRXZlbnRPYmplY3QudHlwZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgICAgIHRlbXBFdmVudE9iamVjdC5kYXRhID0gZGF0YTtcblxuICAgICAgICAgICAgZGF0YSA9IHRlbXBFdmVudE9iamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaXRlcmF0ZSB0aGUgbGlzdGVuZXJzXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXS5zbGljZSgwKSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGgsXG4gICAgICAgICAgICBmbiA9IGxpc3RlbmVyc1swXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgZm4gPSBsaXN0ZW5lcnNbKytpXSlcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jYWxsIHRoZSBldmVudCBsaXN0ZW5lciBzY29wZSBpcyBjdXJyZW50bHkgZGV0ZXJtaW5lZCBieSBiaW5kaW5nIHRoZSBsaXN0ZW5lclxuICAgICAgICAgICAgLy93YXkgZmFzdGVyIHRoYW4gJ2NhbGwnXG4gICAgICAgICAgICBmbihkYXRhKTtcblxuICAgICAgICAgICAgLy9pZiBcInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblwiIGlzIGNhbGxlZCwgc3RvcCBjYWxsaW5nIHNpYmxpbmcgZXZlbnRzXG4gICAgICAgICAgICBpZiAoZGF0YS5zdG9wcGVkSW1tZWRpYXRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiBcInN0b3BQcm9wYWdhdGlvblwiIGlzIGNhbGxlZCB0aGVuIGRvbid0IGJ1YmJsZSB0aGUgZXZlbnRcbiAgICAgICAgaWYgKGRhdGEuc3RvcHBlZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGV2ZW50VGFyZ2V0XG4gICAgICogQGFsaWFzIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgb2JqLm9uID0gb2JqLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBvbihldmVudE5hbWUsIGZuKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgICAgICh0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKVxuICAgICAgICAgICAgLnB1c2goZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gRXZlbnRMaXN0ZW5lciB0aGF0J3Mgb25seSBjYWxsZWQgb25jZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBldmVudFRhcmdldFxuICAgICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gTmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICovXG4gICAgb2JqLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50TmFtZSwgZm4pXG4gICAge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcldyYXBwZXIoKVxuICAgICAgICB7XG4gICAgICAgICAgICBmbi5hcHBseShzZWxmLm9mZihldmVudE5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlciksIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgb25jZUhhbmRsZXJXcmFwcGVyLl9vcmlnaW5hbEhhbmRsZXIgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZXZlbnRUYXJnZXRcbiAgICAgKiBAYWxpYXMgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gVGhlIGV2ZW50IHdlIHdhbnQgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259IFRoZSBsaXN0ZW5lciB0aGF0IHdlIG5lZWQgdG8gZmluZC5cbiAgICAgKi9cbiAgICBvYmoub2ZmID0gb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBvZmYoZXZlbnROYW1lLCBmbilcbiAgICB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcblxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0sXG4gICAgICAgICAgICBpID0gZm4gPyBsaXN0Lmxlbmd0aCA6IDA7XG5cbiAgICAgICAgd2hpbGUgKGktLSA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChsaXN0W2ldID09PSBmbiB8fCBsaXN0W2ldLl9vcmlnaW5hbEhhbmRsZXIgPT09IGZuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBkZWxldGUgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAgICAgICAvLyBsZXRzIHNldCBpdCB0byBudWxsXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb3Igb25seSB0aGUgbGlzdGVuZXJzIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGV2ZW50VGFyZ2V0XG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBUaGUgZXZlbnQgeW91IHdhbnQgdG8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yLlxuICAgICAqL1xuICAgIG9iai5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnROYW1lKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVsZXRlIGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgICAvLyBsZXRzIHNldCBpdCB0byBudWxsXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKipcbiAgICAgKiBNaXhlcyBpbiB0aGUgcHJvcGVydGllcyBvZiB0aGUgZXZlbnRUYXJnZXQgaW50byBhbm90aGVyIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIG9iamVjdCB7b2JqZWN0fSBUaGUgb2JqIHRvIG1peCBpbnRvXG4gICAgICovXG4gICAgbWl4aW46IGZ1bmN0aW9uIG1peGluKG9iailcbiAgICB7XG4gICAgICAgIGV2ZW50VGFyZ2V0KG9iaik7XG4gICAgfVxufTtcbiIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBQSVhJLnV0aWxzXG4gKi9cbnZhciB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAgIF91aWQ6IDAsXG4gICAgX3NhaWRIZWxsbzogZmFsc2UsXG5cbiAgICBSQUZyYW1lUG9seWZpbGw6cmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCcpLFxuICAgIFRpY2tlcjogICAgICAgICByZXF1aXJlKCcuL1RpY2tlcicpLFxuICAgIEV2ZW50RGF0YTogICAgICByZXF1aXJlKCcuL0V2ZW50RGF0YScpLFxuICAgIGV2ZW50VGFyZ2V0OiAgICByZXF1aXJlKCcuL2V2ZW50VGFyZ2V0JyksXG4gICAgcGx1Z2luVGFyZ2V0OiAgIHJlcXVpcmUoJy4vcGx1Z2luVGFyZ2V0JyksXG4gICAgUG9seUs6ICAgICAgICAgIHJlcXVpcmUoJy4vUG9seUsnKSxcblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbmV4dCB1dWlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBuZXh0IHV1aWQgdG8gdXNlLlxuICAgICAqL1xuICAgIHV1aWQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gKyt1dGlscy5fdWlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIGhleCBjb2xvciBudW1iZXIgdG8gYW4gW1IsIEcsIEJdIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaGV4IHtudW1iZXJ9XG4gICAgICogQHJldHVybiB7bnVtYmVyW119IEFuIGFycmF5IHJlcHJlc2VudGluZyB0aGUgW1IsIEcsIEJdIG9mIHRoZSBjb2xvci5cbiAgICAgKi9cbiAgICBoZXgycmdiOiBmdW5jdGlvbiAoaGV4LCBvdXQpXG4gICAge1xuICAgICAgICBvdXQgPSBvdXQgfHwgW107XG5cbiAgICAgICAgb3V0WzBdID0gKGhleCA+PiAxNiAmIDB4RkYpIC8gMjU1O1xuICAgICAgICBvdXRbMV0gPSAoaGV4ID4+IDggJiAweEZGKSAvIDI1NTtcbiAgICAgICAgb3V0WzJdID0gKGhleCAmIDB4RkYpIC8gMjU1O1xuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgaGV4IGNvbG9yIG51bWJlciB0byBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBoZXgge251bWJlcn1cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmcgY29sb3IuXG4gICAgICovXG4gICAgaGV4MnN0cmluZzogZnVuY3Rpb24gKGhleClcbiAgICB7XG4gICAgICAgIGhleCA9IGhleC50b1N0cmluZygxNik7XG4gICAgICAgIGhleCA9ICcwMDAwMDAnLnN1YnN0cigwLCA2IC0gaGV4Lmxlbmd0aCkgKyBoZXg7XG5cbiAgICAgICAgcmV0dXJuICcjJyArIGhleDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBjb2xvciBhcyBhbiBbUiwgRywgQl0gYXJyYXkgdG8gYSBoZXggbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmdiIHtudW1iZXJbXX1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjb2xvciBudW1iZXJcbiAgICAgKi9cbiAgICByZ2IyaGV4OiBmdW5jdGlvbiAocmdiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgocmdiWzBdKjI1NSA8PCAxNikgKyAocmdiWzFdKjI1NSA8PCA4KSArIHJnYlsyXSoyNTUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgQ2FudmFzIEJsZW5kTW9kZXMgYXJlIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBicm93c2VyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoZXkgYXJlIHN1cHBvcnRlZFxuICAgICAqL1xuICAgIGNhblVzZU5ld0NhbnZhc0JsZW5kTW9kZXM6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBuZ0hlYWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQVFNQUFBREQ4cDJPQUFBQUExQk1WRVgvJztcbiAgICAgICAgdmFyIHBuZ0VuZCA9ICdBQUFBQ2tsRVFWUUkxMk5nQUFBQUFnQUI0aUc4TXdBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuXG4gICAgICAgIHZhciBtYWdlbnRhID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1hZ2VudGEuc3JjID0gcG5nSGVhZCArICdBUDgwNE9hNicgKyBwbmdFbmQ7XG5cbiAgICAgICAgdmFyIHllbGxvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB5ZWxsb3cuc3JjID0gcG5nSGVhZCArICcvd0NLeHZSRicgKyBwbmdFbmQ7XG5cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSA2O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKG1hZ2VudGEsIDAsIDApO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh5ZWxsb3csIDIsIDApO1xuXG4gICAgICAgIHZhciBkYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMiwwLDEsMSkuZGF0YTtcblxuICAgICAgICByZXR1cm4gKGRhdGFbMF0gPT09IDI1NSAmJiBkYXRhWzFdID09PSAwICYmIGRhdGFbMl0gPT09IDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIG51bWJlciwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBjbG9zZXN0IG51bWJlciB0aGF0IGlzIGEgcG93ZXIgb2YgdHdvXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB0YWtlbiBmcm9tIFN0YXJsaW5nIEZyYW1ld29yayBhcyBpdHMgcHJldHR5IG5lYXQgOylcbiAgICAgKlxuICAgICAqIEBwYXJhbSBudW1iZXIge251bWJlcn1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjbG9zZXN0IG51bWJlciB0aGF0IGlzIGEgcG93ZXIgb2YgdHdvXG4gICAgICovXG4gICAgZ2V0TmV4dFBvd2VyT2ZUd286IGZ1bmN0aW9uIChudW1iZXIpXG4gICAge1xuICAgICAgICAvLyBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG93ZXJfb2ZfdHdvI0Zhc3RfYWxnb3JpdGhtX3RvX2NoZWNrX2lmX2FfcG9zaXRpdmVfbnVtYmVyX2lzX2FfcG93ZXJfb2ZfdHdvXG4gICAgICAgIGlmIChudW1iZXIgPiAwICYmIChudW1iZXIgJiAobnVtYmVyIC0gMSkpID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDE7XG5cbiAgICAgICAgICAgIHdoaWxlIChyZXN1bHQgPCBudW1iZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0IDw8PSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gd2lkdGggYW5kIGhlaWdodCBtYWtlIGEgcG93ZXIgb2YgdHdvIHJlY3RhbmdsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9XG4gICAgICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNQb3dlck9mVHdvOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiAod2lkdGggPiAwICYmICh3aWR0aCAmICh3aWR0aCAtIDEpKSA9PT0gMCAmJiBoZWlnaHQgPiAwICYmIChoZWlnaHQgJiAoaGVpZ2h0IC0gMSkpID09PSAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSByZXNvbHV0aW9uIG9mIGFuIGFzc2V0IGJ5IGxvb2tpbmcgZm9yIHRoZSBwcmVmaXhcbiAgICAgKiB1c2VkIGJ5IHNwcml0ZXNoZWV0cyBhbmQgaW1hZ2UgdXJsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfSB0aGUgaW1hZ2UgcGF0aFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0UmVzb2x1dGlvbk9mVXJsOiBmdW5jdGlvbiAodXJsKVxuICAgIHtcbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSBDT05TVC5SRVRJTkFfUFJFRklYLmV4ZWModXJsKTtcblxuICAgICAgICBpZiAocmVzb2x1dGlvbilcbiAgICAgICAge1xuICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXNvbHV0aW9uWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dzIG91dCB0aGUgdmVyc2lvbiBhbmQgcmVuZGVyZXIgaW5mb3JtYXRpb24gZm9yIHRoaXMgcnVubmluZyBpbnN0YW5jZSBvZiBQSVhJLlxuICAgICAqIElmIHlvdSBkb24ndCB3YW50IHRvIHNlZSB0aGlzIG1lc3NhZ2UgeW91IGNhbiBzZXQgYFBJWEkudXRpbHMuX3NhaWRIZWxsbyA9IHRydWU7YFxuICAgICAqIHNvIHRoZSBsaWJyYXJ5IHRoaW5rcyBpdCBhbHJlYWR5IHNhaWQgaXQuIEtlZXAgaW4gbWluZCB0aGF0IGRvaW5nIHRoYXQgd2lsbCBmb3JldmVyXG4gICAgICogbWFrZXMgeW91IGEgamVyayBmYWNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgc3RyaW5nIHJlbmRlcmVyIHR5cGUgdG8gbG9nLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzYXlIZWxsbzogZnVuY3Rpb24gKHR5cGUpXG4gICAge1xuICAgICAgICBpZiAodXRpbHMuX3NhaWRIZWxsbylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtcbiAgICAgICAgICAgICAgICAnJWMgJWMgJWMgUGl4aS5qcyAnICsgQ09OU1QuVkVSU0lPTiArICcgLSAnICsgdHlwZSArICcgICVjICcgKyAnICVjICcgKyAnIGh0dHA6Ly93d3cucGl4aWpzLmNvbS8gICVjICVjIOKZpSVj4pmlJWPimaUgJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI2ZmNjZhNScsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6ICNmZjY2YTUnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogI2ZmNjZhNTsgYmFja2dyb3VuZDogIzAzMDMwNzsnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjZmY2NmE1JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI2ZmYzNkYycsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6ICNmZjY2YTUnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogI2ZmMjQyNDsgYmFja2dyb3VuZDogI2ZmZicsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiAjZmYyNDI0OyBiYWNrZ3JvdW5kOiAjZmZmJyxcbiAgICAgICAgICAgICAgICAnY29sb3I6ICNmZjI0MjQ7IGJhY2tncm91bmQ6ICNmZmYnXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7IC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmNvbnNvbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnUGl4aS5qcyAnICsgQ09OU1QuVkVSU0lPTiArICcgLSAnICsgdHlwZSArICcgLSBodHRwOi8vd3d3LnBpeGlqcy5jb20vJyk7IC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5fc2FpZEhlbGxvID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgVGV4dHVyZUNhY2hlOiB7fSxcbiAgICBCYXNlVGV4dHVyZUNhY2hlOiB7fVxufTtcbiIsIi8qKlxuICogTWl4aW5zIGZ1bmN0aW9uYWxpdHkgdG8gbWFrZSBhbiBvYmplY3QgaGF2ZSBcInBsdWdpbnNcIi5cbiAqXG4gKiBAbWl4aW5cbiAqIEBtZW1iZXJvZiBQSVhJLnV0aWxzXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdG8gbWl4IGludG8uXG4gKiBAZXhhbXBsZVxuICogICAgICBmdW5jdGlvbiBNeU9iamVjdCgpIHt9XG4gKlxuICogICAgICBwbHVnaW5UYXJnZXQubWl4aW4oTXlPYmplY3QpO1xuICovXG5mdW5jdGlvbiBwbHVnaW5UYXJnZXQob2JqKVxue1xuICAgIG9iai5fX3BsdWdpbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbHVnaW4gdG8gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGx1Z2luTmFtZSB7c3RyaW5nfSBUaGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGxpc3RlZC5cbiAgICAgKiBAcGFyYW0gY3RvciB7T2JqZWN0fSA/PyBAYWx2aW5cbiAgICAgKi9cbiAgICBvYmoucmVnaXN0ZXJQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luTmFtZSwgY3RvcilcbiAgICB7XG4gICAgICAgIG9iai5fX3BsdWdpbnNbcGx1Z2luTmFtZV0gPSBjdG9yO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYWxsIHRoZSBwbHVnaW5zIG9mIHRoaXMgb2JqZWN0XG4gICAgICpcbiAgICAgKi9cbiAgICBvYmoucHJvdG90eXBlLmluaXRQbHVnaW5zID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHRoaXMucGx1Z2lucyB8fCB7fTtcblxuICAgICAgICBmb3IgKHZhciBvIGluIG9iai5fX3BsdWdpbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luc1tvXSA9IG5ldyAob2JqLl9fcGx1Z2luc1tvXSkodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIHBsdWdpbnMgb2YgdGhpcyBvYmplY3RcbiAgICAgKlxuICAgICAqL1xuICAgIG9iai5wcm90b3R5cGUuZGVzdHJveVBsdWdpbnMgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgbyBpbiB0aGlzLnBsdWdpbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luc1tvXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbnNbb10gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zID0gbnVsbDtcbiAgICB9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIE1peGVzIGluIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwbHVnaW5UYXJnZXQgaW50byBhbm90aGVyIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIG9iamVjdCB7b2JqZWN0fSBUaGUgb2JqIHRvIG1peCBpbnRvXG4gICAgICovXG4gICAgbWl4aW46IGZ1bmN0aW9uIG1peGluKG9iailcbiAgICB7XG4gICAgICAgIHBsdWdpblRhcmdldChvYmopO1xuICAgIH1cbn07XG4iLCIoZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sXG4gICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgfSkod2luZG93KTtcbiIsbnVsbCwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJwZXJlbnF1ZW5qc1wiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cDovL3BlcmVucXVlbmpzLmNvbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSFRNTDUgR2FtZSBGcmFtZXdvcmsgZm9yIG1vYmlsZSwgd2ViIGFuZCBkZXNrdG9wIGRldmVsb3BtZW50LlwiLFxuICBcImF1dGhvclwiOiBcIk5hemFyaSBHb256YWxleiA8bmF6YXJpLm56QGdtYWlsLmNvbT4gKGh0dHA6Ly93d3cubmF6YXJpZ2xlei5jb20pXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL05hemFyaWdsZXovcGVyZW5xdWVuanNcIlxuICB9LFxuICBcImJpblwiOiB7XG4gICAgXCJwZXJlbnF1ZW5cIjogXCIuL2NsaS9wZXJlbnF1ZW5cIlxuICB9LFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl45LjAuM1wiLFxuICAgIFwiY29sb3JzXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJjb21tYW5kZXJcIjogXCJeMi42LjBcIixcbiAgICBcImd1bHBcIjogXCJeMy44LjExXCIsXG4gICAgXCJndWxwLWNhY2hlZFwiOiBcIl4xLjAuMlwiLFxuICAgIFwiZ3VscC1qc2hpbnRcIjogXCJeMS45LjJcIixcbiAgICBcImd1bHAtcmVuYW1lXCI6IFwiXjEuMi4wXCIsXG4gICAgXCJndWxwLXVnbGlmeVwiOiBcIl4xLjEuMFwiLFxuICAgIFwicmVxdWlyZS1kaXJcIjogXCJeMC4xLjBcIixcbiAgICBcInZpbnlsLWJ1ZmZlclwiOiBcIl4xLjAuMFwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjEuMFwiLFxuICAgIFwid2F0Y2hpZnlcIjogXCJeMi40LjBcIlxuICB9LFxuICBcIm1haW5cIjogXCIuL2NsaS9wZXJlbnF1ZW5cIixcbiAgXCJicm93c2VyXCI6IFwiLi9idWlsZC9wZXJlbnF1ZW4uanNcIlxufVxuIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi9jb25zdCcpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpLFxuICAgIGF1dG9EZXRlY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL2xpYi9waXhpL3NyYy9jb3JlJykuYXV0b0RldGVjdFJlbmRlcmVyLFxuICAgIFdlYkdMUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9saWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlcicpLFxuICAgIFNjZW5lTWFuYWdlciA9IHJlcXVpcmUoJy4vU2NlbmVNYW5hZ2VyJyk7XG5cbnZhciBncmFwaGljcyA9IG5ldyAocmVxdWlyZSgnLi4vLi4vbGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3MvR3JhcGhpY3MnKSkoKTtcblxuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4MDAwMDAwKTtcbmdyYXBoaWNzLmRyYXdDaXJjbGUoMCwwLDEwMCk7XG5ncmFwaGljcy5lbmRGaWxsKCk7XG5cbi8qKlxuICogVGhlIG1haW4gb2JqZWN0IG9mIHlvdXIgZ2FtZS5cbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBRXG4gKiBAcGFyYW0gd2lkdGg9ODAwXG4gKiBAcGFyYW0gaGVpZ2h0PTYwMFxuICogQHBhcmFtIFtnYW1lT3B0aW9uc10ge29iamVjdH0gT3B0aW9uYWwgZ2FtZSBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLmRlYnVnPWZhbHNlXSB7Ym9vbGVhbn0gU2hvdyBkZXZlbG9wbWVudCBpbmZvLCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLmZyYW1lTGltaXRdIHtudW1iZXJ9IGxpbWl0IHRoZSBlbGFwc2VkIHRpbWVcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMuc2F5SGVsbG89dHJ1ZV0ge2Jvb2xlYW59IGxvZ3Mgb3V0IHRoZSB2ZXJzaW9uLCByZW5kZXJlciwgYW5kIGF1ZGlvIHR5cGVcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMubm9XZWJBdWRpbz1mYWxzZV0ge2Jvb2xlYW59IHByZXZlbnRzIHNlbGVjdGlvbiBvZiBXZWJBdWRpbyB0eXBlXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLnBlcnNpc3RhbnREYXRhPXRydWVdIHtib29sZWFufSBVc2UgbG9jYWxTdG9yYWdlIHRvIHNhdmUgYWxsIHlvdSBuZWVkXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zLmF1ZGlvRXh0c10ge2FycmF5fSBGb3JjZSBsb2FkIGF1ZGlvIGZpbGVzIGluIHRoaXMgb3JkZXJcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMubm9XZWJHTD1mYWxzZV0ge2Jvb2xlYW59IHByZXZlbnRzIHNlbGVjdGlvbiBvZiBXZWJHTCByZW5kZXJlciwgZXZlbiBpZiBzdWNoIGlzIHByZXNlbnRcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zXSB7b2JqZWN0fSBPcHRpb25hbCBnYW1lIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLnZpZXddIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGNhbnZhcyB0byB1c2UgYXMgYSB2aWV3LCBvcHRpb25hbFxuICogQHBhcmFtIFtyZW5kZXJlck9wdGlvbnMudHJhbnNwYXJlbnQ9ZmFsc2VdIHtib29sZWFufSBJZiB0aGUgcmVuZGVyIHZpZXcgaXMgdHJhbnNwYXJlbnQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLmFudGlhbGlhcz1mYWxzZV0ge2Jvb2xlYW59IHNldHMgYW50aWFsaWFzIChvbmx5IGFwcGxpY2FibGUgaW4gY2hyb21lIGF0IHRoZSBtb21lbnQpXG4gKiBAcGFyYW0gW3JlbmRlcmVyT3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXI9ZmFsc2VdIHtib29sZWFufSBlbmFibGVzIGRyYXdpbmcgYnVmZmVyIHByZXNlcnZhdGlvbiwgZW5hYmxlIHRoaXMgaWYgeW91XG4gKiAgICAgIG5lZWQgdG8gY2FsbCB0b0RhdGFVcmwgb24gdGhlIHdlYmdsIGNvbnRleHRcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLnJlc29sdXRpb249MV0ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyXG4gKi9cbmZ1bmN0aW9uIEdhbWUod2lkdGgsIGhlaWdodCwgZ2FtZU9wdGlvbnMsIHJlbmRlcmVyT3B0aW9ucyl7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbmZpZyBvZiB0aGUgZ2FtZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBkZWZhdWx0IENPTlNULkRFRkFVTFRfR0FNRV9PUFRJT05TXG4gICAgICovXG4gICAgdGhpcy5jb25maWcgPSB1dGlscy5kZWZhdWx0T2JqZWN0KENPTlNULkRFRkFVTFRfR0FNRV9PUFRJT05TLCBnYW1lT3B0aW9ucyk7XG4gICAgdXRpbHMuX3NhaWRIZWxsbyA9ICF0aGlzLmNvbmZpZy5zYXlIZWxsbztcbiAgICByZW5kZXJlck9wdGlvbnMgPSB1dGlscy5kZWZhdWx0T2JqZWN0KENPTlNULkRFRkFVTFRfUkVOREVSX09QVElPTlMsIHJlbmRlcmVyT3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yYWYgPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlciB3aWR0aFxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgODAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVyIGhlaWdodFxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJlciBpbiB1c2VcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmVyfENhbnZhc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBnZXRSZW5kZXJlcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcmVuZGVyZXJPcHRpb25zLCB0aGlzLmNvbmZpZy5ub1dlYkdMKTtcbiAgICB0aGlzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSBiZXR3ZWVuIGZyYW1lc1xuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lRWxhcHNlZFRpbWUgPSAwO1xuXG4gICAgLyoqXG4gICAgICogTGFzdCBmcmFtZSB0aW1lXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZnJhbWVMYXN0VGltZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgZ2FtZSB0aW1lXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVsdGEgdGltZVxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmRlbHRhID0gMDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJlbmRlcmVyIGlzIGEgd2ViZ2xcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNXZWJHTCA9ICh0aGlzLnJlbmRlcmVyIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NlbmUgbWFuYWdlciBmb3IgdGhpcyBnYW1lXG4gICAgICogQG1lbWJlciB7U2NlbmVNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcih0aGlzKTtcbn1cblxuR2FtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lO1xuXG4vKipcbiAqIFN0YXJ0IHRoZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxuICogQHJldHVybnMge0dhbWV9XG4gKi9cbkdhbWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvL1RPRE86IFVucGF1c2UgYXVkaW8gbWFuYWdlcjtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWVcbiAqIEByZXR1cm5zIHtHYW1lfVxuICovXG5HYW1lLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xuICAgIC8vVE9ETzogcGF1c2UgYXVkaW9NYW5hZ2VyXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERyYXcgYW5kIGFuaW1hdGUgYWxsIHRoZSBhY3RvcnMgaW4gdGhlIHNjZW5lXG4gKiBAcmV0dXJucyB7R2FtZX1cbiAqL1xuR2FtZS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lTWFuYWdlcik7XG5cbiAgICB0aGlzLnNjZW5lTWFuYWdlci5hbmltYXRlKHRoaXMudGltZSwgdGhpcy5kZWx0YSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIGFsbCBnYW1lIHRpbWVzXG4gKiBAcmV0dXJucyB7R2FtZX1cbiAqL1xuR2FtZS5wcm90b3R5cGUudXBkYXRlVGltZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIHRpbWUgPSBub3cgLSB0aGlzLmZyYW1lTGFzdFRpbWU7XG4gICAgdGhpcy5mcmFtZUVsYXBzZWRUaW1lID0gKHRpbWUgPD0gdGhpcy5jb25maWcuZnJhbWVMaW1pdCkgPyB0aW1lIDogdGhpcy5jb25maWcuZnJhbWVMaW1pdDtcbiAgICB0aGlzLmZyYW1lTGFzdFRpbWUgPSBub3c7XG4gICAgdGhpcy5kZWx0YSA9IHRoaXMuZnJhbWVFbGFwc2VkVGltZS8xMDAwO1xuICAgIHRoaXMudGltZSArPSB0aGlzLmRlbHRhO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlc2l6ZSB0aGUgdmlldyB1c2luZyBET00gU3R5bGVcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfVxuICogQHJldHVybnMge0dhbWV9XG4gKi9cbkdhbWUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpe1xuICAgIHZhciBjYW52YXMgPSB0aGlzLnJlbmRlcmVyLnZpZXc7XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIC8vVE9ETzogVXBkYXRlIGEgZ2FtZS53aWRodCBhbmQgZ2FtZS5oZWlnaHQ/XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG5cbmZ1bmN0aW9uIGdldFJlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMsIG5vV2ViR0wpe1xuICAgIGlmKG5hdmlnYXRvci5pc0NvY29vbkpTJiYhb3B0aW9ucy52aWV3KW9wdGlvbnMudmlldyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyZWVuY2FudmFzXCIpO1xuXG4gICAgdmFyIHJlbmRlcmVyID0gbmV3IGF1dG9EZXRlY3RSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zLCBub1dlYkdMKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci52aWV3KTtcblxuICAgIHJldHVybiByZW5kZXJlcjtcbn0iLCJ2YXIgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vbGliL3BpeGkvc3JjL2NvcmUvZGlzcGxheS9Db250YWluZXInKSxcbiAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvU2NlbmUnKTtcblxuLyoqXG4gKiBNYW5hZ2UgYW5kIHN0b3JlIGFsbCB0aGUgc2NlbmVzIGluIHRoZSBnYW1lXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUFFcbiAqIEBwYXJhbSBnYW1lIHtHYW1lfVxuICovXG5mdW5jdGlvbiBTY2VuZU1hbmFnZXIoZ2FtZSl7XG4gICAgQ29udGFpbmVyLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0dhbWV9XG4gICAgICovXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5zY2VuZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U2NlbmV9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xufVxuXG5TY2VuZU1hbmFnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb250YWluZXIucHJvdG90eXBlKTtcblNjZW5lTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY2VuZU1hbmFnZXI7XG5cbi8qKlxuICogU3RvcmUgYSBuZXcgc2NlbmVcbiAqXG4gKiBAcGFyYW0gc2NlbmUge1NjZW5lfVxuICogQHJldHVybnMge1NjZW5lTWFuYWdlcn1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5hZGRTY2VuZSA9IGZ1bmN0aW9uKHNjZW5lKXtcbiAgICB0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQW5pbWF0ZSB0aGUgY3VycmVudFNjZW5lXG4gKiBAcGFyYW0gZ2FtZVRpbWUge251bWJlcn1cbiAqIEBwYXJhbSBkZWx0YSB7bnVtYmVyfVxuICogQHJldHVybnMge1NjZW5lTWFuYWdlcn1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oZ2FtZVRpbWUsIGRlbHRhKXtcbiAgICBpZih0aGlzLmN1cnJlbnRTY2VuZSYmdGhpcy5jdXJyZW50U2NlbmUuYW5pbWF0ZSl7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmFuaW1hdGUoZ2FtZVRpbWUsIGRlbHRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGEgc2NlbmUgdG8gcmVuZGVyIGFuZCBhbmltYXRlXG4gKiBAcGFyYW0gc2NlbmUge1NjZW5lfVxuICogQHJldHVybnMge1NjZW5lTWFuYWdlcn1cbiAqL1xuU2NlbmVNYW5hZ2VyLnByb3RvdHlwZS5zZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbihzY2VuZSl7XG4gICAgc2NlbmUuc2V0TWFuYWdlcih0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICB0aGlzLmFkZENoaWxkKHNjZW5lKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZU1hbmFnZXI7IiwidmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2xpYi9waXhpL3NyYy9jb3JlL2NvbnN0Jyk7XG5cbi8qKlxuICogU3RyaW5nIG9mIHRoZSBjdXJyZW50IFBRIHZlcnNpb25cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWRVJTSU9OXG4gKi9cbmNvbnN0YW50cy5WRVJTSU9OID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuLyoqXG4gKiBTdHJpbmcgb2YgdGhlIGN1cnJlbnQgUElYSSB2ZXJzaW9uXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSVhJX1ZFUlNJT05cbiAqL1xuY29uc3RhbnRzLlBJWElfVkVSU0lPTiA9IHJlcXVpcmUoJy4uLy4uL2xpYi9waXhpL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gaWRlbnRpZnkgdGhlIEF1ZGlvIFR5cGUuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkge29iamVjdH0gQVVESU9fVFlQRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVRElPX1RZUEUuVU5LTk9XTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVRElPX1RZUEUuV0VCQVVESU9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBBVURJT19UWVBFLkhUTUxBVURJT1xuICovXG5jb25zdGFudHMuQVVESU9fVFlQRSA9IHtcbiAgICBVTktOT1dOIDogMCxcbiAgICBXRUJBVURJTyA6IDEsXG4gICAgSFRNTEFEVURJTyA6IDJcbn07XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZ2FtZSBvcHRpb25zIGlmIG5vbmUgYXJlIHN1cHBsaWVkIHRvIHtAbGluayBQUS5HYW1lfVxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHtvYmplY3R9IERFRkFVTFRfR0FNRV9PUFRJT05TXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMuZGVidWc9ZmFsc2VcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5zYXlIZWxsbz10cnVlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMubm9XZWJBdWRpbz1mYWxzZVxuICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLm5vV2ViR0w9ZmFsc2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmZyYW1lTGltaXQ9MzVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5lcnNpc3RhbnREYXRhPXRydWVcbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IERFRkFVTFRfUkVOREVSX09QVElPTlMuYXVkaW9FeHRzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMucGF1c2VPblZpc2liaWxpdHlDaGFuZ2U9dHJ1ZVxuICovXG5jb25zdGFudHMuREVGQVVMVF9HQU1FX09QVElPTlMgPSB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHNheUhlbGxvOiB0cnVlLFxuICAgIG5vV2ViQXVkaW86IGZhbHNlLFxuICAgIG5vV2ViR0w6IGZhbHNlLFxuICAgIGZyYW1lTGltaXQ6IDM1LFxuICAgIHBlcnNpc3RhbnREYXRhOiB0cnVlLFxuICAgIGF1ZGlvRXh0czogWydvZ2cnLCAnbXAzJywgJ3dhdiddLFxuICAgIHBhdXNlT25WaXNpYmlsaXR5Q2hhbmdlOiB0cnVlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50cztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdhbWUgOiByZXF1aXJlKCcuL0dhbWUnKSxcbiAgICBTY2VuZU1hbmFnZXIgOiByZXF1aXJlKCcuL1NjZW5lTWFuYWdlcicpXG59OyIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0JyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi9saWIvcGl4aS9zcmMvY29yZS91dGlscycpO1xuXG4vL3V0aWxzLl9zYWlkSGVsbG8gPSB0cnVlO1xuXG4vKipcbiAqIGxvZ3Mgb3V0IHJlbmRlcmVyIHR5cGUsIGF1ZGlvIHR5cGUsIGFuZCB2ZXJzaW9uXG4gKi9cbnV0aWxzLnNheUhlbGxvID0gZnVuY3Rpb24oKXtcbiAgICAvL1RPRE86IFJlbmRlcmVyVHlwZSwgQXVkaW9UeXBlLCBQaXhpIGNyZWRpdHNcbiAgICBpZighdGhpcy5fc2FpZEhlbGxvKWNvbnNvbGUubG9nKCdQZXJlbnF1ZW4uanMgdicrQ09OU1QuVkVSU0lPTiArICcgW2h0dHA6Ly9wZXJlcXVlbmpzLmNvbV0nKTtcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHQgcGFyYW1ldGVycyBpbiBjaGlsZCBvYmplY3Qgd2l0aCB0aGUgcGFyZW50IHZhbHVlc1xuICpcbiAqIEBwYXJhbSBwYXJlbnQge29iamVjdH1cbiAqIEBwYXJhbSBjaGlsZCB7b2JqZWN0fVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZGVmYXVsdE9iamVjdCA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpe1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCB7fTtcbiAgICBjaGlsZCA9IGNoaWxkIHx8IHt9O1xuICAgIGZvcih2YXIga2V5IGluIHBhcmVudCl7XG4gICAgICAgIGNoaWxkW2tleV0gPSAoY2hpbGRba2V5XSAhPT0gdW5kZWZpbmVkICYmIGNoaWxkW2tleV0gIT09IG51bGwpID8gY2hpbGRba2V5XSA6IHBhcmVudFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbn07XG5cbi8qKlxuICogRXh0ZW5kIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIGZyb20gb3RoZXIgb2JqZWN0XG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9XG4gKiBAcGFyYW0gbWl4aW4ge29iamVjdH1cbiAqL1xudXRpbHMubWl4aW4gPSBmdW5jdGlvbihvYmosIG1peGluKXtcbiAgICBmb3IodmFyIGtleSBpbiBtaXhpbil7XG4gICAgICAgIG9iai5wcm90b3R5cGVba2V5XSA9IG1peGluW2tleV07XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsczsiLCJ2YXIgR3JhcGhpY3MgPSByZXF1aXJlKCcuLi8uLi9saWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy9HcmFwaGljcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vY29yZS91dGlscycpLFxuICAgIG1peGluID0gcmVxdWlyZSgnLi9taXhpbicpO1xuXG51dGlscy5taXhpbihHcmFwaGljcywgbWl4aW4pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoaWNzOyIsInZhciBHcmFwaGljcyA9IHJlcXVpcmUoJy4uLy4uL2xpYi9waXhpL3NyYy9jb3JlL2dyYXBoaWNzL0dyYXBoaWNzJyk7XG5cbmZ1bmN0aW9uIFNjZW5lKCl7XG4gICAgR3JhcGhpY3MuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSBudWxsO1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvckRpcnR5ID0gZmFsc2U7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBudWxsO1xufVxuXG5TY2VuZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdyYXBoaWNzLnByb3RvdHlwZSk7XG5TY2VuZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY2VuZTtcblxuU2NlbmUucHJvdG90eXBlLnNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKXtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU2NlbmUucHJvdG90eXBlLnNldE1hbmFnZXIgPSBmdW5jdGlvbihtYW5hZ2VyKXtcbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuU2NlbmUucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihnYW1lVGltZSwgZGVsdGEpe1xuICAgIGlmKHRoaXMuX2JhY2tncm91bmRDb2xvckRpcnR5KXtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgdGhpcy5iZWdpbkZpbGwodGhpcy5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICAgICAgLmRyYXdSZWN0KDAsMCx0aGlzLm1hbmFnZXIuZ2FtZS53aWR0aCx0aGlzLm1hbmFnZXIuZ2FtZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgLmVuZEZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JEaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU2NlbmUucHJvdG90eXBlLCB7XG4gICAgYmFja2dyb3VuZENvbG9yIDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGNvbG9yKXtcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvckRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhZGRUbzogZnVuY3Rpb24ocGFyZW50KXtcbiAgICAgICAgaWYocGFyZW50KXBhcmVudC5hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcbiJdfQ==
