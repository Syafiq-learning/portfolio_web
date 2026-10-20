// Minimal page behavior for the portfolio:
// - open/close the mobile navigation menu
// - keep the page lightweight with no extra animation overhead

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.querySelector('.theme-toggle');

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        document.documentElement.dataset.theme = 'dark';
    }

    if (themeToggle) {
        const updateThemeToggle = () => {
            const isDark = document.documentElement.dataset.theme === 'dark';
            themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
            themeToggle.setAttribute('aria-pressed', String(isDark));
        };

        updateThemeToggle();
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.dataset.theme !== 'dark';
            if (isDark) {
                document.documentElement.dataset.theme = 'dark';
            } else {
                delete document.documentElement.dataset.theme;
            }
            localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
            updateThemeToggle();
        });
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});
