import React from 'react'
import styled from 'styled-components'

const EditProducto = () => {
    const Title = styled.h1`
        font-size: 2em;
        color: red;
        aling-item: center;
    `
    const Parrafo = styled.p`
        aling-item: justyfy;
    `

  return (
    <div>
        <Title>
            El Titulo
        </Title>
        <Parrafo>
            Este es el texto a mostrar.
        </Parrafo>
        </div>
  )
}

export default EditProducto