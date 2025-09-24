import Link from './atom/Link'
import './Footer.css'
import { COMPANY_DATA } from '../data/CompanyData'

function Footer() {
  return (
    <footer className="main-view-footer">
      <div className="footer-content">
        <div className="footer-company-info">
          <p>{COMPANY_DATA.name}</p>
          <p>CIN: {COMPANY_DATA.cin}</p>
          <p>Registered Office: {COMPANY_DATA.registeredOffice}</p>
          <p>GST No: {COMPANY_DATA.gstNumber}</p>
        </div>
        <div className="footer-links">
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {COMPANY_DATA.year} {COMPANY_DATA.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer