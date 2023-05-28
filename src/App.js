import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes'
import './App.css'

function App() {
  return (
    <div className='app mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
