var map = L.map('map').setView([-22.81743, -47.06189], 15);
var marker = L.marker([-22.81743, -47.06189]).addTo(map);
var circle = L.circle([-22.81743, -47.06189], {
    color: '#85597a',
    fillColor: '#85597a',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.addEventListener('DOMContentLoaded', function() {
    // Add a slight delay to ensure the navbar is loaded
    setTimeout(function() {
        window.addEventListener('scroll', function() {
            const mapContainer = document.querySelector('.caixamapa');
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
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
                mapContainer.style.top = '0%';
            } else {
                // When near the footer, stop the map from moving further down
                mapContainer.style.top = `${footerOffset - windowHeight}px`;
            }
        });
    }, 100); // Adjust the timeout duration as necessary
});


