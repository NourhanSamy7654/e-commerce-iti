import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './component/layout/footer'
import Navbar from './component/layout/navbar'

import RoutesList from './Routes/RouteList'
import { LanguageProvider } from './context/langauge'


function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesList />
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App