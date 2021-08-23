const personajes = ['Goku', 'Vegeta', 'Trunks']

//const [ p1 ] = personajes;
const [ , , p1 ] = personajes;

console.log(p1)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo()
console.log(letras, numeros)

const useState = (valor) => {
    return [valor, ()=>{console.log('hola mundo')}]
}

const [nombre, getF] = useState('luis')

console.log(nombre)
getF()

