document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work-item');
    
    // Distortion effect on hover
    workItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            item.style.setProperty('--mouse-x', x);
            item.style.setProperty('--mouse-y', y);
            
            const title = item.querySelector('.work-title');
            const overlay = item.querySelector('.work-overlay');
            
            title.style.transform = `translate(
                ${(x - 0.5) * 20}px,
                ${(y - 0.5) * 20}px
            )`;
            
            overlay.style.background = `
                radial-gradient(
                    circle at ${x * 100}% ${y * 100}%,
                    rgba(0,0,0,0.2) 0%,
                    rgba(0,0,0,0.6) 100%
                )
            `;
        });
        
        item.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            const title = item.querySelector('.work-title');
            title.style.transform = `translate(
                ${(x - 0.5) * 20}px,
                ${(y - 0.5) * 20}px
            )`;
        });
        
        item.addEventListener('mouseleave', () => {
            const title = item.querySelector('.work-title');
            const overlay = item.querySelector('.work-overlay');
            
            title.style.transform = 'translate(0, 0)';
            overlay.style.background = 'rgba(0,0,0,0.4)';
        });
    });

    // Glitch effect for coming soon items
    const comingSoonItems = document.querySelectorAll('.coming-soon');
    
    comingSoonItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.animation = 'glitch 0.3s infinite';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.animation = 'none';
        });
    });

    // Random glitch effect
    setInterval(() => {
        const randomItem = workItems[Math.floor(Math.random() * workItems.length)];
        randomItem.style.transform = 'scale(1.02)';
        setTimeout(() => {
            randomItem.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
});
