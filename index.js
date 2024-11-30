// Dynamically display the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll to top functionality
window.addEventListener('scroll', () => {
    const scrollTopButton = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
