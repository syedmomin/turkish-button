let button = document.querySelector('button');
if (!button) {
    console.log('Button not found!');
} else {
    console.log('Button found:', button);

    function distanceBetween(p1x, p1y, p2x, p2y) {
        let dx = p1x - p2x,
            dy = p1y - p2y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    let bx = button.offsetLeft + button.offsetWidth / 2,
        by = button.offsetTop + button.offsetHeight / 2,
        radius = Math.max(button.offsetWidth * 0.75, button.offsetHeight * 0.75, 100);

    console.log('Button center:', bx, by); // Log button center for debugging

    document.addEventListener('mousemove', (e) => {
        console.log('Mouse Position:', e.clientX, e.clientY); // Log mouse position

        let dist = distanceBetween(e.clientX, e.clientY, bx, by),
            angle = Math.atan2(e.clientY - by, e.clientX - bx),
            ox = -1 * Math.cos(angle) * Math.max(radius - dist, 0),
            oy = -1 * Math.sin(angle) * Math.max(radius - dist, 0),
            rx = oy / 2,
            ry = -ox / 2;

        button.style.transition = 'all 0.1s ease';
        button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        button.style.boxShadow = `0px ${Math.abs(oy)}px ${(Math.abs(oy) / radius) * 40}px rgba(0, 0, 0, 0.15)`;
    });
}
