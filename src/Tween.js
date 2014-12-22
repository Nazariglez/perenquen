(function(){

    function isObject(obj){
        return Object.prototype.toString.call(obj) === "[object Object]";
    }

    //TODO: Añadir un notExpire para reaprovechar la instancia
    //TODO: Pemitir meter todos los datos en json desde .set o desde el constructor
    PQ.Tween = PQ.Timer.extend({
        _easing: null,
        _from: null,
        _to: null,
        _pingPong: false,
        _pingPongState: null,
        _pathInfo: null,

        _chainTween: null,

        _onPingPongCallback: null,

        _init: function(target, manager){
            this.setTarget(target);
            this.setManager(manager);
            this._easing = PQ.Easing.linear();

            return this;
        },

        onPingPong: function(callback){
            this._onPingPongCallback = callback;
            return this;
        },

        setTarget: function(target){
            this.target = target;
            return this;
        },

        setEasing: function(ease){
            this._easing = ease || PQ.Easing.linear;
            return this;
        },

        setManager: function(manager){
            var oldManager = this.manager;

            if(manager instanceof PQ.TweenManager){
                this.manager = manager;
                this.manager.addTween(this);
            }else if(manager instanceof PQ.Scene || manager instanceof PQ.Game){
                this.manager = manager.tweenManager;
                this.manager.addTween(this);
            }

            if(oldManager) oldManager.removeTween(this);

            return this;
        },

        to: function(object){
            this._to = object;
            return this;
        },

        path: function(path, reverse){
            this._pathInfo = {
                path: path,
                reverse: reverse
            };
            return this;
        },

        cancel: function(){
            this._ended = true;
        },

        from: function(object){
            this._from = object;
            return this;
        },

        _doNotUpdate: function(){
            //En caso de que el target se haya borrado despues de empezar, elimino el tween
            if(!this.target && this._started){
                this.cancel();
            }

            return (!this.manager || this._paused || !this._time || !this.target || (!this._to&&!this._pathInfo) || this.target.blockTween || this._ended);
        },

        _checkFromTo: function(){
            if(!this._from) this._from = {};

            function checkRecursiveFrom(to, from, target){
                for(var k in to){
                    if(from[k] !== 0 && !from[k]){
                        if(isObject(target[k])){
                            from[k] = JSON.parse(JSON.stringify(target[k]));
                            checkRecursiveFrom(to[k], from[k], target[k]);
                        }else{
                            from[k] = target[k];
                        }
                    }
                }
            }

            checkRecursiveFrom(this._to, this._from, this.target);

            if(this._pathInfo){
                var distance = this._pathInfo.path.getDistance();
                if(this._pathInfo.reverse){
                    this._pathInfo.from = distance;
                    this._pathInfo.to = 0;
                }else{
                    this._pathInfo.from = 0;
                    this._pathInfo.to = distance;
                }
            }

        },

        _applyTween: function(){
            var scope = this;
            function recursiveApply(to, from, target){
                for(var k in to){
                    if(!isObject(to[k])) {
                        var b = from[k],
                            c = to[k] - from[k],
                            d = scope._time,
                            t = (d - scope._leftTime)/d;
                        target[k] = b + (c*scope._easing(t));
                    }else{
                        recursiveApply(to[k], from[k], target[k]);
                    }
                }
            }

            recursiveApply(this._to, this._from, this.target);

            if(this._pathInfo){
                var b = this._pathInfo.from,
                    c = this._pathInfo.to - this._pathInfo.from,
                    d = this._time,
                    t = (d - this._leftTime)/d;

                var distance = b + (c*scope._easing(t));
                var pos = this._pathInfo.path.getPointAtDistance(distance);
                this.target.x = pos.x;
                this.target.y = pos.y;
            }
        },

        setPingPong: function(value){
            this._pingPong = (value !== false);
            if(this._pingPong){
                this._pingPongState = 0;
            }
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            var to, from;
            if(this._doNotUpdate()){
                return;
            }

            /*if(this.target._isTweenForbidden){
                delete this.target._isTweenForbidden;
                return;
            }*/

            if(this._delay && this._delayLeft > 0){
                this._delayLeft -= frameElapsedTime;
                return;
            }

            if(!this._started){
                this._started = true;

                this._checkFromTo();

                if(typeof this._onStartCallback === "function"){
                    this._onStartCallback(this.target, this._time - this._leftTime);
                }
            }

            if(this._leftTime > 0) {
                this._leftTime -= frameElapsedTime;
                if (this._leftTime < 0) this._leftTime = 0;

                this._applyTween();

                if (typeof this._onTickCallback === "function") {
                    var loop = null;
                    if (this._loop) {
                        loop = this._loopCount;
                    } else if (this._repeat) {
                        loop = this._repeat - this._leftRepeat;
                    }
                    this._onTickCallback(this.target, this._time - this._leftTime, loop);
                }

            }else if(this._pingPong && this._pingPongState === 0){
                this._applyPingPong();
            }else if(this._loop) {

                this.setTime(this._time);
                if(this._pingPong){
                    this._pingPongState = 0;
                    to = this._to;
                    from = this._from;
                    this._from = to;
                    this._to = from;

                    if(this._pathInfo){
                        to = this._pathInfo.to;
                        from = this._pathInfo.from;
                        this._pathInfo.to = from;
                        this._pathInfo.from = to;
                    }
                }

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this.target, this._time - this._leftTime, this._loopCount);
                }

                this._loopCount++;

            }else if(this._leftRepeat && this._leftRepeat > 1) {

                this.setTime(this._time);
                this._leftRepeat--;
                if(this._pingPong){
                    this._pingPongState = 0;
                    to = this._to;
                    from = this._from;
                    this._from = to;
                    this._to = from;

                    if(this._pathInfo){
                        to = this._pathInfo.to;
                        from = this._pathInfo.from;
                        this._pathInfo.to = from;
                        this._pathInfo.from = to;
                    }
                }

                if(typeof this._onRepeatCallback === "function"){
                    this._onRepeatCallback(this.target, this._time - this._leftTime, this._repeat-this._leftRepeat);
                }

            }else if(!this._ended){

                this._ended = true;

                if(typeof this._onEndCallback === "function"){
                    this._onEndCallback(this.target, this._time - this._leftTime);
                }

                if(this._chainTween){
                    this._chainTween.setManager(this.manager);
                }

            }

        },

        _applyPingPong: function(){
            var to = this._to;
            var from = this._from;
            this._from = to;
            this._to = from;

            this._pingPongState = 1;
            this.setTime(this._time);

            if(this._pathInfo){
                to = this._pathInfo.to;
                from = this._pathInfo.from;
                this._pathInfo.to = from;
                this._pathInfo.from = to;
            }

            if(typeof this._onPingPongCallback === "function"){
                this._onPingPongCallback(this.target, this._time - this._leftTime, this._pingPongState);
            }
        },

        chain: function(tween){
            this._chainTween = tween || new PQ.Tween(this.target);
            return this._chainTween;
        }

    });

})();