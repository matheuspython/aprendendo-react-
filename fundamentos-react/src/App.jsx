import './App.css'

import React from 'react'

import ComParametros from './components/layout/ComParametros.jsx'
import Primeiro from './components/layout/Primeiro.jsx' //importando o componente primeiro para renderizar
import ComFilhos from './components/layout/ComFilhos'
import Card from './components/layout/Card.jsx'
import Repeticao from './components/layout/Repeticao'
export default props =>(
  
<div className="App">
    
    <Card titulo="Componentes com filhos">
      <Repeticao />
    </Card>

    <Card titulo="Componentes com filhos">
      <ComFilhos>
            <ul>
                <li>frase 1</li>
                <li>frase 2</li>
                <li>frase 3</li>
            </ul>
        </ComFilhos>
      </Card>

      <Card titulo="Componente com Parametro">
        <ComParametros titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
        <ComParametros titulo="opa" subtitulo="epa" />
      </Card>

        <Card titulo="Primeiro componente">
            <Primeiro />
        </Card>
</div> 
)