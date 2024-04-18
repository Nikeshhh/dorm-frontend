import LoginPage from "./pages/LoginPage"
import LaundryPage from "./pages/LaundryPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "laundry/",
    element: <LaundryPage />
  }
])


function App() {

  return (
    <div className="content-center h-screen w-screen">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
