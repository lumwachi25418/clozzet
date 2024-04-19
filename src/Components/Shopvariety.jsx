function Shopvariety({img,title,price,cart ,setCart}){
    const handleAddToCart=(e,product)=>{
if(e.target.textContent.toLowerCase() ==="add to cart"){
    setCart(prev=>[...prev,product])
    e.target.textContent="Remove from cart"
    
    
}else{
    e.target.textContent="add to cart"
    e.target.style.color="white"
    e.target.style.background="green"
    const cartCopy=[]
    cart.filter(item=>{
        if(item.title !==product.title)
        cartCopy.push(item)
    })
    setCart(cartCopy)
}


        return{

        }
    }
    return(
            <div>
                <div >
        <div className="border- w-[300px] h-[400px] bg-stone-200 items-center flex justify-center relative group">
            <img width={300} height={300} src={img}/>
            
            <button onClick={e=>handleAddToCart(e,{img,title,price})} className="bg-green-400 text-white py-4 absolute bottom-0 w-[100%] hidden group-hover:block">Add To Cart</button>
            </div>
        
        
        <p>{title}</p>
        <p>{price}</p>
        </div>
        </div>
    )
}
export default Shopvariety