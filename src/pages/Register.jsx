function Register(){
    return(
        <div className="container mx-auto flex gap-5">
            <div className="">
        <h1 className="text-4xl">Create An Account</h1>
        <div className="justify-between flex-cols gap-8">
        <div className="flex">
        <input className="border border-black rounded-full" type="text" placeholder="First Name"/>
        <input className="border border-black rounded-full" type="text" placeholder="Last Name"/>
        </div>
        <div class="flex-cols">
            <div>
        <input className="border border-black rounded-full" type="text" placeholder="Email Address"/>
        </div>
        <div>
        <input className="border border-black rounded-full" type ="text" placeholder="Phone Number"/>
        </div>
        <div>
        <input className="border border-black rounded-full" type="password" placeholder="Password"/>
        </div>
        <div>
        <input className="border border-black rounded-full"  type="password" placeholder="confirm password"/>
        </div>
        </div>
        </div>
        <button className="bg-green-400 text-white rounded-full">Create Account</button>
        <h1 className=" flex text-center justify-center align-center">Or</h1>
        <button className="bg-green text-white rounded-full">Sign Up With Google</button>
        <h1 className="text-center">Already Have An Account?<span className="text-[#45C9A1]">Log in</span></h1>
        </div> 
<div>
<img src="src/assets/images/signup.png"/>


</div>


        </div>  
    )
}
export default Register