import MainViewLayout from '../components/view/MainViewLayout'
import MovingImages from '../components/MovingImages'
import LinkButton from '../components/atom/LinkButton'
import { HOME_CONTENT } from '../data/CompanyData'

function HomeScreen() {
  const homeImages = [
    '/src/assets/homeAssets/nyc.jpg',
    '/src/assets/homeAssets/mumbai.jpg',
    '/src/assets/homeAssets/kochi.jpg',
  ]

  const homeTexts = [
    'Professional Accounting Services in New York',
    'Expert Financial Solutions in Mumbai',
    'Trusted Business Consulting in Kochi',
  ]

  return (
    <MainViewLayout>
      <MovingImages images={homeImages} texts={homeTexts} speed={2000} />
      <div style={{ padding: '40px 20px', textAlign: 'justify', maxWidth: '800px' }}>
        <h1>{HOME_CONTENT.title}</h1>
        {HOME_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div style={{ marginTop: '30px' }}>
          <LinkButton to="/services" variant="primary" size="lg">
            Services
          </LinkButton>
        </div>
      </div>
    </MainViewLayout>
  )
}

export default HomeScreen