'use strict'

import { getImageByQuery } from "./linksapi.js"
const bar = document.querySelector('#input').value = 'flowers'



const jsonImagesAfterFilter = await getImageByQuery(bar)


const criarCardsComOFiltro = (lookingFor) => {

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


    console.log(jsonImagesAfterFilter.hits)


    const campos = jsonImagesAfterFilter.hits.map(criarCardsComOFiltro)

    containerCardImages.replaceChildren(...campos)




}

carregarCards()