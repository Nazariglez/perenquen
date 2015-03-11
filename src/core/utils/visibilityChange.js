/**
 * Watch when the browser lost the focus and notify the game object
 * @param game {Game}
 */
module.exports = function(game){
    document.addEventListener(getVisibilityChange(), function() {
        var hidden = document.hidden || document.webkitHidden || document.mozHidden || document.msHidden;
        game.visibilityChange(!!hidden);
    }, false);
};

function getVisibilityChange(){
    if(typeof document.hidden !== 'undefined'){
        return 'visibilitychange';
    }else if(typeof document.webkitHidden !== 'undefined'){
        return 'webkitvisibilitychange';
    }else if(typeof document.mozHidden !== 'undefined'){
        return 'mozvisibilitychange';
    }else if(typeof document.msHidden !== 'undefined'){
        return 'msvisibilitychange';
    }
}
