var Device = require('../core/Device'),
    utils = require('../core/utils');

module.exports = function() {
    return function (resource, next) {
        var game = this.game;

        if (!Device.hasAudio || !game || !resource.data) {
            return next();
        }

        var allowed = game.config.audio.allowedExtensions;

        var ext = resource.url.split('?').shift().split('.').pop().toLowerCase();

        if(allowed.indexOf(ext) === -1){
            return next();
        }

        var canPlay = false;
        switch(ext){
            case "m4a":
                canPlay = Device.hasM4a;
                break;
            case "mp3":
                canPlay = Device.hasMp3;
                break;
            case "ogg":
                canPlay = Device.hasOgg;
                break;
            case "wav":
                canPlay = Device.hasWav;
                break;
        }

        if(!canPlay){
            return next();
        }

        game.audioManager._decodeAudio(resource.name, resource.url, resource.data, function(){
            next();
        });
        
    };

};