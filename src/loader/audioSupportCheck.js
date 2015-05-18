var Device = require('../core/Device');
module.exports = function(){
    return function(resource, next){
        var game = this.game;

        if (!Device.hasAudio || !game) {
            return next();
        }

        var ext = resource.url.split('?').shift().split('.').pop().toLowerCase();

        if(ext !== "audio")return next();

        var allowed = allowed = game.config.audio.allowedExtensions,
            canPlay = [];
        for(var i = 0; i < allowed.length; allowed++){
            var can = false;
            switch(allowed[i]){
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

            if(can){
                canPlay.push(allowed[i]);
            }
        }

        if(canPlay.length === 0){
            resource.url = ""; //cancel
            return next();
        }

        resource.url = resource.url.substr(0, resource.url.length - 5) + canPlay[0];

        next();
    };
};