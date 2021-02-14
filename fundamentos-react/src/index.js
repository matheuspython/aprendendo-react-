import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import ComParametros from './components/ComParametros.jsx'
import Primeiro from './components/Primeiro.jsx' //importando o componente primeiro para renderizar
import ComFilhos from './components/ComFilhos'
ReactDOM.render( 
    <div>
        <ComFilhos>
            <ul>
                <li>frase 1</li>
                <li>frase 2</li>
                <li>frase 3</li>
            </ul>
        </ComFilhos>
{
/*
    <Primeiro />
    <ComParametros titulo="esse é o titulo" subtitulo="esse é o subtitulo" />
    <ComParametros titulo="opa" subtitulo="epa" />
*/
}
    
    </div>//se nao tivesse essa div não daria pra colocar mais de um componente
    //titulo e subtitulo sao parametros dos componentes
,
    document.getElementById('root')
)