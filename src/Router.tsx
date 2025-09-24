import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen'
import AboutScreen from './screen/AboutScreen'
import ServicesScreen from './screen/ServicesScreen'
import AccountingScreen from './screen/AccountingScreen'
import ResourcesScreen from './screen/ResourcesScreen'
import ContactUsScreen from './screen/ContactUsScreen'

function AppRouter() {
  const basename = !import.meta.env.VERCEL && !import.meta.env.VERCEL_ENV ? '/financesite' : ''

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/accounting" element={<AccountingScreen />} />
        <Route path="/resources" element={<ResourcesScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
      </Routes>
    </Router>
  )
}

export default AppRouter