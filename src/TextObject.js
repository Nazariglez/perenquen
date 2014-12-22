(function(){

    //TODO: Adaptar el realWidth y realHeight
    //TODO: el fill se pasa como string, por hacerla como los demás, en plan 0xffffff
    PQ.Text = PIXI.Text.extend(PQ.DisplayCommon, {
        _init: function(text, style){
            text = text || ' ';
            PQ.Text._super._init.call(this, text, style);
            this.vel = new PQ.Point(0,0);
            this.anchor = new PQ.Point(0.5, 0.5);
            return this;
        },

        _getLocale: function(text){
            if(PQ._locale){
                console.log(PQ._locale);
                return PQ._locale.getLocale(text);
            }

            return text;
        },

        setWordWrap: function(value){
            if(value === false){
                this.style.wordWrap = value;
            }else{
                this.style.wordWrap = true;
                this.style.wordWrapWidth = value;
            }

            this.dirty = true;
            return this;
        },

        setFont: function(font){
            this.style.font = font;
            this.dirty = true;
            return this;
        },

        setFillColor: function(color){
            this.style.fill = color;
            this.dirty = true;
            return this;
        },

        setText: function(text, args){
            if(args)text = PQ.Utils.parseText(text, args);
            PQ.Text._super.setText.call(this, text);
            return this;
        },

        setStyle: function(style){
            PQ.Text._super.setStyle.call(this, style);
            return this;
        },

        setAlign: function(align){
            this.style.align = align || 'left';
            this.dirty = true;
        }
    });

    PQ.BitmapText = PIXI.BitmapText.extend(PQ.DisplayCommon, {
        _init: function(text, style){
            text = text || ' ';
            PQ.BitmapText._super._init.call(this, text, style);
            this.vel = new PQ.Point(0,0);
            this.anchor = new PQ.Point(0.5, 0.5);
            return this;
        },
        setTintColor: function(color){
            this.tint = color;
            this.dirty = true;
            return this;
        },

        setWordWrap: function(value){
            if(value === false){
                this.style.wordWrap = value;
            }else{
                this.style.wordWrap = true;
                this.style.wordWrapWidth = value;
            }

            this.dirty = true;
            return this;
        },

        setAlign: function(align){
            this.style.align = align || 'left';
            this.dirty = true;
            return this;
        },

        setFont: function(font){
            this.style.font = font;
            font = font.split(' ');
            this.fontName = font[font.length - 1];
            this.fontSize = font.length >= 2 ? parseInt(font[font.length - 2], 10) : PQ.BitmapText.fonts[this.fontName].size;

            this.dirty = true;
            return this;
        },

        setText: function(text, args){
            if(args)text = PQ.Utils.parseText(text, args);
            PQ.BitmapText._super.setText.call(this, text);
            return this;
        },

        setStyle: function(style){
            style = style || {};
            style.align = style.align || 'left';
            style.wordWrap = style.wordWrap || false;
            style.wordWrapWidth = style.wordWrapWidth || 100;
            this.style = style;

            if(style.font) {
                var font = style.font.split(' ');
                this.fontName = font[font.length - 1];
                this.fontSize = font.length >= 2 ? parseInt(font[font.length - 2], 10) : PIXI.BitmapText.fonts[this.fontName].size;
            }

            this.dirty = true;
            this.tint = style.tint;
            return this;
        },

        updateText: function(){
            if(!this.style.font)return;

            var outputText = this.text;

            if(this.style.wordWrap)outputText = this._wordWrap(outputText);

            var data = PIXI.BitmapText.fonts[this.fontName];
            var pos = new PIXI.Point();
            var prevCharCode = null;
            var chars = [];
            var maxLineWidth = 0;
            var lineWidths = [];
            var line = 0;
            var scale = this.fontSize / data.size;

            for(var i = 0; i < outputText.length; i++)
            {
                var charCode = outputText.charCodeAt(i);

                if(/(?:\r\n|\r|\n)/.test(outputText.charAt(i)))
                {
                    lineWidths.push(pos.x);
                    maxLineWidth = Math.max(maxLineWidth, pos.x);
                    line++;

                    pos.x = 0;
                    pos.y += data.lineHeight;
                    prevCharCode = null;
                    continue;
                }

                var charData = data.chars[charCode];

                if(!charData) continue;

                if(prevCharCode && charData.kerning[prevCharCode])
                {
                    pos.x += charData.kerning[prevCharCode];
                }

                chars.push({texture:charData.texture, line: line, charCode: charCode, position: new PIXI.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)});
                pos.x += charData.xAdvance;

                prevCharCode = charCode;
            }

            lineWidths.push(pos.x);
            maxLineWidth = Math.max(maxLineWidth, pos.x);

            var lineAlignOffsets = [];

            for(i = 0; i <= line; i++)
            {
                var alignOffset = 0;
                if(this.style.align === 'right')
                {
                    alignOffset = maxLineWidth - lineWidths[i];
                }
                else if(this.style.align === 'center')
                {
                    alignOffset = (maxLineWidth - lineWidths[i]) / 2;
                }
                lineAlignOffsets.push(alignOffset);
            }

            var lenChildren = this.children.length;
            var lenChars = chars.length;
            var tint = this.tint || 0xFFFFFF;

            for(i = 0; i < lenChars; i++)
            {
                var c = i < lenChildren ? this.children[i] : this._pool.pop(); // get old child if have. if not - take from pool.

                if (c) c.setTexture(chars[i].texture); // check if got one before.
                else c = new PIXI.Sprite(chars[i].texture); // if no create new one.

                c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
                c.position.y = chars[i].position.y * scale;
                c.scale.x = c.scale.y = scale;
                c.tint = tint;
                if (!c.parent) this.addChild(c);
            }

            // remove unnecessary children.
            // and put their into the pool.
            while(this.children.length > lenChars)
            {
                var child = this.getChildAt(this.children.length - 1);
                this._pool.push(child);
                this.removeChild(child);
            }

            this.textWidth = maxLineWidth * scale;
            this.textHeight = (pos.y + data.lineHeight) * scale;

        },

        updateTransform: function(){
            if(this.dirty)
            {
                this.updateText();
                this.dirty = false;
            }

            PQ.Container.prototype.updateTransform.call(this);
        },

        _getWordWidth: function(word){
            var data = PIXI.BitmapText.fonts[this.fontName];
            var scale = this.fontSize / data.size;
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
        },

        _wordWrap: function(text){

            var result = '';
            var lines = text.split('\n');
            for (var i = 0; i < lines.length; i++)
            {
                var spaceLeft = this.style.wordWrapWidth;
                var words = lines[i].split(' ');
                for (var j = 0; j < words.length; j++)
                {

                    var wordData = this._getWordWidth(words[j]);
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
                        spaceLeft = this.style.wordWrapWidth - wordWidth;
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
    });

})();
