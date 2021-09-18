import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MenuCard.module.css'
import { useState } from 'react';
export default (props)=>{
  const [show,setshow]=useState(false);
  return(
    <div className={styles.relevent+ " " + styles.padding}>
      <div className={styles.Card+" "+ styles.color}>
        <a onClick={()=>{show?setshow(false):setshow(true)}} className={styles.clickArrow}><div className={show?styles.absolute+" "+styles.Cardstyle+" "+styles.Cardclicked:styles.absolute+" "+styles.Cardstyle+" "+styles.Cardhover}>
           <div className={styles.btn}>+</div>
        </div></a>
        <div className={styles.Cardstyle+" "+styles.CardImage}>
          <div className={styles.img}>
          <Image src={props.src?props.src:require("../public/profile/drinks.png")} layout="fill" />
          </div>
        </div>
        <div className={styles.absolute+" "+styles.Cardtitle}><h2>{props.title?props.title:"title"}</h2></div>
      </div>
        <div className={show?styles.showCard:styles.hideCard}>
          {props.children}
        </div>
    </div>
  )
};