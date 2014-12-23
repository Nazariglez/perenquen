(function(){
    PIXI.WebGLSpriteBatch.prototype.render = function(sprite){
        var texture = sprite.texture;

        //TODO set blend modes..
        // check texture..
        if(this.currentBatchSize >= this.size)
        {
            this.flush();
            this.currentBaseTexture = texture.baseTexture;
        }

        // get the uvs for the texture
        var uvs = texture._uvs;
        // if the uvs have not updated then no point rendering just yet!
        if(!uvs)return;

        // get the sprites current alpha
        var alpha = sprite.worldAlpha;
        var tint = sprite.tint;

        var verticies = this.vertices;

        // TODO trim??
        var aX = 0;
        var aY = 0;

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
            w0 = (texture.frame.width ) * (1-aX);
            w1 = (texture.frame.width ) * -aX;

            h0 = texture.frame.height * (1-aY);
            h1 = texture.frame.height * -aY;
        }

        var index = this.currentBatchSize * 4 * this.vertSize;

        var resolution = texture.baseTexture.resolution;

        var worldTransform = sprite.worldTransform;

        var a = worldTransform.a / resolution;
        var b = worldTransform.b / resolution;
        var c = worldTransform.c / resolution;
        var d = worldTransform.d / resolution;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;


        // xy
        verticies[index++] = a * w1 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w1 + ty;
        // uv
        verticies[index++] = uvs.x0;
        verticies[index++] = uvs.y0;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // xy
        verticies[index++] = a * w0 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w0 + ty;
        // uv
        verticies[index++] = uvs.x1;
        verticies[index++] = uvs.y1;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // xy
        verticies[index++] = a * w0 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w0 + ty;
        // uv
        verticies[index++] = uvs.x2;
        verticies[index++] = uvs.y2;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // xy
        verticies[index++] = a * w1 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w1 + ty;
        // uv
        verticies[index++] = uvs.x3;
        verticies[index++] = uvs.y3;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // increment the batchsize
        this.sprites[this.currentBatchSize++] = sprite;
    };

    PIXI.WebGLSpriteBatch.prototype.renderTilingSprite = function(tilingSprite){
        var texture = tilingSprite.tilingTexture;

        // check texture..
        if(this.currentBatchSize >= this.size)
        {
            //return;
            this.flush();
            this.currentBaseTexture = texture.baseTexture;
        }

        // set the textures uvs temporarily
        // TODO create a separate texture so that we can tile part of a texture

        if(!tilingSprite._uvs)tilingSprite._uvs = new PIXI.TextureUvs();

        var uvs = tilingSprite._uvs;

        tilingSprite.tilePosition.x %= texture.baseTexture.width * tilingSprite.tileScaleOffset.x;
        tilingSprite.tilePosition.y %= texture.baseTexture.height * tilingSprite.tileScaleOffset.y;

        var offsetX =  tilingSprite.tilePosition.x/(texture.baseTexture.width*tilingSprite.tileScaleOffset.x);
        var offsetY =  tilingSprite.tilePosition.y/(texture.baseTexture.height*tilingSprite.tileScaleOffset.y);

        var scaleX =  (tilingSprite.width / texture.baseTexture.width)  / (tilingSprite.tileScale.x * tilingSprite.tileScaleOffset.x);
        var scaleY =  (tilingSprite.height / texture.baseTexture.height) / (tilingSprite.tileScale.y * tilingSprite.tileScaleOffset.y);

        uvs.x0 = 0 - offsetX;
        uvs.y0 = 0 - offsetY;

        uvs.x1 = (1 * scaleX) - offsetX;
        uvs.y1 = 0 - offsetY;

        uvs.x2 = (1 * scaleX) - offsetX;
        uvs.y2 = (1 * scaleY) - offsetY;

        uvs.x3 = 0 - offsetX;
        uvs.y3 = (1 *scaleY) - offsetY;

        // get the tilingSprites current alpha
        var alpha = tilingSprite.worldAlpha;
        var tint = tilingSprite.tint;

        var  verticies = this.vertices;

        var width = tilingSprite.width;
        var height = tilingSprite.height;

        // TODO trim??
        var aX = 0;
        var aY = 0;
        var w0 = width * (1-aX);
        var w1 = width * -aX;

        var h0 = height * (1-aY);
        var h1 = height * -aY;

        var index = this.currentBatchSize * 4 * this.vertSize;

        var resolution = texture.baseTexture.resolution;

        var worldTransform = tilingSprite.worldTransform;

        var a = worldTransform.a / resolution;//[0];
        var b = worldTransform.b / resolution;//[3];
        var c = worldTransform.c / resolution;//[1];
        var d = worldTransform.d / resolution;//[4];
        var tx = worldTransform.tx;//[2];
        var ty = worldTransform.ty;///[5];

        // xy
        verticies[index++] = a * w1 + c * h1 + tx;
        verticies[index++] = d * h1 + b * w1 + ty;
        // uv
        verticies[index++] = uvs.x0;
        verticies[index++] = uvs.y0;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // xy
        verticies[index++] = (a * w0 + c * h1 + tx);
        verticies[index++] = d * h1 + b * w0 + ty;
        // uv
        verticies[index++] = uvs.x1;
        verticies[index++] = uvs.y1;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // xy
        verticies[index++] = a * w0 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w0 + ty;
        // uv
        verticies[index++] = uvs.x2;
        verticies[index++] = uvs.y2;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // xy
        verticies[index++] = a * w1 + c * h0 + tx;
        verticies[index++] = d * h0 + b * w1 + ty;
        // uv
        verticies[index++] = uvs.x3;
        verticies[index++] = uvs.y3;
        // color
        verticies[index++] = alpha;
        verticies[index++] = tint;

        // increment the batchsize
        this.sprites[this.currentBatchSize++] = tilingSprite;
    };

    PIXI.WebGLFastSpriteBatch.prototype.renderSprite = function(sprite){
        //sprite = children[i];
        if(!sprite.visible)return;

        // TODO trim??
        if(sprite.texture.baseTexture !== this.currentBaseTexture)
        {
            this.flush();
            this.currentBaseTexture = sprite.texture.baseTexture;

            if(!sprite.texture._uvs)return;
        }

        var uvs, verticies = this.vertices, width, height, w0, w1, h0, h1, index;

        uvs = sprite.texture._uvs;

        width = sprite.texture.frame.width;
        height = sprite.texture.frame.height;

        var aX = 0,
            aY = 0;

        if (sprite.texture.trim)
        {
            // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
            var trim = sprite.texture.trim;

            w1 = trim.x - aX * trim.width;
            w0 = w1 + sprite.texture.crop.width;

            h1 = trim.y - aY * trim.height;
            h0 = h1 + sprite.texture.crop.height;
        }
        else
        {
            w0 = (sprite.texture.frame.width ) * (1-aX);
            w1 = (sprite.texture.frame.width ) * -aX;

            h0 = sprite.texture.frame.height * (1-aY);
            h1 = sprite.texture.frame.height * -aY;
        }

        index = this.currentBatchSize * 4 * this.vertSize;

        // xy
        verticies[index++] = w1;
        verticies[index++] = h1;

        verticies[index++] = sprite.position.x;
        verticies[index++] = sprite.position.y;

        //scale
        verticies[index++] = sprite.scale.x;
        verticies[index++] = sprite.scale.y;

        //rotation
        verticies[index++] = sprite.rotation;

        // uv
        verticies[index++] = uvs.x0;
        verticies[index++] = uvs.y1;
        // color
        verticies[index++] = sprite.alpha;


        // xy
        verticies[index++] = w0;
        verticies[index++] = h1;

        verticies[index++] = sprite.position.x;
        verticies[index++] = sprite.position.y;

        //scale
        verticies[index++] = sprite.scale.x;
        verticies[index++] = sprite.scale.y;

        //rotation
        verticies[index++] = sprite.rotation;

        // uv
        verticies[index++] = uvs.x1;
        verticies[index++] = uvs.y1;
        // color
        verticies[index++] = sprite.alpha;


        // xy
        verticies[index++] = w0;
        verticies[index++] = h0;

        verticies[index++] = sprite.position.x;
        verticies[index++] = sprite.position.y;

        //scale
        verticies[index++] = sprite.scale.x;
        verticies[index++] = sprite.scale.y;

        //rotation
        verticies[index++] = sprite.rotation;

        // uv
        verticies[index++] = uvs.x2;
        verticies[index++] = uvs.y2;
        // color
        verticies[index++] = sprite.alpha;




        // xy
        verticies[index++] = w1;
        verticies[index++] = h0;

        verticies[index++] = sprite.position.x;
        verticies[index++] = sprite.position.y;

        //scale
        verticies[index++] = sprite.scale.x;
        verticies[index++] = sprite.scale.y;

        //rotation
        verticies[index++] = sprite.rotation;

        // uv
        verticies[index++] = uvs.x3;
        verticies[index++] = uvs.y3;
        // color
        verticies[index++] = sprite.alpha;

        // increment the batchs
        this.currentBatchSize++;

        if(this.currentBatchSize >= this.size)
        {
            this.flush();
        }
    };

    PIXI.InteractionManager.prototype.hitTest = function(item, interactionData){
        var global = interactionData.global;

        if (!item.worldVisible)
        {
            return false;
        }

        // temp fix for if the element is in a non visible

        var worldTransform = item.worldTransform, i,
            a = worldTransform.a, b = worldTransform.b,
            c = worldTransform.c, tx = worldTransform.tx,
            d = worldTransform.d, ty = worldTransform.ty,

            id = 1 / (a * d + c * -b),
            x = d * id * global.x + -c * id * global.y + (ty * c - tx * d) * id,
            y = a * id * global.y + -b * id * global.x + (-ty * a + tx * b) * id;


        interactionData.target = item;

        //a sprite or display object with a hit area defined
        if (item.hitArea && item.hitArea.contains)
        {
            if (item.hitArea.contains(x, y))
            {
                interactionData.target = item;
                return true;
            }
            return false;
        }
        // a sprite with no hitarea defined
        else if(item instanceof PIXI.Sprite)
        {
            var width = item.width;
            var height = item.height;
            var x1 = 0;
            var y1;

            if (x > x1 && x < x1 + width)
            {
                y1 = 0;

                if (y > y1 && y < y1 + height)
                {
                    // set the target property if a hit is true!
                    interactionData.target = item;
                    return true;
                }
            }
        }
        else if(item instanceof PIXI.Graphics)
        {
            var graphicsData = item.graphicsData;
            for (i = 0; i < graphicsData.length; i++)
            {
                var data = graphicsData[i];
                if(!data.fill)continue;

                // only deal with fills..
                if(data.shape)
                {
                    if(data.shape.contains(x, y))
                    {
                        interactionData.target = item;
                        return true;
                    }
                }
            }
        }

        var length = item.children.length;

        for (i = 0; i < length; i++)
        {
            var tempItem = item.children[i];
            var hit = this.hitTest(tempItem, interactionData);
            if (hit)
            {
                // hmm.. TODO SET CORRECT TARGET?
                interactionData.target = item;
                return true;
            }
        }
        return false;
    };
})();