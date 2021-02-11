import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768  && isOpen) {
        setIsOpen(false);
        console.log('resize in here')
      }
    }
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });

  return (
    <>
     <Navbar toggle={toggle} />
     <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </Switch>
     <Footer />
    </>
  );
}

export default App;
