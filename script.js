const countries = ["br", "ar", "cl", "gt", "cu", "ht", "mx", "ca", "eg", "za", "ng", "ke", "ma", "gh", "et", "ao", "de", "fr", "it", "es", "lv", "gr", "is", "se", "jp", "cn", "in", "kr", "kp", "th", "my", "bt"]

function shuffle(countries) {
    for (let i = countries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [countries[i], countries[j]] = [countries[j], countries[i]];
    }
}

function createBoard() {
    const cards = document.querySelectorAll('.game-board .card .img-container .image-card')
    const card_container = document.getElementById('Card')
    let selectedCountries = countries.slice(0, cards.length / 2);
    let items = [...selectedCountries, ...selectedCountries];
    shuffle(items)

    cards.forEach((card, index) => {
        card_container.classList.add('flipped')
        const countryCode = items[index];
        const img = document.createElement('img')
        img.src = `paises/${countryCode}.svg`
        img.className = 'image-card-inside'
        img.id = `ImageCard-${index+1}`
        card.appendChild(img)
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
    const cards_image = document.querySelectorAll('.game-board .card .img-container .image-card .image-card-inside')

    cards_image.forEach((image, index) => {
        img = document.getElementById(`ImageCard-${index+1}`)
        img.remove();
    })

    createBoard()
}

createBoard()
shuffle()