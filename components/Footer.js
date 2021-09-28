
import styles from '../styles/Footer.module.css'
import facebook from '../public/icons/facebook-square-brands.svg'
import LinkedIn from '../public/icons/linkedin-brands.svg';
import Insta from '../public/icons/instagram-square-brands.svg'
import Image from 'next/image'
import Link from 'next/link'
export default (props)=>{
  return(
    <footer>
        <div className={styles.footer}>
        <div className={styles.row+" "+styles.center}>
            <div className={styles['col-6']+" "+styles.center}>
                <h2>Social Media</h2>
                <ul className={styles.footerMenu}>
                    <li><div className={styles.row}><div className={styles.footerIcon}><Image src={facebook} layout="responsive"/></div><Link href="/"><a className={styles.footerList}>Facebook</a></Link></div></li>
                    <li><div className={styles.row}><div className={styles.footerIcon}><Image src={Insta} layout="responsive"/></div><Link href="/"><a className={styles.footerList}>Instagram</a></Link></div></li>
                    <li><div className={styles.row}><div className={styles.footerIcon}><Image src={LinkedIn} layout="responsive"/></div><Link href="/"><a  className={styles.footerList}>LinkedIn</a></Link></div></li>

                </ul>
            </div>
           
            <div className={styles['col-6']+" "+styles.center}>
                <h2>Contact Us</h2>
                <ul className={styles.footerMenu}>
                <li><div className={styles.row}><Link href="/"><a className={styles.footerList}>202-462-2100</a></Link></div></li>
                    <li><div className={styles.row}><Link href="/"><a className={styles.footerList}></a></Link></div></li>
                    <li><div className={styles.row}><Link href="/"><a className={styles.footerList}></a></Link></div></li>

                </ul>
            </div>
            
        </div>
        <div className={styles.footerBottom}>Copyright 2021 © Passato | All Right Reserved | Powered By <Link href="/"><a>SomeMarketing</a></Link></div>
        </div>
    </footer>
  )
};