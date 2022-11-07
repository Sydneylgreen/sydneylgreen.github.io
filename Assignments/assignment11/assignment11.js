//document.addEventListener('Load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

async function getQuote() {
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
   // .then(text => text.text{});
    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['quoteText']);
    displayQuote(json_response['quoteText']);
}


function displayQuote(x) {
   // const quoteBox = document.querySelector('#js-quote-text');
   // const textMessage = document.createTextMode(x);

   // quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}
getQuote();

function Geeks() {
    alert('Why do we tell actors to break a leg? Because every show has a cast!');
}

