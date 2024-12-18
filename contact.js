document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const inputs = document.querySelectorAll('input, textarea');

    // Add glitch effect to form inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.textShadow = '0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75)';
        });

        input.addEventListener('blur', () => {
            input.style.textShadow = 'none';
        });
    });

    // Form submission with glitch effect
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        
        // Glitch animation
        submitBtn.style.animation = 'glitch 0.3s infinite';
        btnText.textContent = 'TRANSMITTING...';
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Reset button
        submitBtn.style.animation = 'none';
        btnText.textContent = 'TRANSMITTED';
        submitBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        
        // Reset form
        setTimeout(() => {
            form.reset();
            btnText.textContent = 'TRANSMIT';
            submitBtn.style.backgroundColor = 'transparent';
        }, 2000);
    });

    // Random glitch effect on form elements
    setInterval(() => {
        const randomInput = inputs[Math.floor(Math.random() * inputs.length)];
        const originalShadow = randomInput.style.textShadow;
        
        randomInput.style.textShadow = '0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75)';
        
        setTimeout(() => {
            randomInput.style.textShadow = originalShadow;
        }, 100);
    }, 5000);
});
