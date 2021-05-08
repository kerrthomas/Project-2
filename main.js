

window.addEventListener('load', (event) => {
    console.log('Page has loaded');
    document.getElementById('searchbar').value = null;

    document.getElementById('search').addEventListener('click', () => {
    console.log('Button was clicked');
    let searchString = document.getElementById('searchbar').value;
    console.log('The user is searching for', searchString);

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchString}&limit=20&offset=0&rating=g&lang=en`)
    .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data);
        console.log('the resulting gifs are', data.data);
        console.log('the first result is', data.data[0]);

        myHtml = "";
        
        for(let resultItem of data.data){
            let imageUrl = resultItem.images.original.url
            console.log(imageUrl);
            myHtml = myHtml + `<img src=${imageUrl} />`;
            document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + `<img src=${imageUrl} />`;
            
        }

        document.getElementById('results').innerhtml = myHtml;

    })

})

});