

window.addEventListener('load', (event) => {
    console.log('Page has loaded');

    document.getElementById('search').addEventListener('click', () => {
    console.log('Button was clicked');
    let searchString = document.getElementById('searchbar').value;
    console.log('The user is searching for', searchString);

    fetch(`api.giphy.com/v1/gifs/search&q=${searchString}&maxresults=20&api_key=${apiKey}`)
    .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data);

        let videos = "";
        
        for(let item of data.items) {
            console.log(item.id.videoId);
            videos = videos + `${item.id.videoId}`
        }

        document.getElementById('results').innerhtml = videos;

    })

})

});