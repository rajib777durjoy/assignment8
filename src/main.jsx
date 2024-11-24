import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import Statistics from './Component/Statistics';
import ProductCard from './Component/pages/ProductCard';
import Details from './Component/pages/Details';
import CardShow from './Component/pages/CardShow';
import WishCart from './Component/pages/WishCart';
import Errorpage from './Component/ErrorPage/Errorpage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Macbook from './Component/pages/Macbook';
import Delivary from './Component/pages/Delivary';

const router = createBrowserRouter([
{
  path:'/',
  element:<App></App>,
  errorElement:<Errorpage></Errorpage>,
  children:[
  
    {
      path:"/",
      loader:()=>fetch('../category.json'),
      element:<Home></Home>,
      children:[
        {
          path:'/',
          element:<ProductCard></ProductCard>,
          loader:()=>fetch('../Product.json')
        },
        {
          path:'/category/:category',
          element:<ProductCard></ProductCard>,
          loader:()=>fetch('../Product.json')
        },
        {
          path:'/category/MacBook',
          element:<Macbook></Macbook>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'card',
          index:true,
          element:<CardShow></CardShow>,
          loader:()=>fetch("../Product.json"),
        },
        {
          path:'wishlist',
          element:<WishCart></WishCart>,
          loader:()=>fetch("../Product.json")
        }
      ]
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'/details/:ids',
      element:<Details></Details>,
      loader:()=>fetch('../Product.json')
    },
    {
      path:'/delivery',
      element:<Delivary></Delivary>
    }
   
  ]
}
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
  </StrictMode>,
)
