import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Pages/shared/home/Home'
import Services from '../Pages/sevices/Services'
import Login from '../Pages/login/Login'

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
    ],
  },
])
export default router
