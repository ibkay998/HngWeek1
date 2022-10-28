import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './components/ProfileSection/Profile'
import Links from './components/LinksSection/Links'
import Footer from './components/Footer/Footer'

function App() {
  const slackName = "ibkay998"

  return (
    <div className="App">
      <div className="container">
        <Profile slackName={slackName}/>
        <Links slackName={slackName}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
