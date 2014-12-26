(function(){

    //TODO: limited y unfixed bounds
    //TODO: generateTexture no calcula bien los bounds, sobrescribir?
    PQ.Container = PIXI.DisplayObjectContainer.extend(PQ.DisplayMixin, {
        _init: function(){
            PQ.Container._super._init.call(this);
            this.vel = new PQ.Point(0,0);

            this._size = {
                x: 0,
                y: 0
            };

            this.anchor = new PQ.Point(0.5, 0.5);
            return this;
        },

        getBounds : function(matrix){
            var width = this.width;
            var height = this.height;

            var w0 = width * (1-this.anchor.x);
            var w1 = width * -this.anchor.x;

            var h0 = height * (1-this.anchor.y);
            var h1 = height * -this.anchor.y;

            var worldTransform = matrix || this.worldTransform ;

            var a = worldTransform.a;
            var b = worldTransform.c;
            var c = worldTransform.b;
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

            var maxX = -Infinity;
            var maxY = -Infinity;

            var minX = Infinity;
            var minY = Infinity;

            minX = x1 < minX ? x1 : minX;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1 < minY ? y1 : minY;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1 > maxX ? x1 : maxX;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1 > maxY ? y1 : maxY;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;

            var bounds = this._bounds;

            bounds.x = minX;
            bounds.width = maxX - minX;

            bounds.y = minY;
            bounds.height = maxY - minY;

            // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
            this._currentBounds = bounds;

            return bounds;
        },

        updateTransform : function() {
            if(!this.visible)return;
            // create some matrix refs for easy access
            var pt = this.parent.worldTransform;
            var wt = this.worldTransform;

            // temporary matrix variables
            var a, b, c, d, tx, ty;

            var anchorWidth = this.anchor.x * this.width,
                anchorHeight = this.anchor.y * this.height;

            if(this.rotation % PIXI.PI_2){
                if(this.rotation !== this.rotationCache)
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
                if(this.anchor.x || this.anchor.y)
                {
                    tx -= anchorWidth * a + anchorHeight * c;
                    ty -= anchorWidth * b + anchorHeight * d;
                }

                // concat the parent matrix with the objects transform.
                wt.a  = a  * pt.a + b  * pt.c;
                wt.b  = a  * pt.b + b  * pt.d;
                wt.c  = c  * pt.a + d  * pt.c;
                wt.d  = c  * pt.b + d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }else{
                a  = this.scale.x;
                d  = this.scale.y;
                tx = this.position.x - anchorWidth * a;
                ty = this.position.y - anchorHeight * d;

                wt.a  = pt.a * a;
                wt.b  = pt.b * d;
                wt.c  = pt.c * a;
                wt.d  = pt.d * d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }

            this.worldAlpha = this.alpha * this.parent.worldAlpha;

            for(var i=0,j=this.children.length; i<j; i++)
            {
                this.children[i].updateTransform();
            }
        },

        _setGraphicsData: function(){
            //TODO: Posiblemente todo esto sea inutil, con los datos del graphic data en draw deberia valer
            this.renderable = true;
            this.fillAlpha = 1;
            this.lineWidth = 0;
            this.lineColor = "black";
            this.graphicsData = [];
            this.tint = 0xFFFFFF;
            this.blendMode = PIXI.blendModes.NORMAL;
            //this.currentPath = {points:[]};
            this._webGL = [];
            this.isMask = false;
            this.bounds = null;
            this.boundsPadding = 0;
            this.dirty = true;

            this.isbackgroundGraphic = true;
        },

        setBackgroundColor : function(backgroundColor){
            this.backgroundColor = backgroundColor || 0x000001;
            this.backgroundColorSplit = PIXI.hex2rgb(this.backgroundColor);
            var hex = this.backgroundColor.toString(16);
            hex = '000000'.substr(0, 6 - hex.length) + hex;
            this.backgroundColorString = '#' + hex;

            return this;
        },

        _drawBackgroundColorCanvas: function(renderSession){
            if(this.visible === false || this.alpha === 0)return;

            if(this._cacheAsBitmap){
                this._renderCachedSprite(renderSession);
                return;
            }

            if (this._mask) {
                renderSession.maskManager.pushMask(this._mask, renderSession);
            }

            var ctx = renderSession.context;
            var transform = this.worldTransform;

            if (this.blendMode !== renderSession.currentBlendMode) {
                renderSession.currentBlendMode = this.blendMode;
                ctx.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }

            ctx.globalAlpha = this.worldAlpha;
            var resolution = renderSession.resolution;
            ctx.setTransform(transform.a * resolution,
                transform.b * resolution,
                transform.c * resolution,
                transform.d * resolution,
                transform.tx * resolution,
                transform.ty * resolution);
            ctx.beginPath();
            ctx.fillStyle = this.backgroundColorString;
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.closePath();

            for (var i = 0, j = this.children.length; i < j; i++) {
                var child = this.children[i];
                child._renderCanvas(renderSession);
            }

            if (this._mask) {
                renderSession.maskManager.popMask(renderSession);
            }
        },

        _drawBackgroundColorWebGL: function(renderSession){
            if(!this.visible || this.alpha <= 0)return;

            if(this._cacheAsBitmap)
            {
                this._renderCachedSprite(renderSession);
                return;
            }

            var i, j, blendModeWebGL;

            if(this._mask || this._filters)
            {

                // push filter first as we need to ensure the stencil buffer is correct for any masking
                if(this._filters)
                {
                    renderSession.spriteBatch.flush();
                    renderSession.filterManager.pushFilter(this._filterBlock);
                }

                if(this._mask)
                {
                    renderSession.spriteBatch.stop();
                    renderSession.maskManager.pushMask(this.mask, renderSession);
                    renderSession.spriteBatch.start();
                }

                //PIXI.Graphics.prototype._renderWebGL.call(this, renderSession);
                //PIXI.WebGLGraphics.renderGraphics(this, renderSession);
                this._renderGraphicsWebGL(renderSession);

                // simple render children!
                for(i=0,j=this.children.length; i<j; i++)
                {
                    this.children[i]._renderWebGL(renderSession);
                }

                renderSession.spriteBatch.stop();

                if(this._mask)renderSession.maskManager.popMask(this._mask, renderSession);
                if(this._filters)renderSession.filterManager.popFilter();

                renderSession.spriteBatch.start();
            }
            else
            {

                //PIXI.Graphics.prototype._renderWebGL.call(this, renderSession);
                //PIXI.WebGLGraphics.renderGraphics(this, renderSession);
                this._renderGraphicsWebGL(renderSession);

                // simple render children!
                for(i=0,j=this.children.length; i<j; i++)
                {
                    this.children[i]._renderWebGL(renderSession);
                }
            }

            renderSession.drawCount++;
        },

        _renderGraphicsWebGL: function(renderSession){
            if(this.visible === false || this.alpha === 0 || this.isMask === true)return;


            if(this._cacheAsBitmap){

                if(this.dirty){
                    this._generateCachedSprite();
                    // we will also need to update the texture on the gpu too!
                    PIXI.updateWebGLTexture(this._cachedSprite.texture.baseTexture, renderSession.gl);

                    this.dirty =  false;
                }

                this._cachedSprite.alpha = this.alpha;
                PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, renderSession);
            }else{
                renderSession.spriteBatch.stop();
                renderSession.blendModeManager.setBlendMode(this.blendMode);

                if(this._mask)renderSession.maskManager.pushMask(this._mask, renderSession);
                if(this._filters)renderSession.filterManager.pushFilter(this._filterBlock);

                // check blend mode
                if(this.blendMode !== renderSession.spriteBatch.currentBlendMode){
                    renderSession.spriteBatch.currentBlendMode = this.blendMode;
                    var blendModeWebGL = PIXI.blendModesWebGL[renderSession.spriteBatch.currentBlendMode];
                    renderSession.spriteBatch.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
                }

                PIXI.WebGLGraphics.renderGraphics(this, renderSession);

                if(this._filters)renderSession.filterManager.popFilter();
                if(this._mask)renderSession.maskManager.popMask(this.mask, renderSession);

                renderSession.drawCount++;

                renderSession.spriteBatch.start();
            }
        },

        _clearBackgroundWebGL: function(){
            this.lineWidth = 0;
            this.filling = false;
            this.dirty = true;
            this.clearDirty = true;
            this.graphicsData = [];
        },

        _renderWebGL: function(renderSession){
           if(this.backgroundColor) {

               if(!this.isbackgroundGraphic)this._setGraphicsData();
               this._clearBackgroundWebGL();
               this.graphicsData[0] = {lineWidth:this.lineWidth, lineColor:this.lineColor, lineAlpha:this.alpha,
                   fillColor:this.backgroundColor, fillAlpha:this.fillAlpha, fill:true,
                   shape:new PIXI.Rectangle(0,0, this.width, this.height), type:PIXI.Graphics.RECT};

               this._drawBackgroundColorWebGL(renderSession);
           }else {
               PQ.Container._super._renderWebGL.call(this, renderSession);
           }
        },

        _renderCanvas: function(renderSession){
            if(this.backgroundColor) {
                this._drawBackgroundColorCanvas(renderSession);
            }else{
                PQ.Container._super._renderCanvas.call(this, renderSession);
            }

        }

    });

    Object.defineProperty(PQ.Container.prototype, 'width', {
        set: function(value){
            this._size.x = value;
        },

        get: function(){
            return this._size.x;
        }
    });

    Object.defineProperty(PQ.Container.prototype, 'height', {
        set: function(value){
            this._size.y = value;
        },

        get: function(){
            return this._size.y;
        }
    });
    
})();