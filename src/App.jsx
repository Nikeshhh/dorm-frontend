import LoginPage from "./pages/LoginPage"
import LaundryPage from "./pages/LaundryPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"
import { useState } from "react"
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
  const [value, setValue] = useState(0);


  return (
    <>
      <div
        className="h-screen w-screen overflow-scroll"
        style={{
          height: "90vh"
        }}
      >
        {/* <div className="overflow-scroll"> */}
        <RouterProvider router={router} />
        {/* </div> */}
      </div>
      <BottomNavigation
        className="fixed inset-x-0 bottom-0 w-full"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          height: "10vh"
        }}
      >
        <BottomNavigationAction className="px-0" label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction className="px-0" label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction className="px-0" label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>

  )
}

export default App
