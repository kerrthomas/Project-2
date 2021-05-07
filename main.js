

window.addEventListener('load', (event) => {
    console.log('Page has loaded');

    document.getElementById('search').addEventListener('click', () => {
    console.log('Button was clicked');
    let searchString = document.getElementById('searchbar').value;
    console.log('The user is searching for', searchString);

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchString}&limit=20&offset=0&rating=g&lang=en`)
    .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data);

        let myHtml = "";
        
        for(let item of data.items){
            console.log(item.id.videoId);
            myHtml = myHtml + `<iframe src="https://giphy.com/embed/${item.id.videoId}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/${searchString}-${item.id.videoId}">via GIPHY</a></p>`;
        }

        document.getElementById('results').innerhtml = myHtml;

    })

})

});