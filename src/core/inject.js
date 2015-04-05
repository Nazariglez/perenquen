var ctorName = require('./const').DEFAULT_CONSTRUCTOR_NAME;

function inject(className, fn){
    var namesSpace = this;
    var names = className.split(".");
    for(var i = 0; i < names.length-1; i++){
        namesSpace = namesSpace[names[i]];
    }

    var baseClass = namesSpace[names[names.length -1]],
        baseClassProto = baseClass.prototype,
        newProto = Object.create(baseClass.prototype);

    var proto = fn.call(this,baseClassProto),
        ctor = null;

    var isSuper = !!baseClass._super;
    var inheritanceFn = function (name, fn) {
        return function () {
            var tmp = this._super;
            this._super = baseClass._super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
        };
    };

    for(var pr in proto){
        if (proto.hasOwnProperty(pr)) {
            if(typeof proto[pr] === "function") {
                if(isSuper && baseClass._super[pr] && typeof baseClass._super[pr] === "function"){
                    proto[pr] = inheritanceFn(pr, proto[pr]);
                    if (pr === ctorName && baseClass._super.constructor) {
                        proto[pr] = inheritanceFn("constructor", proto[pr]);
                    }else{
                        proto[pr] = inheritanceFn(pr, proto[pr]);
                    }
                }

                if (pr === ctorName) {
                    ctor = proto[pr];
                    newProto.constructor = proto[pr];
                }
            }

            newProto[pr] = proto[pr];
        }
    }

    if(ctor){
        if(isSuper){
            var sup = Object.create(baseClass._super);
            baseClass = function PQClass(){
                ctor.apply(this, arguments);
            };
            baseClass._super = sup;
        }else{
            baseClass = function PQClass(){
                ctor.apply(this, arguments);
            };
        }
    }

    baseClass.prototype = newProto;

    namesSpace[names[names.length -1]] = baseClass;
}

module.exports = inject;