import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Nav({cart}){
    return(
        <nav>
            <div className="container mx-auto flex justify-between">
        <ul className="flex gap-5 items-center">
            <li>
                <img src="./src/assets/images/logo.svg"></img>
            </li>
            <Link to="/"><li className="hidden sm:block">Home</li></Link>
            <Link to="/about"><li className="hidden sm:block">About Us</li></Link>
            <Link to="/shop"><li className="hidden sm:block">Shop</li></Link>
            
        </ul>
        <ul className="flex relative gap-5 items-center">
            <Link to="/cartpage">
                {""}
         <li><span className="w-[2em] h-[2em] absolute bg-green-400 rounded-full justify-center items-center flex left-[3em]">{cart? cart.length:0}</span> <FaShoppingCart size={50}/>
</li>
</Link>
        <li className="border border-black px-8 py-4 rounded-full cursor-pointer hidden sm:block" ><button  >Sign up</button></li>
            <li className="border border-black px-8 py-4 rounded-full cursor-pointer hidden sm:block"><button>Log in</button></li>
            <li className="block sm:hidden"><GiHamburgerMenu size={50} />
</li>
        </ul>
        </div>
        </nav>
    )}

    export default Nav