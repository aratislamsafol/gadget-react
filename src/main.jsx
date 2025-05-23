import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router";
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';
import ProductDetails from './componenets/ProductDetails/ProductDetails';
import Loader from './componenets/utlis/Loader';
import DashBoard from './componenets/DashBoard/DashBoard';
import Card from './componenets/utlis/Card';
import Cart from './componenets/Cart/Cart';
import Wishlist from './componenets/WishList/Wishlist';
import Statisctics from './componenets/Statistics/Statisctics';

const router = createBrowserRouter([
  {
    path: '/', element: <Root/>,
    loader: Loader('/product_dataset.json'),
    children: [
      {
        path:'/', element:<Home />,
        loader: Loader('/product_dataset.json')
      },
      {
        path:'productdetails/:id', element: <ProductDetails/>,
        loader: Loader('/product_dataset.json')
      }, 
      {
        path: 'dashboard', element: <DashBoard/>,
        loader: Loader('/product_dataset.json')
      },
      {
        path: 'dashboard/cart', element: <Cart />,
        loader: Loader('/product_dataset.json')
      }, 
      {
        path: 'dashboard/wishlist', element: <Wishlist />,
        loader: Loader('/product_dataset.json')
      }, 
      {
        path: 'statistics', element: <Statisctics />,
        loader: Loader('/product_dataset.json')
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
