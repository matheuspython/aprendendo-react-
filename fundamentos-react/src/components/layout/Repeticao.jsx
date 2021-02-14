import React from 'react'
import produtos from '../data/products.js'

export default props =>{
 
  function getProdutos(){
    return produtos.map(produto =>{
      return <li>{produto.id} - {produto.nome} - R${produto.preco}</li>
    })
  }


  return(
    <div>
      <h2>Repeticao</h2>
      <ul>
        {getProdutos()}
      </ul>
    </div>
  )
}