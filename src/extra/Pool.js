/**
 * Create a pool of objects to improve the performance and avoid the garbage collector
 * @class
 * @memberof PQ
 * @param objectConstructor {*}
 * @param args {array}
 * @param [num] {number}
 */
function Pool(objectConstructor, args, num){

    /**
     * All objects in this pool
     * @member {Array}
     */
    this.poolItems = [];

    /**
     * The 'constructor' for all objects in this pool
     * @member {*|Object}
     */
    this.objectConstructor = objectConstructor || Object;

    /**
     * Params to create the object
     * @member {array}
     */
    this.args = args || [];

    /**
     * Number of items to create
     * @member {number}
     */
    this.num = num;


    if(num)this.generateObjects(num);
    return this;
}

Pool.prototype.constructor = Pool;

/**
 * Get the pool length
 * @returns {Number}
 */
Pool.prototype.getLength = function(){
    return this.poolItems.length;
};

/**
 * Return an instance of the objects in the pool
 * @returns {*}
 */
Pool.prototype.getObject = function(){
    if(this.num && this.poolItems.length <= this.num*0.10){
        this.generateObjects(this.num);
    }else if(this.poolItems.length <= 0){
        return null;
    }

    var obj = this.poolItems.pop();
    if(obj.onPoolExit){
        obj.onPoolExit(this);
    }
    return obj;
};

/**
 * Put an instance in the pool list
 * @param obj {*}
 * @returns {Pool}
 */
Pool.prototype.putObject = function(obj){
    this.poolItems.unshift(obj);
    if(obj.onPoolEnter){
        obj.onPoolEnter(this);
    }
    return this;
};

/**
 * Generate and sotrage all the objects
 * @param num {number}
 * @returns {Pool}
 */
Pool.prototype.generateObjects = function(num){
    for(var i = 0; i < num; i++){
        this.poolItems.push(this.createNewObject());
    }
    return this;
};

/**
 * Create a new instances of the pool object with the arguments
 * @returns {*}
 */
Pool.prototype.createNewObject = function(){
    var scope = this;
    var obj;

    try {
        obj = new (Function.prototype.bind.apply(this.objectConstructor, ([null]).concat(this.args)))();
    }catch(e){
        obj = applyFix(this.objectConstructor, this.args);
    }

    obj.returnToPool = function(){
        scope.putObject(this);
        return this;
    };

    return obj;
};

module.exports = Pool;

function applyFix(obj, args){
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

    return (eval(ev)).apply(this, ([obj]).concat(args)); //jshint ignore:line
}