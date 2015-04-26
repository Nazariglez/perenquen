var ctorName = require('./const').DEFAULT_CONSTRUCTOR_NAME;

/**
 * Just a basic class, does nothing. It's useful just to inherits from it.
 * @class
 * @memberof PQ
 */
function Class(){
    return this;
}

Class.prototype = {};
Class.prototype.constructor = Class;


/**
 * Extends a parent class with an object as a parameter, and return a new child class
 * @static
 * @param childProto {object}
 * @returns {Class}
 */
Class.extend = function(childProto){
    var child = function PQClass(){
        if(typeof this[ctorName] === "function") return this[ctorName].apply(this, arguments);
        return this;
    };
    child._super = this.prototype;
    child.prototype = Object.create(this.prototype);

    var inheritanceFn = function (name, fn) {
        return function () {
            var tmp = this._super;
            this._super = child._super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
        };
    };

    for(var pr in  childProto){
        if (childProto.hasOwnProperty(pr)) {
            var property = Object.getOwnPropertyDescriptor(childProto, pr);

            if (typeof property.value === "function"){
                if(child._super[pr] && typeof child._super[pr] === "function") {
                    property.value = inheritanceFn(pr, property.value);
                }else if(pr === ctorName){
                    property.value = inheritanceFn("constructor", property.value);
                }
            }

            Object.defineProperty(child.prototype, pr, property);
        }
    }

    child.extend = Class.extend;
    child.inject = Class.inject;
    child.prototype.constructor = child;
    return child;
};

/**
 * Inject new features in a class
 * @param fn {function}
 */
Class.inject = function(fn){
    var baseClassProto = this.prototype,
        newProto = Object.create(this.prototype),
        baseClass = this.prototype.constructor;

    var proto = fn.call(this, baseClassProto),
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


    //TODO: Check Object.defineProperties
    for(var pr in proto){
        if (proto.hasOwnProperty(pr)) {
            var property = Object.getOwnPropertyDescriptor(proto, pr);

            if(typeof property.value === "function") {
                if(isSuper && baseClass._super[pr] && typeof baseClass._super[pr] === "function"){
                    property.value = inheritanceFn(pr, property.value);
                    if (pr === ctorName && baseClass._super.constructor) {
                        property.value = inheritanceFn("constructor", property.value);
                    }else{
                        property.value = inheritanceFn(pr, property.value);
                    }
                }

                if (pr === ctorName) {
                    ctor = property.value;
                    newProto.constructor = property.value;
                }
            }

            newProto[pr] = property.value;
        }
    }

    this.prototype = newProto;
};

/**
 * Convert a normal function class in a PQClass
 * @param cls {Class}
 * @returns {*}
 */
Class.parse = function(cls){
    if(typeof cls !== "function")return cls;

    var name = cls.name || "PQClass";

    var parsedClass = Function("return function " + name + "(){if(this['"+ctorName+"'])this['"+ctorName+"'].apply(this, arguments)};")();//jshint ignore:line
    for(var key in cls){
        if(cls.hasOwnProperty(key)){
            parsedClass[key] = cls[key];
        }
    }

    parsedClass.prototype = cls.prototype;
    parsedClass.prototype[ctorName] = cls.prototype.constructor;
    parsedClass.extend = Class.extend;
    parsedClass.inject = Class.inject;
    parsedClass.prototype.constructor = parsedClass;

    return parsedClass;
};

module.exports = Class;