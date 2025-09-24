import NavigationBar from '../NavigationBar'
import Footer from '../Footer'
import './MainViewLayout.css'

interface MainViewLayoutProps {
  children: React.ReactNode
}

function MainViewLayout({ children }: MainViewLayoutProps) {
  return (
    <div className="main-view-layout">
      <NavigationBar />
      <main className="main-view-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainViewLayout