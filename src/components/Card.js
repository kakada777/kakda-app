/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'


export default function Card(props) {
  // const [count,setCount] = useState(0)
  return (
    <>
        <div className="card border-0 mb-5" >
            <img src={props.imageURL} className="card-img-top" alt="card image"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6>{props.price}</h6>
                <p className="card-text">{props.desc}</p>
                {/* <button onClick={() =>setCount(count + 1)}>CLick Me</button>
              <button onClick={() =>setCount(count - 1)}>CLick Me</button> */}
            </div>
        </div>
        
        </>
  )
}
