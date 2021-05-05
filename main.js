const apiKey = "api.giphy.com/v1/gifs/search";

window.addEventListener('load', (event) => {
    console.log('Page has loaded');

document.getElementById('search').addEventListener('click', () => {
    console.log('Button was clicked');
    let searchString = document.getElementById('searchbar').value;
    console.log('The user is searching for', searchString);
})

});