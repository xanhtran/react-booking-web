import './navbar.scss'
import Logo from '@assets/travel-agency-book-your-travel-logo.png';
// import Logo from '../../assets/travel-agency-book-your-travel-logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-container'>
         
          <div className="logo" style={{ backgroundImage: `url(${Logo})` }}></div>
          {/* <span className='logo'> Green Booking</span> */}
         
          <div className="nav-items">
            <button className="nav-btn">
              Register
            </button>
            <button className="nav-btn">
              Login
            </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar