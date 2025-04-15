document.addEventListener('DOMContentLoaded', function() {
    // Find existing theme toggle button
    let themeToggle = null;
    
    // Look for elements containing sun/moon emojis
    const navbarLinks = document.querySelectorAll('.navbar a, .navbar span');
    for (let i = 0; i < navbarLinks.length; i++) {
        if (navbarLinks[i].textContent.includes('☀️') || navbarLinks[i].textContent.includes('🌙')) {
            themeToggle = navbarLinks[i];
            break;
        }
    }
    
    // If no theme toggle button exists, create one
    if (!themeToggle) {
        const navbar = document.querySelector('.navbar');
        const contactBtn = document.querySelector('.contact-btn');
        
        // Create theme toggle button
        const toggleBtn = document.createElement('span');
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.fontSize = '1.5rem';
        toggleBtn.style.marginRight = '1rem';
        toggleBtn.style.display = 'flex';
        toggleBtn.style.alignItems = 'center';
        toggleBtn.style.justifyContent = 'center';
        
        // Set initial icon based on current theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        toggleBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
        
        // Insert before contact button
        if (contactBtn && contactBtn.parentNode) {
            contactBtn.parentNode.insertBefore(toggleBtn, contactBtn);
        } else if (navbar) {
            navbar.appendChild(toggleBtn);
        }
        
        // Add click event listener
        toggleBtn.addEventListener('click', toggleTheme);
    } else {
        // Add click event listener to existing toggle button
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Function to toggle between light and dark themes
    function toggleTheme(e) {
        e.preventDefault();
        
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update data-theme attribute
        html.setAttribute('data-theme', newTheme);
        
        // Toggle stylesheets
        const lightTheme = document.getElementById('light-theme');
        const darkTheme = document.getElementById('dark-theme');
        
        if (lightTheme && darkTheme) {
            if (newTheme === 'light') {
                lightTheme.removeAttribute('disabled');
                darkTheme.setAttribute('disabled', '');
            } else {
                darkTheme.removeAttribute('disabled');
                lightTheme.setAttribute('disabled', '');
            }
        }
        
        // Update toggle button icon
        let toggleBtn;
        if (e.target.tagName === 'SPAN' || e.target.tagName === 'A') {
            toggleBtn = e.target;
        } else {
            // Try to find parent span or a
            let parent = e.target.parentElement;
            while (parent && parent.tagName !== 'SPAN' && parent.tagName !== 'A') {
                parent = parent.parentElement;
            }
            toggleBtn = parent;
        }
        
        if (toggleBtn) {
            toggleBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        }
        
        // Save theme preference to localStorage
        localStorage.setItem('theme', newTheme);
    }
    
    // Initialize theme based on saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const lightTheme = document.getElementById('light-theme');
        const darkTheme = document.getElementById('dark-theme');
        
        if (lightTheme && darkTheme) {
            if (savedTheme === 'light') {
                lightTheme.removeAttribute('disabled');
                darkTheme.setAttribute('disabled', '');
            } else {
                darkTheme.removeAttribute('disabled');
                lightTheme.setAttribute('disabled', '');
            }
        }
    }
});
