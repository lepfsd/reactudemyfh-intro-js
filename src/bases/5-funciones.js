//funciones en JS

/*const saludar = function(nombre) {
  return `hola ${ nombre }`
} */

const saludar2 = (nombre) => {
    return `hola2 ${ nombre }`
  }
  
  // si es un solo return, mejor una sola linea
  
  const saludar3 = (nombre) => `hola3 ${ nombre }`
  
  console.log(saludar2('luis'))
  console.log(saludar3('luis'))
  
  // no usar return, pero encerrar entre ()
  const getUser = () => ({
    uid: '12asasd',
    username: 'el_papi'
  })
  
  console.log(getUser())
  
  function getUsuarioActivo( nombre) {
    return {
      uid: 'asd2232',
      username: nombre
    }
  }
  
  // transformar a function =>
  
  const getUsuarioActivo2 = (nombre) => ({
    uid: 'asd2232',
    username: nombre
  })
  
  const usuarioAct = getUsuarioActivo('foobar')
  const usuarioAct2 = getUsuarioActivo2('foobar')
  console.log(usuarioAct)
  console.log(usuarioAct2)
  
  