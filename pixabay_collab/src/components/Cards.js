import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
export default class Cards extends Component {
    constructor(props){
        super(props)
       
    }
  render() {
    return (
      <div className='cards-container'>
        {this.props.data.map((el,index)=>(
        
            <Card key={el.id} id={el.id} index={index} deleteCard={this.props.deleteCard} img={el.webformatURL}></Card>
        ))}
      </div>
    )
  }
}
