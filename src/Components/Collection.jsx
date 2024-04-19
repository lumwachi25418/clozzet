function Collection({title1,title2,img}){
    
        return(
            <div classname="flex items-end justify-between">
            <div classname="w-[300px] h-[400px]"> 
                <img width={300} src={img}/>

 </div>
                <p>{title1}</p>
                <h1>{title2}</h1>
                <button>Shop Now</button>

 </div>
        )
    
}
export default Collection