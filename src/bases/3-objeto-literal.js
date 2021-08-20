const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
      ciudad: 'new york',
      zip: 32323,
      lat: 12.2222,
      lng: 23.3333
    }
  }
  
  const persona2 = { ...persona }
  persona2.nombre = 'peter'
  console.log(persona)
  console.log(persona2)
  