import MainViewLayout from '../components/view/MainViewLayout'
import MovingImages from '../components/MovingImages'

function HomeScreen() {
  const homeImages = [
    '/src/assets/homeAssets/nyc.jpg',
    '/src/assets/homeAssets/mumbai.jpg',
    '/src/assets/homeAssets/kochi.jpg',
  ]

  return (
    <MainViewLayout>
      <MovingImages images={homeImages} speed={2000} />
      <h1>Home Screen</h1>
      <p>Welcome to the finance site!</p>
    </MainViewLayout>
  )
}

export default HomeScreen