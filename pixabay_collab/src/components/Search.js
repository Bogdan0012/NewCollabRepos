import React, { Component } from 'react'
import styles from '../style/main.module.css'; 
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            query:''
        }
    }
  render() {
    return (
      <div className={styles.searchContainer}>
        <h1 className={styles.searchTitle}>Search pictures</h1>
        <input className={styles.searchBar} type="text" value={this.state.qwery} onChange={(e)=>{this.setState({query:e.target.value})}}/>
        <br></br>
        <button className='btn-search' onClick={()=>{this.props.Search(this.state.query)}}>
            <img src='searchIMG.png'></img>
        </button>
        <hr/>
      </div>
    )
  }
}
