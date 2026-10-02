const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function updateThemeState() {
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
        document.documentElement.removeAttribute('data-theme');
    }
}

// Check saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Update button text on load
if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
} else {
    toggleButton.textContent = 'Dark Mode';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateThemeState();
});