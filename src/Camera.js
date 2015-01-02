(function(){

    //TODO: Revisar problemas con las transiciones cuando hay un setFollow de la camara.

    PQ.Camera = PQ.Container.extend({
        _init: function () {
            PQ.Camera._super._init.call(this);
            this.depth = Infinity;
            this.offset = 0;
            this._target = null;
            this._initFollow = false;
            this.zoom = 1;

            this.vel = new PQ.Point(0,0);

            this._blockAxis = {x: false, y: false};
            //this._myPos = {x:0, y:0};
            this._targetDiff = new PQ.Point(0, 0);
            this._myCenter = new PQ.Point(0, 0);

            return this;
        },

        //TODO: Añadir offset en pantalla, etc...

        unFollow: function(){
            this.setFollow(false);
            return this;
        },

        setFollow: function(target){
            if(!target){
                this._target = null;
                return;
            }

            //TODO: Al hacer follow la camara ha de dirigirse para centrar el objeto

            this._target = target;
            this._initFollow = true;
            return this;
        },

        setZoom: function(value){
            this.zoom = value;
            this.setScale(value, value);
            return this;
        },

        zoomIn: function(value){
            this.setZoom(this.zoom+value);
            return this;
        },

        zoomOut: function(value){
            this.setZoom(this.zoom-value);
            return this;
        },

        goTo: function(x, y){
            //TODO: Methodo para enviar la camara a una posición espcifica, o a un objeto
        },

        setBlockAxis: function(x, y){
            this._blockAxis = {
                x: !!x,
                y: !!y
            };

            return this;
        },

        _follow: function(){
            if(this._initFollow){
                this._targetDiff.set(this._target.worldTransform.tx, this._target.worldTransform.ty);
                this._initFollow = false;
                //this._myPos = new PIXI.Point(this.worldTransform.tx, this.worldTransform.ty);
            }

            //TODO: Revisar, a veces provoca vibraciones, posiblemente se pueda mejorar usando algo similar al getLocation de los mouseEvents
            var diffX = this._target.worldTransform.tx - this._targetDiff.x;
            var diffY = this._target.worldTransform.ty - this._targetDiff.y;

            //console.log(diffX, this.x);

            if(!this._blockAxis.x && this.worldTransform.tx !== -diffX){
                this.x -= diffX;
            }

            if(!this._blockAxis.y && this.worldTransform.ty !== -diffY){
                this.y -= diffY;
            }

        },

        _update: function(gameTime, frameElapsedTime){
            if(this.update(gameTime, frameElapsedTime) === false){
                return;
            }

            if(this._target){
                this._follow();
            }else if(this.vel.x !== 0 || this.vel.y !== 0){
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
        }

    });

})();