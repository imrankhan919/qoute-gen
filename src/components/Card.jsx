import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'


function Card() {
  
    const {qoute , getQoute} = useContext(GlobalContext)

    const {content , author , tags} = qoute
  
    function handleClick(){
       getQoute()
    }


    return (
    <div class="card">
  <div class="card-header">
    {tags}
  </div>
  <div class="card-body">
    <h5 class="card-title">{author}</h5>
    <p class="card-text">{content}</p>
    <button href="#" class="btn btn-primary" onClick={()=> handleClick()}>Get More Motivation</button>
  </div>
</div>
  )
}

export default Card