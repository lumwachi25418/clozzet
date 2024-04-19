import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

function Login() {
  const [showPassword, setShowpassword] = useState(true);
  function handleShowpassword() {
    setShowpassword((prev) => !prev);
  }

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between gap-4">
        <img src="src/assets/images/login.png"></img>

        <div className="justify-between">
          <h1 className="text-4xl">Login to your Account </h1>
          <div className="flex flex-wrap flex-col justify-center gap-5">
            <input
              className=" border 2px rounded-full cursor-pointer py-3 px-[1em] flex-1 bg-transparent outline-none "
              type="text"
              placeholder="Email"
            />

            <div className="border flex items-center bg-white rounded-full cursor-pointer pr-2">
              <input
                className=" 2px rounded py-3 px-[1em] flex-1 bg-transparent outline-none"
                type={showPassword ?"password":"Text"}
                placeholder="password"
              />
              <div onClick={handleShowpassword}>
                {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
              </div>
            </div>
            <div>
            <div className="flex justify-center items-center">
              <div></div>
              <button>Forgot password</button>
            </div>
            <input type="checkbox" />
            <p>Remember me</p>
            </div>
            <button className="bg-[#45C9A1] rounded-full">Sign in</button>
            <h1 className="text-center">Or</h1>
            <button className="border rounded-full bg-white">
              Login with Google
            </button>
            <h1>Dont Have An Account Yet?<span className="text-[#45C9A1]">Sign Up Free</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
