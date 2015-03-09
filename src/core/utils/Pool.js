function Pool(objectConstructor, args, num){
    this.poolItems = [];
    this.objectConstructor = objectConstructor || Object;
    this.args = args || [];
    this.num = num;
    if(num)this.generateObjects(num);
    return this;
}

Pool.prototype.constructor = Pool;

Pool.prototype.getLength = function(){
    return this.poolItems.length;
};

Pool.prototype.getObject = function(){
    if(this.num && this.poolItems.length <= this.num*0.10){
        this.generateObjects(this.num);
    }else if(this.poolItems.length <= 0){
        return;
    }

    var obj = this.poolItems.pop();
    if(obj.onPoolExit){
        obj.onPoolExit(this);
    }
    return obj;
};

Pool.prototype.putObject = function(obj){
    this.poolItems.unshift(obj);
    if(obj.onPoolEnter){
        obj.onPoolEnter(this);
    }
    return this;
};

Pool.prototype.generateObjects = function(num){
    for(var i = 0; i < num; i++){
        this.poolItems.push(this.createNewObject());
    }
    return this;
};

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

    return (eval(ev)).apply(this, ([obj]).concat(args));
}