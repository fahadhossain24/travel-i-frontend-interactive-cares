import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/router'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <main>
      <Toaster/>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
