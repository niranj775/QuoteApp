const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl ='https://api.gameofthronesquotes.xyz/v1/random';

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.sentence;
    author.innerHTML = data.character.name;
}

getQuote(apiUrl);

function tweet(){
    let xUrl =`https://twitter.com/intent/tweet?text=${quote.innerHTML}`+ ' --- by ' + author.innerHTML+'.';
    window.open(xUrl, 'Tweet Window', 'width=600, height=300');
}