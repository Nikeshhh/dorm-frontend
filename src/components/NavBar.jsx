import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


const NavBar = () => {
  const locate = useLocation()
  const [value, setValue] = useState(locate.pathname);
  const navigate = useNavigate()
  return (
    <>
      <BottomNavigation
        className="fixed inset-x-0 bottom-0 w-full"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue)
        }}
        style={{
          height: "10vh"
        }}
      >
        <BottomNavigationAction value="/home" className="px-0" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction value="/laundry" className="px-0" label="Laundry" icon={<LocalLaundryServiceIcon />} />
        <BottomNavigationAction value="/book" className="px-0" label="Book" icon={<BookIcon />} />
        <BottomNavigationAction value="/profile" className="px-0" label="Profile" icon={<AccountBoxIcon />} />
      </BottomNavigation>
    </>
  )
}

export default NavBar