import Cartproduct from "./Cart-product"
import knitted from "../assets/images/knitted-sweater.png"
import Airforce from "../assets/images/unisex.png"
import Banquet from "../assets/images/slim-banquet-dress.png"
import denim from "../assets/images/denim-jeans.png"
import { useEffect,useState } from "react"
function Cartproducts ({cart,setCart}){
    const [cartCopy,setCartCopy]=useState([])

    useEffect(()=>{
       setCartCopy([...cart])
    },[])
    
return(
    <div className="container mx-auto">
<div className="flex justify-between">
<div>
    <ul className="flex gap-10 justify-between border">
        <li>Product</li>
        <li>Quantity</li>       
        <li>Price</li>


    </ul>
    
    <div>
        
        

               {   cart && cart.map(item=>{ 
                return(
                    <Cartproduct img={item.img} title={item.title} price={item.price} cart={cart} setCart={setCart} cartCopy={cartCopy} setCartCopy={setCartCopy}/>
                        
                    
                )})}
                    
                    </div>
    </div>
    <div className="bg bg-slate-300 h-[60%] py-4 px-3 mt-5">
<h1 className="text-xl">Cart Summary</h1>
<p>Have a promo code ?Apply here</p>
<input className="border" type="text" placeholder="Promo code(optional)"/>
<button className="border rounded-full bg-[#45C9A1]">Apply</button>
<div className="flex gap-8 justify-between">
    <p>Subtotal</p>
<p>{`Ksh.${cartCopy.reduce((acc,curr)=>acc + parseInt(curr.price.replace("Ksh","").replace(",","")),0).toLocaleString()}`}
</p>
</div>
<div className="flex gap-8 justify-between">
    <p>Delivery fee</p>
    <p>Ksh 450</p>

</div>
<div className="flex gap-8 justify-between">
    <p>Total</p>
    <p className="text-bold">{`Ksh.${cartCopy.reduce((acc,curr)=>acc + parseInt(curr.price.replace("Ksh","").replace(",","")),0).toLocaleString()}`}</p>

</div>
<button className="border rounded-full bg-[#45C9A1] item-center">CheckOut</button>
    </div>


</div>

</div>
)

}
export default Cartproducts