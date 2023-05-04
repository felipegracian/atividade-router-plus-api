'use strict'

import { getVideos } from "./linksapi.js"

const jsonVideos = await getVideos()

const criarCardVideos = (lookingFor) =>{
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

export const carregarCards = () => {

    const containerCardVideos = document.getElementById('container-cards')


    const campos = jsonVideos.hits.map(criarCardVideos)

    

    containerCardVideos.replaceChildren(...campos)
    

}


