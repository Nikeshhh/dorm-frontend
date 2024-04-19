import LoginPage from "./pages/LoginPage"
import LaundryPage from "./pages/LaundryPage"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import { AuthRedirect, PrivateRoute } from "./services/LoginCheckService"


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
      </Route>
    </Routes>
    </>

  )
}

export default App
