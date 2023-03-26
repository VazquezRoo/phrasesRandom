import React, { useState } from 'react'
import db from '..//db/db.json'
import Button from './button'

const GetPhraseRandom = () => {

  //Se crea las constantes para la imagen de fondo y el indice del db con useState
    const [indice, setIndice] = useState(Math.floor(Math.random() * db.length))
 
    const [imagen, setImagen] = useState(Math.floor(Math.random() * 4 + 1))

  //Se asigna el cambio que hara useState al dar click, con ifs para que no se repita la frase
    const change = () =>{

      const newIndice = Math.floor(Math.random() * db.length)
     
      if(indice !== newIndice){
        setIndice (newIndice)
        setImagen(Math.floor(Math.random() * 4 + 1))
        console.log(1)
      }
      else if(indice === 0 && newIndice === indice) { 
        setIndice (newIndice + 1)
        setImagen(Math.floor(Math.random() * 4 + 1))
        console.log(2)
      }
      else if(indice === 10 && newIndice === indice) { 
        setIndice (newIndice - 1)
        setImagen(Math.floor(Math.random() * 4 + 1))
        console.log(3)
      }
    }

    //Se realizan los div con el titulo y el contenido, mandando a llamar a button
  return (
    <div className={`container imagen${imagen}`}>
      
      <h2 className='contenido titulo'>Did you know...</h2>
      <div className='centro'>
      <p className='contenido phrase'>{db[indice].phrase}</p>
      <cite className='contenido author'>{db[indice].author}</cite> 
      </div>
      <Button cambioPhrase = {change} />   
      
    </div>
  )
}

export default GetPhraseRandom