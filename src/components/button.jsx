import React from 'react'

function Button({cambioPhrase}) {

  //se crea el button que hara los cambios a nuestro contenido

  return (
    <div>
    <button onClick={cambioPhrase} className= 'button' > <b>Know more</b> </button>
    </div>
  )
}

export default Button