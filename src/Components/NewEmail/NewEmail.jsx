
function NewEmail() {
  return (
    <div className="bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] text-center py-20">
        <h2 className="font-semibold lg:text-5xl text-2xl py-12">Get Execlusive Offers On Your Email</h2>
        <form className="w-3/4 m-auto">
            <input type="email" placeholder="Your Email" className="outline-none bg-transparent w-80"/>
            <button  className="bg-[#ba3331] rounded-full mt-5 text-white py-2 px-20">Subscribe</button>
        </form>

</div>
  )
}

export default NewEmail