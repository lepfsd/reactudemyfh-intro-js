const getImagen = async () => {
    try {

        const apiKey = 'frfEF9kjVH5vLsDRcMahR35UtRRHgfMN'
        const resp = await fetch(`api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} =  await resp
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    }
    catch(error) {
        console.log(error)
    }
}

getImagen()