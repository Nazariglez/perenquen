(function(){

    PQ.DisplayCommon = {
        depth: 0,
        _z: 0,
        scaleX: 1,
        scaleY: 1,
        _scaleX: 1,
        _scaleY: 1,
        realWidth: 0,
        realHeight: 0,

        setPathSpeed: function(){
            //TODO: Velocidad sobre un path, como para un juego de escalectrix
        },

        setAsButton: function(value, onMouseClick){
            value = (value !== false);
            this.buttonMode = value;
            if(value && onMouseClick){
                this.onMouseClick = onMouseClick;
            }
            return this;
        },

        setTint: function(value){
            value = value || 0xffffff;
            this.tint = value;
            return this;
        },

        flipX: function(){
            this.scale.set(-this.scale.x, this.scale.y);
            return this;
        },

        flipY: function(){
            this.scale.set(this.sale.x, -this.scale.y);
            return this;
        },

        setInteractive: function(value, hitArea){
            value = (value !== false);
            this.interactive = (value !== false);
            if(value) {
                if (hitArea) {
                    this.hitArea = hitArea;
                } else if (!hitArea && (this instanceof PQ.Container)) {
                    this.hitArea = new PQ.Rectangle(0, 0, this.width, this.height);
                }
            }
            return this;
        },

        setBlendMode: function(mode){
            mode = mode ||  PQ.blendModes.NORMAL;
            this.blendMode = mode;
            return this;
        },

        setMask: function(mask){
            //TODO: Añadir mascara, filter, shader, todo lo necesario.
            return this;
        },

        setAnchor: function(x, y){
            this.anchor.set(x,y);
            return this;
        },

        setVelocity: function(x, y){
            this.vel.set(x||0, y||0);
            return this;
        },

        setVelocityDirection: function(speed, direction){
            direction = direction || 0;
            this.vel.x = speed * Math.cos(direction);
            this.vel.y = speed * Math.sin(direction);

            return this;
        },

        setPosition: function(x, y){
            this.position.set(x,y);
            return this;
        },

        setScale: function(x, y){
            this.scaleX = x;
            this.scaleY = y;
            return this;
        },

        tween: function(){
            var scene = PQ.Utils.findSceneParent(this);

            if(!scene){
                console.error('This actor dont have parent scene');
                return false;
            }

            return scene.tweenManager.createTween(this);
        },

        setAlpha: function(value){
            this.alpha = value;
            return this;
        },

        setDepth: function(value){
            this.depth = value;
            return this;
        },

        addTo: function(parent){
            parent.addChild(this);
            return this;
        },

        setRotation: function(value){
            value = value || 0;
            this.rotation = 0;
            return this;
        },

        addChild: function(child){
            PIXI.DisplayObjectContainer.prototype.addChild.call(this, child);
            this._sortChildrenByDepth();

            return this;
        },

        _sortChildrenByDepth: function(){
            this.children.sort(function(a, b){
                return b._z - a._z;
            });

            if(this.stage)this.stage.dirty = true;
        },

        remove: function(){
            if(this.parent) {
                this.parent.removeChild(this);
            }
        },

        setSize: function(width, height){
            this.width = width;
            this.height = height;
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
                //this._isTweenForbidden = true;
                //TODO: Incluir algo para cancelar los mouseEvents si update es false;
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

            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i]._update) {
                    this.children[i]._update(gameTime, frameElapsedTime);
                }
            }

            this.postUpdate(gameTime, frameElapsedTime);
        },

        removeAll: function(){
            for(var i = this.children.length-1; i >= 0; i--){
                this.removeChild(this.children[i]);
            }

            return this;
        },

        setCacheAsBitmap: function(value){
            this.cacheAsBitmap = (value !== false);
            return this;
        },

        update: function(gameTime, frameElapsedTime){return this;},
        postUpdate: function(gameTime, frameElapsedTime){return this;},

        mousedown: function(mouseData){
            this._isDragging = true;
            var pos = mouseData.getLocalPosition(this);
            this._draggingPos = pos;

            if(this.onMouseDown){
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseDown(data);
            }
        },

        touchstart: function(mouseData){
            this._isDragging = true;
            var pos = mouseData.getLocalPosition(this);
            this._draggingPos = pos;

            if(this.onMouseDown){
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseDown(data);
            }
        },

        mouseup: function(mouseData){
            this._isDragging = false;
            if(this.onMouseUp){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseUp(data);
            }
        },

        touchend: function(mouseData){
            this._isDragging = false;
            if(this.onMouseUp){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseUp(data);
            }
        },

        mouseover: function(mouseData){
            this._isMouseOver = true;
            if(this.onMouseOver){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseOver(data);
            }
        },

        mouseout: function(mouseData){
            this._isMouseOver = false;
            this._isDragging = false;
            if(this.onMouseOut){
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseOut(data);
            }
        },

        mousemove: function(mouseData){
            if(!this._isMouseOver)return;
            var pos = mouseData.getLocalPosition(this);
            var data = {
                x: pos.x,
                y: pos.y,
                global: mouseData.global,
                getLocalPosition: mouseData.getLocalPosition
            };

            if(this.onMouseMove){
                this.onMouseMove(data);
            }

            if(this._isDragging && this.onMouseDrag){
                data.offsetX = data.x - this._draggingPos.x;
                data.offsetY = data.y - this._draggingPos.y;
                this.onMouseDrag(data);
            }
        },

        touchmove: function(mouseData){
            //if(!this._isMouseOver)return;
            var pos = mouseData.getLocalPosition(this);
            var data = {
                x: pos.x,
                y: pos.y,
                global: mouseData.global,
                getLocalPosition: mouseData.getLocalPosition
            };

            if(this.onMouseMove){
                this.onMouseMove(data);
            }
            if(this._isDragging && this.onMouseDrag){
                data.offsetX = data.x - this._draggingPos.x;
                data.offsetY = data.y - this._draggingPos.y;
                this.onMouseDrag(data);
            }
        },

        click: function(mouseData){
            if(this._clickData){
                if(this.onMouseDoubleClick){
                    var pos = mouseData.getLocalPosition(this);
                    var data = {
                        x: pos.x,
                        y: pos.y,
                        global: mouseData.global,
                        getLocalPosition: mouseData.getLocalPosition
                    };
                    this.onMouseDoubleClick(data);
                }
                delete this._clickData;
                return;
            }

            this._clickData = {
                date : Date.now(),
                mouseData: mouseData
            };
        },

        tap: function(mouseData) {
            if (this._clickData) {
                if (this.onMouseDoubleClick) {
                    var pos = mouseData.getLocalPosition(this);
                    var data = {
                        x: pos.x,
                        y: pos.y,
                        global: mouseData.global,
                        getLocalPosition: mouseData.getLocalPosition
                    };
                    this.onMouseDoubleClick(data);
                }
                delete this._clickData;
                return;
            }

            this._clickData = {
                date: Date.now(),
                mouseData: mouseData
            };
        },

        _onMouseClickCallback: function(mouseData){
            if(this.onMouseClick) {
                var pos = mouseData.getLocalPosition(this);
                var data = {
                    x: pos.x,
                    y: pos.y,
                    global: mouseData.global,
                    getLocalPosition: mouseData.getLocalPosition
                };
                this.onMouseClick(data);
            }
        },

        mouseupoutside: function(mouseData){
            this._isMouseOver = false;
            this._isDragging = false;
        },

        touchendoutside: function(mouseData){
            this._isMouseOver = false;
            this._isDragging = false;
        },

        //TODO: Mutlitouch en dispositivos de manera sencilla

        onMouseDown: function(evt){},
        onMouseUp: function(evt){},
        onMouseDrag: function(evt){},
        onMouseMove: function(evt){},
        onMouseOver: function(evt){},
        onMouseClick: function(evt){},
        onMouseDoubleClick: function(evt){},
        onKeyPressed: function(evt){},
        onKeyReleased: function(evt){},
        onKeyState: function(evt){}
    };

    Object.defineProperty(PQ.DisplayCommon, 'depth', {
        set: function(value){
            value = value || 0;
            this._z = value;
            if(this.parent){
                this.parent._sortChildrenByDepth();
            }
        },

        get: function(){
            return this._z;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'scaleX', {
        set: function(value){
            var scale = (this.scale.x/this._scaleX) * value;
            this.scale.x = isNaN(scale) ? value : scale;
            this._scaleX = value;
        },

        get: function(){
            return this._scaleX;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'scaleY', {
        set: function(value){
            var scale = (this.scale.y/this._scaleY) * value;
            this.scale.y = isNaN(scale) ? value : scale;
            this._scaleY = value;
        },

        get: function(){
            return this._scaleY;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'width', {
        get: function() {
            return this._width;//this.scale.x * this.texture.frame.width;
        },
        set: function(value) {
            this.scale.x = (value / this.texture.frame.width) * this.scaleX;
            this._width = value;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'height', {
        get: function() {
            return this._height; //this.scale.y * this.texture.frame.height;
        },
        set: function(value) {
            this.scale.y = (value / this.texture.frame.height) * this.scaleY;
            this._height = value;
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'realWidth', {
        get: function() {
            return Math.abs(this.scale.x * this._width);
        }
    });

    Object.defineProperty(PQ.DisplayCommon, 'realHeight', {
        get: function() {
            return  Math.abs(this.scale.y * this._height);
        }
    });

})();