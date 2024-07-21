
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Footer from './Components/Footer/Footer'

import men from "./Components/Assets/banner_men.png";
import women from "./Components/Assets/banner_woman.png";
import kids from "./Components/Assets/banner_kids.png";
import SignUp from './Components/Pages/SignUp';



function App() {

  return (
     <>
   <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/men" element={<ShopCategory category="men" banner={men}/>} />
      <Route path="/women" element={<ShopCategory category="women" banner={women}/>} />
      <Route path="/kids" element={<ShopCategory category="kids" banner={kids}/>} />
      <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/login" element={<LoginSignUp />} />
      <Route path="/signUp" element={<SignUp />} /> 
    </Routes>
    <Footer/>

    </BrowserRouter> 
     </>
  )
}

export default App
