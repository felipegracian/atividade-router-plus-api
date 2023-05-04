'use strict'

import { getImages } from "./linksapi.js"

const jsonImages = await getImages()

const criarCardImages = (lookingFor) =>{

    const card = document.createElement('div')
    card.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.classList.add('img_car')
    imgCard.src = lookingFor.largeImageURL

    card.append(imgCard)

    return card
}

const carregarCards = () => {

    const containerCardImages = document.getElementById('container-cards')


    const campos = jsonImages.hits.map(criarCardImages)

    containerCardImages.replaceChildren(...campos)
    

}


carregarCards()

