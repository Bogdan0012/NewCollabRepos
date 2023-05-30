import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            query:''
        }
    }
  render() {
    return (
      <div className='search-container'>
        <h1>Search pictures</h1>
        <input type="text" value={this.state.qwery} onChange={(e)=>{this.setState({query:e.target.value})}}/>
        <br></br>
        <button className='btn-search' onClick={()=>{this.props.Search(this.state.query)}}>
            <img src='searchIMG.png'></img>
        </button>
        <hr/>
      </div>
    )
  }
}
