(function(){

    /*
     * Safari and ios browsers dont support "apply" on native objects
     * This is a dirty but easy fix
     */
    var applyFix = function(obj, args){
        var ev = "Function('obj',";
        var fn = "\"return new obj(";

        for(var i = 0; i < args.length; i++){
            ev += "'a"+i+"',";
            fn += "a"+i;
            if(i !== args.length-1){
                fn += ",";
            }
        }

        fn += ")\"";
        ev += fn + ")";

        return (eval(ev)).apply(this, ([obj]).concat(args));
    };

    PQ.Pool = PQ.Class.extend({
        _init: function(objectConstructor, args, num){
            this._poolItems = [];
            this.objectConstructor = objectConstructor || Object;
            this.args = args || [];
            this.num = num;
            if(num)this.generateObjects(num);
            return this;
        },

        getLength: function(){
            return this._poolItems.length;
        },

        getObject: function(){
            if(this.num && this._poolItems.length <= this.num*0.10){
                this.generateObjects(this.num);
            }else if(this._poolItems.length <= 0){
                return;
            }

            var obj = this._poolItems.pop();
            if(obj.onPoolExit){
                obj.onPoolExit(this);
            }
            return obj;
        },

        putObject: function(obj){
            this._poolItems.unshift(obj);
            if(obj.onPoolEnter){
                obj.onPoolEnter(this);
            }
            return this;
        },

        generateObjects: function(num){
            for(var i = 0; i < num; i++){
                this._poolItems.push(this.createNewObject());
            }
            return this;
        },

        createNewObject: function(){
            var scope = this;
            var obj;

            try {
                obj = new (Function.prototype.bind.apply(this.objectConstructor, ([null]).concat(this.args)))();
            }catch(e){

                /*
                function PoolObject(args){
                    scope.objectConstructor.apply(this, args);
                }
                PoolObject.prototype = Object.create(this.objectConstructor.prototype);
                PoolObject.constructor = this.objectConstructor;
                obj = new PoolObject(this.args);
                */

                obj = applyFix(this.objectConstructor, this.args);
            }

            obj.returnToPool = function(){
                scope.putObject(this);
                return this;
            };

            return obj;
        }
    });

})();