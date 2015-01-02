(function(){

    PQ.TweenManager = PQ.Class.extend({
        _init: function(){
            this._tweens = [];
            this._removeTweens = [];
            return this;
        },

        createTween: function(target){
            return new PQ.Tween(target, this);
        },

        addTween: function(tween){
            this._tweens.push(tween);
            return this;
        },

        removeTween: function(tween){
            this._removeTweens.push(tween);
            return this;
        },

        cancelAll: function(actor){
            var len = 0;
            if(!actor) {
                len = this._tweens.length;
                for (var i = 0; i < len; i++) {
                    this._tweens[i].cancel();
                }
            }else{
                var tweens = this.getTweensForActor(actor);
                len = tweens.length;
                for(var j = 0; j < len; j++){
                    tweens[j].cancel();
                }
            }

            return this;
        },

        getTweensForActor: function(target){
            var len = this._tweens.length;
            var tweens = [];
            for(var i = 0; i < len; i++){
                if(this._tweens[i].target === target){
                    tweens.push(this._tweens[i]);
                }
            }

            return tweens;
        },

        pauseAll: function(value){
            value = (value !== false);
            var len = this._tweens.length;
            for(var i = 0; i < len; i++) this._tweens[i].setPause(value);
            return this;
        },

        resumeAll: function(){
            this.pauseAll(false);
            return this;
        },

        _update: function(gameTime, frameElapsedTime){
            var len = this._tweens.length;
            if(len > 0){
                for(var i = 0; i < len; i++){
                    this._tweens[i]._update(gameTime, frameElapsedTime);
                    if(this._tweens[i]._ended){
                        this.removeTween(this._tweens[i]);
                    }
                }
            }

            var removeLen = this._removeTweens.length;
            if(removeLen > 0){
                for(var n = 0; n < len; n++){
                    this._remove((this._removeTweens[n]));
                }
            }
        },

        _remove: function(tween){
            var len = this._tweens.length;
            for(var i = 0; i < len; i++){
                if(this._tweens[i] === tween){
                    this._tweens.splice(i,1);
                    break;
                }
            }

            this._removeTweens = [];
        }
    });

    //TODO: pasarle valores a algunos algoritmos -> http://upshots.org/actionscript/jsas-understanding-easing
    PQ.Easing = {
        linear: function(){
            return function(k){
                return k;
            };
        },

        inQuad: function(){
            return function(k){
                return k*k;
            };
        },

        outQuad: function(){
            return function(k){
                return k*(2-k);
            };
        },

        inOutQuad: function(){
            return function(k){
                if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
                return - 0.5 * ( --k * ( k - 2 ) - 1 );
            };
        },

        inCubic: function(){
            return function (k) {
                return k * k * k;
            };
        },

        outCubic: function(){
            return function(k){
                return --k * k * k + 1;
            };
        },

        inOutCubic: function(){
            return function(k){
                if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
                return 0.5 * ( ( k -= 2 ) * k * k + 2 );
            };
        },

        inQuart: function(){
            return function(k){
                return k * k * k * k;
            };
        },

        outQuart: function(){
            return function(k){
                return 1 - ( --k * k * k * k );
            };
        },

        inOutQuart: function(){
            return function(k){
                if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
                return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
            };
        },

        inQuint: function(){
            return function(k){
                return k * k * k * k * k;
            };
        },

        outQuint: function(){
            return function(k){
                return --k * k * k * k * k + 1;
            };
        },

        inOutQuint: function(){
            return function(k){
                if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
                return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
            };
        },

        inSine: function(){
            return function(k){
                return 1 - Math.cos( k * Math.PI / 2 );
            };
        },

        outSine: function(){
            return function(k){
                return Math.sin( k * Math.PI / 2 );
            };
        },

        inOutSine: function(){
            return function(k){
                return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
            };
        },

        inExpo: function(){
            return function(k){
                return k === 0 ? 0 : Math.pow( 1024, k - 1 );
            };
        },

        outExpo: function(){
            return function(k){
                return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
            };
        },

        inOutExpo: function(){
            return function(k){
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
                return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
            };
        },

        inCirc: function(){
            return function(k){
                return 1 - Math.sqrt( 1 - k * k );
            };
        },

        outCirc: function(){
            return function(k){
                return Math.sqrt( 1 - ( --k * k ) );
            };
        },

        inOutCirc: function(){
            return function(k){
                if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
                return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);
            };
        },

        inElastic: function(){
            return function(k){
                var s, a = 0.1, p = 0.4;
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( !a || a < 1 ) { a = 1; s = p / 4; }
                else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
            };
        },

        outElastic: function(){
            return function(k){
                var s, a = 0.1, p = 0.4;
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( !a || a < 1 ) { a = 1; s = p / 4; }
                else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
            };
        },

        inOutElastic: function(){
            return function(k){
                var s, a = 0.1, p = 0.4;
                if ( k === 0 ) return 0;
                if ( k === 1 ) return 1;
                if ( !a || a < 1 ) { a = 1; s = p / 4; }
                else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
                return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
            };
        },

        inBack: function(v){
            return function(k){
                var s = v || 1.70158;
                return k * k * ( ( s + 1 ) * k - s );
            };
        },

        outBack: function(v){
            return function(k){
                var s = v || 1.70158;
                return --k * k * ( ( s + 1 ) * k + s ) + 1;
            };
        },

        inOutBack: function(v){
            return function(k){
                var s =  (v || 1.70158) * 1.525;
                if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
                return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
            };
        },

        inBounce: function(){
            return function(k){
                return 1 - PQ.Easing.outBounce()( 1 - k );
            };
        },

        outBounce: function(){
            return function(k){
                if ( k < ( 1 / 2.75 ) ) {

                    return 7.5625 * k * k;

                } else if ( k < ( 2 / 2.75 ) ) {

                    return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

                } else if ( k < ( 2.5 / 2.75 ) ) {

                    return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

                } else {

                    return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

                }
            };
        },

        inOutBounce: function(){
            return function(k){
                if ( k < 0.5 ) return PQ.Easing.inBounce()( k * 2 ) * 0.5;
                return PQ.Easing.outBounce()( k * 2 - 1 ) * 0.5 + 0.5;
            };
        }
    };

})();