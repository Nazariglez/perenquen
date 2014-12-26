(function(){
    //TODO: Problemas con renderTexture en webgl no recibe el parametro source y peta, en canvas funciona, hacer testcase para pixi
    PQ.TilingSprite = PIXI.TilingSprite.extend(PQ.DisplayMixin, {
        _init: function(texture, width, height){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }

            PQ.TilingSprite._super._init.call(this, texture, width, height);
            this._textureResolution = texture.baseTexture.resolution || 1;
            this.anchor = new PQ.Point(0.5, 0.5);
            this.vel = new PQ.Point(0,0);
            this.tileVel = new PQ.Point(0,0);
        },

        updateTransform : function() {
            // create some matrix refs for easy access
            var pt = this.parent.worldTransform;
            var wt = this.worldTransform;

            // temporary matrix variables
            var a, b, c, d, tx, ty;

            var aX = this.anchor.x * this.width;
            var aY = this.anchor.y * this.height;

            // TODO create a const for 2_PI
            // so if rotation is between 0 then we can simplify the multiplication process..
            if(this.rotation % PIXI.PI_2)
            {
                // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
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
                if(aX || aY)
                {
                    tx -= aX * a + aY * c;
                    ty -= aX * b + aY * d;
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

                tx = this.position.x - aX * a;
                ty = this.position.y - aY * d;

                wt.a  = a  * pt.a;
                wt.b  = a  * pt.b;
                wt.c  = d  * pt.c;
                wt.d  = d  * pt.d;
                wt.tx = tx * pt.a + ty * pt.c + pt.tx;
                wt.ty = tx * pt.b + ty * pt.d + pt.ty;
            }

            // multiply the alphas..
            this.worldAlpha = this.alpha * this.parent.worldAlpha;


            for(var i=0,j=this.children.length; i<j; i++)
            {
                this.children[i].updateTransform();
            }
        },

        getBounds : function(matrix)
        {
            var width = this._width;
            var height = this._height;

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

        setTexture: function(texture){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }
            PQ.TilingSprite._super.setTexture.call(this, texture);
            this._textureResolution = texture.baseTexture.resolution || 1;
            return this;
        },

        setTileScale: function(x,y){
            this.tileScale.set(x,y);
            return this;
        },

        setTileVelocity: function(x,y){
            this.tileVel.set(x||0, y||0);
            return this;
        },

        setTilePosition: function(x, y){
            this.tilePosition.set(x,y);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.sceneActors++;
            if(this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this.vel.x !== 0 || this.vel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.x += this.vel.x*PQ.delta;
                    this.y += this.vel.y*PQ.delta;
                }else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                }
            }

            if(this.tileVel.x !== 0 || this.tileVel.y !== 0){
                if(PQ.Config.deltaAnimation){
                    this.tilePosition.x += this.tileVel.x*PQ.delta;
                    this.tilePosition.y += this.tileVel.y*PQ.delta;
                }else {
                    this.tilePosition.x += this.tileVel.x;
                    this.tilePosition.y += this.tileVel.y;
                }
            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        },

        generateTilingTexture: function(forcePowerOfTwo){
            if (!this.texture.baseTexture.hasLoaded) return;

            var res = this._textureResolution;

            var texture = this.originalTexture || this.texture;
            var frame = texture.frame;
            var targetWidth, targetHeight;

            //  Check that the frame is the same size as the base texture.
            var isFrame = frame.width !== texture.baseTexture.width || frame.height !== texture.baseTexture.height;

            var newTextureRequired = false;

            if (!forcePowerOfTwo)
            {
                if (isFrame)
                {
                    targetWidth = frame.width;
                    targetHeight = frame.height;

                    newTextureRequired = true;
                }
            }
            else
            {

                targetWidth = PIXI.getNextPowerOfTwo(frame.width);
                targetHeight = PIXI.getNextPowerOfTwo(frame.height);

                //TODO: El isFrame lo he añadido, hay un bug muy extraño cuando la textura es pot2 y el frame es pot2 tambien (revisar)
                if (isFrame || frame.width !== targetWidth || frame.height !== targetHeight) newTextureRequired = true;
            }

            if (newTextureRequired)
            {
                var canvasBuffer;

                if (this.tilingTexture && this.tilingTexture.isTiling)
                {
                    canvasBuffer = this.tilingTexture.canvasBuffer;
                    canvasBuffer.resize(targetWidth, targetHeight);
                    this.tilingTexture.baseTexture.width = targetWidth;
                    this.tilingTexture.baseTexture.height = targetHeight;
                    this.tilingTexture.needsUpdate = true;
                }
                else
                {
                    canvasBuffer = new PIXI.CanvasBuffer(targetWidth, targetHeight);

                    this.tilingTexture = PIXI.Texture.fromCanvas(canvasBuffer.canvas);
                    this.tilingTexture.canvasBuffer = canvasBuffer;
                    this.tilingTexture.isTiling = true;
                }

                canvasBuffer.context.drawImage(texture.baseTexture.source,
                    texture.crop.x,
                    texture.crop.y,
                    texture.crop.width,
                    texture.crop.height,
                    0,
                    0,
                    targetWidth,
                    targetHeight);

                this.tileScaleOffset.x = frame.width / targetWidth/res;
                this.tileScaleOffset.y = frame.height / targetHeight/res;
            }
            else
            {
                //  TODO - switching?
                if (this.tilingTexture && this.tilingTexture.isTiling)
                {
                    // destroy the tiling texture!
                    // TODO could store this somewhere?
                    this.tilingTexture.destroy(true);
                }

                this.tileScaleOffset.x = 1;
                this.tileScaleOffset.y = 1;
                this.tilingTexture = texture;
            }

            this.refreshTexture = false;

            this.originalTexture = this.texture;
            this.texture = this.tilingTexture;

            this.tilingTexture.baseTexture._powerOf2 = true;
            //this.tilingTexture.baseTexture.resolution = res;
        },

        _renderCanvas: function(renderSession){
            if (this.visible === false || this.alpha === 0)return;

            var res = this._textureResolution;

            var context = renderSession.context;

            if (this._mask)
            {
                renderSession.maskManager.pushMask(this._mask, context);
            }

            context.globalAlpha = this.worldAlpha;

            var transform = this.worldTransform;

            var i,j;

            var resolution = renderSession.resolution;

            context.setTransform(transform.a * resolution,
                transform.c * resolution,
                transform.b * resolution,
                transform.d * resolution,
                transform.tx * resolution,
                transform.ty * resolution);

            if (!this.__tilePattern ||  this.refreshTexture)
            {
                this.generateTilingTexture(false);

                if (this.tilingTexture)
                {
                    this.__tilePattern = context.createPattern(this.tilingTexture.baseTexture.source, 'repeat');
                }
                else
                {
                    return;
                }
            }

            // check blend mode
            if (this.blendMode !== renderSession.currentBlendMode)
            {
                renderSession.currentBlendMode = this.blendMode;
                context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }

            var tilePosition = this.tilePosition;
            var tileScale = this.tileScale;
            tileScaleX = tileScale.x / res;
            tileScaleY = tileScale.y / res;

            tilePosition.x %= this.tilingTexture.baseTexture.width;
            tilePosition.y %= this.tilingTexture.baseTexture.height;

            // offset - make sure to account for the anchor point..
            context.scale(tileScaleX,tileScaleY);
            context.translate(tilePosition.x, tilePosition.y);

            context.fillStyle = this.__tilePattern;

            context.fillRect(-tilePosition.x,
                -tilePosition.y,
                this._width / tileScaleX,
                this._height / tileScaleY);

            context.scale(1 / tileScaleX, 1 / tileScaleY);
            context.translate(-tilePosition.x, -tilePosition.y);

            if (this._mask)
            {
                renderSession.maskManager.popMask(renderSession.context);
            }

            for (i=0,j=this.children.length; i<j; i++)
            {
                this.children[i]._renderCanvas(renderSession);
            }
        }

    });

})();