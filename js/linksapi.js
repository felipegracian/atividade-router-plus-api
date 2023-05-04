'use strict'

export const getImages = async() =>{
    const url = 'https://pixabay.com/api/?key=35962126-f84ad156f06967ac7f15a126c&&image_type=photo&pretty=true'

    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getVideos = async() =>{
    const url = 'https://pixabay.com/api/videos/?key=35962126-f84ad156f06967ac7f15a126c&pretty=true'

    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getImageByQuery = async (queryWord) =>{
    const url = `https://pixabay.com/api/?key=35962126-f84ad156f06967ac7f15a126c&q=${queryWord}&image_type=photo`

    const response = await fetch(url)
    const data = await response.json()

    return data
}