import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import OfficeMembersPages from './components/OfficeMembersPage'
import MembershipPage from './components/MembershipPage'
import DonationPage from './components/DonationPage'
import ContactPage from './components/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div 
      style={{ 
        fontFamily: 'Comic Neue',
        fontWeight: 500 
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/les-membres-du-bureau' element={ <OfficeMembersPages /> } />
          <Route path='/membership' element={ <MembershipPage /> } />
          <Route path='/donation' element={ <DonationPage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
