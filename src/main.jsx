import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router";
import Root from './componenets/Root/Root';
import Home from './componenets/Home/Home';

const router = createBrowserRouter([
  {
    path: '/', element: <Root/>,
    children: [
      {
        path:'/', element:<Home />
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
