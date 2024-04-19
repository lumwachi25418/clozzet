function  Featuredcollection({img,title,price,cart,setCart}){
    return(
        <div>
            <div className="border- w-[300px] h-[400px] bg-gray-200 flex items-center relative group justify-center ">
            <img width={300}src={img}/>
            <button className="bg-green-400 text-white py-4 absolute bottom-0 w-[100%] hidden group-hover:block">Add To Cart</button>
            </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}
export default Featuredcollection
