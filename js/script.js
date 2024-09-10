function expandSearch() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('expand'); // Toggle the expand class
    document.getElementById('searchInput').focus(); // Focus the input when expanded
}