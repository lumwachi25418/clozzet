import Cartproducts from "../Components/Cart-products"
import { useEffect,useState } from "react"

function Cartpage({cart,setCart,cartCopy,setCartCopy}){
    
return(
    <div>
    <div>
        
   <Cartproducts cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}/>
   </div>
   </div>
)

}
export default Cartpage