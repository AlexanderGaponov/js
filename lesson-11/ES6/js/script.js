class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createNewDiv(text) {
            let div = document.createElement('div');
            div.textContent = text;
            div.style.cssText = `height: ${this.height};
                           			 width: ${this.width};
                            		background: ${this.bg};
                           			 font-size: ${this.fontSize};
                            		text-align: ${this.textAlign};`

            document.body.appendChild(div)

        }
    }

    let obj = new Options('250px', '250px', 'blue', '25px', 'center');
		obj.createNewDiv('Максим, привет!')