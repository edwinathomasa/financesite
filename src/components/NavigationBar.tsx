import Link from './atom/Link'
import './NavigationBar.css'
import aalexImage from '../assets/AAlex.png'

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <img src={aalexImage} alt="AAlex" className="nav-logo" />
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/accounting" className="nav-link">Accounting</Link>
        <Link to="/resources" className="nav-link">Resources</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>
    </nav>
  )
}

export default NavigationBar