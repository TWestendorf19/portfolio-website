let darkmode = localStorage.getItem('darkmode'); // Get the current dark mode state from localStorage

const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode'); // Add dark mode class to body
    localStorage.setItem('darkmode', 'active'); // Update dark mode state in localStorage
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive'); // Update dark mode state in localStorage
}

if (darkmode === "active") {
    enableDarkMode();
}

themeSwitch?.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode'); // Update the current dark mode state from localStorage
    if (darkmode !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});