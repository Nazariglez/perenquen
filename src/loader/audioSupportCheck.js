var Device = require('../core/Device');

module.exports = function(){
    return function(resource, next){
        var game = this.game;

        if (!Device.hasAudio || !game) {
            return next();
        }

        var ext = resource.url.split('?').shift().split('.').pop().toLowerCase();

        var allowed = game.config.audio.allowedExtensions;
        if(allowed.indexOf(ext) !== -1 || ext === "audio") {

            //Get device allowed audiotypes
            var canPlay = [];
            for (var i = 0; i < allowed.length; i++) {
                var can = false;
                switch (allowed[i]) {
                    case "m4a":
                        can = Device.hasM4a;
                        break;
                    case "mp3":
                        can = Device.hasMp3;
                        break;
                    case "ogg":
                        can = Device.hasOgg;
                        break;
                    case "wav":
                        can = Device.hasWav;
                        break;
                }

                if (can) {
                    canPlay.push(allowed[i]);
                }
            }

            //Can not play sounds
            if(canPlay.length === 0){
                return next();
            }

            //It's "audio" ext?
            if (ext === "audio") {
                ext = canPlay[0];
                resource.url = resource.url.substr(0, resource.url.length - 5) + ext;

                return next();
            }

        }

        next();
    };
};