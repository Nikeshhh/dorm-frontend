import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"


export const LogOut = () => {
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['sessionid', 'csrftoken'])

    removeCookie('sessionid')
    removeCookie('csrftoken')
    navigate('/login')
}