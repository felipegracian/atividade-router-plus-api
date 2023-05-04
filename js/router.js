'use strict'

import {carregarCards} from './indexpaginavideos.js'

const routes = {
    '/videos' : '/pages/videos.html'
}

const route = async () =>{
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])

    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/videos'){
        carregarCards()
    }
}

window.route = route