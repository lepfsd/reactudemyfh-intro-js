import { heroes } from '../data/heroes'

export const getHeroesById = (id) => {
    return heroes.find( h => h.id === id )
}

//console.log(getHeroesById(2))

export const getHeroesByOwner = ( owner) => heroes.filter(heroe => heroe.owner === owner)

//console.log(getHeroesByOwner('Marvel'))


