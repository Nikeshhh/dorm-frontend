import LoginPage from "./pages/LoginPage"
import LaundryPage from "./pages/LaundryPage"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import { AuthRedirect, PrivateRoute } from "./services/LoginCheckService"
import RoomBookPage from "./pages/RoomBookPage"
import RoomBookStaffPage from "./pages/RoomBookStaffPage"
import AllDutiesPage from "./pages/AllDutiesPage"
import MyDutiesPage from "./pages/MyDutiesPage"
import DutiesToSwapPage from "./pages/DutiesToSwapPage"


function App() {
  return (
    <>
    <Routes>
      <Route element={<AuthRedirect />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/laundry" element={<LaundryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/book" element={<RoomBookPage />} />
        <Route path="/book_create" element={<RoomBookStaffPage />} />
        <Route path="/all_duties" element={<AllDutiesPage />} />
        <Route path="/my_duties" element={<MyDutiesPage />} />
        <Route path="/swap_duties/:duty_pk" element={<DutiesToSwapPage />} />
        <Route path="/test" element={<AllDutiesPage />} />
      </Route>
    </Routes>
    </>

  )
}

export default App
