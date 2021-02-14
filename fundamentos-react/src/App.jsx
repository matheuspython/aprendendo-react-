import './App.css'

import React from 'react'

import ComParametros from './components/layout/ComParametros.jsx'
import Primeiro from './components/layout/Primeiro.jsx' //importando o componente primeiro para renderizar
import ComFilhos from './components/layout/ComFilhos'
import Card from './components/layout/Card.jsx'

export default props =>(
  
<div className="App">
    <Card titulo="exercicio x">
        <Primeiro />    
    </Card>
{/*
    <ComFilhos>
        <ul>
            <li>frase 1</li>
            <li>frase 2</li>
            <li>frase 3</li>
        </ul>
</ComFilhos>

    <Primeiro />
    <ComParametros titulo="esse é o titulo" subtitulo="esse é o subtitulo" />
    <ComParametros titulo="opa" subtitulo="epa" />
    //titulo e subtitulo sao parametros dos componentes
*/
}
</div> 
//se nao tivesse essa div não daria pra colocar mais de um componente
)