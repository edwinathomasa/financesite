import MainViewLayout from '../components/view/MainViewLayout'
import { COMPANY_DATA, SERVICES_CONTENT } from '../data/CompanyData'

function ServicesScreen() {
  return (
    <MainViewLayout>
      <div style={{ padding: '40px 20px', textAlign: 'left', maxWidth: '800px' }}>
        <h1>{SERVICES_CONTENT.title}</h1>
        <p>{SERVICES_CONTENT.description}</p>

        <div style={{ marginTop: '30px' }}>
          {COMPANY_DATA.services.map((service, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>{service}</h3>
              <p style={{ margin: '0', color: 'var(--color-gray)' }}>Professional {service.toLowerCase()} services tailored to your business needs.</p>
            </div>
          ))}
        </div>
      </div>
    </MainViewLayout>
  )
}

export default ServicesScreen