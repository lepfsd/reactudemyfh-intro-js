import {getHeroesById} from './bases/8-exports'

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        
        const heroe = getHeroesById(1)
        resolve(heroe)
        //reject('no se puedo manjear el heroe')
    }, 2000)
})

promesa.then( (heroe) => {
    console.log(`heroe ${heroe}`)
})
.catch( err => console.warn(err))

