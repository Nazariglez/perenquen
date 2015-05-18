var allowedExt = ['m4a','ogg','mp3','wav'];

module.exports = function() {
    return function (resource, next) {

        if (!resource.data) {
            return next();
        }

        var ext = resource.url.split('?').shift().split('.').pop().toLowerCase();

        if(allowedExt.indexOf(ext) === -1){
            return next();
        }


        next();
    };

};