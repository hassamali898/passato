import React from 'react';
import Head from 'next/head'
import styles from "../styles/SpecialOffers.module.css"
const SpecialOffers=()=>{
    return (
        <>
        <Head>
        <title>Special Offers</title>
      </Head>
            <div className={styles.container}>
                <div className={styles.center}>
                    <h3>Special Offers</h3>
                </div>
                
                <div>
                    <div className={styles.sp}>
                        <div className={styles.spBG}>
                            <div className={styles.title}>
                                <h2>Pizza Special</h2>
                            </div>
                            <div className={styles.copans}>
                            <p>Medium one topping $12.99</p>
                            <p>Large one topping $14.99</p>
                            <p>Extra Large one-topping $16.99</p>
                            <p><span>Not Valid with other offers. Limited time only. </span></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sp}>
                        <div className={styles.spBG}>
                            <div className={styles.title}>
                                <h2>Sub’s Special</h2>
                            </div>
                            <div className={styles.copans}>
                            <p>8"Sub w/fries andcan of soda for $10.99</p>
                            <p>2 8"subs 2 fries and 2 can's of soda for $20.99</p>
                            <p><span>Not Valid with other offers. Limited time only. </span></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sp}>
                    <div className={styles.spBG}>
                        <div className={styles.title}>
                            <h2>Pizza & Wings</h2>
                        </div>
                        <div className={styles.copans}>
                        <p>One large two topping pizza and 10 wings $23.99</p>
                        <p>(Add 2 liter soda for $2.99)</p>
                        <p><span>Not Valid with other offers. Limited time only. </span></p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.sp}>
                    <div className={styles.spBG}>
                        <div className={styles.title}>
                            <h2>DC’s Famous Slice</h2>
                        </div>
                        <div className={styles.copans}>
                        <p>DC's Original JUMBO SLICE Cheese $6.99</p>
                        <p>(Additional Topping $1.00)</p>
                        <p>(Specialty Slices $9.99)</p>
                        <p><span>Not Valid with other offers. Limited time only. </span></p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.sp}>
                    <div className={styles.spBG}>
                        <div className={styles.title}>
                            <h2>Gyro Over Rice</h2>
                        </div>
                        <div className={styles.copans}>
                        <p>New York style gyro over rice $12.99</p>
                        
                        <p><span>Not Valid with other offers. Limited time only. </span></p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.sp}>
                    <div className={styles.spBG}>
                        <div className={styles.title}>
                            <h2>Big Bang</h2>
                        </div>
                        <div className={styles.copans}>
                        <p>10 Large one topping $99.99</p>
                        <p><span>Not Valid with other offers. Limited time only. </span></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>)
}
export default SpecialOffers