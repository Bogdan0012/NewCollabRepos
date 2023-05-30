import React from 'react'

export default function Card(props) {
  return (
    <div key={props.id} className='card'>
        <img src={props.img}></img>
    </div>
  )
}
