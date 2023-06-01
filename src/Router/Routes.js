import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Pages/shared/home/Home'
import Services from '../Pages/sevices/Services'
import Login from '../Pages/login/Login'
import Register from '../Pages/login/Register'
import CheakOut from './../Pages/cheakout/CheakOut'
import Orders from '../Pages/orders/Orders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/service',
        element: <Services></Services>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Register></Register>,
      },
      {
        path: '/cheakout/:id',
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/service/${params.id}`)
        },
        element: <CheakOut></CheakOut>,
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
      },
    ],
  },
])
export default router
