const countries = ['br', 'ar', 'cl', 'cu', 'gt', 'ht', 'mx', 'ca']

function shuffle(countries) {
    for (let i = countries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [countries[i], countries[j]] = [countries[j], countries[i]];
    }
}

function createBoard() {
    const divs = document.querySelectorAll('.game-board .card .img-container .image-card')
    let items = [...countries, ...countries]
    shuffle(items)

    divs.forEach((div, index) => {
        const countryCode = items[index];
        const img = document.createElement('img');
        img.src = `paises/${countryCode}.svg`;
        img.alt = countryCode;
        div.innerHTML = '';
        div.appendChild(img);
    });
}

function flipCard(){
    const card = document.getElementById('Card')
    card.classList.remove('flipped')
}

function checkForMatch(){
    
}

function unflipCards(){
    
}

function resetCards(){
    
}

