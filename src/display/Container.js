var DisplayObject = require('./DisplayObject'),
    PixiContainer = require('../../lib/pixi/src/core/display/Container'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    CONST = require('../core/const'),
    config = require('../core/config'),
    tempPoint = new math.Point(),
    PixiAddChild = PixiContainer.prototype.addChild;

/**
 * A container represents a collection of display objects.
 * @class
 * @memberof PQ
 */
function Container(){
    this._init();
}

Container.prototype = Object.create(PixiContainer.prototype);
Container.prototype.constructor = Container;

Container.prototype._init = function(){
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
};

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
 * Retrieves the bounds of the Container as a rectangle.
 *
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getBounds = function (matrix){
    if(!this._currentBounds){

        var width = this.size.x;
        var height = this.size.y;

        var w0 = width;
        var w1 = 0;

        var h0 = height;
        var h1 = 0;

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

    //anchor, pivot, and flip variables
    var sx = (this.flipX) ? -this.scale.x : this.scale.x,
        sy = (this.flipY) ? -this.scale.y : this.scale.y,
        ax = (this.flipX) ? 1-this.anchor.x : this.anchor.x,
        ay = (this.flipY) ? 1-this.anchor.y : this.anchor.y,
        px = (this.flipX) ? 1-this.pivot.x : this.pivot.x,
        py = (this.flipY) ? 1-this.pivot.y : this.pivot.y;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    var anchorWidth = ax * this.width,
        anchorHeight = ay * this.height,
        pivotWidth = px * this.width,
        pivotHeight = py * this.height;

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
        a  =  this._cr * sx;
        b  =  this._sr * sx;
        c  = -this._sr * sy;
        d  =  this._cr * sy;
        tx =  this.position.x - anchorWidth * sx + pivotWidth * sx;
        ty =  this.position.y - anchorHeight * sy + pivotHeight * sy;

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
        a  = sx;
        d  = sy;

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

Container.prototype.getChildrenBounds = function(){
    //TODO: Calcular bounds teniendo cuenta los children para la feature de culling
};

/**
 * Retrieves the non-global local bounds of the Container as a rectangle.
 * @return {Rectangle} The rectangular bounding area
 */
Container.prototype.getLocalBounds = function (){
    this._bounds.x = 0; //-this.size.x * this.anchor.x;
    this._bounds.y = 0; //-this.size.y * this.anchor.y;
    this._bounds.width = this.size.x;
    this._bounds.height = this.size.y;
    return this._bounds;
};

Container.prototype.containsPoint = function( point )
{
    this.worldTransform.applyInverse(point,  tempPoint);

    var width = this.width;
    var height = this.height;

    if ( tempPoint.x > 0 && tempPoint.x < width )
    {

        if ( tempPoint.y > 0 && tempPoint.y < height )
        {
            return true;
        }
    }

    return false;
};

//Overwrite pixi addchild
PixiContainer.prototype.addChild = function(child){
    PixiAddChild.call(this, child);
    if(config.useSortChildrenByDepth)this.sortChildrenByDepth();
    return this;
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
    },

    depth : {
        get: function(){
            return this._depth || 0;
        },
        set: function(depth){
            if(this._depth === depth)return;

            this._depth = depth;
            if(this.parent){
                if(config.useSortChildrenByDepth)this.parent.sortChildrenByDepth();
            }
        }
    }
});

module.exports = Container;