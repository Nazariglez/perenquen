(function(){

    //TODO: Funcion de crop

    PQ.Sprite = PIXI.Sprite.extend(PQ.DisplayCommon, {
        _init: function(texture){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }
            PQ.Sprite._super._init.call(this, texture);

            this.position = new PQ.Point();
            this.anchor = new PQ.Point(0.5, 0.5);
            this.vel = new PQ.Point(0,0);

            this._anims = [];
            this._currentAnim = 0;
            this.playing = false;
            return this;
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
        var res = this.texture.baseTexture.resolution || 1;
        var width = this.texture.frame.width/res;
        var height = this.texture.frame.height/res;

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

        addAnimationFromRowsAndCols: function(id, data, time, loop){
            var rows = data.rows,
                cols = data.cols,
                texture = (typeof data.texture === "string") ? PQ.AssetCache.getTexture(data.texture) : data.texture,
                frameOrder = data.order;

            var w = texture.width/cols,
                h = texture.height/rows,
                xx = texture.frame.x,
                yy = texture.frame.y;

            var frames = [];
            for(var y = 0; y < rows; y++){
                for(var x = 0; x < cols; x++){
                    var textureSize = new PQ.Rectangle(xx + x*w, yy + y*h, w,h),
                        crop = textureSize.clone();
                    frames.push(new PQ.Texture(texture, textureSize, crop));
                }
            }

            var textures;
            if(frameOrder){
                textures = [];
                for(var i = 0; i < frameOrder.length; i++){
                    textures.push(frames[frameOrder[i]]);
                }
            }else{
                textures = frames;
            }

            return this.addAnimation(id, textures, time, loop);

        },

        addAnimation: function(id, textures, time, loop){
            for(var i = 0; i < textures.length; i++){
                if(typeof textures[i] === "string"){
                    textures[i] = PQ.AssetCache.getTexture(textures[i]);
                }
            }

            var anim = {
                id: id,
                index : 0,
                textures: textures,
                time: time,
                loop: loop || false
            };

            this._anims.push(anim);

            return this;
        },

        _getAnimInfo: function(id){
            var anim = false;
            for(var i = 0; i < this._anims.length; i++){
                if(id === this._anims[i].id){
                    anim = this._anims[i];
                    break;
                }
            }

            return anim;

        },

        setTexture: function(texture){
            if(!texture){
                texture = PQ.AssetCache.getTexture("_PQDefaultTexture");
            }else if(typeof texture === "string"){
                texture = PQ.AssetCache.getTexture(texture);
            }
            PQ.Sprite._super.setTexture.call(this, texture);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            if(PQ.Debug.enabled)PQ.Debug.sceneActors++;
            if(this._clickData){
                if(Date.now() - this._clickData.date >= PQ.Config.mouseDoubleClickWait){
                    this._onMouseClickCallback(this._clickData.mouseData);
                    delete this._clickData;
                }
            }

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

            if(this.playing){
                var scope = this;
                this._currentAnim.tick += frameElapsedTime;

                var anim = Math.floor(this._currentAnim.tick/this._currentAnim.time);
                if(anim >= this._currentAnim.textures.length){
                    this._currentAnim.tick = 0;
                    anim = 0;
                    if(!this._currentAnim.loop){
                        this.stopAnimation(this._currentAnim.textures.length-1);
                        if(this._currentAnim.onEnd){
                            this._currentAnim.onEnd.apply(scope);
                        }
                    }
                }

                if(this.playing && this._currentAnim.index !== anim){
                    this._currentAnim.index = anim;
                    this.texture = this._currentAnim.textures[this._currentAnim.index];
                    if(this.onAnimationFrame){
                        this.onAnimationFrame(this._currentAnim);
                    }
                }

            }

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        },

        //TODO: Revisar, quizás implementar un objeto Animation que se añada a los sprites con addAnimation(new PQ.Animation()) ???
        onAnimationFrame: function(){return this;},

        playAnimation: function(id, callback, frame){
            var anim = this._getAnimInfo(id);

            if(anim){
                this.playing = true;
                this._currentAnim = anim;
                this._currentAnim.tick = 0;
                if(frame){
                    this._currentAnim.index = frame;
                }
                this.texture = this._currentAnim.textures[this._currentAnim.index];

                if(callback){
                    this._currentAnim.onEnd = callback;
                }
            }

            return this;
        },

        stopAnimation: function(frame){
            this.playing = false;
            if(frame){
                this._currentAnim.index = frame;
                this.texture = this._currentAnim.textures[this._currentAnim.index];
            }
            return this;
        },

        _renderCanvas: function(renderSession){
            // If the sprite is not visible or the alpha is 0 then no need to render this element
            if (this.visible === false || this.alpha === 0 || this.texture.crop.width <= 0 || this.texture.crop.height <= 0) return;

            if (this.blendMode !== renderSession.currentBlendMode)
            {
                renderSession.currentBlendMode = this.blendMode;
                renderSession.context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];
            }

            if (this._mask)
            {
                renderSession.maskManager.pushMask(this._mask, renderSession);
            }

            //  Ignore null sources
            if (this.texture.valid)
            {
                var resolution = this.texture.baseTexture.resolution / renderSession.resolution;

                renderSession.context.globalAlpha = this.worldAlpha;

                //  Allow for pixel rounding
                if (renderSession.roundPixels)
                {
                    renderSession.context.setTransform(
                        this.worldTransform.a,
                        this.worldTransform.b,
                        this.worldTransform.c,
                        this.worldTransform.d,
                        (this.worldTransform.tx* renderSession.resolution) | 0,
                        (this.worldTransform.ty* renderSession.resolution) | 0);
                }
                else
                {
                    renderSession.context.setTransform(
                        this.worldTransform.a,
                        this.worldTransform.b,
                        this.worldTransform.c,
                        this.worldTransform.d,
                        this.worldTransform.tx * renderSession.resolution,
                        this.worldTransform.ty * renderSession.resolution);
                }

                //  If smoothingEnabled is supported and we need to change the smoothing property for this texture
                if (renderSession.smoothProperty && renderSession.scaleMode !== this.texture.baseTexture.scaleMode)
                {
                    renderSession.scaleMode = this.texture.baseTexture.scaleMode;
                    renderSession.context[renderSession.smoothProperty] = (renderSession.scaleMode === PIXI.scaleModes.LINEAR);
                }

                //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
                var dx = (this.texture.trim) ? this.texture.trim.x : 0;
                var dy = (this.texture.trim) ? this.texture.trim.y  : 0;

                if (this.tint !== 0xFFFFFF)
                {
                    if (this.cachedTint !== this.tint)
                    {
                        this.cachedTint = this.tint;

                        //  TODO clean up caching - how to clean up the caches?
                        this.tintedTexture = PIXI.CanvasTinter.getTintedTexture(this, this.tint);
                    }

                    renderSession.context.drawImage(
                        this.tintedTexture,
                        0,
                        0,
                        this.texture.crop.width,
                        this.texture.crop.height,
                        dx / resolution,
                        dy / resolution,
                        this.texture.crop.width / resolution,
                        this.texture.crop.height / resolution);
                }
                else
                {
                    renderSession.context.drawImage(
                        this.texture.baseTexture.source,
                        this.texture.crop.x,
                        this.texture.crop.y,
                        this.texture.crop.width,
                        this.texture.crop.height,
                        dx / resolution,
                        dy / resolution,
                        this.texture.crop.width / resolution,
                        this.texture.crop.height / resolution);
                }
            }

            // OVERWRITE
            for (var i = 0, j = this.children.length; i < j; i++)
            {
                this.children[i]._renderCanvas(renderSession);
            }

            if (this._mask)
            {
                renderSession.maskManager.popMask(renderSession);
            }
        }
    });

    Object.defineProperty(PQ.Sprite.prototype, 'width', {
        get: function() {
            if(!this._width)this._width=this.texture.frame.width/this.texture.baseTexture.resolution;
            return this._width;//this.scale.x * this.texture.frame.width;
        },
        set: function(value) {
            this.scale.x = (value / (this.texture.frame.width/this.texture.baseTexture.resolution)) * this.scaleX;
            this._width = value;
        }
    });

    Object.defineProperty(PQ.Sprite.prototype, 'height', {
        get: function() {
            if(!this._height)this._height=this.texture.frame.height/this.texture.baseTexture.resolution;
            return this._height; //this.scale.y * this.texture.frame.height;
        },
        set: function(value) {
            this.scale.y = (value / (this.texture.frame.height/this.texture.baseTexture.resolution)) * this.scaleY;
            this._height = value;
        }
    });

})();