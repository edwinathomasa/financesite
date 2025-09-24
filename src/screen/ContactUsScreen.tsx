import MainViewLayout from '../components/view/MainViewLayout'
import { COMPANY_DATA, CONTACT_CONTENT } from '../data/CompanyData'
import './styling/ContactUsScreen.css'

function ContactUsScreen() {
  return (
    <MainViewLayout>
      <div className="contact-container">
        <h1>{CONTACT_CONTENT.title}</h1>
        <p>{CONTACT_CONTENT.description}</p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <span className="contact-value">{COMPANY_DATA.contact.email}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <span className="contact-value">{COMPANY_DATA.contact.phone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Address:</span>
            <span className="contact-value">{COMPANY_DATA.contact.address}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">CIN:</span>
            <span className="contact-value">{COMPANY_DATA.cin}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">GST:</span>
            <span className="contact-value">{COMPANY_DATA.gstNumber}</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Registered Office:</span>
            <span className="contact-value">{COMPANY_DATA.registeredOffice}</span>
          </div>
        </div>
      </div>
    </MainViewLayout>
  )
}

export default ContactUsScreen