import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('pruebas en 05 func', () => {
    test('getUser retornar objeto', () => {

        const  userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toEqual(userTest)

        const activeUser = getUsuarioActivo('test')

        expect(activeUser).toEqual(userTest)
    })

    test('getUser retornar objeto2', () => {

        const nombre = 'test'

        const activeUser = getUsuarioActivo(nombre)

        expect(activeUser).toEqual({
            uid: 'ABC567',
            username: 'test'
        })
    })
})