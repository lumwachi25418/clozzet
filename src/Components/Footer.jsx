function Footer(){
    return(
        <footer className=" bg-stone-200" >
            <div className="" >

 
            <div className="container mx-auto justify-between">

                <h1 className="text-center font-bold">Subscribe & get up to 30% OFF</h1>
                <div className="flex justify-center items-center gap-3 flex-col sm:flex-row">
<input className="border rounded-full px-10 py-4  border-[#45C9A1] 
"type="text "placeholder="Enter your email"></input>
<button className="border rounded-full bg-[#45C9A1] px-10 py-4 ">Subscribe</button>
</div>
            
            <div class="flex px-7  mt-4 justify-between items-start flex-col sm:flex-row ">
            <div>
                <img src="./src/assets/images/logo.svg"/>
                <p>Offering a unique and<br></br> stylish perspective on <br></br>fashion is our number <br></br>one priority. Confuse <br></br>your mirror by our trendy outfits.</p>
            </div>
            <div>
                <h1 className="font-bold">Store</h1>
                <ul>
                    <li>Women’s Fashion</li>
                    <li>Men’s Fashion</li>
                    <li>Store Sale</li>
                    <li>Collections</li>

                </ul>
                </div>
            <div>
                <h1 className="font-bold">Help</h1>
                <ul>
                    <li>Customer Support</li>
                    <li>Terms& Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Track Your Order</li>
                </ul>

            </div>
            
            <div class="w-full max-w-12 " >
            
                <h1 className="font-bold">Contact Us</h1>
                <div class="flex">
                <img className="size-5" src="./src/assets/images/email.png"/>
                
                <p>contact@clozzet.com</p>
                
                </div>
                <div class="flex">
                <img className="size-5" src="./src/assets/images/phone.png"/><p>0796323224</p>
                
                               
                </div>
                <h2 className="flex">Follow us</h2>
                <div className="flex w-full max-w-12 gap-3 ">
                    <img className="size-8" src="./src/assets/images/facebook.png "/>
                    <img className="size-8" src="./src/assets/images/instagram.png"/>
                    <img className="size-8" src="./src/assets/images/twitter.png"/>
                </div>
                </div>
                </div>
                </div>
                </div>
        </footer>
    )
}

















export default Footer