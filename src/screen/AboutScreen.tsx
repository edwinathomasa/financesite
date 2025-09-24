import MainViewLayout from '../components/view/MainViewLayout'
import { ABOUT_CONTENT } from '../data/CompanyData'

function AboutScreen() {
  return (
    <MainViewLayout>
      <div style={{ padding: '40px 20px', textAlign: 'justify', maxWidth: '800px' }}>
        <h1>{ABOUT_CONTENT.title}</h1>
        <p>{ABOUT_CONTENT.description}</p>
      </div>
    </MainViewLayout>
  )
}

export default AboutScreen