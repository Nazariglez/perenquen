var PixiContainer = require('../../lib/pixi/src/core/display/Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    CONST = require('../core/const'),
    mixin = require('./mixin');

/**
 * A container represents a collection of display objects.
 * @class
 * @memberof PQ
 */
function Container(){
    PixiContainer.call(this);

    /**
     * Internal point where the container are placed
     * @member {Point}
     */
    this.anchor = new math.Point(0.5, 0.5);

    /**
     * Internal point where the container rotate
     * @member {Point}
     */
    this.pivot = new math.Point(0.5, 0.5);

    /**
     * Container's size
     * @member {Point}
     */
    this.size = new math.Point(1,1);

    this.speed = new math.Point(0,0);
    this.rotationSpeed = 0;
}

Container.prototype = Object.create(PixiContainer.prototype);
Container.prototype.constructor = Container;
utils.mixin(Container, mixin);

/**
 * Set the container width and height
 * @param width {number}
 * @param height {number}
 * @returns {Container}
 */
Container.prototype.setSize = function(width, height){
    this.width = width;
    this.height = height;
    return this;
};

/**
 * Retrieves the bounds of the Container as a rectangle. The bounds calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getBounds = function (matrix){
    if(!this._currentBounds){

        var width = this.size.x;
        var height = this.size.y;

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

/*
 * Updates the transform on all children of this container for rendering
 *
 * @private
 */
Container.prototype.displayObjectUpdateTransform = function(){
    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    var anchorWidth = this.anchor.x * this.width,
        anchorHeight = this.anchor.y * this.height,
        pivotWidth = this.pivot.x * this.width,
        pivotHeight = this.pivot.y * this.height;

    // so if rotation is between 0 then we can simplify the multiplication process...
    if (this.rotation % CONST.PI_2)
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
        tx =  this.position.x - anchorWidth * this.scale.x + pivotWidth * this.scale.x;
        ty =  this.position.y - anchorHeight * this.scale.y + pivotHeight * this.scale.y;

        // check for pivot.. not often used so geared towards that fact!
        if (pivotWidth || pivotHeight)
        {
            tx -= pivotWidth * a + pivotHeight * c;
            ty -= pivotWidth * b + pivotHeight * d;
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

        tx = this.position.x - anchorWidth * a;
        ty = this.position.y - anchorHeight * d;

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

/**
 * Retrieves the non-global local bounds of the Container as a rectangle.
 * The calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getLocalBounds = function (){
    this._bounds.x = -this.size.x * this.anchor.x;
    this._bounds.y = -this.size.y * this.anchor.y;
    this._bounds.width = this.size.x;
    this._bounds.height = this.size.y;
    return this._bounds;
};

Object.defineProperties(Container.prototype, {
    /**
     * The width of the container
     * @member {number}
     * @memberof Container#
     */
    width : {
        get : function(){
            return this.size.x;
        },

        set: function(value){
            this.size.x = value;
        }
    },

    /**
     * The height of the container
     * @member {number}
     * @memberof Container#
     */
    height : {
        get : function(){
            return this.size.y;
        },

        set: function(value){
            this.size.y = value;
        }
    }
});

module.exports = Container;