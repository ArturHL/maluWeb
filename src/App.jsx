import './App.css'
import Footer from './components/footer'
import Navbar from './components/nav'
import Home from './pages/home'
import MenuPage from './pages/menu'
import EventPage from './pages/events'
import ContactPage from './pages/contact'
import CategoriesPage from './pages/categories'

function App() { 
  window.addEventListener('load', () => {
  if (window.location.pathname !== '/home' && window.location.pathname !== '/menu' && window.location.pathname !== '/eventos' && window.location.pathname !== '/contactanos' && window.location.pathname !== '/categorias') {
    window.location.href = '/home';
  }});
  return (
    <>
      <Navbar/>
      { location.pathname === '/home' ? <Home/> : null}
      { location.pathname === '/menu' ? <MenuPage/> : null}
      { location.pathname === '/eventos' ? <EventPage/> : null}
      { location.pathname === '/contactanos' ? <ContactPage/> : null}
      { location.pathname === '/categorias' ? <CategoriesPage/> : null}
      <Footer/>
    </>
  )
}

export default App
