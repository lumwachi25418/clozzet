import Shopvariety from "./Shopvariety"
import jeans from "../assets/images/ragged-jeans.png"
import sweatshirts from "../assets/images/sweatshirts.png"
import Banquet from "../assets/images/slim-banquet-dress.png"
import bluedenim from "../assets/images/denim.png"
import leatherjacket from "../assets/images/leather-jacket.png"
import quartz from "../assets/images/quartz-watch.png"
import denim from "../assets/images/denim-jeans.png"
import handbag from "../assets/images/brown-handbag.png"
import unisex from "../assets/images/graphic-tshirts.png"
import bomber from "../assets/images/bomber.png"
import pallazzo from "../assets/images/pallazo.png"
import leather from "../assets/images/leather-shoes.png"
import purple from "../assets/images/serpenti-forever.png"
import Airforce from "../assets/images/unisex.png"
import cocktail from "../assets/images/cocktail.png"
import shoulder from "../assets/images/Off-The-Shoulder.png"
import pants from "../assets/images/Airsense-pleated.png"
import classy from "../assets/images/smartwatch.png"
import blue from "../assets/images/ZOOSHI-COBALT.png"
import knitted from "../assets/images/knitted-sweater.png"
function Shopvarieties({cart,setCart}){
    return(
        <div className="container mx-auto">
        
        <div className="flex flex-wrap flex-col ">
            <div className="flex flex-wrap justify-between items-center">

<Shopvariety cart={cart} setCart={setCart} img={jeans} title="Blue rageed jeans" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={sweatshirts} title="sweatshirts.png" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={Banquet} title="slim Banquet Dress" price="Ksh 10,250"/>
<Shopvariety cart={cart} setCart={setCart} img ={bluedenim} title="denim-jeans" price="Ksh 2,250"/>
            </div>
            <div className="flex flex-wrap justify-between items-center ">

<Shopvariety cart={cart} setCart={setCart} img={leatherjacket} title="leather-jacket.png" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={quartz} title="Quartz men's" price="Ksh 2,250"/>

<Shopvariety cart={cart} setCart={setCart} img={denim} title="Women Denim Jeans" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={handbag} title="Browm handbag" price="Ksh 2,250"/>
            </div>
            <div className="flex flex-wrap justify-between items-center ">

<Shopvariety cart={cart} setCart={setCart} img={unisex} title="Unisex Graphic T-shirt" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={bomber} title="Black Bomber Jacket" price="2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={pallazzo} title="Pleated pallazo pants" price="2,250"/>
<Shopvariety img ={leather} title="Pure Leather Shoes" price="Ksh2,250"/>
            </div>
            <div className="flex flex-wrap justify-between items-center"> 

<Shopvariety cart={cart} setCart={setCart} img={purple} title="Purple serpenti Purse" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={Airforce} title="Unisex Force sneakers" Price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={cocktail} title="Blue Cocktail Dress" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={shoulder} title="Off-Shoulder Crop Top" price="Ksh 2,250"/>
            </div>
            <div className="flex flex-wrap justify-between items-center ">

<Shopvariety cart={cart} setCart={setCart} img={pants} title="Airsense Pleated Pants" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={classy} title="Classy smart watch" price="Ksh 2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={blue} title="Blue Platform Heels" price="2,250"/>
<Shopvariety cart={cart} setCart={setCart} img={knitted} title="Strip Knitted sweater" price="Ksh 2,250"/>
            </div>








        </div>

        </div>
    )
}
export default Shopvarieties