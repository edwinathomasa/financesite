import MainViewLayout from '../components/view/MainViewLayout'
import { COMPANY_DATA, SERVICES_CONTENT } from '../data/CompanyData'
import './styling/ServicesScreen.css'

function ServicesScreen() {
  return (
    <MainViewLayout>
      <div className="services-container">
        <h1>{SERVICES_CONTENT.title}</h1>
        <p>{SERVICES_CONTENT.description}</p>

        <div className="services-list">
          {COMPANY_DATA.services.map((service, index) => (
            <div key={index} className="service-item">
              <h3 className="service-title">{service}</h3>
              <p className="service-description">Professional {service.toLowerCase()} services tailored to your business needs.</p>
            </div>
          ))}
        </div>
      </div>
    </MainViewLayout>
  )
}

export default ServicesScreen