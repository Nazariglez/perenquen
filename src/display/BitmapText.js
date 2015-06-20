var PixiBitmapText = require('../../lib/pixi/src/extras/BitmapText'),
    Container = require('./Container'),
    Sprite = require('./Sprite'),
    utils = require('../core/utils'),
    math = require('../../lib/pixi/src/core/math'),
    CONST = require('../core/const');

function BitmapText(text, style){
    this._init(text, style);
}

BitmapText.prototype = Object.create(PixiBitmapText.prototype);
BitmapText.prototype.constructor = BitmapText;

BitmapText.prototype.containerUpdateTransform = Container.prototype.updateTransform;
BitmapText.prototype.displayObjectUpdateTransform = Container.prototype.displayObjectUpdateTransform;

BitmapText.prototype._init = function(text, style){
    text = text || ' ';
    this.wordWrap = style.wordWrap || false;
    this.wordWrapWidth = style.wordWrapWidth || 100;

    this.anchor = new math.Point(0.5, 0.5);
    this.pivot = new math.Point(0.5,0.5);
    this.speed = new math.Point();

    PixiBitmapText.call(this, text, style);
};

BitmapText.prototype.setStyle = function(style){
    if(style.font)this.font = style.font;
    if(style.align)this.align = style.align;
    if(style.tint)this.tint = style.tint;
    this.wordWrap = style.wordWrap || false;
    this.wordWrapWidth = style.wordWrapWidth || 100;

    this.dirty = true;
    return this;
};

BitmapText.prototype.setText = function(text, keys){
    if(keys)text = utils.parseTextKeys(text, keys);
    this.text = text;
    return this;
};

BitmapText.prototype.setWordWrap = function(value){
    if(value === false){
        this.wordWrap = value;
    }else{
        this.wordWrap = true;
        this.wordWrapWidth = value;
    }

    this.dirty = true;
    return this;
};

BitmapText.prototype.updateText = function (){
    var data = BitmapText.fonts[this._font.name];
    var pos = new math.Point();
    var prevCharCode = null;
    var chars = [];
    var lastLineWidth = 0;
    var maxLineWidth = 0;
    var lineWidths = [];
    var line = 0;
    var scale = this._font.size / data.size;
    var lastSpace = -1;

    var outputText = this.wordWrap ? wordWrap(this.text, this.wordWrapWidth, this._font) : this.text;

    for (var i = 0; i < outputText.length; i++)
    {
        var charCode = outputText.charCodeAt(i);
        lastSpace = /(\s)/.test(outputText.charAt(i)) ? i : lastSpace;

        if (/(?:\r\n|\r|\n)/.test(outputText.charAt(i)))
        {
            lineWidths.push(lastLineWidth);
            maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
            line++;

            pos.x = 0;
            pos.y += data.lineHeight;
            prevCharCode = null;
            continue;
        }

        if (lastSpace !== -1 && this.maxWidth > 0 && pos.x * scale > this.maxWidth)
        {
            chars.splice(lastSpace, i - lastSpace);
            i = lastSpace;
            lastSpace = -1;

            lineWidths.push(lastLineWidth);
            maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
            line++;

            pos.x = 0;
            pos.y += data.lineHeight;
            prevCharCode = null;
            continue;
        }

        var charData = data.chars[charCode];

        if (!charData)
        {
            continue;
        }

        if (prevCharCode && charData.kerning[prevCharCode])
        {
            pos.x += charData.kerning[prevCharCode];
        }

        chars.push({texture:charData.texture, line: line, charCode: charCode, position: new math.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)});
        lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
        pos.x += charData.xAdvance;

        prevCharCode = charCode;
    }

    lineWidths.push(lastLineWidth);
    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);

    var lineAlignOffsets = [];

    for (i = 0; i <= line; i++)
    {
        var alignOffset = 0;

        if (this._font.align === 'right')
        {
            alignOffset = maxLineWidth - lineWidths[i];
        }
        else if (this._font.align === 'center')
        {
            alignOffset = (maxLineWidth - lineWidths[i]) / 2;
        }

        lineAlignOffsets.push(alignOffset);
    }

    var lenChars = chars.length;
    var tint = this.tint;

    for (i = 0; i < lenChars; i++)
    {
        var c = this._glyphs[i]; // get the next glyph sprite

        if (c)
        {
            c.texture = chars[i].texture;
        }
        else
        {
            c = new Sprite(chars[i].texture);
            this._glyphs.push(c);
        }

        c.anchor.x = 0;
        c.anchor.y = 0;
        c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
        c.position.y = chars[i].position.y * scale;
        c.scale.x = c.scale.y = scale;
        c.tint = tint;

        if (!c.parent)
        {
            this.addChild(c);
        }
    }

    // remove unnecessary children.
    for (i = lenChars; i < this._glyphs.length; ++i)
    {
        this.removeChild(this._glyphs[i]);
    }

    this.textWidth = maxLineWidth * scale;
    this.textHeight = (pos.y + data.lineHeight) * scale;
};

Object.defineProperties(BitmapText.prototype, {
    font: {
        get: function ()
        {
            return this._font;
        },
        set: function (value)
        {
            if (typeof value === 'string') {
                value = value.split(' ');

                this._font.name = value.length === 1 ? value[0] : value.slice(1).join(' ');
                this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText.fonts[this._font.name].size;
            }
            else {
                this._font.name = value.name;
                this._font.size = typeof value.size === 'number' ? value.size : parseInt(value.size, 10);
            }

            this.dirty = true;
        }
    }
});


BitmapText.fonts = {};
module.exports = BitmapText;

function wordWrap(text, width, font){
    var result = '';
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++)
    {
        var spaceLeft = width;
        var words = lines[i].split(' ');
        for (var j = 0; j < words.length; j++)
        {

            var wordData = getWordWidth(words[j], font);
            var wordWidth = wordData.wordWidth;
            var wordWidthWithSpace = wordWidth + wordData.spaceWidth;

            if(j === 0 || wordWidthWithSpace > spaceLeft)
            {
                // Skip printing the newline if it's the first word of the line that is
                // greater than the word wrap width.
                if(j > 0)
                {
                    result += '\n';
                }
                result += words[j];
                spaceLeft = width - wordWidth;
            }
            else
            {
                spaceLeft -= wordWidthWithSpace;
                result += ' ' + words[j];
            }
        }

        if (i < lines.length-1)
        {
            result += '\n';
        }
    }
    return result;
}

function getWordWidth(word, font){
    var data = BitmapText.fonts[font.name];
    var scale = font.size / data.size;
    var prevCharCode = null;
    var ww = 0;
    var charCode, charData;

    for(var i = 0; i < word.length; i++){
        charCode = word.charCodeAt(i);
        charData = data.chars[charCode];
        if(!charData) continue;

        if(prevCharCode && charData.kerning[prevCharCode])
        {
            ww += charData.kerning[prevCharCode];
        }

        ww += charData.xAdvance;

        prevCharCode = charCode;
    }

    var spaceWidth = 0;
    charData = data.chars[(' ').charCodeAt(0)];
    if(prevCharCode && charData.kerning[prevCharCode])
    {
        spaceWidth += charData.kerning[prevCharCode];
    }
    spaceWidth += charData.xAdvance;
    return {
        wordWidth : ww*scale,
        spaceWidth: spaceWidth*scale
    };
}