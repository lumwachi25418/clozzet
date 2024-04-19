import Collection from "./Collection"
import mens from "../assets/images/mens.png"
import hbags from "../assets/images/hbags.png"
import watches from "../assets/images/watches.png"
import ladies from "../assets/images/ladies.png"

function Collections(){

    return(
    <div className="container mx-auto">
        <div className="grid grid-cols-2 grid-rows-1 ">
            <div className="bg-[#F0EFEF]">

        <Collection title1="Casual Collection" title2="men's Collection" img={mens}/> 
            </div>
        
        <div className="bg-[#fff1f1] py-11 flex">
        <Collection title1="Casual Collection" title2="Luxury watches" img={watches} />
        </div>
        <div className="bg-[#e3f9fb]">
        <Collection title1="Casual Collection" title2="Designer handbags" img={hbags} />
        </div>
        <div className="bg-[#fedbdd]">
        <Collection title1="Casual Collection" title2="Ladies collection" img={ladies}/>
        </div>
        


        </div>
    </div>

    )
}
export default Collections
