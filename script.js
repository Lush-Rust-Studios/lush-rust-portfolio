document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX - 10 + 'px';
            cursorFollower.style.top = e.clientY - 10 + 'px';
        }, 50);
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.7)';
        cursorFollower.style.transform = 'scale(0.7)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
    
    // Glitch effect on hover
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'none';
            void element.offsetWidth; // Trigger reflow
            element.style.animation = 'glitch 500ms infinite';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'none';
        });
    });

    // Hover effect for navigation links
    const links = document.querySelectorAll('.navigation a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorFollower.style.transform = 'scale(1.5)';
            cursor.style.opacity = '0';
        });
        
        link.addEventListener('mouseleave', () => {
            cursorFollower.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });
    });
});
