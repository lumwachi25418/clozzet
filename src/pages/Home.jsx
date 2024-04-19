import Hero from "../Components/Hero"
import Categories from "../Components/Categories"
import Featuredcollections from "../Components/Featuredcollections"
import Collections from "../Components/Collections"
import Shopvarieties from "../Components/Shopvarieties"
function Home({cart,setCart}){
    return(
<div>
    <Hero/>
    <Categories/>
    <Featuredcollections cart={cart} setCart={setCart}/>
    <Collections />

    
</div>
    )
}
export default Home






















