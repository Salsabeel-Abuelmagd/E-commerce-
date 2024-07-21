
import { Link } from "react-router-dom"
function SignUp() {
  return (
    <div className=" flex justify-center items-center py-20 bg-[#fcecff]">
    <div className="w-[35%] m-auto bg-white px-10 pt-10 pb-32">
    <h3 className="text-3xl font-semibold">Sign Up</h3>
    <form className=" flex flex-col gap-4 py-5">
      <input type="text" placeholder="Your Name" className="border-2 py-2 px-2 outline-none"/>
      <input type="email" placeholder="Enter Email" className="border-2 py-2 px-2 outline-none"/>
      <input type="password" placeholder="Password" className="border-2 py-2 px-2 outline-none"/>
      <input type="submit" value="Continue" className="text-white bg-[#ba3331] w-full py-3 cursor-pointer"/>
    </form>
    <p>Already have an account ? <Link to="/Login" className="text-[#ba3331] font-semibold">Login here</Link></p>
    </div>
    

  </div>
  )
}

export default SignUp