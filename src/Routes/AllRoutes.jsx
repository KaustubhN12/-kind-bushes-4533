import {Route,Routes} from 'react-router-dom';
import Home from '../pages/home';
import SingleProduct from '../pages/singleProd';
// import Login from '../Pages/Login';
// import About from '../Pages/About';
// import Products from '../Pages/products';
// import Home from '../Pages/Home';
// import Contact from '../Pages/Contact'
// import SingleProduct from '../Pages/SinglePoduct';
// import NotFound from '../Pages/NotFound'

import MensSection from '../pages/MensSection';
import Cart from '../pages/cart';
import SignIn from '../pages/signIn';
import Register from '../pages/Register';
import Checkout from '../pages/Ckeckout';


const AllRoutes = () => {
    return (
        <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/menssection' element = {<MensSection/>}/>
            <Route path='/mensproduct/:prod_id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
  
        </div>
    )
}

export {AllRoutes}