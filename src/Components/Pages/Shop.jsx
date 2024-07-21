import Hero from "../Hero/Hero"
import Popular from "../Popular/Popular"
import Offers from "../Offers/Offers"
import NewCollection from "../NewCollection/NewCollection"
import NewEmail from "../NewEmail/NewEmail"
function Shop() {
  return (
    <>

    <Hero/>
    <div className="w-[85%] m-auto">
    <Popular/>
    <Offers/>
    <NewCollection/>
    <NewEmail/>

    </div>
    
    </>
  )
}

export default Shop