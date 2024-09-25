var map = L.map('map').setView([-22.81743, -47.06189], 15);
var marker = L.marker([-22.81743, -47.06189]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const mapContainer = document.querySelector('.caixamapa');
        const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
        const footer = document.querySelector('footer');
        const footerOffset = footer ? footer.offsetTop : 0;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Adjust map position based on scroll
        if (scrollY < navbarHeight) {
            // If near the top of the page, place the map below the navbar
            mapContainer.style.top = `${navbarHeight}px`;
        } else if (scrollY + windowHeight < footerOffset) {
            // When not near the footer, center the map
            mapContainer.style.top = '10%';
        } else {
            // When near the footer, stop the map from moving further down
            mapContainer.style.top = `${footerOffset - windowHeight}px`;
        }
    });
});

