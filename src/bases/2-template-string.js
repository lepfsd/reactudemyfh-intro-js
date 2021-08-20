
const nombre = 'luis'
const apellido = 'perez'
const nombreCompleto = `
  ${ nombre } 
  ${ apellido }
  ${ 1 + 1 }
`

console.log(nombreCompleto)

function getSaludo(nombre) {
  return 'hola mundo ' + nombre
}

console.log(`esto es un saludo: ${ getSaludo( nombre) }`)