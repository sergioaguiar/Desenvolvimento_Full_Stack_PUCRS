import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li><Link to="/services">Serviços</Link></li>
                        <li><Link to="/">Sobre nós</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<About />} exact />
                    <Route path="/services" element={<Services />} />
                </Routes>
                <Contact />
            </div>
        </Router>
    );
}

export default App;
