import Image from 'next/image'
import Router from 'next/router'
import styles from '../styles/Navbar.module.css'
import Logo  from '../public/assets/logo.png'
import Backgroud1 from '../public/assets/Path 5.png'
import Backgroud2 from '../public/assets/Path 6.png'
import Banner from '../public/assets/Group 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState,useEffect } from 'react'
import Link from 'next/link'
export default (props)=>{
  const [active,setactive]=useState("HOME");
  const [nav,setnav] = useState(false);
  useEffect(()=>{
    switch(Router.pathname){
      case "/":
        setactive("HOME");
        break;
      case "/Catering":
        setactive("CATERING");
        break;
      case "/SpecialOffers":
        setactive("SPECIALOFFERS");
        break;
      case "/Menu":
        setactive("MENU");
        break;
      case "/OrderOnline":
        setactive("ORDER");
        break;
      case "/ContactUs":
        setactive("CONTACT");
        break;
    }
    
  },[])
  return(
    <div>
      <div className={styles.banner}>
        <Image src={Banner} layout="fill" objectFit="cover" objectPosition="bottom" />
      </div>

      <div className={nav?styles.absolute+" "+styles.mobbgsize2:styles.absolute+" "+styles.bgsize2}><Image layout='fill' src={Backgroud2} objectFit="cover" objectPosition="bottom" /></div>
      <div className={nav?styles.absolute+" "+styles.mobbgsize:styles.absolute+" "+styles.bgsize}><Image layout='fill'  src={Backgroud1} objectFit="cover" objectPosition="bottom"/></div>
      
      {/* NavBar */}
      <div className={styles.absolute+" "+styles.navBar}>
        <div>
          <ul className={styles.navList}>
            <li className={active==="HOME"?styles.active:styles.navListItems}><Link href='/'><a onClick={()=>{setactive("HOME")}}>HOME</a></Link></li>
            <li className={active==="CATERING"?styles.active:styles.navListItems}><Link href='/Catering'><a onClick={()=>{setactive("CATERING")}}>CATERING</a></Link></li>
            <li className={active==="SPECIALOFFERS"?styles.active:styles.navListItems}><Link href='/SpecialOffers'><a onClick={()=>{setactive("SPECIALOFFERS")}}>SPECIAL OFFERS</a></Link></li>
            <li className={styles.navListItems}><Link href='/'><a><div className={styles.logo}><Image layout='responsive' src={Logo}/></div></a></Link></li>
            <li className={active==="MENU"?styles.active:styles.navListItems}><Link href='/Menu'><a onClick={()=>{setactive("MENU")}}>MENU</a></Link></li>
            <li className={active==="ORDER"?styles.active:styles.navListItems}><Link href='/OrderOnline'><a onClick={()=>{setactive("ORDER")}}>ORDER ONLINE</a></Link></li>
            <li className={active==="CONTACT"?styles.active:styles.navListItems}><Link href='/ContactUs'><a onClick={()=>{setactive("CONTACT")}}>CONTACT US</a></Link></li>
          </ul>
        </div>
      </div>
       <div className={styles.navMob}>
       <div className={styles.absolute+" "+styles.navIcon}>
          <button onClick={()=>{nav?setnav(false):setnav(true)}}>
          <FontAwesomeIcon icon={faBars} className={styles.icon}/>
          </button>
      </div>
      <div className={styles.absolute+" "+styles.mobNavBar}>
        <div className={styles.mobNavLogo}>
        <Link href='/'><a><div className={styles.logo}><Image layout='responsive' src={Logo}/></div></a></Link>
        </div>
       
      </div>
        <div className={nav?styles.absolute+" "+styles.mobNavBar+" "+styles.navListShow:styles.absolute+" "+styles.mobNavBar+" "+styles.mobNavList}>

        <div>
          <ul>
            <li className={active==="HOME"?styles.active:styles.navListItems}><Link href='/'><a onClick={()=>{setactive("HOME");setnav(false)}}>HOME</a></Link></li>
            <li className={active==="CATERING"?styles.active:styles.navListItems}><Link href='/Catering'><a onClick={()=>{setactive("CATERING");setnav(false)}}>CATERING</a></Link></li>
            <li className={active==="SPECIALOFFERS"?styles.active:styles.navListItems}><Link href='/SpecialOffers'><a onClick={()=>{setactive("SPECIALOFFERS");setnav(false)}}>SPECIAL OFFERS</a></Link></li>
            <li className={active==="MENU"?styles.active:styles.navListItems}><Link href='/Menu'><a onClick={()=>{setactive("MENU");setnav(false)}}>MENU</a></Link></li>
            <li className={active==="ORDER"?styles.active:styles.navListItems}><Link href='/OrderOnline'><a onClick={()=>{setactive("ORDER");setnav(false)}}>ORDER ONLINE</a></Link></li>
            <li className={active==="CONTACT"?styles.active:styles.navListItems}><Link href='/ContactUs'><a onClick={()=>{setactive("CONTACT");setnav(false)}}>CONTACT US</a></Link></li>
          </ul>
        </div>
        </div>
       </div>
      <div className={styles.margin}>
        {props.children}
      </div>
    </div>
  )
};