document.addEventListener('DOMContentLoaded', () => {
    const toggleText = document.getElementById('fontToggleText');
    const body = document.body;

    const savedFont = localStorage.getItem('font');

    if (savedFont === 'mono') {
        body.classList.add('mono-font');
        toggleText.textContent = 'SERIF';
        toggleText.classList.remove('serif-text');
        toggleText.classList.add('mono-text');
    } else {
        body.classList.remove('mono-font');
        toggleText.textContent = 'MONO';
        toggleText.classList.remove('mono-text');
        toggleText.classList.add('serif-text');
    }

    toggleText.addEventListener('click', () => {
        body.classList.toggle('mono-font');

        if (body.classList.contains('mono-font')) {
            toggleText.textContent = 'SERIF';
            toggleText.classList.remove('serif-text');
            toggleText.classList.add('mono-text');
            localStorage.setItem('font', 'mono');
        } else {
            toggleText.textContent = 'MONO';
            toggleText.classList.remove('mono-text');
            toggleText.classList.add('serif-text');
            localStorage.setItem('font', 'serif');
        }
    });
});
