import { useEffect,useState } from "react"

function Cartproduct({img,title,size,price,cart,cartCopy,setCartCopy}){
   
    function handleCartAction(action,product){
if(action==="increment"){setCartCopy(prev=>[...prev,product])

    }else if(  action==="decrement" ) {const cartCopyItems=[...cartCopy]
        const cartItemIndex=cartCopyItems.indexOf(product)
        cartCopyItems.splice(cartItemIndex,1)
        setCartCopy(cartCopyItems)

}

    
    }

    return(
        <div className="border flex flex-wrap justify-between">
            <div className="flex items-center">
            <div  ClassName="h-[150px] flex items-center">
            <img  width={300} src={img}/>
            </div>
            <div className="">
<p>{size}</p>
<p>{title}</p>
</div>
</div>
<div className=" flex justify-center items-center">
    <button className="border py-2 px-2" onClick={()=>handleCartAction("decrement",{img,title,size,price})} disabled={cartCopy.filter(item=>item.title===title).length===1}>-</button>
<p className="border py-2 px-2">{cartCopy.filter(item=>item.title===title).length}</p>
<button className="border py-2 px-2"  onClick={()=>handleCartAction("increment",{img,title,size,price})}>+</button>
</div>
<p className="flex items-center">{}





</p>

        </div>
        
    )
}
export default Cartproduct