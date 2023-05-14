'use strict'

import { getImageByQuery } from "./linksapi.js"

const buttonAction = document.querySelector("#buttonSearch")

buttonAction.addEventListener('click', async function(e){

    e.preventDefault()

    const tag = document.querySelector("#input")

    const name = tag.value;

    const jsonImagesAfterFilter = await getImageByQuery(name)

    const containerCardImages = document.getElementById('container-cards')


    console.log(jsonImagesAfterFilter.hits)


    const campos = jsonImagesAfterFilter.hits.map(criarCardsComOFiltro)

    containerCardImages.replaceChildren(...campos)

})






const criarCardsComOFiltro = (lookingFor) => {

    const card = document.createElement('div')
    card.classList.add('card')




    const imgCard = document.createElement('img')
    imgCard.classList.add('img_car')
    imgCard.src = lookingFor.largeImageURL

    card.append(imgCard)



    return card




}

