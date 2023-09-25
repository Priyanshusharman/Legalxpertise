import React from 'react'
import '../css/Card.css'

const Card = (props) => {
  return (
   
    <div class="card" >
              <img class="card-img-top" src="https://picsum.photos/200/150" alt="" />
                  <div class="card-body">
                      <h5 class="card-title">{props.title}</h5>
                      <p class="card-text">{props.description}</p>
                      <div class="card-end">
                          <h6>
                              ⭐ {props.rating}/5
                          </h6>
                          <h6>{props.pricing}</h6>
                      </div>
            </div> 
    </div>  
  )
}

export default Card