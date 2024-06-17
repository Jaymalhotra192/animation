// script.js
const discoveryScrolls = document.querySelectorAll('.discovery-scroll');

discoveryScrolls.forEach(discoveryScroll => {
    let isDown = false;
    let startY;
    let startScrollTop;

    discoveryScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        discoveryScroll.classList.add('active');
        startY = e.pageY - discoveryScroll.
            offsetTop;
        startScrollTop = discoveryScroll.scrollTop;
    });

    discoveryScroll.addEventListener('mouseleave', () => {
        isDown = false;
        discoveryScroll.classList.remove('active');
    });

    discoveryScroll.addEventListener('mouseup', () => {
        isDown = false;
        discoveryScroll.classList.remove('active');
    });

    discoveryScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - discoveryScroll.offsetTop;
        const walk = (y - startY) * 3; // Adjust scroll speed here
        discoveryScroll.scrollTo({
            top: startScrollTop - walk,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    });
});
