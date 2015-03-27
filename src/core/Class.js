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
    child.prototype.constructor = child;
    return child;
};

module.exports = Class;