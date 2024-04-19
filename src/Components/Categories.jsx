import Category from "./Category"
import jacket from "../assets/images/jacket.png"
import Handbags from "../assets/images/handbag.png"
import tshirt from "../assets/images/tshirt.png"
import Dresses from "../assets/images/dress.png"
import Jeans from "../assets/images/jeans.png"
import Shoes from "../assets/images/shoe.png"
import sweaters from "../assets/images/sweater.png"
function Categories(){
    return(
        <div>
        <h2 className="text-center font-bold">Top Categories</h2>
    
        <div className="flex justify-between">
            <Category img={jacket} title={"Jacket"}/>
           <Category img={Handbags} title={"Handbags"}/>
           <Category img={tshirt} title={"Shirts"}/>
           <Category img={Dresses} title={"Dresses"}/>
           <Category img={Jeans} title={"Jeans"}/>
           <Category img={Shoes} title={"Shoes"}/>
           <Category img={sweaters} title={"sweaters"}/>
        </div>
        </div>
    )
    
}

export default Categories