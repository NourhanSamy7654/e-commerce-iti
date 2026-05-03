import { Route, Routes } from 'react-router-dom'

import { lazy, Suspense } from 'react'
import Loader from '../component/loader'

const ProductList = lazy(() => import('../pages/productlist'))
const ProductDetails = lazy(() => import('../pages/productDetails'))
const About = lazy(() => import('../pages/about'))
const NotFound = lazy(() => import('../pages/notfound'))
const Pagination = lazy(() => import('../pages/pagination'))
const Register = lazy(() => import('../pages/register'))
const Login = lazy(() => import('../pages/login'))
const Cart = lazy(() => import('../pages/cart'))
// const Hero=lazy(()=> import('../pages/hero'))

function RoutesList(){
    return (
        <Suspense fallback={<Loader/>} >
              <Routes>
            <Route path='/' element={<ProductList/>}/>
            {/* <Route path='' element={ <Hero/>}/> */}
            <Route path='/product-details/:id' element={<ProductDetails/>}/>
            <Route path='/pagination' element={<Pagination/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Suspense>   )
}
export default RoutesList;