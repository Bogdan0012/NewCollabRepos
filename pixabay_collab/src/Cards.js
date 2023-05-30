import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
export default class Cards extends Component {
    constructor(props){
        super(props)
        this.state={
            data:props.data
        }
    }
  render() {
    return (
      <div className='cards-container'>
        {this.props.data.map(el=>(
            <Card key={el.id} id={el.id} img={el.previewURL}></Card>
        ))}
      </div>
    )
  }
}
