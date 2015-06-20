var CONST = require('../core/const'),
    utils = require('../core/utils'),
    Easing = require('../tween/Easing');

module.exports = function() {
    return function (resource, next) {

        if (!resource.data || !resource.data.particleConfig) {
            return next();
        }

        var emitters = resource.data.particleConfig.emitters;
        var len = emitters.length;
        for(var i = 0; i < len; i++){
            parseEmitter(emitters[i]);
        }

        utils.assetCache.addParticle(resource.name, resource.url, resource.data.particleConfig);

        next();
    };

};

function parseEmitter(emitter){

    //Blend Mode
    if(emitter.blend && typeof emitter.blend === "string"){
        var blendName = emitter.blend.toUpperCase();
        emitter.blend = CONST.BLEND_MODES[blendName];
    }

    var checkEasing = ["size", "alpha", "color", "speed", "rotation", "direction"];

    checkEasing.forEach(function(property){
        if(emitter[property].easing && typeof emitter[property].easing === "string"){
            emitter[property].easing = parseEasing(emitter[property].easing);
        }
    });

    if(typeof emitter.color.start === "string"){
        emitter.color.start = parseInt(emitter.color.start);
    }

    if(typeof emitter.color.end === "string"){
        emitter.color.end = parseInt(emitter.color.end);
    }

}

function parseEasing(easing){
    var regex = /\((\d*?,?)*?\)/g;
    var match = easing.match(regex);

    if(easing) {
        if (match && match.length >= 0) {
            var name = easing.replace(match[0], "");
            var args = (match[0].substr(1, match[0].length - 2)).split(",");
            var applyArgs = [];
            args.forEach(function (string) {
                if (string) {
                    applyArgs.push(parseInt(string));
                }
            });

            return Easing[name].apply(Easing, applyArgs);
        } else {
            return Easing[easing]();
        }
    }

    return Easing.linear();
}