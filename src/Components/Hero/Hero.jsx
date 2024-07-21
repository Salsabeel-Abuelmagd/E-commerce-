function Hero() {
  return (
    <>
    <div className="bg-[#fcecff] py-24 px-24">
    <div className=" flex justify-between">
        <div className="flex flex-col justify-center ">
        <div className="flex justify-center items-center font-semibold text-5xl font-mono text-[#2d2c2c]">
            <p>New Collection<br/>
            For You</p>
        </div>
        <button className="bg-[#ba3331] rounded-full w-1/2 mt-5 text-white py-3">New Collection</button>
        </div>
     
        <img src="/src/Components/Assets/pwa.png" alt="" className=""/>
    </div>
    </div>
    </>
  )
}

export default Hero