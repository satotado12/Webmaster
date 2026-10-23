const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
}


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}


updateButtonText();

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    
    
    updateButtonText();
});

const navLinks = document.querySelectorAll('.side-bar-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});