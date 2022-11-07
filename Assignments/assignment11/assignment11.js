//document.addEventListener('Load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json';

async function getQuote() {
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
   // .then(text => text.text{});
    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['quote']);
    displayQuote(json_response['quote']);
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

