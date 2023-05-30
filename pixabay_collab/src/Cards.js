import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
export default class Cards extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        axios.get("http://sikoko7815-001-site1.atempurl.com/api/Pixabay/getImages?promt=car",{headers:{
            "Accept":"*",
            "Access-Control-Allow-Origin": "*"
        }})
      .then(res=>{
        this.setState({data:res.data.hits})
        console.log(res.data.hits);
      })
    }
  render() {
    return (
      <div className='cards-container'>
        {this.state.data.map(el=>(
            <Card img={el.previewURL}></Card>
        ))}
      </div>
    )
  }
}
