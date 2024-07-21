import { Link } from "react-router-dom"

function LoginSignUp() {
  return (
    <div className=" flex justify-center items-center py-20 bg-[#fcecff]">
      <div className="w-[35%] m-auto bg-white px-10 pt-10 pb-32">
      <h3 className="text-3xl font-semibold">Login</h3>
      <form className=" flex flex-col gap-4 py-5">
        <input type="email" placeholder="Enter Email" className="border-2 py-2 px-2 outline-none"/>
        <input type="password" placeholder="Password" className="border-2 py-2 px-2 outline-none"/>
        <input type="submit" value="Continue" className="text-white bg-[#ba3331] w-full py-3 cursor-pointer"/>
      </form>
      <p>Create an account ? <Link to="/SignUp" className="text-[#ba3331] font-semibold">Click here</Link></p>
      </div>
      

    </div>
  )
}

export default LoginSignUp