function expandSearch() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('expand'); // Toggle the expand class
    document.getElementById('searchInput').focus(); // Focus the input when expanded
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* Search for elements with a certain attribute: */
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      fetch(file)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          elmnt.innerHTML = data;
          elmnt.removeAttribute("w3-include-html");
          includeHTML(); // call recursively
        })
        .catch((error) => {
          console.error("Failed to fetch", file, error);
          elmnt.innerHTML = "Page not found.";
        });
      return;
    }
  }
}

/* Call includeHTML when the page loads */
window.onload = includeHTML;

