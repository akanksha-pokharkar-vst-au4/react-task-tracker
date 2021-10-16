import { Link } from "react-router-dom"
import { useLocation } from "react-router"

const Footer = () => {
    const location = useLocation()
    return (
        <footer>
             {location.pathname === '/' && <Link to='/about'>About</Link>}
            <p className='copyrights'>Copyright &copy; @2021</p>
           
        </footer>
    )
}

export default Footer
