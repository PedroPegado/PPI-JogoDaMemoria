const countries = ["br", "ar", "cl", "gt", "cu", "ht", "mx", "ca", "eg", "za", "ng", "ke", "ma", "gh", "et", "ao", "de", "fr", "it", "es", "lv", "gr", "is", "se", "jp", "cn", "in", "kr", "kp", "th", "my", "bt"]

let check = []

function shuffle(countries) {
    for (let i = countries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [countries[i], countries[j]] = [countries[j], countries[i]];
    }
}

function createBoard() {
    const gameBoard = document.getElementById('gameBoard')
    gameBoard.innerHTML = ''

    let selectedCountries = countries.slice(0, 32)
    let items = [...selectedCountries, ...selectedCountries]
    shuffle(items)

    items.forEach((countryCode, index) => {
        const card = document.createElement('button')
        card.className = 'card flipped'
        card.id = `Card-${index+1}`
        card.setAttribute('onclick', 'flipCard()')

        const frontDiv = document.createElement('div')
        frontDiv.className = 'front'


        const imgContainer = document.createElement('div')
        imgContainer.className = 'img-container'


        const imageCard = document.createElement('div')
        imageCard.className = 'image-card'


        const img = document.createElement('img')
        img.src = `paises/${countryCode}.svg`
        img.className = 'image-card-inside'
        img.id = `ImageCard-${index+1}`

        imageCard.appendChild(img)
        imgContainer.appendChild(imageCard)
        card.appendChild(frontDiv)
        card.appendChild(imgContainer)
        gameBoard.appendChild(card)

        card.addEventListener('click', () => {
            flipCard(card)
        })
    })
}

function flipCard(cardElement) {
    cardElement.classList.toggle('flipped')
    
    const img = cardElement.querySelector('.image-card-inside')

    if (img) {
        check.push(img.src)
        check.push(cardElement.id)
        console.log(check)
    }

    if (check.length == 4) {
        checkForMatch()
    }
}

function checkForMatch(){
    if (check[0] == check[2]) {
        console.log('são iguais')
        check = []
    }
    else {
        console.log('diferentes')
        unflipCards();
        check = []
    }
}

function unflipCards(){
    card_1 = document.getElementById(check[1])
    card_2 = document.getElementById(check[3])

    setTimeout(() => {
        card_1.classList.toggle('flipped');
        card_2.classList.toggle('flipped');
    }, 500);
}

function resetCards(){
    createBoard()
}

document.addEventListener('DOMContentLoaded', createBoard);