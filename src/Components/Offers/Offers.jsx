function Offers() {
  return (
    <div className="bg-gradient-to-b from-[#f7d5f9] to-[#e1ffea22] flex justify-between items-center">
        <div className="px-20 py-10">
            <p className="lg:text-5xl text-xl font-semibold ">Exclusive  
                <br className="lg:block hidden"/> Offers For You</p>
                <button className="bg-[#ba3331] rounded-full mt-3 text-white py-3 px-10"> Check Now</button>

        </div>
        <div>
            <img src="/src/Components/Assets/offers.png" alt="" className="h-42"/>
        </div>
    </div>
  )
}

export default Offers