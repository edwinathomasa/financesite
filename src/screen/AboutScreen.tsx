import MainViewLayout from '../components/view/MainViewLayout'
import { ABOUT_CONTENT } from '../data/CompanyData'
import './styling/AboutScreen.css'

function AboutScreen() {
  return (
    <MainViewLayout>
      <div className="about-container">
        <h1>{ABOUT_CONTENT.title}</h1>
        <p>{ABOUT_CONTENT.description}</p>
      </div>
    </MainViewLayout>
  )
}

export default AboutScreen