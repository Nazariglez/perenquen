module.exports = function(){
    return function(resource, next){
        console.log(resource);

        next();
    };
};