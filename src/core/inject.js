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

    for(var pr in proto){
        if (proto.hasOwnProperty(pr)) {
            if(typeof proto[pr] === "function" && pr === ctorName){
                ctor = proto[pr];
                newProto.constructor = proto[pr];
            }

            newProto[pr] = proto[pr];
        }
    }

    if(ctor){
        baseClass = function PQClass(){
            ctor.apply(this, arguments);
        };
    }

    baseClass.prototype = newProto;

    namesSpace[names[names.length -1]] = baseClass;
}

module.exports = inject;