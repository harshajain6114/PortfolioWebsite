import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Education/>
            <Services/>
           
            <Projects/>
            <Contact />
        </div>
    );
};

export default App;
