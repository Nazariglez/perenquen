module.exports = function(text, args){
    for(var key in args){
        var regExp = new RegExp('{{'+key+'}}','g');
        text = text.replace(regExp, args[key]);
    }
    return text;
};