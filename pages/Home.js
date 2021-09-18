import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BackgroundImage from '../public/assets/background.jpg'

const HomeScrean=()=>{
    return (
        <>
            <div className={styles.bgGRD}>
            <Image className={styles.bg0} src={BackgroundImage} layout='fill' objectFit='cover'  objectPosition='right' />
            <div className={styles.margin}>
                <div className={styles.container}>
                    <div className={styles["col-6","col-sm-12"]}>
                        <h1 className={styles["mt-sm"]}>Welcome!</h1>
                        <div>
                        We always given the people of Brookland quality food, fast delivery, and great customer service. Our pizza, pasta, subs and all other food items are prepared freshly daily in our kitchen and {"that's"} our guarantee. Try one of our many pizza choices with family and friends. Please come to PASSATO shop and enjoy the fresh and great food items.
                        </div>
                        <br/>
                        </div>
                        <div>
                        <button className={styles.btn}>Order Now</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomeScrean;