import React from 'react'
import styles from '../style/main.module.css'; 

export default function Card(props) {
  return (
    <div key={props.id} className={styles.card}>
        <button id={props.index} onClick={props.deleteCard} className={styles.removeImage}>
        <i class="fa-solid fa-xmark"></i>
          </button>
        <img className={styles.cardImage} src={props.img}></img>
        <p className={styles.nickname}>Nickname</p>
    </div>
  )
}
