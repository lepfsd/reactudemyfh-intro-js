
//variables y constantes
const nombre = 'luis'
const apellido = 'perez'
let valor = 5
valor = 4

console.log(nombre, apellido, valor)

if( true ) { //solo dentro de este ambito
  let valor = 6
  console.log(valor)
}

console.log(valor)