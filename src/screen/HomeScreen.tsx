import MainViewLayout from '../components/view/MainViewLayout'
import MovingImages from '../components/MovingImages'
import LinkButton from '../components/atom/LinkButton'
import { HOME_CONTENT } from '../data/CompanyData'
import './styling/HomeScreen.css'
import nycImage from '../assets/homeAssets/nyc.jpg'
import mumbaiImage from '../assets/homeAssets/mumbai.jpg'
import kochiImage from '../assets/homeAssets/kochi.jpg'

function HomeScreen() {
  const homeImages = [
    nycImage,
    mumbaiImage,
    kochiImage,
  ]

  const homeTexts = [
    'Professional Accounting Services in New York',
    'Expert Financial Solutions in Mumbai',
    'Trusted Business Consulting in Kochi',
  ]

  return (
    <MainViewLayout>
      <MovingImages images={homeImages} texts={homeTexts} speed={2000} />
      <div className="home-content">
        <h1>{HOME_CONTENT.title}</h1>
        {HOME_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="home-button-container">
          <LinkButton to="/services" variant="primary" size="lg">
            Services
          </LinkButton>
        </div>
      </div>
    </MainViewLayout>
  )
}

export default HomeScreen