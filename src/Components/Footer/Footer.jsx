
function Footer() {
  return (
    <div className="pt-10 pb-2 text-center">
        <div className="flex justify-center items-center">
            <img src="src/Components/Assets/footerlogo.png" alt="" />
            <p className="text-3xl font-medium">YOUR STORE</p>
        </div>
        <ul className="py-5 flex justify-center gap-5 ">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
        <hr className="w-[85%] m-auto"/>
        <p className="text-[#434343] pt-3">copyright @ 2024 - All right reserved</p>
    </div>
  )
}

export default Footer