import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import ComParametros from './components/ComParametros.jsx'
import Primeiro from './components/Primeiro.jsx' //importando o componente primeiro para renderizar

ReactDOM.render( 
    <div>
        <Primeiro></Primeiro>
        <ComParametros></ComParametros>
    </div>//se nao tivesse essa div não daria pra colocar mais de um componente
,
    document.getElementById('root')
)