import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NavModal from "./components/NavModal"

function Nav() {
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()
    function logout(event) {
        localStorage.clear()
        navigate("/login")
    }
    function toggleNav(event) {
        setShowNav(prev => !prev)
    }
    return (
        <>
            <nav>
                <ul>
                    <li><a className="secondary" onClick={toggleNav}>Open Nav</a></li>
                </ul>
                <ul>
                    <li><strong>DjangoGym</strong></li>
                </ul>
                <ul>
                    <li><a className="secondary" onClick={logout}>Logout</a></li>
                </ul>
            </nav>
            {showNav && <NavModal toggleNav={toggleNav}></NavModal>}
        </>
    )
}

export default Nav