'use strict'

import { getVideoByQuery } from "./linksapi.js"

const buttonAction = document.querySelector("#buttonSearch")

buttonAction.addEventListener('click', async function(e){

    e.preventDefault()

    const tag = document.querySelector("#input")

    const name = tag.value;

    const jsonVideosAfterFilter = await getVideoByQuery(name)

    const containerCardImages = document.getElementById('container-cards')


    


    const campos = jsonVideosAfterFilter.hits.map(criarCardsComOFiltro)

    containerCardImages.replaceChildren(...campos)

})






const criarCardsComOFiltro = (lookingFor) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const videoCard = document.createElement('video')
    videoCard.classList.add('video_card')
    videoCard.src = lookingFor.videos.medium.url

    const buttonPlay = document.createElement('div')
    buttonPlay.classList.add('button_play')

    const linkHref = document.createElement('a')
    linkHref.href = lookingFor.videos.medium.url

    const buttonImage = document.createElement('img')
    buttonImage.src = "..//playicon.png"

    

    linkHref.append(buttonImage)
    buttonPlay.append(linkHref)
    card.append(videoCard, buttonPlay)

    return card




}