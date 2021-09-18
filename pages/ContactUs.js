import React from 'react';
import Head from 'next/head'
import styles from "../styles/ContactUs.module.css"
const ContactUs=()=>{
    return (
        <>
        <Head>
        <title>Menu</title>
      </Head>
            <div className={styles.container}>
                <div className={styles.center}>
                    <h3>Contact Us</h3>
                </div>
                <div >
                <div className={styles.contactStyles+" "+styles.col}>
                    <h2><span>Phone no. :</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  202-462-2100</h2>
                    <h2><span>Email: </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  abc@xyz.com</h2>
                    <h2><span>Location:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  xyz</h2>
                    
                </div>
                <div className={styles.col+" "+styles["map-responsive"]}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1667950590195!2d-73.94431308476!3d40.71434454540928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25956a930d54b%3A0xae30bb316cda1d0c!2sIl%20Passatore!5e0!3m2!1sen!2s!4v1631906862460!5m2!1sen!2s" height="420px" className={styles.map} loading="lazy"></iframe>
                </div>
                </div>
            </div>
        </>)
}
export default ContactUs