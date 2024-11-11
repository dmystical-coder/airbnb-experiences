import Logo from '../assets/airbnb.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="AirBnB logo" className="navbar__logo" />
        </nav>
    )
}

export default Navbar;