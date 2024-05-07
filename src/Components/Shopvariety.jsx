
function Shopvariety({img,title,price,cart ,setCart}){
    const handleAddToCart=(e,product)=>{
if(e.target.textContent.toLowerCase() ==="add to cart"){
     // adds to localStorage
    cart && setCart(prev=>[...prev,product])
    e.target.textContent="Remove from cart"
    
}else if(
    e.target.textContent="remove from cart"){
        const cartDuplicate=[...cart]
        const itemIndex=cartDuplicate.indexOf(product)
        cartDuplicate.splice(itemIndex,1)
        localStorage.setItem("cart", JSON.stringify(cartDuplicate))
        setCart(cartDuplicate)
    }
     
return{

        }
    }
    return(
            <div>
                <div >
        <div className="border- w-[300px] h-[400px] bg-stone-200 items-center flex justify-center relative group">
            <img width={300} height={300} src={img}/>
            
            <button onClick={e=>handleAddToCart(e,{img,title,price})} className="bg-green-400 text-white py-4 absolute bottom-0 w-[100%] hidden group-hover:block">{cart && cart.filter(item=>item.title===title).length===1?"Remove from cart":"add to cart"}</button>
            </div>
        
        
        <p>{title}</p>
        <p>{price}</p>
        </div>
        </div>
    )
}
export default Shopvariety