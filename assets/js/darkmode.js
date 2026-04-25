document.addEventListener('DOMContentLoaded', () => {
    const toggleText = document.getElementById('themeToggleText');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--bg-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#000');
        toggleText.textContent = 'DARK';
    } else {
        body.classList.add('dark-mode');
        document.documentElement.style.setProperty('--bg-color', '#000');
        document.documentElement.style.setProperty('--text-color', '#fff');
        toggleText.textContent = 'LIGHT';
    }
    toggleText.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            document.documentElement.style.setProperty('--bg-color', '#000');
            document.documentElement.style.setProperty('--text-color', '#fff');
            toggleText.textContent = 'LIGHT';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
            toggleText.textContent = 'DARK';
            localStorage.setItem('theme', 'light');
        }
    });
});