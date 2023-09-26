import React from 'react'
import '../css/Card.css'

const Card = (props) => {
  return (
   
    <div className="card" >
              <img className="card-img-top" src="https://picsum.photos/200/150" alt="" />
                  <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.description}</p>
                      <div className="card-end">
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