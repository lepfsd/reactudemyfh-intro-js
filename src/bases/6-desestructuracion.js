//desectructuracion
//asignacion desectructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'asdas'
  }
  
  //const { nombre } = persona
  
  //console.log(nombre)
  
  const retornaPersona = (usuario) => {
    const {edad, nombre, clave } = usuario
    console.log(edad, nombre, clave)
  } 
  
  // otra manera
  
  const retornarP2 = ({nombre, edad, rango = 1}) => {
    console.log(edad, nombre, rango)
  } 
  
  const useContext = ({clave, edad}) => {
    return {
      nombreClave: clave,
      anios: edad
    }
  }
  
  retornaPersona(persona)
  retornarP2(persona)
  
  const { nombreClave, anios } = useContext( persona )
  console.log(nombreClave, anios)
  
  
  
  