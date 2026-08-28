const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
}

// Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
