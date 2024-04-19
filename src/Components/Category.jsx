import jacket from "../assets/images/jacket.png"
function Category({img,title}){
    return(
        <div>
            <div className="border- w-[100px] h-[100px] bg-gray-200 rounded-full flex items-center justify-center ">
                <img width={50} src={img}/> 
                
            </div>
            
            <p>{title}</p>
        </div>
    )

}
export default Category