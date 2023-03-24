//import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Beer from './Pages/Beer/Beer'
import News from './Pages/News/News'
import Visits from './Pages/Visits/Visits'
import Workshop from './Pages/Workshop/Workshop'
import Gallery from './Pages/Gallery/Gallery'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/beer" element={<Beer />} />
                <Route path="/news" element={<News />} />
                <Route path="/visits" element={<Visits />} />
                <Route path="/workshop" element={<Workshop />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App
