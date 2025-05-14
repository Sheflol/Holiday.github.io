document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const regionInput = document.getElementById('region');
    const dateInput = document.getElementById('date');
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const region = regionInput.value;
        const date = dateInput.value;
        const adults = adultsInput.value;
        const children = childrenInput.value;

        let searchUrl = 'search-results.html?';
        searchUrl += region ? 'region=' + encodeURIComponent(region) + '&' : '';
        searchUrl += date ? 'date=' + encodeURIComponent(date) + '&' : ''; 
        searchUrl += adults ? 'adults=' + encodeURIComponent(adults) + '&' : '';
        searchUrl += children ? 'children=' + encodeURIComponent(children) : '';

        if (searchUrl.endsWith('&') || searchUrl.endsWith('?')) {
            searchUrl = searchUrl.slice(0, -1);
        }

        window.location.href = searchUrl;
    });
});