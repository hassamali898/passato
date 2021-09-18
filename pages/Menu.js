import React from 'react';
import Head from 'next/head'
import styles from "../styles/Menu.module.css"
import MenuCard from '../components/MenuCard';
const MenuScreen=()=>{
    return (
        <>
        <Head>
        <title>Menu</title>
      </Head>
            <div className={styles.container+" "+styles.spacebetween}>
                <div className={styles.center}>
                    <h3>Menu</h3>
                </div>
                <div className={styles.row}>
                <div className={styles.col}>
                        <MenuCard title="Starter" src={require("../public/profile/Asset 5300px.png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>French Fries </p><p><span>$4.99</span>   w/cheese<span>         $6.99</span></p></div>   
                            <div className={styles.menuText}><p>Onion Rings </p><p><span>$6.99</span></p></div>
                            <div className={styles.menuText}><p>Jalapeno Poppers </p><p><span>$7.99</span></p></div>
                            <div className={styles.menuText}><p>Mozzarella Sticks </p><p><span>$7.99</span></p></div>
                            <div className={styles.menuText}><p>Garlic Knots </p><p><span>$8.99</span></p></div>
                            <div className={styles.menuText}><p>Chicken Tenders </p><p><span>$8.99   </span>  Add Fries   <span>      $10.99  </span></p></div>   
                            <div className={styles.menuText}><p>Pepperoni Rolls </p><p><span>$8.99 </span>   w/cheese<span>    $10.99</span></p></div>
                            <div className={styles.menuText}><p>Bread Sticks </p><p><span>$6.99       </span></p></div>
                            <div className={styles.menuText}><p>Chicken Nuggets w/fries</p><p><span>$6.99</span></p></div>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Pizza" src={require("../public/profile/PepcheesePull_hi_res (-1.png")}>
                            <div>
                            <h4>Create Your own Pizza</h4>
                            <p>Choose your crust "hand tossed, "thin crust or Gluten Free</p>

                            <p><span>10" Small $16.99 /       12" Medium $20.99 /       14 Large $22.99 /       16 X-Large $24.99</span></p>

                            <h4>THE WORKS</h4>
                            <p>Traditional Tomato Sauce, Pepperoni, Italian Sausage, Fresh Red Onions, Fresh Green Peppers,Black Olives, Fresh Mushrooms and Extra Cheese</p>

                            <h4>MARGARITA </h4>
                            <p>Traditional Tomato Sauce, Mozzarella Cheese, Fresh Roma Tomato, Fresh Basil,Drizzled with Extra Virgin Olive Oil</p>

                            <h4>THE MEAT </h4>
                            <p>Traditional Tomato Sauce, Pepperoni, Italian Sausage, Ham, Canadian Bacon and Extra Cheese</p>

                            <h4>THE PRIMAVERA </h4>
                            <p>Traditional Tomato Sauce, Fresh Mushrooms, Fresh Red Onions, Fresh Roma Tomatoes, Fresh,Green Peppers, Black Olives and Extra Cheese</p>

                            <h4>HAWAIIAN </h4>
                            <p>Traditional Tomato Sauce, Pineapple, Ham, Canadian Bacon and Extra Cheese</p>

                            <h4>THE CALIFORNIA WHITE </h4>
                            <p>Made with Ricotta Sauce and a Blend of Cheeses and Oregon Leaf</p>
                            <h4>THE COUNTRY BBQ</h4> 
                            <p>Grilled Chicken Breast, BBQ Sauce, Fresh Red Onions, Canadian Bacon and Extra Cheese</p>

                            <h4>THE GREEK </h4>
                            <p>Traditional Tomato Sauce, Ground Beef, Fresh Red Onions, Fresh Tomatoes, Feta Cheese, Salami, Black Olives and Extra Cheese</p>

                            <h4>SUPER SUPREME </h4>
                            <p>Traditional Tomato Sauce, Pepperoni, Italian Sausage, Bacon, Ham, Fresh Green Peppers, Fresh Red Onion, Fresh Mushrooms, Black Olives, Fresh Tomatoes, Jalapeño Peppers and Extra Cheese</p>

                            <h4>NEW! STEAK AND CHEESE </h4>
                            <p>Steak, Fresh Mushrooms, Fresh Green Peppers and Fresh Red Onions topped with Three Blend Cheese</p>

                            <h4>PEPPERONI LOVERS </h4>
                            <p>Traditional Tomato Sauce, loaded with Pepperoni and topped with Double Cheese</p>

                            <h4>BUFFALO PIZZA </h4>
                            <p>Blue Cheese Sauce, Chicken Breast cooked with Buffalo Sauce,Fresh Red Onion, Roasted Red Pepper and Mozzarella Cheese</p>

                            <h4>NEW! MEDITERRANEAN PIZZA </h4>
                            <p>Tzatziki, Feta Cheese, Spinach, Onions Tomatoes, Black Olives and Gyro Meat</p>
                            </div>
                        </MenuCard>
                    </div>
                    
                    <div className={styles.col}>
                        <MenuCard title="Wraps" src={require("../public/profile/the-fry-family-food-co-bA4AIZwauxc-unsplash.png")}>
                        <div className={styles.menulist}>
                            
                            <p><span>All wrap's $10.99 add fries for an additional $1.99</span></p>
                            <br/>
                            <p>Cheesesteak Wrap</p>
                            <p>Buffalo Chicken Wrap</p>
                            <p>Chicken Caesar Wrap</p>
                            <p>Crispy Chicken Wrap</p>
                            <p>Vegetable Wrap</p>
                            <p>Ranchero Chicken Wrap</p>
                            <p>Turkey Wrap</p>
                        </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Pasta" src={require("../public/profile/pasta.png")}>
                            <div className={styles.menulist}>
                            <div className={styles.menuText}><p>Marinara</p><p><span>$10.99</span></p></div>
                            <div className={styles.menuText}><p>Meatballs</p><p><span>$13.99</span></p></div>
                            <div className={styles.menuText}><p>Meat Sauce </p><p><span>$13.99</span></p></div>
                            <div className={styles.menuText}><p>Chicken Parmesan</p><p><span>$13.99</span></p></div>
                            <div className={styles.menuText}><p>Vegetable </p><p><span>$12.99</span></p></div>
                            <div className={styles.menuText}><p>Chicken Alfredo </p><p><span>$14.99</span></p></div>
                            <br/>
                            </div>
                            <div className={styles.textCenter}>
                            <p>All pasta is served with a side of Garlic Bread</p>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Calzone" src={require("../public/profile/calzone.png")}>
                        <div className={styles.menulist}>
                        <div className={styles.menuText}><p>Pepperoni Calzone</p><p><span>$14.99</span></p></div>
                        <div className={styles.menuText}><p>Vegetable Calzone</p><p><span>$14.99</span></p></div>
                        <div className={styles.menuText}><p>Sausage Calzone </p><p><span>$15.99</span></p></div>
                        <div className={styles.menuText}><p>Buffalo Chicken Calzone</p><p><span>$15.99</span></p></div>
                        <div className={styles.menuText}><p>Make your own Calzone</p><p><span>$11.99 </span></p></div>
                        
                        </div>
                        <p><span>Add any topping for $1.75</span></p>
                        <br/>
                        <div className={styles.textCenter}>
                        <p>
                        Calzone served with frice,sour cream and salsa</p>
                            </div>
                        
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Seafood" src={require("../public/profile/Screenshot_20210910-160614_Grubhub.png")}>
                            
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>Shrimp Platter</p><p><span>$15.99</span></p></div>
                            <div className={styles.menuText}><p>Crab Cake Platter</p><p><span>$15.99</span></p></div>
                            <div className={styles.menuText}><p>Fish Platter</p><p><span>$15.99</span></p></div>
                            <div className={styles.menuText}><p>Seafood Platter </p><p><span>$19.99</span></p></div>
                            </div>
                            <br/>
                            <div className={styles.textCenter}>
                            <p>Served with fries, side salad and a side of either cocktail sauce, tartar sauce, hot sauce or Balsamic Vinaigrette</p>
                            
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Buffalo Wings" src={require("../public/profile/s-Buffalo-Wings-500x366.png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>5 Pieces</p><p><span> $7.99</span></p></div>
                            <div className={styles.menuText}><p>10 Pieces</p><p><span> $12.99</span></p></div>
                            <div className={styles.menuText}><p>15 Pieces</p><p><span> $17.99</span></p></div>
                            <div className={styles.menuText}><p>20 Pieces</p><p><span>$21.99</span></p></div>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Gyro" src={require("../public/profile/Screenshot 2021-09-11 221106.png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>Lamb Gyro</p><p><span> $9.99</span></p></div>
                            <div className={styles.menuText}><p>Chicken Gyro</p><p><span> $9.99</span></p></div>
                            <br/>
                            </div>
                            <div className={styles.textCenter}>
                            <p>Turn it into a platter with fries for $2.99 extra</p>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Quesadilla" src={require("../public/profile/lottie-griffiths-pvTgyioFSTY-unsplash.png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p> Chicken/steak/vegetable</p><p><span>$12.99</span></p></div>
                            <div className={styles.menuText}><p>Shrimp </p><p><span>$14.99</span></p></div>

                            <br/>
                            </div>
                            <div className={styles.textCenter}>
                            <p>All quesadillas served with fries</p>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Salad" src={require("../public/profile/salad[1] (1).png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>Garden Salad</p><p><span> $9.99</span></p></div>
                            <div className={styles.menuText}><p>Greek </p><p><span>$11.99</span></p></div>
                            <div className={styles.menuText}><p>Caesar </p><p><span>$11.99</span></p></div>
                            <div className={styles.menuText}><p>Grilled Chicken</p><p><span> $12.99</span></p></div>
                            <br/>
                        </div>
                        <div className={styles.textCenter}>
                            <p>Dressing: Blue Cheese, Ranch, Balsamic Vinaigrette, Lite Italian,Caesar</p>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Submarine" src={require("../public/profile/iStock_000016892646_XXXLarge (1).png")}>
                        <div className={styles.menulist}>
                            
                            <p><span>Half (8") $9.99 / Whole (12")  $12.99</span></p>
                            <br/>
                            <h4>HOT SUBS</h4>
                            <p>Cheese Steak</p>
                            <p>Cheese Burger</p>
                            <p>Chicken Parmesan</p>
                            <p>Meatball Parmesan</p>
                            <p>Chicken Cheese Steak</p>
                            <p>Veggle</p>
                            <br/>
                            <h4>COLD SUBS</h4>
                            <p>Italian Cold Cut</p>
                            <p>Chicken Filet</p>
                            <p>Fish Fet</p>
                            <p>Ham & Cheese</p>
                            <p>Turkey Breast</p>
                            <p>Tuna Salad</p>
                            </div>
                        </MenuCard>
                    </div>
                    
                    <div className={styles.col}>
                        <MenuCard title="Deserts" src={require("../public/profile/imagesCA2A3NCS.png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>Cheesecake</p><p><span> $4.99</span></p></div>
                            <div className={styles.menuText}><p>Chocolate Cake</p><p><span> $4.99</span></p></div>
                            <div className={styles.menuText}><p>Carrot Cake</p><p><span> $4.99</span></p></div>
                            <div className={styles.menuText}><p>Oreo Pie</p><p><span> $4.99</span></p></div>
                            <div className={styles.menuText}><p>Tiramisu</p><p><span>$4.99</span></p></div>
                            <div className={styles.menuText}><p>Pint of Ben and Jerry's </p><p><span> $8.99</span></p></div>
                            </div>
                        </MenuCard>
                    </div>
                    <div className={styles.col}>
                        <MenuCard title="Beverage" src={require("../public/profile/drinks.png")}>
                        <div className={styles.menulist}>
                            <div className={styles.menuText}><p>20 Oz. Soda </p><p><span>$2.29 </span></p></div>
                            </div>
                            <p>Pepsi,Diet Pepsi,Orange Crush,Iced Tea,Dr.  Pepper,Ginger Ale,Sierra Mist,Mt Dew</p>
                            <div className={styles.menulist}>
                            <div className={styles.menuText}><p>2 Litre Soda</p><p><span>$4.19</span></p></div>
                            </div>
                            <p>Pepsi,Diet Pepsi,Ginger Ale,Sierra Mist</p>
                            <div className={styles.menulist}>
                            <div className={styles.menuText}><p>Juice </p><p><span>$2.99</span></p></div>
                            </div>
                            <p>Apple,Orange,Cranberry</p>
                        </MenuCard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuScreen;