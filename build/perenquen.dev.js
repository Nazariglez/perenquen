(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PQ = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var core = require('./core');

//TODO: Add here addons

module.exports = core;
},{"./core":64}],2:[function(require,module,exports){
module.exports={
  "name": "pixi.js",
  "version": "3.0.0",
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
     * An array of passes - some filters contain a few steps this array simply stores the steps in a liniear fashion.
     * For example the blur filter has two passes blurX and blurY.
     *
     * @member {AbstractFilter[]}
     * @private
     */
    this.passes = [this];

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
    var fs = require('fs');

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

},{"./AbstractFilter":30,"fs":60}],32:[function(require,module,exports){
(function (__dirname){
var AbstractFilter = require('./AbstractFilter'),
    math =  require('../../../math'),
    fs = require('fs');

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
            mask:           { type: 'sampler2D', value: sprite.texture },
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

},{"../../../math":13,"./AbstractFilter":30,"fs":60}],33:[function(require,module,exports){
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
    var renderTarget = this.texturePool.pop() || new RenderTarget(this.renderer.gl, this.textureSize.width, this.textureSize.height, null, this.renderer.resolution);
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

},{"../../../math":13,"../utils/Quad":44,"../utils/RenderTarget":45,"./WebGLManager":38}],35:[function(require,module,exports){
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
}

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

},{"../const":3,"./EventData":54,"./PolyK":55,"./Ticker":56,"./eventTarget":57,"./pluginTarget":59}],59:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
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

},{}],62:[function(require,module,exports){
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

},{"../../lib/pixi/src/core/const":3,"../../package.json":61}],63:[function(require,module,exports){
var CONST = require('./const'),
    utils = require('./utils'),
    autoDetectRenderer = require('../../lib/pixi/src/core').autoDetectRenderer,
    WebGLRenderer = require('../../lib/pixi/src/core/renderers/webgl/WebGLRenderer');

/**
 * The main object of your game.
 *
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
 *
 * @constructor
 */
function Game(width, height, gameOptions, rendererOptions){
    this.config = utils.extendNewObject(CONST.DEFAULT_GAME_OPTIONS, gameOptions);
    utils._saidHello = !this.config.sayHello;
    rendererOptions = utils.extendNewObject(CONST.DEFAULT_RENDER_OPTIONS, rendererOptions);

    this.raf = null;
    this.width = width || 800;
    this.height = height || 600;
    this.renderer = getRenderer(this.width, this.height, rendererOptions, this.config.noWebGL);
    this.resize(this.width, this.height);

    this.frameElapsedTime = 0;
    this.frameLastTime = 0;
    this.time = 0;
    this.delta = 0;

    this.isWebGL = (this.renderer instanceof WebGLRenderer);
}

Game.prototype.constructor = Game;

Game.prototype.start = function(){
    this.updateTime();
    this.animate();
    //TODO: Unpause audio manager;
    return this;
};

Game.prototype.stop = function(){
    window.cancelAnimationFrame(this.raf);
    //TODO: pause audioManager
    return this;
};

Game.prototype.animate = function(){
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
    this.updateTime();
    //TODO: Renderer scene
};

Game.prototype.updateTime = function(){
    var now = Date.now();
    var time = now - this.frameLastTime;
    this.frameElapsedTime = (time <= this.config.frameLimit) ? time : this.config.frameLimit;
    this.frameLastTime = now;
    this.delta = this.frameElapsedTime/1000;
    this.time += this.frameElapsedTime;
};

Game.prototype.resize = function(width, height){
    var canvas = this.renderer.view;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    return this;
};

module.exports = Game;

function getRenderer(width, height, options, noWebGL){
    if(navigator.isCocoonJS&&!options.view)options.view = window.document.createElement("screencanvas");

    var renderer = new autoDetectRenderer(width, height, options, noWebGL);
    window.document.body.appendChild(renderer.view);

    return renderer;
}
},{"../../lib/pixi/src/core":10,"../../lib/pixi/src/core/renderers/webgl/WebGLRenderer":29,"./const":62,"./utils":65}],64:[function(require,module,exports){
module.exports = {
    Game : require('./game.js')
};
},{"./game.js":63}],65:[function(require,module,exports){
var CONST = require('../const'),
    utils = require('../../../lib/pixi/src/core/utils');

//utils._saidHello = true;

utils.sayHello = function(){
    //TODO: RendererType, AudioType, Pixi credits
    if(!this._saidHello)console.log('Perenquen.js v'+CONST.VERSION + ' [http://perequenjs.com]');
};

utils.extendNewObject = function(parent, child){
    parent = parent || {};
    child = child || {};
    for(var key in parent){
        child[key] = (child[key] !== undefined && child[key] !== null) ? child[key] : parent[key];
    }

    return child;
};

module.exports = utils;
},{"../../../lib/pixi/src/core/utils":58,"../const":62}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJsaWIvcGl4aS9wYWNrYWdlLmpzb24iLCJsaWIvcGl4aS9zcmMvY29yZS9jb25zdC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL2Rpc3BsYXkvQ29udGFpbmVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZGlzcGxheS9EaXNwbGF5T2JqZWN0LmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3MvR3JhcGhpY3MuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy9HcmFwaGljc0RhdGEuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9ncmFwaGljcy93ZWJnbC9HcmFwaGljc1JlbmRlcmVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvZ3JhcGhpY3Mvd2ViZ2wvV2ViR0xHcmFwaGljc0RhdGEuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9pbmRleC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvTWF0cml4LmpzIiwibGliL3BpeGkvc3JjL2NvcmUvbWF0aC9Qb2ludC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvaW5kZXguanMiLCJsaWIvcGl4aS9zcmMvY29yZS9tYXRoL3NoYXBlcy9DaXJjbGUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9tYXRoL3NoYXBlcy9FbGxpcHNlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvbWF0aC9zaGFwZXMvUG9seWdvbi5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvc2hhcGVzL1JlY3RhbmdsZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL21hdGgvc2hhcGVzL1JvdW5kZWRSZWN0YW5nbGUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvUGFydGljbGVDb250YWluZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVCdWZmZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3BhcnRpY2xlcy93ZWJnbC9QYXJ0aWNsZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9TeXN0ZW1SZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9jYW52YXMvQ2FudmFzUmVuZGVyZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzR3JhcGhpY3MuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc01hc2tNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNUaW50ZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL0Fic3RyYWN0RmlsdGVyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL2ZpbHRlcnMvRlhBQUZpbHRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9maWx0ZXJzL1Nwcml0ZU1hc2tGaWx0ZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvQmxlbmRNb2RlTWFuYWdlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9tYW5hZ2Vycy9GaWx0ZXJNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL01hc2tNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL1NoYWRlck1hbmFnZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvU3RlbmNpbE1hbmFnZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvbWFuYWdlcnMvV2ViR0xNYW5hZ2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL3NoYWRlcnMvQ29tcGxleFByaW1pdGl2ZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1ByaW1pdGl2ZVNoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1NoYWRlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC9zaGFkZXJzL1RleHR1cmVTaGFkZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXIuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvUXVhZC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3JlbmRlcmVycy93ZWJnbC91dGlscy9SZW5kZXJUYXJnZXQuanMiLCJsaWIvcGl4aS9zcmMvY29yZS9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvU3RlbmNpbE1hc2tTdGFjay5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3Nwcml0ZXMvU3ByaXRlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvc3ByaXRlcy93ZWJnbC9TcHJpdGVSZW5kZXJlci5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3RleHR1cmVzL0Jhc2VUZXh0dXJlLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdGV4dHVyZXMvUmVuZGVyVGV4dHVyZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3RleHR1cmVzL1RleHR1cmUuanMiLCJsaWIvcGl4aS9zcmMvY29yZS90ZXh0dXJlcy9UZXh0dXJlVXZzLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdGV4dHVyZXMvVmlkZW9CYXNlVGV4dHVyZS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL0V2ZW50RGF0YS5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL1BvbHlLLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdXRpbHMvVGlja2VyLmpzIiwibGliL3BpeGkvc3JjL2NvcmUvdXRpbHMvZXZlbnRUYXJnZXQuanMiLCJsaWIvcGl4aS9zcmMvY29yZS91dGlscy9pbmRleC5qcyIsImxpYi9waXhpL3NyYy9jb3JlL3V0aWxzL3BsdWdpblRhcmdldC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvY29yZS9jb25zdC5qcyIsInNyYy9jb3JlL2dhbWUuanMiLCJzcmMvY29yZS9pbmRleC5qcyIsInNyYy9jb3JlL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9ZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL2NvcmUnKTtcblxuLy9UT0RPOiBBZGQgaGVyZSBhZGRvbnNcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlOyIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwicGl4aS5qc1wiLFxuICBcInZlcnNpb25cIjogXCIzLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGl4aS5qcyBpcyBhIGZhc3QgbGlnaHR3ZWlnaHQgMkQgbGlicmFyeSB0aGF0IHdvcmtzIGFjcm9zcyBhbGwgZGV2aWNlcy5cIixcbiAgXCJhdXRob3JcIjogXCJNYXQgR3JvdmVzXCIsXG4gIFwiY29udHJpYnV0b3JzXCI6IFtcbiAgICBcIkNoYWQgRW5nbGVyIDxjaGFkQHBhbnRoZXJkZXYuY29tPlwiLFxuICAgIFwiUmljaGFyZCBEYXZleSA8cmRhdmV5QGdtYWlsLmNvbT5cIlxuICBdLFxuICBcIm1haW5cIjogXCIuL3NyYy9pbmRleC5qc1wiLFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cDovL2dvb2Rib3lkaWdpdGFsLmNvbS9cIixcbiAgXCJidWdzXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0dvb2RCb3lEaWdpdGFsL3BpeGkuanMvaXNzdWVzXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0dvb2RCb3lEaWdpdGFsL3BpeGkuanMuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRlc3RcIjogXCJndWxwIHRlc3RcIixcbiAgICBcImRvY3NcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL2pzZG9jIC1jIC4vZ3VscC91dGlsL2pzZG9jLmNvbmYuanNvblwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyZnNcIjogXCJeMS4yLjBcIixcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeOC4wLjJcIixcbiAgICBcImNoYWlcIjogXCJeMS4xMC4wXCIsXG4gICAgXCJkZWxcIjogXCJeMS4xLjBcIixcbiAgICBcImd1bHBcIjogXCJeMy44LjEwXCIsXG4gICAgXCJndWxwLWNhY2hlZFwiOiBcIl4xLjAuMVwiLFxuICAgIFwiZ3VscC1jb25jYXRcIjogXCJeMi41LjJcIixcbiAgICBcImd1bHAtZGVidWdcIjogXCJeMi4wLjBcIixcbiAgICBcImd1bHAtanNkb2NcIjogXCJeMC4xLjRcIixcbiAgICBcImd1bHAtanNoaW50XCI6IFwiXjEuOS4wXCIsXG4gICAgXCJndWxwLXBsdW1iZXJcIjogXCJeMC42LjZcIixcbiAgICBcImd1bHAtcmVuYW1lXCI6IFwiXjEuMi4wXCIsXG4gICAgXCJndWxwLXVnbGlmeVwiOiBcIl4xLjAuMlwiLFxuICAgIFwiZ3VscC11dGlsXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJpbmstZG9jc3RyYXBcIjogXCJeMC41LjJcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuMy4wLWFscGhhMTNcIixcbiAgICBcImpzaGludC1zdW1tYXJ5XCI6IFwiXjAuNC4wXCIsXG4gICAgXCJrYXJtYVwiOiBcIl4wLjEyLjI4XCIsXG4gICAgXCJrYXJtYS1maXJlZm94LWxhdW5jaGVyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJrYXJtYS1tb2NoYVwiOiBcIl4wLjEuMTBcIixcbiAgICBcImthcm1hLXNwZWMtcmVwb3J0ZXJcIjogXCJeMC4wLjE2XCIsXG4gICAgXCJtaW5pbWlzdFwiOiBcIl4xLjEuMFwiLFxuICAgIFwibW9jaGFcIjogXCJeMi4xLjBcIixcbiAgICBcInJlcXVpcmUtZGlyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJydW4tc2VxdWVuY2VcIjogXCJeMS4wLjJcIixcbiAgICBcInZpbnlsLWJ1ZmZlclwiOiBcIl4xLjAuMFwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjAuMFwiLFxuICAgIFwid2F0Y2hpZnlcIjogXCJeMi4yLjFcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJhc3luY1wiOiBcIl4wLjkuMFwiLFxuICAgIFwicmVzb3VyY2UtbG9hZGVyXCI6IFwiXjEuMi4wXCJcbiAgfSxcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcImJyZnNcIlxuICAgIF1cbiAgfVxufVxuIiwiLyoqXG4gKiBDb25zdGFudCB2YWx1ZXMgdXNlZCBpbiBwaXhpXG4gKlxuICogQG1lbWJlcm9mIFBJWElcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLyoqXG4gICAgICogU3RyaW5nIG9mIHRoZSBjdXJyZW50IFBJWEkgdmVyc2lvblxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWRVJTSU9OXG4gICAgICovXG4gICAgVkVSU0lPTjogcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJykudmVyc2lvbixcblxuICAgIC8qKlxuICAgICAqIENvbnN0YW50IHRvIGlkZW50aWZ5IHRoZSBSZW5kZXJlciBUeXBlLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBSRU5ERVJFUl9UWVBFXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFJFTkRFUkVSX1RZUEUuVU5LTk9XTlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBSRU5ERVJFUl9UWVBFLldFQkdMXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFJFTkRFUkVSX1RZUEUuQ0FOVkFTXG4gICAgICovXG4gICAgUkVOREVSRVJfVFlQRToge1xuICAgICAgICBVTktOT1dOOiAgICAwLFxuICAgICAgICBXRUJHTDogICAgICAxLFxuICAgICAgICBDQU5WQVM6ICAgICAyXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhcmlvdXMgYmxlbmQgbW9kZXMgc3VwcG9ydGVkIGJ5IFBJWEkuIElNUE9SVEFOVCAtIFRoZSBXZWJHTCByZW5kZXJlciBvbmx5IHN1cHBvcnRzXG4gICAgICogdGhlIE5PUk1BTCwgQURELCBNVUxUSVBMWSBhbmQgU0NSRUVOIGJsZW5kIG1vZGVzLiBBbnl0aGluZyBlbHNlIHdpbGwgc2lsZW50bHkgYWN0IGxpa2VcbiAgICAgKiBOT1JNQUwuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IEJMRU5EX01PREVTXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLk5PUk1BTFxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5BRERcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuTVVMVElQTFlcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuU0NSRUVOXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLk9WRVJMQVlcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuREFSS0VOXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLkxJR0hURU5cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQ09MT1JfRE9ER0VcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQ09MT1JfQlVSTlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5IQVJEX0xJR0hUXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLlNPRlRfTElHSFRcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuRElGRkVSRU5DRVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORF9NT0RFUy5FWENMVVNJT05cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuSFVFXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IEJMRU5EX01PREVTLlNBVFVSQVRJT05cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuQ09MT1JcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gQkxFTkRfTU9ERVMuTFVNSU5PU0lUWVxuICAgICAqL1xuICAgIEJMRU5EX01PREVTOiB7XG4gICAgICAgIE5PUk1BTDogICAgICAgICAwLFxuICAgICAgICBBREQ6ICAgICAgICAgICAgMSxcbiAgICAgICAgTVVMVElQTFk6ICAgICAgIDIsXG4gICAgICAgIFNDUkVFTjogICAgICAgICAzLFxuICAgICAgICBPVkVSTEFZOiAgICAgICAgNCxcbiAgICAgICAgREFSS0VOOiAgICAgICAgIDUsXG4gICAgICAgIExJR0hURU46ICAgICAgICA2LFxuICAgICAgICBDT0xPUl9ET0RHRTogICAgNyxcbiAgICAgICAgQ09MT1JfQlVSTjogICAgIDgsXG4gICAgICAgIEhBUkRfTElHSFQ6ICAgICA5LFxuICAgICAgICBTT0ZUX0xJR0hUOiAgICAgMTAsXG4gICAgICAgIERJRkZFUkVOQ0U6ICAgICAxMSxcbiAgICAgICAgRVhDTFVTSU9OOiAgICAgIDEyLFxuICAgICAgICBIVUU6ICAgICAgICAgICAgMTMsXG4gICAgICAgIFNBVFVSQVRJT046ICAgICAxNCxcbiAgICAgICAgQ09MT1I6ICAgICAgICAgIDE1LFxuICAgICAgICBMVU1JTk9TSVRZOiAgICAgMTZcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlIG1vZGVzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSBwaXhpLlxuICAgICAqXG4gICAgICogVGhlIERFRkFVTFQgc2NhbGUgbW9kZSBhZmZlY3RzIHRoZSBkZWZhdWx0IHNjYWxpbmcgbW9kZSBvZiBmdXR1cmUgb3BlcmF0aW9ucy5cbiAgICAgKiBJdCBjYW4gYmUgcmUtYXNzaWduZWQgdG8gZWl0aGVyIExJTkVBUiBvciBORUFSRVNULCBkZXBlbmRpbmcgdXBvbiBzdWl0YWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0NBTEVfTU9ERVNcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gU0NBTEVfTU9ERVMuREVGQVVMVD1MSU5FQVJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gU0NBTEVfTU9ERVMuTElORUFSIFNtb290aCBzY2FsaW5nXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFNDQUxFX01PREVTLk5FQVJFU1QgUGl4ZWxhdGluZyBzY2FsaW5nXG4gICAgICovXG4gICAgU0NBTEVfTU9ERVM6IHtcbiAgICAgICAgREVGQVVMVDogICAgMCxcbiAgICAgICAgTElORUFSOiAgICAgMCxcbiAgICAgICAgTkVBUkVTVDogICAgMVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZml4IHRoYXQgZGVub3RlcyBhIFVSTCBpcyBmb3IgYSByZXRpbmEgYXNzZXRcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gUkVUSU5BX1BSRUZJWFxuICAgICAqL1xuICAgIC8vZXhhbXBsZTogJ0AyeCcsXG4gICAgUkVUSU5BX1BSRUZJWDogL0AoLispeC8sXG5cbiAgICBSRVNPTFVUSU9OOjEsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCByZW5kZXIgb3B0aW9ucyBpZiBub25lIGFyZSBzdXBwbGllZCB0byB7QGxpbmsgUElYSS5XZWJHTFJlbmRlcmVyfVxuICAgICAqIG9yIHtAbGluayBQSVhJLkNhbnZhc1JlbmRlcmVyfS5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gREVGQVVMVF9SRU5ERVJfT1BUSU9OU1xuICAgICAqIEBwcm9wZXJ0eSB7SFRNTENhbnZhc0VsZW1lbnR9IERFRkFVTFRfUkVOREVSX09QVElPTlMudmlldz1udWxsXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLnRyYW5zcGFyZW50PWZhbHNlXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmFudGlhbGlhcz1mYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5mb3JjZUZYQUE9ZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMucHJlc2VydmVEcmF3aW5nQnVmZmVyPWZhbHNlXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IERFRkFVTFRfUkVOREVSX09QVElPTlMucmVzb2x1dGlvbj0xXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IERFRkFVTFRfUkVOREVSX09QVElPTlMuYmFja2dyb3VuZENvbG9yPTB4MDAwMDAwXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmNsZWFyQmVmb3JlUmVuZGVyPXRydWVcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMuYXV0b1Jlc2l6ZT1mYWxzZVxuICAgICAqL1xuICAgIERFRkFVTFRfUkVOREVSX09QVElPTlM6IHtcbiAgICAgICAgdmlldzogbnVsbCxcbiAgICAgICAgcmVzb2x1dGlvbjogMSxcbiAgICAgICAgYW50aWFsaWFzOiBmYWxzZSxcbiAgICAgICAgZm9yY2VGWEFBOiBmYWxzZSxcbiAgICAgICAgYXV0b1Jlc2l6ZTogZmFsc2UsXG4gICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDAwMDAwMCxcbiAgICAgICAgY2xlYXJCZWZvcmVSZW5kZXI6IHRydWUsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzIHRoYXQgaWRlbnRpZnkgc2hhcGVzLCBtYWlubHkgdG8gcHJldmVudCBgaW5zdGFuY2VvZmAgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGNvbnN0YW50XG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNIQVBFU1xuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBTSEFQRVMuUE9MWT0wXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNIQVBFUy5SRUNUPTFcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gU0hBUEVTLkNJUkM9MlxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBTSEFQRVMuRUxJUD0zXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFNIQVBFUy5SUkVDPTRcbiAgICAgKi9cbiAgICBTSEFQRVM6IHtcbiAgICAgICAgUE9MWTogMCxcbiAgICAgICAgUkVDVDogMSxcbiAgICAgICAgQ0lSQzogMixcbiAgICAgICAgRUxJUDogMyxcbiAgICAgICAgUlJFQzogNFxuICAgIH0sXG5cbiAgICBTUFJJVEVfQkFUQ0hfU0laRTogMjAwMCAvL25pY2UgYmFsYW5jZSBiZXR3ZWVuIG1vYmlsZSBhbmQgZGVza3RvcCBtYWNoaW5lc1xufTtcbiIsInZhciBtYXRoID0gcmVxdWlyZSgnLi4vbWF0aCcpLFxuICAgIERpc3BsYXlPYmplY3QgPSByZXF1aXJlKCcuL0Rpc3BsYXlPYmplY3QnKSxcbiAgICBSZW5kZXJUZXh0dXJlID0gcmVxdWlyZSgnLi4vdGV4dHVyZXMvUmVuZGVyVGV4dHVyZScpLFxuICAgIF90ZW1wTWF0cml4ID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbi8qKlxuICogQSBDb250YWluZXIgcmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgZGlzcGxheSBvYmplY3RzLlxuICogSXQgaXMgdGhlIGJhc2UgY2xhc3Mgb2YgYWxsIGRpc3BsYXkgb2JqZWN0cyB0aGF0IGFjdCBhcyBhIGNvbnRhaW5lciBmb3Igb3RoZXIgb2JqZWN0cy5cbiAqXG4gKmBgYGpzXG4gKiB2YXIgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKTtcbiAqIGBgYFxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBEaXNwbGF5T2JqZWN0XG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG5mdW5jdGlvbiBDb250YWluZXIoKVxue1xuICAgIERpc3BsYXlPYmplY3QuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcnJheSBvZiBjaGlsZHJlbiBvZiB0aGlzIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Rpc3BsYXlPYmplY3RbXX1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG59XG5cbi8vIGNvbnN0cnVjdG9yXG5Db250YWluZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEaXNwbGF5T2JqZWN0LnByb3RvdHlwZSk7XG5Db250YWluZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29udGFpbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBDb250YWluZXI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnRhaW5lci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIENvbnRhaW5lciwgc2V0dGluZyB0aGlzIHdpbGwgYWN0dWFsbHkgbW9kaWZ5IHRoZSBzY2FsZSB0byBhY2hpZXZlIHRoZSB2YWx1ZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ29udGFpbmVyI1xuICAgICAqL1xuICAgIHdpZHRoOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueCAqIHRoaXMuZ2V0TG9jYWxCb3VuZHMoKS53aWR0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5nZXRMb2NhbEJvdW5kcygpLndpZHRoO1xuXG4gICAgICAgICAgICBpZiAod2lkdGggIT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS54ID0gdmFsdWUgLyB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlLnggPSAxO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgQ29udGFpbmVyLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDb250YWluZXIjXG4gICAgICovXG4gICAgaGVpZ2h0OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICB0aGlzLnNjYWxlLnkgKiB0aGlzLmdldExvY2FsQm91bmRzKCkuaGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXRMb2NhbEJvdW5kcygpLmhlaWdodDtcblxuICAgICAgICAgICAgaWYgKGhlaWdodCAhPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSB2YWx1ZSAvIGhlaWdodCA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBBZGRzIGEgY2hpbGQgdG8gdGhlIGNvbnRhaW5lci5cbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBEaXNwbGF5T2JqZWN0IHRvIGFkZCB0byB0aGUgY29udGFpbmVyXG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQuXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpXG57XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2hpbGRBdChjaGlsZCwgdGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY2hpbGQgdG8gdGhlIGNvbnRhaW5lciBhdCBhIHNwZWNpZmllZCBpbmRleC4gSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0byBhZGRcbiAqIEBwYXJhbSBpbmRleCB7TnVtYmVyfSBUaGUgaW5kZXggdG8gcGxhY2UgdGhlIGNoaWxkIGluXG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQuXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuYWRkQ2hpbGRBdCA9IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpXG57XG4gICAgLy8gcHJldmVudCBhZGRpbmcgc2VsZiBhcyBjaGlsZFxuICAgIGlmIChjaGlsZCA9PT0gdGhpcylcbiAgICB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0aGlzLmNoaWxkcmVuLmxlbmd0aClcbiAgICB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNoaWxkICsgJ2FkZENoaWxkQXQ6IFRoZSBpbmRleCAnKyBpbmRleCArJyBzdXBwbGllZCBpcyBvdXQgb2YgYm91bmRzICcgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBTd2FwcyB0aGUgcG9zaXRpb24gb2YgMiBEaXNwbGF5IE9iamVjdHMgd2l0aGluIHRoaXMgY29udGFpbmVyLlxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH1cbiAqIEBwYXJhbSBjaGlsZDIge0Rpc3BsYXlPYmplY3R9XG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuc3dhcENoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkLCBjaGlsZDIpXG57XG4gICAgaWYgKGNoaWxkID09PSBjaGlsZDIpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGV4MSA9IHRoaXMuZ2V0Q2hpbGRJbmRleChjaGlsZCk7XG4gICAgdmFyIGluZGV4MiA9IHRoaXMuZ2V0Q2hpbGRJbmRleChjaGlsZDIpO1xuXG4gICAgaWYgKGluZGV4MSA8IDAgfHwgaW5kZXgyIDwgMClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3dhcENoaWxkcmVuOiBCb3RoIHRoZSBzdXBwbGllZCBEaXNwbGF5T2JqZWN0cyBtdXN0IGJlIGNoaWxkcmVuIG9mIHRoZSBjYWxsZXIuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZHJlbltpbmRleDFdID0gY2hpbGQyO1xuICAgIHRoaXMuY2hpbGRyZW5baW5kZXgyXSA9IGNoaWxkO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBwb3NpdGlvbiBvZiBhIGNoaWxkIERpc3BsYXlPYmplY3QgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBEaXNwbGF5T2JqZWN0IGluc3RhbmNlIHRvIGlkZW50aWZ5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBpbmRleCBwb3NpdGlvbiBvZiB0aGUgY2hpbGQgZGlzcGxheSBvYmplY3QgdG8gaWRlbnRpZnlcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5nZXRDaGlsZEluZGV4ID0gZnVuY3Rpb24gKGNoaWxkKVxue1xuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc3VwcGxpZWQgRGlzcGxheU9iamVjdCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIGNhbGxlcicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbn07XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgcG9zaXRpb24gb2YgYW4gZXhpc3RpbmcgY2hpbGQgaW4gdGhlIGRpc3BsYXkgb2JqZWN0IGNvbnRhaW5lclxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIERpc3BsYXlPYmplY3QgaW5zdGFuY2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgaW5kZXggbnVtYmVyXG4gKiBAcGFyYW0gaW5kZXgge051bWJlcn0gVGhlIHJlc3VsdGluZyBpbmRleCBudW1iZXIgZm9yIHRoZSBjaGlsZCBkaXNwbGF5IG9iamVjdFxuICovXG5Db250YWluZXIucHJvdG90eXBlLnNldENoaWxkSW5kZXggPSBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KVxue1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdXBwbGllZCBpbmRleCBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuZ2V0Q2hpbGRJbmRleChjaGlsZCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShjdXJyZW50SW5kZXgsIDEpOyAvL3JlbW92ZSBmcm9tIG9sZCBwb3NpdGlvblxuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7IC8vYWRkIGF0IG5ldyBwb3NpdGlvblxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjaGlsZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKlxuICogQHBhcmFtIGluZGV4IHtOdW1iZXJ9IFRoZSBpbmRleCB0byBnZXQgdGhlIGNoaWxkIGF0XG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgYXQgdGhlIGdpdmVuIGluZGV4LCBpZiBhbnkuXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleClcbntcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRDaGlsZEF0OiBTdXBwbGllZCBpbmRleCAnICsgaW5kZXggKyAnIGRvZXMgbm90IGV4aXN0IGluIHRoZSBjaGlsZCBsaXN0LCBvciB0aGUgc3VwcGxpZWQgRGlzcGxheU9iamVjdCBpcyBub3QgYSBjaGlsZCBvZiB0aGUgY2FsbGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5baW5kZXhdO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgY2hpbGQgZnJvbSB0aGUgY29udGFpbmVyLlxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtEaXNwbGF5T2JqZWN0fSBUaGUgY2hpbGQgdGhhdCB3YXMgcmVtb3ZlZC5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZClcbntcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZW1vdmVDaGlsZEF0KGluZGV4KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIGNoaWxkIGZyb20gdGhlIHNwZWNpZmllZCBpbmRleCBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0gaW5kZXgge051bWJlcn0gVGhlIGluZGV4IHRvIGdldCB0aGUgY2hpbGQgZnJvbVxuICogQHJldHVybiB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRoYXQgd2FzIHJlbW92ZWQuXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlQ2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleClcbntcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENoaWxkQXQoaW5kZXgpO1xuXG4gICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICByZXR1cm4gY2hpbGQ7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gdGhpcyBjb250YWluZXIgdGhhdCBhcmUgd2l0aGluIHRoZSBiZWdpbiBhbmQgZW5kIGluZGV4ZXMuXG4gKlxuICogQHBhcmFtIGJlZ2luSW5kZXgge051bWJlcn0gVGhlIGJlZ2lubmluZyBwb3NpdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyAwLlxuICogQHBhcmFtIGVuZEluZGV4IHtOdW1iZXJ9IFRoZSBlbmRpbmcgcG9zaXRpb24uIERlZmF1bHQgdmFsdWUgaXMgc2l6ZSBvZiB0aGUgY29udGFpbmVyLlxuICovXG5Db250YWluZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkcmVuID0gZnVuY3Rpb24gKGJlZ2luSW5kZXgsIGVuZEluZGV4KVxue1xuICAgIHZhciBiZWdpbiA9IGJlZ2luSW5kZXggfHwgMDtcbiAgICB2YXIgZW5kID0gdHlwZW9mIGVuZEluZGV4ID09PSAnbnVtYmVyJyA/IGVuZEluZGV4IDogdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIHJhbmdlID0gZW5kIC0gYmVnaW47XG5cbiAgICBpZiAocmFuZ2UgPiAwICYmIHJhbmdlIDw9IGVuZClcbiAgICB7XG4gICAgICAgIHZhciByZW1vdmVkID0gdGhpcy5jaGlsZHJlbi5zcGxpY2UoYmVnaW4sIHJhbmdlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZWQubGVuZ3RoOyArK2kpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbW92ZWRbaV0ucGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW1vdmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChyYW5nZSA9PT0gMCAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3JlbW92ZUNoaWxkcmVuOiBudW1lcmljIHZhbHVlcyBhcmUgb3V0c2lkZSB0aGUgYWNjZXB0YWJsZSByYW5nZS4nKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZWZ1bCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB0ZXh0dXJlIG9mIHRoZSBkaXNwbGF5IG9iamVjdCB0aGF0IGNhbiB0aGVuIGJlIHVzZWQgdG8gY3JlYXRlIHNwcml0ZXNcbiAqIFRoaXMgY2FuIGJlIHF1aXRlIHVzZWZ1bCBpZiB5b3VyIGRpc3BsYXlPYmplY3QgaXMgc3RhdGljIC8gY29tcGxpY2F0ZWQgYW5kIG5lZWRzIHRvIGJlIHJldXNlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfFdlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB1c2VkIHRvIGdlbmVyYXRlIHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHJlc29sdXRpb24ge051bWJlcn0gVGhlIHJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUgYmVpbmcgZ2VuZXJhdGVkXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtOdW1iZXJ9IFNlZSB7QGxpbmsgU0NBTEVfTU9ERVN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1RleHR1cmV9IGEgdGV4dHVyZSBvZiB0aGUgZGlzcGxheSBvYmplY3RcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5nZW5lcmF0ZVRleHR1cmUgPSBmdW5jdGlvbiAocmVuZGVyZXIsIHJlc29sdXRpb24sIHNjYWxlTW9kZSlcbntcbiAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRMb2NhbEJvdW5kcygpO1xuXG4gICAgdmFyIHJlbmRlclRleHR1cmUgPSBuZXcgUmVuZGVyVGV4dHVyZShyZW5kZXJlciwgYm91bmRzLndpZHRoIHwgMCwgYm91bmRzLmhlaWdodCB8IDAsIHJlbmRlcmVyLCBzY2FsZU1vZGUsIHJlc29sdXRpb24pO1xuXG4gICAgX3RlbXBNYXRyaXgudHggPSAtYm91bmRzLng7XG4gICAgX3RlbXBNYXRyaXgudHkgPSAtYm91bmRzLnk7XG5cbiAgICByZW5kZXJUZXh0dXJlLnJlbmRlcih0aGlzLCBfdGVtcE1hdHJpeCk7XG5cbiAgICByZXR1cm4gcmVuZGVyVGV4dHVyZTtcbn07XG5cbi8qXG4gKiBVcGRhdGVzIHRoZSB0cmFuc2Zvcm0gb24gYWxsIGNoaWxkcmVuIG9mIHRoaXMgY29udGFpbmVyIGZvciByZW5kZXJpbmdcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5Db250YWluZXIucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKCF0aGlzLnZpc2libGUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS51cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICB9XG59O1xuXG4vLyBwZXJmb3JtYW5jZSBpbmNyZWFzZSB0byBhdm9pZCB1c2luZyBjYWxsLi4gKDEweCBmYXN0ZXIpXG5Db250YWluZXIucHJvdG90eXBlLmNvbnRhaW5lclVwZGF0ZVRyYW5zZm9ybSA9IENvbnRhaW5lci5wcm90b3R5cGUudXBkYXRlVHJhbnNmb3JtO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgYm91bmRzIG9mIHRoZSBDb250YWluZXIgYXMgYSByZWN0YW5nbGUuIFRoZSBib3VuZHMgY2FsY3VsYXRpb24gdGFrZXMgYWxsIHZpc2libGUgY2hpbGRyZW4gaW50byBjb25zaWRlcmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gVGhlIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGFyZWFcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmKCF0aGlzLl9jdXJyZW50Qm91bmRzKVxuICAgIHtcblxuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRoLlJlY3RhbmdsZS5FTVBUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE8gdGhlIGJvdW5kcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkIHRoaXMgcmVuZGVyIHNlc3Npb24gc28gcmV0dXJuIHdoYXQgd2UgaGF2ZVxuXG4gICAgICAgIHZhciBtaW5YID0gSW5maW5pdHk7XG4gICAgICAgIHZhciBtaW5ZID0gSW5maW5pdHk7XG5cbiAgICAgICAgdmFyIG1heFggPSAtSW5maW5pdHk7XG4gICAgICAgIHZhciBtYXhZID0gLUluZmluaXR5O1xuXG4gICAgICAgIHZhciBjaGlsZEJvdW5kcztcbiAgICAgICAgdmFyIGNoaWxkTWF4WDtcbiAgICAgICAgdmFyIGNoaWxkTWF4WTtcblxuICAgICAgICB2YXIgY2hpbGRWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgaWYgKCFjaGlsZC52aXNpYmxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZFZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjaGlsZEJvdW5kcyA9IHRoaXMuY2hpbGRyZW5baV0uZ2V0Qm91bmRzKCk7XG5cbiAgICAgICAgICAgIG1pblggPSBtaW5YIDwgY2hpbGRCb3VuZHMueCA/IG1pblggOiBjaGlsZEJvdW5kcy54O1xuICAgICAgICAgICAgbWluWSA9IG1pblkgPCBjaGlsZEJvdW5kcy55ID8gbWluWSA6IGNoaWxkQm91bmRzLnk7XG5cbiAgICAgICAgICAgIGNoaWxkTWF4WCA9IGNoaWxkQm91bmRzLndpZHRoICsgY2hpbGRCb3VuZHMueDtcbiAgICAgICAgICAgIGNoaWxkTWF4WSA9IGNoaWxkQm91bmRzLmhlaWdodCArIGNoaWxkQm91bmRzLnk7XG5cbiAgICAgICAgICAgIG1heFggPSBtYXhYID4gY2hpbGRNYXhYID8gbWF4WCA6IGNoaWxkTWF4WDtcbiAgICAgICAgICAgIG1heFkgPSBtYXhZID4gY2hpbGRNYXhZID8gbWF4WSA6IGNoaWxkTWF4WTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGRWaXNpYmxlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbWF0aC5SZWN0YW5nbGUuRU1QVFk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm91bmRzID0gdGhpcy5fYm91bmRzO1xuXG4gICAgICAgIGJvdW5kcy54ID0gbWluWDtcbiAgICAgICAgYm91bmRzLnkgPSBtaW5ZO1xuICAgICAgICBib3VuZHMud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBib3VuZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHM7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgbm9uLWdsb2JhbCBsb2NhbCBib3VuZHMgb2YgdGhlIENvbnRhaW5lciBhcyBhIHJlY3RhbmdsZS5cbiAqIFRoZSBjYWxjdWxhdGlvbiB0YWtlcyBhbGwgdmlzaWJsZSBjaGlsZHJlbiBpbnRvIGNvbnNpZGVyYXRpb24uXG4gKlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSBUaGUgcmVjdGFuZ3VsYXIgYm91bmRpbmcgYXJlYVxuICovXG5Db250YWluZXIucHJvdG90eXBlLmdldExvY2FsQm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgbWF0cml4Q2FjaGUgPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuXG4gICAgdGhpcy53b3JsZFRyYW5zZm9ybSA9IG1hdGguTWF0cml4LklERU5USVRZO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5baV0udXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgfVxuXG4gICAgdGhpcy53b3JsZFRyYW5zZm9ybSA9IG1hdHJpeENhY2hlO1xuXG4gICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBXZWJHTCByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyV2ViR0wgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG5cbiAgICAvLyBpZiB0aGUgb2JqZWN0IGlzIG5vdCB2aXNpYmxlIG9yIHRoZSBhbHBoYSBpcyAwIHRoZW4gbm8gbmVlZCB0byByZW5kZXIgdGhpcyBlbGVtZW50XG4gICAgaWYgKCF0aGlzLnZpc2libGUgfHwgdGhpcy53b3JsZEFscGhhIDw9IDAgfHwgIXRoaXMucmVuZGVyYWJsZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaSwgajtcblxuICAgIC8vIGRvIGEgcXVpY2sgY2hlY2sgdG8gc2VlIGlmIHRoaXMgZWxlbWVudCBoYXMgYSBtYXNrIG9yIGEgZmlsdGVyLlxuICAgIGlmICh0aGlzLl9tYXNrIHx8IHRoaXMuX2ZpbHRlcnMpXG4gICAge1xuICAgICAgICByZW5kZXJlci5jdXJyZW50UmVuZGVyZXIuZmx1c2goKTtcblxuICAgICAgICAvLyBwdXNoIGZpbHRlciBmaXJzdCBhcyB3ZSBuZWVkIHRvIGVuc3VyZSB0aGUgc3RlbmNpbCBidWZmZXIgaXMgY29ycmVjdCBmb3IgYW55IG1hc2tpbmdcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmZpbHRlck1hbmFnZXIucHVzaEZpbHRlcih0aGlzLCB0aGlzLl9maWx0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9tYXNrKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5tYXNrTWFuYWdlci5wdXNoTWFzayh0aGlzLCB0aGlzLl9tYXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVyLmN1cnJlbnRSZW5kZXJlci5zdGFydCgpO1xuXG4gICAgICAgIC8vIGFkZCB0aGlzIG9iamVjdCB0byB0aGUgYmF0Y2gsIG9ubHkgcmVuZGVyZWQgaWYgaXQgaGFzIGEgdGV4dHVyZS5cbiAgICAgICAgdGhpcy5fcmVuZGVyV2ViR0wocmVuZGVyZXIpO1xuXG4gICAgICAgIC8vIG5vdyBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIGFuZCBtYWtlIHN1cmUgdGhleSBnZXQgcmVuZGVyZWRcbiAgICAgICAgZm9yIChpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlbmRlcldlYkdMKHJlbmRlcmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVyLmN1cnJlbnRSZW5kZXJlci5mbHVzaCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9tYXNrKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5tYXNrTWFuYWdlci5wb3BNYXNrKHRoaXMsIHRoaXMuX21hc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmZpbHRlck1hbmFnZXIucG9wRmlsdGVyKCk7XG5cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJlci5jdXJyZW50UmVuZGVyZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyV2ViR0wocmVuZGVyZXIpO1xuXG4gICAgICAgIC8vIHNpbXBsZSByZW5kZXIgY2hpbGRyZW4hXG4gICAgICAgIGZvciAoaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZW5kZXJXZWJHTChyZW5kZXJlcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFRvIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHN1YmNsYXNzXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXJcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUuX3JlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIC8vIHRoaXMgaXMgd2hlcmUgY29udGVudCBpdHNlbGYgZ2V0cyByZW5kZXJlZC4uLlxufTtcblxuLyoqXG4gKiBUbyBiZSBvdmVycmlkZGVuIGJ5IHRoZSBzdWJjbGFzc1xuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuICogQHByaXZhdGVcbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5fcmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIC8vIHRoaXMgaXMgd2hlcmUgY29udGVudCBpdHNlbGYgZ2V0cyByZW5kZXJlZC4uLlxufTtcblxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcn0gVGhlIHJlbmRlcmVyXG4gKi9cbkNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIC8vIGlmIG5vdCB2aXNpYmxlIG9yIHRoZSBhbHBoYSBpcyAwIHRoZW4gbm8gbmVlZCB0byByZW5kZXIgdGhpc1xuICAgIGlmICghdGhpcy52aXNpYmxlIHx8IHRoaXMuYWxwaGEgPD0gMCB8fCAhdGhpcy5yZW5kZXJhYmxlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tYXNrKVxuICAgIHtcbiAgICAgICAgcmVuZGVyZXIubWFza01hbmFnZXIucHVzaE1hc2sodGhpcy5fbWFzaywgcmVuZGVyZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlckNhbnZhcyhyZW5kZXJlcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5baV0ucmVuZGVyQ2FudmFzKHJlbmRlcmVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWFzaylcbiAgICB7XG4gICAgICAgIHJlbmRlcmVyLm1hc2tNYW5hZ2VyLnBvcE1hc2socmVuZGVyZXIpO1xuICAgIH1cbn07XG4iLCJ2YXIgbWF0aCA9IHJlcXVpcmUoJy4uL21hdGgnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyksXG4gICAgUmVuZGVyVGV4dHVyZSA9IHJlcXVpcmUoJy4uL3RleHR1cmVzL1JlbmRlclRleHR1cmUnKSxcbiAgICBfdGVtcE1hdHJpeCA9IG5ldyBtYXRoLk1hdHJpeCgpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhbGwgb2JqZWN0cyB0aGF0IGFyZSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICogVGhpcyBpcyBhbiBhYnN0cmFjdCBjbGFzcyBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkIG9uIGl0cyBvd24gcmF0aGVyIGl0IHNob3VsZCBiZSBleHRlbmRlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbmZ1bmN0aW9uIERpc3BsYXlPYmplY3QoKVxue1xuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlIG9mIHRoZSBvYmplY3QgcmVsYXRpdmUgdG8gdGhlIGxvY2FsIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXJlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtQb2ludH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IG1hdGguUG9pbnQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2FsZSBmYWN0b3Igb2YgdGhlIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqL1xuICAgIHRoaXMuc2NhbGUgPSBuZXcgbWF0aC5Qb2ludCgxLCAxKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwaXZvdCBwb2ludCBvZiB0aGUgZGlzcGxheU9iamVjdCB0aGF0IGl0IHJvdGF0ZXMgYXJvdW5kXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtQb2ludH1cbiAgICAgKi9cbiAgICB0aGlzLnBpdm90ID0gbmV3IG1hdGguUG9pbnQoMCwgMCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm90YXRpb24gb2YgdGhlIG9iamVjdCBpbiByYWRpYW5zLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucm90YXRpb24gPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wYWNpdHkgb2YgdGhlIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFscGhhID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2aXNpYmlsaXR5IG9mIHRoZSBvYmplY3QuIElmIGZhbHNlIHRoZSBvYmplY3Qgd2lsbCBub3QgYmUgZHJhd24sIGFuZFxuICAgICAqIHRoZSB1cGRhdGVUcmFuc2Zvcm0gZnVuY3Rpb24gd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQ2FuIHRoaXMgb2JqZWN0IGJlIHJlbmRlcmVkLCBpZiBmYWxzZSB0aGUgb2JqZWN0IHdpbGwgbm90IGJlIGRyYXduIGJ1dCB0aGUgdXBkYXRlVHJhbnNmb3JtXG4gICAgICogbWV0aG9kcyB3aWxsIHN0aWxsIGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IG9iamVjdCBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGlzIGRpc3BsYXkgb2JqZWN0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Q29udGFpbmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtdWx0aXBsaWVkIGFscGhhIG9mIHRoZSBkaXNwbGF5T2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy53b3JsZEFscGhhID0gMTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgdHJhbnNmb3JtIG9mIHRoZSBvYmplY3QgYmFzZWQgb24gd29ybGQgKHBhcmVudCkgZmFjdG9yc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7TWF0cml4fVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMud29ybGRUcmFuc2Zvcm0gPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcmVhIHRoZSBmaWx0ZXIgaXMgYXBwbGllZCB0by4gVGhpcyBpcyB1c2VkIGFzIG1vcmUgb2YgYW4gb3B0aW1pc2F0aW9uXG4gICAgICogcmF0aGVyIHRoYW4gZmlndXJpbmcgb3V0IHRoZSBkaW1lbnNpb25zIG9mIHRoZSBkaXNwbGF5T2JqZWN0IGVhY2ggZnJhbWUgeW91IGNhbiBzZXQgdGhpcyByZWN0YW5nbGVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlckFyZWEgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogY2FjaGVkIHNpbiByb3RhdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3IgPSAwO1xuXG4gICAgLyoqXG4gICAgICogY2FjaGVkIGNvcyByb3RhdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY3IgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsLCBjYWNoZWQgYm91bmRzIG9mIHRoZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2JvdW5kcyA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtb3N0IHVwLXRvLWRhdGUgYm91bmRzIG9mIHRoZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsLCBjYWNoZWQgbWFzayBvZiB0aGUgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXNrID0gbnVsbDtcblxuICAgIC8vVE9ETyByZW5hbWUgdG8gX2lzTWFza1xuICAgLy8gdGhpcy5pc01hc2sgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlZCBpbnRlcm5hbCBmbGFnLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NhY2hlQXNCaXRtYXAgPSBmYWxzZTtcbiAgICB0aGlzLl9jYWNoZWRPYmplY3QgPSBudWxsO1xufVxuXG4vLyBjb25zdHJ1Y3RvclxuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEaXNwbGF5T2JqZWN0O1xudXRpbHMuZXZlbnRUYXJnZXQubWl4aW4oRGlzcGxheU9iamVjdC5wcm90b3R5cGUpO1xubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5T2JqZWN0O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhEaXNwbGF5T2JqZWN0LnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZGlzcGxheU9iamVjdCBvbiB0aGUgeCBheGlzIHJlbGF0aXZlIHRvIHRoZSBsb2NhbCBjb29yZGluYXRlcyBvZiB0aGUgcGFyZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEaXNwbGF5T2JqZWN0I1xuICAgICAqL1xuICAgIHg6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBkaXNwbGF5T2JqZWN0IG9uIHRoZSB5IGF4aXMgcmVsYXRpdmUgdG8gdGhlIGxvY2FsIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXJlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERpc3BsYXlPYmplY3QjXG4gICAgICovXG4gICAgeToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHNwcml0ZSBpcyBnbG9iYWxseSB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgRGlzcGxheU9iamVjdCNcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB3b3JsZFZpc2libGU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0udmlzaWJsZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5wYXJlbnQ7XG4gICAgICAgICAgICB9IHdoaWxlIChpdGVtKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIG1hc2sgZm9yIHRoZSBkaXNwbGF5T2JqZWN0LiBBIG1hc2sgaXMgYW4gb2JqZWN0IHRoYXQgbGltaXRzIHRoZSB2aXNpYmlsaXR5IG9mIGFuIG9iamVjdCB0byB0aGUgc2hhcGUgb2YgdGhlIG1hc2sgYXBwbGllZCB0byBpdC5cbiAgICAgKiBJbiBQSVhJIGEgcmVndWxhciBtYXNrIG11c3QgYmUgYSBQSVhJLkdyYXBoaWNzIG9iamVjdC4gVGhpcyBhbGxvd3MgZm9yIG11Y2ggZmFzdGVyIG1hc2tpbmcgaW4gY2FudmFzIGFzIGl0IHV0aWxpc2VzIHNoYXBlIGNsaXBwaW5nLlxuICAgICAqIFRvIHJlbW92ZSBhIG1hc2ssIHNldCB0aGlzIHByb3BlcnR5IHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtHcmFwaGljc31cbiAgICAgKiBAbWVtYmVyb2YgRGlzcGxheU9iamVjdCNcbiAgICAgKi9cbiAgICBtYXNrOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hc2s7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWFzaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrLnJlbmRlcmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9tYXNrID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXNrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hc2sucmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGZpbHRlcnMgZm9yIHRoZSBkaXNwbGF5T2JqZWN0LlxuICAgICAqICogSU1QT1JUQU5UOiBUaGlzIGlzIGEgd2ViR0wgb25seSBmZWF0dXJlIGFuZCB3aWxsIGJlIGlnbm9yZWQgYnkgdGhlIGNhbnZhcyByZW5kZXJlci5cbiAgICAgKiBUbyByZW1vdmUgZmlsdGVycyBzaW1wbHkgc2V0IHRoaXMgcHJvcGVydHkgdG8gJ251bGwnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtGaWx0ZXJbXX1cbiAgICAgKiBAbWVtYmVyb2YgRGlzcGxheU9iamVjdCNcbiAgICAgKi9cbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnMgJiYgdGhpcy5fZmlsdGVycy5zbGljZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVycyA9IHZhbHVlICYmIHZhbHVlLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG4vKlxuICogVXBkYXRlcyB0aGUgb2JqZWN0IHRyYW5zZm9ybSBmb3IgcmVuZGVyaW5nXG4gKlxuICogVE9ETyAtIE9wdGltaXphdGlvbiBwYXNzIVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpXG57XG5cbiAgICAvLyBjcmVhdGUgc29tZSBtYXRyaXggcmVmcyBmb3IgZWFzeSBhY2Nlc3NcbiAgICB2YXIgcHQgPSB0aGlzLnBhcmVudC53b3JsZFRyYW5zZm9ybTtcbiAgICB2YXIgd3QgPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuXG4gICAgLy8gdGVtcG9yYXJ5IG1hdHJpeCB2YXJpYWJsZXNcbiAgICB2YXIgYSwgYiwgYywgZCwgdHgsIHR5O1xuXG4gICAgLy8gc28gaWYgcm90YXRpb24gaXMgYmV0d2VlbiAwIHRoZW4gd2UgY2FuIHNpbXBsaWZ5IHRoZSBtdWx0aXBsaWNhdGlvbiBwcm9jZXNzLi4uXG4gICAgaWYgKHRoaXMucm90YXRpb24gJSBtYXRoLlBJXzIpXG4gICAge1xuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIHJvdGF0aW9uIGlzIHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cyByZW5kZXIuIFRoaXMgbWVhbnMgd2Ugb25seSBuZWVkIHRvIHVzZSBzaW4gYW5kIGNvcyB3aGVuIHJvdGF0aW9uIGFjdHVhbGx5IGNoYW5nZXNcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24gIT09IHRoaXMucm90YXRpb25DYWNoZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbkNhY2hlID0gdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX3NyID0gTWF0aC5zaW4odGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9jciA9IE1hdGguY29zKHRoaXMucm90YXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBtYXRyaXggdmFsdWVzIG9mIHRoZSBkaXNwbGF5b2JqZWN0IGJhc2VkIG9uIGl0cyB0cmFuc2Zvcm0gcHJvcGVydGllcy4uXG4gICAgICAgIGEgID0gIHRoaXMuX2NyICogdGhpcy5zY2FsZS54O1xuICAgICAgICBiICA9ICB0aGlzLl9zciAqIHRoaXMuc2NhbGUueDtcbiAgICAgICAgYyAgPSAtdGhpcy5fc3IgKiB0aGlzLnNjYWxlLnk7XG4gICAgICAgIGQgID0gIHRoaXMuX2NyICogdGhpcy5zY2FsZS55O1xuICAgICAgICB0eCA9ICB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIHR5ID0gIHRoaXMucG9zaXRpb24ueTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgcGl2b3QuLiBub3Qgb2Z0ZW4gdXNlZCBzbyBnZWFyZWQgdG93YXJkcyB0aGF0IGZhY3QhXG4gICAgICAgIGlmICh0aGlzLnBpdm90LnggfHwgdGhpcy5waXZvdC55KVxuICAgICAgICB7XG4gICAgICAgICAgICB0eCAtPSB0aGlzLnBpdm90LnggKiBhICsgdGhpcy5waXZvdC55ICogYztcbiAgICAgICAgICAgIHR5IC09IHRoaXMucGl2b3QueCAqIGIgKyB0aGlzLnBpdm90LnkgKiBkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uY2F0IHRoZSBwYXJlbnQgbWF0cml4IHdpdGggdGhlIG9iamVjdHMgdHJhbnNmb3JtLlxuICAgICAgICB3dC5hICA9IGEgICogcHQuYSArIGIgICogcHQuYztcbiAgICAgICAgd3QuYiAgPSBhICAqIHB0LmIgKyBiICAqIHB0LmQ7XG4gICAgICAgIHd0LmMgID0gYyAgKiBwdC5hICsgZCAgKiBwdC5jO1xuICAgICAgICB3dC5kICA9IGMgICogcHQuYiArIGQgICogcHQuZDtcbiAgICAgICAgd3QudHggPSB0eCAqIHB0LmEgKyB0eSAqIHB0LmMgKyBwdC50eDtcbiAgICAgICAgd3QudHkgPSB0eCAqIHB0LmIgKyB0eSAqIHB0LmQgKyBwdC50eTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy8gbGV0cyBkbyB0aGUgZmFzdCB2ZXJzaW9uIGFzIHdlIGtub3cgdGhlcmUgaXMgbm8gcm90YXRpb24uLlxuICAgICAgICBhICA9IHRoaXMuc2NhbGUueDtcbiAgICAgICAgZCAgPSB0aGlzLnNjYWxlLnk7XG5cbiAgICAgICAgdHggPSB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnBpdm90LnggKiBhO1xuICAgICAgICB0eSA9IHRoaXMucG9zaXRpb24ueSAtIHRoaXMucGl2b3QueSAqIGQ7XG5cbiAgICAgICAgd3QuYSAgPSBhICAqIHB0LmE7XG4gICAgICAgIHd0LmIgID0gYSAgKiBwdC5iO1xuICAgICAgICB3dC5jICA9IGQgICogcHQuYztcbiAgICAgICAgd3QuZCAgPSBkICAqIHB0LmQ7XG4gICAgICAgIHd0LnR4ID0gdHggKiBwdC5hICsgdHkgKiBwdC5jICsgcHQudHg7XG4gICAgICAgIHd0LnR5ID0gdHggKiBwdC5iICsgdHkgKiBwdC5kICsgcHQudHk7XG4gICAgfVxuXG4gICAgLy8gbXVsdGlwbHkgdGhlIGFscGhhcy4uXG4gICAgdGhpcy53b3JsZEFscGhhID0gdGhpcy5hbHBoYSAqIHRoaXMucGFyZW50LndvcmxkQWxwaGE7XG5cbiAgICAvLyByZXNldCB0aGUgYm91bmRzIGVhY2ggdGltZSB0aGlzIGlzIGNhbGxlZCFcbiAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbn07XG5cbi8vIHBlcmZvcm1hbmNlIGluY3JlYXNlIHRvIGF2b2lkIHVzaW5nIGNhbGwuLiAoMTB4IGZhc3RlcilcbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0gPSBEaXNwbGF5T2JqZWN0LnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm07XG5cbi8qKlxuICpcbiAqXG4gKiBSZXRyaWV2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZGlzcGxheU9iamVjdCBhcyBhIHJlY3RhbmdsZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gbWF0cml4IHtNYXRyaXh9XG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IHRoZSByZWN0YW5ndWxhciBib3VuZGluZyBhcmVhXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIChtYXRyaXgpXG57XG4gICAgcmV0dXJuIG1hdGguUmVjdGFuZ2xlLkVNUFRZO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGxvY2FsIGJvdW5kcyBvZiB0aGUgZGlzcGxheU9iamVjdCBhcyBhIHJlY3RhbmdsZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IHRoZSByZWN0YW5ndWxhciBib3VuZGluZyBhcmVhXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLmdldExvY2FsQm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMobWF0aC5NYXRyaXguSURFTlRJVFkpO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBnbG9iYWwgcG9zaXRpb24gb2YgdGhlIGRpc3BsYXkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHBvc2l0aW9uIHtQb2ludH0gVGhlIHdvcmxkIG9yaWdpbiB0byBjYWxjdWxhdGUgZnJvbVxuICogQHJldHVybiB7UG9pbnR9IEEgcG9pbnQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24gb2YgdGhpcyBvYmplY3RcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUudG9HbG9iYWwgPSBmdW5jdGlvbiAocG9zaXRpb24pXG57XG4gICAgLy8gZG9uJ3QgbmVlZCB0byB1cGRhdGUgdGhlIGxvdFxuICAgIHRoaXMuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIHJldHVybiB0aGlzLndvcmxkVHJhbnNmb3JtLmFwcGx5KHBvc2l0aW9uKTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbG9jYWwgcG9zaXRpb24gb2YgdGhlIGRpc3BsYXkgb2JqZWN0IHJlbGF0aXZlIHRvIGFub3RoZXIgcG9pbnRcbiAqXG4gKiBAcGFyYW0gcG9zaXRpb24ge1BvaW50fSBUaGUgd29ybGQgb3JpZ2luIHRvIGNhbGN1bGF0ZSBmcm9tXG4gKiBAcGFyYW0gW2Zyb21dIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCB0byBjYWxjdWxhdGUgdGhlIGdsb2JhbCBwb3NpdGlvbiBmcm9tXG4gKiBAcmV0dXJuIHtQb2ludH0gQSBwb2ludCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGlzIG9iamVjdFxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS50b0xvY2FsID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBmcm9tKVxue1xuICAgIGlmIChmcm9tKVxuICAgIHtcbiAgICAgICAgcG9zaXRpb24gPSBmcm9tLnRvR2xvYmFsKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBkb24ndCBuZWVkIHRvIHVwZGF0ZSB0aGUgbG90XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgcmV0dXJuIHRoaXMud29ybGRUcmFuc2Zvcm0uYXBwbHlJbnZlcnNlKHBvc2l0aW9uKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBXZWJHTCByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyXG4gKiBAcHJpdmF0ZVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICAvLyBPVkVSV1JJVEU7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcn0gVGhlIHJlbmRlcmVyXG4gKiBAcHJpdmF0ZVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5yZW5kZXJDYW52YXMgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgLy8gT1ZFUldSSVRFO1xufTtcbi8qKlxuICogVXNlZnVsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHRleHR1cmUgb2YgdGhlIGRpc3BsYXkgb2JqZWN0IHRoYXQgY2FuIHRoZW4gYmUgdXNlZCB0byBjcmVhdGUgc3ByaXRlc1xuICogVGhpcyBjYW4gYmUgcXVpdGUgdXNlZnVsIGlmIHlvdXIgZGlzcGxheU9iamVjdCBpcyBzdGF0aWMgLyBjb21wbGljYXRlZCBhbmQgbmVlZHMgdG8gYmUgcmV1c2VkIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ8V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0gcmVzb2x1dGlvbiB7TnVtYmVyfSBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgdGV4dHVyZSBiZWluZyBnZW5lcmF0ZWRcbiAqIEBwYXJhbSBzY2FsZU1vZGUge051bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VGV4dHVyZX0gYSB0ZXh0dXJlIG9mIHRoZSBkaXNwbGF5IG9iamVjdFxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5nZW5lcmF0ZVRleHR1cmUgPSBmdW5jdGlvbiAocmVuZGVyZXIsIHJlc29sdXRpb24sIHNjYWxlTW9kZSlcbntcbiAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRMb2NhbEJvdW5kcygpO1xuXG4gICAgdmFyIHJlbmRlclRleHR1cmUgPSBuZXcgUmVuZGVyVGV4dHVyZShyZW5kZXJlciwgYm91bmRzLndpZHRoIHwgMCwgYm91bmRzLmhlaWdodCB8IDAsIHJlbmRlcmVyLCBzY2FsZU1vZGUsIHJlc29sdXRpb24pO1xuXG4gICAgX3RlbXBNYXRyaXgudHggPSAtYm91bmRzLng7XG4gICAgX3RlbXBNYXRyaXgudHkgPSAtYm91bmRzLnk7XG5cbiAgICByZW5kZXJUZXh0dXJlLnJlbmRlcih0aGlzLCBfdGVtcE1hdHJpeCk7XG5cbiAgICByZXR1cm4gcmVuZGVyVGV4dHVyZTtcbn07XG4iLCJ2YXIgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vZGlzcGxheS9Db250YWluZXInKSxcbiAgICBTcHJpdGUgPSByZXF1aXJlKCcuLi9zcHJpdGVzL1Nwcml0ZScpLFxuICAgIFRleHR1cmUgPSByZXF1aXJlKCcuLi90ZXh0dXJlcy9UZXh0dXJlJyksXG4gICAgQ2FudmFzQnVmZmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNCdWZmZXInKSxcbiAgICBDYW52YXNHcmFwaGljcyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzR3JhcGhpY3MnKSxcbiAgICBHcmFwaGljc0RhdGEgPSByZXF1aXJlKCcuL0dyYXBoaWNzRGF0YScpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpLFxuICAgIHRlbXBQb2ludCA9IG5ldyBtYXRoLlBvaW50KCk7XG5cbi8qKlxuICogVGhlIEdyYXBoaWNzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdXNlZCB0byBkcmF3IHByaW1pdGl2ZSBzaGFwZXMgc3VjaCBhcyBsaW5lcywgY2lyY2xlcyBhbmRcbiAqIHJlY3RhbmdsZXMgdG8gdGhlIGRpc3BsYXksIGFuZCB0byBjb2xvciBhbmQgZmlsbCB0aGVtLlxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQ29udGFpbmVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG5mdW5jdGlvbiBHcmFwaGljcygpXG57XG4gICAgQ29udGFpbmVyLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWxwaGEgdmFsdWUgdXNlZCB3aGVuIGZpbGxpbmcgdGhlIEdyYXBoaWNzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgdGhpcy5maWxsQWxwaGEgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoICh0aGlja25lc3MpIG9mIGFueSBsaW5lcyBkcmF3bi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5saW5lV2lkdGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIG9mIGFueSBsaW5lcyBkcmF3bi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5saW5lQ29sb3IgPSAwO1xuXG4gICAgLyoqXG4gICAgICogR3JhcGhpY3MgZGF0YVxuICAgICAqXG4gICAgICogQG1lbWJlciB7R3JhcGhpY3NEYXRhW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmdyYXBoaWNzRGF0YSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbnQgYXBwbGllZCB0byB0aGUgZ3JhcGhpYyBzaGFwZS4gVGhpcyBpcyBhIGhleCB2YWx1ZS4gQXBwbHkgYSB2YWx1ZSBvZiAweEZGRkZGRiB0byByZXNldCB0aGUgdGludC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAweEZGRkZGRlxuICAgICAqL1xuICAgIHRoaXMudGludCA9IDB4RkZGRkZGO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByZXZpb3VzIHRpbnQgYXBwbGllZCB0byB0aGUgZ3JhcGhpYyBzaGFwZS4gVXNlZCB0byBjb21wYXJlIHRvIHRoZSBjdXJyZW50IHRpbnQgYW5kIGNoZWNrIGlmIHRoZXJlcyBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAZGVmYXVsdCAweEZGRkZGRlxuICAgICAqL1xuICAgIHRoaXMuX3ByZXZUaW50ID0gMHhGRkZGRkY7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmxlbmQgbW9kZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBncmFwaGljIHNoYXBlLiBBcHBseSBhIHZhbHVlIG9mIGJsZW5kTW9kZXMuTk9STUFMIHRvIHJlc2V0IHRoZSBibGVuZCBtb2RlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZSA9IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcGF0aFxuICAgICAqXG4gICAgICogQG1lbWJlciB7R3JhcGhpY3NEYXRhfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50UGF0aCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBjb250YWluaW5nIHNvbWUgV2ViR0wtcmVsYXRlZCBwcm9wZXJ0aWVzIHVzZWQgYnkgdGhlIFdlYkdMIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0PG51bWJlciwgb2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIC8vIFRPRE8gLSBfd2ViZ2wgc2hvdWxkIHVzZSBhIHByb3RvdHlwZSBvYmplY3QsIG5vdCBhIHJhbmRvbSB1bmRvY3VtZW50ZWQgb2JqZWN0Li4uXG4gICAgdGhpcy5fd2ViR0wgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhpcyBzaGFwZSBpcyBiZWluZyB1c2VkIGFzIGEgbWFzay5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc01hc2sgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib3VuZHMnIHBhZGRpbmcgdXNlZCBmb3IgYm91bmRzIGNhbGN1bGF0aW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuYm91bmRzUGFkZGluZyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhY2hlIG9mIHRoZSBsb2NhbCBib3VuZHMgdG8gcHJldmVudCByZWNhbGN1bGF0aW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbG9jYWxCb3VuZHMgPSBuZXcgbWF0aC5SZWN0YW5nbGUoMCwwLDEsMSk7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGRldGVjdCBpZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0IGhhcyBjaGFuZ2VkLiBJZiB0aGlzIGlzIHNldCB0byB0cnVlIHRoZW4gdGhlIGdyYXBoaWNzXG4gICAgICogb2JqZWN0IHdpbGwgYmUgcmVjYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBkZXRlY3QgaWYgdGhlIFdlYkdMIGdyYXBoaWNzIG9iamVjdCBoYXMgY2hhbmdlZC4gSWYgdGhpcyBpcyBzZXQgdG8gdHJ1ZSB0aGVuIHRoZVxuICAgICAqIGdyYXBoaWNzIG9iamVjdCB3aWxsIGJlIHJlY2FsY3VsYXRlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmdsRGlydHkgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGV0ZWN0IGlmIHRoZSBjYWNoZWQgc3ByaXRlIG9iamVjdCBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2FjaGVkU3ByaXRlRGlydHkgPSBmYWxzZTtcbn1cblxuLy8gY29uc3RydWN0b3JcbkdyYXBoaWNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29udGFpbmVyLnByb3RvdHlwZSk7XG5HcmFwaGljcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHcmFwaGljcztcbm1vZHVsZS5leHBvcnRzID0gR3JhcGhpY3M7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEdyYXBoaWNzLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFdoZW4gY2FjaGVBc0JpdG1hcCBpcyBzZXQgdG8gdHJ1ZSB0aGUgZ3JhcGhpY3Mgb2JqZWN0IHdpbGwgYmUgcmVuZGVyZWQgYXMgaWYgaXQgd2FzIGEgc3ByaXRlLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdXIgZ3JhcGhpY3MgZWxlbWVudCBkb2VzIG5vdCBjaGFuZ2Ugb2Z0ZW4sIGFzIGl0IHdpbGwgc3BlZWQgdXAgdGhlIHJlbmRlcmluZ1xuICAgICAqIG9mIHRoZSBvYmplY3QgaW4gZXhjaGFuZ2UgZm9yIHRha2luZyB1cCB0ZXh0dXJlIG1lbW9yeS4gSXQgaXMgYWxzbyB1c2VmdWwgaWYgeW91IG5lZWQgdGhlIGdyYXBoaWNzXG4gICAgICogb2JqZWN0IHRvIGJlIGFudGktYWxpYXNlZCwgYmVjYXVzZSBpdCB3aWxsIGJlIHJlbmRlcmVkIHVzaW5nIGNhbnZhcy4gVGhpcyBpcyBub3QgcmVjb21tZW5kZWQgaWZcbiAgICAgKiB5b3UgYXJlIGNvbnN0YW50bHkgcmVkcmF3aW5nIHRoZSBncmFwaGljcyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgR3JhcGhpY3MjXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEdyYXBoaWNzIG9iamVjdCB3aXRoIHRoZSBzYW1lIHZhbHVlcyBhcyB0aGlzIG9uZS5cbiAqXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgY2xvbmUgPSBuZXcgR3JhcGhpY3MoKTtcblxuICAgIGNsb25lLnJlbmRlcmFibGUgICAgPSB0aGlzLnJlbmRlcmFibGU7XG4gICAgY2xvbmUuZmlsbEFscGhhICAgICA9IHRoaXMuZmlsbEFscGhhO1xuICAgIGNsb25lLmxpbmVXaWR0aCAgICAgPSB0aGlzLmxpbmVXaWR0aDtcbiAgICBjbG9uZS5saW5lQ29sb3IgICAgID0gdGhpcy5saW5lQ29sb3I7XG4gICAgY2xvbmUudGludCAgICAgICAgICA9IHRoaXMudGludDtcbiAgICBjbG9uZS5ibGVuZE1vZGUgICAgID0gdGhpcy5ibGVuZE1vZGU7XG4gICAgY2xvbmUuaXNNYXNrICAgICAgICA9IHRoaXMuaXNNYXNrO1xuICAgIGNsb25lLmJvdW5kc1BhZGRpbmcgPSB0aGlzLmJvdW5kc1BhZGRpbmc7XG4gICAgY2xvbmUuZGlydHkgICAgICAgICA9IHRoaXMuZGlydHk7XG4gICAgY2xvbmUuZ2xEaXJ0eSAgICAgICA9IHRoaXMuZ2xEaXJ0eTtcbiAgICBjbG9uZS5jYWNoZWRTcHJpdGVEaXJ0eSA9IHRoaXMuY2FjaGVkU3ByaXRlRGlydHk7XG5cbiAgICAvLyBjb3B5IGdyYXBoaWNzIGRhdGFcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JhcGhpY3NEYXRhLmxlbmd0aDsgKytpKVxuICAgIHtcbiAgICAgICAgY2xvbmUuZ3JhcGhpY3NEYXRhLnB1c2godGhpcy5ncmFwaGljc0RhdGEuY2xvbmUoKSk7XG4gICAgfVxuXG4gICAgY2xvbmUuY3VycmVudFBhdGggPSBjbG9uZS5ncmFwaGljc0RhdGFbY2xvbmUuZ3JhcGhpY3NEYXRhLmxlbmd0aCAtIDFdO1xuXG4gICAgY2xvbmUudXBkYXRlTG9jYWxCb3VuZHMoKTtcblxuICAgIHJldHVybiBjbG9uZTtcbn07XG5cbi8qKlxuICogU3BlY2lmaWVzIHRoZSBsaW5lIHN0eWxlIHVzZWQgZm9yIHN1YnNlcXVlbnQgY2FsbHMgdG8gR3JhcGhpY3MgbWV0aG9kcyBzdWNoIGFzIHRoZSBsaW5lVG8oKSBtZXRob2Qgb3IgdGhlIGRyYXdDaXJjbGUoKSBtZXRob2QuXG4gKlxuICogQHBhcmFtIGxpbmVXaWR0aCB7bnVtYmVyfSB3aWR0aCBvZiB0aGUgbGluZSB0byBkcmF3LCB3aWxsIHVwZGF0ZSB0aGUgb2JqZWN0cyBzdG9yZWQgc3R5bGVcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSBjb2xvciBvZiB0aGUgbGluZSB0byBkcmF3LCB3aWxsIHVwZGF0ZSB0aGUgb2JqZWN0cyBzdG9yZWQgc3R5bGVcbiAqIEBwYXJhbSBhbHBoYSB7bnVtYmVyfSBhbHBoYSBvZiB0aGUgbGluZSB0byBkcmF3LCB3aWxsIHVwZGF0ZSB0aGUgb2JqZWN0cyBzdG9yZWQgc3R5bGVcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUubGluZVN0eWxlID0gZnVuY3Rpb24gKGxpbmVXaWR0aCwgY29sb3IsIGFscGhhKVxue1xuICAgIHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoIHx8IDA7XG4gICAgdGhpcy5saW5lQ29sb3IgPSBjb2xvciB8fCAwO1xuICAgIHRoaXMubGluZUFscGhhID0gKGFyZ3VtZW50cy5sZW5ndGggPCAzKSA/IDEgOiBhbHBoYTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gaGFsZndheSB0aHJvdWdoIGEgbGluZT8gc3RhcnQgYSBuZXcgb25lIVxuICAgICAgICAgICAgdGhpcy5kcmF3U2hhcGUoIG5ldyBtYXRoLlBvbHlnb24oIHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLnNsaWNlKC0yKSApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBpdHMgZW1wdHkgc28gbGV0cyBqdXN0IHNldCB0aGUgbGluZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5saW5lQ29sb3IgPSB0aGlzLmxpbmVDb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGgubGluZUFscGhhID0gdGhpcy5saW5lQWxwaGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTW92ZXMgdGhlIGN1cnJlbnQgZHJhd2luZyBwb3NpdGlvbiB0byB4LCB5LlxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IHRoZSBYIGNvb3JkaW5hdGUgdG8gbW92ZSB0b1xuICogQHBhcmFtIHkge251bWJlcn0gdGhlIFkgY29vcmRpbmF0ZSB0byBtb3ZlIHRvXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAgKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICB0aGlzLmRyYXdTaGFwZShuZXcgbWF0aC5Qb2x5Z29uKFt4LHldKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRHJhd3MgYSBsaW5lIHVzaW5nIHRoZSBjdXJyZW50IGxpbmUgc3R5bGUgZnJvbSB0aGUgY3VycmVudCBkcmF3aW5nIHBvc2l0aW9uIHRvICh4LCB5KTtcbiAqIFRoZSBjdXJyZW50IGRyYXdpbmcgcG9zaXRpb24gaXMgdGhlbiBzZXQgdG8gKHgsIHkpLlxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IHRoZSBYIGNvb3JkaW5hdGUgdG8gZHJhdyB0b1xuICogQHBhcmFtIHkge251bWJlcn0gdGhlIFkgY29vcmRpbmF0ZSB0byBkcmF3IHRvXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmxpbmVUbyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLnB1c2goeCwgeSk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBwb2ludHMgZm9yIGEgcXVhZHJhdGljIGJlemllciBjdXJ2ZSBhbmQgdGhlbiBkcmF3cyBpdC5cbiAqIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODUwOTcvaG93LWRvLWktaW1wbGVtZW50LWEtYmV6aWVyLWN1cnZlLWluLWNcbiAqXG4gKiBAcGFyYW0gY3BYIHtudW1iZXJ9IENvbnRyb2wgcG9pbnQgeFxuICogQHBhcmFtIGNwWSB7bnVtYmVyfSBDb250cm9sIHBvaW50IHlcbiAqIEBwYXJhbSB0b1gge251bWJlcn0gRGVzdGluYXRpb24gcG9pbnQgeFxuICogQHBhcmFtIHRvWSB7bnVtYmVyfSBEZXN0aW5hdGlvbiBwb2ludCB5XG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLnF1YWRyYXRpY0N1cnZlVG8gPSBmdW5jdGlvbiAoY3BYLCBjcFksIHRvWCwgdG9ZKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMgPSBbMCwgMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oMCwwKTtcbiAgICB9XG5cbiAgICB2YXIgeGEsXG4gICAgICAgIHlhLFxuICAgICAgICBuID0gMjAsXG4gICAgICAgIHBvaW50cyA9IHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICB0aGlzLm1vdmVUbygwLCAwKTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbVggPSBwb2ludHNbcG9pbnRzLmxlbmd0aC0yXTtcbiAgICB2YXIgZnJvbVkgPSBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXTtcblxuICAgIHZhciBqID0gMDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBuOyArK2kpXG4gICAge1xuICAgICAgICBqID0gaSAvIG47XG5cbiAgICAgICAgeGEgPSBmcm9tWCArICggKGNwWCAtIGZyb21YKSAqIGogKTtcbiAgICAgICAgeWEgPSBmcm9tWSArICggKGNwWSAtIGZyb21ZKSAqIGogKTtcblxuICAgICAgICBwb2ludHMucHVzaCggeGEgKyAoICgoY3BYICsgKCAodG9YIC0gY3BYKSAqIGogKSkgLSB4YSkgKiBqICksXG4gICAgICAgICAgICAgICAgICAgICB5YSArICggKChjcFkgKyAoICh0b1kgLSBjcFkpICogaiApKSAtIHlhKSAqIGogKSApO1xuICAgIH1cblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcG9pbnRzIGZvciBhIGJlemllciBjdXJ2ZSBhbmQgdGhlbiBkcmF3cyBpdC5cbiAqXG4gKiBAcGFyYW0gY3BYIHtudW1iZXJ9IENvbnRyb2wgcG9pbnQgeFxuICogQHBhcmFtIGNwWSB7bnVtYmVyfSBDb250cm9sIHBvaW50IHlcbiAqIEBwYXJhbSBjcFgyIHtudW1iZXJ9IFNlY29uZCBDb250cm9sIHBvaW50IHhcbiAqIEBwYXJhbSBjcFkyIHtudW1iZXJ9IFNlY29uZCBDb250cm9sIHBvaW50IHlcbiAqIEBwYXJhbSB0b1gge251bWJlcn0gRGVzdGluYXRpb24gcG9pbnQgeFxuICogQHBhcmFtIHRvWSB7bnVtYmVyfSBEZXN0aW5hdGlvbiBwb2ludCB5XG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmJlemllckN1cnZlVG8gPSBmdW5jdGlvbiAoY3BYLCBjcFksIGNwWDIsIGNwWTIsIHRvWCwgdG9ZKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMgPSBbMCwgMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oMCwwKTtcbiAgICB9XG5cbiAgICB2YXIgbiA9IDIwLFxuICAgICAgICBkdCxcbiAgICAgICAgZHQyLFxuICAgICAgICBkdDMsXG4gICAgICAgIHQyLFxuICAgICAgICB0MyxcbiAgICAgICAgcG9pbnRzID0gdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHM7XG5cbiAgICB2YXIgZnJvbVggPSBwb2ludHNbcG9pbnRzLmxlbmd0aC0yXTtcbiAgICB2YXIgZnJvbVkgPSBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXTtcblxuICAgIHZhciBqID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IG47ICsraSlcbiAgICB7XG4gICAgICAgIGogPSBpIC8gbjtcblxuICAgICAgICBkdCA9ICgxIC0gaik7XG4gICAgICAgIGR0MiA9IGR0ICogZHQ7XG4gICAgICAgIGR0MyA9IGR0MiAqIGR0O1xuXG4gICAgICAgIHQyID0gaiAqIGo7XG4gICAgICAgIHQzID0gdDIgKiBqO1xuXG4gICAgICAgIHBvaW50cy5wdXNoKCBkdDMgKiBmcm9tWCArIDMgKiBkdDIgKiBqICogY3BYICsgMyAqIGR0ICogdDIgKiBjcFgyICsgdDMgKiB0b1gsXG4gICAgICAgICAgICAgICAgICAgICBkdDMgKiBmcm9tWSArIDMgKiBkdDIgKiBqICogY3BZICsgMyAqIGR0ICogdDIgKiBjcFkyICsgdDMgKiB0b1kpO1xuICAgIH1cblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRoZSBhcmNUbygpIG1ldGhvZCBjcmVhdGVzIGFuIGFyYy9jdXJ2ZSBiZXR3ZWVuIHR3byB0YW5nZW50cyBvbiB0aGUgY2FudmFzLlxuICpcbiAqIFwiYm9ycm93ZWRcIiBmcm9tIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZnhjYW52YXMvIC0gdGhhbmtzIGdvb2dsZSFcbiAqXG4gKiBAcGFyYW0geDEge251bWJlcn0gVGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcmNcbiAqIEBwYXJhbSB5MSB7bnVtYmVyfSBUaGUgeS1jb29yZGluYXRlIG9mIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFyY1xuICogQHBhcmFtIHgyIHtudW1iZXJ9IFRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIGVuZCBvZiB0aGUgYXJjXG4gKiBAcGFyYW0geTIge251bWJlcn0gVGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgZW5kIG9mIHRoZSBhcmNcbiAqIEBwYXJhbSByYWRpdXMge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgYXJjXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmFyY1RvID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCByYWRpdXMpXG57XG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cy5wdXNoKHgxLCB5MSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oeDEsIHkxKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gdGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMsXG4gICAgICAgIGZyb21YID0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMl0sXG4gICAgICAgIGZyb21ZID0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMV0sXG4gICAgICAgIGExID0gZnJvbVkgLSB5MSxcbiAgICAgICAgYjEgPSBmcm9tWCAtIHgxLFxuICAgICAgICBhMiA9IHkyICAgLSB5MSxcbiAgICAgICAgYjIgPSB4MiAgIC0geDEsXG4gICAgICAgIG1tID0gTWF0aC5hYnMoYTEgKiBiMiAtIGIxICogYTIpO1xuXG4gICAgaWYgKG1tIDwgMS4wZS04IHx8IHJhZGl1cyA9PT0gMClcbiAgICB7XG4gICAgICAgIGlmIChwb2ludHNbcG9pbnRzLmxlbmd0aC0yXSAhPT0geDEgfHwgcG9pbnRzW3BvaW50cy5sZW5ndGgtMV0gIT09IHkxKVxuICAgICAgICB7XG4gICAgICAgICAgICBwb2ludHMucHVzaCh4MSwgeTEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHZhciBkZCA9IGExICogYTEgKyBiMSAqIGIxLFxuICAgICAgICAgICAgY2MgPSBhMiAqIGEyICsgYjIgKiBiMixcbiAgICAgICAgICAgIHR0ID0gYTEgKiBhMiArIGIxICogYjIsXG4gICAgICAgICAgICBrMSA9IHJhZGl1cyAqIE1hdGguc3FydChkZCkgLyBtbSxcbiAgICAgICAgICAgIGsyID0gcmFkaXVzICogTWF0aC5zcXJ0KGNjKSAvIG1tLFxuICAgICAgICAgICAgajEgPSBrMSAqIHR0IC8gZGQsXG4gICAgICAgICAgICBqMiA9IGsyICogdHQgLyBjYyxcbiAgICAgICAgICAgIGN4ID0gazEgKiBiMiArIGsyICogYjEsXG4gICAgICAgICAgICBjeSA9IGsxICogYTIgKyBrMiAqIGExLFxuICAgICAgICAgICAgcHggPSBiMSAqIChrMiArIGoxKSxcbiAgICAgICAgICAgIHB5ID0gYTEgKiAoazIgKyBqMSksXG4gICAgICAgICAgICBxeCA9IGIyICogKGsxICsgajIpLFxuICAgICAgICAgICAgcXkgPSBhMiAqIChrMSArIGoyKSxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgPSBNYXRoLmF0YW4yKHB5IC0gY3ksIHB4IC0gY3gpLFxuICAgICAgICAgICAgZW5kQW5nbGUgICA9IE1hdGguYXRhbjIocXkgLSBjeSwgcXggLSBjeCk7XG5cbiAgICAgICAgdGhpcy5hcmMoY3ggKyB4MSwgY3kgKyB5MSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYjEgKiBhMiA+IGIyICogYTEpO1xuICAgIH1cblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRoZSBhcmMgbWV0aG9kIGNyZWF0ZXMgYW4gYXJjL2N1cnZlICh1c2VkIHRvIGNyZWF0ZSBjaXJjbGVzLCBvciBwYXJ0cyBvZiBjaXJjbGVzKS5cbiAqXG4gKiBAcGFyYW0gY3gge251bWJlcn0gVGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGVcbiAqIEBwYXJhbSBjeSB7bnVtYmVyfSBUaGUgeS1jb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGNpcmNsZVxuICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfSBUaGUgcmFkaXVzIG9mIHRoZSBjaXJjbGVcbiAqIEBwYXJhbSBzdGFydEFuZ2xlIHtudW1iZXJ9IFRoZSBzdGFydGluZyBhbmdsZSwgaW4gcmFkaWFucyAoMCBpcyBhdCB0aGUgMyBvJ2Nsb2NrIHBvc2l0aW9uIG9mIHRoZSBhcmMncyBjaXJjbGUpXG4gKiBAcGFyYW0gZW5kQW5nbGUge251bWJlcn0gVGhlIGVuZGluZyBhbmdsZSwgaW4gcmFkaWFuc1xuICogQHBhcmFtIGFudGljbG9ja3dpc2Uge2Jvb2xlYW59IE9wdGlvbmFsLiBTcGVjaWZpZXMgd2hldGhlciB0aGUgZHJhd2luZyBzaG91bGQgYmUgY291bnRlcmNsb2Nrd2lzZSBvciBjbG9ja3dpc2UuIEZhbHNlIGlzIGRlZmF1bHQsIGFuZCBpbmRpY2F0ZXMgY2xvY2t3aXNlLCB3aGlsZSB0cnVlIGluZGljYXRlcyBjb3VudGVyLWNsb2Nrd2lzZS5cbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuYXJjID0gZnVuY3Rpb24oY3gsIGN5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKVxue1xuICAgIHZhciBzdGFydFggPSBjeCArIE1hdGguY29zKHN0YXJ0QW5nbGUpICogcmFkaXVzO1xuICAgIHZhciBzdGFydFkgPSBjeSArIE1hdGguc2luKHN0YXJ0QW5nbGUpICogcmFkaXVzO1xuICAgIHZhciBwb2ludHM7XG5cbiAgICBpZiggdGhpcy5jdXJyZW50UGF0aCApXG4gICAge1xuICAgICAgICBwb2ludHMgPSB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cztcblxuICAgICAgICBpZihwb2ludHMubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwb2ludHMucHVzaChzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggcG9pbnRzW3BvaW50cy5sZW5ndGgtMl0gIT09IHN0YXJ0WCB8fCBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXSAhPT0gc3RhcnRZKVxuICAgICAgICB7XG4gICAgICAgICAgICBwb2ludHMucHVzaChzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICBwb2ludHMgPSB0aGlzLmN1cnJlbnRQYXRoLnNoYXBlLnBvaW50cztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnRBbmdsZSA9PT0gZW5kQW5nbGUpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiggIWFudGljbG9ja3dpc2UgJiYgZW5kQW5nbGUgPD0gc3RhcnRBbmdsZSApXG4gICAge1xuICAgICAgICBlbmRBbmdsZSArPSBNYXRoLlBJICogMjtcbiAgICB9XG4gICAgZWxzZSBpZiggYW50aWNsb2Nrd2lzZSAmJiBzdGFydEFuZ2xlIDw9IGVuZEFuZ2xlIClcbiAgICB7XG4gICAgICAgIHN0YXJ0QW5nbGUgKz0gTWF0aC5QSSAqIDI7XG4gICAgfVxuXG4gICAgdmFyIHN3ZWVwID0gYW50aWNsb2Nrd2lzZSA/IChzdGFydEFuZ2xlIC0gZW5kQW5nbGUpICotMSA6IChlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpO1xuICAgIHZhciBzZWdzID0gIE1hdGguY2VpbCggTWF0aC5hYnMoc3dlZXApLyAoTWF0aC5QSSAqIDIpICkgKiA0MDtcblxuICAgIGlmKCBzd2VlcCA9PT0gMCApXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgdGhldGEgPSBzd2VlcC8oc2VncyoyKTtcbiAgICB2YXIgdGhldGEyID0gdGhldGEqMjtcblxuICAgIHZhciBjVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgdmFyIHNUaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcblxuICAgIHZhciBzZWdNaW51cyA9IHNlZ3MgLSAxO1xuXG4gICAgdmFyIHJlbWFpbmRlciA9ICggc2VnTWludXMgJSAxICkgLyBzZWdNaW51cztcblxuICAgIGZvcih2YXIgaT0wOyBpPD1zZWdNaW51czsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHJlYWwgPSAgaSArIHJlbWFpbmRlciAqIGk7XG5cblxuICAgICAgICB2YXIgYW5nbGUgPSAoKHRoZXRhKSArIHN0YXJ0QW5nbGUgKyAodGhldGEyICogcmVhbCkpO1xuXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICB2YXIgcyA9IC1NYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgcG9pbnRzLnB1c2goKCAoY1RoZXRhICogIGMpICsgKHNUaGV0YSAqIHMpICkgKiByYWRpdXMgKyBjeCxcbiAgICAgICAgICAgICAgICAgICAgKCAoY1RoZXRhICogLXMpICsgKHNUaGV0YSAqIGMpICkgKiByYWRpdXMgKyBjeSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3BlY2lmaWVzIGEgc2ltcGxlIG9uZS1jb2xvciBmaWxsIHRoYXQgc3Vic2VxdWVudCBjYWxscyB0byBvdGhlciBHcmFwaGljcyBtZXRob2RzXG4gKiAoc3VjaCBhcyBsaW5lVG8oKSBvciBkcmF3Q2lyY2xlKCkpIHVzZSB3aGVuIGRyYXdpbmcuXG4gKlxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciBvZiB0aGUgZmlsbFxuICogQHBhcmFtIGFscGhhIHtudW1iZXJ9IHRoZSBhbHBoYSBvZiB0aGUgZmlsbFxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5iZWdpbkZpbGwgPSBmdW5jdGlvbiAoY29sb3IsIGFscGhhKVxue1xuICAgIHRoaXMuZmlsbGluZyA9IHRydWU7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvciB8fCAwO1xuICAgIHRoaXMuZmlsbEFscGhhID0gKGFscGhhID09PSB1bmRlZmluZWQpID8gMSA6IGFscGhhO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5zaGFwZS5wb2ludHMubGVuZ3RoIDw9IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguZmlsbCA9IHRoaXMuZmlsbGluZztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguZmlsbENvbG9yID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmZpbGxBbHBoYSA9IHRoaXMuZmlsbEFscGhhO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZmlsbCB0byB0aGUgbGluZXMgYW5kIHNoYXBlcyB0aGF0IHdlcmUgYWRkZWQgc2luY2UgdGhlIGxhc3QgY2FsbCB0byB0aGUgYmVnaW5GaWxsKCkgbWV0aG9kLlxuICpcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZW5kRmlsbCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5maWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBudWxsO1xuICAgIHRoaXMuZmlsbEFscGhhID0gMTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmQgb2YgdGhlIHRvcC1sZWZ0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gVGhlIHdpZHRoIG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIGhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmRyYXdSZWN0ID0gZnVuY3Rpb24gKCB4LCB5LCB3aWR0aCwgaGVpZ2h0IClcbntcbiAgICB0aGlzLmRyYXdTaGFwZShuZXcgbWF0aC5SZWN0YW5nbGUoeCx5LCB3aWR0aCwgaGVpZ2h0KSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZCBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IFRoZSBoZWlnaHQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfSBSYWRpdXMgb2YgdGhlIHJlY3RhbmdsZSBjb3JuZXJzXG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5kcmF3Um91bmRlZFJlY3QgPSBmdW5jdGlvbiAoIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyApXG57XG4gICAgdGhpcy5kcmF3U2hhcGUobmV3IG1hdGguUm91bmRlZFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEcmF3cyBhIGNpcmNsZS5cbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGNpcmNsZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGVcbiAqIEBwYXJhbSByYWRpdXMge251bWJlcn0gVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gKiBAcmV0dXJuIHtHcmFwaGljc31cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiAoeCwgeSwgcmFkaXVzKVxue1xuICAgIHRoaXMuZHJhd1NoYXBlKG5ldyBtYXRoLkNpcmNsZSh4LHksIHJhZGl1cykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERyYXdzIGFuIGVsbGlwc2UuXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgaGFsZiB3aWR0aCBvZiB0aGUgZWxsaXBzZVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgaGFsZiBoZWlnaHQgb2YgdGhlIGVsbGlwc2VcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuZHJhd0VsbGlwc2UgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICB0aGlzLmRyYXdTaGFwZShuZXcgbWF0aC5FbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEcmF3cyBhIHBvbHlnb24gdXNpbmcgdGhlIGdpdmVuIHBhdGguXG4gKlxuICogQHBhcmFtIHBhdGgge0FycmF5fSBUaGUgcGF0aCBkYXRhIHVzZWQgdG8gY29uc3RydWN0IHRoZSBwb2x5Z29uLlxuICogQHJldHVybiB7R3JhcGhpY3N9XG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5kcmF3UG9seWdvbiA9IGZ1bmN0aW9uIChwYXRoKVxue1xuICAgIGlmICghKHBhdGggaW5zdGFuY2VvZiBBcnJheSkpXG4gICAge1xuICAgICAgICBwYXRoID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdTaGFwZShuZXcgbWF0aC5Qb2x5Z29uKHBhdGgpKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIGdyYXBoaWNzIHRoYXQgd2VyZSBkcmF3biB0byB0aGlzIEdyYXBoaWNzIG9iamVjdCwgYW5kIHJlc2V0cyBmaWxsIGFuZCBsaW5lIHN0eWxlIHNldHRpbmdzLlxuICpcbiAqIEByZXR1cm4ge0dyYXBoaWNzfVxuICovXG5HcmFwaGljcy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMubGluZVdpZHRoID0gMDtcbiAgICB0aGlzLmZpbGxpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5ncmFwaGljc0RhdGEgPSBbXTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBVc2VmdWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdGV4dHVyZSBvZiB0aGUgZ3JhcGhpY3Mgb2JqZWN0IHRoYXQgY2FuIHRoZW4gYmUgdXNlZCB0byBjcmVhdGUgc3ByaXRlc1xuICogVGhpcyBjYW4gYmUgcXVpdGUgdXNlZnVsIGlmIHlvdXIgZ2VvbWV0cnkgaXMgY29tcGxpY2F0ZWQgYW5kIG5lZWRzIHRvIGJlIHJldXNlZCBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAcGFyYW0gcmVzb2x1dGlvbiB7bnVtYmVyfSBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgdGV4dHVyZSBiZWluZyBnZW5lcmF0ZWRcbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2hvdWxkIGJlIG9uZSBvZiB0aGUgc2NhbGVNb2RlIGNvbnN0c1xuICogQHJldHVybiB7VGV4dHVyZX0gYSB0ZXh0dXJlIG9mIHRoZSBncmFwaGljcyBvYmplY3RcbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmdlbmVyYXRlVGV4dHVyZSA9IGZ1bmN0aW9uIChyZXNvbHV0aW9uLCBzY2FsZU1vZGUpXG57XG4gICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24gfHwgMTtcblxuICAgIHZhciBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuXG4gICAgdmFyIGNhbnZhc0J1ZmZlciA9IG5ldyBDYW52YXNCdWZmZXIoYm91bmRzLndpZHRoICogcmVzb2x1dGlvbiwgYm91bmRzLmhlaWdodCAqIHJlc29sdXRpb24pO1xuXG4gICAgdmFyIHRleHR1cmUgPSBUZXh0dXJlLmZyb21DYW52YXMoY2FudmFzQnVmZmVyLmNhbnZhcywgc2NhbGVNb2RlKTtcbiAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb24gPSByZXNvbHV0aW9uO1xuXG4gICAgY2FudmFzQnVmZmVyLmNvbnRleHQuc2NhbGUocmVzb2x1dGlvbiwgcmVzb2x1dGlvbik7XG5cbiAgICBjYW52YXNCdWZmZXIuY29udGV4dC50cmFuc2xhdGUoLWJvdW5kcy54LC1ib3VuZHMueSk7XG5cbiAgICBDYW52YXNHcmFwaGljcy5yZW5kZXJHcmFwaGljcyh0aGlzLCBjYW52YXNCdWZmZXIuY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBXZWJHTCByZW5kZXJlclxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn1cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLl9yZW5kZXJXZWJHTCA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICAvLyBpZiB0aGUgc3ByaXRlIGlzIG5vdCB2aXNpYmxlIG9yIHRoZSBhbHBoYSBpcyAwIHRoZW4gbm8gbmVlZCB0byByZW5kZXIgdGhpcyBlbGVtZW50XG5cbiAgICAvLyB0aGlzIGNvZGUgbWF5IHN0aWxsIGJlIG5lZWRlZCBzbyBsZWF2aW5nIGZvciBub3cuLlxuICAgIC8vXG4gICAgLypcbiAgICBpZiAodGhpcy5fY2FjaGVBc0JpdG1hcClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5IHx8IHRoaXMuY2FjaGVkU3ByaXRlRGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlQ2FjaGVkU3ByaXRlKCk7XG5cbiAgICAgICAgICAgIC8vIHdlIHdpbGwgYWxzbyBuZWVkIHRvIHVwZGF0ZSB0aGUgdGV4dHVyZSBvbiB0aGUgZ3B1IHRvbyFcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FjaGVkU3ByaXRlVGV4dHVyZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlZFNwcml0ZURpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUud29ybGRBbHBoYSA9IHRoaXMud29ybGRBbHBoYTtcblxuICAgICAgICBTcHJpdGUucHJvdG90eXBlLnJlbmRlcldlYkdMLmNhbGwodGhpcy5fY2FjaGVkU3ByaXRlLCByZW5kZXJlcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICovXG5cbiAgICBpZiAodGhpcy5nbERpcnR5KVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xEaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKHJlbmRlcmVyLnBsdWdpbnMuZ3JhcGhpY3MpO1xuICAgIHJlbmRlcmVyLnBsdWdpbnMuZ3JhcGhpY3MucmVuZGVyKHRoaXMpO1xuXG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIHtDYW52YXNSZW5kZXJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS5fcmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIGlmICh0aGlzLmlzTWFzayA9PT0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgdGludCBoYXMgY2hhbmdlZCwgc2V0IHRoZSBncmFwaGljcyBvYmplY3QgdG8gZGlydHkuXG4gICAgaWYgKHRoaXMuX3ByZXZUaW50ICE9PSB0aGlzLnRpbnQpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3ByZXZUaW50ID0gdGhpcy50aW50O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYWNoZUFzQml0bWFwKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkgfHwgdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVDYWNoZWRTcHJpdGUoKTtcblxuICAgICAgICAgICAgLy8gd2Ugd2lsbCBhbHNvIG5lZWQgdG8gdXBkYXRlIHRoZSB0ZXh0dXJlXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlZFNwcml0ZVRleHR1cmUoKTtcblxuICAgICAgICAgICAgdGhpcy5jYWNoZWRTcHJpdGVEaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFscGhhID0gdGhpcy5hbHBoYTtcblxuICAgICAgICBTcHJpdGUucHJvdG90eXBlLl9yZW5kZXJDYW52YXMuY2FsbCh0aGlzLl9jYWNoZWRTcHJpdGUsIHJlbmRlcmVyKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMud29ybGRUcmFuc2Zvcm07XG5cbiAgICAgICAgaWYgKHRoaXMuYmxlbmRNb2RlICE9PSByZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGU7XG4gICAgICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHJlbmRlcmVyLmJsZW5kTW9kZXNbcmVuZGVyZXIuY3VycmVudEJsZW5kTW9kZV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzb2x1dGlvbiA9IHJlbmRlcmVyLnJlc29sdXRpb247XG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgdHJhbnNmb3JtLmEgKiByZXNvbHV0aW9uLFxuICAgICAgICAgICAgdHJhbnNmb3JtLmIgKiByZXNvbHV0aW9uLFxuICAgICAgICAgICAgdHJhbnNmb3JtLmMgKiByZXNvbHV0aW9uLFxuICAgICAgICAgICAgdHJhbnNmb3JtLmQgKiByZXNvbHV0aW9uLFxuICAgICAgICAgICAgdHJhbnNmb3JtLnR4ICogcmVzb2x1dGlvbixcbiAgICAgICAgICAgIHRyYW5zZm9ybS50eSAqIHJlc29sdXRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBDYW52YXNHcmFwaGljcy5yZW5kZXJHcmFwaGljcyh0aGlzLCBjb250ZXh0KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgYm91bmRzIG9mIHRoZSBncmFwaGljIHNoYXBlIGFzIGEgcmVjdGFuZ2xlIG9iamVjdFxuICpcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIHJlY3Rhbmd1bGFyIGJvdW5kaW5nIGFyZWFcbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIChtYXRyaXgpXG57XG4gICAgaWYoIXRoaXMuX2N1cnJlbnRCb3VuZHMpXG4gICAge1xuXG4gICAgICAgIC8vIHJldHVybiBhbiBlbXB0eSBvYmplY3QgaWYgdGhlIGl0ZW0gaXMgYSBtYXNrIVxuICAgICAgICBpZiAoIXRoaXMucmVuZGVyYWJsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGguUmVjdGFuZ2xlLkVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlydHkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxCb3VuZHMoKTtcblxuICAgICAgICAgICAgdGhpcy5nbERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkU3ByaXRlRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuX2xvY2FsQm91bmRzO1xuXG4gICAgICAgIHZhciB3MCA9IGJvdW5kcy54O1xuICAgICAgICB2YXIgdzEgPSBib3VuZHMud2lkdGggKyBib3VuZHMueDtcblxuICAgICAgICB2YXIgaDAgPSBib3VuZHMueTtcbiAgICAgICAgdmFyIGgxID0gYm91bmRzLmhlaWdodCArIGJvdW5kcy55O1xuXG4gICAgICAgIHZhciB3b3JsZFRyYW5zZm9ybSA9IG1hdHJpeCB8fCB0aGlzLndvcmxkVHJhbnNmb3JtO1xuXG4gICAgICAgIHZhciBhID0gd29ybGRUcmFuc2Zvcm0uYTtcbiAgICAgICAgdmFyIGIgPSB3b3JsZFRyYW5zZm9ybS5iO1xuICAgICAgICB2YXIgYyA9IHdvcmxkVHJhbnNmb3JtLmM7XG4gICAgICAgIHZhciBkID0gd29ybGRUcmFuc2Zvcm0uZDtcbiAgICAgICAgdmFyIHR4ID0gd29ybGRUcmFuc2Zvcm0udHg7XG4gICAgICAgIHZhciB0eSA9IHdvcmxkVHJhbnNmb3JtLnR5O1xuXG4gICAgICAgIHZhciB4MSA9IGEgKiB3MSArIGMgKiBoMSArIHR4O1xuICAgICAgICB2YXIgeTEgPSBkICogaDEgKyBiICogdzEgKyB0eTtcblxuICAgICAgICB2YXIgeDIgPSBhICogdzAgKyBjICogaDEgKyB0eDtcbiAgICAgICAgdmFyIHkyID0gZCAqIGgxICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgdmFyIHgzID0gYSAqIHcwICsgYyAqIGgwICsgdHg7XG4gICAgICAgIHZhciB5MyA9IGQgKiBoMCArIGIgKiB3MCArIHR5O1xuXG4gICAgICAgIHZhciB4NCA9ICBhICogdzEgKyBjICogaDAgKyB0eDtcbiAgICAgICAgdmFyIHk0ID0gIGQgKiBoMCArIGIgKiB3MSArIHR5O1xuXG4gICAgICAgIHZhciBtYXhYID0geDE7XG4gICAgICAgIHZhciBtYXhZID0geTE7XG5cbiAgICAgICAgdmFyIG1pblggPSB4MTtcbiAgICAgICAgdmFyIG1pblkgPSB5MTtcblxuICAgICAgICBtaW5YID0geDIgPCBtaW5YID8geDIgOiBtaW5YO1xuICAgICAgICBtaW5YID0geDMgPCBtaW5YID8geDMgOiBtaW5YO1xuICAgICAgICBtaW5YID0geDQgPCBtaW5YID8geDQgOiBtaW5YO1xuXG4gICAgICAgIG1pblkgPSB5MiA8IG1pblkgPyB5MiA6IG1pblk7XG4gICAgICAgIG1pblkgPSB5MyA8IG1pblkgPyB5MyA6IG1pblk7XG4gICAgICAgIG1pblkgPSB5NCA8IG1pblkgPyB5NCA6IG1pblk7XG5cbiAgICAgICAgbWF4WCA9IHgyID4gbWF4WCA/IHgyIDogbWF4WDtcbiAgICAgICAgbWF4WCA9IHgzID4gbWF4WCA/IHgzIDogbWF4WDtcbiAgICAgICAgbWF4WCA9IHg0ID4gbWF4WCA/IHg0IDogbWF4WDtcblxuICAgICAgICBtYXhZID0geTIgPiBtYXhZID8geTIgOiBtYXhZO1xuICAgICAgICBtYXhZID0geTMgPiBtYXhZID8geTMgOiBtYXhZO1xuICAgICAgICBtYXhZID0geTQgPiBtYXhZID8geTQgOiBtYXhZO1xuXG4gICAgICAgIHRoaXMuX2JvdW5kcy54ID0gbWluWDtcbiAgICAgICAgdGhpcy5fYm91bmRzLndpZHRoID0gbWF4WCAtIG1pblg7XG5cbiAgICAgICAgdGhpcy5fYm91bmRzLnkgPSBtaW5ZO1xuICAgICAgICB0aGlzLl9ib3VuZHMuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IHRoaXMuX2JvdW5kcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcztcbn07XG5cbi8qKlxuKiBUZXN0cyBpZiBhIHBvaW50IGlzIGluc2lkZSB0aGlzIGdyYXBoaWNzIG9iamVjdFxuKlxuKiBAcGFyYW0gcG9pbnQge1BvaW50fSB0aGUgcG9pbnQgdG8gdGVzdFxuKiBAcmV0dXJuIHtib29sZWFufSB0aGUgcmVzdWx0IG9mIHRoZSB0ZXN0XG4qL1xuR3JhcGhpY3MucHJvdG90eXBlLmNvbnRhaW5zUG9pbnQgPSBmdW5jdGlvbiggcG9pbnQgKVxue1xuICAgIHRoaXMud29ybGRUcmFuc2Zvcm0uYXBwbHlJbnZlcnNlKHBvaW50LCAgdGVtcFBvaW50KTtcblxuICAgIHZhciBncmFwaGljc0RhdGEgPSB0aGlzLmdyYXBoaWNzRGF0YTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhpY3NEYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGRhdGEgPSBncmFwaGljc0RhdGFbaV07XG5cbiAgICAgICAgaWYgKCFkYXRhLmZpbGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBkZWFsIHdpdGggZmlsbHMuLlxuICAgICAgICBpZiAoZGF0YS5zaGFwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCBkYXRhLnNoYXBlLmNvbnRhaW5zKCB0ZW1wUG9pbnQueCwgdGVtcFBvaW50LnkgKSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgYm91bmRzIG9mIHRoZSBvYmplY3RcbiAqXG4gKi9cbkdyYXBoaWNzLnByb3RvdHlwZS51cGRhdGVMb2NhbEJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIG1pblggPSBJbmZpbml0eTtcbiAgICB2YXIgbWF4WCA9IC1JbmZpbml0eTtcblxuICAgIHZhciBtaW5ZID0gSW5maW5pdHk7XG4gICAgdmFyIG1heFkgPSAtSW5maW5pdHk7XG5cbiAgICBpZiAodGhpcy5ncmFwaGljc0RhdGEubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgdmFyIHNoYXBlLCBwb2ludHMsIHgsIHksIHcsIGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdyYXBoaWNzRGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdyYXBoaWNzRGF0YVtpXTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICAgICAgICAgICAgdmFyIGxpbmVXaWR0aCA9IGRhdGEubGluZVdpZHRoO1xuICAgICAgICAgICAgc2hhcGUgPSBkYXRhLnNoYXBlO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJFQ1QgfHwgdHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJSRUMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeCA9IHNoYXBlLnggLSBsaW5lV2lkdGgvMjtcbiAgICAgICAgICAgICAgICB5ID0gc2hhcGUueSAtIGxpbmVXaWR0aC8yO1xuICAgICAgICAgICAgICAgIHcgPSBzaGFwZS53aWR0aCArIGxpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICBoID0gc2hhcGUuaGVpZ2h0ICsgbGluZVdpZHRoO1xuXG4gICAgICAgICAgICAgICAgbWluWCA9IHggPCBtaW5YID8geCA6IG1pblg7XG4gICAgICAgICAgICAgICAgbWF4WCA9IHggKyB3ID4gbWF4WCA/IHggKyB3IDogbWF4WDtcblxuICAgICAgICAgICAgICAgIG1pblkgPSB5IDwgbWluWSA/IHkgOiBtaW5ZO1xuICAgICAgICAgICAgICAgIG1heFkgPSB5ICsgaCA+IG1heFkgPyB5ICsgaCA6IG1heFk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBDT05TVC5TSEFQRVMuQ0lSQylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4ID0gc2hhcGUueDtcbiAgICAgICAgICAgICAgICB5ID0gc2hhcGUueTtcbiAgICAgICAgICAgICAgICB3ID0gc2hhcGUucmFkaXVzICsgbGluZVdpZHRoLzI7XG4gICAgICAgICAgICAgICAgaCA9IHNoYXBlLnJhZGl1cyArIGxpbmVXaWR0aC8yO1xuXG4gICAgICAgICAgICAgICAgbWluWCA9IHggLSB3IDwgbWluWCA/IHggLSB3IDogbWluWDtcbiAgICAgICAgICAgICAgICBtYXhYID0geCArIHcgPiBtYXhYID8geCArIHcgOiBtYXhYO1xuXG4gICAgICAgICAgICAgICAgbWluWSA9IHkgLSBoIDwgbWluWSA/IHkgLSBoIDogbWluWTtcbiAgICAgICAgICAgICAgICBtYXhZID0geSArIGggPiBtYXhZID8geSArIGggOiBtYXhZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQ09OU1QuU0hBUEVTLkVMSVApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeCA9IHNoYXBlLng7XG4gICAgICAgICAgICAgICAgeSA9IHNoYXBlLnk7XG4gICAgICAgICAgICAgICAgdyA9IHNoYXBlLndpZHRoICsgbGluZVdpZHRoLzI7XG4gICAgICAgICAgICAgICAgaCA9IHNoYXBlLmhlaWdodCArIGxpbmVXaWR0aC8yO1xuXG4gICAgICAgICAgICAgICAgbWluWCA9IHggLSB3IDwgbWluWCA/IHggLSB3IDogbWluWDtcbiAgICAgICAgICAgICAgICBtYXhYID0geCArIHcgPiBtYXhYID8geCArIHcgOiBtYXhYO1xuXG4gICAgICAgICAgICAgICAgbWluWSA9IHkgLSBoIDwgbWluWSA/IHkgLSBoIDogbWluWTtcbiAgICAgICAgICAgICAgICBtYXhZID0geSArIGggPiBtYXhZID8geSArIGggOiBtYXhZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFBPTFlcbiAgICAgICAgICAgICAgICBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGogKz0gMilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBwb2ludHNbal07XG4gICAgICAgICAgICAgICAgICAgIHkgPSBwb2ludHNbaisxXTtcblxuICAgICAgICAgICAgICAgICAgICBtaW5YID0geC1saW5lV2lkdGggPCBtaW5YID8geC1saW5lV2lkdGggOiBtaW5YO1xuICAgICAgICAgICAgICAgICAgICBtYXhYID0geCtsaW5lV2lkdGggPiBtYXhYID8geCtsaW5lV2lkdGggOiBtYXhYO1xuXG4gICAgICAgICAgICAgICAgICAgIG1pblkgPSB5LWxpbmVXaWR0aCA8IG1pblkgPyB5LWxpbmVXaWR0aCA6IG1pblk7XG4gICAgICAgICAgICAgICAgICAgIG1heFkgPSB5K2xpbmVXaWR0aCA+IG1heFkgPyB5K2xpbmVXaWR0aCA6IG1heFk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG1pblggPSAwO1xuICAgICAgICBtYXhYID0gMDtcbiAgICAgICAgbWluWSA9IDA7XG4gICAgICAgIG1heFkgPSAwO1xuICAgIH1cblxuICAgIHZhciBwYWRkaW5nID0gdGhpcy5ib3VuZHNQYWRkaW5nO1xuXG4gICAgdGhpcy5fbG9jYWxCb3VuZHMueCA9IG1pblggLSBwYWRkaW5nO1xuICAgIHRoaXMuX2xvY2FsQm91bmRzLndpZHRoID0gKG1heFggLSBtaW5YKSArIHBhZGRpbmcgKiAyO1xuXG4gICAgdGhpcy5fbG9jYWxCb3VuZHMueSA9IG1pblkgLSBwYWRkaW5nO1xuICAgIHRoaXMuX2xvY2FsQm91bmRzLmhlaWdodCA9IChtYXhZIC0gbWluWSkgKyBwYWRkaW5nICogMjtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBjYWNoZWQgc3ByaXRlIHdoZW4gdGhlIHNwcml0ZSBoYXMgY2FjaGVBc0JpdG1hcCA9IHRydWVcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG4vKlxuR3JhcGhpY3MucHJvdG90eXBlLl9nZW5lcmF0ZUNhY2hlZFNwcml0ZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKTtcblxuICAgIGlmICghdGhpcy5fY2FjaGVkU3ByaXRlKVxuICAgIHtcbiAgICAgICAgdmFyIGNhbnZhc0J1ZmZlciA9IG5ldyBDYW52YXNCdWZmZXIoYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgdmFyIHRleHR1cmUgPSBUZXh0dXJlLmZyb21DYW52YXMoY2FudmFzQnVmZmVyLmNhbnZhcyk7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmJ1ZmZlciA9IGNhbnZhc0J1ZmZlcjtcblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUud29ybGRUcmFuc2Zvcm0gPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYnVmZmVyLnJlc2l6ZShib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIC8vIGxldmVyYWdlIHRoZSBhbmNob3IgdG8gYWNjb3VudCBmb3IgdGhlIG9mZnNldCBvZiB0aGUgZWxlbWVudFxuICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5hbmNob3IueCA9IC0oIGJvdW5kcy54IC8gYm91bmRzLndpZHRoICk7XG4gICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFuY2hvci55ID0gLSggYm91bmRzLnkgLyBib3VuZHMuaGVpZ2h0ICk7XG5cbiAgICAvLyB0aGlzLl9jYWNoZWRTcHJpdGUuYnVmZmVyLmNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5idWZmZXIuY29udGV4dC50cmFuc2xhdGUoLWJvdW5kcy54LC1ib3VuZHMueSk7XG5cbiAgICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBhbHBoYSBvZiB0aGUgZ3JhcGhpY3MgdG8gMSBmb3IgdGhlIHJlbmRlci4uXG4gICAgdGhpcy53b3JsZEFscGhhID0gMTtcblxuICAgIC8vIG5vdyByZW5kZXIgdGhlIGdyYXBoaWMuLlxuICAgIENhbnZhc0dyYXBoaWNzLnJlbmRlckdyYXBoaWNzKHRoaXMsIHRoaXMuX2NhY2hlZFNwcml0ZS5idWZmZXIuY29udGV4dCk7XG5cbiAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYWxwaGEgPSB0aGlzLmFscGhhO1xufTtcbiovXG4vKipcbiAqIFVwZGF0ZXMgdGV4dHVyZSBzaXplIGJhc2VkIG9uIGNhbnZhcyBzaXplXG4gKlxuICogQHByaXZhdGVcbiAqL1xuLypcbkdyYXBoaWNzLnByb3RvdHlwZS51cGRhdGVDYWNoZWRTcHJpdGVUZXh0dXJlID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgY2FjaGVkU3ByaXRlID0gdGhpcy5fY2FjaGVkU3ByaXRlO1xuICAgIHZhciB0ZXh0dXJlID0gY2FjaGVkU3ByaXRlLnRleHR1cmU7XG4gICAgdmFyIGNhbnZhcyA9IGNhY2hlZFNwcml0ZS5idWZmZXIuY2FudmFzO1xuXG4gICAgdGV4dHVyZS5iYXNlVGV4dHVyZS53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGV4dHVyZS5jcm9wLndpZHRoID0gdGV4dHVyZS5mcmFtZS53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0ZXh0dXJlLmNyb3AuaGVpZ2h0ID0gdGV4dHVyZS5mcmFtZS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgY2FjaGVkU3ByaXRlLl93aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBjYWNoZWRTcHJpdGUuX2hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRpcnR5IGJhc2UgdGV4dHVyZXNcbiAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLmRpcnR5KCk7XG59OyovXG5cbi8qKlxuICogRGVzdHJveXMgYSBwcmV2aW91cyBjYWNoZWQgc3ByaXRlLlxuICpcbiAqL1xuLypcbkdyYXBoaWNzLnByb3RvdHlwZS5kZXN0cm95Q2FjaGVkU3ByaXRlID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLl9jYWNoZWRTcHJpdGUudGV4dHVyZS5kZXN0cm95KHRydWUpO1xuXG4gICAgLy8gbGV0IHRoZSBnYyBjb2xsZWN0IHRoZSB1bnVzZWQgc3ByaXRlXG4gICAgLy8gVE9ETyBjb3VsZCBiZSBvYmplY3QgcG9vbGVkIVxuICAgIHRoaXMuX2NhY2hlZFNwcml0ZSA9IG51bGw7XG59OyovXG5cbi8qKlxuICogRHJhd3MgdGhlIGdpdmVuIHNoYXBlIHRvIHRoaXMgR3JhcGhpY3Mgb2JqZWN0LiBDYW4gYmUgYW55IG9mIENpcmNsZSwgUmVjdGFuZ2xlLCBFbGxpcHNlLCBMaW5lIG9yIFBvbHlnb24uXG4gKlxuICogQHBhcmFtIHNoYXBlIHtDaXJjbGV8UmVjdGFuZ2xlfEVsbGlwc2V8TGluZXxQb2x5Z29ufSBUaGUgc2hhcGUgb2JqZWN0IHRvIGRyYXcuXG4gKiBAcmV0dXJuIHtHcmFwaGljc0RhdGF9IFRoZSBnZW5lcmF0ZWQgR3JhcGhpY3NEYXRhIG9iamVjdC5cbiAqL1xuR3JhcGhpY3MucHJvdG90eXBlLmRyYXdTaGFwZSA9IGZ1bmN0aW9uIChzaGFwZSlcbntcbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aClcbiAgICB7XG4gICAgICAgIC8vIGNoZWNrIGN1cnJlbnQgcGF0aCFcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhdGguc2hhcGUucG9pbnRzLmxlbmd0aCA8PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzRGF0YS5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhdGggPSBudWxsO1xuXG4gICAgdmFyIGRhdGEgPSBuZXcgR3JhcGhpY3NEYXRhKHRoaXMubGluZVdpZHRoLCB0aGlzLmxpbmVDb2xvciwgdGhpcy5saW5lQWxwaGEsIHRoaXMuZmlsbENvbG9yLCB0aGlzLmZpbGxBbHBoYSwgdGhpcy5maWxsaW5nLCBzaGFwZSk7XG5cbiAgICB0aGlzLmdyYXBoaWNzRGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlBPTFkpXG4gICAge1xuICAgICAgICBkYXRhLnNoYXBlLmNsb3NlZCA9IHRoaXMuZmlsbGluZztcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0aCA9IGRhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gZGF0YTtcbn07XG4iLCIvKipcbiAqIEEgR3JhcGhpY3NEYXRhIG9iamVjdC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gbGluZVdpZHRoIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgbGluZSB0byBkcmF3XG4gKiBAcGFyYW0gbGluZUNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciBvZiB0aGUgbGluZSB0byBkcmF3XG4gKiBAcGFyYW0gbGluZUFscGhhIHtudW1iZXJ9IHRoZSBhbHBoYSBvZiB0aGUgbGluZSB0byBkcmF3XG4gKiBAcGFyYW0gZmlsbENvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciBvZiB0aGUgZmlsbFxuICogQHBhcmFtIGZpbGxBbHBoYSB7bnVtYmVyfSB0aGUgYWxwaGEgb2YgdGhlIGZpbGxcbiAqIEBwYXJhbSBmaWxsICAgICAge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHRoZSBzaGFwZSBpcyBmaWxsZWQgd2l0aCBhIGNvbG91clxuICogQHBhcmFtIHNoYXBlICAgICB7Q2lyY2xlfFJlY3RhbmdsZXxFbGxpcHNlfExpbmV8UG9seWdvbn0gVGhlIHNoYXBlIG9iamVjdCB0byBkcmF3LlxuICovXG5mdW5jdGlvbiBHcmFwaGljc0RhdGEobGluZVdpZHRoLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSwgZmlsbENvbG9yLCBmaWxsQWxwaGEsIGZpbGwsIHNoYXBlKVxue1xuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAgICAgKi9cbiAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gdGhlIGNvbG9yIG9mIHRoZSBsaW5lIHRvIGRyYXdcbiAgICAgKi9cbiAgICB0aGlzLmxpbmVDb2xvciA9IGxpbmVDb2xvcjtcbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHRoZSBhbHBoYSBvZiB0aGUgbGluZSB0byBkcmF3XG4gICAgICovXG4gICAgdGhpcy5saW5lQWxwaGEgPSBsaW5lQWxwaGE7XG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBjYWNoZWQgdGludCBvZiB0aGUgbGluZSB0byBkcmF3XG4gICAgICovXG4gICAgdGhpcy5fbGluZVRpbnQgPSBsaW5lQ29sb3I7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHRoZSBjb2xvciBvZiB0aGUgZmlsbFxuICAgICAqL1xuICAgIHRoaXMuZmlsbENvbG9yID0gZmlsbENvbG9yO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSB0aGUgYWxwaGEgb2YgdGhlIGZpbGxcbiAgICAgKi9cbiAgICB0aGlzLmZpbGxBbHBoYSA9IGZpbGxBbHBoYTtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge251bWJlcn0gY2FjaGVkIHRpbnQgb2YgdGhlIGZpbGxcbiAgICAgKi9cbiAgICB0aGlzLl9maWxsVGludCA9IGZpbGxDb2xvcjtcblxuICAgIC8qIFxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHRoZSBzaGFwZSBpcyBmaWxsZWQgd2l0aCBhIGNvbG91clxuICAgICAqL1xuICAgIHRoaXMuZmlsbCA9IGZpbGw7XG5cbiAgICAvKiBcbiAgICAgKiBAbWVtYmVyIHtDaXJjbGV8UmVjdGFuZ2xlfEVsbGlwc2V8TGluZXxQb2x5Z29ufSBUaGUgc2hhcGUgb2JqZWN0IHRvIGRyYXcuXG4gICAgICovXG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuXG4gICAgLyogXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBUaGUgdHlwZSBvZiB0aGUgc2hhcGUsIHNlZSB0aGUgQ29uc3QuU2hhcGVzIGZpbGUgZm9yIGFsbCB0aGUgZXhpc3RpbmcgdHlwZXMsIFxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHNoYXBlLnR5cGU7XG59XG5cbkdyYXBoaWNzRGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHcmFwaGljc0RhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoaWNzRGF0YTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEdyYXBoaWNzRGF0YSBvYmplY3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhpcyBvbmUuXG4gKlxuICogQHJldHVybiB7R3JhcGhpY3NEYXRhfVxuICovXG5HcmFwaGljc0RhdGEucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IEdyYXBoaWNzRGF0YShcbiAgICAgICAgdGhpcy5saW5lV2lkdGgsXG4gICAgICAgIHRoaXMubGluZUNvbG9yLFxuICAgICAgICB0aGlzLmxpbmVBbHBoYSxcbiAgICAgICAgdGhpcy5maWxsQ29sb3IsXG4gICAgICAgIHRoaXMuZmlsbEFscGhhLFxuICAgICAgICB0aGlzLmZpbGwsXG4gICAgICAgIHRoaXMuc2hhcGVcbiAgICApO1xufTtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyksXG4gICAgbWF0aCA9IHJlcXVpcmUoJy4uLy4uL21hdGgnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0JyksXG4gICAgT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXInKSxcbiAgICBXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKSxcbiAgICBXZWJHTEdyYXBoaWNzRGF0YSA9IHJlcXVpcmUoJy4vV2ViR0xHcmFwaGljc0RhdGEnKTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBncmFwaGljcyBvYmplY3QuXG4gKlxuICogQGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIE9iamVjdFJlbmRlcmVyXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG9iamVjdCByZW5kZXJlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIEdyYXBoaWNzUmVuZGVyZXIocmVuZGVyZXIpXG57XG4gICAgT2JqZWN0UmVuZGVyZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cbiAgICB0aGlzLmdyYXBoaWNzRGF0YVBvb2wgPSBbXTtcblxuICAgIHRoaXMucHJpbWl0aXZlU2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLmNvbXBsZXhQcmltaXRpdmVTaGFkZXIgPSBudWxsO1xufVxuXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlKTtcbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR3JhcGhpY3NSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gR3JhcGhpY3NSZW5kZXJlcjtcblxuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignZ3JhcGhpY3MnLCBHcmFwaGljc1JlbmRlcmVyKTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGVyZSBpcyBhIFdlYkdMIGNvbnRleHQgY2hhbmdlXG4gKlxuICogQHByaXZhdGVcbiAqXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLm9uQ29udGV4dENoYW5nZSA9IGZ1bmN0aW9uKClcbntcblxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIHJlbmRlcmVyLlxuICpcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3RSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5ncmFwaGljc0RhdGFQb29sID0gbnVsbDtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGdyYXBoaWNzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IHRvIHJlbmRlci5cbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZ3JhcGhpY3MpXG57XG4gICAgdmFyIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICB2YXIgZ2wgPSByZW5kZXJlci5nbDtcblxuICAgIHZhciBzaGFkZXIgPSByZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnBsdWdpbnMucHJpbWl0aXZlU2hhZGVyLFxuICAgICAgICB3ZWJHTERhdGE7XG5cbiAgICBpZiAoZ3JhcGhpY3MuZGlydHkpXG4gICAge1xuICAgICAgICB0aGlzLnVwZGF0ZUdyYXBoaWNzKGdyYXBoaWNzLCBnbCk7XG4gICAgfVxuXG4gICAgdmFyIHdlYkdMID0gZ3JhcGhpY3MuX3dlYkdMW2dsLmlkXTtcblxuICAgIC8vIFRoaXMgIGNvdWxkIGJlIHNwZWVkZWQgdXAgZm9yIHN1cmUhXG5cbiAgICByZW5kZXJlci5ibGVuZE1vZGVNYW5hZ2VyLnNldEJsZW5kTW9kZSggZ3JhcGhpY3MuYmxlbmRNb2RlICk7XG5cbi8vICAgIHZhciBtYXRyaXggPSAgZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0uY2xvbmUoKTtcbi8vICAgIHZhciBtYXRyaXggPSAgcmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldC5wcm9qZWN0aW9uTWF0cml4LmNsb25lKCk7XG4vLyAgICBtYXRyaXguYXBwZW5kKGdyYXBoaWNzLndvcmxkVHJhbnNmb3JtKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2ViR0wuZGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGlmICh3ZWJHTC5kYXRhW2ldLm1vZGUgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdlYkdMRGF0YSA9IHdlYkdMLmRhdGFbaV07XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnN0ZW5jaWxNYW5hZ2VyLnB1c2hTdGVuY2lsKGdyYXBoaWNzLCB3ZWJHTERhdGEsIHJlbmRlcmVyKTtcblxuICAgICAgICAgICAgLy8gcmVuZGVyIHF1YWQuLlxuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgNCwgZ2wuVU5TSUdORURfU0hPUlQsICggd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCApICogMiApO1xuXG4gICAgICAgICAgICByZW5kZXJlci5zdGVuY2lsTWFuYWdlci5wb3BTdGVuY2lsKGdyYXBoaWNzLCB3ZWJHTERhdGEsIHJlbmRlcmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdlYkdMRGF0YSA9IHdlYkdMLmRhdGFbaV07XG5cblxuICAgICAgICAgICAgc2hhZGVyID0gcmVuZGVyZXIuc2hhZGVyTWFuYWdlci5wcmltaXRpdmVTaGFkZXI7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKCBzaGFkZXIgKTsvL2FjdGl2YXRlUHJpbWl0aXZlU2hhZGVyKCk7XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4Ll9sb2NhdGlvbiwgZmFsc2UsIGdyYXBoaWNzLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSkpO1xuXG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KHNoYWRlci51bmlmb3Jtcy5wcm9qZWN0aW9uTWF0cml4Ll9sb2NhdGlvbiwgZmFsc2UsIHJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihzaGFkZXIudW5pZm9ybXMudGludC5fbG9jYXRpb24sIHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3MudGludCkpO1xuXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYoc2hhZGVyLnVuaWZvcm1zLmFscGhhLl9sb2NhdGlvbiwgZ3JhcGhpY3Mud29ybGRBbHBoYSk7XG5cblxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHdlYkdMRGF0YS5idWZmZXIpO1xuXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCA0ICogNiwgMCk7XG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFDb2xvciwgNCwgZ2wuRkxPQVQsIGZhbHNlLDQgKiA2LCAyICogNCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW5kZXggYnVmZmVyIVxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmluZGV4QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9TVFJJUCwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZ3JhcGhpY3Mgb2JqZWN0XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IHRvIHVwZGF0ZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS51cGRhdGVHcmFwaGljcyA9IGZ1bmN0aW9uKGdyYXBoaWNzKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAgLy8gZ2V0IHRoZSBjb250ZXh0cyBncmFwaGljcyBvYmplY3RcbiAgICB2YXIgd2ViR0wgPSBncmFwaGljcy5fd2ViR0xbZ2wuaWRdO1xuXG4gICAgLy8gaWYgdGhlIGdyYXBoaWNzIG9iamVjdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgd2ViR0wgY29udGV4dCB0aW1lIHRvIGNyZWF0ZSBpdCFcbiAgICBpZiAoIXdlYkdMKVxuICAgIHtcbiAgICAgICAgd2ViR0wgPSBncmFwaGljcy5fd2ViR0xbZ2wuaWRdID0ge2xhc3RJbmRleDowLCBkYXRhOltdLCBnbDpnbH07XG4gICAgfVxuXG4gICAgLy8gZmxhZyB0aGUgZ3JhcGhpY3MgYXMgbm90IGRpcnR5IGFzIHdlIGFyZSBhYm91dCB0byB1cGRhdGUgaXQuLi5cbiAgICBncmFwaGljcy5kaXJ0eSA9IGZhbHNlO1xuXG4gICAgdmFyIGk7XG5cbiAgICAvLyBpZiB0aGUgdXNlciBjbGVhcmVkIHRoZSBncmFwaGljcyBvYmplY3Qgd2Ugd2lsbCBuZWVkIHRvIGNsZWFyIGV2ZXJ5IG9iamVjdFxuICAgIGlmIChncmFwaGljcy5jbGVhckRpcnR5KVxuICAgIHtcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXJEaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGxvcCB0aHJvdWdoIGFuZCByZXR1cm4gYWxsIHRoZSB3ZWJHTERhdGFzIHRvIHRoZSBvYmplY3QgcG9vbCBzbyB0aGFuIGNhbiBiZSByZXVzZWQgbGF0ZXIgb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHdlYkdMLmRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBncmFwaGljc0RhdGEgPSB3ZWJHTC5kYXRhW2ldO1xuICAgICAgICAgICAgZ3JhcGhpY3NEYXRhLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzRGF0YVBvb2wucHVzaCggZ3JhcGhpY3NEYXRhICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhciB0aGUgYXJyYXkgYW5kIHJlc2V0IHRoZSBpbmRleC4uXG4gICAgICAgIHdlYkdMLmRhdGEgPSBbXTtcbiAgICAgICAgd2ViR0wubGFzdEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgd2ViR0xEYXRhO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBncmFwaGljcyBkYXRhcyBhbmQgY29uc3RydWN0IGVhY2ggb25lLi5cbiAgICAvLyBpZiB0aGUgb2JqZWN0IGlzIGEgY29tcGxleCBmaWxsIHRoZW4gdGhlIG5ldyBzdGVuY2lsIGJ1ZmZlciB0ZWNobmlxdWUgd2lsbCBiZSB1c2VkXG4gICAgLy8gb3RoZXIgd2lzZSBncmFwaGljcyBvYmplY3RzIHdpbGwgYmUgcHVzaGVkIGludG8gYSBiYXRjaC4uXG4gICAgZm9yIChpID0gd2ViR0wubGFzdEluZGV4OyBpIDwgZ3JhcGhpY3MuZ3JhcGhpY3NEYXRhLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGRhdGEgPSBncmFwaGljcy5ncmFwaGljc0RhdGFbaV07XG5cbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlBPTFkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gYWRkIHRoZSBwb2ludHMgdGhlIHRoZSBncmFwaGljcyBvYmplY3QuLlxuICAgICAgICAgICAgZGF0YS5wb2ludHMgPSBkYXRhLnNoYXBlLnBvaW50cy5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2hhcGUuY2xvc2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBwb2x5IGlmIHRoZSB2YWx1ZSBpcyB0cnVlIVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvaW50c1swXSAhPT0gZGF0YS5wb2ludHNbZGF0YS5wb2ludHMubGVuZ3RoLTJdIHx8IGRhdGEucG9pbnRzWzFdICE9PSBkYXRhLnBvaW50c1tkYXRhLnBvaW50cy5sZW5ndGgtMV0pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnBvaW50cy5wdXNoKGRhdGEucG9pbnRzWzBdLCBkYXRhLnBvaW50c1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNQUtFIFNVUkUgV0UgSEFWRSBUSEUgQ09SUkVDVCBUWVBFLi5cbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucG9pbnRzLmxlbmd0aCA+PSA2KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucG9pbnRzLmxlbmd0aCA8IDYgKiAyKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLnN3aXRjaE1vZGUod2ViR0wsIDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FuRHJhd1VzaW5nU2ltcGxlID0gdGhpcy5idWlsZFBvbHkoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coY2FuRHJhd1VzaW5nU2ltcGxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5EcmF3VXNpbmdTaW1wbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIjw+Pj5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLnN3aXRjaE1vZGUod2ViR0wsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRDb21wbGV4UG9seShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJHTERhdGEgPSB0aGlzLnN3aXRjaE1vZGUod2ViR0wsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZENvbXBsZXhQb2x5KGRhdGEsIHdlYkdMRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmxpbmVXaWR0aCA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5zd2l0Y2hNb2RlKHdlYkdMLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkTGluZShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5zd2l0Y2hNb2RlKHdlYkdMLCAwKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJFQ1QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFJlY3RhbmdsZShkYXRhLCB3ZWJHTERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuQ0lSQyB8fCBkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5FTElQKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRDaXJjbGUoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlJSRUMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFJvdW5kZWRSZWN0YW5nbGUoZGF0YSwgd2ViR0xEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdlYkdMLmxhc3RJbmRleCsrO1xuICAgIH1cblxuICAgIC8vIHVwbG9hZCBhbGwgdGhlIGRpcnR5IGRhdGEuLi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgd2ViR0wuZGF0YS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHdlYkdMRGF0YSA9IHdlYkdMLmRhdGFbaV07XG5cbiAgICAgICAgaWYgKHdlYkdMRGF0YS5kaXJ0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2ViR0xEYXRhLnVwbG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gd2ViR0wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKiBAcGFyYW0gdHlwZSB7bnVtYmVyfSBUT0RPIEBBbHZpblxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5zd2l0Y2hNb2RlID0gZnVuY3Rpb24gKHdlYkdMLCB0eXBlKVxue1xuICAgIHZhciB3ZWJHTERhdGE7XG5cbiAgICBpZiAoIXdlYkdMLmRhdGEubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5ncmFwaGljc0RhdGFQb29sLnBvcCgpIHx8IG5ldyBXZWJHTEdyYXBoaWNzRGF0YSh3ZWJHTC5nbCk7XG4gICAgICAgIHdlYkdMRGF0YS5tb2RlID0gdHlwZTtcbiAgICAgICAgd2ViR0wuZGF0YS5wdXNoKHdlYkdMRGF0YSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHdlYkdMRGF0YSA9IHdlYkdMLmRhdGFbd2ViR0wuZGF0YS5sZW5ndGgtMV07XG5cbiAgICAgICAgaWYgKCh3ZWJHTERhdGEucG9pbnRzLmxlbmd0aCA+IDMyMDAwMCkgfHwgd2ViR0xEYXRhLm1vZGUgIT09IHR5cGUgfHwgdHlwZSA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2ViR0xEYXRhID0gdGhpcy5ncmFwaGljc0RhdGFQb29sLnBvcCgpIHx8IG5ldyBXZWJHTEdyYXBoaWNzRGF0YSh3ZWJHTC5nbCk7XG4gICAgICAgICAgICB3ZWJHTERhdGEubW9kZSA9IHR5cGU7XG4gICAgICAgICAgICB3ZWJHTC5kYXRhLnB1c2god2ViR0xEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdlYkdMRGF0YS5kaXJ0eSA9IHRydWU7XG5cbiAgICByZXR1cm4gd2ViR0xEYXRhO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYSByZWN0YW5nbGUgdG8gZHJhd1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB3ZWJHTERhdGEge29iamVjdH0gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSB3ZWJHTC1zcGVjaWZpYyBpbmZvcm1hdGlvbiB0byBjcmVhdGUgdGhpcyBzaGFwZVxuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5idWlsZFJlY3RhbmdsZSA9IGZ1bmN0aW9uIChncmFwaGljc0RhdGEsIHdlYkdMRGF0YSlcbntcbiAgICAvLyAtLS0gLy9cbiAgICAvLyBuZWVkIHRvIGNvbnZlcnQgcG9pbnRzIHRvIGEgbmljZSByZWd1bGFyIGRhdGFcbiAgICAvL1xuICAgIHZhciByZWN0RGF0YSA9IGdyYXBoaWNzRGF0YS5zaGFwZTtcbiAgICB2YXIgeCA9IHJlY3REYXRhLng7XG4gICAgdmFyIHkgPSByZWN0RGF0YS55O1xuICAgIHZhciB3aWR0aCA9IHJlY3REYXRhLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSByZWN0RGF0YS5oZWlnaHQ7XG5cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmZpbGwpXG4gICAge1xuICAgICAgICB2YXIgY29sb3IgPSB1dGlscy5oZXgycmdiKGdyYXBoaWNzRGF0YS5maWxsQ29sb3IpO1xuICAgICAgICB2YXIgYWxwaGEgPSBncmFwaGljc0RhdGEuZmlsbEFscGhhO1xuXG4gICAgICAgIHZhciByID0gY29sb3JbMF0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGcgPSBjb2xvclsxXSAqIGFscGhhO1xuICAgICAgICB2YXIgYiA9IGNvbG9yWzJdICogYWxwaGE7XG5cbiAgICAgICAgdmFyIHZlcnRzID0gd2ViR0xEYXRhLnBvaW50cztcbiAgICAgICAgdmFyIGluZGljZXMgPSB3ZWJHTERhdGEuaW5kaWNlcztcblxuICAgICAgICB2YXIgdmVydFBvcyA9IHZlcnRzLmxlbmd0aC82O1xuXG4gICAgICAgIC8vIHN0YXJ0XG4gICAgICAgIHZlcnRzLnB1c2goeCwgeSk7XG4gICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgIHZlcnRzLnB1c2goeCArIHdpZHRoLCB5KTtcbiAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgdmVydHMucHVzaCh4ICwgeSArIGhlaWdodCk7XG4gICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgIHZlcnRzLnB1c2goeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgLy8gaW5zZXJ0IDIgZGVhZCB0cmlhbmdsZXMuLlxuICAgICAgICBpbmRpY2VzLnB1c2godmVydFBvcywgdmVydFBvcywgdmVydFBvcysxLCB2ZXJ0UG9zKzIsIHZlcnRQb3MrMywgdmVydFBvcyszKTtcbiAgICB9XG5cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmxpbmVXaWR0aClcbiAgICB7XG4gICAgICAgIHZhciB0ZW1wUG9pbnRzID0gZ3JhcGhpY3NEYXRhLnBvaW50cztcblxuICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzID0gW3gsIHksXG4gICAgICAgICAgICAgICAgICB4ICsgd2lkdGgsIHksXG4gICAgICAgICAgICAgICAgICB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICB4LCB5ICsgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgeCwgeV07XG5cblxuICAgICAgICB0aGlzLmJ1aWxkTGluZShncmFwaGljc0RhdGEsIHdlYkdMRGF0YSk7XG5cbiAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cyA9IHRlbXBQb2ludHM7XG4gICAgfVxufTtcblxuLyoqXG4gKiBCdWlsZHMgYSByb3VuZGVkIHJlY3RhbmdsZSB0byBkcmF3XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllc1xuICogQHBhcmFtIHdlYkdMRGF0YSB7b2JqZWN0fSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHdlYkdMLXNwZWNpZmljIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSB0aGlzIHNoYXBlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmJ1aWxkUm91bmRlZFJlY3RhbmdsZSA9IGZ1bmN0aW9uIChncmFwaGljc0RhdGEsIHdlYkdMRGF0YSlcbntcbiAgICB2YXIgcnJlY3REYXRhID0gZ3JhcGhpY3NEYXRhLnNoYXBlO1xuICAgIHZhciB4ID0gcnJlY3REYXRhLng7XG4gICAgdmFyIHkgPSBycmVjdERhdGEueTtcbiAgICB2YXIgd2lkdGggPSBycmVjdERhdGEud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHJyZWN0RGF0YS5oZWlnaHQ7XG5cbiAgICB2YXIgcmFkaXVzID0gcnJlY3REYXRhLnJhZGl1cztcblxuICAgIHZhciByZWNQb2ludHMgPSBbXTtcbiAgICByZWNQb2ludHMucHVzaCh4LCB5ICsgcmFkaXVzKTtcbiAgICByZWNQb2ludHMgPSByZWNQb2ludHMuY29uY2F0KHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmUoeCwgeSArIGhlaWdodCAtIHJhZGl1cywgeCwgeSArIGhlaWdodCwgeCArIHJhZGl1cywgeSArIGhlaWdodCkpO1xuICAgIHJlY1BvaW50cyA9IHJlY1BvaW50cy5jb25jYXQodGhpcy5xdWFkcmF0aWNCZXppZXJDdXJ2ZSh4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKSk7XG4gICAgcmVjUG9pbnRzID0gcmVjUG9pbnRzLmNvbmNhdCh0aGlzLnF1YWRyYXRpY0JlemllckN1cnZlKHggKyB3aWR0aCwgeSArIHJhZGl1cywgeCArIHdpZHRoLCB5LCB4ICsgd2lkdGggLSByYWRpdXMsIHkpKTtcbiAgICByZWNQb2ludHMgPSByZWNQb2ludHMuY29uY2F0KHRoaXMucXVhZHJhdGljQmV6aWVyQ3VydmUoeCArIHJhZGl1cywgeSwgeCwgeSwgeCwgeSArIHJhZGl1cykpO1xuXG4gICAgaWYgKGdyYXBoaWNzRGF0YS5maWxsKVxuICAgIHtcbiAgICAgICAgdmFyIGNvbG9yID0gdXRpbHMuaGV4MnJnYihncmFwaGljc0RhdGEuZmlsbENvbG9yKTtcbiAgICAgICAgdmFyIGFscGhhID0gZ3JhcGhpY3NEYXRhLmZpbGxBbHBoYTtcblxuICAgICAgICB2YXIgciA9IGNvbG9yWzBdICogYWxwaGE7XG4gICAgICAgIHZhciBnID0gY29sb3JbMV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGIgPSBjb2xvclsyXSAqIGFscGhhO1xuXG4gICAgICAgIHZhciB2ZXJ0cyA9IHdlYkdMRGF0YS5wb2ludHM7XG4gICAgICAgIHZhciBpbmRpY2VzID0gd2ViR0xEYXRhLmluZGljZXM7XG5cbiAgICAgICAgdmFyIHZlY1BvcyA9IHZlcnRzLmxlbmd0aC82O1xuXG4gICAgICAgIC8vVE9ETyB1c2UgdGhpcyBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L2VhcmN1dFxuICAgICAgICB2YXIgdHJpYW5nbGVzID0gdXRpbHMuUG9seUsuVHJpYW5ndWxhdGUocmVjUG9pbnRzKTtcblxuICAgICAgICAvL1xuXG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkrPTMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaV0gKyB2ZWNQb3MpO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpXSArIHZlY1Bvcyk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2krMV0gKyB2ZWNQb3MpO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpKzJdICsgdmVjUG9zKTtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaSsyXSArIHZlY1Bvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVjUG9pbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHJlY1BvaW50c1tpXSwgcmVjUG9pbnRzWysraV0sIHIsIGcsIGIsIGFscGhhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChncmFwaGljc0RhdGEubGluZVdpZHRoKVxuICAgIHtcbiAgICAgICAgdmFyIHRlbXBQb2ludHMgPSBncmFwaGljc0RhdGEucG9pbnRzO1xuXG4gICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMgPSByZWNQb2ludHM7XG5cbiAgICAgICAgdGhpcy5idWlsZExpbmUoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpO1xuXG4gICAgICAgIGdyYXBoaWNzRGF0YS5wb2ludHMgPSB0ZW1wUG9pbnRzO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBwb2ludHMgZm9yIGEgcXVhZHJhdGljIGJlemllciBjdXJ2ZS4gKGhlbHBlciBmdW5jdGlvbi4uKVxuICogQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc4NTA5Ny9ob3ctZG8taS1pbXBsZW1lbnQtYS1iZXppZXItY3VydmUtaW4tY1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZnJvbVgge251bWJlcn0gT3JpZ2luIHBvaW50IHhcbiAqIEBwYXJhbSBmcm9tWSB7bnVtYmVyfSBPcmlnaW4gcG9pbnQgeFxuICogQHBhcmFtIGNwWCB7bnVtYmVyfSBDb250cm9sIHBvaW50IHhcbiAqIEBwYXJhbSBjcFkge251bWJlcn0gQ29udHJvbCBwb2ludCB5XG4gKiBAcGFyYW0gdG9YIHtudW1iZXJ9IERlc3RpbmF0aW9uIHBvaW50IHhcbiAqIEBwYXJhbSB0b1kge251bWJlcn0gRGVzdGluYXRpb24gcG9pbnQgeVxuICogQHJldHVybiB7bnVtYmVyW119IGFuIGFycmF5IG9mIHBvaW50c1xuICovXG5HcmFwaGljc1JlbmRlcmVyLnByb3RvdHlwZS5xdWFkcmF0aWNCZXppZXJDdXJ2ZSA9IGZ1bmN0aW9uIChmcm9tWCwgZnJvbVksIGNwWCwgY3BZLCB0b1gsIHRvWSlcbntcblxuICAgIHZhciB4YSxcbiAgICAgICAgeWEsXG4gICAgICAgIHhiLFxuICAgICAgICB5YixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgbiA9IDIwLFxuICAgICAgICBwb2ludHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGdldFB0KG4xICwgbjIsIHBlcmMpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBuMiAtIG4xO1xuXG4gICAgICAgIHJldHVybiBuMSArICggZGlmZiAqIHBlcmMgKTtcbiAgICB9XG5cbiAgICB2YXIgaiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrICkge1xuICAgICAgICBqID0gaSAvIG47XG5cbiAgICAgICAgLy8gVGhlIEdyZWVuIExpbmVcbiAgICAgICAgeGEgPSBnZXRQdCggZnJvbVggLCBjcFggLCBqICk7XG4gICAgICAgIHlhID0gZ2V0UHQoIGZyb21ZICwgY3BZICwgaiApO1xuICAgICAgICB4YiA9IGdldFB0KCBjcFggLCB0b1ggLCBqICk7XG4gICAgICAgIHliID0gZ2V0UHQoIGNwWSAsIHRvWSAsIGogKTtcblxuICAgICAgICAvLyBUaGUgQmxhY2sgRG90XG4gICAgICAgIHggPSBnZXRQdCggeGEgLCB4YiAsIGogKTtcbiAgICAgICAgeSA9IGdldFB0KCB5YSAsIHliICwgaiApO1xuXG4gICAgICAgIHBvaW50cy5wdXNoKHgsIHkpO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBjaXJjbGUgdG8gZHJhd1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3NEYXRhIHtHcmFwaGljc30gVGhlIGdyYXBoaWNzIG9iamVjdCB0byBkcmF3XG4gKiBAcGFyYW0gd2ViR0xEYXRhIHtvYmplY3R9IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgd2ViR0wtc3BlY2lmaWMgaW5mb3JtYXRpb24gdG8gY3JlYXRlIHRoaXMgc2hhcGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuYnVpbGRDaXJjbGUgPSBmdW5jdGlvbiAoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpXG57XG4gICAgLy8gbmVlZCB0byBjb252ZXJ0IHBvaW50cyB0byBhIG5pY2UgcmVndWxhciBkYXRhXG4gICAgdmFyIGNpcmNsZURhdGEgPSBncmFwaGljc0RhdGEuc2hhcGU7XG4gICAgdmFyIHggPSBjaXJjbGVEYXRhLng7XG4gICAgdmFyIHkgPSBjaXJjbGVEYXRhLnk7XG4gICAgdmFyIHdpZHRoO1xuICAgIHZhciBoZWlnaHQ7XG5cbiAgICAvLyBUT0RPIC0gYml0IGhhY2t5Pz9cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5DSVJDKVxuICAgIHtcbiAgICAgICAgd2lkdGggPSBjaXJjbGVEYXRhLnJhZGl1cztcbiAgICAgICAgaGVpZ2h0ID0gY2lyY2xlRGF0YS5yYWRpdXM7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHdpZHRoID0gY2lyY2xlRGF0YS53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gY2lyY2xlRGF0YS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgdmFyIHRvdGFsU2VncyA9IDQwO1xuICAgIHZhciBzZWcgPSAoTWF0aC5QSSAqIDIpIC8gdG90YWxTZWdzIDtcblxuICAgIHZhciBpID0gMDtcblxuICAgIGlmIChncmFwaGljc0RhdGEuZmlsbClcbiAgICB7XG4gICAgICAgIHZhciBjb2xvciA9IHV0aWxzLmhleDJyZ2IoZ3JhcGhpY3NEYXRhLmZpbGxDb2xvcik7XG4gICAgICAgIHZhciBhbHBoYSA9IGdyYXBoaWNzRGF0YS5maWxsQWxwaGE7XG5cbiAgICAgICAgdmFyIHIgPSBjb2xvclswXSAqIGFscGhhO1xuICAgICAgICB2YXIgZyA9IGNvbG9yWzFdICogYWxwaGE7XG4gICAgICAgIHZhciBiID0gY29sb3JbMl0gKiBhbHBoYTtcblxuICAgICAgICB2YXIgdmVydHMgPSB3ZWJHTERhdGEucG9pbnRzO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IHdlYkdMRGF0YS5pbmRpY2VzO1xuXG4gICAgICAgIHZhciB2ZWNQb3MgPSB2ZXJ0cy5sZW5ndGgvNjtcblxuICAgICAgICBpbmRpY2VzLnB1c2godmVjUG9zKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG90YWxTZWdzICsgMSA7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmVydHMucHVzaCh4LHksIHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgdmVydHMucHVzaCh4ICsgTWF0aC5zaW4oc2VnICogaSkgKiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgeSArIE1hdGguY29zKHNlZyAqIGkpICogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICByLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIGluZGljZXMucHVzaCh2ZWNQb3MrKywgdmVjUG9zKyspO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kaWNlcy5wdXNoKHZlY1Bvcy0xKTtcbiAgICB9XG5cbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmxpbmVXaWR0aClcbiAgICB7XG4gICAgICAgIHZhciB0ZW1wUG9pbnRzID0gZ3JhcGhpY3NEYXRhLnBvaW50cztcblxuICAgICAgICBncmFwaGljc0RhdGEucG9pbnRzID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvdGFsU2VncyArIDE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cy5wdXNoKHggKyBNYXRoLnNpbihzZWcgKiBpKSAqIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgKyBNYXRoLmNvcyhzZWcgKiBpKSAqIGhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkTGluZShncmFwaGljc0RhdGEsIHdlYkdMRGF0YSk7XG5cbiAgICAgICAgZ3JhcGhpY3NEYXRhLnBvaW50cyA9IHRlbXBQb2ludHM7XG4gICAgfVxufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBsaW5lIHRvIGRyYXdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gd2ViR0xEYXRhIHtvYmplY3R9IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgd2ViR0wtc3BlY2lmaWMgaW5mb3JtYXRpb24gdG8gY3JlYXRlIHRoaXMgc2hhcGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuYnVpbGRMaW5lID0gZnVuY3Rpb24gKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKVxue1xuICAgIC8vIFRPRE8gT1BUSU1JU0UhXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwb2ludHMgPSBncmFwaGljc0RhdGEucG9pbnRzO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGxpbmUgd2lkdGggaXMgYW4gb2RkIG51bWJlciBhZGQgMC41IHRvIGFsaWduIHRvIGEgd2hvbGUgcGl4ZWxcbiAgICBpZiAoZ3JhcGhpY3NEYXRhLmxpbmVXaWR0aCUyKVxuICAgIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcG9pbnRzW2ldICs9IDAuNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBmaXJzdCBhbmQgbGFzdCBwb2ludC4uIGZpZ3VyZSBvdXQgdGhlIG1pZGRsZSFcbiAgICB2YXIgZmlyc3RQb2ludCA9IG5ldyBtYXRoLlBvaW50KHBvaW50c1swXSwgcG9pbnRzWzFdKTtcbiAgICB2YXIgbGFzdFBvaW50ID0gbmV3IG1hdGguUG9pbnQocG9pbnRzW3BvaW50cy5sZW5ndGggLSAyXSwgcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cbiAgICAvLyBpZiB0aGUgZmlyc3QgcG9pbnQgaXMgdGhlIGxhc3QgcG9pbnQgLSBnb25uYSBoYXZlIGlzc3VlcyA6KVxuICAgIGlmIChmaXJzdFBvaW50LnggPT09IGxhc3RQb2ludC54ICYmIGZpcnN0UG9pbnQueSA9PT0gbGFzdFBvaW50LnkpXG4gICAge1xuICAgICAgICAvLyBuZWVkIHRvIGNsb25lIGFzIHdlIGFyZSBnb2luZyB0byBzbGlnaHRseSBtb2RpZnkgdGhlIHNoYXBlLi5cbiAgICAgICAgcG9pbnRzID0gcG9pbnRzLnNsaWNlKCk7XG5cbiAgICAgICAgcG9pbnRzLnBvcCgpO1xuICAgICAgICBwb2ludHMucG9wKCk7XG5cbiAgICAgICAgbGFzdFBvaW50ID0gbmV3IG1hdGguUG9pbnQocG9pbnRzW3BvaW50cy5sZW5ndGggLSAyXSwgcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgdmFyIG1pZFBvaW50WCA9IGxhc3RQb2ludC54ICsgKGZpcnN0UG9pbnQueCAtIGxhc3RQb2ludC54KSAqMC41O1xuICAgICAgICB2YXIgbWlkUG9pbnRZID0gbGFzdFBvaW50LnkgKyAoZmlyc3RQb2ludC55IC0gbGFzdFBvaW50LnkpICowLjU7XG5cbiAgICAgICAgcG9pbnRzLnVuc2hpZnQobWlkUG9pbnRYLCBtaWRQb2ludFkpO1xuICAgICAgICBwb2ludHMucHVzaChtaWRQb2ludFgsIG1pZFBvaW50WSk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnRzID0gd2ViR0xEYXRhLnBvaW50cztcbiAgICB2YXIgaW5kaWNlcyA9IHdlYkdMRGF0YS5pbmRpY2VzO1xuICAgIHZhciBsZW5ndGggPSBwb2ludHMubGVuZ3RoIC8gMjtcbiAgICB2YXIgaW5kZXhDb3VudCA9IHBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGluZGV4U3RhcnQgPSB2ZXJ0cy5sZW5ndGgvNjtcblxuICAgIC8vIERSQVcgdGhlIExpbmVcbiAgICB2YXIgd2lkdGggPSBncmFwaGljc0RhdGEubGluZVdpZHRoIC8gMjtcblxuICAgIC8vIHNvcnQgY29sb3JcbiAgICB2YXIgY29sb3IgPSB1dGlscy5oZXgycmdiKGdyYXBoaWNzRGF0YS5saW5lQ29sb3IpO1xuICAgIHZhciBhbHBoYSA9IGdyYXBoaWNzRGF0YS5saW5lQWxwaGE7XG4gICAgdmFyIHIgPSBjb2xvclswXSAqIGFscGhhO1xuICAgIHZhciBnID0gY29sb3JbMV0gKiBhbHBoYTtcbiAgICB2YXIgYiA9IGNvbG9yWzJdICogYWxwaGE7XG5cbiAgICB2YXIgcHgsIHB5LCBwMXgsIHAxeSwgcDJ4LCBwMnksIHAzeCwgcDN5O1xuICAgIHZhciBwZXJweCwgcGVycHksIHBlcnAyeCwgcGVycDJ5LCBwZXJwM3gsIHBlcnAzeTtcbiAgICB2YXIgYTEsIGIxLCBjMSwgYTIsIGIyLCBjMjtcbiAgICB2YXIgZGVub20sIHBkaXN0LCBkaXN0O1xuXG4gICAgcDF4ID0gcG9pbnRzWzBdO1xuICAgIHAxeSA9IHBvaW50c1sxXTtcblxuICAgIHAyeCA9IHBvaW50c1syXTtcbiAgICBwMnkgPSBwb2ludHNbM107XG5cbiAgICBwZXJweCA9IC0ocDF5IC0gcDJ5KTtcbiAgICBwZXJweSA9ICBwMXggLSBwMng7XG5cbiAgICBkaXN0ID0gTWF0aC5zcXJ0KHBlcnB4KnBlcnB4ICsgcGVycHkqcGVycHkpO1xuXG4gICAgcGVycHggLz0gZGlzdDtcbiAgICBwZXJweSAvPSBkaXN0O1xuICAgIHBlcnB4ICo9IHdpZHRoO1xuICAgIHBlcnB5ICo9IHdpZHRoO1xuXG4gICAgLy8gc3RhcnRcbiAgICB2ZXJ0cy5wdXNoKHAxeCAtIHBlcnB4ICwgcDF5IC0gcGVycHksXG4gICAgICAgICAgICAgICAgciwgZywgYiwgYWxwaGEpO1xuXG4gICAgdmVydHMucHVzaChwMXggKyBwZXJweCAsIHAxeSArIHBlcnB5LFxuICAgICAgICAgICAgICAgIHIsIGcsIGIsIGFscGhhKTtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBsZW5ndGgtMTsgaSsrKVxuICAgIHtcbiAgICAgICAgcDF4ID0gcG9pbnRzWyhpLTEpKjJdO1xuICAgICAgICBwMXkgPSBwb2ludHNbKGktMSkqMiArIDFdO1xuXG4gICAgICAgIHAyeCA9IHBvaW50c1soaSkqMl07XG4gICAgICAgIHAyeSA9IHBvaW50c1soaSkqMiArIDFdO1xuXG4gICAgICAgIHAzeCA9IHBvaW50c1soaSsxKSoyXTtcbiAgICAgICAgcDN5ID0gcG9pbnRzWyhpKzEpKjIgKyAxXTtcblxuICAgICAgICBwZXJweCA9IC0ocDF5IC0gcDJ5KTtcbiAgICAgICAgcGVycHkgPSBwMXggLSBwMng7XG5cbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChwZXJweCpwZXJweCArIHBlcnB5KnBlcnB5KTtcbiAgICAgICAgcGVycHggLz0gZGlzdDtcbiAgICAgICAgcGVycHkgLz0gZGlzdDtcbiAgICAgICAgcGVycHggKj0gd2lkdGg7XG4gICAgICAgIHBlcnB5ICo9IHdpZHRoO1xuXG4gICAgICAgIHBlcnAyeCA9IC0ocDJ5IC0gcDN5KTtcbiAgICAgICAgcGVycDJ5ID0gcDJ4IC0gcDN4O1xuXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQocGVycDJ4KnBlcnAyeCArIHBlcnAyeSpwZXJwMnkpO1xuICAgICAgICBwZXJwMnggLz0gZGlzdDtcbiAgICAgICAgcGVycDJ5IC89IGRpc3Q7XG4gICAgICAgIHBlcnAyeCAqPSB3aWR0aDtcbiAgICAgICAgcGVycDJ5ICo9IHdpZHRoO1xuXG4gICAgICAgIGExID0gKC1wZXJweSArIHAxeSkgLSAoLXBlcnB5ICsgcDJ5KTtcbiAgICAgICAgYjEgPSAoLXBlcnB4ICsgcDJ4KSAtICgtcGVycHggKyBwMXgpO1xuICAgICAgICBjMSA9ICgtcGVycHggKyBwMXgpICogKC1wZXJweSArIHAyeSkgLSAoLXBlcnB4ICsgcDJ4KSAqICgtcGVycHkgKyBwMXkpO1xuICAgICAgICBhMiA9ICgtcGVycDJ5ICsgcDN5KSAtICgtcGVycDJ5ICsgcDJ5KTtcbiAgICAgICAgYjIgPSAoLXBlcnAyeCArIHAyeCkgLSAoLXBlcnAyeCArIHAzeCk7XG4gICAgICAgIGMyID0gKC1wZXJwMnggKyBwM3gpICogKC1wZXJwMnkgKyBwMnkpIC0gKC1wZXJwMnggKyBwMngpICogKC1wZXJwMnkgKyBwM3kpO1xuXG4gICAgICAgIGRlbm9tID0gYTEqYjIgLSBhMipiMTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGVub20pIDwgMC4xIClcbiAgICAgICAge1xuXG4gICAgICAgICAgICBkZW5vbSs9MTAuMTtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gocDJ4IC0gcGVycHggLCBwMnkgLSBwZXJweSxcbiAgICAgICAgICAgICAgICByLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2gocDJ4ICsgcGVycHggLCBwMnkgKyBwZXJweSxcbiAgICAgICAgICAgICAgICByLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHggPSAoYjEqYzIgLSBiMipjMSkvZGVub207XG4gICAgICAgIHB5ID0gKGEyKmMxIC0gYTEqYzIpL2Rlbm9tO1xuXG5cbiAgICAgICAgcGRpc3QgPSAocHggLXAyeCkgKiAocHggLXAyeCkgKyAocHkgLXAyeSkgKyAocHkgLXAyeSk7XG5cblxuICAgICAgICBpZiAocGRpc3QgPiAxNDAgKiAxNDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlcnAzeCA9IHBlcnB4IC0gcGVycDJ4O1xuICAgICAgICAgICAgcGVycDN5ID0gcGVycHkgLSBwZXJwMnk7XG5cbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQocGVycDN4KnBlcnAzeCArIHBlcnAzeSpwZXJwM3kpO1xuICAgICAgICAgICAgcGVycDN4IC89IGRpc3Q7XG4gICAgICAgICAgICBwZXJwM3kgLz0gZGlzdDtcbiAgICAgICAgICAgIHBlcnAzeCAqPSB3aWR0aDtcbiAgICAgICAgICAgIHBlcnAzeSAqPSB3aWR0aDtcblxuICAgICAgICAgICAgdmVydHMucHVzaChwMnggLSBwZXJwM3gsIHAyeSAtcGVycDN5KTtcbiAgICAgICAgICAgIHZlcnRzLnB1c2gociwgZywgYiwgYWxwaGEpO1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHAyeCArIHBlcnAzeCwgcDJ5ICtwZXJwM3kpO1xuICAgICAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2gocDJ4IC0gcGVycDN4LCBwMnkgLXBlcnAzeSk7XG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgICAgICAgICAgaW5kZXhDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuXG4gICAgICAgICAgICB2ZXJ0cy5wdXNoKHB4ICwgcHkpO1xuICAgICAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICAgICAgICAgIHZlcnRzLnB1c2gocDJ4IC0gKHB4LXAyeCksIHAyeSAtIChweSAtIHAyeSkpO1xuICAgICAgICAgICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwMXggPSBwb2ludHNbKGxlbmd0aC0yKSoyXTtcbiAgICBwMXkgPSBwb2ludHNbKGxlbmd0aC0yKSoyICsgMV07XG5cbiAgICBwMnggPSBwb2ludHNbKGxlbmd0aC0xKSoyXTtcbiAgICBwMnkgPSBwb2ludHNbKGxlbmd0aC0xKSoyICsgMV07XG5cbiAgICBwZXJweCA9IC0ocDF5IC0gcDJ5KTtcbiAgICBwZXJweSA9IHAxeCAtIHAyeDtcblxuICAgIGRpc3QgPSBNYXRoLnNxcnQocGVycHgqcGVycHggKyBwZXJweSpwZXJweSk7XG4gICAgcGVycHggLz0gZGlzdDtcbiAgICBwZXJweSAvPSBkaXN0O1xuICAgIHBlcnB4ICo9IHdpZHRoO1xuICAgIHBlcnB5ICo9IHdpZHRoO1xuXG4gICAgdmVydHMucHVzaChwMnggLSBwZXJweCAsIHAyeSAtIHBlcnB5KTtcbiAgICB2ZXJ0cy5wdXNoKHIsIGcsIGIsIGFscGhhKTtcblxuICAgIHZlcnRzLnB1c2gocDJ4ICsgcGVycHggLCBwMnkgKyBwZXJweSk7XG4gICAgdmVydHMucHVzaChyLCBnLCBiLCBhbHBoYSk7XG5cbiAgICBpbmRpY2VzLnB1c2goaW5kZXhTdGFydCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZXhDb3VudDsgaSsrKVxuICAgIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKGluZGV4U3RhcnQrKyk7XG4gICAgfVxuXG4gICAgaW5kaWNlcy5wdXNoKGluZGV4U3RhcnQtMSk7XG59O1xuXG4vKipcbiAqIEJ1aWxkcyBhIGNvbXBsZXggcG9seWdvbiB0byBkcmF3XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljc0RhdGEge0dyYXBoaWNzfSBUaGUgZ3JhcGhpY3Mgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3NhcnkgcHJvcGVydGllc1xuICogQHBhcmFtIHdlYkdMRGF0YSB7b2JqZWN0fSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIHdlYkdMLXNwZWNpZmljIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSB0aGlzIHNoYXBlXG4gKi9cbkdyYXBoaWNzUmVuZGVyZXIucHJvdG90eXBlLmJ1aWxkQ29tcGxleFBvbHkgPSBmdW5jdGlvbiAoZ3JhcGhpY3NEYXRhLCB3ZWJHTERhdGEpXG57XG4gICAgLy9UT0RPIC0gbm8gbmVlZCB0byBjb3B5IHRoaXMgYXMgaXQgZ2V0cyB0dXJuZWQgaW50byBhIEZMb2F0MzJBcnJheSBhbnl3YXlzLi5cbiAgICB2YXIgcG9pbnRzID0gZ3JhcGhpY3NEYXRhLnBvaW50cy5zbGljZSgpO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCA2KVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdldCBmaXJzdCBhbmQgbGFzdCBwb2ludC4uIGZpZ3VyZSBvdXQgdGhlIG1pZGRsZSFcbiAgICB2YXIgaW5kaWNlcyA9IHdlYkdMRGF0YS5pbmRpY2VzO1xuICAgIHdlYkdMRGF0YS5wb2ludHMgPSBwb2ludHM7XG4gICAgd2ViR0xEYXRhLmFscGhhID0gZ3JhcGhpY3NEYXRhLmZpbGxBbHBoYTtcbiAgICB3ZWJHTERhdGEuY29sb3IgPSB1dGlscy5oZXgycmdiKGdyYXBoaWNzRGF0YS5maWxsQ29sb3IpO1xuXG4gICAgLy8gY2FsY2xhdGUgdGhlIGJvdW5kcy4uXG4gICAgdmFyIG1pblggPSBJbmZpbml0eTtcbiAgICB2YXIgbWF4WCA9IC1JbmZpbml0eTtcblxuICAgIHZhciBtaW5ZID0gSW5maW5pdHk7XG4gICAgdmFyIG1heFkgPSAtSW5maW5pdHk7XG5cbiAgICB2YXIgeCx5O1xuXG4gICAgLy8gZ2V0IHNpemUuLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSs9MilcbiAgICB7XG4gICAgICAgIHggPSBwb2ludHNbaV07XG4gICAgICAgIHkgPSBwb2ludHNbaSsxXTtcblxuICAgICAgICBtaW5YID0geCA8IG1pblggPyB4IDogbWluWDtcbiAgICAgICAgbWF4WCA9IHggPiBtYXhYID8geCA6IG1heFg7XG5cbiAgICAgICAgbWluWSA9IHkgPCBtaW5ZID8geSA6IG1pblk7XG4gICAgICAgIG1heFkgPSB5ID4gbWF4WSA/IHkgOiBtYXhZO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIHF1YWQgdG8gdGhlIGVuZCBjb3MgdGhlcmUgaXMgbm8gcG9pbnQgbWFraW5nIGFub3RoZXIgYnVmZmVyIVxuICAgIHBvaW50cy5wdXNoKG1pblgsIG1pblksXG4gICAgICAgICAgICAgICAgbWF4WCwgbWluWSxcbiAgICAgICAgICAgICAgICBtYXhYLCBtYXhZLFxuICAgICAgICAgICAgICAgIG1pblgsIG1heFkpO1xuXG4gICAgLy8gcHVzaCBhIHF1YWQgb250byB0aGUgZW5kLi5cblxuICAgIC8vVE9ETyAtIHRoaXMgYWludCBuZWVkZWQhXG4gICAgdmFyIGxlbmd0aCA9IHBvaW50cy5sZW5ndGggLyAyO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGluZGljZXMucHVzaCggaSApO1xuICAgIH1cblxufTtcblxuLyoqXG4gKiBCdWlsZHMgYSBwb2x5Z29uIHRvIGRyYXdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGdyYXBoaWNzRGF0YSB7R3JhcGhpY3N9IFRoZSBncmFwaGljcyBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gd2ViR0xEYXRhIHtvYmplY3R9IGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgd2ViR0wtc3BlY2lmaWMgaW5mb3JtYXRpb24gdG8gY3JlYXRlIHRoaXMgc2hhcGVcbiAqL1xuR3JhcGhpY3NSZW5kZXJlci5wcm90b3R5cGUuYnVpbGRQb2x5ID0gZnVuY3Rpb24gKGdyYXBoaWNzRGF0YSwgd2ViR0xEYXRhKVxue1xuICAgIHZhciBwb2ludHMgPSBncmFwaGljc0RhdGEucG9pbnRzO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCA2KVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdldCBmaXJzdCBhbmQgbGFzdCBwb2ludC4uIGZpZ3VyZSBvdXQgdGhlIG1pZGRsZSFcbiAgICB2YXIgdmVydHMgPSB3ZWJHTERhdGEucG9pbnRzO1xuICAgIHZhciBpbmRpY2VzID0gd2ViR0xEYXRhLmluZGljZXM7XG5cbiAgICB2YXIgbGVuZ3RoID0gcG9pbnRzLmxlbmd0aCAvIDI7XG5cbiAgICAvLyBzb3J0IGNvbG9yXG4gICAgdmFyIGNvbG9yID0gdXRpbHMuaGV4MnJnYihncmFwaGljc0RhdGEuZmlsbENvbG9yKTtcbiAgICB2YXIgYWxwaGEgPSBncmFwaGljc0RhdGEuZmlsbEFscGhhO1xuICAgIHZhciByID0gY29sb3JbMF0gKiBhbHBoYTtcbiAgICB2YXIgZyA9IGNvbG9yWzFdICogYWxwaGE7XG4gICAgdmFyIGIgPSBjb2xvclsyXSAqIGFscGhhO1xuXG4gICAgdmFyIHRyaWFuZ2xlcyA9IHV0aWxzLlBvbHlLLlRyaWFuZ3VsYXRlKHBvaW50cyk7XG5cbiAgICBpZiAoIXRyaWFuZ2xlcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZlcnRQb3MgPSB2ZXJ0cy5sZW5ndGggLyA2O1xuXG4gICAgdmFyIGkgPSAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkrPTMpXG4gICAge1xuICAgICAgICBpbmRpY2VzLnB1c2godHJpYW5nbGVzW2ldICsgdmVydFBvcyk7XG4gICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaV0gKyB2ZXJ0UG9zKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKHRyaWFuZ2xlc1tpKzFdICsgdmVydFBvcyk7XG4gICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaSsyXSArdmVydFBvcyk7XG4gICAgICAgIGluZGljZXMucHVzaCh0cmlhbmdsZXNbaSsyXSArIHZlcnRQb3MpO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZlcnRzLnB1c2gocG9pbnRzW2kgKiAyXSwgcG9pbnRzW2kgKiAyICsgMV0sXG4gICAgICAgICAgICAgICAgICAgciwgZywgYiwgYWxwaGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcbiIsIi8qKlxuICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgV2ViR0wgc3BlY2lmaWMgcHJvcGVydGllcyB0byBiZSB1c2VkIGJ5IHRoZSBXZWJHTCByZW5kZXJlclxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBnbCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSB0aGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIFdlYkdMR3JhcGhpY3NEYXRhKGdsKSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKi9cbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICAvL1RPRE8gZG9lcyB0aGlzIG5lZWQgdG8gYmUgc3BsaXQgYmVmb3JlIHVwbG9kaW5nPz9cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjb2xvciBjb21wb25lbnRzIChyLGcsYilcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbG9yID0gWzAsMCwwXTsgLy8gY29sb3Igc3BsaXQhXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBwb2ludHMgdG8gZHJhd1xuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9pbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kaWNlcyBvZiB0aGUgdmVydGljZXNcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmluZGljZXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWFpbiBidWZmZXJcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IGJ1ZmZlclxuICAgICAqIEBtZW1iZXIge1dlYkdMQnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIC8qKlxuICAgICAqIHRvZG8gQGFsdmluXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubW9kZSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWxwaGEgb2YgdGhlIGdyYXBoaWNzXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuYWxwaGEgPSAxO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIGdyYXBoaWNzIGlzIGRpcnR5IG9yIG5vdFxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG59XG5cbldlYkdMR3JhcGhpY3NEYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFdlYkdMR3JhcGhpY3NEYXRhO1xubW9kdWxlLmV4cG9ydHMgPSBXZWJHTEdyYXBoaWNzRGF0YTtcblxuLyoqXG4gKiBSZXNldHMgdGhlIHZlcnRpY2VzIGFuZCB0aGUgaW5kaWNlc1xuICovXG5XZWJHTEdyYXBoaWNzRGF0YS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLmluZGljZXMgPSBbXTtcbn07XG5cbi8qKlxuICogQmluZHMgdGhlIGJ1ZmZlcnMgYW5kIHVwbG9hZHMgdGhlIGRhdGFcbiAqL1xuV2ViR0xHcmFwaGljc0RhdGEucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4vLyAgICB0aGlzLmxhc3RJbmRleCA9IGdyYXBoaWNzLmdyYXBoaWNzRGF0YS5sZW5ndGg7XG4gICAgdGhpcy5nbFBvaW50cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wb2ludHMpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5nbFBvaW50cywgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdGhpcy5nbEluZGljZXMgPSBuZXcgVWludDE2QXJyYXkodGhpcy5pbmRpY2VzKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuZ2xJbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG59O1xuIiwiLyoqXG4gKiBAZmlsZSAgICAgICAgTWFpbiBleHBvcnQgb2YgdGhlIFBJWEkgY29yZSBsaWJyYXJ5XG4gKiBAYXV0aG9yICAgICAgTWF0IEdyb3ZlcyA8bWF0QGdvb2Rib3lkaWdpdGFsLmNvbT5cbiAqIEBjb3B5cmlnaHQgICAyMDEzLTIwMTUgR29vZEJveURpZ2l0YWxcbiAqIEBsaWNlbnNlICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0dvb2RCb3lEaWdpdGFsL3BpeGkuanMvYmxvYi9tYXN0ZXIvTElDRU5TRXxNSVQgTGljZW5zZX1cbiAqL1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgUElYSVxuICovXG52YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIHV0aWxzXG4gICAgdXRpbHM6IHJlcXVpcmUoJy4vdXRpbHMnKSxcbiAgICBtYXRoOiByZXF1aXJlKCcuL21hdGgnKSxcbiAgICBDT05TVDogcmVxdWlyZSgnLi9jb25zdCcpLFxuXG4gICAgLy8gZGlzcGxheVxuICAgIERpc3BsYXlPYmplY3Q6ICAgICAgICAgIHJlcXVpcmUoJy4vZGlzcGxheS9EaXNwbGF5T2JqZWN0JyksXG4gICAgQ29udGFpbmVyOiAgICAgICAgICAgICAgcmVxdWlyZSgnLi9kaXNwbGF5L0NvbnRhaW5lcicpLFxuXG4gICAgLy8gbGVnYWN5Li5cbiAgICBTdGFnZTogICAgICAgICAgICAgICAgICByZXF1aXJlKCcuL2Rpc3BsYXkvQ29udGFpbmVyJyksXG4gICAgRGlzcGxheU9iamVjdENvbnRhaW5lcjogcmVxdWlyZSgnLi9kaXNwbGF5L0NvbnRhaW5lcicpLFxuXG4gICAgU3ByaXRlOiAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9zcHJpdGVzL1Nwcml0ZScpLFxuICAgIFBhcnRpY2xlQ29udGFpbmVyOiAgICAgIHJlcXVpcmUoJy4vcGFydGljbGVzL1BhcnRpY2xlQ29udGFpbmVyJyksXG4gICAgU3ByaXRlUmVuZGVyZXI6ICAgICAgICAgcmVxdWlyZSgnLi9zcHJpdGVzL3dlYmdsL1Nwcml0ZVJlbmRlcmVyJyksXG4gICAgUGFydGljbGVSZW5kZXJlcjogICAgICAgcmVxdWlyZSgnLi9wYXJ0aWNsZXMvd2ViZ2wvUGFydGljbGVSZW5kZXJlcicpLFxuXG4gICAgLy8gcHJpbWl0aXZlc1xuICAgIEdyYXBoaWNzOiAgICAgICAgICAgICAgIHJlcXVpcmUoJy4vZ3JhcGhpY3MvR3JhcGhpY3MnKSxcbiAgICBHcmFwaGljc0RhdGE6ICAgICAgICAgICByZXF1aXJlKCcuL2dyYXBoaWNzL0dyYXBoaWNzRGF0YScpLFxuICAgIEdyYXBoaWNzUmVuZGVyZXI6ICAgICAgIHJlcXVpcmUoJy4vZ3JhcGhpY3Mvd2ViZ2wvR3JhcGhpY3NSZW5kZXJlcicpLFxuXG4gICAgLy8gdGV4dHVyZXNcbiAgICBUZXh0dXJlOiAgICAgICAgICAgICAgICByZXF1aXJlKCcuL3RleHR1cmVzL1RleHR1cmUnKSxcbiAgICBCYXNlVGV4dHVyZTogICAgICAgICAgICByZXF1aXJlKCcuL3RleHR1cmVzL0Jhc2VUZXh0dXJlJyksXG4gICAgUmVuZGVyVGV4dHVyZTogICAgICAgICAgcmVxdWlyZSgnLi90ZXh0dXJlcy9SZW5kZXJUZXh0dXJlJyksXG4gICAgVmlkZW9CYXNlVGV4dHVyZTogICAgICAgcmVxdWlyZSgnLi90ZXh0dXJlcy9WaWRlb0Jhc2VUZXh0dXJlJyksXG5cbiAgICAvLyByZW5kZXJlcnMgLSBjYW52YXNcbiAgICBDYW52YXNSZW5kZXJlcjogICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy9jYW52YXMvQ2FudmFzUmVuZGVyZXInKSxcbiAgICBDYW52YXNHcmFwaGljczogICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzR3JhcGhpY3MnKSxcbiAgICBDYW52YXNCdWZmZXI6ICAgICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy9jYW52YXMvdXRpbHMvQ2FudmFzQnVmZmVyJyksXG5cbiAgICAvLyByZW5kZXJlcnMgLSB3ZWJnbFxuICAgIFdlYkdMUmVuZGVyZXI6ICAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKSxcbiAgICBTaGFkZXJNYW5hZ2VyOiAgICAgICAgICByZXF1aXJlKCcuL3JlbmRlcmVycy93ZWJnbC9tYW5hZ2Vycy9TaGFkZXJNYW5hZ2VyJyksXG4gICAgU2hhZGVyOiAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9yZW5kZXJlcnMvd2ViZ2wvc2hhZGVycy9TaGFkZXInKSxcblxuICAgIC8vIGZpbHRlcnMgLSB3ZWJnbFxuICAgIEFic3RyYWN0RmlsdGVyOiAgICAgICAgIHJlcXVpcmUoJy4vcmVuZGVyZXJzL3dlYmdsL2ZpbHRlcnMvQWJzdHJhY3RGaWx0ZXInKSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGVscGVyIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSBkZXRlY3Qgd2hpY2ggcmVuZGVyZXIgeW91IHNob3VsZCBiZSB1c2luZy5cbiAgICAgKiBXZWJHTCBpcyB0aGUgcHJlZmVycmVkIHJlbmRlcmVyIGFzIGl0IGlzIGEgbG90IGZhc3Rlci4gSWYgd2ViR0wgaXMgbm90IHN1cHBvcnRlZCBieVxuICAgICAqIHRoZSBicm93c2VyIHRoZW4gdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBhIGNhbnZhcyByZW5kZXJlclxuICAgICAqXG4gICAgICogQHBhcmFtIHdpZHRoPTgwMCB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIHJlbmRlcmVycyB2aWV3XG4gICAgICogQHBhcmFtIGhlaWdodD02MDAge251bWJlcn0gdGhlIGhlaWdodCBvZiB0aGUgcmVuZGVyZXJzIHZpZXdcbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIHtvYmplY3R9IFRoZSBvcHRpb25hbCByZW5kZXJlciBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIFtvcHRpb25zLnZpZXddIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGNhbnZhcyB0byB1c2UgYXMgYSB2aWV3LCBvcHRpb25hbFxuICAgICAqIEBwYXJhbSBbb3B0aW9ucy50cmFuc3BhcmVudD1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyB0cmFuc3BhcmVudCwgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwYXJhbSBbb3B0aW9ucy5hbnRpYWxpYXM9ZmFsc2VdIHtib29sZWFufSBzZXRzIGFudGlhbGlhcyAob25seSBhcHBsaWNhYmxlIGluIGNocm9tZSBhdCB0aGUgbW9tZW50KVxuICAgICAqIEBwYXJhbSBbb3B0aW9ucy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXI9ZmFsc2VdIHtib29sZWFufSBlbmFibGVzIGRyYXdpbmcgYnVmZmVyIHByZXNlcnZhdGlvbiwgZW5hYmxlIHRoaXMgaWYgeW91XG4gICAgICogICAgICBuZWVkIHRvIGNhbGwgdG9EYXRhVXJsIG9uIHRoZSB3ZWJnbCBjb250ZXh0XG4gICAgICogQHBhcmFtIFtvcHRpb25zLnJlc29sdXRpb249MV0ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyLCByZXRpbmEgd291bGQgYmUgMlxuICAgICAqIEBwYXJhbSBbbm9XZWJHTD1mYWxzZV0ge2Jvb2xlYW59IHByZXZlbnRzIHNlbGVjdGlvbiBvZiBXZWJHTCByZW5kZXJlciwgZXZlbiBpZiBzdWNoIGlzIHByZXNlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1dlYkdMUmVuZGVyZXJ8Q2FudmFzUmVuZGVyZXJ9IFJldHVybnMgV2ViR0wgcmVuZGVyZXIgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgQ2FudmFzUmVuZGVyZXJcbiAgICAgKi9cbiAgICBhdXRvRGV0ZWN0UmVuZGVyZXI6IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBvcHRpb25zLCBub1dlYkdMKVxuICAgIHtcbiAgICAgICAgd2lkdGggPSB3aWR0aCB8fCA4MDA7XG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCA2MDA7XG5cbiAgICAgICAgaWYgKCFub1dlYkdMICYmIGNoZWNrV2ViR0woKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBjb3JlLldlYkdMUmVuZGVyZXIod2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IGNvcmUuQ2FudmFzUmVuZGVyZXIod2lkdGgsIGhlaWdodCwgb3B0aW9ucyk7XG4gICAgfVxufTtcblxuLy8gYWRkIGNvbnN0YW50cyB0byBleHBvcnRcbnZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKTtcblxuZm9yICh2YXIgYyBpbiBDT05TVCkge1xuICAgIGNvcmVbY10gPSBDT05TVFtjXTtcbn1cblxuXG52YXIgY29udGV4dE9wdGlvbnMgPSB7IHN0ZW5jaWw6IHRydWUgfTtcblxuZnVuY3Rpb24gY2hlY2tXZWJHTCgpXG57XG4gICAgdHJ5XG4gICAge1xuICAgICAgICBpZiAoIXdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywgY29udGV4dE9wdGlvbnMpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCBjb250ZXh0T3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuICEhKGdsICYmIGdsLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuc3RlbmNpbCk7XG4gICAgfVxuICAgIGNhdGNoIChlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsInZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcblxuLyoqXG4gKiBUaGUgcGl4aSBNYXRyaXggY2xhc3MgYXMgYW4gb2JqZWN0LCB3aGljaCBtYWtlcyBpdCBhIGxvdCBmYXN0ZXIsXG4gKiBoZXJlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgaXQgOlxuICogfCBhIHwgYiB8IHR4fFxuICogfCBjIHwgZCB8IHR5fFxuICogfCAwIHwgMCB8IDEgfFxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWEkubWF0aFxuICovXG5mdW5jdGlvbiBNYXRyaXgoKVxue1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgdGhpcy5hID0gMTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5iID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5jID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgdGhpcy5kID0gMTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy50eCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMudHkgPSAwO1xufVxuXG5NYXRyaXgucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWF0cml4O1xubW9kdWxlLmV4cG9ydHMgPSBNYXRyaXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIE1hdHJpeCBvYmplY3QgYmFzZWQgb24gdGhlIGdpdmVuIGFycmF5LiBUaGUgRWxlbWVudCB0byBNYXRyaXggbWFwcGluZyBvcmRlciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIGEgPSBhcnJheVswXVxuICogYiA9IGFycmF5WzFdXG4gKiBjID0gYXJyYXlbM11cbiAqIGQgPSBhcnJheVs0XVxuICogdHggPSBhcnJheVsyXVxuICogdHkgPSBhcnJheVs1XVxuICpcbiAqIEBwYXJhbSBhcnJheSB7bnVtYmVyW119IFRoZSBhcnJheSB0aGF0IHRoZSBtYXRyaXggd2lsbCBiZSBwb3B1bGF0ZWQgZnJvbS5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpXG57XG4gICAgdGhpcy5hID0gYXJyYXlbMF07XG4gICAgdGhpcy5iID0gYXJyYXlbMV07XG4gICAgdGhpcy5jID0gYXJyYXlbM107XG4gICAgdGhpcy5kID0gYXJyYXlbNF07XG4gICAgdGhpcy50eCA9IGFycmF5WzJdO1xuICAgIHRoaXMudHkgPSBhcnJheVs1XTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBmcm9tIHRoZSBjdXJyZW50IE1hdHJpeCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRyYW5zcG9zZSB7Ym9vbGVhbn0gV2hldGhlciB3ZSBuZWVkIHRvIHRyYW5zcG9zZSB0aGUgbWF0cml4IG9yIG5vdFxuICogQHJldHVybiB7bnVtYmVyW119IHRoZSBuZXdseSBjcmVhdGVkIGFycmF5IHdoaWNoIGNvbnRhaW5zIHRoZSBtYXRyaXhcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHRyYW5zcG9zZSlcbntcbiAgICBpZiAoIXRoaXMuYXJyYXkpXG4gICAge1xuICAgICAgICB0aGlzLmFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSg5KTtcbiAgICB9XG5cbiAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuXG4gICAgaWYgKHRyYW5zcG9zZSlcbiAgICB7XG4gICAgICAgIGFycmF5WzBdID0gdGhpcy5hO1xuICAgICAgICBhcnJheVsxXSA9IHRoaXMuYjtcbiAgICAgICAgYXJyYXlbMl0gPSAwO1xuICAgICAgICBhcnJheVszXSA9IHRoaXMuYztcbiAgICAgICAgYXJyYXlbNF0gPSB0aGlzLmQ7XG4gICAgICAgIGFycmF5WzVdID0gMDtcbiAgICAgICAgYXJyYXlbNl0gPSB0aGlzLnR4O1xuICAgICAgICBhcnJheVs3XSA9IHRoaXMudHk7XG4gICAgICAgIGFycmF5WzhdID0gMTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgYXJyYXlbMF0gPSB0aGlzLmE7XG4gICAgICAgIGFycmF5WzFdID0gdGhpcy5jO1xuICAgICAgICBhcnJheVsyXSA9IHRoaXMudHg7XG4gICAgICAgIGFycmF5WzNdID0gdGhpcy5iO1xuICAgICAgICBhcnJheVs0XSA9IHRoaXMuZDtcbiAgICAgICAgYXJyYXlbNV0gPSB0aGlzLnR5O1xuICAgICAgICBhcnJheVs2XSA9IDA7XG4gICAgICAgIGFycmF5WzddID0gMDtcbiAgICAgICAgYXJyYXlbOF0gPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn07XG5cbi8qKlxuICogR2V0IGEgbmV3IHBvc2l0aW9uIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNmb3JtYXRpb24gYXBwbGllZC5cbiAqIENhbiBiZSB1c2VkIHRvIGdvIGZyb20gYSBjaGlsZCdzIGNvb3JkaW5hdGUgc3BhY2UgdG8gdGhlIHdvcmxkIGNvb3JkaW5hdGUgc3BhY2UuIChlLmcuIHJlbmRlcmluZylcbiAqXG4gKiBAcGFyYW0gcG9zIHtQb2ludH0gVGhlIG9yaWdpblxuICogQHBhcmFtIFtuZXdQb3NdIHtQb2ludH0gVGhlIHBvaW50IHRoYXQgdGhlIG5ldyBwb3NpdGlvbiBpcyBhc3NpZ25lZCB0byAoYWxsb3dlZCB0byBiZSBzYW1lIGFzIGlucHV0KVxuICogQHJldHVybiB7UG9pbnR9IFRoZSBuZXcgcG9pbnQsIHRyYW5zZm9ybWVkIHRocm91Z2ggdGhpcyBtYXRyaXhcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChwb3MsIG5ld1BvcylcbntcbiAgICBuZXdQb3MgPSBuZXdQb3MgfHwgbmV3IFBvaW50KCk7XG5cbiAgICB2YXIgeCA9IHBvcy54O1xuICAgIHZhciB5ID0gcG9zLnk7XG5cbiAgICBuZXdQb3MueCA9IHRoaXMuYSAqIHggKyB0aGlzLmMgKiB5ICsgdGhpcy50eDtcbiAgICBuZXdQb3MueSA9IHRoaXMuYiAqIHggKyB0aGlzLmQgKiB5ICsgdGhpcy50eTtcblxuICAgIHJldHVybiBuZXdQb3M7XG59O1xuXG4vKipcbiAqIEdldCBhIG5ldyBwb3NpdGlvbiB3aXRoIHRoZSBpbnZlcnNlIG9mIHRoZSBjdXJyZW50IHRyYW5zZm9ybWF0aW9uIGFwcGxpZWQuXG4gKiBDYW4gYmUgdXNlZCB0byBnbyBmcm9tIHRoZSB3b3JsZCBjb29yZGluYXRlIHNwYWNlIHRvIGEgY2hpbGQncyBjb29yZGluYXRlIHNwYWNlLiAoZS5nLiBpbnB1dClcbiAqXG4gKiBAcGFyYW0gcG9zIHtQb2ludH0gVGhlIG9yaWdpblxuICogQHBhcmFtIFtuZXdQb3NdIHtQb2ludH0gVGhlIHBvaW50IHRoYXQgdGhlIG5ldyBwb3NpdGlvbiBpcyBhc3NpZ25lZCB0byAoYWxsb3dlZCB0byBiZSBzYW1lIGFzIGlucHV0KVxuICogQHJldHVybiB7UG9pbnR9IFRoZSBuZXcgcG9pbnQsIGludmVyc2UtdHJhbnNmb3JtZWQgdGhyb3VnaCB0aGlzIG1hdHJpeFxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwcGx5SW52ZXJzZSA9IGZ1bmN0aW9uIChwb3MsIG5ld1BvcylcbntcbiAgICBuZXdQb3MgPSBuZXdQb3MgfHwgbmV3IFBvaW50KCk7XG5cbiAgICB2YXIgaWQgPSAxIC8gKHRoaXMuYSAqIHRoaXMuZCArIHRoaXMuYyAqIC10aGlzLmIpO1xuXG4gICAgdmFyIHggPSBwb3MueDtcbiAgICB2YXIgeSA9IHBvcy55O1xuXG4gICAgbmV3UG9zLnggPSB0aGlzLmQgKiBpZCAqIHggKyAtdGhpcy5jICogaWQgKiB5ICsgKHRoaXMudHkgKiB0aGlzLmMgLSB0aGlzLnR4ICogdGhpcy5kKSAqIGlkO1xuICAgIG5ld1Bvcy55ID0gdGhpcy5hICogaWQgKiB5ICsgLXRoaXMuYiAqIGlkICogeCArICgtdGhpcy50eSAqIHRoaXMuYSArIHRoaXMudHggKiB0aGlzLmIpICogaWQ7XG5cbiAgICByZXR1cm4gbmV3UG9zO1xufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBtYXRyaXggb24gdGhlIHggYW5kIHkuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgdGhpcy50eCArPSB4O1xuICAgIHRoaXMudHkgKz0geTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBcHBsaWVzIGEgc2NhbGUgdHJhbnNmb3JtYXRpb24gdG8gdGhlIG1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgYW1vdW50IHRvIHNjYWxlIGhvcml6b250YWxseVxuICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIGFtb3VudCB0byBzY2FsZSB2ZXJ0aWNhbGx5XG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICB0aGlzLmEgKj0geDtcbiAgICB0aGlzLmQgKj0geTtcbiAgICB0aGlzLmMgKj0geDtcbiAgICB0aGlzLmIgKj0geTtcbiAgICB0aGlzLnR4ICo9IHg7XG4gICAgdGhpcy50eSAqPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICogQXBwbGllcyBhIHJvdGF0aW9uIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIC0gVGhlIGFuZ2xlIGluIHJhZGlhbnMuXG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKGFuZ2xlKVxue1xuICAgIHZhciBjb3MgPSBNYXRoLmNvcyggYW5nbGUgKTtcbiAgICB2YXIgc2luID0gTWF0aC5zaW4oIGFuZ2xlICk7XG5cbiAgICB2YXIgYTEgPSB0aGlzLmE7XG4gICAgdmFyIGMxID0gdGhpcy5jO1xuICAgIHZhciB0eDEgPSB0aGlzLnR4O1xuXG4gICAgdGhpcy5hID0gYTEgKiBjb3MtdGhpcy5iICogc2luO1xuICAgIHRoaXMuYiA9IGExICogc2luK3RoaXMuYiAqIGNvcztcbiAgICB0aGlzLmMgPSBjMSAqIGNvcy10aGlzLmQgKiBzaW47XG4gICAgdGhpcy5kID0gYzEgKiBzaW4rdGhpcy5kICogY29zO1xuICAgIHRoaXMudHggPSB0eDEgKiBjb3MgLSB0aGlzLnR5ICogc2luO1xuICAgIHRoaXMudHkgPSB0eDEgKiBzaW4gKyB0aGlzLnR5ICogY29zO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGdpdmVuIE1hdHJpeCB0byB0aGlzIE1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcmV0dXJuIHtNYXRyaXh9IFRoaXMgbWF0cml4LiBHb29kIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKG1hdHJpeClcbntcbiAgICB2YXIgYTEgPSB0aGlzLmE7XG4gICAgdmFyIGIxID0gdGhpcy5iO1xuICAgIHZhciBjMSA9IHRoaXMuYztcbiAgICB2YXIgZDEgPSB0aGlzLmQ7XG5cbiAgICB0aGlzLmEgID0gbWF0cml4LmEgKiBhMSArIG1hdHJpeC5iICogYzE7XG4gICAgdGhpcy5iICA9IG1hdHJpeC5hICogYjEgKyBtYXRyaXguYiAqIGQxO1xuICAgIHRoaXMuYyAgPSBtYXRyaXguYyAqIGExICsgbWF0cml4LmQgKiBjMTtcbiAgICB0aGlzLmQgID0gbWF0cml4LmMgKiBiMSArIG1hdHJpeC5kICogZDE7XG5cbiAgICB0aGlzLnR4ID0gbWF0cml4LnR4ICogYTEgKyBtYXRyaXgudHkgKiBjMSArIHRoaXMudHg7XG4gICAgdGhpcy50eSA9IG1hdHJpeC50eCAqIGIxICsgbWF0cml4LnR5ICogZDEgKyB0aGlzLnR5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFByZXBlbmRzIHRoZSBnaXZlbiBNYXRyaXggdG8gdGhpcyBNYXRyaXguXG4gKlxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbihtYXRyaXgpXG57XG4gICAgdmFyIHR4MSA9IHRoaXMudHg7XG5cbiAgICBpZiAobWF0cml4LmEgIT09IDEgfHwgbWF0cml4LmIgIT09IDAgfHwgbWF0cml4LmMgIT09IDAgfHwgbWF0cml4LmQgIT09IDEpXG4gICAge1xuICAgICAgICB2YXIgYTEgPSB0aGlzLmE7XG4gICAgICAgIHZhciBjMSA9IHRoaXMuYztcbiAgICAgICAgdGhpcy5hICA9IGExKm1hdHJpeC5hK3RoaXMuYiptYXRyaXguYztcbiAgICAgICAgdGhpcy5iICA9IGExKm1hdHJpeC5iK3RoaXMuYiptYXRyaXguZDtcbiAgICAgICAgdGhpcy5jICA9IGMxKm1hdHJpeC5hK3RoaXMuZCptYXRyaXguYztcbiAgICAgICAgdGhpcy5kICA9IGMxKm1hdHJpeC5iK3RoaXMuZCptYXRyaXguZDtcbiAgICB9XG5cbiAgICB0aGlzLnR4ID0gdHgxKm1hdHJpeC5hK3RoaXMudHkqbWF0cml4LmMrbWF0cml4LnR4O1xuICAgIHRoaXMudHkgPSB0eDEqbWF0cml4LmIrdGhpcy50eSptYXRyaXguZCttYXRyaXgudHk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52ZXJ0cyB0aGlzIG1hdHJpeFxuICpcbiAqIEByZXR1cm4ge01hdHJpeH0gVGhpcyBtYXRyaXguIEdvb2QgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnQgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIGExID0gdGhpcy5hO1xuICAgIHZhciBiMSA9IHRoaXMuYjtcbiAgICB2YXIgYzEgPSB0aGlzLmM7XG4gICAgdmFyIGQxID0gdGhpcy5kO1xuICAgIHZhciB0eDEgPSB0aGlzLnR4O1xuICAgIHZhciBuID0gYTEqZDEtYjEqYzE7XG5cbiAgICB0aGlzLmEgPSBkMS9uO1xuICAgIHRoaXMuYiA9IC1iMS9uO1xuICAgIHRoaXMuYyA9IC1jMS9uO1xuICAgIHRoaXMuZCA9IGExL247XG4gICAgdGhpcy50eCA9IChjMSp0aGlzLnR5LWQxKnR4MSkvbjtcbiAgICB0aGlzLnR5ID0gLShhMSp0aGlzLnR5LWIxKnR4MSkvbjtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIFJlc2V0cyB0aGlzIE1hdGl4IHRvIGFuIGlkZW50aXR5IChkZWZhdWx0KSBtYXRyaXguXG4gKlxuICogQHJldHVybiB7TWF0cml4fSBUaGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlkZW50aXR5ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmEgPSAxO1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5jID0gMDtcbiAgICB0aGlzLmQgPSAxO1xuICAgIHRoaXMudHggPSAwO1xuICAgIHRoaXMudHkgPSAwO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgTWF0cml4IG9iamVjdCB3aXRoIHRoZSBzYW1lIHZhbHVlcyBhcyB0aGlzIG9uZS5cbiAqXG4gKiBAcmV0dXJuIHtNYXRyaXh9IEEgY29weSBvZiB0aGlzIG1hdHJpeC4gR29vZCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5NYXRyaXgucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIG1hdHJpeC5hID0gdGhpcy5hO1xuICAgIG1hdHJpeC5iID0gdGhpcy5iO1xuICAgIG1hdHJpeC5jID0gdGhpcy5jO1xuICAgIG1hdHJpeC5kID0gdGhpcy5kO1xuICAgIG1hdHJpeC50eCA9IHRoaXMudHg7XG4gICAgbWF0cml4LnR5ID0gdGhpcy50eTtcblxuICAgIHJldHVybiBtYXRyaXg7XG59O1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gbWF0cml4IHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBvbmVzIGluIHRoaXMgbWF0cml4XG4gKlxuICogQHJldHVybiB7TWF0cml4fSBUaGUgbWF0cml4IGdpdmVuIGluIHBhcmFtZXRlciB3aXRoIGl0cyB2YWx1ZXMgdXBkYXRlZC5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKG1hdHJpeClcbntcbiAgICBtYXRyaXguYSA9IHRoaXMuYTtcbiAgICBtYXRyaXguYiA9IHRoaXMuYjtcbiAgICBtYXRyaXguYyA9IHRoaXMuYztcbiAgICBtYXRyaXguZCA9IHRoaXMuZDtcbiAgICBtYXRyaXgudHggPSB0aGlzLnR4O1xuICAgIG1hdHJpeC50eSA9IHRoaXMudHk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xufTtcblxuLyoqXG4gKiBBIGRlZmF1bHQgKGlkZW50aXR5KSBtYXRyaXhcbiAqL1xuTWF0cml4LklERU5USVRZID0gbmV3IE1hdHJpeCgpO1xuLyoqXG4gKiBBIHRlbXAgbWF0cml4XG4gKi9cbk1hdHJpeC5URU1QX01BVFJJWCA9IG5ldyBNYXRyaXgoKTtcbiIsIi8qKlxuICogVGhlIFBvaW50IG9iamVjdCByZXByZXNlbnRzIGEgbG9jYXRpb24gaW4gYSB0d28tZGltZW5zaW9uYWwgY29vcmRpbmF0ZSBzeXN0ZW0sIHdoZXJlIHggcmVwcmVzZW50c1xuICogdGhlIGhvcml6b250YWwgYXhpcyBhbmQgeSByZXByZXNlbnRzIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWEkubWF0aFxuICogQHBhcmFtIFt4PTBdIHtudW1iZXJ9IHBvc2l0aW9uIG9mIHRoZSBwb2ludCBvbiB0aGUgeCBheGlzXG4gKiBAcGFyYW0gW3k9MF0ge251bWJlcn0gcG9zaXRpb24gb2YgdGhlIHBvaW50IG9uIHRoZSB5IGF4aXNcbiAqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSlcbntcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueCA9IHggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy55ID0geSB8fCAwO1xufVxuXG5Qb2ludC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQb2ludDtcbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgcG9pbnRcbiAqXG4gKiBAcmV0dXJuIHtQb2ludH0gYSBjb3B5IG9mIHRoZSBwb2ludFxuICovXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBwb2ludCB0byBhIG5ldyB4IGFuZCB5IHBvc2l0aW9uLlxuICogSWYgeSBpcyBvbWl0dGVkLCBib3RoIHggYW5kIHkgd2lsbCBiZSBzZXQgdG8geC5cbiAqXG4gKiBAcGFyYW0gW3g9MF0ge251bWJlcn0gcG9zaXRpb24gb2YgdGhlIHBvaW50IG9uIHRoZSB4IGF4aXNcbiAqIEBwYXJhbSBbeT0wXSB7bnVtYmVyfSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgb24gdGhlIHkgYXhpc1xuICovXG5Qb2ludC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgdGhpcy54ID0geCB8fCAwO1xuICAgIHRoaXMueSA9IHkgfHwgKCAoeSAhPT0gMCkgPyB0aGlzLnggOiAwICkgO1xufTtcbiIsIi8qKlxuICogQG5hbWVzcGFjZSBQSVhJLm1hdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLyoqXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFBJXzIgLSBUd28gUGlcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgUElfMjogTWF0aC5QSSAqIDIsXG5cbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gUkFEX1RPX0RFRyAtIENvbnN0YW50IGNvbnZlcnNpb24gZmFjdG9yIGZvciBjb252ZXJ0aW5nIHJhZGlhbnMgdG8gZGVncmVlc1xuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBSQURfVE9fREVHOiAxODAgLyBNYXRoLlBJLFxuXG4gICAgLyoqXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IERFR19UT19SQUQgLSBDb25zdGFudCBjb252ZXJzaW9uIGZhY3RvciBmb3IgY29udmVydGluZyBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgREVHX1RPX1JBRDogTWF0aC5QSSAvIDE4MCxcblxuICAgIFBvaW50OiAgICAgIHJlcXVpcmUoJy4vUG9pbnQnKSxcbiAgICBNYXRyaXg6ICAgICByZXF1aXJlKCcuL01hdHJpeCcpLFxuXG4gICAgQ2lyY2xlOiAgICAgcmVxdWlyZSgnLi9zaGFwZXMvQ2lyY2xlJyksXG4gICAgRWxsaXBzZTogICAgcmVxdWlyZSgnLi9zaGFwZXMvRWxsaXBzZScpLFxuICAgIFBvbHlnb246ICAgIHJlcXVpcmUoJy4vc2hhcGVzL1BvbHlnb24nKSxcbiAgICBSZWN0YW5nbGU6ICByZXF1aXJlKCcuL3NoYXBlcy9SZWN0YW5nbGUnKSxcbiAgICBSb3VuZGVkUmVjdGFuZ2xlOiByZXF1aXJlKCcuL3NoYXBlcy9Sb3VuZGVkUmVjdGFuZ2xlJylcbn07XG4iLCJ2YXIgUmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9SZWN0YW5nbGUnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIENpcmNsZSBvYmplY3QgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIGhpdCBhcmVhIGZvciBkaXNwbGF5T2JqZWN0c1xuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGlzIGNpcmNsZVxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoaXMgY2lyY2xlXG4gKiBAcGFyYW0gcmFkaXVzIHtudW1iZXJ9IFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZVxuICovXG5mdW5jdGlvbiBDaXJjbGUoeCwgeSwgcmFkaXVzKVxue1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy54ID0geCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnkgPSB5IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0LCBtYWlubHkgdXNlZCB0byBhdm9pZCBgaW5zdGFuY2VvZmAgY2hlY2tzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuU0hBUEVTLkNJUkM7XG59XG5cbkNpcmNsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaXJjbGU7XG5tb2R1bGUuZXhwb3J0cyA9IENpcmNsZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyBDaXJjbGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtDaXJjbGV9IGEgY29weSBvZiB0aGUgQ2lyY2xlXG4gKi9cbkNpcmNsZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgQ2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGdpdmVuIGFyZSBjb250YWluZWQgd2l0aGluIHRoaXMgY2lyY2xlXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgeC95IGNvb3JkaW5hdGVzIGFyZSB3aXRoaW4gdGhpcyBDaXJjbGVcbiAqL1xuQ2lyY2xlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICAgIGlmICh0aGlzLnJhZGl1cyA8PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBkeCA9ICh0aGlzLnggLSB4KSxcbiAgICAgICAgZHkgPSAodGhpcy55IC0geSksXG4gICAgICAgIHIyID0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcblxuICAgIGR4ICo9IGR4O1xuICAgIGR5ICo9IGR5O1xuXG4gICAgcmV0dXJuIChkeCArIGR5IDw9IHIyKTtcbn07XG5cbi8qKlxuKiBSZXR1cm5zIHRoZSBmcmFtaW5nIHJlY3RhbmdsZSBvZiB0aGUgY2lyY2xlIGFzIGEgUmVjdGFuZ2xlIG9iamVjdFxuKlxuKiBAcmV0dXJuIHtSZWN0YW5nbGV9IHRoZSBmcmFtaW5nIHJlY3RhbmdsZVxuKi9cbkNpcmNsZS5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnggLSB0aGlzLnJhZGl1cywgdGhpcy55IC0gdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzICogMiwgdGhpcy5yYWRpdXMgKiAyKTtcbn07XG4iLCJ2YXIgUmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9SZWN0YW5nbGUnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIEVsbGlwc2Ugb2JqZWN0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgYSBoaXQgYXJlYSBmb3IgZGlzcGxheU9iamVjdHNcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgZWxsaXBzZVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFRoZSBoYWxmIHdpZHRoIG9mIHRoaXMgZWxsaXBzZVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgaGFsZiBoZWlnaHQgb2YgdGhpcyBlbGxpcHNlXG4gKi9cbmZ1bmN0aW9uIEVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueCA9IHggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy55ID0geSB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QsIG1haW5seSB1c2VkIHRvIGF2b2lkIGBpbnN0YW5jZW9mYCBjaGVja3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5TSEFQRVMuRUxJUDtcbn1cblxuRWxsaXBzZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFbGxpcHNlO1xubW9kdWxlLmV4cG9ydHMgPSBFbGxpcHNlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIEVsbGlwc2UgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtFbGxpcHNlfSBhIGNvcHkgb2YgdGhlIGVsbGlwc2VcbiAqL1xuRWxsaXBzZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgRWxsaXBzZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBnaXZlbiBhcmUgY29udGFpbmVkIHdpdGhpbiB0aGlzIGVsbGlwc2VcbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSB4L3kgY29vcmRzIGFyZSB3aXRoaW4gdGhpcyBlbGxpcHNlXG4gKi9cbkVsbGlwc2UucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCB8fCB0aGlzLmhlaWdodCA8PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vbm9ybWFsaXplIHRoZSBjb29yZHMgdG8gYW4gZWxsaXBzZSB3aXRoIGNlbnRlciAwLDBcbiAgICB2YXIgbm9ybXggPSAoKHggLSB0aGlzLngpIC8gdGhpcy53aWR0aCksXG4gICAgICAgIG5vcm15ID0gKCh5IC0gdGhpcy55KSAvIHRoaXMuaGVpZ2h0KTtcblxuICAgIG5vcm14ICo9IG5vcm14O1xuICAgIG5vcm15ICo9IG5vcm15O1xuXG4gICAgcmV0dXJuIChub3JteCArIG5vcm15IDw9IDEpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmcmFtaW5nIHJlY3RhbmdsZSBvZiB0aGUgZWxsaXBzZSBhcyBhIFJlY3RhbmdsZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IHRoZSBmcmFtaW5nIHJlY3RhbmdsZVxuICovXG5FbGxpcHNlLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCAtIHRoaXMud2lkdGgsIHRoaXMueSAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG59O1xuIiwidmFyIFBvaW50ID0gcmVxdWlyZSgnLi4vUG9pbnQnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHBvaW50cyoge1BvaW50W118bnVtYmVyW118Li4uUG9pbnR8Li4ubnVtYmVyfSBUaGlzIGNhbiBiZSBhbiBhcnJheSBvZiBQb2ludHMgdGhhdCBmb3JtIHRoZSBwb2x5Z29uLFxuICogICAgICBhIGZsYXQgYXJyYXkgb2YgbnVtYmVycyB0aGF0IHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgW3gseSwgeCx5LCAuLi5dLCBvciB0aGUgYXJndW1lbnRzIHBhc3NlZCBjYW4gYmVcbiAqICAgICAgYWxsIHRoZSBwb2ludHMgb2YgdGhlIHBvbHlnb24gZS5nLiBgbmV3IFBvbHlnb24obmV3IFBvaW50KCksIG5ldyBQb2ludCgpLCAuLi4pYCwgb3IgdGhlXG4gKiAgICAgIGFyZ3VtZW50cyBwYXNzZWQgY2FuIGJlIGZsYXQgeCx5IHZhbHVlcyBlLmcuIGBuZXcgUG9seWdvbih4LHksIHgseSwgeCx5LCAuLi4pYCB3aGVyZSBgeGAgYW5kIGB5YCBhcmVcbiAqICAgICAgTnVtYmVycy5cbiAqL1xuZnVuY3Rpb24gUG9seWdvbihwb2ludHMpXG57XG4gICAgLy9pZiBwb2ludHMgaXNuJ3QgYW4gYXJyYXksIHVzZSBhcmd1bWVudHMgYXMgdGhlIGFycmF5XG4gICAgaWYgKCEocG9pbnRzIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgIHtcbiAgICAgICAgcG9pbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvL2lmIHRoaXMgaXMgYSBmbGF0IGFycmF5IG9mIG51bWJlcnMsIGNvbnZlcnQgaXQgdG8gcG9pbnRzXG4gICAgaWYgKHBvaW50c1swXSBpbnN0YW5jZW9mIFBvaW50KVxuICAgIHtcbiAgICAgICAgdmFyIHAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcG9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAucHVzaChwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9pbnRzID0gcDtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB0aGUgcG9pbnRzIG9mIHRoaXMgcG9seWdvblxuICAgICAqXG4gICAgICogQG1lbWJlciB7UG9pbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QsIG1haW5seSB1c2VkIHRvIGF2b2lkIGBpbnN0YW5jZW9mYCBjaGVja3NcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBDT05TVC5TSEFQRVMuUE9MWTtcbn1cblxuUG9seWdvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQb2x5Z29uO1xubW9kdWxlLmV4cG9ydHMgPSBQb2x5Z29uO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHBvbHlnb25cbiAqXG4gKiBAcmV0dXJuIHtQb2x5Z29ufSBhIGNvcHkgb2YgdGhlIHBvbHlnb25cbiAqL1xuUG9seWdvbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgUG9seWdvbih0aGlzLnBvaW50cy5zbGljZSgpKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gYXJlIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBwb2x5Z29uXG4gKlxuICogQHBhcmFtIHgge251bWJlcn0gVGhlIFggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIHkge251bWJlcn0gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgeC95IGNvb3JkaW5hdGVzIGFyZSB3aXRoaW4gdGhpcyBwb2x5Z29uXG4gKi9cblBvbHlnb24ucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuXG4gICAgLy8gdXNlIHNvbWUgcmF5Y2FzdGluZyB0byB0ZXN0IGhpdHNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svcG9pbnQtaW4tcG9seWdvbi9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAgIHZhciBsZW5ndGggPSB0aGlzLnBvaW50cy5sZW5ndGggLyAyO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBsZW5ndGggLSAxOyBpIDwgbGVuZ3RoOyBqID0gaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHhpID0gdGhpcy5wb2ludHNbaSAqIDJdLCB5aSA9IHRoaXMucG9pbnRzW2kgKiAyICsgMV0sXG4gICAgICAgICAgICB4aiA9IHRoaXMucG9pbnRzW2ogKiAyXSwgeWogPSB0aGlzLnBvaW50c1tqICogMiArIDFdLFxuICAgICAgICAgICAgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSkgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcblxuICAgICAgICBpZiAoaW50ZXJzZWN0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnNpZGUgPSAhaW5zaWRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc2lkZTtcbn07XG4iLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIHRoZSBSZWN0YW5nbGUgb2JqZWN0IGlzIGFuIGFyZWEgZGVmaW5lZCBieSBpdHMgcG9zaXRpb24sIGFzIGluZGljYXRlZCBieSBpdHMgdG9wLWxlZnQgY29ybmVyIHBvaW50ICh4LCB5KSBhbmQgYnkgaXRzIHdpZHRoIGFuZCBpdHMgaGVpZ2h0LlxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHVwcGVyLWxlZnQgY29ybmVyIG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHVwcGVyLWxlZnQgY29ybmVyIG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgb3ZlcmFsbCB3aWR0aCBvZiB0aGlzIHJlY3RhbmdsZVxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgb3ZlcmFsbCBoZWlnaHQgb2YgdGhpcyByZWN0YW5nbGVcbiAqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnggPSB4IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMueSA9IHkgfHwgMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0LCBtYWlubHkgdXNlZCB0byBhdm9pZCBgaW5zdGFuY2VvZmAgY2hlY2tzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuU0hBUEVTLlJFQ1Q7XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWN0YW5nbGU7XG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZTtcblxuLyoqXG4gKiBBIGNvbnN0YW50IGVtcHR5IHJlY3RhbmdsZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RhbnRcbiAqL1xuUmVjdGFuZ2xlLkVNUFRZID0gbmV3IFJlY3RhbmdsZSgwLCAwLCAwLCAwKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIFJlY3RhbmdsZVxuICpcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gYSBjb3B5IG9mIHRoZSByZWN0YW5nbGVcbiAqL1xuUmVjdGFuZ2xlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgZ2l2ZW4gYXJlIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBSZWN0YW5nbGVcbiAqXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcGFyYW0geSB7bnVtYmVyfSBUaGUgWSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSB4L3kgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiB0aGlzIFJlY3RhbmdsZVxuICovXG5SZWN0YW5nbGUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCB8fCB0aGlzLmhlaWdodCA8PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDwgdGhpcy54ICsgdGhpcy53aWR0aClcbiAgICB7XG4gICAgICAgIGlmICh5ID49IHRoaXMueSAmJiB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIFJvdW5kZWQgUmVjdGFuZ2xlIG9iamVjdCBpcyBhbiBhcmVhIHRoYXQgaGFzIG5pY2Ugcm91bmRlZCBjb3JuZXJzLCBhcyBpbmRpY2F0ZWQgYnkgaXRzIHRvcC1sZWZ0IGNvcm5lciBwb2ludCAoeCwgeSkgYW5kIGJ5IGl0cyB3aWR0aCBhbmQgaXRzIGhlaWdodCBhbmQgaXRzIHJhZGl1cy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0geCB7bnVtYmVyfSBUaGUgWCBjb29yZGluYXRlIG9mIHRoZSB1cHBlci1sZWZ0IGNvcm5lciBvZiB0aGUgcm91bmRlZCByZWN0YW5nbGVcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHVwcGVyLWxlZnQgY29ybmVyIG9mIHRoZSByb3VuZGVkIHJlY3RhbmdsZVxuICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFRoZSBvdmVyYWxsIHdpZHRoIG9mIHRoaXMgcm91bmRlZCByZWN0YW5nbGVcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gVGhlIG92ZXJhbGwgaGVpZ2h0IG9mIHRoaXMgcm91bmRlZCByZWN0YW5nbGVcbiAqIEBwYXJhbSByYWRpdXMge251bWJlcn0gQ29udHJvbHMgdGhlIHJhZGl1cyBvZiB0aGUgcm91bmRlZCBjb3JuZXJzXG4gKi9cbmZ1bmN0aW9uIFJvdW5kZWRSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG4gICAgdGhpcy54ID0geCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLnkgPSB5IHx8IDA7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDIwXG4gICAgICovXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMjA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0LCBtYWlubHkgdXNlZCB0byBhdm9pZCBgaW5zdGFuY2VvZmAgY2hlY2tzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuU0hBUEVTLlJSRUM7XG59XG5cblJvdW5kZWRSZWN0YW5nbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUm91bmRlZFJlY3RhbmdsZTtcbm1vZHVsZS5leHBvcnRzID0gUm91bmRlZFJlY3RhbmdsZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhpcyBSb3VuZGVkIFJlY3RhbmdsZVxuICpcbiAqIEByZXR1cm4ge1JvdW5kZWRSZWN0YW5nbGV9IGEgY29weSBvZiB0aGUgcm91bmRlZCByZWN0YW5nbGVcbiAqL1xuUm91bmRlZFJlY3RhbmdsZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHJldHVybiBuZXcgUm91bmRlZFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMucmFkaXVzKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgZ2l2ZW4gYXJlIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBSb3VuZGVkIFJlY3RhbmdsZVxuICpcbiAqIEBwYXJhbSB4IHtudW1iZXJ9IFRoZSBYIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEBwYXJhbSB5IHtudW1iZXJ9IFRoZSBZIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHgveSBjb29yZGluYXRlcyBhcmUgd2l0aGluIHRoaXMgUm91bmRlZCBSZWN0YW5nbGVcbiAqL1xuUm91bmRlZFJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoeCwgeSlcbntcbiAgICBpZiAodGhpcy53aWR0aCA8PSAwIHx8IHRoaXMuaGVpZ2h0IDw9IDApXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHggPj0gdGhpcy54ICYmIHggPD0gdGhpcy54ICsgdGhpcy53aWR0aClcbiAgICB7XG4gICAgICAgIGlmICh5ID49IHRoaXMueSAmJiB5IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vZGlzcGxheS9Db250YWluZXInKTtcblxuLyoqXG4gKiBUaGUgUGFydGljbGVDb250YWluZXIgY2xhc3MgaXMgYSByZWFsbHkgZmFzdCB2ZXJzaW9uIG9mIHRoZSBDb250YWluZXIgYnVpbHQgc29sZWx5IGZvciBzcGVlZCxcbiAqIHNvIHVzZSB3aGVuIHlvdSBuZWVkIGEgbG90IG9mIHNwcml0ZXMgb3IgcGFydGljbGVzLiBUaGUgdHJhZGVvZmYgb2YgdGhlIFBhcnRpY2xlQ29udGFpbmVyIGlzIHRoYXQgYWR2YW5jZWRcbiAqIGZ1bmN0aW9uYWxpdHkgd2lsbCBub3Qgd29yay4gUGFydGljbGVDb250YWluZXIgaW1wbGVtZW50cyBvbmx5IHRoZSBiYXNpYyBvYmplY3QgdHJhbnNmb3JtIChwb3NpdGlvbiwgc2NhbGUsIHJvdGF0aW9uKS5cbiAqIEFueSBvdGhlciBmdW5jdGlvbmFsaXR5IGxpa2UgdGludGluZywgbWFza2luZywgZXRjIHdpbGwgbm90IHdvcmsgb24gc3ByaXRlcyBpbiB0aGlzIGJhdGNoLlxuICpcbiAqIEl0J3MgZXh0cmVtZWx5IGVhc3kgdG8gdXNlIDpcbiAqXG4gKiBgYGBqc1xuICogdmFyIGNvbnRhaW5lciA9IG5ldyBQYXJ0aWNsZUNvbnRhaW5lcigpO1xuICpcbiAqIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyArK2kpXG4gKiB7XG4gKiAgICAgdmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoXCJteUltYWdlLnBuZ1wiKTtcbiAqICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEFuZCBoZXJlIHlvdSBoYXZlIGEgaHVuZHJlZCBzcHJpdGVzIHRoYXQgd2lsbCBiZSByZW5kZXJlciBhdCB0aGUgc3BlZWQgb2YgbGlnaHQuXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBDb250YWluZXJcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKlxuICogQHBhcmFtIHNpemUge251bWJlcn0gVGhlIG51bWJlciBvZiBpbWFnZXMgaW4gdGhlIFNwcml0ZUJhdGNoIGJlZm9yZSBpdCBmbHVzaGVzLlxuICogQHBhcmFtIHByb3BlcnRpZXMge29iamVjdH0gVGhlIHByb3BlcnRpZXMgdG8gYmUgdXBsb2FkZWRcbiAqL1xuZnVuY3Rpb24gUGFydGljbGVDb250YWluZXIoc2l6ZSwgcHJvcGVydGllcylcbntcbiAgICBDb250YWluZXIuY2FsbCh0aGlzKTtcblxuICAgIC8vIHNldCBwcm9wZXJ0aWVzIHRvIGJlIGR5bmFtaWMgKHRydWUpIC8gc3RhdGljIChmYWxzZSlcbiAgICAvLyBUT0RPIHRoaXMgY291bGQgYmUgZWFzaWVyIHRvIHVuZGVyc3RhbmQhXG4gICAgLyogdGhpcy5fcHJvcGVydGllcyA9IHtcbiAgICAgICAgc2NhbGUgOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb24gOiB0cnVlLFxuICAgICAgICByb3RhdGlvbiA6IGZhbHNlLFxuICAgICAgICB1dnMgOiBmYWxzZSxcbiAgICAgICAgYWxwaGEgOiBmYWxzZVxuICAgICAqIH1cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBbZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NpemUgPSBzaXplIHx8IDE1MDAwO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7V2ViR0xCdWZmZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9idWZmZXJzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl91cGRhdGVTdGF0aWMgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICB0aGlzLmludGVyYWN0aXZlQ2hpbGRyZW4gPSBmYWxzZTtcblxufVxuXG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbnRhaW5lci5wcm90b3R5cGUpO1xuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFydGljbGVDb250YWluZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlQ29udGFpbmVyO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIG9iamVjdCB0cmFuc2Zvcm0gZm9yIHJlbmRlcmluZ1xuICpcbiAqIEBwcml2YXRlXG4gKi9cblBhcnRpY2xlQ29udGFpbmVyLnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIFRPRE8gZG9uJ3QgbmVlZCB0byFcbiAgICB0aGlzLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0oKTtcbiAgICAvLyAgUElYSS5Db250YWluZXIucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybS5jYWxsKCB0aGlzICk7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNvbnRhaW5lciB1c2luZyB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSB3ZWJnbCByZW5kZXJlclxuICogQHByaXZhdGVcbiAqL1xuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlLnJlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIGlmICghdGhpcy52aXNpYmxlIHx8IHRoaXMud29ybGRBbHBoYSA8PSAwIHx8ICF0aGlzLmNoaWxkcmVuLmxlbmd0aCB8fCAhdGhpcy5yZW5kZXJhYmxlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKCByZW5kZXJlci5wbHVnaW5zLnBhcnRpY2xlICk7XG4gICAgcmVuZGVyZXIucGx1Z2lucy5wYXJ0aWNsZS5yZW5kZXIoIHRoaXMgKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGNoaWxkIHRvIHRoaXMgcGFydGljbGUgY29udGFpbmVyIGF0IGEgc3BlY2lmaWVkIGluZGV4LiBJZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICpcbiAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIHRvIGFkZFxuICogQHBhcmFtIGluZGV4IHtOdW1iZXJ9IFRoZSBpbmRleCB0byBwbGFjZSB0aGUgY2hpbGQgaW5cbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0aGF0IHdhcyBhZGRlZC5cbiAqL1xuUGFydGljbGVDb250YWluZXIucHJvdG90eXBlLmFkZENoaWxkQXQgPSBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KVxue1xuICAgIC8vIHByZXZlbnQgYWRkaW5nIHNlbGYgYXMgY2hpbGRcbiAgICBpZiAoY2hpbGQgPT09IHRoaXMpXG4gICAge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpXG4gICAge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRpYyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY2hpbGQgKyAnYWRkQ2hpbGRBdDogVGhlIGluZGV4ICcrIGluZGV4ICsnIHN1cHBsaWVkIGlzIG91dCBvZiBib3VuZHMgJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBjaGlsZCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXggcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIGluZGV4IHtOdW1iZXJ9IFRoZSBpbmRleCB0byBnZXQgdGhlIGNoaWxkIGZyb21cbiAqIEByZXR1cm4ge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB0aGF0IHdhcyByZW1vdmVkLlxuICovXG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUucmVtb3ZlQ2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleClcbntcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENoaWxkQXQoaW5kZXgpO1xuXG4gICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGljID0gdHJ1ZTtcblxuICAgIHJldHVybiBjaGlsZDtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgb2JqZWN0IHVzaW5nIHRoZSBDYW52YXMgcmVuZGVyZXJcbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfSBUaGUgY2FudmFzIHJlbmRlcmVyXG4gKiBAcHJpdmF0ZVxuICovXG5QYXJ0aWNsZUNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIGlmICghdGhpcy52aXNpYmxlIHx8IHRoaXMud29ybGRBbHBoYSA8PSAwIHx8ICF0aGlzLmNoaWxkcmVuLmxlbmd0aCB8fCAhdGhpcy5yZW5kZXJhYmxlKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcbiAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy53b3JsZFRyYW5zZm9ybTtcbiAgICB2YXIgaXNSb3RhdGVkID0gdHJ1ZTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSB0aGlzLndvcmxkQWxwaGE7XG5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0oKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7ICsraSlcbiAgICB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC52aXNpYmxlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcmFtZSA9IGNoaWxkLnRleHR1cmUuZnJhbWU7XG5cbiAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMud29ybGRBbHBoYSAqIGNoaWxkLmFscGhhO1xuXG4gICAgICAgIGlmIChjaGlsZC5yb3RhdGlvbiAlIChNYXRoLlBJICogMikgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZhc3Rlc3QgIHdheSB0byBvcHRpbWlzZSEgLSBpZiByb3RhdGlvbiBpcyAwIHRoZW4gd2UgY2FuIGF2b2lkIGFueSBraW5kIG9mIHNldFRyYW5zZm9ybSBjYWxsXG4gICAgICAgICAgICBpZiAoaXNSb3RhdGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uYSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLmIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5jLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uZCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLnR4LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0udHlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaXNSb3RhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGNoaWxkLnRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLFxuICAgICAgICAgICAgICAgIGZyYW1lLngsXG4gICAgICAgICAgICAgICAgZnJhbWUueSxcbiAgICAgICAgICAgICAgICBmcmFtZS53aWR0aCxcbiAgICAgICAgICAgICAgICBmcmFtZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgKChjaGlsZC5hbmNob3IueCkgKiAoLWZyYW1lLndpZHRoICogY2hpbGQuc2NhbGUueCkgKyBjaGlsZC5wb3NpdGlvbi54ICArIDAuNSkgfCAwLFxuICAgICAgICAgICAgICAgICgoY2hpbGQuYW5jaG9yLnkpICogKC1mcmFtZS5oZWlnaHQgKiBjaGlsZC5zY2FsZS55KSArIGNoaWxkLnBvc2l0aW9uLnkgICsgMC41KSB8IDAsXG4gICAgICAgICAgICAgICAgZnJhbWUud2lkdGggKiBjaGlsZC5zY2FsZS54LFxuICAgICAgICAgICAgICAgIGZyYW1lLmhlaWdodCAqIGNoaWxkLnNjYWxlLnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIWlzUm90YXRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc1JvdGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5kaXNwbGF5T2JqZWN0VXBkYXRlVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZFRyYW5zZm9ybSA9IGNoaWxkLndvcmxkVHJhbnNmb3JtO1xuXG4gICAgICAgICAgICBpZiAocmVuZGVyZXIucm91bmRQaXhlbHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmEsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmMsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLmQsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLnR4IHwgMCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0udHkgfCAwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uYSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uYixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uYyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0uZCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUcmFuc2Zvcm0udHgsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJhbnNmb3JtLnR5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY2hpbGQudGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgZnJhbWUueCxcbiAgICAgICAgICAgICAgICBmcmFtZS55LFxuICAgICAgICAgICAgICAgIGZyYW1lLndpZHRoLFxuICAgICAgICAgICAgICAgIGZyYW1lLmhlaWdodCxcbiAgICAgICAgICAgICAgICAoKGNoaWxkLmFuY2hvci54KSAqICgtZnJhbWUud2lkdGgpICsgMC41KSB8IDAsXG4gICAgICAgICAgICAgICAgKChjaGlsZC5hbmNob3IueSkgKiAoLWZyYW1lLmhlaWdodCkgKyAwLjUpIHwgMCxcbiAgICAgICAgICAgICAgICBmcmFtZS53aWR0aCxcbiAgICAgICAgICAgICAgICBmcmFtZS5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXG4vKipcbiAqIEBhdXRob3IgTWF0IEdyb3Zlc1xuICpcbiAqIEJpZyB0aGFua3MgdG8gdGhlIHZlcnkgY2xldmVyIE1hdHQgRGVzTGF1cmllcnMgPG1hdHRkZXNsPiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvXG4gKiBmb3IgY3JlYXRpbmcgdGhlIG9yaWdpbmFsIHBpeGkgdmVyc2lvbiFcbiAqIEFsc28gYSB0aGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2JjaGV2YWxpZXIgZm9yIHR3ZWFraW5nIHRoZSB0aW50IGFuZCBhbHBoYSBzbyB0aGF0IHRoZXkgbm93IHNoYXJlIDQgYnl0ZXMgb24gdGhlIHZlcnRleCBidWZmZXJcbiAqXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5IExpYkdEWCdzIFBhcnRpY2xlQnVmZmVyOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpYmdkeC9saWJnZHgvYmxvYi9tYXN0ZXIvZ2R4L3NyYy9jb20vYmFkbG9naWMvZ2R4L2dyYXBoaWNzL2cyZC9QYXJ0aWNsZUJ1ZmZlci5qYXZhXG4gKi9cblxuLyoqXG4gKlxuICogQGNsYXNzXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgc3ByaXRlIGJhdGNoIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gUGFydGljbGVCdWZmZXIoZ2wsIHByb3BlcnRpZXMsIHNpemUpXG57XG4gICAgLyoqXG4gICAgICogdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gICAgICogQG1lbWJlciB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fVxuICAgICAqL1xuICAgIHRoaXMuZ2wgPSBnbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0U2l6ZSA9IDI7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudmVydEJ5dGVTaXplID0gdGhpcy52ZXJ0U2l6ZSAqIDQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGltYWdlcyBpbiB0aGUgU3ByaXRlQmF0Y2ggYmVmb3JlIGl0IGZsdXNoZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5keW5hbWljUHJvcGVydGllcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY1Byb3BlcnRpZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG5cbiAgICAgICAgaWYocHJvcGVydHkuZHluYW1pYylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5keW5hbWljUHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGljUHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGljU3RyaWRlID0gMDtcbiAgICB0aGlzLnN0YXRpY0J1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5zdGF0aWNEYXRhID0gbnVsbDtcblxuICAgIHRoaXMuZHluYW1pY1N0cmlkZSA9IDA7XG4gICAgdGhpcy5keW5hbWljQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLmR5bmFtaWNEYXRhID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdEJ1ZmZlcnMoKTtcblxufVxuXG5QYXJ0aWNsZUJ1ZmZlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJ0aWNsZUJ1ZmZlcjtcbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVCdWZmZXI7XG5cbi8qKlxuICogU2V0cyB1cCB0aGUgcmVuZGVyZXIgY29udGV4dCBhbmQgbmVjZXNzYXJ5IGJ1ZmZlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBnbCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSB0aGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAqL1xuUGFydGljbGVCdWZmZXIucHJvdG90eXBlLmluaXRCdWZmZXJzID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIHZhciBpO1xuICAgIHZhciBwcm9wZXJ0eTtcblxuICAgIHZhciBkeW5hbWljT2Zmc2V0ID0gMDtcbiAgICB0aGlzLmR5bmFtaWNTdHJpZGUgPSAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZHluYW1pY1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBwcm9wZXJ0eSA9IHRoaXMuZHluYW1pY1Byb3BlcnRpZXNbaV07XG5cbiAgICAgICAgcHJvcGVydHkub2Zmc2V0ID0gZHluYW1pY09mZnNldDtcbiAgICAgICAgZHluYW1pY09mZnNldCArPSBwcm9wZXJ0eS5zaXplO1xuICAgICAgICB0aGlzLmR5bmFtaWNTdHJpZGUgKz0gcHJvcGVydHkuc2l6ZTtcbiAgICB9XG5cbiAgICB0aGlzLmR5bmFtaWNEYXRhID0gbmV3IEZsb2F0MzJBcnJheSggdGhpcy5zaXplICogdGhpcy5keW5hbWljU3RyaWRlICogNCk7XG4gICAgdGhpcy5keW5hbWljQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5keW5hbWljQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5keW5hbWljRGF0YSwgZ2wuRFlOQU1JQ19EUkFXKTtcblxuXG4gICAgLy8gc3RhdGljIC8vXG4gICAgdmFyIHN0YXRpY09mZnNldCA9IDA7XG4gICAgdGhpcy5zdGF0aWNTdHJpZGUgPSAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc3RhdGljUHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHByb3BlcnR5ID0gdGhpcy5zdGF0aWNQcm9wZXJ0aWVzW2ldO1xuXG4gICAgICAgIHByb3BlcnR5Lm9mZnNldCA9IHN0YXRpY09mZnNldDtcbiAgICAgICAgc3RhdGljT2Zmc2V0ICs9IHByb3BlcnR5LnNpemU7XG4gICAgICAgIHRoaXMuc3RhdGljU3RyaWRlICs9IHByb3BlcnR5LnNpemU7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0aWNEYXRhID0gbmV3IEZsb2F0MzJBcnJheSggdGhpcy5zaXplICogdGhpcy5zdGF0aWNTdHJpZGUgKiA0KTtcbiAgICB0aGlzLnN0YXRpY0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuc3RhdGljQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5zdGF0aWNEYXRhLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG59O1xuXG5QYXJ0aWNsZUJ1ZmZlci5wcm90b3R5cGUudXBsb2FkRHluYW1pYyA9IGZ1bmN0aW9uKGNoaWxkcmVuLCBzdGFydEluZGV4LCBhbW91bnQpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5keW5hbWljUHJvcGVydGllcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHRoaXMuZHluYW1pY1Byb3BlcnRpZXNbaV07XG4gICAgICAgIHByb3BlcnR5LnVwbG9hZEZ1bmN0aW9uKGNoaWxkcmVuLCBzdGFydEluZGV4LCBhbW91bnQsIHRoaXMuZHluYW1pY0RhdGEsIHRoaXMuZHluYW1pY1N0cmlkZSwgcHJvcGVydHkub2Zmc2V0KTtcbiAgICB9XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5keW5hbWljQnVmZmVyKTtcbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgdGhpcy5keW5hbWljRGF0YSk7XG59O1xuXG5QYXJ0aWNsZUJ1ZmZlci5wcm90b3R5cGUudXBsb2FkU3RhdGljID0gZnVuY3Rpb24oY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGFtb3VudClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRpY1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnN0YXRpY1Byb3BlcnRpZXNbaV07XG4gICAgICAgIHByb3BlcnR5LnVwbG9hZEZ1bmN0aW9uKGNoaWxkcmVuLCBzdGFydEluZGV4LCBhbW91bnQsIHRoaXMuc3RhdGljRGF0YSwgdGhpcy5zdGF0aWNTdHJpZGUsIHByb3BlcnR5Lm9mZnNldCk7XG4gICAgfVxuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuc3RhdGljQnVmZmVyKTtcbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgdGhpcy5zdGF0aWNEYXRhKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgbmV3IHNwcml0ZSBiYXRjaC5cbiAqXG4gKi9cblBhcnRpY2xlQnVmZmVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIHZhciBpLCBwcm9wZXJ0eTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmR5bmFtaWNCdWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZHluYW1pY1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBwcm9wZXJ0eSA9IHRoaXMuZHluYW1pY1Byb3BlcnRpZXNbaV07XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocHJvcGVydHkuYXR0cmlidXRlLCBwcm9wZXJ0eS5zaXplLCBnbC5GTE9BVCwgZmFsc2UsIHRoaXMuZHluYW1pY1N0cmlkZSAqIDQsIHByb3BlcnR5Lm9mZnNldCAqIDQpO1xuICAgIH1cblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnN0YXRpY0J1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5zdGF0aWNQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcHJvcGVydHkgPSB0aGlzLnN0YXRpY1Byb3BlcnRpZXNbaV07XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocHJvcGVydHkuYXR0cmlidXRlLCBwcm9wZXJ0eS5zaXplLCBnbC5GTE9BVCwgZmFsc2UsIHRoaXMuc3RhdGljU3RyaWRlICogNCwgcHJvcGVydHkub2Zmc2V0ICogNCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgU3ByaXRlQmF0Y2guXG4gKlxuICovXG5QYXJ0aWNsZUJ1ZmZlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy9UT0RPIGltcGxlbWVudCB0aGlzIDopIHRvIGJ1c3kgbWFraW5nIHRoZSBmdW4gYml0cy4uXG59O1xuIiwidmFyIE9iamVjdFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL3V0aWxzL09iamVjdFJlbmRlcmVyJyksXG4gICAgV2ViR0xSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVycy93ZWJnbC9XZWJHTFJlbmRlcmVyJyksXG4gICAgUGFydGljbGVTaGFkZXIgPSByZXF1aXJlKCcuL1BhcnRpY2xlU2hhZGVyJyksXG4gICAgUGFydGljbGVCdWZmZXIgPSByZXF1aXJlKCcuL1BhcnRpY2xlQnVmZmVyJyksXG4gICAgbWF0aCAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vbWF0aCcpO1xuXG4vKipcbiAqIEBhdXRob3IgTWF0IEdyb3Zlc1xuICpcbiAqIEJpZyB0aGFua3MgdG8gdGhlIHZlcnkgY2xldmVyIE1hdHQgRGVzTGF1cmllcnMgPG1hdHRkZXNsPiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvXG4gKiBmb3IgY3JlYXRpbmcgdGhlIG9yaWdpbmFsIHBpeGkgdmVyc2lvbiFcbiAqIEFsc28gYSB0aGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2JjaGV2YWxpZXIgZm9yIHR3ZWFraW5nIHRoZSB0aW50IGFuZCBhbHBoYSBzbyB0aGF0IHRoZXkgbm93IHNoYXJlIDQgYnl0ZXMgb24gdGhlIHZlcnRleCBidWZmZXJcbiAqXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5IExpYkdEWCdzIFBhcnRpY2xlUmVuZGVyZXI6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGliZ2R4L2xpYmdkeC9ibG9iL21hc3Rlci9nZHgvc3JjL2NvbS9iYWRsb2dpYy9nZHgvZ3JhcGhpY3MvZzJkL1BhcnRpY2xlUmVuZGVyZXIuamF2YVxuICovXG5cbi8qKlxuICpcbiAqIEBjbGFzc1xuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIHNwcml0ZSBiYXRjaCB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIFBhcnRpY2xlUmVuZGVyZXIocmVuZGVyZXIpXG57XG4gICAgT2JqZWN0UmVuZGVyZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaW1hZ2VzIGluIHRoZSBQYXJ0aWNsZSBiZWZvcmUgaXQgZmx1c2hlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNpemUgPSAxNTAwMDsvL0NPTlNULlNQUklURV9CQVRDSF9TSVpFOyAvLyAyMDAwIGlzIGEgbmljZSBiYWxhbmNlIGJldHdlZW4gbW9iaWxlIC8gZGVza3RvcFxuXG4gICAgdmFyIG51bUluZGljZXMgPSB0aGlzLnNpemUgKiA2O1xuXG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgaW5kaWNlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7VWludDE2QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KG51bUluZGljZXMpO1xuXG4gICAgZm9yICh2YXIgaT0wLCBqPTA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMF0gPSBqICsgMDtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAxXSA9IGogKyAxO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDJdID0gaiArIDI7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgM10gPSBqICsgMDtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA0XSA9IGogKyAyO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDVdID0gaiArIDM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgc2hhZGVyIHRoYXQgaXMgdXNlZCBpZiBhIHNwcml0ZSBkb2Vzbid0IGhhdmUgYSBtb3JlIHNwZWNpZmljIG9uZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1NoYWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNoYWRlciA9IG51bGw7XG5cbiAgICB0aGlzLnRlbXBNYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuXG5cblxufVxuXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlKTtcblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFydGljbGVSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGVSZW5kZXJlcjtcblxuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbigncGFydGljbGUnLCBQYXJ0aWNsZVJlbmRlcmVyKTtcblxuLyoqXG4gKiBXaGVuIHRoZXJlIGlzIGEgV2ViR0wgY29udGV4dCBjaGFuZ2VcbiAqXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUub25Db250ZXh0Q2hhbmdlID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgLy8gc2V0dXAgZGVmYXVsdCBzaGFkZXJcbiAgICB0aGlzLnNoYWRlciA9IG5ldyBQYXJ0aWNsZVNoYWRlcih0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIpO1xuXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLy8gNjU1MzUgaXMgbWF4IGluZGV4LCBzbyA2NTUzNSAvIDYgPSAxMDkyMi5cblxuICAgIC8vdXBsb2FkIHRoZSBpbmRleCBkYXRhXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cblxuICAgIHRoaXMucHJvcGVydGllcyA9IFtcbiAgICAvL3ZlcnRpY2VzRGF0YVxuICAgIHtcbiAgICAgICAgYXR0cmlidXRlOnRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLFxuICAgICAgICBkeW5hbWljOmZhbHNlLFxuICAgICAgICBzaXplOjIsXG4gICAgICAgIHVwbG9hZEZ1bmN0aW9uOnRoaXMudXBsb2FkVmVydGljZXMsXG4gICAgICAgIG9mZnNldDowXG4gICAgfSxcbiAgICAvLyBwb3NpdGlvbkRhdGFcbiAgICB7XG4gICAgICAgIGF0dHJpYnV0ZTp0aGlzLnNoYWRlci5hdHRyaWJ1dGVzLmFQb3NpdGlvbkNvb3JkLFxuICAgICAgICBkeW5hbWljOnRydWUsXG4gICAgICAgIHNpemU6MixcbiAgICAgICAgdXBsb2FkRnVuY3Rpb246dGhpcy51cGxvYWRQb3NpdGlvbixcbiAgICAgICAgb2Zmc2V0OjBcbiAgICB9LFxuICAgIC8vIHJvdGF0aW9uRGF0YVxuICAgIHtcbiAgICAgICAgYXR0cmlidXRlOnRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVJvdGF0aW9uLFxuICAgICAgICBkeW5hbWljOmZhbHNlLFxuICAgICAgICBzaXplOjEsXG4gICAgICAgIHVwbG9hZEZ1bmN0aW9uOnRoaXMudXBsb2FkUm90YXRpb24sXG4gICAgICAgIG9mZnNldDowXG4gICAgfSxcbiAgICAvL3UgdnNEYXRhXG4gICAge1xuICAgICAgICBhdHRyaWJ1dGU6dGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLFxuICAgICAgICBkeW5hbWljOmZhbHNlLFxuICAgICAgICBzaXplOjIsXG4gICAgICAgIHVwbG9hZEZ1bmN0aW9uOnRoaXMudXBsb2FkVXZzLFxuICAgICAgICBvZmZzZXQ6MFxuICAgIH0sXG4gICAgLy8gYWxwaGFEYXRhXG4gICAge1xuICAgICAgICBhdHRyaWJ1dGU6dGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hQ29sb3IsXG4gICAgICAgIGR5bmFtaWM6ZmFsc2UsXG4gICAgICAgIHNpemU6MSxcbiAgICAgICAgdXBsb2FkRnVuY3Rpb246dGhpcy51cGxvYWRBbHBoYSxcbiAgICAgICAgb2Zmc2V0OjBcbiAgICB9XTtcblxufTtcblxuLyoqXG4gKiBTdGFydHMgYSBuZXcgc3ByaXRlIGJhdGNoLlxuICpcbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAvLyBiaW5kIHRoZSBtYWluIHRleHR1cmVcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblxuICAgIC8vIGJpbmQgdGhlIGJ1ZmZlcnNcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgdmFyIHNoYWRlciA9IHRoaXMuc2hhZGVyO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlcihzaGFkZXIpO1xufTtcblxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHNwcml0ZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lciB7Q29udGFpbmVyfFNwcml0ZX0gdGhlIHNwcml0ZSB0byByZW5kZXIgdXNpbmcgdGhpcyBQYXJ0aWNsZVJlbmRlcmVyXG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICggY29udGFpbmVyIClcbntcbiAgICB2YXIgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGRyZW4sXG4gICAgICAgIHRvdGFsQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgIG1heFNpemUgPSBjb250YWluZXIuX3NpemU7XG5cbiAgICBpZih0b3RhbENoaWxkcmVuID09PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmKHRvdGFsQ2hpbGRyZW4gPiBtYXhTaXplKVxuICAgIHtcbiAgICAgICAgdG90YWxDaGlsZHJlbiA9IG1heFNpemU7XG4gICAgfVxuXG4gICAgaWYoIWNvbnRhaW5lci5fYnVmZmVycylcbiAgICB7XG4gICAgICAgIGNvbnRhaW5lci5fYnVmZmVycyA9IHRoaXMuZ2VuZXJhdGVCdWZmZXJzKCBjb250YWluZXIgKTtcbiAgICB9XG5cblxuXG4gICAgLy8gaWYgdGhlIHV2cyBoYXZlIG5vdCB1cGRhdGVkIHRoZW4gbm8gcG9pbnQgcmVuZGVyaW5nIGp1c3QgeWV0IVxuICAgIC8vdGhpcy5yZW5kZXJlci5ibGVuZE1vZGVNYW5hZ2VyLnNldEJsZW5kTW9kZShzcHJpdGUuYmxlbmRNb2RlKTtcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgdmFyIG0gPSAgY29udGFpbmVyLndvcmxkVHJhbnNmb3JtLmNvcHkoIHRoaXMudGVtcE1hdHJpeCApO1xuICAgIG0ucHJlcGVuZCggdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnByb2plY3Rpb25NYXRyaXggKTtcbiAgICBnbC51bmlmb3JtTWF0cml4M2Z2KHRoaXMuc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgbS50b0FycmF5KHRydWUpKTtcblxuICAgIC8vIGlmIHRoaXMgdmFyaWFibGUgaXMgdHJ1ZSB0aGVuIHdlIHdpbGwgdXBsb2FkIHRoZSBzdGF0aWMgY29udGVudHMgYXMgd2VsbCBhcyB0aGUgZHluYW1pYyBjb250ZW5zXG4gICAgdmFyIHVwbG9hZFN0YXRpYyA9IGNvbnRhaW5lci5fdXBkYXRlU3RhdGljO1xuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSB0ZXh0dXJlIGlzIGJvdW5kLi5cbiAgICB2YXIgYmFzZVRleHR1cmUgPSBjaGlsZHJlblswXS5fdGV4dHVyZS5iYXNlVGV4dHVyZTtcblxuICAgIGlmICghYmFzZVRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci51cGRhdGVUZXh0dXJlKGJhc2VUZXh0dXJlKTtcbiAgICAgICAgaWYoIXRoaXMucHJvcGVydGllc1swXS5keW5hbWljIHx8ICF0aGlzLnByb3BlcnRpZXNbM10uZHluYW1pYylcbiAgICAgICAge1xuICAgICAgICAgICAgdXBsb2FkU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBiYXNlVGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pO1xuICAgIH1cblxuICAgIC8vIG5vdyBsZXRzIHVwbG9hZCBhbmQgcmVuZGVyIHRoZSBidWZmZXJzLi5cbiAgICB2YXIgaiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbENoaWxkcmVuOyBpKz10aGlzLnNpemUpXG4gICAge1xuICAgICAgICAgdmFyIGFtb3VudCA9ICggdG90YWxDaGlsZHJlbiAtIGkpO1xuICAgICAgICBpZihhbW91bnQgPiB0aGlzLnNpemUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFtb3VudCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBidWZmZXIgPSBjb250YWluZXIuX2J1ZmZlcnNbaisrXTtcblxuICAgICAgICAvLyB3ZSBhbHdheXMgdXBsb2FkIHRoZSBkeW5hbWljXG4gICAgICAgIGJ1ZmZlci51cGxvYWREeW5hbWljKGNoaWxkcmVuLCBpLCBhbW91bnQpO1xuXG4gICAgICAgIC8vIHdlIG9ubHkgdXBsb2FkIHRoZSBzdGF0aWMgY29udGVudCB3aGVuIHdlIGhhdmUgdG8hXG4gICAgICAgIGlmKHVwbG9hZFN0YXRpYylcbiAgICAgICAge1xuICAgICAgICAgICAgYnVmZmVyLnVwbG9hZFN0YXRpYyhjaGlsZHJlbiwgaSwgYW1vdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJpbmQgdGhlIGJ1ZmZlclxuICAgICAgICBidWZmZXIuYmluZCggdGhpcy5zaGFkZXIgKTtcblxuICAgICAgICAgLy8gbm93IGRyYXcgdGhvc2Ugc3Vja2FzIVxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCBhbW91bnQgKiA2LCBnbC5VTlNJR05FRF9TSE9SVCwgMCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuZHJhd0NvdW50Kys7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLl91cGRhdGVTdGF0aWMgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBvbmUgcGFydGljbGUgYnVmZmVyIGZvciBlYWNoIGNoaWxkIGluIHRoZSBjb250YWluZXIgd2Ugd2FudCB0byByZW5kZXIgYW5kIHVwZGF0ZXMgaW50ZXJuYWwgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSBjb250YWluZXIge0NvbnRhaW5lcnxTcHJpdGV9IHRoZSBzcHJpdGUgdG8gcmVuZGVyIHVzaW5nIHRoaXMgUGFydGljbGVSZW5kZXJlclxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS5nZW5lcmF0ZUJ1ZmZlcnMgPSBmdW5jdGlvbiAoIGNvbnRhaW5lciApXG57XG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbCxcbiAgICAgICAgYnVmZmVycyA9IFtdLFxuICAgICAgICBzaXplID0gY29udGFpbmVyLl9zaXplLFxuICAgICAgICBpO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBwcm9wZXJ0aWVzIHRvIG1hdGNoIHRoZSBzdGF0ZSBvZiB0aGUgY29udGFpbmVyLi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29udGFpbmVyLl9wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2ldLmR5bmFtaWMgPSBjb250YWluZXIuX3Byb3BlcnRpZXNbaV07XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkgKz0gdGhpcy5zaXplKVxuICAgIHtcbiAgICAgICAgYnVmZmVycy5wdXNoKCBuZXcgUGFydGljbGVCdWZmZXIoZ2wsICB0aGlzLnByb3BlcnRpZXMsIHRoaXMuc2l6ZSwgdGhpcy5zaGFkZXIpICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcnM7XG59O1xuXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjaGlsZHJlbiB7QXJyYXl9IHRoZSBhcnJheSBvZiBkaXNwbGF5IG9iamVjdHMgdG8gcmVuZGVyXG4gKiBAcGFyYW0gc3RhcnRJbmRleCB7bnVtYmVyfSB0aGUgaW5kZXggdG8gc3RhcnQgZnJvbSBpbiB0aGUgY2hpbGRyZW4gYXJyYXlcbiAqIEBwYXJhbSBhbW91bnQge251bWJlcn0gdGhlIGFtb3VudCBvZiBjaGlsZHJlbiB0aGF0IHdpbGwgaGF2ZSB0aGVpciB2ZXJ0aWNlcyB1cGxvYWRlZFxuICogQHBhcmFtIGFycmF5IHtBcnJheX1cbiAqIEBwYXJhbSBzdHJpZGUge251bWJlcn1cbiAqIEBwYXJhbSBvZmZzZXQge251bWJlcn1cbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUudXBsb2FkVmVydGljZXMgPSBmdW5jdGlvbiAoY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGFtb3VudCwgYXJyYXksIHN0cmlkZSwgb2Zmc2V0KVxue1xuICAgIHZhciBzcHJpdGUsXG4gICAgICAgIHRleHR1cmUsXG4gICAgICAgIHRyaW0sXG4gICAgICAgIHN4LFxuICAgICAgICBzeSxcbiAgICAgICAgdzAsIHcxLCBoMCwgaDE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG5cbiAgICAgICAgc3ByaXRlID0gY2hpbGRyZW5bc3RhcnRJbmRleCArIGldO1xuICAgICAgICB0ZXh0dXJlID0gc3ByaXRlLl90ZXh0dXJlO1xuICAgICAgICBzeCA9IHNwcml0ZS5zY2FsZS54O1xuICAgICAgICBzeSA9IHNwcml0ZS5zY2FsZS55O1xuXG4gICAgICAgIGlmICh0ZXh0dXJlLnRyaW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcHJpdGUgaXMgdHJpbW1lZCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZSBleHRyYSBzcGFjZSBiZWZvcmUgdHJhbnNmb3JtaW5nIHRoZSBzcHJpdGUgY29vcmRzLi5cbiAgICAgICAgICAgIHRyaW0gPSB0ZXh0dXJlLnRyaW07XG5cbiAgICAgICAgICAgIHcxID0gdHJpbS54IC0gc3ByaXRlLmFuY2hvci54ICogdHJpbS53aWR0aDtcbiAgICAgICAgICAgIHcwID0gdzEgKyB0ZXh0dXJlLmNyb3Aud2lkdGg7XG5cbiAgICAgICAgICAgIGgxID0gdHJpbS55IC0gc3ByaXRlLmFuY2hvci55ICogdHJpbS5oZWlnaHQ7XG4gICAgICAgICAgICBoMCA9IGgxICsgdGV4dHVyZS5jcm9wLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHcwID0gKHRleHR1cmUuX2ZyYW1lLndpZHRoICkgKiAoMS1zcHJpdGUuYW5jaG9yLngpO1xuICAgICAgICAgICAgdzEgPSAodGV4dHVyZS5fZnJhbWUud2lkdGggKSAqIC1zcHJpdGUuYW5jaG9yLng7XG5cbiAgICAgICAgICAgIGgwID0gdGV4dHVyZS5fZnJhbWUuaGVpZ2h0ICogKDEtc3ByaXRlLmFuY2hvci55KTtcbiAgICAgICAgICAgIGgxID0gdGV4dHVyZS5fZnJhbWUuaGVpZ2h0ICogLXNwcml0ZS5hbmNob3IueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycmF5W29mZnNldF0gPSB3MSAqIHN4O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyAxXSA9IGgxICogc3k7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlXSA9IHcwICogc3g7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSArIDFdID0gaDEgKiBzeTtcblxuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyXSA9IHcwICogc3g7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDIgKyAxXSA9IGgwICogc3k7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogM10gPSB3MSAqIHN4O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzICsgMV0gPSBoMCAqIHN5O1xuXG4gICAgICAgIG9mZnNldCArPSBzdHJpZGUgKiA0O1xuICAgIH1cblxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIHtBcnJheX0gdGhlIGFycmF5IG9mIGRpc3BsYXkgb2JqZWN0cyB0byByZW5kZXJcbiAqIEBwYXJhbSBzdGFydEluZGV4IHtudW1iZXJ9IHRoZSBpbmRleCB0byBzdGFydCBmcm9tIGluIHRoZSBjaGlsZHJlbiBhcnJheVxuICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGNoaWxkcmVuIHRoYXQgd2lsbCBoYXZlIHRoZWlyIHBvc2l0aW9ucyB1cGxvYWRlZFxuICogQHBhcmFtIGFycmF5IHtBcnJheX1cbiAqIEBwYXJhbSBzdHJpZGUge251bWJlcn1cbiAqIEBwYXJhbSBvZmZzZXQge251bWJlcn1cbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUudXBsb2FkUG9zaXRpb24gPSBmdW5jdGlvbiAoY2hpbGRyZW4sc3RhcnRJbmRleCwgYW1vdW50LCBhcnJheSwgc3RyaWRlLCBvZmZzZXQpXG57XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBzcHJpdGVQb3NpdGlvbiA9IGNoaWxkcmVuW3N0YXJ0SW5kZXggKyBpXS5wb3NpdGlvbjtcblxuICAgICAgICBhcnJheVtvZmZzZXRdID0gc3ByaXRlUG9zaXRpb24ueDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSBzcHJpdGVQb3NpdGlvbi55O1xuXG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZV0gPSBzcHJpdGVQb3NpdGlvbi54O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKyAxXSA9IHNwcml0ZVBvc2l0aW9uLnk7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMl0gPSBzcHJpdGVQb3NpdGlvbi54O1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyICsgMV0gPSBzcHJpdGVQb3NpdGlvbi55O1xuXG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDNdID0gc3ByaXRlUG9zaXRpb24ueDtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICogMyArIDFdID0gc3ByaXRlUG9zaXRpb24ueTtcblxuICAgICAgICBvZmZzZXQgKz0gc3RyaWRlICogNDtcbiAgICB9XG5cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjaGlsZHJlbiB7QXJyYXl9IHRoZSBhcnJheSBvZiBkaXNwbGF5IG9iamVjdHMgdG8gcmVuZGVyXG4gKiBAcGFyYW0gc3RhcnRJbmRleCB7bnVtYmVyfSB0aGUgaW5kZXggdG8gc3RhcnQgZnJvbSBpbiB0aGUgY2hpbGRyZW4gYXJyYXlcbiAqIEBwYXJhbSBhbW91bnQge251bWJlcn0gdGhlIGFtb3VudCBvZiBjaGlsZHJlbiB0aGF0IHdpbGwgaGF2ZSB0aGVpciByb3RhdGlvbiB1cGxvYWRlZFxuICogQHBhcmFtIGFycmF5IHtBcnJheX1cbiAqIEBwYXJhbSBzdHJpZGUge251bWJlcn1cbiAqIEBwYXJhbSBvZmZzZXQge251bWJlcn1cbiAqL1xuUGFydGljbGVSZW5kZXJlci5wcm90b3R5cGUudXBsb2FkUm90YXRpb24gPSBmdW5jdGlvbiAoY2hpbGRyZW4sc3RhcnRJbmRleCwgYW1vdW50LCBhcnJheSwgc3RyaWRlLCBvZmZzZXQpXG57XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBzcHJpdGVSb3RhdGlvbiA9IGNoaWxkcmVuW3N0YXJ0SW5kZXggKyBpXS5yb3RhdGlvbjtcblxuXG4gICAgICAgIGFycmF5W29mZnNldF0gPSBzcHJpdGVSb3RhdGlvbjtcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlXSA9IHNwcml0ZVJvdGF0aW9uO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyXSA9IHNwcml0ZVJvdGF0aW9uO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzXSA9IHNwcml0ZVJvdGF0aW9uO1xuXG4gICAgICAgIG9mZnNldCArPSBzdHJpZGUgKiA0O1xuICAgIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjaGlsZHJlbiB7QXJyYXl9IHRoZSBhcnJheSBvZiBkaXNwbGF5IG9iamVjdHMgdG8gcmVuZGVyXG4gKiBAcGFyYW0gc3RhcnRJbmRleCB7bnVtYmVyfSB0aGUgaW5kZXggdG8gc3RhcnQgZnJvbSBpbiB0aGUgY2hpbGRyZW4gYXJyYXlcbiAqIEBwYXJhbSBhbW91bnQge251bWJlcn0gdGhlIGFtb3VudCBvZiBjaGlsZHJlbiB0aGF0IHdpbGwgaGF2ZSB0aGVpciBVdnMgdXBsb2FkZWRcbiAqIEBwYXJhbSBhcnJheSB7QXJyYXl9XG4gKiBAcGFyYW0gc3RyaWRlIHtudW1iZXJ9XG4gKiBAcGFyYW0gb2Zmc2V0IHtudW1iZXJ9XG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLnVwbG9hZFV2cyA9IGZ1bmN0aW9uIChjaGlsZHJlbixzdGFydEluZGV4LCBhbW91bnQsIGFycmF5LCBzdHJpZGUsIG9mZnNldClcbntcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIHRleHR1cmVVdnMgPSBjaGlsZHJlbltzdGFydEluZGV4ICsgaV0uX3RleHR1cmUuX3V2cztcblxuICAgICAgICBpZiAodGV4dHVyZVV2cylcbiAgICAgICAge1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IHRleHR1cmVVdnMueDA7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyAxXSA9IHRleHR1cmVVdnMueTA7XG5cbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZV0gPSB0ZXh0dXJlVXZzLngxO1xuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlICsgMV0gPSB0ZXh0dXJlVXZzLnkxO1xuXG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyXSA9IHRleHR1cmVVdnMueDI7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAyICsgMV0gPSB0ZXh0dXJlVXZzLnkyO1xuXG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzXSA9IHRleHR1cmVVdnMueDM7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKiAzICsgMV0gPSB0ZXh0dXJlVXZzLnkzO1xuXG4gICAgICAgICAgICBvZmZzZXQgKz0gc3RyaWRlICogNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vVE9ETyB5b3Uga25vdyB0aGlzIGNhbiBiZSBlYXNpZXIhXG4gICAgICAgICAgICBhcnJheVtvZmZzZXRdID0gMDtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIDFdID0gMDtcblxuICAgICAgICAgICAgYXJyYXlbb2Zmc2V0ICsgc3RyaWRlXSA9IDA7XG4gICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGUgKyAxXSA9IDA7XG5cbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDJdID0gMDtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDIgKyAxXSA9IDA7XG5cbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDNdID0gMDtcbiAgICAgICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDMgKyAxXSA9IDA7XG5cbiAgICAgICAgICAgIG9mZnNldCArPSBzdHJpZGUgKiA0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIHtBcnJheX0gdGhlIGFycmF5IG9mIGRpc3BsYXkgb2JqZWN0cyB0byByZW5kZXJcbiAqIEBwYXJhbSBzdGFydEluZGV4IHtudW1iZXJ9IHRoZSBpbmRleCB0byBzdGFydCBmcm9tIGluIHRoZSBjaGlsZHJlbiBhcnJheVxuICogQHBhcmFtIGFtb3VudCB7bnVtYmVyfSB0aGUgYW1vdW50IG9mIGNoaWxkcmVuIHRoYXQgd2lsbCBoYXZlIHRoZWlyIGFscGhhIHVwbG9hZGVkXG4gKiBAcGFyYW0gYXJyYXkge0FycmF5fVxuICogQHBhcmFtIHN0cmlkZSB7bnVtYmVyfVxuICogQHBhcmFtIG9mZnNldCB7bnVtYmVyfVxuICovXG5QYXJ0aWNsZVJlbmRlcmVyLnByb3RvdHlwZS51cGxvYWRBbHBoYSA9IGZ1bmN0aW9uIChjaGlsZHJlbixzdGFydEluZGV4LCBhbW91bnQsIGFycmF5LCBzdHJpZGUsIG9mZnNldClcbntcbiAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKylcbiAgICAge1xuICAgICAgICB2YXIgc3ByaXRlQWxwaGEgPSBjaGlsZHJlbltzdGFydEluZGV4ICsgaV0uYWxwaGE7XG5cbiAgICAgICAgYXJyYXlbb2Zmc2V0XSA9IHNwcml0ZUFscGhhO1xuICAgICAgICBhcnJheVtvZmZzZXQgKyBzdHJpZGVdID0gc3ByaXRlQWxwaGE7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDJdID0gc3ByaXRlQWxwaGE7XG4gICAgICAgIGFycmF5W29mZnNldCArIHN0cmlkZSAqIDNdID0gc3ByaXRlQWxwaGE7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHN0cmlkZSAqIDQ7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBQYXJ0aWNsZS5cbiAqXG4gKi9cblBhcnRpY2xlUmVuZGVyZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuXG4gICAgdGhpcy5zaGFkZXIuZGVzdHJveSgpO1xuXG4gICAgLy9UT0RPIGltcGxlbWVudCB0aGlzIVxufTtcbiIsInZhciBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL3NoYWRlcnMvVGV4dHVyZVNoYWRlcicpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgVGV4dHVyZVNoYWRlclxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBzaGFkZXJNYW5hZ2VyIHtTaGFkZXJNYW5hZ2VyfSBUaGUgd2ViZ2wgc2hhZGVyIG1hbmFnZXIgdGhpcyBzaGFkZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZVNoYWRlcihzaGFkZXJNYW5hZ2VyKVxue1xuICAgIFRleHR1cmVTaGFkZXIuY2FsbCh0aGlzLFxuICAgICAgICBzaGFkZXJNYW5hZ2VyLFxuICAgICAgICAvLyB2ZXJ0ZXggc2hhZGVyXG4gICAgICAgIFtcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247JyxcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkOycsXG4gICAgICAgICAgICAnYXR0cmlidXRlIGZsb2F0IGFDb2xvcjsnLFxuXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVBvc2l0aW9uQ29vcmQ7JyxcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgdmVjMiBhU2NhbGU7JyxcbiAgICAgICAgICAgICdhdHRyaWJ1dGUgZmxvYXQgYVJvdGF0aW9uOycsXG5cbiAgICAgICAgICAgICd1bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICd2YXJ5aW5nIGZsb2F0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgdmVjMiB2ID0gYVZlcnRleFBvc2l0aW9uOycsXG5cbiAgICAgICAgICAgICcgICB2LnggPSAoYVZlcnRleFBvc2l0aW9uLngpICogY29zKGFSb3RhdGlvbikgLSAoYVZlcnRleFBvc2l0aW9uLnkpICogc2luKGFSb3RhdGlvbik7JyxcbiAgICAgICAgICAgICcgICB2LnkgPSAoYVZlcnRleFBvc2l0aW9uLngpICogc2luKGFSb3RhdGlvbikgKyAoYVZlcnRleFBvc2l0aW9uLnkpICogY29zKGFSb3RhdGlvbik7JyxcbiAgICAgICAgICAgICcgICB2ID0gdiArIGFQb3NpdGlvbkNvb3JkOycsXG5cbiAgICAgICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB2ZWMzKHYsIDEuMCkpLnh5LCAwLjAsIDEuMCk7JyxcblxuICAgICAgICAgICAgJyAgIHZUZXh0dXJlQ29vcmQgPSBhVGV4dHVyZUNvb3JkOycsXG4gICAgICAgICAgICAnICAgdkNvbG9yID0gYUNvbG9yOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gaGVsbG9cbiAgICAgICAgIFtcbiAgICAgICAgICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICAgICAgICd2YXJ5aW5nIGZsb2F0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7JyxcblxuICAgICAgICAgICAgJ3ZvaWQgbWFpbih2b2lkKXsnLFxuICAgICAgICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZCkgKiB2Q29sb3IgOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gY3VzdG9tIHVuaWZvcm1zXG4gICAgICAgIG51bGwsXG4gICAgICAgIC8vIGN1c3RvbSBhdHRyaWJ1dGVzXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFQb3NpdGlvbkNvb3JkOiAwLFxuICAgICAgICAgICAvLyBhU2NhbGU6ICAgICAgICAgMCxcbiAgICAgICAgICAgIGFSb3RhdGlvbjogICAgICAwXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gVEVNUCBIQUNLXG5cbn1cblxuUGFydGljbGVTaGFkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUZXh0dXJlU2hhZGVyLnByb3RvdHlwZSk7XG5QYXJ0aWNsZVNoYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJ0aWNsZVNoYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZVNoYWRlcjtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyksXG4gICAgbWF0aCA9IHJlcXVpcmUoJy4uL21hdGgnKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogVGhlIENhbnZhc1JlbmRlcmVyIGRyYXdzIHRoZSBzY2VuZSBhbmQgYWxsIGl0cyBjb250ZW50IG9udG8gYSAyZCBjYW52YXMuIFRoaXMgcmVuZGVyZXIgc2hvdWxkIGJlIHVzZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgd2ViR0wuXG4gKiBEb24ndCBmb3JnZXQgdG8gYWRkIHRoZSBDYW52YXNSZW5kZXJlci52aWV3IHRvIHlvdXIgRE9NIG9yIHlvdSB3aWxsIG5vdCBzZWUgYW55dGhpbmcgOilcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc3lzdGVtIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBzeXN0ZW0gdGhpcyByZW5kZXJlciBpcyBmb3IuXG4gKiBAcGFyYW0gW3dpZHRoPTgwMF0ge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIFtoZWlnaHQ9NjAwXSB7bnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIFtvcHRpb25zXSB7b2JqZWN0fSBUaGUgb3B0aW9uYWwgcmVuZGVyZXIgcGFyYW1ldGVyc1xuICogQHBhcmFtIFtvcHRpb25zLnZpZXddIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGNhbnZhcyB0byB1c2UgYXMgYSB2aWV3LCBvcHRpb25hbFxuICogQHBhcmFtIFtvcHRpb25zLnRyYW5zcGFyZW50PWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIHRyYW5zcGFyZW50LCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW29wdGlvbnMuYXV0b1Jlc2l6ZT1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyBhdXRvbWF0aWNhbGx5IHJlc2l6ZWQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbb3B0aW9ucy5hbnRpYWxpYXM9ZmFsc2VdIHtib29sZWFufSBzZXRzIGFudGlhbGlhcyAob25seSBhcHBsaWNhYmxlIGluIGNocm9tZSBhdCB0aGUgbW9tZW50KVxuICogQHBhcmFtIFtvcHRpb25zLnJlc29sdXRpb249MV0ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyIHJldGluYSB3b3VsZCBiZSAyXG4gKiBAcGFyYW0gW29wdGlvbnMuY2xlYXJCZWZvcmVSZW5kZXI9dHJ1ZV0ge2Jvb2xlYW59IFRoaXMgc2V0cyBpZiB0aGUgQ2FudmFzUmVuZGVyZXIgd2lsbCBjbGVhciB0aGUgY2FudmFzIG9yXG4gKiAgICAgIG5vdCBiZWZvcmUgdGhlIG5ldyByZW5kZXIgcGFzcy5cbiAqL1xuZnVuY3Rpb24gU3lzdGVtUmVuZGVyZXIoc3lzdGVtLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKVxue1xuICAgIHV0aWxzLnNheUhlbGxvKHN5c3RlbSk7XG5cbiAgICAvLyBwcmVwYXJlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucylcbiAgICB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gQ09OU1QuREVGQVVMVF9SRU5ERVJfT1BUSU9OUylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW2ldID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zW2ldID0gQ09OU1QuREVGQVVMVF9SRU5ERVJfT1BUSU9OU1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBvcHRpb25zID0gQ09OU1QuREVGQVVMVF9SRU5ERVJfT1BUSU9OUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSRU5ERVJFUl9UWVBFfVxuICAgICAqIEBkZWZhdWx0IENPTlQuUkVOREVSRVJfVFlQRS5VTktOT1dOXG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuUkVOREVSRVJfVFlQRS5VTktOT1dOO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgdmlld1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDgwMFxuICAgICAqL1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCA4MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgdmlld1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDYwMFxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDYwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYW52YXMgZWxlbWVudCB0aGF0IGV2ZXJ5dGhpbmcgaXMgZHJhd24gdG9cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0hUTUxDYW52YXNFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMudmlldyA9IG9wdGlvbnMudmlldyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXNvbHV0aW9uIG9mIHRoZSByZW5kZXJlclxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdXRpb24gPSBvcHRpb25zLnJlc29sdXRpb247XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSByZW5kZXIgdmlldyBpcyB0cmFuc3BhcmVudFxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zcGFyZW50ID0gb3B0aW9ucy50cmFuc3BhcmVudDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJlbmRlciB2aWV3IHNob3VsZCBiZSByZXNpemVkIGF1dG9tYXRpY2FsbHlcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvUmVzaXplID0gb3B0aW9ucy5hdXRvUmVzaXplIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBibGVuZCBtb2RlcyB1c2VmdWwgZm9yIHRoaXMgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtvYmplY3Q8c3RyaW5nLCBtaXhlZD59XG4gICAgICovXG4gICAgdGhpcy5ibGVuZE1vZGVzID0gbnVsbDtcblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVE9ETzogQ29tYmluZSB0aGVzZSFcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgcHJlc2VydmVEcmF3aW5nQnVmZmVyIGZsYWcgYWZmZWN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgY29udGVudHMgb2YgdGhlIHN0ZW5jaWwgYnVmZmVyIGlzIHJldGFpbmVkIGFmdGVyIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIgPSBvcHRpb25zLnByZXNlcnZlRHJhd2luZ0J1ZmZlcjtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgc2V0cyBpZiB0aGUgQ2FudmFzUmVuZGVyZXIgd2lsbCBjbGVhciB0aGUgY2FudmFzIG9yIG5vdCBiZWZvcmUgdGhlIG5ldyByZW5kZXIgcGFzcy5cbiAgICAgKiBJZiB0aGUgc2NlbmUgaXMgTk9UIHRyYW5zcGFyZW50IFBpeGkgd2lsbCB1c2UgYSBjYW52YXMgc2l6ZWQgZmlsbFJlY3Qgb3BlcmF0aW9uIGV2ZXJ5IGZyYW1lIHRvIHNldCB0aGUgY2FudmFzIGJhY2tncm91bmQgY29sb3IuXG4gICAgICogSWYgdGhlIHNjZW5lIGlzIHRyYW5zcGFyZW50IFBpeGkgd2lsbCB1c2UgY2xlYXJSZWN0IHRvIGNsZWFyIHRoZSBjYW52YXMgZXZlcnkgZnJhbWUuXG4gICAgICogRGlzYWJsZSB0aGlzIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZS4gRm9yIGV4YW1wbGUgaWYgeW91ciBnYW1lIGhhcyBhIGNhbnZhcyBmaWxsaW5nIGJhY2tncm91bmQgaW1hZ2UgeW91IG9mdGVuIGRvbid0IG5lZWQgdGhpcyBzZXQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0XG4gICAgICovXG4gICAgdGhpcy5jbGVhckJlZm9yZVJlbmRlciA9IG9wdGlvbnMuY2xlYXJCZWZvcmVSZW5kZXI7XG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhY2tncm91bmQgY29sb3IgYXMgYSBudW1iZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSAweEZGRkZGRjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFzIGFuIFtSLCBHLCBCXSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcltdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yUmdiID0gWzEsIDEsIDFdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhY2tncm91bmQgY29sb3IgYXMgYSBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JTdHJpbmcgPSAnIzAwMDAwMCc7XG5cbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8IHRoaXMuX2JhY2tncm91bmRDb2xvcjsgLy8gcnVuIGJnIGNvbG9yIHNldHRlclxuXG4gICAgLyoqXG4gICAgICogVGhpcyB0ZW1wb3JhcnkgZGlzcGxheSBvYmplY3QgdXNlZCBhcyB0aGUgcGFyZW50IG9mIHRoZSBjdXJyZW50bHkgYmVpbmcgcmVuZGVyZWQgaXRlbVxuICAgICAqIEBtZW1iZXIge0Rpc3BsYXlPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wRGlzcGxheU9iamVjdFBhcmVudCA9IHt3b3JsZFRyYW5zZm9ybTpuZXcgbWF0aC5NYXRyaXgoKSwgd29ybGRBbHBoYToxLCBjaGlsZHJlbjpbXX07XG5cbiAgICAvL1xuICAgIHRoaXMuX2xhc3RPYmplY3RSZW5kZXJlZCA9IHRoaXMuX3RlbXBEaXNwbGF5T2JqZWN0UGFyZW50O1xufVxuXG4vLyBjb25zdHJ1Y3RvclxuU3lzdGVtUmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3lzdGVtUmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFN5c3RlbVJlbmRlcmVyO1xuXG51dGlscy5ldmVudFRhcmdldC5taXhpbihTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciB0byBmaWxsIGlmIG5vdCB0cmFuc3BhcmVudFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTeXN0ZW1SZW5kZXJlciNcbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yU3RyaW5nID0gdXRpbHMuaGV4MnN0cmluZyh2YWwpO1xuICAgICAgICAgICAgdXRpbHMuaGV4MnJnYih2YWwsIHRoaXMuX2JhY2tncm91bmRDb2xvclJnYik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBSZXNpemVzIHRoZSBjYW52YXMgdmlldyB0byB0aGUgc3BlY2lmaWVkIHdpZHRoIGFuZCBoZWlnaHRcbiAqXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIG5ldyB3aWR0aCBvZiB0aGUgY2FudmFzIHZpZXdcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gdGhlIG5ldyBoZWlnaHQgb2YgdGhlIGNhbnZhcyB2aWV3XG4gKi9cblN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHRoaXMucmVzb2x1dGlvbjtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMucmVzb2x1dGlvbjtcblxuICAgIHRoaXMudmlldy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy52aWV3LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSlcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggLyB0aGlzLnJlc29sdXRpb24gKyAncHgnO1xuICAgICAgICB0aGlzLnZpZXcuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgLyB0aGlzLnJlc29sdXRpb24gKyAncHgnO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBldmVyeXRoaW5nIGZyb20gdGhlIHJlbmRlcmVyIGFuZCBvcHRpb25hbGx5IHJlbW92ZXMgdGhlIENhbnZhcyBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gW3JlbW92ZVZpZXc9ZmFsc2VdIHtib29sZWFufSBSZW1vdmVzIHRoZSBDYW52YXMgZWxlbWVudCBmcm9tIHRoZSBET00uXG4gKi9cblN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHJlbW92ZVZpZXcpIHtcbiAgICBpZiAocmVtb3ZlVmlldyAmJiB0aGlzLnZpZXcucGFyZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnZpZXcpO1xuICAgIH1cblxuICAgIHRoaXMudHlwZSA9IENPTlNULlJFTkRFUkVSX1RZUEUuVU5LTk9XTjtcblxuICAgIHRoaXMud2lkdGggPSAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgIHRoaXMudmlldyA9IG51bGw7XG5cbiAgICB0aGlzLnJlc29sdXRpb24gPSAwO1xuXG4gICAgdGhpcy50cmFuc3BhcmVudCA9IGZhbHNlO1xuXG4gICAgdGhpcy5hdXRvUmVzaXplID0gZmFsc2U7XG5cbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFyQmVmb3JlUmVuZGVyID0gZmFsc2U7XG5cbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSAwO1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvclJnYiA9IG51bGw7XG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yU3RyaW5nID0gbnVsbDtcbn07XG4iLCJ2YXIgU3lzdGVtUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9TeXN0ZW1SZW5kZXJlcicpLFxuICAgIENhbnZhc01hc2tNYW5hZ2VyID0gcmVxdWlyZSgnLi91dGlscy9DYW52YXNNYXNrTWFuYWdlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKSxcbiAgICBtYXRoID0gcmVxdWlyZSgnLi4vLi4vbWF0aCcpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBUaGUgQ2FudmFzUmVuZGVyZXIgZHJhd3MgdGhlIHNjZW5lIGFuZCBhbGwgaXRzIGNvbnRlbnQgb250byBhIDJkIGNhbnZhcy4gVGhpcyByZW5kZXJlciBzaG91bGQgYmUgdXNlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB3ZWJHTC5cbiAqIERvbid0IGZvcmdldCB0byBhZGQgdGhlIENhbnZhc1JlbmRlcmVyLnZpZXcgdG8geW91ciBET00gb3IgeW91IHdpbGwgbm90IHNlZSBhbnl0aGluZyA6KVxuICpcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFN5c3RlbVJlbmRlcmVyXG4gKiBAcGFyYW0gW3dpZHRoPTgwMF0ge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIFtoZWlnaHQ9NjAwXSB7bnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIFtvcHRpb25zXSB7b2JqZWN0fSBUaGUgb3B0aW9uYWwgcmVuZGVyZXIgcGFyYW1ldGVyc1xuICogQHBhcmFtIFtvcHRpb25zLnZpZXddIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGNhbnZhcyB0byB1c2UgYXMgYSB2aWV3LCBvcHRpb25hbFxuICogQHBhcmFtIFtvcHRpb25zLnRyYW5zcGFyZW50PWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIHRyYW5zcGFyZW50LCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW29wdGlvbnMuYXV0b1Jlc2l6ZT1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyBhdXRvbWF0aWNhbGx5IHJlc2l6ZWQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbb3B0aW9ucy5hbnRpYWxpYXM9ZmFsc2VdIHtib29sZWFufSBzZXRzIGFudGlhbGlhcyAob25seSBhcHBsaWNhYmxlIGluIGNocm9tZSBhdCB0aGUgbW9tZW50KVxuICogQHBhcmFtIFtvcHRpb25zLnJlc29sdXRpb249MV0ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHJlbmRlcmVyIHJldGluYSB3b3VsZCBiZSAyXG4gKiBAcGFyYW0gW29wdGlvbnMuY2xlYXJCZWZvcmVSZW5kZXI9dHJ1ZV0ge2Jvb2xlYW59IFRoaXMgc2V0cyBpZiB0aGUgQ2FudmFzUmVuZGVyZXIgd2lsbCBjbGVhciB0aGUgY2FudmFzIG9yXG4gKiAgICAgIG5vdCBiZWZvcmUgdGhlIG5ldyByZW5kZXIgcGFzcy5cbiAqL1xuZnVuY3Rpb24gQ2FudmFzUmVuZGVyZXIod2lkdGgsIGhlaWdodCwgb3B0aW9ucylcbntcbiAgICBTeXN0ZW1SZW5kZXJlci5jYWxsKHRoaXMsICdDYW52YXMnLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTtcblxuICAgIHRoaXMudHlwZSA9IENPTlNULlJFTkRFUkVSX1RZUEUuQ0FOVkFTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbnZhcyAyZCBjb250ZXh0IHRoYXQgZXZlcnl0aGluZyBpcyBkcmF3biB3aXRoLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfVxuICAgICAqL1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMudmlldy5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IHRoaXMudHJhbnNwYXJlbnQgfSk7XG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGZsYWcgY29udHJvbGxpbmcgY2FudmFzIHJlZnJlc2guXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVmcmVzaCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YW5jZSBvZiBhIENhbnZhc01hc2tNYW5hZ2VyLCBoYW5kbGVzIG1hc2tpbmcgd2hlbiB1c2luZyB0aGUgY2FudmFzIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Q2FudmFzTWFza01hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5tYXNrTWFuYWdlciA9IG5ldyBDYW52YXNNYXNrTWFuYWdlcigpO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSBQaXhpIHdpbGwgTWF0aC5mbG9vcigpIHgveSB2YWx1ZXMgd2hlbiByZW5kZXJpbmcsIHN0b3BwaW5nIHBpeGVsIGludGVycG9sYXRpb24uXG4gICAgICogSGFuZHkgZm9yIGNyaXNwIHBpeGVsIGFydCBhbmQgc3BlZWQgb24gbGVnYWN5IGRldmljZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucm91bmRQaXhlbHMgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRyYWNrcyB0aGUgYWN0aXZlIHNjYWxlIG1vZGUgZm9yIHRoaXMgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTQ0FMRV9NT0RFfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudFNjYWxlTW9kZSA9IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGFjdGl2ZSBibGVuZCBtb2RlIGZvciB0aGlzIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U0NBTEVfTU9ERX1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSBDT05TVC5CTEVORF9NT0RFUy5OT1JNQUw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIHByb3BlcnR5IHVzZWQgdG8gc2V0IHRoZSBjYW52YXMgc21vb3RoaW5nIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc21vb3RoUHJvcGVydHkgPSAnaW1hZ2VTbW9vdGhpbmdFbmFibGVkJztcblxuICAgIGlmICghdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNtb290aFByb3BlcnR5ID0gJ3dlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zbW9vdGhQcm9wZXJ0eSA9ICdtb3pJbWFnZVNtb290aGluZ0VuYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udGV4dC5vSW1hZ2VTbW9vdGhpbmdFbmFibGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNtb290aFByb3BlcnR5ID0gJ29JbWFnZVNtb290aGluZ0VuYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udGV4dC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zbW9vdGhQcm9wZXJ0eSA9ICdtc0ltYWdlU21vb3RoaW5nRW5hYmxlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmluaXRQbHVnaW5zKCk7XG5cbiAgICB0aGlzLl9tYXBCbGVuZE1vZGVzKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHRlbXBvcmFyeSBkaXNwbGF5IG9iamVjdCB1c2VkIGFzIHRoZSBwYXJlbnQgb2YgdGhlIGN1cnJlbnRseSBiZWluZyByZW5kZXJlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtEaXNwbGF5T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcERpc3BsYXlPYmplY3RQYXJlbnQgPSB7XG4gICAgICAgIHdvcmxkVHJhbnNmb3JtOiBuZXcgbWF0aC5NYXRyaXgoKSxcbiAgICAgICAgd29ybGRBbHBoYTogMVxuICAgIH07XG5cblxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xufVxuXG4vLyBjb25zdHJ1Y3RvclxuQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUpO1xuQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2FudmFzUmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1JlbmRlcmVyO1xudXRpbHMucGx1Z2luVGFyZ2V0Lm1peGluKENhbnZhc1JlbmRlcmVyKTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBvYmplY3QgdG8gdGhpcyBjYW52YXMgdmlld1xuICpcbiAqIEBwYXJhbSBvYmplY3Qge0Rpc3BsYXlPYmplY3R9IHRoZSBvYmplY3QgdG8gYmUgcmVuZGVyZWRcbiAqL1xuQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChvYmplY3QpXG57XG4gICAgdmFyIGNhY2hlUGFyZW50ID0gb2JqZWN0LnBhcmVudDtcblxuICAgIHRoaXMuX2xhc3RPYmplY3RSZW5kZXJlZCA9IG9iamVjdDtcblxuICAgIG9iamVjdC5wYXJlbnQgPSB0aGlzLl90ZW1wRGlzcGxheU9iamVjdFBhcmVudDtcblxuICAgIC8vIHVwZGF0ZSB0aGUgc2NlbmUgZ3JhcGhcbiAgICBvYmplY3QudXBkYXRlVHJhbnNmb3JtKCk7XG5cbiAgICBvYmplY3QucGFyZW50ID0gY2FjaGVQYXJlbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuXG4gICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcblxuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk5PUk1BTF07XG5cbiAgICBpZiAobmF2aWdhdG9yLmlzQ29jb29uSlMgJiYgdGhpcy52aWV3LnNjcmVlbmNhbnZhcylcbiAgICB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jbGVhckJlZm9yZVJlbmRlcilcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zcGFyZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JTdHJpbmc7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCAsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyRGlzcGxheU9iamVjdChvYmplY3QsIHRoaXMuY29udGV4dCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZXZlcnl0aGluZyBmcm9tIHRoZSByZW5kZXJlciBhbmQgb3B0aW9uYWxseSByZW1vdmVzIHRoZSBDYW52YXMgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIFtyZW1vdmVWaWV3PWZhbHNlXSB7Ym9vbGVhbn0gUmVtb3ZlcyB0aGUgQ2FudmFzIGVsZW1lbnQgZnJvbSB0aGUgRE9NLlxuICovXG5DYW52YXNSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChyZW1vdmVWaWV3KVxue1xuICAgIHRoaXMuZGVzdHJveVBsdWdpbnMoKTtcblxuICAgIC8vIGNhbGwgdGhlIGJhc2UgZGVzdHJveVxuICAgIFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcywgcmVtb3ZlVmlldyk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuXG4gICAgdGhpcy5yZWZyZXNoID0gdHJ1ZTtcblxuICAgIHRoaXMubWFza01hbmFnZXIuZGVzdHJveSgpO1xuICAgIHRoaXMubWFza01hbmFnZXIgPSBudWxsO1xuXG4gICAgdGhpcy5yb3VuZFBpeGVscyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jdXJyZW50U2NhbGVNb2RlID0gMDtcbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSAwO1xuXG4gICAgdGhpcy5zbW9vdGhQcm9wZXJ0eSA9IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBkaXNwbGF5IG9iamVjdFxuICpcbiAqIEBwYXJhbSBkaXNwbGF5T2JqZWN0IHtEaXNwbGF5T2JqZWN0fSBUaGUgZGlzcGxheU9iamVjdCB0byByZW5kZXJcbiAqIEBwcml2YXRlXG4gKi9cbkNhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJEaXNwbGF5T2JqZWN0ID0gZnVuY3Rpb24gKGRpc3BsYXlPYmplY3QsIGNvbnRleHQpXG57XG4gICAgdmFyIHRlbXBDb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICBkaXNwbGF5T2JqZWN0LnJlbmRlckNhbnZhcyh0aGlzKTtcbiAgICB0aGlzLmNvbnRleHQgPSB0ZW1wQ29udGV4dDtcbn07XG5cbi8qKlxuICogTWFwcyBQaXhpIGJsZW5kIG1vZGVzIHRvIGNhbnZhcyBibGVuZCBtb2Rlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5DYW52YXNSZW5kZXJlci5wcm90b3R5cGUuX21hcEJsZW5kTW9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICghdGhpcy5ibGVuZE1vZGVzKVxuICAgIHtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmNhblVzZU5ld0NhbnZhc0JsZW5kTW9kZXMoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk5PUk1BTF0gICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5BRERdICAgICAgICAgICA9ICdsaWdodGVyJzsgLy9JUyBUSElTIE9LPz8/XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTVVMVElQTFldICAgICAgPSAnbXVsdGlwbHknO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNDUkVFTl0gICAgICAgID0gJ3NjcmVlbic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuT1ZFUkxBWV0gICAgICAgPSAnb3ZlcmxheSc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuREFSS0VOXSAgICAgICAgPSAnZGFya2VuJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5MSUdIVEVOXSAgICAgICA9ICdsaWdodGVuJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl9ET0RHRV0gICA9ICdjb2xvci1kb2RnZSc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JfQlVSTl0gICAgPSAnY29sb3ItYnVybic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuSEFSRF9MSUdIVF0gICAgPSAnaGFyZC1saWdodCc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU09GVF9MSUdIVF0gICAgPSAnc29mdC1saWdodCc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuRElGRkVSRU5DRV0gICAgPSAnZGlmZmVyZW5jZSc7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuRVhDTFVTSU9OXSAgICAgPSAnZXhjbHVzaW9uJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5IVUVdICAgICAgICAgICA9ICdodWUnO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNBVFVSQVRJT05dICAgID0gJ3NhdHVyYXRpb24nO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SXSAgICAgICAgID0gJ2NvbG9yJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5MVU1JTk9TSVRZXSAgICA9ICdsdW1pbm9zaXR5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBjb29sIG5ldyBibGVuZCBtb2RlcyBpbiBjYW52YXMgJ2NvdWdoJyBpZSAnY291Z2gnXG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMXSAgICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkFERF0gICAgICAgICAgID0gJ2xpZ2h0ZXInOyAvL0lTIFRISVMgT0s/Pz9cbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5NVUxUSVBMWV0gICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU0NSRUVOXSAgICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk9WRVJMQVldICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5EQVJLRU5dICAgICAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTElHSFRFTl0gICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SX0RPREdFXSAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl9CVVJOXSAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuSEFSRF9MSUdIVF0gICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLlNPRlRfTElHSFRdICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5ESUZGRVJFTkNFXSAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuRVhDTFVTSU9OXSAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkhVRV0gICAgICAgICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TQVRVUkFUSU9OXSAgICA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JdICAgICAgICAgPSAnc291cmNlLW92ZXInO1xuICAgICAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkxVTUlOT1NJVFldICAgID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCIvKipcbiAqIENyZWF0ZXMgYSBDYW52YXMgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gc2l6ZS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIHdpZHRoIGZvciB0aGUgbmV3bHkgY3JlYXRlZCBjYW52YXNcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gdGhlIGhlaWdodCBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgY2FudmFzXG4gKi9cbmZ1bmN0aW9uIENhbnZhc0J1ZmZlcih3aWR0aCwgaGVpZ2h0KVxue1xuICAgIC8qKlxuICAgICAqIFRoZSBDYW52YXMgb2JqZWN0IHRoYXQgYmVsb25ncyB0byB0aGlzIENhbnZhc0J1ZmZlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0hUTUxDYW52YXNFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgICAvKipcbiAgICAgKiBBIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCBvYmplY3QgcmVwcmVzZW50aW5nIGEgdHdvLWRpbWVuc2lvbmFsIHJlbmRlcmluZyBjb250ZXh0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfVxuICAgICAqL1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn1cblxuQ2FudmFzQnVmZmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENhbnZhc0J1ZmZlcjtcbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzQnVmZmVyO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDYW52YXNCdWZmZXIucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgYnVmZmVyIGluIHBpeGVscy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzQnVmZmVyI1xuICAgICAqL1xuICAgIHdpZHRoOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmFsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgYnVmZmVyIGluIHBpeGVscy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzQnVmZmVyI1xuICAgICAqL1xuICAgIGhlaWdodDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBjYW52YXMgdGhhdCB3YXMgY3JlYXRlZCBieSB0aGUgQ2FudmFzQnVmZmVyIGNsYXNzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkNhbnZhc0J1ZmZlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xufTtcblxuLyoqXG4gKiBSZXNpemVzIHRoZSBjYW52YXMgdG8gdGhlIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0LlxuICpcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSB0aGUgbmV3IHdpZHRoIG9mIHRoZSBjYW52YXNcbiAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gdGhlIG5ldyBoZWlnaHQgb2YgdGhlIGNhbnZhc1xuICovXG5DYW52YXNCdWZmZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KVxue1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIGNhbnZhcy5cbiAqXG4gKi9cbkNhbnZhc0J1ZmZlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG59O1xuIiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgdXNlZCBieSB0aGUgY2FudmFzIHJlbmRlcmVyIHRvIGRyYXcgdGhlIHByaW1pdGl2ZSBncmFwaGljcyBkYXRhLlxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBJWElcbiAqL1xudmFyIENhbnZhc0dyYXBoaWNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLypcbiAqIFJlbmRlcnMgYSBHcmFwaGljcyBvYmplY3QgdG8gYSBjYW52YXMuXG4gKlxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc30gdGhlIGFjdHVhbCBncmFwaGljcyBvYmplY3QgdG8gcmVuZGVyXG4gKiBAcGFyYW0gY29udGV4dCB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSB0aGUgMmQgZHJhd2luZyBtZXRob2Qgb2YgdGhlIGNhbnZhc1xuICovXG5DYW52YXNHcmFwaGljcy5yZW5kZXJHcmFwaGljcyA9IGZ1bmN0aW9uIChncmFwaGljcywgY29udGV4dClcbntcbiAgICB2YXIgd29ybGRBbHBoYSA9IGdyYXBoaWNzLndvcmxkQWxwaGE7XG5cbiAgICBpZiAoZ3JhcGhpY3MuZGlydHkpXG4gICAge1xuICAgICAgICB0aGlzLnVwZGF0ZUdyYXBoaWNzVGludChncmFwaGljcyk7XG4gICAgICAgIGdyYXBoaWNzLmRpcnR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncmFwaGljcy5ncmFwaGljc0RhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgZGF0YSA9IGdyYXBoaWNzLmdyYXBoaWNzRGF0YVtpXTtcbiAgICAgICAgdmFyIHNoYXBlID0gZGF0YS5zaGFwZTtcblxuICAgICAgICB2YXIgZmlsbENvbG9yID0gZGF0YS5fZmlsbFRpbnQ7XG4gICAgICAgIHZhciBsaW5lQ29sb3IgPSBkYXRhLl9saW5lVGludDtcblxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGRhdGEubGluZVdpZHRoO1xuXG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5QT0xZKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgICAgICB2YXIgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb2ludHNbMF0sIHBvaW50c1sxXSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGo9MTsgaiA8IHBvaW50cy5sZW5ndGgvMjsgaisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHBvaW50c1tqICogMl0sIHBvaW50c1tqICogMiArIDFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoYXBlLmNsb3NlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbMF0sIHBvaW50c1sxXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBhbmQgbGFzdCBwb2ludCBhcmUgdGhlIHNhbWUgY2xvc2UgdGhlIHBhdGggLSBtdWNoIG5lYXRlciA6KVxuICAgICAgICAgICAgaWYgKHBvaW50c1swXSA9PT0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMl0gJiYgcG9pbnRzWzFdID09PSBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmZpbGxBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggZmlsbENvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGluZVdpZHRoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmxpbmVBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBsaW5lQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5SRUNUKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGxDb2xvciB8fCBkYXRhLmZpbGxDb2xvciA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gZGF0YS5maWxsQWxwaGEgKiB3b3JsZEFscGhhO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGZpbGxDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHNoYXBlLngsIHNoYXBlLnksIHNoYXBlLndpZHRoLCBzaGFwZS5oZWlnaHQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lV2lkdGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEubGluZUFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGxpbmVDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3Qoc2hhcGUueCwgc2hhcGUueSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuQ0lSQylcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gVE9ETyAtIG5lZWQgdG8gYmUgVW5kZWZpbmVkIVxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKHNoYXBlLngsIHNoYXBlLnksIHNoYXBlLnJhZGl1cywwLDIqTWF0aC5QSSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmZpbGxBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggZmlsbENvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGluZVdpZHRoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmxpbmVBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBsaW5lQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5FTElQKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBlbGxpcHNlIGNvZGUgdGFrZW4gZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTcyNzk4L2hvdy10by1kcmF3LWFuLW92YWwtaW4taHRtbDUtY2FudmFzXG5cbiAgICAgICAgICAgIHZhciB3ID0gc2hhcGUud2lkdGggKiAyO1xuICAgICAgICAgICAgdmFyIGggPSBzaGFwZS5oZWlnaHQgKiAyO1xuXG4gICAgICAgICAgICB2YXIgeCA9IHNoYXBlLnggLSB3LzI7XG4gICAgICAgICAgICB2YXIgeSA9IHNoYXBlLnkgLSBoLzI7XG5cbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgICAgIHZhciBrYXBwYSA9IDAuNTUyMjg0OCxcbiAgICAgICAgICAgICAgICBveCA9ICh3IC8gMikgKiBrYXBwYSwgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIG95ID0gKGggLyAyKSAqIGthcHBhLCAvLyBjb250cm9sIHBvaW50IG9mZnNldCB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIHhlID0geCArIHcsICAgICAgICAgICAvLyB4LWVuZFxuICAgICAgICAgICAgICAgIHllID0geSArIGgsICAgICAgICAgICAvLyB5LWVuZFxuICAgICAgICAgICAgICAgIHhtID0geCArIHcgLyAyLCAgICAgICAvLyB4LW1pZGRsZVxuICAgICAgICAgICAgICAgIHltID0geSArIGggLyAyOyAgICAgICAvLyB5LW1pZGRsZVxuXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5bSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeCwgeW0gLSBveSwgeG0gLSBveCwgeSwgeG0sIHkpO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHhtICsgb3gsIHksIHhlLCB5bSAtIG95LCB4ZSwgeW0pO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHhlLCB5bSArIG95LCB4bSArIG94LCB5ZSwgeG0sIHllKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4bSAtIG94LCB5ZSwgeCwgeW0gKyBveSwgeCwgeW0pO1xuXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmZpbGxBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggZmlsbENvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGluZVdpZHRoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmxpbmVBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjJyArICgnMDAwMDAnICsgKCBsaW5lQ29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5SUkVDKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcnggPSBzaGFwZS54O1xuICAgICAgICAgICAgdmFyIHJ5ID0gc2hhcGUueTtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBzaGFwZS5yYWRpdXM7XG5cbiAgICAgICAgICAgIHZhciBtYXhSYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgfCAwO1xuICAgICAgICAgICAgcmFkaXVzID0gcmFkaXVzID4gbWF4UmFkaXVzID8gbWF4UmFkaXVzIDogcmFkaXVzO1xuXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocngsIHJ5ICsgcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4LCByeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocngsIHJ5ICsgaGVpZ2h0LCByeCArIHJhZGl1cywgcnkgKyBoZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocnggKyB3aWR0aCAtIHJhZGl1cywgcnkgKyBoZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4ICsgd2lkdGgsIHJ5ICsgaGVpZ2h0LCByeCArIHdpZHRoLCByeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCArIHdpZHRoLCByeSArIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocnggKyB3aWR0aCwgcnksIHJ4ICsgd2lkdGggLSByYWRpdXMsIHJ5KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4ICsgcmFkaXVzLCByeSk7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8ocngsIHJ5LCByeCwgcnkgKyByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZmlsbENvbG9yIHx8IGRhdGEuZmlsbENvbG9yID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBkYXRhLmZpbGxBbHBoYSAqIHdvcmxkQWxwaGE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggZmlsbENvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lV2lkdGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGRhdGEubGluZUFscGhhICogd29ybGRBbHBoYTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGxpbmVDb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLypcbiAqIFJlbmRlcnMgYSBncmFwaGljcyBtYXNrXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9IHRoZSBncmFwaGljcyB3aGljaCB3aWxsIGJlIHVzZWQgYXMgYSBtYXNrXG4gKiBAcGFyYW0gY29udGV4dCB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSB0aGUgY29udGV4dCAyZCBtZXRob2Qgb2YgdGhlIGNhbnZhc1xuICovXG5DYW52YXNHcmFwaGljcy5yZW5kZXJHcmFwaGljc01hc2sgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIGNvbnRleHQpXG57XG4gICAgdmFyIGxlbiA9IGdyYXBoaWNzLmdyYXBoaWNzRGF0YS5sZW5ndGg7XG5cbiAgICBpZiAobGVuID09PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGRhdGEgPSBncmFwaGljcy5ncmFwaGljc0RhdGFbaV07XG4gICAgICAgIHZhciBzaGFwZSA9IGRhdGEuc2hhcGU7XG5cbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gQ09OU1QuU0hBUEVTLlBPTFkpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgdmFyIHBvaW50cyA9IHNoYXBlLnBvaW50cztcblxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9pbnRzWzBdLCBwb2ludHNbMV0pO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqPTE7IGogPCBwb2ludHMubGVuZ3RoLzI7IGorKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbaiAqIDJdLCBwb2ludHNbaiAqIDIgKyAxXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCBhbmQgbGFzdCBwb2ludCBhcmUgdGhlIHNhbWUgY2xvc2UgdGhlIHBhdGggLSBtdWNoIG5lYXRlciA6KVxuICAgICAgICAgICAgaWYgKHBvaW50c1swXSA9PT0gcG9pbnRzW3BvaW50cy5sZW5ndGgtMl0gJiYgcG9pbnRzWzFdID09PSBwb2ludHNbcG9pbnRzLmxlbmd0aC0xXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuUkVDVClcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGV4dC5yZWN0KHNoYXBlLngsIHNoYXBlLnksIHNoYXBlLndpZHRoLCBzaGFwZS5oZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5DSVJDKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUT0RPIC0gbmVlZCB0byBiZSBVbmRlZmluZWQhXG4gICAgICAgICAgICBjb250ZXh0LmFyYyhzaGFwZS54LCBzaGFwZS55LCBzaGFwZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09PSBDT05TVC5TSEFQRVMuRUxJUClcbiAgICAgICAge1xuXG4gICAgICAgICAgICAvLyBlbGxpcHNlIGNvZGUgdGFrZW4gZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTcyNzk4L2hvdy10by1kcmF3LWFuLW92YWwtaW4taHRtbDUtY2FudmFzXG5cbiAgICAgICAgICAgIHZhciB3ID0gc2hhcGUud2lkdGggKiAyO1xuICAgICAgICAgICAgdmFyIGggPSBzaGFwZS5oZWlnaHQgKiAyO1xuXG4gICAgICAgICAgICB2YXIgeCA9IHNoYXBlLnggLSB3LzI7XG4gICAgICAgICAgICB2YXIgeSA9IHNoYXBlLnkgLSBoLzI7XG5cbiAgICAgICAgICAgIHZhciBrYXBwYSA9IDAuNTUyMjg0OCxcbiAgICAgICAgICAgICAgICBveCA9ICh3IC8gMikgKiBrYXBwYSwgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIG95ID0gKGggLyAyKSAqIGthcHBhLCAvLyBjb250cm9sIHBvaW50IG9mZnNldCB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIHhlID0geCArIHcsICAgICAgICAgICAvLyB4LWVuZFxuICAgICAgICAgICAgICAgIHllID0geSArIGgsICAgICAgICAgICAvLyB5LWVuZFxuICAgICAgICAgICAgICAgIHhtID0geCArIHcgLyAyLCAgICAgICAvLyB4LW1pZGRsZVxuICAgICAgICAgICAgICAgIHltID0geSArIGggLyAyOyAgICAgICAvLyB5LW1pZGRsZVxuXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5bSk7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oeCwgeW0gLSBveSwgeG0gLSBveCwgeSwgeG0sIHkpO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHhtICsgb3gsIHksIHhlLCB5bSAtIG95LCB4ZSwgeW0pO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHhlLCB5bSArIG95LCB4bSArIG94LCB5ZSwgeG0sIHllKTtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4bSAtIG94LCB5ZSwgeCwgeW0gKyBveSwgeCwgeW0pO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IENPTlNULlNIQVBFUy5SUkVDKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHZhciByeCA9IHNoYXBlLng7XG4gICAgICAgICAgICB2YXIgcnkgPSBzaGFwZS55O1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHNoYXBlLnJhZGl1cztcblxuICAgICAgICAgICAgdmFyIG1heFJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiB8IDA7XG4gICAgICAgICAgICByYWRpdXMgPSByYWRpdXMgPiBtYXhSYWRpdXMgPyBtYXhSYWRpdXMgOiByYWRpdXM7XG5cbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHJ4LCByeSArIHJhZGl1cyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCwgcnkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4LCByeSArIGhlaWdodCwgcnggKyByYWRpdXMsIHJ5ICsgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHJ4ICsgd2lkdGggLSByYWRpdXMsIHJ5ICsgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhyeCArIHdpZHRoLCByeSArIGhlaWdodCwgcnggKyB3aWR0aCwgcnkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8ocnggKyB3aWR0aCwgcnkgKyByYWRpdXMpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4ICsgd2lkdGgsIHJ5LCByeCArIHdpZHRoIC0gcmFkaXVzLCByeSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhyeCArIHJhZGl1cywgcnkpO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKHJ4LCByeSwgcngsIHJ5ICsgcmFkaXVzKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKlxuICogVXBkYXRlcyB0aGUgdGludCBvZiBhIGdyYXBoaWNzIG9iamVjdFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfSB0aGUgZ3JhcGhpY3MgdGhhdCB3aWxsIGhhdmUgaXRzIHRpbnQgdXBkYXRlZFxuICogXG4gKi9cbkNhbnZhc0dyYXBoaWNzLnVwZGF0ZUdyYXBoaWNzVGludCA9IGZ1bmN0aW9uIChncmFwaGljcylcbntcbiAgICBpZiAoZ3JhcGhpY3MudGludCA9PT0gMHhGRkZGRkYpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbnRSID0gKGdyYXBoaWNzLnRpbnQgPj4gMTYgJiAweEZGKSAvIDI1NTtcbiAgICB2YXIgdGludEcgPSAoZ3JhcGhpY3MudGludCA+PiA4ICYgMHhGRikgLyAyNTU7XG4gICAgdmFyIHRpbnRCID0gKGdyYXBoaWNzLnRpbnQgJiAweEZGKS8gMjU1O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncmFwaGljcy5ncmFwaGljc0RhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgZGF0YSA9IGdyYXBoaWNzLmdyYXBoaWNzRGF0YVtpXTtcblxuICAgICAgICB2YXIgZmlsbENvbG9yID0gZGF0YS5maWxsQ29sb3IgfCAwO1xuICAgICAgICB2YXIgbGluZUNvbG9yID0gZGF0YS5saW5lQ29sb3IgfCAwO1xuXG4gICAgICAgIC8qXG4gICAgICAgIHZhciBjb2xvclIgPSAoZmlsbENvbG9yID4+IDE2ICYgMHhGRikgLyAyNTU7XG4gICAgICAgIHZhciBjb2xvckcgPSAoZmlsbENvbG9yID4+IDggJiAweEZGKSAvIDI1NTtcbiAgICAgICAgdmFyIGNvbG9yQiA9IChmaWxsQ29sb3IgJiAweEZGKSAvIDI1NTtcblxuICAgICAgICBjb2xvclIgKj0gdGludFI7XG4gICAgICAgIGNvbG9yRyAqPSB0aW50RztcbiAgICAgICAgY29sb3JCICo9IHRpbnRCO1xuXG4gICAgICAgIGZpbGxDb2xvciA9ICgoY29sb3JSKjI1NSA8PCAxNikgKyAoY29sb3JHKjI1NSA8PCA4KSArIGNvbG9yQioyNTUpO1xuXG4gICAgICAgIGNvbG9yUiA9IChsaW5lQ29sb3IgPj4gMTYgJiAweEZGKSAvIDI1NTtcbiAgICAgICAgY29sb3JHID0gKGxpbmVDb2xvciA+PiA4ICYgMHhGRikgLyAyNTU7XG4gICAgICAgIGNvbG9yQiA9IChsaW5lQ29sb3IgJiAweEZGKSAvIDI1NTtcblxuICAgICAgICBjb2xvclIgKj0gdGludFI7XG4gICAgICAgIGNvbG9yRyAqPSB0aW50RztcbiAgICAgICAgY29sb3JCICo9IHRpbnRCO1xuXG4gICAgICAgIGxpbmVDb2xvciA9ICgoY29sb3JSKjI1NSA8PCAxNikgKyAoY29sb3JHKjI1NSA8PCA4KSArIGNvbG9yQioyNTUpO1xuICAgICAgICAqL1xuXG4gICAgICAgIC8vIHN1cGVyIGlubGluZSBjb3MgaW0gYW4gb3B0aW1pemF0aW9uIE5BWkkgOilcbiAgICAgICAgZGF0YS5fZmlsbFRpbnQgPSAoKChmaWxsQ29sb3IgPj4gMTYgJiAweEZGKSAvIDI1NSAqIHRpbnRSKjI1NSA8PCAxNikgKyAoKGZpbGxDb2xvciA+PiA4ICYgMHhGRikgLyAyNTUgKiB0aW50RyoyNTUgPDwgOCkgKyAgKGZpbGxDb2xvciAmIDB4RkYpIC8gMjU1ICogdGludEIqMjU1KTtcbiAgICAgICAgZGF0YS5fbGluZVRpbnQgPSAoKChsaW5lQ29sb3IgPj4gMTYgJiAweEZGKSAvIDI1NSAqIHRpbnRSKjI1NSA8PCAxNikgKyAoKGxpbmVDb2xvciA+PiA4ICYgMHhGRikgLyAyNTUgKiB0aW50RyoyNTUgPDwgOCkgKyAgKGxpbmVDb2xvciAmIDB4RkYpIC8gMjU1ICogdGludEIqMjU1KTtcblxuICAgIH1cbn07XG5cbiIsInZhciBDYW52YXNHcmFwaGljcyA9IHJlcXVpcmUoJy4vQ2FudmFzR3JhcGhpY3MnKTtcblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgdXNlZCB0byBoYW5kbGUgbWFza2luZy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKi9cbmZ1bmN0aW9uIENhbnZhc01hc2tNYW5hZ2VyKClcbnt9XG5cbkNhbnZhc01hc2tNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENhbnZhc01hc2tNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNNYXNrTWFuYWdlcjtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IHN0YWNrIG9mIG1hc2tzLlxuICpcbiAqIEBwYXJhbSBtYXNrRGF0YSB7b2JqZWN0fSB0aGUgbWFza0RhdGEgdGhhdCB3aWxsIGJlIHB1c2hlZFxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfENhbnZhc1JlbmRlcmVyfSBUaGUgcmVuZGVyZXIgY29udGV4dCB0byB1c2UuXG4gKi9cbkNhbnZhc01hc2tNYW5hZ2VyLnByb3RvdHlwZS5wdXNoTWFzayA9IGZ1bmN0aW9uIChtYXNrRGF0YSwgcmVuZGVyZXIpXG57XG5cbiAgICByZW5kZXJlci5jb250ZXh0LnNhdmUoKTtcblxuICAgIHZhciBjYWNoZUFscGhhID0gbWFza0RhdGEuYWxwaGE7XG4gICAgdmFyIHRyYW5zZm9ybSA9IG1hc2tEYXRhLndvcmxkVHJhbnNmb3JtO1xuICAgIHZhciByZXNvbHV0aW9uID0gcmVuZGVyZXIucmVzb2x1dGlvbjtcblxuICAgIHJlbmRlcmVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICB0cmFuc2Zvcm0uYSAqIHJlc29sdXRpb24sXG4gICAgICAgIHRyYW5zZm9ybS5iICogcmVzb2x1dGlvbixcbiAgICAgICAgdHJhbnNmb3JtLmMgKiByZXNvbHV0aW9uLFxuICAgICAgICB0cmFuc2Zvcm0uZCAqIHJlc29sdXRpb24sXG4gICAgICAgIHRyYW5zZm9ybS50eCAqIHJlc29sdXRpb24sXG4gICAgICAgIHRyYW5zZm9ybS50eSAqIHJlc29sdXRpb25cbiAgICApO1xuXG4gICAgLy9UT0RPIHN1cG9ydCBzcHJpdGUgYWxwaGEgbWFza3M/P1xuICAgIC8vbG90cyBvZiBlZmZvcnQgcmVxdWlyZWQuIElmIGRlbWFuZCBpcyBncmVhdCBlbm91Z2guLlxuICAgIGlmKCFtYXNrRGF0YS50ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgQ2FudmFzR3JhcGhpY3MucmVuZGVyR3JhcGhpY3NNYXNrKG1hc2tEYXRhLCByZW5kZXJlci5jb250ZXh0KTtcbiAgICAgICAgcmVuZGVyZXIuY29udGV4dC5jbGlwKCk7XG4gICAgfVxuXG4gICAgbWFza0RhdGEud29ybGRBbHBoYSA9IGNhY2hlQWxwaGE7XG59O1xuXG4vKipcbiAqIFJlc3RvcmVzIHRoZSBjdXJyZW50IGRyYXdpbmcgY29udGV4dCB0byB0aGUgc3RhdGUgaXQgd2FzIGJlZm9yZSB0aGUgbWFzayB3YXMgYXBwbGllZC5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ8Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlciBjb250ZXh0IHRvIHVzZS5cbiAqL1xuQ2FudmFzTWFza01hbmFnZXIucHJvdG90eXBlLnBvcE1hc2sgPSBmdW5jdGlvbiAocmVuZGVyZXIpXG57XG4gICAgcmVuZGVyZXIuY29udGV4dC5yZXN0b3JlKCk7XG59O1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBVdGlsaXR5IG1ldGhvZHMgZm9yIFNwcml0ZS9UZXh0dXJlIHRpbnRpbmcuXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG52YXIgQ2FudmFzVGludGVyID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLyoqXG4gKiBCYXNpY2FsbHkgdGhpcyBtZXRob2QganVzdCBuZWVkcyBhIHNwcml0ZSBhbmQgYSBjb2xvciBhbmQgdGludHMgdGhlIHNwcml0ZSB3aXRoIHRoZSBnaXZlbiBjb2xvci5cbiAqXG4gKiBAcGFyYW0gc3ByaXRlIHtTcHJpdGV9IHRoZSBzcHJpdGUgdG8gdGludFxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciB0byB1c2UgdG8gdGludCB0aGUgc3ByaXRlIHdpdGhcbiAqIEByZXR1cm4ge0hUTUxDYW52YXNFbGVtZW50fSBUaGUgdGludGVkIGNhbnZhc1xuICovXG5DYW52YXNUaW50ZXIuZ2V0VGludGVkVGV4dHVyZSA9IGZ1bmN0aW9uIChzcHJpdGUsIGNvbG9yKVxue1xuICAgIHZhciB0ZXh0dXJlID0gc3ByaXRlLnRleHR1cmU7XG5cbiAgICBjb2xvciA9IENhbnZhc1RpbnRlci5yb3VuZENvbG9yKGNvbG9yKTtcblxuICAgIHZhciBzdHJpbmdDb2xvciA9ICcjJyArICgnMDAwMDAnICsgKCBjb2xvciB8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KTtcblxuICAgIHRleHR1cmUudGludENhY2hlID0gdGV4dHVyZS50aW50Q2FjaGUgfHwge307XG5cbiAgICBpZiAodGV4dHVyZS50aW50Q2FjaGVbc3RyaW5nQ29sb3JdKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRleHR1cmUudGludENhY2hlW3N0cmluZ0NvbG9yXTtcbiAgICB9XG5cbiAgICAgLy8gY2xvbmUgdGV4dHVyZS4uXG4gICAgdmFyIGNhbnZhcyA9IENhbnZhc1RpbnRlci5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgICAvL0NhbnZhc1RpbnRlci50aW50V2l0aFBlclBpeGVsKHRleHR1cmUsIHN0cmluZ0NvbG9yLCBjYW52YXMpO1xuICAgIENhbnZhc1RpbnRlci50aW50TWV0aG9kKHRleHR1cmUsIGNvbG9yLCBjYW52YXMpO1xuXG4gICAgaWYgKENhbnZhc1RpbnRlci5jb252ZXJ0VGludFRvSW1hZ2UpXG4gICAge1xuICAgICAgICAvLyBpcyB0aGlzIGJldHRlcj9cbiAgICAgICAgdmFyIHRpbnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aW50SW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuXG4gICAgICAgIHRleHR1cmUudGludENhY2hlW3N0cmluZ0NvbG9yXSA9IHRpbnRJbWFnZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGV4dHVyZS50aW50Q2FjaGVbc3RyaW5nQ29sb3JdID0gY2FudmFzO1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbm90IGNvbnZlcnRpbmcgdGhlIHRleHR1cmUgdG8gYW4gaW1hZ2UgdGhlbiB3ZSBuZWVkIHRvIGxvc2UgdGhlIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzXG4gICAgICAgIENhbnZhc1RpbnRlci5jYW52YXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjYW52YXM7XG59O1xuXG4vKipcbiAqIFRpbnQgYSB0ZXh0dXJlIHVzaW5nIHRoZSAnbXVsdGlwbHknIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGV4dHVyZSB7VGV4dHVyZX0gdGhlIHRleHR1cmUgdG8gdGludFxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciB0byB1c2UgdG8gdGludCB0aGUgc3ByaXRlIHdpdGhcbiAqIEBwYXJhbSBjYW52YXMge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY3VycmVudCBjYW52YXNcbiAqL1xuQ2FudmFzVGludGVyLnRpbnRXaXRoTXVsdGlwbHkgPSBmdW5jdGlvbiAodGV4dHVyZSwgY29sb3IsIGNhbnZhcylcbntcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cbiAgICB2YXIgY3JvcCA9IHRleHR1cmUuY3JvcDtcblxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIycgKyAoJzAwMDAwJyArICggY29sb3IgfCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNik7XG5cbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNyb3Aud2lkdGgsIGNyb3AuaGVpZ2h0KTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcblxuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgY3JvcC54LFxuICAgICAgICBjcm9wLnksXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodFxuICAgICk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1hdG9wJztcblxuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgY3JvcC54LFxuICAgICAgICBjcm9wLnksXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodFxuICAgICk7XG59O1xuXG4vKipcbiAqIFRpbnQgYSB0ZXh0dXJlIHVzaW5nIHRoZSAnb3ZlcmxheScgb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB0ZXh0dXJlIHtUZXh0dXJlfSB0aGUgdGV4dHVyZSB0byB0aW50XG4gKiBAcGFyYW0gY29sb3Ige251bWJlcn0gdGhlIGNvbG9yIHRvIHVzZSB0byB0aW50IHRoZSBzcHJpdGUgd2l0aFxuICogQHBhcmFtIGNhbnZhcyB7SFRNTENhbnZhc0VsZW1lbnR9IHRoZSBjdXJyZW50IGNhbnZhc1xuICovXG5DYW52YXNUaW50ZXIudGludFdpdGhPdmVybGF5ID0gZnVuY3Rpb24gKHRleHR1cmUsIGNvbG9yLCBjYW52YXMpXG57XG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXG4gICAgdmFyIGNyb3AgPSB0ZXh0dXJlLmNyb3A7XG5cbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMnICsgKCcwMDAwMCcgKyAoIGNvbG9yIHwgMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTYpO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY3JvcC53aWR0aCwgY3JvcC5oZWlnaHQpO1xuXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tYXRvcCc7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLFxuICAgICAgICBjcm9wLngsXG4gICAgICAgIGNyb3AueSxcbiAgICAgICAgY3JvcC53aWR0aCxcbiAgICAgICAgY3JvcC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0XG4gICAgKTtcblxuICAgIC8vIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xufTtcblxuLyoqXG4gKiBUaW50IGEgdGV4dHVyZSBwaXhlbCBwZXIgcGl4ZWwuXG4gKlxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9IHRoZSB0ZXh0dXJlIHRvIHRpbnRcbiAqIEBwYXJhbSBjb2xvciB7bnVtYmVyfSB0aGUgY29sb3IgdG8gdXNlIHRvIHRpbnQgdGhlIHNwcml0ZSB3aXRoXG4gKiBAcGFyYW0gY2FudmFzIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGN1cnJlbnQgY2FudmFzXG4gKi9cbkNhbnZhc1RpbnRlci50aW50V2l0aFBlclBpeGVsID0gZnVuY3Rpb24gKHRleHR1cmUsIGNvbG9yLCBjYW52YXMpXG57XG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXG4gICAgdmFyIGNyb3AgPSB0ZXh0dXJlLmNyb3A7XG5cbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgY3JvcC54LFxuICAgICAgICBjcm9wLnksXG4gICAgICAgIGNyb3Aud2lkdGgsXG4gICAgICAgIGNyb3AuaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBjcm9wLndpZHRoLFxuICAgICAgICBjcm9wLmhlaWdodFxuICAgICk7XG5cbiAgICB2YXIgcmdiVmFsdWVzID0gdXRpbHMuaGV4MnJnYihjb2xvcik7XG4gICAgdmFyIHIgPSByZ2JWYWx1ZXNbMF0sIGcgPSByZ2JWYWx1ZXNbMV0sIGIgPSByZ2JWYWx1ZXNbMl07XG5cbiAgICB2YXIgcGl4ZWxEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY3JvcC53aWR0aCwgY3JvcC5oZWlnaHQpO1xuXG4gICAgdmFyIHBpeGVscyA9IHBpeGVsRGF0YS5kYXRhO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQpXG4gICAge1xuICAgICAgICBwaXhlbHNbaSswXSAqPSByO1xuICAgICAgICBwaXhlbHNbaSsxXSAqPSBnO1xuICAgICAgICBwaXhlbHNbaSsyXSAqPSBiO1xuICAgIH1cblxuICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKHBpeGVsRGF0YSwgMCwgMCk7XG59O1xuXG4vKipcbiAqIFJvdW5kcyB0aGUgc3BlY2lmaWVkIGNvbG9yIGFjY29yZGluZyB0byB0aGUgQ2FudmFzVGludGVyLmNhY2hlU3RlcHNQZXJDb2xvckNoYW5uZWwuXG4gKlxuICogQHBhcmFtIGNvbG9yIHtudW1iZXJ9IHRoZSBjb2xvciB0byByb3VuZCwgc2hvdWxkIGJlIGEgaGV4IGNvbG9yXG4gKi9cbkNhbnZhc1RpbnRlci5yb3VuZENvbG9yID0gZnVuY3Rpb24gKGNvbG9yKVxue1xuICAgIHZhciBzdGVwID0gQ2FudmFzVGludGVyLmNhY2hlU3RlcHNQZXJDb2xvckNoYW5uZWw7XG5cbiAgICB2YXIgcmdiVmFsdWVzID0gdXRpbHMuaGV4MnJnYihjb2xvcik7XG5cbiAgICByZ2JWYWx1ZXNbMF0gPSBNYXRoLm1pbigyNTUsIChyZ2JWYWx1ZXNbMF0gLyBzdGVwKSAqIHN0ZXApO1xuICAgIHJnYlZhbHVlc1sxXSA9IE1hdGgubWluKDI1NSwgKHJnYlZhbHVlc1sxXSAvIHN0ZXApICogc3RlcCk7XG4gICAgcmdiVmFsdWVzWzJdID0gTWF0aC5taW4oMjU1LCAocmdiVmFsdWVzWzJdIC8gc3RlcCkgKiBzdGVwKTtcblxuICAgIHJldHVybiB1dGlscy5yZ2IyaGV4KHJnYlZhbHVlcyk7XG59O1xuXG4vKipcbiAqIE51bWJlciBvZiBzdGVwcyB3aGljaCB3aWxsIGJlIHVzZWQgYXMgYSBjYXAgd2hlbiByb3VuZGluZyBjb2xvcnMuXG4gKlxuICogQG1lbWJlclxuICovXG5DYW52YXNUaW50ZXIuY2FjaGVTdGVwc1BlckNvbG9yQ2hhbm5lbCA9IDg7XG5cbi8qKlxuICogVGludCBjYWNoZSBib29sZWFuIGZsYWcuXG4gKlxuICogQG1lbWJlclxuICovXG5DYW52YXNUaW50ZXIuY29udmVydFRpbnRUb0ltYWdlID0gZmFsc2U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIENhbnZhcyBCbGVuZE1vZGVzIGFyZSBzdXBwb3J0ZWQsIGNvbnNlcXVlbnRseSB0aGUgYWJpbGl0eSB0byB0aW50IHVzaW5nIHRoZSBtdWx0aXBseSBtZXRob2QuXG4gKlxuICogQG1lbWJlclxuICovXG5DYW52YXNUaW50ZXIuY2FuVXNlTXVsdGlwbHkgPSB1dGlscy5jYW5Vc2VOZXdDYW52YXNCbGVuZE1vZGVzKCk7XG5cbi8qKlxuICogVGhlIHRpbnRpbmcgbWV0aG9kIHRoYXQgd2lsbCBiZSB1c2VkLlxuICpcbiAqL1xuQ2FudmFzVGludGVyLnRpbnRNZXRob2QgPSBDYW52YXNUaW50ZXIuY2FuVXNlTXVsdGlwbHkgPyBDYW52YXNUaW50ZXIudGludFdpdGhNdWx0aXBseSA6ICBDYW52YXNUaW50ZXIudGludFdpdGhQZXJQaXhlbDtcbiIsInZhciBTeXN0ZW1SZW5kZXJlciA9IHJlcXVpcmUoJy4uL1N5c3RlbVJlbmRlcmVyJyksXG4gICAgU2hhZGVyTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcnMvU2hhZGVyTWFuYWdlcicpLFxuICAgIE1hc2tNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2Vycy9NYXNrTWFuYWdlcicpLFxuICAgIFN0ZW5jaWxNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2Vycy9TdGVuY2lsTWFuYWdlcicpLFxuICAgIEZpbHRlck1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXJzL0ZpbHRlck1hbmFnZXInKSxcbiAgICBCbGVuZE1vZGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2Vycy9CbGVuZE1vZGVNYW5hZ2VyJyksXG4gICAgUmVuZGVyVGFyZ2V0ID0gcmVxdWlyZSgnLi91dGlscy9SZW5kZXJUYXJnZXQnKSxcbiAgICBPYmplY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4vdXRpbHMvT2JqZWN0UmVuZGVyZXInKSxcbiAgICBGWEFBRmlsdGVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL0ZYQUFGaWx0ZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi8uLi9jb25zdCcpO1xuXG4vKipcbiAqIFRoZSBXZWJHTFJlbmRlcmVyIGRyYXdzIHRoZSBzY2VuZSBhbmQgYWxsIGl0cyBjb250ZW50IG9udG8gYSB3ZWJHTCBlbmFibGVkIGNhbnZhcy4gVGhpcyByZW5kZXJlclxuICogc2hvdWxkIGJlIHVzZWQgZm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCB3ZWJHTC4gVGhpcyBSZW5kZXIgd29ya3MgYnkgYXV0b21hdGljYWxseSBtYW5hZ2luZyB3ZWJHTEJhdGNocy5cbiAqIFNvIG5vIG5lZWQgZm9yIFNwcml0ZSBCYXRjaGVzIG9yIFNwcml0ZSBDbG91ZHMuXG4gKiBEb24ndCBmb3JnZXQgdG8gYWRkIHRoZSB2aWV3IHRvIHlvdXIgRE9NIG9yIHlvdSB3aWxsIG5vdCBzZWUgYW55dGhpbmcgOilcbiAqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBTeXN0ZW1SZW5kZXJlclxuICogQHBhcmFtIFt3aWR0aD0wXSB7bnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIGNhbnZhcyB2aWV3XG4gKiBAcGFyYW0gW2hlaWdodD0wXSB7bnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgdmlld1xuICogQHBhcmFtIFtvcHRpb25zXSB7b2JqZWN0fSBUaGUgb3B0aW9uYWwgcmVuZGVyZXIgcGFyYW1ldGVyc1xuICogQHBhcmFtIFtvcHRpb25zLnZpZXddIHtIVE1MQ2FudmFzRWxlbWVudH0gdGhlIGNhbnZhcyB0byB1c2UgYXMgYSB2aWV3LCBvcHRpb25hbFxuICogQHBhcmFtIFtvcHRpb25zLnRyYW5zcGFyZW50PWZhbHNlXSB7Ym9vbGVhbn0gSWYgdGhlIHJlbmRlciB2aWV3IGlzIHRyYW5zcGFyZW50LCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0gW29wdGlvbnMuYXV0b1Jlc2l6ZT1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyBhdXRvbWF0aWNhbGx5IHJlc2l6ZWQsIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbb3B0aW9ucy5hbnRpYWxpYXM9ZmFsc2VdIHtib29sZWFufSBzZXRzIGFudGlhbGlhcy4gSWYgbm90IGF2YWlsYWJsZSBuYXRpdmVseSB0aGVuIEZYQUEgYW50aWFsaWFzaW5nIGlzIHVzZWRcbiAqIEBwYXJhbSBbb3B0aW9ucy5mb3JjZUZYQUE9ZmFsc2VdIHtib29sZWFufSBmb3JjZXMgRlhBQSBhbnRpYWxpYXNpbmcgdG8gYmUgdXNlZCBvdmVyIG5hdGl2ZS4gRlhBQSBpcyBmYXN0ZXIsIGJ1dCBtYXkgbm90IGFsd2F5cyBsb2sgYXMgZ3JlYXRcbiAqIEBwYXJhbSBbb3B0aW9ucy5yZXNvbHV0aW9uPTFdIHtudW1iZXJ9IHRoZSByZXNvbHV0aW9uIG9mIHRoZSByZW5kZXJlciByZXRpbmEgd291bGQgYmUgMlxuICogQHBhcmFtIFtvcHRpb25zLmNsZWFyQmVmb3JlUmVuZGVyPXRydWVdIHtib29sZWFufSBUaGlzIHNldHMgaWYgdGhlIENhbnZhc1JlbmRlcmVyIHdpbGwgY2xlYXIgdGhlIGNhbnZhcyBvclxuICogICAgICBub3QgYmVmb3JlIHRoZSBuZXcgcmVuZGVyIHBhc3MuXG4gKiBAcGFyYW0gW29wdGlvbnMucHJlc2VydmVEcmF3aW5nQnVmZmVyPWZhbHNlXSB7Ym9vbGVhbn0gZW5hYmxlcyBkcmF3aW5nIGJ1ZmZlciBwcmVzZXJ2YXRpb24sIGVuYWJsZSB0aGlzIGlmXG4gKiAgICAgIHlvdSBuZWVkIHRvIGNhbGwgdG9EYXRhVXJsIG9uIHRoZSB3ZWJnbCBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBXZWJHTFJlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpXG57XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBTeXN0ZW1SZW5kZXJlci5jYWxsKHRoaXMsICdXZWJHTCcsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhpcyByZW5kZXJlciBhcyBhIHN0YW5kYXJkaXNlZCBjb25zdFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqXG4gICAgICovXG4gICAgdGhpcy50eXBlID0gQ09OU1QuUkVOREVSRVJfVFlQRS5XRUJHTDtcblxuICAgIHRoaXMuaGFuZGxlQ29udGV4dExvc3QgPSB0aGlzLmhhbmRsZUNvbnRleHRMb3N0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDb250ZXh0UmVzdG9yZWQgPSB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fdXBkYXRlVGV4dHVyZUJvdW5kID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZShlLnRhcmdldCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fZGVzdHJveVRleHR1cmVCb3VuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB0aGlzLmRlc3Ryb3lUZXh0dXJlKGUudGFyZ2V0KTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0bG9zdCcsIHRoaXMuaGFuZGxlQ29udGV4dExvc3QsIGZhbHNlKTtcbiAgICB0aGlzLnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZCwgZmFsc2UpO1xuXG4gICAgLy9UT0RPIHBvc3NpYmlsaXR5IHRvIGZvcmNlIEZYQUEgYXMgaXQgbWF5IG9mZmVyIGJldHRlciBwZXJmb3JtYW5jZT9cbiAgICAvKipcbiAgICAgKiBEb2VzIGl0IHVzZSBGWEFBID9cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl91c2VGWEFBID0gISFvcHRpb25zLmZvcmNlRlhBQSAmJiBvcHRpb25zLmFudGlhbGlhcztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmeGFhIGZpbHRlclxuICAgICAqXG4gICAgICogQG1lbWJlciB7RlhBQUZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX0ZYQUFGaWx0ZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgcGFzc2VkIGluIHRvIGNyZWF0ZSBhIG5ldyB3ZWJnbCBjb250ZXh0LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udGV4dE9wdGlvbnMgPSB7XG4gICAgICAgIGFscGhhOiB0aGlzLnRyYW5zcGFyZW50LFxuICAgICAgICBhbnRpYWxpYXM6IG9wdGlvbnMuYW50aWFsaWFzLFxuICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IHRoaXMudHJhbnNwYXJlbnQgJiYgdGhpcy50cmFuc3BhcmVudCAhPT0gJ25vdE11bHRpcGxpZWQnLFxuICAgICAgICBzdGVuY2lsOiB0cnVlLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IG9wdGlvbnMucHJlc2VydmVEcmF3aW5nQnVmZmVyXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvdW50ZXIgZm9yIHRoZSBudW1iZXIgb2YgZHJhd3MgbWFkZSBlYWNoIGZyYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5kcmF3Q291bnQgPSAwO1xuXG4gICAgLyoqXG4gICAgICogRGVhbHMgd2l0aCBtYW5hZ2luZyB0aGUgc2hhZGVyIHByb2dyYW1zIGFuZCB0aGVpciBhdHRyaWJzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7U2hhZGVyTWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNoYWRlck1hbmFnZXIgPSBuZXcgU2hhZGVyTWFuYWdlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE1hbmFnZXMgdGhlIG1hc2tzIHVzaW5nIHRoZSBzdGVuY2lsIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge01hc2tNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubWFza01hbmFnZXIgPSBuZXcgTWFza01hbmFnZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBNYW5hZ2VzIHRoZSBzdGVuY2lsIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1N0ZW5jaWxNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuc3RlbmNpbE1hbmFnZXIgPSBuZXcgU3RlbmNpbE1hbmFnZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBNYW5hZ2VzIHRoZSBmaWx0ZXJzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7RmlsdGVyTWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlck1hbmFnZXIgPSBuZXcgRmlsdGVyTWFuYWdlcih0aGlzKTtcblxuXG4gICAgLyoqXG4gICAgICogTWFuYWdlcyB0aGUgYmxlbmRNb2Rlc1xuICAgICAqIEBtZW1iZXIge0JsZW5kTW9kZU1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5ibGVuZE1vZGVNYW5hZ2VyID0gbmV3IEJsZW5kTW9kZU1hbmFnZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgY3VycmVudCByZW5kZXIgdGFyZ2V0XG4gICAgICogQG1lbWJlciB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudFJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0O1xuXG4gICAgLyoqXG4gICAgICogb2JqZWN0IHJlbmRlcmVyIEBhbHZpblxuICAgICAqIEBtZW1iZXIge09iamVjdFJlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudFJlbmRlcmVyID0gbmV3IE9iamVjdFJlbmRlcmVyKHRoaXMpO1xuXG4gICAgdGhpcy5pbml0UGx1Z2lucygpO1xuXG4gICAgIC8vIGluaXRpYWxpemUgdGhlIGNvbnRleHQgc28gaXQgaXMgcmVhZHkgZm9yIHRoZSBtYW5hZ2Vycy5cbiAgICB0aGlzLl9pbml0Q29udGV4dCgpO1xuXG4gICAgLy8gbWFwIHNvbWUgd2ViR0wgYmxlbmQgbW9kZXMuLlxuICAgIHRoaXMuX21hcEJsZW5kTW9kZXMoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHJlbmRlciB0YXJnZXRzXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJUYXJnZXRTdGFjayA9IFtdO1xufVxuXG4vLyBjb25zdHJ1Y3RvclxuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN5c3RlbVJlbmRlcmVyLnByb3RvdHlwZSk7XG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFdlYkdMUmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYkdMUmVuZGVyZXI7XG51dGlscy5wbHVnaW5UYXJnZXQubWl4aW4oV2ViR0xSZW5kZXJlcik7XG5cbldlYkdMUmVuZGVyZXIuZ2xDb250ZXh0SWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIFdlYkdMIGNvbnRleHRcbiAqIEBwcml2YXRlXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLl9pbml0Q29udGV4dCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy52aWV3LmdldENvbnRleHQoJ3dlYmdsJywgdGhpcy5fY29udGV4dE9wdGlvbnMpIHx8IHRoaXMudmlldy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCB0aGlzLl9jb250ZXh0T3B0aW9ucyk7XG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgaWYgKCFnbClcbiAgICB7XG4gICAgICAgIC8vIGZhaWwsIG5vdCBhYmxlIHRvIGdldCBhIGNvbnRleHRcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB3ZWJHTC4gVHJ5IHVzaW5nIHRoZSBjYW52YXMgcmVuZGVyZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmdsQ29udGV4dElkID0gV2ViR0xSZW5kZXJlci5nbENvbnRleHRJZCsrO1xuICAgIGdsLmlkID0gdGhpcy5nbENvbnRleHRJZDtcbiAgICBnbC5yZW5kZXJlciA9IHRoaXM7XG5cbiAgICAvLyBzZXQgdXAgdGhlIGRlZmF1bHQgcGl4aSBzZXR0aW5ncy4uXG4gICAgZ2wuZGlzYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICBnbC5kaXNhYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcblxuICAgIHRoaXMucmVuZGVyVGFyZ2V0ID0gbmV3IFJlbmRlclRhcmdldCh0aGlzLmdsLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgbnVsbCwgdGhpcy5yZXNvbHV0aW9uLCB0cnVlKTtcblxuICAgIHRoaXMuZW1pdCgnY29udGV4dCcsIGdsKTtcblxuICAgIC8vIHNldHVwIHRoZSB3aWR0aC9oZWlnaHQgcHJvcGVydGllcyBhbmQgZ2wgdmlld3BvcnRcbiAgICB0aGlzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICBpZighdGhpcy5fdXNlRlhBQSlcbiAgICB7XG4gICAgICAgIHRoaXMuX3VzZUZYQUEgPSAoIHRoaXMuX2NvbnRleHRPcHRpb25zLmFudGlhbGlhcyAmJiAhIGdsLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYW50aWFsaWFzICk7XG4gICAgfVxuXG5cbiAgICBpZih0aGlzLl91c2VGWEFBKVxuICAgIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUud2FybignRlhBQSBhbnRpYWxpYXNpbmcgYmVpbmcgdXNlZCBpbnN0ZWFkIG9mIG5hdGl2ZSBhbnRpYWxpYXNpbmcnKTtcbiAgICAgICAgdGhpcy5fRlhBQUZpbHRlciA9IFtuZXcgRlhBQUZpbHRlcigpXTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIG9iamVjdCB0byBpdHMgd2ViR0wgdmlld1xuICpcbiAqIEBwYXJhbSBvYmplY3Qge0Rpc3BsYXlPYmplY3R9IHRoZSBvYmplY3QgdG8gYmUgcmVuZGVyZWRcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKG9iamVjdClcbntcbiAgICAvLyBubyBwb2ludCByZW5kZXJpbmcgaWYgb3VyIGNvbnRleHQgaGFzIGJlZW4gYmxvd24gdXAhXG4gICAgaWYgKHRoaXMuZ2wuaXNDb250ZXh0TG9zdCgpKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xhc3RPYmplY3RSZW5kZXJlZCA9IG9iamVjdDtcblxuICAgIGlmKHRoaXMuX3VzZUZYQUEpXG4gICAge1xuICAgICAgICB0aGlzLl9GWEFBRmlsdGVyWzBdLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUueCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuX0ZYQUFGaWx0ZXJbMF0udW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS55ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIG9iamVjdC5maWx0ZXJBcmVhID0gdGhpcy5yZW5kZXJUYXJnZXQuc2l6ZTtcbiAgICAgICAgb2JqZWN0LmZpbHRlcnMgPSB0aGlzLl9GWEFBRmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBjYWNoZVBhcmVudCA9IG9iamVjdC5wYXJlbnQ7XG4gICAgb2JqZWN0LnBhcmVudCA9IHRoaXMuX3RlbXBEaXNwbGF5T2JqZWN0UGFyZW50O1xuXG4gICAgLy8gdXBkYXRlIHRoZSBzY2VuZSBncmFwaFxuICAgIG9iamVjdC51cGRhdGVUcmFuc2Zvcm0oKTtcblxuICAgIG9iamVjdC5wYXJlbnQgPSBjYWNoZVBhcmVudDtcblxuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAvLyBtYWtlIHN1cmUgd2UgYXJlIGJvdW5kIHRvIHRoZSBtYWluIGZyYW1lIGJ1ZmZlclxuICAgIHRoaXMuc2V0UmVuZGVyVGFyZ2V0KHRoaXMucmVuZGVyVGFyZ2V0KTtcblxuICAgIGlmICh0aGlzLmNsZWFyQmVmb3JlUmVuZGVyKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwYXJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5jbGVhckNvbG9yKHRoaXMuX2JhY2tncm91bmRDb2xvclJnYlswXSwgdGhpcy5fYmFja2dyb3VuZENvbG9yUmdiWzFdLCB0aGlzLl9iYWNrZ3JvdW5kQ29sb3JSZ2JbMl0sIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJEaXNwbGF5T2JqZWN0KG9iamVjdCwgdGhpcy5yZW5kZXJUYXJnZXQpOy8vdGhpcy5wcm9qZWN0aW9uKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIERpc3BsYXkgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSBkaXNwbGF5T2JqZWN0IHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCB0byByZW5kZXJcbiAqIEBwYXJhbSByZW5kZXJUYXJnZXQge1JlbmRlclRhcmdldH0gVGhlIHJlbmRlciB0YXJnZXQgdG8gdXNlIHRvIHJlbmRlciB0aGlzIGRpc3BsYXkgb2JqZWN0XG4gKlxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJEaXNwbGF5T2JqZWN0ID0gZnVuY3Rpb24gKGRpc3BsYXlPYmplY3QsIHJlbmRlclRhcmdldCkvL3Byb2plY3Rpb24sIGJ1ZmZlcilcbntcbiAgICAvLyBUT0RPIGlzIHRoaXMgbmVlZGVkLi4uXG4gICAgLy90aGlzLmJsZW5kTW9kZU1hbmFnZXIuc2V0QmxlbmRNb2RlKENPTlNULkJMRU5EX01PREVTLk5PUk1BTCk7XG4gICAgdGhpcy5zZXRSZW5kZXJUYXJnZXQocmVuZGVyVGFyZ2V0KTtcblxuICAgIC8vIHN0YXJ0IHRoZSBmaWx0ZXIgbWFuYWdlclxuICAgIHRoaXMuZmlsdGVyTWFuYWdlci5zZXRGaWx0ZXJTdGFjayggcmVuZGVyVGFyZ2V0LmZpbHRlclN0YWNrICk7XG5cbiAgICAvLyByZW5kZXIgdGhlIHNjZW5lIVxuICAgIGRpc3BsYXlPYmplY3QucmVuZGVyV2ViR0wodGhpcyk7XG5cbiAgICAvLyBmaW5pc2ggdGhlIGN1cnJlbnQgcmVuZGVyZXIuLlxuICAgIHRoaXMuY3VycmVudFJlbmRlcmVyLmZsdXNoKCk7XG59O1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgcmVuZGVyZXIgdG8gdGhlIG9uZSBnaXZlbiBpbiBwYXJhbWV0ZXJcbiAqXG4gKiBAcGFyYW0gb2JqZWN0UmVuZGVyZXIge09iamVjdH0gVE9ETyBAYWx2aW5cbiAqXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLnNldE9iamVjdFJlbmRlcmVyID0gZnVuY3Rpb24gKG9iamVjdFJlbmRlcmVyKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRSZW5kZXJlciA9PT0gb2JqZWN0UmVuZGVyZXIpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UmVuZGVyZXIuc3RvcCgpO1xuICAgIHRoaXMuY3VycmVudFJlbmRlcmVyID0gb2JqZWN0UmVuZGVyZXI7XG4gICAgdGhpcy5jdXJyZW50UmVuZGVyZXIuc3RhcnQoKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCByZW5kZXIgdGFyZ2V0IHRvIHRoZSBvbmUgZ2l2ZW4gaW4gcGFyYW1ldGVyXG4gKlxuICogQHBhcmFtIHJlbmRlclRhcmdldCB7UmVuZGVyVGFyZ2V0fSB0aGUgbmV3IHJlbmRlciB0YXJnZXRcbiAqXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLnNldFJlbmRlclRhcmdldCA9IGZ1bmN0aW9uIChyZW5kZXJUYXJnZXQpXG57XG4gICAgaWYoIHRoaXMuY3VycmVudFJlbmRlclRhcmdldCA9PT0gcmVuZGVyVGFyZ2V0KVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUT0RPIC0gbWF5YmUgZG93biB0aGUgbGluZSB0aGlzIHNob3VsZCBiZSBhIHB1c2ggcG9zIHRoaW5nPyBMZWF2aW5nIGZvciBub3cgdGhvdWdoLlxuICAgIHRoaXMuY3VycmVudFJlbmRlclRhcmdldCA9IHJlbmRlclRhcmdldDtcbiAgICB0aGlzLmN1cnJlbnRSZW5kZXJUYXJnZXQuYWN0aXZhdGUoKTtcbiAgICB0aGlzLnN0ZW5jaWxNYW5hZ2VyLnNldE1hc2tTdGFjayggcmVuZGVyVGFyZ2V0LnN0ZW5jaWxNYXNrU3RhY2sgKTtcbn07XG5cblxuLyoqXG4gKiBSZXNpemVzIHRoZSB3ZWJHTCB2aWV3IHRvIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodC5cbiAqXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIG5ldyB3aWR0aCBvZiB0aGUgd2ViR0wgdmlld1xuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgbmV3IGhlaWdodCBvZiB0aGUgd2ViR0wgdmlld1xuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodClcbntcbiAgICBTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUucmVzaXplLmNhbGwodGhpcywgd2lkdGgsIGhlaWdodCk7XG5cbiAgIC8vIGNvbnNvbGUubG9nKHdpZHRoKVxuICAgIHRoaXMuZmlsdGVyTWFuYWdlci5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5yZW5kZXJUYXJnZXQucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIGlmKHRoaXMuY3VycmVudFJlbmRlclRhcmdldCA9PT0gdGhpcy5yZW5kZXJUYXJnZXQpXG4gICAge1xuICAgICAgICB0aGlzLnJlbmRlclRhcmdldC5hY3RpdmF0ZSgpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVXBkYXRlcyBhbmQvb3IgQ3JlYXRlcyBhIFdlYkdMIHRleHR1cmUgZm9yIHRoZSByZW5kZXJlcidzIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHRleHR1cmUge0Jhc2VUZXh0dXJlfFRleHR1cmV9IHRoZSB0ZXh0dXJlIHRvIHVwZGF0ZVxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS51cGRhdGVUZXh0dXJlID0gZnVuY3Rpb24gKHRleHR1cmUpXG57XG4gICAgdGV4dHVyZSA9IHRleHR1cmUuYmFzZVRleHR1cmUgfHwgdGV4dHVyZTtcblxuICAgIGlmICghdGV4dHVyZS5oYXNMb2FkZWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIGlmICghdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pXG4gICAge1xuICAgICAgICB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgdGV4dHVyZS5vbigndXBkYXRlJywgdGhpcy5fdXBkYXRlVGV4dHVyZUJvdW5kKTtcbiAgICAgICAgdGV4dHVyZS5vbignZGlzcG9zZScsIHRoaXMuX2Rlc3Ryb3lUZXh0dXJlQm91bmQpO1xuICAgIH1cblxuXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pO1xuXG4gICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCB0ZXh0dXJlLnByZW11bHRpcGxpZWRBbHBoYSk7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCB0ZXh0dXJlLnNvdXJjZSk7XG5cbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGV4dHVyZS5zY2FsZU1vZGUgPT09IENPTlNULlNDQUxFX01PREVTLkxJTkVBUiA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1QpO1xuXG5cbiAgICBpZiAodGV4dHVyZS5taXBtYXAgJiYgdGV4dHVyZS5pc1Bvd2VyT2ZUd28pXG4gICAge1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGV4dHVyZS5zY2FsZU1vZGUgPT09IENPTlNULlNDQUxFX01PREVTLkxJTkVBUiA/IGdsLkxJTkVBUl9NSVBNQVBfTElORUFSIDogZ2wuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCk7XG4gICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGV4dHVyZS5zY2FsZU1vZGUgPT09IENPTlNULlNDQUxFX01PREVTLkxJTkVBUiA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIGlmICghdGV4dHVyZS5pc1Bvd2VyT2ZUd28pXG4gICAge1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLlJFUEVBVCk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLlJFUEVBVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXTtcbn07XG5cbi8qKlxuICogRGVsZXRlcyB0aGUgdGV4dHVyZSBmcm9tIFdlYkdMXG4gKlxuICogQHBhcmFtIHRleHR1cmUge0Jhc2VUZXh0dXJlfFRleHR1cmV9IHRoZSB0ZXh0dXJlIHRvIGRlc3Ryb3lcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveVRleHR1cmUgPSBmdW5jdGlvbiAodGV4dHVyZSlcbntcbiAgICB0ZXh0dXJlID0gdGV4dHVyZS5iYXNlVGV4dHVyZSB8fCB0ZXh0dXJlO1xuXG4gICAgaWYgKCF0ZXh0dXJlLmhhc0xvYWRlZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGV4dHVyZS5fZ2xUZXh0dXJlc1t0aGlzLmdsLmlkXSlcbiAgICB7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0ZXh0dXJlLl9nbFRleHR1cmVzW3RoaXMuZ2wuaWRdKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgYSBsb3N0IHdlYmdsIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gZXZlbnQge0V2ZW50fVxuICogQHByaXZhdGVcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuaGFuZGxlQ29udGV4dExvc3QgPSBmdW5jdGlvbiAoZXZlbnQpXG57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8qKlxuICogSGFuZGxlcyBhIHJlc3RvcmVkIHdlYmdsIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gZXZlbnQge0V2ZW50fVxuICogQHByaXZhdGVcbiAqL1xuV2ViR0xSZW5kZXJlci5wcm90b3R5cGUuaGFuZGxlQ29udGV4dFJlc3RvcmVkID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLl9pbml0Q29udGV4dCgpO1xuXG4gICAgLy8gZW1wdHkgYWxsIHRoZSBvbGQgZ2wgdGV4dHVyZXMgYXMgdGhleSBhcmUgdXNlbGVzcyBub3dcbiAgICBmb3IgKHZhciBrZXkgaW4gdXRpbHMuQmFzZVRleHR1cmVDYWNoZSlcbiAgICB7XG4gICAgICAgIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVba2V5XS5fZ2xUZXh0dXJlcy5sZW5ndGggPSAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBldmVyeXRoaW5nIGZyb20gdGhlIHJlbmRlcmVyIChldmVudCBsaXN0ZW5lcnMsIHNwcml0ZWJhdGNoLCBldGMuLi4pXG4gKlxuICogQHBhcmFtIFtyZW1vdmVWaWV3PWZhbHNlXSB7Ym9vbGVhbn0gUmVtb3ZlcyB0aGUgQ2FudmFzIGVsZW1lbnQgZnJvbSB0aGUgRE9NLlxuICovXG5XZWJHTFJlbmRlcmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHJlbW92ZVZpZXcpXG57XG4gICAgdGhpcy5kZXN0cm95UGx1Z2lucygpO1xuXG4gICAgLy8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgIHRoaXMudmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRsb3N0JywgdGhpcy5oYW5kbGVDb250ZXh0TG9zdCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgdGhpcy5oYW5kbGVDb250ZXh0UmVzdG9yZWQpO1xuXG4gICAgLy8gY2FsbCBiYXNlIGRlc3Ryb3lcbiAgICBTeXN0ZW1SZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMsIHJlbW92ZVZpZXcpO1xuXG4gICAgdGhpcy51dWlkID0gMDtcblxuICAgIC8vIGRlc3Ryb3kgdGhlIG1hbmFnZXJzXG4gICAgdGhpcy5zaGFkZXJNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLm1hc2tNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnN0ZW5jaWxNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmZpbHRlck1hbmFnZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5zaGFkZXJNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLm1hc2tNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLmZpbHRlck1hbmFnZXIgPSBudWxsO1xuICAgIHRoaXMuYmxlbmRNb2RlTWFuYWdlciA9IG51bGw7XG5cbiAgICB0aGlzLmhhbmRsZUNvbnRleHRMb3N0ID0gbnVsbDtcbiAgICB0aGlzLmhhbmRsZUNvbnRleHRSZXN0b3JlZCA9IG51bGw7XG5cbiAgICB0aGlzLl9jb250ZXh0T3B0aW9ucyA9IG51bGw7XG5cbiAgICB0aGlzLmRyYXdDb3VudCA9IDA7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcbn07XG5cbi8qKlxuICogTWFwcyBQaXhpIGJsZW5kIG1vZGVzIHRvIFdlYkdMIGJsZW5kIG1vZGVzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbldlYkdMUmVuZGVyZXIucHJvdG90eXBlLl9tYXBCbGVuZE1vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgaWYgKCF0aGlzLmJsZW5kTW9kZXMpXG4gICAge1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuTk9STUFMXSAgICAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkFERF0gICAgICAgICAgID0gW2dsLlNSQ19BTFBIQSwgZ2wuRFNUX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLk1VTFRJUExZXSAgICAgID0gW2dsLkRTVF9DT0xPUiwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TQ1JFRU5dICAgICAgICA9IFtnbC5TUkNfQUxQSEEsIGdsLk9ORV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5PVkVSTEFZXSAgICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuREFSS0VOXSAgICAgICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkxJR0hURU5dICAgICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5DT0xPUl9ET0RHRV0gICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuQ09MT1JfQlVSTl0gICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkhBUkRfTElHSFRdICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5TT0ZUX0xJR0hUXSAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuRElGRkVSRU5DRV0gICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkVYQ0xVU0lPTl0gICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5IVUVdICAgICAgICAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgICAgICB0aGlzLmJsZW5kTW9kZXNbQ09OU1QuQkxFTkRfTU9ERVMuU0FUVVJBVElPTl0gICAgPSBbZ2wuT05FLCAgICAgICBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBXTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVzW0NPTlNULkJMRU5EX01PREVTLkNPTE9SXSAgICAgICAgID0gW2dsLk9ORSwgICAgICAgZ2wuT05FX01JTlVTX1NSQ19BTFBIQV07XG4gICAgICAgIHRoaXMuYmxlbmRNb2Rlc1tDT05TVC5CTEVORF9NT0RFUy5MVU1JTk9TSVRZXSAgICA9IFtnbC5PTkUsICAgICAgIGdsLk9ORV9NSU5VU19TUkNfQUxQSEFdO1xuICAgIH1cbn07XG4iLCJ2YXIgRGVmYXVsdFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcnMvVGV4dHVyZVNoYWRlcicpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGNyZWF0aW5nIGEgUElYSSBmaWx0ZXIuIEN1cnJlbnRseSBvbmx5IFdlYkdMIHN1cHBvcnRzIGZpbHRlcnMuXG4gKiBJZiB5b3Ugd2FudCB0byBtYWtlIGEgY3VzdG9tIGZpbHRlciB0aGlzIHNob3VsZCBiZSB5b3VyIGJhc2UgY2xhc3MuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHZlcnRleFNyYyB7c3RyaW5nfHN0cmluZ1tdfSBUaGUgdmVydGV4IHNoYWRlciBzb3VyY2UgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqIEBwYXJhbSBmcmFnbWVudFNyYyB7c3RyaW5nfHN0cmluZ1tdfSBUaGUgZnJhZ21lbnQgc2hhZGVyIHNvdXJjZSBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICogQHBhcmFtIHVuaWZvcm1zIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB1bmlmb3JtcyBmb3IgdGhpcyBmaWx0ZXIuXG4gKi9cbmZ1bmN0aW9uIEFic3RyYWN0RmlsdGVyKHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIHVuaWZvcm1zKVxue1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHBhc3NlcyAtIHNvbWUgZmlsdGVycyBjb250YWluIGEgZmV3IHN0ZXBzIHRoaXMgYXJyYXkgc2ltcGx5IHN0b3JlcyB0aGUgc3RlcHMgaW4gYSBsaW5pZWFyIGZhc2hpb24uXG4gICAgICogRm9yIGV4YW1wbGUgdGhlIGJsdXIgZmlsdGVyIGhhcyB0d28gcGFzc2VzIGJsdXJYIGFuZCBibHVyWS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Fic3RyYWN0RmlsdGVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhc3NlcyA9IFt0aGlzXTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHNoYWRlcnNcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2hhZGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGV4dHJhIHBhZGRpbmcgdGhhdCB0aGUgZmlsdGVyIG1pZ2h0IG5lZWRcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5wYWRkaW5nID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlmb3JtcyBhcyBhbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXMgfHwge307XG5cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2RlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZlcnRleFNyYyA9IHZlcnRleFNyYyB8fCBEZWZhdWx0U2hhZGVyLmRlZmF1bHRWZXJ0ZXhTcmM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29kZSBvZiB0aGUgZnJhbWVudCBzaGFkZXJcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZnJhZ21lbnRTcmMgPSBmcmFnbWVudFNyYyB8fCBEZWZhdWx0U2hhZGVyLmRlZmF1bHRGcmFnbWVudFNyYztcblxuICAgIC8vVE9ETyBhIHJlbWluZGVyIC0gd291bGQgYmUgY29vbCB0byBoYXZlIGxvd2VyIHJlcyBmaWx0ZXJzIGFzIHRoaXMgd291bGQgZ2l2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UuXG5cbiAgICAvL3R5cGVvZiBmcmFnbWVudFNyYyA9PT0gJ3N0cmluZycgPyBmcmFnbWVudFNyYy5zcGxpdCgnJykgOiAoZnJhZ21lbnRTcmMgfHwgW10pO1xuXG59XG5cbkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0RmlsdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdEZpbHRlcjtcblxuLypcbiAqIEdyYWJzIGEgc2hhZGVyIGZyb20gdGhlIGN1cnJlbnQgcmVuZGVyZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRvIHJldHJpZXZlIHRoZSBzaGFkZXIgZnJvbVxuICpcbiAqL1xuQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlLmdldFNoYWRlciA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICB2YXIgZ2wgPSByZW5kZXJlci5nbDtcblxuICAgIHZhciBzaGFkZXIgPSB0aGlzLnNoYWRlcnNbZ2wuaWRdO1xuXG4gICAgaWYgKCFzaGFkZXIpXG4gICAge1xuICAgICAgICBzaGFkZXIgPSBuZXcgRGVmYXVsdFNoYWRlcihyZW5kZXJlci5zaGFkZXJNYW5hZ2VyLFxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTcmMsXG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50U3JjLFxuICAgICAgICAgICAgdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2hhZGVyc1tnbC5pZF0gPSBzaGFkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlcjtcbn07XG5cbi8qXG4gKiBBcHBsaWVzIHRoZSBmaWx0ZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRvIHJldHJpZXZlIHRoZSBmaWx0ZXIgZnJvbVxuICogQHBhcmFtIGlucHV0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gb3V0cHV0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gY2xlYXIge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHdlIHdhbnQgdG8gY2xlYXIgdGhlIG91dHB1dFRhcmdldFxuICovXG5BYnN0cmFjdEZpbHRlci5wcm90b3R5cGUuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGlucHV0LCBvdXRwdXQsIGNsZWFyKVxue1xuICAgIHZhciBzaGFkZXIgPSB0aGlzLmdldFNoYWRlcihyZW5kZXJlcik7XG5cbiAgICByZW5kZXJlci5maWx0ZXJNYW5hZ2VyLmFwcGx5RmlsdGVyKHNoYWRlciwgaW5wdXQsIG91dHB1dCwgY2xlYXIpO1xufTtcblxuLyoqXG4gKiBTeW5jcyBhIHVuaWZvcm0gYmV0d2VlbiB0aGUgY2xhc3Mgb2JqZWN0IGFuZCB0aGUgc2hhZGVycy5cbiAqXG4gKi9cbkFic3RyYWN0RmlsdGVyLnByb3RvdHlwZS5zeW5jVW5pZm9ybSA9IGZ1bmN0aW9uICh1bmlmb3JtKVxue1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5zaGFkZXJzLmxlbmd0aDsgaSA8IGo7ICsraSlcbiAgICB7XG4gICAgICAgIHRoaXMuc2hhZGVyc1tpXS5zeW5jVW5pZm9ybSh1bmlmb3JtKTtcbiAgICB9XG59O1xuXG4vKlxuQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGZyYW1lQnVmZmVyKVxue1xuICAgIC8vIFRPRE8gOilcbn07XG4qL1xuIiwidmFyIEFic3RyYWN0RmlsdGVyID0gcmVxdWlyZSgnLi9BYnN0cmFjdEZpbHRlcicpO1xuXG4vKipcbiAqXG4gKiBCYXNpYyBGWEFBIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIHRoZSBjb2RlIG9uIGdlZWtzM2QuY29tIHdpdGggdGhlXG4gKiBtb2RpZmljYXRpb24gdGhhdCB0aGUgdGV4dHVyZTJETG9kIHN0dWZmIHdhcyByZW1vdmVkIHNpbmNlIGl0J3NcbiAqIHVuc3VwcG9ydGVkIGJ5IFdlYkdMLlxuICpcbiAqIC0tXG4gKiBGcm9tOlxuICogaHR0cHM6Ly9naXRodWIuY29tL21pdHN1aGlrby93ZWJnbC1tZWluY3JhZnRcbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIEFic3RyYWN0RmlsdGVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICpcbiAqL1xuZnVuY3Rpb24gRlhBQUZpbHRlcigpXG57XG4gICAgdmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuICAgIEFic3RyYWN0RmlsdGVyLmNhbGwodGhpcyxcbiAgICAgICAgLy8gdmVydGV4IHNoYWRlclxuICAgICAgICBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9GWEFBLnZlcnQnLCAndXRmOCcpLFxuICAgICAgICAvLyBmcmFnbWVudCBzaGFkZXJcbiAgICAgICAgZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvRlhBQS5mcmFnJywgJ3V0ZjgnKSxcbiAgICAgICAgLy8gdW5pZm9ybXNcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzb2x1dGlvbjogeyB0eXBlOiAndjInLCB2YWx1ZTogeyB4OiAxLCB5OiAxIH0gfVxuICAgICAgICB9XG4gICAgKTtcblxufVxuXG5GWEFBRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQWJzdHJhY3RGaWx0ZXIucHJvdG90eXBlKTtcbkZYQUFGaWx0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRlhBQUZpbHRlcjtcbm1vZHVsZS5leHBvcnRzID0gRlhBQUZpbHRlcjtcblxuRlhBQUZpbHRlci5wcm90b3R5cGUuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGlucHV0LCBvdXRwdXQpXG57XG4gICAgdmFyIGZpbHRlck1hbmFnZXIgPSByZW5kZXJlci5maWx0ZXJNYW5hZ2VyO1xuXG4gICAgdmFyIHNoYWRlciA9IHRoaXMuZ2V0U2hhZGVyKCByZW5kZXJlciApO1xuICAgICAvLyBkcmF3IHRoZSBmaWx0ZXIuLi5cbiAgICBmaWx0ZXJNYW5hZ2VyLmFwcGx5RmlsdGVyKHNoYWRlciwgaW5wdXQsIG91dHB1dCk7XG59O1xuIiwidmFyIEFic3RyYWN0RmlsdGVyID0gcmVxdWlyZSgnLi9BYnN0cmFjdEZpbHRlcicpLFxuICAgIG1hdGggPSAgcmVxdWlyZSgnLi4vLi4vLi4vbWF0aCcpLFxuICAgIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuLyoqXG4gKiBUaGUgU3ByaXRlTWFza0ZpbHRlciBjbGFzc1xuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQWJzdHJhY3RGaWx0ZXJcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc3ByaXRlIHtTcHJpdGV9IHRoZSB0YXJnZXQgc3ByaXRlXG4gKi9cbmZ1bmN0aW9uIFNwcml0ZU1hc2tGaWx0ZXIoc3ByaXRlKVxue1xuICAgIHZhciBtYXNrTWF0cml4ID0gbmV3IG1hdGguTWF0cml4KCk7XG5cbiAgICBBYnN0cmFjdEZpbHRlci5jYWxsKHRoaXMsXG4gICAgICAgIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3Nwcml0ZU1hc2tGaWx0ZXIudmVydCcsICd1dGY4JyksXG4gICAgICAgIGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3Nwcml0ZU1hc2tGaWx0ZXIuZnJhZycsICd1dGY4JyksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hc2s6ICAgICAgICAgICB7IHR5cGU6ICdzYW1wbGVyMkQnLCB2YWx1ZTogc3ByaXRlLnRleHR1cmUgfSxcbiAgICAgICAgICAgIG90aGVyTWF0cml4OiAgICB7IHR5cGU6ICdtYXQzJywgdmFsdWU6IG1hc2tNYXRyaXgudG9BcnJheSh0cnVlKSB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5tYXNrU3ByaXRlID0gc3ByaXRlO1xuICAgIHRoaXMubWFza01hdHJpeCA9IG1hc2tNYXRyaXg7XG59XG5cblNwcml0ZU1hc2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBYnN0cmFjdEZpbHRlci5wcm90b3R5cGUpO1xuU3ByaXRlTWFza0ZpbHRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpdGVNYXNrRmlsdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVNYXNrRmlsdGVyO1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGZpbHRlciA/IEBhbHZpblxuICpcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gQSByZWZlcmVuY2UgdG8gdGhlIFdlYkdMIHJlbmRlcmVyXG4gKiBAcGFyYW0gaW5wdXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBvdXRwdXQge1JlbmRlclRhcmdldH1cbiAqL1xuU3ByaXRlTWFza0ZpbHRlci5wcm90b3R5cGUuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbiAocmVuZGVyZXIsIGlucHV0LCBvdXRwdXQpXG57XG4gICAgdmFyIGZpbHRlck1hbmFnZXIgPSByZW5kZXJlci5maWx0ZXJNYW5hZ2VyO1xuXG4gICAgZmlsdGVyTWFuYWdlci5jYWxjdWxhdGVNYXBwZWRNYXRyaXgoaW5wdXQuZnJhbWUsIHRoaXMubWFza1Nwcml0ZSwgdGhpcy5tYXNrTWF0cml4KTtcblxuICAgIHRoaXMudW5pZm9ybXMub3RoZXJNYXRyaXgudmFsdWUgPSB0aGlzLm1hc2tNYXRyaXgudG9BcnJheSh0cnVlKTtcblxuICAgIHZhciBzaGFkZXIgPSB0aGlzLmdldFNoYWRlcihyZW5kZXJlcik7XG4gICAgIC8vIGRyYXcgdGhlIGZpbHRlci4uLlxuICAgIGZpbHRlck1hbmFnZXIuYXBwbHlGaWx0ZXIoc2hhZGVyLCBpbnB1dCwgb3V0cHV0KTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3ByaXRlTWFza0ZpbHRlci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dHVyZSB1c2VkIGZvciB0aGUgZGlzcGxhY2VtZW50IG1hcC4gTXVzdCBiZSBwb3dlciBvZiAyIHNpemVkIHRleHR1cmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtUZXh0dXJlfVxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGVNYXNrRmlsdGVyI1xuICAgICAqL1xuICAgIG1hcDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1zLm1hc2sudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zLm1hc2sudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2Zmc2V0IHVzZWQgdG8gbW92ZSB0aGUgZGlzcGxhY2VtZW50IG1hcC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGVNYXNrRmlsdGVyI1xuICAgICAqL1xuICAgIG9mZnNldDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybXMub2Zmc2V0LnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zLm9mZnNldC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJ2YXIgV2ViR0xNYW5hZ2VyID0gcmVxdWlyZSgnLi9XZWJHTE1hbmFnZXInKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBXZWJHbE1hbmFnZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIEJsZW5kTW9kZU1hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJsZW5kTW9kZSA9IDk5OTk5O1xufVxuXG5CbGVuZE1vZGVNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5CbGVuZE1vZGVNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJsZW5kTW9kZU1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IEJsZW5kTW9kZU1hbmFnZXI7XG5cbi8qKlxuICogU2V0cy11cCB0aGUgZ2l2ZW4gYmxlbmRNb2RlIGZyb20gV2ViR0wncyBwb2ludCBvZiB2aWV3LlxuICpcbiAqIEBwYXJhbSBibGVuZE1vZGUge251bWJlcn0gdGhlIGJsZW5kTW9kZSwgc2hvdWxkIGJlIGEgUGl4aSBjb25zdCwgc3VjaCBhcyBCbGVuZE1vZGVzLkFERFxuICovXG5CbGVuZE1vZGVNYW5hZ2VyLnByb3RvdHlwZS5zZXRCbGVuZE1vZGUgPSBmdW5jdGlvbiAoYmxlbmRNb2RlKVxue1xuICAgIGlmICh0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPT09IGJsZW5kTW9kZSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRCbGVuZE1vZGUgPSBibGVuZE1vZGU7XG5cbiAgICB2YXIgbW9kZSA9IHRoaXMucmVuZGVyZXIuYmxlbmRNb2Rlc1t0aGlzLmN1cnJlbnRCbGVuZE1vZGVdO1xuICAgIHRoaXMucmVuZGVyZXIuZ2wuYmxlbmRGdW5jKG1vZGVbMF0sIG1vZGVbMV0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4vV2ViR0xNYW5hZ2VyJyksXG4gICAgUmVuZGVyVGFyZ2V0ID0gcmVxdWlyZSgnLi4vdXRpbHMvUmVuZGVyVGFyZ2V0JyksXG4gICAgUXVhZCA9IHJlcXVpcmUoJy4uL3V0aWxzL1F1YWQnKSxcbiAgICBtYXRoID0gIHJlcXVpcmUoJy4uLy4uLy4uL21hdGgnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAZXh0ZW5kcyBXZWJHTE1hbmFnZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gKi9cbmZ1bmN0aW9uIEZpbHRlck1hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55W119XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXJTdGFjayA9IFtdO1xuXG4gICAgdGhpcy5maWx0ZXJTdGFjay5wdXNoKHtcbiAgICAgICAgcmVuZGVyVGFyZ2V0OnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQsXG4gICAgICAgIGZpbHRlcjpbXSxcbiAgICAgICAgYm91bmRzOm51bGxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMudGV4dHVyZVBvb2wgPSBbXTtcblxuICAgIC8vIGxpc3RlbiBmb3IgY29udGV4dCBhbmQgdXBkYXRlIG5lY2Vzc2FyeSBidWZmZXJzXG4gICAgLy9UT0RPIG1ha2UgdGhpcyBkeW5hbWljIVxuICAgIC8vVE9ETyB0ZXN0IHRoaXMgb3V0IGJ5IGZvcmNlcyBwb3dlciBvZiB0d28/XG4gICAgdGhpcy50ZXh0dXJlU2l6ZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSggMCwgMCwgcmVuZGVyZXIud2lkdGgsIHJlbmRlcmVyLmhlaWdodCApO1xuXG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBudWxsO1xufVxuXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEZpbHRlck1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlck1hbmFnZXI7XG5cblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGVyZSBpcyBhIFdlYkdMIGNvbnRleHQgY2hhbmdlLlxuICpcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUub25Db250ZXh0Q2hhbmdlID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLnRleHR1cmVQb29sLmxlbmd0aCA9IDA7XG5cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuICAgIHRoaXMucXVhZCA9IG5ldyBRdWFkKGdsKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfVxuICogQHBhcmFtIGJ1ZmZlciB7QXJyYXlCdWZmZXJ9XG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLnNldEZpbHRlclN0YWNrID0gZnVuY3Rpb24gKCBmaWx0ZXJTdGFjayApXG57XG4gICAgdGhpcy5maWx0ZXJTdGFjayA9IGZpbHRlclN0YWNrO1xufTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBmaWx0ZXIgYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgZmlsdGVyIHN0YWNrLlxuICpcbiAqIEBwYXJhbSBmaWx0ZXJCbG9jayB7b2JqZWN0fSB0aGUgZmlsdGVyIHRoYXQgd2lsbCBiZSBwdXNoZWQgdG8gdGhlIGN1cnJlbnQgZmlsdGVyIHN0YWNrXG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLnB1c2hGaWx0ZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBmaWx0ZXJzKVxue1xuICAgIC8vIGdldCB0aGUgYm91bmRzIG9mIHRoZSBvYmplY3QuLlxuICAgIHZhciBib3VuZHMgPSB0YXJnZXQuZmlsdGVyQXJlYSB8fCB0YXJnZXQuZ2V0Qm91bmRzKCk7XG5cbiAgICAvLyByb3VuZCBvZmYgdGhlIHJlY3RhbmdsZSB0byBnZXQgYSBuaWNlIHNtb29vb29vb3RoIGZpbHRlciA6KVxuICAgIGJvdW5kcy54ID0gYm91bmRzLnggfCAwO1xuICAgIGJvdW5kcy55ID0gYm91bmRzLnkgfCAwO1xuICAgIGJvdW5kcy53aWR0aCA9IGJvdW5kcy53aWR0aCB8IDA7XG4gICAgYm91bmRzLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgfCAwO1xuXG5cblxuXG5cbiAgICBpZih0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQudHJhbnNmb3JtKVxuICAgIHtcbiAgICAgICAgLy9UT0RPIHRoaXMgd2lsbCBicmVhayBpZiB0aGUgcmVuZGVyVGV4dHVyZSB0cmFuc2Zvcm0gaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBhIHRyYW5zbGF0aW9uLlxuICAgICAgICAvL1dpbGwgbmVlZCB0byB0YWtlIHRoZSBmdWxsIG1hdHJpeCB0cmFuc2Zvcm0gaW50byBhY291bnQuLlxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5yZW5kZXJlci5jdXJyZW50UmVuZGVyVGFyZ2V0LnRyYW5zZm9ybTtcblxuICAgICAgICBib3VuZHMueCArPSB0cmFuc2Zvcm0udHg7XG4gICAgICAgIGJvdW5kcy55ICs9IHRyYW5zZm9ybS50eTtcblxuICAgICAgICB0aGlzLmNhcEZpbHRlckFyZWEoIGJvdW5kcyApO1xuXG4gICAgICAgIGJvdW5kcy54IC09IHRyYW5zZm9ybS50eDtcbiAgICAgICAgYm91bmRzLnkgLT0gdHJhbnNmb3JtLnR5O1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAgdGhpcy5jYXBGaWx0ZXJBcmVhKCBib3VuZHMgKTtcbiAgICB9XG5cblxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gYm91bmRzO1xuXG4gICAgdmFyIHRleHR1cmUgPSB0aGlzLmdldFJlbmRlclRhcmdldCgpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQodGV4dHVyZSk7XG5cbiAgICAvLyBjbGVhciB0aGUgdGV4dHVyZS4uXG4gICAgdGV4dHVyZS5jbGVhcigpO1xuXG4gICAgLy8gVE9ETyBnZXQgcmlkIG9mIG9iamVjdCBjcmVhdGlvbiFcbiAgICB0aGlzLmZpbHRlclN0YWNrLnB1c2goe1xuICAgICAgICByZW5kZXJUYXJnZXQ6IHRleHR1cmUsXG4gICAgICAgIGZpbHRlcjogZmlsdGVyc1xuICAgIH0pO1xuXG59O1xuXG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUucG9wRmlsdGVyID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyU3RhY2sucG9wKCk7XG4gICAgdmFyIHByZXZpb3VzRmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyU3RhY2tbdGhpcy5maWx0ZXJTdGFjay5sZW5ndGgtMV07XG5cbiAgICB2YXIgaW5wdXQgPSBmaWx0ZXJEYXRhLnJlbmRlclRhcmdldDtcblxuICAgIHZhciBvdXRwdXQgPSBwcmV2aW91c0ZpbHRlckRhdGEucmVuZGVyVGFyZ2V0O1xuXG4gICAgLy8gdXNlIHByb2dyYW1cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG5cbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGlucHV0LmZyYW1lO1xuXG4gICAgdGhpcy5xdWFkLm1hcCh0aGlzLnRleHR1cmVTaXplLCBpbnB1dC5mcmFtZSk7XG5cbiAgICAvLyBUT0RPLi4gdGhpcyBwcm9iYWJseSBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgb25jZSFcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5xdWFkLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5xdWFkLmluZGV4QnVmZmVyKTtcblxuICAgIHZhciBmaWx0ZXJzID0gZmlsdGVyRGF0YS5maWx0ZXI7XG5cbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDEpXG4gICAge1xuICAgICAgICAvLyBUT0RPIChjZW5nbGVyKSAtIFRoZXJlIGhhcyB0byBiZSBhIGJldHRlciB3YXkgdGhlbiBzZXR0aW5nIHRoaXMgZWFjaCB0aW1lP1xuICAgICAgICBpZiAoZmlsdGVyc1swXS51bmlmb3Jtcy5kaW1lbnNpb25zKVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMF0gPSB0aGlzLnJlbmRlcmVyLndpZHRoO1xuICAgICAgICAgICAgZmlsdGVyc1swXS51bmlmb3Jtcy5kaW1lbnNpb25zLnZhbHVlWzFdID0gdGhpcy5yZW5kZXJlci5oZWlnaHQ7XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMl0gPSB0aGlzLnF1YWQudmVydGljZXNbMF07XG4gICAgICAgICAgICBmaWx0ZXJzWzBdLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbM10gPSB0aGlzLnF1YWQudmVydGljZXNbNV07XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJzWzBdLmFwcGx5RmlsdGVyKCB0aGlzLnJlbmRlcmVyLCBpbnB1dCwgb3V0cHV0ICk7XG4gICAgICAgIHRoaXMucmV0dXJuUmVuZGVyVGFyZ2V0KCBpbnB1dCApO1xuXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHZhciBmbGlwVGV4dHVyZSA9IGlucHV0O1xuICAgICAgICB2YXIgZmxvcFRleHR1cmUgPSB0aGlzLmdldFJlbmRlclRhcmdldCh0cnVlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoLTE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IGZpbHRlcnNbaV07XG5cbiAgICAgICAgICAgIC8vIFRPRE8gKGNlbmdsZXIpIC0gVGhlcmUgaGFzIHRvIGJlIGEgYmV0dGVyIHdheSB0aGVuIHNldHRpbmcgdGhpcyBlYWNoIHRpbWU/XG4gICAgICAgICAgICBpZiAoZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMF0gPSB0aGlzLnJlbmRlcmVyLndpZHRoO1xuICAgICAgICAgICAgICAgIGZpbHRlci51bmlmb3Jtcy5kaW1lbnNpb25zLnZhbHVlWzFdID0gdGhpcy5yZW5kZXJlci5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbMl0gPSB0aGlzLnF1YWQudmVydGljZXNbMF07XG4gICAgICAgICAgICAgICAgZmlsdGVyLnVuaWZvcm1zLmRpbWVuc2lvbnMudmFsdWVbM10gPSB0aGlzLnF1YWQudmVydGljZXNbNV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlci5hcHBseUZpbHRlciggdGhpcy5yZW5kZXJlciwgZmxpcFRleHR1cmUsIGZsb3BUZXh0dXJlICk7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wID0gZmxpcFRleHR1cmU7XG4gICAgICAgICAgICBmbGlwVGV4dHVyZSA9IGZsb3BUZXh0dXJlO1xuICAgICAgICAgICAgZmxvcFRleHR1cmUgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyc1tmaWx0ZXJzLmxlbmd0aC0xXS5hcHBseUZpbHRlciggdGhpcy5yZW5kZXJlciwgZmxpcFRleHR1cmUsIG91dHB1dCApO1xuXG4gICAgICAgIHRoaXMucmV0dXJuUmVuZGVyVGFyZ2V0KCBmbGlwVGV4dHVyZSApO1xuICAgICAgICB0aGlzLnJldHVyblJlbmRlclRhcmdldCggZmxvcFRleHR1cmUgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyRGF0YS5maWx0ZXI7XG59O1xuXG4vKipcbiAqIEdyYWJzIGFuIHJlbmRlciB0YXJnZXQgZnJvbSB0aGUgaW50ZXJuYWwgcG9vbFxuICpcbiAqIEBwYXJhbSBjbGVhciB7Ym9vbGVhbn0gV2hldGhlciBvciBub3Qgd2UgbmVlZCB0byBjbGVhciB0aGUgUmVuZGVyVGFyZ2V0XG4gKiBAcmV0dXJuIHtSZW5kZXJUYXJnZXR9XG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmdldFJlbmRlclRhcmdldCA9IGZ1bmN0aW9uICggY2xlYXIgKVxue1xuICAgIHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnRleHR1cmVQb29sLnBvcCgpIHx8IG5ldyBSZW5kZXJUYXJnZXQodGhpcy5yZW5kZXJlci5nbCwgdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCwgdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQsIG51bGwsIHRoaXMucmVuZGVyZXIucmVzb2x1dGlvbik7XG4gICAgcmVuZGVyVGFyZ2V0LmZyYW1lID0gdGhpcy5jdXJyZW50RnJhbWU7XG5cbiAgICBpZiAoY2xlYXIpXG4gICAge1xuICAgICAgICByZW5kZXJUYXJnZXQuY2xlYXIodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlclRhcmdldDtcbn07XG5cbi8qXG4gKiBSZXR1cm5zIGEgUmVuZGVyVGFyZ2V0IHRvIHRoZSBpbnRlcm5hbCBwb29sXG4gKiBAcGFyYW0gcmVuZGVyVGFyZ2V0IHtSZW5kZXJUYXJnZXR9IFRoZSBSZW5kZXJUYXJnZXQgd2Ugd2FudCB0byByZXR1cm4gdG8gdGhlIHBvb2xcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUucmV0dXJuUmVuZGVyVGFyZ2V0ID0gZnVuY3Rpb24gKHJlbmRlclRhcmdldClcbntcbiAgICB0aGlzLnRleHR1cmVQb29sLnB1c2goIHJlbmRlclRhcmdldCApO1xufTtcblxuLypcbiAqIEFwcGxpZXMgdGhlIGZpbHRlclxuICogQHBhcmFtIHNoYWRlciB7U2hhZGVyfSBUaGUgc2hhZGVyIHRvIHVwbG9hZFxuICogQHBhcmFtIGlucHV0VGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gb3V0cHV0VGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gY2xlYXIge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHdlIHdhbnQgdG8gY2xlYXIgdGhlIG91dHB1dFRhcmdldFxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5hcHBseUZpbHRlciA9IGZ1bmN0aW9uIChzaGFkZXIsIGlucHV0VGFyZ2V0LCBvdXRwdXRUYXJnZXQsIGNsZWFyKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFJlbmRlclRhcmdldChvdXRwdXRUYXJnZXQpO1xuXG4gICAgaWYgKGNsZWFyKVxuICAgIHtcbiAgICAgICAgb3V0cHV0VGFyZ2V0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBzaGFkZXJcbiAgICB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKHNoYWRlcik7XG5cbiAgICAvLyBUT0RPIChjZW5nbGVyKSAtIENhbiB0aGlzIGJlIGNhY2hlZCBhbmQgbm90IGB0b0FycmF5YGVkIGVhY2ggZnJhbWU/XG4gICAgc2hhZGVyLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXgudmFsdWUgPSB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpO1xuXG4gICAgLy9UT0RPIGNhbiB0aGlzIGJlIG9wdGltaXNlZD9cbiAgICBzaGFkZXIuc3luY1VuaWZvcm1zKCk7XG5cbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMiAqIDQgKiA0KTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFDb2xvciwgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCA0ICogNCAqIDQpO1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgaW5wdXRUYXJnZXQudGV4dHVyZSk7XG5cbiAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCA2LCBnbC5VTlNJR05FRF9TSE9SVCwgMCApO1xufTtcblxuLypcbiAqIENhbGN1bGF0ZXMgdGhlIG1hcHBlZCBtYXRyaXhcbiAqIEBwYXJhbSBmaWx0ZXJBcmVhIHtSZWN0YW5nbGV9IFRoZSBmaWx0ZXIgYXJlYVxuICogQHBhcmFtIHNwcml0ZSB7U3ByaXRlfSB0aGUgdGFyZ2V0IHNwcml0ZVxuICogQHBhcmFtIG91dHB1dE1hdHJpeCB7TWF0cml4fSBAYWx2aW5cbiAqL1xuLy8gVE9ETyBwbGF5aW5nIGFyb3VuZCBoZXJlLi4gdGhpcyBpcyB0ZW1wb3JhcnkgLSAod2lsbCBlbmQgdXAgaW4gdGhlIHNoYWRlcilcbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmNhbGN1bGF0ZU1hcHBlZE1hdHJpeCA9IGZ1bmN0aW9uIChmaWx0ZXJBcmVhLCBzcHJpdGUsIG91dHB1dE1hdHJpeClcbntcbiAgICB2YXIgd29ybGRUcmFuc2Zvcm0gPSBzcHJpdGUud29ybGRUcmFuc2Zvcm0uY29weShtYXRoLk1hdHJpeC5URU1QX01BVFJJWCksXG4gICAgdGV4dHVyZSA9IHNwcml0ZS5fdGV4dHVyZS5iYXNlVGV4dHVyZTtcblxuICAgIHZhciBtYXBwZWRNYXRyaXggPSBvdXRwdXRNYXRyaXguaWRlbnRpdHkoKTtcblxuICAgIC8vIHNjYWxlLi5cbiAgICB2YXIgcmF0aW8gPSB0aGlzLnRleHR1cmVTaXplLmhlaWdodCAvIHRoaXMudGV4dHVyZVNpemUud2lkdGg7XG5cbiAgICBtYXBwZWRNYXRyaXgudHJhbnNsYXRlKGZpbHRlckFyZWEueCAvIHRoaXMudGV4dHVyZVNpemUud2lkdGgsIGZpbHRlckFyZWEueSAvIHRoaXMudGV4dHVyZVNpemUuaGVpZ2h0ICk7XG5cbiAgICBtYXBwZWRNYXRyaXguc2NhbGUoMSAsIHJhdGlvKTtcblxuICAgIHZhciB0cmFuc2xhdGVTY2FsZVggPSAodGhpcy50ZXh0dXJlU2l6ZS53aWR0aCAvIHRleHR1cmUud2lkdGgpO1xuICAgIHZhciB0cmFuc2xhdGVTY2FsZVkgPSAodGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLyB0ZXh0dXJlLmhlaWdodCk7XG5cbiAgICB3b3JsZFRyYW5zZm9ybS50eCAvPSB0ZXh0dXJlLndpZHRoICogdHJhbnNsYXRlU2NhbGVYO1xuICAgIHdvcmxkVHJhbnNmb3JtLnR5IC89IHRleHR1cmUud2lkdGggKiB0cmFuc2xhdGVTY2FsZVg7XG5cbiAgICB3b3JsZFRyYW5zZm9ybS5pbnZlcnQoKTtcblxuICAgIG1hcHBlZE1hdHJpeC5wcmVwZW5kKHdvcmxkVHJhbnNmb3JtKTtcblxuICAgIC8vIGFwcGx5IGludmVyc2Ugc2NhbGUuLlxuICAgIG1hcHBlZE1hdHJpeC5zY2FsZSgxICwgMS9yYXRpbyk7XG5cbiAgICBtYXBwZWRNYXRyaXguc2NhbGUoIHRyYW5zbGF0ZVNjYWxlWCAsIHRyYW5zbGF0ZVNjYWxlWSApO1xuXG4gICAgbWFwcGVkTWF0cml4LnRyYW5zbGF0ZShzcHJpdGUuYW5jaG9yLngsIHNwcml0ZS5hbmNob3IueSk7XG5cbiAgICByZXR1cm4gbWFwcGVkTWF0cml4O1xuXG4gICAgLy8gS2VlcGluZyB0aGUgb3JnaW5hbCBhcyBhIHJlbWluZGVyIHRvIG1lIG9uIGhvdyB0aGlzIHdvcmtzIVxuICAgIC8vXG4gICAgLy8gdmFyIG0gPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuICAgIC8vIC8vIHNjYWxlLi5cbiAgICAvLyB2YXIgcmF0aW8gPSB0aGlzLnRleHR1cmVTaXplLmhlaWdodCAvIHRoaXMudGV4dHVyZVNpemUud2lkdGg7XG5cbiAgICAvLyBtLnRyYW5zbGF0ZShmaWx0ZXJBcmVhLnggLyB0aGlzLnRleHR1cmVTaXplLndpZHRoLCBmaWx0ZXJBcmVhLnkgLyB0aGlzLnRleHR1cmVTaXplLmhlaWdodCk7XG5cblxuICAgIC8vIG0uc2NhbGUoMSAsIHJhdGlvKTtcblxuXG4gICAgLy8gdmFyIHRyYW5zZm9ybSA9IHd0LmNsb25lKCk7XG5cbiAgICAvLyB2YXIgdHJhbnNsYXRlU2NhbGVYID0gKHRoaXMudGV4dHVyZVNpemUud2lkdGggLyA2MjApO1xuICAgIC8vIHZhciB0cmFuc2xhdGVTY2FsZVkgPSAodGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgLyAzODApO1xuXG4gICAgLy8gdHJhbnNmb3JtLnR4IC89IDYyMCAqIHRyYW5zbGF0ZVNjYWxlWDtcbiAgICAvLyB0cmFuc2Zvcm0udHkgLz0gNjIwICogdHJhbnNsYXRlU2NhbGVYO1xuXG4gICAgLy8gdHJhbnNmb3JtLmludmVydCgpO1xuXG4gICAgLy8gdHJhbnNmb3JtLmFwcGVuZChtKTtcblxuICAgIC8vIC8vIGFwcGx5IGludmVyc2Ugc2NhbGUuLlxuICAgIC8vIHRyYW5zZm9ybS5zY2FsZSgxICwgMS9yYXRpbyk7XG5cbiAgICAvLyB0cmFuc2Zvcm0uc2NhbGUoIHRyYW5zbGF0ZVNjYWxlWCAsIHRyYW5zbGF0ZVNjYWxlWSApO1xuXG4gICAgLy8gcmV0dXJuIHRyYW5zZm9ybTtcbn07XG5cbi8qXG4gKiBDb25zdHJhaW5zIHRoZSBmaWx0ZXIgYXJlYSB0byB0aGUgdGV4dHVyZSBzaXplXG4gKiBAcGFyYW0gZmlsdGVyQXJlYSB7UmVjdGFuZ2xlfSBUaGUgZmlsdGVyIGFyZWEgd2Ugd2FudCB0byBjYXBcbiAqL1xuRmlsdGVyTWFuYWdlci5wcm90b3R5cGUuY2FwRmlsdGVyQXJlYSA9IGZ1bmN0aW9uIChmaWx0ZXJBcmVhKVxue1xuICAgIGlmIChmaWx0ZXJBcmVhLnggPCAwKVxuICAgIHtcbiAgICAgICAgZmlsdGVyQXJlYS53aWR0aCArPSBmaWx0ZXJBcmVhLng7XG4gICAgICAgIGZpbHRlckFyZWEueCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckFyZWEueSA8IDApXG4gICAge1xuICAgICAgICBmaWx0ZXJBcmVhLmhlaWdodCArPSBmaWx0ZXJBcmVhLnk7XG4gICAgICAgIGZpbHRlckFyZWEueSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKCBmaWx0ZXJBcmVhLnggKyBmaWx0ZXJBcmVhLndpZHRoID4gdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCApXG4gICAge1xuICAgICAgICBmaWx0ZXJBcmVhLndpZHRoID0gdGhpcy50ZXh0dXJlU2l6ZS53aWR0aCAtIGZpbHRlckFyZWEueDtcbiAgICB9XG5cbiAgICBpZiAoIGZpbHRlckFyZWEueSArIGZpbHRlckFyZWEuaGVpZ2h0ID4gdGhpcy50ZXh0dXJlU2l6ZS5oZWlnaHQgKVxuICAgIHtcbiAgICAgICAgZmlsdGVyQXJlYS5oZWlnaHQgPSB0aGlzLnRleHR1cmVTaXplLmhlaWdodCAtIGZpbHRlckFyZWEueTtcbiAgICB9XG59O1xuXG4vKlxuICogUmVzaXplcyBhbGwgdGhlIHJlbmRlciB0YXJnZXRzIGluIHRoZSBwb29sXG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIG5ldyB3aWR0aFxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgbmV3IGhlaWdodFxuICovXG5GaWx0ZXJNYW5hZ2VyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKVxue1xuICAgIHRoaXMudGV4dHVyZVNpemUud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnRleHR1cmVTaXplLmhlaWdodCA9IGhlaWdodDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlUG9vbC5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMudGV4dHVyZVBvb2xbaV0ucmVzaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgZmlsdGVyIGFuZCByZW1vdmVzIGl0IGZyb20gdGhlIGZpbHRlciBzdGFjay5cbiAqXG4gKi9cbkZpbHRlck1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuZmlsdGVyU3RhY2sgPSBudWxsO1xuICAgIHRoaXMub2Zmc2V0WSA9IDA7XG5cbiAgICAvLyBkZXN0cm95IHRleHR1cmVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHR1cmVQb29sLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlUG9vbFtpXS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0dXJlUG9vbCA9IG51bGw7XG59O1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4vV2ViR0xNYW5hZ2VyJyksXG4gICAgQWxwaGFNYXNrRmlsdGVyID0gcmVxdWlyZSgnLi4vZmlsdGVycy9TcHJpdGVNYXNrRmlsdGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gTWFza01hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xuXG4gICAgdGhpcy5zdGVuY2lsU3RhY2sgPSBbXTtcbiAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgIHRoaXMuY291bnQgPSAwO1xuXG4gICAgdGhpcy5hbHBoYU1hc2tQb29sID0gW107XG59XG5cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5NYXNrTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNYXNrTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gTWFza01hbmFnZXI7XG5cbi8qKlxuICogQXBwbGllcyB0aGUgTWFzayBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suXG4gKlxuICogQHBhcmFtIGdyYXBoaWNzIHtHcmFwaGljc31cbiAqIEBwYXJhbSB3ZWJHTERhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaE1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICBpZiAobWFza0RhdGEudGV4dHVyZSlcbiAgICB7XG4gICAgICAgIHRoaXMucHVzaFNwcml0ZU1hc2sodGFyZ2V0LCBtYXNrRGF0YSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMucHVzaFN0ZW5jaWxNYXNrKHRhcmdldCwgbWFza0RhdGEpO1xuICAgIH1cblxufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsYXN0IG1hc2sgZnJvbSB0aGUgbWFzayBzdGFjayBhbmQgZG9lc24ndCByZXR1cm4gaXQuXG4gKiBcbiAqIEBwYXJhbSB0YXJnZXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119XG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BNYXNrID0gZnVuY3Rpb24gKHRhcmdldCwgbWFza0RhdGEpXG57XG4gICAgaWYgKG1hc2tEYXRhLnRleHR1cmUpXG4gICAge1xuICAgICAgICB0aGlzLnBvcFNwcml0ZU1hc2sodGFyZ2V0LCBtYXNrRGF0YSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHRoaXMucG9wU3RlbmNpbE1hc2sodGFyZ2V0LCBtYXNrRGF0YSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBNYXNrIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFjay5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHtSZW5kZXJUYXJnZXR9XG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5NYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaFNwcml0ZU1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICB2YXIgYWxwaGFNYXNrRmlsdGVyID0gdGhpcy5hbHBoYU1hc2tQb29sLnBvcCgpO1xuXG4gICAgaWYgKCFhbHBoYU1hc2tGaWx0ZXIpXG4gICAge1xuICAgICAgICBhbHBoYU1hc2tGaWx0ZXIgPSBbbmV3IEFscGhhTWFza0ZpbHRlcihtYXNrRGF0YSldO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuZmlsdGVyTWFuYWdlci5wdXNoRmlsdGVyKHRhcmdldCwgYWxwaGFNYXNrRmlsdGVyKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCBkb2Vzbid0IHJldHVybiBpdC5cbiAqXG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BTcHJpdGVNYXNrID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgZmlsdGVycyA9IHRoaXMucmVuZGVyZXIuZmlsdGVyTWFuYWdlci5wb3BGaWx0ZXIoKTtcblxuICAgIHRoaXMuYWxwaGFNYXNrUG9vbC5wdXNoKGZpbHRlcnMpO1xufTtcblxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIE1hc2sgYW5kIGFkZHMgaXQgdG8gdGhlIGN1cnJlbnQgZmlsdGVyIHN0YWNrLlxuICpcbiAqIEBwYXJhbSB0YXJnZXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119XG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wdXNoU3RlbmNpbE1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCBtYXNrRGF0YSlcbntcbiAgICB0aGlzLnJlbmRlcmVyLnN0ZW5jaWxNYW5hZ2VyLnB1c2hNYXNrKG1hc2tEYXRhKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCBkb2Vzbid0IHJldHVybiBpdC5cbiAqIEBwYXJhbSB0YXJnZXQge1JlbmRlclRhcmdldH1cbiAqIEBwYXJhbSBtYXNrRGF0YSB7YW55W119XG4gKi9cbk1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BTdGVuY2lsTWFzayA9IGZ1bmN0aW9uICh0YXJnZXQsIG1hc2tEYXRhKVxue1xuICAgIHRoaXMucmVuZGVyZXIuc3RlbmNpbE1hbmFnZXIucG9wTWFzayhtYXNrRGF0YSk7XG59O1xuXG4iLCJ2YXIgV2ViR0xNYW5hZ2VyID0gcmVxdWlyZSgnLi9XZWJHTE1hbmFnZXInKSxcbiAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVycy9UZXh0dXJlU2hhZGVyJyksXG4gICAgQ29tcGxleFByaW1pdGl2ZVNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcnMvQ29tcGxleFByaW1pdGl2ZVNoYWRlcicpLFxuICAgIFByaW1pdGl2ZVNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcnMvUHJpbWl0aXZlU2hhZGVyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1lbWJlcm9mIFBJWElcbiAqIEBleHRlbmRzIFdlYkdMTWFuYWdlclxuICogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfSBUaGUgcmVuZGVyZXIgdGhpcyBtYW5hZ2VyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gU2hhZGVyTWFuYWdlcihyZW5kZXJlcilcbntcbiAgICBXZWJHTE1hbmFnZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5tYXhBdHRpYnMgPSAxMDtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMuYXR0cmliU3RhdGUgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfVxuICAgICAqL1xuICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4QXR0aWJzOyBpKyspXG4gICAge1xuICAgICAgICB0aGlzLmF0dHJpYlN0YXRlW2ldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55W119XG4gICAgICovXG4gICAgdGhpcy5zdGFjayA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY3VycmVudElkID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRTaGFkZXIgPSBudWxsO1xuXG4vLyAgICB0aGlzLmluaXRQbHVnaW5zKCk7XG59XG5cblNoYWRlck1hbmFnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXZWJHTE1hbmFnZXIucHJvdG90eXBlKTtcblNoYWRlck1hbmFnZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2hhZGVyTWFuYWdlcjtcbnV0aWxzLnBsdWdpblRhcmdldC5taXhpbihTaGFkZXJNYW5hZ2VyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXJNYW5hZ2VyO1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZXJlIGlzIGEgV2ViR0wgY29udGV4dCBjaGFuZ2UuXG4gKlxuICovXG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuaW5pdFBsdWdpbnMoKTtcblxuICAgIC8vIFRPRE8gLSBXaHkgYXJlIHRoZXNlIG5vdCBwbHVnaW5zPyBXZSBjYW4ndCBkZWNvdXBsZSBwcmltaXRpdmVzIHVubGVzcyB0aGV5IGFyZS4uLi5cbiAgICB0aGlzLmRlZmF1bHRTaGFkZXIgPSBuZXcgVGV4dHVyZVNoYWRlcih0aGlzKTtcbiAgICB0aGlzLnByaW1pdGl2ZVNoYWRlciA9IG5ldyBQcmltaXRpdmVTaGFkZXIodGhpcyk7XG4gICAgdGhpcy5jb21wbGV4UHJpbWl0aXZlU2hhZGVyID0gbmV3IENvbXBsZXhQcmltaXRpdmVTaGFkZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFRha2VzIHRoZSBhdHRyaWJ1dGVzIGdpdmVuIGluIHBhcmFtZXRlcnMgYW5kIHVwbG9hZHMgdGhlbS5cbiAqXG4gKiBAcGFyYW0gYXR0cmlicyB7QXJyYXl9IGF0dHJpYnNcbiAqL1xuU2hhZGVyTWFuYWdlci5wcm90b3R5cGUuc2V0QXR0cmlicyA9IGZ1bmN0aW9uIChhdHRyaWJzKVxue1xuICAgIC8vIHJlc2V0IHRlbXAgc3RhdGVcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRlbXBBdHRyaWJTdGF0ZS5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlW2ldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBuZXcgYXR0cmlic1xuICAgIGZvciAodmFyIGEgaW4gYXR0cmlicylcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcEF0dHJpYlN0YXRlW2F0dHJpYnNbYV1dID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYXR0cmliU3RhdGUubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJTdGF0ZVtpXSAhPT0gdGhpcy50ZW1wQXR0cmliU3RhdGVbaV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmliU3RhdGVbaV0gPSB0aGlzLnRlbXBBdHRyaWJTdGF0ZVtpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmliU3RhdGVbaV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHNoYWRlci5cbiAqXG4gKiBAcGFyYW0gc2hhZGVyIHtTaGFkZXJ9IHRoZSBzaGFkZXIgdG8gdXBsb2FkXG4gKi9cblNoYWRlck1hbmFnZXIucHJvdG90eXBlLnNldFNoYWRlciA9IGZ1bmN0aW9uIChzaGFkZXIpXG57XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRJZCA9PT0gc2hhZGVyLnV1aWQpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudElkID0gc2hhZGVyLnV1aWQ7XG5cbiAgICB0aGlzLmN1cnJlbnRTaGFkZXIgPSBzaGFkZXI7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmdsLnVzZVByb2dyYW0oc2hhZGVyLnByb2dyYW0pO1xuICAgIHRoaXMuc2V0QXR0cmlicyhzaGFkZXIuYXR0cmlidXRlcyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyBvYmplY3QuXG4gKlxuICovXG5TaGFkZXJNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICBXZWJHTE1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZGVzdHJveVBsdWdpbnMoKTtcblxuICAgIHRoaXMuYXR0cmliU3RhdGUgPSBudWxsO1xuXG4gICAgdGhpcy50ZW1wQXR0cmliU3RhdGUgPSBudWxsO1xufTtcbiIsInZhciBXZWJHTE1hbmFnZXIgPSByZXF1aXJlKCcuL1dlYkdMTWFuYWdlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBXZWJHTE1hc2tNYW5hZ2VyKHJlbmRlcmVyKVxue1xuICAgIFdlYkdMTWFuYWdlci5jYWxsKHRoaXMsIHJlbmRlcmVyKTtcbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2sgPSBudWxsO1xufVxuXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFdlYkdMTWFza01hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYkdMTWFza01hbmFnZXI7XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgbWFzayBzdGFjayB0aGF0IGlzIHVzZWQgYnkgdGhpcyBtYW5hZ2VyXG4gKiBAcGFyYW0gc3RlbmNpbE1hc2tTdGFjayB7U3RlbmNpbE1hc2tTdGFja30gVGhlIG1hc2sgc3RhY2sgXG4gKlxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5zZXRNYXNrU3RhY2sgPSBmdW5jdGlvbiAoIHN0ZW5jaWxNYXNrU3RhY2sgKVxue1xuICAgIHRoaXMuc3RlbmNpbE1hc2tTdGFjayA9IHN0ZW5jaWxNYXNrU3RhY2s7XG5cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgaWYgKHN0ZW5jaWxNYXNrU3RhY2suc3RlbmNpbFN0YWNrLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGdsLmRpc2FibGUoZ2wuU1RFTkNJTF9URVNUKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLlNURU5DSUxfVEVTVCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBNYXNrIGFuZCBhZGRzIGl0IHRvIHRoZSBjdXJyZW50IGZpbHRlciBzdGFjay4gQGFsdmluXG4gKiBcbiAqIEBwYXJhbSBncmFwaGljcyB7R3JhcGhpY3N9XG4gKiBAcGFyYW0gd2ViR0xEYXRhIHthbnlbXX1cbiAqL1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUucHVzaFN0ZW5jaWwgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHdlYkdMRGF0YSlcbntcbiAgICB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQuYXR0YWNoU3RlbmNpbEJ1ZmZlcigpO1xuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbCxcbiAgICAgICAgc21zID0gdGhpcy5zdGVuY2lsTWFza1N0YWNrO1xuXG4gICAgdGhpcy5iaW5kR3JhcGhpY3MoZ3JhcGhpY3MsIHdlYkdMRGF0YSwgdGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoc21zLnN0ZW5jaWxTdGFjay5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBnbC5lbmFibGUoZ2wuU1RFTkNJTF9URVNUKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuU1RFTkNJTF9CVUZGRVJfQklUKTtcbiAgICAgICAgc21zLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICBzbXMuY291bnQgPSAwO1xuICAgIH1cblxuICAgIHNtcy5zdGVuY2lsU3RhY2sucHVzaCh3ZWJHTERhdGEpO1xuXG4gICAgdmFyIGxldmVsID0gc21zLmNvdW50O1xuXG4gICAgZ2wuY29sb3JNYXNrKGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcblxuICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkFMV0FZUywwLDB4RkYpO1xuICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5WRVJUKTtcblxuICAgIC8vIGRyYXcgdGhlIHRyaWFuZ2xlIHN0cmlwIVxuXG4gICAgaWYgKHdlYkdMRGF0YS5tb2RlID09PSAxKVxuICAgIHtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCAtIDQsIGdsLlVOU0lHTkVEX1NIT1JULCAwICk7XG5cbiAgICAgICAgaWYgKHNtcy5yZXZlcnNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwgMHhGRiAtIGxldmVsLCAweEZGKTtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuREVDUik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCwgMHhGRik7XG4gICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLklOQ1IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZHJhdyBhIHF1YWQgdG8gaW5jcmVtZW50Li5cbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgNCwgZ2wuVU5TSUdORURfU0hPUlQsICggd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCApICogMiApO1xuXG4gICAgICAgIGlmIChzbXMucmV2ZXJzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsMHhGRi0obGV2ZWwrMSksIDB4RkYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwrMSwgMHhGRik7XG4gICAgICAgIH1cblxuICAgICAgICBzbXMucmV2ZXJzZSA9ICFzbXMucmV2ZXJzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgaWYgKCFzbXMucmV2ZXJzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsIDB4RkYgLSBsZXZlbCwgMHhGRik7XG4gICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLkRFQ1IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwsIDB4RkYpO1xuICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5JTkNSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9TVFJJUCwgIHdlYkdMRGF0YS5pbmRpY2VzLmxlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcblxuICAgICAgICBpZiAoIXNtcy5yZXZlcnNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwweEZGLShsZXZlbCsxKSwgMHhGRik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCsxLCAweEZGKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLktFRVApO1xuXG4gICAgc21zLmNvdW50Kys7XG59O1xuXG4vKipcbiAqIFRPRE8gdGhpcyBkb2VzIG5vdCBiZWxvbmcgaGVyZSFcbiAqXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfVxuICogQHBhcmFtIHdlYkdMRGF0YSB7QXJyYXl9XG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLmJpbmRHcmFwaGljcyA9IGZ1bmN0aW9uIChncmFwaGljcywgd2ViR0xEYXRhKVxue1xuICAgIC8vaWYgKHRoaXMuX2N1cnJlbnRHcmFwaGljcyA9PT0gZ3JhcGhpY3MpcmV0dXJuO1xuICAgIHRoaXMuX2N1cnJlbnRHcmFwaGljcyA9IGdyYXBoaWNzO1xuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgICAvLyBiaW5kIHRoZSBncmFwaGljcyBvYmplY3QuLlxuICAgIHZhciBzaGFkZXI7Ly8gPSB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIucGx1Z2lucy5wcmltaXRpdmVTaGFkZXI7XG5cbiAgICBpZiAod2ViR0xEYXRhLm1vZGUgPT09IDEpXG4gICAge1xuICAgICAgICBzaGFkZXIgPSB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuY29tcGxleFByaW1pdGl2ZVNoYWRlcjtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRlck1hbmFnZXIuc2V0U2hhZGVyKHNoYWRlcik7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuICAgICAgICBnbC51bmlmb3JtM2Z2KHNoYWRlci51bmlmb3Jtcy50aW50Ll9sb2NhdGlvbiwgdXRpbHMuaGV4MnJnYihncmFwaGljcy50aW50KSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybTNmdihzaGFkZXIudW5pZm9ybXMuY29sb3IuX2xvY2F0aW9uLCB3ZWJHTERhdGEuY29sb3IpO1xuXG4gICAgICAgIGdsLnVuaWZvcm0xZihzaGFkZXIudW5pZm9ybXMuYWxwaGEuX2xvY2F0aW9uLCBncmFwaGljcy53b3JsZEFscGhhKTtcblxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmJ1ZmZlcik7XG5cbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDIsIDApO1xuXG5cbiAgICAgICAgLy8gbm93IGRvIHRoZSByZXN0Li5cbiAgICAgICAgLy8gc2V0IHRoZSBpbmRleCBidWZmZXIhXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHdlYkdMRGF0YS5pbmRleEJ1ZmZlcik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLmFjdGl2YXRlUHJpbWl0aXZlU2hhZGVyKCk7XG4gICAgICAgIHNoYWRlciA9IHRoaXMucmVuZGVyZXIuc2hhZGVyTWFuYWdlci5wcmltaXRpdmVTaGFkZXI7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlciggc2hhZGVyICk7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXguX2xvY2F0aW9uLCBmYWxzZSwgZ3JhcGhpY3Mud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuICAgICAgICBnbC51bmlmb3JtM2Z2KHNoYWRlci51bmlmb3Jtcy50aW50Ll9sb2NhdGlvbiwgdXRpbHMuaGV4MnJnYihncmFwaGljcy50aW50KSk7XG5cbiAgICAgICAgZ2wudW5pZm9ybTFmKHNoYWRlci51bmlmb3Jtcy5hbHBoYS5fbG9jYXRpb24sIGdyYXBoaWNzLndvcmxkQWxwaGEpO1xuXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB3ZWJHTERhdGEuYnVmZmVyKTtcblxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCA0ICogNiwgMCk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyLmF0dHJpYnV0ZXMuYUNvbG9yLCA0LCBnbC5GTE9BVCwgZmFsc2UsNCAqIDYsIDIgKiA0KTtcblxuICAgICAgICAvLyBzZXQgdGhlIGluZGV4IGJ1ZmZlciFcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgd2ViR0xEYXRhLmluZGV4QnVmZmVyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRPRE8gQGFsdmluXG4gKiBAcGFyYW0gZ3JhcGhpY3Mge0dyYXBoaWNzfVxuICogQHBhcmFtIHdlYkdMRGF0YSB7QXJyYXl9XG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLnBvcFN0ZW5jaWwgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHdlYkdMRGF0YSlcbntcbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsLFxuICAgICAgICBzbXMgPSB0aGlzLnN0ZW5jaWxNYXNrU3RhY2s7XG5cbiAgICBzbXMuc3RlbmNpbFN0YWNrLnBvcCgpO1xuXG4gICAgc21zLmNvdW50LS07XG5cbiAgICBpZiAoc21zLnN0ZW5jaWxTdGFjay5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICAvLyB0aGUgc3RhY2sgaXMgZW1wdHkhXG4gICAgICAgIGdsLmRpc2FibGUoZ2wuU1RFTkNJTF9URVNUKTtcblxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgICAgIHZhciBsZXZlbCA9IHNtcy5jb3VudDtcblxuICAgICAgICB0aGlzLmJpbmRHcmFwaGljcyhncmFwaGljcywgd2ViR0xEYXRhLCB0aGlzLnJlbmRlcmVyKTtcblxuICAgICAgICBnbC5jb2xvck1hc2soZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmICh3ZWJHTERhdGEubW9kZSA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgc21zLnJldmVyc2UgPSAhc21zLnJldmVyc2U7XG5cbiAgICAgICAgICAgIGlmIChzbXMucmV2ZXJzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwgMHhGRiAtIChsZXZlbCsxKSwgMHhGRik7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5JTkNSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCxsZXZlbCsxLCAweEZGKTtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLkRFQ1IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkcmF3IGEgcXVhZCB0byBpbmNyZW1lbnQuLlxuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX0ZBTiwgNCwgZ2wuVU5TSUdORURfU0hPUlQsICggd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCApICogMiApO1xuXG4gICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5BTFdBWVMsMCwweEZGKTtcbiAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5WRVJUKTtcblxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgdHJpYW5nbGUgc3RyaXAhXG4gICAgICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVfRkFOLCAgd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoIC0gNCwgZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcblxuICAgICAgICAgICAgaWYgKCFzbXMucmV2ZXJzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnbC5zdGVuY2lsRnVuYyhnbC5FUVVBTCwweEZGLShsZXZlbCksIDB4RkYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLGxldmVsLCAweEZGKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIjw8Pj5cIilcbiAgICAgICAgICAgIGlmICghc21zLnJldmVyc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsIDB4RkYgLSAobGV2ZWwrMSksIDB4RkYpO1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxPcChnbC5LRUVQLGdsLktFRVAsZ2wuSU5DUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwrMSwgMHhGRik7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbE9wKGdsLktFRVAsZ2wuS0VFUCxnbC5ERUNSKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFX1NUUklQLCAgd2ViR0xEYXRhLmluZGljZXMubGVuZ3RoLCBnbC5VTlNJR05FRF9TSE9SVCwgMCApO1xuXG4gICAgICAgICAgICBpZiAoIXNtcy5yZXZlcnNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdsLnN0ZW5jaWxGdW5jKGdsLkVRVUFMLDB4RkYtKGxldmVsKSwgMHhGRik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2wuc3RlbmNpbEZ1bmMoZ2wuRVFVQUwsbGV2ZWwsIDB4RkYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2wuY29sb3JNYXNrKHRydWUsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICBnbC5zdGVuY2lsT3AoZ2wuS0VFUCxnbC5LRUVQLGdsLktFRVApO1xuXG5cbiAgICB9XG59O1xuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBtYXNrIHN0YWNrLlxuICpcbiAqL1xuV2ViR0xNYXNrTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgV2ViR0xNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2suc3RlbmNpbFN0YWNrID0gbnVsbDtcbn07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgTWFzayBhbmQgYWRkcyBpdCB0byB0aGUgY3VycmVudCBmaWx0ZXIgc3RhY2suXG4gKlxuICogQHBhcmFtIG1hc2tEYXRhIHthbnlbXX0gVGhlIG1hc2sgZGF0YSBzdHJ1Y3R1cmUgdG8gdXNlXG4gKi9cbldlYkdMTWFza01hbmFnZXIucHJvdG90eXBlLnB1c2hNYXNrID0gZnVuY3Rpb24gKG1hc2tEYXRhKVxue1xuXG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKHRoaXMucmVuZGVyZXIucGx1Z2lucy5ncmFwaGljcyk7XG5cbiAgICBpZiAobWFza0RhdGEuZGlydHkpXG4gICAge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnBsdWdpbnMuZ3JhcGhpY3MudXBkYXRlR3JhcGhpY3MobWFza0RhdGEsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgIH1cblxuICAgIGlmICghbWFza0RhdGEuX3dlYkdMW3RoaXMucmVuZGVyZXIuZ2wuaWRdLmRhdGEubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHVzaFN0ZW5jaWwobWFza0RhdGEsIG1hc2tEYXRhLl93ZWJHTFt0aGlzLnJlbmRlcmVyLmdsLmlkXS5kYXRhWzBdLCB0aGlzLnJlbmRlcmVyKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBmaWx0ZXIgZnJvbSB0aGUgZmlsdGVyIHN0YWNrIGFuZCBkb2Vzbid0IHJldHVybiBpdC5cbiAqXG4gKiBAcGFyYW0gbWFza0RhdGEge2FueVtdfVxuICovXG5XZWJHTE1hc2tNYW5hZ2VyLnByb3RvdHlwZS5wb3BNYXNrID0gZnVuY3Rpb24gKG1hc2tEYXRhKVxue1xuICAgIHRoaXMucmVuZGVyZXIuc2V0T2JqZWN0UmVuZGVyZXIodGhpcy5yZW5kZXJlci5wbHVnaW5zLmdyYXBoaWNzKTtcblxuICAgIHRoaXMucG9wU3RlbmNpbChtYXNrRGF0YSwgbWFza0RhdGEuX3dlYkdMW3RoaXMucmVuZGVyZXIuZ2wuaWRdLmRhdGFbMF0sIHRoaXMucmVuZGVyZXIpO1xufTtcblxuIiwiLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBXZWJHTE1hbmFnZXIocmVuZGVyZXIpXG57XG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVyIHRoaXMgbWFuYWdlciB3b3JrcyBmb3IuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFJlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnJlbmRlcmVyLm9uKCdjb250ZXh0JywgdGhpcy5fb25Db250ZXh0Q2hhbmdlRm4gPSBmdW5jdGlvbigpe1xuXG4gICAgXHRzZWxmLm9uQ29udGV4dENoYW5nZSgpO1xuXG4gICAgfSk7XG59XG5cbldlYkdMTWFuYWdlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXZWJHTE1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFdlYkdMTWFuYWdlcjtcblxuLyoqXG4gKiBHZW5lcmljIG1ldGhvZCBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIFdlYkdMIGNvbnRleHQgY2hhbmdlLlxuICpcbiAqL1xuV2ViR0xNYW5hZ2VyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuXHQvLyBkbyBzb21lIGNvZGVzIGluaXQhXG59O1xuXG4vKipcbiAqIEdlbmVyaWMgZGVzdHJveSBtZXRob2RzIHRvIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHN1YmNsYXNzXG4gKlxuICovXG5XZWJHTE1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMucmVuZGVyZXIub2ZmKCdjb250ZXh0JywgdGhpcy5fb25Db250ZXh0Q2hhbmdlRm4pO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG59O1xuIiwidmFyIFNoYWRlciA9IHJlcXVpcmUoJy4vU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU2hhZGVyXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gQ29tcGxleFByaW1pdGl2ZVNoYWRlcihzaGFkZXJNYW5hZ2VyKVxue1xuICAgIFNoYWRlci5jYWxsKHRoaXMsXG4gICAgICAgIHNoYWRlck1hbmFnZXIsXG4gICAgICAgIC8vIHZlcnRleCBzaGFkZXJcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2F0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4OycsXG4gICAgICAgICAgICAndW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7JyxcblxuICAgICAgICAgICAgJ3VuaWZvcm0gdmVjMyB0aW50OycsXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCBhbHBoYTsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gdmVjMyBjb2xvcjsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiwgMS4wKSkueHksIDAuMCwgMS4wKTsnLFxuICAgICAgICAgICAgJyAgIHZDb2xvciA9IHZlYzQoY29sb3IgKiBhbHBoYSAqIHRpbnQsIGFscGhhKTsnLC8vXCIgKiB2ZWM0KHRpbnQgKiBhbHBoYSwgYWxwaGEpOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gZnJhZ21lbnQgc2hhZGVyXG4gICAgICAgIFtcbiAgICAgICAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdkNvbG9yOycsXG4gICAgICAgICAgICAnfSdcbiAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgICAgLy8gY3VzdG9tIHVuaWZvcm1zXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpbnQ6ICAgeyB0eXBlOiAnM2YnLCB2YWx1ZTogWzAsIDAsIDBdIH0sXG4gICAgICAgICAgICBhbHBoYTogIHsgdHlwZTogJzFmJywgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgIGNvbG9yOiAgeyB0eXBlOiAnM2YnLCB2YWx1ZTogWzAsMCwwXSB9LFxuICAgICAgICAgICAgdHJhbnNsYXRpb25NYXRyaXg6IHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSg5KSB9LFxuICAgICAgICAgICAgcHJvamVjdGlvbk1hdHJpeDogeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBuZXcgRmxvYXQzMkFycmF5KDkpIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICB7XG4gICAgICAgICAgICBhVmVydGV4UG9zaXRpb246MFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuQ29tcGxleFByaW1pdGl2ZVNoYWRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNoYWRlci5wcm90b3R5cGUpO1xuQ29tcGxleFByaW1pdGl2ZVNoYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb21wbGV4UHJpbWl0aXZlU2hhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBDb21wbGV4UHJpbWl0aXZlU2hhZGVyO1xuIiwidmFyIFNoYWRlciA9IHJlcXVpcmUoJy4vU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU2hhZGVyXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gUHJpbWl0aXZlU2hhZGVyKHNoYWRlck1hbmFnZXIpXG57XG4gICAgU2hhZGVyLmNhbGwodGhpcyxcbiAgICAgICAgc2hhZGVyTWFuYWdlcixcbiAgICAgICAgLy8gdmVydGV4IHNoYWRlclxuICAgICAgICBbXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uOycsXG4gICAgICAgICAgICAnYXR0cmlidXRlIHZlYzQgYUNvbG9yOycsXG5cbiAgICAgICAgICAgICd1bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDsnLFxuXG4gICAgICAgICAgICAndW5pZm9ybSBmbG9hdCBhbHBoYTsnLFxuICAgICAgICAgICAgJ3VuaWZvcm0gZmxvYXQgZmxpcFk7JyxcbiAgICAgICAgICAgICd1bmlmb3JtIHZlYzMgdGludDsnLFxuXG4gICAgICAgICAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgICAgICAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgICAgICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiwgMS4wKSkueHksIDAuMCwgMS4wKTsnLFxuICAgICAgICAgICAgJyAgIHZDb2xvciA9IGFDb2xvciAqIHZlYzQodGludCAqIGFscGhhLCBhbHBoYSk7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgICAvLyBmcmFnbWVudCBzaGFkZXJcbiAgICAgICAgW1xuICAgICAgICAgICAgJ3ByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OycsXG5cbiAgICAgICAgICAgICd2YXJ5aW5nIHZlYzQgdkNvbG9yOycsXG5cbiAgICAgICAgICAgICd2b2lkIG1haW4odm9pZCl7JyxcbiAgICAgICAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB2Q29sb3I7JyxcbiAgICAgICAgICAgICd9J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgICAvLyBjdXN0b20gdW5pZm9ybXNcbiAgICAgICAge1xuICAgICAgICAgICAgdGludDogICB7IHR5cGU6ICczZicsIHZhbHVlOiBbMCwgMCwgMF0gfSxcbiAgICAgICAgICAgIGFscGhhOiAgeyB0eXBlOiAnMWYnLCB2YWx1ZTogMCB9LFxuICAgICAgICAgICAgdHJhbnNsYXRpb25NYXRyaXg6IHsgdHlwZTogJ21hdDMnLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheSg5KSB9LFxuICAgICAgICAgICAgcHJvamVjdGlvbk1hdHJpeDogeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBuZXcgRmxvYXQzMkFycmF5KDkpIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gY3VzdG9tIGF0dHJpYnV0ZXNcbiAgICAgICAge1xuICAgICAgICAgICAgYVZlcnRleFBvc2l0aW9uOjAsXG4gICAgICAgICAgICBhQ29sb3I6MFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuUHJpbWl0aXZlU2hhZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU2hhZGVyLnByb3RvdHlwZSk7XG5QcmltaXRpdmVTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHJpbWl0aXZlU2hhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBQcmltaXRpdmVTaGFkZXI7XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqIEBwYXJhbSBbdmVydGV4U3JjXSB7c3RyaW5nfSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxuICogQHBhcmFtIFtmcmFnbWVudFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIFt1bmlmb3Jtc10ge29iamVjdH0gVW5pZm9ybXMgZm9yIHRoaXMgc2hhZGVyLlxuICogQHBhcmFtIFthdHRyaWJ1dGVzXSB7b2JqZWN0fSBBdHRyaWJ1dGVzIGZvciB0aGlzIHNoYWRlci5cbiAqL1xuZnVuY3Rpb24gU2hhZGVyKHNoYWRlck1hbmFnZXIsIHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKVxue1xuICAgIGlmICghdmVydGV4U3JjIHx8ICFmcmFnbWVudFNyYylcbiAgICB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BpeGkuanMgRXJyb3IuIFNoYWRlciByZXF1aXJlcyB2ZXJ0ZXhTcmMgYW5kIGZyYWdtZW50U3JjJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB1bmlxdWUgaWRcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy51dWlkID0gdXRpbHMudXVpZCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gICAgICogQG1lbWJlciB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuZ2wgPSBzaGFkZXJNYW5hZ2VyLnJlbmRlcmVyLmdsO1xuXG4gICAgLy9UT0RPIG1heWJlIHdlIHNob3VsZCBwYXNzIHJlbmRlcmVyIHJhdGhlciB0aGFuIHNoYWRlciBtYW5nZXI/PyBmb29kIGZvciB0aG91Z2h0Li5cbiAgICB0aGlzLnNoYWRlck1hbmFnZXIgPSBzaGFkZXJNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFdlYkdMIHByb2dyYW0uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtXZWJHTFByb2dyYW19XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlmb3JtcyBhcyBhbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXR0cmlidXRlcyBhcyBhbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgdGV4dHVyZSBjb3VudGVyXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50ZXh0dXJlQ291bnQgPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRleCBzaGFkZXIgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmVydGV4U3JjID0gdmVydGV4U3JjO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZyYWdtZW50IHNoYWRlciBhcyBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IGZyYWdtZW50U3JjO1xuXG4gICAgdGhpcy5pbml0KCk7XG59XG5cblNoYWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTaGFkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuLypcbiAqIENyZWF0ZXMgdGhlIHNoYWRlciBhbmQgdXNlcyBpdFxuICpcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmNvbXBpbGUoKTtcblxuICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuXG4gICAgdGhpcy5jYWNoZVVuaWZvcm1Mb2NhdGlvbnMoT2JqZWN0LmtleXModGhpcy51bmlmb3JtcykpO1xuICAgIHRoaXMuY2FjaGVBdHRyaWJ1dGVMb2NhdGlvbnMoT2JqZWN0LmtleXModGhpcy5hdHRyaWJ1dGVzKSk7XG59O1xuXG4vKlxuICogQ2FjaGVzIHRoZSBsb2NhdGlvbnMgb2YgdGhlIHVuaWZvcm0gZm9yIHJldXNlXG4gKiBAcGFyYW0ga2V5cyB7c3RyaW5nfSB0aGUgdW5pZm9ybXMgdG8gY2FjaGVcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5jYWNoZVVuaWZvcm1Mb2NhdGlvbnMgPSBmdW5jdGlvbiAoa2V5cylcbntcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpXG4gICAge1xuICAgICAgICB0aGlzLnVuaWZvcm1zW2tleXNbaV1dLl9sb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwga2V5c1tpXSk7XG4gICAgfVxufTtcblxuLypcbiAqIENhY2hlcyB0aGUgbG9jYXRpb25zIG9mIHRoZSBhdHRyaWJ1dGUgZm9yIHJldXNlXG4gKiBAcGFyYW0ga2V5cyB7c3RyaW5nfSB0aGUgYXR0cmlidXRlcyB0byBjYWNoZVxuICovXG5TaGFkZXIucHJvdG90eXBlLmNhY2hlQXR0cmlidXRlTG9jYXRpb25zID0gZnVuY3Rpb24gKGtleXMpXG57XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKVxuICAgIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tleXNbaV1dID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sIGtleXNbaV0pO1xuICAgIH1cblxuICAgIC8vIFRPRE86IENoZWNrIGlmIHRoaXMgaXMgbmVlZGVkIGFueW1vcmUuLi5cblxuICAgIC8vIEJlZ2luIHdvcnN0IGhhY2sgZXZhIC8vXG5cbiAgICAvLyBXSFk/Pz8gT05MWSBvbiBteSBjaHJvbWUgcGl4ZWwgdGhlIGxpbmUgYWJvdmUgcmV0dXJucyAtMSB3aGVuIHVzaW5nIGZpbHRlcnM/XG4gICAgLy8gbWF5YmUgaXRzIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBnbCBjb250ZXh0LlxuICAgIC8vIEknbSBjb252aW5jZWQgdGhpcyBpcyBhIGJ1ZyBpbiB0aGUgY2hyb21lIGJyb3dzZXIgYXMgdGhlcmUgaXMgTk8gcmVhc29uIHdoeSB0aGlzIHNob3VsZCBiZSByZXR1cm5pbmcgLTEgZXNwZWNpYWxseSBhcyBpdCBvbmx5IG1hbmlmZXN0cyBvbiBteSBjaHJvbWUgcGl4ZWxcbiAgICAvLyBJZiB0aGVyZXMgYW55IHdlYkdMIHBlb3BsZSB0aGF0IGtub3cgd2h5IGNvdWxkIGhhcHBlbiBwbGVhc2UgaGVscCA6KVxuICAgIC8vIGlmICh0aGlzLmF0dHJpYnV0ZXMuYUNvbG9yID09PSAtMSl7XG4gICAgLy8gICAgIHRoaXMuYXR0cmlidXRlcy5hQ29sb3IgPSAyO1xuICAgIC8vIH1cblxuICAgIC8vIEVuZCB3b3JzdCBoYWNrIGV2YSAvL1xufTtcblxuLypcbiAqIEF0dGFjaGVzIHRoZSBzaGFkZXJzIGFuZCBjcmVhdGVzIHRoZSBwcm9ncmFtXG4gKiBAcmV0dXJuIHtXZWJHTFByb2dyYW19XG4gKi9cblNoYWRlci5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIHZhciBnbFZlcnRTaGFkZXIgPSB0aGlzLl9nbENvbXBpbGUoZ2wuVkVSVEVYX1NIQURFUiwgdGhpcy52ZXJ0ZXhTcmMpO1xuICAgIHZhciBnbEZyYWdTaGFkZXIgPSB0aGlzLl9nbENvbXBpbGUoZ2wuRlJBR01FTlRfU0hBREVSLCB0aGlzLmZyYWdtZW50U3JjKTtcblxuICAgIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsVmVydFNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsRnJhZ1NoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAvLyBpZiBsaW5raW5nIGZhaWxzLCB0aGVuIGxvZyBhbmQgY2xlYW51cFxuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpXG4gICAge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdQaXhpLmpzIEVycm9yOiBDb3VsZCBub3QgaW5pdGlhbGl6ZSBzaGFkZXIuJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dsLlZBTElEQVRFX1NUQVRVUycsIGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuVkFMSURBVEVfU1RBVFVTKSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dsLmdldEVycm9yKCknLCBnbC5nZXRFcnJvcigpKTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHByb2dyYW0gaW5mbyBsb2csIGxvZyBpdFxuICAgICAgICBpZiAoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgIT09ICcnKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BpeGkuanMgV2FybmluZzogZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coKScsIGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHByb2dyYW0gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIHNvbWUgc2hhZGVyc1xuICAgIGdsLmRlbGV0ZVNoYWRlcihnbFZlcnRTaGFkZXIpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihnbEZyYWdTaGFkZXIpO1xuXG4gICAgcmV0dXJuICh0aGlzLnByb2dyYW0gPSBwcm9ncmFtKTtcbn07XG5cbi8qXG5TaGFkZXIucHJvdG90eXBlLmJ1aWxkU3luYyA9IGZ1bmN0aW9uICgpXG57XG4gICAvLyB2YXIgc3RyID0gXCJcIlxuXG4gICAvLyBzdHIgPSAgXCJTaGFkZXIucHJvdG90eXBlLnN5bmNVbmlmb3JtcyA9IGZ1bmN0aW9uKClcIjtcbiAgIC8vIHN0ciArPSBcIntcXG5cIjtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnVuaWZvcm1zKVxuICAgIHtcbiAgICAgICAgdmFyIHVuaWZvcm0gPSB0aGlzLnVuaWZvcm1zW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaWZvcm0udmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVuaWZvcm0odW5pZm9ybSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyggbWFrZVByb3BTZXR0ZXIoIGtleSwgXCIgYmxvb3BcIiwgdW5pZm9ybS50eXBlICkgIClcbiAgLy8gICAgICBPYmplY3QuZGVmXG4gICAgICAgIC8vICAgIGxvY2F0aW9uID0gdW5pZm9ybS5fbG9jYXRpb24sXG4gICAgICAgICAgLy8gIHZhbHVlID0gdW5pZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIC8vaSwgaWw7XG5cbiAgICAvLyAgICBzdHIgKz0gXCJnbC51bmlmb3JtMWkodGhpcy51bmlmb3Jtcy5cIisga2V5ICtcIi5fbG9jYXRpb24sIHRoaXMudW5pZm9ybXMuXCIgKyBrZXkgKyBcIi52YWx1ZSApO1xcblwiXG5cbiAgICB9XG5cbn0qL1xuXG4vKipcbiogQWRkcyBhIG5ldyB1bmlmb3JtXG4qXG4qIEBwYXJhbSB1bmlmb3JtIHtPYmplY3R9IHRoZSBuZXcgdW5pZm9ybSB0byBhdHRhY2hcbiovXG5TaGFkZXIucHJvdG90eXBlLnN5bmNVbmlmb3JtID0gZnVuY3Rpb24gKHVuaWZvcm0pXG57XG4gICAgdmFyIGxvY2F0aW9uID0gdW5pZm9ybS5fbG9jYXRpb24sXG4gICAgICAgIHZhbHVlID0gdW5pZm9ybS52YWx1ZSxcbiAgICAgICAgZ2wgPSB0aGlzLmdsLFxuICAgICAgICBpLCBpbDtcblxuICAgIHN3aXRjaCAodW5pZm9ybS50eXBlKVxuICAgIHtcbiAgICAgICAgLy8gc2luZ2xlIGludCB2YWx1ZVxuICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgY2FzZSAnMWknOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBzaW5nbGUgZmxvYXQgdmFsdWVcbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgIGNhc2UgJzFmJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5KDIpIG9yIEpTIEFycnJheVxuICAgICAgICBjYXNlICcyZic6XG4gICAgICAgICAgICBnbC51bmlmb3JtMmYobG9jYXRpb24sIHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkoMykgb3IgSlMgQXJycmF5XG4gICAgICAgIGNhc2UgJzNmJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZihsb2NhdGlvbiwgdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkoNCkgb3IgSlMgQXJycmF5XG4gICAgICAgIGNhc2UgJzRmJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm00Zihsb2NhdGlvbiwgdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdmFsdWVbM10pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gYSAyRCBQb2ludCBvYmplY3RcbiAgICAgICAgY2FzZSAndjInOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTJmKGxvY2F0aW9uLCB2YWx1ZS54LCB2YWx1ZS55KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGEgM0QgUG9pbnQgb2JqZWN0XG4gICAgICAgIGNhc2UgJ3YzJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZihsb2NhdGlvbiwgdmFsdWUueCwgdmFsdWUueSwgdmFsdWUueik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhIDREIFBvaW50IG9iamVjdFxuICAgICAgICBjYXNlICd2NCc6XG4gICAgICAgICAgICBnbC51bmlmb3JtNGYobG9jYXRpb24sIHZhbHVlLngsIHZhbHVlLnksIHZhbHVlLnosIHZhbHVlLncpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICcxaXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICcyaXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICczaXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gSW50MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICc0aXYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJzFmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnMmZ2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICczZnYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRmxvYXQzMkFycmF5IG9yIEpTIEFycmF5XG4gICAgICAgIGNhc2UgJzRmdic6XG4gICAgICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnbTInOlxuICAgICAgICBjYXNlICdtYXQyJzpcbiAgICAgICAgY2FzZSAnTWF0cml4MmZ2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIHVuaWZvcm0udHJhbnNwb3NlLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBGbG9hdDMyQXJyYXkgb3IgSlMgQXJyYXlcbiAgICAgICAgY2FzZSAnbTMnOlxuICAgICAgICBjYXNlICdtYXQzJzpcbiAgICAgICAgY2FzZSAnTWF0cml4M2Z2JzpcblxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgdW5pZm9ybS50cmFuc3Bvc2UsIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEZsb2F0MzJBcnJheSBvciBKUyBBcnJheVxuICAgICAgICBjYXNlICdtNCc6XG4gICAgICAgIGNhc2UgJ21hdDQnOlxuICAgICAgICBjYXNlICdNYXRyaXg0ZnYnOlxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgdW5pZm9ybS50cmFuc3Bvc2UsIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGEgQ29sb3IgVmFsdWVcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHV0aWxzLmhleDJyZ2IodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtM2YobG9jYXRpb24sIHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gZmxhdCBhcnJheSBvZiBpbnRlZ2VycyAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2l2MSc6XG4gICAgICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBmbGF0IGFycmF5IG9mIGludGVnZXJzIHdpdGggMyB4IE4gc2l6ZSAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2l2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGZsYXQgYXJyYXkgb2YgZmxvYXRzIChKUyBvciB0eXBlZCBhcnJheSlcbiAgICAgICAgY2FzZSAnZnYxJzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGZsYXQgYXJyYXkgb2YgZmxvYXRzIHdpdGggMyB4IE4gc2l6ZSAoSlMgb3IgdHlwZWQgYXJyYXkpXG4gICAgICAgIGNhc2UgJ2Z2JzpcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGFycmF5IG9mIDJEIFBvaW50IG9iamVjdHNcbiAgICAgICAgY2FzZSAndjJ2JzpcbiAgICAgICAgICAgIGlmICghdW5pZm9ybS5fYXJyYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDIgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGlsOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDJdICAgICAgID0gdmFsdWVbaV0ueDtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogMiArIDFdICAgPSB2YWx1ZVtpXS55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB1bmlmb3JtLl9hcnJheSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBhcnJheSBvZiAzRCBQb2ludCBvYmplY3RzXG4gICAgICAgIGNhc2UgJ3Yzdic6XG4gICAgICAgICAgICBpZiAoIXVuaWZvcm0uX2FycmF5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5ID0gbmV3IEZsb2F0MzJBcnJheSgzICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMCwgaWwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiAzXSAgICAgICA9IHZhbHVlW2ldLng7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDMgKyAxXSAgID0gdmFsdWVbaV0ueTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogMyArIDJdICAgPSB2YWx1ZVtpXS56O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHVuaWZvcm0uX2FycmF5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIGFycmF5IG9mIDREIFBvaW50IG9iamVjdHNcbiAgICAgICAgY2FzZSAndjR2JzpcbiAgICAgICAgICAgIGlmICghdW5pZm9ybS5fYXJyYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDQgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGlsOyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDRdICAgICAgID0gdmFsdWVbaV0ueDtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLl9hcnJheVtpICogNCArIDFdICAgPSB2YWx1ZVtpXS55O1xuICAgICAgICAgICAgICAgIHVuaWZvcm0uX2FycmF5W2kgKiA0ICsgMl0gICA9IHZhbHVlW2ldLno7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5fYXJyYXlbaSAqIDQgKyAzXSAgID0gdmFsdWVbaV0udztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB1bmlmb3JtLl9hcnJheSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBQSVhJLlRleHR1cmVcbiAgICAgICAgY2FzZSAndCc6XG4gICAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG5cbiAgICAgICAgICAgIGlmICghdW5pZm9ybS52YWx1ZSB8fCAhdW5pZm9ybS52YWx1ZS5iYXNlVGV4dHVyZS5oYXNMb2FkZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFjdGl2YXRlIHRoaXMgdGV4dHVyZVxuICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbFsnVEVYVFVSRScgKyB0aGlzLnRleHR1cmVDb3VudF0pO1xuXG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHVuaWZvcm0udmFsdWUuYmFzZVRleHR1cmUuX2dsVGV4dHVyZXNbZ2wuaWRdO1xuXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2FtcGxlcjJEKHVuaWZvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiaW5kIHRoZSB0ZXh0dXJlXG4gICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICAgICAgICAgICAgLy8gc2V0IHVuaWZvcm0gdG8gdGV4dHVyZSBpbmRleFxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKHVuaWZvcm0uX2xvY2F0aW9uLCB0aGlzLnRleHR1cmVDb3VudCk7XG5cbiAgICAgICAgICAgIC8vIGluY3JlbWVudCBuZXh0IHRleHR1cmUgaWRcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUNvdW50Kys7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS53YXJuKCdQaXhpLmpzIFNoYWRlciBXYXJuaW5nOiBVbmtub3duIHVuaWZvcm0gdHlwZTogJyArIHVuaWZvcm0udHlwZSk7XG4gICAgfVxufTtcblxuLypcbiAqIFVwZGF0ZXMgdGhlIHNoYWRlciB1bmlmb3JtIHZhbHVlcy5cbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5zeW5jVW5pZm9ybXMgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMudGV4dHVyZUNvdW50ID0gMTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnVuaWZvcm1zKVxuICAgIHtcbiAgICAgICAgdGhpcy5zeW5jVW5pZm9ybSh0aGlzLnVuaWZvcm1zW2tleV0pO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBJbml0aWFsaXNlcyBhIFNhbXBsZXIyRCB1bmlmb3JtICh3aGljaCBtYXkgb25seSBiZSBhdmFpbGFibGUgbGF0ZXIgb24gYWZ0ZXIgaW5pdFVuaWZvcm1zIG9uY2UgdGhlIHRleHR1cmUgaGFzIGxvYWRlZClcbiAqXG4gKi9cblNoYWRlci5wcm90b3R5cGUuaW5pdFNhbXBsZXIyRCA9IGZ1bmN0aW9uICh1bmlmb3JtKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICB2YXIgdGV4dHVyZSA9IHVuaWZvcm0udmFsdWUuYmFzZVRleHR1cmU7XG5cbiAgICBpZighdGV4dHVyZS5oYXNMb2FkZWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cblxuICAgIGlmICh1bmlmb3JtLnRleHR1cmVEYXRhKVxuICAgIHtcblxuICAgICAgICAvL1RPRE8gbW92ZSB0aGlzLi4uXG4gICAgICAgIHZhciBkYXRhID0gdW5pZm9ybS50ZXh0dXJlRGF0YTtcblxuICAgICAgICB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSk7XG5cbiAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCB0ZXh0dXJlLnByZW11bHRpcGxpZWRBbHBoYSk7XG4gICAgICAgIC8vIEdMVGV4dHVyZSA9IG1hZyBsaW5lYXIsIG1pbiBsaW5lYXJfbWlwbWFwX2xpbmVhciwgd3JhcCByZXBlYXQgKyBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICAgICAgLy8gR0xUZXh0dXJlTGluZWFyID0gbWFnL21pbiBsaW5lYXIsIHdyYXAgY2xhbXBcbiAgICAgICAgLy8gR0xUZXh0dXJlTmVhcmVzdFJlcGVhdCA9IG1hZy9taW4gTkVBUkVTVCwgd3JhcCByZXBlYXRcbiAgICAgICAgLy8gR0xUZXh0dXJlTmVhcmVzdCA9IG1hZy9taW4gbmVhcmVzdCwgd3JhcCBjbGFtcFxuICAgICAgICAvLyBBdWRpb1RleHR1cmUgPSB3aGF0ZXZlciArIGx1bWluYW5jZSArIHdpZHRoIDUxMiwgaGVpZ2h0IDIsIGJvcmRlciAwXG4gICAgICAgIC8vIEtleVRleHR1cmUgPSB3aGF0ZXZlciArIGx1bWluYW5jZSArIHdpZHRoIDI1NiwgaGVpZ2h0IDIsIGJvcmRlciAwXG5cbiAgICAgICAgLy8gIG1hZ0ZpbHRlciBjYW4gYmU6IGdsLkxJTkVBUiwgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIgb3IgZ2wuTkVBUkVTVFxuICAgICAgICAvLyAgd3JhcFMvVCBjYW4gYmU6IGdsLkNMQU1QX1RPX0VER0Ugb3IgZ2wuUkVQRUFUXG5cbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBkYXRhLmx1bWluYW5jZSA/IGdsLkxVTUlOQU5DRSA6IGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHRleHR1cmUuc291cmNlKTtcblxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZGF0YS5tYWdGaWx0ZXIgPyBkYXRhLm1hZ0ZpbHRlciA6IGdsLkxJTkVBUiApO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZGF0YS53cmFwUyA/IGRhdGEud3JhcFMgOiBnbC5DTEFNUF9UT19FREdFICk7XG5cbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZGF0YS53cmFwUyA/IGRhdGEud3JhcFMgOiBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZGF0YS53cmFwVCA/IGRhdGEud3JhcFQgOiBnbC5DTEFNUF9UT19FREdFKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5zaGFkZXJNYW5hZ2VyLnJlbmRlcmVyLnVwZGF0ZVRleHR1cmUodGV4dHVyZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgc2hhZGVyLlxuICpcbiAqL1xuU2hhZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIHRoaXMudW5pZm9ybXMgPSBudWxsO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG51bGw7XG5cbiAgICB0aGlzLnZlcnRleFNyYyA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudFNyYyA9IG51bGw7XG59O1xuXG5TaGFkZXIucHJvdG90eXBlLl9nbENvbXBpbGUgPSBmdW5jdGlvbiAodHlwZSwgc3JjKVxue1xuICAgIHZhciBzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc3JjKTtcbiAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmdsLkNPTVBJTEVfU1RBVFVTKSlcbiAgICB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLmdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG59O1xuIiwidmFyIFNoYWRlciA9IHJlcXVpcmUoJy4vU2hhZGVyJyk7XG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgU2hhZGVyXG4gKiBAcGFyYW0gc2hhZGVyTWFuYWdlciB7U2hhZGVyTWFuYWdlcn0gVGhlIHdlYmdsIHNoYWRlciBtYW5hZ2VyIHRoaXMgc2hhZGVyIHdvcmtzIGZvci5cbiAqIEBwYXJhbSBbdmVydGV4U3JjXSB7c3RyaW5nfSBUaGUgc291cmNlIG9mIHRoZSB2ZXJ0ZXggc2hhZGVyLlxuICogQHBhcmFtIFtmcmFnbWVudFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIFtjdXN0b21Vbmlmb3Jtc10ge29iamVjdH0gQ3VzdG9tIHVuaWZvcm1zIHRvIHVzZSB0byBhdWdtZW50IHRoZSBidWlsdC1pbiBvbmVzLlxuICogQHBhcmFtIFtmcmFnbWVudFNyY10ge3N0cmluZ30gVGhlIHNvdXJjZSBvZiB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICovXG5mdW5jdGlvbiBUZXh0dXJlU2hhZGVyKHNoYWRlck1hbmFnZXIsIHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIGN1c3RvbVVuaWZvcm1zLCBjdXN0b21BdHRyaWJ1dGVzKVxue1xuICAgIHZhciB1bmlmb3JtcyA9IHtcblxuICAgICAgICB1U2FtcGxlcjogICAgICAgICAgIHsgdHlwZTogJ3NhbXBsZXIyRCcsIHZhbHVlOiAwIH0sXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXg6ICAgeyB0eXBlOiAnbWF0MycsIHZhbHVlOiBuZXcgRmxvYXQzMkFycmF5KDEsIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEpIH1cbiAgICB9O1xuXG4gICAgaWYgKGN1c3RvbVVuaWZvcm1zKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgdSBpbiBjdXN0b21Vbmlmb3JtcylcbiAgICAgICAge1xuICAgICAgICAgICAgdW5pZm9ybXNbdV0gPSBjdXN0b21Vbmlmb3Jtc1t1XTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGFWZXJ0ZXhQb3NpdGlvbjogICAgMCxcbiAgICAgICAgYVRleHR1cmVDb29yZDogICAgICAwLFxuICAgICAgICBhQ29sb3I6ICAgICAgICAgICAgIDBcbiAgICB9O1xuXG4gICAgaWYgKGN1c3RvbUF0dHJpYnV0ZXMpXG4gICAge1xuICAgICAgICBmb3IgKHZhciBhIGluIGN1c3RvbUF0dHJpYnV0ZXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbYV0gPSBjdXN0b21BdHRyaWJ1dGVzW2FdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRleCBzaGFkZXIuXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdmVydGV4U3JjID0gdmVydGV4U3JjIHx8IFRleHR1cmVTaGFkZXIuZGVmYXVsdFZlcnRleFNyYztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFnbWVudCBzaGFkZXIuXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgZnJhZ21lbnRTcmMgPSBmcmFnbWVudFNyYyB8fCBUZXh0dXJlU2hhZGVyLmRlZmF1bHRGcmFnbWVudFNyYztcblxuICAgIFNoYWRlci5jYWxsKHRoaXMsIHNoYWRlck1hbmFnZXIsIHZlcnRleFNyYywgZnJhZ21lbnRTcmMsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKTtcbn1cblxuLy8gY29uc3RydWN0b3JcblRleHR1cmVTaGFkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTaGFkZXIucHJvdG90eXBlKTtcblRleHR1cmVTaGFkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGV4dHVyZVNoYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNoYWRlcjtcblxuVGV4dHVyZVNoYWRlci5kZWZhdWx0VmVydGV4U3JjID0gW1xuICAgICdwcmVjaXNpb24gbG93cCBmbG9hdDsnLFxuICAgICdhdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247JyxcbiAgICAnYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDsnLFxuICAgICdhdHRyaWJ1dGUgdmVjNCBhQ29sb3I7JyxcblxuICAgICd1bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDsnLFxuXG4gICAgJ3ZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgJ3ZhcnlpbmcgdmVjNCB2Q29sb3I7JyxcblxuICAgICd2b2lkIG1haW4odm9pZCl7JyxcbiAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24sIDEuMCkpLnh5LCAwLjAsIDEuMCk7JyxcbiAgICAnICAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7JyxcbiAgICAnICAgdkNvbG9yID0gdmVjNChhQ29sb3IucmdiICogYUNvbG9yLmEsIGFDb2xvci5hKTsnLFxuICAgICd9J1xuXS5qb2luKCdcXG4nKTtcblxuVGV4dHVyZVNoYWRlci5kZWZhdWx0RnJhZ21lbnRTcmMgPSBbXG4gICAgJ3ByZWNpc2lvbiBsb3dwIGZsb2F0OycsXG5cbiAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAndmFyeWluZyB2ZWM0IHZDb2xvcjsnLFxuXG4gICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsXG5cbiAgICAndm9pZCBtYWluKHZvaWQpeycsXG4gICAgJyAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZCkgKiB2Q29sb3IgOycsXG4gICAgJ30nXG5dLmpvaW4oJ1xcbicpO1xuIiwidmFyIFdlYkdMTWFuYWdlciA9IHJlcXVpcmUoJy4uL21hbmFnZXJzL1dlYkdMTWFuYWdlcicpO1xuXG4vKipcbiAqIEJhc2UgZm9yIGEgY29tbW9uIG9iamVjdCByZW5kZXJlciB0aGF0IGNhbiBiZSB1c2VkIGFzIGEgc3lzdGVtIHJlbmRlcmVyIHBsdWdpbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIFdlYkdMTWFuYWdlclxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgb2JqZWN0IHJlbmRlcmVyIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gT2JqZWN0UmVuZGVyZXIocmVuZGVyZXIpXG57XG4gICAgV2ViR0xNYW5hZ2VyLmNhbGwodGhpcywgcmVuZGVyZXIpO1xufVxuXG5cbk9iamVjdFJlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV2ViR0xNYW5hZ2VyLnByb3RvdHlwZSk7XG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPYmplY3RSZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0UmVuZGVyZXI7XG5cbi8qKlxuICogU3RhcnRzIHRoZSByZW5kZXJlciBhbmQgc2V0cyB0aGUgc2hhZGVyXG4gKlxuICovXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIHNldCB0aGUgc2hhZGVyLi5cbn07XG5cbi8qKlxuICogU3RvcHMgdGhlIHJlbmRlcmVyXG4gKlxuICovXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5mbHVzaCgpO1xufTtcblxuLyoqXG4gKiBmbHVzaGVzXG4gKlxuICovXG5PYmplY3RSZW5kZXJlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKVxue1xuICAgIC8vIGZsdXNoIVxufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG9iamVjdFxuICpcbiAqL1xuT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChvYmplY3QpXG57XG4gICAgLy8gcmVuZGVyIHRoZSBvYmplY3Rcbn07XG4iLCIvKipcbiAqIEhlbHBlciBjbGFzcyB0byBjcmVhdGUgYSBxdWFkXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGdsIGNvbnRleHQgZm9yIHRoaXMgcXVhZCB0byB1c2UuXG4gKi9cbmZ1bmN0aW9uIFF1YWQoZ2wpXG57XG4gICAgLypcbiAgICAgKiB0aGUgY3VycmVudCBXZWJHTCBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKi9cbiAgICB0aGlzLmdsID0gZ2w7XG5cbi8vICAgIHRoaXMudGV4dHVyZXMgPSBuZXcgVGV4dHVyZVV2cygpO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdmVydGljZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Zsb2F0MzJBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDAsMCxcbiAgICAgICAgMjAwLDAsXG4gICAgICAgIDIwMCwyMDAsXG4gICAgICAgIDAsMjAwXG4gICAgXSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVXZzIG9mIHRoZSBxdWFkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtGbG9hdDMyQXJyYXl9XG4gICAgICovXG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMCwwLFxuICAgICAgICAxLDAsXG4gICAgICAgIDEsMSxcbiAgICAgICAgMCwxXG4gICAgXSk7XG5cbi8vICAgIHZhciB3aGl0ZSA9ICgweEZGRkZGRiA+PiAxNikgKyAoMHhGRkZGRkYgJiAweGZmMDApICsgKCgweEZGRkZGRiAmIDB4ZmYpIDw8IDE2KSArICgxICogMjU1IDw8IDI0KTtcbiAgICAvL1RPRE8gY29udmVydCB0aGlzIHRvIGEgMzIgdW5zaWduZWQgaW50IGFycmF5XG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIGNvbXBvbmVudHMgb2YgdGhlIHRyaWFuZ2xlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7RmxvYXQzMkFycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEsMSwxLDEsXG4gICAgICAgIDEsMSwxLDEsXG4gICAgICAgIDEsMSwxLDEsXG4gICAgICAgIDEsMSwxLDFcbiAgICBdKTtcblxuICAgIC8qXG4gICAgICogQG1lbWJlciB7VWludDE2QXJyYXl9IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGluZGljZXMgb2YgdGhlIHZlcnRpY2VzXG4gICAgICovXG4gICAgdGhpcy5pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMywgMlxuICAgIF0pO1xuXG4gICAgLypcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn0gVGhlIHZlcnRleCBidWZmZXJcbiAgICAgKi9cbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLypcbiAgICAgKiBAbWVtYmVyIHtXZWJHTEJ1ZmZlcn0gVGhlIGluZGV4IGJ1ZmZlclxuICAgICAqL1xuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsICg4ICsgOCArIDE2KSAqIDQsIGdsLkRZTkFNSUNfRFJBVyk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHRoaXMudXBsb2FkKCk7XG59XG5cblF1YWQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUXVhZDtcblxuLyoqXG4gKiBNYXBzIHR3byBSZWN0YW5nbGUgdG8gdGhlIHF1YWRcbiAqIEBwYXJhbSByZWN0IHtSZWN0YW5nbGV9IHRoZSBmaXJzdCByZWN0YW5nbGVcbiAqIEBwYXJhbSByZWN0MiB7UmVjdGFuZ2xlfSB0aGUgc2Vjb25kIHJlY3RhbmdsZVxuICovXG5RdWFkLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbihyZWN0LCByZWN0MilcbntcbiAgICB2YXIgeCA9IDA7IC8vcmVjdDIueCAvIHJlY3Qud2lkdGg7XG4gICAgdmFyIHkgPSAwOyAvL3JlY3QyLnkgLyByZWN0LmhlaWdodDtcblxuICAgIHRoaXMudXZzWzBdID0geDtcbiAgICB0aGlzLnV2c1sxXSA9IHk7XG5cbiAgICB0aGlzLnV2c1syXSA9IHggKyByZWN0Mi53aWR0aCAvIHJlY3Qud2lkdGg7XG4gICAgdGhpcy51dnNbM10gPSB5O1xuXG4gICAgdGhpcy51dnNbNF0gPSB4ICsgcmVjdDIud2lkdGggLyByZWN0LndpZHRoO1xuICAgIHRoaXMudXZzWzVdID0geSArIHJlY3QyLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuXG4gICAgdGhpcy51dnNbNl0gPSB4O1xuICAgIHRoaXMudXZzWzddID0geSArIHJlY3QyLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuXG4gICAgLy8vIC0tLS0tXG4gICAgeCA9IHJlY3QyLng7XG4gICAgeSA9IHJlY3QyLnk7XG5cbiAgICB0aGlzLnZlcnRpY2VzWzBdID0geDtcbiAgICB0aGlzLnZlcnRpY2VzWzFdID0geTtcblxuICAgIHRoaXMudmVydGljZXNbMl0gPSB4ICsgcmVjdDIud2lkdGg7XG4gICAgdGhpcy52ZXJ0aWNlc1szXSA9IHk7XG5cbiAgICB0aGlzLnZlcnRpY2VzWzRdID0geCArIHJlY3QyLndpZHRoO1xuICAgIHRoaXMudmVydGljZXNbNV0gPSB5ICsgcmVjdDIuaGVpZ2h0O1xuXG4gICAgdGhpcy52ZXJ0aWNlc1s2XSA9IHg7XG4gICAgdGhpcy52ZXJ0aWNlc1s3XSA9IHkgKyByZWN0Mi5oZWlnaHQ7XG5cbiAgICB0aGlzLnVwbG9hZCgpO1xufTtcblxuLyoqXG4gKiBCaW5kcyB0aGUgYnVmZmVyIGFuZCB1cGxvYWRzIHRoZSBkYXRhXG4gKi9cblF1YWQucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgLy8gVE9ETyBjb3VsZCBwcm9iYWJseSBiZSBwdXNoZWQgaW50byBvbmUgdXBsb2FkIVxuICAgIGdsLmJpbmRCdWZmZXIoIGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIgKTtcblxuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCAwLCB0aGlzLnZlcnRpY2VzKTtcblxuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCA4ICogNCwgdGhpcy51dnMpO1xuXG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsICg4ICsgOCkgKiA0LCB0aGlzLmNvbG9ycyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1YWQ7XG5cblxuIiwidmFyIG1hdGggPSByZXF1aXJlKCcuLi8uLi8uLi9tYXRoJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QnKSxcbiAgICAvL1N0ZW5jaWxNYW5hZ2VyID0gcmVxdWlyZSgnLi4vbWFuYWdlcnMvU3RlbmNpbE1hbmFnZXInKSxcbiAgICBTdGVuY2lsTWFza1N0YWNrID0gcmVxdWlyZSgnLi9TdGVuY2lsTWFza1N0YWNrJyk7XG5cbi8qKlxuICogQGF1dGhvciBNYXQgR3JvdmVzIGh0dHA6Ly9tYXRncm92ZXMuY29tLyBARG9vcm1hdDIzXG4gKi9cblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKiBAcGFyYW0gd2lkdGgge251bWJlcn0gdGhlIGhvcml6b250YWwgcmFuZ2Ugb2YgdGhlIGZpbHRlclxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSB0aGUgdmVydGljYWwgcmFuZ2Ugb2YgdGhlIGZpbHRlclxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fVBJWEkuc2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEBwYXJhbSByZXNvbHV0aW9uIHtudW1iZXJ9IHRoZSBjdXJyZW50IHJlc29sdXRpb25cbiAqIEBwYXJhbSByb290IHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIHRoZSByb290IGVsZW1lbnQgb3Igbm90XG4gKi9cbnZhciBSZW5kZXJUYXJnZXQgPSBmdW5jdGlvbihnbCwgd2lkdGgsIGhlaWdodCwgc2NhbGVNb2RlLCByZXNvbHV0aW9uLCByb290KVxue1xuICAgIC8vVE9ETyBSZXNvbHV0aW9uIGNvdWxkIGdvIGhlcmUgKCBlZyBsb3cgcmVzIGJsdXJzIClcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IFdlYkdMIGRyYXdpbmcgY29udGV4dFxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyaW5nQ29udGV4dH1cbiAgICAgKi9cbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICAvLyBuZXh0IHRpbWUgdG8gY3JlYXRlIGEgZnJhbWUgYnVmZmVyIGFuZCB0ZXh0dXJlXG5cbiAgICAvKipcbiAgICAgKiBBIGZyYW1lIGJ1ZmZlclxuICAgICAqIEBtZW1iZXIge1dlYkdMRnJhbWVCdWZmZXJ9XG4gICAgICovXG4gICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUZXh0dXJlfVxuICAgICAqL1xuICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgb2JqZWN0IGFzIGEgcmVjdGFuZ2xlXG4gICAgICogQG1lbWJlciB7UmVjdGFuZ2xlfVxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJlc29sdXRpb25cbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbiB8fCBDT05TVC5SRVNPTFVUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb2plY3Rpb24gbWF0cml4XG4gICAgICogQG1lbWJlciB7TWF0cml4fVxuICAgICAqL1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBtYXRoLk1hdHJpeCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9iamVjdCdzIHRyYW5zZm9ybVxuICAgICAqIEBtZW1iZXIge01hdHJpeH1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICB0aGlzLmZyYW1lID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGVuY2lsIGJ1ZmZlciBzdG9yZXMgbWFza2luZyBkYXRhIGZvciB0aGUgcmVuZGVyIHRhcmdldFxuICAgICAqIEBtZW1iZXIge1dlYkdMUmVuZGVyQnVmZmVyfVxuICAgICAqL1xuICAgIHRoaXMuc3RlbmNpbEJ1ZmZlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHRoZSBzdGVuY2lsIG1hc2tzXG4gICAgICogQG1lbWJlciB7U3RlbmNpbE1hc2tTdGFja31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZW5jaWxNYXNrU3RhY2sgPSBuZXcgU3RlbmNpbE1hc2tTdGFjaygpO1xuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIGZpbHRlciBkYXRhIGZvciB0aGUgcmVuZGVyIHRhcmdldFxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyU3RhY2sgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlclRhcmdldDp0aGlzLFxuICAgICAgICAgICAgZmlsdGVyOltdLFxuICAgICAgICAgICAgYm91bmRzOnRoaXMuc2l6ZVxuICAgICAgICB9XG4gICAgXTtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjYWxlIG1vZGVcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgQ09OU1QuU0NBTEVfTU9ERVMuREVGQVVMVFxuICAgICAqL1xuICAgIHRoaXMuc2NhbGVNb2RlID0gc2NhbGVNb2RlIHx8IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIHRoZSByb290IGVsZW1lbnQgb3Igbm90XG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSByb290O1xuXG4gICAgaWYgKCF0aGlzLnJvb3QpXG4gICAge1xuICAgICAgIC8vIHRoaXMuZmxpcFkgPSB0cnVlO1xuICAgICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQSBmcmFtZSBidWZmZXIgbmVlZHMgYSB0YXJnZXQgdG8gcmVuZGVyIHRvLi5cbiAgICAgICAgICAgIGNyZWF0ZSBhIHRleHR1cmUgYW5kIGJpbmQgaXQgYXR0YWNoIGl0IHRvIHRoZSBmcmFtZWJ1ZmZlci4uXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCAgdGhpcy50ZXh0dXJlKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHNjYWxlIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuLlxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgc2NhbGVNb2RlID09PSBDT05TVC5TQ0FMRV9NT0RFUy5MSU5FQVIgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHNjYWxlTW9kZSA9PT0gQ09OU1QuU0NBTEVfTU9ERVMuTElORUFSID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSB0ZXh0dXJlIGlzIGEgcG93ZXIgb2YgdHdvIVxuICAgICAgICB2YXIgaXNQb3dlck9mVHdvID0gdXRpbHMuaXNQb3dlck9mVHdvKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vVE9ETyBmb3IgOTklIG9mIHVzZSBjYXNlcyBpZiBhIHRleHR1cmUgaXMgcG93ZXIgb2YgdHdvIHdlIHNob3VsZCB0aWxlIHRoZSB0ZXh0dXJlLi4uXG4gICAgICAgICBpZiAoIWlzUG93ZXJPZlR3bylcbiAgICAgICAge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcblxuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuUkVQRUFUKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLlJFUEVBVCk7XG4gICAgICAgIH1cblxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIgKTtcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUsIDApO1xuICAgIH1cblxuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG59O1xuXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVuZGVyVGFyZ2V0O1xubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJUYXJnZXQ7XG5cbi8qKlxuKiBDbGVhcnMgdGhlIGZpbHRlciB0ZXh0dXJlLlxuKlxuKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihiaW5kKVxue1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgaWYoYmluZClcbiAgICB7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XG4gICAgfVxuXG4gICAgZ2wuY2xlYXJDb2xvcigwLDAsMCwwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbn07XG5cbi8qKlxuKiBCaW5kcyB0aGUgc3RlbmNpbCBidWZmZXIuXG4qXG4qL1xuUmVuZGVyVGFyZ2V0LnByb3RvdHlwZS5hdHRhY2hTdGVuY2lsQnVmZmVyID0gZnVuY3Rpb24oKVxue1xuXG4gICAgaWYgKCB0aGlzLnN0ZW5jaWxCdWZmZXIgKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFRoZSBzdGVuY2lsIGJ1ZmZlciBpcyB1c2VkIGZvciBtYXNraW5nIGluIHBpeGlcbiAgICAgICAgbGV0cyBjcmVhdGUgb25lIGFuZCB0aGVuIGFkZCBhdHRhY2ggaXQgdG8gdGhlIGZyYW1lYnVmZmVyLi5cbiAgICAgKi9cbiAgICBpZiAoIXRoaXMucm9vdClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAgICAgdGhpcy5zdGVuY2lsQnVmZmVyID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCB0aGlzLnN0ZW5jaWxCdWZmZXIpO1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULCBnbC5SRU5ERVJCVUZGRVIsIHRoaXMuc3RlbmNpbEJ1ZmZlcik7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9TVEVOQ0lMLCAgdGhpcy5zaXplLndpZHRoICogdGhpcy5yZXNvbHV0aW9uICAsIHRoaXMuc2l6ZS5oZWlnaHQgKiB0aGlzLnJlc29sdXRpb24gKTtcbiAgICB9XG59O1xuXG4vKipcbiogQmluZHMgdGhlIGJ1ZmZlcnMgYW5kIGluaXRpYWxpc2VzIHRoZSB2aWV3cG9ydC5cbipcbiovXG5SZW5kZXJUYXJnZXQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKVxue1xuICAgIC8vVE9PRCByZWZhY3RvciB1c2FnZSBvZiBmcmFtZS4uXG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XG5cbiAgICB2YXIgcHJvamVjdGlvbkZyYW1lID0gdGhpcy5mcmFtZSB8fCB0aGlzLnNpemU7XG5cbiAgICAvLyBUT0RPIGFkZCBhIGRpcnR5IGZsYWcgdG8gdGhpcyBvZiBhIHNldHRlciBmb3IgdGhlIGZyYW1lP1xuICAgIHRoaXMuY2FsY3VsYXRlUHJvamVjdGlvbiggcHJvamVjdGlvbkZyYW1lICk7XG5cbiAgICBpZih0aGlzLnRyYW5zZm9ybSlcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeC5hcHBlbmQodGhpcy50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGdsLnZpZXdwb3J0KDAsMCwgcHJvamVjdGlvbkZyYW1lLndpZHRoICogdGhpcy5yZXNvbHV0aW9uLCBwcm9qZWN0aW9uRnJhbWUuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uKTtcbn07XG5cbi8qKlxuKiBVcGRhdGVzIHRoZSBwcm9qZWN0aW9uIG1hdHJpeCBiYXNlZCBvbiBhIHByb2plY3Rpb24gZnJhbWUgKHdoaWNoIGlzIGEgcmVjdGFuZ2xlKVxuKlxuKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuY2FsY3VsYXRlUHJvamVjdGlvbiA9IGZ1bmN0aW9uKCBwcm9qZWN0aW9uRnJhbWUgKVxue1xuICAgIHZhciBwbSA9IHRoaXMucHJvamVjdGlvbk1hdHJpeDtcblxuICAgIHBtLmlkZW50aXR5KCk7XG5cbiAgICBpZiAoIXRoaXMucm9vdClcbiAgICB7XG4gICAgICAgIHBtLmEgPSAxIC8gcHJvamVjdGlvbkZyYW1lLndpZHRoKjI7XG4gICAgICAgIHBtLmQgPSAxIC8gcHJvamVjdGlvbkZyYW1lLmhlaWdodCoyO1xuXG4gICAgICAgIHBtLnR4ID0gLTEgLSBwcm9qZWN0aW9uRnJhbWUueCAqIHBtLmE7XG4gICAgICAgIHBtLnR5ID0gLTEgLSBwcm9qZWN0aW9uRnJhbWUueSAqIHBtLmQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHBtLmEgPSAxIC8gcHJvamVjdGlvbkZyYW1lLndpZHRoKjI7XG4gICAgICAgIHBtLmQgPSAtMSAvIHByb2plY3Rpb25GcmFtZS5oZWlnaHQqMjtcblxuICAgICAgICBwbS50eCA9IC0xIC0gcHJvamVjdGlvbkZyYW1lLnggKiBwbS5hO1xuICAgICAgICBwbS50eSA9IDEgLSBwcm9qZWN0aW9uRnJhbWUueSAqIHBtLmQ7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFJlc2l6ZXMgdGhlIHRleHR1cmUgdG8gdGhlIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0XG4gKlxuICogQHBhcmFtIHdpZHRoIHtOdW1iZXJ9IHRoZSBuZXcgd2lkdGggb2YgdGhlIHRleHR1cmVcbiAqIEBwYXJhbSBoZWlnaHQge051bWJlcn0gdGhlIG5ldyBoZWlnaHQgb2YgdGhlIHRleHR1cmVcbiAqL1xuUmVuZGVyVGFyZ2V0LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KVxue1xuICAgIHdpZHRoID0gd2lkdGggfCAwO1xuICAgIGhlaWdodCA9IGhlaWdodCB8IDA7XG5cbiAgICBpZiAodGhpcy5zaXplLndpZHRoID09PSB3aWR0aCAmJiB0aGlzLnNpemUuaGVpZ2h0ID09PSBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2l6ZS53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuc2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMucm9vdClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCAgd2lkdGggKiB0aGlzLnJlc29sdXRpb24sIGhlaWdodCAqIHRoaXMucmVzb2x1dGlvbiAsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ZW5jaWxCdWZmZXIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHN0ZW5jaWwgYnVmZmVyIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCB0aGlzLnN0ZW5jaWxCdWZmZXIpO1xuICAgICAgICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShnbC5SRU5ERVJCVUZGRVIsIGdsLkRFUFRIX1NURU5DSUwsICB3aWR0aCAqIHRoaXMucmVzb2x1dGlvbiwgaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvamVjdGlvbkZyYW1lID0gdGhpcy5mcmFtZSB8fCB0aGlzLnNpemU7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZVByb2plY3Rpb24oIHByb2plY3Rpb25GcmFtZSApO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcmVuZGVyIHRhcmdldC5cbiAqXG4gKi9cblJlbmRlclRhcmdldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgIGdsLmRlbGV0ZUZyYW1lYnVmZmVyKCB0aGlzLmZyYW1lQnVmZmVyICk7XG4gICAgZ2wuZGVsZXRlVGV4dHVyZSggdGhpcy50ZXh0dXJlICk7XG5cbiAgICB0aGlzLmZyYW1lQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xufTtcbiIsIi8qKlxuICogR2VuZXJpYyBNYXNrIFN0YWNrIGRhdGEgc3RydWN0dXJlXG4gKiBAY2xhc3NcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge1dlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB0aGlzIG1hbmFnZXIgd29ya3MgZm9yLlxuICovXG5mdW5jdGlvbiBTdGVuY2lsTWFza1N0YWNrKClcbntcblx0LyoqXG4gICAgICogVGhlIGFjdHVhbCBzdGFja1xuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5zdGVuY2lsU3RhY2sgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8gQGFsdmluXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmV2ZXJzZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBjb3VudFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY291bnQgPSAwO1xufVxuXG5TdGVuY2lsTWFza1N0YWNrLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0ZW5jaWxNYXNrU3RhY2s7XG5tb2R1bGUuZXhwb3J0cyA9IFN0ZW5jaWxNYXNrU3RhY2s7XG4iLCJ2YXIgbWF0aCA9IHJlcXVpcmUoJy4uL21hdGgnKSxcbiAgICBUZXh0dXJlID0gcmVxdWlyZSgnLi4vdGV4dHVyZXMvVGV4dHVyZScpLFxuICAgIENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQ29udGFpbmVyJyksXG4gICAgQ2FudmFzVGludGVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL2NhbnZhcy91dGlscy9DYW52YXNUaW50ZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpLFxuICAgIHRlbXBQb2ludCA9IG5ldyBtYXRoLlBvaW50KCk7XG5cbi8qKlxuICogVGhlIFNwcml0ZSBvYmplY3QgaXMgdGhlIGJhc2UgZm9yIGFsbCB0ZXh0dXJlZCBvYmplY3RzIHRoYXQgYXJlIHJlbmRlcmVkIHRvIHRoZSBzY3JlZW5cbiAqXG4gKiBBIHNwcml0ZSBjYW4gYmUgY3JlYXRlZCBkaXJlY3RseSBmcm9tIGFuIGltYWdlIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9pbWFnZS5wbmcnKTtcbiAqIGBgYFxuICpcbiAqIEBjbGFzc1xuICogQGV4dGVuZHMgQ29udGFpbmVyXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9IFRoZSB0ZXh0dXJlIGZvciB0aGlzIHNwcml0ZVxuICovXG5mdW5jdGlvbiBTcHJpdGUodGV4dHVyZSlcbntcbiAgICBDb250YWluZXIuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbmNob3Igc2V0cyB0aGUgb3JpZ2luIHBvaW50IG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIDAsMCB0aGlzIG1lYW5zIHRoZSB0ZXh0dXJlJ3Mgb3JpZ2luIGlzIHRoZSB0b3AgbGVmdFxuICAgICAqIFNldHRpbmcgdGhlIGFuY2hvciB0byAwLjUsMC41IG1lYW5zIHRoZSB0ZXh0dXJlJ3Mgb3JpZ2luIGlzIGNlbnRlcmVkXG4gICAgICogU2V0dGluZyB0aGUgYW5jaG9yIHRvIDEsMSB3b3VsZCBtZWFuIHRoZSB0ZXh0dXJlJ3Mgb3JpZ2luIHBvaW50IHdpbGwgYmUgdGhlIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1BvaW50fVxuICAgICAqL1xuICAgIHRoaXMuYW5jaG9yID0gbmV3IG1hdGguUG9pbnQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0dXJlIHRoYXQgdGhlIHNwcml0ZSBpcyB1c2luZ1xuICAgICAqXG4gICAgICogQG1lbWJlciB7VGV4dHVyZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBzcHJpdGUgKHRoaXMgaXMgaW5pdGlhbGx5IHNldCBieSB0aGUgdGV4dHVyZSlcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHNwcml0ZSAodGhpcyBpcyBpbml0aWFsbHkgc2V0IGJ5IHRoZSB0ZXh0dXJlKVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW50IGFwcGxpZWQgdG8gdGhlIHNwcml0ZS4gVGhpcyBpcyBhIGhleCB2YWx1ZS4gQSB2YWx1ZSBvZiAweEZGRkZGRiB3aWxsIHJlbW92ZSBhbnkgdGludCBlZmZlY3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgWzB4RkZGRkZGXVxuICAgICAqL1xuICAgIHRoaXMudGludCA9IDB4RkZGRkZGO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJsZW5kIG1vZGUgdG8gYmUgYXBwbGllZCB0byB0aGUgc3ByaXRlLiBBcHBseSBhIHZhbHVlIG9mIGJsZW5kTW9kZXMuTk9STUFMIHRvIHJlc2V0IHRoZSBibGVuZCBtb2RlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZSA9IENPTlNULkJMRU5EX01PREVTLk5PUk1BTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaGFkZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBzcHJpdGUuIFNldCB0byBudWxsIHRvIHJlbW92ZSBhIGN1cnJlbnQgc2hhZGVyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QWJzdHJhY3RGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgY2FjaGVkIHZhbHVlIG9mIHRoZSB0aW50LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IFsweEZGRkZGRl1cbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlZFRpbnQgPSAweEZGRkZGRjtcblxuICAgIC8vIGNhbGwgdGV4dHVyZSBzZXR0ZXJcbiAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlIHx8IFRleHR1cmUuRU1QVFk7XG59XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyBzcHJpdGUgYW5kIG9wdGlvbmFsbHkgaXRzIHRleHR1cmVcbiAqXG4gKiBAcGFyYW0gZGVzdHJveVRleHR1cmUge2Jvb2xlYW59IFNob3VsZCBpdCBkZXN0cm95IHRoZSBjdXJyZW50IHRleHR1cmUgb2YgdGhlIHNwcml0ZSBhcyB3ZWxsXG4gKiBAcGFyYW0gZGVzdHJveUJhc2VUZXh0dXJlIHtib29sZWFufSBTaG91bGQgaXQgZGVzdHJveSB0aGUgYmFzZSB0ZXh0dXJlIG9mIHRoZSBzcHJpdGUgYXMgd2VsbFxuICovXG5TcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZGVzdHJveVRleHR1cmUsIGRlc3Ryb3lCYXNlVGV4dHVyZSlcbntcbiAgICBDb250YWluZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuYW5jaG9yID0gbnVsbDtcblxuICAgIGlmIChkZXN0cm95VGV4dHVyZSlcbiAgICB7XG4gICAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveShkZXN0cm95QmFzZVRleHR1cmUpO1xuICAgIH1cblxuICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcbn07XG5cbi8vIGNvbnN0cnVjdG9yXG5TcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb250YWluZXIucHJvdG90eXBlKTtcblNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpdGU7XG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU3ByaXRlLnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgc3ByaXRlLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlclxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGUjXG4gICAgICovXG4gICAgd2lkdGg6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS54ICogdGhpcy50ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHZhbHVlIC8gdGhpcy50ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgc3ByaXRlLCBzZXR0aW5nIHRoaXMgd2lsbCBhY3R1YWxseSBtb2RpZnkgdGhlIHNjYWxlIHRvIGFjaGlldmUgdGhlIHZhbHVlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlclxuICAgICAqIEBtZW1iZXJvZiBTcHJpdGUjXG4gICAgICovXG4gICAgaGVpZ2h0OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICB0aGlzLnNjYWxlLnkgKiB0aGlzLnRleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHZhbHVlIC8gdGhpcy50ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBzcHJpdGUsIHNldHRpbmcgdGhpcyB3aWxsIGFjdHVhbGx5IG1vZGlmeSB0aGUgc2NhbGUgdG8gYWNoaWV2ZSB0aGUgdmFsdWUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQG1lbWJlcm9mIFNwcml0ZSNcbiAgICAgKi9cbiAgICB0ZXh0dXJlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICB0aGlzLl90ZXh0dXJlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RleHR1cmUgPT09IHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRUaW50ID0gMHhGRkZGRkY7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgdGV4dHVyZSB0byBsb2FkXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmJhc2VUZXh0dXJlLmhhc0xvYWRlZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uVGV4dHVyZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5vbmNlKCd1cGRhdGUnLCB0aGlzLl9vblRleHR1cmVVcGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogV2hlbiB0aGUgdGV4dHVyZSBpcyB1cGRhdGVkLCB0aGlzIGV2ZW50IHdpbGwgZmlyZSB0byB1cGRhdGUgdGhlIHNjYWxlIGFuZCBmcmFtZVxuICpcbiAqIEBwcml2YXRlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuX29uVGV4dHVyZVVwZGF0ZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gc28gaWYgX3dpZHRoIGlzIDAgdGhlbiB3aWR0aCB3YXMgbm90IHNldC4uXG4gICAgaWYgKHRoaXMuX3dpZHRoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gdGhpcy5fd2lkdGggLyB0aGlzLnRleHR1cmUuZnJhbWUud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hlaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMuc2NhbGUueSA9IHRoaXMuX2hlaWdodCAvIHRoaXMudGV4dHVyZS5mcmFtZS5oZWlnaHQ7XG4gICAgfVxufTtcblxuLyoqXG4qXG4qIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgV2ViR0wgcmVuZGVyZXJcbipcbiogQHBhcmFtIHJlbmRlcmVyIHtXZWJHTFJlbmRlcmVyfVxuKi9cblNwcml0ZS5wcm90b3R5cGUuX3JlbmRlcldlYkdMID0gZnVuY3Rpb24gKHJlbmRlcmVyKVxue1xuICAgIHJlbmRlcmVyLnNldE9iamVjdFJlbmRlcmVyKHJlbmRlcmVyLnBsdWdpbnMuc3ByaXRlKTtcbiAgICByZW5kZXJlci5wbHVnaW5zLnNwcml0ZS5yZW5kZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvdW5kcyBvZiB0aGUgU3ByaXRlIGFzIGEgcmVjdGFuZ2xlLiBUaGUgYm91bmRzIGNhbGN1bGF0aW9uIHRha2VzIHRoZSB3b3JsZFRyYW5zZm9ybSBpbnRvIGFjY291bnQuXG4gKlxuICogQHBhcmFtIG1hdHJpeCB7TWF0cml4fSB0aGUgdHJhbnNmb3JtYXRpb24gbWF0cml4IG9mIHRoZSBzcHJpdGVcbiAqIEByZXR1cm4ge1JlY3RhbmdsZX0gdGhlIGZyYW1pbmcgcmVjdGFuZ2xlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKG1hdHJpeClcbntcbiAgICBpZighdGhpcy5fY3VycmVudEJvdW5kcylcbiAgICB7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl90ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIHcwID0gd2lkdGggKiAoMS10aGlzLmFuY2hvci54KTtcbiAgICAgICAgdmFyIHcxID0gd2lkdGggKiAtdGhpcy5hbmNob3IueDtcblxuICAgICAgICB2YXIgaDAgPSBoZWlnaHQgKiAoMS10aGlzLmFuY2hvci55KTtcbiAgICAgICAgdmFyIGgxID0gaGVpZ2h0ICogLXRoaXMuYW5jaG9yLnk7XG5cbiAgICAgICAgdmFyIHdvcmxkVHJhbnNmb3JtID0gbWF0cml4IHx8IHRoaXMud29ybGRUcmFuc2Zvcm0gO1xuXG4gICAgICAgIHZhciBhID0gd29ybGRUcmFuc2Zvcm0uYTtcbiAgICAgICAgdmFyIGIgPSB3b3JsZFRyYW5zZm9ybS5iO1xuICAgICAgICB2YXIgYyA9IHdvcmxkVHJhbnNmb3JtLmM7XG4gICAgICAgIHZhciBkID0gd29ybGRUcmFuc2Zvcm0uZDtcbiAgICAgICAgdmFyIHR4ID0gd29ybGRUcmFuc2Zvcm0udHg7XG4gICAgICAgIHZhciB0eSA9IHdvcmxkVHJhbnNmb3JtLnR5O1xuXG4gICAgICAgIHZhciBtaW5YLFxuICAgICAgICAgICAgbWF4WCxcbiAgICAgICAgICAgIG1pblksXG4gICAgICAgICAgICBtYXhZO1xuXG4gICAgICAgIGlmIChiID09PSAwICYmIGMgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHNjYWxlIG1heSBiZSBuZWdhdGl2ZSFcbiAgICAgICAgICAgIGlmIChhIDwgMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhICo9IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZCA8IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZCAqPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhpcyBtZWFucyB0aGVyZSBpcyBubyByb3RhdGlvbiBnb2luZyBvbiByaWdodD8gUklHSFQ/XG4gICAgICAgICAgICAvLyBpZiB0aGF0cyB0aGUgY2FzZSB0aGVuIHdlIGNhbiBhdm9pZCBjaGVja2luZyB0aGUgYm91bmQgdmFsdWVzISB5YXlcbiAgICAgICAgICAgIG1pblggPSBhICogdzEgKyB0eDtcbiAgICAgICAgICAgIG1heFggPSBhICogdzAgKyB0eDtcbiAgICAgICAgICAgIG1pblkgPSBkICogaDEgKyB0eTtcbiAgICAgICAgICAgIG1heFkgPSBkICogaDAgKyB0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB4MSA9IGEgKiB3MSArIGMgKiBoMSArIHR4O1xuICAgICAgICAgICAgdmFyIHkxID0gZCAqIGgxICsgYiAqIHcxICsgdHk7XG5cbiAgICAgICAgICAgIHZhciB4MiA9IGEgKiB3MCArIGMgKiBoMSArIHR4O1xuICAgICAgICAgICAgdmFyIHkyID0gZCAqIGgxICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgICAgIHZhciB4MyA9IGEgKiB3MCArIGMgKiBoMCArIHR4O1xuICAgICAgICAgICAgdmFyIHkzID0gZCAqIGgwICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgICAgIHZhciB4NCA9ICBhICogdzEgKyBjICogaDAgKyB0eDtcbiAgICAgICAgICAgIHZhciB5NCA9ICBkICogaDAgKyBiICogdzEgKyB0eTtcblxuICAgICAgICAgICAgbWluWCA9IHgxO1xuICAgICAgICAgICAgbWluWCA9IHgyIDwgbWluWCA/IHgyIDogbWluWDtcbiAgICAgICAgICAgIG1pblggPSB4MyA8IG1pblggPyB4MyA6IG1pblg7XG4gICAgICAgICAgICBtaW5YID0geDQgPCBtaW5YID8geDQgOiBtaW5YO1xuXG4gICAgICAgICAgICBtaW5ZID0geTE7XG4gICAgICAgICAgICBtaW5ZID0geTIgPCBtaW5ZID8geTIgOiBtaW5ZO1xuICAgICAgICAgICAgbWluWSA9IHkzIDwgbWluWSA/IHkzIDogbWluWTtcbiAgICAgICAgICAgIG1pblkgPSB5NCA8IG1pblkgPyB5NCA6IG1pblk7XG5cbiAgICAgICAgICAgIG1heFggPSB4MTtcbiAgICAgICAgICAgIG1heFggPSB4MiA+IG1heFggPyB4MiA6IG1heFg7XG4gICAgICAgICAgICBtYXhYID0geDMgPiBtYXhYID8geDMgOiBtYXhYO1xuICAgICAgICAgICAgbWF4WCA9IHg0ID4gbWF4WCA/IHg0IDogbWF4WDtcblxuICAgICAgICAgICAgbWF4WSA9IHkxO1xuICAgICAgICAgICAgbWF4WSA9IHkyID4gbWF4WSA/IHkyIDogbWF4WTtcbiAgICAgICAgICAgIG1heFkgPSB5MyA+IG1heFkgPyB5MyA6IG1heFk7XG4gICAgICAgICAgICBtYXhZID0geTQgPiBtYXhZID8geTQgOiBtYXhZO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuX2JvdW5kcztcblxuICAgICAgICBib3VuZHMueCA9IG1pblg7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IG1heFggLSBtaW5YO1xuXG4gICAgICAgIGJvdW5kcy55ID0gbWluWTtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuXG4gICAgICAgIC8vIHN0b3JlIGEgcmVmZXJlbmNlIHNvIHRoYXQgaWYgdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhZ2FpbiBpbiB0aGUgcmVuZGVyIGN5Y2xlIHdlIGRvIG5vdCBoYXZlIHRvIHJlY2FsY3VsYXRlXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBib3VuZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHM7XG59O1xuXG4vKipcbiogVGVzdHMgaWYgYSBwb2ludCBpcyBpbnNpZGUgdGhpcyBzcHJpdGVcbipcbiogQHBhcmFtIHBvaW50IHtQb2ludH0gdGhlIHBvaW50IHRvIHRlc3RcbiogQHJldHVybiB7Ym9vbGVhbn0gdGhlIHJlc3VsdCBvZiB0aGUgdGVzdFxuKi9cblNwcml0ZS5wcm90b3R5cGUuY29udGFpbnNQb2ludCA9IGZ1bmN0aW9uKCBwb2ludCApXG57XG4gICAgdGhpcy53b3JsZFRyYW5zZm9ybS5hcHBseUludmVyc2UocG9pbnQsICB0ZW1wUG9pbnQpO1xuXG4gICAgdmFyIHdpZHRoID0gdGhpcy5fdGV4dHVyZS5fZnJhbWUud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuX3RleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICB2YXIgeDEgPSAtd2lkdGggKiB0aGlzLmFuY2hvci54O1xuICAgIHZhciB5MTtcblxuICAgIGlmICggdGVtcFBvaW50LnggPiB4MSAmJiB0ZW1wUG9pbnQueCA8IHgxICsgd2lkdGggKVxuICAgIHtcbiAgICAgICAgeTEgPSAtaGVpZ2h0ICogdGhpcy5hbmNob3IueTtcblxuICAgICAgICBpZiAoIHRlbXBQb2ludC55ID4geTEgJiYgdGVtcFBvaW50LnkgPCB5MSArIGhlaWdodCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4qIFJlbmRlcnMgdGhlIG9iamVjdCB1c2luZyB0aGUgQ2FudmFzIHJlbmRlcmVyXG4qXG4qIEBwYXJhbSByZW5kZXJlciB7Q2FudmFzUmVuZGVyZXJ9IFRoZSByZW5kZXJlclxuKi9cblNwcml0ZS5wcm90b3R5cGUuX3JlbmRlckNhbnZhcyA9IGZ1bmN0aW9uIChyZW5kZXJlcilcbntcbiAgICBpZiAodGhpcy50ZXh0dXJlLmNyb3Aud2lkdGggPD0gMCB8fCB0aGlzLnRleHR1cmUuY3JvcC5oZWlnaHQgPD0gMClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ibGVuZE1vZGUgIT09IHJlbmRlcmVyLmN1cnJlbnRCbGVuZE1vZGUpXG4gICAge1xuICAgICAgICByZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGU7XG4gICAgICAgIHJlbmRlcmVyLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gcmVuZGVyZXIuYmxlbmRNb2Rlc1tyZW5kZXJlci5jdXJyZW50QmxlbmRNb2RlXTtcbiAgICB9XG5cbiAgICAvLyAgSWdub3JlIG51bGwgc291cmNlc1xuICAgIGlmICh0aGlzLnRleHR1cmUudmFsaWQpXG4gICAge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuX3RleHR1cmUsXG4gICAgICAgICAgICB3dCA9IHRoaXMud29ybGRUcmFuc2Zvcm0sXG4gICAgICAgICAgICBkeCxcbiAgICAgICAgICAgIGR5LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ7XG5cbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb24gLyByZW5kZXJlci5yZXNvbHV0aW9uO1xuXG4gICAgICAgIHJlbmRlcmVyLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSB0aGlzLndvcmxkQWxwaGE7XG5cbiAgICAgICAgLy8gSWYgc21vb3RoaW5nRW5hYmxlZCBpcyBzdXBwb3J0ZWQgYW5kIHdlIG5lZWQgdG8gY2hhbmdlIHRoZSBzbW9vdGhpbmcgcHJvcGVydHkgZm9yIHRoaXMgdGV4dHVyZVxuICAgICAgICBpZiAocmVuZGVyZXIuc21vb3RoUHJvcGVydHkgJiYgcmVuZGVyZXIuY3VycmVudFNjYWxlTW9kZSAhPT0gdGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmN1cnJlbnRTY2FsZU1vZGUgPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmNvbnRleHRbcmVuZGVyZXIuc21vb3RoUHJvcGVydHldID0gKHJlbmRlcmVyLmN1cnJlbnRTY2FsZU1vZGUgPT09IENPTlNULlNDQUxFX01PREVTLkxJTkVBUik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgdGV4dHVyZSBpcyB0cmltbWVkIHdlIG9mZnNldCBieSB0aGUgdHJpbSB4L3ksIG90aGVyd2lzZSB3ZSB1c2UgdGhlIGZyYW1lIGRpbWVuc2lvbnNcblxuICAgICAgICBpZih0ZXh0dXJlLnJvdGF0ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAvLyBjaGVla3kgcm90YXRpb24hXG4gICAgICAgICAgICB2YXIgYSA9IHd0LmE7XG4gICAgICAgICAgICB2YXIgYiA9IHd0LmI7XG5cbiAgICAgICAgICAgIHd0LmEgID0gLXd0LmM7XG4gICAgICAgICAgICB3dC5iICA9IC13dC5kO1xuICAgICAgICAgICAgd3QuYyAgPSAgYTtcbiAgICAgICAgICAgIHd0LmQgID0gIGI7XG5cbiAgICAgICAgICAgIHdpZHRoID0gdGV4dHVyZS5jcm9wLmhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHR1cmUuY3JvcC53aWR0aDtcblxuICAgICAgICAgICAgZHggPSAodGV4dHVyZS50cmltKSA/IHRleHR1cmUudHJpbS55IC0gdGhpcy5hbmNob3IueSAqIHRleHR1cmUudHJpbS5oZWlnaHQgOiB0aGlzLmFuY2hvci55ICogLXRleHR1cmUuX2ZyYW1lLmhlaWdodDtcbiAgICAgICAgICAgIGR5ID0gKHRleHR1cmUudHJpbSkgPyB0ZXh0dXJlLnRyaW0ueCAtIHRoaXMuYW5jaG9yLnggKiB0ZXh0dXJlLnRyaW0ud2lkdGggOiB0aGlzLmFuY2hvci54ICogLXRleHR1cmUuX2ZyYW1lLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGggPSB0ZXh0dXJlLmNyb3Aud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB0ZXh0dXJlLmNyb3AuaGVpZ2h0O1xuXG4gICAgICAgICAgICBkeCA9ICh0ZXh0dXJlLnRyaW0pID8gdGV4dHVyZS50cmltLnggLSB0aGlzLmFuY2hvci54ICogdGV4dHVyZS50cmltLndpZHRoIDogdGhpcy5hbmNob3IueCAqIC10ZXh0dXJlLl9mcmFtZS53aWR0aDtcbiAgICAgICAgICAgIGR5ID0gKHRleHR1cmUudHJpbSkgPyB0ZXh0dXJlLnRyaW0ueSAtIHRoaXMuYW5jaG9yLnkgKiB0ZXh0dXJlLnRyaW0uaGVpZ2h0IDogdGhpcy5hbmNob3IueSAqIC10ZXh0dXJlLl9mcmFtZS5oZWlnaHQ7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gQWxsb3cgZm9yIHBpeGVsIHJvdW5kaW5nXG4gICAgICAgIGlmIChyZW5kZXJlci5yb3VuZFBpeGVscylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVuZGVyZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgICAgd3QuYSxcbiAgICAgICAgICAgICAgICB3dC5iLFxuICAgICAgICAgICAgICAgIHd0LmMsXG4gICAgICAgICAgICAgICAgd3QuZCxcbiAgICAgICAgICAgICAgICAod3QudHggKiByZW5kZXJlci5yZXNvbHV0aW9uKSB8IDAsXG4gICAgICAgICAgICAgICAgKHd0LnR5ICogcmVuZGVyZXIucmVzb2x1dGlvbikgfCAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkeCA9IGR4IHwgMDtcbiAgICAgICAgICAgIGR5ID0gZHkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuXG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgICAgICB3dC5hLFxuICAgICAgICAgICAgICAgIHd0LmIsXG4gICAgICAgICAgICAgICAgd3QuYyxcbiAgICAgICAgICAgICAgICB3dC5kLFxuICAgICAgICAgICAgICAgIHd0LnR4ICogcmVuZGVyZXIucmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3dC50eSAqIHJlbmRlcmVyLnJlc29sdXRpb25cbiAgICAgICAgICAgICk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGludCAhPT0gMHhGRkZGRkYpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlZFRpbnQgIT09IHRoaXMudGludClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlZFRpbnQgPSB0aGlzLnRpbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPIGNsZWFuIHVwIGNhY2hpbmcgLSBob3cgdG8gY2xlYW4gdXAgdGhlIGNhY2hlcz9cbiAgICAgICAgICAgICAgICB0aGlzLnRpbnRlZFRleHR1cmUgPSBDYW52YXNUaW50ZXIuZ2V0VGludGVkVGV4dHVyZSh0aGlzLCB0aGlzLnRpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0aGlzLnRpbnRlZFRleHR1cmUsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBkeCAvIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgZHkgLyByZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIHdpZHRoIC8gcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3aWR0aCAvIHJlc29sdXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXJlci5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZSxcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmNyb3AueCxcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmNyb3AueSxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgZHggLyByZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIGR5IC8gcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgICB3aWR0aCAvIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC8gcmVzb2x1dGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIHNvbWUgaGVscGVyIGZ1bmN0aW9ucy4uXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHNwcml0ZSB0aGF0IHdpbGwgY29udGFpbiBhIHRleHR1cmUgZnJvbSB0aGUgVGV4dHVyZUNhY2hlIGJhc2VkIG9uIHRoZSBmcmFtZUlkXG4gKiBUaGUgZnJhbWUgaWRzIGFyZSBjcmVhdGVkIHdoZW4gYSBUZXh0dXJlIHBhY2tlciBmaWxlIGhhcyBiZWVuIGxvYWRlZFxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBmcmFtZUlkIHtTdHJpbmd9IFRoZSBmcmFtZSBJZCBvZiB0aGUgdGV4dHVyZSBpbiB0aGUgY2FjaGVcbiAqIEByZXR1cm4ge1Nwcml0ZX0gQSBuZXcgU3ByaXRlIHVzaW5nIGEgdGV4dHVyZSBmcm9tIHRoZSB0ZXh0dXJlIGNhY2hlIG1hdGNoaW5nIHRoZSBmcmFtZUlkXG4gKiBAcGFyYW0gW2Nyb3Nzb3JpZ2luPShhdXRvKV0ge2Jvb2xlYW59IGlmIHlvdSB3YW50IHRvIHNwZWNpZnkgdGhlIGNyb3NzLW9yaWdpbiBwYXJhbWV0ZXJcbiAqIEBwYXJhbSBbc2NhbGVNb2RlPXNjYWxlTW9kZXMuREVGQVVMVF0ge251bWJlcn0gaWYgeW91IHdhbnQgdG8gc3BlY2lmeSB0aGUgc2NhbGUgbW9kZSwgc2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICovXG5TcHJpdGUuZnJvbUZyYW1lID0gZnVuY3Rpb24gKGZyYW1lSWQpXG57XG4gICAgdmFyIHRleHR1cmUgPSB1dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVJZF07XG5cbiAgICBpZiAoIXRleHR1cmUpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmcmFtZUlkIFwiJyArIGZyYW1lSWQgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRleHR1cmUgY2FjaGUgJyArIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgU3ByaXRlKHRleHR1cmUpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgc3ByaXRlIHRoYXQgd2lsbCBjb250YWluIGEgdGV4dHVyZSBiYXNlZCBvbiBhbiBpbWFnZSB1cmxcbiAqIElmIHRoZSBpbWFnZSBpcyBub3QgaW4gdGhlIHRleHR1cmUgY2FjaGUgaXQgd2lsbCBiZSBsb2FkZWRcbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gaW1hZ2VJZCB7U3RyaW5nfSBUaGUgaW1hZ2UgdXJsIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcmV0dXJuIHtTcHJpdGV9IEEgbmV3IFNwcml0ZSB1c2luZyBhIHRleHR1cmUgZnJvbSB0aGUgdGV4dHVyZSBjYWNoZSBtYXRjaGluZyB0aGUgaW1hZ2UgaWRcbiAqL1xuU3ByaXRlLmZyb21JbWFnZSA9IGZ1bmN0aW9uIChpbWFnZUlkLCBjcm9zc29yaWdpbiwgc2NhbGVNb2RlKVxue1xuICAgIHJldHVybiBuZXcgU3ByaXRlKFRleHR1cmUuZnJvbUltYWdlKGltYWdlSWQsIGNyb3Nzb3JpZ2luLCBzY2FsZU1vZGUpKTtcbn07XG4iLCJ2YXIgT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvdXRpbHMvT2JqZWN0UmVuZGVyZXInKSxcbiAgICBTaGFkZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlcnMvd2ViZ2wvc2hhZGVycy9TaGFkZXInKSxcbiAgICBXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKSxcbiAgICBDT05TVCA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0Jyk7XG5cbi8qKlxuICogQGF1dGhvciBNYXQgR3JvdmVzXG4gKlxuICogQmlnIHRoYW5rcyB0byB0aGUgdmVyeSBjbGV2ZXIgTWF0dCBEZXNMYXVyaWVycyA8bWF0dGRlc2w+IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9cbiAqIGZvciBjcmVhdGluZyB0aGUgb3JpZ2luYWwgcGl4aSB2ZXJzaW9uIVxuICogQWxzbyBhIHRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vYmNoZXZhbGllciBmb3IgdHdlYWtpbmcgdGhlIHRpbnQgYW5kIGFscGhhIHNvIHRoYXQgdGhleSBub3cgc2hhcmUgNCBieXRlcyBvbiB0aGUgdmVydGV4IGJ1ZmZlclxuICpcbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnkgTGliR0RYJ3MgU3ByaXRlUmVuZGVyZXI6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGliZ2R4L2xpYmdkeC9ibG9iL21hc3Rlci9nZHgvc3JjL2NvbS9iYWRsb2dpYy9nZHgvZ3JhcGhpY3MvZzJkL1Nwcml0ZVJlbmRlcmVyLmphdmFcbiAqL1xuXG4vKipcbiAqXG4gKiBAY2xhc3NcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGV4dGVuZHMgT2JqZWN0UmVuZGVyZXJcbiAqIEBwYXJhbSByZW5kZXJlciB7V2ViR0xSZW5kZXJlcn0gVGhlIHJlbmRlcmVyIHRoaXMgc3ByaXRlIGJhdGNoIHdvcmtzIGZvci5cbiAqL1xuZnVuY3Rpb24gU3ByaXRlUmVuZGVyZXIocmVuZGVyZXIpXG57XG4gICAgT2JqZWN0UmVuZGVyZXIuY2FsbCh0aGlzLCByZW5kZXJlcik7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudmVydFNpemUgPSA1O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRCeXRlU2l6ZSA9IHRoaXMudmVydFNpemUgKiA0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpbWFnZXMgaW4gdGhlIFNwcml0ZUJhdGNoIGJlZm9yZSBpdCBmbHVzaGVzLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9IENPTlNULlNQUklURV9CQVRDSF9TSVpFOyAvLyAyMDAwIGlzIGEgbmljZSBiYWxhbmNlIGJldHdlZW4gbW9iaWxlIC8gZGVza3RvcFxuXG4gICAgLy8gdGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBpbiBvdXIgYmF0Y2hcbiAgICB2YXIgbnVtVmVydHMgPSB0aGlzLnNpemUgKiA0ICogdGhpcy52ZXJ0Qnl0ZVNpemU7XG4gICAgLy8gdGhlIHRvdGFsIG51bWJlciBvZiBpbmRpY2VzIGluIG91ciBiYXRjaFxuICAgIHZhciBudW1JbmRpY2VzID0gdGhpcy5zaXplICogNjtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSB2ZXJ0aWNlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7QXJyYXlCdWZmZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBBcnJheUJ1ZmZlcihudW1WZXJ0cyk7XG5cbiAgICAvKipcbiAgICAgKiBWaWV3IG9uIHRoZSB2ZXJ0aWNlcyBhcyBhIEZsb2F0MzJBcnJheVxuICAgICAqXG4gICAgICogQG1lbWJlciB7RmxvYXQzMkFycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKTtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjb2xvciBjb21wb25lbnRzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtVaW50MzJBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLnZlcnRpY2VzKTtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBpbmRpY2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtVaW50MTZBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmluZGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtSW5kaWNlcyk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubGFzdEluZGV4Q291bnQgPSAwO1xuXG4gICAgZm9yICh2YXIgaT0wLCBqPTA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgMF0gPSBqICsgMDtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyAxXSA9IGogKyAxO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDJdID0gaiArIDI7XG4gICAgICAgIHRoaXMuaW5kaWNlc1tpICsgM10gPSBqICsgMDtcbiAgICAgICAgdGhpcy5pbmRpY2VzW2kgKyA0XSA9IGogKyAyO1xuICAgICAgICB0aGlzLmluZGljZXNbaSArIDVdID0gaiArIDM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5kcmF3aW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEJhdGNoU2l6ZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7QmFzZVRleHR1cmV9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50QmFzZVRleHR1cmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmJsZW5kTW9kZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnNoYWRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnNwcml0ZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHNoYWRlciB0aGF0IGlzIHVzZWQgaWYgYSBzcHJpdGUgZG9lc24ndCBoYXZlIGEgbW9yZSBzcGVjaWZpYyBvbmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtTaGFkZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuXG59XG5cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0UmVuZGVyZXIucHJvdG90eXBlKTtcblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcml0ZVJlbmRlcmVyO1xubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVSZW5kZXJlcjtcblxuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignc3ByaXRlJywgU3ByaXRlUmVuZGVyZXIpO1xuXG4vKipcbiAqIFNldHMgdXAgdGhlIHJlbmRlcmVyIGNvbnRleHQgYW5kIG5lY2Vzc2FyeSBidWZmZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZ2wge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIGN1cnJlbnQgV2ViR0wgZHJhd2luZyBjb250ZXh0XG4gKi9cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5vbkNvbnRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAvLyBzZXR1cCBkZWZhdWx0IHNoYWRlclxuICAgIHRoaXMuc2hhZGVyID0gdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLmRlZmF1bHRTaGFkZXI7XG5cbiAgICAvLyBjcmVhdGUgYSBjb3VwbGUgb2YgYnVmZmVyc1xuICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLy8gNjU1MzUgaXMgbWF4IGluZGV4LCBzbyA2NTUzNSAvIDYgPSAxMDkyMi5cblxuICAgIC8vdXBsb2FkIHRoZSBpbmRleCBkYXRhXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRpY2VzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgdGhpcy5jdXJyZW50QmxlbmRNb2RlID0gOTk5OTk7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHNwcml0ZSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHNwcml0ZSB7U3ByaXRlfSB0aGUgc3ByaXRlIHRvIHJlbmRlciB3aGVuIHVzaW5nIHRoaXMgc3ByaXRlYmF0Y2hcbiAqL1xuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChzcHJpdGUpXG57XG4gICAgdmFyIHRleHR1cmUgPSBzcHJpdGUuX3RleHR1cmU7XG5cbiAgICAvL1RPRE8gc2V0IGJsZW5kIG1vZGVzLi5cbiAgICAvLyBjaGVjayB0ZXh0dXJlLi5cbiAgICBpZiAodGhpcy5jdXJyZW50QmF0Y2hTaXplID49IHRoaXMuc2l6ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFzZVRleHR1cmUgPSB0ZXh0dXJlLmJhc2VUZXh0dXJlO1xuICAgIH1cblxuICAgIC8vIGdldCB0aGUgdXZzIGZvciB0aGUgdGV4dHVyZVxuICAgIHZhciB1dnMgPSB0ZXh0dXJlLl91dnM7XG5cbiAgICAvLyBpZiB0aGUgdXZzIGhhdmUgbm90IHVwZGF0ZWQgdGhlbiBubyBwb2ludCByZW5kZXJpbmcganVzdCB5ZXQhXG4gICAgaWYgKCF1dnMpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETyB0cmltPz9cbiAgICB2YXIgYVggPSBzcHJpdGUuYW5jaG9yLng7XG4gICAgdmFyIGFZID0gc3ByaXRlLmFuY2hvci55O1xuXG4gICAgdmFyIHcwLCB3MSwgaDAsIGgxO1xuXG4gICAgaWYgKHRleHR1cmUudHJpbSlcbiAgICB7XG4gICAgICAgIC8vIGlmIHRoZSBzcHJpdGUgaXMgdHJpbW1lZCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZSBleHRyYSBzcGFjZSBiZWZvcmUgdHJhbnNmb3JtaW5nIHRoZSBzcHJpdGUgY29vcmRzLi5cbiAgICAgICAgdmFyIHRyaW0gPSB0ZXh0dXJlLnRyaW07XG5cbiAgICAgICAgdzEgPSB0cmltLnggLSBhWCAqIHRyaW0ud2lkdGg7XG4gICAgICAgIHcwID0gdzEgKyB0ZXh0dXJlLmNyb3Aud2lkdGg7XG5cbiAgICAgICAgaDEgPSB0cmltLnkgLSBhWSAqIHRyaW0uaGVpZ2h0O1xuICAgICAgICBoMCA9IGgxICsgdGV4dHVyZS5jcm9wLmhlaWdodDtcblxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB3MCA9ICh0ZXh0dXJlLl9mcmFtZS53aWR0aCApICogKDEtYVgpO1xuICAgICAgICB3MSA9ICh0ZXh0dXJlLl9mcmFtZS53aWR0aCApICogLWFYO1xuXG4gICAgICAgIGgwID0gdGV4dHVyZS5fZnJhbWUuaGVpZ2h0ICogKDEtYVkpO1xuICAgICAgICBoMSA9IHRleHR1cmUuX2ZyYW1lLmhlaWdodCAqIC1hWTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmN1cnJlbnRCYXRjaFNpemUgKiB0aGlzLnZlcnRCeXRlU2l6ZTtcblxuICAgIHZhciB3b3JsZFRyYW5zZm9ybSA9IHNwcml0ZS53b3JsZFRyYW5zZm9ybTtcblxuICAgIHZhciBhID0gd29ybGRUcmFuc2Zvcm0uYTtcbiAgICB2YXIgYiA9IHdvcmxkVHJhbnNmb3JtLmI7XG4gICAgdmFyIGMgPSB3b3JsZFRyYW5zZm9ybS5jO1xuICAgIHZhciBkID0gd29ybGRUcmFuc2Zvcm0uZDtcbiAgICB2YXIgdHggPSB3b3JsZFRyYW5zZm9ybS50eDtcbiAgICB2YXIgdHkgPSB3b3JsZFRyYW5zZm9ybS50eTtcblxuICAgIHZhciBjb2xvcnMgPSB0aGlzLmNvbG9ycztcbiAgICB2YXIgcG9zaXRpb25zID0gdGhpcy5wb3NpdGlvbnM7XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5yb3VuZFBpeGVscylcbiAgICB7XG4gICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleF0gPSBhICogdzEgKyBjICogaDEgKyB0eCB8IDA7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxXSA9IGQgKiBoMSArIGIgKiB3MSArIHR5IHwgMDtcblxuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrNV0gPSBhICogdzAgKyBjICogaDEgKyB0eCB8IDA7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCs2XSA9IGQgKiBoMSArIGIgKiB3MCArIHR5IHwgMDtcblxuICAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzEwXSA9IGEgKiB3MCArIGMgKiBoMCArIHR4IHwgMDtcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzExXSA9IGQgKiBoMCArIGIgKiB3MCArIHR5IHwgMDtcblxuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTVdID0gYSAqIHcxICsgYyAqIGgwICsgdHggfCAwO1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTZdID0gZCAqIGgwICsgYiAqIHcxICsgdHkgfCAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyB4eVxuICAgICAgICBwb3NpdGlvbnNbaW5kZXhdID0gYSAqIHcxICsgYyAqIGgxICsgdHg7XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCsxXSA9IGQgKiBoMSArIGIgKiB3MSArIHR5O1xuXG4gICAgICAgIC8vIHh5XG4gICAgICAgIHBvc2l0aW9uc1tpbmRleCs1XSA9IGEgKiB3MCArIGMgKiBoMSArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrNl0gPSBkICogaDEgKyBiICogdzAgKyB0eTtcblxuICAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzEwXSA9IGEgKiB3MCArIGMgKiBoMCArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTFdID0gZCAqIGgwICsgYiAqIHcwICsgdHk7XG5cbiAgICAgICAgLy8geHlcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KzE1XSA9IGEgKiB3MSArIGMgKiBoMCArIHR4O1xuICAgICAgICBwb3NpdGlvbnNbaW5kZXgrMTZdID0gZCAqIGgwICsgYiAqIHcxICsgdHk7XG4gICAgfVxuXG4gICAgLy8gdXZcbiAgICBwb3NpdGlvbnNbaW5kZXgrMl0gPSB1dnMueDA7XG4gICAgcG9zaXRpb25zW2luZGV4KzNdID0gdXZzLnkwO1xuXG4gICAgLy8gdXZcbiAgICBwb3NpdGlvbnNbaW5kZXgrN10gPSB1dnMueDE7XG4gICAgcG9zaXRpb25zW2luZGV4KzhdID0gdXZzLnkxO1xuXG4gICAgIC8vIHV2XG4gICAgcG9zaXRpb25zW2luZGV4KzEyXSA9IHV2cy54MjtcbiAgICBwb3NpdGlvbnNbaW5kZXgrMTNdID0gdXZzLnkyO1xuXG4gICAgLy8gdXZcbiAgICBwb3NpdGlvbnNbaW5kZXgrMTddID0gdXZzLngzO1xuICAgIHBvc2l0aW9uc1tpbmRleCsxOF0gPSB1dnMueTM7XG5cbiAgICAvLyBjb2xvciBhbmQgYWxwaGFcbiAgICB2YXIgdGludCA9IHNwcml0ZS50aW50O1xuICAgIGNvbG9yc1tpbmRleCs0XSA9IGNvbG9yc1tpbmRleCs5XSA9IGNvbG9yc1tpbmRleCsxNF0gPSBjb2xvcnNbaW5kZXgrMTldID0gKHRpbnQgPj4gMTYpICsgKHRpbnQgJiAweGZmMDApICsgKCh0aW50ICYgMHhmZikgPDwgMTYpICsgKHNwcml0ZS53b3JsZEFscGhhICogMjU1IDw8IDI0KTtcblxuICAgIC8vIGluY3JlbWVudCB0aGUgYmF0Y2hzaXplXG4gICAgdGhpcy5zcHJpdGVzW3RoaXMuY3VycmVudEJhdGNoU2l6ZSsrXSA9IHNwcml0ZTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBhbmQgZW1wdGllcyB0aGUgY3VycmVudCBiYXRjaC5cbiAqXG4gKi9cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpXG57XG4gICAgLy8gSWYgdGhlIGJhdGNoIGlzIGxlbmd0aCAwIHRoZW4gcmV0dXJuIGFzIHRoZXJlIGlzIG5vdGhpbmcgdG8gZHJhd1xuICAgIGlmICh0aGlzLmN1cnJlbnRCYXRjaFNpemUgPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICB2YXIgc2hhZGVyO1xuXG4gICAgLy8gdXBsb2FkIHRoZSB2ZXJ0cyB0byB0aGUgYnVmZmVyXG4gICAgaWYgKHRoaXMuY3VycmVudEJhdGNoU2l6ZSA+ICggdGhpcy5zaXplICogMC41ICkgKVxuICAgIHtcbiAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHRoaXMudmVydGljZXMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB2YXIgdmlldyA9IHRoaXMucG9zaXRpb25zLnN1YmFycmF5KDAsIHRoaXMuY3VycmVudEJhdGNoU2l6ZSAqIHRoaXMudmVydEJ5dGVTaXplKTtcbiAgICAgICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIHZpZXcpO1xuICAgIH1cblxuICAgIHZhciBuZXh0VGV4dHVyZSwgbmV4dEJsZW5kTW9kZSwgbmV4dFNoYWRlcjtcbiAgICB2YXIgYmF0Y2hTaXplID0gMDtcbiAgICB2YXIgc3RhcnQgPSAwO1xuXG4gICAgdmFyIGN1cnJlbnRCYXNlVGV4dHVyZSA9IG51bGw7XG4gICAgdmFyIGN1cnJlbnRCbGVuZE1vZGUgPSB0aGlzLnJlbmRlcmVyLmJsZW5kTW9kZU1hbmFnZXIuY3VycmVudEJsZW5kTW9kZTtcbiAgICB2YXIgY3VycmVudFNoYWRlciA9IG51bGw7XG5cbiAgICB2YXIgYmxlbmRTd2FwID0gZmFsc2U7XG4gICAgdmFyIHNoYWRlclN3YXAgPSBmYWxzZTtcbiAgICB2YXIgc3ByaXRlO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmN1cnJlbnRCYXRjaFNpemU7IGkgPCBqOyBpKyspXG4gICAge1xuXG4gICAgICAgIHNwcml0ZSA9IHRoaXMuc3ByaXRlc1tpXTtcblxuICAgICAgICBuZXh0VGV4dHVyZSA9IHNwcml0ZS5fdGV4dHVyZS5iYXNlVGV4dHVyZTtcbiAgICAgICAgbmV4dEJsZW5kTW9kZSA9IHNwcml0ZS5ibGVuZE1vZGU7XG4gICAgICAgIG5leHRTaGFkZXIgPSBzcHJpdGUuc2hhZGVyIHx8IHRoaXMuc2hhZGVyO1xuXG4gICAgICAgIGJsZW5kU3dhcCA9IGN1cnJlbnRCbGVuZE1vZGUgIT09IG5leHRCbGVuZE1vZGU7XG4gICAgICAgIHNoYWRlclN3YXAgPSBjdXJyZW50U2hhZGVyICE9PSBuZXh0U2hhZGVyOyAvLyBzaG91bGQgSSB1c2UgdXVpZFM/Pz9cblxuICAgICAgICBpZiAoY3VycmVudEJhc2VUZXh0dXJlICE9PSBuZXh0VGV4dHVyZSB8fCBibGVuZFN3YXAgfHwgc2hhZGVyU3dhcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJCYXRjaChjdXJyZW50QmFzZVRleHR1cmUsIGJhdGNoU2l6ZSwgc3RhcnQpO1xuXG4gICAgICAgICAgICBzdGFydCA9IGk7XG4gICAgICAgICAgICBiYXRjaFNpemUgPSAwO1xuICAgICAgICAgICAgY3VycmVudEJhc2VUZXh0dXJlID0gbmV4dFRleHR1cmU7XG5cbiAgICAgICAgICAgIGlmIChibGVuZFN3YXApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJsZW5kTW9kZSA9IG5leHRCbGVuZE1vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5ibGVuZE1vZGVNYW5hZ2VyLnNldEJsZW5kTW9kZSggY3VycmVudEJsZW5kTW9kZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hhZGVyU3dhcClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hhZGVyID0gbmV4dFNoYWRlcjtcblxuXG5cbiAgICAgICAgICAgICAgICBzaGFkZXIgPSBjdXJyZW50U2hhZGVyLnNoYWRlcnMgPyBjdXJyZW50U2hhZGVyLnNoYWRlcnNbZ2wuaWRdIDogY3VycmVudFNoYWRlcjtcblxuICAgICAgICAgICAgICAgIGlmICghc2hhZGVyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyID0gY3VycmVudFNoYWRlci5nZXRTaGFkZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgc2hhZGVyIGZ1bmN0aW9uPz8/XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkZXJNYW5hZ2VyLnNldFNoYWRlcihzaGFkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy9UT0RPIC0gaSBLTk9XIHRoaXMgY2FuIGJlIG9wdGltaXNlZCEgT25jZSB2MyBpcyBzdGFibGUgaWwgbG9vayBhdCB0aGlzIG5leHQuLi5cbiAgICAgICAgICAgICAgICBzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC52YWx1ZSA9IHRoaXMucmVuZGVyZXIuY3VycmVudFJlbmRlclRhcmdldC5wcm9qZWN0aW9uTWF0cml4LnRvQXJyYXkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy9NYWtlIHRoaXMgYSBsaXR0bGUgbW9yZSBkeW5hbWljIC8gaW50ZWxsaWdlbnQhXG4gICAgICAgICAgICAgICAgc2hhZGVyLnN5bmNVbmlmb3JtcygpO1xuXG4gICAgICAgICAgICAgICAgLy9UT0RPIGludmVzdGlnYXRlIHNvbWUga2luZCBvZiB0ZXh0dXJlIHN0YXRlIG1hbmFnbWVudD8/XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBtYWtlIHN1cmUgdGhpcyB0ZXh0dXJlIGlzIHRoZSBhY3RpdmUgb25lIGZvciBhbGwgdGhlIGJhdGNoIHN3YXBzLi5cbiAgICAgICAgICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblxuICAgICAgICAgICAgICAgIC8vIGJvdGggdGhlYXNlIG9ubHkgbmVlZCB0byBiZSBzZXQgaWYgdGhleSBhcmUgY2hhbmdpbmcuLlxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgcHJvamVjdGlvblxuICAgICAgICAgICAgICAgIC8vZ2wudW5pZm9ybU1hdHJpeDNmdihzaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC5fbG9jYXRpb24sIGZhbHNlLCB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJUYXJnZXQucHJvamVjdGlvbk1hdHJpeC50b0FycmF5KHRydWUpKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiYXRjaFNpemUrKztcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckJhdGNoKGN1cnJlbnRCYXNlVGV4dHVyZSwgYmF0Y2hTaXplLCBzdGFydCk7XG5cbiAgICAvLyB0aGVuIHJlc2V0IHRoZSBiYXRjaCFcbiAgICB0aGlzLmN1cnJlbnRCYXRjaFNpemUgPSAwO1xufTtcblxuLyoqXG4gKiBEcmF3cyB0aGUgY3VycmVudGx5IGJhdGNoZXMgc3ByaXRlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9XG4gKiBAcGFyYW0gc2l6ZSB7bnVtYmVyfVxuICogQHBhcmFtIHN0YXJ0SW5kZXgge251bWJlcn1cbiAqL1xuU3ByaXRlUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckJhdGNoID0gZnVuY3Rpb24gKHRleHR1cmUsIHNpemUsIHN0YXJ0SW5kZXgpXG57XG4gICAgaWYgKHNpemUgPT09IDApXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIGlmICghdGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0pXG4gICAge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnVwZGF0ZVRleHR1cmUodGV4dHVyZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIC8vIGJpbmQgdGhlIGN1cnJlbnQgdGV4dHVyZVxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLl9nbFRleHR1cmVzW2dsLmlkXSk7XG4gICAgfVxuXG4gICAgLy8gbm93IGRyYXcgdGhvc2Ugc3Vja2FzIVxuICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIHNpemUgKiA2LCBnbC5VTlNJR05FRF9TSE9SVCwgc3RhcnRJbmRleCAqIDYgKiAyKTtcblxuICAgIC8vIGluY3JlbWVudCB0aGUgZHJhdyBjb3VudFxuICAgIHRoaXMucmVuZGVyZXIuZHJhd0NvdW50Kys7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIG5ldyBzcHJpdGUgYmF0Y2guXG4gKlxuICovXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAvLyBiaW5kIHRoZSBtYWluIHRleHR1cmVcblxuXG4gICAgLy8gYmluZCB0aGUgYnVmZmVyc1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRleEJ1ZmZlcik7XG5cbiAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGZvciBlYWNoIHNoYWRlcj9cbiAgICB2YXIgc3RyaWRlID0gIHRoaXMudmVydEJ5dGVTaXplO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCAwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUsIDIgKiA0KTtcblxuICAgIC8vIGNvbG9yIGF0dHJpYnV0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyB1bnNpZ25lZCBieXRlcyBhbmQgbm9ybWFsaXplZFxuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zaGFkZXIuYXR0cmlidXRlcy5hQ29sb3IsIDQsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIHN0cmlkZSwgNCAqIDQpO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgU3ByaXRlQmF0Y2guXG4gKlxuICovXG5TcHJpdGVSZW5kZXJlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5yZW5kZXJlci5nbC5kZWxldGVCdWZmZXIodGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuaW5kZXhCdWZmZXIpO1xuXG4gICAgdGhpcy5zaGFkZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gbnVsbDtcbiAgICB0aGlzLnBvc2l0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5jb2xvcnMgPSBudWxsO1xuICAgIHRoaXMuaW5kaWNlcyA9IG51bGw7XG5cbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IG51bGw7XG5cbiAgICB0aGlzLmN1cnJlbnRCYXNlVGV4dHVyZSA9IG51bGw7XG5cbiAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMudGV4dHVyZXMgPSBudWxsO1xuICAgIHRoaXMuYmxlbmRNb2RlcyA9IG51bGw7XG4gICAgdGhpcy5zaGFkZXJzID0gbnVsbDtcbiAgICB0aGlzLnNwcml0ZXMgPSBudWxsO1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcbn07XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpLFxuICAgIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKTtcblxuLyoqXG4gKiBBIHRleHR1cmUgc3RvcmVzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHJlcHJlc2VudHMgYW4gaW1hZ2UuIEFsbCB0ZXh0dXJlcyBoYXZlIGEgYmFzZSB0ZXh0dXJlLlxuICpcbiAqIEBjbGFzc1xuICogQG1peGVzIGV2ZW50VGFyZ2V0XG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHBhcmFtIHNvdXJjZSB7SW1hZ2V8Q2FudmFzfSB0aGUgc291cmNlIG9iamVjdCBvZiB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSBbc2NhbGVNb2RlPXNjYWxlTW9kZXMuREVGQVVMVF0ge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHBhcmFtIHJlc29sdXRpb24ge251bWJlcn0gdGhlIHJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUgZm9yIGRldmljZXMgd2l0aCBkaWZmZXJlbnQgcGl4ZWwgcmF0aW9zXG4gKi9cbmZ1bmN0aW9uIEJhc2VUZXh0dXJlKHNvdXJjZSwgc2NhbGVNb2RlLCByZXNvbHV0aW9uKVxue1xuICAgIHRoaXMudXVpZCA9IHV0aWxzLnV1aWQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBSZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc29sdXRpb24gfHwgMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgYmFzZSB0ZXh0dXJlIHNldCB3aGVuIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IDEwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGJhc2UgdGV4dHVyZSBzZXQgd2hlbiB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuXG4gICAgLy8gVE9ETyBkb2NzXG4gICAgLy8gdXNlZCB0byBzdG9yZSB0aGUgYWN0dWFsIGRpbWVuc2lvbnMgb2YgdGhlIHNvdXJjZVxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gc3RvcmUgdGhlIGFjdHVhbCB3aWR0aCBvZiB0aGUgc291cmNlIG9mIHRoaXMgdGV4dHVyZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuICAgIHRoaXMucmVhbFdpZHRoID0gMTAwO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gc3RvcmUgdGhlIGFjdHVhbCBoZWlnaHQgb2YgdGhlIHNvdXJjZSBvZiB0aGlzIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnJlYWxIZWlnaHQgPSAxMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbGUgbW9kZSB0byBhcHBseSB3aGVuIHNjYWxpbmcgdGhpcyB0ZXh0dXJlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHt7bnVtYmVyfX1cbiAgICAgKiBAZGVmYXVsdCBzY2FsZU1vZGVzLkxJTkVBUlxuICAgICAqL1xuICAgIHRoaXMuc2NhbGVNb2RlID0gc2NhbGVNb2RlIHx8IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSBvbmNlIHRoZSBiYXNlIHRleHR1cmUgaGFzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG5ldmVyIHRydWUgaWYgdGhlIHVuZGVybHlpbmcgc291cmNlIGZhaWxzIHRvIGxvYWQgb3IgaGFzIG5vIHRleHR1cmUgZGF0YS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG4gICAgdGhpcy5oYXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIGlmIHRoZSBzb3VyY2UgaXMgY3VycmVudGx5IGxvYWRpbmcuXG4gICAgICpcbiAgICAgKiBJZiBhbiBJbWFnZSBzb3VyY2UgaXMgbG9hZGluZyB0aGUgJ2xvYWRlZCcgb3IgJ2Vycm9yJyBldmVudCB3aWxsIGJlXG4gICAgICogZGlzcGF0Y2hlZCB3aGVuIHRoZSBvcGVyYXRpb24gZW5kcy4gQW4gdW5kZXJ5bGluZyBzb3VyY2UgdGhhdCBpc1xuICAgICAqIGltbWVkaWF0ZWx5LWF2YWlsYWJsZSBieXBhc3NlcyBsb2FkaW5nIGVudGlyZWx5LlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGltYWdlIHNvdXJjZSB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogVE9ETzogTWFrZSB0aGlzIGEgc2V0dGVyIHRoYXQgY2FsbHMgbG9hZFNvdXJjZSgpO1xuICAgICAqXG4gICAgICogQG1lbWJlciB7SW1hZ2V8Q2FudmFzfVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuc291cmNlID0gbnVsbDsgLy8gc2V0IGluIGxvYWRTb3VyY2UsIGlmIGF0IGFsbFxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgaWYgUkdCIGNoYW5uZWxzIHNob3VsZCBiZSBwcmUtbXVsdGlwbGllZCBieSBBbHBoYSAgKFdlYkdMIG9ubHkpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICB0aGlzLnByZW11bHRpcGxpZWRBbHBoYSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZVVybCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXZXRoZXIgb3Igbm90IHRoZSB0ZXh0dXJlIGlzIGEgcG93ZXIgb2YgdHdvLCB0cnkgdG8gdXNlIHBvd2VyIG9mIHR3byB0ZXh0dXJlcyBhcyBtdWNoIGFzIHlvdSBjYW5cbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc1Bvd2VyT2ZUd28gPSBmYWxzZTtcblxuICAgIC8vIHVzZWQgZm9yIHdlYkdMXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgYSBtaXBtYXAgb2YgdGhpcyB0ZXh0dXJlIG5lZWRzIHRvIGJlIGdlbmVyYXRlZC4gVGhpcyB2YWx1ZSBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIHRoZSB0ZXh0dXJlIGlzIHVzZWRcbiAgICAgKiBBbHNvIHRoZSB0ZXh0dXJlIG11c3QgYmUgYSBwb3dlciBvZiB0d28gc2l6ZSB0byB3b3JrXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubWlwbWFwID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiByZW5kZXJlciBJRHMgdG8gd2ViZ2wgdGV4dHVyZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdDxudW1iZXIsIFdlYkdMVGV4dHVyZT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbFRleHR1cmVzID0gW107XG5cbiAgICAvLyBpZiBubyBzb3VyY2UgcGFzc2VkIGRvbid0IHRyeSB0byBsb2FkXG4gICAgaWYgKHNvdXJjZSlcbiAgICB7XG4gICAgICAgIHRoaXMubG9hZFNvdXJjZShzb3VyY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSBub3QtaW1tZWRpYXRlbHktYXZhaWxhYmxlIHNvdXJjZSBmaW5pc2hlcyBsb2FkaW5nLlxuICAgICAqXG4gICAgICogQGV2ZW50IGxvYWRlZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSBub3QtaW1tZWRpYXRlbHktYXZhaWxhYmxlIHNvdXJjZSBmYWlscyB0byBsb2FkLlxuICAgICAqXG4gICAgICogQGV2ZW50IGVycm9yXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xufVxuXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlVGV4dHVyZTtcbm1vZHVsZS5leHBvcnRzID0gQmFzZVRleHR1cmU7XG5cbnV0aWxzLmV2ZW50VGFyZ2V0Lm1peGluKEJhc2VUZXh0dXJlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgdGV4dHVyZSBvbiBhbGwgdGhlIHdlYmdsIHJlbmRlcmVycy5cbiAqXG4gKiBAZmlyZXMgdXBkYXRlXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzKTtcbn07XG5cbi8qKlxuICogTG9hZCBhIHNvdXJjZS5cbiAqXG4gKiBJZiB0aGUgc291cmNlIGlzIG5vdC1pbW1lZGlhdGVseS1hdmFpbGFibGUsIHN1Y2ggYXMgYW4gaW1hZ2UgdGhhdCBuZWVkcyB0byBiZVxuICogZG93bmxvYWRlZCwgdGhlbiB0aGUgJ2xvYWRlZCcgb3IgJ2Vycm9yJyBldmVudCB3aWxsIGJlIGRpc3BhdGNoZWQgaW4gdGhlIGZ1dHVyZVxuICogYW5kIGBoYXNMb2FkZWRgIHdpbGwgcmVtYWluIGZhbHNlIGFmdGVyIHRoaXMgY2FsbC5cbiAqXG4gKiBUaGUgbG9naWMgc3RhdGUgYWZ0ZXIgY2FsbGluZyBgbG9hZFNvdXJjZWAgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSAoZWcuIGBmcm9tSW1hZ2VgLCBgbmV3IEJhc2VUZXh0dXJlYCkgaXM6XG4gKlxuICogICAgIGlmICh0ZXh0dXJlLmhhc0xvYWRlZClcbiB7XG4gKiAgICAgICAgLy8gdGV4dHVyZSByZWFkeSBmb3IgdXNlXG4gKiAgICAgfSBlbHNlIGlmICh0ZXh0dXJlLmlzTG9hZGluZylcbiB7XG4gKiAgICAgICAgLy8gbGlzdGVuIHRvICdsb2FkZWQnIGFuZC9vciAnZXJyb3InIGV2ZW50cyBvbiB0ZXh0dXJlXG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgICAvLyBub3QgbG9hZGluZywgbm90IGdvaW5nIHRvIGxvYWQgVU5MRVNTIHRoZSBzb3VyY2UgaXMgcmVsb2FkZWRcbiAqICAgICAgICAvLyAoaXQgbWF5IHN0aWxsIG1ha2Ugc2Vuc2UgdG8gbGlzdGVuIHRvIHRoZSBldmVudHMpXG4gKiAgICAgfVxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBwYXJhbSBzb3VyY2Uge0ltYWdlfENhbnZhc30gdGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIHRleHR1cmUuXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS5sb2FkU291cmNlID0gZnVuY3Rpb24gKHNvdXJjZSlcbntcbiAgICB2YXIgd2FzTG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh3YXNMb2FkaW5nICYmIHRoaXMuc291cmNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2Uub25lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAvLyBBcHBseSBzb3VyY2UgaWYgbG9hZGVkLiBPdGhlcndpc2Ugc2V0dXAgYXBwcm9wcmlhdGUgbG9hZGluZyBtb25pdG9ycy5cbiAgICBpZiAoKHRoaXMuc291cmNlLmNvbXBsZXRlIHx8IHRoaXMuc291cmNlLmdldENvbnRleHQpICYmIHRoaXMuc291cmNlLndpZHRoICYmIHRoaXMuc291cmNlLmhlaWdodClcbiAgICB7XG4gICAgICAgIHRoaXMuX3NvdXJjZUxvYWRlZCgpO1xuICAgIH1cbiAgICBlbHNlIGlmICghc291cmNlLmdldENvbnRleHQpXG4gICAge1xuXG4gICAgICAgIC8vIEltYWdlIGZhaWwgLyBub3QgcmVhZHlcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXM7XG5cbiAgICAgICAgc291cmNlLm9ubG9hZCA9IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgc291cmNlLm9uZXJyb3IgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXNjb3BlLmlzTG9hZGluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGUuX3NvdXJjZUxvYWRlZCgpO1xuXG4gICAgICAgICAgICBzY29wZS5lbWl0KCdsb2FkZWQnLCBzY29wZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc291cmNlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNvdXJjZS5vbmVycm9yID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFzY29wZS5pc0xvYWRpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHNjb3BlLmVtaXQoJ2Vycm9yJywgc2NvcGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBlciBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9lbWJlZGRlZC1jb250ZW50LTAuaHRtbCN0aGUtaW1nLWVsZW1lbnRcbiAgICAgICAgLy8gICBcIlRoZSB2YWx1ZSBvZiBgY29tcGxldGVgIGNhbiB0aHVzIGNoYW5nZSB3aGlsZSBhIHNjcmlwdCBpcyBleGVjdXRpbmcuXCJcbiAgICAgICAgLy8gU28gY29tcGxldGUgbmVlZHMgdG8gYmUgcmUtY2hlY2tlZCBhZnRlciB0aGUgY2FsbGJhY2tzIGhhdmUgYmVlbiBhZGRlZC4uXG4gICAgICAgIC8vIE5PVEU6IGNvbXBsZXRlIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgaW1hZ2UgaGFzIG5vIHNyYyBzbyBiZXN0IHRvIGNoZWNrIGlmIHRoZSBzcmMgaXMgc2V0LlxuICAgICAgICBpZiAoc291cmNlLmNvbXBsZXRlICYmIHNvdXJjZS5zcmMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIC4uYW5kIGlmIHdlJ3JlIGNvbXBsZXRlIG5vdywgbm8gbmVlZCBmb3IgY2FsbGJhY2tzXG4gICAgICAgICAgICBzb3VyY2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNvdXJjZS5vbmVycm9yID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZS53aWR0aCAmJiBzb3VyY2UuaGVpZ2h0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZUxvYWRlZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IHByZXZpb3VzIHN1YnNjcmliZXJzIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgaWYgKHdhc0xvYWRpbmcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgcHJldmlvdXMgc3Vic2NyaWJlcnMgcG9zc2libGVcbiAgICAgICAgICAgICAgICBpZiAod2FzTG9hZGluZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZWQgaW50ZXJuYWxseSB0byB1cGRhdGUgdGhlIHdpZHRoLCBoZWlnaHQsIGFuZCBzb21lIG90aGVyIHRyYWNraW5nIHZhcnMgb25jZVxuICogYSBzb3VyY2UgaGFzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQmFzZVRleHR1cmUucHJvdG90eXBlLl9zb3VyY2VMb2FkZWQgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVhbFdpZHRoID0gdGhpcy5zb3VyY2UubmF0dXJhbFdpZHRoIHx8IHRoaXMuc291cmNlLndpZHRoO1xuICAgIHRoaXMucmVhbEhlaWdodCA9IHRoaXMuc291cmNlLm5hdHVyYWxIZWlnaHQgfHwgdGhpcy5zb3VyY2UuaGVpZ2h0O1xuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMucmVhbFdpZHRoIC8gdGhpcy5yZXNvbHV0aW9uO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5yZWFsSGVpZ2h0IC8gdGhpcy5yZXNvbHV0aW9uO1xuXG5cbiAgICB0aGlzLmlzUG93ZXJPZlR3byA9IHV0aWxzLmlzUG93ZXJPZlR3byh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIGJhc2UgdGV4dHVyZVxuICpcbiAqL1xuQmFzZVRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICh0aGlzLmltYWdlVXJsKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbdGhpcy5pbWFnZVVybF07XG4gICAgICAgIGRlbGV0ZSB1dGlscy5UZXh0dXJlQ2FjaGVbdGhpcy5pbWFnZVVybF07XG5cbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0b3IuaXNDb2Nvb25KUylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2Uuc3JjID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuX3BpeGlJZClcbiAgICB7XG4gICAgICAgIGRlbGV0ZSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW3RoaXMuc291cmNlLl9waXhpSWRdO1xuICAgIH1cblxuICAgIHRoaXMuc291cmNlID0gbnVsbDtcblxuICAgIHRoaXMuZGlzcG9zZSgpO1xufTtcblxuLyoqXG4gKiBGcmVlcyB0aGUgdGV4dHVyZSBmcm9tIFdlYkdMIG1lbW9yeSB3aXRob3V0IGRlc3Ryb3lpbmcgdGhpcyB0ZXh0dXJlIG9iamVjdC5cbiAqIFRoaXMgbWVhbnMgeW91IGNhbiBzdGlsbCB1c2UgdGhlIHRleHR1cmUgbGF0ZXIgd2hpY2ggd2lsbCB1cGxvYWQgaXQgdG8gR1BVXG4gKiBtZW1vcnkgYWdhaW4uXG4gKlxuICovXG5CYXNlVGV4dHVyZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgdGhpcy5lbWl0KCdkaXNwb3NlJywgdGhpcyk7XG59O1xuXG4vKipcbiAqIENoYW5nZXMgdGhlIHNvdXJjZSBpbWFnZSBvZiB0aGUgdGV4dHVyZS5cbiAqIFRoZSBvcmlnaW5hbCBzb3VyY2UgbXVzdCBiZSBhbiBJbWFnZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBuZXdTcmMge3N0cmluZ30gdGhlIHBhdGggb2YgdGhlIGltYWdlXG4gKi9cbkJhc2VUZXh0dXJlLnByb3RvdHlwZS51cGRhdGVTb3VyY2VJbWFnZSA9IGZ1bmN0aW9uIChuZXdTcmMpXG57XG4gICAgdGhpcy5zb3VyY2Uuc3JjID0gbmV3U3JjO1xuXG4gICAgdGhpcy5sb2FkU291cmNlKHRoaXMuc291cmNlKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGJhc2UgdGV4dHVyZSBmcm9tIHRoZSBnaXZlbiBpbWFnZSB1cmwuXG4gKiBJZiB0aGUgaW1hZ2UgaXMgbm90IGluIHRoZSBiYXNlIHRleHR1cmUgY2FjaGUgaXQgd2lsbCBiZSBjcmVhdGVkIGFuZCBsb2FkZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGltYWdlVXJsIHtzdHJpbmd9IFRoZSBpbWFnZSB1cmwgb2YgdGhlIHRleHR1cmVcbiAqIEBwYXJhbSBbY3Jvc3NvcmlnaW49KGF1dG8pXSB7Ym9vbGVhbn0gU2hvdWxkIHVzZSBhbm9ueW1vdXMgQ09SUz8gRGVmYXVsdHMgdG8gdHJ1ZSBpZiB0aGUgVVJMIGlzIG5vdCBhIGRhdGEtVVJJLlxuICogQHBhcmFtIFtzY2FsZU1vZGU9c2NhbGVNb2Rlcy5ERUZBVUxUXSB7bnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIEJhc2VUZXh0dXJlXG4gKi9cbkJhc2VUZXh0dXJlLmZyb21JbWFnZSA9IGZ1bmN0aW9uIChpbWFnZVVybCwgY3Jvc3NvcmlnaW4sIHNjYWxlTW9kZSlcbntcbiAgICB2YXIgYmFzZVRleHR1cmUgPSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW2ltYWdlVXJsXTtcblxuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkICYmIGltYWdlVXJsLmluZGV4T2YoJ2RhdGE6JykgIT09IDApXG4gICAge1xuICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYXNlVGV4dHVyZSlcbiAgICB7XG4gICAgICAgIC8vIG5ldyBJbWFnZSgpIGJyZWFrcyB0ZXggbG9hZGluZyBpbiBzb21lIHZlcnNpb25zIG9mIENocm9tZS5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yMzgwNzFcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7Ly9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKGNyb3Nzb3JpZ2luKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFzZVRleHR1cmUgPSBuZXcgQmFzZVRleHR1cmUoaW1hZ2UsIHNjYWxlTW9kZSk7XG4gICAgICAgIGJhc2VUZXh0dXJlLmltYWdlVXJsID0gaW1hZ2VVcmw7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG5cbiAgICAgICAgdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtpbWFnZVVybF0gPSBiYXNlVGV4dHVyZTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBAMnggYXQgdGhlIGVuZCBvZiB0aGUgdXJsIHdlIGFyZSBnb2luZyB0byBhc3N1bWUgaXRzIGEgaGlnaHJlcyBpbWFnZVxuICAgICAgICBiYXNlVGV4dHVyZS5yZXNvbHV0aW9uID0gdXRpbHMuZ2V0UmVzb2x1dGlvbk9mVXJsKGltYWdlVXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVRleHR1cmU7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBiYXNlIHRleHR1cmUgZnJvbSB0aGUgZ2l2ZW4gY2FudmFzIGVsZW1lbnQuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIGNhbnZhcyB7Q2FudmFzfSBUaGUgY2FudmFzIGVsZW1lbnQgc291cmNlIG9mIHRoZSB0ZXh0dXJlXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7eyNjcm9zc0xpbmsgXCJQSVhJL3NjYWxlTW9kZXM6cHJvcGVydHlcIn19c2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4gQmFzZVRleHR1cmVcbiAqL1xuQmFzZVRleHR1cmUuZnJvbUNhbnZhcyA9IGZ1bmN0aW9uIChjYW52YXMsIHNjYWxlTW9kZSlcbntcbiAgICBpZiAoIWNhbnZhcy5fcGl4aUlkKVxuICAgIHtcbiAgICAgICAgY2FudmFzLl9waXhpSWQgPSAnY2FudmFzXycgKyB1dGlscy51dWlkKCk7XG4gICAgfVxuXG4gICAgdmFyIGJhc2VUZXh0dXJlID0gdXRpbHMuQmFzZVRleHR1cmVDYWNoZVtjYW52YXMuX3BpeGlJZF07XG5cbiAgICBpZiAoIWJhc2VUZXh0dXJlKVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUgPSBuZXcgQmFzZVRleHR1cmUoY2FudmFzLCBzY2FsZU1vZGUpO1xuICAgICAgICB1dGlscy5CYXNlVGV4dHVyZUNhY2hlW2NhbnZhcy5fcGl4aUlkXSA9IGJhc2VUZXh0dXJlO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlVGV4dHVyZTtcbn07XG4iLCJ2YXIgQmFzZVRleHR1cmUgPSByZXF1aXJlKCcuL0Jhc2VUZXh0dXJlJyksXG4gICAgVGV4dHVyZSA9IHJlcXVpcmUoJy4vVGV4dHVyZScpLFxuICAgIFJlbmRlclRhcmdldCA9IHJlcXVpcmUoJy4uL3JlbmRlcmVycy93ZWJnbC91dGlscy9SZW5kZXJUYXJnZXQnKSxcbiAgICBGaWx0ZXJNYW5hZ2VyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJzL3dlYmdsL21hbmFnZXJzL0ZpbHRlck1hbmFnZXInKSxcbiAgICBDYW52YXNCdWZmZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcnMvY2FudmFzL3V0aWxzL0NhbnZhc0J1ZmZlcicpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpLFxuICAgIHRlbXBNYXRyaXggPSBuZXcgbWF0aC5NYXRyaXgoKTtcblxuLyoqXG4gKiBBIFJlbmRlclRleHR1cmUgaXMgYSBzcGVjaWFsIHRleHR1cmUgdGhhdCBhbGxvd3MgYW55IFBpeGkgZGlzcGxheSBvYmplY3QgdG8gYmUgcmVuZGVyZWQgdG8gaXQuXG4gKlxuICogX19IaW50X186IEFsbCBEaXNwbGF5T2JqZWN0cyAoaS5lLiBTcHJpdGVzKSB0aGF0IHJlbmRlciB0byBhIFJlbmRlclRleHR1cmUgc2hvdWxkIGJlIHByZWxvYWRlZFxuICogb3RoZXJ3aXNlIGJsYWNrIHJlY3RhbmdsZXMgd2lsbCBiZSBkcmF3biBpbnN0ZWFkLlxuICpcbiAqIEEgUmVuZGVyVGV4dHVyZSB0YWtlcyBhIHNuYXBzaG90IG9mIGFueSBEaXNwbGF5IE9iamVjdCBnaXZlbiB0byBpdHMgcmVuZGVyIG1ldGhvZC4gVGhlIHBvc2l0aW9uXG4gKiBhbmQgcm90YXRpb24gb2YgdGhlIGdpdmVuIERpc3BsYXkgT2JqZWN0cyBpcyBpZ25vcmVkLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlbmRlclRleHR1cmUgPSBuZXcgUElYSS5SZW5kZXJUZXh0dXJlKDgwMCwgNjAwKTtcbiAqIHZhciBzcHJpdGUgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoXCJzcGluT2JqXzAxLnBuZ1wiKTtcbiAqXG4gKiBzcHJpdGUucG9zaXRpb24ueCA9IDgwMC8yO1xuICogc3ByaXRlLnBvc2l0aW9uLnkgPSA2MDAvMjtcbiAqIHNwcml0ZS5hbmNob3IueCA9IDAuNTtcbiAqIHNwcml0ZS5hbmNob3IueSA9IDAuNTtcbiAqXG4gKiByZW5kZXJUZXh0dXJlLnJlbmRlcihzcHJpdGUpO1xuICogYGBgXG4gKlxuICogVGhlIFNwcml0ZSBpbiB0aGlzIGNhc2Ugd2lsbCBiZSByZW5kZXJlZCB0byBhIHBvc2l0aW9uIG9mIDAsMC4gVG8gcmVuZGVyIHRoaXMgc3ByaXRlIGF0IGl0cyBhY3R1YWxcbiAqIHBvc2l0aW9uIGEgQ29udGFpbmVyIHNob3VsZCBiZSB1c2VkOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgZG9jID0gbmV3IENvbnRhaW5lcigpO1xuICpcbiAqIGRvYy5hZGRDaGlsZChzcHJpdGUpO1xuICpcbiAqIHJlbmRlclRleHR1cmUucmVuZGVyKGRvYyk7ICAvLyBSZW5kZXJzIHRvIGNlbnRlciBvZiByZW5kZXJUZXh0dXJlXG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIFRleHR1cmVcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAcGFyYW0gcmVuZGVyZXIge0NhbnZhc1JlbmRlcmVyfFdlYkdMUmVuZGVyZXJ9IFRoZSByZW5kZXJlciB1c2VkIGZvciB0aGlzIFJlbmRlclRleHR1cmVcbiAqIEBwYXJhbSBbd2lkdGg9MTAwXSB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIHJlbmRlciB0ZXh0dXJlXG4gKiBAcGFyYW0gW2hlaWdodD0xMDBdIHtudW1iZXJ9IFRoZSBoZWlnaHQgb2YgdGhlIHJlbmRlciB0ZXh0dXJlXG4gKiBAcGFyYW0gW3NjYWxlTW9kZV0ge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHBhcmFtIFtyZXNvbHV0aW9uPTFdIHtudW1iZXJ9IFRoZSByZXNvbHV0aW9uIG9mIHRoZSB0ZXh0dXJlIGJlaW5nIGdlbmVyYXRlZFxuICovXG5mdW5jdGlvbiBSZW5kZXJUZXh0dXJlKHJlbmRlcmVyLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZU1vZGUsIHJlc29sdXRpb24pXG57XG4gICAgaWYgKCFyZW5kZXJlcilcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNyZWF0ZSBSZW5kZXJUZXh0dXJlLCB5b3UgbXVzdCBwYXNzIGEgcmVuZGVyZXIgaW50byB0aGUgY29uc3RydWN0b3IuJyk7XG4gICAgfVxuXG4gICAgd2lkdGggPSB3aWR0aCB8fCAxMDA7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDEwMDtcbiAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbiB8fCBDT05TVC5SRVNPTFVUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgdGV4dHVyZSBvYmplY3QgdGhhdCB0aGlzIHRleHR1cmUgdXNlc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7QmFzZVRleHR1cmV9XG4gICAgICovXG4gICAgdmFyIGJhc2VUZXh0dXJlID0gbmV3IEJhc2VUZXh0dXJlKCk7XG4gICAgYmFzZVRleHR1cmUud2lkdGggPSB3aWR0aDtcbiAgICBiYXNlVGV4dHVyZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgYmFzZVRleHR1cmUucmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gc2NhbGVNb2RlIHx8IENPTlNULlNDQUxFX01PREVTLkRFRkFVTFQ7XG4gICAgYmFzZVRleHR1cmUuaGFzTG9hZGVkID0gdHJ1ZTtcblxuXG4gICAgVGV4dHVyZS5jYWxsKHRoaXMsXG4gICAgICAgIGJhc2VUZXh0dXJlLFxuICAgICAgICBuZXcgbWF0aC5SZWN0YW5nbGUoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICApO1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2l0aCBvZiB0aGUgcmVuZGVyIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByZW5kZXIgdGV4dHVyZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIFJlc29sdXRpb24gb2YgdGhlIHRleHR1cmUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFtaW5nIHJlY3RhbmdsZSBvZiB0aGUgcmVuZGVyIHRleHR1cmVcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICAvL3RoaXMuX2ZyYW1lID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnJlc29sdXRpb24sIHRoaXMuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGFyZWEgb2YgdGhlIEJhc2VUZXh0dXJlIGltYWdlIHRvIGFjdHVhbGx5IGNvcHkgdG8gdGhlIENhbnZhcyAvIFdlYkdMIHdoZW4gcmVuZGVyaW5nLFxuICAgICAqIGlycmVzcGVjdGl2ZSBvZiB0aGUgYWN0dWFsIGZyYW1lIHNpemUgb3IgcGxhY2VtZW50ICh3aGljaCBjYW4gYmUgaW5mbHVlbmNlZCBieSB0cmltbWVkIHRleHR1cmUgYXRsYXNlcylcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICAvL3RoaXMuY3JvcCA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCB0aGlzLndpZHRoICogdGhpcy5yZXNvbHV0aW9uLCB0aGlzLmhlaWdodCAqIHRoaXMucmVzb2x1dGlvbik7XG5cbiAgICAvKipcbiAgICAgKiBEcmF3L3JlbmRlciB0aGUgZ2l2ZW4gRGlzcGxheU9iamVjdCBvbnRvIHRoZSB0ZXh0dXJlLlxuICAgICAqXG4gICAgICogVGhlIGRpc3BsYXlPYmplY3QgYW5kIGRlc2NlbmRlbnRzIGFyZSB0cmFuc2Zvcm1lZCBkdXJpbmcgdGhpcyBvcGVyYXRpb24uXG4gICAgICogSWYgYHVwZGF0ZVRyYW5zZm9ybWAgaXMgdHJ1ZSB0aGVuIHRoZSB0cmFuc2Zvcm1hdGlvbnMgd2lsbCBiZSByZXN0b3JlZCBiZWZvcmUgdGhlXG4gICAgICogbWV0aG9kIHJldHVybnMuIE90aGVyd2lzZSBpdCBpcyB1cCB0byB0aGUgY2FsbGluZyBjb2RlIHRvIGNvcnJlY3RseSB1c2Ugb3IgcmVzZXRcbiAgICAgKiB0aGUgdHJhbnNmb3JtZWQgZGlzcGxheSBvYmplY3RzLlxuICAgICAqXG4gICAgICogVGhlIGRpc3BsYXkgb2JqZWN0IGlzIGFsd2F5cyByZW5kZXJlZCB3aXRoIGEgd29ybGRBbHBoYSB2YWx1ZSBvZiAxLlxuICAgICAqXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBwYXJhbSBkaXNwbGF5T2JqZWN0IHtEaXNwbGF5T2JqZWN0fSBUaGUgZGlzcGxheSBvYmplY3QgdG8gcmVuZGVyIHRoaXMgdGV4dHVyZSBvblxuICAgICAqIEBwYXJhbSBbbWF0cml4XSB7TWF0cml4fSBPcHRpb25hbCBtYXRyaXggdG8gYXBwbHkgdG8gdGhlIGRpc3BsYXkgb2JqZWN0IGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIFtjbGVhcj1mYWxzZV0ge2Jvb2xlYW59IElmIHRydWUgdGhlIHRleHR1cmUgd2lsbCBiZSBjbGVhcmVkIGJlZm9yZSB0aGUgZGlzcGxheU9iamVjdCBpcyBkcmF3blxuICAgICAqIEBwYXJhbSBbdXBkYXRlVHJhbnNmb3JtPXRydWVdIHtib29sZWFufSBJZiB0cnVlIHRoZSBkaXNwbGF5T2JqZWN0J3Mgd29ybGRUcmFuc2Zvcm0vd29ybGRBbHBoYSBhbmQgYWxsIGNoaWxkcmVuXG4gICAgICogIHRyYW5zZm9ybWF0aW9ucyB3aWxsIGJlIHJlc3RvcmVkLiBOb3QgcmVzdG9yaW5nIHRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZSBhIGxpdHRsZSBmYXN0ZXIuXG4gICAgICovXG4gICAgdGhpcy5yZW5kZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVyIHRoaXMgUmVuZGVyVGV4dHVyZSB1c2VzLiBBIFJlbmRlclRleHR1cmUgY2FuIG9ubHkgYmVsb25nIHRvIG9uZSByZW5kZXJlciBhdCB0aGUgbW9tZW50IGlmIGl0cyB3ZWJHTC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0NhbnZhc1JlbmRlcmVyfFdlYkdMUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIudHlwZSA9PT0gQ09OU1QuUkVOREVSRVJfVFlQRS5XRUJHTClcbiAgICB7XG4gICAgICAgIHZhciBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlQnVmZmVyID0gbmV3IFJlbmRlclRhcmdldChnbCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG51bGwsIHRoaXMucmVzb2x1dGlvbik7Ly8sIHRoaXMuYmFzZVRleHR1cmUuc2NhbGVNb2RlKTtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5fZ2xUZXh0dXJlc1tnbC5pZF0gPSAgdGhpcy50ZXh0dXJlQnVmZmVyLnRleHR1cmU7XG5cbiAgICAgICAgLy9UT0RPIHJlZmFjdG9yIGZpbHRlciBtYW5hZ2VyLi4gYXMgcmVhbGx5IGl0cyBubyBsb25nZXIgYSBtYW5hZ2VyIGlmIHdlIHVzZSBpdCBoZXJlLi5cbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gbmV3IEZpbHRlck1hbmFnZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5vbkNvbnRleHRDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlcldlYkdMO1xuXG4gICAgICAgIC8vIHRoZSBjcmVhdGlvbiBvZiBhIGZpbHRlciBtYW5hZ2VyIHVuYmluZHMgdGhlIGJ1ZmZlcnMuLlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmN1cnJlbnRSZW5kZXJlci5zdGFydCgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXJDYW52YXM7XG4gICAgICAgIHRoaXMudGV4dHVyZUJ1ZmZlciA9IG5ldyBDYW52YXNCdWZmZXIodGhpcy53aWR0aCogdGhpcy5yZXNvbHV0aW9uLCB0aGlzLmhlaWdodCogdGhpcy5yZXNvbHV0aW9uKTtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5zb3VyY2UgPSB0aGlzLnRleHR1cmVCdWZmZXIuY2FudmFzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy52YWxpZCA9IHRydWU7XG5cbiAgICB0aGlzLl91cGRhdGVVdnMoKTtcbn1cblxuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRleHR1cmUucHJvdG90eXBlKTtcblJlbmRlclRleHR1cmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVuZGVyVGV4dHVyZTtcbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyVGV4dHVyZTtcblxuLyoqXG4gKiBSZXNpemVzIHRoZSBSZW5kZXJUZXh0dXJlLlxuICpcbiAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBUaGUgd2lkdGggdG8gcmVzaXplIHRvLlxuICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfSBUaGUgaGVpZ2h0IHRvIHJlc2l6ZSB0by5cbiAqIEBwYXJhbSB1cGRhdGVCYXNlIHtib29sZWFufSBTaG91bGQgdGhlIGJhc2VUZXh0dXJlLndpZHRoIGFuZCBoZWlnaHQgdmFsdWVzIGJlIHJlc2l6ZWQgYXMgd2VsbD9cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHVwZGF0ZUJhc2UpXG57XG4gICAgaWYgKHdpZHRoID09PSB0aGlzLndpZHRoICYmIGhlaWdodCA9PT0gdGhpcy5oZWlnaHQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52YWxpZCA9ICh3aWR0aCA+IDAgJiYgaGVpZ2h0ID4gMCk7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5fZnJhbWUud2lkdGggPSB0aGlzLmNyb3Aud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9ICB0aGlzLl9mcmFtZS5oZWlnaHQgPSB0aGlzLmNyb3AuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgaWYgKHVwZGF0ZUJhc2UpXG4gICAge1xuICAgICAgICB0aGlzLmJhc2VUZXh0dXJlLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5iYXNlVGV4dHVyZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci50eXBlID09PSBDT05TVC5SRU5ERVJFUl9UWVBFLldFQkdMKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uLnggPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uLnkgPSAtdGhpcy5oZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGlmICghdGhpcy52YWxpZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHR1cmVCdWZmZXIucmVzaXplKHRoaXMud2lkdGggKiB0aGlzLnJlc29sdXRpb24sIHRoaXMuaGVpZ2h0ICogdGhpcy5yZXNvbHV0aW9uKTtcblxuICAgIGlmKHRoaXMuZmlsdGVyTWFuYWdlcilcbiAgICB7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBSZW5kZXJUZXh0dXJlLlxuICpcbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICghdGhpcy52YWxpZClcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci50eXBlID09PSBDT05TVC5SRU5ERVJFUl9UWVBFLldFQkdMKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5yZW5kZXJlci5nbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlQnVmZmVyLmZyYW1lQnVmZmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHR1cmVCdWZmZXIuY2xlYXIoKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgbWV0aG9kIGFzc2lnbmVkIHRvIHRoZSBgcmVuZGVyYCBwcm9wZXJ0eSBpZiB1c2luZyBhIENhbnZhc1JlbmRlcmVyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZGlzcGxheU9iamVjdCB7RGlzcGxheU9iamVjdH0gVGhlIGRpc3BsYXkgb2JqZWN0IHRvIHJlbmRlciB0aGlzIHRleHR1cmUgb25cbiAqIEBwYXJhbSBbbWF0cml4XSB7TWF0cml4fSBPcHRpb25hbCBtYXRyaXggdG8gYXBwbHkgdG8gdGhlIGRpc3BsYXkgb2JqZWN0IGJlZm9yZSByZW5kZXJpbmcuXG4gKiBAcGFyYW0gW2NsZWFyPWZhbHNlXSB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGUgdGV4dHVyZSB3aWxsIGJlIGNsZWFyZWQgYmVmb3JlIHRoZSBkaXNwbGF5T2JqZWN0IGlzIGRyYXduXG4gKiBAcGFyYW0gW3VwZGF0ZVRyYW5zZm9ybT10cnVlXSB7Ym9vbGVhbn0gSWYgdHJ1ZSB0aGUgZGlzcGxheU9iamVjdCdzIHdvcmxkVHJhbnNmb3JtL3dvcmxkQWxwaGEgYW5kIGFsbCBjaGlsZHJlblxuICogIHRyYW5zZm9ybWF0aW9ucyB3aWxsIGJlIHJlc3RvcmVkLiBOb3QgcmVzdG9yaW5nIHRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZSBhIGxpdHRsZSBmYXN0ZXIuXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLnJlbmRlcldlYkdMID0gZnVuY3Rpb24gKGRpc3BsYXlPYmplY3QsIG1hdHJpeCwgY2xlYXIsIHVwZGF0ZVRyYW5zZm9ybSlcbntcbiAgICBpZiAoIXRoaXMudmFsaWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9UT0RPIHRoaXMgc2hvdWxkIGJlIHRydWUgYnkgZGVmYXVsdFxuICAgIHVwZGF0ZVRyYW5zZm9ybSA9ICEhdXBkYXRlVHJhbnNmb3JtO1xuXG4gICAgdGhpcy50ZXh0dXJlQnVmZmVyLnRyYW5zZm9ybSA9IG1hdHJpeDtcblxuXG4gICAgLy8gc2V0V29ybGQgQWxwaGEgdG8gZW5zdXJlIHRoYXQgdGhlIG9iamVjdCBpcyByZW5kZXJlciBhdCBmdWxsIG9wYWNpdHlcbiAgICBkaXNwbGF5T2JqZWN0LndvcmxkQWxwaGEgPSBkaXNwbGF5T2JqZWN0LmFscGhhO1xuXG4gICAgaWYgKHVwZGF0ZVRyYW5zZm9ybSlcbiAgICB7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIG1hdHJpeCBvZiB0aGUgZGlzcGxhdHlPYmplY3QuLlxuICAgICAgICBkaXNwbGF5T2JqZWN0LndvcmxkVHJhbnNmb3JtLmlkZW50aXR5KCk7XG5cbiAgICAgICAgZGlzcGxheU9iamVjdC5jdXJyZW50Qm91bmRzID0gbnVsbDtcblxuICAgICAgICAvLyBUaW1lIHRvIHVwZGF0ZSBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNwbGF5T2JqZWN0IHdpdGggdGhlIG5ldyBtYXRyaXguLlxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBkaXNwbGF5T2JqZWN0LmNoaWxkcmVuO1xuICAgICAgICB2YXIgaSwgajtcblxuICAgICAgICBmb3IgKGkgPSAwLCBqID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZHJlbltpXS51cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICBpZiAoY2xlYXIpXG4gICAge1xuICAgICAgICB0aGlzLnRleHR1cmVCdWZmZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvL1RPRE8gcmVuYW1lIHRleHR1cmVCdWZmZXIgdG8gcmVuZGVyVGFyZ2V0Li5cbiAgICB2YXIgdGVtcCA9ICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXI7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXIgPSB0aGlzLmZpbHRlck1hbmFnZXI7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXJEaXNwbGF5T2JqZWN0KGRpc3BsYXlPYmplY3QsIHRoaXMudGV4dHVyZUJ1ZmZlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmZpbHRlck1hbmFnZXIgPSB0ZW1wO1xuXG5cbn07XG5cblxuLyoqXG4gKiBJbnRlcm5hbCBtZXRob2QgYXNzaWduZWQgdG8gdGhlIGByZW5kZXJgIHByb3BlcnR5IGlmIHVzaW5nIGEgQ2FudmFzUmVuZGVyZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBkaXNwbGF5T2JqZWN0IHtEaXNwbGF5T2JqZWN0fSBUaGUgZGlzcGxheSBvYmplY3QgdG8gcmVuZGVyIHRoaXMgdGV4dHVyZSBvblxuICogQHBhcmFtIFttYXRyaXhdIHtNYXRyaXh9IE9wdGlvbmFsIG1hdHJpeCB0byBhcHBseSB0byB0aGUgZGlzcGxheSBvYmplY3QgYmVmb3JlIHJlbmRlcmluZy5cbiAqIEBwYXJhbSBbY2xlYXJdIHtib29sZWFufSBJZiB0cnVlIHRoZSB0ZXh0dXJlIHdpbGwgYmUgY2xlYXJlZCBiZWZvcmUgdGhlIGRpc3BsYXlPYmplY3QgaXMgZHJhd25cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUucmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKGRpc3BsYXlPYmplY3QsIG1hdHJpeCwgY2xlYXIsIHVwZGF0ZVRyYW5zZm9ybSlcbntcbiAgICBpZiAoIXRoaXMudmFsaWQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNmb3JtID0gISF1cGRhdGVUcmFuc2Zvcm07XG4gICAgdmFyIGNhY2hlZFd0ID0gZGlzcGxheU9iamVjdC53b3JsZFRyYW5zZm9ybTtcblxuICAgIHZhciB3dCA9IHRlbXBNYXRyaXg7XG5cbiAgICB3dC5pZGVudGl0eSgpO1xuXG4gICAgaWYgKG1hdHJpeClcbiAgICB7XG4gICAgICAgIHd0LmFwcGVuZChtYXRyaXgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlPYmplY3Qud29ybGRUcmFuc2Zvcm0gPSB3dDtcblxuICAgIC8vIHNldFdvcmxkIEFscGhhIHRvIGVuc3VyZSB0aGF0IHRoZSBvYmplY3QgaXMgcmVuZGVyZXIgYXQgZnVsbCBvcGFjaXR5XG4gICAgZGlzcGxheU9iamVjdC53b3JsZEFscGhhID0gMTtcblxuICAgIC8vIFRpbWUgdG8gdXBkYXRlIGFsbCB0aGUgY2hpbGRyZW4gb2YgdGhlIGRpc3BsYXlPYmplY3Qgd2l0aCB0aGUgbmV3IG1hdHJpeC4uXG4gICAgdmFyIGNoaWxkcmVuID0gZGlzcGxheU9iamVjdC5jaGlsZHJlbjtcbiAgICB2YXIgaSwgajtcblxuICAgIGZvciAoaSA9IDAsIGogPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpXG4gICAge1xuICAgICAgICBjaGlsZHJlbltpXS51cGRhdGVUcmFuc2Zvcm0oKTtcbiAgICB9XG5cbiAgICBpZiAoY2xlYXIpXG4gICAge1xuICAgICAgICB0aGlzLnRleHR1cmVCdWZmZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5T2JqZWN0LndvcmxkVHJhbnNmb3JtID0gY2FjaGVkV3Q7XG5cbi8vICAgIHRoaXMudGV4dHVyZUJ1ZmZlci5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMudGV4dHVyZUJ1ZmZlci5jb250ZXh0O1xuXG4gICAgdmFyIHJlYWxSZXNvbHV0aW9uID0gdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uID0gdGhpcy5yZXNvbHV0aW9uO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXJEaXNwbGF5T2JqZWN0KGRpc3BsYXlPYmplY3QsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZXNvbHV0aW9uID0gcmVhbFJlc29sdXRpb247XG4gLy8gICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgIC8vIGNvbnRleHQuZmlsbFN0eWxlID1cIiNGRjAwMDBcIlxuLy8gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG5cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyB0ZXh0dXJlXG4gKlxuICogQHBhcmFtIGRlc3Ryb3lCYXNlIHtib29sZWFufSBXaGV0aGVyIHRvIGRlc3Ryb3kgdGhlIGJhc2UgdGV4dHVyZSBhcyB3ZWxsXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKVxue1xuICAgIFRleHR1cmUucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzLCB0cnVlKTtcblxuICAgIHRoaXMudGV4dHVyZUJ1ZmZlci5kZXN0cm95KCk7XG5cbiAgICAvLyBkZXN0cm95IHRoZSBmaWx0ZXJtYW5hZ2VyLi5cbiAgICBpZih0aGlzLmZpbHRlck1hbmFnZXIpXG4gICAge1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xufTtcblxuLyoqXG4gKiBXaWxsIHJldHVybiBhIEhUTUwgSW1hZ2Ugb2YgdGhlIHRleHR1cmVcbiAqXG4gKiBAcmV0dXJuIHtJbWFnZX1cbiAqL1xuUmVuZGVyVGV4dHVyZS5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKVxue1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHRoaXMuZ2V0QmFzZTY0KCk7XG4gICAgcmV0dXJuIGltYWdlO1xufTtcblxuLyoqXG4gKiBXaWxsIHJldHVybiBhIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9mIHRoaXMgdGV4dHVyZS4gSXQgd29ya3MgYnkgY2FsbGluZyBSZW5kZXJUZXh0dXJlLmdldENhbnZhcyBhbmQgdGhlbiBydW5uaW5nIHRvRGF0YVVSTCBvbiB0aGF0LlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgdGhlIHRleHR1cmUuXG4gKi9cblJlbmRlclRleHR1cmUucHJvdG90eXBlLmdldEJhc2U2NCA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FudmFzKCkudG9EYXRhVVJMKCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBDYW52YXMgZWxlbWVudCwgcmVuZGVycyB0aGlzIFJlbmRlclRleHR1cmUgdG8gaXQgYW5kIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gQSBDYW52YXMgZWxlbWVudCB3aXRoIHRoZSB0ZXh0dXJlIHJlbmRlcmVkIG9uLlxuICovXG5SZW5kZXJUZXh0dXJlLnByb3RvdHlwZS5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICh0aGlzLnJlbmRlcmVyLnR5cGUgPT09IENPTlNULlJFTkRFUkVSX1RZUEUuV0VCR0wpXG4gICAge1xuICAgICAgICB2YXIgZ2wgPSAgdGhpcy5yZW5kZXJlci5nbDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy50ZXh0dXJlQnVmZmVyLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy50ZXh0dXJlQnVmZmVyLmhlaWdodDtcblxuICAgICAgICB2YXIgd2ViR0xQaXhlbHMgPSBuZXcgVWludDhBcnJheSg0ICogd2lkdGggKiBoZWlnaHQpO1xuXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlQnVmZmVyLmZyYW1lQnVmZmVyKTtcbiAgICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB3aWR0aCwgaGVpZ2h0LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCB3ZWJHTFBpeGVscyk7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgdmFyIHRlbXBDYW52YXMgPSBuZXcgQ2FudmFzQnVmZmVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB2YXIgY2FudmFzRGF0YSA9IHRlbXBDYW52YXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNhbnZhc0RhdGEuZGF0YS5zZXQod2ViR0xQaXhlbHMpO1xuXG4gICAgICAgIHRlbXBDYW52YXMuY29udGV4dC5wdXRJbWFnZURhdGEoY2FudmFzRGF0YSwgMCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXBDYW52YXMuY2FudmFzO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlQnVmZmVyLmNhbnZhcztcbiAgICB9XG59O1xuIiwidmFyIEJhc2VUZXh0dXJlID0gcmVxdWlyZSgnLi9CYXNlVGV4dHVyZScpLFxuICAgIFZpZGVvQmFzZVRleHR1cmUgPSByZXF1aXJlKCcuL1ZpZGVvQmFzZVRleHR1cmUnKSxcbiAgICBUZXh0dXJlVXZzID0gcmVxdWlyZSgnLi9UZXh0dXJlVXZzJyksXG4gICAgZXZlbnRUYXJnZXQgPSByZXF1aXJlKCcuLi91dGlscy9ldmVudFRhcmdldCcpLFxuICAgIG1hdGggPSByZXF1aXJlKCcuLi9tYXRoJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIEEgdGV4dHVyZSBzdG9yZXMgdGhlIGluZm9ybWF0aW9uIHRoYXQgcmVwcmVzZW50cyBhbiBpbWFnZSBvciBwYXJ0IG9mIGFuIGltYWdlLiBJdCBjYW5ub3QgYmUgYWRkZWRcbiAqIHRvIHRoZSBkaXNwbGF5IGxpc3QgZGlyZWN0bHkuIEluc3RlYWQgdXNlIGl0IGFzIHRoZSB0ZXh0dXJlIGZvciBhIFNwcml0ZS4gSWYgbm8gZnJhbWUgaXMgcHJvdmlkZWQgdGhlbiB0aGUgd2hvbGUgaW1hZ2UgaXMgdXNlZC5cbiAqXG4gKiBZb3UgY2FuIGRpcmVjdGx5IGNyZWF0ZSBhIHRleHR1cmUgZnJvbSBhbiBpbWFnZSBhbmQgdGhlbiByZXVzZSBpdCBtdWx0aXBsZSB0aW1lcyBsaWtlIHRoaXMgOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9pbWFnZS5wbmcnKTtcbiAqIHZhciBzcHJpdGUxID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpO1xuICogdmFyIHNwcml0ZTIgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBtaXhlcyBldmVudFRhcmdldFxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBiYXNlVGV4dHVyZSB7QmFzZVRleHR1cmV9IFRoZSBiYXNlIHRleHR1cmUgc291cmNlIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZSBmcm9tXG4gKiBAcGFyYW0gW2ZyYW1lXSB7UmVjdGFuZ2xlfSBUaGUgcmVjdGFuZ2xlIGZyYW1lIG9mIHRoZSB0ZXh0dXJlIHRvIHNob3dcbiAqIEBwYXJhbSBbY3JvcF0ge1JlY3RhbmdsZX0gVGhlIGFyZWEgb2Ygb3JpZ2luYWwgdGV4dHVyZVxuICogQHBhcmFtIFt0cmltXSB7UmVjdGFuZ2xlfSBUcmltbWVkIHRleHR1cmUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gW3JvdGF0ZV0ge2Jvb2xlYW59IGluZGljYXRlcyB3aGV0aGVyIHRoZSB0ZXh0dXJlIHNob3VsZCBiZSByb3RhdGVkIGJ5IDkwIGRlZ3JlZXMgKCB1c2VkIGJ5IHRleHR1cmUgcGFja2VyIClcbiAqL1xuZnVuY3Rpb24gVGV4dHVyZShiYXNlVGV4dHVyZSwgZnJhbWUsIGNyb3AsIHRyaW0sIHJvdGF0ZSlcbntcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgVGV4dHVyZSBoYXZlIGFueSBmcmFtZSBkYXRhIGFzc2lnbmVkIHRvIGl0P1xuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLm5vRnJhbWUgPSBmYWxzZTtcblxuICAgIGlmICghZnJhbWUpXG4gICAge1xuICAgICAgICB0aGlzLm5vRnJhbWUgPSB0cnVlO1xuICAgICAgICBmcmFtZSA9IG5ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoYmFzZVRleHR1cmUgaW5zdGFuY2VvZiBUZXh0dXJlKVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUgPSBiYXNlVGV4dHVyZS5iYXNlVGV4dHVyZTtcbiAgICB9XG5cbiAgLy8gIGNvbnNvbGUubG9nKGZyYW1lKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIHRleHR1cmUgdGhhdCB0aGlzIHRleHR1cmUgdXNlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge0Jhc2VUZXh0dXJlfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVRleHR1cmUgPSBiYXNlVGV4dHVyZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmcmFtZSBzcGVjaWZpZXMgdGhlIHJlZ2lvbiBvZiB0aGUgYmFzZSB0ZXh0dXJlIHRoYXQgdGhpcyB0ZXh0dXJlIHVzZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge1JlY3RhbmdsZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dHVyZSB0cmltIGRhdGEuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgdGhpcy50cmltID0gdHJpbTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBsZXQgdGhlIHJlbmRlcmVyIGtub3cgaWYgdGhlIHRleHR1cmUgaXMgdmFsaWQuIElmIGl0J3Mgbm90IHRoZW4gaXQgY2Fubm90IGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgbGV0IGEgcmVuZGVyZXIga25vdyB0aGF0IGEgdGV4dHVyZSBoYXMgYmVlbiB1cGRhdGVkICh1c2VkIG1haW5seSBmb3Igd2ViR0wgdXYgdXBkYXRlcylcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZXF1aXJlc1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFdlYkdMIFVWIGRhdGEgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtUZXh0dXJlVXZzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdXZzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dHVyZSBpbiBwaXhlbHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy53aWR0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBUZXh0dXJlIGluIHBpeGVscy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBhcmVhIG9mIHRoZSBCYXNlVGV4dHVyZSBpbWFnZSB0byBhY3R1YWxseSBjb3B5IHRvIHRoZSBDYW52YXMgLyBXZWJHTCB3aGVuIHJlbmRlcmluZyxcbiAgICAgKiBpcnJlc3BlY3RpdmUgb2YgdGhlIGFjdHVhbCBmcmFtZSBzaXplIG9yIHBsYWNlbWVudCAod2hpY2ggY2FuIGJlIGluZmx1ZW5jZWQgYnkgdHJpbW1lZCB0ZXh0dXJlIGF0bGFzZXMpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtSZWN0YW5nbGV9XG4gICAgICovXG4gICAgdGhpcy5jcm9wID0gY3JvcCB8fCBmcmFtZTsvL25ldyBtYXRoLlJlY3RhbmdsZSgwLCAwLCAxLCAxKTtcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0ZXh0dXJlIHNob3VsZCBiZSByb3RhdGVkIGJ5IDkwIGRlZ3JlZXNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJvdGF0ZSA9ICEhcm90YXRlO1xuXG4gICAgaWYgKGJhc2VUZXh0dXJlLmhhc0xvYWRlZClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm5vRnJhbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZyYW1lID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIGJhc2VUZXh0dXJlLndpZHRoLCBiYXNlVGV4dHVyZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgYmFzZVRleHR1cmUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkJywgdGhpcy5vbkJhc2VUZXh0dXJlTG9hZGVkLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuVGV4dHVyZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZXh0dXJlO1xubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlO1xuXG5ldmVudFRhcmdldC5taXhpbihUZXh0dXJlLnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRleHR1cmUucHJvdG90eXBlLCB7XG4gICAgZnJhbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGZyYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgICAgICAgICB0aGlzLm5vRnJhbWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGZyYW1lLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XG5cblxuXG4gICAgICAgICAgICBpZiAoIXRoaXMudHJpbSAmJiAhdGhpcy5yb3RhdGUgJiYgKGZyYW1lLnggKyBmcmFtZS53aWR0aCA+IHRoaXMuYmFzZVRleHR1cmUud2lkdGggfHwgZnJhbWUueSArIGZyYW1lLmhlaWdodCA+IHRoaXMuYmFzZVRleHR1cmUuaGVpZ2h0KSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHR1cmUgRXJyb3I6IGZyYW1lIGRvZXMgbm90IGZpdCBpbnNpZGUgdGhlIGJhc2UgVGV4dHVyZSBkaW1lbnNpb25zICcgKyB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy90aGlzLnZhbGlkID0gZnJhbWUgJiYgZnJhbWUud2lkdGggJiYgZnJhbWUuaGVpZ2h0ICYmIHRoaXMuYmFzZVRleHR1cmUuc291cmNlICYmIHRoaXMuYmFzZVRleHR1cmUuaGFzTG9hZGVkO1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZyYW1lICYmIGZyYW1lLndpZHRoICYmIGZyYW1lLmhlaWdodCAmJiB0aGlzLmJhc2VUZXh0dXJlLmhhc0xvYWRlZDtcblxuICAgICAgICAgICAgaWYgKHRoaXMudHJpbSlcbiAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnRyaW0ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnRyaW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLndpZHRoID0gdGhpcy50cmltLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLmhlaWdodCA9IHRoaXMudHJpbS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wID0gZnJhbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBpZiAodGhpcy52YWxpZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVVdnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhpcyB0ZXh0dXJlIG9uIHRoZSBncHUuXG4gKlxuICovXG5UZXh0dXJlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuYmFzZVRleHR1cmUudXBkYXRlKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHRoZSBiYXNlIHRleHR1cmUgaXMgbG9hZGVkXG4gKlxuICogQHByaXZhdGVcbiAqL1xuVGV4dHVyZS5wcm90b3R5cGUub25CYXNlVGV4dHVyZUxvYWRlZCA9IGZ1bmN0aW9uICgpXG57XG4gICAgdmFyIGJhc2VUZXh0dXJlID0gdGhpcy5iYXNlVGV4dHVyZTtcbiAgICBiYXNlVGV4dHVyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWQnLCB0aGlzLm9uTG9hZGVkKTtcblxuICAgIC8vIFRPRE8gdGhpcyBjb2RlIGxvb2tzIGNvbmZ1c2luZy4uIGJvbyB0byBhYnVzaW5nIGdldHRlcnMgYW5kIHNldHRlcnNzIVxuICAgIGlmICh0aGlzLm5vRnJhbWUpXG4gICAge1xuICAgICAgICB0aGlzLmZyYW1lID0gbmV3IG1hdGguUmVjdGFuZ2xlKDAsIDAsIGJhc2VUZXh0dXJlLndpZHRoLCBiYXNlVGV4dHVyZS5oZWlnaHQpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5fZnJhbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCAndXBkYXRlJywgdGhpcyApO1xufTtcblxuLyoqXG4gKiBEZXN0cm95cyB0aGlzIHRleHR1cmVcbiAqXG4gKiBAcGFyYW0gZGVzdHJveUJhc2Uge2Jvb2xlYW59IFdoZXRoZXIgdG8gZGVzdHJveSB0aGUgYmFzZSB0ZXh0dXJlIGFzIHdlbGxcbiAqL1xuVGV4dHVyZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChkZXN0cm95QmFzZSlcbntcbiAgICBpZiAoZGVzdHJveUJhc2UpXG4gICAge1xuICAgICAgICB0aGlzLmJhc2VUZXh0dXJlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbGlkID0gZmFsc2U7XG59O1xuXG5UZXh0dXJlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuYmFzZVRleHR1cmUsIHRoaXMuZnJhbWUsIHRoaXMuY3JvcCwgdGhpcy50cmltLCB0aGlzLnJvdGF0ZSk7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgV2ViR0wgVVYgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuVGV4dHVyZS5wcm90b3R5cGUuX3VwZGF0ZVV2cyA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKCF0aGlzLl91dnMpXG4gICAge1xuICAgICAgICB0aGlzLl91dnMgPSBuZXcgVGV4dHVyZVV2cygpO1xuICAgIH1cblxuICAgIHRoaXMuX3V2cy5zZXQodGhpcy5jcm9wLCB0aGlzLmJhc2VUZXh0dXJlLCB0aGlzLnJvdGF0ZSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBUZXh0dXJlIG9iamVjdCBmcm9tIHRoZSBnaXZlbiBpbWFnZSB1cmwuXG4gKiBJZiB0aGUgaW1hZ2UgaXMgbm90IGluIHRoZSB0ZXh0dXJlIGNhY2hlIGl0IHdpbGwgYmUgIGNyZWF0ZWQgYW5kIGxvYWRlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gaW1hZ2VVcmwge3N0cmluZ30gVGhlIGltYWdlIHVybCBvZiB0aGUgdGV4dHVyZVxuICogQHBhcmFtIGNyb3Nzb3JpZ2luIHtib29sZWFufSBXaGV0aGVyIHJlcXVlc3RzIHNob3VsZCBiZSB0cmVhdGVkIGFzIGNyb3Nzb3JpZ2luXG4gKiBAcGFyYW0gc2NhbGVNb2RlIHtudW1iZXJ9IFNlZSB7eyNjcm9zc0xpbmsgXCJQSVhJL3NjYWxlTW9kZXM6cHJvcGVydHlcIn19c2NhbGVNb2Rlc3t7L2Nyb3NzTGlua319IGZvciBwb3NzaWJsZSB2YWx1ZXNcbiAqIEByZXR1cm4ge1RleHR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIHRleHR1cmVcbiAqL1xuVGV4dHVyZS5mcm9tSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VVcmwsIGNyb3Nzb3JpZ2luLCBzY2FsZU1vZGUpXG57XG4gICAgdmFyIHRleHR1cmUgPSB1dGlscy5UZXh0dXJlQ2FjaGVbaW1hZ2VVcmxdO1xuXG4gICAgaWYgKCF0ZXh0dXJlKVxuICAgIHtcbiAgICAgICAgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKEJhc2VUZXh0dXJlLmZyb21JbWFnZShpbWFnZVVybCwgY3Jvc3NvcmlnaW4sIHNjYWxlTW9kZSkpO1xuICAgICAgICB1dGlscy5UZXh0dXJlQ2FjaGVbaW1hZ2VVcmxdID0gdGV4dHVyZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHNwcml0ZSB0aGF0IHdpbGwgY29udGFpbiBhIHRleHR1cmUgZnJvbSB0aGUgVGV4dHVyZUNhY2hlIGJhc2VkIG9uIHRoZSBmcmFtZUlkXG4gKiBUaGUgZnJhbWUgaWRzIGFyZSBjcmVhdGVkIHdoZW4gYSBUZXh0dXJlIHBhY2tlciBmaWxlIGhhcyBiZWVuIGxvYWRlZFxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBmcmFtZUlkIHtTdHJpbmd9IFRoZSBmcmFtZSBJZCBvZiB0aGUgdGV4dHVyZSBpbiB0aGUgY2FjaGVcbiAqIEByZXR1cm4ge1RleHR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIHRleHR1cmVcbiAqL1xuVGV4dHVyZS5mcm9tRnJhbWUgPSBmdW5jdGlvbiAoZnJhbWVJZClcbntcbiAgICB2YXIgdGV4dHVyZSA9IHV0aWxzLlRleHR1cmVDYWNoZVtmcmFtZUlkXTtcblxuICAgIGlmICghdGV4dHVyZSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZyYW1lSWQgXCInICsgZnJhbWVJZCArICdcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdGV4dHVyZSBjYWNoZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IFRleHR1cmUgYmFzZWQgb24gdGhlIGdpdmVuIGNhbnZhcyBlbGVtZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBjYW52YXMge0NhbnZhc30gVGhlIGNhbnZhcyBlbGVtZW50IHNvdXJjZSBvZiB0aGUgdGV4dHVyZVxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge3sjY3Jvc3NMaW5rIFwiUElYSS9zY2FsZU1vZGVzOnByb3BlcnR5XCJ9fXNjYWxlTW9kZXN7ey9jcm9zc0xpbmt9fSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtUZXh0dXJlfVxuICovXG5UZXh0dXJlLmZyb21DYW52YXMgPSBmdW5jdGlvbiAoY2FudmFzLCBzY2FsZU1vZGUpXG57XG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKEJhc2VUZXh0dXJlLmZyb21DYW52YXMoY2FudmFzLCBzY2FsZU1vZGUpKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBUZXh0dXJlIGJhc2VkIG9uIHRoZSBnaXZlbiB2aWRlbyBlbGVtZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB2aWRlbyB7SFRNTFZpZGVvRWxlbWVudH1cbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2VlIHt7I2Nyb3NzTGluayBcIlBJWEkvc2NhbGVNb2Rlczpwcm9wZXJ0eVwifX1zY2FsZU1vZGVze3svY3Jvc3NMaW5rfX0gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VGV4dHVyZX0gQSBUZXh0dXJlXG4gKi9cblRleHR1cmUuZnJvbVZpZGVvID0gZnVuY3Rpb24gKHZpZGVvLCBzY2FsZU1vZGUpXG57XG4gICAgcmV0dXJuIG5ldyBUZXh0dXJlKFZpZGVvQmFzZVRleHR1cmUuYmFzZVRleHR1cmVGcm9tVmlkZW8odmlkZW8sIHNjYWxlTW9kZSkpO1xufTtcblxuVGV4dHVyZS5mcm9tVmlkZW9VcmwgPSBmdW5jdGlvbiAodmlkZW9VcmwsIHNjYWxlTW9kZSlcbntcbiAgICByZXR1cm4gbmV3IFRleHR1cmUoVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJsKHZpZGVvVXJsLCBzY2FsZU1vZGUpKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIHRleHR1cmUgdG8gdGhlIGdsb2JhbCB1dGlscy5UZXh0dXJlQ2FjaGUuIFRoaXMgY2FjaGUgaXMgc2hhcmVkIGFjcm9zcyB0aGUgd2hvbGUgUElYSSBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHBhcmFtIHRleHR1cmUge1RleHR1cmV9IFRoZSBUZXh0dXJlIHRvIGFkZCB0byB0aGUgY2FjaGUuXG4gKiBAcGFyYW0gaWQge3N0cmluZ30gVGhlIGlkIHRoYXQgdGhlIHRleHR1cmUgd2lsbCBiZSBzdG9yZWQgYWdhaW5zdC5cbiAqL1xuVGV4dHVyZS5hZGRUZXh0dXJlVG9DYWNoZSA9IGZ1bmN0aW9uICh0ZXh0dXJlLCBpZClcbntcbiAgICB1dGlscy5UZXh0dXJlQ2FjaGVbaWRdID0gdGV4dHVyZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgdGV4dHVyZSBmcm9tIHRoZSBnbG9iYWwgdXRpbHMuVGV4dHVyZUNhY2hlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBpZCB7c3RyaW5nfSBUaGUgaWQgb2YgdGhlIHRleHR1cmUgdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybiB7VGV4dHVyZX0gVGhlIHRleHR1cmUgdGhhdCB3YXMgcmVtb3ZlZFxuICovXG5UZXh0dXJlLnJlbW92ZVRleHR1cmVGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoaWQpXG57XG4gICAgdmFyIHRleHR1cmUgPSB1dGlscy5UZXh0dXJlQ2FjaGVbaWRdO1xuXG4gICAgZGVsZXRlIHV0aWxzLlRleHR1cmVDYWNoZVtpZF07XG4gICAgZGVsZXRlIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbaWRdO1xuXG4gICAgcmV0dXJuIHRleHR1cmU7XG59O1xuXG5UZXh0dXJlLmVtcHR5VGV4dHVyZSA9IG5ldyBUZXh0dXJlKG5ldyBCYXNlVGV4dHVyZSgpKTtcbiIsIlxuLyoqXG4gKiBBIHN0YW5kYXJkIG9iamVjdCB0byBzdG9yZSB0aGUgVXZzIG9mIGEgdGV4dHVyZVxuICpcbiAqIEBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVGV4dHVyZVV2cygpXG57XG4gICAgdGhpcy54MCA9IDA7XG4gICAgdGhpcy55MCA9IDA7XG5cbiAgICB0aGlzLngxID0gMDtcbiAgICB0aGlzLnkxID0gMDtcblxuICAgIHRoaXMueDIgPSAwO1xuICAgIHRoaXMueTIgPSAwO1xuXG4gICAgdGhpcy54MyA9IDA7XG4gICAgdGhpcy55MyA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVV2cztcblxuLyoqXG4gKiBTZXRzIHRoZSB0ZXh0dXJlIFV2cyBiYXNlZCBvbiB0aGUgZ2l2ZW4gZnJhbWUgaW5mb3JtYXRpb25cbiAqIEBwYXJhbSBmcmFtZSB7UmVjdGFuZ2xlfVxuICogQHBhcmFtIGJhc2VGcmFtZSB7UmVjdGFuZ2xlfVxuICogQHBhcmFtIHJvdGF0ZSB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIGZyYW1lIGlzIHJvdGF0ZWRcbiAqIEBwcml2YXRlXG4gKi9cblRleHR1cmVVdnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChmcmFtZSwgYmFzZUZyYW1lLCByb3RhdGUpXG57XG4gICAgdmFyIHR3ID0gYmFzZUZyYW1lLndpZHRoO1xuICAgIHZhciB0aCA9IGJhc2VGcmFtZS5oZWlnaHQ7XG5cbiAgICBpZihyb3RhdGUpXG4gICAge1xuICAgICAgICB0aGlzLngwID0gKGZyYW1lLnggKyBmcmFtZS5oZWlnaHQpIC8gdHc7XG4gICAgICAgIHRoaXMueTAgPSBmcmFtZS55IC8gdGg7XG5cbiAgICAgICAgdGhpcy54MSA9IChmcmFtZS54ICsgZnJhbWUuaGVpZ2h0KSAvIHR3O1xuICAgICAgICB0aGlzLnkxID0gKGZyYW1lLnkgKyBmcmFtZS53aWR0aCkgLyB0aDtcblxuICAgICAgICB0aGlzLngyID0gZnJhbWUueCAvIHR3O1xuICAgICAgICB0aGlzLnkyID0gKGZyYW1lLnkgKyBmcmFtZS53aWR0aCkgLyB0aDtcblxuICAgICAgICB0aGlzLngzID0gZnJhbWUueCAvIHR3O1xuICAgICAgICB0aGlzLnkzID0gZnJhbWUueSAvIHRoO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuXG4gICAgICAgIHRoaXMueDAgPSBmcmFtZS54IC8gdHc7XG4gICAgICAgIHRoaXMueTAgPSBmcmFtZS55IC8gdGg7XG5cbiAgICAgICAgdGhpcy54MSA9IChmcmFtZS54ICsgZnJhbWUud2lkdGgpIC8gdHc7XG4gICAgICAgIHRoaXMueTEgPSBmcmFtZS55IC8gdGg7XG5cbiAgICAgICAgdGhpcy54MiA9IChmcmFtZS54ICsgZnJhbWUud2lkdGgpIC8gdHc7XG4gICAgICAgIHRoaXMueTIgPSAoZnJhbWUueSArIGZyYW1lLmhlaWdodCkgLyB0aDtcblxuICAgICAgICB0aGlzLngzID0gZnJhbWUueCAvIHR3O1xuICAgICAgICB0aGlzLnkzID0gKGZyYW1lLnkgKyBmcmFtZS5oZWlnaHQpIC8gdGg7XG4gICAgfVxufTtcbiIsInZhciBCYXNlVGV4dHVyZSA9IHJlcXVpcmUoJy4vQmFzZVRleHR1cmUnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQSB0ZXh0dXJlIG9mIGEgW3BsYXlpbmddIFZpZGVvLlxuICpcbiAqIFZpZGVvIGJhc2UgdGV4dHVyZXMgbWltaWMgUGl4aSBCYXNlVGV4dHVyZS5mcm9tLi4uLiBtZXRob2QgaW4gdGhlaXIgY3JlYXRpb24gcHJvY2Vzcy5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGluIHNldmVyYWwgd2F5cywgc3VjaCBhczpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHRleHR1cmUgPSBQSVhJLlZpZGVvQmFzZVRleHR1cmUuZnJvbVVybCgnaHR0cDovL215ZG9tYWluLmNvbS92aWRlby5tcDQnKTtcbiAqXG4gKiB2YXIgdGV4dHVyZSA9IFBJWEkuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJsKHsgc3JjOiAnaHR0cDovL215ZG9tYWluLmNvbS92aWRlby5tcDQnLCBtaW1lOiAndmlkZW8vbXA0JyB9KTtcbiAqXG4gKiB2YXIgdGV4dHVyZSA9IFBJWEkuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJscyhbJy92aWRlby53ZWJtJywgJy92aWRlby5tcDQnXSk7XG4gKlxuICogdmFyIHRleHR1cmUgPSBQSVhJLlZpZGVvQmFzZVRleHR1cmUuZnJvbVVybHMoW1xuICogICAgIHsgc3JjOiAnL3ZpZGVvLndlYm0nLCBtaW1lOiAndmlkZW8vd2VibScgfSxcbiAqICAgICB7IHNyYzogJy92aWRlby5tcDQnLCBtaW1lOiAndmlkZW8vbXA0JyB9XG4gKiBdKTtcbiAqIGBgYFxuICpcbiAqIFNlZSB0aGUgW1wiZGV1c1wiIGRlbW9dKGh0dHA6Ly93d3cuZ29vZGJveWRpZ2l0YWwuY29tL3BpeGlqcy9leGFtcGxlcy9kZXVzLykuXG4gKlxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBCYXNlVGV4dHVyZVxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBwYXJhbSBzb3VyY2Uge0hUTUxWaWRlb0VsZW1lbnR9XG4gKiBAcGFyYW0gW3NjYWxlTW9kZV0ge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICovXG5mdW5jdGlvbiBWaWRlb0Jhc2VUZXh0dXJlKHNvdXJjZSwgc2NhbGVNb2RlKVxue1xuICAgIGlmICghc291cmNlKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aWRlbyBzb3VyY2UgZWxlbWVudCBzcGVjaWZpZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gaG9vayBpbiBoZXJlIHRvIGNoZWNrIGlmIHZpZGVvIGlzIGFscmVhZHkgYXZhaWxhYmxlLlxuICAgIC8vIEJhc2VUZXh0dXJlIGxvb2tzIGZvciBhIHNvdXJjZS5jb21wbGV0ZSBib29sZWFuLCBwbHVzIHdpZHRoICYgaGVpZ2h0LlxuXG4gICAgaWYgKChzb3VyY2UucmVhZHlTdGF0ZSA9PT0gc291cmNlLkhBVkVfRU5PVUdIX0RBVEEgfHwgc291cmNlLnJlYWR5U3RhdGUgPT09IHNvdXJjZS5IQVZFX0ZVVFVSRV9EQVRBKSAmJiBzb3VyY2Uud2lkdGggJiYgc291cmNlLmhlaWdodClcbiAgICB7XG4gICAgICAgIHNvdXJjZS5jb21wbGV0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgQmFzZVRleHR1cmUuY2FsbCh0aGlzLCBzb3VyY2UsIHNjYWxlTW9kZSk7XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGhlIGJhc2UgdGV4dHVyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBpdHNlbGYsIHNldCB0byB0cnVlIGJ5IGRlZmF1bHRcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fb25VcGRhdGUgPSB0aGlzLl9vblVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2FuUGxheSA9IHRoaXMuX29uQ2FuUGxheS5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKCFzb3VyY2UuY29tcGxldGUpXG4gICAge1xuICAgICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMuX29uQ2FuUGxheSk7XG4gICAgICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMuX29uQ2FuUGxheSk7XG5cbiAgICAgICAgLy8gc3RhcnRlZCBwbGF5aW5nLi5cbiAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLl9vblBsYXlTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5fb25QbGF5U3RvcC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9fbG9hZGVkID0gZmFsc2U7XG59XG5cblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlVGV4dHVyZS5wcm90b3R5cGUpO1xuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWaWRlb0Jhc2VUZXh0dXJlO1xubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0Jhc2VUZXh0dXJlO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCB1cGRhdGUgbG9vcCBvZiB0aGUgdmlkZW8gYmFzZSB0ZXh0dXJlLCBvbmx5IHJ1bnMgd2hlbiBhdXRvVXBkYXRlIGlzIHNldCB0byB0cnVlXG4gKiBAcHJpdmF0ZVxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZS5fb25VcGRhdGUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGlmICh0aGlzLmF1dG9VcGRhdGUpXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX29uVXBkYXRlKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJ1bnMgdGhlIHVwZGF0ZSBsb29wIHdoZW4gdGhlIHZpZGVvIGlzIHJlYWR5IHRvIHBsYXlcbiAqIEBwcml2YXRlXG4gKi9cblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlLl9vblBsYXlTdGFydCA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKCF0aGlzLmF1dG9VcGRhdGUpXG4gICAge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX29uVXBkYXRlKTtcbiAgICAgICAgdGhpcy5hdXRvVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gYSBwYXVzZSBldmVudCBpcyB0cmlnZ2VyZWQsIHN0b3BzIHRoZSB1cGRhdGUgbG9vcFxuICogQHByaXZhdGVcbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5wcm90b3R5cGUuX29uUGxheVN0b3AgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB2aWRlbyBpcyBsb2FkZWQgYW5kIHJlYWR5IHRvIHBsYXlcbiAqIEBwcml2YXRlXG4gKi9cblZpZGVvQmFzZVRleHR1cmUucHJvdG90eXBlLl9vbkNhblBsYXkgPSBmdW5jdGlvbiAoKVxue1xuICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNvdXJjZSlcbiAgICB7XG4gICAgICAgIHRoaXMuc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLl9vbkNhblBsYXkpO1xuICAgICAgICB0aGlzLnNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMuX29uQ2FuUGxheSk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc291cmNlLnZpZGVvV2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zb3VyY2UudmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zb3VyY2UucGxheSgpO1xuXG4gICAgICAgIC8vIHByZXZlbnQgbXVsdGlwbGUgbG9hZGVkIGRpc3BhdGNoZXMuLlxuICAgICAgICBpZiAoIXRoaXMuX19sb2FkZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX19sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdsb2FkZWQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGVzdHJveXMgdGhpcyB0ZXh0dXJlXG4gKlxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKClcbntcbiAgICBpZiAodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UuX3BpeGlJZClcbiAgICB7XG4gICAgICAgIHV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbIHRoaXMuc291cmNlLl9waXhpSWQgXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB1dGlscy5CYXNlVGV4dHVyZUNhY2hlWyB0aGlzLnNvdXJjZS5fcGl4aUlkIF07XG5cbiAgICAgICAgdGhpcy5zb3VyY2UuX3BpeGlJZCA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNvdXJjZS5fcGl4aUlkO1xuICAgIH1cblxuICAgIEJhc2VUZXh0dXJlLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIE1pbWljIFBpeGkgQmFzZVRleHR1cmUuZnJvbS4uLi4gbWV0aG9kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB2aWRlbyB7SFRNTFZpZGVvRWxlbWVudH1cbiAqIEBwYXJhbSBzY2FsZU1vZGUge251bWJlcn0gU2VlIHtAbGluayBTQ0FMRV9NT0RFU30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuICogQHJldHVybiB7VmlkZW9CYXNlVGV4dHVyZX1cbiAqL1xuVmlkZW9CYXNlVGV4dHVyZS5mcm9tVmlkZW8gPSBmdW5jdGlvbiAodmlkZW8sIHNjYWxlTW9kZSlcbntcbiAgICBpZiAoIXZpZGVvLl9waXhpSWQpXG4gICAge1xuICAgICAgICB2aWRlby5fcGl4aUlkID0gJ3ZpZGVvXycgKyB1dGlscy51dWlkKCk7XG4gICAgfVxuXG4gICAgdmFyIGJhc2VUZXh0dXJlID0gdXRpbHMuQmFzZVRleHR1cmVDYWNoZVt2aWRlby5fcGl4aUlkXTtcblxuICAgIGlmICghYmFzZVRleHR1cmUpXG4gICAge1xuICAgICAgICBiYXNlVGV4dHVyZSA9IG5ldyBWaWRlb0Jhc2VUZXh0dXJlKHZpZGVvLCBzY2FsZU1vZGUpO1xuICAgICAgICB1dGlscy5CYXNlVGV4dHVyZUNhY2hlWyB2aWRlby5fcGl4aUlkIF0gPSBiYXNlVGV4dHVyZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVRleHR1cmU7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgQmFzZVRleHR1cmUgYmFzZWQgb24gdGhlIGdpdmVuIHZpZGVvIGVsZW1lbnQuXG4gKiBUaGlzIEJhc2VUZXh0dXJlIGNhbiB0aGVuIGJlIHVzZWQgdG8gY3JlYXRlIGEgdGV4dHVyZVxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB2aWRlb1NyYyB7c3RyaW5nfG9iamVjdHxzdHJpbmdbXXxvYmplY3RbXX0gVGhlIFVSTChzKSBmb3IgdGhlIHZpZGVvLlxuICogQHBhcmFtIFt2aWRlb1NyYy5zcmNdIHtzdHJpbmd9IE9uZSBvZiB0aGUgc291cmNlIHVybHMgZm9yIHRoZSB2aWRlb1xuICogQHBhcmFtIFt2aWRlb1NyYy5taW1lXSB7c3RyaW5nfSBUaGUgbWltZXR5cGUgb2YgdGhlIHZpZGVvIChlLmcuICd2aWRlby9tcDQnKS4gSWYgbm90IHNwZWNpZmllZFxuICogIHRoZSB1cmwncyBleHRlbnNpb24gd2lsbCBiZSB1c2VkIGFzIHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgbWltZSB0eXBlLlxuICogQHBhcmFtIHNjYWxlTW9kZSB7bnVtYmVyfSBTZWUge0BsaW5rIFNDQUxFX01PREVTfSBmb3IgcG9zc2libGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtWaWRlb0Jhc2VUZXh0dXJlfVxuICovXG5WaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmwgPSBmdW5jdGlvbiAodmlkZW9TcmMsIHNjYWxlTW9kZSlcbntcbiAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gICAgLy8gYXJyYXkgb2Ygb2JqZWN0cyBvciBzdHJpbmdzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmlkZW9TcmMpKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWRlb1NyYy5sZW5ndGg7ICsraSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmlkZW8uYXBwZW5kQ2hpbGQoY3JlYXRlU291cmNlKHZpZGVvU3JjLnNyYyB8fCB2aWRlb1NyYywgdmlkZW9TcmMubWltZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNpbmdsZSBvYmplY3Qgb3Igc3RyaW5nXG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmlkZW8uYXBwZW5kQ2hpbGQoY3JlYXRlU291cmNlKHZpZGVvU3JjLnNyYyB8fCB2aWRlb1NyYywgdmlkZW9TcmMubWltZSkpO1xuICAgIH1cblxuICAgIHZpZGVvLmxvYWQoKTtcbiAgICB2aWRlby5wbGF5KCk7XG5cbiAgICByZXR1cm4gVmlkZW9CYXNlVGV4dHVyZS5mcm9tVmlkZW8odmlkZW8sIHNjYWxlTW9kZSk7XG59O1xuXG5WaWRlb0Jhc2VUZXh0dXJlLmZyb21VcmxzID0gVmlkZW9CYXNlVGV4dHVyZS5mcm9tVXJsO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2UocGF0aCwgdHlwZSlcbntcbiAgICBpZiAoIXR5cGUpXG4gICAge1xuICAgICAgICB0eXBlID0gJ3ZpZGVvLycgKyBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKCcuJykgKyAxKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG5cbiAgICBzb3VyY2Uuc3JjID0gcGF0aDtcbiAgICBzb3VyY2UudHlwZSA9IHR5cGU7XG5cbiAgICByZXR1cm4gc291cmNlO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVzIGFuIGhvbW9nZW5vdXMgb2JqZWN0IGZvciB0cmFja2luZyBldmVudHMgc28gdXNlcnMgY2FuIGtub3cgd2hhdCB0byBleHBlY3QuXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSS51dGlsc1xuICogQHBhcmFtIHRhcmdldCB7b2JqZWN0fSBUaGUgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSBldmVudCBpcyBjYWxsZWQgb25cbiAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgZXZlbnQgdGhhdCB3YXMgdHJpZ2dlcmVkXG4gKiBAcGFyYW0gZGF0YSB7b2JqZWN0fSBBcmJpdHJhcnkgZXZlbnQgZGF0YSB0byBwYXNzIGFsb25nXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RGF0YSh0YXJnZXQsIG5hbWUsIGRhdGEpXG57XG4gICAgLy8gZm9yIGR1Y2sgdHlwaW5nIGluIHRoZSBcIi5vbigpXCIgZnVuY3Rpb25cbiAgICB0aGlzLl9faXNFdmVudE9iamVjdCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIHN0YXRlIG9mIGJ1YmJsaW5nIHByb3BhZ2F0aW9uLiBEbyBub3RcbiAgICAgKiBzZXQgdGhpcyBkaXJlY3RseSwgaW5zdGVhZCB1c2UgYGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpYFxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBzdGF0ZSBvZiBzaWJsaW5nIGxpc3RlbmVyIHByb3BhZ2F0aW9uLiBEbyBub3RcbiAgICAgKiBzZXQgdGhpcyBkaXJlY3RseSwgaW5zdGVhZCB1c2UgYGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpYFxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsIHRhcmdldCB0aGUgZXZlbnQgdHJpZ2dlcmVkIG9uLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7b2JqZWN0fVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0cmluZyBuYW1lIG9mIHRoZSBldmVudCB0aGF0IHRoaXMgcmVwcmVzZW50cy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ31cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBuYW1lO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgdGhhdCB3YXMgcGFzc2VkIGluIHdpdGggdGhpcyBldmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge29iamVjdH1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWVzdGFtcCB3aGVuIHRoZSBldmVudCBvY2N1cnJlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XG59XG5cbkV2ZW50RGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudERhdGE7XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RGF0YTtcblxuLyoqXG4gKiBTdG9wcyB0aGUgcHJvcGFnYXRpb24gb2YgZXZlbnRzIHVwIHRoZSBzY2VuZSBncmFwaCAocHJldmVudHMgYnViYmxpbmcpLlxuICpcbiAqL1xuRXZlbnREYXRhLnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKVxue1xuICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFN0b3BzIHRoZSBwcm9wYWdhdGlvbiBvZiBldmVudHMgdG8gc2libGluZyBsaXN0ZW5lcnMgKG5vIGxvbmdlciBjYWxscyBhbnkgbGlzdGVuZXJzKS5cbiAqXG4gKi9cbkV2ZW50RGF0YS5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbntcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSB0cnVlO1xufTtcbiIsIi8vVE9ETzogSGF2ZSBHcmFwaGljcyB1c2UgaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL3NoYXBlMmRcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvc2hhcGUyZC10cmlhbmd1bGF0ZSBpbnN0ZWFkIG9mIGN1c3RvbSBjb2RlLlxuXG4vKlxuICAgIFBvbHlLIGxpYnJhcnlcbiAgICB1cmw6IGh0dHA6Ly9wb2x5ay5pdmFuay5uZXRcbiAgICBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5jZS5cblxuICAgIENvcHlyaWdodCAoYykgMjAxMiBJdmFuIEt1Y2tpclxuXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICAgIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICAgIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAgIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgICBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gICAgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICAgIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICAgIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAgICBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiAgICBUaGlzIGlzIGFuIGFtYXppbmcgbGliIVxuXG4gICAgU2xpZ2h0bHkgbW9kaWZpZWQgYnkgTWF0IEdyb3ZlcyAobWF0Z3JvdmVzLmNvbSk7XG4qL1xuXG4vKipcbiAqIEJhc2VkIG9uIHRoZSBQb2x5ayBsaWJyYXJ5IGh0dHA6Ly9wb2x5ay5pdmFuay5uZXQgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2VuY2UuXG4gKiBUaGlzIGlzIGFuIGFtYXppbmcgbGliIVxuICogU2xpZ2h0bHkgbW9kaWZpZWQgYnkgTWF0IEdyb3ZlcyAobWF0Z3JvdmVzLmNvbSk7XG4gKlxuICogQG1lbWJlcm9mIFBJWEkudXRpbHNcbiAqL1xudmFyIFBvbHlLID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLyoqXG4gKiBUcmlhbmd1bGF0ZXMgc2hhcGVzIGZvciB3ZWJHTCBncmFwaGljIGZpbGxzLlxuICpcbiAqL1xuUG9seUsuVHJpYW5ndWxhdGUgPSBmdW5jdGlvbiAocClcbntcbiAgICB2YXIgc2lnbiA9IHRydWU7XG5cbiAgICB2YXIgbiA9IHAubGVuZ3RoID4+IDE7XG4gICAgaWYgKG4gPCAzKSByZXR1cm4gW107XG5cbiAgICB2YXIgdGdzID0gW107XG4gICAgdmFyIGF2bCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhdmwucHVzaChpKTtcblxuICAgIGkgPSAwO1xuICAgIHZhciBhbCA9IG47XG4gICAgd2hpbGUgKGFsID4gMylcbiAgICB7XG4gICAgICAgIHZhciBpMCA9IGF2bFsoaSswKSVhbF07XG4gICAgICAgIHZhciBpMSA9IGF2bFsoaSsxKSVhbF07XG4gICAgICAgIHZhciBpMiA9IGF2bFsoaSsyKSVhbF07XG5cbiAgICAgICAgdmFyIGF4ID0gcFsyKmkwXSwgIGF5ID0gcFsyKmkwKzFdO1xuICAgICAgICB2YXIgYnggPSBwWzIqaTFdLCAgYnkgPSBwWzIqaTErMV07XG4gICAgICAgIHZhciBjeCA9IHBbMippMl0sICBjeSA9IHBbMippMisxXTtcblxuICAgICAgICB2YXIgZWFyRm91bmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKFBvbHlLLl9jb252ZXgoYXgsIGF5LCBieCwgYnksIGN4LCBjeSwgc2lnbikpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVhckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWw7IGorKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdmkgPSBhdmxbal07XG4gICAgICAgICAgICAgICAgaWYgKHZpID09PSBpMCB8fCB2aSA9PT0gaTEgfHwgdmkgPT09IGkyKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmIChQb2x5Sy5fUG9pbnRJblRyaWFuZ2xlKHBbMip2aV0sIHBbMip2aSsxXSwgYXgsIGF5LCBieCwgYnksIGN4LCBjeSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlYXJGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWFyRm91bmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRncy5wdXNoKGkwLCBpMSwgaTIpO1xuICAgICAgICAgICAgYXZsLnNwbGljZSgoaSsxKSVhbCwgMSk7XG4gICAgICAgICAgICBhbC0tO1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSsrID4gMyphbClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBmbGlwIGZsaXAgcmV2ZXJzZSBpdCFcbiAgICAgICAgICAgIC8vIHJlc2V0IVxuICAgICAgICAgICAgaWYgKHNpZ24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGdzID0gW107XG4gICAgICAgICAgICAgICAgYXZsID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykgYXZsLnB1c2goaSk7XG5cbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICBhbCA9IG47XG5cbiAgICAgICAgICAgICAgICBzaWduID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgLy8gICB3aW5kb3cuY29uc29sZS5sb2coXCJQSVhJIFdhcm5pbmc6IHNoYXBlIHRvbyBjb21wbGV4IHRvIGZpbGxcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0Z3MucHVzaChhdmxbMF0sIGF2bFsxXSwgYXZsWzJdKTtcbiAgICByZXR1cm4gdGdzO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIHBvaW50IGlzIHdpdGhpbiBhIHRyaWFuZ2xlXG4gKlxuICogQHBhcmFtIHB4IHtudW1iZXJ9IHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIHB5IHtudW1iZXJ9IHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgdG8gdGVzdFxuICogQHBhcmFtIGF4IHtudW1iZXJ9IHggY29vcmRpbmF0ZSBvZiB0aGUgYSBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAqIEBwYXJhbSBheSB7bnVtYmVyfSB5IGNvb3JkaW5hdGUgb2YgdGhlIGEgcG9pbnQgb2YgdGhlIHRyaWFuZ2xlXG4gKiBAcGFyYW0gYngge251bWJlcn0geCBjb29yZGluYXRlIG9mIHRoZSBiIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICogQHBhcmFtIGJ5IHtudW1iZXJ9IHkgY29vcmRpbmF0ZSBvZiB0aGUgYiBwb2ludCBvZiB0aGUgdHJpYW5nbGVcbiAqIEBwYXJhbSBjeCB7bnVtYmVyfSB4IGNvb3JkaW5hdGUgb2YgdGhlIGMgcG9pbnQgb2YgdGhlIHRyaWFuZ2xlXG4gKiBAcGFyYW0gY3kge251bWJlcn0geSBjb29yZGluYXRlIG9mIHRoZSBjIHBvaW50IG9mIHRoZSB0cmlhbmdsZVxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblBvbHlLLl9Qb2ludEluVHJpYW5nbGUgPSBmdW5jdGlvbiAocHgsIHB5LCBheCwgYXksIGJ4LCBieSwgY3gsIGN5KVxue1xuICAgIHZhciB2MHggPSBjeC1heDtcbiAgICB2YXIgdjB5ID0gY3ktYXk7XG4gICAgdmFyIHYxeCA9IGJ4LWF4O1xuICAgIHZhciB2MXkgPSBieS1heTtcbiAgICB2YXIgdjJ4ID0gcHgtYXg7XG4gICAgdmFyIHYyeSA9IHB5LWF5O1xuXG4gICAgdmFyIGRvdDAwID0gdjB4KnYweCt2MHkqdjB5O1xuICAgIHZhciBkb3QwMSA9IHYweCp2MXgrdjB5KnYxeTtcbiAgICB2YXIgZG90MDIgPSB2MHgqdjJ4K3YweSp2Mnk7XG4gICAgdmFyIGRvdDExID0gdjF4KnYxeCt2MXkqdjF5O1xuICAgIHZhciBkb3QxMiA9IHYxeCp2MngrdjF5KnYyeTtcblxuICAgIHZhciBpbnZEZW5vbSA9IDEgLyAoZG90MDAgKiBkb3QxMSAtIGRvdDAxICogZG90MDEpO1xuICAgIHZhciB1ID0gKGRvdDExICogZG90MDIgLSBkb3QwMSAqIGRvdDEyKSAqIGludkRlbm9tO1xuICAgIHZhciB2ID0gKGRvdDAwICogZG90MTIgLSBkb3QwMSAqIGRvdDAyKSAqIGludkRlbm9tO1xuXG4gICAgLy8gQ2hlY2sgaWYgcG9pbnQgaXMgaW4gdHJpYW5nbGVcbiAgICByZXR1cm4gKHUgPj0gMCkgJiYgKHYgPj0gMCkgJiYgKHUgKyB2IDwgMSk7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgc2hhcGUgaXMgY29udmV4XG4gKlxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblBvbHlLLl9jb252ZXggPSBmdW5jdGlvbiAoYXgsIGF5LCBieCwgYnksIGN4LCBjeSwgc2lnbilcbntcbiAgICByZXR1cm4gKChheS1ieSkqKGN4LWJ4KSArIChieC1heCkqKGN5LWJ5KSA+PSAwKSA9PT0gc2lnbjtcbn07XG4iLCJ2YXIgZXZlbnRUYXJnZXQgPSByZXF1aXJlKCcuL2V2ZW50VGFyZ2V0JyksXG4gICAgRXZlbnREYXRhICAgPSByZXF1aXJlKCcuL0V2ZW50RGF0YScpO1xuXG4vKipcbiAqIEEgVGlja2VyIGNsYXNzIHRoYXQgcnVucyB0aGUgbWFpbiB1cGRhdGUgbG9vcCB0aGF0IG90aGVyIG9iamVjdHMgbGlzdGVuIHRvXG4gKlxuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSS51dGlsc1xuICovXG52YXIgVGlja2VyID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMudXBkYXRlQmluZCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHRpY2tlciBydW5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5ldmVudERhdGEgPSBuZXcgRXZlbnREYXRhKCB0aGlzLCAndGljaycsIHsgZGVsdGFUaW1lOjEgfSApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlbHRhVGltZVxuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZGVsdGFUaW1lID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGJldHdlZW4gdHdvIGZyYW1lc1xuICAgICAqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudGltZUVsYXBzZWQgPSAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuXG4gICAgdGhpcy5zcGVlZCA9IDE7XG5cbiAgICAvLyBhdXRvIHN0YXJ0IHRpY2tpbmchXG4gICAgdGhpcy5zdGFydCgpO1xufTtcblxuZXZlbnRUYXJnZXQubWl4aW4oVGlja2VyLnByb3RvdHlwZSk7XG5cblxuVGlja2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKClcbntcbiAgICBpZih0aGlzLmFjdGl2ZSlcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCk7XG59O1xuXG5cblRpY2tlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKClcbntcbiAgICBpZighdGhpcy5hY3RpdmUpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbn07XG5cblRpY2tlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKVxue1xuICAgIGlmKHRoaXMuYWN0aXZlKVxuICAgIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICAgICAgLy8gY2FwIHRoZSB0aW1lIVxuICAgICAgICBpZih0aW1lRWxhcHNlZCA+IDEwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGltZUVsYXBzZWQgPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlbHRhVGltZSA9ICh0aW1lRWxhcHNlZCAqIDAuMDYpO1xuXG4gICAgICAgIHRoaXMuZGVsdGFUaW1lICo9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgLy8gNjAgLS0tPiAxXG4gICAgICAgIC8vIDMwIC0tLT4gMlxuXG4gICAgICAgIHRoaXMuZXZlbnREYXRhLmRhdGEuZGVsdGFUaW1lID0gdGhpcy5kZWx0YVRpbWU7XG5cbiAgICAgICAgdGhpcy5lbWl0KCAndGljaycsIHRoaXMuZXZlbnREYXRhICk7XG5cbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVGlja2VyKCk7XG4iLCJ2YXIgRXZlbnREYXRhID0gcmVxdWlyZSgnLi9FdmVudERhdGEnKTtcblxudmFyIHRlbXBFdmVudE9iamVjdCA9IG5ldyBFdmVudERhdGEobnVsbCwgbnVsbCwge30pO1xuXG4vKipcbiAqIE1peGlucyBldmVudCBlbWl0dGVyIGZ1bmN0aW9uYWxpdHkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBtaXhpblxuICogQG1lbWJlcm9mIFBJWEkudXRpbHNcbiAqIEBleGFtcGxlXG4gKiAgICAgIGZ1bmN0aW9uIE15RW1pdHRlcigpIHt9XG4gKlxuICogICAgICBldmVudFRhcmdldC5taXhpbihNeUVtaXR0ZXIucHJvdG90eXBlKTtcbiAqXG4gKiAgICAgIHZhciBlbSA9IG5ldyBNeUVtaXR0ZXIoKTtcbiAqICAgICAgZW0uZW1pdCgnZXZlbnROYW1lJywgJ3NvbWUgZGF0YScsICdzb21lIG1vcmUgZGF0YScsIHt9LCBudWxsLCAuLi4pO1xuICovXG5mdW5jdGlvbiBldmVudFRhcmdldChvYmopXG57XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbGlzdCBvZiBhc3NpZ25lZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZXZlbnRUYXJnZXRcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBldmVudHMgdGhhdCBzaG91bGQgYmUgbGlzdGVkLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBsaXN0ZW5lciBmdW5jdGlvbnNcbiAgICAgKi9cbiAgICBvYmoubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50TmFtZSlcbiAgICB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0gPyB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXS5zbGljZSgpIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVtaXQgYW4gZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGV2ZW50VGFyZ2V0XG4gICAgICogQGFsaWFzIGRpc3BhdGNoRXZlbnRcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBJbmRpY2F0aW9uIGlmIHdlJ3ZlIGVtaXR0ZWQgYW4gZXZlbnQuXG4gICAgICovXG4gICAgb2JqLmVtaXQgPSBvYmouZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgICAgIC8vIGZhc3QgcmV0dXJuIHdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVyc1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL2JhY2t3YXJkcyBjb21wYXQgd2l0aCBvbGQgbWV0aG9kIFwiLmVtaXQoeyB0eXBlOiAnc29tZXRoaW5nJyB9KVwiXG4gICAgICAgIC8vbGV0cyBub3Qgd29ycnkgYWJvdXQgb2xkIHdheXMgb2YgdXNpbmcgc3R1ZmYgZm9yIHYzXG4gICAgICAgIC8qXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnb2JqZWN0JylcbiAgICAgICAge1xuICAgICAgICAgICAgZGF0YSA9IGV2ZW50TmFtZTtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50TmFtZS50eXBlO1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAgICAgLy9lbnN1cmUgd2UgYXJlIHVzaW5nIGEgcmVhbCBwaXhpIGV2ZW50XG4gICAgICAgIC8vaW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgbGV0cyB1c2UgYW4gdGhlIHRlbXAgb25lICggc2F2ZSBuZXcgY3JlYXRpb24gZm9yIGVhY2ggZXZlbnQgKVxuICAgICAgICBpZiAoICFkYXRhIHx8ICFkYXRhLl9faXNFdmVudE9iamVjdCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlbXBFdmVudE9iamVjdC50YXJnZXQ9ICB0aGlzO1xuICAgICAgICAgICAgdGVtcEV2ZW50T2JqZWN0LnR5cGUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICB0ZW1wRXZlbnRPYmplY3QuZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgICAgIGRhdGEgPSB0ZW1wRXZlbnRPYmplY3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvL2l0ZXJhdGUgdGhlIGxpc3RlbmVyc1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0uc2xpY2UoMCksXG4gICAgICAgICAgICBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoLFxuICAgICAgICAgICAgZm4gPSBsaXN0ZW5lcnNbMF0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGZuID0gbGlzdGVuZXJzWysraV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY2FsbCB0aGUgZXZlbnQgbGlzdGVuZXIgc2NvcGUgaXMgY3VycmVudGx5IGRldGVybWluZWQgYnkgYmluZGluZyB0aGUgbGlzdGVuZXJcbiAgICAgICAgICAgIC8vd2F5IGZhc3RlciB0aGFuICdjYWxsJ1xuICAgICAgICAgICAgZm4oZGF0YSk7XG5cbiAgICAgICAgICAgIC8vaWYgXCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cIiBpcyBjYWxsZWQsIHN0b3AgY2FsbGluZyBzaWJsaW5nIGV2ZW50c1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RvcHBlZEltbWVkaWF0ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgXCJzdG9wUHJvcGFnYXRpb25cIiBpcyBjYWxsZWQgdGhlbiBkb24ndCBidWJibGUgdGhlIGV2ZW50XG4gICAgICAgIGlmIChkYXRhLnN0b3BwZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBldmVudFRhcmdldFxuICAgICAqIEBhbGlhcyBhZGRFdmVudExpc3RlbmVyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBOYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0b259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIG9iai5vbiA9IG9iai5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gb24oZXZlbnROYW1lLCBmbilcbiAgICB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcblxuICAgICAgICAodGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSlcbiAgICAgICAgICAgIC5wdXNoKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGFuIEV2ZW50TGlzdGVuZXIgdGhhdCdzIG9ubHkgY2FsbGVkIG9uY2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZXZlbnRUYXJnZXRcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259IENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIG9iai5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudE5hbWUsIGZuKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gb25jZUhhbmRsZXJXcmFwcGVyKClcbiAgICAgICAge1xuICAgICAgICAgICAgZm4uYXBwbHkoc2VsZi5vZmYoZXZlbnROYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIG9uY2VIYW5kbGVyV3JhcHBlci5fb3JpZ2luYWxIYW5kbGVyID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub24oZXZlbnROYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGV2ZW50VGFyZ2V0XG4gICAgICogQGFsaWFzIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBldmVudCB3ZSB3YW50IHRvIHJlbW92ZS5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufSBUaGUgbGlzdGVuZXIgdGhhdCB3ZSBuZWVkIHRvIGZpbmQuXG4gICAgICovXG4gICAgb2JqLm9mZiA9IG9iai5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSwgZm4pXG4gICAge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdLFxuICAgICAgICAgICAgaSA9IGZuID8gbGlzdC5sZW5ndGggOiAwO1xuXG4gICAgICAgIHdoaWxlIChpLS0gPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gZm4gfHwgbGlzdFtpXS5fb3JpZ2luYWxIYW5kbGVyID09PSBmbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZGVsZXRlIGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgICAgICAgLy8gbGV0cyBzZXQgaXQgdG8gbnVsbFxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9yIG9ubHkgdGhlIGxpc3RlbmVycyBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBldmVudFRhcmdldFxuICAgICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gVGhlIGV2ZW50IHlvdSB3YW50IHRvIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvci5cbiAgICAgKi9cbiAgICBvYmoucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50TmFtZSlcbiAgICB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcblxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldmVudE5hbWVdKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlbGV0ZSBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgICAgLy8gbGV0cyBzZXQgaXQgdG8gbnVsbFxuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbZXZlbnROYW1lXSA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLyoqXG4gICAgICogTWl4ZXMgaW4gdGhlIHByb3BlcnRpZXMgb2YgdGhlIGV2ZW50VGFyZ2V0IGludG8gYW5vdGhlciBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvYmplY3Qge29iamVjdH0gVGhlIG9iaiB0byBtaXggaW50b1xuICAgICAqL1xuICAgIG1peGluOiBmdW5jdGlvbiBtaXhpbihvYmopXG4gICAge1xuICAgICAgICBldmVudFRhcmdldChvYmopO1xuICAgIH1cbn07XG4iLCJ2YXIgQ09OU1QgPSByZXF1aXJlKCcuLi9jb25zdCcpO1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgUElYSS51dGlsc1xuICovXG52YXIgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBfdWlkOiAwLFxuICAgIF9zYWlkSGVsbG86IGZhbHNlLFxuXG4gICAgVGlja2VyOiAgICAgICAgIHJlcXVpcmUoJy4vVGlja2VyJyksXG4gICAgRXZlbnREYXRhOiAgICAgIHJlcXVpcmUoJy4vRXZlbnREYXRhJyksXG4gICAgZXZlbnRUYXJnZXQ6ICAgIHJlcXVpcmUoJy4vZXZlbnRUYXJnZXQnKSxcbiAgICBwbHVnaW5UYXJnZXQ6ICAgcmVxdWlyZSgnLi9wbHVnaW5UYXJnZXQnKSxcbiAgICBQb2x5SzogICAgICAgICAgcmVxdWlyZSgnLi9Qb2x5SycpLFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbmV4dCB1dWlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBuZXh0IHV1aWQgdG8gdXNlLlxuICAgICAqL1xuICAgIHV1aWQ6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICByZXR1cm4gKyt1dGlscy5fdWlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIGhleCBjb2xvciBudW1iZXIgdG8gYW4gW1IsIEcsIEJdIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaGV4IHtudW1iZXJ9XG4gICAgICogQHJldHVybiB7bnVtYmVyW119IEFuIGFycmF5IHJlcHJlc2VudGluZyB0aGUgW1IsIEcsIEJdIG9mIHRoZSBjb2xvci5cbiAgICAgKi9cbiAgICBoZXgycmdiOiBmdW5jdGlvbiAoaGV4LCBvdXQpXG4gICAge1xuICAgICAgICBvdXQgPSBvdXQgfHwgW107XG5cbiAgICAgICAgb3V0WzBdID0gKGhleCA+PiAxNiAmIDB4RkYpIC8gMjU1O1xuICAgICAgICBvdXRbMV0gPSAoaGV4ID4+IDggJiAweEZGKSAvIDI1NTtcbiAgICAgICAgb3V0WzJdID0gKGhleCAmIDB4RkYpIC8gMjU1O1xuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgaGV4IGNvbG9yIG51bWJlciB0byBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBoZXgge251bWJlcn1cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmcgY29sb3IuXG4gICAgICovXG4gICAgaGV4MnN0cmluZzogZnVuY3Rpb24gKGhleClcbiAgICB7XG4gICAgICAgIGhleCA9IGhleC50b1N0cmluZygxNik7XG4gICAgICAgIGhleCA9ICcwMDAwMDAnLnN1YnN0cigwLCA2IC0gaGV4Lmxlbmd0aCkgKyBoZXg7XG5cbiAgICAgICAgcmV0dXJuICcjJyArIGhleDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBjb2xvciBhcyBhbiBbUiwgRywgQl0gYXJyYXkgdG8gYSBoZXggbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmdiIHtudW1iZXJbXX1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjb2xvciBudW1iZXJcbiAgICAgKi9cbiAgICByZ2IyaGV4OiBmdW5jdGlvbiAocmdiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgocmdiWzBdKjI1NSA8PCAxNikgKyAocmdiWzFdKjI1NSA8PCA4KSArIHJnYlsyXSoyNTUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgQ2FudmFzIEJsZW5kTW9kZXMgYXJlIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBicm93c2VyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoZXkgYXJlIHN1cHBvcnRlZFxuICAgICAqL1xuICAgIGNhblVzZU5ld0NhbnZhc0JsZW5kTW9kZXM6IGZ1bmN0aW9uICgpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBuZ0hlYWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQVFNQUFBREQ4cDJPQUFBQUExQk1WRVgvJztcbiAgICAgICAgdmFyIHBuZ0VuZCA9ICdBQUFBQ2tsRVFWUUkxMk5nQUFBQUFnQUI0aUc4TXdBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuXG4gICAgICAgIHZhciBtYWdlbnRhID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1hZ2VudGEuc3JjID0gcG5nSGVhZCArICdBUDgwNE9hNicgKyBwbmdFbmQ7XG5cbiAgICAgICAgdmFyIHllbGxvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB5ZWxsb3cuc3JjID0gcG5nSGVhZCArICcvd0NLeHZSRicgKyBwbmdFbmQ7XG5cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSA2O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKG1hZ2VudGEsIDAsIDApO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh5ZWxsb3csIDIsIDApO1xuXG4gICAgICAgIHZhciBkYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMiwwLDEsMSkuZGF0YTtcblxuICAgICAgICByZXR1cm4gKGRhdGFbMF0gPT09IDI1NSAmJiBkYXRhWzFdID09PSAwICYmIGRhdGFbMl0gPT09IDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIG51bWJlciwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBjbG9zZXN0IG51bWJlciB0aGF0IGlzIGEgcG93ZXIgb2YgdHdvXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB0YWtlbiBmcm9tIFN0YXJsaW5nIEZyYW1ld29yayBhcyBpdHMgcHJldHR5IG5lYXQgOylcbiAgICAgKlxuICAgICAqIEBwYXJhbSBudW1iZXIge251bWJlcn1cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjbG9zZXN0IG51bWJlciB0aGF0IGlzIGEgcG93ZXIgb2YgdHdvXG4gICAgICovXG4gICAgZ2V0TmV4dFBvd2VyT2ZUd286IGZ1bmN0aW9uIChudW1iZXIpXG4gICAge1xuICAgICAgICAvLyBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG93ZXJfb2ZfdHdvI0Zhc3RfYWxnb3JpdGhtX3RvX2NoZWNrX2lmX2FfcG9zaXRpdmVfbnVtYmVyX2lzX2FfcG93ZXJfb2ZfdHdvXG4gICAgICAgIGlmIChudW1iZXIgPiAwICYmIChudW1iZXIgJiAobnVtYmVyIC0gMSkpID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDE7XG5cbiAgICAgICAgICAgIHdoaWxlIChyZXN1bHQgPCBudW1iZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0IDw8PSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gd2lkdGggYW5kIGhlaWdodCBtYWtlIGEgcG93ZXIgb2YgdHdvIHJlY3RhbmdsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9XG4gICAgICogQHBhcmFtIGhlaWdodCB7bnVtYmVyfVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNQb3dlck9mVHdvOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodClcbiAgICB7XG4gICAgICAgIHJldHVybiAod2lkdGggPiAwICYmICh3aWR0aCAmICh3aWR0aCAtIDEpKSA9PT0gMCAmJiBoZWlnaHQgPiAwICYmIChoZWlnaHQgJiAoaGVpZ2h0IC0gMSkpID09PSAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSByZXNvbHV0aW9uIG9mIGFuIGFzc2V0IGJ5IGxvb2tpbmcgZm9yIHRoZSBwcmVmaXhcbiAgICAgKiB1c2VkIGJ5IHNwcml0ZXNoZWV0cyBhbmQgaW1hZ2UgdXJsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfSB0aGUgaW1hZ2UgcGF0aFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0UmVzb2x1dGlvbk9mVXJsOiBmdW5jdGlvbiAodXJsKVxuICAgIHtcbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSBDT05TVC5SRVRJTkFfUFJFRklYLmV4ZWModXJsKTtcblxuICAgICAgICBpZiAocmVzb2x1dGlvbilcbiAgICAgICAge1xuICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXNvbHV0aW9uWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2dzIG91dCB0aGUgdmVyc2lvbiBhbmQgcmVuZGVyZXIgaW5mb3JtYXRpb24gZm9yIHRoaXMgcnVubmluZyBpbnN0YW5jZSBvZiBQSVhJLlxuICAgICAqIElmIHlvdSBkb24ndCB3YW50IHRvIHNlZSB0aGlzIG1lc3NhZ2UgeW91IGNhbiBzZXQgYFBJWEkudXRpbHMuX3NhaWRIZWxsbyA9IHRydWU7YFxuICAgICAqIHNvIHRoZSBsaWJyYXJ5IHRoaW5rcyBpdCBhbHJlYWR5IHNhaWQgaXQuIEtlZXAgaW4gbWluZCB0aGF0IGRvaW5nIHRoYXQgd2lsbCBmb3JldmVyXG4gICAgICogbWFrZXMgeW91IGEgamVyayBmYWNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgc3RyaW5nIHJlbmRlcmVyIHR5cGUgdG8gbG9nLlxuICAgICAqIEBjb25zdGFudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzYXlIZWxsbzogZnVuY3Rpb24gKHR5cGUpXG4gICAge1xuICAgICAgICBpZiAodXRpbHMuX3NhaWRIZWxsbylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtcbiAgICAgICAgICAgICAgICAnJWMgJWMgJWMgUGl4aS5qcyAnICsgQ09OU1QuVkVSU0lPTiArICcgLSAnICsgdHlwZSArICcgICVjICcgKyAnICVjICcgKyAnIGh0dHA6Ly93d3cucGl4aWpzLmNvbS8gICVjICVjIOKZpSVj4pmlJWPimaUgJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI2ZmNjZhNScsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6ICNmZjY2YTUnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogI2ZmNjZhNTsgYmFja2dyb3VuZDogIzAzMDMwNzsnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAjZmY2NmE1JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI2ZmYzNkYycsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6ICNmZjY2YTUnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogI2ZmMjQyNDsgYmFja2dyb3VuZDogI2ZmZicsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiAjZmYyNDI0OyBiYWNrZ3JvdW5kOiAjZmZmJyxcbiAgICAgICAgICAgICAgICAnY29sb3I6ICNmZjI0MjQ7IGJhY2tncm91bmQ6ICNmZmYnXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7IC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmNvbnNvbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnUGl4aS5qcyAnICsgQ09OU1QuVkVSU0lPTiArICcgLSAnICsgdHlwZSArICcgLSBodHRwOi8vd3d3LnBpeGlqcy5jb20vJyk7IC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5fc2FpZEhlbGxvID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgVGV4dHVyZUNhY2hlOiB7fSxcbiAgICBCYXNlVGV4dHVyZUNhY2hlOiB7fVxufTtcbiIsIi8qKlxuICogTWl4aW5zIGZ1bmN0aW9uYWxpdHkgdG8gbWFrZSBhbiBvYmplY3QgaGF2ZSBcInBsdWdpbnNcIi5cbiAqXG4gKiBAbWl4aW5cbiAqIEBtZW1iZXJvZiBQSVhJLnV0aWxzXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdG8gbWl4IGludG8uXG4gKiBAZXhhbXBsZVxuICogICAgICBmdW5jdGlvbiBNeU9iamVjdCgpIHt9XG4gKlxuICogICAgICBwbHVnaW5UYXJnZXQubWl4aW4oTXlPYmplY3QpO1xuICovXG5mdW5jdGlvbiBwbHVnaW5UYXJnZXQob2JqKVxue1xuICAgIG9iai5fX3BsdWdpbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbHVnaW4gdG8gYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGx1Z2luTmFtZSB7c3RyaW5nfSBUaGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGxpc3RlZC5cbiAgICAgKiBAcGFyYW0gY3RvciB7T2JqZWN0fSA/PyBAYWx2aW5cbiAgICAgKi9cbiAgICBvYmoucmVnaXN0ZXJQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luTmFtZSwgY3RvcilcbiAgICB7XG4gICAgICAgIG9iai5fX3BsdWdpbnNbcGx1Z2luTmFtZV0gPSBjdG9yO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYWxsIHRoZSBwbHVnaW5zIG9mIHRoaXMgb2JqZWN0XG4gICAgICpcbiAgICAgKi9cbiAgICBvYmoucHJvdG90eXBlLmluaXRQbHVnaW5zID0gZnVuY3Rpb24gKClcbiAgICB7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHRoaXMucGx1Z2lucyB8fCB7fTtcblxuICAgICAgICBmb3IgKHZhciBvIGluIG9iai5fX3BsdWdpbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luc1tvXSA9IG5ldyAob2JqLl9fcGx1Z2luc1tvXSkodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIHBsdWdpbnMgb2YgdGhpcyBvYmplY3RcbiAgICAgKlxuICAgICAqL1xuICAgIG9iai5wcm90b3R5cGUuZGVzdHJveVBsdWdpbnMgPSBmdW5jdGlvbiAoKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgbyBpbiB0aGlzLnBsdWdpbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luc1tvXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbnNbb10gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zID0gbnVsbDtcbiAgICB9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIE1peGVzIGluIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwbHVnaW5UYXJnZXQgaW50byBhbm90aGVyIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIG9iamVjdCB7b2JqZWN0fSBUaGUgb2JqIHRvIG1peCBpbnRvXG4gICAgICovXG4gICAgbWl4aW46IGZ1bmN0aW9uIG1peGluKG9iailcbiAgICB7XG4gICAgICAgIHBsdWdpblRhcmdldChvYmopO1xuICAgIH1cbn07XG4iLG51bGwsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwicGVyZW5xdWVuanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHA6Ly9wZXJlbnF1ZW5qcy5jb21cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhUTUw1IEdhbWUgRnJhbWV3b3JrIGZvciBtb2JpbGUsIHdlYiBhbmQgZGVza3RvcCBkZXZlbG9wbWVudC5cIixcbiAgXCJhdXRob3JcIjogXCJOYXphcmkgR29uemFsZXogPG5hemFyaS5uekBnbWFpbC5jb20+IChodHRwOi8vd3d3Lm5hemFyaWdsZXouY29tKVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9OYXphcmlnbGV6L3BlcmVucXVlbmpzXCJcbiAgfSxcbiAgXCJiaW5cIjoge1xuICAgIFwicGVyZW5xdWVuXCI6IFwiLi9jbGkvcGVyZW5xdWVuXCJcbiAgfSxcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeOS4wLjNcIixcbiAgICBcImNvbG9yc1wiOiBcIl4xLjAuM1wiLFxuICAgIFwiY29tbWFuZGVyXCI6IFwiXjIuNi4wXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOC4xMVwiLFxuICAgIFwiZ3VscC1jYWNoZWRcIjogXCJeMS4wLjJcIixcbiAgICBcImd1bHAtanNoaW50XCI6IFwiXjEuOS4yXCIsXG4gICAgXCJndWxwLXJlbmFtZVwiOiBcIl4xLjIuMFwiLFxuICAgIFwiZ3VscC11Z2xpZnlcIjogXCJeMS4xLjBcIixcbiAgICBcInJlcXVpcmUtZGlyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJ2aW55bC1idWZmZXJcIjogXCJeMS4wLjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIixcbiAgICBcIndhdGNoaWZ5XCI6IFwiXjIuNC4wXCJcbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9jbGkvcGVyZW5xdWVuXCIsXG4gIFwiYnJvd3NlclwiOiBcIi4vYnVpbGQvcGVyZW5xdWVuLmpzXCJcbn1cbiIsInZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9saWIvcGl4aS9zcmMvY29yZS9jb25zdCcpO1xuXG4vKipcbiAqIFN0cmluZyBvZiB0aGUgY3VycmVudCBQUSB2ZXJzaW9uXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkge3N0cmluZ30gVkVSU0lPTlxuICovXG5jb25zdGFudHMuVkVSU0lPTiA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbi8qKlxuICogQ29uc3RhbnQgdG8gaWRlbnRpZnkgdGhlIEF1ZGlvIFR5cGUuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkge29iamVjdH0gQVVESU9fVFlQRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVRElPX1RZUEUuVU5LTk9XTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVRElPX1RZUEUuV0VCQVVESU9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBBVURJT19UWVBFLkhUTUxBVURJT1xuICovXG5jb25zdGFudHMuQVVESU9fVFlQRSA9IHtcbiAgICBVTktOT1dOIDogMCxcbiAgICBXRUJBVURJTyA6IDEsXG4gICAgSFRNTEFEVURJTyA6IDJcbn07XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZ2FtZSBvcHRpb25zIGlmIG5vbmUgYXJlIHN1cHBsaWVkIHRvIHtAbGluayBQUS5HYW1lfVxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHtvYmplY3R9IERFRkFVTFRfR0FNRV9PUFRJT05TXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMuZGVidWc9ZmFsc2VcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5zYXlIZWxsbz10cnVlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMubm9XZWJBdWRpbz1mYWxzZVxuICogQHByb3BlcnR5IHtib29sZWFufSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLm5vV2ViR0w9ZmFsc2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERUZBVUxUX1JFTkRFUl9PUFRJT05TLmZyYW1lTGltaXQ9MzVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gREVGQVVMVF9SRU5ERVJfT1BUSU9OUy5lcnNpc3RhbnREYXRhPXRydWVcbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IERFRkFVTFRfUkVOREVSX09QVElPTlMuYXVkaW9FeHRzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IERFRkFVTFRfUkVOREVSX09QVElPTlMucGF1c2VPblZpc2liaWxpdHlDaGFuZ2U9dHJ1ZVxuICovXG5jb25zdGFudHMuREVGQVVMVF9HQU1FX09QVElPTlMgPSB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHNheUhlbGxvOiB0cnVlLFxuICAgIG5vV2ViQXVkaW86IGZhbHNlLFxuICAgIG5vV2ViR0w6IGZhbHNlLFxuICAgIGZyYW1lTGltaXQ6IDM1LFxuICAgIHBlcnNpc3RhbnREYXRhOiB0cnVlLFxuICAgIGF1ZGlvRXh0czogWydvZ2cnLCAnbXAzJywgJ3dhdiddLFxuICAgIHBhdXNlT25WaXNpYmlsaXR5Q2hhbmdlOiB0cnVlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50cztcbiIsInZhciBDT05TVCA9IHJlcXVpcmUoJy4vY29uc3QnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKSxcbiAgICBhdXRvRGV0ZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9saWIvcGl4aS9zcmMvY29yZScpLmF1dG9EZXRlY3RSZW5kZXJlcixcbiAgICBXZWJHTFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vbGliL3BpeGkvc3JjL2NvcmUvcmVuZGVyZXJzL3dlYmdsL1dlYkdMUmVuZGVyZXInKTtcblxuLyoqXG4gKiBUaGUgbWFpbiBvYmplY3Qgb2YgeW91ciBnYW1lLlxuICpcbiAqIEBwYXJhbSB3aWR0aD04MDBcbiAqIEBwYXJhbSBoZWlnaHQ9NjAwXG4gKiBAcGFyYW0gW2dhbWVPcHRpb25zXSB7b2JqZWN0fSBPcHRpb25hbCBnYW1lIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMuZGVidWc9ZmFsc2VdIHtib29sZWFufSBTaG93IGRldmVsb3BtZW50IGluZm8sIGRlZmF1bHQgZmFsc2VcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMuZnJhbWVMaW1pdF0ge251bWJlcn0gbGltaXQgdGhlIGVsYXBzZWQgdGltZVxuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5zYXlIZWxsbz10cnVlXSB7Ym9vbGVhbn0gbG9ncyBvdXQgdGhlIHZlcnNpb24sIHJlbmRlcmVyLCBhbmQgYXVkaW8gdHlwZVxuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5ub1dlYkF1ZGlvPWZhbHNlXSB7Ym9vbGVhbn0gcHJldmVudHMgc2VsZWN0aW9uIG9mIFdlYkF1ZGlvIHR5cGVcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMucGVyc2lzdGFudERhdGE9dHJ1ZV0ge2Jvb2xlYW59IFVzZSBsb2NhbFN0b3JhZ2UgdG8gc2F2ZSBhbGwgeW91IG5lZWRcbiAqIEBwYXJhbSBbZ2FtZU9wdGlvbnMuYXVkaW9FeHRzXSB7YXJyYXl9IEZvcmNlIGxvYWQgYXVkaW8gZmlsZXMgaW4gdGhpcyBvcmRlclxuICogQHBhcmFtIFtnYW1lT3B0aW9ucy5ub1dlYkdMPWZhbHNlXSB7Ym9vbGVhbn0gcHJldmVudHMgc2VsZWN0aW9uIG9mIFdlYkdMIHJlbmRlcmVyLCBldmVuIGlmIHN1Y2ggaXMgcHJlc2VudFxuICogQHBhcmFtIFtyZW5kZXJlck9wdGlvbnNdIHtvYmplY3R9IE9wdGlvbmFsIGdhbWUgcGFyYW1ldGVyc1xuICogQHBhcmFtIFtyZW5kZXJlck9wdGlvbnMudmlld10ge0hUTUxDYW52YXNFbGVtZW50fSB0aGUgY2FudmFzIHRvIHVzZSBhcyBhIHZpZXcsIG9wdGlvbmFsXG4gKiBAcGFyYW0gW3JlbmRlcmVyT3B0aW9ucy50cmFuc3BhcmVudD1mYWxzZV0ge2Jvb2xlYW59IElmIHRoZSByZW5kZXIgdmlldyBpcyB0cmFuc3BhcmVudCwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIFtyZW5kZXJlck9wdGlvbnMuYW50aWFsaWFzPWZhbHNlXSB7Ym9vbGVhbn0gc2V0cyBhbnRpYWxpYXMgKG9ubHkgYXBwbGljYWJsZSBpbiBjaHJvbWUgYXQgdGhlIG1vbWVudClcbiAqIEBwYXJhbSBbcmVuZGVyZXJPcHRpb25zLnByZXNlcnZlRHJhd2luZ0J1ZmZlcj1mYWxzZV0ge2Jvb2xlYW59IGVuYWJsZXMgZHJhd2luZyBidWZmZXIgcHJlc2VydmF0aW9uLCBlbmFibGUgdGhpcyBpZiB5b3VcbiAqICAgICAgbmVlZCB0byBjYWxsIHRvRGF0YVVybCBvbiB0aGUgd2ViZ2wgY29udGV4dFxuICogQHBhcmFtIFtyZW5kZXJlck9wdGlvbnMucmVzb2x1dGlvbj0xXSB7bnVtYmVyfSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVuZGVyZXJcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2FtZSh3aWR0aCwgaGVpZ2h0LCBnYW1lT3B0aW9ucywgcmVuZGVyZXJPcHRpb25zKXtcbiAgICB0aGlzLmNvbmZpZyA9IHV0aWxzLmV4dGVuZE5ld09iamVjdChDT05TVC5ERUZBVUxUX0dBTUVfT1BUSU9OUywgZ2FtZU9wdGlvbnMpO1xuICAgIHV0aWxzLl9zYWlkSGVsbG8gPSAhdGhpcy5jb25maWcuc2F5SGVsbG87XG4gICAgcmVuZGVyZXJPcHRpb25zID0gdXRpbHMuZXh0ZW5kTmV3T2JqZWN0KENPTlNULkRFRkFVTFRfUkVOREVSX09QVElPTlMsIHJlbmRlcmVyT3B0aW9ucyk7XG5cbiAgICB0aGlzLnJhZiA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IDgwMDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCA2MDA7XG4gICAgdGhpcy5yZW5kZXJlciA9IGdldFJlbmRlcmVyKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCByZW5kZXJlck9wdGlvbnMsIHRoaXMuY29uZmlnLm5vV2ViR0wpO1xuICAgIHRoaXMucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuZnJhbWVFbGFwc2VkVGltZSA9IDA7XG4gICAgdGhpcy5mcmFtZUxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnRpbWUgPSAwO1xuICAgIHRoaXMuZGVsdGEgPSAwO1xuXG4gICAgdGhpcy5pc1dlYkdMID0gKHRoaXMucmVuZGVyZXIgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmVyKTtcbn1cblxuR2FtZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHYW1lO1xuXG5HYW1lLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgLy9UT0RPOiBVbnBhdXNlIGF1ZGlvIG1hbmFnZXI7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xuICAgIC8vVE9ETzogcGF1c2UgYXVkaW9NYW5hZ2VyXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLnJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgIC8vVE9ETzogUmVuZGVyZXIgc2NlbmVcbn07XG5cbkdhbWUucHJvdG90eXBlLnVwZGF0ZVRpbWUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciB0aW1lID0gbm93IC0gdGhpcy5mcmFtZUxhc3RUaW1lO1xuICAgIHRoaXMuZnJhbWVFbGFwc2VkVGltZSA9ICh0aW1lIDw9IHRoaXMuY29uZmlnLmZyYW1lTGltaXQpID8gdGltZSA6IHRoaXMuY29uZmlnLmZyYW1lTGltaXQ7XG4gICAgdGhpcy5mcmFtZUxhc3RUaW1lID0gbm93O1xuICAgIHRoaXMuZGVsdGEgPSB0aGlzLmZyYW1lRWxhcHNlZFRpbWUvMTAwMDtcbiAgICB0aGlzLnRpbWUgKz0gdGhpcy5mcmFtZUVsYXBzZWRUaW1lO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCl7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMucmVuZGVyZXIudmlldztcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG5cbmZ1bmN0aW9uIGdldFJlbmRlcmVyKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMsIG5vV2ViR0wpe1xuICAgIGlmKG5hdmlnYXRvci5pc0NvY29vbkpTJiYhb3B0aW9ucy52aWV3KW9wdGlvbnMudmlldyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyZWVuY2FudmFzXCIpO1xuXG4gICAgdmFyIHJlbmRlcmVyID0gbmV3IGF1dG9EZXRlY3RSZW5kZXJlcih3aWR0aCwgaGVpZ2h0LCBvcHRpb25zLCBub1dlYkdMKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci52aWV3KTtcblxuICAgIHJldHVybiByZW5kZXJlcjtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHYW1lIDogcmVxdWlyZSgnLi9nYW1lLmpzJylcbn07IiwidmFyIENPTlNUID0gcmVxdWlyZSgnLi4vY29uc3QnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYi9waXhpL3NyYy9jb3JlL3V0aWxzJyk7XG5cbi8vdXRpbHMuX3NhaWRIZWxsbyA9IHRydWU7XG5cbnV0aWxzLnNheUhlbGxvID0gZnVuY3Rpb24oKXtcbiAgICAvL1RPRE86IFJlbmRlcmVyVHlwZSwgQXVkaW9UeXBlLCBQaXhpIGNyZWRpdHNcbiAgICBpZighdGhpcy5fc2FpZEhlbGxvKWNvbnNvbGUubG9nKCdQZXJlbnF1ZW4uanMgdicrQ09OU1QuVkVSU0lPTiArICcgW2h0dHA6Ly9wZXJlcXVlbmpzLmNvbV0nKTtcbn07XG5cbnV0aWxzLmV4dGVuZE5ld09iamVjdCA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpe1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCB7fTtcbiAgICBjaGlsZCA9IGNoaWxkIHx8IHt9O1xuICAgIGZvcih2YXIga2V5IGluIHBhcmVudCl7XG4gICAgICAgIGNoaWxkW2tleV0gPSAoY2hpbGRba2V5XSAhPT0gdW5kZWZpbmVkICYmIGNoaWxkW2tleV0gIT09IG51bGwpID8gY2hpbGRba2V5XSA6IHBhcmVudFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7Il19
