document.addEventListener('DOMContentLoaded', () => {
    // Text scramble effect
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += char;
                } else {
                    output += from;
                }
            }
            
            this.el.innerText = output;
            
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // Apply scramble effect to manifesto text
    document.querySelectorAll('.glitch-text').forEach(el => {
        const fx = new TextScramble(el);
        let counter = 0;
        
        const next = () => {
            fx.setText(el.getAttribute('data-text') || el.innerText);
            counter = (counter + 1) % 1;
        };
        
        next();
        el.addEventListener('mouseenter', next);
    });

    // Parallax effect for philosophy items
    document.addEventListener('mousemove', (e) => {
        const items = document.querySelectorAll('.philosophy-item');
        const { clientX, clientY } = e;
        
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const x = (clientX - rect.left) / rect.width;
            const y = (clientY - rect.top) / rect.height;
            
            item.style.transform = `
                perspective(1000px)
                rotateY(${x * 5}deg)
                rotateX(${y * -5}deg)
                translateZ(10px)
            `;
        });
    });
});
