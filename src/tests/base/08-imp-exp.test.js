import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe(' pruebas en funciones heroes', () => {

    test('debe retornar un heroe por id', () => {

        const id = 1
        const heroe = getHeroeById(id)
        const data = heroes.find(h => h.id === id)

        expect(heroe).toEqual(data)

    })

    test('debe retornar undefined', () => {

        const id = 100
        const heroe = getHeroeById(id)
    
        expect(heroe).toBe(undefined)
    
    })
})

