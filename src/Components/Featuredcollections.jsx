import Featuredcollection from "./Featuredcollection"
import leather from "../assets/images/leather-jacket.png"
import  sweatshirts from "../assets/images/sweatshirts.png"
import pallazo from "../assets/images/pallazo.png"
import denim from "../assets/images/denim.png"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


function Featuredcollections({cart,setCart}){
    return(

        <div className="container mx-auto">
            <h2 className="text-center font-bold">Featured collection</h2>
        <div className="flex justify-around flex-wrap"> 
        <div><MdOutlineKeyboardArrowLeft /></div>
        

            <Featuredcollection cart={cart} setCart={setCart} img={leather} title="Brown Leather jacket" price="Ksh 2,250"/>
            <Featuredcollection cart={cart} setCart={setCart} img={sweatshirts} title="Round-neck sweatshirts" price="Ksh 2,000"/>
            <Featuredcollection cart={cart} setCart={setCart} img={pallazo} title="pleated pallazo trousers" price="Ksh 1,800"/>
            <Featuredcollection cart={cart} setCart={setCart} img={denim} title="M-22 Denim jacket" price="Ksh 1,250"/>
            <div><MdOutlineKeyboardArrowRight /></div> 
            






        </div>
        </div>
        


    )
}
export default Featuredcollections