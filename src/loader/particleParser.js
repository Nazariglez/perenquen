module.exports = function() {
    return function (resource, next) {

        if (!resource.data || !resource.data.particle) {
            return next();
        }

        console.log('Es una particula');

        next();
    }

};