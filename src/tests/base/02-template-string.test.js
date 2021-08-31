import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('prueba 02-template-string.js', () => {
    test('prueba getSaludo', () => {

        const nombre = 'Fernando'
        const saludo = getSaludo( nombre)

        expect(saludo).toBe(saludo)
    })

})