function Hero() {
  return (
    <>
    <div className="bg-[#fcecff] py-24 lg:px-24 px-5 overflow-hidden">
    <div className=" flex justify-between gap-10">
        <div className="flex flex-col justify-center ">
        <div className="flex justify-center items-center font-semibold lg:text-5xl py-2 font-mono text-[#2d2c2c]">
            <p>New Collection <br className="hidden lg:block"/>
             For You</p>
        </div>
        <button className="bg-[#ba3331] rounded-full lg:w-1/2 lg:mt-5   text-white py-3">New Collection</button>
        </div>
     
        <img src="/src/Components/Assets/pwa.png" alt="" className="w-32 h-32 lg:w-[200px] lg:h-[200px]"/>
    </div>
    </div>
    </>
  )
}

export default Hero