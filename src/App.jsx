import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const slackName = 'ibkay998';
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home slackName={slackName} />} />
        <Route path="contact" element={<Contact name={slackName}/>} />
      </Routes>
    </div>
  )
}

export default App
